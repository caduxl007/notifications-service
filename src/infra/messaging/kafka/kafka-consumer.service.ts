import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: "notifications",
        brokers: ["engaging-seal-7022-us1-kafka.upstash.io:9092"],
        sasl: {
          mechanism: "scram-sha-256",
          username:
            "ZW5nYWdpbmctc2VhbC03MDIyJEWDbvLGMpXZwvkGkk1zOF-flLfl2mCWcFmNBPg",
          password:
            "1LA4JfTWaJhRkXZKv5bfXs0g_NLPibgjluijSx3lKh00tse3-3wKocicxUf7DcYzEe0RJQ==",
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
