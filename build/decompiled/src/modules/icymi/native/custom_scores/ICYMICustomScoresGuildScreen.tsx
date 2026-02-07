// modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun104141: for (var _fun104141_ip = 0;;) switch (_fun104141_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun104141_ip = 46;
                    continue _fun104141
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun104141_ip = 55;
                    continue _fun104141
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun104141_ip = 345;
                    continue _fun104141
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun104141_ip = 323;
                    continue _fun104141
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun104141_ip = 283;
                    continue _fun104141
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun104141_ip = 270;
                    continue _fun104141
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
                    _fun104141_ip = 163;
                    continue _fun104141
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun104141_ip = 179;
                    continue _fun104141
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun104141_ip = 249;
                    continue _fun104141
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun104141_ip = 249;
                    continue _fun104141
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun104141_ip = 234;
                    continue _fun104141
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun104141_ip = 247;
                    continue _fun104141
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun104141_ip = 265;
                continue _fun104141;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun104141_ip = 283;
                continue _fun104141;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun104141_ip = 323;
                    continue _fun104141
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
                    _fun104141_ip = 330;
                    continue _fun104141
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun104142: for (var _fun104142_ip = 0;;) switch (_fun104142_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun104142_ip = 56;
                                continue _fun104142
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
                            _fun104142_ip = 67;
                            continue _fun104142;
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
        _fun104143: for (var _fun104143_ip = 0;;) switch (_fun104143_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun104143_ip = 23;
                    continue _fun104143
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun104143_ip = 33;
                    continue _fun104143
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
                    _fun104143_ip = 70;
                    continue _fun104143
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun104143_ip = 55;
                    continue _fun104143
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun104144: for (var _fun104144_ip = 0;;) switch (_fun104144_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var11 = var1.start;
                var8 = var1.end;
                var12 = var1.disabled;
                var1 = _closure1_slot14;
                var4 = undefined;
                var16 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var2 = var5[var1];
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var9.bind(var10)(var7, var2);
                var _closure2_slot1 = var17;
                var1 = var5[var1];
                var9 = var3.bind(var4)(var1);
                var7 = var9.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot9;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun104146: for (var _fun104146_ip = 0;;) switch (_fun104146_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun104146_ip = 162;
                                continue _fun104146
                            }
                        case 16:
                            var5 = _closure1_slot10;
                            var4 = var5.getCustomChannelScore;
                            var0 = _closure2_slot1;
                            var3 = var0.guild_id;
                            var0 = var0.id;
                            var0 = var4.bind(var5)(var3, var0);
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 12;
                            var3 = var3[var5];
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.ICYMICustomScore;
                            var3 = var3.UNKNOWN;
                            if (!(var0 === var3)) {
                                _fun104146_ip = 160;
                                continue _fun104146
                            }
                        case 87:
                            var7 = _closure1_slot9;
                            var6 = var7.isChannelMuted;
                            var1 = _closure2_slot1;
                            var3 = var1.guild_id;
                            var1 = var1.id;
                            var1 = var6.bind(var7)(var3, var1);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.ICYMICustomScore;
                            if (var1) {
                                _fun104146_ip = 151;
                                continue _fun104146
                            }
                        case 143:
                            var1 = var2.DEFAULT;
                            _fun104146_ip = 157;
                            continue _fun104146;
                        case 151:
                            var1 = var2.MUTED;
                        case 157:
                            var0 = var1;
                        case 160:
                            return var0;
                        case 162:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var0 = var0.ICYMICustomScore;
                            var0 = var0.DEFAULT;
                            return var0;
                    }
                };
                var1 = var7.bind(var9)(var2, var1);
                var _closure2_slot2 = var1;
                var2 = 12;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ICYMICustomScore;
                var2 = var2.MUTED;
                var7 = var1 === var2;
                var _closure2_slot3 = var7;
                var5 = _closure1_slot4;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun104147: for (var _fun104147_ip = 0;;) switch (_fun104147_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun104147_ip = 269;
                                continue _fun104147
                            }
                        case 16:
                            var3 = _closure2_slot2;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var4 = 12;
                            var2 = var2[var4];
                            var6 = undefined;
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.ICYMICustomScore;
                            var2 = var2.MORE;
                            if (!(var3 !== var2)) {
                                _fun104147_ip = 212;
                                continue _fun104147
                            }
                        case 61:
                            var2 = _closure2_slot2;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var3.bind(var6)(var0);
                            var0 = var0.ICYMICustomScore;
                            var0 = var0.LESS;
                            if (!(var2 !== var0)) {
                                _fun104147_ip = 155;
                                continue _fun104147
                            }
                        case 98:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 13;
                            var2 = var5[var0];
                            var2 = var4.bind(var6)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var0 = var5[var0];
                            var0 = var4.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0.SnrG00;
                            var0 = var2.bind(var3)(var0);
                            _fun104147_ip = 210;
                            continue _fun104147;
                        case 155:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 13;
                            var3 = var7[var2];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.t;
                            var2 = var2.rdt65I;
                            var0 = var3.bind(var4)(var2);
                        case 210:
                            _fun104147_ip = 267;
                            continue _fun104147;
                        case 212:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 13;
                            var3 = var7[var2];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.t;
                            var2 = var2.Rxe3jF;
                            var0 = var3.bind(var4)(var2);
                        case 267:
                            _fun104147_ip = 326;
                            continue _fun104147;
                        case 269:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.lhPHmz;
                            var0 = var2.bind(var3)(var1);
                        case 326:
                            return var0;
                    }
                };
                var9 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var17;
                var0 = function() { // Environment: var0
                    _fun104148: for (var _fun104148_ip = 0;;) switch (_fun104148_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun104148_ip = 115;
                                continue _fun104148
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 14;
                            var3 = var1[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.openLazy;
                            var5 = _closure1_slot0;
                            var2 = 16;
                            var2 = var1[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = 15;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = {};
                            var0 = _closure2_slot1;
                            var5 = var0.guild_id;
                            var1.guildId = var5;
                            var0 = var0.id;
                            var1.channelId = var0;
                            var0 = 'ItemDetailsActionSheet';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var17)) {
                    _fun104144_ip = 650;
                    continue _fun104144
                }
            case 252:
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 17;
                var1 = var18[var1];
                var2 = var20.bind(var4)(var1);
                var1 = var2.getChannelIcon;
                var15 = var1.bind(var2)(var17);
                var3 = _closure1_slot11;
                var10 = 18;
                var1 = var18[var10];
                var1 = var20.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var13 = true;
                var1.arrow = var13;
                var1.disabled = var12;
                var14 = _closure1_slot11;
                var13 = _closure1_slot1;
                var19 = 19;
                var12 = var18[var19];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var18 = var18[var19];
                var18 = var20.bind(var4)(var18);
                var18 = var18.IconSizes;
                var18 = var18.SMALL;
                var12.size = var18;
                var12.source = var15;
                var12 = var14.bind(var4)(var13, var12);
                var1.icon = var12;
                var1.start = var11;
                var1.end = var8;
                var8 = 1;
                var1.labelLineClamp = var8;
                if (var7) {
                    _fun104144_ip = 408;
                    continue _fun104144
                }
            case 398:
                var7 = var17.name;
                _fun104144_ip = 584;
                continue _fun104144;
            case 408:
                var12 = _closure1_slot12;
                var11 = _closure1_slot5;
                var8 = {};
                var13 = var16.channelNameContainer;
                var8.style = var13;
                var15 = _closure1_slot11;
                var20 = _closure1_slot1;
                var18 = _closure1_slot2;
                var13 = var18[var19];
                var14 = var20.bind(var4)(var13);
                var13 = {};
                var21 = 20;
                var21 = var18[var21];
                var21 = var20.bind(var4)(var21);
                var13.source = var21;
                var19 = var18[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.Sizes;
                var19 = var19.SMALL;
                var13.size = var19;
                var16 = var16.channelMutedIcon;
                var13.style = var16;
                var14 = var15.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot11;
                var15 = _closure1_slot0;
                var14 = 21;
                var14 = var18[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var17 = var17.name;
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var8.children = var13;
                var7 = var12.bind(var4)(var11, var8);
            case 584:
                var1.label = var7;
                var8 = _closure1_slot11;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var7.bind(var4)(var6);
                var6 = var6.TableRow;
                var7 = var6.TrailingText;
                var6 = {};
                var6.text = var9;
                var6 = var8.bind(var4)(var7, var6);
                var1.trailing = var6;
                var1.onPress = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 650:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        _fun104149: for (var _fun104149_ip = 0;;) switch (_fun104149_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.kind;
                var0 = 'header';
                if (!(var0 !== var1)) {
                    _fun104149_ip = 132;
                    continue _fun104149
                }
            case 16:
                var3 = var2.kind;
                var1 = 'categoryHeader';
                if (!(var1 !== var3)) {
                    _fun104149_ip = 100;
                    continue _fun104149
                }
            case 29:
                var3 = var2.kind;
                var1 = 'channel';
                if (!(var1 !== var3)) {
                    _fun104149_ip = 69;
                    continue _fun104149
                }
            case 42:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = '';
                var1 = arg1;
                var1 = var4.bind(var3)(var1);
                _fun104149_ip = 98;
                continue _fun104149;
            case 69:
                var5 = var2.channelId;
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = 'channel-';
                var1 = var4.bind(var3)(var5);
            case 98:
                _fun104149_ip = 129;
                continue _fun104149;
            case 100:
                var4 = var2.index;
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'categoryHeader-';
                var1 = var3.bind(var2)(var4);
            case 129:
                var0 = var1;
            case 132:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var6 = var3.jsxs;
    var _closure1_slot12 = var6;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 10;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.marginBottom = var11;
    var3.guildHeader = var8;
    var8 = {
        'paddingTop': null,
        'paddingBottom': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingBottom = var11;
    var12 = 'row';
    var11 = 'center';
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var8.gap = var13;
    var3.categoryHeader = var8;
    var8 = {};
    var8.flexDirection = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.gap = var12;
    var3.channelNameContainer = var8;
    var8 = {};
    var8.alignSelf = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.ICON_MUTED;
    var8.tintColor = var9;
    var3.channelMutedIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/custom_scores/ICYMICustomScoresGuildScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104150: for (var _fun104150_ip = 0;;) switch (_fun104150_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.navigation;
                var _closure2_slot0 = var2;
                var1 = var1.route;
                var1 = var1.params;
                var1 = var1.guildId;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot14;
                var4 = var1.bind(var3)();
                var _closure2_slot2 = var4;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var5 = var5[var1];
                var9 = var6.bind(var3)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var8.bind(var9)(var6, var5);
                var _closure2_slot3 = var9;
                var8 = _closure1_slot4;
                var6 = var8.useEffect;
                var5 = new Array(2);
                var5[0] = var2;
                var2 = null;
                var10 = var2 == var9;
                var2 = undefined;
                if (var10) {
                    _fun104150_ip = 148;
                    continue _fun104150
                }
            case 143:
                var2 = var9.name;
            case 148:
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    _fun104152: for (var _fun104152_ip = 0;;) switch (_fun104152_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = var3.setOptions;
                            var1 = {};
                            var0 = _closure2_slot3;
                            var4 = null;
                            var7 = var4 == var0;
                            var0 = undefined;
                            var5 = undefined;
                            if (var7) {
                                _fun104152_ip = 41;
                                continue _fun104152
                            }
                        case 32:
                            var6 = _closure2_slot3;
                            var5 = var6.name;
                        case 41:
                            var6 = var4 != var5;
                            var4 = '';
                            if (!var6) {
                                _fun104152_ip = 55;
                                continue _fun104152
                            }
                        case 52:
                            var4 = var5;
                        case 55:
                            var1.title = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var6.bind(var8)(var2, var5);
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = var14[var1];
                var10 = var5.bind(var3)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.getCustomGuildScore;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var10)(var6, var2);
                var2 = 12;
                var2 = var14[var2];
                var6 = var5.bind(var3)(var2);
                var2 = var6.numberToCustomScore;
                var10 = var2.bind(var6)(var8);
                _closure2_slot4 = var10;
                var1 = var14[var1];
                var8 = var5.bind(var3)(var1);
                var6 = var8.useStateFromStoresObject;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var8)(var2, var1);
                var1 = var1.guildChannels;
                _closure2_slot5 = var1;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun104155: for (var _fun104155_ip = 0;;) switch (_fun104155_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = var0.push;
                            var1 = {};
                            var3 = 'header';
                            var1.kind = var3;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot15;
                            var4 = _closure2_slot5;
                            var3 = var4.getSections;
                            var1 = false;
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.entries;
                            var1 = var1.bind(var3)();
                            var21 = undefined;
                            var20 = var2.bind(var21)(var1);
                            var4 = var20.bind(var21)();
                            var1 = var4.done;
                            var19 = 'categoryHeader';
                            var18 = 2;
                            var17 = 0;
                            var2 = 1;
                            var3 = 'channel';
                            var16 = 12;
                            var15 = 13;
                            var14 = null;
                            var13 = '';
                            var12 = 22;
                            var11 = var4;
                            var10 = undefined;
                            var9 = undefined;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun104155_ip = 978;
                                continue _fun104155
                            }
                        case 133:
                            var25 = var11.value;
                            var1 = _closure1_slot3;
                            var1 = var1.bind(var21)(var25, var18);
                            var33 = var1[var17];
                            var1 = var1[var2];
                            var31 = var10;
                            var30 = var9;
                            var29 = var8;
                            var28 = var7;
                            var27 = var6;
                            var26 = var5;
                            var25 = var4;
                            if (!(var17 !== var1)) {
                                _fun104155_ip = 939;
                                continue _fun104155
                            }
                        case 184:
                            var32 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var12];
                            var1 = var32.bind(var21)(var1);
                            var1 = var1.SECTION_INDEX_GUILD_ACTIONS;
                            var31 = var10;
                            var30 = var9;
                            var29 = var8;
                            var28 = var7;
                            var27 = var6;
                            var26 = var5;
                            var25 = var4;
                            if (!(var33 !== var1)) {
                                _fun104155_ip = 939;
                                continue _fun104155
                            }
                        case 235:
                            var1 = _closure2_slot5;
                            var1 = var1.voiceChannelsSectionNumber;
                            var31 = var10;
                            var30 = var9;
                            var29 = var8;
                            var28 = var7;
                            var27 = var6;
                            var26 = var5;
                            var25 = var4;
                            if (!(var33 !== var1)) {
                                _fun104155_ip = 939;
                                continue _fun104155
                            }
                        case 273:
                            var32 = _closure2_slot5;
                            var1 = var32.getCategoryFromSection;
                            var38 = var1.bind(var32)(var33);
                            var1 = var14 == var38;
                            var37 = undefined;
                            if (var1) {
                                _fun104155_ip = 324;
                                continue _fun104155
                            }
                        case 297:
                            var1 = var38.getChannelRecords;
                            var34 = var1.bind(var38)();
                            var32 = var34.filter;
                            var1 = function(arg0) { // Environment: var24
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isChannelCustomScoreEligible;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var37 = var32.bind(var34)(var1);
                        case 324:
                            var31 = var38;
                            var30 = var37;
                            var29 = var8;
                            var28 = var7;
                            var27 = var6;
                            var26 = var5;
                            var25 = var4;
                            if (!(var14 != var37)) {
                                _fun104155_ip = 939;
                                continue _fun104155
                            }
                        case 352:
                            var1 = var37.length;
                            var31 = var38;
                            var30 = var37;
                            var29 = var8;
                            var28 = var7;
                            var27 = var6;
                            var26 = var5;
                            var25 = var4;
                            if (!(var17 !== var1)) {
                                _fun104155_ip = 939;
                                continue _fun104155
                            }
                        case 385:
                            var34 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var32 = var1[var15];
                            var32 = var34.bind(var21)(var32);
                            var36 = var32.intl;
                            var35 = var36.string;
                            var32 = var1[var15];
                            var32 = var34.bind(var21)(var32);
                            var32 = var32.t;
                            var32 = var32.GSfOoo;
                            var32 = var35.bind(var36)(var32);
                            var1 = var1[var12];
                            var1 = var34.bind(var21)(var1);
                            var1 = var1.SECTION_INDEX_FAVORITES;
                            if (!(var33 !== var1)) {
                                _fun104155_ip = 646;
                                continue _fun104155
                            }
                        case 459:
                            var34 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var12];
                            var1 = var34.bind(var21)(var1);
                            var1 = var1.SECTION_INDEX_RECENTS;
                            if (!(var33 !== var1)) {
                                _fun104155_ip = 584;
                                continue _fun104155
                            }
                        case 486:
                            var34 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var12];
                            var1 = var34.bind(var21)(var1);
                            var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                            var36 = var32;
                            var35 = var7;
                            var34 = var6;
                            if (!(var33 >= var1)) {
                                _fun104155_ip = 704;
                                continue _fun104155
                            }
                        case 525:
                            var32 = _closure2_slot5;
                            var1 = var32.getNamedCategoryFromSection;
                            var1 = var1.bind(var32)(var33);
                            var39 = var14 == var1;
                            var32 = undefined;
                            if (var39) {
                                _fun104155_ip = 560;
                                continue _fun104155
                            }
                        case 549:
                            var39 = var1.record;
                            var32 = var39.name;
                        case 560:
                            var40 = var14 != var32;
                            var39 = var13;
                            if (!var40) {
                                _fun104155_ip = 573;
                                continue _fun104155
                            }
                        case 570:
                            var39 = var32;
                        case 573:
                            var36 = var39;
                            var35 = var32;
                            var34 = var1;
                            _fun104155_ip = 704;
                            continue _fun104155;
                        case 584:
                            var40 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var32 = var1[var15];
                            var32 = var40.bind(var21)(var32);
                            var39 = var32.intl;
                            var32 = var39.string;
                            var1 = var1[var15];
                            var1 = var40.bind(var21)(var1);
                            var1 = var1.t;
                            var1 = var1.gKcrqM;
                            var36 = var32.bind(var39)(var1);
                            var35 = var7;
                            var34 = var6;
                            _fun104155_ip = 704;
                            continue _fun104155;
                        case 646:
                            var40 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var32 = var1[var15];
                            var32 = var40.bind(var21)(var32);
                            var39 = var32.intl;
                            var32 = var39.string;
                            var1 = var1[var15];
                            var1 = var40.bind(var21)(var1);
                            var1 = var1.t;
                            var1 = var1.k8fFjp;
                            var36 = var32.bind(var39)(var1);
                            var35 = var7;
                            var34 = var6;
                        case 704:
                            var32 = var0.push;
                            var1 = {};
                            var1.kind = var19;
                            var1.index = var33;
                            var1.title = var36;
                            var1 = var32.bind(var0)(var1);
                            var32 = _closure1_slot15;
                            var1 = var37.entries;
                            var1 = var1.bind(var37)();
                            var33 = var32.bind(var21)(var1);
                            var39 = var33.bind(var21)();
                            var1 = var39.done;
                            var32 = var39;
                            var31 = var38;
                            var30 = var37;
                            var29 = var36;
                            var28 = var35;
                            var27 = var34;
                            var26 = var32;
                            var25 = var33;
                            if (var1) {
                                _fun104155_ip = 939;
                                continue _fun104155
                            }
                        case 786:
                            var39 = var32.value;
                            var1 = _closure1_slot3;
                            var1 = var1.bind(var21)(var39, var18);
                            var41 = var1[var17];
                            var40 = var1[var2];
                            var39 = var0.push;
                            var1 = {};
                            var1.kind = var3;
                            var40 = var40.id;
                            var1.channelId = var40;
                            var40 = var17 === var41;
                            var1.start = var40;
                            var40 = var37.length;
                            var40 = var40 - var2;
                            var40 = var41 === var40;
                            var1.end = var40;
                            var41 = _closure2_slot4;
                            var42 = _closure1_slot0;
                            var40 = _closure1_slot2;
                            var40 = var40[var16];
                            var40 = var42.bind(var21)(var40);
                            var40 = var40.ICYMICustomScore;
                            var40 = var40.MUTED;
                            var40 = var41 === var40;
                            var1.disabled = var40;
                            var1 = var39.bind(var0)(var1);
                            var39 = var33.bind(var21)();
                            var1 = var39.done;
                            var32 = var39;
                            var31 = var38;
                            var30 = var37;
                            var29 = var36;
                            var28 = var35;
                            var27 = var34;
                            var26 = var32;
                            var25 = var33;
                            if (!var1) {
                                _fun104155_ip = 786;
                                continue _fun104155
                            }
                        case 939:
                            var32 = var20.bind(var21)();
                            var1 = var32.done;
                            var10 = var31;
                            var9 = var30;
                            var8 = var29;
                            var7 = var28;
                            var6 = var27;
                            var5 = var26;
                            var4 = var25;
                            var11 = var32;
                            if (!var1) {
                                _fun104155_ip = 133;
                                continue _fun104155
                            }
                        case 978:
                            var1 = var0.length;
                            var1 = var1 - var2;
                            var2 = var0[var1];
                            var1 = var2.kind;
                            if (!(var3 === var1)) {
                                _fun104155_ip = 1008;
                                continue _fun104155
                            }
                        case 1000:
                            var1 = true;
                            var2.end = var1;
                        case 1008:
                            return var0;
                    }
                };
                var8 = var6.bind(var8)(var1, var2);
                var13 = _closure1_slot1;
                var1 = 23;
                var1 = var14[var1];
                var1 = var13.bind(var3)(var1);
                var10 = var1.bind(var3)();
                var1 = 24;
                var1 = var14[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var12 = var1.bottom;
                var6 = _closure1_slot4;
                var2 = var6.useCallback;
                var1 = new Array(3);
                var1[0] = var9;
                var9 = var4.categoryHeader;
                var1[1] = var9;
                var9 = var4.guildHeader;
                var1[2] = var9;
                var0 = function(arg0) { // Environment: var0
                    _fun104157: for (var _fun104157_ip = 0;;) switch (_fun104157_ip) {
                        case 0:
                            var0 = arg0;
                            var9 = var0.item;
                            var1 = var9.kind;
                            var0 = 'header';
                            if (!(var0 !== var1)) {
                                _fun104157_ip = 300;
                                continue _fun104157
                            }
                        case 24:
                            var1 = var9.kind;
                            var0 = 'categoryHeader';
                            if (!(var0 !== var1)) {
                                _fun104157_ip = 114;
                                continue _fun104157
                            }
                        case 37:
                            var2 = var9.kind;
                            var1 = 'channel';
                            var0 = null;
                            if (!(var1 === var2)) {
                                _fun104157_ip = 109;
                                continue _fun104157
                            }
                        case 52:
                            var4 = _closure1_slot11;
                            var3 = _closure1_slot17;
                            var2 = {};
                            var1 = var9.disabled;
                            var2.disabled = var1;
                            var1 = var9.channelId;
                            var2.channelId = var1;
                            var1 = var9.start;
                            var2.start = var1;
                            var1 = var9.end;
                            var2.end = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 109:
                            _fun104157_ip = 295;
                            continue _fun104157;
                        case 114:
                            var4 = _closure1_slot12;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var1 = _closure2_slot2;
                            var1 = var1.categoryHeader;
                            var2.style = var1;
                            var11 = _closure1_slot11;
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 26;
                            var5 = var10[var1];
                            var1 = undefined;
                            var5 = var7.bind(var1)(var5);
                            var8 = var5.ChevronSmallDownIcon;
                            var5 = {};
                            var12 = 'xs';
                            var5.size = var12;
                            var13 = _closure1_slot1;
                            var12 = 10;
                            var12 = var10[var12];
                            var12 = var13.bind(var1)(var12);
                            var12 = var12.colors;
                            var12 = var12.TEXT_SUBTLE;
                            var5.color = var12;
                            var8 = var11.bind(var1)(var8, var5);
                            var5 = new Array(2);
                            var5[0] = var8;
                            var8 = _closure1_slot11;
                            var6 = 21;
                            var6 = var10[var6];
                            var6 = var7.bind(var1)(var6);
                            var7 = var6.Text;
                            var6 = {
                                'variant': 'text-sm/semibold',
                                'color': 'text-default'
                            };
                            var9 = var9.title;
                            var6.children = var9;
                            var6 = var8.bind(var1)(var7, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 295:
                            _fun104157_ip = 659;
                            continue _fun104157;
                        case 300:
                            var2 = _closure2_slot3;
                            var1 = null;
                            var2 = var1 != var2;
                            if (!var2) {
                                _fun104157_ip = 656;
                                continue _fun104157
                            }
                        case 319:
                            var5 = _closure1_slot12;
                            var4 = _closure1_slot13;
                            var3 = {};
                            var8 = _closure1_slot11;
                            var7 = _closure1_slot5;
                            var6 = {};
                            var2 = _closure2_slot2;
                            var2 = var2.guildHeader;
                            var6.style = var2;
                            var11 = _closure1_slot11;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var2 = 25;
                            var9 = var14[var2];
                            var2 = undefined;
                            var9 = var13.bind(var2)(var9);
                            var10 = var9.GuildScoreSettings;
                            var9 = {};
                            var15 = _closure2_slot3;
                            var9.guild = var15;
                            var9 = var11.bind(var2)(var10, var9);
                            var6.children = var9;
                            var7 = var8.bind(var2)(var7, var6);
                            var6 = new Array(3);
                            var6[0] = var7;
                            var11 = _closure1_slot11;
                            var7 = 21;
                            var8 = var14[var7];
                            var8 = var13.bind(var2)(var8);
                            var9 = var8.Text;
                            var8 = {
                                'variant': 'text-sm/semibold',
                                'color': 'text-default'
                            };
                            var10 = 13;
                            var15 = var14[var10];
                            var15 = var13.bind(var2)(var15);
                            var17 = var15.intl;
                            var16 = var17.string;
                            var15 = var14[var10];
                            var15 = var13.bind(var2)(var15);
                            var15 = var15.t;
                            var15 = var15["0jRosn"];
                            var15 = var16.bind(var17)(var15);
                            var8.children = var15;
                            var8 = var11.bind(var2)(var9, var8);
                            var6[1] = var8;
                            var9 = _closure1_slot11;
                            var7 = var14[var7];
                            var7 = var13.bind(var2)(var7);
                            var8 = var7.Text;
                            var7 = {
                                'variant': 'text-xs/normal',
                                'color': 'text-default'
                            };
                            var11 = {};
                            var15 = _closure1_slot1;
                            var12 = 10;
                            var12 = var14[var12];
                            var12 = var15.bind(var2)(var12);
                            var12 = var12.spacing;
                            var12 = var12.PX_16;
                            var11.marginBottom = var12;
                            var7.style = var11;
                            var11 = var14[var10];
                            var11 = var13.bind(var2)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10.l52PX4;
                            var10 = var11.bind(var12)(var10);
                            var7.children = var10;
                            var7 = var9.bind(var2)(var8, var7);
                            var6[2] = var7;
                            var3.children = var6;
                            var1 = var5.bind(var2)(var4, var3);
                        case 656:
                            var0 = var1;
                        case 659:
                            return var0;
                    }
                };
                var9 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var6 = _closure1_slot11;
                var4 = 27;
                var4 = var14[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.AnimatedFlashList;
                var4 = {};
                var11 = {};
                var11.bottom = var12;
                var12 = 10;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.spacing;
                var12 = var12.PX_12;
                var11.top = var12;
                var4.contentInset = var11;
                var4.estimatedItemSize = var10;
                var10 = false;
                var4.showsVerticalScrollIndicator = var10;
                var4.renderItem = var9;
                var4.data = var8;
                var7 = _closure1_slot18;
                var4.keyExtractor = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4549, 1372, 1410, 4303, 8946, 33, 1297, 671, 566, 8955, 1234, 3279, 13603, 1307, 4809, 4900, 4086, 8828, 3942, 4569, 7630, 1568, 13604, 7438, 5804, 2]);