class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.references :casas
      t.string :last_name
      t.string :first_name
      t.string :email
      t.string :phone
      t.integer :adults
      t.integer :childrens
      t.boolean :baby_bed, default: false
      t.date :arrival_date
      t.date :departure_date
      t.string :comment
      t.string :status, default: "Pending"
      t.string :street
      t.string :city
      t.integer :zipcode
      t.string :country


      t.timestamps
    end
  end
end
