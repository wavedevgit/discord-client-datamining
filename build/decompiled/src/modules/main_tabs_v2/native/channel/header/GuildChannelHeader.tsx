// modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx
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
        _fun72400: for (var _fun72400_ip = 0;;) switch (_fun72400_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun72400_ip = 46;
                    continue _fun72400
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun72400_ip = 55;
                    continue _fun72400
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun72400_ip = 345;
                    continue _fun72400
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun72400_ip = 323;
                    continue _fun72400
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun72400_ip = 283;
                    continue _fun72400
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun72400_ip = 270;
                    continue _fun72400
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
                    _fun72400_ip = 163;
                    continue _fun72400
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun72400_ip = 179;
                    continue _fun72400
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun72400_ip = 249;
                    continue _fun72400
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun72400_ip = 249;
                    continue _fun72400
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun72400_ip = 234;
                    continue _fun72400
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun72400_ip = 247;
                    continue _fun72400
                }
            case 234:
                var8 = _closure1_slot23;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun72400_ip = 265;
                continue _fun72400;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun72400_ip = 283;
                continue _fun72400;
            case 270:
                var6 = _closure1_slot23;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun72400_ip = 323;
                    continue _fun72400
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
                    _fun72400_ip = 330;
                    continue _fun72400
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun72401: for (var _fun72401_ip = 0;;) switch (_fun72401_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun72401_ip = 56;
                                continue _fun72401
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
                            _fun72401_ip = 67;
                            continue _fun72401;
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
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1() {
        _fun72402: for (var _fun72402_ip = 0;;) switch (_fun72402_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun72402_ip = 23;
                    continue _fun72402
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun72402_ip = 33;
                    continue _fun72402
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
                    _fun72402_ip = 70;
                    continue _fun72402
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun72402_ip = 55;
                    continue _fun72402
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun72403: for (var _fun72403_ip = 0;;) switch (_fun72403_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channel;
                var _closure2_slot0 = var9;
                var5 = var0.withSeparator;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun72403_ip = 28;
                    continue _fun72403
                }
            case 26:
                var5 = false;
            case 28:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 15;
                var3 = var6[var3];
                var7 = var4.bind(var0)(var3);
                var6 = var7.useStateFromStoresObject;
                var3 = _closure1_slot9;
                var4 = new Array(2);
                var4[0] = var3;
                var3 = _closure1_slot6;
                var4[1] = var3;
                var3 = function() { // Environment: var2
                    _fun72404: for (var _fun72404_ip = 0;;) switch (_fun72404_ip) {
                        case 0:
                            var3 = _closure1_slot22;
                            var6 = _closure1_slot9;
                            var5 = var6.getProps;
                            var2 = _closure2_slot0;
                            var4 = var2.guild_id;
                            var2 = var2.id;
                            var2 = var5.bind(var6)(var4, var2);
                            var2 = var2.groups;
                            var15 = undefined;
                            var14 = var3.bind(var15)(var2);
                            var3 = var14.bind(var15)();
                            var6 = var3.done;
                            var10 = false;
                            var13 = 0;
                            var11 = var3;
                            var9 = false;
                            var8 = 0;
                            var7 = 0;
                            var3 = false;
                            var5 = false;
                            var4 = 0;
                            var2 = 0;
                            if (var6) {
                                _fun72404_ip = 235;
                                continue _fun72404
                            }
                        case 89:
                            var21 = var11.value;
                            var6 = var21.count;
                            var6 = var13 !== var6;
                            if (!var6) {
                                _fun72404_ip = 126;
                                continue _fun72404
                            }
                        case 107:
                            var17 = var21.id;
                            var16 = _closure1_slot17;
                            var16 = var16.UNKNOWN;
                            var6 = var17 !== var16;
                        case 126:
                            var18 = var9;
                            var17 = var8;
                            var16 = var7;
                            if (!var6) {
                                _fun72404_ip = 196;
                                continue _fun72404
                            }
                        case 138:
                            var6 = var21.count;
                            var19 = var8 + var6;
                            var23 = var21.id;
                            var6 = _closure1_slot17;
                            var22 = var6.OFFLINE;
                            var20 = true;
                            var6 = var7;
                            if (!(var23 !== var22)) {
                                _fun72404_ip = 185;
                                continue _fun72404
                            }
                        case 172:
                            var21 = var21.count;
                            var6 = var7 + var21;
                            var20 = var9;
                        case 185:
                            var18 = var20;
                            var16 = var6;
                            var10 = true;
                            var17 = var19;
                        case 196:
                            var20 = var14.bind(var15)();
                            var6 = var20.done;
                            var9 = var18;
                            var8 = var17;
                            var7 = var16;
                            var11 = var20;
                            var3 = var10;
                            var5 = var9;
                            var4 = var8;
                            var2 = var7;
                            if (!var6) {
                                _fun72404_ip = 89;
                                continue _fun72404
                            }
                        case 235:
                            if (var3) {
                                _fun72404_ip = 264;
                                continue _fun72404
                            }
                        case 238:
                            var3 = _closure1_slot6;
                            var1 = var3.getMemberCount;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var3)(var0);
                            _fun72404_ip = 287;
                            continue _fun72404;
                        case 264:
                            var1 = {};
                            var3 = null;
                            if (!var5) {
                                _fun72404_ip = 274;
                                continue _fun72404
                            }
                        case 271:
                            var3 = var4;
                        case 274:
                            var1.total = var3;
                            var1.online = var2;
                            var0 = var1;
                        case 287:
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var4, var3);
                var4 = var3.online;
                var3 = var3.total;
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var10 = var9.guild_id;
                var6 = new Array(2);
                var6[0] = var10;
                var9 = var9.id;
                var6[1] = var9;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot6;
                    var2 = var3.requestCount;
                    var0 = _closure2_slot0;
                    var1 = var0.guild_id;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var6);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun72403_ip = 162;
                    continue _fun72403
                }
            case 152:
                var6 = 500;
                if (!(!(var3 > var6))) {
                    _fun72403_ip = 211;
                    continue _fun72403
                }
            case 162:
                if (!(var2 != var4)) {
                    _fun72403_ip = 176;
                    continue _fun72403
                }
            case 166:
                var2 = 500;
                if (!(!(var4 > var2))) {
                    _fun72403_ip = 211;
                    continue _fun72403
                }
            case 176:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var1 = var6[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.renderMemberCountText;
                var1 = var1.bind(var2)(var4, var3, var5);
                return var1;
            case 211:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var3 = var1.iconRef;
        var10 = var1.guild;
        var _closure2_slot0 = var10;
        var11 = var1.channel;
        var _closure2_slot1 = var11;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 21;
        var6 = var5[var1];
        var1 = undefined;
        var12 = var4.bind(var1)(var6);
        var9 = var12.useSelectedDismissibleContent;
        var6 = 22;
        var7 = var5[var6];
        var7 = var4.bind(var1)(var7);
        var7 = var7.DismissibleContent;
        var7 = var7.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = true;
        var9 = var9.bind(var12)(var8, var1, var7);
        var8 = _closure1_slot3;
        var7 = 2;
        var9 = var8.bind(var1)(var9, var7);
        var7 = 0;
        var7 = var9[var7];
        var8 = 1;
        var9 = var9[var8];
        var _closure2_slot2 = var9;
        var6 = var5[var6];
        var6 = var4.bind(var1)(var6);
        var6 = var6.DismissibleContent;
        var6 = var6.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP;
        var8 = var7 === var6;
        var _closure2_slot3 = var8;
        var7 = _closure1_slot4;
        var6 = var7.useMemo;
        var2 = new Array(4);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var0 = function() { // Environment: var0
            _fun72407: for (var _fun72407_ip = 0;;) switch (_fun72407_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 18;
                    var4 = var9[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var4);
                    var7 = var4.intl;
                    var6 = var7.string;
                    var4 = var9[var1];
                    var4 = var2.bind(var5)(var4);
                    var4 = var4.t;
                    var4 = var4.YIVr4B;
                    var4 = var6.bind(var7)(var4);
                    var0.title = var4;
                    var4 = var9[var1];
                    var4 = var2.bind(var5)(var4);
                    var6 = var4.intl;
                    var4 = var6.format;
                    var1 = var9[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.t;
                    var2 = var1.w8VWRT;
                    var1 = {};
                    var8 = _closure1_slot1;
                    var7 = 23;
                    var7 = var9[var7];
                    var9 = var8.bind(var5)(var7);
                    var8 = var9.getArticleURL;
                    var7 = _closure1_slot16;
                    var7 = var7.LINKED_LOBBIES;
                    var7 = var8.bind(var9)(var7);
                    var1.helpdeskArticle = var7;
                    var1 = var4.bind(var6)(var2, var1);
                    var0.description = var1;
                    var1 = _closure2_slot1;
                    var4 = null;
                    var6 = var4 == var1;
                    var1 = undefined;
                    if (var6) {
                        _fun72407_ip = 191;
                        continue _fun72407
                    }
                case 181:
                    var6 = _closure2_slot1;
                    var1 = var6.linkedLobby;
                case 191:
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun72407_ip = 202;
                        continue _fun72407
                    }
                case 198:
                    var1 = _closure2_slot3;
                case 202:
                    var0.visible = var1;
                    var1 = 'bottom';
                    var0.position = var1;
                    var1 = 15;
                    var0.offsetY = var1;
                    var1 = function() {
                        var2 = _closure2_slot2;
                        var0 = _closure1_slot18;
                        var1 = var0.USER_DISMISS;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onDismiss = var1;
                    var1 = _closure2_slot1;
                    var4 = var4 != var1;
                    var1 = undefined;
                    if (!var4) {
                        _fun72407_ip = 290;
                        continue _fun72407
                    }
                case 250:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 24;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getChannelIconWithGuild;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
                case 290:
                    var0.imgSource = var1;
                    return var0;
            }
        };
        var2 = var6.bind(var7)(var0, var2);
        var0 = 25;
        var0 = var5[var0];
        var1 = var4.bind(var1)(var0);
        var0 = var1.useCoachmark;
        var0 = var0.bind(var1)(var3, var2);
        var0 = null;
        return var0;
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
    var3 = var3.View;
    var _closure1_slot5 = var3;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.THREAD_CHANNEL_TYPES;
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot15 = var7;
    var7 = var3.HelpdeskArticles;
    var _closure1_slot16 = var7;
    var3 = var3.StatusTypes;
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot19 = var7;
    var7 = var3.Fragment;
    var _closure1_slot20 = var7;
    var3 = var3.jsxs;
    var _closure1_slot21 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun72409: for (var _fun72409_ip = 0;;) switch (_fun72409_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channelId;
                var _closure2_slot0 = var11;
                var3 = var0.screenIndex;
                var _closure2_slot1 = var3;
                var9 = var0.guildId;
                var _closure2_slot2 = var9;
                var1 = var0.pressable;
                var6 = var0.isGuildMemberCountVisible;
                var0 = var0.showCreateThread;
                var _closure2_slot3 = var0;
                var7 = _closure1_slot4;
                var4 = var7.useRef;
                var13 = null;
                var17 = var4.bind(var7)(var13);
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 15;
                var7 = var10[var8];
                var4 = undefined;
                var18 = var12.bind(var4)(var7);
                var16 = var18.useStateFromStores;
                var7 = _closure1_slot10;
                var15 = new Array(1);
                var15[0] = var7;
                var14 = function() { // Environment: var2
                    var2 = _closure1_slot10;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var16.bind(var18)(var15, var14);
                var _closure2_slot4 = var15;
                var16 = _closure1_slot1;
                var14 = 26;
                var14 = var10[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.bind(var4)(var11);
                var _closure2_slot5 = var14;
                var10 = var10[var8];
                var14 = var12.bind(var4)(var10);
                var12 = var14.useStateFromStores;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var2
                    _fun72411: for (var _fun72411_ip = 0;;) switch (_fun72411_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun72411_ip = 109;
                                continue _fun72411
                            }
                        case 13:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun72411_ip = 109;
                                continue _fun72411
                            }
                        case 20:
                            var0 = _closure2_slot4;
                            var1 = var5 != var0;
                            var0 = undefined;
                            if (!var1) {
                                _fun72411_ip = 107;
                                continue _fun72411
                            }
                        case 33:
                            var1 = _closure2_slot4;
                            var1 = var1.parent_id;
                            var1 = var5 != var1;
                            var0 = undefined;
                            if (!var1) {
                                _fun72411_ip = 107;
                                continue _fun72411
                            }
                        case 52:
                            var7 = _closure1_slot8;
                            var6 = var7.has;
                            var2 = _closure2_slot4;
                            var2 = var2.type;
                            var2 = var6.bind(var7)(var2);
                            var0 = undefined;
                            if (!var2) {
                                _fun72411_ip = 107;
                                continue _fun72411
                            }
                        case 83:
                            var3 = _closure1_slot10;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot4;
                            var1 = var1.parent_id;
                            var0 = var2.bind(var3)(var1);
                        case 107:
                            _fun72411_ip = 149;
                            continue _fun72411;
                        case 109:
                            var3 = _closure1_slot10;
                            var2 = var3.getChannel;
                            var1 = _closure2_slot5;
                            var5 = var5 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun72411_ip = 144;
                                continue _fun72411
                            }
                        case 134:
                            var4 = _closure2_slot5;
                            var1 = var4.parentChannelId;
                        case 144:
                            var0 = var2.bind(var3)(var1);
                        case 149:
                            return var0;
                    }
                };
                var10 = var12.bind(var14)(var10, var7);
                if (!var1) {
                    _fun72409_ip = 197;
                    continue _fun72409
                }
            case 193:
                var1 = var13 != var15;
            case 197:
                if (!var1) {
                    _fun72409_ip = 203;
                    continue _fun72409
                }
            case 200:
                var1 = !var0;
            case 203:
                var7 = {};
                var7.channel = var15;
                var7.parentChannel = var10;
                var7.guildId = var9;
                var9 = !var1;
                var7.disableArrow = var9;
                var6 = !var6;
                var7.disableGuildMemberCount = var6;
                var7.showCreateThread = var0;
                var6 = function arg0() {
                    _fun72412: for (var _fun72412_ip = 0;;) switch (_fun72412_ip) {
                        case 0:
                            var0 = arg0;
                            var17 = var0.channel;
                            var13 = var0.parentChannel;
                            var4 = var0.guildId;
                            var _closure3_slot0 = var4;
                            var5 = var0.disableArrow;
                            var6 = var0.disableGuildMemberCount;
                            var1 = var0.showCreateThread;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var14 = 15;
                            var3 = var2[var14];
                            var2 = undefined;
                            var10 = var7.bind(var2)(var3);
                            var9 = var10.useStateFromStores;
                            var3 = _closure1_slot7;
                            var7 = new Array(1);
                            var7[0] = var3;
                            var3 = function() { // Environment: var8
                                var1 = _closure1_slot7;
                                var0 = var1.isConnected;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var10 = var9.bind(var10)(var7, var3);
                            var11 = null;
                            if (!(var11 == var17)) {
                                _fun72412_ip = 161;
                                continue _fun72412
                            }
                        case 104:
                            var12 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var3 = 18;
                            var7 = var15[var3];
                            var7 = var12.bind(var2)(var7);
                            var9 = var7.intl;
                            var7 = var9.string;
                            var3 = var15[var3];
                            var3 = var12.bind(var2)(var3);
                            var3 = var3.t;
                            var3 = var3.ai6Lbr;
                            var16 = var7.bind(var9)(var3);
                            _fun72412_ip = 202;
                            continue _fun72412;
                        case 161:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 17;
                            var3 = var9[var3];
                            var12 = var7.bind(var2)(var3);
                            var9 = var12.computeChannelName;
                            var7 = _closure1_slot14;
                            var3 = _closure1_slot13;
                            var16 = var9.bind(var12)(var17, var7, var3);
                        case 202:
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var19 = 18;
                            var3 = var12[var19];
                            var3 = var7.bind(var2)(var3);
                            var18 = var3.intl;
                            var15 = var18.formatToPlainString;
                            var3 = var12[var19];
                            var3 = var7.bind(var2)(var3);
                            var3 = var3.t;
                            var9 = var3.UbNmGc;
                            var3 = {};
                            var3.channelName = var16;
                            var9 = var15.bind(var18)(var9, var3);
                            var3 = 19;
                            var3 = var12[var3];
                            var7 = var7.bind(var2)(var3);
                            var3 = var7.shouldNSFWGateGuild;
                            var3 = var3.bind(var7)(var4);
                            if (var3) {
                                _fun72412_ip = 684;
                                continue _fun72412
                            }
                        case 294:
                            if (var1) {
                                _fun72412_ip = 526;
                                continue _fun72412
                            }
                        case 300:
                            if (!(var11 != var17)) {
                                _fun72412_ip = 445;
                                continue _fun72412
                            }
                        case 307:
                            var3 = var17.isThread;
                            var15 = var3.bind(var17)();
                            var12 = undefined;
                            var3 = var16;
                            var7 = var9;
                            if (!var15) {
                                _fun72412_ip = 741;
                                continue _fun72412
                            }
                        case 331:
                            var18 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var20 = var15[var19];
                            var20 = var18.bind(var2)(var20);
                            var21 = var20.intl;
                            var20 = var21.formatToPlainString;
                            var15 = var15[var19];
                            var15 = var18.bind(var2)(var15);
                            var15 = var15.t;
                            var18 = var15["OkzL+Q"];
                            var15 = {};
                            var15.channelName = var16;
                            var15 = var20.bind(var21)(var18, var15);
                            var20 = var11 != var13;
                            var18 = undefined;
                            if (!var20) {
                                _fun72412_ip = 431;
                                continue _fun72412
                            }
                        case 400:
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var20 = 16;
                            var20 = var22[var20];
                            var21 = var21.bind(var2)(var20);
                            var20 = var21.renderParentChannelSubTitle;
                            var18 = var20.bind(var21)(var13);
                        case 431:
                            var12 = var18;
                            var3 = var16;
                            var7 = var15;
                            _fun72412_ip = 741;
                            continue _fun72412;
                        case 445:
                            var20 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var16 = var15[var19];
                            var16 = var20.bind(var2)(var16);
                            var18 = var16.intl;
                            var16 = var18.string;
                            var15 = var15[var19];
                            var15 = var20.bind(var2)(var15);
                            var15 = var15.t;
                            if (var10) {
                                _fun72412_ip = 502;
                                continue _fun72412
                            }
                        case 489:
                            var10 = var15.ZTNur7;
                            var10 = var16.bind(var18)(var10);
                            _fun72412_ip = 513;
                            continue _fun72412;
                        case 502:
                            var15 = var15.ai6Lbr;
                            var10 = var16.bind(var18)(var15);
                        case 513:
                            var3 = var10;
                            var12 = undefined;
                            var7 = var9;
                            _fun72412_ip = 741;
                            continue _fun72412;
                        case 526:
                            var16 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var15 = var10[var19];
                            var15 = var16.bind(var2)(var15);
                            var20 = var15.intl;
                            var18 = var20.string;
                            var15 = var10[var19];
                            var15 = var16.bind(var2)(var15);
                            var15 = var15.t;
                            var15 = var15["4WNcpu"];
                            var15 = var18.bind(var20)(var15);
                            var18 = var10[var19];
                            var18 = var16.bind(var2)(var18);
                            var20 = var18.intl;
                            var18 = var20.formatToPlainString;
                            var10 = var10[var19];
                            var10 = var16.bind(var2)(var10);
                            var10 = var10.t;
                            var16 = var10["OkzL+Q"];
                            var10 = {};
                            var10.channelName = var15;
                            var10 = var18.bind(var20)(var16, var10);
                            var16 = var11 != var13;
                            var12 = undefined;
                            var3 = var15;
                            var7 = var10;
                            if (!var16) {
                                _fun72412_ip = 741;
                                continue _fun72412
                            }
                        case 645:
                            var18 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var16 = 16;
                            var16 = var20[var16];
                            var18 = var18.bind(var2)(var16);
                            var16 = var18.renderParentChannelSubTitle;
                            var12 = var16.bind(var18)(var13);
                            var3 = var15;
                            var7 = var10;
                            _fun72412_ip = 741;
                            continue _fun72412;
                        case 684:
                            var18 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var15 = var10[var19];
                            var15 = var18.bind(var2)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var10 = var10[var19];
                            var10 = var18.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10.HbPHt1;
                            var3 = var15.bind(var16)(var10);
                            var12 = undefined;
                            var7 = var9;
                        case 741:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var14];
                            var14 = var10.bind(var2)(var9);
                            var10 = var14.useStateFromStores;
                            var15 = _closure1_slot11;
                            var9 = new Array(1);
                            var9[0] = var15;
                            var8 = function() { // Environment: var8
                                var2 = _closure1_slot11;
                                var1 = var2.getMemberCount;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var9 = var10.bind(var14)(var9, var8);
                            var10 = var11 != var9;
                            var8 = 0;
                            if (!var10) {
                                _fun72412_ip = 800;
                                continue _fun72412
                            }
                        case 797:
                            var8 = var9;
                        case 800:
                            var14 = !var6;
                            if (!var14) {
                                _fun72412_ip = 816;
                                continue _fun72412
                            }
                        case 806:
                            var6 = 500;
                            var14 = var8 < var6;
                        case 816:
                            if (!var14) {
                                _fun72412_ip = 823;
                                continue _fun72412
                            }
                        case 819:
                            var14 = var11 != var17;
                        case 823:
                            if (!var14) {
                                _fun72412_ip = 839;
                                continue _fun72412
                            }
                        case 826:
                            var6 = var17.isThread;
                            var6 = var6.bind(var17)();
                            var14 = !var6;
                        case 839:
                            if (!var14) {
                                _fun72412_ip = 888;
                                continue _fun72412
                            }
                        case 842:
                            var6 = _closure1_slot15;
                            var8 = var6.GUILD_DIRECTORY;
                            var9 = new Array(2);
                            var9[0] = var8;
                            var6 = var6.GUILD_FORUM;
                            var9[1] = var6;
                            var8 = var9.includes;
                            var6 = var17.type;
                            var6 = var8.bind(var9)(var6);
                            var14 = !var6;
                        case 888:
                            if (!var14) {
                                _fun72412_ip = 894;
                                continue _fun72412
                            }
                        case 891:
                            var14 = !var1;
                        case 894:
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var9 = 20;
                            var1 = var1[var9];
                            var8 = var6.bind(var2)(var1);
                            var6 = var8.useShouldChannelShowLoadingIndicator;
                            var10 = var11 == var17;
                            var1 = undefined;
                            if (var10) {
                                _fun72412_ip = 934;
                                continue _fun72412
                            }
                        case 929:
                            var1 = var17.id;
                        case 934:
                            var1 = var6.bind(var8)(var1);
                            if (!(var11 != var17)) {
                                _fun72412_ip = 956;
                                continue _fun72412
                            }
                        case 943:
                            var6 = var17.isForumLikeChannel;
                            var6 = var6.bind(var17)();
                            if (var6) {
                                _fun72412_ip = 996;
                                continue _fun72412
                            }
                        case 956:
                            if (!var1) {
                                _fun72412_ip = 996;
                                continue _fun72412
                            }
                        case 959:
                            var8 = _closure1_slot19;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var9];
                            var1 = var6.bind(var2)(var1);
                            var6 = var1.ChannelHeaderLoadingIndicator;
                            var1 = {};
                            var6 = var8.bind(var2)(var6, var1);
                            _fun72412_ip = 1070;
                            continue _fun72412;
                        case 996:
                            var9 = _closure1_slot21;
                            var8 = _closure1_slot20;
                            var1 = {};
                            if (!var14) {
                                _fun72412_ip = 1038;
                                continue _fun72412
                            }
                        case 1009:
                            var16 = _closure1_slot19;
                            var15 = _closure1_slot24;
                            var10 = {};
                            var10.channel = var17;
                            var17 = var11 != var12;
                            var10.withSeparator = var17;
                            var14 = var16.bind(var2)(var15, var10);
                        case 1038:
                            var10 = new Array(2);
                            var10[0] = var14;
                            var11 = var11 != var13;
                            if (!var11) {
                                _fun72412_ip = 1056;
                                continue _fun72412
                            }
                        case 1053:
                            var11 = var12;
                        case 1056:
                            var10[1] = var11;
                            var1.children = var10;
                            var6 = var9.bind(var2)(var8, var1);
                        case 1070:
                            var1 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 16;
                            var0 = var8[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.renderChannelTitle;
                            var0 = {};
                            var0.accessibleTitle = var7;
                            var0.subtitle = var6;
                            var0.disableArrow = var5;
                            var0.guildId = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var7 = var6.bind(var4)(var7);
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var3;
                var3 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.navigateToChannelDetails;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = 'guild-channel-header-title';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var9 = var9.bind(var10)(var3, var6);
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var8 = var6.bind(var4)(var3);
                var6 = var8.useStateFromStores;
                var10 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var10;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot12;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var6.bind(var8)(var3, var2);
                var2 = var13 == var15;
                var11 = null;
                if (var2) {
                    _fun72409_ip = 378;
                    continue _fun72409
                }
            case 341:
                var11 = null;
                if (var0) {
                    _fun72409_ip = 378;
                    continue _fun72409
                }
            case 346:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 16;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.renderChannelIcon;
                var11 = var0.bind(var2)(var15, var16);
            case 378:
                var3 = _closure1_slot21;
                var2 = _closure1_slot20;
                var0 = {};
                var8 = _closure1_slot5;
                var6 = {};
                var6.ref = var17;
                var10 = {};
                var12 = 8;
                var10.marginRight = var12;
                var6.style = var10;
                var10 = new Array(2);
                var10[0] = var11;
                var12 = var13 != var16;
                var11 = null;
                if (!var12) {
                    _fun72409_ip = 482;
                    continue _fun72409
                }
            case 429:
                var14 = var13 == var15;
                var12 = undefined;
                if (var14) {
                    _fun72409_ip = 444;
                    continue _fun72409
                }
            case 438:
                var12 = var15.linkedLobby;
            case 444:
                var12 = var13 != var12;
                var11 = null;
                if (!var12) {
                    _fun72409_ip = 482;
                    continue _fun72409
                }
            case 453:
                var14 = _closure1_slot19;
                var13 = _closure1_slot25;
                var12 = {};
                var12.iconRef = var17;
                var12.guild = var16;
                var12.channel = var15;
                var11 = var14.bind(var4)(var13, var12);
            case 482:
                var10[1] = var11;
                var6.children = var10;
                var8 = var3.bind(var4)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var0.children = var6;
                var8 = var3.bind(var4)(var2, var0);
                var0 = var8;
                if (!var1) {
                    _fun72409_ip = 624;
                    continue _fun72409
                }
            case 524:
                var3 = _closure1_slot19;
                var2 = _closure1_slot20;
                var1 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 16;
                var5 = var13[var5];
                var7 = var12.bind(var4)(var5);
                var6 = var7.renderTitleWrapper;
                var5 = 18;
                var10 = var13[var5];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.x87QCk;
                var5 = var10.bind(var11)(var5);
                var5 = var6.bind(var7)(var8, var9, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 624:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/header/GuildChannelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9044, 3474, 1376, 5656, 1372, 1599, 1410, 3100, 1621, 660, 1369, 33, 566, 9037, 4792, 1234, 9045, 9035, 5957, 1358, 1684, 4807, 7016, 9049, 9029, 2]);