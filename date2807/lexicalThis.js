let obj = {
    nums : [100, 200, 12, 5, 4, 10],
    fives: [],
    getFives: function() {
        this.nums.forEach((v) => {
            if (v % 5 === 0)
                this.fives.push(v)
        });
    }
}

obj.getFives();
console.log(`Array obj.nums: `, obj.fives);