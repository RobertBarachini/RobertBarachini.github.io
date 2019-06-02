var aThis;

/*function enableSmoothScroll(){

};*/
function enableSmoothScroll(){
    var a = 0;
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        aThis = this;
        console.log("Link click: " + aThis);
        // Make sure this.hash has a value before overriding default behavior
        //if (this.hash !== "" && aThis.getAttribute("href").charAt(0) == "#") { // dodal check za dodatno logiko
        if (this.hash !== "" && aThis.getAttribute("smoothTransition") == "true") {
            console.log("Smooth animation");
            
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
};

var modalImgContainer = null;
var modalImgMain = null;
var modalImgCaption = null;
var contentMain = null;
function enableModalImages()
{
    // Get the modal window and other related components
    modalImgContainer = document.getElementById("modalImgContainer");
    modalImgMain = document.getElementById("modalImgMain");
    modalImgCaption = document.getElementById("modalImgCaption");
    contentMain = document.getElementById("contentMain");

    // modalImgContainer.style.zIndex = 2147483647;

    // Subscribe images with the right class to an onClick event
    var resizableImages = document.getElementsByClassName("imgResizable");
    for (i = 0; i < resizableImages.length; i++) {
        subscribeImgForResizing(resizableImages[i]);
    }

    // Get the <span> element that closes the modal
    var closeModalImgContainer = document.getElementById("closeModalImgContainer");
    // When the user clicks on <span> (x), close the modal
    closeModalImgContainer.onclick = function() { 
        endModalView();
    };
    // Or anything else ...
    modalImgContainer.onclick = function() {
        endModalView();
    };

    // image
    modalImgMain.onclick = function() {
        endModalView();
    };
};

function endModalView(){
    modalImgContainer.style.display = "none";
    contentMain.classList.remove("modalClass-open");
}

function viewSizeChanged()
{

};

function subscribeImgForResizing(img)
{
    img.onclick = function(){
        modalImgContainer.style.display = "block";
        modalImgMain.src = img.src;
        contentMain.classList.add("modalClass-open");
        // modalImgCaption.innerHTML = img.alt;
    };
};

/*function enterImgResiting(img)
{

};*/

function initDocument()
{
    enableSmoothScroll();
    enableModalImages();
};