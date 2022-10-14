import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from '@prisma/client';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) { }

  @Get()
  async findAll(): Promise<Feedback[]> {
    return await this.feedbackService.findAll();
  }

  @Get('byId/:id')
  async read(@Param('id') id: Feedback['id']): Promise<Feedback> {
    return await this.feedbackService.findOne(id);
  }

  @Post()
  async create(@Body() data: Feedback): Promise<Feedback> {
    return await this.feedbackService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: Feedback['id'], @Body() data: Feedback): Promise<Feedback> {
    return await this.feedbackService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: Feedback['id']): Promise<string> {
    let response: string = `O livro de id: ${id}\nFoi deletado com sucesso!`

    return response;
  }
}
