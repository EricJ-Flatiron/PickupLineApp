class PickuplinesController < ApplicationController



    def index
      pickuplines = Pickupline.all
      serialized = pickuplines.map do |pickupline| 
        {
          id: pickupline.id,
          content: pickupline.content,
          category: pickupline.category,
          createdBy: User.find(pickupline.user_id).username,
          fireLikeCount: pickupline.fire_likes,
          cryLikeCount: pickupline.cry_likes,
          seenoevilLikeCount: pickupline.seenoevil_likes,
          thinkingLikeCount: pickupline.thinking_likes    
        }
      end
      render json: serialized
    end 

    def show 
        pickupline = Pickupline.find(params[:id])
        username = User.find(pickupline.user_id).username
        render json: {
          id: pickupline.id,
          content: pickupline.content,
          category: pickupline.category,
          username: username,
          fireLikeCount: pickupline.fire_likes,
          cryLikeCount: pickupline.cry_likes,
          seenoevilLikeCount: pickupline.seenoevil_likes,
          thinkingLikeCount: pickupline.thinking_likes          
        }
        
    end 

    def update
        # session["init"] = true
        pickupline = Pickupline.find(params[:id])
        
        byebug
        # user = current_user

    
        # check to see if user has liked that emoji and that post
        pickupline.likes.each do |like| 
          if like.user_id == session[:user_id]
            if !like.fire
              like.fire = true
              like.save
              
            end
          end

        end
        render json: {fireLikeCount: pickupline.fire_likes}
        # pickupline.fire_likes = params[:fireLikeCount]
        # render json: {
        #     fireLikeCount: pickupline.fire_likes,
        #     cryLikeCount: pickupline.cry_likes,
        #     seenoevilLikeCount: pickupline.seenoevil_likes,
        #     thinkingLikeCount: pickupline.thinking_likes
        # }

    end

end
