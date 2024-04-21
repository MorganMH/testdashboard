/*const button_redirect = document.getElementById("button_redirect");
button_redirect.addEventListener("click", (e) => {
window.location.href = "login.html";

})

*/
 document.querySelectorAll('button_redirect').forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function() {
      location.reload();
        window.location.href = "loading.html";
    } );
  });