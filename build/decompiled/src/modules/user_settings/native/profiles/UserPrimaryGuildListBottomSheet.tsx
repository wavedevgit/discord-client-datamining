// modules/user_settings/native/profiles/UserPrimaryGuildListBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun79869: for (var _fun79869_ip = 0;;) switch (_fun79869_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var5;
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
            var3 = metroImportAll;
            var0 = undefined;
            var7 = var3.bind(var0)(var6);
            var _closure1_slot3 = var7;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var12 = 2;
            var3 = var5[var12];
            var3 = var4.bind(var0)(var3);
            var3 = var3.GuildTagBadgeSize;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot6 = var6;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var14 = 4;
            var3 = var5[var14];
            var8 = var4.bind(var0)(var3);
            var6 = var8.createStyles;
            var3 = {};
            var9 = {};
            var10 = 64;
            var9.height = var10;
            var3.container = var9;
            var9 = {};
            var9.height = var10;
            var10 = 5;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.INTERACTIVE_BACKGROUND_ACTIVE;
            var9.backgroundColor = var13;
            var3.containerPressed = var9;
            var9 = {};
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_SURFACE_HIGH;
            var9.backgroundColor = var13;
            var3.bottomSheetListContainer = var9;
            var13 = 16;
            var9 = {
                'paddingHorizontal': 16,
                'flexDirection': 'row',
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var3.titleContainer = var9;
            var9 = {};
            var9.marginLeft = var14;
            var3.guildIcon = var9;
            var9 = {};
            var9.padding = var12;
            var3.tag = var9;
            var9 = {};
            var12 = 6;
            var12 = var5[var12];
            var14 = var4.bind(var0)(var12);
            var12 = var14.isAndroid;
            var14 = var12.bind(var14)();
            var12 = 18;
            if (!var14) {
                _fun79869_ip = 331;
                continue _fun79869
            }
        case 328:
            var12 = var13;
        case 331:
            var9.lineHeight = var12;
            var3.tagStyles = var9;
            var9 = {};
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.BORDER_SUBTLE;
            var9.backgroundColor = var10;
            var3.divider = var9;
            var9 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'gap': 8,
                'height': 20
            };
            var3.itemTrailingStyle = var9;
            var3 = var6.bind(var8)(var3);
            var _closure1_slot8 = var3;
            var6 = var7.memo;
            var3 = function(arg0) { // Environment: var1
                _fun79870: for (var _fun79870_ip = 0;;) switch (_fun79870_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.start;
                        var5 = var0.end;
                        var7 = var0.item;
                        var _closure2_slot0 = var7;
                        var11 = var0.selected;
                        var _closure2_slot1 = var11;
                        var0 = var0.onSelectGuild;
                        var _closure2_slot2 = var0;
                        var0 = _closure1_slot8;
                        var3 = undefined;
                        var16 = var0.bind(var3)();
                        var14 = null;
                        var0 = var14 == var7;
                        var15 = undefined;
                        if (var0) {
                            _fun79870_ip = 74;
                            continue _fun79870
                        }
                    case 68:
                        var15 = var7.profile;
                    case 74:
                        var13 = var14 != var7;
                        if (!var13) {
                            _fun79870_ip = 156;
                            continue _fun79870
                        }
                    case 81:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 7;
                        var0 = var2[var0];
                        var10 = var1.bind(var3)(var0);
                        var9 = var10.getGuildTagBadgeUrl;
                        var2 = var7.id;
                        var1 = var14 == var15;
                        var0 = undefined;
                        if (var1) {
                            _fun79870_ip = 127;
                            continue _fun79870
                        }
                    case 121:
                        var0 = var15.badge;
                    case 127:
                        var12 = var14 != var0;
                        var1 = undefined;
                        if (!var12) {
                            _fun79870_ip = 139;
                            continue _fun79870
                        }
                    case 136:
                        var1 = var0;
                    case 139:
                        var0 = _closure1_slot5;
                        var0 = var0.SIZE_24;
                        var13 = var9.bind(var10)(var2, var1, var0);
                    case 156:
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var0 = 8;
                        var0 = var9[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.TableRow;
                        var0 = {};
                        var0.start = var6;
                        var0.end = var5;
                        var4 = function() { // Original name: onPress, environment: var4
                            _fun79871: for (var _fun79871_ip = 0;;) switch (_fun79871_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var3 = _closure2_slot1;
                                    var0 = null;
                                    var1 = null;
                                    if (var3) {
                                        _fun79871_ip = 55;
                                        continue _fun79871
                                    }
                                case 18:
                                    var3 = _closure2_slot0;
                                    var5 = var0 == var3;
                                    var3 = undefined;
                                    if (var5) {
                                        _fun79871_ip = 40;
                                        continue _fun79871
                                    }
                                case 31:
                                    var4 = _closure2_slot0;
                                    var3 = var4.id;
                                case 40:
                                    var4 = var0 != var3;
                                    var0 = null;
                                    if (!var4) {
                                        _fun79871_ip = 52;
                                        continue _fun79871
                                    }
                                case 49:
                                    var0 = var3;
                                case 52:
                                    var1 = var0;
                                case 55:
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 9;
                                    var1 = var3[var1];
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.hideActionSheet;
                                    var1 = var1.bind(var2)();
                                    return var0;
                            }
                        };
                        var0.onPress = var4;
                        if (!(var14 == var7)) {
                            _fun79870_ip = 268;
                            continue _fun79870
                        }
                    case 211:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 10;
                        var5 = var10[var4];
                        var5 = var9.bind(var3)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var10[var4];
                        var4 = var9.bind(var3)(var4);
                        var4 = var4.t;
                        var4 = var4.PoWNfe;
                        var4 = var5.bind(var6)(var4);
                        _fun79870_ip = 273;
                        continue _fun79870;
                    case 268:
                        var4 = var7.name;
                    case 273:
                        var0.label = var4;
                        var5 = var14 != var7;
                        var4 = null;
                        if (!var5) {
                            _fun79870_ip = 361;
                            continue _fun79870
                        }
                    case 286:
                        var9 = _closure1_slot6;
                        var6 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var10 = 11;
                        var5 = var17[var10];
                        var6 = var6.bind(var3)(var5);
                        var5 = {};
                        var12 = var16.guildIcon;
                        var5.style = var12;
                        var5.guild = var7;
                        var12 = _closure1_slot0;
                        var10 = var17[var10];
                        var10 = var12.bind(var3)(var10);
                        var10 = var10.GuildIconSizes;
                        var10 = var10.SMALL_32;
                        var5.size = var10;
                        var4 = var9.bind(var3)(var6, var5);
                    case 361:
                        var0.icon = var4;
                        var6 = _closure1_slot7;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var9 = var16.itemTrailingStyle;
                        var4.style = var9;
                        var9 = var14 != var7;
                        if (!var9) {
                            _fun79870_ip = 396;
                            continue _fun79870
                        }
                    case 392:
                        var9 = var14 != var15;
                    case 396:
                        if (!var9) {
                            _fun79870_ip = 525;
                            continue _fun79870
                        }
                    case 402:
                        var12 = _closure1_slot6;
                        var10 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var7 = 12;
                        var7 = var17[var7];
                        var7 = var10.bind(var3)(var7);
                        var10 = var7.BaseGuildTagChiplet;
                        var7 = {};
                        var17 = var16.tag;
                        var7.containerStyles = var17;
                        var16 = var16.tagStyles;
                        var7.textStyle = var16;
                        var15 = var15.tag;
                        var16 = var14 != var15;
                        var14 = undefined;
                        if (!var16) {
                            _fun79870_ip = 472;
                            continue _fun79870
                        }
                    case 469:
                        var14 = var15;
                    case 472:
                        var7.guildTag = var14;
                        var7.guildBadge = var13;
                        var13 = _closure1_slot5;
                        var13 = var13.SIZE_16;
                        var7.badgeSize = var13;
                        var13 = 'heading-md/semibold';
                        var7.textVariant = var13;
                        var13 = 'text-strong';
                        var7.textColor = var13;
                        var9 = var12.bind(var3)(var10, var7);
                    case 525:
                        var7 = new Array(2);
                        var7[0] = var9;
                        var10 = _closure1_slot6;
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 13;
                        var8 = var12[var8];
                        var8 = var9.bind(var3)(var8);
                        var9 = var8.FormRadio;
                        var8 = {};
                        var8.selected = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.trailing = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var6.bind(var7)(var3);
            var _closure1_slot9 = var3;
            var3 = 19;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_settings/native/profiles/UserPrimaryGuildListBottomSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: UserPrimaryGuildListBottomSheet, environment: var1
                var1 = arg0;
                var0 = var1.availableGuilds;
                var _closure2_slot0 = var0;
                var2 = var1.userPrimaryGuild;
                var _closure2_slot1 = var2;
                var1 = var1.onSelectGuild;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot8;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var _closure2_slot3 = var8;
                var5 = _closure1_slot3;
                var2 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.sortBy;
                    var1 = _closure2_slot0;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = var1.toLowerCase;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = var2.bind(var3)(var1, var0);
                    var0 = [null];
                    var4 = 1;
                    var6 = var0;
                    var1 = arraySpread(var6, var5, var4);
                    return var0;
                };
                var7 = var2.bind(var5)(var0, var1);
                var _closure2_slot4 = var7;
                var2 = _closure1_slot6;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 15;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var10 = _closure1_slot4;
                var4 = {};
                var8 = var8.titleContainer;
                var4.style = var8;
                var8 = 16;
                var11 = var9[var8];
                var11 = var5.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var13 = 10;
                var14 = var9[var13];
                var14 = var5.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var9[var13];
                var13 = var5.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["YtZ+vG"];
                var13 = var14.bind(var15)(var13);
                var11.children = var13;
                var11 = var2.bind(var3)(var12, var11);
                var4.children = var11;
                var4 = var2.bind(var3)(var10, var4);
                var0.header = var4;
                var4 = 17;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetFlashList;
                var4 = {};
                var9 = function() { // Original name: ItemSeparatorComponent, environment: var6
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormDivider;
                    var0 = {};
                    var4 = true;
                    var0.iconPush = var4;
                    var4 = _closure2_slot3;
                    var4 = var4.divider;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4.ItemSeparatorComponent = var9;
                var4.data = var7;
                var7 = {};
                var7.padding = var8;
                var4.contentContainerStyle = var7;
                var7 = function(arg0) { // Original name: keyExtractor, environment: var6
                    _fun79876: for (var _fun79876_ip = 0;;) switch (_fun79876_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = 'none-guild-type';
                            if (!var2) {
                                _fun79876_ip = 23;
                                continue _fun79876
                            }
                        case 18:
                            var0 = var1.id;
                        case 23:
                            return var0;
                    }
                };
                var4.keyExtractor = var7;
                var6 = function(arg0) { // Original name: renderItem, environment: var6
                    _fun79877: for (var _fun79877_ip = 0;;) switch (_fun79877_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.item;
                            var5 = var0.index;
                            var3 = _closure1_slot6;
                            var2 = _closure1_slot9;
                            var1 = {};
                            var0 = 0;
                            var0 = var0 === var5;
                            var1.start = var0;
                            var0 = _closure2_slot4;
                            var6 = var0.length;
                            var0 = 1;
                            var0 = var6 - var0;
                            var0 = var5 === var0;
                            var1.end = var0;
                            var1.item = var7;
                            var0 = _closure2_slot1;
                            var5 = null;
                            var8 = var5 == var0;
                            var0 = undefined;
                            var6 = undefined;
                            if (var8) {
                                _fun79877_ip = 93;
                                continue _fun79877
                            }
                        case 84:
                            var8 = _closure2_slot1;
                            var6 = var8.id;
                        case 93:
                            var8 = var5 == var7;
                            var5 = undefined;
                            if (var8) {
                                _fun79877_ip = 107;
                                continue _fun79877
                            }
                        case 102:
                            var5 = var7.id;
                        case 107:
                            var5 = var6 === var5;
                            var1.selected = var5;
                            var4 = _closure2_slot2;
                            var1.onSelectGuild = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var4.renderItem = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6597, 33, 1297, 671, 478, 6767, 4854, 3237, 1234, 7353, 7336, 5380, 22, 4887, 3895, 5711, 5335, 2]);