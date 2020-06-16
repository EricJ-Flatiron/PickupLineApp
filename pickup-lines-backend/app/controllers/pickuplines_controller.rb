class PickuplinesController < ApplicationController

    def index
      pickuplines = Pickupline.all
      serialized = pickuplines.map do |pickupline| 
        {
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
          content: pickupline.content,
          category: pickupline.category,
          username: username,
          fireLikeCount: pickupline.fire_likes,
          cryLikeCount: pickupline.cry_likes,
          seenoevilLikeCount: pickupline.seenoevil_likes,
          thinkingLikeCount: pickupline.thinking_likes          
        }
        
    end 

end
