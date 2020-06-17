class Pickupline < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes
    belongs_to :user

    def fire_likes
        self.likes.select{|like| like.fire == true}.length
    end

    def cry_likes
        self.likes.select{|like| like.cry == true}.length
    end

    def thinking_likes
        self.likes.select{|like| like.thinking == true}.length
    end

    def seenoevil_likes
        self.likes.select{|like| like.seenoevil == true}.length
    end


    
    def self.camping_category
        self.all.select{|p| p.category == "camping"}
    end

    def self.holiday_category
        self.all.select{|p| p.category == "holiday"}
    end

    def self.nerdy_category
        self.all.select{|p| p.category == "nerdy"}
    end
  
    def self.food_category
        self.all.select{|p| p.category ==  "food"}
    end

    def self.music_category
        self.all.select{|p| p.category ==  "music"}
    end

    def self.math_category
        self.all.select{|p| p.category  == "math"}
    end

    def self.user_created 
        user = User.find_by(username: "BobXOXO")
        self.all.select{|p| p.user_id == user.id}
    end
    
end

