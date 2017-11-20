$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/svlevytska@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#mail').val(),
            message: $('#message').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('Thank you! Your message has been sent.');
    })
    .fail(function(){
        $('#msg').html('Sorry. There was an error sending the message. Please try again.');
    });
    }

