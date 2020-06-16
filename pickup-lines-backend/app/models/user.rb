class User < ApplicationRecord
    has_many :likes
    has_many :pickuplines, through: :likes
    has_many :pickuplines
end
