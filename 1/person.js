function Person(names,age,rollno,section)
{


	this.names=names;
	this.age=age;
	this.rollno=rollno;
	this.section=section;
}

var mac=new Person("mangesh",23,10,"a");
document.getElementById('names').innerHTML="name:"+mac.names;
document.getElementById('age').innerHTML="age:"+mac.age;
document.getElementById('rollno').innerHTML="roll no:"+mac.rollno;
document.getElementById('section').innerHTML="section:"+mac.section;

