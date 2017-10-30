function clean_input(str) {
	var cleaned = str;
	cleaned = cleaned.replace(/"/g, "");
	cleaned = cleaned.replace(/'/g, "");

	return cleaned;
}

function doMath() {
	var num_1 = null;
	var num_2 = null;
	var operation = $('#operation').val();
	var base = parseInt($('#base').val());

	$('#result').val('');

	if (!$('#operand_one').val()) {
		$("<p class='warning'>Ensure operand one is populated.</>").insertBefore('.operands');
		$('#result').text('');
	} else if (operation !== 'sqrt' && !$('#operand_two').val()) {
		$("<p class='warning'>Ensure both operand fields are populated.</>").insertBefore('.operands');
		$('#result').text('');
	} else {
		$('.warning').remove();
		if (base === 10) {
			num_1 = parseInt($('#operand_one').val());
			num_2 = parseInt($('#operand_two').val());
		} else {
			num_1 = clean_input($('#operand_one').val());
			num_2 = clean_input($('#operand_two').val());
		}

		$('#result').text(seng560[operation](num_1, num_2, base));
	}
}

function reset() {
	$('#operand_one').val('');
	$('#operand_two').val('');
	$('#result').text('');
	$('#operation').val('add');
	$('#base').val(10);
	$("label[for = operand_one]").text("Operand 1");
	$("label[for = operand_two]").show();
	$('#operand_two').show();
}

$('#operation').change(function() {

	if (this.value === 'sqrt') {
		$("label[for = operand_one]").text("Radicand");
		$("label[for = operand_two]").hide();
		$('#operand_two').hide();
	} else {
		$("label[for = operand_one]").text("Operand 1");
		$("label[for = operand_two]").show();
		$('#operand_two').show();
	}
});