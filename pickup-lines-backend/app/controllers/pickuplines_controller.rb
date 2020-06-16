class PickuplinesController < ApplicationController

    def index
      pickuplines = Pickupline.all
      render json: pickuplines.to_json(:include => [:user], :except => [:created_at, :updated_at])
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
