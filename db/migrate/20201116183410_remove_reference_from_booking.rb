class RemoveReferenceFromBooking < ActiveRecord::Migration[6.0]
  def change
    drop_table :casas
    add_column :bookings, :casa_assigned, :string
  end
end
