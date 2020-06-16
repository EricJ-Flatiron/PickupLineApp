class CreatePickuplines < ActiveRecord::Migration[6.0]
  def change
    create_table :pickuplines do |t|
      t.string :content
      t.string :category
      t.integer :user_id

      t.timestamps
    end
  end
end
