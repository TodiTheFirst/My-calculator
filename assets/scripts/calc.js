const base = 0;
let outPutRes = base;
console.log();
const usGetInput = () => {
    return parseInt(userInput.value);
};

const add = () => {
let inPt = usGetInput();
let firstIn = outPutRes;
firstIn += inPt ;
   outputResult(`Sum is ${firstIn}`,`${firstIn} + ${inPt}`)
};

const SUB = () => {
    
    outputResult(`The subtract is  ${sub} `, `${base} - ${-sub}`);
    
};

const MUL = () => {
    
    outputResult(`The subtract is  ${sums} `, `${base} - ${-sums}`);
};


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',SUB)
multiplyBtn.addEventListener('click', MUL)