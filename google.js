const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        search();
    }

});

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1CHBF_enIN1023IN1023&oq=" + input + "&aqs=chrome.0.0i355i433i512j46i433i512j0i433i512j46i199i465i512j0i512j0i131i433i512j69i60j69i61.1502j0j7&sourceid=chrome&ie=UTF-8"
}