
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

$(document).ready(function(){
    $("#stack").prepend(`<div class="row bg-primary push">${stack.push(100)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-success push">${stack.push(200)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-primary push">${stack.push(300)[0]}</div>`);
    $("#stack").prepend(`<div class="row bg-success push">${stack.push(400)[0]}</div>`);

     // PUSH
    $("#btnPush").click(function(){
        let value = $("#data").val().trim();
        if(value === ""){
            alert("Please enter a value first.");
            return;
        }
        let colorClass = stack.count % 2 === 0 ? "bg-primary" : "bg-success";
        $("#stack").prepend(`<div class="row ${colorClass} push">${stack.push(value)[0]}</div>`);
        $("#data").val("").focus();
    });

    // POP
    $("#btnPop").click(function(){
        if(stack.count === 0){
            alert("Stack is empty. Nothing to pop.");
            return;
        }
        let removed = stack.pop();
        $("#stack").children().first().remove();
        $("#deleted").prepend(`<div class="row pop text-bg-danger border border-light">${removed}</div>`);
    });

    // PEEK
    $("#btnPeek").click(function(){
        if(stack.count === 0){
            alert("Stack is empty. Nothing to peek.");
            return;
        }
        stack.peek();
        let top = $("#stack").children().first();
        top.addClass("border border-warning border-4");
        setTimeout(function(){
            top.removeClass("border border-warning border-4");
        }, 1500);
    });

    // CLEAR
    $("#btnClear").click(function(){
        stack.clear();
        $("#stack").empty();
        $("#deleted").empty();
    });
});