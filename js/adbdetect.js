/*!
 * adBDetect v0.0.1
 * Author MuhBayu <bnugraha00@gmail.com>
 * Licensed under MIT license
 * Based on Javascript
 * https://github.com/MuhBayu/adBDetect
*/
(function(window) {
	var adBDetect = function() {
		var self = this;
		//* Default options
		self._options = {
			setPage: 'ad-detect.html',
			wait: 500,
			debug: false
		};
		self._var = {
			detected: false,
		}
		if (!(self instanceof adBDetect)){
		    return new adBDetect().init();
		}
		self.isDetected = function() {
			return self._var.detected;
		};
		self._log = function(e, t) {
			if(self._options.debug) return console.log(e,t);
		};
	};
	adBDetect.prototype.setup = function(args) {
		if(typeof args != "undefined") {
			if (typeof args.debug != "undefined") this._options.debug = args.debug;
			if (typeof args.setPage != "undefined") this._options.setPage = args.setPage;
			if (typeof args.wait != "undefined") this._options.wait = args.wait;
		} return this;
	};
	adBDetect.prototype.init = function() {
		var ad = document.createElement('div');
		ad.innerHTML = '&nbsp;&nbsp;&nbsp;';
		ad.className = window.atob('YWRzYnlnb29nbGU=');
		document.body.appendChild(ad);
		if(ad.offsetHeight===0) this._var.detected = true;
		return this;
	};
	adBDetect.prototype.start = function() {
		if(this.isDetected()) this.loadPage();
		this._log('AdBlock detected:', this.isDetected());
		return this;
	};
	adBDetect.prototype.loadPage = function() {
		var xhttp = new XMLHttpRequest();
		var $this = this;
		xhttp.open("GET", $this._options.setPage, true);
    	xhttp.send();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    	window.setTimeout(function() {
		    		document.getElementsByTagName('html')[0].innerHTML = xhttp.responseText;
		    	}, $this._options.wait);
		    }else if (this.readyState == 4 && this.status == 404) {
		    	$this._log('File not found "'+$this._options.setPage+'"', this.status);
		    }
		};
    	return this;
	};
	window.adBDetect = adBDetect;
})(window);