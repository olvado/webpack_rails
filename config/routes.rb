Rails.application.routes.draw do

  resources :collections
  root to: "pages#index"

  get 'images', to: "pages#images"

end
