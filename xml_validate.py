import xmlschema
xsd_file = "empschema.xsd"
xml_file= "emp.xml"
validator=xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xsd_file):
    print("The xml is vaild")
else:
    print("Sorry, xml is not well formed or valid")
    print(validator.validate(xml_file))