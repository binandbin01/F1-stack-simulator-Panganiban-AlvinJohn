class Queue {
    constructor() {
        this.items = []
    }

    // Add element to the REAR of the queue
    enqueue(element) {
        this.items.push(element)
        return element
    }

    // Remove and return the FRONT element
    // Return undefined if the queue is empty
    dequeue() {
        if (this.items.length === 0) return undefined
        return this.items.shift()
    }

    // Check the FRONT element without removing it
    peek() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        return this.items.join(' ')
    }

    // Clear queue
    clear() {
        this.items = []
        return this.items
    }
}

const queue = new Queue()

// Redraw the queue: FRONT on top, REAR at the bottom
function render() {
    $("#queue").empty();
    const n = queue.size();
    queue.items.forEach(function (item, i) {
        let color = i % 2 === 0 ? "bg-primary" : "bg-success";
        let label = "";
        if (n === 1) label = "FRONT / REAR";
        else if (i === 0) label = "FRONT";
        else if (i === n - 1) label = "REAR";
        $("#queue").append(
            `<div class="d-flex align-items-center justify-content-center mb-1">
                <div class="qblock push ${color} d-flex align-items-center justify-content-center text-white">${item}</div>
                <small class="ms-2 fw-bold text-warning" style="width:90px">${label}</small>
            </div>`
        );
    });
}

$(document).ready(function () {
    render();

    // ENQUEUE
    $("#btnEnqueue").click(function () {
        let value = $("#data").val().trim();
        if (value === "") {
            alert("Please enter a value first.");
            return;
        }
        queue.enqueue(value);
        render();
        $("#data").val("").focus();
    });

    // DEQUEUE
    $("#btnDequeue").click(function () {
        if (queue.isEmpty()) {
            alert("Queue is empty. Nothing to dequeue.");
            return;
        }
        let removed = queue.dequeue();
        render();
        $("#dequeued").append(`<div class="row pop text-bg-danger border border-light">${removed}</div>`);
    });

    // PEEK
    $("#btnPeek").click(function () {
        if (queue.isEmpty()) {
            alert("Queue is empty. Nothing to peek.");
            return;
        }
        let front = $("#queue .qblock").first();
        front.addClass("border border-warning border-4");
        setTimeout(function () {
            front.removeClass("border border-warning border-4");
        }, 1500);
    });

    // CLEAR
    $("#btnClear").click(function () {
        queue.clear();
        $("#queue").empty();
        $("#dequeued").empty();
    });
});