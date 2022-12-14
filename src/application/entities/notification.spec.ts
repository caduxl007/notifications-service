import { Content } from "./content";
import { Notification } from "./notification";

describe("Notification", () => {
  it("should be able to create a notification", () => {
    const notification = new Notification({
      category: 'social',
      recipientId: 'id',
      content: new Content('content'),
    });

    expect(notification).toBeTruthy();
  });
});
