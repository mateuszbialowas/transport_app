# frozen_string_literal: true

module Users
  class InvitationsController < Devise::InvitationsController
    private

    def invite_resource(&)
      super { |user| user.role = User::CLIENT }
    end
  end
end
