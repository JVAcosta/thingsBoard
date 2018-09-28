var dataList = widgetContext.defaultSubscription.data
//var dataList = self.ctx.defaultSubscription.data
var i;
var lineNames = []
var indexForCSV = []
var listForCSV = []

for (i = 0; i < dataList.length; i++) {
    var lineObject = dataList[i]
    var lineData = lineObject.data
    var lineName = String(lineObject.dataKey.label)
    lineNames.push(lineName)

    for (x = 0; x < lineData.length; x++) {
        var Ilist = lineData[x]

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
    //console.log(indexForCSV)
}
var csvContent = ""
csvContent += "TimeStamp," + lineNames.join(",") + "\n"
for (z = 0; z < indexForCSV.length; z++) {
    key = indexForCSV[z]
    csvContent += String(key) + "," + listForCSV[key].join(",") + "\n"
}
filename = "testFile"

function DownloadCSV(csvString, fileName) {
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