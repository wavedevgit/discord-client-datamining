// modules/main_tabs_v2/native/friends/hooks/getPendingRelationshipIds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun101810: for (var _fun101810_ip = 0;;) switch (_fun101810_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101810_ip = 45;
                    continue _fun101810
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun101810_ip = 54;
                    continue _fun101810
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun101810_ip = 344;
                    continue _fun101810
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101810_ip = 322;
                    continue _fun101810
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101810_ip = 282;
                    continue _fun101810
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101810_ip = 269;
                    continue _fun101810
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
                    _fun101810_ip = 162;
                    continue _fun101810
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun101810_ip = 178;
                    continue _fun101810
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101810_ip = 248;
                    continue _fun101810
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101810_ip = 248;
                    continue _fun101810
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101810_ip = 233;
                    continue _fun101810
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101810_ip = 246;
                    continue _fun101810
                }
            case 233:
                var8 = _closure1_slot4;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun101810_ip = 264;
                continue _fun101810;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun101810_ip = 282;
                continue _fun101810;
            case 269:
                var6 = _closure1_slot4;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun101810_ip = 322;
                    continue _fun101810
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
                    _fun101810_ip = 329;
                    continue _fun101810
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101811: for (var _fun101811_ip = 0;;) switch (_fun101811_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101811_ip = 56;
                                continue _fun101811
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
                            _fun101811_ip = 67;
                            continue _fun101811;
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
            case 344:
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
        _fun101812: for (var _fun101812_ip = 0;;) switch (_fun101812_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101812_ip = 23;
                    continue _fun101812
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101812_ip = 33;
                    continue _fun101812
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
                    _fun101812_ip = 70;
                    continue _fun101812
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101812_ip = 55;
                    continue _fun101812
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
    var3 = function(arg0) { // Original name: filterFromPending, environment: var1
        _fun101813: for (var _fun101813_ip = 0;;) switch (_fun101813_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = var2.isSpam;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun101813_ip = 39;
                    continue _fun101813
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
    var1 = function(arg0) { // Original name: getPendingRelationshipIds, environment: var1
        _fun101814: for (var _fun101814_ip = 0;;) switch (_fun101814_ip) {
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
                    _fun101814_ip = 243;
                    continue _fun101814
                }
            case 57:
                var10 = var5.value;
                var0 = var9.get;
                var11 = var0.bind(var9)(var10);
                var0 = _closure1_slot1;
                var0 = var0.PENDING_INCOMING;
                var0 = var11 !== var0;
                if (var0) {
                    _fun101814_ip = 98;
                    continue _fun101814
                }
            case 89:
                var12 = _closure1_slot2;
                var0 = var12.bind(var7)(var10);
            case 98:
                if (var0) {
                    _fun101814_ip = 111;
                    continue _fun101814
                }
            case 101:
                var0 = var4.push;
                var0 = var0.bind(var4)(var10);
            case 111:
                var0 = _closure1_slot1;
                var0 = var0.PENDING_OUTGOING;
                if (!(var11 === var0)) {
                    _fun101814_ip = 135;
                    continue _fun101814
                }
            case 125:
                var0 = var3.push;
                var0 = var0.bind(var3)(var10);
            case 135:
                var0 = _closure1_slot1;
                var0 = var0.PENDING_INCOMING;
                var0 = var11 === var0;
                if (!var0) {
                    _fun101814_ip = 167;
                    continue _fun101814
                }
            case 152:
                var13 = _closure1_slot0;
                var12 = var13.isSpam;
                var0 = var12.bind(var13)(var10);
            case 167:
                if (!var0) {
                    _fun101814_ip = 180;
                    continue _fun101814
                }
            case 170:
                var0 = var2.push;
                var0 = var0.bind(var2)(var10);
            case 180:
                var0 = _closure1_slot1;
                var0 = var0.PENDING_INCOMING;
                var0 = var11 === var0;
                if (!var0) {
                    _fun101814_ip = 212;
                    continue _fun101814
                }
            case 197:
                var12 = _closure1_slot0;
                var11 = var12.isIgnored;
                var0 = var11.bind(var12)(var10);
            case 212:
                if (!var0) {
                    _fun101814_ip = 225;
                    continue _fun101814
                }
            case 215:
                var0 = var1.push;
                var0 = var0.bind(var1)(var10);
            case 225:
                var10 = var6.bind(var7)();
                var0 = var10.done;
                var5 = var10;
                if (!var0) {
                    _fun101814_ip = 57;
                    continue _fun101814
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3059, 660, 2]);