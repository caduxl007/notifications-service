import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { GetRecipientNotifications } from "./get-recipient-notifications";

describe("Get recipients notification", () => {
  it("should be able to get notifications", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository
    );

    const recipientId = "faker-id";

    await notificationsRepository.create(makeNotification({ recipientId }));

    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(
      makeNotification({ recipientId: "faker-id-2" })
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: recipientId,
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ])
    );
  });
});
