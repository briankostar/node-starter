let Sample = require('../models').sample

// Define callback functions
const load = () => {
    Sample.get(id)
        .then((sample) => {
            req.sample = sample //get sample from mongoose via id and attach to req
            return next()
        })
        .catch(e => next(e))
}


const get = (req, res) => {
    return res.json(req.sample)
}

const update = (req, res, next) => {
    const sample = req.sample;
    sample.name = req.body.samplename;

    sample.save()
        .then(savedSample => res.json(savedSample))
        .catch(e => next(e));
}

const list = (req, res, next) => {
    const { limit = 50, skip = 0 } = req.query;
    sample.list({ limit, skip })
        .then(samples => res.json(samples))
        .catch(e => next(e));
}

const delete = (req, res, next) => {
    const sample = req.sample;
    sample.remove()
        .then(deletedSample => res.json(deletedSample))
        .catch(e => next(e));
}

module.exports = {
    load,
    get,
    update,
    list,
    delete
}