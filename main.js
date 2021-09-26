student=[];
function submit(){
    var name1=document.getElementById("Name1").value;
    var name2=document.getElementById("Name2").value;
    var name3=document.getElementById("Name3").value;
    var name4=document.getElementById("Name4").value;

    student.push(name1);
    student.push(name2);
    student.push(name3);
    student.push(name4);
    console.log(student);
    document.getElementById("displaynames").innerHTML=student;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";


}
function sorting(){
    student.sort();
    console.log(student);
    document.getElementById("displaynames").innerHTML=student;
}