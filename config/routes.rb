Rails.application.routes.draw do

  root to: 'site#index'

  namespace :api do

    namespace :v1 do

      post 'searcher', to: 'searcher#search'

    end

  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
