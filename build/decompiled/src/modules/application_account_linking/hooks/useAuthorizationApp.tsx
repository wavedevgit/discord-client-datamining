// modules/application_account_linking/hooks/useAuthorizationApp.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        _fun56771: for (var _fun56771_ip = 0;;) switch (_fun56771_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun56771_ip = 46;
                    continue _fun56771
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun56771_ip = 55;
                    continue _fun56771
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun56771_ip = 343;
                    continue _fun56771
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun56771_ip = 323;
                    continue _fun56771
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun56771_ip = 283;
                    continue _fun56771
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun56771_ip = 270;
                    continue _fun56771
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
                    _fun56771_ip = 163;
                    continue _fun56771
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun56771_ip = 179;
                    continue _fun56771
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun56771_ip = 249;
                    continue _fun56771
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun56771_ip = 249;
                    continue _fun56771
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun56771_ip = 234;
                    continue _fun56771
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun56771_ip = 247;
                    continue _fun56771
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun56771_ip = 265;
                continue _fun56771;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun56771_ip = 283;
                continue _fun56771;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun56771_ip = 323;
                    continue _fun56771
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
                    _fun56771_ip = 330;
                    continue _fun56771
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun56772: for (var _fun56772_ip = 0;;) switch (_fun56772_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun56772_ip = 56;
                                continue _fun56772
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
                            _fun56772_ip = 67;
                            continue _fun56772;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun56773: for (var _fun56773_ip = 0;;) switch (_fun56773_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun56773_ip = 23;
                    continue _fun56773
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun56773_ip = 33;
                    continue _fun56773
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
                    _fun56773_ip = 70;
                    continue _fun56773
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun56773_ip = 55;
                    continue _fun56773
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = function arg0() {
        _fun56774: for (var _fun56774_ip = 0;;) switch (_fun56774_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun56774_ip = 170;
                    continue _fun56774
                }
            case 12:
                var3 = var1.type;
                var2 = _closure1_slot4;
                var2 = var2.GAME;
                if (!(var3 === var2)) {
                    _fun56774_ip = 168;
                    continue _fun56774
                }
            case 37:
                var3 = _closure1_slot5;
                var2 = var1.linkedGames;
                if (!(var0 == var2)) {
                    _fun56774_ip = 55;
                    continue _fun56774
                }
            case 51:
                var2 = new Array(0);
            case 55:
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = 3;
                var4 = var3;
                if (var2) {
                    _fun56774_ip = 166;
                    continue _fun56774
                }
            case 80:
                var3 = var4.value;
                var10 = _closure1_slot3;
                var9 = var10.getApplication;
                var2 = var3.id;
                var2 = var9.bind(var10)(var2);
                if (!(var0 != var2)) {
                    _fun56774_ip = 147;
                    continue _fun56774
                }
            case 109:
                var9 = var3.type;
                var10 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var10.bind(var7)(var3);
                var3 = var3.GameLinkTypes;
                var3 = var3.OFFICIAL;
                if (!(var9 !== var3)) {
                    _fun56774_ip = 164;
                    continue _fun56774
                }
            case 147:
                var9 = var6.bind(var7)();
                var3 = var9.done;
                var4 = var9;
                if (var3) {
                    _fun56774_ip = 166;
                    continue _fun56774
                }
            case 162:
                _fun56774_ip = 80;
                continue _fun56774;
            case 164:
                return var2;
            case 166:
                return var0;
            case 168:
                return var1;
            case 170:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg2;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ApplicationTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_account_linking/hooks/useAuthorizationApp.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getAuthorizationApp = var3;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useAuthorizationApp = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3454, 3485, 3487, 2]);