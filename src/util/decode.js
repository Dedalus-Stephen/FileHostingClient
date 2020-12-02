export const decode = (tree, message) => {
    let i = 0;
    const root = tree;
    const res = [];
    while (i < message.length) {
        if (message.charAt(i) === '0') {
            if (tree.left !== null) {
                tree = tree.left;
                if (tree.left === null && tree.right === null) {
                    res.push(tree.c);
                    tree = root;
                }
            }
        } else {
            if (tree.right !== null) {
                tree = tree.right;
                if (tree.left === null && tree.right === null) {
                    res.push(tree.c);
                    tree = root;
                }
            }
        }
        i++;
    }
    const base64String = URL.createObjectURL(new Blob([Buffer.from(res).buffer], {type: 'image/jpg'}));
    return base64String;
}
