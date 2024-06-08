const url = ScriptApp.getService().getUrl()

function doGet(e) {
    return renderHTMLFile("Index")
}

function include(fileName) {
    return HtmlService.createTemplateFromFile(fileName).evaluate().getContent()
}

function renderHTMLFile(fileName, argsObject = null) {
    var template = HtmlService.createTemplateFromFile(fileName)
    if (argsObject) {
        Object.keys(argsObject).forEach((key) => (template[key] = argsObject[key]))
    }
    return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function getUrl() {
    return url
}
