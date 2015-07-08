class PagesController < ApplicationController

  def index
  end

  def images
    @images = []
    12.times do |i|
      @images << {id: i, name: "Image #{i}", src: "image#{i}.jpg", selected: false}
    end
    @images.shuffle[0..4].map{ |i| i[:selected] = true }

    respond_to do |format|
      format.json { render json: @images}
    end
  end

end