const widgetData = widgetContext.defaultSubscription.data;
var head = [];
var content = [];
var i;
for (i = 0; i < dataList.length; i++) {
  var label = dataList[i].dataKey.label;
  var pre = 'last_';
  var name = pre + label;
  var nameT = name + '_timeStamp';
  head.push(nameT);
  head.push(name);
  var data = dataList[i]['data'][0];
  content.push(data[0]);
  content.push(data[1]);
}
head = head.join(',') + '\n';
content = content.join(',') + '\n';
var csvContent = head + content;
var filename = 'ThingsBoardTimeSeriesCSV'; // Nome do arquivo CSV para download

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
DownloadCSV(csvContent, filename);
