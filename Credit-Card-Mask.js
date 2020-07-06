function maskify(cc) {

    for (let i = 0; i < cc.length - 4; i++){
        cc = cc.replace(cc.charAt(i), '#');
    }
    console.log(cc);
    return cc;
}
maskify('4556364607935616');