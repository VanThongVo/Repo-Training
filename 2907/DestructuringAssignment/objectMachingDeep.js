var {op : a, lhs: {op: b}, rhs: c} = getASTNode();
function getASTNode() {
    return {op: 4, lhs: {op: 5}, rhs: 6};
}
console.log(`op =`,a);
console.log(`lhs =`,b);
console.log(`rhs =`,c);
