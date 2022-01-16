let title = document.getElementById("inputtitle")
let desc = document.getElementById("inputdesc")
let notecard = document.getElementById("notecard")

const addbtn = () => {

if(title.value == "" && desc.value == ""){
    alert("Nothing To show! Please write something")
}
else{

    let div2 = document.createElement("div");
    div2.setAttribute("class","text")

    let h2 = document.createElement("h2")
    let h2text = document.createTextNode(title.value)
    h2.appendChild(h2text)

    let para = document.createElement("p")
    let paratext = document.createTextNode(desc.value)
    para.appendChild(paratext)

    let edit = document.createElement("button")
    let edittext = document.createTextNode("edit")
    edit.setAttribute("onclick","edit(this)")
    edit.appendChild(edittext)

    let deletebtn = document.createElement("button")
    let deltext = document.createTextNode("delete")
    deletebtn.setAttribute("onclick","remove(this)")
    deletebtn.appendChild(deltext)

    notecard.appendChild(div2)
    div2.appendChild(h2)
    div2.appendChild(para)
    div2.appendChild(edit)
    div2.appendChild(deletebtn)
    // console.log(notecard)
    

    title.value = ""
    desc.value = ""
}
}

const edit = e => {
    let protitle = prompt("Edit Title")
    let descpro = prompt("Edit Note")
    // if(protitle == "" && descpro == ""){
    //     div2.remove()
    // }else{
    let a = e.parentNode.firstChild.innerHTML = protitle
    let b = e.parentNode.firstChild.nextSibling.innerHTML = descpro
    title.value += a;
    desc.value += b; 

    // var a = e.parentNode.firstChild.innerHTML += protitle
    // var b = e.parentNode.firstChild.nextSibling.innerHTML += descpro
    // console.log(a)
    // console.log(b)
}
const remove = e => {
    e.parentNode.remove()
}

const delAll = _ => {
    notecard.innerHTML = ""
}