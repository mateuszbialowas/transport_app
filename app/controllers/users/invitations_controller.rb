# frozen_string_literal: true

module Users
  class InvitationsController < Devise::InvitationsController
    include Pundit::Authorization

    before_action :authenticate_user!

    private

    def invite_resource(&)
      super { |user| user.role = User::CLIENT }
    end
  end
end
