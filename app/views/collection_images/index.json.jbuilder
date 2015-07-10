json.array!(@collection_images) do |collection_image|
  json.extract! collection_image, :id, :image_id, :collection_id
  json.url collection_image_url(collection_image, format: :json)
end
