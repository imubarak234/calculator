const wallet = document.querySelector('#contains');
let x = 0;
while(x < 20) {
    let it = "hi" + x;
    it = document.createElement("button");
    let ike = "content" + x;
    it.setAttribute('id', ike);
    it.style.cssText = 'border-style: solid; border-color: black; margin: 3px 3px 3px 3px; padding: 8px 8px 8px 8px;font-size: 15px;';
    wallet.appendChild(it);
    x++;
}

const mail = document.querySelector('#next')
//mail.textContent = 'max';
let deep = '';
function addtext(tnt) {
    if((tnt == '/') || (tnt == '*') || (tnt == '+') || (tnt == '-')){ cleartext();}
    deep += tnt;
    let wink = document.createTextNode(tnt);
    mail.appendChild(wink);
}

     
function removetext(){
    let wike = mail.value;
    let wike2 = wike.split('');
    wike2.splice(wike2.length - 1, 1);
    let wike3 = wike2.join('');
    mail.textContent = wike3;
    let hi = deep.split('');
    hi.splice(hi.length - 1, 1);
    let hi1 = hi.join('');
    deep = hi1;
    console.log(deep);
}

function isbracket(high){
    let wise3 = false
    for(let x = 0; x < high.length; x++){
        if((high[x] == '(') || (high[x] == ')')){
            wise3 = true;
        }
    }
    return wise3;
}
//console.log(isbracket('ueuue'))

function addtext2(til){
    deep += til;
    let film = document.createTextNode(til);
    mail.appendChild(film);
}

function cleartext() {
mail.textContent = '';
}
let wise = false;
let wise2 = false;

function calcUp(live){
    for(let x = 0; x < live.length; x++){
        if((live[x] == '*') || (live[x] == '+') || (live[x] == '/') || (live[x] == '-')) {
            return true;
        }
    }
}

const b1 = document.querySelector('#content0');
b1.textContent = '1';
b1.addEventListener('click', () => {
    if(wise2){
        addtext2('1');
    }
    else {
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('1');
    }
});

const b2 = document.querySelector('#content1');
b2.textContent = '2';
b2.addEventListener('click', () => {
    if(wise2){
        addtext2('2');
    }
    else {
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('2'); 
    }
});

const b3 = document.querySelector('#content2');
b3.textContent = '3';
b3.addEventListener('click', () => {
    if(wise2){
        addtext2('3');
    }
    else {
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('3');
    }
});

const b4 = document.querySelector('#content3');
b4.textContent = '+';
b4.addEventListener('click', () => {
    if(wise2){
        addtext2('+');
    }
    else {
        let own = 0; 
    if(calcUp(deep)){
        own = operate(deep);
        cleartext();
        addtext(own);
        deep = '';
        deep = own
        deep += '+';
    } else {addtext('+');}
    }
});

const b5 = document.querySelector('#content4');
b5.textContent = '4';
b5.addEventListener('click', () => {
    if(wise2){
        addtext2('4');
    }
    else {
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('4');
    }
});

const b6 = document.querySelector('#content5');
b6.textContent = '5';
b6.addEventListener('click', () => {
    if(wise2){
        addtext2('5');
    }
    else{
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('5');
    }
});

const b7 = document.querySelector('#content6');
b7.textContent = '6';
b7.addEventListener('click', () => {
    if(wise2){
        addtext2('6');
    }
    else{
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('6');
    }
});

const b8 = document.querySelector('#content7');
b8.textContent = '-';
b8.addEventListener('click', () => {
    if(wise2){
        addtext2('-')
    }
    else{
        let own = 0; 
    if(calcUp(deep)){
        own = operate(deep);
        cleartext();
        addtext(own);
        deep = '';
        deep = own
        deep += '-';
    } else {addtext('-');}
    }
});

const b9 = document.querySelector('#content8');
b9.textContent = '7';
b9.addEventListener('click', () => {
    if(wise2){
        addtext2('7');    
    }
    else{
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('7');
    }
});

const b10 = document.querySelector('#content9');
b10.textContent = '8';
b10.addEventListener('click', () => {
    if(wise2){
        addtext2('8');
    }
    else{
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('8');
    }
});

const b11 = document.querySelector('#content10');
b11.textContent = '9';
b11.addEventListener('click', () => {
    if(wise2){
        addtext2('9');
    }
    else{
        if(calcUp(deep)){
            cleartext();
        } 
        addtext('9');
    }
});

const b12 = document.querySelector('#content11');
b12.textContent = '*';
b12.addEventListener('click', () => {
    if(wise2){
        addtext2('*');
    }
    else{
        let own = 0; 
    if(calcUp(deep)){
        own = operate(deep);
        cleartext();
        addtext(own);
        deep = '';
        deep = own
        deep += '*';
    } else {
        addtext('*');
    }
    }
 });

const b13 = document.querySelector('#content12');
b13.textContent = 'ce';
b13.addEventListener('click', () => {
    cleartext(); 
    deep = ''; 
    wise = false;
    wise2 = false;
});

