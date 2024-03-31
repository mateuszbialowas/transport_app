Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: "/emails" if Rails.env.development?

  devise_for :users, controllers: { invitations: 'users/invitations' }
  devise_scope :user do
    authenticated :user do
      root 'static_pages#home'
    end

    resources :users, only: [:index]

    unauthenticated do
      root 'devise/sessions#new', as: :unroot
    end
  end


  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
end
