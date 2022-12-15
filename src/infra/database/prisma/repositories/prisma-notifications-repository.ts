import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "src/application/entities/notification";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  findById(notificationId: string): Promise<Notification> {
    throw new Error("Method not implemented.");
  }
  
  save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
