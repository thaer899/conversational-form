/// <reference path="Button.ts"/>

// namespace
namespace cf {
	// interface

	// class
	export class CheckboxButton extends Button {

		public get type():string{
			return "CheckboxButton";
		}

		public get checked():boolean{
			return this.el.getAttribute("checked") == "checked";
		}

		public set checked(value: boolean){
			if(!value){
				this.el.removeAttribute("checked");
			}else{
				this.el.setAttribute("checked", "checked");
			}
		}

		protected onClick(event: MouseEvent){
			this.checked = !this.checked;
		}

		// override
		public getTemplate () : string {
			const isChecked: boolean = this.referenceTag.value == "1" || this.referenceTag.domElement.hasAttribute("checked");
			return `<cf-button class="cf-button cf-checkbox-button `+(this.referenceTag.label.trim().length == 0 ? "no-text" : "")+`" checked=`+(isChecked ? "checked" : "")+`>
				<cf-checkbox></cf-checkbox>
				` + this.referenceTag.label + `
			</cf-button>
			`;
		}
	}
}

