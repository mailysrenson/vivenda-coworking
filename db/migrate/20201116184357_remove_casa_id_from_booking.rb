class RemoveCasaIdFromBooking < ActiveRecord::Migration[6.0]
  def change
    remove_column :bookings, :casas_id
    remove_column :bookings, :language
  end
end
