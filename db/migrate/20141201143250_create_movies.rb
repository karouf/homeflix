class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :cover
    end
    add_index :movies, :title
  end
end
