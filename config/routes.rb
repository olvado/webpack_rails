Rails.application.routes.draw do

  resources :images
  resources :collections do
    get 'images'
    post 'update-images'
  end
  root to: "collections#index"

end
