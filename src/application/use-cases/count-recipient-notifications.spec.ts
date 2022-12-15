import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";
import { NotificationNotFound } from "./errors/notification-not-found";

describe("Count recipients notification", () => {
  it("should be able to cancel notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository
    );

    const recipientId = "faker-id";

    await notificationsRepository.create(
      new Notification({
        category: "social",
        recipientId: recipientId,
        content: new Content("content"),
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: "social",
        recipientId: recipientId,
        content: new Content("content"),
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: "social",
        recipientId: "faker-id-2",
        content: new Content("content"),
      })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipientId,
    });

    expect(count).toEqual(2);
  });
});
