// modules/cache/deserializeChannels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun18780: for (var _fun18780_ip = 0;;) switch (_fun18780_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun18780_ip = 45;
                    continue _fun18780
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun18780_ip = 54;
                    continue _fun18780
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun18780_ip = 342;
                    continue _fun18780
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun18780_ip = 322;
                    continue _fun18780
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun18780_ip = 282;
                    continue _fun18780
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun18780_ip = 269;
                    continue _fun18780
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun18780_ip = 162;
                    continue _fun18780
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun18780_ip = 178;
                    continue _fun18780
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun18780_ip = 248;
                    continue _fun18780
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun18780_ip = 248;
                    continue _fun18780
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun18780_ip = 233;
                    continue _fun18780
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun18780_ip = 246;
                    continue _fun18780
                }
            case 233:
                var8 = _closure1_slot4;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun18780_ip = 264;
                continue _fun18780;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun18780_ip = 282;
                continue _fun18780;
            case 269:
                var6 = _closure1_slot4;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun18780_ip = 322;
                    continue _fun18780
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun18780_ip = 329;
                    continue _fun18780
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun18781: for (var _fun18781_ip = 0;;) switch (_fun18781_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun18781_ip = 56;
                                continue _fun18781
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun18781_ip = 67;
                            continue _fun18781;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun18782: for (var _fun18782_ip = 0;;) switch (_fun18782_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun18782_ip = 23;
                    continue _fun18782
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun18782_ip = 33;
                    continue _fun18782
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun18782_ip = 70;
                    continue _fun18782
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun18782_ip = 55;
                    continue _fun18782
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var3 = function(arg0) { // Original name: deserializeChannels, environment: var1
        _fun18783: for (var _fun18783_ip = 0;;) switch (_fun18783_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var5 = var2.bind(var0)(var1);
                var2 = var5.bind(var0)();
                var1 = var2.done;
                var4 = 1;
                var3 = null;
                if (var1) {
                    _fun18783_ip = 168;
                    continue _fun18783
                }
            case 37:
                var1 = var2.value;
                var11 = var1.permissionOverwrites_;
                if (!(var3 != var11)) {
                    _fun18783_ip = 153;
                    continue _fun18783
                }
            case 52:
                var9 = var11;
                for (var1 in var9)
                    case 63: {
                        case 72: var12 = var1;
                        var13 = var11[var12];
                        var14 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var15 = var12[var4];
                        var17 = var14.bind(var0)(var15);
                        var16 = var17.deserialize;
                        var15 = var13.allow;
                        var15 = var16.bind(var17)(var15);
                        var13.allow = var15;
                        var12 = var12[var4];
                        var15 = var14.bind(var0)(var12);
                        var14 = var15.deserialize;
                        var12 = var13.deny;
                        var12 = var14.bind(var15)(var12);
                        var13.deny = var12;
                        _fun18783_ip = 63;
                        continue _fun18783;
                    }
            case 153:
                var7 = var5.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun18783_ip = 37;
                    continue _fun18783
                }
            case 168:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/cache/deserializeChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function(arg0) { // Original name: deserializeChannelEntries, environment: var1
        _fun18784: for (var _fun18784_ip = 0;;) switch (_fun18784_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var1 = arg0;
                var6 = var2.bind(var0)(var1);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var1) {
                    _fun18784_ip = 84;
                    continue _fun18784
                }
            case 37:
                var8 = var2.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var0)(var8, var5);
                var8 = var1[var4];
                var8 = _closure1_slot5;
                var1 = var1[var3];
                var1 = var8.bind(var0)(var1);
                var8 = var6.bind(var0)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun18784_ip = 37;
                    continue _fun18784
                }
            case 84:
                return var0;
        }
    };
    var2.deserializeChannelEntries = var3;
    var1 = function(arg0) { // Original name: deserializeChannel, environment: var1
        _fun18785: for (var _fun18785_ip = 0;;) switch (_fun18785_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.permissionOverwrites_;
                var1 = null;
                if (!(var1 != var9)) {
                    _fun18785_ip = 124;
                    continue _fun18785
                }
            case 15:
                var7 = var9;
                var2 = 1;
                var1 = undefined;
                for (var4 in var7)
                    case 34: {
                        case 43: var10 = var4;
                        var11 = var9[var10];
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var13 = var10[var2];
                        var15 = var12.bind(var1)(var13);
                        var14 = var15.deserialize;
                        var13 = var11.allow;
                        var13 = var14.bind(var15)(var13);
                        var11.allow = var13;
                        var10 = var10[var2];
                        var13 = var12.bind(var1)(var10);
                        var12 = var13.deserialize;
                        var10 = var11.deny;
                        var10 = var12.bind(var13)(var10);
                        var11.deny = var10;
                        _fun18785_ip = 34;
                        continue _fun18785;
                    }
            case 124:
                return var0;
        }
    };
    var2.deserializeChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 484, 2]);