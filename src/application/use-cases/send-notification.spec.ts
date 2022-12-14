import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe("Notification", () => {
  it("should be able to create a notification", async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      category: "social",
      recipientId: "id",
      content: "content",
    });

    expect(notifications).toHaveLength(1);
  });
});
