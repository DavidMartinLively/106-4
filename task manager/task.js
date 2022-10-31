class Task{
    constructor(important, title, desc, priority, dueDate, contact, participants, color){
        this.important = important;
        this.title = title;
        this.description = desc;
        this.priority = priority;
        this.dueDate = dueDate;
        this.contact = contact;
        this.participants = participants;
        this.color = color;

        this.developer = "David";
    }

    test (){
        console.log("Test");
    }
}