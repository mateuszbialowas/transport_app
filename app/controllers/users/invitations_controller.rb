class Users::InvitationsController < Devise::InvitationsController
  private

  def invite_resource(&block)
    super { |user| user.role = User::CLIENT }
  end
end
