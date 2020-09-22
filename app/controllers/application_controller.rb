class ApplicationController < ActionController::Base

  before_action :set_locale

  def set_locale
    I18n.locale = params[:lang] || locale_from_header || I18n.default_locale
  end

  def locale_from_header
    # The locale array is defined with symbols, so the first step is to change it to strings
    @available_locales_strings = I18n.available_locales.map do |language|
      language.to_s
    end
    # We initialize a variable result with the value false, so that we can return false if none of
    # languages from the header is included in the defined locales
    result = false
    # We go through each of the languages from the header and check if it is included in the locales
    # if it is included, we reassign the variable result to the language
    request.env.fetch('HTTP_ACCEPT_LANGUAGE', '').scan(/[a-z]{2}/).each do |language|
      if @available_locales_strings.include?(language)
        return result = language
      end
    end
    result
  end
end
