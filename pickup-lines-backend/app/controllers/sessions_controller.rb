class SessionsController < ApplicationController
    # skip_before_action :authenticated, only: [:new,:create]

    def new

    end

    def create
      user = User.new(username: params[:username], password: [:password])
      user.save
      render json: user
    end

    def destroy
        session[:user_id] = nil
      end
end

# 