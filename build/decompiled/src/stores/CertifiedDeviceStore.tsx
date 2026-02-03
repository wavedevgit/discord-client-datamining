// stores/CertifiedDeviceStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun30954: for (var _fun30954_ip = 0;;) switch (_fun30954_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun30954_ip = 74;
                continue _fun30954;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun30957: for (var _fun30957_ip = 0;;) switch (_fun30957_ip) {
            case 0:
                var0 = arg1;
                var2 = _closure1_slot10;
                var1 = arg0;
                var3 = var2[var1];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun30957_ip = 33;
                    continue _fun30957
                }
            case 23:
                var2 = arg2;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 33:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun30958: for (var _fun30958_ip = 0;;) switch (_fun30958_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = _closure1_slot9;
                var6 = var4[var3];
                var4 = null;
                if (!(var4 != var6)) {
                    _fun30958_ip = 40;
                    continue _fun30958
                }
            case 25:
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot10;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = delete var1[var0];
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
            case 40:
                var1 = _closure1_slot9;
                var1[var3] = var2;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = _closure1_slot10;
                    var1 = var0.id;
                    var2[var1] = var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.DeviceTypes;
    var _closure1_slot8 = var7;
    var7 = {};
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun30962: for (var _fun30962_ip = 0;;) switch (_fun30962_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30962_ip = 69;
                        continue _fun30962
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30962_ip = 105;
                    continue _fun30962;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            _fun30963: for (var _fun30963_ip = 0;;) switch (_fun30963_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.Storage;
                    var3 = var4.get;
                    var2 = 'CertifiedDeviceStore';
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun30963_ip = 91;
                        continue _fun30963
                    }
                case 53:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var3 = arg0;
                        var1 = var3.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun30965: for (var _fun30965_ip = 0;;) switch (_fun30965_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.type;
                                    var0 = 'audioinput';
                                    var0 = var0 === var2;
                                    if (!var0) {
                                        _fun30965_ip = 27;
                                        continue _fun30965
                                    }
                                case 21:
                                    var0 = var1.hardwareMute;
                                case 27:
                                    if (!var0) {
                                        _fun30965_ip = 38;
                                        continue _fun30965
                                    }
                                case 30:
                                    var0 = false;
                                    var1.hardwareMute = var0;
                                case 38:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var3)(var0);
                        var2 = _closure1_slot14;
                        var0 = undefined;
                        var1 = arg1;
                        var1 = var2.bind(var0)(var1, var3);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var4, var1);
                case 91:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'isCertified';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCertifiedDevice';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCertifiedDeviceName';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun30968: for (var _fun30968_ip = 0;;) switch (_fun30968_ip) {
                case 0:
                    var0 = arg1;
                    var3 = this;
                    var2 = var3.getCertifiedDevice;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun30968_ip = 80;
                        continue _fun30968
                    }
                case 28:
                    var2 = var1.vendor;
                    var5 = var2.name;
                    var1 = var1.model;
                    var4 = var1.name;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ' ';
                    var0 = var3.bind(var2)(var5, var1, var4);
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getCertifiedDeviceByType';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.find;
            var1 = _closure1_slot10;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isHardwareMute';
        var4.key = var6;
        var6 = function arg0() {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = false;
            var0 = function(arg0) { // Environment: var0
                _fun30972: for (var _fun30972_ip = 0;;) switch (_fun30972_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = _closure1_slot8;
                        var0 = var0.AUDIO_INPUT;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun30972_ip = 34;
                            continue _fun30972
                        }
                    case 28:
                        var0 = var1.hardwareMute;
                    case 34:
                        return var0;
                }
            };
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasEchoCancellation';
        var4.key = var6;
        var6 = function arg0() {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = false;
            var0 = function(arg0) { // Environment: var0
                _fun30974: for (var _fun30974_ip = 0;;) switch (_fun30974_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = _closure1_slot8;
                        var0 = var0.AUDIO_INPUT;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun30974_ip = 34;
                            continue _fun30974
                        }
                    case 28:
                        var0 = var1.echoCancellation;
                    case 34:
                        return var0;
                }
            };
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasNoiseSuppression';
        var4.key = var6;
        var6 = function arg0() {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = false;
            var0 = function(arg0) { // Environment: var0
                _fun30976: for (var _fun30976_ip = 0;;) switch (_fun30976_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = _closure1_slot8;
                        var0 = var0.AUDIO_INPUT;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun30976_ip = 34;
                            continue _fun30976
                        }
                    case 28:
                        var0 = var1.noiseSuppression;
                    case 34:
                        return var0;
                }
            };
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'hasAutomaticGainControl';
        var4.key = var6;
        var6 = function arg0() {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = false;
            var0 = function(arg0) { // Environment: var0
                _fun30978: for (var _fun30978_ip = 0;;) switch (_fun30978_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var0 = _closure1_slot8;
                        var0 = var0.AUDIO_INPUT;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun30978_ip = 34;
                            continue _fun30978
                        }
                    case 28:
                        var0 = var1.automaticGainControl;
                    case 34:
                        return var0;
                }
            };
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getVendor';
        var4.key = var6;
        var6 = function arg0() {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = null;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.vendor;
                return var0;
            };
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getModel';
        var4.key = var6;
        var6 = function arg0() {
            var4 = _closure1_slot13;
            var3 = undefined;
            var2 = arg0;
            var1 = null;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.model;
                return var0;
            };
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getRevision';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'CertifiedDeviceStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.applicationId;
        var3 = var0.devices;
        var1 = _closure1_slot14;
        var0 = undefined;
        var1 = var1.bind(var0)(var4, var3);
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 6;
        var1 = var4[var1];
        var1 = var3.bind(var0)(var1);
        var5 = var1.Storage;
        var4 = var5.set;
        var3 = _closure1_slot9;
        var1 = 'CertifiedDeviceStore';
        var1 = var4.bind(var5)(var1, var3);
        var1 = _closure1_slot11;
        var1 = var1 + 1;
        _closure1_slot11 = var1;
        return var0;
    };
    var1.CERTIFIED_DEVICES_SET = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/CertifiedDeviceStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3501, 587, 22, 566, 806, 2]);