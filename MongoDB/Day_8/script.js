class Student{
    constructor(name,address,email,PhoneNo,Contry,age=null){
        this.name = name;
        this.address = address;
        this.email = email;
        this.PhoneNo = PhoneNo;
        this.Contry = Contry;
        this.age = age;
    }
}
let Student1 = new Student("Sumit","Bareilly","sumit@gmail.com",516549841,"India",);
let Student2 = new Student("Ramesh","Bareilly","ramesh@gmail.com",1234567890,"India",20);
let Student3 = new Student("Ramveer","Bareilly","ramveer@gmail.com",4575424685,"India",20);
let Student4 = new Student("Morpal","Bareilly","morpal@gmail.com",46511656554,"India",20);

console.table(Student);
// Prototypes


