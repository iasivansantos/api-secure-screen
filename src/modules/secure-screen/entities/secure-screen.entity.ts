import { BaseModel } from 'src/modules/shared/entity/base-model.entity';
import { Entity } from 'typeorm';

@Entity('secure_screens')
export class SecureScreen extends BaseModel {}
