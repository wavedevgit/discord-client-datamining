// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = function arg0() {
        _fun33277: for (var _fun33277_ip = 0;;) switch (_fun33277_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.match;
                var2 = /worklet_(\d+):(\d+):(\d+)/g;
                var3 = var3.bind(var1)(var2);
                var _closure2_slot0 = var1;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun33277_ip = 55;
                    continue _fun33277
                }
            case 40:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun33278: for (var _fun33278_ip = 0;;) switch (_fun33278_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.split;
                            var0 = /:|_/;
                            var3 = var1.bind(var5)(var0);
                            var2 = var3.map;
                            var1 = global;
                            var0 = var1.Number;
                            var4 = var2.bind(var3)(var0);
                            var3 = _closure1_slot1;
                            var0 = undefined;
                            var15 = 4;
                            var3 = var3.bind(var0)(var4, var15);
                            var7 = 1;
                            var10 = var3[var7];
                            var6 = 2;
                            var9 = var3[var6];
                            var12 = 3;
                            var4 = var3[var12];
                            var8 = _closure1_slot4;
                            var3 = var8.get;
                            var8 = var3.bind(var8)(var10);
                            if (!var8) {
                                _fun33278_ip = 367;
                                continue _fun33278
                            }
                        case 104:
                            var3 = _closure1_slot1;
                            var3 = var3.bind(var0)(var8, var12);
                            var10 = 0;
                            var11 = var3[var10];
                            var8 = var3[var7];
                            var3 = var3[var6];
                            var17 = var11.stack;
                            var13 = null;
                            var11 = var13 == var17;
                            var14 = undefined;
                            if (var11) {
                                _fun33278_ip = 172;
                                continue _fun33278
                            }
                        case 145:
                            var16 = var17.split;
                            var11 = '\n';
                            var11 = var16.bind(var17)(var11);
                            var13 = var13 == var11;
                            var14 = undefined;
                            if (var13) {
                                _fun33278_ip = 172;
                                continue _fun33278
                            }
                        case 168:
                            var14 = var11[var10];
                        case 172:
                            if (!var14) {
                                _fun33278_ip = 203;
                                continue _fun33278
                            }
                        case 175:
                            var13 = /@([^@]+):(\d+):(\d+)/;
                            var11 = var13.exec;
                            var14 = var11.bind(var13)(var14);
                            if (var14) {
                                _fun33278_ip = 215;
                                continue _fun33278
                            }
                        case 203:
                            var11 = ['unknown', 0, 0];
                            _fun33278_ip = 278;
                            continue _fun33278;
                        case 215:
                            var13 = _closure1_slot1;
                            var13 = var13.bind(var0)(var14, var15);
                            var14 = var13[var7];
                            var16 = var13[var6];
                            var15 = var13[var12];
                            var13 = new Array(3);
                            var13[0] = var14;
                            var14 = var1.Number;
                            var14 = var14.bind(var0)(var16);
                            var13[1] = var14;
                            var14 = var1.Number;
                            var14 = var14.bind(var0)(var15);
                            var13[2] = var14;
                            var11 = var13;
                        case 278:
                            var2 = _closure1_slot1;
                            var2 = var2.bind(var0)(var11, var12);
                            var22 = var2[var10];
                            var7 = var2[var7];
                            var7 = var9 + var7;
                            var20 = var7 + var8;
                            var2 = var2[var6];
                            var2 = var4 + var2;
                            var18 = var2 + var3;
                            var4 = _closure2_slot0;
                            var3 = var4.replace;
                            var1 = var1.HermesInternal;
                            var7 = var1.concat;
                            var23 = '';
                            var1 = ':';
                            var21 = var1;
                            var19 = var1;
                            var1 = var23[var7](var22, var21, var20, var19, var18, var17);
                            var1 = var3.bind(var4)(var5, var1);
                            _closure2_slot0 = var1;
                        case 367:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 55:
                var0 = _closure2_slot0;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var5 = global;
    var6 = var5.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot1 = var3;
    var3 = {};
    var4 = 'function ReanimatedError_Pnpm_errorsTs1(message){const prefix=\'[Reanimated]\';const errorInstance=new Error(message?prefix+" "+message:prefix);errorInstance.name=\'ReanimatedError\';return errorInstance;}';
    var3.code = var4;
    var4 = function arg0() {
        _fun33279: for (var _fun33279_ip = 0;;) switch (_fun33279_ip) {
            case 0:
                var6 = arg0;
                var1 = global;
                var2 = var1.Error;
                var5 = '[Reanimated]';
                var0 = var5;
                if (!var6) {
                    _fun33279_ip = 51;
                    continue _fun33279
                }
            case 23:
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var1 = ' ';
                var0 = var4.bind(var3)(var5, var1, var6);
            case 51:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var9 = var0;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                var1 = 'ReanimatedError';
                var0.name = var1;
                return var0;
        }
    };
    var6 = {};
    var4.__closure = var6;
    var6 = 17260882889510.0;
    var4.__workletHash = var6;
    var4.__initData = var3;
    var _closure1_slot2 = var4;
    var3 = {};
    var6 = "function registerReanimatedError_Pnpm_errorsTs2(){const{ReanimatedErrorConstructor}=this.__closure;if(!_WORKLET){throw new Error('[Reanimated] registerReanimatedError() must be called on Worklet runtime');}global.ReanimatedError=ReanimatedErrorConstructor;}";
    var3.code = var6;
    var _closure1_slot3 = var3;
    var3 = function() { // Environment: var1
        var0 = function() {
            _fun33281: for (var _fun33281_ip = 0;;) switch (_fun33281_ip) {
                case 0:
                    var0 = global;
                    var1 = var0._WORKLET;
                    if (var1) {
                        _fun33281_ip = 45;
                        continue _fun33281
                    }
                case 11:
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = '[Reanimated] registerReanimatedError() must be called on Worklet runtime';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 45:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1.ReanimatedError = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.ReanimatedErrorConstructor = var3;
        var0.__closure = var2;
        var2 = 12525509537607.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var5 = var5.Map;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var10 = var6;
    var5 = new var10[var5](var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot4 = var5;
    var2.ReanimatedError = var4;
    var2.registerReanimatedError = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot4;
        var2 = var3.set;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.registerWorkletStackDetails = var3;
    var1 = function arg0() {
        _fun33283: for (var _fun33283_ip = 0;;) switch (_fun33283_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.message;
                var4 = var1.stack;
                var1 = global;
                var1 = var1.Error;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var1 = new var6[var1](var5);
                var3 = var1 instanceof Object ? var1 : var2;
                var3.message = var0;
                var0 = undefined;
                var1 = undefined;
                if (!var4) {
                    _fun33283_ip = 67;
                    continue _fun33283
                }
            case 55:
                var2 = _closure1_slot5;
                var1 = var2.bind(var0)(var4);
            case 67:
                var3.stack = var1;
                var1 = 'ReanimatedError';
                var3.name = var1;
                var1 = 'reanimated';
                var3.jsEngine = var1;
                var1 = _closure1_slot0;
                var2 = var1.ErrorUtils;
                var1 = var2.reportFatalError;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var2.reportFatalErrorOnJS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);