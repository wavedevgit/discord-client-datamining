// modules/instant_invite/native/DCDSendUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.Linking;
    var _closure1_slot3 = var6;
    var3 = var3.NativeModules;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/DCDSendUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        _fun31861: for (var _fun31861_ip = 0;;) switch (_fun31861_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun31861_ip = 68;
                    continue _fun31861
                }
            case 41:
                var3 = _closure1_slot4;
                var5 = var3.DCDSend;
                var4 = var5.sendSMS;
                var3 = arg1;
                var3 = var4.bind(var5)(var1, var3);
                _fun31861_ip = 135;
                continue _fun31861;
            case 68:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.sendSMS;
                var6 = var1.body;
                var5 = null;
                var7 = var5 != var6;
                var2 = '';
                if (!var7) {
                    _fun31861_ip = 115;
                    continue _fun31861
                }
            case 112:
                var2 = var6;
            case 115:
                var1 = var1.recipients;
                if (!(var5 == var1)) {
                    _fun31861_ip = 129;
                    continue _fun31861
                }
            case 125:
                var1 = new Array(0);
            case 129:
                var1 = var3.bind(var4)(var2, var1);
            case 135:
                return var0;
        }
    };
    var2.sendSMS = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun31862: for (var _fun31862_ip = 0;;) switch (_fun31862_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun31862_ip = 68;
                    continue _fun31862
                }
            case 41:
                var3 = _closure1_slot4;
                var5 = var3.DCDSend;
                var4 = var5.sendMail;
                var3 = arg1;
                var3 = var4.bind(var5)(var1, var3);
                _fun31862_ip = 155;
                continue _fun31862;
            case 68:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.sendMail;
                var7 = var1.subject;
                var6 = null;
                var8 = var6 != var7;
                var3 = '';
                var2 = var3;
                if (!var8) {
                    _fun31862_ip = 119;
                    continue _fun31862
                }
            case 116:
                var2 = var7;
            case 119:
                var7 = var1.body;
                var8 = var6 != var7;
                if (!var8) {
                    _fun31862_ip = 134;
                    continue _fun31862
                }
            case 131:
                var3 = var7;
            case 134:
                var1 = var1.recipients;
                if (!(var6 == var1)) {
                    _fun31862_ip = 148;
                    continue _fun31862
                }
            case 144:
                var1 = new Array(0);
            case 148:
                var1 = var4.bind(var5)(var2, var3, var1);
            case 155:
                return var0;
        }
    };
    var2.sendMail = var3;
    var3 = function() { // Environment: var1
        _fun31863: for (var _fun31863_ip = 0;;) switch (_fun31863_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun31863_ip = 60;
                    continue _fun31863
                }
            case 38:
                var0 = _closure1_slot4;
                var2 = var0.DCDSend;
                var0 = var2.canSendSMS;
                var0 = var0.bind(var2)();
                _fun31863_ip = 109;
                continue _fun31863;
            case 60:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.canSendSMS;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 109:
                return var0;
        }
    };
    var2.canSendSMS = var3;
    var3 = function() { // Environment: var1
        _fun31864: for (var _fun31864_ip = 0;;) switch (_fun31864_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.isAndroid;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun31864_ip = 60;
                    continue _fun31864
                }
            case 38:
                var0 = _closure1_slot4;
                var2 = var0.DCDSend;
                var0 = var2.canSendMail;
                var0 = var0.bind(var2)();
                _fun31864_ip = 109;
                continue _fun31864;
            case 60:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.canSendMail;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 109:
                return var0;
        }
    };
    var2.canSendMail = var3;
    var1 = function(arg0) { // Original name: canOpenUrlScheme, environment: var1
        _fun31865: for (var _fun31865_ip = 0;;) switch (_fun31865_ip) {
            case 0:
                var2 = arg0;
                var0 = var2;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 1;
                var2 = var5[var2];
                var5 = undefined;
                var4 = var4.bind(var5)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun31865_ip = 85;
                    continue _fun31865
                }
            case 50:
                var2 = global;
                var4 = var2.Promise;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot3;
                    var2 = var3.canOpenURL;
                    var6 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = '';
                    var1 = '://app';
                    var1 = var5.bind(var4)(var6, var1);
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var8 = var2;
                var1 = new var8[var4](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 85: // try_start_0
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.canOpenUrlScheme;
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
            case 135: // try_end0
                return var0;
            case 137: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = false;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.canOpenUrlScheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 3578, 2]);