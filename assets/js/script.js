function showSection(section) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (sec) {
        sec.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}



// Hidden Data 

document.getElementById("show-more-btn").addEventListener("click", function () {

    const hiddenContent = document.querySelectorAll(".hidden-content");
    hiddenContent.forEach(function (element) {
        element.style.display = "block";
    });
    this.style.display = "none";
});


document.getElementById('show-more-apartments').addEventListener('click', function () {
    let hiddenContent = document.querySelectorAll('.hidden-content_1');
    hiddenContent.forEach(function (element) {
        element.style.display = 'block';
    });
    this.style.display = 'none';
});


document.getElementById('show-more-houses').addEventListener('click', function () {
    let hiddenContent = document.querySelectorAll('.hidden-content_2');
    hiddenContent.forEach(function (element) {
        element.style.display = 'block';
    });
    this.style.display = 'none';
});

<<<<<<< HEAD
=======


>>>>>>> a9624572c3de5a3be72495a1c82aaf5521606b2b

