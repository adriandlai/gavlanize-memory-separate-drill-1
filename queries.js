const database = require('./database-connection')

module.exports = {
    list() {
        return database("resolution")
    },
    read(id){
        return database("resolution").select().where('id', id).first()
    },
    create(resolution){
            return database("resolution")
            .insert(resolution)
            .returning("*")
            .then(record => record[0])
    },
    update(id,resolution){
        return database("resolution")
        .where('id', id)
        .update(resolution)
        .returning("*")
        .then(record => record[0])
    },

    delete(id){
        return database("resolution").delete().where("id", id);
    }

}




