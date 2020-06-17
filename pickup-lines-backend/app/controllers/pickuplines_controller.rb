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

  def create
    user = User.find_by(username: "BobXOXO")
    pickupline = Pickupline.create(content: params[:content], category: params[:category], user_id: user.id)
    Like.create(
      user_id: user.id,
      pickupline_id: pickupline.id,
      fire: false,
      cry: false,
      seenoevil: false,
      thinking: false
    )
    render json: {pickupline: pickupline}
  end 

  def update
    pickupline = Pickupline.find(params[:id])
    user = User.find_by(username: "BobXOXO")
    likeCount = 0
    pickupline.likes.each do |like| 
      if user.id == like.user_id
        case params[:buttonType]
        when 'fire'
          if !like.fire
            like.fire = true
            like.save
          else
            like.fire = false
            like.save
          end
          likeCount = pickupline.fire_likes
        
        when 'cry'
          if !like.cry
            like.cry = true
            like.save
          else
            like.cry = false
            like.save
          end
          likeCount = pickupline.cry_likes
        
        when 'seenoevil'
          if !like.seenoevil
            like.seenoevil = true
            like.save
          else
            like.seenoevil = false
            like.save
          end
          likeCount = pickupline.seenoevil_likes
        
        when 'thinking'
          if !like.thinking
            like.thinking = true
            like.save
          else
            like.thinking = false
            like.save
          end
          likeCount = pickupline.thinking_likes
        end  
      end
    end
    render json: {likeCount: likeCount}
  end
end
