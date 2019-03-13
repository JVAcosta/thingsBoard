//pt-br
const widgetData = widgetContext.defaultSubscription.data; //objeto data extraido do contexto do widget
//var dataList = self.ctx.defaultSubscription.data
const labelList = [];
const dataList = [];
//checar se nos nomes existe virgulas
for (i = 0; i < dataList.length; i++) {
  let label = widgetData.dataKey.label;
  let data = widgetData.data;
  let response = {};
  data.forEach(element => {
    response[element[0]] = [element[1]];
  });
  labelList.push(label);
  dataList.push(response);
}

filename = 'ThingsBoardTimeSeriesCSV'; // Nome do arquivo CSV para download

var r = JSON.stringify(dataList);
function DownloadCSV(csvString, fileName) {
  //thanks to https://stackoverflow.com/a/24922761
  var blob = new Blob([csvString], {
    type: 'text/csv;charset=utf-8',
  });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement('a');
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
DownloadCSV(r, filename);
