Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    root to: 'pages#home'

    get "/about_us", to: "pages#about_us"
    get "/contact", to: "pages#contact"

    resources :bookings, only: [:new, :edit, :update, :create]
  end
end
