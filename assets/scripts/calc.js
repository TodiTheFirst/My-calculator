const base = 0;
let outPutRes = base;
function usGetInput () {
    return parseInt(userInput.value);
};

const ADD = () => {
   const firstIn = outPutRes;
   const inPt = usGetInput();
   firstIn += inPt ;
   outputResult(`Sum is ${firstIn}`,`${firstIn} + ${inpD}`)
};

const SUB = () => {
    
    outputResult(`The subtract is  ${sub} `, `${base} - ${-sub}`);
    
};

const MUL = () => {
    
    outputResult(`The subtract is  ${sums} `, `${base} - ${-sums}`);
};


addBtn.addEventListener('click', ADD);
subtractBtn.addEventListener('click',SUB)
multiplyBtn.addEventListener('click', MUL)