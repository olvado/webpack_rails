Rails.application.routes.draw do

  root to: "pages#index"

  get 'images', to: "pages#images"

end
