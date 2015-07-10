Rails.application.routes.draw do

  resources :collection_images
  resources :images
  resources :collections
  resources :collections
  root to: "pages#index"

  get 'images', to: "pages#images"

end
