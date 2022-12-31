function chat() {
    let elemen, text, parent, spasi;
    let inp_chat = document.getElementById("inputChat").value;
    elemen = document.createElement("span");
    spasi = document.createElement("br");
    text = document.createTextNode(inp_chat);

    elemen.appendChild(text);

    parent = document.getElementById("pesanUser");
    perent.appendChild(spasi);
    perent.appendChild(elemen);
}