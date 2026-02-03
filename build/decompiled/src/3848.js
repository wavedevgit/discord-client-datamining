// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34706: for (var _fun34706_ip = 0;;) switch (_fun34706_ip) {
        case 0:
            var4 = global;
            var7 = require;
            var5 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var8;
            var6 = global;
            var10 = var6.Object;
            var9 = var10.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var10)(var2, var0, var1);
            var0 = 0;
            var1 = var8[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var1 = var1.Platform;
            var1 = {};
            var5 = 'function pnpm_ProgressTransitionManagerTs1(){const{viewTag,progressAnimation}=this.__closure;global.ProgressTransitionRegister.addProgressAnimation(viewTag,progressAnimation);}';
            var1.code = var5;
            var _closure1_slot5 = var1;
            var1 = {};
            var5 = 'function pnpm_ProgressTransitionManagerTs2(){const{viewTag,isUnmounting}=this.__closure;global.ProgressTransitionRegister.removeProgressAnimation(viewTag,isUnmounting);}';
            var1.code = var5;
            var _closure1_slot6 = var1;
            var1 = {};
            var5 = 'function pnpm_ProgressTransitionManagerTs3(event){const{lastProgressValue}=this.__closure;const progress=event.progress;if(progress===lastProgressValue){return;}lastProgressValue=progress;global.ProgressTransitionRegister.frame(progress);}';
            var1.code = var5;
            var _closure1_slot7 = var1;
            var1 = {};
            var5 = 'function pnpm_ProgressTransitionManagerTs4(){global.ProgressTransitionRegister.onTransitionEnd();}';
            var1.code = var5;
            var _closure1_slot8 = var1;
            var1 = {};
            var5 = 'function pnpm_ProgressTransitionManagerTs5(){global.ProgressTransitionRegister.onAndroidFinishTransitioning();}';
            var1.code = var5;
            var _closure1_slot9 = var1;
            var1 = function() { // Environment: var3
                var3 = _closure1_slot4;
                var2 = function() {
                    var2 = this;
                    var3 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = 0;
                    var2._sharedElementCount = var1;
                    var1 = {
                        'isRegistered': false,
                        'onTransitionProgress': 4294967295,
                        'onAppear': 4294967295,
                        'onDisappear': 4294967295,
                        'onSwipeDismiss': 4294967295
                    };
                    var2._eventHandler = var1;
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'addProgressAnimation';
                var0.key = var1;
                var1 = function arg0, arg1() {
                    var8 = arg0;
                    var7 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var8;
                    var _closure3_slot1 = var7;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.runOnUIImmediately;
                    var1 = function() {
                        var0 = _closure1_slot0;
                        var3 = var0.ProgressTransitionRegister;
                        var2 = var3.addProgressAnimation;
                        var1 = _closure3_slot0;
                        var0 = _closure3_slot1;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var6 = {};
                    var6.viewTag = var8;
                    var6.progressAnimation = var7;
                    var1.__closure = var6;
                    var6 = 1345064651573.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot5;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var0)();
                    var1 = var2.registerEventHandlers;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(4);
                var1[0] = var0;
                var0 = {};
                var5 = 'removeProgressAnimation';
                var0.key = var5;
                var5 = function arg0() {
                    _fun34711: for (var _fun34711_ip = 0;;) switch (_fun34711_ip) {
                        case 0:
                            var7 = arg0;
                            var3 = this;
                            var0 = undefined;
                            var4 = undefined;
                            var _closure3_slot0 = var7;
                            var5 = arguments.length;
                            var2 = 1;
                            var5 = var5 > var2;
                            if (!var5) {
                                _fun34711_ip = 37;
                                continue _fun34711
                            }
                        case 29:
                            var6 = arguments[var2];
                            var5 = var0 !== var6;
                        case 37:
                            var6 = !var5;
                            if (!var5) {
                                _fun34711_ip = 47;
                                continue _fun34711
                            }
                        case 43:
                            var6 = arguments[var2];
                        case 47:
                            var _closure3_slot1 = var6;
                            var2 = var3.unregisterEventHandlers;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 3;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runOnUIImmediately;
                            var1 = function() {
                                var0 = _closure1_slot0;
                                var3 = var0.ProgressTransitionRegister;
                                var2 = var3.removeProgressAnimation;
                                var1 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var5 = {};
                            var5.viewTag = var7;
                            var5.isUnmounting = var6;
                            var1.__closure = var5;
                            var5 = 3239143402257.0;
                            var1.__workletHash = var5;
                            var4 = _closure1_slot6;
                            var1.__initData = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'registerEventHandlers';
                var0.key = var5;
                var5 = function() {
                    _fun34713: for (var _fun34713_ip = 0;;) switch (_fun34713_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._sharedElementCount;
                            var1 = var1 + 1;
                            var0._sharedElementCount = var1;
                            var1 = var0._eventHandler;
                            var0 = var1.isRegistered;
                            if (var0) {
                                _fun34713_ip = 293;
                                continue _fun34713
                            }
                        case 38:
                            var0 = true;
                            var1.isRegistered = var0;
                            var0 = -1;
                            var _closure3_slot0 = var0;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 4;
                            var7 = var6[var3];
                            var4 = undefined;
                            var10 = var5.bind(var4)(var7);
                            var9 = var10.registerEventHandler;
                            var8 = function arg0() {
                                _fun34714: for (var _fun34714_ip = 0;;) switch (_fun34714_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.progress;
                                        var1 = _closure3_slot0;
                                        if (!(var2 !== var1)) {
                                            _fun34714_ip = 48;
                                            continue _fun34714
                                        }
                                    case 20:
                                        _closure3_slot0 = var2;
                                        var0 = _closure1_slot0;
                                        var1 = var0.ProgressTransitionRegister;
                                        var0 = var1.frame;
                                        var0 = var0.bind(var1)(var2);
                                    case 48:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var7 = {};
                            var11 = _closure3_slot0;
                            var7.lastProgressValue = var11;
                            var8.__closure = var7;
                            var7 = 1831800135022.0;
                            var8.__workletHash = var7;
                            var7 = _closure1_slot7;
                            var8.__initData = var7;
                            var7 = 'onTransitionProgress';
                            var7 = var9.bind(var10)(var8, var7);
                            var1.onTransitionProgress = var7;
                            var7 = var6[var3];
                            var10 = var5.bind(var4)(var7);
                            var9 = var10.registerEventHandler;
                            var8 = function() {
                                var0 = _closure1_slot0;
                                var1 = var0.ProgressTransitionRegister;
                                var0 = var1.onTransitionEnd;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var7 = {};
                            var8.__closure = var7;
                            var7 = 10114828892519.0;
                            var8.__workletHash = var7;
                            var7 = _closure1_slot8;
                            var8.__initData = var7;
                            var7 = 'onAppear';
                            var7 = var9.bind(var10)(var8, var7);
                            var1.onAppear = var7;
                            var3 = var6[var3];
                            var4 = var5.bind(var4)(var3);
                            var3 = var4.registerEventHandler;
                            var2 = function() {
                                var0 = _closure1_slot0;
                                var1 = var0.ProgressTransitionRegister;
                                var0 = var1.onAndroidFinishTransitioning;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var5 = {};
                            var2.__closure = var5;
                            var5 = 13733013860161.0;
                            var2.__workletHash = var5;
                            var0 = _closure1_slot9;
                            var2.__initData = var0;
                            var0 = 'onFinishTransitioning';
                            var0 = var3.bind(var4)(var2, var0);
                            var1.onDisappear = var0;
                        case 293:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'unregisterEventHandlers';
                var0.key = var5;
                var4 = function() {
                    _fun34717: for (var _fun34717_ip = 0;;) switch (_fun34717_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._sharedElementCount;
                            var1 = var1 - 1;
                            var0._sharedElementCount = var1;
                            var2 = var0._sharedElementCount;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun34717_ip = 285;
                                continue _fun34717
                            }
                        case 33:
                            var1 = var0._eventHandler;
                            var0 = false;
                            var1.isRegistered = var0;
                            var2 = var1.onTransitionProgress;
                            var0 = -1;
                            if (!(var0 !== var2)) {
                                _fun34717_ip = 111;
                                continue _fun34717
                            }
                        case 63:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 4;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.unregisterEventHandler;
                            var2 = var1.onTransitionProgress;
                            var2 = var3.bind(var4)(var2);
                            var1.onTransitionProgress = var0;
                        case 111:
                            var2 = var1.onAppear;
                            if (!(var0 !== var2)) {
                                _fun34717_ip = 169;
                                continue _fun34717
                            }
                        case 121:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 4;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.unregisterEventHandler;
                            var2 = var1.onAppear;
                            var2 = var3.bind(var4)(var2);
                            var1.onAppear = var0;
                        case 169:
                            var2 = var1.onDisappear;
                            if (!(var0 !== var2)) {
                                _fun34717_ip = 227;
                                continue _fun34717
                            }
                        case 179:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 4;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.unregisterEventHandler;
                            var2 = var1.onDisappear;
                            var2 = var3.bind(var4)(var2);
                            var1.onDisappear = var0;
                        case 227:
                            var2 = var1.onSwipeDismiss;
                            if (!(var0 !== var2)) {
                                _fun34717_ip = 285;
                                continue _fun34717
                            }
                        case 237:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 4;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.unregisterEventHandler;
                            var2 = var1.onSwipeDismiss;
                            var2 = var3.bind(var4)(var2);
                            var1.onSwipeDismiss = var0;
                        case 285:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var4;
                var1[3] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var5 = {};
            var9 = 'function createProgressTransitionRegister_Pnpm_ProgressTransitionManagerTs8(){const{IS_ANDROID}=this.__closure;const progressAnimations=new Map();const snapshots=new Map();const currentTransitions=new Set();const toRemove=new Set();let skipCleaning=false;let isTransitionRestart=false;const progressTransitionManager={addProgressAnimation:function(viewTag,progressAnimation){if(currentTransitions.size>0&&!progressAnimations.has(viewTag)){isTransitionRestart=!IS_ANDROID;}progressAnimations.set(viewTag,progressAnimation);},removeProgressAnimation:function(viewTag,isUnmounting){if(currentTransitions.size>0){isTransitionRestart=!IS_ANDROID;}if(isUnmounting){toRemove.add(viewTag);}else{progressAnimations.delete(viewTag);}},onTransitionStart:function(viewTag,snapshot){skipCleaning=isTransitionRestart;snapshots.set(viewTag,snapshot);currentTransitions.add(viewTag);progressTransitionManager.frame(0);},frame:function(progress){for(const viewTag of currentTransitions){const progressAnimation=progressAnimations.get(viewTag);if(!progressAnimation){continue;}const snapshot=snapshots.get(viewTag);progressAnimation(viewTag,snapshot,progress);}},onAndroidFinishTransitioning:function(){if(toRemove.size>0){progressTransitionManager.onTransitionEnd();}},onTransitionEnd:function(removeViews=false){if(currentTransitions.size===0){toRemove.clear();return;}if(skipCleaning){skipCleaning=false;isTransitionRestart=false;return;}for(const viewTag of currentTransitions){global._notifyAboutEnd(viewTag,removeViews);}currentTransitions.clear();if(isTransitionRestart){return;}snapshots.clear();if(toRemove.size>0){for(const viewTag of toRemove){progressAnimations.delete(viewTag);global._notifyAboutEnd(viewTag,removeViews);}toRemove.clear();}}};return progressTransitionManager;}';
            var5.code = var9;
            var _closure1_slot10 = var5;
            var5 = function() { // Environment: var3
                var0 = function() {
                    var0 = global;
                    var2 = var0.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var2;
                    var2 = var0.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot1 = var2;
                    var2 = var0.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot2 = var2;
                    var0 = var0.Set;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var2;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var _closure3_slot3 = var0;
                    var0 = {};
                    var2 = function arg0, arg1() {
                        _fun34720: for (var _fun34720_ip = 0;;) switch (_fun34720_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot2;
                                var2 = var1.size;
                                var1 = 0;
                                if (!(var2 > var1)) {
                                    _fun34720_ip = 38;
                                    continue _fun34720
                                }
                            case 21:
                                var2 = _closure3_slot0;
                                var1 = var2.has;
                                var1 = var1.bind(var2)(var3);
                                var1 = !var1;
                            case 38:
                                var2 = _closure3_slot0;
                                var1 = var2.set;
                                var0 = arg1;
                                var0 = var1.bind(var2)(var3, var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.addProgressAnimation = var2;
                    var2 = function arg0, arg1() {
                        _fun34721: for (var _fun34721_ip = 0;;) switch (_fun34721_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot2;
                                var3 = var1.size;
                                var1 = 0;
                                var1 = var3 > var1;
                                var1 = arg1;
                                if (var1) {
                                    _fun34721_ip = 43;
                                    continue _fun34721
                                }
                            case 27:
                                var3 = _closure3_slot0;
                                var1 = var3.delete;
                                var1 = var1.bind(var3)(var2);
                                _fun34721_ip = 57;
                                continue _fun34721;
                            case 43:
                                var1 = _closure3_slot3;
                                var0 = var1.add;
                                var0 = var0.bind(var1)(var2);
                            case 57:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.removeProgressAnimation = var2;
                    var2 = function arg0, arg1() {
                        var3 = arg0;
                        var4 = _closure3_slot1;
                        var2 = var4.set;
                        var1 = arg1;
                        var1 = var2.bind(var4)(var3, var1);
                        var2 = _closure3_slot2;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var2 = _closure3_slot4;
                        var1 = var2.frame;
                        var0 = 0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.onTransitionStart = var2;
                    var2 = function arg0() {
                        _fun34723: for (var _fun34723_ip = 0;;) switch (_fun34723_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = undefined;
                                var5 = undefined;
                                var6 = undefined;
                                var7 = _closure3_slot2;
                                var1 = var7;
                                var2 = var1[Symbol.iterator];
                                var1 = var2().next;
                            case 22:
                                var9 = var1().value;
                                var7 = var2;
                                if (!(var7 !== var0)) {
                                    _fun34723_ip = 95;
                                    continue _fun34723
                                }
                            case 33: // try_start_0
                                var5 = var9;
                                var8 = _closure3_slot0;
                                var7 = var8.get;
                                var7 = var7.bind(var8)(var9);
                                var6 = var7;
                                if (!var7) {
                                    _fun34723_ip = 86;
                                    continue _fun34723
                                }
                            case 56:
                                var10 = var6;
                                var9 = var5;
                                var8 = _closure3_slot1;
                                var7 = var8.get;
                                var8 = var7.bind(var8)(var9);
                                var7 = var4;
                                var7 = var10.bind(var0)(var9, var8, var7);
                            case 86: // try_end0
                                _fun34723_ip = 22;
                                continue _fun34723;
                            case 88: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2.return();
                                throw var1;
                            case 95:
                                return var0;
                        }
                    };
                    var0.frame = var2;
                    var2 = function() {
                        _fun34724: for (var _fun34724_ip = 0;;) switch (_fun34724_ip) {
                            case 0:
                                var1 = _closure3_slot3;
                                var2 = var1.size;
                                var1 = 0;
                                if (!(var2 > var1)) {
                                    _fun34724_ip = 32;
                                    continue _fun34724
                                }
                            case 18:
                                var1 = _closure3_slot4;
                                var0 = var1.onTransitionEnd;
                                var0 = var0.bind(var1)();
                            case 32:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onAndroidFinishTransitioning = var2;
                    var2 = function() {
                        _fun34725: for (var _fun34725_ip = 0;;) switch (_fun34725_ip) {
                            case 0:
                                var0 = undefined;
                                var2 = undefined;
                                var5 = undefined;
                                var1 = arguments.length;
                                var3 = 0;
                                var1 = var1 > var3;
                                if (!var1) {
                                    _fun34725_ip = 26;
                                    continue _fun34725
                                }
                            case 18:
                                var4 = arguments[var3];
                                var1 = var0 !== var4;
                            case 26:
                                if (!var1) {
                                    _fun34725_ip = 33;
                                    continue _fun34725
                                }
                            case 29:
                                var1 = arguments[var3];
                            case 33:
                                var5 = var1;
                                var2 = _closure3_slot2;
                                var2 = var2.size;
                                if (!(var3 === var2)) {
                                    _fun34725_ip = 71;
                                    continue _fun34725
                                }
                            case 52:
                                var4 = _closure3_slot3;
                                var2 = var4.clear;
                                var2 = var2.bind(var4)();
                                _fun34725_ip = 241;
                                continue _fun34725;
                            case 71:
                                var4 = _closure3_slot2;
                                var2 = var4;
                                var6 = var2[Symbol.iterator];
                                var2 = var6().next;
                            case 84:
                                var10 = var2().value;
                                var7 = var6;
                                if (!(var7 !== var0)) {
                                    _fun34725_ip = 123;
                                    continue _fun34725
                                }
                            case 95: // try_start_0
                                var9 = _closure1_slot0;
                                var8 = var9._notifyAboutEnd;
                                var7 = var5;
                                var7 = var8.bind(var9)(var10, var7);
                            case 114: // try_end0
                                _fun34725_ip = 84;
                                continue _fun34725;
                            case 116: // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var6.return();
                                throw var2;
                            case 123:
                                var6 = _closure3_slot2;
                                var2 = var6.clear;
                                var2 = var2.bind(var6)();
                                var6 = _closure3_slot1;
                                var2 = var6.clear;
                                var2 = var2.bind(var6)();
                                var2 = _closure3_slot3;
                                var2 = var2.size;
                                if (!(var2 > var3)) {
                                    _fun34725_ip = 241;
                                    continue _fun34725
                                }
                            case 164:
                                var6 = _closure3_slot3;
                                var2 = var6;
                                var3 = var2[Symbol.iterator];
                                var2 = var3().next;
                            case 174:
                                var9 = var2().value;
                                var6 = var3;
                                if (!(var6 !== var0)) {
                                    _fun34725_ip = 227;
                                    continue _fun34725
                                }
                            case 185: // try_start_1
                                var7 = _closure3_slot0;
                                var6 = var7.delete;
                                var6 = var6.bind(var7)(var9);
                                var8 = _closure1_slot0;
                                var7 = var8._notifyAboutEnd;
                                var6 = var5;
                                var6 = var7.bind(var8)(var9, var6);
                            case 218: // try_end1
                                _fun34725_ip = 174;
                                continue _fun34725;
                            case 220: // catch_target1
                                CatchBlockStart(arg_register = 2);
                                var3.return();
                                throw var2;
                            case 227:
                                var2 = _closure3_slot3;
                                var1 = var2.clear;
                                var1 = var1.bind(var2)();
                            case 241:
                                return var0;
                        }
                    };
                    var0.onTransitionEnd = var2;
                    var _closure3_slot4 = var0;
                    return var0;
                };
                var1 = {};
                var2 = true;
                var1.IS_ANDROID = var2;
                var0.__closure = var1;
                var1 = 2226368593346.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot10;
                var0.__initData = var1;
                return var0;
            };
            var11 = var5.bind(var0)();
            var _closure1_slot11 = var11;
            var9 = {};
            var5 = 'function pnpm_ProgressTransitionManagerTs9(){const{createProgressTransitionRegister}=this.__closure;global.ProgressTransitionRegister=createProgressTransitionRegister();}';
            var9.code = var5;
            var5 = 5;
            var5 = var8[var5];
            var10 = var7.bind(var0)(var5);
            var5 = var10.shouldBeUseWeb;
            var5 = var5.bind(var10)();
            if (var5) {
                _fun34706_ip = 338;
                continue _fun34706
            }
        case 267:
            var5 = 3;
            var5 = var8[var5];
            var8 = var7.bind(var0)(var5);
            var7 = var8.runOnUIImmediately;
            var5 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot11;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var2.ProgressTransitionRegister = var1;
                return var0;
            };
            var10 = {};
            var10.createProgressTransitionRegister = var11;
            var5.__closure = var10;
            var10 = 1488439266980.0;
            var5.__workletHash = var10;
            var5.__initData = var9;
            var5 = var7.bind(var8)(var5);
            var5 = var5.bind(var0)();
            _fun34706_ip = 399;
            continue _fun34706;
        case 338:
            var5 = function() {
                _fun34726: for (var _fun34726_ip = 0;;) switch (_fun34726_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 5;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isJest;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun34726_ip = 92;
                            continue _fun34726
                        }
                    case 38:
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
                        var4 = '`ProgressTransitionRegister` is not available on non-native platform.';
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 92:
                        return var0;
                }
            };
            var _closure1_slot12 = var5;
            var7 = var6.Proxy;
            var6 = {};
            var6.get = var5;
            var3 = function() {
                var1 = _closure1_slot12;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = false;
                return var0;
            };
            var6.set = var3;
            var3 = var7.prototype;
            var5 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var14 = {};
            var15 = var5;
            var13 = var6;
            var3 = new var15[var7](var14, var13, var12);
            var3 = var3 instanceof Object ? var3 : var5;
            var4.ProgressTransitionRegister = var3;
        case 399:
            var2.ProgressTransitionManager = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 3719, 3756, 3715, 3723]);