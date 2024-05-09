# frozen_string_literal: true

class UsersController < AuthenticatedController
  def index
    users = policy_scope(User)

    render 'users/index', locals: { users: }
  end
end
