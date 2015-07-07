class PagesController < ApplicationController

  def index
  end

  def collection
    @images = []
    12.times do |i|
      @images << {id: i, name: "Image #{i}", src: "image#{i}.jpg"}
    end
    @collection_images = @images.shuffle[0..4]
    json = {
      collection: {
        id: 1,
        name: "My collection",
        images: @collection_images
      }
    }
    json[:images] = @images
    respond_to do |format|
      format.json { render json: json}
    end
  end

end