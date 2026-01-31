// modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun105668: for (var _fun105668_ip = 0;;) switch (_fun105668_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun105668_ip = 46;
                    continue _fun105668
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun105668_ip = 55;
                    continue _fun105668
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun105668_ip = 345;
                    continue _fun105668
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun105668_ip = 323;
                    continue _fun105668
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun105668_ip = 283;
                    continue _fun105668
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun105668_ip = 270;
                    continue _fun105668
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
                    _fun105668_ip = 163;
                    continue _fun105668
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun105668_ip = 179;
                    continue _fun105668
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun105668_ip = 249;
                    continue _fun105668
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun105668_ip = 249;
                    continue _fun105668
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun105668_ip = 234;
                    continue _fun105668
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun105668_ip = 247;
                    continue _fun105668
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun105668_ip = 265;
                continue _fun105668;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun105668_ip = 283;
                continue _fun105668;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun105668_ip = 323;
                    continue _fun105668
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
                    _fun105668_ip = 330;
                    continue _fun105668
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun105669: for (var _fun105669_ip = 0;;) switch (_fun105669_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun105669_ip = 56;
                                continue _fun105669
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
                            _fun105669_ip = 67;
                            continue _fun105669;
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
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun105670: for (var _fun105670_ip = 0;;) switch (_fun105670_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun105670_ip = 23;
                    continue _fun105670
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun105670_ip = 33;
                    continue _fun105670
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
                    _fun105670_ip = 70;
                    continue _fun105670
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun105670_ip = 55;
                    continue _fun105670
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun105671: for (var _fun105671_ip = 0;;) switch (_fun105671_ip) {
            case 0:
                var12 = arg0;
                var1 = _closure1_slot15;
                var0 = arg1;
                var0 = var0.recipients;
                var10 = undefined;
                var9 = var1.bind(var10)(var0);
                var1 = var9.bind(var10)();
                var0 = var1.done;
                var8 = 10;
                var7 = null;
                var6 = 11;
                var5 = var1;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun105671_ip = 336;
                    continue _fun105671
                }
            case 60:
                var14 = var5.value;
                var13 = _closure1_slot8;
                var0 = var13.getUser;
                var0 = var0.bind(var13)(var14);
                if (!(var7 != var0)) {
                    _fun105671_ip = 301;
                    continue _fun105671
                }
            case 87:
                var14 = var0.username;
                var13 = var14.toLocaleLowerCase;
                var14 = var13.bind(var14)();
                var15 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var8];
                var13 = var15.bind(var10)(var13);
                var13 = var13.bind(var10)(var12, var14);
                if (var13) {
                    _fun105671_ip = 331;
                    continue _fun105671
                }
            case 131:
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var6];
                var14 = var14.bind(var10)(var13);
                var13 = var14.getGlobalName;
                var16 = var13.bind(var14)(var0);
                var13 = var7 == var16;
                var14 = undefined;
                if (var13) {
                    _fun105671_ip = 178;
                    continue _fun105671
                }
            case 168:
                var13 = var16.toLocaleLowerCase;
                var14 = var13.bind(var16)();
            case 178:
                if (!(var7 != var14)) {
                    _fun105671_ip = 208;
                    continue _fun105671
                }
            case 182:
                var15 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var8];
                var13 = var15.bind(var10)(var13);
                var13 = var13.bind(var10)(var12, var14);
                if (var13) {
                    _fun105671_ip = 326;
                    continue _fun105671
                }
            case 208:
                var15 = _closure1_slot7;
                var13 = var15.getNickname;
                var0 = var0.id;
                var15 = var13.bind(var15)(var0);
                var0 = var7 == var15;
                var13 = undefined;
                if (var0) {
                    _fun105671_ip = 247;
                    continue _fun105671
                }
            case 237:
                var0 = var15.toLocaleLowerCase;
                var13 = var0.bind(var15)();
            case 247:
                var4 = var16;
                var3 = var15;
                var2 = var14;
                var1 = var13;
                if (!(var7 != var13)) {
                    _fun105671_ip = 301;
                    continue _fun105671
                }
            case 263:
                var17 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var0 = var17.bind(var10)(var0);
                var0 = var0.bind(var10)(var12, var13);
                var4 = var16;
                var3 = var15;
                var2 = var14;
                var1 = var13;
                if (var0) {
                    _fun105671_ip = 321;
                    continue _fun105671
                }
            case 301:
                var13 = var9.bind(var10)();
                var0 = var13.done;
                var5 = var13;
                if (var0) {
                    _fun105671_ip = 336;
                    continue _fun105671
                }
            case 316:
                _fun105671_ip = 60;
                continue _fun105671;
            case 321:
                var0 = 1;
                return var0;
            case 326:
                var0 = 1;
                return var0;
            case 331:
                var0 = 1;
                return var0;
            case 336:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var4 = function arg0, arg1() {
        _fun105672: for (var _fun105672_ip = 0;;) switch (_fun105672_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = '';
                if (!(var0 !== var4)) {
                    _fun105672_ip = 134;
                    continue _fun105672
                }
            case 14:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 12;
                var0 = var3[var0];
                var3 = undefined;
                var7 = var1.bind(var3)(var0);
                var6 = var7.computeChannelName;
                var1 = _closure1_slot8;
                var0 = _closure1_slot7;
                var1 = var6.bind(var7)(var5, var1, var0);
                var0 = var1.toLocaleLowerCase;
                var6 = var0.bind(var1)();
                var0 = var6.startsWith;
                var1 = var0.bind(var6)(var4);
                var0 = 3;
                if (var1) {
                    _fun105672_ip = 132;
                    continue _fun105672
                }
            case 87:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var6 = var1.bind(var3)(var4, var6);
                var1 = 2;
                if (var6) {
                    _fun105672_ip = 129;
                    continue _fun105672
                }
            case 119:
                var2 = _closure1_slot17;
                var1 = var2.bind(var3)(var4, var5);
            case 129:
                var0 = var1;
            case 132:
                return var0;
            case 134:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot18 = var4;
    var0 = function arg0, arg1, arg2() {
        _fun105673: for (var _fun105673_ip = 0;;) switch (_fun105673_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var2 = arg2;
                var0 = '';
                if (!(var0 !== var2)) {
                    _fun105673_ip = 124;
                    continue _fun105673
                }
            case 17:
                var0 = var5.length;
                var7 = 0;
                if (!(var7 !== var0)) {
                    _fun105673_ip = 107;
                    continue _fun105673
                }
            case 28:
                var4 = _closure1_slot15;
                var1 = undefined;
                var6 = var4.bind(var1)(var5);
                var5 = var6.bind(var1)();
                var4 = var5.done;
                if (var4) {
                    _fun105673_ip = 95;
                    continue _fun105673
                }
            case 54:
                var9 = var5.value;
                var8 = var3.recipients;
                var4 = var8.includes;
                var4 = var4.bind(var8)(var9);
                if (var4) {
                    _fun105673_ip = 80;
                    continue _fun105673
                }
            case 78:
                return var7;
            case 80:
                var8 = var6.bind(var1)();
                var4 = var8.done;
                var5 = var8;
                if (!var4) {
                    _fun105673_ip = 54;
                    continue _fun105673
                }
            case 95:
                var0 = _closure1_slot17;
                var0 = var0.bind(var1)(var2, var3);
                return var0;
            case 107:
                var1 = _closure1_slot18;
                var0 = undefined;
                var0 = var1.bind(var0)(var3, var2);
                return var0;
            case 124:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var3 = function arg0() {
        var1 = arg0;
        var0 = var1.isGroupDM;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot20 = var3;
    var1 = function arg0, arg1, arg2() {
        var7 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useState;
        var0 = new Array(0);
        var8 = var3.bind(var4)(var0);
        var4 = _closure1_slot3;
        var3 = undefined;
        var0 = 2;
        var4 = var4.bind(var3)(var8, var0);
        var0 = 0;
        var0 = var4[var0];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot3 = var3;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun105676: for (var _fun105676_ip = 0;;) switch (_fun105676_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    if (var2) {
                        _fun105676_ip = 35;
                        continue _fun105676
                    }
                case 12:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun105676_ip = 238;
                    continue _fun105676;
                case 35:
                    var3 = _closure2_slot2;
                    var2 = '';
                    if (!(var2 === var3)) {
                        _fun105676_ip = 70;
                        continue _fun105676
                    }
                case 47:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun105676_ip = 238;
                    continue _fun105676;
                case 70:
                    var3 = _closure2_slot2;
                    var2 = var3.toLocaleLowerCase;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.values;
                    var6 = _closure1_slot6;
                    var3 = var6.getMutablePrivateChannels;
                    var3 = var3.bind(var6)();
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = _closure1_slot20;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var1
                        var5 = arg0;
                        var0 = new Array(2);
                        var0[0] = var5;
                        var4 = _closure1_slot19;
                        var3 = _closure2_slot1;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var5, var3, var2);
                        var0[1] = var1;
                        return var0;
                    };
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var1
                        _fun105678: for (var _fun105678_ip = 0;;) switch (_fun105678_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3[Symbol.iterator];
                                var3 = var0().next;
                                var1 = var3().value;
                                var1 = var0;
                                var5 = undefined;
                                var2 = var1 === var5;
                                var1 = undefined;
                                if (var2) {
                                    _fun105678_ip = 49;
                                    continue _fun105678
                                }
                            case 24:
                                var4 = var3().value;
                                var3 = var0;
                                var3 = var3 === var5;
                                var1 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun105678_ip = 49;
                                    continue _fun105678
                                }
                            case 43:
                                var1 = var4;
                                var2 = var3;
                            case 49:
                                if (var2) {
                                    _fun105678_ip = 55;
                                    continue _fun105678
                                }
                            case 52:
                                var0.return();
                            case 55:
                                var0 = 0;
                                var0 = var1 > var0;
                                return var0;
                        }
                    };
                    var6 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.sortBy;
                    var3 = function(arg0) { // Environment: var1
                        _fun105679: for (var _fun105679_ip = 0;;) switch (_fun105679_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var0 = var3().value;
                                var0 = var1;
                                var5 = undefined;
                                var2 = var0 === var5;
                                var0 = undefined;
                                if (var2) {
                                    _fun105679_ip = 49;
                                    continue _fun105679
                                }
                            case 24:
                                var4 = var3().value;
                                var3 = var1;
                                var3 = var3 === var5;
                                var0 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun105679_ip = 49;
                                    continue _fun105679
                                }
                            case 43:
                                var0 = var4;
                                var2 = var3;
                            case 49:
                                if (var2) {
                                    _fun105679_ip = 55;
                                    continue _fun105679
                                }
                            case 52:
                                var1.return();
                            case 55:
                                var0 = -var0;
                                return var0;
                        }
                    };
                    var4 = var4.bind(var5)(var6, var3);
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun105680: for (var _fun105680_ip = 0;;) switch (_fun105680_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0[Symbol.iterator];
                                var0 = var1().next;
                                var3 = var0().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                if (var2) {
                                    _fun105680_ip = 25;
                                    continue _fun105680
                                }
                            case 22:
                                var0 = var3;
                            case 25:
                                if (var2) {
                                    _fun105680_ip = 31;
                                    continue _fun105680
                                }
                            case 28:
                                var1.return();
                            case 31:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var0 = _closure2_slot3;
                    var0 = var0.bind(var2)(var1);
                case 238:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot21 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var13.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var14 = 1;
    var9 = var8[var14];
    var6 = arg3;
    var6 = var6.bind(var0)(var9);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.UserRowModes;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.jsx;
    var _closure1_slot10 = var9;
    var9 = var6.Fragment;
    var _closure1_slot11 = var9;
    var6 = var6.jsxs;
    var _closure1_slot12 = var6;
    var6 = new Array(0);
    var _closure1_slot13 = var6;
    var6 = 8;
    var6 = var8[var6];
    var10 = var7.bind(var0)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var12 = 9;
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11.paddingTop = var15;
    var6.searchBarRowContainer = var11;
    var11 = {};
    var11.flex = var14;
    var12 = var8[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var12;
    var6.noResults = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/main_tabs_v2/native/shared_components/user_list/NewMessageUserList.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function arg0() {
        _fun105681: for (var _fun105681_ip = 0;;) switch (_fun105681_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.selectedUserIds;
                var _closure2_slot0 = var10;
                var21 = var0.disabledUserIds;
                var _closure2_slot1 = var21;
                var11 = var0.onSelectUser;
                var _closure2_slot2 = var11;
                var2 = var0.onQueryChanged;
                var _closure2_slot3 = var2;
                var32 = var0.actions;
                var3 = undefined;
                if (!(var32 === var3)) {
                    _fun105681_ip = 61;
                    continue _fun105681
                }
            case 57:
                var32 = new Array(0);
            case 61:
                var33 = var0.noResultActions;
                var6 = var0.rowMode;
                if (!(var6 === var3)) {
                    _fun105681_ip = 90;
                    continue _fun105681
                }
            case 77:
                var4 = _closure1_slot9;
                var6 = var4.ACTIONS;
            case 90:
                var _closure2_slot4 = var6;
                var8 = var0.tagListInputRef;
                var16 = var0.autoFocusSearch;
                if (!(var16 === var3)) {
                    _fun105681_ip = 112;
                    continue _fun105681
                }
            case 110:
                var16 = false;
            case 112:
                var31 = var0.withGuildMembers;
                if (!(var31 === var3)) {
                    _fun105681_ip = 124;
                    continue _fun105681
                }
            case 122:
                var31 = false;
            case 124:
                var30 = var0.withAffinitySuggestions;
                if (!(var30 === var3)) {
                    _fun105681_ip = 136;
                    continue _fun105681
                }
            case 134:
                var30 = true;
            case 136:
                var28 = var0.withFriends;
                if (!(var28 === var3)) {
                    _fun105681_ip = 148;
                    continue _fun105681
                }
            case 146:
                var28 = true;
            case 148:
                var29 = var0.withGameFriends;
                if (!(var29 === var3)) {
                    _fun105681_ip = 160;
                    continue _fun105681
                }
            case 158:
                var29 = true;
            case 160:
                var25 = var0.withFriendRequests;
                if (!(var25 === var3)) {
                    _fun105681_ip = 172;
                    continue _fun105681
                }
            case 170:
                var25 = false;
            case 172:
                var23 = var0.withFriendRequestsIncoming;
                if (!(var23 === var3)) {
                    _fun105681_ip = 184;
                    continue _fun105681
                }
            case 182:
                var23 = false;
            case 184:
                var22 = var0.withFriendRequestsOutgoing;
                if (!(var22 === var3)) {
                    _fun105681_ip = 196;
                    continue _fun105681
                }
            case 194:
                var22 = false;
            case 196:
                var26 = var0.withFriendSuggestions;
                if (!(var26 === var3)) {
                    _fun105681_ip = 208;
                    continue _fun105681
                }
            case 206:
                var26 = false;
            case 208:
                var20 = var0.withGDMNames;
                if (!(var20 === var3)) {
                    _fun105681_ip = 220;
                    continue _fun105681
                }
            case 218:
                var20 = false;
            case 220:
                var24 = var0.defaultNoResultsFound;
                var5 = var0.overrideResults;
                var9 = var0.forceSearchResults;
                var12 = var0.onForceSearchResults;
                var13 = var0.onSearchFocus;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var0 = _closure1_slot14;
                var27 = var0.bind(var3)();
                var14 = _closure1_slot4;
                var7 = var14.useState;
                var0 = '';
                var14 = var7.bind(var14)(var0);
                var7 = _closure1_slot3;
                var0 = 2;
                var15 = var7.bind(var3)(var14, var0);
                var7 = 0;
                var0 = var15[var7];
                var14 = 1;
                var14 = var15[var14];
                _closure2_slot5 = var14;
                var17 = _closure1_slot4;
                var15 = var17.useCallback;
                var14 = new Array(1);
                var14[0] = var2;
                var2 = function(arg0) { // Environment: var1
                    _fun105682: for (var _fun105682_ip = 0;;) switch (_fun105682_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot5;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun105682_ip = 36;
                                continue _fun105682
                            }
                        case 27:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)(var2);
                        case 36:
                            return var0;
                    }
                };
                var14 = var15.bind(var17)(var2, var14);
                var2 = var0.trim;
                var19 = var2.bind(var0)();
                var2 = var19.length;
                var15 = var2 > var7;
                var18 = _closure1_slot1;
                var2 = _closure1_slot2;
                var17 = 14;
                var17 = var2[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var17.query = var19;
                var17.withGuildMembers = var31;
                var17.withAffinitySuggestions = var30;
                var17.withFriends = var28;
                var17.withGameFriends = var29;
                var17.withFriendSuggestions = var26;
                var17.withFriendRequests = var25;
                var17.withFriendRequestsIncoming = var23;
                var17.withFriendRequestsOutgoing = var22;
                var22 = true;
                var17.excludeCurrentUser = var22;
                var17 = var18.bind(var3)(var17);
                _closure2_slot6 = var17;
                var18 = _closure1_slot21;
                var22 = var18.bind(var3)(var20, var10, var19);
                _closure2_slot7 = var22;
                var20 = _closure1_slot4;
                var19 = var20.useMemo;
                var18 = new Array(2);
                var18[0] = var22;
                var18[1] = var17;
                var17 = function() { // Environment: var1
                    _fun105683: for (var _fun105683_ip = 0;;) switch (_fun105683_ip) {
                        case 0:
                            var4 = _closure2_slot6;
                            var3 = var4.map;
                            var0 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.title;
                                var0.title = var2;
                                var3 = var1.items;
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = {};
                                    var1 = 'UserSearchItem';
                                    var0.type = var1;
                                    var1 = arg0;
                                    var0.data = var1;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var0.items = var1;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0);
                            var3 = _closure2_slot7;
                            var3 = var3.length;
                            var4 = 0;
                            if (!(var4 !== var3)) {
                                _fun105683_ip = 255;
                                continue _fun105683
                            }
                        case 44:
                            var3 = {};
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 15;
                            var6 = var10[var5];
                            var8 = undefined;
                            var6 = var9.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.qGlQrW;
                            var5 = var6.bind(var7)(var5);
                            var3.title = var5;
                            var7 = _closure2_slot7;
                            var6 = var7.map;
                            var5 = function(arg0) { // Environment: var1
                                var0 = {};
                                var1 = 'GroupDMChannelRecord';
                                var0.type = var1;
                                var1 = arg0;
                                var0.data = var1;
                                return var0;
                            };
                            var5 = var6.bind(var7)(var5);
                            var3.items = var5;
                            var5 = _closure2_slot6;
                            var2 = var5.findIndex;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.title;
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var0 = 15;
                                var2 = var6[var0];
                                var4 = undefined;
                                var2 = var5.bind(var4)(var2);
                                var3 = var2.intl;
                                var2 = var3.string;
                                var0 = var6[var0];
                                var0 = var5.bind(var4)(var0);
                                var0 = var0.t;
                                var0 = var0.y29JXs;
                                var0 = var2.bind(var3)(var0);
                                var0 = var1 === var0;
                                return var0;
                            };
                            var6 = var2.bind(var5)(var1);
                            var1 = -1;
                            if (!(var1 !== var6)) {
                                _fun105683_ip = 222;
                                continue _fun105683
                            }
                        case 167:
                            var1 = var0.slice;
                            var12 = var1.bind(var0)(var4, var6);
                            var1 = new Array(1);
                            var13 = var1;
                            var11 = 0;
                            var5 = arraySpread(var13, var12, var11);
                            var1[var5] = var3;
                            var2 = 1;
                            var11 = var5 + var2;
                            var2 = var0.slice;
                            var12 = var2.bind(var0)(var6);
                            var13 = var1;
                            var2 = arraySpread(var13, var12, var11);
                            _fun105683_ip = 253;
                            continue _fun105683;
                        case 222:
                            var2 = new Array(1);
                            var13 = var2;
                            var12 = var0;
                            var11 = 0;
                            var4 = arraySpread(var13, var12, var11);
                            var2[var4] = var3;
                            var3 = 1;
                            var3 = var4 + var3;
                            var1 = var2;
                        case 253:
                            return var1;
                        case 255:
                            return var0;
                    }
                };
                var23 = var19.bind(var20)(var17, var18);
                _closure2_slot8 = var23;
                var20 = _closure1_slot4;
                var19 = var20.useMemo;
                var18 = new Array(1);
                var18[0] = var23;
                var17 = function() { // Environment: var1
                    var2 = _closure2_slot8;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.items;
                        var0 = var0.length;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var19.bind(var20)(var17, var18);
                var20 = _closure1_slot4;
                var19 = var20.useCallback;
                var18 = new Array(1);
                var18[0] = var23;
                var17 = function(arg0) { // Environment: var1
                    var0 = {};
                    var1 = 'section';
                    var0.type = var1;
                    var1 = {};
                    var3 = _closure2_slot8;
                    var2 = arg0;
                    var2 = var3[var2];
                    var2 = var2.title;
                    var1.title = var2;
                    var0.props = var1;
                    return var0;
                };
                var20 = var19.bind(var20)(var17, var18);
                var19 = _closure1_slot4;
                var18 = var19.useCallback;
                var17 = new Array(5);
                var17[0] = var23;
                var17[1] = var10;
                var17[2] = var11;
                var17[3] = var21;
                var17[4] = var6;
                var6 = function(arg0, arg1) { // Environment: var1
                    _fun105691: for (var _fun105691_ip = 0;;) switch (_fun105691_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = arg1;
                            var0 = _closure2_slot8;
                            var0 = var0[var4];
                            var0 = var0.items;
                            var0 = var0[var2];
                            var1 = 0;
                            var3 = var1 === var2;
                            var1 = _closure2_slot8;
                            var1 = var1[var4];
                            var1 = var1.items;
                            var4 = var1.length;
                            var1 = 1;
                            var1 = var4 - var1;
                            var2 = var2 === var1;
                            var4 = var0.type;
                            var1 = 'UserSearchItem';
                            if (!(var1 !== var4)) {
                                _fun105691_ip = 145;
                                continue _fun105691
                            }
                        case 76:
                            var4 = var0.type;
                            var1 = 'GroupDMChannelRecord';
                            if (!(var1 !== var4)) {
                                _fun105691_ip = 93;
                                continue _fun105691
                            }
                        case 89:
                            var1 = undefined;
                            return var1;
                        case 93:
                            var1 = {};
                            var4 = 'gdm';
                            var1.type = var4;
                            var4 = {};
                            var5 = var0.data;
                            var4.channel = var5;
                            var5 = _closure2_slot2;
                            var4.onPress = var5;
                            var5 = true;
                            var4.arrow = var5;
                            var4.start = var3;
                            var4.end = var2;
                            var1.props = var4;
                            return var1;
                        case 145:
                            var0 = var0.data;
                            var5 = var0.type;
                            var4 = var0.user;
                            var10 = var0.firstMatch;
                            var7 = _closure2_slot0;
                            var1 = var7.includes;
                            var0 = var4.id;
                            var7 = var1.bind(var7)(var0);
                            var0 = {};
                            var1 = 'user';
                            var0.type = var1;
                            var1 = {};
                            var1.type = var5;
                            var1.user = var4;
                            var5 = null;
                            var11 = var5 == var10;
                            var9 = undefined;
                            var8 = undefined;
                            if (var11) {
                                _fun105691_ip = 232;
                                continue _fun105691
                            }
                        case 218:
                            var11 = var4.username;
                            var8 = undefined;
                            if (!(var11 !== var10)) {
                                _fun105691_ip = 232;
                                continue _fun105691
                            }
                        case 229:
                            var8 = var10;
                        case 232:
                            var1.nickname = var8;
                            var8 = _closure2_slot2;
                            var1.onPress = var8;
                            var8 = _closure2_slot1;
                            var10 = var5 == var8;
                            var8 = undefined;
                            if (var10) {
                                _fun105691_ip = 277;
                                continue _fun105691
                            }
                        case 258:
                            var12 = _closure2_slot1;
                            var11 = var12.includes;
                            var10 = var4.id;
                            var8 = var11.bind(var12)(var10);
                        case 277:
                            var5 = var5 != var8;
                            if (!var5) {
                                _fun105691_ip = 287;
                                continue _fun105691
                            }
                        case 284:
                            var5 = var8;
                        case 287:
                            var1.disabled = var5;
                            var1.selected = var7;
                            var11 = _closure1_slot7;
                            var10 = var11.isFriend;
                            var8 = var4.id;
                            var8 = var10.bind(var11)(var8);
                            if (!var8) {
                                _fun105691_ip = 325;
                                continue _fun105691
                            }
                        case 322:
                            if (var7) {
                                _fun105691_ip = 331;
                                continue _fun105691
                            }
                        case 325:
                            var6 = _closure2_slot4;
                            _fun105691_ip = 341;
                            continue _fun105691;
                        case 331:
                            var7 = _closure1_slot9;
                            var6 = var7.TOGGLE;
                        case 341:
                            var1.mode = var6;
                            var8 = _closure1_slot10;
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 16;
                            var6 = var12[var6];
                            var6 = var7.bind(var9)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'variant': 'text-xs/medium',
                                'color': 'text-muted'
                            };
                            var11 = _closure1_slot1;
                            var10 = 11;
                            var10 = var12[var10];
                            var11 = var11.bind(var9)(var10);
                            var10 = var11.getUserTag;
                            var10 = var10.bind(var11)(var4);
                            var6.children = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var1.subLabel = var6;
                            var6 = _closure1_slot7;
                            var5 = var6.isFriend;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
                            var4 = !var4;
                            var1.arrow = var4;
                            var1.start = var3;
                            var1.end = var2;
                            var0.props = var1;
                            return var0;
                    }
                };
                var21 = var18.bind(var19)(var6, var17);
                var17 = _closure1_slot4;
                var6 = var17.useRef;
                var34 = null;
                var23 = var6.bind(var17)(var34);
                _closure2_slot9 = var23;
                var6 = _closure1_slot0;
                var35 = 17;
                var2 = var2[var35];
                var17 = var6.bind(var3)(var2);
                var6 = var17.useUserListActionsProps;
                var2 = {};
                var18 = undefined;
                if (var15) {
                    _fun105681_ip = 672;
                    continue _fun105681
                }
            case 669:
                var18 = var32;
            case 672:
                var2.actions = var18;
                var18 = undefined;
                if (var15) {
                    _fun105681_ip = 693;
                    continue _fun105681
                }
            case 682:
                var18 = undefined;
                if (!var28) {
                    _fun105681_ip = 693;
                    continue _fun105681
                }
            case 687:
                var18 = var27.searchBarRowContainer;
            case 693:
                var2.style = var18;
                var2 = var6.bind(var17)(var2);
                var19 = var2.headerSize;
                var18 = var2.renderHeader;
                var25 = _closure1_slot4;
                var17 = var25.useLayoutEffect;
                var6 = new Array(1);
                var6[0] = var0;
                var2 = function() { // Environment: var1
                    _fun105692: for (var _fun105692_ip = 0;;) switch (_fun105692_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun105692_ip = 31;
                                continue _fun105692
                            }
                        case 18:
                            var1 = var2.scrollToTop;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var17.bind(var25)(var2, var6);
                var2 = var22.some;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var17 = var2.bind(var22)(var1);
                var0 = var0.length;
                var0 = var7 === var0;
                if (!var0) {
                    _fun105681_ip = 779;
                    continue _fun105681
                }
            case 775:
                var0 = var34 != var24;
            case 779:
                if (!(var34 == var5)) {
                    _fun105681_ip = 1127;
                    continue _fun105681
                }
            case 786:
                var6 = _closure1_slot10;
                if (var17) {
                    _fun105681_ip = 1048;
                    continue _fun105681
                }
            case 796:
                var1 = _closure1_slot5;
                var2 = {};
                var26 = var27.noResults;
                if (var0) {
                    _fun105681_ip = 1006;
                    continue _fun105681
                }
            case 814:
                var2.style = var26;
                var29 = _closure1_slot10;
                var25 = _closure1_slot1;
                var30 = _closure1_slot2;
                var0 = 19;
                var0 = var30[var0];
                var25 = var25.bind(var3)(var0);
                var0 = {};
                var31 = _closure1_slot0;
                var36 = 15;
                var37 = var30[var36];
                var37 = var31.bind(var3)(var37);
                var39 = var37.intl;
                var38 = var39.string;
                var37 = var30[var36];
                var37 = var31.bind(var3)(var37);
                var37 = var37.t;
                var37 = var37.sPAvXU;
                var37 = var38.bind(var39)(var37);
                var0.title = var37;
                var37 = var30[var36];
                var37 = var31.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var36 = var30[var36];
                var36 = var31.bind(var3)(var36);
                var36 = var36.t;
                var36 = var36.nQ05z2;
                var36 = var37.bind(var38)(var36);
                var0.subtitle = var36;
                var30 = var30[var35];
                var30 = var31.bind(var3)(var30);
                var31 = var30.UserFlashListActions;
                var30 = {};
                if (!(var34 != var33)) {
                    _fun105681_ip = 976;
                    continue _fun105681
                }
            case 973:
                var32 = var33;
            case 976:
                var30.actions = var32;
                var30 = var29.bind(var3)(var31, var30);
                var0.children = var30;
                var0 = var29.bind(var3)(var25, var0);
                var2.children = var0;
                var0 = var2;
                _fun105681_ip = 1040;
                continue _fun105681;
            case 1006:
                var25 = new Array(2);
                var25[0] = var26;
                var26 = undefined;
                if (!var28) {
                    _fun105681_ip = 1025;
                    continue _fun105681
                }
            case 1019:
                var26 = var27.searchBarRowContainer;
            case 1025:
                var25[1] = var26;
                var2.style = var25;
                var2.children = var24;
                var0 = var2;
            case 1040:
                var0 = var6.bind(var3)(var1, var0);
                _fun105681_ip = 1124;
                continue _fun105681;
            case 1048:
                var2 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 18;
                var1 = var24[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.UsersFastList;
                var1 = {};
                var1.ref = var23;
                var1.sections = var22;
                var1.getItemProps = var21;
                var1.getSectionProps = var20;
                var1.listHeaderSize = var19;
                var1.renderListHeader = var18;
                var1.insetStart = var7;
                var7 = 12;
                var1.insetEnd = var7;
                var0 = var6.bind(var3)(var2, var1);
            case 1124:
                var5 = var0;
            case 1127:
                var2 = _closure1_slot12;
                var1 = _closure1_slot11;
                var0 = {};
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var18 = _closure1_slot2;
                var4 = 20;
                var4 = var18[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                if (!var16) {
                    _fun105681_ip = 1169;
                    continue _fun105681
                }
            case 1166:
                var16 = var17;
            case 1169:
                var4.autoFocus = var16;
                var4.hasQuery = var15;
                var4.onChangeText = var14;
                var4.onFocus = var13;
                var4.onForceSearchResults = var12;
                var4.onSelectUser = var11;
                var4.selectedUserIds = var10;
                var4.forceSearchResults = var9;
                var4.tagListInputRef = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var5;
    var2.matchGroupDM = var4;
    var2.filterGroupDMs = var3;
    var2.useSearchGDMNames = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 3059, 1613, 8842, 33, 1297, 671, 5564, 3195, 4755, 22, 11251, 1234, 3900, 11255, 9043, 9118, 13735, 2]);