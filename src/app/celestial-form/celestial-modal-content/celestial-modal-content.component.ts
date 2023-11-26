import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-celestial-modal-content",
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Riepilogo</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p class="fw-bold">Payload: </p>
      <pre>
        {{ JSON.stringify(payload, null, 4) }}
      </pre>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>`
})
export class CelestialModalContentComponent {
  protected readonly JSON = JSON;
  
  @Input() payload: any | null = null;

  constructor(public activeModal: NgbActiveModal) {
  }

}
