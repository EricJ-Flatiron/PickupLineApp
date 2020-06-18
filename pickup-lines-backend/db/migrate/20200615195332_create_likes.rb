class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.boolean :fire
      t.boolean :cry
      t.boolean :seenoevil
      t.boolean :thinking
      t.boolean :crispy
      t.integer :user_id
      t.integer :pickupline_id

      t.timestamps
    end
  end
end
