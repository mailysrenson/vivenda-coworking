ActiveAdmin.register Booking do
  actions :all, :except => :destroy
  controller do
    def permitted_params
      params.permit(:utf8, :_method, :authenticity_token, :locale, :commit, :id,
        booking: [:casas_id, :last_name, :first_name, :email, :phone, :adults, :childrens, :baby_bed, :arrival_date, :departure_date, :comment,:state, :street, :city, :zipcode, :country]
      )
    end
  end

    action_item :request_deposit, only: :show do
    link_to "Demande d'acompte", request_deposit_admin_booking_path(booking), method: :put
    end

    member_action :request_deposit, method: :put  do
    booking = Booking.find(params[:id])
    booking.requested_deposit!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :request_deny, only: :show do
    link_to 'Refuser la demande', request_deny_admin_booking_path(booking), method: :put
    end

    member_action :request_deny, method: :put  do
    booking = Booking.find(params[:id])
    booking.deny!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_confirm, only: :show do
    link_to 'Acompte reçu', booking_confirm_admin_booking_path(booking), method: :put
    end

    member_action :booking_confirm, method: :put  do
    booking = Booking.find(params[:id])
    booking.confirm!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_close, only: :show do
    link_to 'Clôturer la réservation', booking_close_admin_booking_path(booking), method: :put
    end

    member_action :booking_close, method: :put  do
    booking = Booking.find(params[:id])
    booking.close!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :request_refund, only: :show do
    link_to 'Rembourser', request_refund_admin_booking_path(booking), method: :put
    end

    member_action :request_refund, method: :put  do
    booking = Booking.find(params[:id])
    booking.refund_asked!
    booking.save!
    redirect_to admin_booking_path(booking)
    end

    action_item :booking_cancel, only: :show do
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
      f.input :language
      f.label :state
      f.collection_select :state, Booking::STATE, :to_s, :to_s
      f.input :comment
      f.submit
    end
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
