function generateCode() {

	// Get input from user	var input = document.getElementById("input").value;

	// Generate code based on input

	var output = "var code = '" + input + "';\n";

	output += "document.write(code);";

	// Write generated code to output box

	document.getElementById("output").value = output;

}
