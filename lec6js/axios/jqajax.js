const API_URL = "https://jsonplaceholder.typicode.com/posts&quot;;

$("#addBtn").click(function () {

    const title = $("#titleInput").val().trim();
    const body = $("#bodyInput").val().trim();

    if (!title || !body) return;

    $.ajax({
        url: API_URL,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(
            { title, body, userId: 1 }
        ),
        success: function (data) {
            const card = `
                <div class="card">
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                </div>
            `;
            $("#cardContainer").append(card);
            $("#titleInput").val("");
            $("#bodyInput").val("");
        }
    });


   
});