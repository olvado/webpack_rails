json.extract! @collection, :id, :title, :created_at, :updated_at
json.images @collection.images do |image|
  json.extract! image, :id, :title, :file_src
end
