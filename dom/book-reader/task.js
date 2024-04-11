document.addEventListener("DOMContentLoaded", function() {

    const fontSizeControls = document.querySelectorAll(".font-size");
    fontSizeControls.forEach(control => {
        control.addEventListener('click', changeFontSize);
    });

    const book = document.getElementById("book");
    function changeFontSize(event) {
        event.preventDefault();
        fontSizeControls.forEach(control => control.classList.remove("font-size_active"));
        event.target.classList.add("font-size_active");
        const fontSize = event.target.getAttribute("data-size");
        book.classList.remove("book_fs-small", "book_fs-big");
        if (fontSize === "small") {
            book.classList.add("book_fs-small");
        } else if (fontSize === "big") {
            book.classList.add("book_fs-big");
        }
    }

    var textColorLinks = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');
    var bgColorLinks = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white');

    textColorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var textColor = this.getAttribute('data-text-color');
            document.getElementById('book').classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            document.getElementById('book').classList.add('book_color-' + textColor);
            removeActiveClass(textColorLinks);
            this.classList.add('color_active');
        });
    });

    bgColorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var bgColor = this.getAttribute('data-bg-color');
            document.getElementById('book').classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            document.getElementById('book').classList.add('book_bg-' + bgColor);
            removeActiveClass(bgColorLinks);
            this.classList.add('color_active');
        });
    });

    function removeActiveClass(links) {
        links.forEach(function(link) {
            link.classList.remove('color_active');
        });
    }
});

