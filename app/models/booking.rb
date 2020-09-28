class Booking < ApplicationRecord
  validates :last_name, :first_name, :email, :phone, :adults, :childrens, :arrival_date, :departure_date, :street, :city, :zipcode, :country, presence: true
  validates :adults, :childrens, inclusion: { in: (0..5).to_a}

  STATE = ['pending', 'waiting_for_deposit', 'confirmed', 'refund_pending', 'cancelled', 'denied', 'closed']

  # States: :pending, :waiting_for_deposit, :confirmed, :refund_pending, :cancelled, :denied, :closed

  state_machine :state, initial: :pending do
  # When creating the booking --> mail
  # after_transition pending: :waiting_for_deposit, do: :send_mail # Mail App : (1) Mail to customer booking received, (2) Mail to owner new booking awaiting
  # after_transition waiting_for_deposit: :confirmed, do: :send_confirmation_mail
  # after_transition waiting_for_deposit: :cancelled, do :send_cancelling_mail
  # after_transition pending: :denier, do :send_denial_mail

    event :requested_deposit do
      transition pending: :waiting_for_deposit
    end

    event :deny do
      transition pending: :denied
    end

    event :confirm do
      transition waiting_for_deposit: :confirmed
    end

    event :close do
      transition confirmed: :closed
    end

    event :refund_asked do
      transition confirmed: :refund_pending
    end

    event :cancel do
      transition [:waiting_for_deposit, :refund_pending] => :cancelled
    end
  end




end