const b14 = document.querySelector('#content13');
b14.textContent = '0';
b14.addEventListener('click', () => {
    if(wise2){
        addtext2('0');
    }
    else {
        if(calcUp(deep)){
            cleartext();
        }
        addtext('0');
    }
});

const b15 = document.querySelector('#content14');
b15.textContent = '<=';
b15.addEventListener('click', () => { removetext();});

const b16 = document.querySelector('#content15');
b16.textContent = '/';
b16.addEventListener('click', () => {
    if(wise2){
        addtext2('/')
    }
    else {
        let own = 0; 
    if(calcUp(deep)){
        own = operate(deep);
        cleartext();
        addtext(own);
        deep = '';
        deep = own
        deep += '/';
    } else {addtext('/');}
    }
});

const b17 = document.querySelector('#content16');
b17.textContent = '.';
//b17.style.cssText = ''
b17.addEventListener('click', () => {
    if(wise2){
        addtext2('.');
    } 
    else{
        addtext('.');
    }
});
b17.style.cssText = 'position: relative; font-size: 30px; border-style: solid; border-color: black; margin: 3px 3px 3px 3px; padding: -30px 8px 8px 18px;'

const b18 = document.querySelector('#content17');
b18.textContent = '(';
b18.addEventListener('click', () => {
        wise2 = true; 
        addtext2('(');
});

const b19 = document.querySelector('#content18');
b19.textContent = ')';
b19.addEventListener('click', () => { 
        wise2 = true;
        addtext2(')');
});

const b191 = document.querySelector('#content19');
b191.textContent = '=';
b191.addEventListener('click', () => {
    console.log('this is the deep = ' + deep);
    console.log('This is the = ' + operateBrackets(deep));
    if(isbracket(deep)){
        mail.textContent = operateBrackets(deep);
            wise = true; 
            deep = ''; 
            wise2 = false;
    }
    else{
    mail.textContent = operate(deep); 
    wise = true; 
    deep = ''; 
    wise2 = false;
    }
    
});

const c101 = document.querySelector('#wife');
c101.style.cssText = 'z-index: 2;'
c101.addEventListener('click', () => {wise2 = true; console.log(wise2);});


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b){
    return parseFloat(a)-parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a)/parseFloat(b);
}

