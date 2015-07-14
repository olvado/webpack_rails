class Image < ActiveRecord::Base
  validates_presence_of :title
  has_many :collection_images
  has_many :collections, through: :collection_images
  
  def file_src
    "http://placehold.it/#{file}"
  end

  def to_s
    title
  end
end
