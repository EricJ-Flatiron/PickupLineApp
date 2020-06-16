class SessionsController < ApplicationController
    # skip_before_action :authenticated, only: [:new,:create]

    def new
    end

    def create
        user = User.find_by(username: params[:username])
        if user && user.password == params[:password]
            session[:user_id] = user.id
            render json: session 
        else
            render text: "Wrong Username or Password"
        end
        
    end

    def destroy
        session[:user_id] = nil
      end
end

# 