// modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun44226: for (var _fun44226_ip = 0;;) switch (_fun44226_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun44226_ip = 46;
                    continue _fun44226
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun44226_ip = 55;
                    continue _fun44226
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun44226_ip = 343;
                    continue _fun44226
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun44226_ip = 323;
                    continue _fun44226
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun44226_ip = 283;
                    continue _fun44226
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun44226_ip = 270;
                    continue _fun44226
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
                    _fun44226_ip = 163;
                    continue _fun44226
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun44226_ip = 179;
                    continue _fun44226
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun44226_ip = 249;
                    continue _fun44226
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun44226_ip = 249;
                    continue _fun44226
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun44226_ip = 234;
                    continue _fun44226
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun44226_ip = 247;
                    continue _fun44226
                }
            case 234:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun44226_ip = 265;
                continue _fun44226;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun44226_ip = 283;
                continue _fun44226;
            case 270:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun44226_ip = 323;
                    continue _fun44226
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
                    _fun44226_ip = 330;
                    continue _fun44226
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun44227: for (var _fun44227_ip = 0;;) switch (_fun44227_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun44227_ip = 56;
                                continue _fun44227
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
                            _fun44227_ip = 67;
                            continue _fun44227;
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
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1() {
        _fun44228: for (var _fun44228_ip = 0;;) switch (_fun44228_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun44228_ip = 23;
                    continue _fun44228
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun44228_ip = 33;
                    continue _fun44228
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
                    _fun44228_ip = 70;
                    continue _fun44228
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun44228_ip = 55;
                    continue _fun44228
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun44229: for (var _fun44229_ip = 0;;) switch (_fun44229_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = null;
                var2 = var0 == var3;
                var0 = undefined;
                if (var2) {
                    _fun44229_ip = 38;
                    continue _fun44229
                }
            case 23:
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.String;
                    var1 = arg0;
                    var1 = var1.sound_id;
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var0.String;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var0);
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 38:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun44231: for (var _fun44231_ip = 0;;) switch (_fun44231_ip) {
            case 0:
                var9 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg3;
                var3 = var1.bind(var2)(var0, var9);
                var5 = null;
                if (!(var5 == var3)) {
                    _fun44231_ip = 312;
                    continue _fun44231
                }
            case 30:
                var7 = _closure1_slot2;
                var6 = var7.getMessage;
                var1 = arg0;
                var0 = arg1;
                var0 = var6.bind(var7)(var1, var0);
                if (!(var5 != var0)) {
                    _fun44231_ip = 263;
                    continue _fun44231
                }
            case 59:
                var1 = var5 == var0;
                var6 = undefined;
                if (var1) {
                    _fun44231_ip = 88;
                    continue _fun44231
                }
            case 68:
                var1 = var0.messageReference;
                var7 = var5 == var1;
                var6 = undefined;
                if (var7) {
                    _fun44231_ip = 88;
                    continue _fun44231
                }
            case 83:
                var6 = var1.type;
            case 88:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.MessageReferenceTypes;
                var1 = var1.FORWARD;
                if (!(var6 !== var1)) {
                    _fun44231_ip = 151;
                    continue _fun44231
                }
            case 124:
                var6 = _closure1_slot6;
                var7 = var5 == var0;
                var1 = undefined;
                if (var7) {
                    _fun44231_ip = 143;
                    continue _fun44231
                }
            case 137:
                var1 = var0.soundboardSounds;
            case 143:
                var7 = var6.bind(var2)(var1, var9);
                _fun44231_ip = 259;
                continue _fun44231;
            case 151:
                var6 = var5 == var0;
                var1 = undefined;
                if (var6) {
                    _fun44231_ip = 166;
                    continue _fun44231
                }
            case 160:
                var1 = var0.messageSnapshots;
            case 166:
                if (!(var5 == var1)) {
                    _fun44231_ip = 174;
                    continue _fun44231
                }
            case 170:
                var1 = new Array(0);
            case 174:
                var0 = _closure1_slot4;
                var8 = var0.bind(var2)(var1);
                var0 = var8.bind(var2)();
                var1 = var0.done;
                var6 = var0;
                var0 = undefined;
                if (var1) {
                    _fun44231_ip = 256;
                    continue _fun44231
                }
            case 200:
                var10 = _closure1_slot6;
                var1 = var6.value;
                var11 = var1.message;
                var12 = var5 == var11;
                var1 = undefined;
                if (var12) {
                    _fun44231_ip = 229;
                    continue _fun44231
                }
            case 223:
                var1 = var11.soundboardSounds;
            case 229:
                var0 = var10.bind(var2)(var1, var9);
                if (!(var5 == var0)) {
                    _fun44231_ip = 256;
                    continue _fun44231
                }
            case 239:
                var10 = var8.bind(var2)();
                var1 = var10.done;
                var6 = var10;
                var0 = undefined;
                if (!var1) {
                    _fun44231_ip = 200;
                    continue _fun44231
                }
            case 256:
                var7 = var0;
            case 259:
                if (!(var5 == var7)) {
                    _fun44231_ip = 265;
                    continue _fun44231
                }
            case 263:
                return var2;
            case 265:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var6 = var1.bind(var2)(var0);
                var1 = var6.soundboardSoundFromAPI;
                var0 = var7.guild_id;
                if (!(var5 == var0)) {
                    _fun44231_ip = 304;
                    continue _fun44231
                }
            case 300:
                var0 = _closure1_slot3;
            case 304:
                var0 = var1.bind(var6)(var7, var0);
                return var0;
            case 312:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.soundboardSoundFromAPI;
                var0 = var3.guild_id;
                if (!(var5 == var0)) {
                    _fun44231_ip = 351;
                    continue _fun44231
                }
            case 347:
                var0 = _closure1_slot3;
            case 351:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4249, 3957, 4801, 792, 2]);