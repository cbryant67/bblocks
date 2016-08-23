Rails.application.routes.draw do
  


  #Devise
  devise_for :users
   devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :posts
  resources "contacts", only: [:new, :create]
  resources :charges
  
  get '/home' => 'pages#home'

  get '/about' => 'pages#about'

  get '/ourwork' => 'posts#index'

  get '/contact' => 'contacts#new'

  get '/store' => 'pages#store'

  get 'contact' => 'contacts#new'

  post 'contact' => 'contacts#create'

  get '/thankyou' => 'charges#create'

  get '/donate' => 'charges#new'

  root 'pages#home'

  get '*path' => redirect('/')


end
