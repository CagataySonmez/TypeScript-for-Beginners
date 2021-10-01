function init(){
    var xmlParser = new XmlParser("file.xml");
    xmlParser.parse();

    var jsonParser = new JsonParser("file.json");
    jsonParser.parse();

    var txtParser = new LegacyParser();
    txtParser.setFile("file.txt");
    var adapter = new LegacyParserAdapter(txtParser);
    adapter.parse();
}