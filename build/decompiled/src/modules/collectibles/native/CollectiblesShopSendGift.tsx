// modules/collectibles/native/CollectiblesShopSendGift.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun87693: for (var _fun87693_ip = 0;;) switch (_fun87693_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87693_ip = 84;
                            continue _fun87693
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var3.bind(var2)(var1);
                        var4 = var5.validateCollectiblesRecipient;
                        var3 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var3, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun87693_ip = 81;
                            continue _fun87693
                        }
                    case 60:
                        var3 = arg2;
                        var3 = var3.bind(var2)(var1);
                        var4 = arg3;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
                    case 81:
                        return var1;
                    case 84:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ScrollView;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot8 = var7;
    var3 = var3.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'paddingTop': null,
        'alignItems': 'stretch'
    };
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingTop = var12;
    var3.container = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.paddingBottom = var12;
    var3.scrollView = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginBottom = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingHorizontal = var10;
    var10 = 'capitalize';
    var9.textTransform = var10;
    var3.sectionHeader = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun87694: for (var _fun87694_ip = 0;;) switch (_fun87694_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.product;
                var _closure2_slot0 = var14;
                var13 = var1.recipientUser;
                var _closure2_slot1 = var13;
                var29 = var1.setRecipientUser;
                var1 = _closure1_slot12;
                var3 = undefined;
                var26 = var1.bind(var3)();
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 9;
                var1 = var15[var1];
                var2 = var18.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot2 = var1;
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var24 = true;
                var2 = var2.bind(var4)(var24);
                var19 = _closure1_slot3;
                var17 = 2;
                var2 = var19.bind(var3)(var2, var17);
                var9 = 0;
                var10 = var2[var9];
                var5 = 1;
                var2 = var2[var5];
                var _closure2_slot3 = var2;
                var2 = var4.useState;
                var23 = false;
                var2 = var2.bind(var4)(var23);
                var2 = var19.bind(var3)(var2, var17);
                var11 = var2[var9];
                var2 = var2[var5];
                var _closure2_slot4 = var2;
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = var3.navigate;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.ShopGiftScreens;
                    var1 = var1.RECIPENT_SELECT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var30 = var6.bind(var4)(var1, var2);
                var6 = _closure1_slot1;
                var1 = 11;
                var1 = var15[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var12 = var1.analyticsLocations;
                var _closure2_slot5 = var12;
                var1 = 12;
                var1 = var15[var1];
                var2 = var6.bind(var3)(var1);
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.v4;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var _closure2_slot6 = var1;
                var8 = var4.useMemo;
                var2 = new Array(3);
                var2[0] = var12;
                var12 = var14.skuId;
                var2[1] = var12;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    var0 = {
                        'is_gift': true,
                        'location_stack': null,
                        'payment_type': 'sku'
                    };
                    var2 = _closure2_slot5;
                    var0.location_stack = var2;
                    var2 = _closure2_slot0;
                    var2 = var2.skuId;
                    var0.sku_id = var2;
                    var2 = _closure1_slot9;
                    var0.application_id = var2;
                    var1 = _closure2_slot6;
                    var0.load_id = var1;
                    return var0;
                };
                var8 = var8.bind(var4)(var1, var2);
                var _closure2_slot7 = var8;
                var12 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var13;
                var1 = var14.skuId;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun87698: for (var _fun87698_ip = 0;;) switch (_fun87698_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var0 = undefined;
                            var2 = true;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun87698_ip = 76;
                                continue _fun87698
                            }
                        case 26:
                            var5 = _closure2_slot4;
                            var2 = var5.bind(var0)(var2);
                            var2 = _closure2_slot1;
                            var9 = var2.id;
                            var2 = _closure2_slot0;
                            var8 = var2.skuId;
                            var7 = _closure2_slot3;
                            var1 = function() {
                                var0 = undefined;
                                var3 = _closure1_slot13;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var10 = undefined;
                            var6 = var5;
                            var1 = var10[var1](var9, var8, var7, var6, var5);
                        case 76:
                            return var0;
                    }
                };
                var1 = var12.bind(var4)(var1, var2);
                var12 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var5 = var4[var2];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var5);
                    var7 = var8.track;
                    var1 = _closure1_slot8;
                    var6 = var1.PAYMENT_FLOW_STARTED;
                    var5 = _closure2_slot7;
                    var6 = var7.bind(var8)(var6, var5);
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var2 = var1.PAYMENT_FLOW_LOADED;
                    var1 = {};
                    var10 = var1;
                    var9 = var5;
                    var5 = copyDataProperties(var10, var9);
                    var6 = 'gift_customization';
                    var5 = 'initial_step';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var12.bind(var4)(var1, var2);
                var1 = 15;
                var1 = var15[var1];
                var2 = var18.bind(var3)(var1);
                var1 = var2.useGiftStyles;
                var1 = var1.bind(var2)();
                var2 = var4.useState;
                var1 = var1[var9];
                var1 = var2.bind(var4)(var1);
                var1 = var19.bind(var3)(var1, var17);
                var27 = var1[var9];
                var _closure2_slot8 = var27;
                var25 = var1[var5];
                var1 = var4.useRef;
                var12 = null;
                var16 = var1.bind(var4)(var12);
                var _closure2_slot9 = var16;
                var1 = var4.useState;
                var1 = var1.bind(var4)(var9);
                var2 = var19.bind(var3)(var1, var17);
                var1 = var2[var9];
                var _closure2_slot10 = var1;
                var21 = var2[var5];
                var2 = var4.useState;
                var2 = var2.bind(var4)(var3);
                var2 = var19.bind(var3)(var2, var17);
                var20 = var2[var9];
                var _closure2_slot11 = var20;
                var19 = var2[var5];
                var5 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        _fun87702: for (var _fun87702_ip = 0;;) switch (_fun87702_ip) {
                            case 0:
                                var0 = _closure2_slot9;
                                var3 = var0.current;
                                var0 = null;
                                var1 = var0 == var3;
                                var0 = undefined;
                                if (var1) {
                                    _fun87702_ip = 51;
                                    continue _fun87702
                                }
                            case 23:
                                var2 = var3.scrollTo;
                                var1 = {};
                                var4 = _closure2_slot10;
                                var1.y = var4;
                                var4 = true;
                                var1.animated = var4;
                                var0 = var2.bind(var3)(var1);
                            case 51:
                                return var0;
                        }
                    };
                    var1 = 100;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var22 = var5.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var27;
                var1[1] = var13;
                var1[2] = var20;
                var0 = function() { // Environment: var0
                    _fun87703: for (var _fun87703_ip = 0;;) switch (_fun87703_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot8;
                            var0.gift_style = var2;
                            var3 = _closure2_slot1;
                            var2 = null;
                            var3 = var2 == var3;
                            var2 = undefined;
                            if (var3) {
                                _fun87703_ip = 38;
                                continue _fun87703
                            }
                        case 29:
                            var3 = _closure2_slot1;
                            var2 = var3.id;
                        case 38:
                            var0.recipient_id = var2;
                            var1 = _closure2_slot11;
                            var0.custom_message = var1;
                            return var0;
                    }
                };
                var9 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var26.container;
                var0.style = var4;
                var5 = _closure1_slot6;
                var4 = {};
                var4.ref = var16;
                var16 = var26.scrollView;
                var4.contentContainerStyle = var16;
                var4.showsVerticalScrollIndicator = var23;
                var7 = _closure1_slot10;
                var16 = 16;
                var16 = var15[var16];
                var16 = var18.bind(var3)(var16);
                var17 = var16.GiftBackgroundSelect;
                var16 = {};
                var16.giftStyle = var27;
                var16.setGiftStyle = var25;
                var16.withConsistentHeight = var23;
                var17 = var7.bind(var3)(var17, var16);
                var16 = new Array(6);
                var16[0] = var17;
                var17 = 17;
                var23 = var15[var17];
                var23 = var18.bind(var3)(var23);
                var28 = var23.Text;
                var23 = {};
                var27 = 'text-sm/semibold';
                var23.variant = var27;
                var25 = var26.sectionHeader;
                var23.style = var25;
                var25 = 18;
                var31 = var15[var25];
                var31 = var18.bind(var3)(var31);
                var33 = var31.intl;
                var32 = var33.string;
                var31 = var15[var25];
                var31 = var18.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.xFn72s;
                var31 = var32.bind(var33)(var31);
                var23.children = var31;
                var23 = var7.bind(var3)(var28, var23);
                var16[1] = var23;
                var23 = 19;
                var23 = var15[var23];
                var28 = var6.bind(var3)(var23);
                var23 = {};
                var23.selectedUser = var13;
                var23.onPress = var30;
                var23.setSelectedUser = var29;
                var23 = var7.bind(var3)(var28, var23);
                var16[2] = var23;
                var17 = var15[var17];
                var17 = var18.bind(var3)(var17);
                var23 = var17.Text;
                var17 = {};
                var17.variant = var27;
                var26 = var26.sectionHeader;
                var17.style = var26;
                var26 = var15[var25];
                var26 = var18.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var15[var25];
                var25 = var18.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.PpoJzt;
                var25 = var26.bind(var27)(var25);
                var17.children = var25;
                var17 = var7.bind(var3)(var23, var17);
                var16[3] = var17;
                var17 = 20;
                var17 = var15[var17];
                var23 = var6.bind(var3)(var17);
                var17 = {};
                var17.product = var14;
                var17.recipientUser = var13;
                var17.isValidRecipient = var10;
                var17.isGift = var24;
                var17 = var7.bind(var3)(var23, var17);
                var16[4] = var17;
                var17 = 21;
                var17 = var15[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.GiftCustomMessage;
                var17 = {};
                var17.onFocusMessage = var22;
                var17.setMessagePosition = var21;
                var17.customGiftMessage = var20;
                var17.setCustomGiftMessage = var19;
                var17 = var7.bind(var3)(var18, var17);
                var16[5] = var17;
                var4.children = var16;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 22;
                var5 = var15[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.product = var14;
                var10 = !var10;
                if (var10) {
                    _fun87694_ip = 997;
                    continue _fun87694
                }
            case 993:
                var10 = var12 == var13;
            case 997:
                if (var10) {
                    _fun87694_ip = 1003;
                    continue _fun87694
                }
            case 1000:
                var10 = var11;
            case 1003:
                var5.isPurchaseDisabled = var10;
                var5.giftOptions = var9;
                var5.baseAnalyticsFields = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopSendGift.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 660, 33, 1297, 671, 4597, 1469, 11356, 5730, 4930, 491, 795, 9444, 9522, 3941, 1234, 11358, 11278, 9554, 11359, 2]);