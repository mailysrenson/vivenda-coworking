class AddColumnsToBooking < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :special_status, :string
  end
end
