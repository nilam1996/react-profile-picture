module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t){e.exports=require("react")},function(e,t,a){e.exports=a(5)()},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(0)),n=i(a(1)),o=i(a(10));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t={svg:{display:"inline-block",verticalAlign:"middle"},path:{fill:e.color,strokeWidth:e.strokeWidth}},a=o.default[e.name],n=["Icon Icon--"+e.name,e.className];return r.default.createElement("svg",{className:n.join(" "),style:t.svg,width:e.size+"px",height:e.size+"px",viewBox:"0 0 80 80"},r.default.createElement("path",{style:t.path,d:a}))};s.propTypes={name:n.default.string.isRequired,size:n.default.number,color:n.default.string,strokeWidth:n.default.string},s.defaultProps={size:16},t.default=s},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={EMPTY:"EMPTY",LOADING:"LOADING",DRAGOVER:"DRAGOVER",INVALID_FILE_TYPE:"INVALID_FILE_TYPE",INVALID_IMAGE_SIZE:"INVALID_IMAGE_SIZE",LOADED:"LOADED"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a(0),i=y(o),s=y(a(1)),u=y(a(7)),l=y(a(8)),c=y(a(9)),f=y(a(11)),d=y(a(3)),p=y(a(12)),m=y(a(2)),g=a(13),h=a(14),v=a(15),_=a(16),b=y(a(26));function y(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.dragging=!1,a.draggingPosition={x:0,y:0,clientX:0,clientY:0},a.canvasRef=i.default.createRef(),a.helperRef=i.default.createRef(),a.frameRef=i.default.createRef(),a.photoHelperRef=i.default.createRef(),a.inputFileRef=i.default.createRef(),a.state={status:d.default.EMPTY,loadedData:{},imageData:{},file:e.image},e.image&&a.processFile(e.image),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"componentWillMount",value:function(){this.registerImageEvents(),this.debug("[componentWillMount]")}},{key:"componentWillUnmount",value:function(){["mouseup","touchend","mousemove","touchstart"].forEach(function(e){return window.removeEventListener(e)}),this.debug("[componentWillUnmount]")}},{key:"resetState",value:function(){var e=r({},this.state);e.status=d.default.EMPTY,e.loadedData={},e.imageData={};var t=this.photoHelperRef.current,a=t.clientWidth,n=t.clientHeight,o=this.props.cropSize;this.setState(e,_.clearCanvas.bind(this,{photoCanvas:this.canvasRef.current,helperCanvas:this.helperRef.current,cropSize:o,helperWidth:a,helperHeight:n})),this.debug("[resetState]")}},{key:"setStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.default.EMPTY,t=r({},this.state);t.status=e,this.setState(t),this.props.onStatusChange.call(this,e),this.debug("[setStatus]",{status:e})}},{key:"dragStart",value:function(e){this.dragging=!0,this.draggingPosition.clientX=e.clientX,this.draggingPosition.clientY=e.clientY,e.touches&&(this.draggingPosition.clientX=e.touches[0].clientX,this.draggingPosition.clientY=e.touches[0].clientY),this.draggingPosition.x=this.draggingPosition.clientX-this.state.imageData.imageX,this.draggingPosition.y=this.draggingPosition.clientY-this.state.imageData.imageY,this.debug("[dragStart]",{draggingPosition:this.draggingPosition})}},{key:"registerImageEvents",value:function(){var e=this;["mouseup","touchend"].forEach(function(t){window.addEventListener(t,function(t){e.dragging=!1,e.debug("[mouseup, touchend]")},!1)}),["mousemove","touchstart"].forEach(function(t){window.addEventListener(t,function(t){if(e.dragging){t.preventDefault();var a=r({},e.state),n=r({},a.imageData),o=!1;e.draggingPosition.clientX=t.clientX,e.draggingPosition.clientY=t.clientY,t.touches&&(e.draggingPosition.clientX=t.touches[0].clientX,e.draggingPosition.clientY=t.touches[0].clientY);var i=e.draggingPosition.clientY-e.draggingPosition.y,s=e.draggingPosition.clientX-e.draggingPosition.x;s=Math.min(s,0),i=Math.min(i,0),n.imageWidth+s>=e.props.cropSize&&(n.imageX=s,o=!0),n.imageHeight+i>=e.props.cropSize&&(n.imageY=i,o=!0),o&&(a.imageData=n,e.setState(a,e.renderImage.bind(e)),e.debug("[mousemove, touchstart]",r({},n,{refresh:o})))}},!1)})}},{key:"handleDragOut",value:function(){this.setStatus(d.default.EMPTY),this.debug("[handleDragOut]")}},{key:"handleDragOver",value:function(){this.setStatus(d.default.DRAGOVER),this.debug("[handleDragOver]")}},{key:"handleZoom",value:function(e){this.scaleImage(Number(e.target.value)),this.props.onZoomChange.call(this,{zoom:e.target.value}),this.debug("[handleZoom]",{zoom:e.target.value})}},{key:"handleFileChange",value:function(e){this.readFile(e.target.files[0]),e.target.value="",this.debug("[handleFileChange]",{file:e.target.files[0]})}},{key:"handleTapToSelect",value:function(){this.inputFileRef.current.click(),this.debug("[handleTapToSelect]")}},{key:"handleOnDrop",value:function(e){this.readFile(e),this.debug("[handleOnDrop]",{file:e})}},{key:"handleRemove",value:function(){this.resetState(),this.props.onImageRemoved.call(this),this.debug("[onImageRemoved]")}},{key:"readFile",value:function(e){var t=this;this.setStatus(d.default.LOADING),(0,g.fileReader)(e,{onLoadStart:function(){t.props.onImageLoading.call(t),t.debug("[onLoadStart]")},onError:function(e){t.props.onError.call(t),t.debug("[onLoadStart]",{error:e})},onLoadEnd:function(a){var n=a.base64Image,o=r({},t.state);o.file=e,t.setState(o),t.processFile(n),t.debug("[onLoadEnd]",{data:a})}})}},{key:"processFile",value:function(e){var t=this;(0,h.processFile)(e,{minImageSize:this.props.minImageSize,maxImageSize:this.props.maxImageSize,onLoad:function(a){t.onImageDataLoaded(e,a),t.debug("[onLoad]",{data:a})},onError:function(e){t.props.onError.call(t),t.debug("[onError]",{error:e})}})}},{key:"onImageDataLoaded",value:function(e,t){var a=r({},this.state);a.loadedData=t;var n=this.props,o=n.cropSize,i=n.minZoom,s=n.maxZoom,u=(0,v.fitToFrame)({cropSize:o,imageWidth:t.imageWidth,imageHeight:t.imageHeight,minZoom:i,maxZoom:s}),l=(0,v.centerImage)({cropSize:o,imageWidth:u.imageWidth,imageHeight:u.imageHeight,imageX:u.imageX,imageY:u.imageY});u.imageX=l.imageX,u.imageY=l.imageY,u.imageSrc=t.imageSrc,a.imageData=u,a.status=d.default.LOADED,this.setState(a,this.renderImage.bind(this)),this.props.onImageLoaded.call(this,{data:t}),this.debug("[onImageLoaded]",{data:t})}},{key:"scaleImage",value:function(e){var t=r({},this.state),a=r({},t.imageData),n=r({},t.loadedData),o=(0,v.scaleImage)(r({},a,{zoom:e,originalWidth:n.originalImageWidth,originalHeight:n.originalImageHeight,cropSize:this.props.cropSize}));t.imageData=r({},a,o,{zoom:e}),this.setState(t,this.renderImage.bind(this)),this.debug("[scaleImage]",{zoom:e,data:t.imageData})}},{key:"renderImage",value:function(){if((0,_.renderToCanvas)(r({canvas:this.canvasRef.current,cropSize:this.props.cropSize,onError:this.props.onError.bind(this)},this.state.imageData)),this.props.useHelper){var e=this.frameRef.current,t=e.offsetLeft,a=e.offsetTop,n=this.photoHelperRef.current,o=n.clientWidth,i=n.clientHeight;(0,_.updateHelper)(r({canvas:this.helperRef.current,cropSize:this.props.cropSize,onError:this.props.onError.bind(this),frameTop:a,frameLeft:t,canvasWidth:o,canvasHeight:i},this.state.imageData))}this.props.onImagePropertiesChange.bind(this,{data:r({},this.state.imageData)}),this.debug("[scalrenderImageeImage]",{data:r({},this.state.imagesData)})}},{key:"renderMessages",value:function(){switch(this.state.status){case d.default.EMPTY:return i.default.createElement(u.default,{onClick:this.handleTapToSelect.bind(this)},p.default[this.state.status]);case d.default.LOADED:return null;default:return i.default.createElement(u.default,null,p.default[this.state.status])}}},{key:"getImageAsDataUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.canvasRef.current.toDataURL(e)}},{key:"getData",value:function(){return r({},this.state.imageData)}},{key:"setImage",value:function(e){this.readFile(e)}},{key:"debug",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.props.debug&&console.log(e,r({},t))}},{key:"render",value:function(){var e=[b.default["profile-picture"],b.default["profile-picture--"+this.state.status]];return i.default.createElement("div",{className:e.join(" ")},i.default.createElement("div",{className:b.default["profile-picture__photo"]},i.default.createElement("div",{className:b.default.photo__helper,onMouseDown:this.props.useHelper?this.dragStart.bind(this):null,onTouchStart:this.props.useHelper?this.dragStart.bind(this):null,ref:this.photoHelperRef},i.default.createElement(f.default,{onDrop:this.handleOnDrop.bind(this),onDragOver:this.handleDragOver.bind(this),onDragOut:this.handleDragOut.bind(this)},this.props.useHelper?i.default.createElement("canvas",{className:b.default["profile-picture__canvas-helper"],ref:this.helperRef}):null,i.default.createElement(l.default,{frameRef:this.frameRef,size:this.props.cropSize,format:this.props.frameFormat},i.default.createElement("canvas",{onMouseDown:this.props.useHelper?null:this.dragStart.bind(this),onTouchStart:this.props.useHelper?null:this.dragStart.bind(this),width:this.props.cropSize,height:this.props.cropSize,className:b.default["profile-picture__canvas"],ref:this.canvasRef}),this.renderMessages()))),i.default.createElement("div",{className:b.default.photo__options},this.state.status===d.default.LOADED?i.default.createElement(o.Fragment,null,i.default.createElement("div",{className:b.default.options__zoom},i.default.createElement(c.default,{min:this.state.imageData.minZoom,max:this.state.imageData.maxZoom,value:this.state.imageData.zoom,onChange:this.handleZoom.bind(this)})),i.default.createElement("div",{className:b.default.options__remove},i.default.createElement("button",{className:b.default.remove__button,onClick:this.handleRemove.bind(this)},i.default.createElement(m.default,{name:"trash",size:20})))):null)),i.default.createElement("input",{className:b.default["profile-picture__input"],type:"file",accept:"image/jpg,image/jpeg,image/png,image/bmp,image/gif",ref:this.inputFileRef,onChange:this.handleFileChange.bind(this)}))}}]),t}();E.propTypes={image:s.default.string,frameSize:s.default.number.isRequired,frameFormat:s.default.oneOf(["circle","square","rounded-square"]),cropSize:s.default.number.isRequired,minZoom:s.default.number.isRequired,maxZoom:s.default.number.isRequired,minImageSize:s.default.number.isRequired,maxImageSize:s.default.number.isRequired,useHelper:s.default.bool.isRequired,onImagePropertiesChange:s.default.func,onImageLoading:s.default.func,onImageLoaded:s.default.func,onImageRemoved:s.default.func,onError:s.default.func,onZoomChange:s.default.func,onStatusChange:s.default.func},E.defaultProps={frameSize:160,frameFormat:"rounded-square",cropSize:160,minZoom:.1,maxZoom:2,minImageSize:320,maxImageSize:1e3,useHelper:!1,onImagePropertiesChange:function(){},onImageLoading:function(){},onImageLoaded:function(){},onError:function(){},onZoomChange:function(){},onStatusChange:function(){},onImageRemoved:function(){}},t.default=E},function(e,t,a){"use strict";var r=a(6);function n(){}e.exports=function(){function e(e,t,a,n,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=n,a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a(0),o=u(n),i=u(a(1)),s=u(a(17));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",{className:s.default.message},this.props.onClick?o.default.createElement("button",{className:s.default.message__button,onClick:this.props.onClick},o.default.createElement("div",{className:s.default.message__content},this.props.children)):o.default.createElement("div",{className:s.default.message__content},this.props.children))}}]),t}();l.propTypes={onClick:i.default.func},t.default=l},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a(0),o=u(n),i=u(a(1)),s=u(a(22));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r(t,[{key:"render",value:function(){var e={circle:s.default["frame--circle"],square:s.default["frame--square"],"rounded-square":s.default["frame--rounded-square"]},t=[s.default.frame,e[this.props.format]],a={width:this.props.size+"px",height:this.props.size+"px"};return o.default.createElement("div",{className:t.join(" "),style:a,ref:this.props.frameRef},this.props.children)}}]),t}();l.propTypes={size:i.default.number.isRequired,format:i.default.oneOf(["circle","square","rounded-square"])},l.defaultProps={size:160,format:"circle"},t.default=l},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=a(0),o=l(n),i=l(a(1)),s=l(a(2)),u=l(a(24));function l(e){return e&&e.__esModule?e:{default:e}}var c="MIN",f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={limitReached:c},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r(t,[{key:"onChange",value:function(e){var t=Number(e.target.value).toFixed(2),a=Number(this.props.min).toFixed(2),r=Number(this.props.max).toFixed(2),n=!1;t===a&&(n=c),t===r&&(n="MAX"),this.setState({limitReached:n}),this.props.onChange.call(this,e)}},{key:"render",value:function(){var e=[u.default["zoom-scale__min"],u.default["zoom-scale__icon"]],t=[u.default["zoom-scale__max"],u.default["zoom-scale__icon"]];return this.state.limitReached===c&&e.push(u.default["zoom-scale__icon--disabled"]),"MAX"===this.state.limitReached&&t.push(u.default["zoom-scale__icon--disabled"]),o.default.createElement("div",{className:u.default["zoom-scale"]},o.default.createElement(s.default,{name:"picture",size:17,className:e.join(" ")}),o.default.createElement("input",{type:"range",className:u.default["zoom-scale__handler"],max:Number(this.props.max).toFixed(2),min:Number(this.props.min).toFixed(2),step:Number(this.props.step).toFixed(2),value:Number(this.props.value).toFixed(2),onChange:this.onChange.bind(this)}),o.default.createElement(s.default,{name:"picture",size:20,className:t.join(" ")}))}}]),t}();f.propTypes={min:i.default.number.isRequired,max:i.default.number.isRequired,step:i.default.number.isRequired,value:i.default.number.isRequired,onChange:i.default.func},f.defaultProps={min:0,max:1,step:.01,value:.5,onChange:function(){}},t.default=f},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={trash:"M63.281 13.281v6.719h-46.563v-6.719h11.563l3.438-3.281h16.563l3.438 3.281h11.563zM20 63.281v-40h40v40c0 3.594-3.125 6.719-6.719 6.719h-26.563c-3.594 0-6.719-3.125-6.719-6.719z",picture:"M28.281 45l-11.563 15h46.563l-15-20-11.563 15zM70 63.281c0 3.594-3.125 6.719-6.719 6.719h-46.563c-3.594 0-6.719-3.125-6.719-6.719v-46.563c0-3.594 3.125-6.719 6.719-6.719h46.563c3.594 0 6.719 3.125 6.719 6.719v46.563z",upload:"M46.719 43.281h10l-16.719-16.563-16.719 16.563h10v13.438h13.438v-13.438zM64.531 33.438c8.594 0.625 15.469 7.813 15.469 16.563 0 9.219-7.5 16.719-16.719 16.719h-43.281c-11.094 0-20-8.906-20-20 0-10.313 7.813-18.75 17.813-19.844 4.219-7.969 12.5-13.594 22.188-13.594 12.188 0 22.188 8.594 24.531 20.156z",loading:"M40 38.281l13.281-13.281v-11.719h-26.563v11.719zM53.281 55l-13.281-13.281-13.281 13.281v11.719h26.563v-11.719zM20 6.719h40v20l-13.281 13.281 13.281 13.281v20h-40v-20l13.281-13.281-13.281-13.281v-20z"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a(0),i=u(o),s=u(a(1));function u(e){return e&&e.__esModule?e:{default:e}}var l="IDLE",c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.dropzoneElement=i.default.createRef(),a.state={status:l},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n(t,[{key:"preventDefault",value:function(e){e.preventDefault(),e.dataTransfer.dropEffect="copy"}},{key:"handleDrop",value:function(e){this.setStatus(),e.stopPropagation(),"function"==typeof this.props.onDrop&&this.props.onDrop.call(this,e.dataTransfer.files[0])}},{key:"componentDidMount",value:function(){var e=this,t=this.dropzoneElement.current;["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(a){t.addEventListener(a,e.preventDefault.bind(e),!1)})}},{key:"componentWillUnount",value:function(){var e=this.dropzoneElement.current;["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(t){e.removeEventListener(t)})}},{key:"setStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=r({},this.state);t.status!==e&&(e===l&&"function"==typeof this.props.onDragOut&&this.props.onDragOut.call(this),"OVER"===e&&"function"==typeof this.props.onDragOver&&this.props.onDragOver.call(this),t.status=e,this.setState(t))}},{key:"render",value:function(){var e=this;return i.default.createElement("div",{ref:this.dropzoneElement,onDragEnter:function(){return e.setStatus("OVER")},onDragOver:function(){return e.setStatus("OVER")},onDragLeave:function(){return e.setStatus()},onDrop:this.handleDrop.bind(this)},this.props.children)}}]),t}();c.propTypes={onDrop:s.default.func},c.defaultProps={onDrop:function(){},onDragOver:function(){},onDragOut:function(){}},t.default=c},function(e,t,a){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=l(n),i=l(a(3)),s=l(a(2)),u=l(a(17));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=(c(r={},i.default.EMPTY,o.default.createElement("p",{className:u.default.message__text},"Drop your photo here or tap to select.")),c(r,i.default.LOADING,o.default.createElement(s.default,{name:"loading",size:48})),c(r,i.default.DRAGOVER,o.default.createElement(n.Fragment,null,o.default.createElement(s.default,{name:"upload",size:48}),o.default.createElement("p",{className:u.default.message__text},"Drop your photo"))),c(r,i.default.INVALID_FILE_TYPE,o.default.createElement(n.Fragment,null,o.default.createElement("p",{className:u.default.message__text},"Only images allowed."),o.default.createElement("p",{className:u.default.message__text},"Drop your photo here or tap to select."))),c(r,i.default.INVALID_IMAGE_SIZE,o.default.createElement(n.Fragment,null,o.default.createElement("p",{className:u.default.message__text},"Your photo must be larger than 350px."),o.default.createElement("p",{className:u.default.message__text},"Drop your photo here or tap to select."))),c(r,i.default.LOADED,null),r);t.default=f},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.fileReader=function(e,t){e.type.match("image.*")||"function"==typeof a.onError&&a.onError.call(void 0,{error:"INVALID_FILE_TYPE"});var a=r({onError:function(){},onLoadStart:function(){},onLoadEnd:function(){}},t),n=new FileReader;return n.onloadstart=function(){"function"==typeof a.onLoadStart&&a.onLoadStart.call(void 0,{file:e})},n.onloadend=function(t){"function"==typeof a.onLoadEnd&&a.onLoadEnd.call(void 0,{base64Image:t.target.result,type:e.type})},n.onerror=function(){"function"==typeof a.onError&&a.onError.call(void 0,{error:"UNKNOWN"})},n.readAsDataURL(e),n},t.UNKNOWN="UNKNOWN",t.INVALID_FILE_TYPE="INVALID_FILE_TYPE"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(e){return!!(e=e.toString()).match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i)};t.processFile=function(e,t){var a=new Image,o=r({minImageSize:320,maxImageSize:1e3,onError:function(){},onLoad:function(){}},t);n||(a.crossOrigin="anonymous"),a.onload=function(){var e=void 0,t=void 0,r=void 0,n=a.width,i=a.height;if((n<o.minImageSize||i<o.minImageSize)&&"function"==typeof o.onError)return o.onError.call(void 0,{error:"INVALID_IMAGE_SIZE"});o.maxImageSize/o.maxImageSize>o.imageHeight/o.imageWidth?(e=(t=o.maxImageSize)/i,r=parseFloat(n)*e):(e=(r=o.maxImageSize)/n,t=parseFloat(i)*e);var s={imageSrc:a,newWidth:r,newHeight:t,imageWidth:n,imageHeight:i,originalImageWidth:n,originalImageHeight:i,imageX:0,imageY:0,ratio:e};return"function"==typeof o.onLoad?o.onLoad.call(void 0,s):void 0},a.src=e},t.INVALID_IMAGE_SIZE="INVALID_IMAGE_SIZE",t.isDataUrl=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(e,t,a){var n=r({imageX:0,imageY:0,cropSize:160,imageWidth:320,imageHeight:320},a),o=(n.imageY-n.cropSize/2)/n.imageHeight,i=(n.imageX-n.cropSize/2)/n.imageWidth,s=o*t+n.cropSize/2,u=i*e+n.cropSize/2;return s=Math.min(s,0),e+(u=Math.min(u,0))<n.cropSize&&(u=-1*Math.abs(e-n.cropSize)),t+s<n.cropSize&&(s=-1*Math.abs(t-n.cropSize)),{imageX:u,imageY:s}};t.fitToFrame=function(e){var t=r({cropSize:160,imageWidth:320,imageHeight:320,minZoom:.1,maxZoom:2},e),a=void 0,n=void 0,o=void 0;return t.cropSize/t.cropSize>t.imageHeight/t.imageWidth?(o=(a=t.cropSize)/t.imageHeight,n=parseFloat(t.imageWidth)*o):(o=(n=t.cropSize)/t.imageWidth,a=parseFloat(t.imageHeight)*o),{scaleRatio:o,minZoom:o,maxZoom:t.maxZoom-o,zoom:o,imageWidth:n,imageHeight:a}},t.centerImage=function(e){var t=r({cropSize:160,imageWidth:320,imageHeight:320,imageX:0,imageY:0},e);t.imageX=t.imageX||0,t.imageY=t.imageY||0;var a=Math.abs(t.imageX-(t.imageWidth-t.cropSize)/2),n=Math.abs(t.imageY-(t.imageHeight-t.cropSize)/2);return a=t.imageX-a,n=t.imageY-n,a=Math.min(a,0),n=Math.min(n,0),t.imageWidth+a<t.cropSize&&(a=-1*Math.abs(t.imageWidth-t.cropSize)),t.imageHeight+n<t.cropSize&&(n=-1*Math.abs(t.imageHeight-t.cropSize)),{imageX:a,imageY:n}},t.getPosition=n,t.scaleImage=function(e){var t=r({zoom:.1,originalWidth:320,originalHeight:320},e),a=Math.ceil(t.originalWidth*t.zoom),o=Math.ceil(t.originalHeight*t.zoom);a=Math.max(a,e.cropSize),o=Math.max(o,e.cropSize);var i=n(a,o,e);return{imageWidth:a,imageHeight:o,imageX:i.imageX,imageY:i.imageY}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.renderToCanvas=function(e){var t=r({canvas:null,cropSize:160,imageSrc:null,imageX:0,imageY:0,imageWidth:320,imageHeight:320,onError:function(){}},e);t.canvas||"function"==typeof t.onError&&t.onError.call(void 0,{error:"INVALID_CANVAS"}),t.imageSrc||"function"==typeof t.onError&&t.onError.call(void 0,{error:"INVALID_IMAGESRC"});var a=t.canvas.getContext("2d");a.clearRect(0,0,t.cropSize,t.cropSize),a.save(),a.globalCompositeOperation="destination-over",a.drawImage(t.imageSrc,t.imageX,t.imageY,t.imageWidth,t.imageHeight),a.restore()},t.updateHelper=function(e){var t=r({canvas:null,imageSrc:null,imageX:0,imageY:0,imageWidth:320,imageHeight:320,rgbaColor:"rgba(255,255,255,.90)",frameLeft:0,frameTop:0,canvasWidth:0,canvasHeight:0,onError:function(){}},e);t.canvas||"function"==typeof t.onError&&t.onError.call(void 0,{error:"INVALID_CANVAS"}),t.imageSrc||"function"==typeof t.onError&&t.onError.call(void 0,{error:"INVALID_IMAGESRC"});var a=t.imageX+t.frameLeft,n=t.imageY+t.frameTop;t.canvas.width=t.canvasWidth,t.canvas.height=t.canvasHeight;var o=t.canvas.getContext("2d");o.clearRect(0,0,t.canvasWidth,t.canvasHeight),o.save(),o.globalCompositeOperation="destination-over",o.beginPath(),o.rect(0,0,t.canvasWidth,t.canvasHeight),o.fillStyle=t.rgbaColor,o.fill("evenodd"),o.drawImage(t.imageSrc,a,n,t.imageWidth,t.imageHeight),o.restore()},t.clearCanvas=function(e){var t=e.photoCanvas,a=e.helperCanvas,r=e.cropSize,n=e.helperWidth,o=e.helperHeight,i=t.getContext("2d");if(i.clearRect(0,0,r,r),i.save(),a){var s=a.getContext("2d");s.clearRect(0,0,n,o),s.save()}},t.INVALID_CANVAS="INVALID_CANVAS",t.INVALID_IMAGESRC="INVALID_IMAGESRC"},function(e,t){e.exports={message:"YpD9o6H9LydyYmaPWOwt",message__content:"_6IMSWtd3wtGGn2KgOcZIK",message__text:"fe6xZVPr1kb0CJksW39zV",message__button:"eXEoGG26iwSi6UiZD8FI6"}},,,,,function(e,t){e.exports={frame:"_2oSbenaQCQZPXOD75Sj6nE","frame--circle":"_2D3XigQoPKPCPCHAaOtqJP","frame--rounded-square":"_3m334JNOLa1lrKCCrXnNDG"}},,function(e,t){e.exports={"zoom-scale":"_1MKAF96uXJHSW-a1nWoriQ","zoom-scale__handler":"kWobJZ5IBLVJtFBD9JHAQ","zoom-scale__min":"_23VzqtDiBsdmyddgDcP2FF","zoom-scale__max":"_2JJI18xT4B0iIKyuZLMpk9","zoom-scale__icon--disabled":"_3L1oDMFmgTzTs8MCYm-pXt"}},,function(e,t){e.exports={"profile-picture":"_1Fq_tZ_l7SwH_r_a_SNOtA","profile-picture--EMPTY":"_1zaTZoyOruLA27LomLt6fx",frame:"_34KU8GIMgtEHCcQX2pjZJE","profile-picture--INVALID_FILE_TYPE":"_1KYh_YChgsCwB4c5gd4q1k","profile-picture--INVALID_IMAGE_SIZE":"_1Sok0Akre9PW5C22TIkrKD","profile-picture--LOADED":"_1PTKmYTPmkH41HyPQ6Yp1q","profile-picture__canvas-helper":"_33ob_2Sxjrzz9VgWuEn9xb","profile-picture__input":"_2Y6QsytFkIen8EZ8qRminO",photo:"_3pDZ7o2d3BEKT7GOFhs90M",photo__helper:"_1Ou1tAFc1VCD4TNa0XwE7z",photo__options:"GNSzzq7thIGJvQKQMnUF4",options__zoom:"_34iiqkc-jTKb3N7DvLLkwC",options__remove:"_10Kns8R3VdHSGFrESIz-4B",remove__button:"_1YelFC_KTV9aLijs9ogXcQ","profile-picture__canvas":"_1DghVSjROos1S_s0jPt9TQ"}}]);