const widgetData = [
  {
    datasource: {
      type: 'function',
      dataKeys: [
        {
          name: 'f(x)',
          type: 'function',
          label: 'Sin',
          color: '#2196f3',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.36064420692823296,
          funcBody: 'return Math.round(1000*Math.sin(time/5000));',
          pattern: 'Sin',
          hidden: false,
        },
        {
          name: 'f(x)',
          type: 'function',
          label: 'Cos',
          color: '#4caf50',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.7284188848372906,
          funcBody: 'return Math.round(1000*Math.cos(time/5000));',
          pattern: 'Cos',
          hidden: false,
        },
        {
          name: 'f(x)',
          type: 'function',
          label: 'Random',
          color: '#f44336',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.5893180896373087,
          funcBody:
            'var value = prevValue + Math.random() * 100 - 50;\nvar multiplier = Math.pow(10, 2 || 0);\nvar value = Math.round(value * multiplier) / multiplier;\nif (value < -1000) {\n\tvalue = -1000;\n} else if (value > 1000) {\n\tvalue = 1000;\n}\nreturn value;',
          pattern: 'Random',
          hidden: false,
        },
      ],
      entityAliasId: null,
      name: 'teste',
      aliasName: 'teste',
      entityName: 'teste',
      dataReceived: true,
    },
    dataKey: {
      name: 'f(x)',
      type: 'function',
      label: 'Sin',
      color: '#2196f3',
      settings: {
        columnWidth: '0px',
        useCellStyleFunction: false,
        cellStyleFunction: '',
        useCellContentFunction: false,
        cellContentFunction: '',
      },
      _hash: 0.36064420692823296,
      funcBody: 'return Math.round(1000*Math.sin(time/5000));',
      pattern: 'Sin',
      hidden: false,
    },
    data: [[1551525147116, 953]],
  },
  {
    datasource: {
      type: 'function',
      dataKeys: [
        {
          name: 'f(x)',
          type: 'function',
          label: 'Sin',
          color: '#2196f3',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.36064420692823296,
          funcBody: 'return Math.round(1000*Math.sin(time/5000));',
          pattern: 'Sin',
          hidden: false,
        },
        {
          name: 'f(x)',
          type: 'function',
          label: 'Cos',
          color: '#4caf50',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.7284188848372906,
          funcBody: 'return Math.round(1000*Math.cos(time/5000));',
          pattern: 'Cos',
          hidden: false,
        },
        {
          name: 'f(x)',
          type: 'function',
          label: 'Random',
          color: '#f44336',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.5893180896373087,
          funcBody:
            'var value = prevValue + Math.random() * 100 - 50;\nvar multiplier = Math.pow(10, 2 || 0);\nvar value = Math.round(value * multiplier) / multiplier;\nif (value < -1000) {\n\tvalue = -1000;\n} else if (value > 1000) {\n\tvalue = 1000;\n}\nreturn value;',
          pattern: 'Random',
          hidden: false,
        },
      ],
      entityAliasId: null,
      name: 'teste',
      aliasName: 'teste',
      entityName: 'teste',
      dataReceived: true,
    },
    dataKey: {
      name: 'f(x)',
      type: 'function',
      label: 'Cos',
      color: '#4caf50',
      settings: {
        columnWidth: '0px',
        useCellStyleFunction: false,
        cellStyleFunction: '',
        useCellContentFunction: false,
        cellContentFunction: '',
      },
      _hash: 0.7284188848372906,
      funcBody: 'return Math.round(1000*Math.cos(time/5000));',
      pattern: 'Cos',
      hidden: false,
    },
    data: [[1551525147120, -304]],
  },
  {
    datasource: {
      type: 'function',
      dataKeys: [
        {
          name: 'f(x)',
          type: 'function',
          label: 'Sin',
          color: '#2196f3',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.36064420692823296,
          funcBody: 'return Math.round(1000*Math.sin(time/5000));',
          pattern: 'Sin',
          hidden: false,
        },
        {
          name: 'f(x)',
          type: 'function',
          label: 'Cos',
          color: '#4caf50',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.7284188848372906,
          funcBody: 'return Math.round(1000*Math.cos(time/5000));',
          pattern: 'Cos',
          hidden: false,
        },
        {
          name: 'f(x)',
          type: 'function',
          label: 'Random',
          color: '#f44336',
          settings: {
            columnWidth: '0px',
            useCellStyleFunction: false,
            cellStyleFunction: '',
            useCellContentFunction: false,
            cellContentFunction: '',
          },
          _hash: 0.5893180896373087,
          funcBody:
            'var value = prevValue + Math.random() * 100 - 50;\nvar multiplier = Math.pow(10, 2 || 0);\nvar value = Math.round(value * multiplier) / multiplier;\nif (value < -1000) {\n\tvalue = -1000;\n} else if (value > 1000) {\n\tvalue = 1000;\n}\nreturn value;',
          pattern: 'Random',
          hidden: false,
        },
      ],
      entityAliasId: null,
      name: 'teste',
      aliasName: 'teste',
      entityName: 'teste',
      dataReceived: true,
    },
    dataKey: {
      name: 'f(x)',
      type: 'function',
      label: 'Random',
      color: '#f44336',
      settings: {
        columnWidth: '0px',
        useCellStyleFunction: false,
        cellStyleFunction: '',
        useCellContentFunction: false,
        cellContentFunction: '',
      },
      _hash: 0.5893180896373087,
      funcBody:
        'var value = prevValue + Math.random() * 100 - 50;\nvar multiplier = Math.pow(10, 2 || 0);\nvar value = Math.round(value * multiplier) / multiplier;\nif (value < -1000) {\n\tvalue = -1000;\n} else if (value > 1000) {\n\tvalue = 1000;\n}\nreturn value;',
      pattern: 'Random',
      hidden: false,
    },
    data: [[1551525147122, 545.13]],
  },
];
var head = [];
var content = [];

for (i = 0; i < widgetData.length; i++) {
  var label = widgetData[i].dataKey.label;
  var pre = 'last_';
  var name = pre + label;
  var nameT = name + '_timeStamp';
  head.push(nameT);
  head.push(name);
  var data = widgetData[i]['data'][0];
  content.push(data[0]);
  content.push(data[1]);
}
head = head.join(',') + '\n';
content = content.join(',') + '\n';
var csvContent = head + content;
var filename = 'ThingsBoard_EntityTable'; // Nome do arquivo CSV para download

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
