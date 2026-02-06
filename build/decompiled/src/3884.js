// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var5 = {};
    var0 = 'function pnpm_FrameCallbackRegistryUITs1(){const frameCallbackRegistry={frameCallbackRegistry:new Map(),activeFrameCallbacks:new Set(),previousFrameTimestamp:null,nextCallId:0,runCallbacks:function(callId){var _this=this;const loop=function(timestamp){if(callId!==_this.nextCallId){return;}if(_this.previousFrameTimestamp===null){_this.previousFrameTimestamp=timestamp;}const delta=timestamp-_this.previousFrameTimestamp;_this.activeFrameCallbacks.forEach(function(callbackId){const callbackDetails=_this.frameCallbackRegistry.get(callbackId);const{startTime:startTime}=callbackDetails;if(startTime===null){callbackDetails.startTime=timestamp;callbackDetails.callback({timestamp:timestamp,timeSincePreviousFrame:null,timeSinceFirstFrame:0});}else{callbackDetails.callback({timestamp:timestamp,timeSincePreviousFrame:delta,timeSinceFirstFrame:timestamp-startTime});}});if(_this.activeFrameCallbacks.size>0){_this.previousFrameTimestamp=timestamp;requestAnimationFrame(loop);}else{_this.previousFrameTimestamp=null;}};if(this.activeFrameCallbacks.size===1&&callId===this.nextCallId){requestAnimationFrame(loop);}},registerFrameCallback:function(callback,callbackId){this.frameCallbackRegistry.set(callbackId,{callback:callback,startTime:null});},unregisterFrameCallback:function(callbackId){this.manageStateFrameCallback(callbackId,false);this.frameCallbackRegistry.delete(callbackId);},manageStateFrameCallback:function(callbackId,state){if(callbackId===-1){return;}if(state){this.activeFrameCallbacks.add(callbackId);this.runCallbacks(this.nextCallId);}else{const callback=this.frameCallbackRegistry.get(callbackId);callback.startTime=null;this.activeFrameCallbacks.delete(callbackId);if(this.activeFrameCallbacks.size===0){this.nextCallId+=1;}}}};global._frameCallbackRegistry=frameCallbackRegistry;}';
    var5.code = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = var4.runOnUIImmediately;
    var1 = function() {
        var1 = {};
        var2 = global;
        var3 = var2.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var1.frameCallbackRegistry = var3;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var5 = var3;
        var2 = new var5[var2](var4);
        var2 = var2 instanceof Object ? var2 : var3;
        var1.activeFrameCallbacks = var2;
        var2 = null;
        var1.previousFrameTimestamp = var2;
        var2 = 0;
        var1.nextCallId = var2;
        var2 = function arg0() {
            _fun35027: for (var _fun35027_ip = 0;;) switch (_fun35027_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var1;
                    var2 = function arg0() {
                        _fun35028: for (var _fun35028_ip = 0;;) switch (_fun35028_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var3 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var1 = var1.nextCallId;
                                if (!(var3 === var1)) {
                                    _fun35028_ip = 156;
                                    continue _fun35028
                                }
                            case 33:
                                var1 = _closure3_slot1;
                                var1 = var1.previousFrameTimestamp;
                                var3 = null;
                                if (!(var3 === var1)) {
                                    _fun35028_ip = 59;
                                    continue _fun35028
                                }
                            case 49:
                                var1 = _closure3_slot1;
                                var1.previousFrameTimestamp = var2;
                            case 59:
                                var1 = _closure3_slot1;
                                var5 = var1.previousFrameTimestamp;
                                var5 = var2 - var5;
                                var _closure4_slot1 = var5;
                                var6 = var1.activeFrameCallbacks;
                                var5 = var6.forEach;
                                var4 = function(arg0) { // Environment: var4
                                    _fun35029: for (var _fun35029_ip = 0;;) switch (_fun35029_ip) {
                                        case 0:
                                            var0 = _closure3_slot1;
                                            var2 = var0.frameCallbackRegistry;
                                            var1 = var2.get;
                                            var0 = arg0;
                                            var2 = var1.bind(var2)(var0);
                                            var4 = var2.startTime;
                                            var0 = null;
                                            if (!(var0 !== var4)) {
                                                _fun35029_ip = 83;
                                                continue _fun35029
                                            }
                                        case 38:
                                            var1 = var2.callback;
                                            var0 = {};
                                            var3 = _closure4_slot0;
                                            var0.timestamp = var3;
                                            var5 = _closure4_slot1;
                                            var0.timeSincePreviousFrame = var5;
                                            var3 = var3 - var4;
                                            var0.timeSinceFirstFrame = var3;
                                            var0 = var1.bind(var2)(var0);
                                            _fun35029_ip = 127;
                                            continue _fun35029;
                                        case 83:
                                            var3 = _closure4_slot0;
                                            var2.startTime = var3;
                                            var1 = var2.callback;
                                            var0 = {
                                                'timestamp': null,
                                                'timeSincePreviousFrame': null,
                                                'timeSinceFirstFrame': 0
                                            };
                                            var0.timestamp = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 127:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var4 = var5.bind(var6)(var4);
                                var1 = var1.activeFrameCallbacks;
                                var4 = var1.size;
                                var1 = 0;
                                if (!(!(var4 > var1))) {
                                    _fun35028_ip = 127;
                                    continue _fun35028
                                }
                            case 115:
                                var1 = _closure3_slot1;
                                var1.previousFrameTimestamp = var3;
                                _fun35028_ip = 156;
                                continue _fun35028;
                            case 127:
                                var1 = _closure3_slot1;
                                var1.previousFrameTimestamp = var2;
                                var1 = global;
                                var2 = var1.requestAnimationFrame;
                                var1 = _closure3_slot2;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 156:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var2;
                    var0 = var1.activeFrameCallbacks;
                    var4 = var0.size;
                    var0 = 1;
                    var0 = var0 === var4;
                    if (!var0) {
                        _fun35027_ip = 56;
                        continue _fun35027
                    }
                case 46:
                    var1 = var1.nextCallId;
                    var0 = var3 === var1;
                case 56:
                    if (!var0) {
                        _fun35027_ip = 74;
                        continue _fun35027
                    }
                case 59:
                    var0 = global;
                    var1 = var0.requestAnimationFrame;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 74:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.runCallbacks = var2;
        var2 = function arg0, arg1() {
            var0 = this;
            var3 = var0.frameCallbackRegistry;
            var2 = var3.set;
            var1 = {};
            var0 = arg0;
            var1.callback = var0;
            var0 = null;
            var1.startTime = var0;
            var0 = arg1;
            var0 = var2.bind(var3)(var0, var1);
            var0 = undefined;
            return var0;
        };
        var1.registerFrameCallback = var2;
        var2 = function arg0() {
            var2 = arg0;
            var0 = this;
            var3 = var0.manageStateFrameCallback;
            var1 = false;
            var1 = var3.bind(var0)(var2, var1);
            var1 = var0.frameCallbackRegistry;
            var0 = var1.delete;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var1.unregisterFrameCallback = var2;
        var0 = function arg0, arg1() {
            _fun35032: for (var _fun35032_ip = 0;;) switch (_fun35032_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = -1;
                    if (!(var0 !== var3)) {
                        _fun35032_ip = 133;
                        continue _fun35032
                    }
                case 16:
                    var0 = arg1;
                    if (var0) {
                        _fun35032_ip = 100;
                        continue _fun35032
                    }
                case 22:
                    var1 = var2.frameCallbackRegistry;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var3);
                    var0 = null;
                    var1.startTime = var0;
                    var1 = var2.activeFrameCallbacks;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var3);
                    var0 = var2.activeFrameCallbacks;
                    var1 = var0.size;
                    var0 = 0;
                    if (!(var0 === var1)) {
                        _fun35032_ip = 133;
                        continue _fun35032
                    }
                case 79:
                    var1 = var2.nextCallId;
                    var0 = 1;
                    var0 = var1 + var0;
                    var2.nextCallId = var0;
                    _fun35032_ip = 133;
                    continue _fun35032;
                case 100:
                    var1 = var2.activeFrameCallbacks;
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var3);
                    var1 = var2.runCallbacks;
                    var0 = var2.nextCallId;
                    var0 = var1.bind(var2)(var0);
                case 133:
                    var0 = undefined;
                    return var0;
            }
        };
        var1.manageStateFrameCallback = var0;
        var0 = _closure1_slot0;
        var0._frameCallbackRegistry = var1;
        var0 = undefined;
        return var0;
    };
    var6 = {};
    var1.__closure = var6;
    var6 = 12487935997347.0;
    var1.__workletHash = var6;
    var1.__initData = var5;
    var1 = var3.bind(var4)(var1);
    var2.prepareUIRegistry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3730]);