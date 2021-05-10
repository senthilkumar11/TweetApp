import { reply } from "./reply"
import { user } from "./user";

export class tweet {
    date!: Date;
    id!: string;
    likes!: string[];
    reply!: reply[];
    tweet!: string;
    user!: string
}
