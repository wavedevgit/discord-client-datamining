// modules/stickers/native/StickerDetailActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun74536: for (var _fun74536_ip = 0;;) switch (_fun74536_ip) {
        case 0:
            var4 = require;
            var13 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var13;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var12 = 0;
            var3 = var5[var12];
            var0 = undefined;
            var3 = var13.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var13.bind(var0)(var3);
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
            var8 = var3.ActivityIndicator;
            var3 = var3.Pressable;
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var13.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var13.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var13.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.PADDING_HORIZONTAL;
            var _closure1_slot11 = var7;
            var7 = var3.MIN_MARGIN;
            var _closure1_slot12 = var7;
            var3 = var3.STICKER_SIZE;
            var _closure1_slot13 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.AnalyticsPages;
            var _closure1_slot14 = var7;
            var7 = var3.AnalyticsSections;
            var _closure1_slot15 = var7;
            var7 = var3.AnalyticEvents;
            var _closure1_slot16 = var7;
            var7 = var3.GuildFeatures;
            var _closure1_slot17 = var7;
            var3 = var3.UserSettingsSections;
            var _closure1_slot18 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.ACTION_SHEET_MAX_WIDTH;
            var _closure1_slot19 = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot20 = var7;
            var9 = var3.Fragment;
            var _closure1_slot21 = var9;
            var3 = var3.jsxs;
            var _closure1_slot22 = var3;
            var3 = 11;
            var3 = var5[var3];
            var10 = var4.bind(var0)(var3);
            var9 = var10.createStyles;
            var3 = {};
            var11 = {};
            var15 = 16;
            var11.padding = var15;
            var14 = 12;
            var14 = var5[var14];
            var16 = var4.bind(var0)(var14);
            var14 = var16.isAndroid;
            var16 = var14.bind(var16)();
            var14 = 0;
            if (!var16) {
                _fun74536_ip = 418;
                continue _fun74536
            }
        case 415:
            var14 = var15;
        case 418:
            var11.paddingBottom = var14;
            var3.content = var11;
            var11 = {
                'lineHeight': 18,
                'marginTop': 4
            };
            var3.description = var11;
            var11 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.guildEmojiTopContainer = var11;
            var11 = {
                'paddingLeft': 16,
                'flex': 1
            };
            var3.guildEmojiDescription = var11;
            var11 = {};
            var11.marginLeft = var12;
            var12 = 13;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var11.marginTop = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var11.marginBottom = var14;
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BORDER_SUBTLE;
            var11.backgroundColor = var14;
            var3.divider = var11;
            var11 = {
                'height': 32,
                'width': 32,
                'justifyContent': 'center',
                'alignItems': 'center'
            };
            var3.moreMenuIcon = var11;
            var11 = {};
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_4;
            var11.paddingTop = var14;
            var3.favoriteContainer = var11;
            var11 = {
                'height': 32,
                'width': 32
            };
            var3.starIcon = var11;
            var11 = {};
            var14 = var5[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.ICON_FEEDBACK_WARNING;
            var11.tintColor = var14;
            var3.starIconSelected = var11;
            var11 = {};
            var12 = var5[var12];
            var12 = var13.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.INTERACTIVE_TEXT_DEFAULT;
            var11.tintColor = var12;
            var3.starIconUnselected = var11;
            var3 = var9.bind(var10)(var3);
            var _closure1_slot23 = var3;
            var3 = {};
            var9 = 'large';
            var3.size = var9;
            var3 = var7.bind(var0)(var8, var3);
            var _closure1_slot24 = var3;
            var3 = function arg0() {
                _fun74537: for (var _fun74537_ip = 0;;) switch (_fun74537_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.sticker;
                        var4 = var1.channel;
                        var _closure2_slot0 = var4;
                        var1 = var1.chatInputRef;
                        var _closure2_slot1 = var1;
                        var5 = _closure1_slot23;
                        var3 = undefined;
                        var5 = var5.bind(var3)();
                        var _closure2_slot2 = var5;
                        var10 = var2.pack_id;
                        var _closure2_slot3 = var10;
                        var7 = var2.name;
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var9 = 22;
                        var2 = var8[var9];
                        var13 = var5.bind(var3)(var2);
                        var12 = var13.useStateFromStores;
                        var6 = _closure1_slot10;
                        var11 = new Array(1);
                        var11[0] = var6;
                        var2 = function() { // Environment: var0
                            var2 = _closure1_slot10;
                            var1 = var2.getStickerPack;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var12.bind(var13)(var11, var2);
                        var _closure2_slot4 = var2;
                        var9 = var8[var9];
                        var12 = var5.bind(var3)(var9);
                        var11 = var12.useStateFromStores;
                        var9 = new Array(1);
                        var9[0] = var6;
                        var6 = function() { // Environment: var0
                            var2 = _closure1_slot10;
                            var1 = var2.isPremiumPack;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var11.bind(var12)(var9, var6);
                        var _closure2_slot5 = var6;
                        var6 = 14;
                        var6 = var8[var6];
                        var9 = var5.bind(var3)(var6);
                        var6 = var9.useFetchStickerPack;
                        var6 = var6.bind(var9)(var10);
                        var9 = _closure1_slot1;
                        var6 = 23;
                        var6 = var8[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.bind(var3)();
                        var9 = var6.width;
                        var10 = _closure1_slot11;
                        var6 = 2;
                        var6 = var6 * var10;
                        var6 = var9 - var6;
                        var _closure2_slot6 = var6;
                        var11 = global;
                        var10 = var11.Math;
                        var9 = var10.floor;
                        var14 = var11.Math;
                        var13 = var14.min;
                        var11 = _closure1_slot19;
                        var12 = _closure1_slot12;
                        var6 = var6 - var12;
                        var11 = var13.bind(var14)(var11, var6);
                        var6 = _closure1_slot13;
                        var6 = var6 + var12;
                        var6 = var11 / var6;
                        var6 = var9.bind(var10)(var6);
                        var _closure2_slot7 = var6;
                        var10 = _closure1_slot5;
                        var9 = var10.useMemo;
                        var4 = var4.guild_id;
                        var6 = new Array(1);
                        var6[0] = var4;
                        var4 = function() { // Environment: var0
                            _fun74540: for (var _fun74540_ip = 0;;) switch (_fun74540_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot0;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun74540_ip = 35;
                                        continue _fun74540
                                    }
                                case 20:
                                    var1 = _closure1_slot14;
                                    var1 = var1.DM_CHANNEL;
                                    _fun74540_ip = 48;
                                    continue _fun74540;
                                case 35:
                                    var2 = _closure1_slot14;
                                    var1 = var2.GUILD_CHANNEL;
                                case 48:
                                    var0.page = var1;
                                    var1 = _closure1_slot15;
                                    var1 = var1.STICKER_POPOUT;
                                    var0.section = var1;
                                    return var0;
                            }
                        };
                        var4 = var9.bind(var10)(var4, var6);
                        var _closure2_slot8 = var4;
                        var9 = var10.useEffect;
                        var6 = new Array(2);
                        var6[0] = var4;
                        var6[1] = var2;
                        var4 = function() { // Environment: var0
                            _fun74541: for (var _fun74541_ip = 0;;) switch (_fun74541_ip) {
                                case 0:
                                    var1 = _closure2_slot4;
                                    var0 = null;
                                    if (!(var0 != var1)) {
                                        _fun74541_ip = 93;
                                        continue _fun74541
                                    }
                                case 13:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 24;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.track;
                                    var0 = _closure1_slot16;
                                    var1 = var0.OPEN_POPOUT;
                                    var0 = {};
                                    var5 = _closure2_slot8;
                                    var0.location = var5;
                                    var5 = 'Sticker Upsell Sheet';
                                    var0.type = var5;
                                    var4 = _closure2_slot4;
                                    var4 = var4.id;
                                    var0.sticker_pack_id = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 93:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var9.bind(var10)(var4, var6);
                        var6 = _closure1_slot20;
                        var4 = 18;
                        var4 = var8[var4];
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.Text;
                        var4 = {
                            'variant': 'heading-md/extrabold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var _closure2_slot9 = var4;
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun74537_ip = 424;
                            continue _fun74537
                        }
                    case 410:
                        var0 = function(arg0) { // Environment: var0
                            _fun74542: for (var _fun74542_ip = 0;;) switch (_fun74542_ip) {
                                case 0:
                                    var11 = arg0;
                                    var _closure3_slot0 = var11;
                                    var1 = _closure2_slot5;
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
                                        _fun74542_ip = 96;
                                        continue _fun74542
                                    }
                                case 68:
                                    var7 = var0.OzB6e3;
                                    var1 = {};
                                    var8 = var11.name;
                                    var1.stickerPackName = var8;
                                    var13 = var2.bind(var4)(var7, var1);
                                    _fun74542_ip = 122;
                                    continue _fun74542;
                                case 96:
                                    var1 = var0.auckXz;
                                    var0 = {};
                                    var7 = var11.name;
                                    var0.stickerPackName = var7;
                                    var13 = var2.bind(var4)(var1, var0);
                                case 122:
                                    var2 = _closure1_slot22;
                                    var1 = _closure1_slot21;
                                    var0 = {};
                                    var7 = _closure2_slot9;
                                    var4 = new Array(5);
                                    var4[0] = var7;
                                    var10 = _closure1_slot20;
                                    var8 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var7 = 18;
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
                                    var12 = _closure2_slot6;
                                    var7.containerWidth = var12;
                                    var15 = var11.stickers;
                                    var13 = var15.slice;
                                    var11 = _closure2_slot7;
                                    var12 = 0;
                                    var12 = var13.bind(var15)(var12, var11);
                                    var7.stickers = var12;
                                    var7.rowSize = var11;
                                    var7 = var10.bind(var3)(var8, var7);
                                    var4[2] = var7;
                                    var8 = _closure2_slot5;
                                    var7 = null;
                                    if (!var8) {
                                        _fun74542_ip = 345;
                                        continue _fun74542
                                    }
                                case 289:
                                    var11 = _closure1_slot20;
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
                                case 345:
                                    var4[3] = var7;
                                    var5 = _closure2_slot5;
                                    if (!var5) {
                                        _fun74542_ip = 463;
                                        continue _fun74542
                                    }
                                case 356:
                                    var8 = _closure1_slot20;
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
                                        _fun74543: for (var _fun74543_ip = 0;;) switch (_fun74543_ip) {
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
                                                    _fun74543_ip = 66;
                                                    continue _fun74543
                                                }
                                            case 48:
                                                var3 = _closure2_slot5;
                                                if (!var3) {
                                                    _fun74543_ip = 66;
                                                    continue _fun74543
                                                }
                                            case 58:
                                                var3 = _closure2_slot1;
                                                if (!(var4 == var3)) {
                                                    _fun74543_ip = 146;
                                                    continue _fun74543
                                                }
                                            case 66:
                                                var4 = _closure1_slot1;
                                                var8 = _closure1_slot2;
                                                var6 = 29;
                                                var3 = var8[var6];
                                                var4 = var4.bind(var0)(var3);
                                                var3 = {};
                                                var7 = _closure2_slot8;
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
                                                _fun74543_ip = 186;
                                                continue _fun74543;
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
                                case 463:
                                    var4[4] = var5;
                                    var0.children = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var0 = var0.bind(var3)(var2);
                        _fun74537_ip = 428;
                        continue _fun74537;
                    case 424:
                        var0 = _closure1_slot24;
                    case 428:
                        return var0;
                }
            };
            var _closure1_slot25 = var3;
            var3 = 30;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var10 = var3.NitroWheelIcon;
            var3 = {};
            var11 = 'white';
            var3.color = var11;
            var3 = var7.bind(var0)(var10, var3);
            var _closure1_slot26 = var3;
            var3 = function arg0() {
                _fun74544: for (var _fun74544_ip = 0;;) switch (_fun74544_ip) {
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
                        var2 = _closure1_slot20;
                        var1 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 31;
                        var0 = var6[var0];
                        var1 = var1.bind(var4)(var0);
                        var0 = {};
                        var0.sticker = var31;
                        var3 = 48;
                        var0.size = var3;
                        var11 = var2.bind(var4)(var1, var0);
                        var0 = _closure1_slot23;
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
                        var0 = 22;
                        var0 = var6[var0];
                        var7 = var3.bind(var4)(var0);
                        var6 = var7.useStateFromStores;
                        var0 = _closure1_slot8;
                        var3 = new Array(1);
                        var3[0] = var0;
                        var0 = function() { // Environment: var15
                            var2 = _closure1_slot8;
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
                            _fun74544_ip = 238;
                            continue _fun74544
                        }
                    case 212:
                        var9 = var21.features;
                        var6 = var9.has;
                        var3 = _closure1_slot17;
                        var3 = var3.DISCOVERABLE;
                        var0 = var6.bind(var9)(var3);
                    case 238:
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
                        var2 = _closure1_slot9;
                        var0 = var2.getCurrentUser;
                        var6 = var0.bind(var2)();
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 32;
                        var0 = var5[var0];
                        var2 = var3.bind(var4)(var0);
                        var0 = var2.canUseCustomStickersEverywhere;
                        var0 = var0.bind(var2)(var6);
                        var2 = 33;
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
                        var2 = 34;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.DeveloperMode;
                        var2 = var3.useSetting;
                        var2 = var2.bind(var3)();
                        var5 = var31.id;
                        var3 = function(arg0) { // Environment: var15
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var1 = _closure1_slot23;
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
                                _fun74547: for (var _fun74547_ip = 0;;) switch (_fun74547_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = {};
                                        var3 = _closure3_slot1;
                                        var6 = var3.starIcon;
                                        var7 = var2;
                                        var0 = copyDataProperties(var7, var6);
                                        if (var1) {
                                            _fun74547_ip = 46;
                                            continue _fun74547
                                        }
                                    case 28:
                                        var6 = var3.starIconUnselected;
                                        var7 = var2;
                                        var0 = copyDataProperties(var7, var6);
                                        var0 = var2;
                                        _fun74547_ip = 62;
                                        continue _fun74547;
                                    case 46:
                                        var6 = var3.starIconSelected;
                                        var7 = var2;
                                        var3 = copyDataProperties(var7, var6);
                                        var0 = var2;
                                    case 62:
                                        var3 = _closure1_slot20;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        if (var1) {
                                            _fun74547_ip = 102;
                                            continue _fun74547
                                        }
                                    case 80:
                                        var1 = 16;
                                        var2 = var4[var1];
                                        var1 = undefined;
                                        var1 = var5.bind(var1)(var2);
                                        var2 = var1.StarOutlineIcon;
                                        _fun74547_ip = 122;
                                        continue _fun74547;
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
                                _fun74548: for (var _fun74548_ip = 0;;) switch (_fun74548_ip) {
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
                                            _fun74549: for (var _fun74549_ip = 0;;) switch (_fun74549_ip) {
                                                case 0:
                                                    var3 = _closure1_slot20;
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
                                                        _fun74549_ip = 131;
                                                        continue _fun74549
                                                    }
                                                case 118:
                                                    var4 = var5.mE2e8A;
                                                    var4 = var6.bind(var7)(var4);
                                                    _fun74549_ip = 142;
                                                    continue _fun74549;
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
                                            _fun74548_ip = 145;
                                            continue _fun74548
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
                                        _fun74548_ip = 214;
                                        continue _fun74548;
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
                            _fun74544_ip = 443;
                            continue _fun74544
                        }
                    case 440:
                        var6 = var2;
                    case 443:
                        var10 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var2 = 35;
                        var2 = var19[var2];
                        var3 = var10.bind(var4)(var2);
                        var2 = var3.getStickerAssetUrl;
                        var12 = var2.bind(var3)(var31);
                        _closure2_slot6 = var12;
                        var13 = _closure1_slot5;
                        var5 = var13.useCallback;
                        var3 = new Array(1);
                        var3[0] = var12;
                        var2 = function() { // Environment: var15
                            _fun74552: for (var _fun74552_ip = 0;;) switch (_fun74552_ip) {
                                case 0:
                                    var2 = _closure2_slot6;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun74552_ip = 109;
                                        continue _fun74552
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
                                    var2 = 37;
                                    var2 = var1[var2];
                                    var3 = var3.bind(var6)(var2);
                                    var2 = 36;
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
                        var25 = var5.bind(var13)(var2, var3);
                        var5 = var13.useMemo;
                        var2 = var8.guild_id;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = function() { // Environment: var15
                            _fun74553: for (var _fun74553_ip = 0;;) switch (_fun74553_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot1;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun74553_ip = 35;
                                        continue _fun74553
                                    }
                                case 20:
                                    var1 = _closure1_slot14;
                                    var1 = var1.DM_CHANNEL;
                                    _fun74553_ip = 48;
                                    continue _fun74553;
                                case 35:
                                    var2 = _closure1_slot14;
                                    var1 = var2.GUILD_CHANNEL;
                                case 48:
                                    var0.page = var1;
                                    var1 = _closure1_slot15;
                                    var1 = var1.STICKER_POPOUT;
                                    var0.section = var1;
                                    return var0;
                            }
                        };
                        var2 = var5.bind(var13)(var2, var3);
                        _closure2_slot7 = var2;
                        var3 = var13.useRef;
                        var2 = {};
                        var5 = var8.getGuildId;
                        var5 = var5.bind(var8)();
                        var2.guild_id = var5;
                        var5 = 38;
                        var5 = var19[var5];
                        var10 = var10.bind(var4)(var5);
                        var5 = var10.collectChannelAnalyticsMetadata;
                        var32 = var5.bind(var10)(var8);
                        var33 = var2;
                        var5 = copyDataProperties(var33, var32);
                        var2 = var3.bind(var13)(var2);
                        var3 = var2.current;
                        var10 = var13.useEffect;
                        var2 = var31.id;
                        var5 = new Array(2);
                        var5[0] = var2;
                        var5[1] = var1;
                        var2 = function() { // Environment: var15
                            _fun74554: for (var _fun74554_ip = 0;;) switch (_fun74554_ip) {
                                case 0:
                                    var1 = function() { // Environment: var0
                                        var3 = _closure1_slot3;
                                        var2 = undefined;
                                        var1 = function*() { // Environment: var0
                                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                _fun74557: for (var _fun74557_ip = 0;;) switch (_fun74557_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun74557_ip = 85;
                                                            continue _fun74557
                                                        }
                                                    case 7:
                                                        var3 = _closure1_slot1;
                                                        var2 = _closure1_slot2;
                                                        var1 = 40;
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
                                                            _fun74557_ip = 82;
                                                            continue _fun74557
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
                                        _fun74554_ip = 29;
                                        continue _fun74554
                                    }
                                case 25:
                                    var1 = var1.bind(var0)();
                                case 29:
                                    return var0;
                            }
                        };
                        var2 = var10.bind(var13)(var2, var5);
                        var5 = var31.guild_id;
                        var2 = var8.getGuildId;
                        var2 = var2.bind(var8)();
                        var5 = var5 === var2;
                        var2 = var24 != var23;
                        var13 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var22 = 19;
                        var8 = var10[var22];
                        var8 = var13.bind(var4)(var8);
                        var20 = var8.intl;
                        if (var0) {
                            _fun74544_ip = 870;
                            continue _fun74544
                        }
                    case 693:
                        if (var7) {
                            _fun74544_ip = 802;
                            continue _fun74544
                        }
                    case 696:
                        if (var2) {
                            _fun74544_ip = 757;
                            continue _fun74544
                        }
                    case 699:
                        var19 = var20.format;
                        var0 = var10[var22];
                        var0 = var13.bind(var4)(var0);
                        var0 = var0.t;
                        var8 = var0.hGWuxU;
                        var0 = {};
                        var26 = function() {
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
                            var1 = _closure1_slot16;
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
                            var1 = 41;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openUserSettings;
                            var1 = {};
                            var5 = _closure1_slot18;
                            var5 = var5.PREMIUM;
                            var1.screen = var5;
                            var4 = _closure2_slot7;
                            var1.analyticsLocation = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0.openPremiumSettings = var26;
                        var28 = var19.bind(var20)(var8, var0);
                        var0 = 'Custom Sticker Popout (Soft Upsell)';
                        var8 = false;
                        _fun74544_ip = 968;
                        continue _fun74544;
                    case 757:
                        var26 = var20.string;
                        var19 = var10[var22];
                        var19 = var13.bind(var4)(var19);
                        var19 = var19.t;
                        var19 = var19.IuXYch;
                        var28 = var26.bind(var20)(var19);
                        var8 = true;
                        var0 = 'Custom Sticker Popout (Upsell)';
                        _fun74544_ip = 968;
                        continue _fun74544;
                    case 802:
                        var26 = var20.string;
                        var19 = var10[var22];
                        var19 = var13.bind(var4)(var19);
                        var19 = var19.t;
                        if (var5) {
                            _fun74544_ip = 847;
                            continue _fun74544
                        }
                    case 824:
                        var27 = var19.lyD5ZW;
                        var28 = var26.bind(var20)(var27);
                        var8 = true;
                        var0 = 'Custom Sticker Popout (Upsell)';
                        _fun74544_ip = 968;
                        continue _fun74544;
                    case 847:
                        var19 = var19.jNphpt;
                        var28 = var26.bind(var20)(var19);
                        var8 = true;
                        var0 = 'Custom Sticker Popout (Upsell)';
                        _fun74544_ip = 968;
                        continue _fun74544;
                    case 870:
                        var19 = var20.string;
                        var10 = var10[var22];
                        var10 = var13.bind(var4)(var10);
                        var13 = var10.t;
                        if (var7) {
                            _fun74544_ip = 923;
                            continue _fun74544
                        }
                    case 892:
                        if (var2) {
                            _fun74544_ip = 908;
                            continue _fun74544
                        }
                    case 895:
                        var10 = var13.vZaScH;
                        var10 = var19.bind(var20)(var10);
                        _fun74544_ip = 921;
                        continue _fun74544;
                    case 908:
                        var26 = var13.yHmoR9;
                        var10 = var19.bind(var20)(var26);
                    case 921:
                        _fun74544_ip = 957;
                        continue _fun74544;
                    case 923:
                        if (var5) {
                            _fun74544_ip = 941;
                            continue _fun74544
                        }
                    case 926:
                        var5 = var13["1f6D9m"];
                        var5 = var19.bind(var20)(var5);
                        _fun74544_ip = 954;
                        continue _fun74544;
                    case 941:
                        var13 = var13.fZ0DiG;
                        var5 = var19.bind(var20)(var13);
                    case 954:
                        var10 = var5;
                    case 957:
                        var0 = 'Custom Sticker Popout';
                        var28 = var10;
                        var8 = false;
                    case 968:
                        var20 = !var8;
                        if (var8) {
                            _fun74544_ip = 977;
                            continue _fun74544
                        }
                    case 974:
                        var20 = !var7;
                    case 977:
                        if (!var20) {
                            _fun74544_ip = 983;
                            continue _fun74544
                        }
                    case 980:
                        var20 = var2;
                    case 983:
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
                            _fun74561: for (var _fun74561_ip = 0;;) switch (_fun74561_ip) {
                                case 0:
                                    var1 = _closure2_slot9;
                                    var1 = var1.current;
                                    var4 = var1.popoutAnalyticsConfig;
                                    var5 = var1.popoutType;
                                    var0 = _closure2_slot4;
                                    if (!var0) {
                                        _fun74561_ip = 93;
                                        continue _fun74561
                                    }
                                case 31:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 24;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.track;
                                    var0 = _closure1_slot16;
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
                            _fun74544_ip = 2304;
                            continue _fun74544
                        }
                    case 1068:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot21;
                        var1 = {};
                        var9 = _closure1_slot6;
                        var5 = {};
                        var10 = var14.guildEmojiTopContainer;
                        var5.style = var10;
                        var10 = new Array(3);
                        var10[0] = var11;
                        var11 = {};
                        var13 = var14.guildEmojiDescription;
                        var11.style = var13;
                        var27 = _closure1_slot20;
                        var26 = _closure1_slot0;
                        var29 = _closure1_slot2;
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
                            _fun74544_ip = 1251;
                            continue _fun74544
                        }
                    case 1247:
                        var11 = var24 != var12;
                    case 1251:
                        if (!var11) {
                            _fun74544_ip = 1404;
                            continue _fun74544
                        }
                    case 1257:
                        var19 = _closure1_slot20;
                        var13 = _closure1_slot7;
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
                        var25 = 42;
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
                    case 1404:
                        var10[2] = var11;
                        var5.children = var10;
                        var9 = var3.bind(var4)(var9, var5);
                        var5 = new Array(5);
                        var5[0] = var9;
                        if (!var8) {
                            _fun74544_ip = 1627;
                            continue _fun74544
                        }
                    case 1432:
                        var11 = _closure1_slot22;
                        var10 = _closure1_slot21;
                        var9 = {};
                        var25 = _closure1_slot20;
                        var28 = _closure1_slot0;
                        var29 = _closure1_slot2;
                        var12 = 26;
                        var12 = var29[var12];
                        var12 = var28.bind(var4)(var12);
                        var13 = var12.Button;
                        var12 = {};
                        var19 = 'experimental_premium-primary';
                        var12.variant = var19;
                        var19 = _closure1_slot26;
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
                    case 1627:
                        var5[1] = var8;
                        var8 = var20;
                        if (!var8) {
                            _fun74544_ip = 1817;
                            continue _fun74544
                        }
                    case 1640:
                        var11 = _closure1_slot22;
                        var10 = _closure1_slot21;
                        var9 = {};
                        var19 = _closure1_slot20;
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
                            _fun74563: for (var _fun74563_ip = 0;;) switch (_fun74563_ip) {
                                case 0:
                                    var3 = _closure2_slot2;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun74563_ip = 81;
                                        continue _fun74563
                                    }
                                case 15:
                                    var1 = _closure2_slot2;
                                    var3 = var1.id;
                                    var _closure3_slot0 = var3;
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 39;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var4.bind(var1)(var2);
                                    var1 = var2.joinGuild;
                                    var2 = var1.bind(var2)(var3);
                                    var1 = var2.then;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 39;
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
                    case 1817:
                        var5[2] = var8;
                        var8 = var24 != var21;
                        if (var8) {
                            _fun74544_ip = 1832;
                            continue _fun74544
                        }
                    case 1828:
                        var8 = var24 != var23;
                    case 1832:
                        if (!var8) {
                            _fun74544_ip = 2039;
                            continue _fun74544
                        }
                    case 1838:
                        var11 = _closure1_slot22;
                        var10 = _closure1_slot21;
                        var9 = {};
                        var19 = _closure1_slot20;
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
                            _fun74544_ip = 1929;
                            continue _fun74544
                        }
                    case 1926:
                        var21 = var23;
                    case 1929:
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
                            _fun74544_ip = 2002;
                            continue _fun74544
                        }
                    case 1987:
                        var20 = var21.pDE7Gb;
                        var20 = var23.bind(var24)(var20);
                        _fun74544_ip = 2015;
                        continue _fun74544;
                    case 2002:
                        var21 = var21.kx6pEG;
                        var20 = var23.bind(var24)(var21);
                    case 2015:
                        var13.title = var20;
                        var13 = var19.bind(var4)(var15, var13);
                        var12[1] = var13;
                        var9.children = var12;
                        var8 = var11.bind(var4)(var10, var9);
                    case 2039:
                        var5[3] = var8;
                        if (!var6) {
                            _fun74544_ip = 2049;
                            continue _fun74544
                        }
                    case 2046:
                        var6 = var7;
                    case 2049:
                        if (!var6) {
                            _fun74544_ip = 2290;
                            continue _fun74544
                        }
                    case 2055:
                        var9 = _closure1_slot22;
                        var8 = _closure1_slot21;
                        var7 = {};
                        var13 = _closure1_slot20;
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
                            _fun74544_ip = 2216;
                            continue _fun74544
                        }
                    case 2201:
                        var17 = var19.kWmiPW;
                        var17 = var20.bind(var21)(var17);
                        _fun74544_ip = 2229;
                        continue _fun74544;
                    case 2216:
                        var19 = var19.XhzKyF;
                        var17 = var20.bind(var21)(var19);
                    case 2229:
                        var14.text = var17;
                        var17 = 'primary';
                        if (!var18) {
                            _fun74544_ip = 2244;
                            continue _fun74544
                        }
                    case 2240:
                        var17 = 'tertiary';
                    case 2244:
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
                    case 2290:
                        var5[4] = var6;
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 2304:
                        return var0;
                }
            };
            var _closure1_slot27 = var3;
            var3 = function arg0() {
                _fun74565: for (var _fun74565_ip = 0;;) switch (_fun74565_ip) {
                    case 0:
                        var0 = arg0;
                        var17 = var0.renderableSticker;
                        var0 = var0.channel;
                        var _closure2_slot0 = var0;
                        var3 = undefined;
                        var _closure2_slot2 = var3;
                        var1 = _closure1_slot23;
                        var12 = var1.bind(var3)();
                        var2 = _closure1_slot9;
                        var1 = var2.getCurrentUser;
                        var6 = var1.bind(var2)();
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var4 = 32;
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
                            _fun74566: for (var _fun74566_ip = 0;;) switch (_fun74566_ip) {
                                case 0:
                                    var0 = {};
                                    var1 = _closure2_slot0;
                                    var2 = var1.guild_id;
                                    var1 = null;
                                    if (!(var1 == var2)) {
                                        _fun74566_ip = 35;
                                        continue _fun74566
                                    }
                                case 20:
                                    var1 = _closure1_slot14;
                                    var1 = var1.DM_CHANNEL;
                                    _fun74566_ip = 48;
                                    continue _fun74566;
                                case 35:
                                    var2 = _closure1_slot14;
                                    var1 = var2.GUILD_CHANNEL;
                                case 48:
                                    var0.page = var1;
                                    var1 = _closure1_slot15;
                                    var1 = var1.STICKER_POPOUT;
                                    var0.section = var1;
                                    return var0;
                            }
                        };
                        var0 = var5.bind(var6)(var0, var4);
                        var _closure2_slot1 = var0;
                        var0 = 33;
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
                        var0 = 34;
                        var0 = var2[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.DeveloperMode;
                        var0 = var1.useSetting;
                        var0 = var0.bind(var1)();
                        if (!var5) {
                            _fun74565_ip = 209;
                            continue _fun74565
                        }
                    case 206:
                        var5 = var0;
                    case 209:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var0 = 35;
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
                            _fun74567: for (var _fun74567_ip = 0;;) switch (_fun74567_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun74567_ip = 109;
                                        continue _fun74567
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
                                    var2 = 37;
                                    var2 = var1[var2];
                                    var3 = var3.bind(var6)(var2);
                                    var2 = 36;
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
                        var2 = _closure1_slot22;
                        var1 = _closure1_slot6;
                        var0 = {};
                        var4 = var12.guildEmojiTopContainer;
                        var0.style = var4;
                        var15 = _closure1_slot20;
                        var6 = _closure1_slot1;
                        var4 = 31;
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
                            _fun74565_ip = 520;
                            continue _fun74565
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
                            var1 = _closure1_slot16;
                            var2 = var1.PREMIUM_PROMOTION_OPENED;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var8 = var4.page;
                            var1.location_page = var8;
                            var8 = var4.section;
                            var1.location_section = var8;
                            var1 = var6.bind(var7)(var2, var1);
                            var2 = _closure1_slot0;
                            var1 = 41;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openUserSettings;
                            var1 = {};
                            var5 = _closure1_slot18;
                            var5 = var5.PREMIUM;
                            var1.screen = var5;
                            var1.analyticsLocation = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var16.openPremiumSettings = var22;
                        var16 = var21.bind(var19)(var18, var16);
                        _fun74565_ip = 550;
                        continue _fun74565;
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
                            _fun74565_ip = 587;
                            continue _fun74565
                        }
                    case 581:
                        var6 = null;
                        var5 = var6 != var7;
                    case 587:
                        if (!var5) {
                            _fun74565_ip = 740;
                            continue _fun74565
                        }
                    case 593:
                        var8 = _closure1_slot20;
                        var7 = _closure1_slot7;
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
                        var9 = 42;
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
            var _closure1_slot28 = var3;
            var3 = {};
            var3.size = var9;
            var3 = var7.bind(var0)(var8, var3);
            var _closure1_slot29 = var3;
            var3 = var6.memo;
            var1 = function arg0() {
                _fun74569: for (var _fun74569_ip = 0;;) switch (_fun74569_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.renderableSticker;
                        var8 = var0.channel;
                        var11 = var0.chatInputRef;
                        var0 = _closure1_slot23;
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
                        var0 = _closure1_slot29;
                        var1 = null;
                        if (!(var1 == var12)) {
                            _fun74569_ip = 109;
                            continue _fun74569
                        }
                    case 103:
                        if (var2) {
                            _fun74569_ip = 246;
                            continue _fun74569
                        }
                    case 109:
                        var6 = var0;
                        if (!(var1 != var12)) {
                            _fun74569_ip = 271;
                            continue _fun74569
                        }
                    case 119:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var10 = 35;
                        var1 = var1[var10];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isStandardSticker;
                        var1 = var1.bind(var2)(var12);
                        if (var1) {
                            _fun74569_ip = 211;
                            continue _fun74569
                        }
                    case 153:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var10];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isGuildSticker;
                        var1 = var1.bind(var2)(var12);
                        if (!var1) {
                            _fun74569_ip = 209;
                            continue _fun74569
                        }
                    case 184:
                        var10 = _closure1_slot20;
                        var2 = _closure1_slot27;
                        var1 = {};
                        var1.sticker = var12;
                        var1.channel = var8;
                        var0 = var10.bind(var3)(var2, var1);
                    case 209:
                        _fun74569_ip = 241;
                        continue _fun74569;
                    case 211:
                        var10 = _closure1_slot20;
                        var2 = _closure1_slot25;
                        var1 = {};
                        var1.sticker = var12;
                        var1.channel = var8;
                        var1.chatInputRef = var11;
                        var0 = var10.bind(var3)(var2, var1);
                    case 241:
                        var6 = var0;
                        _fun74569_ip = 271;
                        continue _fun74569;
                    case 246:
                        var2 = _closure1_slot20;
                        var1 = _closure1_slot28;
                        var0 = {};
                        var0.renderableSticker = var9;
                        var0.channel = var8;
                        var6 = var2.bind(var3)(var1, var0);
                    case 271:
                        var2 = _closure1_slot20;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1410, 1621, 5653, 9239, 660, 4908, 33, 1297, 478, 671, 9400, 9071, 9348, 3279, 3938, 1234, 9401, 3150, 566, 1464, 795, 9418, 4090, 9420, 9408, 9413, 5808, 9175, 3111, 8658, 1348, 3994, 9422, 1307, 4308, 4686, 9423, 6002, 8800, 9402, 5441, 9351, 5384, 4907, 2]);