function operate(lll) {
    //let will = deep.split('');
    let will = lll.split('');
    let white = [];
    let brown = '';
    let next = 0;
    let talk = false;
    //{
        for(let y = 0; y < will.length; y++) {
           // if(talk){y = 0; talk = false;}

            if((will[y] == '+') || (will[y] == "/") || (will[y] == '*') || (will[y] == '-')) {
                //white.push(parseFloat(brown));
                if(will[y] == '/'){
                    let l1 = brown;
                    let l2 = '';
                    let count = 0;
                    for(let z = (y + 1); z < will.length; z++){
                        if(z == will.length - 1){l2 += will[z]; count++; break;}
                        if((will[z] == '+') || (will[z] == "/") || (will[z] == '*') || (will[z] == '-')) {
                            break;
                        }
                        l2 += will[z];
                        count++;
                    }
                    let l4 = (y - next);
                    let l5 = count + (1 + next);
                    let l3 = divide(l1, l2);
                    will.splice(l4, l5, l3);
                    //talk = true;
                    y = 0;
                    //console.log(l4)
                }
                brown = '';
            if(y != 0)
            y++;
            next = 0;
            }
            next++;
            brown += will[y];
        }
        console.log(will);
        brown = '';
         next = 0;
        for(let x = 0; x < will.length; x++)
        {
            //if(talk){x = 0; talk = false;}

            if((will[x] == '+') || (will[x] == "/") || (will[x] == '*') || (will[x] == '-'))
            {
                if(will[x] == '*'){
                    let r1 = brown;
                    let r2 = '';
                    let count = 0;
                    for(let y = (x + 1); y < will.length; y++){
                        if(y == will.length - 1){r2 += will[y]; count++; break;}
                        if((will[y] == '+') || (will[y] == "/") || (will[y] == '*') || (will[y] == '-')) {
                            break;
                        }
                        r2 += will[y];
                        count++;
                    }
                    let r3 = multiply(r1, r2);
                    let r4 = (x - next);
                    //else {let r4 = (x - (brown.length + 1));}
                    let r5 = count + (1 + next);
                    will.splice(r4, r5, r3);
                    //talk = true;
                    x = 0;
                    //console.log(r4 + ' start')
                    //console.log(r5 + " stop")
                }
                brown = '';
                if(x != 0)
                x++;
                next = 0;
            }
        
        next++;
        brown += will[x];
        }
        next = 0;
        brown = '';

        console.log(will);
        for(let x = 0; x < will.length; x++)
        {
            //if(talk){x = 0; talk = false;}

            if((will[x] == '+') || (will[x] == "/") || (will[x] == '*') || (will[x] == '-'))
            {
                if(will[x] == '+'){
                    let r1 = brown;
                    let r2 = '';
                    let count = 0;
                    for(let y = (x + 1); y < will.length; y++){
                        if(y == will.length - 1){r2 += will[y]; count++; break;}
                        if((will[y] == '+') || (will[y] == "/") || (will[y] == '*') || (will[y] == '-')) {
                            break;
                        }
                        count++;
                        r2 += will[y]
                    }
                    let r3 = 0;
                    let r4 = 0;
                    //else {let r4 = (x - (brown.length + 1));}
                    let r6 = ['-']
                    let r5 = 0; 
                    if(will[(x - next) - 1] == '-'){
                        //let r7 = brown.split('');
                        for(let c = 0; c < brown.length; c++){
                            r6.push(brown[c]);
                        }
                        let r7 = r6.join('');
                        console.log('wwwwwww ' + r7);

                        r3 = add(r7, r2);
                        r4 = ((x - next) - 1);
                        r5 = (count + (1 + next)) + 1;
                        console.log('hhhhhh ' + r3);
                        will.splice(r4, r5, r3);
                        if(r3 > 0){will.splice(r4, 0, '+');}
                        else{will.splice(r4, 0, '-')}
                        
                    }
                    else {r3 = add(r1, r2); r4 = (x - next); r5 = count + (1 + next); will.splice(r4, r5, r3);}
                    //talk = true;
                    x = 0;
                    //console.log(r4 + ' start')
                    //console.log(r5 + " stop")
                }
                brown = '';
                if(x != 0)
                x++;
                next = 0;
            }
            next++;
            brown += will[x];
            console.log(will);
            //console.log(x);
            //console.log(brown + " i am brown")
    }
    console.log(will)
    next = 0;
     brown = '';

    for(let x = 0; x < will.length; x++)
    {
        //if(talk){x = 0; talk = false;}

        if((will[x] == '+') || (will[x] == "/") || (will[x] == '*') || (will[x] == '-'))
        {
            if((will[x] == '-') && (x != 0)){
                let r1 = brown;
                let r2 = '';
                let count = 0;
                for(let y = (x + 1); y < will.length; y++){
                    if(y == will.length - 1){r2 += will[y]; count++; break;}
                    if((will[y] == '+') || (will[y] == "/") || (will[y] == '*') || (will[y] == '-')) {
                        break;
                    }
                    r2 += will[y];
                    count++;
                }
                
                let r3 = 0;
                    let r4 = 0;
                    //else {let r4 = (x - (brown.length + 1));}
                    let r6 = ['-']
                    let r5 = 0; 
                    if(will[(x - next) - 1] == '-'){
                        //let r7 = brown.split('');
                        for(let c = 0; c < brown.length; c++){
                            r6.push(brown[c]);
                        }
                        let r7 = r6.join('');
                        //console.log('wwwwwww ' + r7);

                        r3 = subtract(r7, r2);
                        r4 = ((x - next) - 1);
                        r5 = (count + (1 + next)) + 1;
                        //console.log('hhhhhh ' + r3);
                        will.splice(r4, r5, r3);
                        if(r3 > 0){will.splice(r4, 0, '+');}
                        else{will.splice(r4, 0, '-')}
                        
                    }
                    else {r3 = subtract(r1, r2); r4 = (x - next); r5 = count + (1 + next); will.splice(r4, r5, r3);}
                    //talk = true;
                    x = 0;
            }
            
            brown = '';
            if(x != 0)
            x++;
            next = 0;
        }
    
    next++;
    brown += will[x];
    }
    return will[0];
}

function operateBrackets(mime){
    let win = mime.split('');
    let will = [...win];
    count1 = 0;
    count2 = 0;
    for(let x = 0; x < will.length; x++) {
        if(will[x] == '(') 
        {
            count1++;
        }
        else if(will[x] == ')'){
            count2++;
        } 
    }

    let ans = will.join('');
    console.log(count1 === count2);
    if(count1 === count2){
        let fin = 0;
    let mike = 0;
    let nex = [];
    //console.log('checking = ' + win)
    for(let z = 0; z < win.length; z++){
        if(win[z] == '('){
            fin++;
        }
            if(fin == count1){
                //win.splice(z, 1);
                mike++;
                nex.push(win[z]);
            }
            if(win[z] == ')'){
                nex.splice(0, 1);
                nex.splice(nex.length - 1, 1);
                let its = nex.join('');
                //console.log('watch this ' + its);

                let ike = operate(its);
                //console.log('After operation = ' + ike)
                win.splice((z - mike+1), mike, ike);
                count1--;
                fin = 0;
                mike = 0;
                z = 0;
                nex = [];
            }
    }

    let ans2 = operate(win.join(''));
    return ans2;
    }
    else{
        return 'Error';
    }
    //console.log('count1 = ' + count1);
    //console.log('couunt2 = ' + count2);
    //console.log('This is the final ' + ans);

    
   // console.log('Test 101 = ' + ans2);
    
}

console.log(operateBrackets('(8+8))'))
//console.log(operate('(5+5))'))