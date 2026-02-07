// modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun109282: for (var _fun109282_ip = 0;;) switch (_fun109282_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun109282_ip = 46;
                    continue _fun109282
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun109282_ip = 55;
                    continue _fun109282
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun109282_ip = 345;
                    continue _fun109282
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun109282_ip = 323;
                    continue _fun109282
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun109282_ip = 283;
                    continue _fun109282
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun109282_ip = 270;
                    continue _fun109282
                }
            case 110:
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
                    _fun109282_ip = 163;
                    continue _fun109282
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun109282_ip = 179;
                    continue _fun109282
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun109282_ip = 249;
                    continue _fun109282
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun109282_ip = 249;
                    continue _fun109282
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun109282_ip = 234;
                    continue _fun109282
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun109282_ip = 247;
                    continue _fun109282
                }
            case 234:
                var8 = _closure1_slot4;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun109282_ip = 265;
                continue _fun109282;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun109282_ip = 283;
                continue _fun109282;
            case 270:
                var6 = _closure1_slot4;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun109282_ip = 323;
                    continue _fun109282
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun109282_ip = 330;
                    continue _fun109282
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun109283: for (var _fun109283_ip = 0;;) switch (_fun109283_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun109283_ip = 56;
                                continue _fun109283
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
                            _fun109283_ip = 67;
                            continue _fun109283;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1() {
        _fun109284: for (var _fun109284_ip = 0;;) switch (_fun109284_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun109284_ip = 23;
                    continue _fun109284
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun109284_ip = 33;
                    continue _fun109284
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
                    _fun109284_ip = 70;
                    continue _fun109284
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun109284_ip = 55;
                    continue _fun109284
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot1 = var3;
    var3 = function arg0() {
        _fun109285: for (var _fun109285_ip = 0;;) switch (_fun109285_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = var2.isSpam;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun109285_ip = 39;
                    continue _fun109285
                }
            case 24:
                var2 = _closure1_slot0;
                var1 = var2.isIgnored;
                var0 = var1.bind(var2)(var3);
            case 39:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109286: for (var _fun109286_ip = 0;;) switch (_fun109286_ip) {
            case 0:
                var9 = arg0;
                var4 = new Array(0);
                var3 = new Array(0);
                var2 = new Array(0);
                var1 = new Array(0);
                var5 = _closure1_slot3;
                var0 = var9.keys;
                var0 = var0.bind(var9)();
                var7 = undefined;
                var6 = var5.bind(var7)(var0);
                var5 = var6.bind(var7)();
                var0 = var5.done;
                if (var0) {
                    _fun109286_ip = 243;
                    continue _fun109286
                }
            case 57:
                var10 = var5.value;
                var0 = var9.get;
                var11 = var0.bind(var9)(var10);
                var0 = _closure1_slot1;
                var0 = var0.PENDING_INCOMING;
                var0 = var11 !== var0;
                if (var0) {
                    _fun109286_ip = 98;
                    continue _fun109286
                }
            case 89:
                var12 = _closure1_slot2;
                var0 = var12.bind(var7)(var10);
            case 98:
                if (var0) {
                    _fun109286_ip = 111;
                    continue _fun109286
                }
            case 101:
                var0 = var4.push;
                var0 = var0.bind(var4)(var10);
            case 111:
                var0 = _closure1_slot1;
                var0 = var0.PENDING_OUTGOING;
                if (!(var11 === var0)) {
                    _fun109286_ip = 135;
                    continue _fun109286
                }
            case 125:
                var0 = var3.push;
                var0 = var0.bind(var3)(var10);
            case 135:
                var0 = _closure1_slot1;
                var0 = var0.PENDING_INCOMING;
                var0 = var11 === var0;
                if (!var0) {
                    _fun109286_ip = 167;
                    continue _fun109286
                }
            case 152:
                var13 = _closure1_slot0;
                var12 = var13.isSpam;
                var0 = var12.bind(var13)(var10);
            case 167:
                if (!var0) {
                    _fun109286_ip = 180;
                    continue _fun109286
                }
            case 170:
                var0 = var2.push;
                var0 = var0.bind(var2)(var10);
            case 180:
                var0 = _closure1_slot1;
                var0 = var0.PENDING_INCOMING;
                var0 = var11 === var0;
                if (!var0) {
                    _fun109286_ip = 212;
                    continue _fun109286
                }
            case 197:
                var12 = _closure1_slot0;
                var11 = var12.isIgnored;
                var0 = var11.bind(var12)(var10);
            case 212:
                if (!var0) {
                    _fun109286_ip = 225;
                    continue _fun109286
                }
            case 215:
                var0 = var1.push;
                var0 = var0.bind(var1)(var10);
            case 225:
                var10 = var6.bind(var7)();
                var0 = var10.done;
                var5 = var10;
                if (!var0) {
                    _fun109286_ip = 57;
                    continue _fun109286
                }
            case 243:
                var0 = var4.reverse;
                var0 = var0.bind(var4)();
                var0 = var3.reverse;
                var0 = var0.bind(var3)();
                var0 = var2.reverse;
                var0 = var0.bind(var2)();
                var0 = {};
                var0.pendingIncomingIds = var4;
                var0.pendingOutgoingIds = var3;
                var0.spamIds = var2;
                var0.ignoredUserIds = var1;
                return var0;
        }
    };
    var2.getPendingRelationshipIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3102, 660, 2]);