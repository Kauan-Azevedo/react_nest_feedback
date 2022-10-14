import { Injectable } from '@nestjs/common';
import { Feedback, PrismaPromise } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';


@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) { }

  async create(data: Feedback): Promise<Feedback> {
    return this.prisma.feedback.create({
      data,
    })
  }

  async findAll(): Promise<Feedback[]> {
    return await this.prisma.feedback.findMany();
  }

  async findOne(id: Feedback['id']): Promise<Feedback> {
    return await this.prisma.feedback.findFirst({
      where: {
        id,
      }
    })
  }

  async update(id: Feedback['id'], data: UpdateFeedbackDto): Promise<Feedback> {
    return await this.prisma.feedback.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<Feedback> {
    return await this.prisma.feedback.delete({
      where: {
        id,
      }
    });
  }
}
