# frozen_string_literal: true

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/emails' if Rails.env.development?

  devise_for :users, controllers: { invitations: 'users/invitations' }
  devise_scope :user do
    authenticated :user do
      root 'static_pages#home'
      resources :documents do
        collection do
          resources :available_hours, only: [:index], module: :documents
        end
      end

      resources :calendar, only: [:index] do
        collection do
          get :events
        end
      end
    end

    resources :users, only: [:index]

    unauthenticated do
      root 'devise/sessions#new', as: :unroot
    end
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
end
