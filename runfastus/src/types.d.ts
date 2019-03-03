declare module 'gatsby-plugin-mailchimp' {
  type MailChimpResult = {
    msg: string
    result: string
  }
  function addToMailchimp(email: string): Promise<MailChimpResult>
  export default addToMailchimp
}

declare module 'typography-theme-wordpress-2016' {
  import {TypographyOptions} from 'typography'
  let Theme: TypographyOptions
  export default Theme
}