
// {reference to objects data, object holding parent reference in html, type of action}
function add_sagaref_item(parent, dataSet, type){
    var icon = dataSet.icon || "heart-stake";
    var subtitle = dataSet.subtitle || "ERROR SUB";
    var title = dataSet.title || "ERROR TITLE";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
        '\
        <div class="item-icon iconsize icon-' + icon + '"></div>\
        <div class="item-text-container text">\
            <div class="item-title">' + title + '</div>\
            <div class="item-desc">' + subtitle + '</div>\
        </div>\
        ';


    var style = window.getComputedStyle(parent.parentNode.parentNode);

    var color = style.backgroundColor;


    item.onclick = function () {
        showModal(dataSet, color, type);
    }

    parent.appendChild(item);
}

// Reveals the modal when image is clicked
function showModal(dataSet, color, type){
    var title = dataSet.title || "ERROR TITLE";
    // Shows subtitle if no description
    var subtitle = dataSet.description || dataSet.subtitle || "";
    var bullets = dataSet.lines || [];
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

// {name of data in separate js file, parentId, type of ability}
function fillSection(data, parentId, type) {
    var parent = document.getElementById(parentId);
    data.forEach(function (dataSet) {
        add_sagaref_item(parent, dataSet, type);
        console.log(dataSet);
    });
}

function init(){
    // Fills the sections referenced by the id, with data found in fullRound_data, and the type text on the right side
    fillSection(fullRound_data, "basic-fullRound", "Full Round");
    fillSection(fullRound_subData, "sub-fullRound", "Full Round");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

// Runs init as window loads
$(window).load(init);


