{
    function foo() {
    return 1;
    }
    console.log(`Compare foo() === 1:`, foo( ) === 1);

    {
        function foo() {
            return 2;
        }
        console.log(`Compare foo() === 2:`, foo( ) === 2);
    }

    console.log(`Compare foo() === 1:`, foo( ) === 1);
}