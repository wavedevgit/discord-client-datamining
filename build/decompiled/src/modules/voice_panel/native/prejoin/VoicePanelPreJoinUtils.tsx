// modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1() {
        _fun111553: for (var _fun111553_ip = 0;;) switch (_fun111553_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111553_ip = 46;
                    continue _fun111553
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun111553_ip = 55;
                    continue _fun111553
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun111553_ip = 345;
                    continue _fun111553
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111553_ip = 323;
                    continue _fun111553
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111553_ip = 283;
                    continue _fun111553
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111553_ip = 270;
                    continue _fun111553
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
                    _fun111553_ip = 163;
                    continue _fun111553
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun111553_ip = 179;
                    continue _fun111553
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111553_ip = 249;
                    continue _fun111553
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111553_ip = 249;
                    continue _fun111553
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111553_ip = 234;
                    continue _fun111553
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111553_ip = 247;
                    continue _fun111553
                }
            case 234:
                var8 = _closure1_slot3;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun111553_ip = 265;
                continue _fun111553;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun111553_ip = 283;
                continue _fun111553;
            case 270:
                var6 = _closure1_slot3;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun111553_ip = 323;
                    continue _fun111553
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
                    _fun111553_ip = 330;
                    continue _fun111553
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111554: for (var _fun111554_ip = 0;;) switch (_fun111554_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111554_ip = 56;
                                continue _fun111554
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
                            _fun111554_ip = 67;
                            continue _fun111554;
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
    var _closure1_slot2 = var0;
    var0 = function arg0, arg1() {
        _fun111555: for (var _fun111555_ip = 0;;) switch (_fun111555_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111555_ip = 23;
                    continue _fun111555
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111555_ip = 33;
                    continue _fun111555
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
                    _fun111555_ip = 70;
                    continue _fun111555
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111555_ip = 55;
                    continue _fun111555
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/prejoin/VoicePanelPreJoinUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun111556: for (var _fun111556_ip = 0;;) switch (_fun111556_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var9 = null;
                if (!(var9 != var1)) {
                    _fun111556_ip = 180;
                    continue _fun111556
                }
            case 15:
                if (!(var9 != var0)) {
                    _fun111556_ip = 180;
                    continue _fun111556
                }
            case 22:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 0;
                var3 = var3[var8];
                var7 = undefined;
                var4 = var4.bind(var7)(var3);
                var3 = ['streamingMembers'];
                var3 = var4.bind(var7)(var1, var0, var3);
                if (var3) {
                    _fun111556_ip = 70;
                    continue _fun111556
                }
            case 66:
                var3 = false;
                return var3;
            case 70:
                var3 = _closure1_slot2;
                var2 = var1.streamingMembers;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = 1;
                var4 = var3;
                var3 = 0;
                if (var2) {
                    _fun111556_ip = 176;
                    continue _fun111556
                }
            case 105:
                var10 = var4.value;
                var2 = var0.streamingMembers;
                var2 = var2[var3];
                if (!(var9 != var2)) {
                    _fun111556_ip = 172;
                    continue _fun111556
                }
            case 124:
                var12 = var10[var8];
                var11 = var2[var8];
                if (!(var12 === var11)) {
                    _fun111556_ip = 168;
                    continue _fun111556
                }
            case 136:
                var10 = var10[var5];
                var2 = var2[var5];
                if (!(var10 === var2)) {
                    _fun111556_ip = 168;
                    continue _fun111556
                }
            case 148:
                var3 = var3 + 1;
                var10 = var6.bind(var7)();
                var2 = var10.done;
                var4 = var10;
                if (var2) {
                    _fun111556_ip = 176;
                    continue _fun111556
                }
            case 166:
                _fun111556_ip = 105;
                continue _fun111556;
            case 168:
                var2 = false;
                return var2;
            case 172:
                var2 = false;
                return var2;
            case 176:
                var2 = true;
                return var2;
            case 180:
                var0 = var1 === var0;
                return var0;
        }
    };
    var2.areVoicePanelPreJoinContentPropsEqual = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [628, 2]);