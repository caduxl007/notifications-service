import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe("Count recipients notification", () => {
  it("should be able to cancel notification", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository
    );

    const recipientId = "faker-id";

    await notificationsRepository.create(makeNotification({ recipientId }));

    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(
      makeNotification({ recipientId: "faker-id-2" })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipientId,
    });

    expect(count).toEqual(2);
  });
});
