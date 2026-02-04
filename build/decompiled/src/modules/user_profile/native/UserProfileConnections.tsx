// modules/user_profile/native/UserProfileConnections.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun92013: for (var _fun92013_ip = 0;;) switch (_fun92013_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.theme;
                var0 = var0.isTwitterVerifiedAccount;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun92013_ip = 23;
                    continue _fun92013
                }
            case 21:
                var0 = false;
            case 23:
                var1 = _closure1_slot15;
                var4 = var1.bind(var3)();
                var8 = {};
                var1 = _closure1_slot14;
                var8.size = var1;
                var1 = var4.verifiedIcon;
                var8.style = var1;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 12;
                var2 = var1[var2];
                var9 = var5.bind(var3)(var2);
                var5 = var9.useToken;
                var10 = _closure1_slot1;
                var2 = 10;
                var1 = var1[var2];
                var1 = var10.bind(var3)(var1);
                var1 = var1.colors;
                var1 = var1.MOBILE_TEXT_HEADING_PRIMARY;
                var13 = var5.bind(var9)(var1, var7);
                if (!var0) {
                    _fun92013_ip = 144;
                    continue _fun92013
                }
            case 116:
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var2];
                var1 = var5.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var13 = var1.TWITTER;
            case 144:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.isThemeLight;
                var1 = var1.bind(var5)(var7);
                if (var1) {
                    _fun92013_ip = 211;
                    continue _fun92013
                }
            case 178:
                if (var0) {
                    _fun92013_ip = 211;
                    continue _fun92013
                }
            case 181:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var9 = var0.BLACK;
                _fun92013_ip = 239;
                continue _fun92013;
            case 211:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var9 = var0.WHITE;
            case 239:
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.verifiedIconContainer;
                var0.style = var4;
                var10 = _closure1_slot12;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 8;
                var4 = var12[var5];
                var7 = var11.bind(var3)(var4);
                var4 = {};
                var14 = 14;
                var14 = var12[var14];
                var14 = var11.bind(var3)(var14);
                var4.source = var14;
                var4.color = var13;
                var16 = var4;
                var15 = var8;
                var13 = copyDataProperties(var16, var15);
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot12;
                var5 = var12[var5];
                var6 = var11.bind(var3)(var5);
                var5 = {};
                var10 = 15;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var5.source = var10;
                var5.color = var9;
                var16 = var5;
                var15 = var8;
                var8 = copyDataProperties(var16, var15);
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var14 = 0;
    var4 = var6[var14];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var12 = 1;
    var3 = var6[var12];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Pressable;
    var _closure1_slot4 = var4;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var16 = var3.CARD_PADDING;
    var13 = var3.CARD_ROWS_COLUMN_GAP;
    var3 = var3.CARD_ROWS_ICON_SIZE_VARIANT;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot9 = var4;
    var3 = var3.PlatformTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.MetadataFields;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot12 = var4;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var4 = var6[var3];
    var4 = var11.bind(var0)(var4);
    var4 = var4.Sizes;
    var8 = var4.REFRESH_SMALL_16;
    var _closure1_slot14 = var8;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = var4.getIconSize;
    var10 = var3.bind(var4)(var8);
    var3 = 9;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var15 = 12;
    var15 = var16 - var15;
    var9.paddingBottom = var15;
    var3.cardContainer = var9;
    var9 = {};
    var9.marginBottom = var14;
    var3.cardTitle = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'columnGap': null,
        'paddingVertical': 12,
        'minHeight': 60
    };
    var9.columnGap = var13;
    var3.connectionRow = var9;
    var9 = {};
    var9.flexGrow = var12;
    var3.connectionInfoContainer = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'columnGap': 4
    };
    var3.connectedAccountName = var9;
    var9 = {};
    var9.height = var10;
    var9.width = var10;
    var3.verifiedIconContainer = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'top': 0
    };
    var3.verifiedIcon = var9;
    var9 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var3.connectionMetadata = var9;
    var9 = {};
    var10 = 10;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_ACTIVE;
    var9.color = var10;
    var3.metadataItem = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 6
    };
    var3.poweredByContainer = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun92014: for (var _fun92014_ip = 0;;) switch (_fun92014_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.userId;
                var _closure2_slot0 = var4;
                var19 = var1.account;
                var _closure2_slot1 = var19;
                var25 = var1.theme;
                var11 = var1.locale;
                var1 = var1.showMetadata;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun92014_ip = 50;
                    continue _fun92014
                }
            case 48:
                var1 = true;
            case 50:
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot15;
                var17 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useUserProfileAnalyticsContext;
                var2 = var2.bind(var5)();
                var2 = var2.trackUserProfileAction;
                _closure2_slot2 = var2;
                var9 = var19.metadata;
                var7 = null;
                if (!(var7 == var9)) {
                    _fun92014_ip = 131;
                    continue _fun92014
                }
            case 129:
                var9 = {};
            case 131:
                var23 = null;
                if (!var1) {
                    _fun92014_ip = 182;
                    continue _fun92014
                }
            case 136:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 17;
                var5 = var10[var5];
                var10 = var8.bind(var3)(var5);
                var8 = var10.getCreatedAtDate;
                var5 = _closure1_slot11;
                var5 = var5.CREATED_AT;
                var5 = var9[var5];
                var23 = var8.bind(var10)(var5, var11);
            case 182:
                _closure2_slot3 = var23;
                var16 = null;
                if (!var1) {
                    _fun92014_ip = 581;
                    continue _fun92014
                }
            case 194:
                var1 = {};
                var5 = var19.type;
                var1.accountType = var5;
                var1.metadata = var9;
                var5 = var17.metadataItem;
                var1.style = var5;
                var8 = var1.accountType;
                var11 = var1.metadata;
                var10 = var1.style;
                var1 = _closure1_slot10;
                var1 = var1.REDDIT;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 546;
                    continue _fun92014
                }
            case 255:
                var1 = _closure1_slot10;
                var1 = var1.STEAM;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 512;
                    continue _fun92014
                }
            case 272:
                var1 = _closure1_slot10;
                var1 = var1.BLUESKY;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 478;
                    continue _fun92014
                }
            case 289:
                var1 = _closure1_slot10;
                var1 = var1.TWITTER;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 478;
                    continue _fun92014
                }
            case 306:
                var1 = _closure1_slot10;
                var1 = var1.MASTODON;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 478;
                    continue _fun92014
                }
            case 323:
                var1 = _closure1_slot10;
                var1 = var1.PAYPAL;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 444;
                    continue _fun92014
                }
            case 337:
                var1 = _closure1_slot10;
                var1 = var1.EBAY;
                if (!(var1 !== var8)) {
                    _fun92014_ip = 407;
                    continue _fun92014
                }
            case 351:
                var1 = _closure1_slot10;
                var5 = var1.TIKTOK;
                var1 = null;
                if (!(var5 === var8)) {
                    _fun92014_ip = 578;
                    continue _fun92014
                }
            case 370:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.generateTikTokMetadataItems;
                var1 = var5.bind(var8)(var11, var10);
                _fun92014_ip = 578;
                continue _fun92014;
            case 407:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.generateEbayMetadataItems;
                var1 = var5.bind(var8)(var11, var10);
                _fun92014_ip = 578;
                continue _fun92014;
            case 444:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.generatePaypalMetadataItems;
                var1 = var5.bind(var8)(var11, var10);
                _fun92014_ip = 578;
                continue _fun92014;
            case 478:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.generateTwitterMetadataItems;
                var1 = var5.bind(var8)(var11, var10);
                _fun92014_ip = 578;
                continue _fun92014;
            case 512:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.generateSteamMetadataItems;
                var1 = var5.bind(var8)(var11, var10);
                _fun92014_ip = 578;
                continue _fun92014;
            case 546:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var8 = var8.bind(var3)(var5);
                var5 = var8.generateRedditMetadataItems;
                var1 = var5.bind(var8)(var11, var10);
            case 578:
                var16 = var1;
            case 581:
                var13 = var7 != var16;
                if (!var13) {
                    _fun92014_ip = 599;
                    continue _fun92014
                }
            case 588:
                var5 = var16.length;
                var1 = 0;
                var13 = var5 > var1;
            case 599:
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 18;
                var1 = var12[var1];
                var8 = var5.bind(var3)(var1);
                var5 = var8.get;
                var1 = var19.type;
                var1 = var5.bind(var8)(var1);
                _closure2_slot4 = var1;
                var11 = _closure1_slot0;
                var5 = 19;
                var5 = var12[var5];
                var10 = var11.bind(var3)(var5);
                var8 = var10.makeSource;
                var5 = 13;
                var5 = var12[var5];
                var11 = var11.bind(var3)(var5);
                var5 = var11.isThemeDark;
                var5 = var5.bind(var11)(var25);
                var12 = var7 == var1;
                if (var5) {
                    _fun92014_ip = 708;
                    continue _fun92014
                }
            case 690:
                var5 = undefined;
                if (var12) {
                    _fun92014_ip = 706;
                    continue _fun92014
                }
            case 695:
                var11 = var1.icon;
                var5 = var11.lightPNG;
            case 706:
                _fun92014_ip = 727;
                continue _fun92014;
            case 708:
                var11 = undefined;
                if (var12) {
                    _fun92014_ip = 724;
                    continue _fun92014
                }
            case 713:
                var12 = var1.icon;
                var11 = var12.darkPNG;
            case 724:
                var5 = var11;
            case 727:
                var10 = var8.bind(var10)(var5);
                var8 = var7 == var1;
                var5 = undefined;
                if (var8) {
                    _fun92014_ip = 767;
                    continue _fun92014
                }
            case 741:
                var8 = var1.getPlatformUserUrl;
                var8 = var7 == var8;
                var5 = undefined;
                if (var8) {
                    _fun92014_ip = 767;
                    continue _fun92014
                }
            case 756:
                var8 = var1.getPlatformUserUrl;
                var5 = var8.bind(var1)(var19);
            case 767:
                _closure2_slot5 = var5;
                var11 = var19.type;
                var8 = _closure1_slot10;
                var8 = var8.TWITTER;
                var24 = var11 === var8;
                if (!var24) {
                    _fun92014_ip = 817;
                    continue _fun92014
                }
            case 793:
                var8 = _closure1_slot11;
                var8 = var8.TWITTER_VERIFIED;
                var9 = var9[var8];
                var8 = '1';
                var24 = var8 === var9;
            case 817:
                var12 = _closure1_slot3;
                var9 = var12.useCallback;
                var11 = var19.type;
                var8 = new Array(4);
                var8[0] = var11;
                var8[1] = var5;
                var8[2] = var2;
                var8[3] = var4;
                var4 = function() { // Environment: var0
                    _fun92015: for (var _fun92015_ip = 0;;) switch (_fun92015_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun92015_ip = 123;
                                continue _fun92015
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            var0 = {};
                            var2 = 'PRESS_VIEW_CONNECTED_ACCOUNT';
                            var0.action = var2;
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 20;
                            var0 = var5[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.handleClick;
                            var0 = {};
                            var5 = _closure2_slot5;
                            var0.href = var5;
                            var4 = _closure2_slot1;
                            var4 = var4.type;
                            var3 = _closure1_slot10;
                            var3 = var3.DOMAIN;
                            var3 = var4 !== var3;
                            var0.trusted = var3;
                            var3 = function() {
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 21;
                                var1 = var4[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var1);
                                var6 = var7.trackWithMetadata;
                                var1 = _closure1_slot9;
                                var5 = var1.CONNECTED_ACCOUNT_VIEWED;
                                var3 = {};
                                var8 = _closure2_slot1;
                                var8 = var8.type;
                                var3.platform_type = var8;
                                var8 = _closure2_slot0;
                                var3.other_user_id = var8;
                                var3 = var6.bind(var7)(var5, var3);
                                var3 = _closure1_slot1;
                                var2 = 22;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.openURL;
                                var1 = _closure2_slot5;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onConfirm = var3;
                            var0 = var1.bind(var2)(var0);
                        case 123:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var9.bind(var12)(var4, var8);
                var8 = var12.useCallback;
                var11 = var19.name;
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = {};
                    var0 = 'COPY_CONNECTED_ACCOUNT';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 23;
                    var5 = var3[var4];
                    var6 = var2.bind(var0)(var5);
                    var5 = var6.triggerHapticFeedback;
                    var4 = var3[var4];
                    var4 = var2.bind(var0)(var4);
                    var4 = var4.HapticFeedbackTypes;
                    var4 = var4.IMPACT_LIGHT;
                    var4 = var5.bind(var6)(var4);
                    var4 = 24;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot1;
                    var1 = var1.name;
                    var1 = var4.bind(var5)(var1);
                    var1 = 25;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var4 = var8.bind(var12)(var2, var4);
                var11 = var12.useMemo;
                var2 = var19.name;
                var8 = new Array(3);
                var8[0] = var2;
                var8[1] = var23;
                var14 = var7 == var1;
                var2 = undefined;
                if (var14) {
                    _fun92014_ip = 935;
                    continue _fun92014
                }
            case 930:
                var2 = var1.name;
            case 935:
                var8[2] = var2;
                var2 = function() { // Environment: var0
                    _fun92018: for (var _fun92018_ip = 0;;) switch (_fun92018_ip) {
                        case 0:
                            var2 = new Array(0);
                            var3 = var2.push;
                            var0 = _closure2_slot4;
                            var1 = null;
                            var0 = var1 == var0;
                            var7 = undefined;
                            var4 = undefined;
                            if (var0) {
                                _fun92018_ip = 38;
                                continue _fun92018
                            }
                        case 29:
                            var0 = _closure2_slot4;
                            var4 = var0.name;
                        case 38:
                            var5 = var1 != var4;
                            var0 = '';
                            if (!var5) {
                                _fun92018_ip = 52;
                                continue _fun92018
                            }
                        case 49:
                            var0 = var4;
                        case 52:
                            var0 = var3.bind(var2)(var0);
                            var3 = var2.push;
                            var0 = _closure2_slot1;
                            var0 = var0.name;
                            var0 = var3.bind(var2)(var0);
                            var0 = _closure2_slot3;
                            if (!(var1 != var0)) {
                                _fun92018_ip = 164;
                                continue _fun92018
                            }
                        case 84:
                            var1 = var2.push;
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 26;
                            var4 = var8[var0];
                            var4 = var3.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var0 = var8[var0];
                            var0 = var3.bind(var7)(var0);
                            var0 = var0.t;
                            var3 = var0["9rfonh"];
                            var0 = {};
                            var6 = _closure2_slot3;
                            var0.date = var6;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 164:
                            var1 = var2.join;
                            var0 = ', ';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var11 = var11.bind(var12)(var2, var8);
                var8 = _closure1_slot3;
                var2 = var8.useMemo;
                var14 = var7 == var1;
                var12 = undefined;
                if (var14) {
                    _fun92014_ip = 975;
                    continue _fun92014
                }
            case 970:
                var12 = var1.name;
            case 975:
                var1 = new Array(2);
                var1[0] = var12;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun92019: for (var _fun92019_ip = 0;;) switch (_fun92019_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun92019_ip = 116;
                                continue _fun92019
                            }
                        case 13:
                            var1 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 26;
                            var2 = var7[var0];
                            var5 = undefined;
                            var2 = var1.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.formatToPlainString;
                            var0 = var7[var0];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.t;
                            var1 = var0.OKzaN3;
                            var0 = {};
                            var7 = _closure2_slot4;
                            var7 = var4 == var7;
                            if (var7) {
                                _fun92019_ip = 90;
                                continue _fun92019
                            }
                        case 81:
                            var6 = _closure2_slot4;
                            var5 = var6.name;
                        case 90:
                            var6 = var4 != var5;
                            var4 = '';
                            if (!var6) {
                                _fun92019_ip = 104;
                                continue _fun92019
                            }
                        case 101:
                            var4 = var5;
                        case 104:
                            var0.name = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun92019_ip = 176;
                            continue _fun92019;
                        case 116:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 26;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.wuRE8M;
                            var0 = var2.bind(var3)(var1);
                        case 176:
                            return var0;
                    }
                };
                var8 = var2.bind(var8)(var0, var1);
                if (!(var7 == var5)) {
                    _fun92014_ip = 1010;
                    continue _fun92014
                }
            case 1004:
                var2 = _closure1_slot4;
                _fun92014_ip = 1036;
                continue _fun92014;
            case 1010:
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 27;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.PressableOpacity;
            case 1036:
                var1 = _closure1_slot13;
                var0 = {};
                var0.accessibilityLabel = var11;
                var0.accessibilityHint = var8;
                var8 = 'button';
                var0.accessibilityRole = var8;
                var11 = var7 != var5;
                var8 = undefined;
                if (!var11) {
                    _fun92014_ip = 1071;
                    continue _fun92014
                }
            case 1068:
                var8 = var9;
            case 1071:
                var0.onPress = var8;
                var0.onLongPress = var4;
                var4 = var17.connectionRow;
                var0.style = var4;
                var9 = _closure1_slot12;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = 28;
                var4 = var18[var4];
                var4 = var20.bind(var3)(var4);
                var8 = var4.BaseIconImage;
                var4 = {};
                var11 = _closure1_slot8;
                var4.size = var11;
                var4.source = var10;
                var8 = var9.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var17.connectionInfoContainer;
                var8.style = var11;
                var15 = _closure1_slot13;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = var17.connectedAccountName;
                var11.style = var14;
                var21 = _closure1_slot12;
                var14 = 29;
                var18 = var18[var14];
                var18 = var20.bind(var3)(var18);
                var20 = var18.Text;
                var18 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var22 = var19.name;
                var18.children = var22;
                var20 = var21.bind(var3)(var20, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var20 = var19.verified;
                var19 = null;
                if (!var20) {
                    _fun92014_ip = 1283;
                    continue _fun92014
                }
            case 1257:
                var22 = _closure1_slot12;
                var21 = _closure1_slot18;
                var20 = {};
                var20.theme = var25;
                var20.isTwitterVerifiedAccount = var24;
                var19 = var22.bind(var3)(var21, var20);
            case 1283:
                var18[1] = var19;
                var11.children = var18;
                var12 = var15.bind(var3)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var15 = var7 != var23;
                var12 = null;
                if (!var15) {
                    _fun92014_ip = 1419;
                    continue _fun92014
                }
            case 1314:
                var18 = _closure1_slot12;
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var14 = var24[var14];
                var14 = var20.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var19 = 26;
                var21 = var24[var19];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var24[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19["9rfonh"];
                var19 = {};
                var19.date = var23;
                var19 = var21.bind(var22)(var20, var19);
                var14.children = var19;
                var12 = var18.bind(var3)(var15, var14);
            case 1419:
                var11[1] = var12;
                var12 = null;
                if (!var13) {
                    _fun92014_ip = 1458;
                    continue _fun92014
                }
            case 1428:
                var15 = _closure1_slot12;
                var14 = _closure1_slot5;
                var13 = {};
                var17 = var17.connectionMetadata;
                var13.style = var17;
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1458:
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var4[1] = var8;
                var5 = var7 != var5;
                if (!var5) {
                    _fun92014_ip = 1529;
                    continue _fun92014
                }
            case 1483:
                var8 = _closure1_slot12;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 30;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.LinkExternalSmallIcon;
                var6 = {};
                var9 = 'sm';
                var6.size = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1529:
                var4[2] = var5;
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun92020: for (var _fun92020_ip = 0;;) switch (_fun92020_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.applicationRoleConnection;
                var _closure2_slot0 = var17;
                var0 = _closure1_slot15;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 11;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.generateRoleConnectionMetadataItems;
                var15 = var0.bind(var1)(var17);
                var9 = _closure1_slot1;
                var0 = 19;
                var0 = var10[var0];
                var2 = var9.bind(var3)(var0);
                var1 = var2.getApplicationIconSource;
                var0 = {};
                var4 = var17.application;
                var4 = var4.id;
                var0.id = var4;
                var4 = var17.application;
                var4 = var4.icon;
                var0.icon = var4;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var13.connectionRow;
                var0.style = var4;
                var6 = _closure1_slot12;
                var8 = 8;
                var4 = var10[var8];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.MEDIUM;
                var4.size = var8;
                var4.source = var7;
                var7 = true;
                var4.disableColor = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var13.connectionInfoContainer;
                var5.style = var8;
                var8 = var17.platform_name;
                var11 = null;
                var8 = var11 != var8;
                var9 = null;
                if (!var8) {
                    _fun92020_ip = 300;
                    continue _fun92020
                }
            case 241:
                var14 = _closure1_slot12;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 29;
                var8 = var16[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var17.platform_name;
                var8.children = var16;
                var9 = var14.bind(var3)(var10, var8);
            case 300:
                var8 = new Array(4);
                var8[0] = var9;
                var9 = var17.platform_username;
                var10 = var11 != var9;
                var9 = null;
                if (!var10) {
                    _fun92020_ip = 382;
                    continue _fun92020
                }
            case 323:
                var16 = _closure1_slot12;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 29;
                var10 = var18[var10];
                var10 = var14.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var17 = var17.platform_username;
                var10.children = var17;
                var9 = var16.bind(var3)(var14, var10);
            case 382:
                var8[1] = var9;
                var10 = var11 != var15;
                var9 = null;
                if (!var10) {
                    _fun92020_ip = 441;
                    continue _fun92020
                }
            case 395:
                var14 = var15.length;
                var10 = 0;
                var10 = var14 > var10;
                var9 = null;
                if (!var10) {
                    _fun92020_ip = 441;
                    continue _fun92020
                }
            case 411:
                var14 = _closure1_slot12;
                var11 = _closure1_slot5;
                var10 = {};
                var16 = var13.connectionMetadata;
                var10.style = var16;
                var10.children = var15;
                var9 = var14.bind(var3)(var11, var10);
            case 441:
                var8[2] = var9;
                var11 = _closure1_slot12;
                var10 = _closure1_slot5;
                var9 = {};
                var13 = var13.poweredByContainer;
                var9.style = var13;
                var14 = _closure1_slot12;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 29;
                var12 = var20[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var15 = 26;
                var17 = var20[var15];
                var17 = var16.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.format;
                var15 = var20[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.zIT9YA;
                var15 = {};
                var19 = function() {
                    var0 = _closure2_slot0;
                    var0 = var0.application;
                    var0 = var0.name;
                    return var0;
                };
                var15.applicationHook = var19;
                var15 = var17.bind(var18)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileConnections.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ApplicationRoleConnection = var3;
    var3 = function arg0() {
        _fun92022: for (var _fun92022_ip = 0;;) switch (_fun92022_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userId;
                var _closure2_slot0 = var3;
                var12 = var0.style;
                var0 = _closure1_slot15;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 31;
                var0 = var2[var0];
                var5 = var1.bind(var4)(var0);
                var0 = var5.useThemeContext;
                var0 = var0.bind(var5)();
                var0 = var0.theme;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot1;
                var0 = 32;
                var0 = var2[var0];
                var0 = var5.bind(var4)(var0);
                var10 = var0.bind(var4)(var3);
                var0 = 33;
                var3 = var2[var0];
                var9 = var1.bind(var4)(var3);
                var6 = var9.useStateFromStores;
                var3 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var8
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var3 = var6.bind(var9)(var5, var3);
                var _closure2_slot2 = var3;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var0 = _closure1_slot7;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (var1) {
                    _fun92022_ip = 374;
                    continue _fun92022
                }
            case 186:
                var2 = var10.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun92022_ip = 374;
                    continue _fun92022
                }
            case 202:
                var3 = _closure1_slot12;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 34;
                var1 = var9[var5];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var13 = var11.cardContainer;
                var6 = new Array(2);
                var6[0] = var13;
                var6[1] = var12;
                var1.style = var6;
                var6 = _closure1_slot0;
                var12 = 26;
                var13 = var9[var12];
                var13 = var6.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var9[var12];
                var12 = var6.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["3fe7U5"];
                var12 = var13.bind(var14)(var12);
                var1.title = var12;
                var11 = var11.cardTitle;
                var1.titleStyle = var11;
                var7 = _closure1_slot12;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.UserProfileCardRows;
                var5 = {};
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot16;
                    var2 = {};
                    var2.account = var0;
                    var5 = _closure2_slot1;
                    var2.theme = var5;
                    var5 = _closure2_slot2;
                    var2.locale = var5;
                    var1 = _closure2_slot0;
                    var2.userId = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 374:
                return var0;
        }
    };
    var2.UserProfileAccountConnectionsCard = var3;
    var1 = function arg0() {
        _fun92026: for (var _fun92026_ip = 0;;) switch (_fun92026_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userId;
                var12 = var0.style;
                var0 = _closure1_slot15;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 35;
                var0 = var2[var0];
                var0 = var3.bind(var4)(var0);
                var10 = var0.bind(var4)(var1);
                var1 = _closure1_slot0;
                var0 = 33;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var0 = _closure1_slot7;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (var1) {
                    _fun92026_ip = 295;
                    continue _fun92026
                }
            case 107:
                var2 = var10.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun92026_ip = 295;
                    continue _fun92026
                }
            case 123:
                var3 = _closure1_slot12;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 34;
                var1 = var9[var5];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var13 = var11.cardContainer;
                var6 = new Array(2);
                var6[0] = var13;
                var6[1] = var12;
                var1.style = var6;
                var6 = _closure1_slot0;
                var12 = 26;
                var13 = var9[var12];
                var13 = var6.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var9[var12];
                var12 = var6.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.PHjkRE;
                var12 = var13.bind(var14)(var12);
                var1.title = var12;
                var11 = var11.cardTitle;
                var1.titleStyle = var11;
                var7 = _closure1_slot12;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.UserProfileCardRows;
                var5 = {};
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var2.applicationRoleConnection = var0;
                    var0 = var0.application;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 295:
                return var0;
        }
    };
    var2.UserProfileApplicationRoleConnectionsCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1685, 3237, 6963, 660, 4523, 33, 4086, 1297, 671, 9917, 3151, 3206, 9922, 9923, 6976, 4522, 4395, 1417, 5890, 4302, 3144, 3279, 5291, 3147, 1234, 4902, 3150, 3941, 6432, 3159, 11973, 566, 7742, 11974, 2]);