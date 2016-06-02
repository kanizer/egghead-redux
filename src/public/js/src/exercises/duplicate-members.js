// https://khan4019.github.io/front-end-Interview-Questions/js1.html#removeDuplicate

export default (() => {

    let a = [5, 6, 7, 8, 5, 10, 7, 7];

    // let filtered = a.reduce((prev, curr, ind, arr) => {
    //     if(prev.indexOf(curr) === -1) prev.push(curr);
    //     return prev;
    // }, []);

    for(let i = 0; i < a.length; i++) {
        let item = a[i];
        for(let l = 0; l < a.length; l++) {
            if(l !== i && a[l] === item) {
                a.splice(i, 1);
                i = 0;
            }
        }
    }

    console.log('duplicate-members.js: test:', a);

})();
