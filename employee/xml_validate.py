import xmlschema as xml

XML_SCHEMA = xml.XMLSchema(r"C:\Users\USER\OneDrive\Desktop\Ellam Padikk\MCA CHRIST\Webstack\employee\empschema.xsd")

if XML_SCHEMA.is_valid(r"C:\Users\USER\OneDrive\Desktop\Ellam Padikk\MCA CHRIST\Webstack\employee\emp.xml"):
    print("The xml is vaild")
else:
    print("Sorry, xml is not well formed or valid")