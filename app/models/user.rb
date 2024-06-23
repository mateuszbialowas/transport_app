# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable, :validatable

  ADMIN = 'admin'
  CLIENT = 'client'

  ROLES = [ADMIN, CLIENT].freeze

  enum role: { admin: ADMIN, client: CLIENT }

  has_many :documents, dependent: :destroy

  # Validations
  validates :role, presence: true, inclusion: { in: ROLES }
end
