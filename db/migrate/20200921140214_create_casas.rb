class CreateCasas < ActiveRecord::Migration[6.0]
  def change
    create_table :casas do |t|
      t.string :name

      t.timestamps
    end
  end
end
