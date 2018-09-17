const bicycle = {};
export default bicycle;
//      DOM

//Following function gets breakpoint and two arrays with callbacks.
//First array callbacks are calling before breakpoint,
//second array callbacks - after.
function createBreakpoint({width,before,after}) {
    let toggle;
    if (innerWidth > width) {
        toggle = true;
        after.forEach(cb => cb());
    }
    window.addEventListener("resize", ()=> {
        if (innerWidth <= width && toggle) {
            before.forEach(cb => cb());
            toggle = false;
        } else if (innerWidth >= width && !toggle) {
            after.forEach(cb => cb());
            toggle = true;
        }
    });
}

//Classic anitmation function
//see more at http://javascript.info/js-animation
function animate({timing, depict, duration}){
    let start = performance.now();
    requestAnimationFrame(function step(time) { 
        let dt = (time - start)/duration;
        if (dt >= 1) dt = 1;
        let progress = timing(dt);
        depict(progress); 
        if (dt < 1) requestAnimationFrame(step);
    });
}

//This function accepts block element and optional animation duration
//to gradually show it.
function fadeIn(block, duration) {
    if (!duration) duration = 200;
    block.style.height = "auto";
    let height = block.offsetHeight;
    block.style.height = 0;
    animate({
        duration: duration,
        timing: dt => dt,
        depict: progress => 
            block.style.height = progress*height+"px"
    });
}

//The function recieves block element and optional animation duration
//to fade out its' height.
function fadeOut(block, duration) {
    if (!duration) duration = 200;
    let height = block.offsetHeight;
    animate({
        duration: duration,
        timing: dt => 1-dt,
        depict: progress => 
            block.style.height = progress*height+"px"
    });
}

//This function takes selector (for example, "div li")
//and displays collection elements step-by-step.
//If it gets toggle-argument then elements disappear step-by-step.
function displayByStep(selector, step, toggle) {
    let list = document.querySelectorAll(selector),
        display = "block";
    if (toggle === true) display = "none";
    [].forEach.call(list, (li, i)=>
        setTimeout(()=>
            li.style.display = display, ++i*step));
}

//This inner function accepts selectors or nodes collection
//and returns nodes array.
function getNodes(selectors) {
    let nodes = [].map.call(selectors, selector => {
        if (typeof selector === "object" && 
            selector.ELEMENT_NODE === 1) 
            return selector;
        else if (typeof selector === "string")
            return document.querySelector(selector);
    });  
    return nodes;
}

function findNotStaticAnsestor(node) {
    let ansestor = (function find(node) {
        if (getComputedStyle(node.parentNode).position != "static") 
            return node.parentNode;
        else 
            return find(node.parentNode);
    })(node);

    if (ansestor) return ansestor;
    else return document.body;
}

//Following function gets three selectors (or nodes) and sticks sticker-element
//from the bottom of the start-element to the bottom of the end-element.
//Also it returns interface with methods, which can add or remove sticker. 
function createSticker(sticker, start, end) {

    let nodes = getNodes(arguments);
    sticker = nodes[0]; start = nodes[1]; end = nodes[2];
    let ansestor = nodes[3] = findNotStaticAnsestor(sticker);

    function positioning() {
        let nodeRects = nodes.map(node => node.getBoundingClientRect()),
            stickerRect = nodeRects[0],
            startRect = nodeRects[1],
            endRect = nodeRects[2],
            ansestorRect = nodeRects[3],
            parentStyle = getComputedStyle(sticker.parentNode),
            paddingLeft = parseInt(parentStyle.paddingLeft),
            paddingRight = parseInt(parentStyle.paddingRight);

        sticker.style.width = sticker.parentNode.clientWidth
                            - paddingLeft
                            - paddingRight
                            + "px";
                            
        if (stickerRect.top <= 0 && stickerRect.bottom >= endRect.bottom ||
			//preventing blinking (rapid positioning change)
			//during page resizing and fast scrolling
            stickerRect.top < 0 && endRect.bottom < innerHeight) {
            sticker.style.position = "absolute";
            sticker.style.top = endRect.bottom  
                              - ansestorRect.top
                              + parseInt(getComputedStyle(ansestor).paddingTop)
                              - stickerRect.bottom 
                              + stickerRect.top
                              + "px";
        } else if (startRect.bottom <= 0){
            sticker.style.position = "fixed";
            sticker.style.top = 0;
        } else {
            sticker.style.position = "";
        }
    }
        
    let events = ["DOMContentLoaded", "scroll", "resize"],
        handler = function() {positioning()};
    
    return  {
        add: ()=> {
            events.forEach(event => addEventListener(event, handler));
        },
        remove: ()=> {
            events.forEach(event => removeEventListener(event, handler));
            sticker.style.position = "";
            sticker.style.width = "";
            sticker.style.top = "";

        }
    }
}

//      DOM INTERFACE
bicycle.createBreakpoint = createBreakpoint;
bicycle.animate = animate;
bicycle.fadeIn = fadeIn;
bicycle.fadeOut = fadeOut;
bicycle.displayByStep = displayByStep;
bicycle.createSticker = createSticker;

//      AJAX

function request({method, url, body, callback}) {
    let xhr = new XMLHttpRequest();
    xhr.open(method || "GET", url, true);
    xhr.addEventListener("load", () => {
        if (xhr.status < 400) callback(null, xhr.responseText);
        else callback(new Error(xhr.responseStatus));
    });
    xhr.addEventListener("error", () => {
        callback(new Error("Network error"));
    });
    xhr.send(body || null);
}

//      AJAX INTERFACE
bicycle.request = request;