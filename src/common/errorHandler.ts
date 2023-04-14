export default class HttpException extends Error {
  public status: number;
  public message: string;

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  constructor(status: number = 500, message: string) {
    super(message);
    this.message = message;
    this.status = status;
  }
}
