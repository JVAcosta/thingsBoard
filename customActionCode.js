//pt-br
var dataList = widgetContext.defaultSubscription.data//objeto data extraido do contexto do widget
//var dataList = self.ctx.defaultSubscription.data
var i;
var lineNames = []//lista de Nomes para formatar colunas no cvs
var indexForCSV = []//lista dos index(timeStamps) para formatar linhas no csv
var listForCSV = []// lista dos dados para cada linha para formatar a tabela no csv

//o tipo de widget do exemplo possui "n" objetos referentes a cada linha, e cada obejto
// posui o propio atributo data.

//acessando cada um dos objetos.
for (i = 0; i < dataList.length; i++) {// dataList --> "[obj1,obj2,...,objI]"
    var lineObject = dataList[i] //objeto atual
    var lineData = lineObject.data// dados do objeto; lineData --> "[data1,data2,...,dataX]"
    var lineName = String(lineObject.dataKey.label)//nome do objeto
    lineNames.push(lineName)
	//acessando dados de cada linha
    for (x = 0; x < lineData.length; x++) {
        var Ilist = lineData[x] // Ilist -->"[TimeStampDataX, valueDataX]"
        var index = String(Ilist[0])
        var value = Ilist[1]
        if (!(index in indexForCSV)) {
            indexForCSV.push(index)
        }
        if (listForCSV[index] === undefined) {
            listForCSV[index] = []
        }

        listForCSV[index].push(value)
    }
    //console.log(indexForCSV)// cada index da lista formatada
}	//console.log(listForCSV)// lista formatada para transformar em CSV; listForCSV--> [CVSline1,CSVline2,...,CSVlineN] CSVline-->[value1,value2,...,valueN]

var csvContent = ""
csvContent += "TimeStamp," + lineNames.join(",") + "\n"
for (z = 0; z < indexForCSV.length; z++) {
    key = indexForCSV[z]
    csvContent += String(key) + "," + listForCSV[key].join(",") + "\n"//criando string da linha referente para o CSV
	
}
//console.log(csvContent)//string formatada para CSV

filename = "ThingsBoardTimeSeriesCSV"// Nome do arquivo CSV para download


function DownloadCSV(csvString, fileName) {
	//thanks to https://stackoverflow.com/a/24922761
    var blob = new Blob([csvString], {
        type: 'text/csv;charset=utf-8'
    });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
DownloadCSV(csvContent, filename)
