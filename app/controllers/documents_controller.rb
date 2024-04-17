# frozen_string_literal: true

class DocumentsController < AuthenticatedController
  before_action :set_document, only: %i[show edit update destroy]

  def index
    render 'documents/index', locals: { documents: Document.all }
  end

  # GET /documents/1 or /documents/1.json
  def show; end

  # GET /documents/new
  def new
    @document = Document.new
  end

  # GET /documents/1/edit
  def edit; end

  # POST /documents or /documents.json
  def create
    @document = Document.new(document_params)

    respond_to do |format|
      if @document.save
        format.html { redirect_to document_url(@document), notice: 'Document was successfully created.' }
        format.json { render :show, status: :created, location: @document }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /documents/1 or /documents/1.json
  def update
    respond_to do |format|
      if @document.update(document_params)
        format.html { redirect_to document_url(@document), notice: 'Document was successfully updated.' }
        format.json { render :show, status: :ok, location: @document }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /documents/1 or /documents/1.json
  def destroy
    @document.destroy!

    respond_to do |format|
      format.html { redirect_to documents_url, notice: 'Document was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_document
    @document = Document.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def document_params # rubocop:disable Metrics/MethodLength
    params.require(:document).permit(:sender_1, :consignee_2, :delivery_place_3, :taking_over_place_4,
                                     :taking_over_date_4, :documents_5, :marks_6_1, :number_7_1, :method_8_1,
                                     :nature_9_1, :number_10_1, :weight_11_1, :volume_12_1, :marks_6_2, :number_7_2,
                                     :method_8_2, :nature_9_2, :number_10_2, :weight_11_2, :volume_12_2, :marks_6_3,
                                     :number_7_3, :method_8_3, :nature_9_3, :number_10_3, :weight_11_3, :volume_12_3,
                                     :marks_6_4, :number_7_4, :method_8_4, :nature_9_4, :number_10_4, :weight_11_4,
                                     :volume_12_4, :class_6, :number_7, :letter_8, :adr_9, :sender_instructions_13,
                                     :carriage_instructions_14, :carriage_paid_14, :carriage_forward_14,
                                     :cash_on_delivery_15, :carrier_16, :carriers_plates_16, :successive_carriers_17,
                                     :carriers_reservations_18, :special_agreements_19, :established_in_21,
                                     :established_in_date_21)
  end
end
