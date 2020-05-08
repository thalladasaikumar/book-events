import { connectionInvitesModel as _connectionInvitesModel } from './dbConnection';

class connectionInvites{
    async getConnectionInvites(connectionId){
        return new Promise(async (resolve, reject) =>{
            _connectionInvitesModel.find({connectionId:connectionId}, function(err, data){
                if(err){
                    reject(err);
                } else{
                    resolve(data);
                }
            })
        })
    }

    async getReceiverInvites(receiver){
        return new Promise(async (resolve, reject) =>{
            _connectionInvitesModel.find({"connection.receiver":receiver}, function(err, data){
                if(err){
                    reject(err);
                } else{
                    resolve(data);
                }
            })
        })
    }

    async addNewConnectionFromSender(connectionId, sender, receiver){
        const conInvites = await this.getConnectionInvites(connectionId);
        if(conInvites.length==0){
            return new Promise(async (resolve, reject) ={
                // new _connectionInvitesModel({connectionId:connectionId,connection:[{sender:sender, receiver:receiver}]}).save()
            })
        } else{

        }

    }
}
