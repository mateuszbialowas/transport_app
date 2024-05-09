# frozen_string_literal: true

class AuthenticatedController < ApplicationController
  include Pundit::Authorization

  before_action :authenticate_user!
end
