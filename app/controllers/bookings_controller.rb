class BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      redirect_to root_path
    else
      render :new
    end
  end

  def new
    @booking = Booking.new
  end

  def edit
  end

  def update
  end

  private

  def booking_params
    params.require(:booking).permit(:arrival_date, :departure_date, :first_name, :last_name, :email, :phone, :adults, :childrens, :baby_bed, :street, :city, :zipcode, :country, :state, :locale)
  end

end
