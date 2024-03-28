import nodemailer from "nodemailer";
import MailInterface from "./interfaces/MailInterface";
import Logging from "./Logging";

export default class MailService {
  private static instance: MailService;
  private transporter: nodemailer.Transporter;

  private constructor() {}
  //INSTANCE CREATE FOR MAIL
  static getInstance() {
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }
    return MailService.instance;
  }

  //CREATE A CONNECTION FOR LIVE
  async createConnection() {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  //SEND MAIL
  async sendMail(
    requestId: string | number | string[],
    options: MailInterface,
  ) {
    return await this.transporter
      .sendMail({
        from: ` ${process.env.SMTP_SENDER || options.from}`,
        to: options.to,
        cc: options.cc,
        bcc: options.bcc,
        subject: options.subject,
        text: options.text,
        html: options.html,
      })
      .then((info) => {
        Logging.info(`${requestId} - Mail sent successfully!!`);
        Logging.info(
          `${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`,
        );
        if (process.env.NODE_ENV === "development") {
          Logging.info(
            `${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(
              info,
            )}`,
          );
        }
        return info;
      });
  }
  //VERIFY CONNECTION
  async verifyConnection() {
    return this.transporter.verify();
  }
  //CREATE TRANSPORTER
  getTransporter() {
    return this.transporter;
  }
}
