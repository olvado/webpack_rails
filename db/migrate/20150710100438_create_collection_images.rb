class CreateCollectionImages < ActiveRecord::Migration
  def change
    create_table :collection_images do |t|
      t.belongs_to :image, index: true, foreign_key: true
      t.belongs_to :collection, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
