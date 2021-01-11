function changeImage() {

    if (document.getElementById("bigprojectbuttonup").src == "../images/bigprojectbuttonup.png") 
    {
        document.getElementById("bigprojectbuttondown").src = "../images/bigprojectbuttondown.png";

    }
    else if (document.getElementById("bigprojectbuttondow").src == "../images/bigprojectbuttondown.png")
    {
        document.getElementById("bigprojectbuttonup").src = "../images/bigprojectbuttonup.png";
    }
}