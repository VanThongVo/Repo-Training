var {op, lhs, rhs} = getASTNode();
function getASTNode() {
    return {op: 1, lhs: 2, rhs: 3};
}
console.log(`op =`,op);
console.log(`lhs =`,lhs);
console.log(`rhs =`,rhs);



