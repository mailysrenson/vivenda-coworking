class Booking < ApplicationRecord
  validates :last_name, :first_name, :email, :phone, :adults, :childrens, :arrival_date, :departure_date, :street, :city, :zipcode, :country, presence: true
  validates :adults, :childrens, inclusion: { in: (0..5).to_a}
end
