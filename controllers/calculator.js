const calculate = (req,res) => {
    const { body } = req;
    const {a,b,op} = body;

    if(op === "+"){
        return res.status(200).send({data:parseFloat(a) + parseFloat(b)})
    }

    if(op === "*"){
        return res.status(200).send({data:parseFloat(a) * parseFloat(b)})
    }

    if(op === "-"){
        return res.status(200).send({data:parseFloat(a) - parseFloat(b)})
    }

    else {
        return res.status(400).send({data:null})
    }

}

module.exports = calculate
