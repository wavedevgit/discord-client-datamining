// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33245: for (var _fun33245_ip = 0;;) switch (_fun33245_ip) {
        case 0:
            var11 = require;
            var3 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var12;
            var10 = function arg0() {
                _fun33246: for (var _fun33246_ip = 0;;) switch (_fun33246_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = undefined;
                        var6 = undefined;
                        var5 = arguments.length;
                        var1 = global;
                        var7 = var1.Array;
                        var4 = 1;
                        var2 = var5 > var4;
                        var1 = 0;
                        if (!var2) {
                            _fun33246_ip = 34;
                            continue _fun33246
                        }
                    case 30:
                        var1 = var5 - var4;
                    case 34:
                        var2 = var7.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var7
                            }
                        });
                        var11 = var2;
                        var10 = var1;
                        var1 = new var11[var7](var10, var9);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var7 = var4 < var5;
                        var1 = var4;
                        if (!var7) {
                            _fun33246_ip = 86;
                            continue _fun33246
                        }
                    case 67:
                        var8 = var1 - var4;
                        var7 = arguments[var1];
                        var2[var8] = var7;
                        var1 = var1 + 1;
                        if (var1 < var5) {
                            _fun33246_ip = 67;
                            continue _fun33246
                        }
                    case 86:
                        var1 = var3.apply;
                        var1 = var1.bind(var3)(var0, var2);
                        return var0;
                }
            };
            var _closure1_slot18 = var10;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var1);
            var0 = 0;
            var1 = var12[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var12[var1];
            var1 = var3.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var3 = var12[var1];
            var5 = var11.bind(var0)(var3);
            var3 = var5.isJest;
            var3 = var3.bind(var5)();
            var _closure1_slot5 = var3;
            var1 = var12[var1];
            var3 = var11.bind(var0)(var1);
            var1 = var3.shouldBeUseWeb;
            var13 = var1.bind(var3)();
            var _closure1_slot6 = var13;
            var1 = new Array(0);
            var _closure1_slot7 = var1;
            var1 = {};
            var3 = 'function setupMicrotasks_Pnpm_threadsTs1(){let microtasksQueue=[];let isExecutingMicrotasksQueue=false;global.queueMicrotask=function(callback){microtasksQueue.push(callback);};global.__callMicrotasks=function(){if(isExecutingMicrotasksQueue){return;}try{isExecutingMicrotasksQueue=true;for(let index=0;index<microtasksQueue.length;index+=1){microtasksQueue[index]();}microtasksQueue=[];global._maybeFlushUIUpdatesQueue();}finally{isExecutingMicrotasksQueue=false;}};}';
            var1.code = var3;
            var _closure1_slot8 = var1;
            var1 = function() { // Environment: var4
                var0 = function() {
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var1 = false;
                    var _closure3_slot1 = var1;
                    var1 = _closure1_slot0;
                    var2 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.queueMicrotask = var2;
                    var0 = function() { // Environment: var0
                        _fun33250: for (var _fun33250_ip = 0;;) switch (_fun33250_ip) {
                            case 0:
                                var0 = undefined;
                                var5 = undefined;
                                var1 = _closure3_slot1;
                                if (var1) {
                                    _fun33250_ip = 120;
                                    continue _fun33250
                                }
                            case 14: // try_start_0
                                var1 = true;
                                _closure3_slot1 = var1;
                                var2 = 0;
                                var5 = 0;
                                var1 = _closure3_slot0;
                                var1 = var1.length;
                                var4 = 1;
                                if (!(var2 < var1)) {
                                    _fun33250_ip = 75;
                                    continue _fun33250
                                }
                            case 40:
                                var6 = _closure3_slot0;
                                var1 = var5;
                                var2 = var6[var1];
                                var2 = var2.bind(var6)();
                                var2 = var1 + var4;
                                var5 = var2;
                                var1 = _closure3_slot0;
                                var1 = var1.length;
                                if (var2 < var1) {
                                    _fun33250_ip = 40;
                                    continue _fun33250
                                }
                            case 75:
                                var1 = new Array(0);
                                _closure3_slot0 = var1;
                                var2 = _closure1_slot0;
                                var1 = var2._maybeFlushUIUpdatesQueue;
                                var1 = var1.bind(var2)();
                            case 102: // try_end0
                                var1 = false;
                                _closure3_slot1 = var1;
                                _fun33250_ip = 120;
                                continue _fun33250;
                            case 110: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2 = false;
                                _closure3_slot1 = var2;
                                throw var1;
                            case 120:
                                return var0;
                        }
                    };
                    var1.__callMicrotasks = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 2487728156345.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot8;
                var0.__initData = var1;
                return var0;
            };
            var7 = var1.bind(var0)();
            var1 = {};
            var3 = 'function callMicrotasksOnUIThread_Pnpm_threadsTs2(){global.__callMicrotasks();}';
            var1.code = var3;
            var _closure1_slot9 = var1;
            var1 = function() { // Environment: var4
                var0 = function() {
                    var1 = _closure1_slot0;
                    var0 = var1.__callMicrotasks;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 741957556389.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot9;
                var0.__initData = var1;
                return var0;
            };
            var6 = var1.bind(var0)();
            if (!var13) {
                _fun33245_ip = 218;
                continue _fun33245
            }
        case 213:
            var6 = function() { // Environment: var4
                var0 = undefined;
                return var0;
            };
        case 218:
            var _closure1_slot10 = var6;
            var1 = {};
            var3 = "function runOnUI_Pnpm_threadsTs3(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,IS_JEST,ReanimatedModule,makeShareableCloneRecursive,callMicrotasks}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUI` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUI` can only be used with worklets.');}return function(...args){if(IS_JEST){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));return;}if(__DEV__){makeShareableCloneRecursive(worklet);makeShareableCloneRecursive(args);}_runOnUIQueue.push([worklet,args]);if(_runOnUIQueue.length===1){queueMicrotask(function(){const queue=_runOnUIQueue;_runOnUIQueue=[];ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}));});}};}";
            var1.code = var3;
            var _closure1_slot11 = var1;
            var1 = {};
            var3 = 'function pnpm_threadsTs4(){const{worklet,args}=this.__closure;worklet(...args);}';
            var1.code = var3;
            var _closure1_slot12 = var1;
            var1 = {};
            var3 = 'function pnpm_threadsTs5(){const{queue,callMicrotasks}=this.__closure;queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}';
            var1.code = var3;
            var _closure1_slot13 = var1;
            var1 = function() { // Environment: var4
                var0 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun33256: for (var _fun33256_ip = 0;;) switch (_fun33256_ip) {
                            case 0:
                                var0 = undefined;
                                var5 = undefined;
                                var4 = arguments.length;
                                var2 = global;
                                var3 = var2.Array;
                                var6 = var3.prototype;
                                var6 = Object.create(var6, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var11 = var6;
                                var10 = var4;
                                var3 = new var11[var3](var10, var9);
                                var8 = var3 instanceof Object ? var3 : var6;
                                var _closure4_slot0 = var8;
                                var3 = 0;
                                var6 = var3 < var4;
                                if (!var6) {
                                    _fun33256_ip = 68;
                                    continue _fun33256
                                }
                            case 53:
                                var6 = arguments[var3];
                                var8[var3] = var6;
                                var3 = var3 + 1;
                                if (var3 < var4) {
                                    _fun33256_ip = 53;
                                    continue _fun33256
                                }
                            case 68:
                                var3 = _closure1_slot5;
                                if (var3) {
                                    _fun33256_ip = 148;
                                    continue _fun33256
                                }
                            case 78:
                                var5 = _closure1_slot7;
                                var4 = var5.push;
                                var7 = _closure3_slot0;
                                var3 = new Array(2);
                                var3[0] = var7;
                                var3[1] = var8;
                                var3 = var4.bind(var5)(var3);
                                var3 = _closure1_slot7;
                                var4 = var3.length;
                                var3 = 1;
                                if (!(var3 === var4)) {
                                    _fun33256_ip = 264;
                                    continue _fun33256
                                }
                            case 130:
                                var3 = var2.queueMicrotask;
                                var2 = function() { // Environment: var1
                                    var8 = _closure1_slot7;
                                    var _closure5_slot0 = var8;
                                    var0 = new Array(0);
                                    _closure1_slot7 = var0;
                                    var5 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var0 = 3;
                                    var2 = var7[var0];
                                    var0 = undefined;
                                    var2 = var5.bind(var0)(var2);
                                    var3 = var2.ReanimatedModule;
                                    var2 = var3.scheduleOnUI;
                                    var4 = 4;
                                    var4 = var7[var4];
                                    var5 = var5.bind(var0)(var4);
                                    var4 = var5.makeShareableCloneRecursive;
                                    var1 = function() {
                                        var2 = _closure5_slot0;
                                        var1 = var2.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            var4 = _closure1_slot4;
                                            var0 = undefined;
                                            var3 = arg0;
                                            var2 = 2;
                                            var4 = var4.bind(var0)(var3, var2);
                                            var2 = 0;
                                            var3 = var4[var2];
                                            var2 = 1;
                                            var4 = var4[var2];
                                            var2 = var3.apply;
                                            var1 = _closure1_slot3;
                                            var1 = var1.bind(var0)(var4);
                                            var1 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var1 = _closure1_slot10;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var7 = {};
                                    var7.queue = var8;
                                    var8 = _closure1_slot10;
                                    var7.callMicrotasks = var8;
                                    var1.__closure = var7;
                                    var7 = 2773761092576.0;
                                    var1.__workletHash = var7;
                                    var6 = _closure1_slot13;
                                    var1.__initData = var6;
                                    var1 = var4.bind(var5)(var1);
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var2 = var3.bind(var0)(var2);
                                _fun33256_ip = 264;
                                continue _fun33256;
                            case 148:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var2 = 3;
                                var2 = var7[var2];
                                var2 = var5.bind(var0)(var2);
                                var3 = var2.ReanimatedModule;
                                var2 = var3.scheduleOnUI;
                                var4 = 4;
                                var4 = var7[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.makeShareableCloneRecursive;
                                var1 = function() {
                                    var3 = _closure3_slot0;
                                    var2 = var3.apply;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var7 = {};
                                var9 = _closure3_slot0;
                                var7.worklet = var9;
                                var7.args = var8;
                                var1.__closure = var7;
                                var7 = 10268384484340.0;
                                var1.__workletHash = var7;
                                var6 = _closure1_slot12;
                                var1.__initData = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                            case 264:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = {};
                var1 = false;
                var2.__DEV__ = var1;
                var3 = _closure1_slot6;
                var2.SHOULD_BE_USE_WEB = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.isWorkletFunction;
                var2.isWorkletFunction = var3;
                var3 = _closure1_slot5;
                var2.IS_JEST = var3;
                var3 = 3;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.ReanimatedModule;
                var2.ReanimatedModule = var3;
                var3 = 4;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.makeShareableCloneRecursive;
                var2.makeShareableCloneRecursive = var3;
                var3 = _closure1_slot10;
                var2.callMicrotasks = var3;
                var0.__closure = var2;
                var2 = 8710271011487.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot11;
                var0.__initData = var1;
                return var0;
            };
            var5 = var1.bind(var0)();
            var1 = {};
            var3 = 'function pnpm_threadsTs6(){const{worklet,args,makeShareableCloneOnUIRecursive}=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);}';
            var1.code = var3;
            var _closure1_slot14 = var1;
            var1 = {};
            var3 = "function runOnUIImmediately_Pnpm_threadsTs7(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUIImmediately` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUIImmediately` can only be used with worklets.');}return function(...args){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}";
            var1.code = var3;
            var _closure1_slot15 = var1;
            var1 = {};
            var3 = 'function pnpm_threadsTs8(){const{worklet,args}=this.__closure;worklet(...args);}';
            var1.code = var3;
            var _closure1_slot16 = var1;
            var1 = function() { // Environment: var4
                var0 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun33263: for (var _fun33263_ip = 0;;) switch (_fun33263_ip) {
                            case 0:
                                var0 = undefined;
                                var4 = undefined;
                                var3 = arguments.length;
                                var2 = global;
                                var2 = var2.Array;
                                var5 = var2.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var11 = var5;
                                var10 = var3;
                                var2 = new var11[var2](var10, var9);
                                var8 = var2 instanceof Object ? var2 : var5;
                                var _closure4_slot0 = var8;
                                var2 = 0;
                                var5 = var2 < var3;
                                if (!var5) {
                                    _fun33263_ip = 68;
                                    continue _fun33263
                                }
                            case 53:
                                var5 = arguments[var2];
                                var8[var2] = var5;
                                var2 = var2 + 1;
                                if (var2 < var3) {
                                    _fun33263_ip = 53;
                                    continue _fun33263
                                }
                            case 68:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var2 = 3;
                                var2 = var7[var2];
                                var2 = var5.bind(var0)(var2);
                                var3 = var2.ReanimatedModule;
                                var2 = var3.scheduleOnUI;
                                var4 = 4;
                                var4 = var7[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.makeShareableCloneRecursive;
                                var1 = function() {
                                    var3 = _closure3_slot0;
                                    var2 = var3.apply;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var7 = {};
                                var9 = _closure3_slot0;
                                var7.worklet = var9;
                                var7.args = var8;
                                var1.__closure = var7;
                                var7 = 6969436050040.0;
                                var1.__workletHash = var7;
                                var6 = _closure1_slot16;
                                var1.__initData = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = {};
                var1 = false;
                var2.__DEV__ = var1;
                var3 = _closure1_slot6;
                var2.SHOULD_BE_USE_WEB = var3;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.isWorkletFunction;
                var2.isWorkletFunction = var3;
                var3 = 3;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.ReanimatedModule;
                var2.ReanimatedModule = var3;
                var3 = 4;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.makeShareableCloneRecursive;
                var2.makeShareableCloneRecursive = var3;
                var0.__closure = var2;
                var2 = 3385146413149.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot15;
                var0.__initData = var1;
                return var0;
            };
            var3 = var1.bind(var0)();
            var8 = {};
            var1 = "function runOnJS_Pnpm_threadsTs9(fun){const runOnJS_Pnpm_threadsTs9=this._recur;const{SHOULD_BE_USE_WEB,isWorkletFunction,runWorkletOnJS,makeShareableCloneOnUIRecursive}=this.__closure;if(SHOULD_BE_USE_WEB||!_WORKLET){return function(...args){return queueMicrotask(args.length?function(){return fun(...args);}:fun);};}if(isWorkletFunction(fun)){return function(...args){return runOnJS_Pnpm_threadsTs9(runWorkletOnJS)(fun,...args);};}if(fun.__remoteFunction){fun=fun.__remoteFunction;}const scheduleOnJS=typeof fun==='function'?global._scheduleHostFunctionOnJS:global._scheduleRemoteFunctionOnJS;return function(...args){scheduleOnJS(fun,args.length>0?makeShareableCloneOnUIRecursive(args):undefined);};}";
            var8.code = var1;
            var1 = function arg0() {
                _fun33265: for (var _fun33265_ip = 0;;) switch (_fun33265_ip) {
                    case 0:
                        var3 = arg0;
                        var _closure2_slot0 = var3;
                        var1 = _closure1_slot6;
                        if (var1) {
                            _fun33265_ip = 147;
                            continue _fun33265
                        }
                    case 22:
                        var1 = global;
                        var1 = var1._WORKLET;
                        if (!var1) {
                            _fun33265_ip = 147;
                            continue _fun33265
                        }
                    case 33:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var1 = var4.isWorkletFunction;
                        var1 = var1.bind(var4)(var3);
                        if (var1) {
                            _fun33265_ip = 140;
                            continue _fun33265
                        }
                    case 69:
                        var4 = var3.__remoteFunction;
                        var1 = var3;
                        if (!var4) {
                            _fun33265_ip = 94;
                            continue _fun33265
                        }
                    case 81:
                        var3 = var3.__remoteFunction;
                        _closure2_slot0 = var3;
                        var1 = var3;
                    case 94:
                        var3 = 'function';
                        var1 = typeof var1;
                        if (!(var3 !== var1)) {
                            _fun33265_ip = 119;
                            continue _fun33265
                        }
                    case 105:
                        var1 = _closure1_slot0;
                        var1 = var1._scheduleRemoteFunctionOnJS;
                        _fun33265_ip = 129;
                        continue _fun33265;
                    case 119:
                        var2 = _closure1_slot0;
                        var1 = var2._scheduleHostFunctionOnJS;
                    case 129:
                        var _closure2_slot1 = var1;
                        var1 = function() { // Environment: var0
                            _fun33269: for (var _fun33269_ip = 0;;) switch (_fun33269_ip) {
                                case 0:
                                    var0 = undefined;
                                    var3 = undefined;
                                    var2 = arguments.length;
                                    var1 = global;
                                    var1 = var1.Array;
                                    var4 = var1.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var10 = var4;
                                    var9 = var2;
                                    var1 = new var10[var1](var9, var8);
                                    var6 = var1 instanceof Object ? var1 : var4;
                                    var4 = 0;
                                    var5 = var4 < var2;
                                    var1 = 0;
                                    if (!var5) {
                                        _fun33269_ip = 64;
                                        continue _fun33269
                                    }
                                case 49:
                                    var5 = arguments[var1];
                                    var6[var1] = var5;
                                    var1 = var1 + 1;
                                    if (var1 < var2) {
                                        _fun33269_ip = 49;
                                        continue _fun33269
                                    }
                                case 64:
                                    var3 = _closure2_slot1;
                                    var2 = _closure2_slot0;
                                    var1 = var6.length;
                                    var4 = var1 > var4;
                                    var1 = undefined;
                                    if (!var4) {
                                        _fun33269_ip = 123;
                                        continue _fun33269
                                    }
                                case 89:
                                    var5 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var4 = 4;
                                    var4 = var7[var4];
                                    var5 = var5.bind(var0)(var4);
                                    var4 = var5.makeShareableCloneOnUIRecursive;
                                    var1 = var4.bind(var5)(var6);
                                case 123:
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        return var1;
                    case 140:
                        var1 = function() { // Environment: var0
                            _fun33268: for (var _fun33268_ip = 0;;) switch (_fun33268_ip) {
                                case 0:
                                    var3 = undefined;
                                    var2 = undefined;
                                    var1 = arguments.length;
                                    var0 = global;
                                    var0 = var0.Array;
                                    var4 = var0.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var8 = var4;
                                    var7 = var1;
                                    var0 = new var8[var0](var7, var6);
                                    var5 = var0 instanceof Object ? var0 : var4;
                                    var0 = 0;
                                    var4 = var0 < var1;
                                    if (!var4) {
                                        _fun33268_ip = 62;
                                        continue _fun33268
                                    }
                                case 47:
                                    var4 = arguments[var0];
                                    var5[var0] = var4;
                                    var0 = var0 + 1;
                                    if (var0 < var1) {
                                        _fun33268_ip = 47;
                                        continue _fun33268
                                    }
                                case 62:
                                    var1 = _closure1_slot17;
                                    var0 = _closure1_slot18;
                                    var2 = var1.bind(var3)(var0);
                                    var1 = var2.apply;
                                    var0 = _closure2_slot0;
                                    var4 = new Array(1);
                                    var4[0] = var0;
                                    var0 = var4.concat;
                                    var0 = var0.bind(var4)(var5);
                                    var0 = var1.bind(var2)(var3, var0);
                                    return var0;
                            }
                        };
                        return var1;
                    case 147:
                        var0 = function() { // Environment: var0
                            _fun33266: for (var _fun33266_ip = 0;;) switch (_fun33266_ip) {
                                case 0:
                                    var2 = undefined;
                                    var6 = undefined;
                                    var5 = arguments.length;
                                    var1 = global;
                                    var0 = var1.Array;
                                    var4 = var0.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var0
                                        }
                                    });
                                    var9 = var4;
                                    var8 = var5;
                                    var0 = new var9[var0](var8, var7);
                                    var0 = var0 instanceof Object ? var0 : var4;
                                    var _closure3_slot0 = var0;
                                    var4 = 0;
                                    var7 = var4 < var5;
                                    if (!var7) {
                                        _fun33266_ip = 68;
                                        continue _fun33266
                                    }
                                case 53:
                                    var7 = arguments[var4];
                                    var0[var4] = var7;
                                    var4 = var4 + 1;
                                    if (var4 < var5) {
                                        _fun33266_ip = 53;
                                        continue _fun33266
                                    }
                                case 68:
                                    var1 = var1.queueMicrotask;
                                    var0 = var0.length;
                                    if (var0) {
                                        _fun33266_ip = 91;
                                        continue _fun33266
                                    }
                                case 82:
                                    var0 = _closure2_slot0;
                                    _fun33266_ip = 96;
                                    continue _fun33266;
                                case 91:
                                    var0 = function() { // Environment: var3
                                        var3 = _closure2_slot0;
                                        var2 = var3.apply;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                case 96:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        return var0;
                }
            };
            var _closure1_slot17 = var1;
            var9 = {};
            var9.SHOULD_BE_USE_WEB = var13;
            var13 = 5;
            var13 = var12[var13];
            var13 = var11.bind(var0)(var13);
            var13 = var13.isWorkletFunction;
            var9.isWorkletFunction = var13;
            var9.runWorkletOnJS = var10;
            var10 = 4;
            var10 = var12[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.makeShareableCloneOnUIRecursive;
            var9.makeShareableCloneOnUIRecursive = var10;
            var1.__closure = var9;
            var9 = 4576792393858.0;
            var1.__workletHash = var9;
            var1.__initData = var8;
            var2.setupMicrotasks = var7;
            var2.callMicrotasks = var6;
            var2.runOnUI = var5;
            var4 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    _fun33271: for (var _fun33271_ip = 0;;) switch (_fun33271_ip) {
                        case 0:
                            var9 = undefined;
                            var3 = undefined;
                            var2 = arguments.length;
                            var1 = global;
                            var1 = var1.Array;
                            var4 = var1.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var14 = var4;
                            var13 = var2;
                            var1 = new var14[var1](var13, var12);
                            var11 = var1 instanceof Object ? var1 : var4;
                            var _closure3_slot0 = var11;
                            var1 = 0;
                            var4 = var1 < var2;
                            if (!var4) {
                                _fun33271_ip = 68;
                                continue _fun33271
                            }
                        case 53:
                            var4 = arguments[var1];
                            var11[var1] = var4;
                            var1 = var1 + 1;
                            if (var1 < var2) {
                                _fun33271_ip = 53;
                                continue _fun33271
                            }
                        case 68:
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var1 = 3;
                            var1 = var10[var1];
                            var1 = var8.bind(var9)(var1);
                            var2 = var1.ReanimatedModule;
                            var1 = var2.executeOnUIRuntimeSync;
                            var7 = 4;
                            var3 = var10[var7];
                            var4 = var8.bind(var9)(var3);
                            var3 = var4.makeShareableCloneRecursive;
                            var0 = function() {
                                var2 = _closure2_slot0;
                                var1 = var2.apply;
                                var0 = _closure3_slot0;
                                var3 = undefined;
                                var2 = var1.bind(var2)(var3, var0);
                                var1 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 4;
                                var0 = var4[var0];
                                var1 = var1.bind(var3)(var0);
                                var0 = var1.makeShareableCloneOnUIRecursive;
                                var0 = var0.bind(var1)(var2);
                                return var0;
                            };
                            var6 = {};
                            var12 = _closure2_slot0;
                            var6.worklet = var12;
                            var6.args = var11;
                            var7 = var10[var7];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.makeShareableCloneOnUIRecursive;
                            var6.makeShareableCloneOnUIRecursive = var7;
                            var0.__closure = var6;
                            var6 = 6038069575410.0;
                            var0.__workletHash = var6;
                            var5 = _closure1_slot14;
                            var0.__initData = var5;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                return var0;
            };
            var2.executeOnUIRuntimeSync = var4;
            var2.runOnUIImmediately = var3;
            var2.runOnJS = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 57, 3725, 3730, 3752, 3747]);