class HomeController < ApplicationController
  def index
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
end
