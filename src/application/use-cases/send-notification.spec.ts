import { SendNotification } from "./send-notification";

describe("Notification", () => {
  it("should be able to create a notification", () => {
    const notification = new SendNotification().execute({
      category: "social",
      recipientId: "id",
      content: "content",
    });

    expect(notification).toBeTruthy();
  });
});
