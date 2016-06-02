// http://www.codewars.com/kata/52817f04b70058a1b1000037/train/javascript

export default (() => {

    let processes = [
        {pid: 219, ppid: 214},
        {pid: 1, ppid: -1},
        {pid: 214, ppid: 1},
        {pid: 124, ppid: 1}
    ];

    let nested = [
        {
            pid: 1,
            ppid: -1,
            children: [
                {
                    pid: 214,
                    ppid: 1,
                    children: [
                        {
                            pid: 219,
                            ppid: 214
                        }
                    ]
                },
                {
                    pid: 124,
                    ppid: 1
                }
            ]
        }
    ];

    function Process(pid, children) {
        this.pid = pid;
        this.children = children;
    }


  function search(ppid) {
     return processes.filter(process => process.ppid==ppid);
  }

  console.log('processtree.js: search(-1):', search(-1));

    // function findParent(item, tree) {
    //     if(item.ppid === -1) return new Process(item.pid, []);

    //     let parent;
    //     for(var i = 0; i < tree.children.length; i++) {
    //         parent = tree.children[i];
    //         if(item.ppid === parent.pid) {
    //             return new Process(parent.pid, parent.children.push(new Process(item.pid, [])));
    //         }
    //     }

    //     // findParent(item, )
    // }

    // function reducer(prev, curr, ind, arr) {
    //     let test = findParent(curr, prev);
    //     console.log(test)
    //     debugger;
    //     return test;
    //     // let proc = new Process(curr.pid, []);
    //     // if(prev.pid === proc.ppid) prev.children.push(proc);
    //     // else if({

    //     // }
    //     // debugger;
    //     // return prev;
    // }

    function makeProcessTree(process) {
        return {
            pid: process.pid,
            ppid: process.ppid,
            children: search(process.pid).map(makeProcessTree)
        }
    }

    // function constructTree(ind, constructedArray, sourceArray) {
    //     let currentItem = sourceArray[ind];
    //     let traverseItem;
    //     for(let i = 0; i < constructedArray.length; i++) {
    //         // reconstruct nested on every pass
    //         // add item to tree
    //         traverseItem = constructArray[i];
    //         // if(currentItem.ppid === -1) return
    //     }
    // }

    let baseProcess = search(-1)[0];
    console.log('processtree.js:', makeProcessTree(baseProcess));

})();
