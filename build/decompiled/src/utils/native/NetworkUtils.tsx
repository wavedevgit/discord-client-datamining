// utils/native/NetworkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun16698: for (var _fun16698_ip = 0;;) switch (_fun16698_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun16698_ip = 54;
                    continue _fun16698
                }
            case 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.addEventListener;
                var0 = _closure1_slot12;
                var0 = var2.bind(var3)(var0);
                _closure1_slot7 = var0;
            case 54:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        _fun16699: for (var _fun16699_ip = 0;;) switch (_fun16699_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = null;
                var2 = var0 != var2;
                if (!var2) {
                    _fun16699_ip = 31;
                    continue _fun16699
                }
            case 16:
                var3 = _closure1_slot4;
                var4 = var3.length;
                var3 = 0;
                var2 = var3 === var4;
            case 31:
                if (!var2) {
                    _fun16699_ip = 49;
                    continue _fun16699
                }
            case 34:
                var3 = _closure1_slot5;
                var4 = var3.length;
                var3 = 0;
                var2 = var3 === var4;
            case 49:
                if (!var2) {
                    _fun16699_ip = 67;
                    continue _fun16699
                }
            case 52:
                var3 = _closure1_slot6;
                var4 = var3.length;
                var3 = 0;
                var2 = var3 === var4;
            case 67:
                if (!var2) {
                    _fun16699_ip = 84;
                    continue _fun16699
                }
            case 70:
                var3 = _closure1_slot7;
                var2 = undefined;
                var2 = var3.bind(var2)();
                _closure1_slot7 = var0;
            case 84:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun16700: for (var _fun16700_ip = 0;;) switch (_fun16700_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.type;
                var2 = var0.details;
                var0 = {};
                var0.type = var4;
                var1 = _closure1_slot2;
                var6 = var1.CELLULAR;
                var5 = null;
                if (!(var4 === var6)) {
                    _fun16700_ip = 45;
                    continue _fun16700
                }
            case 39:
                var5 = var2.cellularGeneration;
            case 45:
                var0.effectiveSpeed = var5;
                var3 = _closure1_slot2;
                var3 = var3.CELLULAR;
                var1 = null;
                if (!(var4 === var3)) {
                    _fun16700_ip = 72;
                    continue _fun16700
                }
            case 66:
                var1 = var2.carrier;
            case 72:
                var0.serviceProvider = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun16701: for (var _fun16701_ip = 0;;) switch (_fun16701_ip) {
            case 0:
                var7 = arg0;
                var12 = var7.isConnected;
                var _closure2_slot0 = var12;
                var3 = _closure1_slot11;
                var0 = undefined;
                var3 = var3.bind(var0)(var7);
                var _closure2_slot1 = var3;
                if (var12) {
                    _fun16701_ip = 42;
                    continue _fun16701
                }
            case 36:
                var5 = _closure1_slot5;
                _fun16701_ip = 46;
                continue _fun16701;
            case 42:
                var5 = _closure1_slot4;
            case 46:
                var4 = null;
                var4 = var4 != var12;
                if (!var4) {
                    _fun16701_ip = 58;
                    continue _fun16701
                }
            case 55:
                var4 = var12;
            case 58:
                _closure1_slot8 = var4;
                var6 = _closure1_slot3;
                var4 = var6.log;
                var15 = var7.type;
                var13 = var3.cellularGeneration;
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var18 = 'Network status changed: isConnected:';
                var16 = ' type:';
                var14 = ' speed:';
                var17 = var12;
                var3 = var18[var9](var17, var16, var15, var14, var13, var12);
                var3 = var4.bind(var6)(var3);
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun16702: for (var _fun16702_ip = 0;;) switch (_fun16702_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 != var2;
                            if (!var3) {
                                _fun16702_ip = 20;
                                continue _fun16702
                            }
                        case 16:
                            var3 = _closure2_slot0;
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var3, var2);
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot6;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun16704: for (var _fun16704_ip = 0;;) switch (_fun16704_ip) {
            case 0:
                var1 = arg0;
                if (var1) {
                    _fun16704_ip = 15;
                    continue _fun16704
                }
            case 9:
                var3 = _closure1_slot5;
                _fun16704_ip = 19;
                continue _fun16704;
            case 15:
                var3 = _closure1_slot4;
            case 19:
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot9;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun16705: for (var _fun16705_ip = 0;;) switch (_fun16705_ip) {
            case 0:
                var1 = arg0;
                if (var1) {
                    _fun16705_ip = 15;
                    continue _fun16705
                }
            case 9:
                var2 = _closure1_slot5;
                _fun16705_ip = 19;
                continue _fun16705;
            case 15:
                var2 = _closure1_slot4;
            case 19:
                var3 = var2.indexOf;
                var1 = arg1;
                var4 = var3.bind(var2)(var1);
                var1 = -1;
                var3 = var2;
                if (!(var1 !== var4)) {
                    _fun16705_ip = 71;
                    continue _fun16705
                }
            case 46:
                var2 = var3.splice;
                var1 = 1;
                var1 = var2.bind(var3)(var4, var1);
                var1 = _closure1_slot10;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 71:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var8 = true;
    var1.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.NetworkConnectionTypes;
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var9 = var6.bind(var0)(var1);
    var1 = var9.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var9
        }
    });
    var12 = 'NetworkUtils';
    var13 = var7;
    var1 = new var13[var9](var12, var11);
    var7 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot3 = var7;
    var1 = var7.enableNativeLogger;
    var1 = var1.bind(var7)(var8);
    var1 = new Array(0);
    var _closure1_slot4 = var1;
    var1 = new Array(0);
    var _closure1_slot5 = var1;
    var1 = new Array(0);
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var1 = false;
    var _closure1_slot8 = var1;
    var1 = 2;
    var1 = var5[var1];
    var6 = var6.bind(var0)(var1);
    var1 = var6.fetch;
    var7 = var1.bind(var6)();
    var6 = var7.then;
    var1 = function(arg0) { // Environment: var3
        _fun16706: for (var _fun16706_ip = 0;;) switch (_fun16706_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isConnected;
                var1 = null;
                var1 = var1 != var0;
                if (!var1) {
                    _fun16706_ip = 21;
                    continue _fun16706
                }
            case 18:
                var1 = var0;
            case 21:
                _closure1_slot8 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var1 = {};
    var6 = function arg0() {
        var3 = _closure1_slot13;
        var0 = undefined;
        var2 = true;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.addOnlineCallback = var6;
    var6 = function arg0() {
        var3 = _closure1_slot14;
        var0 = undefined;
        var2 = true;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.removeOnlineCallback = var6;
    var6 = function arg0() {
        var3 = _closure1_slot13;
        var0 = undefined;
        var2 = false;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.addOfflineCallback = var6;
    var6 = function arg0() {
        var3 = _closure1_slot14;
        var0 = undefined;
        var2 = false;
        var1 = arg0;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.removeOfflineCallback = var6;
    var6 = function arg0() {
        var3 = _closure1_slot6;
        var2 = var3.push;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var1 = _closure1_slot9;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.addChangeCallback = var6;
    var6 = function arg0() {
        _fun16712: for (var _fun16712_ip = 0;;) switch (_fun16712_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.indexOf;
                var1 = arg0;
                var4 = var2.bind(var3)(var1);
                var1 = -1;
                if (!(var1 !== var4)) {
                    _fun16712_ip = 60;
                    continue _fun16712
                }
            case 31:
                var3 = _closure1_slot6;
                var2 = var3.splice;
                var1 = 1;
                var1 = var2.bind(var3)(var4, var1);
                var1 = _closure1_slot10;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var1.removeChangeCallback = var6;
    var6 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.fetch;
        var2 = var0.bind(var1)();
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot11;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getNetworkInformation = var6;
    var3 = function() {
        var0 = _closure1_slot8;
        return var0;
    };
    var1.isOnline = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/NetworkUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3, 1446, 2]);