// wat moet er gebeuren?
const Message = require('../models/message');

const getAll = (req, res) => {
    const response = {
        status: 'succes',
        data: {
            messages: [
                {
                    'username': 'Liena',
                    'message': 'lalala'
                },
                {
                    'username': 'Joris',
                    'message': 'Js is easy'
                },
            ],
        },
    }

    res.json(response);
}

const create = async (req, res) => {
    // message saven
    let username = req.body.username;
    let message = req.body.message;

    let m = new Message();
    m.username = username;
    m.message = message;
    
    await m.save();

    res.send("Posting new message");
}

module.exports.getAll = getAll;
module.exports.create = create;