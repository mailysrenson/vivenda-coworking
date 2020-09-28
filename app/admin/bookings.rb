ActiveAdmin.register Booking do
  controller do
    def permitted_params
      params.permit(:utf8, :_method, :authenticity_token, :locale, :commit, :id,
        booking: [:casas_id, :last_name, :first_name, :email, :phone, :adults, :childrens, :baby_bed, :arrival_date, :departure_date, :comment,:state, :street, :city, :zipcode, :country]
      )
    end
  end

   action_item :request_deposit, only: :show do
    link_to 'request deposit', request_deposit_admin_booking_path(booking), method: :put
    end

   member_action :request_deposit, method: :put  do
    booking = Booking.find(params[:id])
    booking.requested_deposit!
    booking.save!
    redirect_to admin_booking_path(booking)
   end


# event :requested_deposit do
#       transition pending: :waiting_for_deposit
#     end

#     event :deny do
#       transition pending: :denied
#     end

#     event :confirm do
#       transition waiting_for_deposit: :confirmed
#     end

#     event :close do
#       transition confirmed: :closed
#     end

#     event :refund_asked do
#       transition confirmed: :refund_pending
#     end

#     event :cancel do
#       transition [:waiting_for_deposit, :refund_pending] => :cancelled
#    end


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



  f.submit class: "btn btn-red-own-activities"
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
