import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {

    getFirstService(): string {
        return "I am from Quiz controller"
    }
}
