import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

describe("Notification", () => {
  it("should be able to create a notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: "social",
      recipientId: "id",
      content: "content",
    });

    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
