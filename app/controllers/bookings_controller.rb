class BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    @booking.state = 'pending'
    if @booking.save
      sleep(3)
      BookingMailer.new_booking(@booking).deliver_now
      redirect_to root_path
    else
      render :new
    end
  end

  def new
    @booking = Booking.new
  end



  def edit
    @booking = Booking.find(params[:id])
  end

  def update
    @booking = Booking.find(params[:id])
    @booking.update(params[:booking])
    # Will raise ActiveModel::ForbiddenAttributesError
  end



  private

  def booking_params
    params.require(:booking).permit(:arrival_date, :departure_date, :first_name, :last_name, :email, :phone, :adults, :childrens, :baby_bed, :street, :city, :zipcode, :country, :state, :locale, :comment, :language, :special_status)
  end

end
