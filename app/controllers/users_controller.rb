# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    users = User.all

    render 'users/index', locals: { users: }
  end
end
