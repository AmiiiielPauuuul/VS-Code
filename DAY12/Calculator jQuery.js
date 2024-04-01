
    function addToDisplay(value) {
        $('#display').val($('#display').val() + value);
    }

    function clearDisplay() {
        $('#display').val('');
    }

    function calculate() {
        try {
            $('#display').val(eval($('#display').val()));
        } catch (error) {
            $('#display').val('Error/Invalid Operator');
        }
    }

    function backspace() {
        var currentValue = $('#display').val();
        $('#display').val(currentValue.substring(0, currentValue.length - 1));
    }