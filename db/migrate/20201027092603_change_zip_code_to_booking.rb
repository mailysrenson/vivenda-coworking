class ChangeZipCodeToBooking < ActiveRecord::Migration[6.0]
  def change
    change_column :bookings, :zipcode, :string
  end
end
