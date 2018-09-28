# thingsBoard Action Custom
o código apresentado foi utilizado para extrair os dados de um tipo específico de widget(TimeSeries) , com o objetivo de realizar o download de um arquivo em formato CSV contendo os dados do widget. Dependendo do tipo do widget, os dados podem estar organizados de modo diferente dentro do objeto principal extraído do contexto do widget, esse objeto contém os dados e metadados do  widget.
Alterações podem ser necessárias dependendo do objetivo desejado, o código utilizado para esse objetivo está dispónivel em :
https://github.com/JVAcosta/thingsBoard/blob/master/customActionCode.js
	Além  de javascript, a documentação utilizada para realização do objetivo foi:
	https://thingsboard.io/docs/user-guide/contribution/widgets-development/
	O foco está no entendimento do contexto do widget “ctx”, e no “Subscription object” que pode ser acessado através do contexto da aplicação.


the displayed code was used to extract the data from a specific type of widget(TimeSeries), in order to download a CSV file containing the widget data. Depending on the type of the widget, the data may be organized differently within the main object extracted from the widget context, this object contains the data and widget metadata.
Changes may be required depending on the desired goal, the code used for this purpose is available at:
https://github.com/JVAcosta/thingsBoard/blob/master/customActionCode.js
In addition to javascript, the documentation used to accomplish the goal was:
https://thingsboard.io/docs/user-guide/contribution/widgets-development/
The focus is on understanding the context of the "ctx" widget, and on the "Subscription object" that can be accessed through the application context.
