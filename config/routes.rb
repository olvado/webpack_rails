Rails.application.routes.draw do

  resources :collection_images
  resources :images
  resources :collections do
    get 'edit-images'
  end
  root to: "collections#index"

end
