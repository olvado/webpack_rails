json.selectedImages @selected_images do |image|
  json.extract! image, :id, :title, :file_src
  json.url image_url(image, format: :json)
end
json.selectableImages @selectable_images do |image|
  json.extract! image, :id, :title, :file_src
  json.url image_url(image, format: :json)
end