class AddRangesToBooking < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :range_date, :string
  end
end
