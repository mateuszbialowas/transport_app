# frozen_string_literal: true

class DocumentsController < AuthenticatedController
  before_action :set_document, only: %i[show edit update destroy]

  def index
    render 'documents/index', locals: { documents: Document.all }
  end

  def show
    render 'documents/show', locals: { document: @document }
  end

  def new
    document = Document.new
    render 'documents/new', locals: { document:, available_hours: [] }
  end

  def edit
    available_hours = ::AvailableHours.new(@document.taking_over_date, document: @document).call
    render 'documents/edit', locals: { document: @document, available_hours: }
  end

  def create
    parsed_end_time = Time.zone.parse(document_params[:taking_over_start_time]) if document_params[:taking_over_start_time].present?
    parsed_end_time = parsed_end_time.present? ? parsed_end_time + 30.minutes : nil

    document = Document.new(document_params.merge(
                              cmr_number: Random.rand(1000..9999),
                              taking_over_end_time: parsed_end_time
                            ))

    if document.save
      redirect_to document_url(document), notice: 'Document was successfully created.'
    else
      available_hours = ::AvailableHours.new(document.taking_over_date, document: @document).call

      render :new, status: :unprocessable_entity, locals: { document:, available_hours: }
    end
  end

  def update
    if @document.update(document_params)
      redirect_to document_url(@document), notice: 'Document was successfully updated.'
    else
      available_hours = ::AvailableHours.new(@document.taking_over_date, document: @document).call
      render :edit, status: :unprocessable_entity, locals: { document: @document, available_hours:}
    end
  end

  def destroy
    @document.destroy!

    redirect_to documents_url, notice: 'Document was successfully destroyed.'
  end

  private

  def set_document
    @document = Document.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to documents_url, alert: 'Document not found.'
  end

  def document_params # rubocop:disable Metrics/MethodLength
    params.require(:document).permit(:sender, :consignee, :delivery_place, :taking_over_place,
                                     :documents, :marks_6_1, :number_7_1, :method_8_1,
                                     :nature_9_1, :number_10_1, :weight_11_1, :volume_12_1, :marks_6_2, :number_7_2,
                                     :method_8_2, :nature_9_2, :number_10_2, :weight_11_2, :volume_12_2, :marks_6_3,
                                     :number_7_3, :method_8_3, :nature_9_3, :number_10_3, :weight_11_3, :volume_12_3,
                                     :marks_6_4, :number_7_4, :method_8_4, :nature_9_4, :number_10_4, :weight_11_4,
                                     :volume_12_4, :class_6, :number_7, :letter_8, :adr_9, :sender_instructions_13,
                                     :carriage_instructions_14, :carriage_paid_14, :carriage_forward_14,
                                     :cash_on_delivery_15, :carrier_16, :carriers_plates_16, :successive_carriers_17,
                                     :carriers_reservations_18, :special_agreements_19, :established_in_21,
                                     :established_in_date_21, :taking_over_date, :taking_over_start_time)
  end
end
