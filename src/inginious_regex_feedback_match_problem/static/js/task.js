function load_feedback_regex_feedback_match(key, content) {
    load_feedback_code(key, content);
}

function load_input_regex_feedback_match(submissionid, key, input) {
    var field = $(".problem input[name='" + key + "']");
    if(key in input)
        $(field).prop('value', input[key]);
    else
        $(field).prop('value', "");
}
