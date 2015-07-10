class Collection < ActiveRecord::Base
  validates_presence_of :title
  has_many :collection_images
  has_many :images, through: :collection_images
end
