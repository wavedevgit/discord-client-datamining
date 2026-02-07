// modules/channel_text_area/PlaintextResolvers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun64856: for (var _fun64856_ip = 0;;) switch (_fun64856_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun64856_ip = 46;
                    continue _fun64856
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun64856_ip = 55;
                    continue _fun64856
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun64856_ip = 343;
                    continue _fun64856
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun64856_ip = 323;
                    continue _fun64856
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun64856_ip = 283;
                    continue _fun64856
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun64856_ip = 270;
                    continue _fun64856
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
                    _fun64856_ip = 163;
                    continue _fun64856
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun64856_ip = 179;
                    continue _fun64856
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun64856_ip = 249;
                    continue _fun64856
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun64856_ip = 249;
                    continue _fun64856
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun64856_ip = 234;
                    continue _fun64856
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun64856_ip = 247;
                    continue _fun64856
                }
            case 234:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun64856_ip = 265;
                continue _fun64856;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun64856_ip = 283;
                continue _fun64856;
            case 270:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun64856_ip = 323;
                    continue _fun64856
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
                    _fun64856_ip = 330;
                    continue _fun64856
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun64857: for (var _fun64857_ip = 0;;) switch (_fun64857_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun64857_ip = 56;
                                continue _fun64857
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
                            _fun64857_ip = 67;
                            continue _fun64857;
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
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1() {
        _fun64858: for (var _fun64858_ip = 0;;) switch (_fun64858_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun64858_ip = 23;
                    continue _fun64858
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun64858_ip = 33;
                    continue _fun64858
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
                    _fun64858_ip = 70;
                    continue _fun64858
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun64858_ip = 55;
                    continue _fun64858
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun64859: for (var _fun64859_ip = 0;;) switch (_fun64859_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = arg3;
                var9 = null;
                if (!(var9 == var0)) {
                    _fun64859_ip = 17;
                    continue _fun64859
                }
            case 15:
                var0 = {};
            case 17:
                var1 = var0.allowUsers;
                var4 = undefined;
                var3 = var4 === var1;
                if (var3) {
                    _fun64859_ip = 35;
                    continue _fun64859
                }
            case 32:
                var3 = var1;
            case 35:
                var0 = var0.allowRoles;
                var2 = var4 === var0;
                if (var2) {
                    _fun64859_ip = 51;
                    continue _fun64859
                }
            case 48:
                var2 = var0;
            case 51:
                var0 = 0;
                var1 = var6[var0];
                var0 = '@';
                if (!(var0 !== var1)) {
                    _fun64859_ip = 1106;
                    continue _fun64859
                }
            case 68:
                var12 = ':';
                if (!(var12 !== var1)) {
                    _fun64859_ip = 861;
                    continue _fun64859
                }
            case 79:
                var0 = '#';
                if (!(var0 !== var1)) {
                    _fun64859_ip = 89;
                    continue _fun64859
                }
            case 87:
                return var9;
            case 89:
                var1 = var9 == var5;
                var0 = null;
                if (var1) {
                    _fun64859_ip = 859;
                    continue _fun64859
                }
            case 101:
                var7 = var6.length;
                var1 = 3;
                if (!(var7 > var1)) {
                    _fun64859_ip = 145;
                    continue _fun64859
                }
            case 113:
                var10 = 1;
                var1 = var6[var10];
                var7 = '"';
                if (!(var7 === var1)) {
                    _fun64859_ip = 145;
                    continue _fun64859
                }
            case 128:
                var1 = var6.length;
                var1 = var1 - var10;
                var1 = var6[var1];
                if (!(var7 !== var1)) {
                    _fun64859_ip = 160;
                    continue _fun64859
                }
            case 145:
                var7 = var6.slice;
                var1 = 1;
                var15 = var7.bind(var6)(var1);
                _fun64859_ip = 217;
                continue _fun64859;
            case 160:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 10;
                var1 = var8[var1];
                var8 = var7.bind(var4)(var1);
                var7 = var8.unescapeChannelName;
                var11 = var6.slice;
                var1 = var6.length;
                var10 = var1 - var10;
                var1 = 2;
                var1 = var11.bind(var6)(var1, var10);
                var15 = var7.bind(var8)(var1);
            case 217:
                var7 = _closure1_slot7;
                var1 = var7.getTextChannelNameDisambiguations;
                var11 = var1.bind(var7)(var5);
                var7 = _closure1_slot13;
                var8 = _closure1_slot1;
                var1 = _closure1_slot2;
                var13 = 11;
                var1 = var1[var13];
                var8 = var8.bind(var4)(var1);
                var1 = var8.keys;
                var1 = var1.bind(var8)(var11);
                var10 = var7.bind(var4)(var1);
                var7 = var10.bind(var4)();
                var1 = var7.done;
                var8 = var7;
                if (var1) {
                    _fun64859_ip = 368;
                    continue _fun64859
                }
            case 289:
                var7 = var8.value;
                var1 = var11[var7];
                var1 = var1.name;
                if (!(var1 !== var15)) {
                    _fun64859_ip = 324;
                    continue _fun64859
                }
            case 307:
                var16 = var10.bind(var4)();
                var1 = var16.done;
                var8 = var16;
                if (var1) {
                    _fun64859_ip = 368;
                    continue _fun64859
                }
            case 322:
                _fun64859_ip = 289;
                continue _fun64859;
            case 324:
                var1 = {};
                var8 = 'channelMention';
                var1.type = var8;
                var1.channelId = var7;
                var8 = {};
                var7 = '';
                var8.text = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var1.children = var7;
                var0 = var1;
                _fun64859_ip = 859;
                continue _fun64859;
            case 368:
                var7 = _closure1_slot13;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 12;
                var1 = var10[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
                var16 = var7.bind(var4)(var1);
                var7 = var16.bind(var4)();
                var1 = var7.done;
                var11 = var7;
                var10 = undefined;
                var8 = undefined;
                var7 = undefined;
                if (var1) {
                    _fun64859_ip = 613;
                    continue _fun64859
                }
            case 427:
                var19 = var11.value;
                var1 = _closure1_slot8;
                var17 = var7;
                if (!(var19 !== var1)) {
                    _fun64859_ip = 592;
                    continue _fun64859
                }
            case 446:
                var18 = _closure1_slot13;
                var20 = _closure1_slot7;
                var1 = var20.getChannels;
                var1 = var1.bind(var20)(var5);
                var1 = var1[var19];
                var20 = var18.bind(var4)(var1);
                var18 = var20.bind(var4)();
                var1 = var18.done;
                var19 = var18;
                var10 = var19;
                var8 = var20;
                var17 = var7;
                if (var1) {
                    _fun64859_ip = 592;
                    continue _fun64859
                }
            case 498:
                var1 = var19.value;
                var18 = var1.channel;
                var1 = var18.name;
                if (!(var1 !== var15)) {
                    _fun64859_ip = 543;
                    continue _fun64859
                }
            case 517:
                var21 = var20.bind(var4)();
                var1 = var21.done;
                var19 = var21;
                var10 = var19;
                var8 = var20;
                var17 = var18;
                if (var1) {
                    _fun64859_ip = 592;
                    continue _fun64859
                }
            case 541:
                _fun64859_ip = 498;
                continue _fun64859;
            case 543:
                var1 = {};
                var19 = 'channelMention';
                var1.type = var19;
                var18 = var18.id;
                var1.channelId = var18;
                var19 = {};
                var18 = '';
                var19.text = var18;
                var18 = new Array(1);
                var18[0] = var19;
                var1.children = var18;
                var0 = var1;
                _fun64859_ip = 859;
                continue _fun64859;
            case 592:
                var18 = var16.bind(var4)();
                var1 = var18.done;
                var7 = var17;
                var11 = var18;
                if (!var1) {
                    _fun64859_ip = 427;
                    continue _fun64859
                }
            case 613:
                var7 = _closure1_slot5;
                var1 = var7.getActiveJoinedThreadsForGuild;
                var11 = var1.bind(var7)(var5);
                var7 = _closure1_slot13;
                var8 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var13];
                var8 = var8.bind(var4)(var1);
                var1 = var8.keys;
                var1 = var1.bind(var8)(var11);
                var10 = var7.bind(var4)(var1);
                var7 = var10.bind(var4)();
                var1 = var7.done;
                var8 = var7;
                var7 = undefined;
                var0 = null;
                if (var1) {
                    _fun64859_ip = 859;
                    continue _fun64859
                }
            case 686:
                var19 = var8.value;
                var16 = _closure1_slot13;
                var17 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var13];
                var18 = var17.bind(var4)(var1);
                var17 = var18.keys;
                var1 = var11[var19];
                var1 = var17.bind(var18)(var1);
                var18 = var16.bind(var4)(var1);
                var16 = var18.bind(var4)();
                var1 = var16.done;
                var17 = var16;
                if (var1) {
                    _fun64859_ip = 839;
                    continue _fun64859
                }
            case 746:
                var16 = var17.value;
                var1 = var11[var19];
                var1 = var1[var16];
                var16 = var1.channel;
                var1 = var16.name;
                if (!(var1 !== var15)) {
                    _fun64859_ip = 793;
                    continue _fun64859
                }
            case 773:
                var20 = var18.bind(var4)();
                var1 = var20.done;
                var17 = var20;
                var7 = var16;
                if (var1) {
                    _fun64859_ip = 839;
                    continue _fun64859
                }
            case 791:
                _fun64859_ip = 746;
                continue _fun64859;
            case 793:
                var1 = {};
                var17 = 'channelMention';
                var1.type = var17;
                var16 = var16.id;
                var1.channelId = var16;
                var17 = {};
                var16 = '';
                var17.text = var16;
                var16 = new Array(1);
                var16[0] = var17;
                var1.children = var16;
                var0 = var1;
                _fun64859_ip = 859;
                continue _fun64859;
            case 839:
                var16 = var10.bind(var4)();
                var1 = var16.done;
                var8 = var16;
                var0 = null;
                if (!var1) {
                    _fun64859_ip = 686;
                    continue _fun64859
                }
            case 859:
                return var0;
            case 861:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 13;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var7 = var0.EMOJI_NAME_RE;
                var0 = var7.exec;
                var8 = var0.bind(var7)(var6);
                var7 = var9 == var8;
                var0 = null;
                if (var7) {
                    _fun64859_ip = 1104;
                    continue _fun64859
                }
            case 913:
                var7 = 1;
                var7 = var8[var7];
                var8 = _closure1_slot4;
                var1 = var8.getDisambiguatedEmojiContext;
                var8 = var1.bind(var8)(var5);
                var1 = var8.getCustomEmoji;
                var1 = var1.bind(var8)();
                var8 = var9 != var1;
                var0 = null;
                if (!var8) {
                    _fun64859_ip = 1104;
                    continue _fun64859
                }
            case 957:
                var8 = var7 in var1;
                var0 = null;
                if (!var8) {
                    _fun64859_ip = 1104;
                    continue _fun64859
                }
            case 969:
                var8 = var1[var7];
                var1 = {};
                var7 = 'customEmoji';
                var1.type = var7;
                var7 = {};
                var9 = var8.id;
                var7.emojiId = var9;
                var9 = 'require_colons';
                var9 = var9 in var8;
                if (!var9) {
                    _fun64859_ip = 1015;
                    continue _fun64859
                }
            case 1006:
                var9 = var8.require_colons;
                if (var9) {
                    _fun64859_ip = 1022;
                    continue _fun64859
                }
            case 1015:
                var9 = var8.name;
                _fun64859_ip = 1046;
                continue _fun64859;
            case 1022:
                var11 = var8.name;
                var10 = global;
                var10 = var10.HermesInternal;
                var10 = var10.concat;
                var9 = var10.bind(var12)(var11, var12);
            case 1046:
                var7.name = var9;
                var9 = var8.animated;
                var8 = true;
                var8 = var8 === var9;
                var7.animated = var8;
                var8 = false;
                var7.jumboable = var8;
                var1.emoji = var7;
                var8 = {};
                var7 = '';
                var8.text = var7;
                var7 = new Array(1);
                var7[0] = var8;
                var1.children = var7;
                var0 = var1;
            case 1104:
                return var0;
            case 1106:
                var1 = function arg0, arg1, arg2, arg3, arg4() {
                    _fun64860: for (var _fun64860_ip = 0;;) switch (_fun64860_ip) {
                        case 0:
                            var1 = arg0;
                            var11 = arg1;
                            var12 = arg2;
                            var0 = var1.slice;
                            var8 = 1;
                            var3 = var0.bind(var1)(var8);
                            var1 = var3.split;
                            var0 = '#';
                            var4 = 2;
                            var3 = var1.bind(var3)(var0, var4);
                            var0 = _closure1_slot3;
                            var6 = undefined;
                            var0 = var0.bind(var6)(var3, var4);
                            var3 = 0;
                            var5 = var0[var3];
                            var _closure3_slot0 = var5;
                            var4 = var0[var8];
                            var _closure3_slot1 = var4;
                            var0 = null;
                            var9 = var0 != var11;
                            var7 = null;
                            if (!var9) {
                                _fun64860_ip = 100;
                                continue _fun64860
                            }
                        case 86:
                            var10 = _closure1_slot11;
                            var9 = var10.getGuild;
                            var7 = var9.bind(var10)(var11);
                        case 100:
                            var9 = arg4;
                            if (!var9) {
                                _fun64860_ip = 239;
                                continue _fun64860
                            }
                        case 109:
                            if (!(var0 == var4)) {
                                _fun64860_ip = 239;
                                continue _fun64860
                            }
                        case 116:
                            if (!(var0 != var7)) {
                                _fun64860_ip = 239;
                                continue _fun64860
                            }
                        case 120:
                            var9 = _closure1_slot13;
                            var13 = _closure1_slot10;
                            var10 = var13.getSortedRoles;
                            var7 = var7.id;
                            var7 = var10.bind(var13)(var7);
                            var13 = var9.bind(var6)(var7);
                            var9 = var13.bind(var6)();
                            var7 = var9.done;
                            var10 = var9;
                            if (var7) {
                                _fun64860_ip = 239;
                                continue _fun64860
                            }
                        case 164:
                            var9 = var10.value;
                            var7 = var9.name;
                            if (!(var5 !== var7)) {
                                _fun64860_ip = 195;
                                continue _fun64860
                            }
                        case 178:
                            var14 = var13.bind(var6)();
                            var7 = var14.done;
                            var10 = var14;
                            if (var7) {
                                _fun64860_ip = 239;
                                continue _fun64860
                            }
                        case 193:
                            _fun64860_ip = 164;
                            continue _fun64860;
                        case 195:
                            var7 = {};
                            var10 = 'roleMention';
                            var7.type = var10;
                            var9 = var9.id;
                            var7.roleId = var9;
                            var10 = {};
                            var9 = '';
                            var10.text = var9;
                            var9 = new Array(1);
                            var9[0] = var10;
                            var7.children = var9;
                            return var7;
                        case 239:
                            var7 = arg3;
                            if (!var7) {
                                _fun64860_ip = 406;
                                continue _fun64860
                            }
                        case 248:
                            var9 = var0 != var12;
                            var7 = null;
                            if (!var9) {
                                _fun64860_ip = 271;
                                continue _fun64860
                            }
                        case 257:
                            var10 = _closure1_slot6;
                            var9 = var10.getChannel;
                            var7 = var9.bind(var10)(var12);
                        case 271:
                            if (!(var0 != var7)) {
                                _fun64860_ip = 453;
                                continue _fun64860
                            }
                        case 278:
                            var9 = var7.isPrivate;
                            var9 = var9.bind(var7)();
                            if (var9) {
                                _fun64860_ip = 323;
                                continue _fun64860
                            }
                        case 291:
                            var10 = _closure1_slot9;
                            var9 = var10.getMembers;
                            var11 = var9.bind(var10)(var11);
                            var10 = var11.map;
                            var9 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.userId;
                                return var0;
                            };
                            var10 = var10.bind(var11)(var9);
                            _fun64860_ip = 329;
                            continue _fun64860;
                        case 323:
                            var10 = var7.recipients;
                        case 329:
                            var9 = var10.map;
                            var7 = function(arg0) { // Environment: var2
                                var2 = _closure1_slot12;
                                var1 = var2.getUser;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var9 = var9.bind(var10)(var7);
                            var7 = var9.filter;
                            var2 = function(arg0) { // Environment: var2
                                _fun64863: for (var _fun64863_ip = 0;;) switch (_fun64863_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var4 = undefined;
                                        var0 = var4 !== var5;
                                        if (!var0) {
                                            _fun64863_ip = 37;
                                            continue _fun64863
                                        }
                                    case 12:
                                        var3 = _closure1_slot16;
                                        var2 = _closure3_slot0;
                                        var1 = _closure3_slot1;
                                        var0 = var3.bind(var4)(var2, var1, var5);
                                    case 37:
                                        return var0;
                                }
                            };
                            var2 = var7.bind(var9)(var2);
                            var7 = var2.length;
                            if (!(var8 === var7)) {
                                _fun64860_ip = 406;
                                continue _fun64860
                            }
                        case 368:
                            var2 = var2[var3];
                            var3 = _closure1_slot16;
                            var1 = {};
                            var7 = true;
                            var1.requireExact = var7;
                            var19 = undefined;
                            var18 = var5;
                            var17 = var4;
                            var16 = var2;
                            var15 = var1;
                            var1 = var19[var3](var18, var17, var16, var15, var14);
                            if (var1) {
                                _fun64860_ip = 408;
                                continue _fun64860
                            }
                        case 406:
                            return var0;
                        case 408:
                            var1 = {};
                            var3 = 'userMention';
                            var1.type = var3;
                            var2 = var2.id;
                            var1.userId = var2;
                            var3 = {};
                            var2 = '';
                            var3.text = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1.children = var2;
                            return var1;
                        case 453:
                            return var0;
                    }
                };
                var24 = arg2;
                var27 = undefined;
                var26 = var6;
                var25 = var5;
                var23 = var3;
                var22 = var2;
                var0 = var27[var1](var26, var25, var24, var23, var22, var21);
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var0 = function arg0, arg1, arg2() {
        _fun64864: for (var _fun64864_ip = 0;;) switch (_fun64864_ip) {
            case 0:
                var6 = arg0;
                var4 = arg1;
                var3 = arg2;
                var1 = arguments[3];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun64864_ip = 20;
                    continue _fun64864
                }
            case 18:
                var1 = {};
            case 20:
                var1 = var1.requireExact;
                if (!(var1 === var0)) {
                    _fun64864_ip = 32;
                    continue _fun64864
                }
            case 30:
                var1 = false;
            case 32:
                var2 = null;
                var0 = var2 != var3;
                if (!var0) {
                    _fun64864_ip = 98;
                    continue _fun64864
                }
            case 41:
                var5 = var3.username;
                if (var1) {
                    _fun64864_ip = 62;
                    continue _fun64864
                }
            case 49:
                var1 = var5.startsWith;
                var1 = var1.bind(var5)(var6);
                _fun64864_ip = 66;
                continue _fun64864;
            case 62:
                var1 = var5 === var6;
            case 66:
                if (!var1) {
                    _fun64864_ip = 95;
                    continue _fun64864
                }
            case 69:
                var3 = var3.discriminator;
                var5 = var2 != var4;
                var2 = '0';
                if (!var5) {
                    _fun64864_ip = 91;
                    continue _fun64864
                }
            case 88:
                var2 = var4;
            case 91:
                var1 = var3 === var2;
            case 95:
                var0 = var1;
            case 98:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var8 = var6[var4];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_text_area/PlaintextResolvers.tsx';
    var4 = var5.bind(var6)(var4);
    var2.resolvePlaintextInlineVoid = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun64865: for (var _fun64865_ip = 0;;) switch (_fun64865_ip) {
            case 0:
                var6 = _closure1_slot15;
                var4 = undefined;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = undefined;
                var3 = var11[var6](var10, var9, var8, var7, var6);
                var0 = null;
                var2 = var0 == var3;
                if (var2) {
                    _fun64865_ip = 67;
                    continue _fun64865
                }
            case 36:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.voidToOptionValue;
                var0 = var1.bind(var2)(var3);
            case 67:
                return var0;
        }
    };
    var2.resolveApplicationCommandOption = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4739, 4550, 1372, 1673, 1683, 1676, 1410, 1621, 6601, 4794, 21, 5642, 3106, 2]);