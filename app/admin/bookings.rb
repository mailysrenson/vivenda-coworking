ActiveAdmin.register Booking do
  actions :all, :except => :destroy
  scope :pending
  scope :deposit_requested
  scope :confirmed_waiting_for_payment
  scope :confirmed_and_paid
  scope :closed
  scope :refund_pending
  scope :cancelled
  scope :clients
  scope :famille
  scope :maintenance

  controller do
    def permitted_params
      params.permit(:utf8, :_method, :authenticity_token, :locale, :commit, :id,
        booking: [:casa_assigned, :last_name, :first_name, :email, :phone, :adults, :childrens, :baby_bed, :arrival_date, :departure_date, :comment, :state, :street, :city, :zipcode, :country, :special_status]
      )
    end
  end

    action_item :request_deposit, only: :show,
    if: proc{booking.state == 'pending'} do
    link_to "Demander l'acompte", request_deposit_admin_booking_path(booking), method: :put
    end

    member_action :request_deposit, method: :put  do
    booking = Booking.find(params[:id])
    booking.requested_deposit!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :request_deny, only: :show,
    if: proc{booking.state == 'pending'}  do
    link_to 'Refuser la demande', request_deny_admin_booking_path(booking), method: :put
    end

    member_action :request_deny, method: :put  do
    booking = Booking.find(params[:id])
    booking.deny!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_confirm_wait_for_payment, only: :show,
    if: proc{booking.state == 'waiting_for_deposit'}  do
    link_to 'Acompte reçu', booking_confirm_wait_for_payment_admin_booking_path(booking), method: :put
    end

    member_action :booking_confirm_wait_for_payment, method: :put  do
    booking = Booking.find(params[:id])
    booking.confirm_wait_for_payment!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_confirm_and_paid, only: :show,
    if: proc{booking.state == 'confirmed_waiting_for_payment'}  do
    link_to 'Paiement finalisé', booking_confirm_and_paid_admin_booking_path(booking), method: :put
    end

    member_action :booking_confirm_and_paid, method: :put  do
    booking = Booking.find(params[:id])
    booking.confirm_and_paid!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_close, only: :show,
    if: proc{booking.state == 'confirmed_and_paid'}  do
    link_to 'Clôturer la réservation', booking_close_admin_booking_path(booking), method: :put
    end

    member_action :booking_close, method: :put  do
    booking = Booking.find(params[:id])
    booking.close!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :request_refund, only: :show,
    if: proc{booking.state == 'confirmed'}  do
    link_to 'Rembourser', request_refund_admin_booking_path(booking), method: :put
    end

    member_action :request_refund, method: :put  do
    booking = Booking.find(params[:id])
    booking.refund_asked!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_cancel, only: :show,
    if: proc{booking.state == 'waiting_for_deposit' || booking.state == 'refund_pending'}  do
    link_to 'Annuler la réservation', booking_cancel_admin_booking_path(booking), method: :put
    end

    member_action :booking_cancel, method: :put  do
    booking = Booking.find(params[:id])
    booking.cancel!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

  form do |f|
    f.inputs "Nouvelle réservation" do
      f.label :arrival_date
      f.date_field :arrival_date, as: :string, input_html: {class: "datepicker-arrival", id: "arrival-date"}
      f.label :departure_date
      f.date_field :departure_date, as: :string, input_html: {class: "datepicker-departure", readonly: true}
      f.input :adults, input_html: {id: "booking_adults"}, selected: 0, collection: 0..5
      f.input :childrens, input_html: {class: "people-limit"}, selected: 0, collection: 0..5
      f.check_box :baby_bed, as: :boolean, boolean_style: :inline
      f.label :baby_bed
      f.input :first_name
      f.input :last_name
      f.input :email
      f.input :phone
      f.input :street
      f.input :city
      f.input :zipcode
      f.input :country 
      f.label :special_status
      f.collection_select :special_status, Booking::SPECIAL, :to_s, :to_s
      f.label :state
      f.collection_select :state, Booking::STATE, :to_s, :to_s
      f.label :casa_assigned
      f.collection_select :casa_assigned, Booking::CASAS, :to_s, :to_s
      f.input :comment
      f.submit
    end
  end

  index do
    column :last_name
    column :first_name
    column :arrival_date
    column :departure_date
    column :casa_assigned
    column :state
    column :special_status
    actions
  end
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
#permit_params :casas_id, :last_name, :first_name, :email, :phone, :adults, :childrens, :baby_bed, :arrival_date, :departure_date, :comment, :locale, :state, :street, :city, :zipcode, :country
  #
  # or
  #
  # permit_params do
  #   permitted = [:casas_id, :last_name, :first_name, :email, :phone, :adults, :childrens, :baby_bed, :arrival_date, :departure_date, :comment, :status, :street, :city, :zipcode, :country]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
