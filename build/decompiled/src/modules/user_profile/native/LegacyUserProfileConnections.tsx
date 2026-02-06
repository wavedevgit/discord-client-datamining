// modules/user_profile/native/LegacyUserProfileConnections.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var9;
    var5 = function arg0() {
        _fun78290: for (var _fun78290_ip = 0;;) switch (_fun78290_ip) {
            case 0:
                var3 = arg0;
                var27 = var3.account;
                var _closure2_slot0 = var27;
                var1 = var3.theme;
                var11 = var3.locale;
                var9 = var3.userId;
                var _closure2_slot1 = var9;
                var8 = var3.style;
                var2 = var3.showMetadata;
                var6 = var3.showInvisibleIcon;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var19 = null;
                if (!(var19 == var2)) {
                    _fun78290_ip = 71;
                    continue _fun78290
                }
            case 69:
                var2 = true;
            case 71:
                var4 = _closure1_slot17;
                var21 = var4.bind(var3)();
                var10 = var27.metadata;
                if (!(var19 == var10)) {
                    _fun78290_ip = 94;
                    continue _fun78290
                }
            case 92:
                var10 = {};
            case 94:
                var28 = null;
                if (!var2) {
                    _fun78290_ip = 145;
                    continue _fun78290
                }
            case 99:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 12;
                var4 = var7[var4];
                var7 = var5.bind(var3)(var4);
                var5 = var7.getCreatedAtDate;
                var4 = _closure1_slot13;
                var4 = var4.CREATED_AT;
                var4 = var10[var4];
                var28 = var5.bind(var7)(var4, var11);
            case 145:
                var20 = undefined;
                var4 = undefined;
                if (!var2) {
                    _fun78290_ip = 634;
                    continue _fun78290
                }
            case 155:
                var5 = var27.type;
                var2 = _closure1_slot11;
                var2 = var2.REDDIT;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 594;
                    continue _fun78290
                }
            case 177:
                var2 = _closure1_slot11;
                var2 = var2.STEAM;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 552;
                    continue _fun78290
                }
            case 194:
                var2 = _closure1_slot11;
                var2 = var2.BLUESKY;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 432;
                    continue _fun78290
                }
            case 211:
                var2 = _closure1_slot11;
                var2 = var2.MASTODON;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 432;
                    continue _fun78290
                }
            case 228:
                var2 = _closure1_slot11;
                var2 = var2.TWITTER;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 432;
                    continue _fun78290
                }
            case 245:
                var2 = _closure1_slot11;
                var2 = var2.PAYPAL;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 387;
                    continue _fun78290
                }
            case 262:
                var2 = _closure1_slot11;
                var2 = var2.EBAY;
                if (!(var2 !== var5)) {
                    _fun78290_ip = 342;
                    continue _fun78290
                }
            case 276:
                var2 = _closure1_slot11;
                var2 = var2.TIKTOK;
                var20 = undefined;
                var4 = undefined;
                if (!(var2 === var5)) {
                    _fun78290_ip = 634;
                    continue _fun78290
                }
            case 297:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.generateTikTokMetadataItems;
                var2 = var21.metadataItem;
                var20 = var5.bind(var7)(var10, var2);
                var4 = undefined;
                _fun78290_ip = 634;
                continue _fun78290;
            case 342:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.generateEbayMetadataItems;
                var2 = var21.metadataItem;
                var20 = var5.bind(var7)(var10, var2);
                var4 = undefined;
                _fun78290_ip = 634;
                continue _fun78290;
            case 387:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.generatePaypalMetadataItems;
                var2 = var21.metadataItem;
                var20 = var5.bind(var7)(var10, var2);
                var4 = undefined;
                _fun78290_ip = 634;
                continue _fun78290;
            case 432:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.generateTwitterMetadataItems;
                var2 = var21.metadataItem;
                var5 = var5.bind(var7)(var10, var2);
                var2 = _closure1_slot13;
                var2 = var2.TWITTER_VERIFIED;
                var7 = var10[var2];
                var2 = '1';
                var20 = var5;
                var4 = undefined;
                if (!(var2 === var7)) {
                    _fun78290_ip = 634;
                    continue _fun78290
                }
            case 502:
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 14;
                var2 = var11[var2];
                var11 = var7.bind(var3)(var2);
                var7 = var11.get;
                var2 = _closure1_slot11;
                var2 = var2.TWITTER;
                var2 = var7.bind(var11)(var2);
                var4 = var2.color;
                var20 = var5;
                _fun78290_ip = 634;
                continue _fun78290;
            case 552:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.generateSteamMetadataItems;
                var2 = var21.metadataItem;
                var20 = var5.bind(var7)(var10, var2);
                var4 = undefined;
                _fun78290_ip = 634;
                continue _fun78290;
            case 594:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.generateRedditMetadataItems;
                var2 = var21.metadataItem;
                var20 = var5.bind(var7)(var10, var2);
                var4 = undefined;
            case 634:
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 14;
                var2 = var12[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.get;
                var2 = var27.type;
                var2 = var5.bind(var7)(var2);
                _closure2_slot2 = var2;
                var11 = _closure1_slot0;
                var5 = 15;
                var5 = var12[var5];
                var10 = var11.bind(var3)(var5);
                var7 = var10.makeSource;
                var5 = 16;
                var5 = var12[var5];
                var11 = var11.bind(var3)(var5);
                var5 = var11.isThemeDark;
                var5 = var5.bind(var11)(var1);
                var12 = var19 == var2;
                if (var5) {
                    _fun78290_ip = 743;
                    continue _fun78290
                }
            case 725:
                var5 = undefined;
                if (var12) {
                    _fun78290_ip = 741;
                    continue _fun78290
                }
            case 730:
                var11 = var2.icon;
                var5 = var11.lightPNG;
            case 741:
                _fun78290_ip = 762;
                continue _fun78290;
            case 743:
                var11 = undefined;
                if (var12) {
                    _fun78290_ip = 759;
                    continue _fun78290
                }
            case 748:
                var12 = var2.icon;
                var11 = var12.darkPNG;
            case 759:
                var5 = var11;
            case 762:
                var14 = var7.bind(var10)(var5);
                var7 = var19 == var2;
                var5 = undefined;
                if (var7) {
                    _fun78290_ip = 802;
                    continue _fun78290
                }
            case 776:
                var7 = var2.getPlatformUserUrl;
                var7 = var19 == var7;
                var5 = undefined;
                if (var7) {
                    _fun78290_ip = 802;
                    continue _fun78290
                }
            case 791:
                var7 = var2.getPlatformUserUrl;
                var5 = var7.bind(var2)(var27);
            case 802:
                _closure2_slot3 = var5;
                if (!(var19 != var6)) {
                    _fun78290_ip = 813;
                    continue _fun78290
                }
            case 810:
                if (var6) {
                    _fun78290_ip = 882;
                    continue _fun78290
                }
            case 813:
                var6 = var19 != var5;
                var11 = null;
                if (!var6) {
                    _fun78290_ip = 940;
                    continue _fun78290
                }
            case 822:
                var10 = _closure1_slot14;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 17;
                var6 = var15[var6];
                var7 = var13.bind(var3)(var6);
                var6 = {};
                var12 = var21.connectedAccountOpenLink;
                var6.style = var12;
                var12 = 19;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var6.source = var12;
                var11 = var10.bind(var3)(var7, var6);
                _fun78290_ip = 940;
                continue _fun78290;
            case 882:
                var10 = _closure1_slot14;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 17;
                var6 = var15[var6];
                var7 = var13.bind(var3)(var6);
                var6 = {};
                var12 = var21.connectedAccountOpenHide;
                var6.style = var12;
                var12 = 18;
                var12 = var15[var12];
                var12 = var13.bind(var3)(var12);
                var6.source = var12;
                var11 = var10.bind(var3)(var7, var6);
            case 940:
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 20;
                var6 = var10[var12];
                var18 = var13.bind(var3)(var6);
                var16 = var18.useToken;
                var15 = _closure1_slot1;
                var7 = 11;
                var6 = var10[var7];
                var6 = var15.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_MOD_MUTED;
                var6 = var16.bind(var18)(var6, var1);
                var12 = var10[var12];
                var13 = var13.bind(var3)(var12);
                var12 = var13.useToken;
                var10 = var10[var7];
                var10 = var15.bind(var3)(var10);
                var10 = var10.colors;
                var10 = var10.INTERACTIVE_TEXT_ACTIVE;
                if (!(var19 != var4)) {
                    _fun78290_ip = 1048;
                    continue _fun78290
                }
            case 1038:
                var15 = _closure1_slot12;
                var1 = var15.DARK;
            case 1048:
                var15 = var12.bind(var13)(var10, var1);
                var13 = var6;
                if (!(var19 != var4)) {
                    _fun78290_ip = 1092;
                    continue _fun78290
                }
            case 1061:
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var15 = var1.WHITE;
                var13 = var4;
            case 1092:
                var1 = var27.verified;
                var24 = null;
                if (!var1) {
                    _fun78290_ip = 1311;
                    continue _fun78290
                }
            case 1106:
                var6 = _closure1_slot15;
                var4 = _closure1_slot5;
                var1 = {};
                var7 = var21.verifiedCheckContainer;
                var1.style = var7;
                var12 = _closure1_slot14;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var16 = 17;
                var7 = var22[var16];
                var10 = var18.bind(var3)(var7);
                var7 = {};
                var23 = var21.verifiedCheck;
                var7.style = var23;
                var23 = var22[var16];
                var23 = var18.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.REFRESH_SMALL_16;
                var7.size = var23;
                var23 = 21;
                var23 = var22[var23];
                var23 = var18.bind(var3)(var23);
                var7.source = var23;
                var7.color = var13;
                var10 = var12.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var13 = _closure1_slot14;
                var10 = var22[var16];
                var12 = var18.bind(var3)(var10);
                var10 = {};
                var23 = var21.verifiedCheck;
                var10.style = var23;
                var16 = var22[var16];
                var16 = var18.bind(var3)(var16);
                var16 = var16.Sizes;
                var16 = var16.REFRESH_SMALL_16;
                var10.size = var16;
                var16 = 22;
                var16 = var22[var16];
                var16 = var18.bind(var3)(var16);
                var10.source = var16;
                var10.color = var15;
                var10 = var13.bind(var3)(var12, var10);
                var7[1] = var10;
                var1.children = var7;
                var24 = var6.bind(var3)(var4, var1);
            case 1311:
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var1 = var27.name;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var4 = var3[var1];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var4.bind(var5)(var1);
                    var1 = 24;
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.name;
                    var1 = var4.bind(var5)(var1);
                    var1 = 25;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var4 = var6.bind(var7)(var1, var4);
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var10 = var19 == var2;
                var1 = undefined;
                if (var10) {
                    _fun78290_ip = 1369;
                    continue _fun78290
                }
            case 1364:
                var1 = var2.name;
            case 1369:
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var5;
                var1 = function() { // Environment: var0
                    _fun78292: for (var _fun78292_ip = 0;;) switch (_fun78292_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun78292_ip = 116;
                                continue _fun78292
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
                            var7 = _closure2_slot2;
                            var7 = var4 == var7;
                            if (var7) {
                                _fun78292_ip = 90;
                                continue _fun78292
                            }
                        case 81:
                            var6 = _closure2_slot2;
                            var5 = var6.name;
                        case 90:
                            var6 = var4 != var5;
                            var4 = '';
                            if (!var6) {
                                _fun78292_ip = 104;
                                continue _fun78292
                            }
                        case 101:
                            var4 = var5;
                        case 104:
                            var0.name = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun78292_ip = 176;
                            continue _fun78292;
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
                var7 = var6.bind(var7)(var1, var2);
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var10 = var27.type;
                var1 = new Array(3);
                var1[0] = var10;
                var1[1] = var5;
                var1[2] = var9;
                var0 = function() { // Environment: var0
                    _fun78293: for (var _fun78293_ip = 0;;) switch (_fun78293_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun78293_ip = 102;
                                continue _fun78293
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.handleClick;
                            var0 = {};
                            var5 = _closure2_slot3;
                            var0.href = var5;
                            var4 = _closure2_slot0;
                            var4 = var4.type;
                            var3 = _closure1_slot11;
                            var3 = var3.DOMAIN;
                            var3 = var4 !== var3;
                            var0.trusted = var3;
                            var3 = function() {
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 28;
                                var1 = var4[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var1);
                                var6 = var7.trackWithMetadata;
                                var1 = _closure1_slot10;
                                var5 = var1.CONNECTED_ACCOUNT_VIEWED;
                                var3 = {};
                                var8 = _closure2_slot0;
                                var8 = var8.type;
                                var3.platform_type = var8;
                                var8 = _closure2_slot1;
                                var3.other_user_id = var8;
                                var3 = var6.bind(var7)(var5, var3);
                                var3 = _closure1_slot1;
                                var2 = 29;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.openURL;
                                var1 = _closure2_slot3;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0.onConfirm = var3;
                            var0 = var1.bind(var2)(var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                if (!(var19 == var5)) {
                    _fun78290_ip = 1447;
                    continue _fun78290
                }
            case 1441:
                var2 = _closure1_slot4;
                _fun78290_ip = 1473;
                continue _fun78290;
            case 1447:
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 30;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.PressableOpacity;
            case 1473:
                var1 = _closure1_slot14;
                var0 = {};
                var0.accessibilityLabel = var7;
                var7 = 'button';
                var0.accessibilityRole = var7;
                var7 = var19 != var5;
                var5 = undefined;
                if (!var7) {
                    _fun78290_ip = 1503;
                    continue _fun78290
                }
            case 1500:
                var5 = var6;
            case 1503:
                var0.onPress = var5;
                var0.onLongPress = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot5;
                var4 = {};
                var9 = var21.connectedAccountContainer;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.style = var7;
                var9 = _closure1_slot15;
                var8 = _closure1_slot5;
                var7 = {};
                var10 = var21.connectedAccount;
                var7.style = var10;
                var13 = _closure1_slot14;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var15 = 17;
                var10 = var23[var15];
                var12 = var16.bind(var3)(var10);
                var10 = {};
                var15 = var23[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.Sizes;
                var15 = var15.MEDIUM;
                var10.size = var15;
                var10.source = var14;
                var14 = true;
                var10.disableColor = var14;
                var12 = var13.bind(var3)(var12, var10);
                var10 = new Array(3);
                var10[0] = var12;
                var14 = _closure1_slot15;
                var13 = _closure1_slot5;
                var12 = {};
                var15 = var21.connectedAccountNameContainer;
                var12.style = var15;
                var22 = _closure1_slot15;
                var16 = _closure1_slot5;
                var15 = {};
                var18 = var21.connectedAccountName;
                var15.style = var18;
                var26 = _closure1_slot14;
                var25 = _closure1_slot0;
                var18 = 31;
                var23 = var23[var18];
                var23 = var25.bind(var3)(var23);
                var25 = var23.Text;
                var23 = {};
                var29 = 'text-md/semibold';
                var23.variant = var29;
                var29 = var21.connectedAccountNameText;
                var23.style = var29;
                var27 = var27.name;
                var23.children = var27;
                var25 = var26.bind(var3)(var25, var23);
                var23 = new Array(2);
                var23[0] = var25;
                var23[1] = var24;
                var15.children = var23;
                var16 = var22.bind(var3)(var16, var15);
                var15 = new Array(3);
                var15[0] = var16;
                var22 = var19 != var28;
                var16 = null;
                if (!var22) {
                    _fun78290_ip = 1892;
                    continue _fun78290
                }
            case 1779:
                var23 = _closure1_slot14;
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var18 = var29[var18];
                var18 = var25.bind(var3)(var18);
                var22 = var18.Text;
                var18 = {};
                var24 = 'heading-deprecated-12/medium';
                var18.variant = var24;
                var24 = var21.connectedAccountNameCreatedAtText;
                var18.style = var24;
                var24 = 26;
                var26 = var29[var24];
                var26 = var25.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.format;
                var24 = var29[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.t;
                var25 = var24["9rfonh"];
                var24 = {};
                var24.date = var28;
                var24 = var26.bind(var27)(var25, var24);
                var18.children = var24;
                var16 = var23.bind(var3)(var22, var18);
            case 1892:
                var15[1] = var16;
                var18 = var19 != var20;
                var16 = null;
                if (!var18) {
                    _fun78290_ip = 1951;
                    continue _fun78290
                }
            case 1905:
                var22 = var20.length;
                var18 = 0;
                var18 = var22 > var18;
                var16 = null;
                if (!var18) {
                    _fun78290_ip = 1951;
                    continue _fun78290
                }
            case 1921:
                var19 = _closure1_slot14;
                var18 = _closure1_slot5;
                var17 = {};
                var21 = var21.connectedAccountChildren;
                var17.style = var21;
                var17.children = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 1951:
                var15[2] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var10[1] = var12;
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var4 = function arg0() {
        _fun78295: for (var _fun78295_ip = 0;;) switch (_fun78295_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.applicationRoleConnection;
                var _closure2_slot0 = var16;
                var5 = var0.style;
                var0 = _closure1_slot17;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var _closure2_slot1 = var12;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.generateRoleConnectionMetadataItems;
                var10 = var0.bind(var1)(var16);
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var12.connectedAccountContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var4 = var16.platform_name;
                var7 = null;
                var4 = var7 != var4;
                var5 = null;
                if (!var4) {
                    _fun78295_ip = 176;
                    continue _fun78295
                }
            case 117:
                var8 = _closure1_slot14;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 31;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'eyebrow',
                    'color': 'interactive-text-default'
                };
                var11 = var16.platform_name;
                var4.children = var11;
                var5 = var8.bind(var3)(var6, var4);
            case 176:
                var4 = new Array(4);
                var4[0] = var5;
                var8 = _closure1_slot14;
                var6 = _closure1_slot5;
                var5 = {};
                var11 = var12.appConnectionNameContainer;
                var5.style = var11;
                var11 = var16.platform_username;
                var13 = var7 != var11;
                var11 = null;
                if (!var13) {
                    _fun78295_ip = 278;
                    continue _fun78295
                }
            case 219:
                var15 = _closure1_slot14;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 31;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var16 = var16.platform_username;
                var13.children = var16;
                var11 = var15.bind(var3)(var14, var13);
            case 278:
                var5.children = var11;
                var5 = var8.bind(var3)(var6, var5);
                var4[1] = var5;
                var6 = var7 != var10;
                var5 = null;
                if (!var6) {
                    _fun78295_ip = 347;
                    continue _fun78295
                }
            case 301:
                var8 = var10.length;
                var6 = 0;
                var6 = var8 > var6;
                var5 = null;
                if (!var6) {
                    _fun78295_ip = 347;
                    continue _fun78295
                }
            case 317:
                var8 = _closure1_slot14;
                var7 = _closure1_slot5;
                var6 = {};
                var11 = var12.connectedAccountChildren;
                var6.style = var11;
                var6.children = var10;
                var5 = var8.bind(var3)(var7, var6);
            case 347:
                var4[2] = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = {};
                var10 = 'row';
                var8.flexDirection = var10;
                var5.style = var8;
                var11 = _closure1_slot14;
                var10 = _closure1_slot5;
                var8 = {};
                var12 = var12.connectedAccountPoweredByContainer;
                var8.style = var12;
                var14 = _closure1_slot14;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 31;
                var12 = var20[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-xs/normal',
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
                    _fun78296: for (var _fun78296_ip = 0;;) switch (_fun78296_ip) {
                        case 0:
                            var3 = _closure1_slot15;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var4 = _closure2_slot1;
                            var4 = var4.connectedAccountPoweredByText;
                            var1.style = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.application;
                            var4 = var4.bot;
                            var5 = null;
                            var4 = var5 != var4;
                            if (!var4) {
                                _fun78296_ip = 181;
                                continue _fun78296
                            }
                        case 57:
                            var9 = _closure1_slot14;
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 32;
                            var4 = var12[var10];
                            var7 = undefined;
                            var6 = var6.bind(var7)(var4);
                            var4 = {};
                            var11 = _closure2_slot1;
                            var11 = var11.connectedAccountPoweredByAvatar;
                            var4.style = var11;
                            var14 = _closure1_slot7;
                            var11 = _closure2_slot0;
                            var11 = var11.application;
                            var16 = var11.bot;
                            var13 = var14.prototype;
                            var13 = Object.create(var13, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var17 = var13;
                            var11 = new var17[var14](var16, var15);
                            var11 = var11 instanceof Object ? var11 : var13;
                            var4.user = var11;
                            var11 = _closure1_slot0;
                            var10 = var12[var10];
                            var10 = var11.bind(var7)(var10);
                            var10 = var10.AvatarSizes;
                            var10 = var10.SIZE_16;
                            var4.size = var10;
                            var4.guildId = var7;
                            var5 = var9.bind(var7)(var6, var4);
                        case 181:
                            var4 = new Array(2);
                            var4[0] = var5;
                            var7 = _closure1_slot14;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 31;
                            var5 = var5[var0];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'variant': 'text-xs/normal',
                                'color': 'text-default'
                            };
                            var8 = _closure2_slot0;
                            var8 = var8.application;
                            var8 = var8.name;
                            var5.children = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var15.applicationHook = var19;
                var15 = var17.bind(var18)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var8.children = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = {};
                var13 = 1;
                var12.flexGrow = var13;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 33;
        var3 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var3 = var7.useThemeContext;
        var3 = var3.bind(var7)();
        var3 = var3.theme;
        var _closure2_slot1 = var3;
        var3 = 34;
        var3 = var6[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot6;
            var0 = var0.locale;
            return var0;
        };
        var1 = var4.bind(var5)(var3, var1);
        var _closure2_slot2 = var1;
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            var4 = _closure1_slot14;
            var1 = _closure1_slot3;
            var3 = var1.Fragment;
            var2 = {};
            var6 = _closure1_slot14;
            var5 = _closure1_slot19;
            var0 = {};
            var1 = arg0;
            var0.applicationRoleConnection = var1;
            var7 = _closure2_slot1;
            var0.theme = var7;
            var7 = _closure2_slot2;
            var0.locale = var7;
            var1 = _closure2_slot0;
            var0.style = var1;
            var1 = undefined;
            var0 = var6.bind(var1)(var5, var0);
            var2.children = var0;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot22 = var3;
    var1 = function arg0, arg1, arg2() {
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 33;
        var6 = var5[var2];
        var2 = undefined;
        var7 = var4.bind(var2)(var6);
        var6 = var7.useThemeContext;
        var6 = var6.bind(var7)();
        var6 = var6.theme;
        var _closure2_slot2 = var6;
        var6 = 34;
        var6 = var5[var6];
        var8 = var4.bind(var2)(var6);
        var7 = var8.useStateFromStores;
        var1 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot6;
            var0 = var0.locale;
            return var0;
        };
        var1 = var7.bind(var8)(var6, var1);
        var _closure2_slot3 = var1;
        var1 = 35;
        var1 = var5[var1];
        var4 = var4.bind(var2)(var1);
        var2 = var4.usePlatformAllowed;
        var1 = {};
        var5 = true;
        var1.forUserProfile = var5;
        var1 = var2.bind(var4)(var1);
        var _closure2_slot4 = var1;
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            _fun78302: for (var _fun78302_ip = 0;;) switch (_fun78302_ip) {
                case 0:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var0.type;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun78302_ip = 64;
                        continue _fun78302
                    }
                case 52:
                    var1 = _closure2_slot4;
                    var0 = var1.bind(var3)(var2);
                case 64:
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            var4 = _closure1_slot14;
            var1 = _closure1_slot3;
            var3 = var1.Fragment;
            var2 = {};
            var6 = _closure1_slot14;
            var5 = _closure1_slot18;
            var0 = {};
            var1 = arg0;
            var0.account = var1;
            var7 = _closure2_slot2;
            var0.theme = var7;
            var7 = _closure2_slot3;
            var0.locale = var7;
            var7 = _closure2_slot0;
            var0.userId = var7;
            var1 = _closure2_slot1;
            var0.style = var1;
            var1 = undefined;
            var0 = var6.bind(var1)(var5, var0);
            var2.children = var0;
            var0 = arg1;
            var0 = var4.bind(var1)(var3, var2, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot23 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var10 = var9[var0];
    var7 = arg3;
    var0 = undefined;
    var10 = var7.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var11 = var7.Pressable;
    var _closure1_slot4 = var11;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var17 = 2;
    var7 = var9[var17];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var14 = 4;
    var7 = var9[var14];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var16.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var11 = var7.AnalyticEvents;
    var _closure1_slot10 = var11;
    var11 = var7.PlatformTypes;
    var _closure1_slot11 = var11;
    var7 = var7.ThemeTypes;
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.MetadataFields;
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var15 = var7.FORM_ROW_VERTICAL_PADDING;
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var11 = var7.jsx;
    var _closure1_slot14 = var11;
    var11 = var7.jsxs;
    var _closure1_slot15 = var11;
    var7 = var7.Fragment;
    var _closure1_slot16 = var7;
    var18 = 10;
    var7 = var9[var18];
    var12 = var8.bind(var0)(var7);
    var11 = var12.createStyles;
    var7 = {};
    var13 = {};
    var13.paddingHorizontal = var18;
    var15 = var15 / var17;
    var13.paddingVertical = var15;
    var7.connectedAccountContainer = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var7.connectedAccount = var13;
    var13 = {
        'flex': 1,
        'marginLeft': 8
    };
    var7.connectedAccountNameContainer = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var7.connectedAccountName = var13;
    var13 = {};
    var15 = 11;
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_ACTIVE;
    var13.color = var17;
    var7.connectedAccountNameText = var13;
    var13 = {};
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_SUBTLE;
    var13.color = var17;
    var7.connectedAccountNameCreatedAtText = var13;
    var13 = {
        'height': 24,
        'width': 24
    };
    var18 = {};
    var17 = '135deg';
    var18.rotate = var17;
    var17 = new Array(1);
    var17[0] = var18;
    var13.transform = var17;
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_ACTIVE;
    var13.tintColor = var17;
    var7.connectedAccountOpenLink = var13;
    var13 = {
        'alignSelf': 'flex-start',
        'margin': 4,
        'height': 16,
        'width': 16
    };
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_DEFAULT;
    var13.tintColor = var17;
    var7.connectedAccountOpenHide = var13;
    var13 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var7.discordMemberCreatedAt = var13;
    var13 = {
        'width': 32,
        'height': 32,
        'backgroundColor': null,
        'borderRadius': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_BACKGROUND_HOVER;
    var13.backgroundColor = var17;
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var13.borderRadius = var17;
    var7.discordMemberCreatedAtIcon = var13;
    var13 = {};
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_SUBTLE;
    var13.color = var17;
    var7.discordMemberCreatedAtLabel = var13;
    var13 = {
        'fontSize': 12,
        'fontWeight': '500'
    };
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.MOBILE_TEXT_HEADING_PRIMARY;
    var13.color = var17;
    var7.discordMemberCreatedAtValue = var13;
    var13 = {
        'marginLeft': 4,
        'height': 16,
        'width': 16
    };
    var7.verifiedCheckContainer = var13;
    var13 = {
        'position': 'absolute',
        'left': 0,
        'top': 0
    };
    var7.verifiedCheck = var13;
    var13 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var7.connectedAccountChildren = var13;
    var13 = {};
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_ACTIVE;
    var13.color = var17;
    var7.metadataItem = var13;
    var13 = {};
    var17 = 40;
    var13.marginLeft = var17;
    var7.formDivider = var13;
    var13 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 4
    };
    var7.appConnectionNameContainer = var13;
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'borderWidth': 1,
        'borderColor': null,
        'paddingHorizontal': 8,
        'paddingVertical': 4,
        'marginTop': 12
    };
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var13.backgroundColor = var17;
    var17 = var9[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var13.borderRadius = var17;
    var15 = var9[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var13.borderColor = var15;
    var7.connectedAccountPoweredByContainer = var13;
    var13 = {};
    var13.marginRight = var14;
    var7.connectedAccountPoweredByAvatar = var13;
    var13 = {
        'marginTop': 4294967292,
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var7.connectedAccountPoweredByText = var13;
    var7 = var11.bind(var12)(var7);
    var _closure1_slot17 = var7;
    var7 = var10.memo;
    var7 = var7.bind(var10)(var5);
    var _closure1_slot18 = var7;
    var7 = var10.memo;
    var7 = var7.bind(var10)(var4);
    var _closure1_slot19 = var7;
    var7 = new Array(0);
    var _closure1_slot20 = var7;
    var7 = new Array(0);
    var _closure1_slot21 = var7;
    var7 = 37;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_profile/native/LegacyUserProfileConnections.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function arg0() {
        _fun78304: for (var _fun78304_ip = 0;;) switch (_fun78304_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.user;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 34;
                var3 = var6[var2];
                var4 = undefined;
                var9 = var5.bind(var4)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot9;
                    var1 = var2.getUserProfile;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var8.bind(var9)(var7, var3);
                var _closure2_slot1 = var3;
                var2 = var6[var2];
                var7 = var5.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot8;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var2);
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var5 = null;
                var7 = var5 == var3;
                var6 = undefined;
                if (var7) {
                    _fun78304_ip = 138;
                    continue _fun78304
                }
            case 132:
                var6 = var3.applicationRoleConnections;
            case 138:
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    _fun78307: for (var _fun78307_ip = 0;;) switch (_fun78307_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun78307_ip = 28;
                                continue _fun78307
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var0 = var2.applicationRoleConnections;
                        case 28:
                            if (!(var1 == var0)) {
                                _fun78307_ip = 39;
                                continue _fun78307
                            }
                        case 32:
                            var0 = _closure1_slot21;
                        case 39:
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var11 = var5 == var3;
                var9 = undefined;
                if (var11) {
                    _fun78304_ip = 183;
                    continue _fun78304
                }
            case 177:
                var9 = var3.connectedAccounts;
            case 183:
                var3 = new Array(1);
                var3[0] = var9;
                var1 = function() { // Environment: var1
                    _fun78308: for (var _fun78308_ip = 0;;) switch (_fun78308_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun78308_ip = 28;
                                continue _fun78308
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var0 = var2.connectedAccounts;
                        case 28:
                            if (!(var1 == var0)) {
                                _fun78308_ip = 39;
                                continue _fun78308
                            }
                        case 32:
                            var0 = _closure1_slot20;
                        case 39:
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var1, var3);
                var3 = _closure1_slot22;
                var11 = var3.bind(var4)(var6);
                var3 = _closure1_slot23;
                var0 = var0.id;
                var9 = var3.bind(var4)(var1, var0);
                var0 = null;
                if (var2) {
                    _fun78304_ip = 499;
                    continue _fun78304
                }
            case 236:
                var1 = var1.length;
                var7 = 0;
                var0 = null;
                if (!(var7 !== var1)) {
                    _fun78304_ip = 499;
                    continue _fun78304
                }
            case 252:
                var3 = _closure1_slot15;
                var2 = _closure1_slot16;
                var1 = {};
                var6 = var5 != var11;
                if (!var6) {
                    _fun78304_ip = 278;
                    continue _fun78304
                }
            case 269:
                var5 = var11.length;
                var6 = var5 > var7;
            case 278:
                if (!var6) {
                    _fun78304_ip = 379;
                    continue _fun78304
                }
            case 281:
                var8 = _closure1_slot14;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 36;
                var5 = var16[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var15 = _closure1_slot0;
                var12 = 26;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.PHjkRE;
                var12 = var13.bind(var14)(var12);
                var5.title = var12;
                var12 = true;
                var5.showContainer = var12;
                var5.children = var11;
                var6 = var8.bind(var4)(var7, var5);
            case 379:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 36;
                var6 = var14[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var13 = _closure1_slot0;
                var10 = 26;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["3fe7U5"];
                var10 = var11.bind(var12)(var10);
                var6.title = var10;
                var10 = true;
                var6.showContainer = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 499:
                return var0;
        }
    };
    var2.default = var6;
    var2.ConnectedUserAccount = var5;
    var2.ConnectedApplicationUserRoleAccount = var4;
    var2.useAppplicationRoleConnectionItems = var3;
    var2.useConnectedAccountItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1685, 1628, 3239, 4661, 660, 4524, 4877, 33, 1297, 671, 4523, 9941, 4396, 1417, 3208, 4087, 9944, 9945, 3153, 9946, 9947, 3281, 5296, 3149, 1234, 5898, 4303, 3146, 4905, 3943, 5457, 3161, 566, 4519, 9948, 2]);