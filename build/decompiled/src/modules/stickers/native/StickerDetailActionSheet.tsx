// modules/stickers/native/StickerDetailActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun74601: for (var _fun74601_ip = 0;;) switch (_fun74601_ip) {
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
            var10 = 0;
            var3 = var5[var10];
            var0 = undefined;
            var3 = var11.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var12 = 1;
            var3 = var5[var12];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var6 = var5[var3];
            var3 = metroImportAll;
            var6 = var3.bind(var0)(var6);
            var _closure1_slot5 = var6;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.View;
            var _closure1_slot6 = var7;
            var7 = var3.ActivityIndicator;
            var _closure1_slot7 = var7;
            var3 = var3.Pressable;
            var _closure1_slot8 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var11.bind(var0)(var3);
            var _closure1_slot11 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.PADDING_HORIZONTAL;
            var _closure1_slot12 = var7;
            var7 = var3.MIN_MARGIN;
            var _closure1_slot13 = var7;
            var3 = var3.STICKER_SIZE;
            var _closure1_slot14 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.AnalyticsPages;
            var _closure1_slot15 = var7;
            var7 = var3.AnalyticsSections;
            var _closure1_slot16 = var7;
            var7 = var3.AnalyticEvents;
            var _closure1_slot17 = var7;
            var7 = var3.GuildFeatures;
            var _closure1_slot18 = var7;
            var3 = var3.UserSettingsSections;
            var _closure1_slot19 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ACTION_SHEET_MAX_WIDTH;
            var _closure1_slot20 = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot21 = var7;
            var7 = var3.Fragment;
            var _closure1_slot22 = var7;
            var3 = var3.jsxs;
            var _closure1_slot23 = var3;
            var3 = 11;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var9 = {};
            var14 = 16;
            var9.padding = var14;
            var13 = 12;
            var13 = var5[var13];
            var15 = var4.bind(var0)(var13);
            var13 = var15.isAndroid;
            var15 = var13.bind(var15)();
            var13 = 0;
            if (!var15) {
                _fun74601_ip = 422;
                continue _fun74601
            }
        case 419:
            var13 = var14;
        case 422:
            var9.paddingBottom = var13;
            var3.content = var9;
            var9 = {
                'lineHeight': 18,
                'marginTop': 4
            };
            var3.description = var9;
            var9 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.guildEmojiTopContainer = var9;
            var9 = {
                'paddingLeft': 16,
                'flex': 1
            };
            var3.guildEmojiDescription = var9;
            var9 = {};
            var9.marginLeft = var10;
            var10 = 13;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var9.marginTop = var13;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var9.marginBottom = var13;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BORDER_SUBTLE;
            var9.backgroundColor = var13;
            var3.divider = var9;
            var9 = {
                'height': 32,
                'width': 32,
                'justifyContent': 'center',
                'alignItems': 'center'
            };
            var3.moreMenuIcon = var9;
            var9 = {
                'flexDirection': 'row',
                'alignItems': 'flex-start'
            };
            var3.standardStickerHeader = var9;
            var9 = {};
            var9.flex = var12;
            var3.standardStickerHeaderText = var9;
            var9 = {};
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_4;
            var9.paddingTop = var12;
            var3.favoriteContainer = var9;
            var9 = {
                'height': 32,
                'width': 32
            };
            var3.starIcon = var9;
            var9 = {};
            var12 = var5[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.ICON_FEEDBACK_WARNING;
            var9.tintColor = var12;
            var3.starIconSelected = var9;
            var9 = {};
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.INTERACTIVE_TEXT_DEFAULT;
            var9.tintColor = var10;
            var3.starIconUnselected = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot24 = var3;
            var3 = function arg0() {
                _fun74602: for (var _fun74602_ip = 0;;) switch (_fun74602_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.sticker;
                        var3 = var1.channel;
                        var _closure2_slot0 = var3;
                        var1 = var1.chatInputRef;
                        var _closure2_slot1 = var1;
                        var5 = _closure1_slot24;
                        var4 = undefined;
                        var5 = var5.bind(var4)();
                        var _closure2_slot2 = var5;
                        var8 = var2.pack_id;
                        var _closure2_slot3 = var8;
                        var2 = var2.name;
                        var _closure2_slot4 = var2;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var9 = 22;
                        var2 = var7[var9];
                        var12 = var6.bind(var4)(var2);
                        var11 = var12.useStateFromStores;
                        var5 = _closure1_slot11;
                        var10 = new Array(1);
                        var10[0] = var5;
                        var2 = function() { // Environment: var0
                            var2 = _closure1_slot11;
                            var1 = var2.getStickerPack;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var11.bind(var12)(var10, var2);
                        var _closure2_slot5 = var2;
                        var9 = var7[var9];
                        var11 = var6.bind(var4)(var9);
                        var10 = var11.useStateFromStores;
                        var9 = new Array(1);
                        var9[0] = var5;
                        var5 = function() { // Environment: var0
                            var2 = _closure1_slot11;
                            var1 = var2.isPremiumPack;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5 = var10.bind(var11)(var9, var5);
                        var _closure2_slot6 = var5;
                        var5 = 14;
                        var5 = var7[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.useFetchStickerPack;
                        var5 = var5.bind(var6)(var8);
                        var6 = _closure1_slot1;
                        var5 = 23;
                        var5 = var7[var5];
                        var5 = var6.bind(var4)(var5);
                        var5 = var5.bind(var4)();
                        var6 = var5.width;
                        var7 = _closure1_slot12;
                        var5 = 2;
                        var5 = var5 * var7;
                        var5 = var6 - var5;
                        var _closure2_slot7 = var5;
                        var8 = global;
                        var7 = var8.Math;
                        var6 = var7.floor;
                        var11 = var8.Math;
                        var10 = var11.min;
                        var8 = _closure1_slot20;
                        var9 = _closure1_slot13;
                        var5 = var5 - var9;
                        var8 = var10.bind(var11)(var8, var5);
                        var5 = _closure1_slot14;
                        var5 = var5 + var9;
                        var5 = var8 / var5;
                        var5 = var6.bind(var7)(var5);
                        var _closure2_slot8 = var5;
                        var7 = _closure1_slot5;
                        var6 = var7.useMemo;
                        var3 = var3.guild_id;
                        var5 = new Array(1);
                        var5[0] = var3;
                        var3 = function() { // Environment: var0
                            _fun74605: for (var _fun74605_ip = 0;;) switch (_fun74605_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot0;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun74605_ip = 35;
                                        continue _fun74605
                                    }
                                case 20:
                                    var1 = _closure1_slot15;
                                    var1 = var1.DM_CHANNEL;
                                    _fun74605_ip = 48;
                                    continue _fun74605;
                                case 35:
                                    var2 = _closure1_slot15;
                                    var1 = var2.GUILD_CHANNEL;
                                case 48:
                                    var0.page = var1;
                                    var1 = _closure1_slot16;
                                    var1 = var1.STICKER_POPOUT;
                                    var0.section = var1;
                                    return var0;
                            }
                        };
                        var3 = var6.bind(var7)(var3, var5);
                        var _closure2_slot9 = var3;
                        var6 = var7.useEffect;
                        var5 = new Array(2);
                        var5[0] = var3;
                        var5[1] = var2;
                        var3 = function() { // Environment: var0
                            _fun74606: for (var _fun74606_ip = 0;;) switch (_fun74606_ip) {
                                case 0:
                                    var1 = _closure2_slot5;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun74606_ip = 93;
                                        continue _fun74606
                                    }
                                case 13:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 24;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.track;
                                    var0 = _closure1_slot17;
                                    var1 = var0.OPEN_POPOUT;
                                    var0 = {};
                                    var5 = _closure2_slot9;
                                    var0.location = var5;
                                    var5 = 'Sticker Upsell Sheet';
                                    var0.type = var5;
                                    var4 = _closure2_slot5;
                                    var4 = var4.id;
                                    var0.sticker_pack_id = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 93:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var6.bind(var7)(var3, var5);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun74602_ip = 379;
                            continue _fun74602
                        }
                    case 365:
                        var0 = function(arg0) { // Environment: var0
                            _fun74607: for (var _fun74607_ip = 0;;) switch (_fun74607_ip) {
                                case 0:
                                    var11 = arg0;
                                    var _closure3_slot0 = var11;
                                    var1 = _closure2_slot6;
                                    var7 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var14 = 19;
                                    var2 = var0[var14];
                                    var3 = undefined;
                                    var2 = var7.bind(var3)(var2);
                                    var4 = var2.intl;
                                    var2 = var4.format;
                                    var0 = var0[var14];
                                    var0 = var7.bind(var3)(var0);
                                    var0 = var0.t;
                                    if (var1) {
                                        _fun74607_ip = 96;
                                        continue _fun74607
                                    }
                                case 68:
                                    var7 = var0.OzB6e3;
                                    var1 = {};
                                    var8 = var11.name;
                                    var1.stickerPackName = var8;
                                    var13 = var2.bind(var4)(var7, var1);
                                    _fun74607_ip = 122;
                                    continue _fun74607;
                                case 96:
                                    var1 = var0.auckXz;
                                    var0 = {};
                                    var7 = var11.name;
                                    var0.stickerPackName = var7;
                                    var13 = var2.bind(var4)(var1, var0);
                                case 122:
                                    var2 = _closure1_slot23;
                                    var1 = _closure1_slot22;
                                    var0 = {};
                                    var10 = _closure1_slot21;
                                    var8 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var7 = 18;
                                    var4 = var12[var7];
                                    var4 = var8.bind(var3)(var4);
                                    var15 = var4.Text;
                                    var4 = {
                                        'variant': 'heading-md/extrabold',
                                        'color': 'mobile-text-heading-primary'
                                    };
                                    var16 = _closure2_slot4;
                                    var4.children = var16;
                                    var15 = var10.bind(var3)(var15, var4);
                                    var4 = new Array(5);
                                    var4[0] = var15;
                                    var7 = var12[var7];
                                    var7 = var8.bind(var3)(var7);
                                    var8 = var7.Text;
                                    var7 = {};
                                    var15 = _closure2_slot2;
                                    var15 = var15.description;
                                    var7.style = var15;
                                    var15 = 'text-sm/medium';
                                    var7.variant = var15;
                                    var7.children = var13;
                                    var7 = var10.bind(var3)(var8, var7);
                                    var4[1] = var7;
                                    var8 = _closure1_slot1;
                                    var7 = 25;
                                    var7 = var12[var7];
                                    var8 = var8.bind(var3)(var7);
                                    var7 = {};
                                    var12 = _closure2_slot7;
                                    var7.containerWidth = var12;
                                    var15 = var11.stickers;
                                    var13 = var15.slice;
                                    var11 = _closure2_slot8;
                                    var12 = 0;
                                    var12 = var13.bind(var15)(var12, var11);
                                    var7.stickers = var12;
                                    var7.rowSize = var11;
                                    var7 = var10.bind(var3)(var8, var7);
                                    var4[2] = var7;
                                    var8 = _closure2_slot6;
                                    var7 = null;
                                    if (!var8) {
                                        _fun74607_ip = 383;
                                        continue _fun74607
                                    }
                                case 327:
                                    var11 = _closure1_slot21;
                                    var10 = _closure1_slot6;
                                    var8 = {};
                                    var12 = {};
                                    var15 = _closure1_slot1;
                                    var16 = _closure1_slot2;
                                    var13 = 13;
                                    var13 = var16[var13];
                                    var13 = var15.bind(var3)(var13);
                                    var13 = var13.spacing;
                                    var13 = var13.PX_16;
                                    var12.height = var13;
                                    var8.style = var12;
                                    var7 = var11.bind(var3)(var10, var8);
                                case 383:
                                    var4[3] = var7;
                                    var5 = _closure2_slot6;
                                    if (!var5) {
                                        _fun74607_ip = 501;
                                        continue _fun74607
                                    }
                                case 394:
                                    var8 = _closure1_slot21;
                                    var13 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var6 = 26;
                                    var6 = var10[var6];
                                    var6 = var13.bind(var3)(var6);
                                    var7 = var6.Button;
                                    var6 = {};
                                    var11 = 'secondary';
                                    var6.variant = var11;
                                    var11 = var10[var14];
                                    var11 = var13.bind(var3)(var11);
                                    var12 = var11.intl;
                                    var11 = var12.string;
                                    var10 = var10[var14];
                                    var10 = var13.bind(var3)(var10);
                                    var10 = var10.t;
                                    var10 = var10.GPy3Ar;
                                    var10 = var11.bind(var12)(var10);
                                    var6.text = var10;
                                    var9 = function() {
                                        _fun74608: for (var _fun74608_ip = 0;;) switch (_fun74608_ip) {
                                            case 0:
                                                var3 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var0 = 27;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var3 = var3.bind(var0)(var1);
                                                var1 = var3.hideStickerDetailActionSheet;
                                                var1 = var1.bind(var3)();
                                                var1 = _closure3_slot0;
                                                var4 = null;
                                                if (!(var4 != var1)) {
                                                    _fun74608_ip = 66;
                                                    continue _fun74608
                                                }
                                            case 48:
                                                var3 = _closure2_slot6;
                                                if (!var3) {
                                                    _fun74608_ip = 66;
                                                    continue _fun74608
                                                }
                                            case 58:
                                                var3 = _closure2_slot1;
                                                if (!(var4 == var3)) {
                                                    _fun74608_ip = 146;
                                                    continue _fun74608
                                                }
                                            case 66:
                                                var4 = _closure1_slot1;
                                                var8 = _closure1_slot2;
                                                var6 = 29;
                                                var3 = var8[var6];
                                                var4 = var4.bind(var0)(var3);
                                                var3 = {};
                                                var7 = _closure2_slot9;
                                                var3.analyticsLocation = var7;
                                                var7 = _closure1_slot0;
                                                var6 = var8[var6];
                                                var6 = var7.bind(var0)(var6);
                                                var6 = var6.AnalyticsPopoutType;
                                                var6 = var6.STICKER_PACK_UPSELL;
                                                var3.analyticsPopoutType = var6;
                                                var5 = _closure3_slot0;
                                                var3.stickerPack = var5;
                                                var3 = var4.bind(var0)(var3);
                                                _fun74608_ip = 186;
                                                continue _fun74608;
                                            case 146:
                                                var3 = _closure1_slot0;
                                                var4 = _closure1_slot2;
                                                var2 = 28;
                                                var2 = var4[var2];
                                                var4 = var3.bind(var0)(var2);
                                                var3 = var4.openStickerPickerToPackId;
                                                var2 = _closure2_slot1;
                                                var1 = _closure2_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                            case 186:
                                                return var0;
                                        }
                                    };
                                    var6.onPress = var9;
                                    var5 = var8.bind(var3)(var7, var6);
                                case 501:
                                    var4[4] = var5;
                                    var0.children = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var0 = var0.bind(var4)(var2);
                        _fun74602_ip = 403;
                        continue _fun74602;
                    case 379:
                        var3 = _closure1_slot21;
                        var2 = _closure1_slot7;
                        var1 = {};
                        var5 = 'large';
                        var1.size = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 403:
                        return var0;
                }
            };
            var _closure1_slot25 = var3;
            var3 = function arg0() {
                _fun74609: for (var _fun74609_ip = 0;;) switch (_fun74609_ip) {
                    case 0:
                        var0 = arg0;
                        var31 = var0.sticker;
                        var _closure2_slot0 = var31;
                        var8 = var0.channel;
                        var _closure2_slot1 = var8;
                        var4 = undefined;
                        var _closure2_slot4 = var4;
                        var _closure2_slot5 = var4;
                        var _closure2_slot6 = var4;
                        var _closure2_slot7 = var4;
                        var _closure2_slot8 = var4;
                        var _closure2_slot9 = var4;
                        var0 = _closure1_slot24;
                        var14 = var0.bind(var4)();
                        var1 = _closure1_slot5;
                        var0 = var1.useState;
                        var24 = null;
                        var1 = var0.bind(var1)(var24);
                        var0 = _closure1_slot4;
                        var5 = 2;
                        var0 = var0.bind(var4)(var1, var5);
                        var1 = 0;
                        var23 = var0[var1];
                        var _closure2_slot2 = var23;
                        var2 = 1;
                        var0 = var0[var2];
                        var _closure2_slot3 = var0;
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var0 = 22;
                        var0 = var6[var0];
                        var7 = var3.bind(var4)(var0);
                        var6 = var7.useStateFromStores;
                        var0 = _closure1_slot9;
                        var3 = new Array(1);
                        var3[0] = var0;
                        var0 = function() { // Environment: var15
                            var2 = _closure1_slot9;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.guild_id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var21 = var6.bind(var7)(var3, var0);
                        var7 = var24 != var21;
                        var0 = var24 == var21;
                        if (var0) {
                            _fun74609_ip = 198;
                            continue _fun74609
                        }
                    case 172:
                        var9 = var21.features;
                        var6 = var9.has;
                        var3 = _closure1_slot18;
                        var3 = var3.DISCOVERABLE;
                        var0 = var6.bind(var9)(var3);
                    case 198:
                        var6 = _closure1_slot5;
                        var3 = var6.useState;
                        var0 = !var0;
                        var3 = var3.bind(var6)(var0);
                        var0 = _closure1_slot4;
                        var0 = var0.bind(var4)(var3, var5);
                        var1 = var0[var1];
                        _closure2_slot4 = var1;
                        var0 = var0[var2];
                        _closure2_slot5 = var0;
                        var2 = _closure1_slot10;
                        var0 = var2.getCurrentUser;
                        var6 = var0.bind(var2)();
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 30;
                        var0 = var5[var0];
                        var2 = var3.bind(var4)(var0);
                        var0 = var2.canUseCustomStickersEverywhere;
                        var0 = var0.bind(var2)(var6);
                        var2 = 31;
                        var2 = var5[var2];
                        var10 = var3.bind(var4)(var2);
                        var6 = var10.useExperiment;
                        var3 = {};
                        var2 = 'StickerDetailActionSheet';
                        var3.location = var2;
                        var2 = {};
                        var9 = false;
                        var2.autoTrackExposure = var9;
                        var2 = var6.bind(var10)(var3, var2);
                        var6 = var2.tidaWebformEnabled;
                        var3 = _closure1_slot0;
                        var2 = 32;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.DeveloperMode;
                        var2 = var3.useSetting;
                        var2 = var2.bind(var3)();
                        var5 = var31.id;
                        var3 = function(arg0) { // Environment: var15
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var1 = _closure1_slot24;
                            var5 = undefined;
                            var1 = var1.bind(var5)();
                            var _closure3_slot1 = var1;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 14;
                            var3 = var7[var3];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.useFavoriteStickerIds;
                            var4 = var3.bind(var4)();
                            var3 = var4.includes;
                            var3 = var3.bind(var4)(var6);
                            var _closure3_slot2 = var3;
                            var5 = _closure1_slot5;
                            var4 = var5.useCallback;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = function(arg0) { // Environment: var0
                                _fun74612: for (var _fun74612_ip = 0;;) switch (_fun74612_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = {};
                                        var3 = _closure3_slot1;
                                        var6 = var3.starIcon;
                                        var7 = var2;
                                        var0 = copyDataProperties(var7, var6);
                                        if (var1) {
                                            _fun74612_ip = 46;
                                            continue _fun74612
                                        }
                                    case 28:
                                        var6 = var3.starIconUnselected;
                                        var7 = var2;
                                        var0 = copyDataProperties(var7, var6);
                                        var0 = var2;
                                        _fun74612_ip = 62;
                                        continue _fun74612;
                                    case 46:
                                        var6 = var3.starIconSelected;
                                        var7 = var2;
                                        var3 = copyDataProperties(var7, var6);
                                        var0 = var2;
                                    case 62:
                                        var3 = _closure1_slot21;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        if (var1) {
                                            _fun74612_ip = 102;
                                            continue _fun74612
                                        }
                                    case 80:
                                        var1 = 16;
                                        var2 = var4[var1];
                                        var1 = undefined;
                                        var1 = var5.bind(var1)(var2);
                                        var2 = var1.StarOutlineIcon;
                                        _fun74612_ip = 122;
                                        continue _fun74612;
                                    case 102:
                                        var1 = 15;
                                        var4 = var4[var1];
                                        var1 = undefined;
                                        var1 = var5.bind(var1)(var4);
                                        var2 = var1.StarIcon;
                                    case 122:
                                        var1 = {};
                                        var1.style = var0;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var5)(var1, var2);
                            var _closure3_slot3 = var1;
                            var4 = var5.useCallback;
                            var2 = new Array(3);
                            var2[0] = var3;
                            var2[1] = var6;
                            var2[2] = var1;
                            var0 = function() { // Environment: var0
                                _fun74613: for (var _fun74613_ip = 0;;) switch (_fun74613_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 17;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.hideActionSheet;
                                        var2 = var2.bind(var3)();
                                        var4 = function() {
                                            _fun74614: for (var _fun74614_ip = 0;;) switch (_fun74614_ip) {
                                                case 0:
                                                    var3 = _closure1_slot21;
                                                    var1 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var0 = 18;
                                                    var0 = var2[var0];
                                                    var2 = undefined;
                                                    var0 = var1.bind(var2)(var0);
                                                    var1 = var0.Text;
                                                    var0 = {};
                                                    var4 = {
                                                        'marginLeft': 8,
                                                        'marginTop': 2
                                                    };
                                                    var0.style = var4;
                                                    var4 = 'text-md/bold';
                                                    var0.variant = var4;
                                                    var4 = _closure3_slot2;
                                                    var8 = _closure1_slot0;
                                                    var9 = _closure1_slot2;
                                                    var5 = 19;
                                                    var6 = var9[var5];
                                                    var6 = var8.bind(var2)(var6);
                                                    var7 = var6.intl;
                                                    var6 = var7.string;
                                                    var5 = var9[var5];
                                                    var5 = var8.bind(var2)(var5);
                                                    var5 = var5.t;
                                                    if (var4) {
                                                        _fun74614_ip = 131;
                                                        continue _fun74614
                                                    }
                                                case 118:
                                                    var4 = var5.mE2e8A;
                                                    var4 = var6.bind(var7)(var4);
                                                    _fun74614_ip = 142;
                                                    continue _fun74614;
                                                case 131:
                                                    var5 = var5.in1rga;
                                                    var4 = var6.bind(var7)(var5);
                                                case 142:
                                                    var0.children = var4;
                                                    var0 = var3.bind(var2)(var1, var0);
                                                    return var0;
                                            }
                                        };
                                        var6 = _closure3_slot2;
                                        var8 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var7 = 20;
                                        var7 = var3[var7];
                                        var7 = var8.bind(var0)(var7);
                                        if (var6) {
                                            _fun74613_ip = 145;
                                            continue _fun74613
                                        }
                                    case 74:
                                        var8 = var7.favoriteSticker;
                                        var6 = _closure3_slot0;
                                        var6 = var8.bind(var7)(var6);
                                        var8 = _closure1_slot1;
                                        var6 = 21;
                                        var6 = var3[var6];
                                        var9 = var8.bind(var0)(var6);
                                        var8 = var9.open;
                                        var6 = {};
                                        var10 = 'STICKER_FAVORITED';
                                        var6.key = var10;
                                        var10 = function() {
                                            var2 = _closure3_slot3;
                                            var1 = undefined;
                                            var0 = true;
                                            var0 = var2.bind(var1)(var0);
                                            return var0;
                                        };
                                        var6.icon = var10;
                                        var6.content = var4;
                                        var6 = var8.bind(var9)(var6);
                                        _fun74613_ip = 214;
                                        continue _fun74613;
                                    case 145:
                                        var6 = var7.unfavoriteSticker;
                                        var2 = _closure3_slot0;
                                        var2 = var6.bind(var7)(var2);
                                        var2 = _closure1_slot1;
                                        var1 = 21;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.open;
                                        var1 = {};
                                        var6 = 'STICKER_UNFAVORITED';
                                        var1.key = var6;
                                        var5 = function() {
                                            var2 = _closure3_slot3;
                                            var1 = undefined;
                                            var0 = false;
                                            var0 = var2.bind(var1)(var0);
                                            return var0;
                                        };
                                        var1.icon = var5;
                                        var1.content = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 214:
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var0, var2);
                            var0 = {};
                            var0.isFavorite = var3;
                            var0.handleFavorite = var2;
                            var0.renderStarIcon = var1;
                            return var0;
                        };
                        var3 = var3.bind(var4)(var5);
                        var18 = var3.isFavorite;
                        var16 = var3.handleFavorite;
                        if (!var6) {
                            _fun74609_ip = 403;
                            continue _fun74609
                        }
                    case 400:
                        var6 = var2;
                    case 403:
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var2 = 33;
                        var2 = var13[var2];
                        var3 = var10.bind(var4)(var2);
                        var2 = var3.getStickerAssetUrl;
                        var12 = var2.bind(var3)(var31);
                        _closure2_slot6 = var12;
                        var11 = _closure1_slot5;
                        var5 = var11.useCallback;
                        var3 = new Array(1);
                        var3[0] = var12;
                        var2 = function() { // Environment: var15
                            _fun74617: for (var _fun74617_ip = 0;;) switch (_fun74617_ip) {
                                case 0:
                                    var2 = _closure2_slot6;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun74617_ip = 109;
                                        continue _fun74617
                                    }
                                case 13:
                                    var4 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var3 = 17;
                                    var3 = var1[var3];
                                    var6 = undefined;
                                    var5 = var4.bind(var6)(var3);
                                    var4 = var5.openLazy;
                                    var3 = _closure1_slot0;
                                    var2 = 35;
                                    var2 = var1[var2];
                                    var3 = var3.bind(var6)(var2);
                                    var2 = 34;
                                    var2 = var1[var2];
                                    var1 = var1.paths;
                                    var10 = var3.bind(var6)(var2, var1);
                                    var2 = {};
                                    var0 = _closure2_slot6;
                                    var2.stickerUrl = var0;
                                    var9 = 'StickerOptionsActionSheet';
                                    var7 = 'stack';
                                    var11 = var5;
                                    var8 = var2;
                                    var0 = var11[var4](var10, var9, var8, var7, var6);
                                case 109:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var25 = var5.bind(var11)(var2, var3);
                        var5 = var11.useMemo;
                        var2 = var8.guild_id;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = function() { // Environment: var15
                            _fun74618: for (var _fun74618_ip = 0;;) switch (_fun74618_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot1;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun74618_ip = 35;
                                        continue _fun74618
                                    }
                                case 20:
                                    var1 = _closure1_slot15;
                                    var1 = var1.DM_CHANNEL;
                                    _fun74618_ip = 48;
                                    continue _fun74618;
                                case 35:
                                    var2 = _closure1_slot15;
                                    var1 = var2.GUILD_CHANNEL;
                                case 48:
                                    var0.page = var1;
                                    var1 = _closure1_slot16;
                                    var1 = var1.STICKER_POPOUT;
                                    var0.section = var1;
                                    return var0;
                            }
                        };
                        var2 = var5.bind(var11)(var2, var3);
                        _closure2_slot7 = var2;
                        var3 = var11.useRef;
                        var2 = {};
                        var5 = var8.getGuildId;
                        var5 = var5.bind(var8)();
                        var2.guild_id = var5;
                        var5 = 36;
                        var5 = var13[var5];
                        var10 = var10.bind(var4)(var5);
                        var5 = var10.collectChannelAnalyticsMetadata;
                        var32 = var5.bind(var10)(var8);
                        var33 = var2;
                        var5 = copyDataProperties(var33, var32);
                        var2 = var3.bind(var11)(var2);
                        var3 = var2.current;
                        var10 = var11.useEffect;
                        var2 = var31.id;
                        var5 = new Array(2);
                        var5[0] = var2;
                        var5[1] = var1;
                        var2 = function() { // Environment: var15
                            _fun74619: for (var _fun74619_ip = 0;;) switch (_fun74619_ip) {
                                case 0:
                                    var1 = function() { // Environment: var0
                                        var3 = _closure1_slot3;
                                        var2 = undefined;
                                        var1 = function*() { // Environment: var0
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun74622: for (var _fun74622_ip = 0;;) switch (_fun74622_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun74622_ip = 85;
                                                            continue _fun74622
                                                        }
                                                    case 7:
                                                        var3 = _closure1_slot1;
                                                        var2 = _closure1_slot2;
                                                        var1 = 38;
                                                        var1 = var2[var1];
                                                        var2 = undefined;
                                                        var4 = var3.bind(var2)(var1);
                                                        var1 = _closure2_slot0;
                                                        var1 = var1.id;
                                                        var1 = var4.bind(var2)(var1);
                                                        SaveGenerator(address = 53);
                                                    case 51:
                                                        return var1;
                                                    case 53:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                        if (var4) {
                                                            _fun74622_ip = 82;
                                                            continue _fun74622
                                                        }
                                                    case 59:
                                                        var4 = _closure2_slot3;
                                                        var4 = var4.bind(var2)(var1);
                                                        var4 = _closure2_slot5;
                                                        var3 = true;
                                                        var3 = var4.bind(var2)(var3);
                                                        return var2;
                                                    case 82:
                                                        return var1;
                                                    case 85:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var1 = var3.bind(var2)(var1);
                                        var _closure4_slot0 = var1;
                                        var0 = function() {
                                            var0 = undefined;
                                            var3 = _closure4_slot0;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    var2 = _closure2_slot4;
                                    if (var2) {
                                        _fun74619_ip = 29;
                                        continue _fun74619
                                    }
                                case 25:
                                    var1 = var1.bind(var0)();
                                case 29:
                                    return var0;
                            }
                        };
                        var2 = var10.bind(var11)(var2, var5);
                        var5 = var31.guild_id;
                        var2 = var8.getGuildId;
                        var2 = var2.bind(var8)();
                        var5 = var5 === var2;
                        var2 = var24 != var23;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var22 = 19;
                        var8 = var10[var22];
                        var8 = var11.bind(var4)(var8);
                        var19 = var8.intl;
                        if (var0) {
                            _fun74609_ip = 830;
                            continue _fun74609
                        }
                    case 653:
                        if (var7) {
                            _fun74609_ip = 762;
                            continue _fun74609
                        }
                    case 656:
                        if (var2) {
                            _fun74609_ip = 717;
                            continue _fun74609
                        }
                    case 659:
                        var13 = var19.format;
                        var0 = var10[var22];
                        var0 = var11.bind(var4)(var0);
                        var0 = var0.t;
                        var8 = var0.hGWuxU;
                        var0 = {};
                        var20 = function() {
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 17;
                            var1 = var3[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var1 = var4.hideActionSheet;
                            var1 = var1.bind(var4)();
                            var1 = 24;
                            var1 = var3[var1];
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.track;
                            var1 = _closure1_slot17;
                            var2 = var1.PREMIUM_PROMOTION_OPENED;
                            var1 = {};
                            var8 = _closure2_slot7;
                            var8 = var8.page;
                            var1.location_page = var8;
                            var8 = _closure2_slot7;
                            var8 = var8.section;
                            var1.location_section = var8;
                            var1 = var6.bind(var7)(var2, var1);
                            var2 = _closure1_slot0;
                            var1 = 39;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openUserSettings;
                            var1 = {};
                            var5 = _closure1_slot19;
                            var5 = var5.PREMIUM;
                            var1.screen = var5;
                            var4 = _closure2_slot7;
                            var1.analyticsLocation = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0.openPremiumSettings = var20;
                        var28 = var13.bind(var19)(var8, var0);
                        var0 = 'Custom Sticker Popout (Soft Upsell)';
                        var8 = false;
                        _fun74609_ip = 928;
                        continue _fun74609;
                    case 717:
                        var20 = var19.string;
                        var13 = var10[var22];
                        var13 = var11.bind(var4)(var13);
                        var13 = var13.t;
                        var13 = var13.IuXYch;
                        var28 = var20.bind(var19)(var13);
                        var8 = true;
                        var0 = 'Custom Sticker Popout (Upsell)';
                        _fun74609_ip = 928;
                        continue _fun74609;
                    case 762:
                        var20 = var19.string;
                        var13 = var10[var22];
                        var13 = var11.bind(var4)(var13);
                        var13 = var13.t;
                        if (var5) {
                            _fun74609_ip = 807;
                            continue _fun74609
                        }
                    case 784:
                        var26 = var13.lyD5ZW;
                        var28 = var20.bind(var19)(var26);
                        var8 = true;
                        var0 = 'Custom Sticker Popout (Upsell)';
                        _fun74609_ip = 928;
                        continue _fun74609;
                    case 807:
                        var13 = var13.jNphpt;
                        var28 = var20.bind(var19)(var13);
                        var8 = true;
                        var0 = 'Custom Sticker Popout (Upsell)';
                        _fun74609_ip = 928;
                        continue _fun74609;
                    case 830:
                        var13 = var19.string;
                        var10 = var10[var22];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.t;
                        if (var7) {
                            _fun74609_ip = 883;
                            continue _fun74609
                        }
                    case 852:
                        if (var2) {
                            _fun74609_ip = 868;
                            continue _fun74609
                        }
                    case 855:
                        var10 = var11.vZaScH;
                        var10 = var13.bind(var19)(var10);
                        _fun74609_ip = 881;
                        continue _fun74609;
                    case 868:
                        var20 = var11.yHmoR9;
                        var10 = var13.bind(var19)(var20);
                    case 881:
                        _fun74609_ip = 917;
                        continue _fun74609;
                    case 883:
                        if (var5) {
                            _fun74609_ip = 901;
                            continue _fun74609
                        }
                    case 886:
                        var5 = var11["1f6D9m"];
                        var5 = var13.bind(var19)(var5);
                        _fun74609_ip = 914;
                        continue _fun74609;
                    case 901:
                        var11 = var11.fZ0DiG;
                        var5 = var13.bind(var19)(var11);
                    case 914:
                        var10 = var5;
                    case 917:
                        var0 = 'Custom Sticker Popout';
                        var28 = var10;
                        var8 = false;
                    case 928:
                        var20 = !var8;
                        if (var8) {
                            _fun74609_ip = 937;
                            continue _fun74609
                        }
                    case 934:
                        var20 = !var7;
                    case 937:
                        if (!var20) {
                            _fun74609_ip = 943;
                            continue _fun74609
                        }
                    case 940:
                        var20 = var2;
                    case 943:
                        var2 = {};
                        var2.popoutAnalyticsConfig = var3;
                        var2.popoutType = var0;
                        _closure2_slot8 = var2;
                        var5 = _closure1_slot5;
                        var0 = var5.useRef;
                        var0 = var0.bind(var5)(var2);
                        _closure2_slot9 = var0;
                        var2 = var5.useEffect;
                        var0 = function() { // Environment: var15
                            var1 = _closure2_slot9;
                            var0 = _closure2_slot8;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var2.bind(var5)(var0);
                        var3 = var5.useEffect;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var0 = function() { // Environment: var15
                            _fun74626: for (var _fun74626_ip = 0;;) switch (_fun74626_ip) {
                                case 0:
                                    var1 = _closure2_slot9;
                                    var1 = var1.current;
                                    var4 = var1.popoutAnalyticsConfig;
                                    var5 = var1.popoutType;
                                    var0 = _closure2_slot4;
                                    if (!var0) {
                                        _fun74626_ip = 93;
                                        continue _fun74626
                                    }
                                case 31:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 24;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.track;
                                    var0 = _closure1_slot17;
                                    var1 = var0.OPEN_POPOUT;
                                    var0 = {};
                                    var0.type = var5;
                                    var7 = var0;
                                    var6 = var4;
                                    var4 = copyDataProperties(var7, var6);
                                    var0 = var2.bind(var3)(var1, var0);
                                case 93:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var5)(var0, var2);
                        var0 = null;
                        if (!var1) {
                            _fun74609_ip = 2330;
                            continue _fun74609
                        }
                    case 1028:
                        var3 = _closure1_slot23;
                        var2 = _closure1_slot22;
                        var1 = {};
                        var9 = _closure1_slot6;
                        var5 = {};
                        var10 = var14.guildEmojiTopContainer;
                        var5.style = var10;
                        var27 = _closure1_slot21;
                        var11 = _closure1_slot1;
                        var29 = _closure1_slot2;
                        var10 = 40;
                        var10 = var29[var10];
                        var11 = var11.bind(var4)(var10);
                        var10 = {};
                        var10.sticker = var31;
                        var13 = 48;
                        var10.size = var13;
                        var11 = var27.bind(var4)(var11, var10);
                        var10 = new Array(3);
                        var10[0] = var11;
                        var11 = {};
                        var13 = var14.guildEmojiDescription;
                        var11.style = var13;
                        var26 = _closure1_slot0;
                        var19 = 18;
                        var13 = var29[var19];
                        var13 = var26.bind(var4)(var13);
                        var30 = var13.Text;
                        var13 = {
                            'variant': 'heading-md/extrabold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var31 = var31.name;
                        var13.children = var31;
                        var30 = var27.bind(var4)(var30, var13);
                        var13 = new Array(2);
                        var13[0] = var30;
                        var19 = var29[var19];
                        var19 = var26.bind(var4)(var19);
                        var26 = var19.Text;
                        var19 = {};
                        var29 = var14.description;
                        var19.style = var29;
                        var29 = 'text-sm/medium';
                        var19.variant = var29;
                        var19.children = var28;
                        var19 = var27.bind(var4)(var26, var19);
                        var13[1] = var19;
                        var11.children = var13;
                        var11 = var3.bind(var4)(var9, var11);
                        var10[1] = var11;
                        var11 = var6;
                        if (!var6) {
                            _fun74609_ip = 1247;
                            continue _fun74609
                        }
                    case 1243:
                        var11 = var24 != var12;
                    case 1247:
                        if (!var11) {
                            _fun74609_ip = 1400;
                            continue _fun74609
                        }
                    case 1253:
                        var19 = _closure1_slot21;
                        var13 = _closure1_slot8;
                        var12 = {};
                        var26 = _closure1_slot0;
                        var29 = _closure1_slot2;
                        var27 = var29[var22];
                        var27 = var26.bind(var4)(var27);
                        var30 = var27.intl;
                        var28 = var30.string;
                        var27 = var29[var22];
                        var27 = var26.bind(var4)(var27);
                        var27 = var27.t;
                        var27 = var27.PdRCRg;
                        var27 = var28.bind(var30)(var27);
                        var12.accessibilityLabel = var27;
                        var27 = var14.moreMenuIcon;
                        var12.style = var27;
                        var12.onPress = var25;
                        var25 = 41;
                        var25 = var29[var25];
                        var25 = var26.bind(var4)(var25);
                        var26 = var25.MoreHorizontalIcon;
                        var25 = {};
                        var28 = _closure1_slot1;
                        var27 = 13;
                        var27 = var29[var27];
                        var27 = var28.bind(var4)(var27);
                        var27 = var27.colors;
                        var27 = var27.INTERACTIVE_TEXT_DEFAULT;
                        var25.color = var27;
                        var25 = var19.bind(var4)(var26, var25);
                        var12.children = var25;
                        var11 = var19.bind(var4)(var13, var12);
                    case 1400:
                        var10[2] = var11;
                        var5.children = var10;
                        var9 = var3.bind(var4)(var9, var5);
                        var5 = new Array(5);
                        var5[0] = var9;
                        if (!var8) {
                            _fun74609_ip = 1653;
                            continue _fun74609
                        }
                    case 1428:
                        var11 = _closure1_slot23;
                        var10 = _closure1_slot22;
                        var9 = {};
                        var25 = _closure1_slot21;
                        var28 = _closure1_slot0;
                        var29 = _closure1_slot2;
                        var12 = 26;
                        var12 = var29[var12];
                        var12 = var28.bind(var4)(var12);
                        var13 = var12.Button;
                        var12 = {};
                        var19 = 'experimental_premium-primary';
                        var12.variant = var19;
                        var19 = 42;
                        var19 = var29[var19];
                        var19 = var28.bind(var4)(var19);
                        var26 = var19.NitroWheelIcon;
                        var19 = {};
                        var27 = 'white';
                        var19.color = var27;
                        var19 = var25.bind(var4)(var26, var19);
                        var12.icon = var19;
                        var19 = var29[var22];
                        var19 = var28.bind(var4)(var19);
                        var27 = var19.intl;
                        var26 = var27.string;
                        var19 = var29[var22];
                        var19 = var28.bind(var4)(var19);
                        var19 = var19.t;
                        var19 = var19["gl/XHJ"];
                        var19 = var26.bind(var27)(var19);
                        var12.text = var19;
                        var19 = function() {
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 43;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = _closure2_slot7;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var12.onPress = var19;
                        var13 = var25.bind(var4)(var13, var12);
                        var12 = new Array(2);
                        var12[0] = var13;
                        var19 = _closure1_slot6;
                        var13 = {};
                        var26 = {};
                        var28 = _closure1_slot1;
                        var27 = 13;
                        var27 = var29[var27];
                        var27 = var28.bind(var4)(var27);
                        var27 = var27.spacing;
                        var27 = var27.PX_16;
                        var26.height = var27;
                        var13.style = var26;
                        var13 = var25.bind(var4)(var19, var13);
                        var12[1] = var13;
                        var9.children = var12;
                        var8 = var11.bind(var4)(var10, var9);
                    case 1653:
                        var5[1] = var8;
                        var8 = var20;
                        if (!var8) {
                            _fun74609_ip = 1843;
                            continue _fun74609
                        }
                    case 1666:
                        var11 = _closure1_slot23;
                        var10 = _closure1_slot22;
                        var9 = {};
                        var19 = _closure1_slot21;
                        var29 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var12 = 26;
                        var12 = var28[var12];
                        var12 = var29.bind(var4)(var12);
                        var13 = var12.Button;
                        var12 = {};
                        var25 = var28[var22];
                        var25 = var29.bind(var4)(var25);
                        var27 = var25.intl;
                        var26 = var27.string;
                        var25 = var28[var22];
                        var25 = var29.bind(var4)(var25);
                        var25 = var25.t;
                        var25 = var25.riu2R5;
                        var25 = var26.bind(var27)(var25);
                        var12.text = var25;
                        var15 = function() {
                            _fun74628: for (var _fun74628_ip = 0;;) switch (_fun74628_ip) {
                                case 0:
                                    var3 = _closure2_slot2;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun74628_ip = 81;
                                        continue _fun74628
                                    }
                                case 15:
                                    var1 = _closure2_slot2;
                                    var3 = var1.id;
                                    var _closure3_slot0 = var3;
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 37;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var2);
                                    var1 = var2.joinGuild;
                                    var2 = var1.bind(var2)(var3);
                                    var1 = var2.then;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 37;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.transitionToGuildSync;
                                        var1 = _closure3_slot0;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 81:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var12.onPress = var15;
                        var13 = var19.bind(var4)(var13, var12);
                        var12 = new Array(2);
                        var12[0] = var13;
                        var15 = _closure1_slot6;
                        var13 = {};
                        var25 = {};
                        var27 = _closure1_slot1;
                        var26 = 13;
                        var26 = var28[var26];
                        var26 = var27.bind(var4)(var26);
                        var26 = var26.spacing;
                        var26 = var26.PX_16;
                        var25.height = var26;
                        var13.style = var25;
                        var13 = var19.bind(var4)(var15, var13);
                        var12[1] = var13;
                        var9.children = var12;
                        var8 = var11.bind(var4)(var10, var9);
                    case 1843:
                        var5[2] = var8;
                        var8 = var24 != var21;
                        if (var8) {
                            _fun74609_ip = 1858;
                            continue _fun74609
                        }
                    case 1854:
                        var8 = var24 != var23;
                    case 1858:
                        if (!var8) {
                            _fun74609_ip = 2065;
                            continue _fun74609
                        }
                    case 1864:
                        var11 = _closure1_slot23;
                        var10 = _closure1_slot22;
                        var9 = {};
                        var19 = _closure1_slot21;
                        var13 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var12 = 44;
                        var12 = var25[var12];
                        var12 = var13.bind(var4)(var12);
                        var13 = var12.FormDivider;
                        var12 = {};
                        var15 = var14.divider;
                        var12.style = var15;
                        var13 = var19.bind(var4)(var13, var12);
                        var12 = new Array(2);
                        var12[0] = var13;
                        var15 = _closure1_slot1;
                        var13 = 45;
                        var13 = var25[var13];
                        var15 = var15.bind(var4)(var13);
                        var13 = {};
                        if (!(var24 != var23)) {
                            _fun74609_ip = 1955;
                            continue _fun74609
                        }
                    case 1952:
                        var21 = var23;
                    case 1955:
                        var13.guild = var21;
                        var13.showingJoinGuildCta = var20;
                        var13.hasJoinedGuild = var7;
                        var21 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var23 = var20[var22];
                        var23 = var21.bind(var4)(var23);
                        var24 = var23.intl;
                        var23 = var24.string;
                        var20 = var20[var22];
                        var20 = var21.bind(var4)(var20);
                        var21 = var20.t;
                        if (var7) {
                            _fun74609_ip = 2028;
                            continue _fun74609
                        }
                    case 2013:
                        var20 = var21.pDE7Gb;
                        var20 = var23.bind(var24)(var20);
                        _fun74609_ip = 2041;
                        continue _fun74609;
                    case 2028:
                        var21 = var21.kx6pEG;
                        var20 = var23.bind(var24)(var21);
                    case 2041:
                        var13.title = var20;
                        var13 = var19.bind(var4)(var15, var13);
                        var12[1] = var13;
                        var9.children = var12;
                        var8 = var11.bind(var4)(var10, var9);
                    case 2065:
                        var5[3] = var8;
                        if (!var6) {
                            _fun74609_ip = 2075;
                            continue _fun74609
                        }
                    case 2072:
                        var6 = var7;
                    case 2075:
                        if (!var6) {
                            _fun74609_ip = 2316;
                            continue _fun74609
                        }
                    case 2081:
                        var9 = _closure1_slot23;
                        var8 = _closure1_slot22;
                        var7 = {};
                        var13 = _closure1_slot21;
                        var15 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var10 = 44;
                        var10 = var19[var10];
                        var10 = var15.bind(var4)(var10);
                        var11 = var10.FormDivider;
                        var10 = {};
                        var12 = var14.divider;
                        var10.style = var12;
                        var11 = var13.bind(var4)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var12 = _closure1_slot6;
                        var11 = {};
                        var14 = var14.favoriteContainer;
                        var11.style = var14;
                        var14 = 26;
                        var14 = var19[var14];
                        var14 = var15.bind(var4)(var14);
                        var15 = var14.Button;
                        var14 = {};
                        var19 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var20 = var17[var22];
                        var20 = var19.bind(var4)(var20);
                        var21 = var20.intl;
                        var20 = var21.string;
                        var17 = var17[var22];
                        var17 = var19.bind(var4)(var17);
                        var19 = var17.t;
                        if (var18) {
                            _fun74609_ip = 2242;
                            continue _fun74609
                        }
                    case 2227:
                        var17 = var19.kWmiPW;
                        var17 = var20.bind(var21)(var17);
                        _fun74609_ip = 2255;
                        continue _fun74609;
                    case 2242:
                        var19 = var19.XhzKyF;
                        var17 = var20.bind(var21)(var19);
                    case 2255:
                        var14.text = var17;
                        var17 = 'primary';
                        if (!var18) {
                            _fun74609_ip = 2270;
                            continue _fun74609
                        }
                    case 2266:
                        var17 = 'tertiary';
                    case 2270:
                        var14.variant = var17;
                        var17 = 'md';
                        var14.size = var17;
                        var14.onPress = var16;
                        var14 = var13.bind(var4)(var15, var14);
                        var11.children = var14;
                        var11 = var13.bind(var4)(var12, var11);
                        var10[1] = var11;
                        var7.children = var10;
                        var6 = var9.bind(var4)(var8, var7);
                    case 2316:
                        var5[4] = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 2330:
                        return var0;
                }
            };
            var _closure1_slot26 = var3;
            var3 = function arg0() {
                _fun74630: for (var _fun74630_ip = 0;;) switch (_fun74630_ip) {
                    case 0:
                        var0 = arg0;
                        var17 = var0.renderableSticker;
                        var0 = var0.channel;
                        var _closure2_slot0 = var0;
                        var3 = undefined;
                        var _closure2_slot2 = var3;
                        var1 = _closure1_slot24;
                        var12 = var1.bind(var3)();
                        var2 = _closure1_slot10;
                        var1 = var2.getCurrentUser;
                        var6 = var1.bind(var2)();
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 30;
                        var4 = var2[var4];
                        var5 = var1.bind(var3)(var4);
                        var4 = var5.canUseCustomStickersEverywhere;
                        var16 = var4.bind(var5)(var6);
                        var6 = _closure1_slot5;
                        var5 = var6.useMemo;
                        var0 = var0.guild_id;
                        var4 = new Array(1);
                        var4[0] = var0;
                        var0 = function() { // Environment: var22
                            _fun74631: for (var _fun74631_ip = 0;;) switch (_fun74631_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot0;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun74631_ip = 35;
                                        continue _fun74631
                                    }
                                case 20:
                                    var1 = _closure1_slot15;
                                    var1 = var1.DM_CHANNEL;
                                    _fun74631_ip = 48;
                                    continue _fun74631;
                                case 35:
                                    var2 = _closure1_slot15;
                                    var1 = var2.GUILD_CHANNEL;
                                case 48:
                                    var0.page = var1;
                                    var1 = _closure1_slot16;
                                    var1 = var1.STICKER_POPOUT;
                                    var0.section = var1;
                                    return var0;
                            }
                        };
                        var0 = var5.bind(var6)(var0, var4);
                        var _closure2_slot1 = var0;
                        var0 = 31;
                        var0 = var2[var0];
                        var5 = var1.bind(var3)(var0);
                        var4 = var5.useExperiment;
                        var1 = {};
                        var0 = 'StickerDetailActionSheet';
                        var1.location = var0;
                        var0 = {};
                        var6 = false;
                        var0.autoTrackExposure = var6;
                        var0 = var4.bind(var5)(var1, var0);
                        var5 = var0.tidaWebformEnabled;
                        var1 = _closure1_slot0;
                        var0 = 32;
                        var0 = var2[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.DeveloperMode;
                        var0 = var1.useSetting;
                        var0 = var0.bind(var1)();
                        if (!var5) {
                            _fun74630_ip = 209;
                            continue _fun74630
                        }
                    case 206:
                        var5 = var0;
                    case 209:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var0 = 33;
                        var0 = var14[var0];
                        var1 = var13.bind(var3)(var0);
                        var0 = var1.getStickerAssetUrl;
                        var7 = var0.bind(var1)(var17);
                        _closure2_slot2 = var7;
                        var4 = _closure1_slot5;
                        var2 = var4.useCallback;
                        var1 = new Array(1);
                        var1[0] = var7;
                        var0 = function() { // Environment: var22
                            _fun74632: for (var _fun74632_ip = 0;;) switch (_fun74632_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun74632_ip = 109;
                                        continue _fun74632
                                    }
                                case 13:
                                    var4 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var3 = 17;
                                    var3 = var1[var3];
                                    var6 = undefined;
                                    var5 = var4.bind(var6)(var3);
                                    var4 = var5.openLazy;
                                    var3 = _closure1_slot0;
                                    var2 = 35;
                                    var2 = var1[var2];
                                    var3 = var3.bind(var6)(var2);
                                    var2 = 34;
                                    var2 = var1[var2];
                                    var1 = var1.paths;
                                    var10 = var3.bind(var6)(var2, var1);
                                    var2 = {};
                                    var0 = _closure2_slot2;
                                    var2.stickerUrl = var0;
                                    var9 = 'StickerOptionsActionSheet';
                                    var7 = 'stack';
                                    var11 = var5;
                                    var8 = var2;
                                    var0 = var11[var4](var10, var9, var8, var7, var6);
                                case 109:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot23;
                        var1 = _closure1_slot6;
                        var0 = {};
                        var4 = var12.guildEmojiTopContainer;
                        var0.style = var4;
                        var15 = _closure1_slot21;
                        var6 = _closure1_slot1;
                        var4 = 40;
                        var4 = var14[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = {};
                        var4.sticker = var17;
                        var8 = 48;
                        var4.size = var8;
                        var6 = var15.bind(var3)(var6, var4);
                        var4 = new Array(3);
                        var4[0] = var6;
                        var6 = {};
                        var8 = var12.guildEmojiDescription;
                        var6.style = var8;
                        var8 = 18;
                        var8 = var14[var8];
                        var8 = var13.bind(var3)(var8);
                        var10 = var8.Text;
                        var8 = {
                            'variant': 'heading-md/extrabold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var17 = var17.name;
                        var8.children = var17;
                        var10 = var15.bind(var3)(var10, var8);
                        var8 = new Array(2);
                        var8[0] = var10;
                        var10 = 46;
                        var10 = var14[var10];
                        var10 = var13.bind(var3)(var10);
                        var13 = var10.TextWithIOSLinkWorkaround;
                        var10 = {};
                        var14 = var12.description;
                        var10.style = var14;
                        var14 = 'text-sm/medium';
                        var10.variant = var14;
                        var20 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var14 = 19;
                        var18 = var17[var14];
                        var18 = var20.bind(var3)(var18);
                        var19 = var18.intl;
                        if (var16) {
                            _fun74630_ip = 520;
                            continue _fun74630
                        }
                    case 473:
                        var21 = var19.format;
                        var16 = var17[var14];
                        var16 = var20.bind(var3)(var16);
                        var16 = var16.t;
                        var18 = var16.hGWuxU;
                        var16 = {};
                        var22 = function() {
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 17;
                            var1 = var3[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var1 = var4.hideActionSheet;
                            var1 = var1.bind(var4)();
                            var1 = 24;
                            var1 = var3[var1];
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.track;
                            var1 = _closure1_slot17;
                            var2 = var1.PREMIUM_PROMOTION_OPENED;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var8 = var4.page;
                            var1.location_page = var8;
                            var8 = var4.section;
                            var1.location_section = var8;
                            var1 = var6.bind(var7)(var2, var1);
                            var2 = _closure1_slot0;
                            var1 = 39;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openUserSettings;
                            var1 = {};
                            var5 = _closure1_slot19;
                            var5 = var5.PREMIUM;
                            var1.screen = var5;
                            var1.analyticsLocation = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var16.openPremiumSettings = var22;
                        var16 = var21.bind(var19)(var18, var16);
                        _fun74630_ip = 550;
                        continue _fun74630;
                    case 520:
                        var18 = var19.string;
                        var17 = var17[var14];
                        var17 = var20.bind(var3)(var17);
                        var17 = var17.t;
                        var17 = var17.vZaScH;
                        var16 = var18.bind(var19)(var17);
                    case 550:
                        var10.children = var16;
                        var10 = var15.bind(var3)(var13, var10);
                        var8[1] = var10;
                        var6.children = var8;
                        var6 = var2.bind(var3)(var1, var6);
                        var4[1] = var6;
                        if (!var5) {
                            _fun74630_ip = 587;
                            continue _fun74630
                        }
                    case 581:
                        var6 = null;
                        var5 = var6 != var7;
                    case 587:
                        if (!var5) {
                            _fun74630_ip = 740;
                            continue _fun74630
                        }
                    case 593:
                        var8 = _closure1_slot21;
                        var7 = _closure1_slot8;
                        var6 = {};
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var15 = var13[var14];
                        var15 = var10.bind(var3)(var15);
                        var16 = var15.intl;
                        var15 = var16.string;
                        var14 = var13[var14];
                        var14 = var10.bind(var3)(var14);
                        var14 = var14.t;
                        var14 = var14.PdRCRg;
                        var14 = var15.bind(var16)(var14);
                        var6.accessibilityLabel = var14;
                        var12 = var12.moreMenuIcon;
                        var6.style = var12;
                        var6.onPress = var9;
                        var9 = 41;
                        var9 = var13[var9];
                        var9 = var10.bind(var3)(var9);
                        var10 = var9.MoreHorizontalIcon;
                        var9 = {};
                        var12 = _closure1_slot1;
                        var11 = 13;
                        var11 = var13[var11];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.colors;
                        var11 = var11.INTERACTIVE_TEXT_DEFAULT;
                        var9.color = var11;
                        var9 = var8.bind(var3)(var10, var9);
                        var6.children = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 740:
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot27 = var3;
            var3 = var6.memo;
            var1 = function arg0() {
                _fun74634: for (var _fun74634_ip = 0;;) switch (_fun74634_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.renderableSticker;
                        var8 = var0.channel;
                        var11 = var0.chatInputRef;
                        var0 = _closure1_slot24;
                        var3 = undefined;
                        var7 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 14;
                        var0 = var2[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.useStickerForRenderableSticker;
                        var5 = true;
                        var2 = var0.bind(var1)(var9, var5);
                        var1 = _closure1_slot4;
                        var0 = 2;
                        var1 = var1.bind(var3)(var2, var0);
                        var0 = 0;
                        var12 = var1[var0];
                        var0 = 1;
                        var2 = var1[var0];
                        var6 = _closure1_slot21;
                        var1 = _closure1_slot7;
                        var0 = {};
                        var10 = 'large';
                        var0.size = var10;
                        var0 = var6.bind(var3)(var1, var0);
                        var1 = null;
                        if (!(var1 == var12)) {
                            _fun74634_ip = 129;
                            continue _fun74634
                        }
                    case 123:
                        if (var2) {
                            _fun74634_ip = 266;
                            continue _fun74634
                        }
                    case 129:
                        var6 = var0;
                        if (!(var1 != var12)) {
                            _fun74634_ip = 291;
                            continue _fun74634
                        }
                    case 139:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var10 = 33;
                        var1 = var1[var10];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isStandardSticker;
                        var1 = var1.bind(var2)(var12);
                        if (var1) {
                            _fun74634_ip = 231;
                            continue _fun74634
                        }
                    case 173:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var10];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isGuildSticker;
                        var1 = var1.bind(var2)(var12);
                        if (!var1) {
                            _fun74634_ip = 229;
                            continue _fun74634
                        }
                    case 204:
                        var10 = _closure1_slot21;
                        var2 = _closure1_slot26;
                        var1 = {};
                        var1.sticker = var12;
                        var1.channel = var8;
                        var0 = var10.bind(var3)(var2, var1);
                    case 229:
                        _fun74634_ip = 261;
                        continue _fun74634;
                    case 231:
                        var10 = _closure1_slot21;
                        var2 = _closure1_slot25;
                        var1 = {};
                        var1.sticker = var12;
                        var1.channel = var8;
                        var1.chatInputRef = var11;
                        var0 = var10.bind(var3)(var2, var1);
                    case 261:
                        var6 = var0;
                        _fun74634_ip = 291;
                        continue _fun74634;
                    case 266:
                        var2 = _closure1_slot21;
                        var1 = _closure1_slot27;
                        var0 = {};
                        var0.renderableSticker = var9;
                        var0.channel = var8;
                        var6 = var2.bind(var3)(var1, var0);
                    case 291:
                        var2 = _closure1_slot21;
                        var1 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 47;
                        var0 = var8[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.BottomSheet;
                        var0 = {};
                        var0.startExpanded = var5;
                        var5 = _closure1_slot6;
                        var4 = {};
                        var7 = var7.content;
                        var4.style = var7;
                        var4.children = var6;
                        var4 = var2.bind(var3)(var5, var4);
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
            var3 = 'modules/stickers/native/StickerDetailActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1410, 1621, 5598, 9308, 660, 4934, 33, 1297, 478, 671, 9392, 8596, 8598, 3278, 3941, 1234, 9393, 3148, 566, 1464, 795, 9404, 4084, 9407, 9394, 9398, 3109, 8422, 1348, 3998, 9409, 1307, 4302, 4679, 9410, 5926, 9405, 8967, 5753, 9411, 5382, 9360, 5336, 4933, 2]);