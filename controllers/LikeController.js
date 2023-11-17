const Like = require('../models/Like')

module.exports = class LikeController{
    static async likePost(request, response){
        const PublicationId = request.body.PublicationId
        const UserId = request.session.userId

        //UUID
        const like = {
            UserId: UserId,
            PublicationId: PublicationId
        }
        try{
            await Like.create(like)
            response.redirect('/')
        }catch(error){
            console.log(error)
        }
        
    }
}