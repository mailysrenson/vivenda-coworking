class ChangeStatusToState < ActiveRecord::Migration[6.0]
  def change
    rename_column :bookings, :status, :state
  end
end
