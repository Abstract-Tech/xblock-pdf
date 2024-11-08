/* Javascript for pdfXBlock. */
function pdfXBlockInitView(runtime, element) {
    /* Weird behaviour :
     * In the LMS, element is the DOM container.
     * In the CMS, element is the jQuery object associated*
     * So here I make sure element is the jQuery object */
    if (element.innerHTML) {
        element = $(element);
    }
    var studentMode = $('.in-video-quiz-block').data('mode') !== 'staff';


    $(function () {
        element.find('.pdf-download-button').on('click', function () {
            var handlerUrl = runtime.handlerUrl(element, 'on_download');
            $.post(handlerUrl, '{}');
        });
        /*
        completionUrl =  $('.pdf_block').data('completion');
        console.log("mode is",studentMode)
        console.log("completionurl ",completionUrl)
        if(studentMode){
        setTimeout(() => {
            $.ajax({
                type: 'POST',
                url: completionUrl,
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                  completion: 1.0
                }),
            }
        )
        }, 5000);
    }
       */

    });


}
