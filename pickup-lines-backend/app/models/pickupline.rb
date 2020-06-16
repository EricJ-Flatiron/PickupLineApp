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
end
