// modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun101869: for (var _fun101869_ip = 0;;) switch (_fun101869_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101869_ip = 46;
                    continue _fun101869
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun101869_ip = 55;
                    continue _fun101869
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun101869_ip = 345;
                    continue _fun101869
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101869_ip = 323;
                    continue _fun101869
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101869_ip = 283;
                    continue _fun101869
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101869_ip = 270;
                    continue _fun101869
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
                    _fun101869_ip = 163;
                    continue _fun101869
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun101869_ip = 179;
                    continue _fun101869
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101869_ip = 249;
                    continue _fun101869
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101869_ip = 249;
                    continue _fun101869
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101869_ip = 234;
                    continue _fun101869
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101869_ip = 247;
                    continue _fun101869
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun101869_ip = 265;
                continue _fun101869;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun101869_ip = 283;
                continue _fun101869;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun101869_ip = 323;
                    continue _fun101869
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
                    _fun101869_ip = 330;
                    continue _fun101869
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101870: for (var _fun101870_ip = 0;;) switch (_fun101870_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101870_ip = 56;
                                continue _fun101870
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
                            _fun101870_ip = 67;
                            continue _fun101870;
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
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun101871: for (var _fun101871_ip = 0;;) switch (_fun101871_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101871_ip = 23;
                    continue _fun101871
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101871_ip = 33;
                    continue _fun101871
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
                    _fun101871_ip = 70;
                    continue _fun101871
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101871_ip = 55;
                    continue _fun101871
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun101872: for (var _fun101872_ip = 0;;) switch (_fun101872_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 13;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.SECTION_INDEX_CHANNEL_NOTICES;
                if (!(var2 !== var1)) {
                    _fun101872_ip = 69;
                    continue _fun101872
                }
            case 38:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.SECTION_INDEX_GUILD_ACTIONS;
                if (!(var0 !== var1)) {
                    _fun101872_ip = 69;
                    continue _fun101872
                }
            case 65:
                var0 = false;
                return var0;
            case 69:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun101873: for (var _fun101873_ip = 0;;) switch (_fun101873_ip) {
            case 0:
                var4 = arg0;
                var1 = arg3;
                var3 = var4.getChannelFromSectionRow;
                var2 = arg1;
                var0 = arg2;
                var0 = var3.bind(var4)(var2, var0);
                var10 = null;
                if (!(var10 != var0)) {
                    _fun101873_ip = 380;
                    continue _fun101873
                }
            case 33:
                var2 = var0.channel;
                var0 = _closure1_slot17;
                var0 = var0.MENTION;
                if (!(var1 !== var0)) {
                    _fun101873_ip = 267;
                    continue _fun101873
                }
            case 58:
                var0 = _closure1_slot17;
                var0 = var0.UNREAD;
                var0 = var1 === var0;
                if (!var0) {
                    _fun101873_ip = 265;
                    continue _fun101873
                }
            case 78:
                var6 = var2.record;
                var3 = _closure1_slot21;
                var1 = var2.threadIds;
                var8 = undefined;
                var7 = var3.bind(var8)(var1);
                var3 = var7.bind(var8)();
                var1 = var3.done;
                var4 = var3;
                if (var1) {
                    _fun101873_ip = 179;
                    continue _fun101873
                }
            case 116:
                var11 = var4.value;
                var3 = _closure1_slot7;
                var1 = var3.getChannel;
                var1 = var1.bind(var3)(var11);
                if (!(var10 != var1)) {
                    _fun101873_ip = 164;
                    continue _fun101873
                }
            case 139:
                var11 = _closure1_slot9;
                var3 = var11.hasUnread;
                var1 = var1.id;
                var3 = var3.bind(var11)(var1);
                var1 = true;
                if (var3) {
                    _fun101873_ip = 262;
                    continue _fun101873
                }
            case 164:
                var11 = var7.bind(var8)();
                var3 = var11.done;
                var4 = var11;
                if (!var3) {
                    _fun101873_ip = 116;
                    continue _fun101873
                }
            case 179:
                var3 = var6.isGuildVocal;
                var3 = var3.bind(var6)();
                var3 = !var3;
                if (!var3) {
                    _fun101873_ip = 204;
                    continue _fun101873
                }
            case 195:
                var4 = var2.isMuted;
                var3 = !var4;
            case 204:
                if (!var3) {
                    _fun101873_ip = 227;
                    continue _fun101873
                }
            case 207:
                var7 = _closure1_slot9;
                var5 = var7.hasUnread;
                var4 = var6.id;
                var3 = var5.bind(var7)(var4);
            case 227:
                if (!var3) {
                    _fun101873_ip = 259;
                    continue _fun101873
                }
            case 230:
                var5 = _closure1_slot10;
                var4 = var5.resolveUnreadSetting;
                var5 = var4.bind(var5)(var6);
                var4 = _closure1_slot13;
                var4 = var4.ALL_MESSAGES;
                var3 = var5 === var4;
            case 259:
                var1 = var3;
            case 262:
                var0 = var1;
            case 265:
                _fun101873_ip = 378;
                continue _fun101873;
            case 267:
                var4 = _closure1_slot9;
                var3 = var4.getMentionCount;
                var1 = var2.id;
                var1 = var3.bind(var4)(var1);
                var8 = 0;
                var3 = var1 > var8;
                var1 = true;
                if (var3) {
                    _fun101873_ip = 375;
                    continue _fun101873
                }
            case 298:
                var3 = _closure1_slot21;
                var2 = var2.threadIds;
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var1 = false;
                if (var2) {
                    _fun101873_ip = 375;
                    continue _fun101873
                }
            case 329:
                var11 = var3.value;
                var10 = _closure1_slot9;
                var2 = var10.getMentionCount;
                var2 = var2.bind(var10)(var11);
                var2 = var2 > var8;
                var1 = true;
                if (var2) {
                    _fun101873_ip = 375;
                    continue _fun101873
                }
            case 358:
                var10 = var5.bind(var6)();
                var2 = var10.done;
                var3 = var10;
                var1 = false;
                if (!var2) {
                    _fun101873_ip = 329;
                    continue _fun101873
                }
            case 375:
                var0 = var1;
            case 378:
                return var0;
            case 380:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun101874: for (var _fun101874_ip = 0;;) switch (_fun101874_ip) {
            case 0:
                var1 = arg0;
                var16 = arg1;
                var3 = arg2;
                var6 = var16.id;
                var4 = _closure1_slot8;
                var2 = var4.getMentionCount;
                var2 = var2.bind(var4)(var6);
                var15 = 0;
                var4 = var2 > var15;
                var5 = _closure1_slot8;
                var2 = var5.hasUnread;
                var2 = var2.bind(var5)(var6);
                if (var4) {
                    _fun101874_ip = 73;
                    continue _fun101874
                }
            case 56:
                var14 = null;
                if (!var2) {
                    _fun101874_ip = 71;
                    continue _fun101874
                }
            case 61:
                var2 = _closure1_slot17;
                var14 = var2.UNREAD;
            case 71:
                _fun101874_ip = 83;
                continue _fun101874;
            case 73:
                var2 = _closure1_slot17;
                var14 = var2.MENTION;
            case 83:
                var13 = null;
                if (!(var13 != var14)) {
                    _fun101874_ip = 1238;
                    continue _fun101874
                }
            case 92:
                var2 = var1.containerSize;
                if (!(var15 !== var2)) {
                    _fun101874_ip = 1232;
                    continue _fun101874
                }
            case 105:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var12 = undefined;
                var4 = var4.bind(var12)(var2);
                var2 = var4.getFontScale;
                var4 = var2.bind(var4)();
                var2 = _closure1_slot11;
                var4 = var2.bind(var12)(var4);
                var2 = 2;
                var6 = var4 / var2;
                var4 = var1.scrollPosValue;
                var2 = var4.get;
                var4 = var2.bind(var4)();
                var5 = var1.getSectionItemFromPosition;
                var2 = var3 + var4;
                var2 = var2 + var6;
                var2 = var5.bind(var1)(var2);
                var5 = var2.item;
                var6 = var13 == var5;
                var2 = undefined;
                if (var6) {
                    _fun101874_ip = 207;
                    continue _fun101874
                }
            case 201:
                var2 = var5.layoutStart;
            case 207:
                var7 = var4;
                if (!(var13 != var2)) {
                    _fun101874_ip = 217;
                    continue _fun101874
                }
            case 214:
                var7 = var2;
            case 217:
                var2 = var1.containerSize;
                var2 = var7 + var2;
                var3 = var2 - var3;
                var2 = arg3;
                var6 = var3 - var2;
                var18 = {
                    'section': 4294967295,
                    'item': 4294967295
                };
                var11 = -1;
                var2 = _closure1_slot21;
                var1 = var1.state;
                var1 = var1.items;
                var5 = var2.bind(var12)(var1);
                var2 = var5.bind(var12)();
                var1 = var2.done;
                var4 = 15;
                var3 = var2;
                var2 = null;
                var10 = null;
                if (var1) {
                    _fun101874_ip = 575;
                    continue _fun101874
                }
            case 302:
                var9 = var3.value;
                var1 = var9.layoutStart;
                var8 = var2;
                if (!(!(var1 < var7))) {
                    _fun101874_ip = 551;
                    continue _fun101874
                }
            case 323:
                var17 = var9.type;
                var19 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var19.bind(var12)(var1);
                var1 = var1.FastListItemTypes;
                var1 = var1.ITEM;
                if (!(var17 !== var1)) {
                    _fun101874_ip = 405;
                    continue _fun101874
                }
            case 361:
                var17 = var9.type;
                var19 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var19.bind(var12)(var1);
                var1 = var1.FastListItemTypes;
                var1 = var1.SECTION;
                var8 = var2;
                if (!(var17 === var1)) {
                    _fun101874_ip = 551;
                    continue _fun101874
                }
            case 405:
                var1 = var9.layoutStart;
                var10 = var2;
                if (!(!(var1 > var6))) {
                    _fun101874_ip = 575;
                    continue _fun101874
                }
            case 421:
                var1 = var18.section;
                if (!(var11 === var1)) {
                    _fun101874_ip = 452;
                    continue _fun101874
                }
            case 430:
                var1 = var9.section;
                var18.section = var1;
                var1 = var9.item;
                var18.item = var1;
            case 452:
                var17 = var9.type;
                var19 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var19.bind(var12)(var1);
                var1 = var1.FastListItemTypes;
                var1 = var1.ITEM;
                var8 = var9;
                if (!(var17 === var1)) {
                    _fun101874_ip = 551;
                    continue _fun101874
                }
            case 493:
                var17 = _closure1_slot23;
                var1 = var9.section;
                var1 = var17.bind(var12)(var1);
                var8 = var2;
                if (var1) {
                    _fun101874_ip = 551;
                    continue _fun101874
                }
            case 513:
                var19 = _closure1_slot24;
                var38 = var9.section;
                var37 = var9.item;
                var40 = undefined;
                var39 = var16;
                var36 = var14;
                var1 = var40[var19](var39, var38, var37, var36, var35);
                var8 = var9;
                if (!var1) {
                    _fun101874_ip = 551;
                    continue _fun101874
                }
            case 545:
                var1 = _closure1_slot18;
                return var1;
            case 551:
                var9 = var5.bind(var12)();
                var1 = var9.done;
                var2 = var8;
                var3 = var9;
                var10 = var2;
                if (!var1) {
                    _fun101874_ip = 302;
                    continue _fun101874
                }
            case 575:
                var1 = var16.getSections;
                var9 = var1.bind(var16)();
                var1 = var9.length;
                var1 = var15 < var1;
                var17 = false;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun101874_ip = 853;
                    continue _fun101874
                }
            case 612:
                var1 = _closure1_slot23;
                var22 = var1.bind(var12)(var6);
                var1 = var6;
                var21 = var17;
                var20 = var3;
                var19 = var2;
                if (var22) {
                    _fun101874_ip = 829;
                    continue _fun101874
                }
            case 639:
                var24 = var9[var1];
                var26 = var15 < var24;
                var25 = 0;
                var22 = var17;
                var23 = 0;
                if (!var26) {
                    _fun101874_ip = 811;
                    continue _fun101874
                }
            case 660:
                var26 = var18.section;
                var26 = var1 > var26;
                var27 = var18.section;
                var29 = var1 === var27;
                var27 = var18.item;
                var28 = var25 >= var27;
                var27 = var25;
                var22 = true;
                var23 = var27;
                var3 = var29;
                var2 = var28;
                if (var26) {
                    _fun101874_ip = 811;
                    continue _fun101874
                }
            case 704:
                if (!var29) {
                    _fun101874_ip = 721;
                    continue _fun101874
                }
            case 707:
                var22 = true;
                var23 = var27;
                var3 = var29;
                var2 = var28;
                if (var2) {
                    _fun101874_ip = 811;
                    continue _fun101874
                }
            case 721:
                var26 = _closure1_slot24;
                var40 = undefined;
                var39 = var16;
                var38 = var1;
                var37 = var27;
                var36 = var14;
                var26 = var40[var26](var39, var38, var37, var36, var35);
                if (var26) {
                    _fun101874_ip = 767;
                    continue _fun101874
                }
            case 746:
                var25 = var27 + 1;
                var22 = var17;
                var3 = var29;
                var2 = var28;
                var23 = var25;
                if (var23 < var24) {
                    _fun101874_ip = 660;
                    continue _fun101874
                }
            case 765:
                _fun101874_ip = 811;
                continue _fun101874;
            case 767:
                var25 = {};
                var26 = {};
                var26.section = var1;
                var26.row = var27;
                var27 = _closure1_slot17;
                var27 = var27.MENTION;
                var27 = var14 === var27;
                var26.isMention = var27;
                var25.beforeItem = var26;
                var25.afterItem = var13;
                return var25;
            case 811:
                var21 = var22;
                var4 = var23;
                var20 = var3;
                var19 = var2;
                var5 = var24;
                if (var21) {
                    _fun101874_ip = 853;
                    continue _fun101874
                }
            case 829:
                var6 = var1 + 1;
                var1 = var9.length;
                var17 = var21;
                var3 = var20;
                var2 = var19;
                if (var6 < var1) {
                    _fun101874_ip = 612;
                    continue _fun101874
                }
            case 853:
                var1 = var9.length;
                var6 = 1;
                var5 = var1 - var6;
                var8 = false;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                var1 = undefined;
                if (!(var5 >= var15)) {
                    _fun101874_ip = 1226;
                    continue _fun101874
                }
            case 882:
                var17 = _closure1_slot23;
                var22 = var17.bind(var12)(var5);
                var21 = var5;
                var20 = var8;
                var19 = var3;
                var18 = var2;
                var17 = var1;
                if (var22) {
                    _fun101874_ip = 1204;
                    continue _fun101874
                }
            case 912:
                var22 = var9[var21];
                var31 = var22 - var6;
                var30 = var3;
                var28 = var2;
                var27 = var1;
                var22 = var8;
                var25 = var30;
                var24 = var28;
                var23 = var27;
                var26 = var31;
                if (!(var26 >= var15)) {
                    _fun101874_ip = 1186;
                    continue _fun101874
                }
            case 951:
                var29 = var31;
                if (!(var13 != var10)) {
                    _fun101874_ip = 1072;
                    continue _fun101874
                }
            case 958:
                var32 = var10.section;
                var35 = var21 < var32;
                var32 = var10.section;
                var34 = var21 === var32;
                var32 = var10.item;
                var33 = var11 === var32;
                var32 = var10.item;
                var32 = var29 <= var32;
                var22 = true;
                var26 = var29;
                var25 = var34;
                var24 = var33;
                var23 = var32;
                if (var35) {
                    _fun101874_ip = 1186;
                    continue _fun101874
                }
            case 1014:
                var30 = var34;
                var28 = var33;
                var27 = var32;
                if (!var34) {
                    _fun101874_ip = 1072;
                    continue _fun101874
                }
            case 1026:
                var22 = true;
                var26 = var29;
                var25 = var34;
                var24 = var33;
                var23 = var32;
                if (var33) {
                    _fun101874_ip = 1186;
                    continue _fun101874
                }
            case 1046:
                var30 = var34;
                var28 = var33;
                var27 = var32;
                var22 = true;
                var26 = var29;
                var25 = var30;
                var24 = var28;
                var23 = var27;
                if (var23) {
                    _fun101874_ip = 1186;
                    continue _fun101874
                }
            case 1072:
                var32 = _closure1_slot24;
                var40 = undefined;
                var39 = var16;
                var38 = var21;
                var37 = var29;
                var36 = var14;
                var32 = var40[var32](var39, var38, var37, var36, var35);
                var35 = var30;
                var34 = var28;
                var33 = var27;
                if (var32) {
                    _fun101874_ip = 1142;
                    continue _fun101874
                }
            case 1106:
                var31 = var29 - 1;
                var30 = var35;
                var28 = var34;
                var27 = var33;
                var22 = var8;
                var25 = var30;
                var24 = var28;
                var23 = var27;
                var26 = var31;
                if (var26 >= var15) {
                    _fun101874_ip = 951;
                    continue _fun101874
                }
            case 1140:
                _fun101874_ip = 1186;
                continue _fun101874;
            case 1142:
                var27 = {};
                var28 = {};
                var28.section = var21;
                var28.row = var29;
                var29 = _closure1_slot17;
                var29 = var29.MENTION;
                var29 = var14 === var29;
                var28.isMention = var29;
                var27.afterItem = var28;
                var27.beforeItem = var13;
                return var27;
            case 1186:
                var20 = var22;
                var4 = var26;
                var19 = var25;
                var18 = var24;
                var17 = var23;
                if (var20) {
                    _fun101874_ip = 1226;
                    continue _fun101874
                }
            case 1204:
                var5 = var21 - 1;
                var8 = var20;
                var3 = var19;
                var2 = var18;
                var1 = var17;
                if (var5 >= var15) {
                    _fun101874_ip = 882;
                    continue _fun101874
                }
            case 1226:
                var1 = _closure1_slot18;
                return var1;
            case 1232:
                var1 = _closure1_slot18;
                return var1;
            case 1238:
                var0 = _closure1_slot18;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot5 = var8;
    var9 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getScaledChannelRowHeight;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useYouBarTotalHeight;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = var9.absoluteFillObject;
    var3.wrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'mention';
    var3.MENTION = var7;
    var7 = 'unread';
    var3.UNREAD = var7;
    var _closure1_slot17 = var3;
    var3 = {
        'beforeItem': null,
        'afterItem': null
    };
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 'function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}';
    var3.code = var7;
    var _closure1_slot20 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun101875: for (var _fun101875_ip = 0;;) switch (_fun101875_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.fastList;
                var _closure2_slot0 = var10;
                var14 = var1.guild;
                var7 = var1.guildChannels;
                var _closure2_slot1 = var7;
                var8 = var1.headerHeight;
                var _closure2_slot2 = var8;
                var1 = var7.id;
                var _closure2_slot3 = var1;
                var13 = _closure1_slot4;
                var3 = var13.useRef;
                var2 = -1;
                var2 = var3.bind(var13)(var2);
                var _closure2_slot4 = var2;
                var2 = var13.useRef;
                var11 = null;
                var2 = var2.bind(var13)(var11);
                var _closure2_slot5 = var2;
                var2 = _closure1_slot12;
                var3 = undefined;
                var2 = var2.bind(var3)();
                var _closure2_slot6 = var2;
                var6 = var13.useState;
                var4 = function() { // Environment: var0
                    var5 = _closure1_slot25;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var7 = _closure2_slot2;
                    var6 = _closure2_slot6;
                    var10 = undefined;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var9 = var6.bind(var13)(var4);
                var6 = _closure1_slot3;
                var4 = 2;
                var6 = var6.bind(var3)(var9, var4);
                var9 = 0;
                var4 = var6[var9];
                var17 = var4.beforeItem;
                var _closure2_slot7 = var17;
                var12 = var4.afterItem;
                var _closure2_slot8 = var12;
                var4 = 1;
                var4 = var6[var4];
                var _closure2_slot9 = var4;
                var6 = var13.useMemo;
                var4 = new Array(4);
                var4[0] = var10;
                var4[1] = var7;
                var4[2] = var8;
                var4[3] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = function() { // Environment: var0
                        var7 = _closure1_slot25;
                        var11 = _closure2_slot0;
                        var10 = _closure2_slot1;
                        var9 = _closure2_slot2;
                        var8 = _closure2_slot6;
                        var0 = undefined;
                        var12 = undefined;
                        var3 = var12[var7](var11, var10, var9, var8, var7);
                        var _closure4_slot0 = var3;
                        var2 = _closure2_slot9;
                        var1 = function(arg0) { // Environment: var1
                            _fun101879: for (var _fun101879_ip = 0;;) switch (_fun101879_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure4_slot0;
                                    var0 = var3;
                                    if (!(var3 !== var2)) {
                                        _fun101879_ip = 169;
                                        continue _fun101879
                                    }
                                case 20:
                                    var5 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var7 = 17;
                                    var2 = var2[var7];
                                    var6 = undefined;
                                    var9 = var5.bind(var6)(var2);
                                    var5 = var3.afterItem;
                                    var2 = null;
                                    var10 = var2 != var5;
                                    var8 = undefined;
                                    if (!var10) {
                                        _fun101879_ip = 65;
                                        continue _fun101879
                                    }
                                case 62:
                                    var8 = var5;
                                case 65:
                                    var5 = _closure4_slot0;
                                    var10 = var5.afterItem;
                                    var11 = var2 != var10;
                                    var5 = undefined;
                                    if (!var11) {
                                        _fun101879_ip = 87;
                                        continue _fun101879
                                    }
                                case 84:
                                    var5 = var10;
                                case 87:
                                    var5 = var9.bind(var6)(var8, var5);
                                    if (!var5) {
                                        _fun101879_ip = 165;
                                        continue _fun101879
                                    }
                                case 96:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var7];
                                    var5 = var5.bind(var6)(var4);
                                    var7 = var3.beforeItem;
                                    var8 = var2 != var7;
                                    var4 = undefined;
                                    if (!var8) {
                                        _fun101879_ip = 131;
                                        continue _fun101879
                                    }
                                case 128:
                                    var4 = var7;
                                case 131:
                                    var7 = _closure4_slot0;
                                    var7 = var7.beforeItem;
                                    var8 = var2 != var7;
                                    var2 = undefined;
                                    if (!var8) {
                                        _fun101879_ip = 153;
                                        continue _fun101879
                                    }
                                case 150:
                                    var2 = var7;
                                case 153:
                                    var2 = var5.bind(var6)(var4, var2);
                                    var0 = var3;
                                    if (var2) {
                                        _fun101879_ip = 169;
                                        continue _fun101879
                                    }
                                case 165:
                                    var0 = _closure4_slot0;
                                case 169:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = 100;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var18 = var6.bind(var13)(var2, var4);
                var _closure2_slot10 = var18;
                var4 = var13.useEffect;
                var2 = new Array(2);
                var2[0] = var18;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.BatchedStoreListener;
                    var2 = _closure1_slot8;
                    var3 = new Array(2);
                    var3[0] = var2;
                    var1 = _closure1_slot9;
                    var3[1] = var1;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = function() { // Environment: var0
                        _fun101881: for (var _fun101881_ip = 0;;) switch (_fun101881_ip) {
                            case 0:
                                var3 = _closure2_slot3;
                                var2 = _closure1_slot9;
                                var1 = var2.getGuildUnreadsSentinel;
                                var2 = var1.bind(var2)(var3);
                                var1 = _closure2_slot5;
                                var1 = var1.current;
                                var1 = var3 === var1;
                                if (!var1) {
                                    _fun101881_ip = 56;
                                    continue _fun101881
                                }
                            case 43:
                                var4 = _closure2_slot4;
                                var4 = var4.current;
                                var1 = var2 === var4;
                            case 56:
                                if (var1) {
                                    _fun101881_ip = 89;
                                    continue _fun101881
                                }
                            case 59:
                                var1 = _closure2_slot5;
                                var1.current = var3;
                                var1 = _closure2_slot4;
                                var1.current = var2;
                                var1 = _closure2_slot10;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 89:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = var2;
                    var6 = var3;
                    var1 = new var7[var4](var6, var5, var4);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var3;
                    var2 = var3.attach;
                    var1 = 'channel-list-unread-bars';
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.detach;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var4.bind(var13)(var1, var2);
                var16 = var10.scrollPosValue;
                var _closure2_slot11 = var16;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var19 = 19;
                var1 = var4[var19];
                var15 = var2.bind(var3)(var1);
                var7 = var15.useAnimatedReaction;
                var6 = function() {
                    var1 = _closure2_slot11;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = {};
                var1.scrollPosValue = var16;
                var6.__closure = var1;
                var1 = 7966775243843.0;
                var6.__workletHash = var1;
                var1 = _closure1_slot19;
                var6.__initData = var1;
                var1 = function arg0, arg1() {
                    _fun101884: for (var _fun101884_ip = 0;;) switch (_fun101884_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            if (!(var1 !== var0)) {
                                _fun101884_ip = 56;
                                continue _fun101884
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var0 = var1[var0];
                            var1 = undefined;
                            var3 = var2.bind(var1)(var0);
                            var2 = var3.runOnJS;
                            var0 = _closure2_slot10;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.bind(var1)();
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = {};
                var19 = var4[var19];
                var19 = var2.bind(var3)(var19);
                var19 = var19.runOnJS;
                var16.runOnJS = var19;
                var16.debouncedUpdate = var18;
                var1.__closure = var16;
                var16 = 17498480935002.0;
                var1.__workletHash = var16;
                var16 = _closure1_slot20;
                var1.__initData = var16;
                var1 = var7.bind(var15)(var6, var1);
                var1 = _closure1_slot16;
                var7 = var1.bind(var3)();
                var _closure2_slot12 = var7;
                var6 = _closure1_slot1;
                var1 = 20;
                var1 = var4[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)(var14);
                var16 = var1.bannerWidth;
                var _closure2_slot13 = var16;
                var15 = var1.listBottom;
                var _closure2_slot14 = var15;
                var1 = 21;
                var1 = var4[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var _closure2_slot15 = var1;
                var14 = var13.useMemo;
                var18 = var7.wrapper;
                var7 = new Array(4);
                var7[0] = var18;
                var7[1] = var16;
                var7[2] = var15;
                var7[3] = var1;
                var1 = function() { // Environment: var0
                    _fun101885: for (var _fun101885_ip = 0;;) switch (_fun101885_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            var1 = var0.wrapper;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var2 = _closure2_slot13;
                            var1.width = var2;
                            var4 = _closure2_slot15;
                            var2 = 0;
                            if (var4) {
                                _fun101885_ip = 44;
                                continue _fun101885
                            }
                        case 40:
                            var2 = _closure2_slot14;
                        case 44:
                            var1.bottom = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var7 = var14.bind(var13)(var1, var7);
                if (!(var11 != var17)) {
                    _fun101875_ip = 531;
                    continue _fun101875
                }
            case 518:
                var1 = var17.isMention;
                var15 = 'before';
                if (var1) {
                    _fun101875_ip = 581;
                    continue _fun101875
                }
            case 531:
                if (!(var11 != var12)) {
                    _fun101875_ip = 548;
                    continue _fun101875
                }
            case 535:
                var14 = var12.isMention;
                var1 = 'after';
                if (var14) {
                    _fun101875_ip = 578;
                    continue _fun101875
                }
            case 548:
                var16 = var11 != var17;
                var14 = 'before';
                if (var16) {
                    _fun101875_ip = 575;
                    continue _fun101875
                }
            case 559:
                var18 = var11 != var12;
                var16 = null;
                if (!var18) {
                    _fun101875_ip = 572;
                    continue _fun101875
                }
            case 568:
                var16 = 'after';
            case 572:
                var14 = var16;
            case 575:
                var1 = var14;
            case 578:
                var15 = var1;
            case 581:
                var1 = 18;
                var1 = var4[var1];
                var16 = var2.bind(var3)(var1);
                var14 = var16.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var14 = var14.bind(var16)(var2, var1);
                var _closure2_slot16 = var14;
                var16 = var13.useCallback;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var14;
                var2[2] = var10;
                var1 = function() { // Environment: var0
                    _fun101887: for (var _fun101887_ip = 0;;) switch (_fun101887_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun101887_ip = 132;
                                continue _fun101887
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 22;
                            var1 = var6[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.triggerHapticFeedback;
                            var4 = _closure1_slot1;
                            var0 = 23;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.IMPACT_LIGHT;
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure2_slot0;
                            var1 = var2.scrollToLocation;
                            var0 = {};
                            var4 = _closure2_slot7;
                            var5 = var4.section;
                            var0.section = var5;
                            var4 = var4.row;
                            var0.item = var4;
                            var3 = _closure2_slot16;
                            var3 = !var3;
                            var0.animated = var3;
                            var3 = 'center';
                            var0.orientation = var3;
                            var0 = var1.bind(var2)(var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var16.bind(var13)(var1, var2);
                var2 = var13.useCallback;
                var1 = new Array(3);
                var1[0] = var12;
                var1[1] = var14;
                var1[2] = var10;
                var0 = function() { // Environment: var0
                    _fun101888: for (var _fun101888_ip = 0;;) switch (_fun101888_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun101888_ip = 132;
                                continue _fun101888
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 22;
                            var1 = var6[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.triggerHapticFeedback;
                            var4 = _closure1_slot1;
                            var0 = 23;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.IMPACT_LIGHT;
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure2_slot0;
                            var1 = var2.scrollToLocation;
                            var0 = {};
                            var4 = _closure2_slot8;
                            var5 = var4.section;
                            var0.section = var5;
                            var4 = var4.row;
                            var0.item = var4;
                            var3 = _closure2_slot16;
                            var3 = !var3;
                            var0.animated = var3;
                            var3 = 'center';
                            var0.orientation = var3;
                            var0 = var1.bind(var2)(var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var2.bind(var13)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var7;
                var7 = 'box-none';
                var0.pointerEvents = var7;
                var7 = _closure1_slot14;
                var14 = 24;
                var4 = var4[var14];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var18 = 'top';
                var4.position = var18;
                var18 = 'before';
                var18 = var18 === var15;
                var4.shown = var18;
                var4.onPress = var16;
                var18 = var11 == var17;
                var16 = undefined;
                if (var18) {
                    _fun101875_ip = 778;
                    continue _fun101875
                }
            case 772:
                var16 = var17.isMention;
            case 778:
                var4.isMention = var16;
                var16 = var10.scrollPosValue;
                var4.scrollPosition = var16;
                var4.listPaddingTop = var9;
                var4.headerHeight = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot14;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var14];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var14 = 'bottom';
                var5.position = var14;
                var14 = 'after';
                var14 = var14 === var15;
                var5.shown = var14;
                var5.onPress = var13;
                var13 = var11 == var12;
                var11 = undefined;
                if (var13) {
                    _fun101875_ip = 881;
                    continue _fun101875
                }
            case 875:
                var11 = var12.isMention;
            case 881:
                var5.isMention = var11;
                var10 = var10.scrollPosValue;
                var5.scrollPosition = var10;
                var5.listPaddingTop = var9;
                var5.headerHeight = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1372, 8585, 3906, 4267, 8747, 13083, 4268, 33, 1297, 4533, 4049, 6418, 5649, 628, 566, 3679, 13236, 7647, 3238, 3239, 13242, 2]);