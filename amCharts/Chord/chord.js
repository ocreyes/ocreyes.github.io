(function()  {
    let amScript = document.createElement('script');
    let amScript2 = document.createElement('script');
    let amScript3 = document.createElement('script');

    amScript.src = 'https://www.amcharts.com/lib/4/core.js';
    amScript2.src = 'https://www.amcharts.com/lib/4/charts.js';
    amScript3.src = 'https://www.amcharts.com/lib/4/themes/animated.js';

    amScript.async = false;
    amScript2.async = false;
    amScript3.async = false;
    
    document.head.appendChild(amScript);
    document.head.appendChild(amScript2);
    document.head.appendChild(amScript3);

    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
        </style>
    `;

    /*amScript.onload = () => 
    amScript2.onload = () => 
    amScript3.onload = () => 

    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4charts.ChordDiagram);*/

	class Chord extends HTMLElement {
        
        disconnectedCallback () {
            // your cleanup code goes here
            try{
                document.head.removeChild(amScript);
                document.head.removeChild(amScript2);
                document.head.removeChild(amScript3);
            }
            catch{}
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
                const bcRect = this.getBoundingClientRect();
                this._widgetHeight = bcRect.height;
                this._widgetWidth = bcRect.width;
    
                this.redraw();
        }

		constructor() {
			super(); 
            
            this._shadowRoot = this.attachShadow({mode: 'open'});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._svgContainer;
			
		}

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {

        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        redraw(){}
	}
	
	customElements.define("com-demo-chord", Chord);
})();
