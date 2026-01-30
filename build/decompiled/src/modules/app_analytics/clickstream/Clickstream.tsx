// modules/app_analytics/clickstream/Clickstream.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun39664: for (var _fun39664_ip = 0;;) switch (_fun39664_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39664_ip = 45;
                    continue _fun39664
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun39664_ip = 54;
                    continue _fun39664
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun39664_ip = 342;
                    continue _fun39664
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39664_ip = 322;
                    continue _fun39664
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39664_ip = 282;
                    continue _fun39664
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39664_ip = 269;
                    continue _fun39664
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
                    _fun39664_ip = 162;
                    continue _fun39664
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun39664_ip = 178;
                    continue _fun39664
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39664_ip = 248;
                    continue _fun39664
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39664_ip = 248;
                    continue _fun39664
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39664_ip = 233;
                    continue _fun39664
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39664_ip = 246;
                    continue _fun39664
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun39664_ip = 264;
                continue _fun39664;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun39664_ip = 282;
                continue _fun39664;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun39664_ip = 322;
                    continue _fun39664
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
                    _fun39664_ip = 329;
                    continue _fun39664
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39665: for (var _fun39665_ip = 0;;) switch (_fun39665_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39665_ip = 56;
                                continue _fun39665
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
                            _fun39665_ip = 67;
                            continue _fun39665;
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
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun39666: for (var _fun39666_ip = 0;;) switch (_fun39666_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39666_ip = 23;
                    continue _fun39666
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39666_ip = 33;
                    continue _fun39666
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
                    _fun39666_ip = 70;
                    continue _fun39666
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39666_ip = 55;
                    continue _fun39666
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/clickstream/Clickstream.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: trackClickstream, environment: var1
        _fun39667: for (var _fun39667_ip = 0;;) switch (_fun39667_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot4;
                var0 = var1.has;
                var0 = var0.bind(var1)(var5);
                if (var0) {
                    _fun39667_ip = 42;
                    continue _fun39667
                }
            case 23:
                var3 = _closure1_slot4;
                var1 = var3.set;
                var0 = new Array(0);
                var0 = var1.bind(var3)(var5, var0);
            case 42:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var3 = var1.default;
                var1 = arg1;
                var3 = var3.bind(var0)(var5, var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun39667_ip = 112;
                    continue _fun39667
                }
            case 84:
                var4 = _closure1_slot4;
                var2 = var4.get;
                var2 = var2.bind(var4)(var5);
                if (!(var1 != var2)) {
                    _fun39667_ip = 112;
                    continue _fun39667
                }
            case 102:
                var1 = var2.push;
                var1 = var1.bind(var2)(var3);
            case 112:
                return var0;
        }
    };
    var2.trackClickstream = var3;
    var1 = function() { // Original name: drainClickstream, environment: var1
        _fun39668: for (var _fun39668_ip = 0;;) switch (_fun39668_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 2;
                var2 = var0[var9];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.clickstreamExperimentEnabled;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun39668_ip = 57;
                    continue _fun39668
                }
            case 38:
                var3 = _closure1_slot4;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                _fun39668_ip = 201;
                continue _fun39668;
            case 57:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var8 = var2.default;
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var7 = var3.bind(var0)(var2);
                var3 = var7.bind(var0)();
                var2 = var3.done;
                var6 = 0;
                var5 = 1;
                var4 = 4;
                if (var2) {
                    _fun39668_ip = 187;
                    continue _fun39668
                }
            case 115:
                var10 = var3.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var0)(var10, var9);
                var12 = var2[var6];
                var2 = var2[var5];
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var4];
                var11 = var11.bind(var0)(var10);
                var10 = var11.track;
                var2 = var8.bind(var0)(var12, var2);
                var2 = var10.bind(var11)(var12, var2);
                var10 = var7.bind(var0)();
                var2 = var10.done;
                var3 = var10;
                if (!var2) {
                    _fun39668_ip = 115;
                    continue _fun39668
                }
            case 187:
                var2 = _closure1_slot4;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
            case 201:
                return var0;
        }
    };
    var2.drainClickstream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4280, 4281, 4282, 795, 2]);