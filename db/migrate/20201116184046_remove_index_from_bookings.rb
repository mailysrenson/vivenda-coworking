class RemoveIndexFromBookings < ActiveRecord::Migration[6.0]
  def change
    remove_index :bookings, name: :index_bookings_on_casas_id
  end
end
