import { observable, Service } from "react-soa";

@Service
export class CounterService {
  @observable value = 0;

  increment() {
    this.value++;
  }
}
