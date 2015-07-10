json.array!(@images) do |image|
  json.extract! image, :id, :title, :file, :collection_id
  json.url image_url(image, format: :json)
end
