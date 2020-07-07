import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Record {
  readonly id: string;
  readonly number: number;
  readonly owner?: string;
  constructor(init: ModelInit<Record>);
  static copyOf(source: Record, mutator: (draft: MutableModel<Record>) => MutableModel<Record> | void): Record;
}