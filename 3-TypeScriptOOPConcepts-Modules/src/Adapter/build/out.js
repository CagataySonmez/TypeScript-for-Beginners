var LegacyParserAdapter = /** @class */ (function () {
    function LegacyParserAdapter(legacyParser) {
        this.legacyParser = legacyParser;
    }
    LegacyParserAdapter.prototype.parse = function () {
        this.legacyParser.parse();
        return true;
    };
    return LegacyParserAdapter;
}());
var XmlParser = /** @class */ (function () {
    function XmlParser(file) {
        this.file = file;
    }
    XmlParser.prototype.parse = function () {
        console.log(this.file + " is parsed by XML Parser");
        return true;
    };
    return XmlParser;
}());
var JsonParser = /** @class */ (function () {
    function JsonParser(file) {
        this.file = file;
    }
    JsonParser.prototype.parse = function () {
        console.log(this.file + " is parsed by Json Parser");
        return true;
    };
    return JsonParser;
}());
var LegacyParser = /** @class */ (function () {
    function LegacyParser() {
    }
    LegacyParser.prototype.setFile = function (file) {
        this.file = file;
    };
    LegacyParser.prototype.parse = function () {
        console.log(this.file + " is parsed by Legacy Parser");
    };
    return LegacyParser;
}());
function init() {
    var xmlParser = new XmlParser("file.xml");
    xmlParser.parse();
    var jsonParser = new JsonParser("file.json");
    jsonParser.parse();
    var txtParser = new LegacyParser();
    txtParser.setFile("file.txt");
    var adapter = new LegacyParserAdapter(txtParser);
    adapter.parse();
}
//# sourceMappingURL=out.js.map