// modules/guild_tag/native/GuildTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun59568: for (var _fun59568_ip = 0;;) switch (_fun59568_ip) {
        case 0:
            var6 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var7;
            var0 = global;
            var5 = var0.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var0 = 0;
            var3 = var7[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var9 = var1.bind(var0)(var3);
            var _closure1_slot3 = var9;
            var1 = 1;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.Image;
            var _closure1_slot4 = var3;
            var1 = var1.View;
            var _closure1_slot5 = var1;
            var1 = 2;
            var1 = var7[var1];
            var1 = var11.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var1 = var1.GuildTagBadgeSize;
            var _closure1_slot7 = var1;
            var1 = 4;
            var1 = var7[var1];
            var1 = var6.bind(var0)(var1);
            var3 = var1.jsx;
            var _closure1_slot8 = var3;
            var3 = var1.Fragment;
            var _closure1_slot9 = var3;
            var1 = var1.jsxs;
            var _closure1_slot10 = var1;
            var1 = 5;
            var1 = var7[var1];
            var8 = var6.bind(var0)(var1);
            var3 = var8.createStyles;
            var1 = {};
            var5 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'backgroundColor': null,
                'borderRadius': 4,
                'paddingHorizontal': 4,
                'paddingVertical': 1,
                'columnGap': 2
            };
            var10 = 6;
            var10 = var7[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_MOD_STRONG;
            var5.backgroundColor = var10;
            var1.container = var5;
            var10 = {};
            var5 = 7;
            var5 = var7[var5];
            var11 = var6.bind(var0)(var5);
            var5 = var11.isAndroid;
            var12 = var5.bind(var11)();
            var5 = 16;
            var11 = var5;
            if (!var12) {
                _fun59568_ip = 289;
                continue _fun59568
            }
        case 286:
            var11 = 14;
        case 289:
            var10.lineHeight = var11;
            var11 = 'hidden';
            var10.overflow = var11;
            var1.tag = var10;
            var1 = var3.bind(var8)(var1);
            var _closure1_slot11 = var1;
            var3 = var9.memo;
            var1 = function(arg0) { // Environment: var4
                _fun59569: for (var _fun59569_ip = 0;;) switch (_fun59569_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.source;
                        var6 = var0.size;
                        var4 = undefined;
                        if (!(var6 === var4)) {
                            _fun59569_ip = 32;
                            continue _fun59569
                        }
                    case 19:
                        var0 = _closure1_slot7;
                        var6 = var0.SIZE_12;
                    case 32:
                        var0 = null;
                        var1 = var0 == var7;
                        if (var1) {
                            _fun59569_ip = 140;
                            continue _fun59569
                        }
                    case 41:
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var1.source = var7;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 8;
                        var7 = var10[var5];
                        var7 = var9.bind(var4)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var5 = var10[var5];
                        var5 = var9.bind(var4)(var5);
                        var5 = var5.t;
                        var5 = var5.HHYPgJ;
                        var5 = var7.bind(var8)(var5);
                        var1.alt = var5;
                        var5 = {};
                        var5.width = var6;
                        var5.height = var6;
                        var1.style = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 140:
                        return var0;
                }
            };
            var3 = var3.bind(var9)(var1);
            var _closure1_slot12 = var3;
            var8 = var9.memo;
            var1 = function(arg0) { // Environment: var4
                _fun59570: for (var _fun59570_ip = 0;;) switch (_fun59570_ip) {
                    case 0:
                        var1 = arg0;
                        var8 = var1.containerStyles;
                        var2 = var1.guildTag;
                        var _closure2_slot0 = var2;
                        var2 = var1.guildBadge;
                        var _closure2_slot1 = var2;
                        var9 = var1.onPress;
                        var7 = var1.disabled;
                        var4 = undefined;
                        if (!(var7 === var4)) {
                            _fun59570_ip = 49;
                            continue _fun59570
                        }
                    case 47:
                        var7 = false;
                    case 49:
                        var2 = var1.textVariant;
                        if (!(var2 === var4)) {
                            _fun59570_ip = 65;
                            continue _fun59570
                        }
                    case 59:
                        var2 = 'text-xs/semibold';
                    case 65:
                        var _closure2_slot2 = var2;
                        var2 = var1.textColor;
                        if (!(var2 === var4)) {
                            _fun59570_ip = 85;
                            continue _fun59570
                        }
                    case 79:
                        var2 = 'text-default';
                    case 85:
                        var _closure2_slot3 = var2;
                        var2 = var1.textStyle;
                        var _closure2_slot4 = var2;
                        var1 = var1.badgeSize;
                        if (!(var1 === var4)) {
                            _fun59570_ip = 122;
                            continue _fun59570
                        }
                    case 109:
                        var2 = _closure1_slot7;
                        var1 = var2.SIZE_12;
                    case 122:
                        var _closure2_slot5 = var1;
                        var _closure2_slot6 = var4;
                        var2 = _closure1_slot11;
                        var6 = var2.bind(var4)();
                        _closure2_slot6 = var6;
                        var5 = function() { // Original name: renderContent, environment: var0
                            _fun59571: for (var _fun59571_ip = 0;;) switch (_fun59571_ip) {
                                case 0:
                                    var3 = _closure1_slot10;
                                    var2 = _closure1_slot9;
                                    var1 = {};
                                    var5 = _closure2_slot1;
                                    var4 = null;
                                    if (!(var4 != var5)) {
                                        _fun59571_ip = 41;
                                        continue _fun59571
                                    }
                                case 26:
                                    var4 = _closure2_slot1;
                                    var5 = 'string';
                                    var4 = typeof var4;
                                    if (!(var5 !== var4)) {
                                        _fun59571_ip = 47;
                                        continue _fun59571
                                    }
                                case 41:
                                    var5 = _closure2_slot1;
                                    _fun59571_ip = 87;
                                    continue _fun59571;
                                case 47:
                                    var9 = _closure1_slot8;
                                    var7 = _closure1_slot12;
                                    var6 = {};
                                    var4 = {};
                                    var10 = _closure2_slot1;
                                    var4.uri = var10;
                                    var6.source = var4;
                                    var4 = _closure2_slot5;
                                    var6.size = var4;
                                    var4 = undefined;
                                    var5 = var9.bind(var4)(var7, var6);
                                case 87:
                                    var4 = new Array(2);
                                    var4[0] = var5;
                                    var7 = _closure1_slot8;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var0 = 9;
                                    var5 = var5[var0];
                                    var0 = undefined;
                                    var5 = var6.bind(var0)(var5);
                                    var6 = var5.Text;
                                    var5 = {};
                                    var9 = _closure2_slot2;
                                    var5.variant = var9;
                                    var9 = _closure2_slot3;
                                    var5.color = var9;
                                    var9 = 1;
                                    var5.lineClamp = var9;
                                    var9 = 'tail';
                                    var5.ellipsizeMode = var9;
                                    var9 = _closure2_slot6;
                                    var10 = var9.tag;
                                    var9 = new Array(2);
                                    var9[0] = var10;
                                    var10 = _closure2_slot4;
                                    var9[1] = var10;
                                    var5.style = var9;
                                    var8 = _closure2_slot0;
                                    var5.children = var8;
                                    var5 = var7.bind(var0)(var6, var5);
                                    var4[1] = var5;
                                    var1.children = var4;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var0 = null;
                        if (!(var0 == var9)) {
                            _fun59570_ip = 203;
                            continue _fun59570
                        }
                    case 156:
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot5;
                        var0 = {};
                        var11 = var6.container;
                        var10 = new Array(2);
                        var10[0] = var11;
                        var10[1] = var8;
                        var0.style = var10;
                        var10 = var5.bind(var4)();
                        var0.children = var10;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun59570_ip = 297;
                        continue _fun59570;
                    case 203:
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 10;
                        var1 = var10[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.PressableHighlight;
                        var1 = {};
                        var1.onPress = var9;
                        var9 = var6.container;
                        var6 = new Array(2);
                        var6[0] = var9;
                        var6[1] = var8;
                        var1.style = var6;
                        var1.disabled = var7;
                        var6 = 'button';
                        var1.accessibilityRole = var6;
                        var6 = {};
                        var6.disabled = var7;
                        var1.accessibilityState = var6;
                        var5 = var5.bind(var4)();
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 297:
                        return var0;
                }
            };
            var1 = var8.bind(var9)(var1);
            var _closure1_slot13 = var1;
            var8 = var9.memo;
            var4 = function(arg0) { // Environment: var4
                _fun59572: for (var _fun59572_ip = 0;;) switch (_fun59572_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = var6.primaryGuild;
                        var _closure2_slot0 = var1;
                        var12 = var6.userId;
                        var _closure2_slot1 = var12;
                        var7 = var6.disabledTooltip;
                        var4 = undefined;
                        if (!(var7 === var4)) {
                            _fun59572_ip = 38;
                            continue _fun59572
                        }
                    case 36:
                        var7 = false;
                    case 38:
                        var8 = var6.badgeSize;
                        if (!(var8 === var4)) {
                            _fun59572_ip = 61;
                            continue _fun59572
                        }
                    case 48:
                        var2 = _closure1_slot7;
                        var8 = var2.SIZE_12;
                    case 61:
                        var5 = {
                            'primaryGuild': 0,
                            'userId': 0,
                            'disabledTooltip': 0,
                            'badgeSize': 0
                        };
                        var2 = null;
                        var16 = var5;
                        var15 = null;
                        var3 = silentSetPrototypeOf(var16, var15);
                        var16 = {};
                        var15 = var6;
                        var14 = var5;
                        var6 = copyDataProperties(var16, var15, var14);
                        var _closure2_slot2 = var4;
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 11;
                        var3 = var10[var3];
                        var11 = var5.bind(var4)(var3);
                        var10 = var11.useStateFromStoresObject;
                        var3 = _closure1_slot6;
                        var5 = new Array(1);
                        var5[0] = var3;
                        var3 = new Array(2);
                        var3[0] = var12;
                        var3[1] = var1;
                        var1 = function() { // Environment: var0
                            _fun59573: for (var _fun59573_ip = 0;;) switch (_fun59573_ip) {
                                case 0:
                                    var4 = _closure1_slot6;
                                    var3 = var4.getUser;
                                    var2 = _closure2_slot1;
                                    var5 = var3.bind(var4)(var2);
                                    var4 = null;
                                    var6 = var4 == var5;
                                    var3 = undefined;
                                    var2 = undefined;
                                    if (var6) {
                                        _fun59573_ip = 44;
                                        continue _fun59573
                                    }
                                case 38:
                                    var2 = var5.primaryGuild;
                                case 44:
                                    if (!(var4 == var2)) {
                                        _fun59573_ip = 52;
                                        continue _fun59573
                                    }
                                case 48:
                                    var2 = _closure2_slot0;
                                case 52:
                                    var1 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 12;
                                    var0 = var4[var0];
                                    var1 = var1.bind(var3)(var0);
                                    var0 = var1.getUserPrimaryGuild;
                                    var1 = var0.bind(var1)(var2);
                                    var0 = {};
                                    var2 = var1.tag;
                                    var0.tag = var2;
                                    var2 = var1.badge;
                                    var0.badge = var2;
                                    var1 = var1.guildId;
                                    var0.guildId = var1;
                                    return var0;
                            }
                        };
                        var1 = var10.bind(var11)(var5, var1, var3);
                        var10 = var1.tag;
                        var12 = var1.badge;
                        var11 = var1.guildId;
                        _closure2_slot2 = var11;
                        var5 = _closure1_slot3;
                        var3 = var5.useCallback;
                        var1 = new Array(1);
                        var1[0] = var11;
                        var0 = function() { // Environment: var0
                            _fun59574: for (var _fun59574_ip = 0;;) switch (_fun59574_ip) {
                                case 0:
                                    var1 = _closure2_slot2;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun59574_ip = 123;
                                        continue _fun59574
                                    }
                                case 13:
                                    var3 = _closure1_slot1;
                                    var0 = _closure1_slot2;
                                    var2 = 13;
                                    var2 = var0[var2];
                                    var6 = undefined;
                                    var4 = var3.bind(var6)(var2);
                                    var3 = var4.openLazy;
                                    var2 = _closure1_slot0;
                                    var1 = 15;
                                    var1 = var0[var1];
                                    var2 = var2.bind(var6)(var1);
                                    var1 = 14;
                                    var1 = var0[var1];
                                    var0 = var0.paths;
                                    var2 = var2.bind(var6)(var1, var0);
                                    var6 = _closure2_slot2;
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var1 = var0.concat;
                                    var0 = 'GuildProfileActionSheet:';
                                    var1 = var1.bind(var0)(var6);
                                    var0 = {};
                                    var5 = _closure2_slot2;
                                    var0.guildId = var5;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                case 123:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var3.bind(var5)(var0, var1);
                        var1 = var2 == var11;
                        var0 = null;
                        if (var1) {
                            _fun59572_ip = 324;
                            continue _fun59572
                        }
                    case 224:
                        var1 = var2 == var10;
                        var0 = null;
                        if (var1) {
                            _fun59572_ip = 324;
                            continue _fun59572
                        }
                    case 233:
                        var3 = _closure1_slot8;
                        var2 = _closure1_slot13;
                        var1 = {};
                        var1.guildTag = var10;
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var9 = 12;
                        var9 = var13[var9];
                        var10 = var10.bind(var4)(var9);
                        var9 = var10.getGuildTagBadgeUrl;
                        var9 = var9.bind(var10)(var11, var12, var8);
                        var1.guildBadge = var9;
                        var1.badgeSize = var8;
                        var16 = var1;
                        var15 = var6;
                        var6 = copyDataProperties(var16, var15);
                        var6 = undefined;
                        if (var7) {
                            _fun59572_ip = 309;
                            continue _fun59572
                        }
                    case 306:
                        var6 = var5;
                    case 309:
                        var5 = 'onPress';
                        var1[var5] = var6;
                        var0 = var3.bind(var4)(var2, var1);
                    case 324:
                        return var0;
                }
            };
            var4 = var8.bind(var9)(var4);
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/guild_tag/native/GuildTag.tsx';
            var5 = var6.bind(var7)(var5);
            var2.default = var4;
            var2.GuildTagBadge = var3;
            var2.BaseGuildTagChiplet = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 6600, 33, 1297, 671, 478, 1234, 3901, 4864, 566, 6770, 3237, 7340, 1307, 2]);