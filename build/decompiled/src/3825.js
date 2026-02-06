// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34144: for (var _fun34144_ip = 0;;) switch (_fun34144_ip) {
        case 0:
            var5 = global;
            var7 = require;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var8;
            var13 = function arg0, arg1() {
                _fun34145: for (var _fun34145_ip = 0;;) switch (_fun34145_ip) {
                    case 0:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.ComponentRegistry;
                        var2 = var3.getComponent;
                        var1 = arg0;
                        var3 = var2.bind(var3)(var1);
                        if (!var3) {
                            _fun34145_ip = 64;
                            continue _fun34145
                        }
                    case 48:
                        var2 = var3._updateReanimatedProps;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                    case 64:
                        return var0;
                }
            };
            var _closure1_slot8 = var13;
            var6 = global;
            var9 = var6.Object;
            var4 = var9.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var9)(var2, var0, var3);
            var10 = {};
            var0 = 'function pnpm_updatePropsTs1(viewDescriptors,updates,isAnimatedProps){const{_updatePropsJS}=this.__closure;var _viewDescriptors$valu;(_viewDescriptors$valu=viewDescriptors.value)===null||_viewDescriptors$valu===void 0||_viewDescriptors$valu.forEach(function(viewDescriptor){const component=viewDescriptor.tag;_updatePropsJS(updates,component,isAnimatedProps);});}';
            var10.code = var0;
            var9 = {};
            var0 = "function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);}";
            var9.code = var0;
            var4 = 0;
            var3 = var8[var4];
            var0 = undefined;
            var11 = var7.bind(var0)(var3);
            var3 = var11.shouldBeUseWeb;
            var3 = var3.bind(var11)();
            if (var3) {
                _fun34144_ip = 204;
                continue _fun34144
            }
        case 117:
            var3 = function arg0, arg1() {
                _fun34148: for (var _fun34148_ip = 0;;) switch (_fun34148_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var3;
                        var2 = var4.value;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun34149: for (var _fun34149_ip = 0;;) switch (_fun34149_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = _closure1_slot0;
                                    var3 = var2.lastUpdateByTag;
                                    var2 = var1.tag;
                                    var8 = var3[var2];
                                    var2 = null;
                                    if (!(var2 == var8)) {
                                        _fun34149_ip = 33;
                                        continue _fun34149
                                    }
                                case 31:
                                    var8 = {};
                                case 33:
                                    var0 = _closure1_slot0;
                                    var4 = var0.lastUpdateByTag;
                                    var3 = var1.tag;
                                    var2 = global;
                                    var7 = var2.Object;
                                    var6 = var7.assign;
                                    var5 = _closure2_slot0;
                                    var2 = {};
                                    var2 = var6.bind(var7)(var2, var8, var5);
                                    var4[var3] = var2;
                                    var2 = var0.lastUpdateFrameTimeByTag;
                                    var1 = var1.tag;
                                    var0 = var0.__frameTimestamp;
                                    var2[var1] = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 2;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var5.bind(var0)(var2);
                        var2 = var5.processColorsInProps;
                        var2 = var2.bind(var5)(var3);
                        var2 = 'transformOrigin';
                        var2 = var2 in var3;
                        if (!var2) {
                            _fun34148_ip = 122;
                            continue _fun34148
                        }
                    case 79:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var2 = var6[var2];
                        var6 = var5.bind(var0)(var2);
                        var5 = var6.processTransformOrigin;
                        var2 = var3.transformOrigin;
                        var2 = var5.bind(var6)(var2);
                        var3.transformOrigin = var2;
                    case 122:
                        var1 = _closure1_slot0;
                        var2 = var1.UpdatePropsManager;
                        var1 = var2.update;
                        var1 = var1.bind(var2)(var4, var3);
                        return var0;
                }
            };
            var11 = {};
            var12 = 2;
            var12 = var8[var12];
            var12 = var7.bind(var0)(var12);
            var12 = var12.processColorsInProps;
            var11.processColorsInProps = var12;
            var12 = 3;
            var12 = var8[var12];
            var12 = var7.bind(var0)(var12);
            var12 = var12.processTransformOrigin;
            var11.processTransformOrigin = var12;
            var3.__closure = var11;
            var11 = 9641647469033.0;
            var3.__workletHash = var11;
            var3.__initData = var9;
            var _closure1_slot3 = var3;
            _fun34144_ip = 269;
            continue _fun34144;
        case 204:
            var9 = function arg0, arg1, arg2() {
                _fun34146: for (var _fun34146_ip = 0;;) switch (_fun34146_ip) {
                    case 0:
                        var1 = arg1;
                        var _closure2_slot0 = var1;
                        var1 = arg2;
                        var _closure2_slot1 = var1;
                        var1 = arg0;
                        var2 = var1.value;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun34146_ip = 45;
                            continue _fun34146
                        }
                    case 30:
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var5 = var0.tag;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 1;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4._updatePropsJS;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 45:
                        var0 = undefined;
                        return var0;
                }
            };
            var11 = {};
            var12 = 1;
            var12 = var8[var12];
            var12 = var7.bind(var0)(var12);
            var12 = var12._updatePropsJS;
            var11._updatePropsJS = var12;
            var9.__closure = var11;
            var11 = 17381979125683.0;
            var9.__workletHash = var11;
            var9.__initData = var10;
            _closure1_slot3 = var9;
            var3 = var9;
        case 269:
            var10 = {};
            var9 = "function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}";
            var10.code = var9;
            var9 = {};
            var11 = "function checkUpdate_Pnpm_updatePropsTs4(tag){const checkUpdate_Pnpm_updatePropsTs4=this._recur;const{runOnJS,updatePropsOnReactJS,scheduledFrameIds}=this.__closure;const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate_Pnpm_updatePropsTs4(tag);});}";
            var9.code = var11;
            var _closure1_slot4 = var9;
            var9 = {};
            var11 = 'function pnpm_updatePropsTs5(){const{scheduledFrameIds,tag,checkUpdate}=this.__closure;scheduledFrameIds[tag]=undefined;checkUpdate(tag);}';
            var9.code = var11;
            var _closure1_slot5 = var9;
            var9 = {};
            var11 = "function pnpm_updatePropsTs6(){const operations=[];return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){operations.push({tag:viewDescriptor.tag,name:viewDescriptor.name||'RCTView',updates:updates});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsPaper(operations);operations.length=0;}};}";
            var9.code = var11;
            var11 = var8[var4];
            var12 = var7.bind(var0)(var11);
            var11 = var12.isFabric;
            var11 = var11.bind(var12)();
            if (var11) {
                _fun34144_ip = 384;
                continue _fun34144
            }
        case 347:
            var11 = function() {
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = function arg0, arg1() {
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var _closure3_slot1 = var1;
                    var1 = arg0;
                    var2 = var1.value;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun34159: for (var _fun34159_ip = 0;;) switch (_fun34159_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure2_slot0;
                                var3 = var4.push;
                                var2 = {};
                                var5 = var0.tag;
                                var2.tag = var5;
                                var0 = var0.name;
                                if (var0) {
                                    _fun34159_ip = 40;
                                    continue _fun34159
                                }
                            case 34:
                                var0 = 'RCTView';
                            case 40:
                                var2.name = var0;
                                var5 = _closure3_slot0;
                                var2.updates = var5;
                                var2 = var3.bind(var4)(var2);
                                var1 = _closure2_slot0;
                                var2 = var1.length;
                                var1 = 1;
                                if (!(var1 === var2)) {
                                    _fun34159_ip = 102;
                                    continue _fun34159
                                }
                            case 77:
                                var1 = global;
                                var2 = var1.queueMicrotask;
                                var0 = _closure3_slot1;
                                var1 = var0.flush;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 102:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.update = var2;
                var1 = function() {
                    var2 = _closure1_slot0;
                    var0 = var2._updatePropsPaper;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var1);
                    var0 = 0;
                    var1.length = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.flush = var1;
                return var0;
            };
            var12 = {};
            var11.__closure = var12;
            var12 = 8150032191515.0;
            var11.__workletHash = var12;
            var11.__initData = var9;
            _fun34144_ip = 448;
            continue _fun34144;
        case 384:
            var9 = function() {
                var0 = new Array(0);
                var _closure2_slot1 = var0;
                var4 = {};
                var _closure2_slot2 = var4;
                var0 = function arg0() {
                    _fun34151: for (var _fun34151_ip = 0;;) switch (_fun34151_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var3 = _closure1_slot0;
                            var4 = var3.__frameTimestamp;
                            var3 = var3.lastUpdateFrameTimeByTag;
                            var3 = var3[var2];
                            if (!var4) {
                                _fun34151_ip = 145;
                                continue _fun34151
                            }
                        case 35:
                            if (!var3) {
                                _fun34151_ip = 145;
                                continue _fun34151
                            }
                        case 38:
                            var4 = var4 - var3;
                            var3 = 20;
                            if (!(!(var4 >= var3))) {
                                _fun34151_ip = 149;
                                continue _fun34151
                            }
                        case 49:
                            var3 = _closure2_slot2;
                            var3 = var3[var2];
                            if (var3) {
                                _fun34151_ip = 145;
                                continue _fun34151
                            }
                        case 63:
                            var3 = _closure2_slot2;
                            var4 = global;
                            var5 = var4.requestAnimationFrame;
                            var4 = function() {
                                var3 = _closure2_slot2;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var3[var2] = var0;
                                var1 = _closure2_slot0;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var0 = {};
                            var0.scheduledFrameIds = var3;
                            var0.tag = var2;
                            var6 = _closure2_slot0;
                            var0.checkUpdate = var6;
                            var4.__closure = var0;
                            var0 = 7847593993789.0;
                            var4.__workletHash = var0;
                            var0 = _closure1_slot5;
                            var4.__initData = var0;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4);
                            var3[var2] = var0;
                        case 145:
                            var0 = undefined;
                            return var0;
                        case 149:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 5;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.runOnJS;
                            var3 = _closure1_slot8;
                            var4 = var4.bind(var5)(var3);
                            var1 = _closure1_slot0;
                            var3 = var1.lastUpdateByTag;
                            var3 = var3[var2];
                            var3 = var4.bind(var0)(var2, var3);
                            var1 = var1.lastUpdateByTag;
                            var1[var2] = var0;
                            return var0;
                    }
                };
                var _closure2_slot0 = var0;
                var3 = {};
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 5;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.runOnJS;
                var3.runOnJS = var5;
                var5 = _closure1_slot8;
                var3.updatePropsOnReactJS = var5;
                var3.scheduledFrameIds = var4;
                var0.__closure = var3;
                var3 = 1753947436463.0;
                var0.__workletHash = var3;
                var2 = _closure1_slot4;
                var0.__initData = var2;
                var _closure2_slot3 = var0;
                var0 = {};
                var2 = function arg0, arg1() {
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var _closure3_slot1 = var1;
                    var1 = arg0;
                    var2 = var1.value;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun34154: for (var _fun34154_ip = 0;;) switch (_fun34154_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.tag;
                                var1 = _closure2_slot1;
                                var3 = var1.push;
                                var2 = {};
                                var0 = var0.shadowNodeWrapper;
                                var2.shadowNodeWrapper = var0;
                                var5 = _closure3_slot0;
                                var2.updates = var5;
                                var2.tag = var4;
                                var2 = var3.bind(var1)(var2);
                                var2 = var1.length;
                                var1 = 1;
                                if (!(var1 === var2)) {
                                    _fun34154_ip = 91;
                                    continue _fun34154
                                }
                            case 66:
                                var1 = global;
                                var2 = var1.queueMicrotask;
                                var0 = _closure3_slot1;
                                var1 = var0.flush;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 91:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.update = var2;
                var1 = function() {
                    var2 = _closure1_slot0;
                    var0 = var2._updatePropsFabric;
                    var1 = _closure2_slot1;
                    var0 = var0.bind(var2)(var1);
                    var2 = var1.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0.tag;
                        var1 = _closure2_slot3;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    var0 = 0;
                    var1.length = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.flush = var1;
                return var0;
            };
            var12 = {};
            var14 = 5;
            var14 = var8[var14];
            var14 = var7.bind(var0)(var14);
            var14 = var14.runOnJS;
            var12.runOnJS = var14;
            var12.updatePropsOnReactJS = var13;
            var9.__closure = var12;
            var12 = 7650186665575.0;
            var9.__workletHash = var12;
            var9.__initData = var10;
            var11 = var9;
        case 448:
            var _closure1_slot6 = var11;
            var9 = {};
            var10 = 'function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}';
            var9.code = var10;
            var4 = var8[var4];
            var10 = var7.bind(var0)(var4);
            var4 = var10.shouldBeUseWeb;
            var4 = var4.bind(var10)();
            if (var4) {
                _fun34144_ip = 557;
                continue _fun34144
            }
        case 486:
            var4 = 5;
            var4 = var8[var4];
            var8 = var7.bind(var0)(var4);
            var7 = var8.runOnUIImmediately;
            var4 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot6;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var2.UpdatePropsManager = var1;
                return var0;
            };
            var10 = {};
            var10.createUpdatePropsManager = var11;
            var4.__closure = var10;
            var10 = 4015188324291.0;
            var4.__workletHash = var10;
            var4.__initData = var9;
            var4 = var7.bind(var8)(var4);
            var4 = var4.bind(var0)();
            _fun34144_ip = 618;
            continue _fun34144;
        case 557:
            var4 = function() {
                _fun34161: for (var _fun34161_ip = 0;;) switch (_fun34161_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 0;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isJest;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun34161_ip = 91;
                            continue _fun34161
                        }
                    case 37:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.ReanimatedError;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = '`UpdatePropsManager` is not available on non-native platform.';
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 91:
                        return var0;
                }
            };
            var _closure1_slot7 = var4;
            var8 = var6.Proxy;
            var7 = {};
            var7.get = var4;
            var4 = function() {
                var1 = _closure1_slot7;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = false;
                return var0;
            };
            var7.set = var4;
            var4 = var8.prototype;
            var6 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var17 = {};
            var18 = var6;
            var16 = var7;
            var4 = new var18[var8](var17, var16, var15);
            var4 = var4 instanceof Object ? var4 : var6;
            var5.UpdatePropsManager = var4;
        case 618:
            var2.default = var3;
            var1 = function arg0, arg1, arg2, arg3() {
                var3 = arg1;
                var0 = arg2;
                var4 = arg3;
                var _closure2_slot0 = var3;
                var2 = var4.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var1 = var0.current;
                var2 = global;
                var5 = var2.Object;
                var4 = var5.assign;
                var0 = var0.current;
                var2 = var0.value;
                var0 = {};
                var0 = var4.bind(var5)(var0, var2, var3);
                var1.value = var0;
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1, var3);
                return var0;
            };
            var2.updatePropsJestWrapper = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3726, 3733, 3766, 3826, 3818, 3730, 3734]);