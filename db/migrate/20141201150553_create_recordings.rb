class CreateRecordings < ActiveRecord::Migration
  def change
    create_table :recordings do |t|
      t.string :filename, null: false
      t.references :movie
      t.index :filename
    end
  end
end
