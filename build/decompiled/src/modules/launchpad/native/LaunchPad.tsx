// modules/launchpad/native/LaunchPad.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun110024: for (var _fun110024_ip = 0;;) switch (_fun110024_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110024_ip = 46;
                    continue _fun110024
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110024_ip = 55;
                    continue _fun110024
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110024_ip = 345;
                    continue _fun110024
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110024_ip = 323;
                    continue _fun110024
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110024_ip = 283;
                    continue _fun110024
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110024_ip = 270;
                    continue _fun110024
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
                    _fun110024_ip = 163;
                    continue _fun110024
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110024_ip = 179;
                    continue _fun110024
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110024_ip = 249;
                    continue _fun110024
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110024_ip = 249;
                    continue _fun110024
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110024_ip = 234;
                    continue _fun110024
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110024_ip = 247;
                    continue _fun110024
                }
            case 234:
                var8 = _closure1_slot37;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110024_ip = 265;
                continue _fun110024;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110024_ip = 283;
                continue _fun110024;
            case 270:
                var6 = _closure1_slot37;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110024_ip = 323;
                    continue _fun110024
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
                    _fun110024_ip = 330;
                    continue _fun110024
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110025: for (var _fun110025_ip = 0;;) switch (_fun110025_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110025_ip = 56;
                                continue _fun110025
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
                            _fun110025_ip = 67;
                            continue _fun110025;
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
    var _closure1_slot36 = var0;
    var0 = function arg0, arg1() {
        _fun110026: for (var _fun110026_ip = 0;;) switch (_fun110026_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110026_ip = 23;
                    continue _fun110026
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110026_ip = 33;
                    continue _fun110026
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
                    _fun110026_ip = 70;
                    continue _fun110026
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110026_ip = 55;
                    continue _fun110026
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        _fun110027: for (var _fun110027_ip = 0;;) switch (_fun110027_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onPress;
                var5 = var0.icon;
                var7 = var0.accessibilityLabel;
                var4 = var0.selected;
                var9 = var0.style;
                var0 = _closure1_slot27;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot25;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 21;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var0.onPress = var8;
                var11 = var10.tab;
                var8 = new Array(3);
                var8[0] = var11;
                var8[1] = var9;
                var9 = undefined;
                if (!var4) {
                    _fun110027_ip = 107;
                    continue _fun110027
                }
            case 101:
                var9 = var10.tabSelected;
            case 107:
                var8[2] = var9;
                var0.style = var8;
                var0.accessibilityLabel = var7;
                var7 = 'tab';
                var0.accessibilityRole = var7;
                var7 = {};
                var7.selected = var4;
                var0.accessibilityState = var7;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 19;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.colors;
                if (var4) {
                    _fun110027_ip = 175;
                    continue _fun110027
                }
            case 167:
                var4 = var6.INTERACTIVE_TEXT_DEFAULT;
                _fun110027_ip = 181;
                continue _fun110027;
            case 175:
                var4 = var6.INTERACTIVE_TEXT_ACTIVE;
            case 181:
                var4 = var5.bind(var3)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.text;
        var1 = _closure1_slot27;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot25;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 22;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'style': null,
            'variant': 'heading-md/extrabold',
            'maxFontSizeMultiplier': 1.75,
            'accessibilityRole': 'header'
        };
        var5 = var5.subheader;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun110029: for (var _fun110029_ip = 0;;) switch (_fun110029_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var4 = arg2;
                var0 = var1.has;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun110029_ip = 78;
                    continue _fun110029
                }
            case 22:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 34;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var3 = var0.bind(var3)(var2);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun110029_ip = 78;
                    continue _fun110029
                }
            case 58:
                var0 = var4.push;
                var0 = var0.bind(var4)(var3);
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
            case 78:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var13 = var1.disabled;
        var _closure2_slot0 = var13;
        var12 = var1.visible;
        var _closure2_slot1 = var12;
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 35;
        var2 = var11[var1];
        var10 = undefined;
        var3 = var9.bind(var10)(var2);
        var2 = var3.getSelectedGuildFromRoute;
        var3 = var2.bind(var3)();
        var _closure2_slot2 = var3;
        var1 = var11[var1];
        var2 = var9.bind(var10)(var1);
        var1 = var2.getSelectedChannelFromRoute;
        var7 = var1.bind(var2)();
        var _closure2_slot3 = var7;
        var2 = _closure1_slot4;
        var1 = var2.useState;
        var4 = var1.bind(var2)(var10);
        var2 = _closure1_slot3;
        var1 = 2;
        var4 = var2.bind(var10)(var4, var1);
        var1 = 0;
        var2 = var4[var1];
        var _closure2_slot4 = var2;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot5 = var1;
        var14 = _closure1_slot4;
        var8 = var14.useEffect;
        var5 = new Array(1);
        var5[0] = var12;
        var4 = function() { // Environment: var0
            _fun110031: for (var _fun110031_ip = 0;;) switch (_fun110031_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun110031_ip = 21;
                        continue _fun110031
                    }
                case 10:
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var0);
                case 21:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var8.bind(var14)(var4, var5);
        var8 = _closure1_slot4;
        var5 = var8.useRef;
        var4 = new Array(0);
        var4 = var5.bind(var8)(var4);
        var _closure2_slot6 = var4;
        var8 = 23;
        var4 = var11[var8];
        var15 = var9.bind(var10)(var4);
        var14 = var15.useStateFromStores;
        var4 = _closure1_slot19;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() { // Environment: var0
            _fun110032: for (var _fun110032_ip = 0;;) switch (_fun110032_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun110032_ip = 21;
                        continue _fun110032
                    }
                case 10:
                    var0 = _closure2_slot6;
                    var0 = var0.current;
                    _fun110032_ip = 38;
                    continue _fun110032;
                case 21:
                    var2 = _closure1_slot19;
                    var1 = var2.getUnreadPrivateChannelIds;
                    var0 = var1.bind(var2)();
                case 38:
                    return var0;
            }
        };
        var5 = var14.bind(var15)(var5, var4);
        var _closure2_slot7 = var5;
        var15 = _closure1_slot4;
        var14 = var15.useEffect;
        var4 = function() { // Environment: var0
            var1 = _closure2_slot6;
            var0 = _closure2_slot7;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var4 = var14.bind(var15)(var4);
        var15 = _closure1_slot4;
        var14 = var15.useRef;
        var4 = new Array(0);
        var4 = var14.bind(var15)(var4);
        var _closure2_slot8 = var4;
        var4 = var11[var8];
        var17 = var9.bind(var10)(var4);
        var16 = var17.useStateFromStoresArray;
        var4 = _closure1_slot18;
        var15 = new Array(2);
        var15[0] = var4;
        var4 = _closure1_slot21;
        var15[1] = var4;
        var14 = new Array(2);
        var14[0] = var12;
        var14[1] = var3;
        var4 = function() { // Environment: var0
            _fun110034: for (var _fun110034_ip = 0;;) switch (_fun110034_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun110034_ip = 21;
                        continue _fun110034
                    }
                case 10:
                    var0 = _closure2_slot8;
                    var0 = var0.current;
                    return var0;
                case 21:
                    var0 = new Array(0);
                    var4 = new Array(0);
                    var2 = _closure1_slot36;
                    var3 = _closure1_slot21;
                    var1 = var3.getFlattenedGuildIds;
                    var1 = var1.bind(var3)();
                    var6 = undefined;
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.bind(var6)();
                    var1 = var2.done;
                    var3 = 0;
                    if (var1) {
                        _fun110034_ip = 158;
                        continue _fun110034
                    }
                case 71:
                    var9 = var2.value;
                    var1 = _closure2_slot2;
                    if (!(var9 !== var1)) {
                        _fun110034_ip = 143;
                        continue _fun110034
                    }
                case 84:
                    var10 = _closure1_slot18;
                    var1 = var10.getMentionCount;
                    var1 = var1.bind(var10)(var9);
                    if (!(!(var1 > var3))) {
                        _fun110034_ip = 133;
                        continue _fun110034
                    }
                case 103:
                    var10 = _closure1_slot18;
                    var1 = var10.hasUnread;
                    var1 = var1.bind(var10)(var9);
                    if (!var1) {
                        _fun110034_ip = 143;
                        continue _fun110034
                    }
                case 121:
                    var1 = var4.push;
                    var1 = var1.bind(var4)(var9);
                    _fun110034_ip = 143;
                    continue _fun110034;
                case 133:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var9);
                case 143:
                    var9 = var5.bind(var6)();
                    var1 = var9.done;
                    var2 = var9;
                    if (!var1) {
                        _fun110034_ip = 71;
                        continue _fun110034
                    }
                case 158:
                    var2 = var0.push;
                    var1 = new Array(0);
                    var13 = var1;
                    var12 = var4;
                    var11 = 0;
                    var3 = arraySpread(var13, var12, var11);
                    var13 = var2;
                    var12 = var1;
                    var11 = var0;
                    var1 = apply(var13, var12, var11);
                    return var0;
            }
        };
        var4 = var16.bind(var17)(var15, var4, var14);
        var _closure2_slot9 = var4;
        var16 = _closure1_slot4;
        var15 = var16.useEffect;
        var14 = function() { // Environment: var0
            var1 = _closure2_slot8;
            var0 = _closure2_slot9;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var14 = var15.bind(var16)(var14);
        var16 = _closure1_slot4;
        var15 = var16.useRef;
        var14 = new Array(0);
        var14 = var15.bind(var16)(var14);
        var _closure2_slot10 = var14;
        var8 = var11[var8];
        var15 = var9.bind(var10)(var8);
        var14 = var15.useStateFromStoresArray;
        var8 = _closure1_slot7;
        var11 = new Array(5);
        var11[0] = var8;
        var8 = _closure1_slot23;
        var11[1] = var8;
        var8 = _closure1_slot20;
        var11[2] = var8;
        var8 = _closure1_slot22;
        var11[3] = var8;
        var8 = _closure1_slot12;
        var11[4] = var8;
        var9 = new Array(4);
        var9[0] = var13;
        var9[1] = var3;
        var9[2] = var12;
        var9[3] = var2;
        var8 = function() { // Environment: var0
            _fun110036: for (var _fun110036_ip = 0;;) switch (_fun110036_ip) {
                case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun110036_ip = 21;
                        continue _fun110036
                    }
                case 15:
                    var8 = _closure2_slot2;
                    _fun110036_ip = 25;
                    continue _fun110036;
                case 21:
                    var8 = _closure2_slot4;
                case 25:
                    var3 = _closure2_slot0;
                    if (var3) {
                        _fun110036_ip = 352;
                        continue _fun110036
                    }
                case 35:
                    if (!(var2 != var8)) {
                        _fun110036_ip = 352;
                        continue _fun110036
                    }
                case 42:
                    var2 = _closure2_slot1;
                    if (var2) {
                        _fun110036_ip = 60;
                        continue _fun110036
                    }
                case 49:
                    var0 = _closure2_slot10;
                    var0 = var0.current;
                    return var0;
                case 60:
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var6 = new Array(0);
                    var _closure3_slot1 = var6;
                    var4 = new Array(0);
                    var _closure3_slot2 = var4;
                    var5 = new Array(0);
                    var _closure3_slot3 = var5;
                    var2 = global;
                    var9 = var2.Object;
                    var7 = var9.values;
                    var10 = _closure1_slot12;
                    var3 = var10.getActiveJoinedUnreadThreadsForGuild;
                    var3 = var3.bind(var10)(var8);
                    var10 = var7.bind(var9)(var3);
                    var7 = var10.length;
                    var3 = 0;
                    var7 = var3 < var7;
                    var9 = 0;
                    if (!var7) {
                        _fun110036_ip = 195;
                        continue _fun110036
                    }
                case 144:
                    var7 = var10[var9];
                    var13 = var7;
                    for (var7 in var13)
                        case 159: {
                            case 168: var16 = var7;
                            var15 = var6.push;
                            var15 = var15.bind(var6)(var16);
                            _fun110036_ip = 159;
                            continue _fun110036;
                        }
                case 183:
                    var9 = var9 + 1;
                    var7 = var10.length;
                    if (var9 < var7) {
                        _fun110036_ip = 144;
                        continue _fun110036
                    }
                case 195:
                    var7 = _closure1_slot7;
                    var2 = var7.getGuild;
                    var2 = var2.bind(var7)(var8);
                    var8 = var2.guildChannels;
                    var7 = var8.forEachChannel;
                    var2 = function(arg0) { // Environment: var1
                        _fun110037: for (var _fun110037_ip = 0;;) switch (_fun110037_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure1_slot14;
                                var3 = var1.type;
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                if (var3) {
                                    _fun110037_ip = 45;
                                    continue _fun110037
                                }
                            case 25:
                                var5 = _closure1_slot13;
                                var4 = var1.type;
                                var4 = var5.bind(var0)(var4);
                                if (!var4) {
                                    _fun110037_ip = 354;
                                    continue _fun110037
                                }
                            case 45:
                                var7 = _closure1_slot22;
                                var6 = var7.isChannelMuted;
                                var5 = var1.guild_id;
                                var4 = var1.id;
                                var4 = var6.bind(var7)(var5, var4);
                                if (var4) {
                                    _fun110037_ip = 354;
                                    continue _fun110037
                                }
                            case 77:
                                var5 = var1.parent_id;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun110037_ip = 122;
                                    continue _fun110037
                                }
                            case 89:
                                var7 = _closure1_slot22;
                                var6 = var7.isChannelMuted;
                                var5 = var1.guild_id;
                                var4 = var1.parent_id;
                                var4 = var6.bind(var7)(var5, var4);
                                if (var4) {
                                    _fun110037_ip = 354;
                                    continue _fun110037
                                }
                            case 122:
                                var6 = _closure1_slot20;
                                var5 = var6.getMentionCount;
                                var4 = var1.id;
                                var5 = var5.bind(var6)(var4);
                                var4 = 0;
                                if (!(!(var5 > var4))) {
                                    _fun110037_ip = 332;
                                    continue _fun110037
                                }
                            case 151:
                                if (var3) {
                                    _fun110037_ip = 215;
                                    continue _fun110037
                                }
                            case 154:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 36;
                                var4 = var6[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.getHasImportantUnread;
                                var4 = var4.bind(var5)(var1);
                                if (!var4) {
                                    _fun110037_ip = 215;
                                    continue _fun110037
                                }
                            case 188:
                                var6 = _closure3_slot1;
                                var5 = var6.push;
                                var4 = var1.id;
                                var4 = var5.bind(var6)(var4);
                                _fun110037_ip = 354;
                                continue _fun110037;
                            case 215:
                                if (var3) {
                                    _fun110037_ip = 271;
                                    continue _fun110037
                                }
                            case 218:
                                var3 = !var3;
                                if (!var3) {
                                    _fun110037_ip = 244;
                                    continue _fun110037
                                }
                            case 224:
                                var6 = _closure1_slot20;
                                var5 = var6.hasUnread;
                                var4 = var1.id;
                                var3 = var5.bind(var6)(var4);
                            case 244:
                                if (!var3) {
                                    _fun110037_ip = 354;
                                    continue _fun110037
                                }
                            case 247:
                                var5 = _closure3_slot2;
                                var4 = var5.push;
                                var3 = var1.id;
                                var3 = var4.bind(var5)(var3);
                                _fun110037_ip = 354;
                                continue _fun110037;
                            case 271:
                                var8 = _closure1_slot23;
                                var7 = var8.getVoiceStatesForChannel;
                                var2 = var1.id;
                                var5 = var7.bind(var8)(var2);
                                for (var2 in var5)
                                    case 299: {
                                        case 308: var4 = _closure3_slot3;
                                        var3 = var4.push;
                                        var2 = var1.id;
                                        var2 = var3.bind(var4)(var2);
                                        _fun110037_ip = 354;
                                        continue _fun110037;
                                        case 332: var3 = _closure3_slot0;
                                        var2 = var3.push;
                                        var1 = var1.id;
                                        var1 = var2.bind(var3)(var1);
                                    }
                            case 354:
                                return var0;
                        }
                    };
                    var1 = {
                        'ignoreRecents': true,
                        'withThreads': true
                    };
                    var1 = var7.bind(var8)(var2, var1);
                    var2 = var0.push;
                    var1 = new Array(0);
                    var19 = var1;
                    var18 = var6;
                    var17 = 0;
                    var6 = arraySpread(var19, var18, var17);
                    var19 = var2;
                    var18 = var1;
                    var17 = var0;
                    var1 = apply(var19, var18, var17);
                    var2 = var0.push;
                    var1 = new Array(0);
                    var19 = var1;
                    var18 = var5;
                    var17 = 0;
                    var5 = arraySpread(var19, var18, var17);
                    var19 = var2;
                    var18 = var1;
                    var17 = var0;
                    var1 = apply(var19, var18, var17);
                    var2 = var0.push;
                    var1 = new Array(0);
                    var19 = var1;
                    var18 = var4;
                    var17 = 0;
                    var3 = arraySpread(var19, var18, var17);
                    var19 = var2;
                    var18 = var1;
                    var17 = var0;
                    var1 = apply(var19, var18, var17);
                    return var0;
                case 352:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var11 = var14.bind(var15)(var11, var8, var9);
        var _closure2_slot11 = var11;
        var14 = _closure1_slot4;
        var9 = var14.useEffect;
        var8 = function() { // Environment: var0
            var1 = _closure2_slot10;
            var0 = _closure2_slot11;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var8 = var9.bind(var14)(var8);
        var14 = _closure1_slot4;
        var9 = var14.useRef;
        var8 = new Array(0);
        var8 = var9.bind(var14)(var8);
        var _closure2_slot12 = var8;
        var14 = _closure1_slot4;
        var9 = var14.useMemo;
        var8 = new Array(4);
        var8[0] = var13;
        var8[1] = var12;
        var8[2] = var3;
        var8[3] = var4;
        var3 = function() { // Environment: var0
            _fun110039: for (var _fun110039_ip = 0;;) switch (_fun110039_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (var1) {
                        _fun110039_ip = 305;
                        continue _fun110039
                    }
                case 13:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun110039_ip = 305;
                        continue _fun110039
                    }
                case 23:
                    var2 = global;
                    var4 = var2.Set;
                    var17 = _closure2_slot9;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var18 = var3;
                    var1 = new var18[var4](var17, var16);
                    var11 = var1 instanceof Object ? var1 : var3;
                    var1 = _closure2_slot2;
                    var10 = null;
                    if (!(var10 != var1)) {
                        _fun110039_ip = 79;
                        continue _fun110039
                    }
                case 65:
                    var3 = var11.add;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var11)(var1);
                case 79:
                    var1 = _closure1_slot10;
                    var8 = undefined;
                    var7 = var1.bind(var8)();
                    var1 = new Array(0);
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var18 = var3;
                    var2 = new var18[var2](var17);
                    var6 = var2 instanceof Object ? var2 : var3;
                    var3 = var7.length;
                    var2 = 1;
                    var5 = var3 - var2;
                    var4 = 0;
                    var3 = 20;
                    var2 = undefined;
                    if (!(var5 >= var4)) {
                        _fun110039_ip = 303;
                        continue _fun110039
                    }
                case 148:
                    var16 = var7[var5];
                    if (!(var10 != var16)) {
                        _fun110039_ip = 303;
                        continue _fun110039
                    }
                case 159:
                    var13 = var16.startsWith;
                    var12 = _closure1_slot8;
                    var12 = var13.bind(var16)(var12);
                    if (var12) {
                        _fun110039_ip = 188;
                        continue _fun110039
                    }
                case 177:
                    var12 = _closure1_slot9;
                    var13 = var12.bind(var8)(var16);
                    _fun110039_ip = 231;
                    continue _fun110039;
                case 188:
                    var15 = _closure1_slot16;
                    var14 = var15.getChannel;
                    var12 = _closure1_slot9;
                    var12 = var12.bind(var8)(var16);
                    var14 = var14.bind(var15)(var12);
                    var15 = var10 == var14;
                    var12 = undefined;
                    if (var15) {
                        _fun110039_ip = 225;
                        continue _fun110039
                    }
                case 220:
                    var12 = var14.guild_id;
                case 225:
                    var13 = var12;
                    var2 = var14;
                case 231:
                    var12 = var10 == var13;
                    if (var12) {
                        _fun110039_ip = 248;
                        continue _fun110039
                    }
                case 238:
                    var14 = var11.has;
                    var12 = var14.bind(var11)(var13);
                case 248:
                    if (var12) {
                        _fun110039_ip = 261;
                        continue _fun110039
                    }
                case 251:
                    var14 = var6.has;
                    var12 = var14.bind(var6)(var13);
                case 261:
                    if (var12) {
                        _fun110039_ip = 284;
                        continue _fun110039
                    }
                case 264:
                    var12 = var6.add;
                    var12 = var12.bind(var6)(var13);
                    var12 = var1.push;
                    var12 = var12.bind(var1)(var13);
                case 284:
                    var12 = var1.length;
                    if (!(!(var12 >= var3))) {
                        _fun110039_ip = 303;
                        continue _fun110039
                    }
                case 293:
                    var5 = var5 - 1;
                    if (var5 >= var4) {
                        _fun110039_ip = 148;
                        continue _fun110039
                    }
                case 303:
                    return var1;
                case 305:
                    var0 = _closure2_slot12;
                    var0 = var0.current;
                    return var0;
            }
        };
        var3 = var9.bind(var14)(var3, var8);
        var _closure2_slot13 = var3;
        var14 = _closure1_slot4;
        var9 = var14.useEffect;
        var8 = function() { // Environment: var0
            var1 = _closure2_slot12;
            var0 = _closure2_slot13;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var8 = var9.bind(var14)(var8);
        var9 = _closure1_slot4;
        var8 = var9.useRef;
        var8 = var8.bind(var9)(var10);
        var _closure2_slot14 = var8;
        var10 = _closure1_slot4;
        var9 = var10.useMemo;
        var8 = new Array(5);
        var8[0] = var13;
        var8[1] = var12;
        var8[2] = var11;
        var8[3] = var7;
        var8[4] = var2;
        var7 = function() { // Environment: var0
            _fun110041: for (var _fun110041_ip = 0;;) switch (_fun110041_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun110041_ip = 418;
                        continue _fun110041
                    }
                case 13:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun110041_ip = 31;
                        continue _fun110041
                    }
                case 20:
                    var0 = _closure2_slot14;
                    var0 = var0.current;
                    return var0;
                case 31:
                    var6 = _closure2_slot3;
                    var2 = _closure1_slot10;
                    var0 = undefined;
                    var9 = var2.bind(var0)();
                    var7 = null;
                    var2 = var7 != var6;
                    var5 = undefined;
                    if (!var2) {
                        _fun110041_ip = 86;
                        continue _fun110041
                    }
                case 59:
                    var4 = _closure1_slot8;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = '';
                    var5 = var3.bind(var2)(var4, var6);
                case 86:
                    var6 = new Array(0);
                    var3 = var9.length;
                    var2 = 1;
                    var3 = var3 - var2;
                    var4 = 0;
                    var2 = 20;
                    if (!(var3 >= var4)) {
                        _fun110041_ip = 176;
                        continue _fun110041
                    }
                case 111:
                    var12 = var9[var3];
                    if (!(var7 != var12)) {
                        _fun110041_ip = 176;
                        continue _fun110041
                    }
                case 119:
                    var11 = var12.startsWith;
                    var10 = _closure1_slot11;
                    var10 = var11.bind(var12)(var10);
                    if (var10) {
                        _fun110041_ip = 169;
                        continue _fun110041
                    }
                case 137:
                    if (!(var12 !== var5)) {
                        _fun110041_ip = 169;
                        continue _fun110041
                    }
                case 141:
                    var11 = var6.push;
                    var10 = _closure1_slot9;
                    var10 = var10.bind(var0)(var12);
                    var10 = var11.bind(var6)(var10);
                    var10 = var6.length;
                    if (!(!(var10 >= var2))) {
                        _fun110041_ip = 176;
                        continue _fun110041
                    }
                case 169:
                    var3 = var3 - 1;
                    if (var3 >= var4) {
                        _fun110041_ip = 111;
                        continue _fun110041
                    }
                case 176:
                    var2 = new Array(0);
                    var3 = new Array(0);
                    var5 = _closure2_slot4;
                    if (!(var7 == var5)) {
                        _fun110041_ip = 281;
                        continue _fun110041
                    }
                case 192:
                    var5 = global;
                    var5 = var5.Set;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var16 = var7;
                    var5 = new var16[var5](var15);
                    var9 = var5 instanceof Object ? var5 : var7;
                    var5 = _closure1_slot36;
                    var7 = var5.bind(var0)(var6);
                    var6 = var7.bind(var0)();
                    var5 = var6.done;
                    if (var5) {
                        _fun110041_ip = 281;
                        continue _fun110041
                    }
                case 241:
                    var11 = var6.value;
                    var10 = _closure1_slot40;
                    var5 = _closure1_slot9;
                    var5 = var5.bind(var0)(var11);
                    var5 = var10.bind(var0)(var5, var9, var3);
                    var10 = var7.bind(var0)();
                    var5 = var10.done;
                    var6 = var10;
                    if (!var5) {
                        _fun110041_ip = 241;
                        continue _fun110041
                    }
                case 281:
                    var5 = global;
                    var5 = var5.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var16 = var6;
                    var5 = new var16[var5](var15);
                    var7 = var5 instanceof Object ? var5 : var6;
                    var5 = _closure2_slot11;
                    var5 = var5.length;
                    if (!(var5 > var4)) {
                        _fun110041_ip = 378;
                        continue _fun110041
                    }
                case 322:
                    var5 = _closure1_slot36;
                    var1 = _closure2_slot11;
                    var6 = var5.bind(var0)(var1);
                    var5 = var6.bind(var0)();
                    var1 = var5.done;
                    if (var1) {
                        _fun110041_ip = 378;
                        continue _fun110041
                    }
                case 347:
                    var9 = _closure1_slot40;
                    var1 = var5.value;
                    var1 = var9.bind(var0)(var1, var7, var2);
                    var9 = var6.bind(var0)();
                    var1 = var9.done;
                    var5 = var9;
                    if (!var1) {
                        _fun110041_ip = 347;
                        continue _fun110041
                    }
                case 378:
                    var1 = var3.length;
                    if (!(!(var1 > var4))) {
                        _fun110041_ip = 401;
                        continue _fun110041
                    }
                case 387:
                    var1 = var2.length;
                    var1 = var1 > var4;
                    var0 = undefined;
                    if (!var1) {
                        _fun110041_ip = 416;
                        continue _fun110041
                    }
                case 401:
                    var1 = {};
                    var1.channelHistory = var3;
                    var1.unreads = var2;
                    var0 = var1;
                case 416:
                    return var0;
                case 418:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var9.bind(var10)(var7, var8);
        var _closure2_slot15 = var8;
        var9 = _closure1_slot4;
        var7 = var9.useEffect;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot14;
            var0 = _closure2_slot15;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var0 = var7.bind(var9)(var0);
        var0 = {};
        var7 = _closure1_slot4;
        var6 = var7.useDeferredValue;
        var6 = var6.bind(var7)(var8);
        var0.initialResults = var6;
        var0.unreadPrivateChannelIds = var5;
        var0.unreadGuilds = var4;
        var0.guildHistory = var3;
        var0.selectedUnreadGuild = var2;
        var0.setSelectedUnreadGuild = var1;
        return var0;
    };
    var _closure1_slot41 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var15.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var8 = 3;
    var3 = var5[var8];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var17 = 5;
    var3 = var5[var17];
    var3 = var4.bind(var0)(var3);
    var7 = var3.CHANNEL_PREFIX;
    var _closure1_slot8 = var7;
    var7 = var3.getIdFromHistoryItem;
    var _closure1_slot9 = var7;
    var7 = var3.getNavigationHistory;
    var _closure1_slot10 = var7;
    var3 = var3.GUILD_PREFIX;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.isGuildSelectableChannelType;
    var _closure1_slot13 = var7;
    var3 = var3.isGuildVocalChannelType;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var15.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot24 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot25 = var7;
    var3 = var3.jsxs;
    var _closure1_slot26 = var3;
    var14 = 19;
    var3 = var5[var14];
    var3 = var15.bind(var0)(var3);
    var3 = var3.radii;
    var16 = var3.md;
    var3 = 20;
    var3 = var5[var3];
    var12 = var4.bind(var0)(var3);
    var7 = var12.createStyles;
    var3 = {};
    var13 = {
        'flexGrow': 0,
        'marginHorizontal': 16,
        'marginBottom': 16,
        'flexShrink': 1,
        'borderRadius': 24,
        'backgroundColor': null,
        'flexDirection': 'column',
        'justifyContent': 'flex-start',
        'alignItems': 'stretch',
        'overflow': 'hidden'
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOW;
    var13.backgroundColor = var18;
    var3.wrapper = var13;
    var13 = {
        'flex': 4294967295,
        'overflow': 'hidden',
        'borderBottomLeftRadius': 24,
        'borderBottomRightRadius': 24
    };
    var3.launchPadContent = var13;
    var13 = {
        'paddingHorizontal': 16,
        'paddingTop': 16,
        'flexDirection': 'row',
        'flexShrink': 0,
        'flexGrow': 0
    };
    var3.header = var13;
    var13 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'alignSelf': 'center',
        'paddingStart': 8
    };
    var3.subheader = var13;
    var13 = {
        'marginStart': 8,
        'flexDirection': 'row',
        'flexShrink': 0,
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 5,
        'alignItems': 'stretch',
        'justifyContent': 'center',
        'gap': 5,
        'borderWidth': 1
    };
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.INPUT_BACKGROUND_DEFAULT;
    var13.backgroundColor = var18;
    var13.borderRadius = var16;
    var18 = var5[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.INPUT_BORDER_DEFAULT;
    var13.borderColor = var18;
    var3.tabs = var13;
    var13 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var16 = var16 - var17;
    var13.borderRadius = var16;
    var3.tab = var13;
    var13 = {};
    var14 = var5[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var13.backgroundColor = var14;
    var3.tabSelected = var13;
    var3 = var7.bind(var12)(var3);
    var _closure1_slot27 = var3;
    var3 = {};
    var3.SEARCH = var11;
    var7 = 'SEARCH';
    var3[var11] = var7;
    var3.MEMBERS = var10;
    var7 = 'MEMBERS';
    var3[var10] = var7;
    var3.NOTIFICATIONS = var9;
    var7 = 'NOTIFICATIONS';
    var3[var9] = var7;
    var3.DEV_TOOLS = var8;
    var7 = 'DEV_TOOLS';
    var3[var8] = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function LaunchPadTsx1(){const{sharedState}=this.__closure;return sharedState.get();}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = 'function LaunchPadTsx2(sharedState){const{keyboardShown,runOnJS,setFocused}=this.__closure;if(!keyboardShown.get()&&sharedState>0.75){runOnJS(setFocused)(true);}else if(keyboardShown.get()&&sharedState<=0){runOnJS(setFocused)(false);}}';
    var3.code = var7;
    var _closure1_slot30 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun110043: for (var _fun110043_ip = 0;;) switch (_fun110043_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.tab;
                var _closure2_slot0 = var15;
                var1 = var0.setTab;
                var _closure2_slot1 = var1;
                var9 = var0.updateQuery;
                var5 = var0.sharedState;
                var _closure2_slot2 = var5;
                var11 = var0.searchRef;
                var _closure2_slot3 = var11;
                var0 = _closure1_slot27;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 23;
                var1 = var16[var0];
                var6 = var12.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot17;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var13
                    var0 = _closure1_slot17;
                    var0 = var0.isDeveloper;
                    return var0;
                };
                var10 = var4.bind(var6)(var2, var1);
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var4 = false;
                var1 = var1.bind(var2)(var4);
                var _closure2_slot4 = var1;
                var7 = 24;
                var1 = var16[var7];
                var2 = var12.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var17 = var1.bind(var2)(var4);
                var _closure2_slot5 = var17;
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var1 = var1.bind(var2)(var15);
                var _closure2_slot6 = var1;
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var13
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var6 = _closure1_slot4;
                var4 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var17;
                var2[1] = var11;
                var1 = function(arg0) { // Environment: var13
                    _fun110046: for (var _fun110046_ip = 0;;) switch (_fun110046_ip) {
                        case 0:
                            var2 = arg0;
                            if (!var2) {
                                _fun110046_ip = 38;
                                continue _fun110046
                            }
                        case 6:
                            var0 = _closure2_slot6;
                            var4 = var0.current;
                            var3 = _closure1_slot28;
                            var3 = var3.SEARCH;
                            if (!(var4 !== var3)) {
                                _fun110046_ip = 163;
                                continue _fun110046
                            }
                        case 38:
                            if (var2) {
                                _fun110046_ip = 280;
                                continue _fun110046
                            }
                        case 44:
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            if (!var3) {
                                _fun110046_ip = 110;
                                continue _fun110046
                            }
                        case 59:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 25;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.getBestActiveInput;
                            var4 = var3.bind(var4)();
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun110046_ip = 110;
                                continue _fun110046
                            }
                        case 100:
                            var3 = var4.focus;
                            var3 = var3.bind(var4)();
                        case 110:
                            var3 = _closure2_slot3;
                            var4 = var3.current;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun110046_ip = 135;
                                continue _fun110046
                            }
                        case 125:
                            var3 = var4.blur;
                            var3 = var3.bind(var4)();
                        case 135:
                            var3 = _closure2_slot4;
                            var4 = false;
                            var3.current = var4;
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4);
                            _fun110046_ip = 280;
                            continue _fun110046;
                        case 163:
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 25;
                            var0 = var2[var0];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var0);
                            var0 = var4.getBestActiveInput;
                            var5 = var0.bind(var4)();
                            var0 = null;
                            var4 = var0 == var5;
                            if (var4) {
                                _fun110046_ip = 218;
                                continue _fun110046
                            }
                        case 208:
                            var4 = var5.isFocused;
                            var2 = var4.bind(var5)();
                        case 218:
                            var4 = true;
                            var2 = var4 === var2;
                            var3.current = var2;
                            var2 = _closure2_slot3;
                            var2 = var2.current;
                            if (!(var0 != var2)) {
                                _fun110046_ip = 280;
                                continue _fun110046
                            }
                        case 243:
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4);
                            var1 = _closure2_slot3;
                            var1 = var1.current;
                            if (!(var0 != var1)) {
                                _fun110046_ip = 280;
                                continue _fun110046
                            }
                        case 270:
                            var0 = var1.focus;
                            var0 = var0.bind(var1)();
                        case 280:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var4.bind(var6)(var1, var2);
                var _closure2_slot7 = var6;
                var0 = var16[var0];
                var4 = var12.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var1 = _closure1_slot6;
                    var0 = var1.isOpen;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot8 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var6;
                var0 = function() { // Environment: var13
                    var2 = _closure2_slot7;
                    var0 = _closure2_slot8;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var15;
                var1[1] = var5;
                var1[2] = var6;
                var0 = function() { // Environment: var13
                    _fun110049: for (var _fun110049_ip = 0;;) switch (_fun110049_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot28;
                            var1 = var1.SEARCH;
                            var1 = var2 === var1;
                            if (!var1) {
                                _fun110049_ip = 47;
                                continue _fun110049
                            }
                        case 27:
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 1;
                            var1 = var2 === var3;
                        case 47:
                            if (!var1) {
                                _fun110049_ip = 63;
                                continue _fun110049
                            }
                        case 50:
                            var2 = _closure2_slot7;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = var16[var7];
                var4 = var12.bind(var3)(var0);
                var2 = var4.useAnimatedReaction;
                var1 = function() {
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = {};
                var0.sharedState = var5;
                var1.__closure = var0;
                var0 = 17067823098320.0;
                var1.__workletHash = var0;
                var0 = _closure1_slot29;
                var1.__initData = var0;
                var0 = function arg0() {
                    _fun110051: for (var _fun110051_ip = 0;;) switch (_fun110051_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot5;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun110051_ip = 84;
                                continue _fun110051
                            }
                        case 22:
                            var1 = 0.75;
                            if (!(var3 > var1)) {
                                _fun110051_ip = 84;
                                continue _fun110051
                            }
                        case 36:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 24;
                            var1 = var4[var1];
                            var4 = undefined;
                            var5 = var2.bind(var4)(var1);
                            var2 = var5.runOnJS;
                            var1 = _closure2_slot7;
                            var2 = var2.bind(var5)(var1);
                            var1 = true;
                            var1 = var2.bind(var4)(var1);
                            _fun110051_ip = 155;
                            continue _fun110051;
                        case 84:
                            var2 = _closure2_slot5;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun110051_ip = 106;
                                continue _fun110051
                            }
                        case 100:
                            var2 = 0;
                            var1 = var3 <= var2;
                        case 106:
                            if (!var1) {
                                _fun110051_ip = 155;
                                continue _fun110051
                            }
                        case 109:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 24;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.runOnJS;
                            var0 = _closure2_slot7;
                            var1 = var1.bind(var3)(var0);
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 155:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = {};
                var5.keyboardShown = var17;
                var7 = var16[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.runOnJS;
                var5.runOnJS = var7;
                var5.setFocused = var6;
                var0.__closure = var5;
                var5 = 3784684686013.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot30;
                var0.__initData = var5;
                var0 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot26;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var8.header;
                var0.style = var4;
                var4 = _closure1_slot28;
                var4 = var4.SEARCH;
                if (!(var15 !== var4)) {
                    _fun110043_ip = 737;
                    continue _fun110043
                }
            case 527:
                var4 = _closure1_slot28;
                var4 = var4.MEMBERS;
                if (!(var15 !== var4)) {
                    _fun110043_ip = 660;
                    continue _fun110043
                }
            case 541:
                var4 = _closure1_slot28;
                var4 = var4.NOTIFICATIONS;
                if (!(var15 !== var4)) {
                    _fun110043_ip = 583;
                    continue _fun110043
                }
            case 555:
                var6 = _closure1_slot25;
                var5 = _closure1_slot39;
                var4 = {};
                var7 = 'Dev Tools';
                var4.text = var7;
                var5 = var6.bind(var3)(var5, var4);
                _fun110043_ip = 658;
                continue _fun110043;
            case 583:
                var7 = _closure1_slot25;
                var6 = _closure1_slot39;
                var4 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 27;
                var16 = var19[var12];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.HcoRu0;
                var12 = var16.bind(var17)(var12);
                var4.text = var12;
                var5 = var7.bind(var3)(var6, var4);
            case 658:
                _fun110043_ip = 735;
                continue _fun110043;
            case 660:
                var7 = _closure1_slot25;
                var6 = _closure1_slot39;
                var4 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 27;
                var16 = var19[var12];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["9Oq93m"];
                var12 = var16.bind(var17)(var12);
                var4.text = var12;
                var5 = var7.bind(var3)(var6, var4);
            case 735:
                _fun110043_ip = 799;
                continue _fun110043;
            case 737:
                var7 = _closure1_slot25;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 26;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.SearchField;
                var4 = {
                    'size': 'md',
                    'returnKeyType': 'done',
                    'ref': null,
                    'onChange': null,
                    'autoComplete': 'off',
                    'spellCheck': false,
                    'autoFocus': false
                };
                var4.ref = var11;
                var4.onChange = var9;
                var5 = var7.bind(var3)(var6, var4);
            case 799:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot26;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.tabs;
                var5.style = var8;
                var9 = _closure1_slot25;
                var12 = _closure1_slot38;
                var8 = {};
                var11 = function arg0() {
                    var3 = _closure1_slot25;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 28;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FlashIcon;
                    var0 = {};
                    var4 = 'sm';
                    var0.size = var4;
                    var4 = arg0;
                    var0.color = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8.icon = var11;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 27;
                var11 = var21[var17];
                var11 = var20.bind(var3)(var11);
                var18 = var11.intl;
                var16 = var18.string;
                var11 = var21[var17];
                var11 = var20.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.JqV7IC;
                var11 = var16.bind(var18)(var11);
                var8.accessibilityLabel = var11;
                var11 = function() {
                    _fun110053: for (var _fun110053_ip = 0;;) switch (_fun110053_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var0 = _closure1_slot28;
                            var2 = var0.SEARCH;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110053_ip = 52;
                                continue _fun110053
                            }
                        case 42:
                            var1 = var2.focus;
                            var1 = var1.bind(var2)();
                        case 52:
                            return var0;
                    }
                };
                var8.onPress = var11;
                var16 = _closure1_slot28;
                var11 = var16.SEARCH;
                var11 = var15 === var11;
                var8.selected = var11;
                var9 = var9.bind(var3)(var12, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot25;
                var9 = {};
                var18 = function arg0() {
                    var3 = _closure1_slot25;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 29;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.BellIcon;
                    var0 = {};
                    var4 = 'sm';
                    var0.size = var4;
                    var4 = arg0;
                    var0.color = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9.icon = var18;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.HcoRu0;
                var17 = var18.bind(var19)(var17);
                var9.accessibilityLabel = var17;
                var17 = function() {
                    _fun110055: for (var _fun110055_ip = 0;;) switch (_fun110055_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var0 = _closure1_slot28;
                            var2 = var0.NOTIFICATIONS;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110055_ip = 52;
                                continue _fun110055
                            }
                        case 42:
                            var1 = var2.blur;
                            var1 = var1.bind(var2)();
                        case 52:
                            return var0;
                    }
                };
                var9.onPress = var17;
                var16 = var16.NOTIFICATIONS;
                var16 = var15 === var16;
                var9.selected = var16;
                var9 = var11.bind(var3)(var12, var9);
                var8[1] = var9;
                var9 = null;
                if (!var10) {
                    _fun110043_ip = 1124;
                    continue _fun110043
                }
            case 1057:
                var12 = _closure1_slot25;
                var11 = _closure1_slot38;
                var10 = {};
                var16 = function arg0() {
                    var3 = _closure1_slot25;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 30;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.StaffBadgeIcon;
                    var0 = {};
                    var4 = 'sm';
                    var0.size = var4;
                    var4 = arg0;
                    var0.color = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10.icon = var16;
                var16 = 'Dev Tools';
                var10.accessibilityLabel = var16;
                var14 = _closure1_slot28;
                var14 = var14.DEV_TOOLS;
                var14 = var15 === var14;
                var10.selected = var14;
                var13 = function() {
                    _fun110057: for (var _fun110057_ip = 0;;) switch (_fun110057_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 31;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun110057_ip = 62;
                                continue _fun110057
                            }
                        case 38:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot28;
                            var2 = var2.DEV_TOOLS;
                            var2 = var3.bind(var0)(var2);
                            _fun110057_ip = 112;
                            continue _fun110057;
                        case 62:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 32;
                            var2 = var3[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.navigateToDevTools;
                            var2 = var2.bind(var4)();
                            var2 = _closure1_slot1;
                            var1 = 33;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.bind(var0)();
                        case 112:
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110057_ip = 140;
                                continue _fun110057
                            }
                        case 130:
                            var1 = var2.blur;
                            var1 = var1.bind(var2)();
                        case 140:
                            return var0;
                    }
                };
                var10.onPress = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1124:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot31 = var3;
    var3 = new Array(0);
    var _closure1_slot32 = var3;
    var7 = 37;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AutocompleterResultTypes;
    var8 = var3.GUILD;
    var3 = new Array(5);
    var3[0] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AutocompleterResultTypes;
    var8 = var8.TEXT_CHANNEL;
    var3[1] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AutocompleterResultTypes;
    var8 = var8.GROUP_DM;
    var3[2] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.AutocompleterResultTypes;
    var8 = var8.VOICE_CHANNEL;
    var3[3] = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AutocompleterResultTypes;
    var7 = var7.USER;
    var3[4] = var7;
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = 'function LaunchPadTsx3(){const{sharedState}=this.__closure;return sharedState.get()===0;}';
    var3.code = var7;
    var _closure1_slot34 = var3;
    var3 = {};
    var7 = 'function LaunchPadTsx4(hidden,prevHidden){const{runOnJS,clearQuery,cancelTimeout}=this.__closure;if(hidden===prevHidden)return;if(hidden&&hidden!==prevHidden){runOnJS(clearQuery)();}else if(!hidden&&hidden!==prevHidden){runOnJS(cancelTimeout)();}}';
    var3.code = var7;
    var _closure1_slot35 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110058: for (var _fun110058_ip = 0;;) switch (_fun110058_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.visible;
                var11 = var1.sharedState;
                var1 = _closure1_slot27;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var5 = false;
                var2 = var1.bind(var2)(var5);
                var1 = _closure1_slot3;
                var7 = 2;
                var1 = var1.bind(var3)(var2, var7);
                var6 = 0;
                var17 = var1[var6];
                var4 = 1;
                var1 = var1[var4];
                var _closure2_slot0 = var1;
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var16 = var8.bind(var9)(var2, var1);
                var2 = _closure1_slot4;
                var1 = var2.useRef;
                var15 = null;
                var25 = var1.bind(var2)(var15);
                var1 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot4;
                    var3 = var5.useState;
                    var2 = '';
                    var3 = var3.bind(var5)(var2);
                    var2 = _closure1_slot3;
                    var9 = undefined;
                    var7 = 2;
                    var3 = var2.bind(var9)(var3, var7);
                    var6 = 0;
                    var2 = var3[var6];
                    var8 = 1;
                    var3 = var3[var8];
                    var _closure3_slot1 = var3;
                    var10 = _closure1_slot4;
                    var5 = var10.useState;
                    var3 = _closure1_slot32;
                    var5 = var5.bind(var10)(var3);
                    var3 = _closure1_slot3;
                    var5 = var3.bind(var9)(var5, var7);
                    var3 = var5[var6];
                    var5 = var5[var8];
                    var _closure3_slot2 = var5;
                    var10 = _closure1_slot4;
                    var7 = var10.useState;
                    var5 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 40;
                        var1 = var3[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var8 = _closure1_slot33;
                        var2 = {};
                        var0 = true;
                        var2.frecencyBoosters = var0;
                        var0 = var4.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var9 = function(arg0, arg1) { // Environment: var0
                            _fun110063: for (var _fun110063_ip = 0;;) switch (_fun110063_ip) {
                                case 0:
                                    var1 = arg1;
                                    var0 = var1.trim;
                                    var1 = var0.bind(var1)();
                                    var0 = var1.trim;
                                    var1 = var0.bind(var1)();
                                    var0 = '';
                                    if (!(var0 !== var1)) {
                                        _fun110063_ip = 50;
                                        continue _fun110063
                                    }
                                case 31:
                                    var2 = _closure3_slot2;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    _fun110063_ip = 71;
                                    continue _fun110063;
                                case 50:
                                    var2 = _closure3_slot2;
                                    var1 = _closure1_slot32;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 71:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var10 = var1;
                        var7 = undefined;
                        var6 = var2;
                        var0 = new var10[var4](var9, var8, var7, var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var7 = var7.bind(var10)(var5);
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var9)(var7, var8);
                    var6 = var5[var6];
                    var _closure3_slot3 = var6;
                    var9 = _closure1_slot4;
                    var8 = var9.useEffect;
                    var7 = new Array(1);
                    var7[0] = var6;
                    var5 = function() { // Environment: var0
                        var0 = function() { // Environment: var0
                            var1 = _closure3_slot3;
                            var0 = var1.clean;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        return var0;
                    };
                    var5 = var8.bind(var9)(var5, var7);
                    var9 = _closure1_slot4;
                    var8 = var9.useEffect;
                    var7 = new Array(1);
                    var7[0] = var6;
                    var5 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 41;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.addRouteChangeListener;
                        var0 = function() { // Environment: var0
                            _fun110067: for (var _fun110067_ip = 0;;) switch (_fun110067_ip) {
                                case 0:
                                    var2 = global;
                                    var4 = var2.Set;
                                    var3 = _closure1_slot15;
                                    var1 = var3.getId;
                                    var5 = var1.bind(var3)();
                                    var1 = var2.HermesInternal;
                                    var3 = var1.concat;
                                    var1 = 'user:';
                                    var3 = var3.bind(var1)(var5);
                                    var1 = new Array(1);
                                    var1[0] = var3;
                                    var3 = var4.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var8 = var3;
                                    var7 = var1;
                                    var1 = new var8[var4](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var3;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 35;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.getSelectedGuildFromRoute;
                                    var5 = var3.bind(var4)();
                                    var3 = null;
                                    if (!(var3 != var5)) {
                                        _fun110067_ip = 148;
                                        continue _fun110067
                                    }
                                case 116:
                                    var3 = var1.add;
                                    var2 = var2.HermesInternal;
                                    var4 = var2.concat;
                                    var2 = 'guild:';
                                    var2 = var4.bind(var2)(var5);
                                    var2 = var3.bind(var1)(var2);
                                case 148:
                                    var4 = _closure3_slot3;
                                    var3 = var4.setOptions;
                                    var2 = {};
                                    var2.blacklist = var1;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5 = var8.bind(var9)(var5, var7);
                    var8 = _closure1_slot4;
                    var7 = var8.useEffect;
                    var5 = new Array(2);
                    var5[0] = var4;
                    var5[1] = var6;
                    var4 = function() { // Environment: var0
                        _fun110068: for (var _fun110068_ip = 0;;) switch (_fun110068_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = _closure3_slot3;
                                if (var0) {
                                    _fun110068_ip = 26;
                                    continue _fun110068
                                }
                            case 14:
                                var0 = var1.pause;
                                var0 = var0.bind(var1)();
                                _fun110068_ip = 36;
                                continue _fun110068;
                            case 26:
                                var0 = var1.resume;
                                var0 = var0.bind(var1)();
                            case 36:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var7.bind(var8)(var4, var5);
                    var5 = _closure1_slot4;
                    var4 = var5.useCallback;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var2 = _closure3_slot1;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var3);
                        var2 = _closure3_slot3;
                        var1 = var2.search;
                        var1 = var1.bind(var2)(var3);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var0, var1);
                    var0 = {};
                    var0.queryResults = var3;
                    var0.query = var2;
                    var0.updateQuery = var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var20);
                var12 = var1.query;
                var _closure2_slot1 = var12;
                var26 = var1.updateQuery;
                var13 = var1.queryResults;
                var2 = _closure1_slot41;
                var1 = {};
                var8 = var12.trim;
                var8 = var8.bind(var12)();
                var8 = var8.length;
                var8 = var8 > var6;
                var1.disabled = var8;
                var1.visible = var20;
                var1 = var2.bind(var3)(var1);
                var19 = var1.initialResults;
                var23 = var1.unreadPrivateChannelIds;
                var22 = var1.unreadGuilds;
                var21 = var1.guildHistory;
                var18 = var1.selectedUnreadGuild;
                var24 = var1.setSelectedUnreadGuild;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var2 = var1.bind(var2)(var5);
                var1 = _closure1_slot3;
                var2 = var1.bind(var3)(var2, var7);
                var1 = var2[var6];
                var _closure2_slot2 = var1;
                var8 = var2[var4];
                var _closure2_slot3 = var8;
                var9 = _closure1_slot4;
                var5 = var9.useState;
                var2 = _closure1_slot28;
                var2 = var2.SEARCH;
                var5 = var5.bind(var9)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var5, var7);
                var9 = var2[var6];
                var27 = var2[var4];
                var2 = function() {
                    var2 = _closure1_slot27;
                    var3 = undefined;
                    var4 = var2.bind(var3)();
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 38;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.bind(var3)();
                    var7 = var2.height;
                    var _closure3_slot1 = var7;
                    var2 = 39;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.bind(var3)();
                    var6 = var2.top;
                    var _closure3_slot2 = var6;
                    var5 = var2.bottom;
                    var _closure3_slot3 = var5;
                    var3 = _closure1_slot4;
                    var2 = var3.useMemo;
                    var1 = new Array(4);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var0 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        var1 = var0.wrapper;
                        var0 = new Array(2);
                        var0[0] = var1;
                        var1 = {};
                        var4 = _closure3_slot1;
                        var3 = _closure3_slot2;
                        var3 = var4 - var3;
                        var2 = _closure3_slot3;
                        var3 = var3 - var2;
                        var2 = 16;
                        var2 = var3 - var2;
                        var1.maxHeight = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4 = var2.bind(var3)();
                var7 = _closure1_slot4;
                var5 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var8;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun110072: for (var _fun110072_ip = 0;;) switch (_fun110072_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.length;
                            var2 = 0;
                            if (!(var1 > var2)) {
                                _fun110072_ip = 83;
                                continue _fun110072
                            }
                        case 18:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun110072_ip = 83;
                                continue _fun110072
                            }
                        case 25:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 42;
                            var3 = var4[var3];
                            var4 = undefined;
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.track;
                            var1 = _closure1_slot24;
                            var1 = var1.LAUNCHPAD_SEARCHED;
                            var1 = var3.bind(var5)(var1);
                            var3 = _closure2_slot3;
                            var1 = true;
                            var1 = var3.bind(var4)(var1);
                            _fun110072_ip = 109;
                            continue _fun110072;
                        case 83:
                            var1 = _closure2_slot1;
                            var1 = var1.length;
                            if (!(var2 === var1)) {
                                _fun110072_ip = 109;
                                continue _fun110072
                            }
                        case 96:
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var7)(var1, var2);
                var0 = function arg0, arg1, arg2() {
                    var6 = arg0;
                    var0 = arg1;
                    var12 = arg2;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var0;
                    var _closure3_slot2 = var12;
                    var4 = _closure1_slot4;
                    var3 = var4.useRef;
                    var2 = -1;
                    var2 = var3.bind(var4)(var2);
                    var _closure3_slot3 = var2;
                    var4 = _closure1_slot4;
                    var3 = var4.useCallback;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var0;
                    var0 = function() { // Environment: var1
                        var1 = global;
                        var4 = var1.clearTimeout;
                        var2 = _closure3_slot3;
                        var3 = var2.current;
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var4 = var1.setTimeout;
                        var3 = function() { // Environment: var1
                            _fun110075: for (var _fun110075_ip = 0;;) switch (_fun110075_ip) {
                                case 0:
                                    var0 = global;
                                    var3 = var0.clearTimeout;
                                    var0 = _closure3_slot3;
                                    var2 = var0.current;
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var2 = _closure3_slot0;
                                    var3 = '';
                                    var2 = var2.bind(var0)(var3);
                                    var1 = _closure3_slot1;
                                    var2 = var1.current;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun110075_ip = 66;
                                        continue _fun110075
                                    }
                                case 55:
                                    var1 = var2.setText;
                                    var1 = var1.bind(var2)(var3);
                                case 66:
                                    return var0;
                            }
                        };
                        var1 = 100;
                        var1 = var4.bind(var0)(var3, var1);
                        var2.current = var1;
                        return var0;
                    };
                    var8 = var3.bind(var4)(var0, var2);
                    var _closure3_slot4 = var8;
                    var4 = _closure1_slot4;
                    var3 = var4.useCallback;
                    var2 = function() { // Environment: var1
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure3_slot3;
                        var1 = var0.current;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = new Array(0);
                    var7 = var3.bind(var4)(var2, var0);
                    var _closure3_slot5 = var7;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = function() { // Environment: var1
                        var0 = function() { // Environment: var0
                            var0 = global;
                            var2 = var0.clearTimeout;
                            var0 = _closure3_slot3;
                            var1 = var0.current;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = new Array(0);
                    var0 = var3.bind(var4)(var2, var0);
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 24;
                    var2 = var11[var9];
                    var0 = undefined;
                    var4 = var10.bind(var0)(var2);
                    var3 = var4.useAnimatedReaction;
                    var2 = function() {
                        var1 = _closure3_slot2;
                        var0 = var1.get;
                        var1 = var0.bind(var1)();
                        var0 = 0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var6 = {};
                    var6.sharedState = var12;
                    var2.__closure = var6;
                    var6 = 7315121230879.0;
                    var2.__workletHash = var6;
                    var6 = _closure1_slot34;
                    var2.__initData = var6;
                    var1 = function arg0, arg1() {
                        _fun110080: for (var _fun110080_ip = 0;;) switch (_fun110080_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var0 = var2 !== var1;
                                if (!var0) {
                                    _fun110080_ip = 126;
                                    continue _fun110080
                                }
                            case 13:
                                if (!var2) {
                                    _fun110080_ip = 19;
                                    continue _fun110080
                                }
                            case 16:
                                if (var0) {
                                    _fun110080_ip = 80;
                                    continue _fun110080
                                }
                            case 19:
                                var0 = var2;
                                if (var0) {
                                    _fun110080_ip = 29;
                                    continue _fun110080
                                }
                            case 25:
                                var0 = var2 === var1;
                            case 29:
                                if (var0) {
                                    _fun110080_ip = 126;
                                    continue _fun110080
                                }
                            case 32:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 24;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure3_slot5;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                                _fun110080_ip = 126;
                                continue _fun110080;
                            case 80:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 24;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure3_slot4;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 126:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = {};
                    var9 = var11[var9];
                    var9 = var10.bind(var0)(var9);
                    var9 = var9.runOnJS;
                    var6.runOnJS = var9;
                    var6.clearQuery = var8;
                    var6.cancelTimeout = var7;
                    var1.__closure = var6;
                    var6 = 6379173436444.0;
                    var1.__workletHash = var6;
                    var5 = _closure1_slot35;
                    var1.__initData = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var0.bind(var3)(var26, var25, var11);
                var0 = var12.trim;
                var0 = var0.bind(var12)();
                var0 = var0.length;
                var8 = var0 > var6;
                var2 = _closure1_slot26;
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var4;
                var7 = _closure1_slot25;
                var5 = _closure1_slot31;
                var4 = {};
                var4.tab = var9;
                var4.setTab = var27;
                var4.updateQuery = var26;
                var4.searchRef = var25;
                var4.sharedState = var11;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var12.trim;
                var5 = var5.bind(var12)();
                var5 = var5.length;
                var5 = var6 === var5;
                if (!var5) {
                    _fun110058_ip = 490;
                    continue _fun110058
                }
            case 476:
                var6 = _closure1_slot28;
                var6 = var6.SEARCH;
                var5 = var9 === var6;
            case 490:
                if (!var5) {
                    _fun110058_ip = 555;
                    continue _fun110058
                }
            case 493:
                var11 = _closure1_slot25;
                var7 = _closure1_slot1;
                var25 = _closure1_slot2;
                var6 = 43;
                var6 = var25[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.selectedGuildId = var18;
                var6.setSelectedGuild = var24;
                var6.unreadPrivateChannelIds = var23;
                var6.unreadGuilds = var22;
                var6.guildHistory = var21;
                var6.visible = var20;
                var5 = var11.bind(var3)(var7, var6);
            case 555:
                var4[1] = var5;
                var7 = _closure1_slot25;
                var6 = _closure1_slot5;
                var5 = {};
                var10 = var10.launchPadContent;
                var5.style = var10;
                var10 = _closure1_slot28;
                var10 = var10.SEARCH;
                if (!(var9 === var10)) {
                    _fun110058_ip = 599;
                    continue _fun110058
                }
            case 593:
                if (var8) {
                    _fun110058_ip = 857;
                    continue _fun110058
                }
            case 599:
                var8 = _closure1_slot28;
                var8 = var8.SEARCH;
                if (!(var9 !== var8)) {
                    _fun110058_ip = 746;
                    continue _fun110058
                }
            case 616:
                var8 = _closure1_slot28;
                var8 = var8.DEV_TOOLS;
                if (!(var9 !== var8)) {
                    _fun110058_ip = 712;
                    continue _fun110058
                }
            case 630:
                var8 = _closure1_slot28;
                var8 = var8.MEMBERS;
                if (!(var9 !== var8)) {
                    _fun110058_ip = 678;
                    continue _fun110058
                }
            case 644:
                var10 = _closure1_slot25;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 47;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8 = var10.bind(var3)(var9, var8);
                _fun110058_ip = 710;
                continue _fun110058;
            case 678:
                var11 = _closure1_slot25;
                var10 = _closure1_slot1;
                var20 = _closure1_slot2;
                var9 = 46;
                var9 = var20[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var8 = var11.bind(var3)(var10, var9);
            case 710:
                _fun110058_ip = 744;
                continue _fun110058;
            case 712:
                var11 = _closure1_slot25;
                var10 = _closure1_slot1;
                var20 = _closure1_slot2;
                var9 = 45;
                var9 = var20[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var8 = var11.bind(var3)(var10, var9);
            case 744:
                _fun110058_ip = 855;
                continue _fun110058;
            case 746:
                var11 = _closure1_slot25;
                var10 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 44;
                var9 = var20[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.InitialResults;
                var9 = {};
                var9.selectedGuildId = var18;
                var20 = var15 == var19;
                var18 = undefined;
                if (var20) {
                    _fun110058_ip = 798;
                    continue _fun110058
                }
            case 792:
                var18 = var19.unreads;
            case 798:
                if (!(var15 == var18)) {
                    _fun110058_ip = 806;
                    continue _fun110058
                }
            case 802:
                var18 = _closure1_slot32;
            case 806:
                var9.unreads = var18;
                var20 = var15 == var19;
                var18 = undefined;
                if (var20) {
                    _fun110058_ip = 826;
                    continue _fun110058
                }
            case 820:
                var18 = var19.channelHistory;
            case 826:
                if (!(var15 == var18)) {
                    _fun110058_ip = 834;
                    continue _fun110058
                }
            case 830:
                var18 = _closure1_slot32;
            case 834:
                var9.history = var18;
                var9.expandedHistory = var17;
                var9.toggleExpandedHistory = var16;
                var8 = var11.bind(var3)(var10, var9);
            case 855:
                _fun110058_ip = 913;
                continue _fun110058;
            case 857:
                var11 = _closure1_slot25;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 44;
                var9 = var16[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.SearchResults;
                var9 = {};
                if (!(var15 == var13)) {
                    _fun110058_ip = 897;
                    continue _fun110058
                }
            case 893:
                var13 = _closure1_slot32;
            case 897:
                var9.results = var13;
                var9.query = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 913:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 48;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/LaunchPad.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3140, 4549, 13019, 4550, 1376, 1216, 1372, 5267, 8659, 12532, 3947, 4376, 4303, 3521, 660, 33, 671, 1297, 4904, 3941, 566, 3720, 3718, 7032, 1234, 7878, 8192, 11131, 478, 11391, 14179, 6653, 3919, 6654, 6645, 1464, 1568, 6646, 12881, 795, 14180, 14187, 11392, 14206, 14207, 2]);