# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Pickupline.destroy_all
Like.destroy_all

u1 = User.create(username: "BobXOXO", password: "123", profile_picture: "")
u2 = User.create(username: "MaryMyMomSux", password: "123", profile_picture: "")
u3 = User.create(username: "ChilledGamerDoode555", password: "123", profile_picture: "")
u4 = User.create(username: "HillTop22", password: "123", profile_picture: "")
u5 = User.create(username: "Kittylity", password: "123", profile_picture: "")
u6 = User.create(username: "DiaryPony", password: "123", profile_picture: "")
u7 = User.create(username: "CheeseWoman", password: "123", profile_picture: "")
u8 = User.create(username: "KityMcGee", password: "123", profile_picture: "")
u9 = User.create(username: "Ringbineta", password: "123", profile_picture: "")
u10 = User.create(username: "ReadyBaby", password: "123", profile_picture: "")
u11 = User.create(username: "SincereHot", password: "123", profile_picture: "")



def ru  #return random user
    return User.all.sample
end


p1 = Pickupline.create(content: "Are you a computer keyboard? Because you're my type.", category: "nerdy", user_id: ru.id)
p2 = Pickupline.create(content: "A life without you, would be like a computer without an OS.", category: "nerdy", user_id: ru.id)
p3 = Pickupline.create(content: "Are you sitting on the F5 key? Cause your ass is refreshing.", category: "nerdy", user_id: ru.id)
p4 = Pickupline.create(content: "Baby, if they made you in Java, you'd be the object of my desire.", category: "nerdy", user_id: ru.id)
p5 = Pickupline.create(content: "Before you, I was a PC without a power outlet.", category: "nerdy", user_id: ru.id)
p6 = Pickupline.create(content: "Do u like me? Text '1′ for 'Yes,' '2′ for 'No.", category: "nerdy", user_id: ru.id)
p7 = Pickupline.create(content: "Do you think we can make it a step more serious and disable network sharing?", category: "nerdy", user_id: ru.id)

p11 = Pickupline.create(content: "I'll be the peanut butter to your jelly.", category: "food", user_id: ru.id)
p12 = Pickupline.create(content: "If you were a vegetable, you’d be a CUTE-cumber.", category: "food", user_id: ru.id)
p13 = Pickupline.create(content: "If you were a fruit, you'd be a fineapple.", category: "food", user_id: ru.id)
p14 = Pickupline.create(content: "Your name must be Coca Cola, because you're so-da-licious", category: "food", user_id: ru.id)
p15 = Pickupline.create(content: "Baby, you got more legs than a bucket of KFC!", category: "food", user_id: ru.id)
p16 = Pickupline.create(content: "Are you from Starbucks? Because I like you a latte.", category: "food", user_id: ru.id)
p17 = Pickupline.create(content: "Do you want fries with that shake!", category: "food", user_id: ru.id)
p18 = Pickupline.create(content: "You make me melt like hot fudge on a sundae.", category: "food", user_id: ru.id)
p19 = Pickupline.create(content: "You must be a banana because I find you very a-peeling.", category: "food", user_id: ru.id)

p21 = Pickupline.create(content: "Are you Shakira, cuz those hips don't lie.", category: "music", user_id: ru.id)
p22 = Pickupline.create(content: "Are you Stacy's mom? Cause you've got it going on.", category: "music", user_id: ru.id)
p23 = Pickupline.create(content: "You had me at cello. Let's cut to the chase and duet already.", category: "music", user_id: ru.id)
p24 = Pickupline.create(content: "Your voice is so a-do-re-ble to mi.", category: "music", user_id: ru.id)
p25 = Pickupline.create(content: "Do your parents compose classical music, cause baby got Bach. ", category: "music", user_id: ru.id)

p26 = Pickupline.create(content: "Hi, I hear you're good at algebra.....Will you replace my eX without asking Y?", category: "math", user_id: ru.id)
p27 = Pickupline.create(content: "My ex-girlfriend is like the square root of -1,.... she's imaginary.", category: "math", user_id: ru.id)
p28 = Pickupline.create(content: "I heard you like math, so what's the sum of U+Me", category: "math", user_id: ru.id)
p29 = Pickupline.create(content: "Hey baby I'm an engineer. I can mend your broken heart", category: "math", user_id: ru.id)
p30 = Pickupline.create(content: "Are you a bank loan? Because you have all my interest. ", category: "math", user_id: ru.id)
p31 = Pickupline.create(content: "Girl my love for you goes on like the number pi", category: "math", user_id: ru.id)


Pickupline.create(content: "Are you Christmas, because I want to Merry you.", category: "holiday", user_id: ru.id)
Pickupline.create(content: "Baby, we need to get together before Christmas, because you can't spell 'love' with No-el.", category: "holiday", user_id: ru.id)
Pickupline.create(content: "Can you hold my gloves for a second? I usually warm them by the fireplace, but you are way hotter.", category: "holiday", user_id: ru.id)
Pickupline.create(content: "I didn't think I was a snowman, but you just made my heart melt.", category: "holiday", user_id: ru.id)
Pickupline.create(content: "I don't have a foot fetish, but I'm pretty into mistle-toe.", category: "holiday", user_id: ru.id)

Pickupline.create(content: "My CamelBak is full of whiskey.", category: "camping", user_id: ru.id)
Pickupline.create(content: "How do I find the trail that leads to your heart?", category: "camping", user_id: ru.id)
Pickupline.create(content: "If you're scared of the bears you can always come sleep in my tent.", category: "camping", user_id: ru.id)
Pickupline.create(content: "I'll scratch your mosquito bites if you'll scratch mine.", category: "camping", user_id: ru.id)
Pickupline.create(content: "Are you a campfire? Cause you're hot and I want s'more", category: "camping", user_id: ru.id)
Pickupline.create(content: "After we're done roasting marshmallows, I'd like to see s'more of you.", category: "camping", user_id: ru.id)
Pickupline.create(content: "May I check you for ticks?", category: "camping", user_id: ru.id)






def randB 
    return [true, false].sample
end

User.all.each { |u|
    Pickupline.all.each { |p| 
        Like.create(
            user_id: u.id,
            pickupline_id: p.id,
            fire: randB,
            cry: randB, 
            seenoevil: randB, 
            thinking: randB
        )
    }   
}

