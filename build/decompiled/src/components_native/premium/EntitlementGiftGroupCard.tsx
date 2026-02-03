// components_native/premium/EntitlementGiftGroupCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun83117: for (var _fun83117_ip = 0;;) switch (_fun83117_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun83117_ip = 76;
                continue _fun83117;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
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
    var19 = 1;
    var3 = var5[var19];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var16 = 2;
    var3 = var5[var16];
    var3 = var7.bind(var0)(var3);
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.View;
    var _closure1_slot9 = var8;
    var8 = var6.ActivityIndicator;
    var _closure1_slot10 = var8;
    var6 = var6.TouchableWithoutFeedback;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var11 = var7.bind(var0)(var6);
    var _closure1_slot12 = var11;
    var18 = 8;
    var6 = var5[var18];
    var13 = var7.bind(var0)(var6);
    var _closure1_slot13 = var13;
    var6 = 9;
    var6 = var5[var6];
    var10 = var7.bind(var0)(var6);
    var _closure1_slot14 = var10;
    var6 = 10;
    var6 = var5[var6];
    var9 = var7.bind(var0)(var6);
    var6 = 11;
    var6 = var5[var6];
    var12 = var7.bind(var0)(var6);
    var _closure1_slot15 = var12;
    var6 = 12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var20 = var6.Fonts;
    var6 = 13;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.SubscriptionIntervalTypes;
    var _closure1_slot16 = var8;
    var8 = var6.PremiumSubscriptionSKUs;
    var _closure1_slot17 = var8;
    var6 = var6.PremiumGiftStyles;
    var _closure1_slot18 = var6;
    var6 = 14;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.jsx;
    var _closure1_slot19 = var8;
    var6 = var6.jsxs;
    var _closure1_slot20 = var6;
    var6 = 15;
    var6 = var5[var6];
    var14 = var4.bind(var0)(var6);
    var8 = var14.createLegacyClassComponentStyles;
    var6 = {};
    var15 = {
        'overflow': 'hidden',
        'marginTop': 8
    };
    var6.giftGroupCard = var15;
    var15 = {
        'fontSize': 16,
        'lineHeight': 20
    };
    var17 = 16;
    var20 = var20.PRIMARY_SEMIBOLD;
    var15.fontFamily = var20;
    var20 = var5[var17];
    var20 = var7.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.MOBILE_TEXT_HEADING_PRIMARY;
    var15.color = var20;
    var6.title = var15;
    var15 = {};
    var20 = var5[var17];
    var20 = var7.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.ICON_SUBTLE;
    var15.color = var20;
    var6.arrow = var15;
    var15 = {
        'fontSize': 14,
        'lineHeight': 18
    };
    var6.subtitle = var15;
    var15 = {
        'marginLeft': 8,
        'flex': 1
    };
    var6.titleContainer = var15;
    var15 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'padding': 16
    };
    var20 = var5[var17];
    var20 = var7.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_SURFACE_HIGH;
    var15.backgroundColor = var20;
    var6.groupCardHeader = var15;
    var15 = {
        'height': 8,
        'width': 12,
        'marginRight': 8
    };
    var6.rowArrow = var15;
    var15 = {};
    var20 = var5[var17];
    var20 = var7.bind(var0)(var20);
    var20 = var20.radii;
    var20 = var20.xs;
    var15.borderRadius = var20;
    var6.giftIcon = var15;
    var15 = {
        'padding': 8,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var20 = var5[var17];
    var20 = var7.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_SURFACE_HIGH;
    var15.backgroundColor = var20;
    var6.generateGiftRow = var15;
    var15 = {};
    var15.flexShrink = var19;
    var6.generateGiftRowText = var15;
    var15 = {
        'marginLeft': 12,
        'paddingHorizontal': 16,
        'fontSize': 12
    };
    var6.generateGiftButton = var15;
    var15 = {};
    var15.marginTop = var18;
    var6.loading = var15;
    var15 = {
        'flexGrow': 1,
        'flexShrink': 0
    };
    var6.generateButtonContainer = var15;
    var15 = {};
    var17 = var5[var17];
    var17 = var7.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var15.backgroundColor = var17;
    var6.groupCardHeaderOpen = var15;
    var15 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var6.subtitleContainer = var15;
    var15 = {};
    var15.marginTop = var16;
    var6.socialLayerSubtitleContainer = var15;
    var6 = var8.bind(var14)(var6);
    var _closure1_slot21 = var6;
    var6 = var3.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun83121: for (var _fun83121_ip = 0;;) switch (_fun83121_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot22;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun83121_ip = 86;
                        continue _fun83121
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun83121_ip = 120;
                    continue _fun83121;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0._mountedAt = var2;
                    var2 = {};
                    var3 = false;
                    var2.isOpen = var3;
                    var0.state = var2;
                    var2 = function() { // Environment: var1
                        _fun83122: for (var _fun83122_ip = 0;;) switch (_fun83122_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.props;
                                var5 = var1.skuId;
                                var4 = var1.subscriptionPlanId;
                                var1 = var1.loadedAt;
                                var2 = var2.state;
                                var2 = var2.isOpen;
                                var3 = !var2;
                                var6 = null;
                                var1 = var6 != var1;
                                if (!var1) {
                                    _fun83122_ip = 67;
                                    continue _fun83122
                                }
                            case 53:
                                var2 = _closure3_slot0;
                                var2 = var2._mountedAt;
                                var1 = var6 != var2;
                            case 67:
                                if (var1) {
                                    _fun83122_ip = 73;
                                    continue _fun83122
                                }
                            case 70:
                                var1 = !var3;
                            case 73:
                                if (var1) {
                                    _fun83122_ip = 113;
                                    continue _fun83122
                                }
                            case 76:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var6.bind(var1)(var2);
                                var1 = var2.fetchUserGiftCodesForSKU;
                                var1 = var1.bind(var2)(var5, var4);
                            case 113:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var0.isOpen = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleToggleOpen = var2;
                    var1 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var5 = var0.skuId;
                        var4 = var0.subscriptionPlanId;
                        var3 = var0.giftStyle;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.createGiftCode;
                        var1 = var1.bind(var2)(var5, var4, var3);
                        return var0;
                    };
                    var0.handleGenerateGiftCode = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var1 = var0.bind(var1)();
            var0 = this;
            var0._mountedAt = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'renderGenerateGiftCodeRow';
        var4.key = var6;
        var6 = function() {
            var10 = this;
            var1 = _closure1_slot21;
            var0 = var10.context;
            var3 = undefined;
            var9 = var1.bind(var3)(var0);
            var2 = _closure1_slot20;
            var1 = _closure1_slot9;
            var0 = {};
            var4 = var9.generateGiftRow;
            var0.style = var4;
            var6 = _closure1_slot19;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 18;
            var4 = var13[var4];
            var4 = var17.bind(var3)(var4);
            var5 = var4.Text;
            var4 = {
                'variant': 'text-xs/medium',
                'color': 'text-subtle'
            };
            var8 = var9.generateGiftRowText;
            var4.style = var8;
            var14 = 19;
            var8 = var13[var14];
            var8 = var17.bind(var3)(var8);
            var12 = var8.intl;
            var11 = var12.string;
            var8 = var13[var14];
            var8 = var17.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.lELyPj;
            var8 = var11.bind(var12)(var8);
            var4.children = var8;
            var5 = var6.bind(var3)(var5, var4);
            var4 = new Array(2);
            var4[0] = var5;
            var5 = {};
            var8 = var9.generateButtonContainer;
            var5.style = var8;
            var12 = _closure1_slot1;
            var11 = 20;
            var7 = var13[var11];
            var8 = var12.bind(var3)(var7);
            var7 = {};
            var15 = var13[var14];
            var15 = var17.bind(var3)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var13[var14];
            var14 = var17.bind(var3)(var14);
            var14 = var14.t;
            var14 = var14["w4+/BA"];
            var14 = var15.bind(var16)(var14);
            var7.text = var14;
            var14 = var13[var11];
            var14 = var12.bind(var3)(var14);
            var14 = var14.Sizes;
            var14 = var14.XSMALL;
            var7.size = var14;
            var11 = var13[var11];
            var11 = var12.bind(var3)(var11);
            var11 = var11.Colors;
            var11 = var11.BRAND;
            var7.color = var11;
            var10 = var10.handleGenerateGiftCode;
            var7.onPress = var10;
            var9 = var9.generateGiftButton;
            var7.style = var9;
            var7 = var6.bind(var3)(var8, var7);
            var5.children = var7;
            var5 = var6.bind(var3)(var1, var5);
            var4[1] = var5;
            var0.children = var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'renderHeader';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun83126: for (var _fun83126_ip = 0;;) switch (_fun83126_ip) {
                case 0:
                    var17 = arg0;
                    var4 = this;
                    var1 = _closure1_slot21;
                    var0 = var4.context;
                    var3 = undefined;
                    var11 = var1.bind(var3)(var0);
                    var1 = var4.state;
                    var0 = var4.props;
                    var12 = var1.isOpen;
                    var25 = var0.entitlements;
                    var26 = var0.application;
                    var22 = var0.sku;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var0 = var2[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.isGameItemSKU;
                    var20 = var0.bind(var1)(var22);
                    if (!var20) {
                        _fun83126_ip = 98;
                        continue _fun83126
                    }
                case 92:
                    var0 = null;
                    var20 = var0 != var26;
                case 98:
                    var2 = _closure1_slot19;
                    var1 = _closure1_slot11;
                    var0 = {};
                    var5 = 'button';
                    var0.accessibilityRole = var5;
                    var4 = var4.handleToggleOpen;
                    var0.onPress = var4;
                    var6 = _closure1_slot20;
                    var5 = _closure1_slot9;
                    var4 = {};
                    var8 = var11.groupCardHeader;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = null;
                    var9 = null;
                    if (!var12) {
                        _fun83126_ip = 163;
                        continue _fun83126
                    }
                case 157:
                    var9 = var11.groupCardHeaderOpen;
                case 163:
                    var7[1] = var9;
                    var4.style = var7;
                    if (var20) {
                        _fun83126_ip = 270;
                        continue _fun83126
                    }
                case 174:
                    var7 = var8 != var17;
                    var8 = null;
                    if (!var7) {
                        _fun83126_ip = 268;
                        continue _fun83126
                    }
                case 183:
                    var10 = _closure1_slot19;
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var13 = 23;
                    var7 = var16[var13];
                    var9 = var15.bind(var3)(var7);
                    var7 = {
                        'resizeMode': 'contain',
                        'source': null,
                        'disableColor': true
                    };
                    var7.source = var17;
                    var13 = var16[var13];
                    var13 = var15.bind(var3)(var13);
                    var13 = var13.Sizes;
                    var13 = var13.LARGE;
                    var7.size = var13;
                    var13 = var11.giftIcon;
                    var7.style = var13;
                    var8 = var10.bind(var3)(var9, var7);
                case 268:
                    _fun83126_ip = 370;
                    continue _fun83126;
                case 270:
                    var10 = _closure1_slot19;
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var7 = 22;
                    var7 = var18[var7];
                    var9 = var17.bind(var3)(var7);
                    var7 = {};
                    var7.sku = var22;
                    var16 = _closure1_slot0;
                    var13 = 23;
                    var15 = var18[var13];
                    var16 = var16.bind(var3)(var15);
                    var15 = var16.getIconSize;
                    var13 = var18[var13];
                    var13 = var17.bind(var3)(var13);
                    var13 = var13.Sizes;
                    var13 = var13.LARGE;
                    var13 = var15.bind(var16)(var13);
                    var7.size = var13;
                    var13 = var11.giftIcon;
                    var7.containerStyle = var13;
                    var8 = var10.bind(var3)(var9, var7);
                case 370:
                    var7 = new Array(3);
                    var7[0] = var8;
                    var10 = _closure1_slot20;
                    var9 = _closure1_slot9;
                    var8 = {};
                    var13 = var11.titleContainer;
                    var8.style = var13;
                    var16 = _closure1_slot19;
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var21 = 18;
                    var13 = var13[var21];
                    var13 = var15.bind(var3)(var13);
                    var15 = var13.Text;
                    var13 = {
                        'variant': 'heading-sm/semibold',
                        'color': 'mobile-text-heading-primary',
                        'accessibilityRole': 'header'
                    };
                    var17 = arg1;
                    var13.children = var17;
                    var15 = var16.bind(var3)(var15, var13);
                    var13 = new Array(2);
                    var13[0] = var15;
                    var15 = {};
                    var17 = var20;
                    if (!var20) {
                        _fun83126_ip = 476;
                        continue _fun83126
                    }
                case 470:
                    var17 = var11.socialLayerSubtitleContainer;
                case 476:
                    var16 = new Array(2);
                    var16[0] = var17;
                    var17 = var11.subtitleContainer;
                    var16[1] = var17;
                    var15.style = var16;
                    var17 = var20;
                    if (!var17) {
                        _fun83126_ip = 576;
                        continue _fun83126
                    }
                case 504:
                    var19 = _closure1_slot19;
                    var24 = _closure1_slot1;
                    var27 = _closure1_slot2;
                    var23 = 24;
                    var16 = var27[var23];
                    var18 = var24.bind(var3)(var16);
                    var16 = {};
                    var16.game = var26;
                    var23 = var27[var23];
                    var23 = var24.bind(var3)(var23);
                    var23 = var23.Sizes;
                    var23 = var23.SIZE_24;
                    var16.size = var23;
                    var22 = var22.id;
                    var16.skuId = var22;
                    var17 = var19.bind(var3)(var18, var16);
                case 576:
                    var16 = new Array(2);
                    var16[0] = var17;
                    var19 = _closure1_slot19;
                    var18 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var17 = var17[var21];
                    var17 = var18.bind(var3)(var17);
                    var18 = var17.Text;
                    var17 = {
                        'variant': 'text-md/normal',
                        'color': 'text-subtle'
                    };
                    var21 = var11.subtitle;
                    var17.style = var21;
                    var22 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var21 = 19;
                    var23 = var27[var21];
                    var23 = var22.bind(var3)(var23);
                    var24 = var23.intl;
                    var23 = var24.format;
                    var21 = var27[var21];
                    var21 = var22.bind(var3)(var21);
                    var21 = var21.t;
                    if (var20) {
                        _fun83126_ip = 709;
                        continue _fun83126
                    }
                case 681:
                    var22 = var21.zMcvcA;
                    var20 = {};
                    var27 = var25.length;
                    var20.copies = var27;
                    var20 = var23.bind(var24)(var22, var20);
                    _fun83126_ip = 745;
                    continue _fun83126;
                case 709:
                    var22 = var21["6plpZi"];
                    var21 = {};
                    var26 = var26.name;
                    var21.applicationName = var26;
                    var25 = var25.length;
                    var21.copies = var25;
                    var20 = var23.bind(var24)(var22, var21);
                case 745:
                    var17.children = var20;
                    var17 = var19.bind(var3)(var18, var17);
                    var16[1] = var17;
                    var15.children = var16;
                    var15 = var10.bind(var3)(var9, var15);
                    var13[1] = var15;
                    var8.children = var13;
                    var8 = var10.bind(var3)(var9, var8);
                    var7[1] = var8;
                    var10 = _closure1_slot19;
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var15 = 23;
                    var8 = var16[var15];
                    var9 = var13.bind(var3)(var8);
                    var8 = {};
                    var17 = var11.rowArrow;
                    var8.style = var17;
                    var15 = var16[var15];
                    var15 = var13.bind(var3)(var15);
                    var15 = var15.Sizes;
                    var15 = var15.LARGE;
                    var8.size = var15;
                    var15 = _closure1_slot2;
                    if (var12) {
                        _fun83126_ip = 864;
                        continue _fun83126
                    }
                case 855:
                    var12 = 26;
                    var12 = var15[var12];
                    _fun83126_ip = 871;
                    continue _fun83126;
                case 864:
                    var14 = 25;
                    var12 = var15[var14];
                case 871:
                    var12 = var13.bind(var3)(var12);
                    var8.source = var12;
                    var11 = var11.arrow;
                    var11 = var11.color;
                    var8.color = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var7[2] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCardHeaderThumbnail';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun83127: for (var _fun83127_ip = 0;;) switch (_fun83127_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var1 = _closure1_slot18;
                    var1 = var1.STANDARD_BOX;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 492;
                        continue _fun83127
                    }
                case 26:
                    var1 = _closure1_slot18;
                    var1 = var1.CAKE;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 468;
                        continue _fun83127
                    }
                case 43:
                    var1 = _closure1_slot18;
                    var1 = var1.CHEST;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 444;
                        continue _fun83127
                    }
                case 60:
                    var1 = _closure1_slot18;
                    var1 = var1.COFFEE;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 420;
                        continue _fun83127
                    }
                case 77:
                    var1 = _closure1_slot18;
                    var1 = var1.SEASONAL_STANDARD_BOX;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 396;
                        continue _fun83127
                    }
                case 94:
                    var1 = _closure1_slot18;
                    var1 = var1.SEASONAL_CAKE;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 372;
                        continue _fun83127
                    }
                case 111:
                    var1 = _closure1_slot18;
                    var1 = var1.SEASONAL_CHEST;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 348;
                        continue _fun83127
                    }
                case 128:
                    var1 = _closure1_slot18;
                    var1 = var1.SEASONAL_COFFEE;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 324;
                        continue _fun83127
                    }
                case 145:
                    var1 = _closure1_slot18;
                    var1 = var1.NITROWEEN_STANDARD;
                    if (!(var1 !== var3)) {
                        _fun83127_ip = 294;
                        continue _fun83127
                    }
                case 162:
                    var1 = _closure1_slot17;
                    var1 = var1.TIER_0;
                    if (!(var1 !== var2)) {
                        _fun83127_ip = 270;
                        continue _fun83127
                    }
                case 176:
                    var1 = _closure1_slot17;
                    var1 = var1.TIER_1;
                    if (!(var1 !== var2)) {
                        _fun83127_ip = 246;
                        continue _fun83127
                    }
                case 190:
                    var1 = _closure1_slot17;
                    var1 = var1.TIER_2;
                    if (!(var1 !== var2)) {
                        _fun83127_ip = 222;
                        continue _fun83127
                    }
                case 204:
                    var1 = _closure1_slot17;
                    var1 = var1.LEGACY;
                    if (!(var1 !== var2)) {
                        _fun83127_ip = 222;
                        continue _fun83127
                    }
                case 218:
                    var1 = null;
                    return var1;
                case 222:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 38;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 246:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 270:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 294:
                    var1 = {};
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 35;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.uri = var2;
                    return var1;
                case 324:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 34;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 348:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 372:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 396:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 420:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 30;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 444:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 468:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                case 492:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 27;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderCardHeader';
        var4.key = var6;
        var6 = function arg0() {
            _fun83128: for (var _fun83128_ip = 0;;) switch (_fun83128_ip) {
                case 0:
                    var8 = arg0;
                    var4 = this;
                    var0 = var4.props;
                    var11 = var0.application;
                    var7 = var0.subscriptionPlan;
                    var1 = var0.giftStyle;
                    var5 = var8.id;
                    var9 = var8.name;
                    var0 = var4.getCardHeaderThumbnail;
                    var3 = var0.bind(var4)(var5, var1);
                    var0 = global;
                    var6 = var0.Object;
                    var2 = var6.values;
                    var0 = _closure1_slot17;
                    var2 = var2.bind(var6)(var0);
                    var0 = var2.includes;
                    var2 = var0.bind(var2)(var5);
                    var0 = null;
                    if (var2) {
                        _fun83128_ip = 139;
                        continue _fun83128
                    }
                case 92:
                    var5 = var0 == var11;
                    var2 = null;
                    if (var5) {
                        _fun83128_ip = 137;
                        continue _fun83128
                    }
                case 101:
                    var6 = var4.renderHeader;
                    var10 = var11.getIconSource;
                    var5 = 32;
                    var10 = var10.bind(var11)(var5);
                    var5 = var3;
                    if (!(var0 != var10)) {
                        _fun83128_ip = 131;
                        continue _fun83128
                    }
                case 128:
                    var5 = var10;
                case 131:
                    var2 = var6.bind(var4)(var5, var9);
                case 137:
                    return var2;
                case 139:
                    if (!(var0 != var7)) {
                        _fun83128_ip = 303;
                        continue _fun83128
                    }
                case 146:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var11 = 19;
                    var2 = var2[var11];
                    var10 = undefined;
                    var2 = var5.bind(var10)(var2);
                    var6 = var2.intl;
                    var5 = var6.formatToPlainString;
                    var9 = var7.interval;
                    var2 = _closure1_slot16;
                    var2 = var2.MONTH;
                    if (!(var9 !== var2)) {
                        _fun83128_ip = 230;
                        continue _fun83128
                    }
                case 198:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var11];
                    var2 = var9.bind(var10)(var2);
                    var2 = var2.t;
                    var2 = var2.Vd3Iu8;
                    _fun83128_ip = 260;
                    continue _fun83128;
                case 230:
                    var9 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var11];
                    var1 = var9.bind(var10)(var1);
                    var1 = var1.t;
                    var2 = var1.rCJvqo;
                case 260:
                    var1 = {};
                    var8 = var8.name;
                    var1.skuName = var8;
                    var7 = var7.intervalCount;
                    var1.intervalCount = var7;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = var4.renderHeader;
                    var1 = var1.bind(var4)(var3, var2);
                    return var1;
                case 303:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun83129: for (var _fun83129_ip = 0;;) switch (_fun83129_ip) {
                case 0:
                    var18 = this;
                    var1 = _closure1_slot21;
                    var0 = var18.context;
                    var3 = undefined;
                    var13 = var1.bind(var3)(var0);
                    var0 = var18.props;
                    var14 = var0.entitlements;
                    var17 = var0.giftCodes;
                    var5 = var0.sku;
                    var _closure3_slot0 = var5;
                    var9 = var0.isFetching;
                    var0 = var18.state;
                    var6 = var0.isOpen;
                    var2 = _closure1_slot20;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var4 = var13.giftGroupCard;
                    var0.style = var4;
                    var4 = var18.renderCardHeader;
                    var5 = var4.bind(var18)(var5);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = null;
                    if (!var6) {
                        _fun83129_ip = 254;
                        continue _fun83129
                    }
                case 117:
                    var8 = _closure1_slot19;
                    var7 = _closure1_slot9;
                    var6 = {};
                    if (var9) {
                        _fun83129_ip = 218;
                        continue _fun83129
                    }
                case 130:
                    var12 = _closure1_slot20;
                    var9 = _closure1_slot8;
                    var11 = var9.Fragment;
                    var9 = {};
                    var19 = var17.length;
                    var14 = var14.length;
                    var14 = var19 < var14;
                    var16 = null;
                    if (!var14) {
                        _fun83129_ip = 177;
                        continue _fun83129
                    }
                case 165:
                    var14 = var18.renderGenerateGiftCodeRow;
                    var16 = var14.bind(var18)();
                case 177:
                    var14 = new Array(2);
                    var14[0] = var16;
                    var16 = var17.map;
                    var15 = function(arg0, arg1) { // Environment: var15
                        var0 = arg0;
                        var4 = _closure1_slot19;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 39;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1.giftCode = var0;
                        var5 = _closure3_slot0;
                        var1.sku = var5;
                        var6 = 0;
                        var5 = arg1;
                        var5 = var6 === var5;
                        var1.isFirst = var5;
                        var0 = var0.code;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var15 = var16.bind(var17)(var15);
                    var14[1] = var15;
                    var9.children = var14;
                    var9 = var12.bind(var3)(var11, var9);
                    _fun83129_ip = 244;
                    continue _fun83129;
                case 218:
                    var12 = _closure1_slot19;
                    var11 = _closure1_slot10;
                    var10 = {};
                    var13 = var13.loading;
                    var10.style = var13;
                    var9 = var12.bind(var3)(var11, var10);
                case 244:
                    var6.children = var9;
                    var5 = var8.bind(var3)(var7, var6);
                case 254:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var6 = 40;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ThemeContext;
    var3.contextType = var6;
    var6 = 41;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.connectStores;
    var6 = new Array(5);
    var6[0] = var13;
    var6[1] = var12;
    var6[2] = var11;
    var6[3] = var10;
    var6[4] = var9;
    var1 = function(arg0) { // Environment: var1
        _fun83131: for (var _fun83131_ip = 0;;) switch (_fun83131_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.skuId;
                var5 = var0.subscriptionPlanId;
                var0 = var0.giftStyle;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot15;
                var0 = var3.get;
                var4 = var0.bind(var3)(var6);
                var3 = null;
                if (!(var3 != var4)) {
                    _fun83131_ip = 247;
                    continue _fun83131
                }
            case 53:
                var0 = {};
                var0.sku = var4;
                var8 = _closure1_slot14;
                var7 = var8.getUserGiftCodesFetchingForSKUAndPlan;
                var7 = var7.bind(var8)(var6, var5);
                var0.isFetching = var7;
                var7 = var8.getUserGiftCodesLoadedAtForSKUAndPlan;
                var7 = var7.bind(var8)(var6, var5);
                var0.loadedAt = var7;
                var8 = _closure1_slot12;
                var7 = var8.getApplication;
                var4 = var4.applicationId;
                var4 = var7.bind(var8)(var4);
                var0.application = var4;
                var4 = var3 != var5;
                var3 = null;
                if (!var4) {
                    _fun83131_ip = 168;
                    continue _fun83131
                }
            case 135:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 42;
                var7 = var7[var4];
                var4 = undefined;
                var7 = var8.bind(var4)(var7);
                var4 = var7.getOrFetchSubscriptionPlan;
                var3 = var4.bind(var7)(var5);
            case 168:
                var0.subscriptionPlan = var3;
                var4 = _closure1_slot14;
                var3 = var4.getForGifterSKUAndPlan;
                var7 = _closure1_slot13;
                var2 = var7.getId;
                var2 = var2.bind(var7)();
                var4 = var3.bind(var4)(var2, var6, var5);
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.isClaimed;
                    var0 = !var0;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.giftStyle;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.giftCodes = var1;
                return var0;
            case 247:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = 'SKU was unavailable while rendering gift.';
                var12 = var1;
                var0 = new var12[var2](var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = var7.bind(var8)(var6, var1);
    var1 = var1.bind(var0)(var3);
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/EntitlementGiftGroupCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 3454, 1216, 6858, 3116, 3499, 660, 1623, 33, 1297, 671, 6862, 3941, 1234, 4873, 3494, 6889, 4086, 6892, 10679, 10680, 10681, 10682, 10683, 10684, 10685, 10686, 10687, 10688, 9527, 10689, 10690, 10691, 10692, 3159, 566, 6877, 2]);