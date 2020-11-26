class ApplicationMailer < ActionMailer::Base
  default from: 'info@anossacoroa.com',
          bcc: 'info@anossacoroa.com'
  layout 'mailer'
end
