import { Module } from "@nestjs/common";
import { NotificationsController } from "./http/controllers/notifications.controller";

@Module({
  imports: [],
  controllers: [NotificationsController]
})
export class HttpModule {}