// components_native/premium/PremiumUpsellAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun61550: for (var _fun61550_ip = 0;;) switch (_fun61550_ip) {
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
            case 70: // try_end0
                _fun61550_ip = 74;
                continue _fun61550;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot34 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var6[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var4 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot9 = var3;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot10 = var7;
    var4 = var4.Image;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var4 = var4.UpsellTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.getIcons;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot17 = var7;
    var4 = var4.PremiumTypes;
    var _closure1_slot18 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot19 = var7;
    var7 = var4.jsxs;
    var _closure1_slot20 = var7;
    var4 = var4.Fragment;
    var _closure1_slot21 = var4;
    var4 = 14;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createLegacyClassComponentStyles;
    var4 = {};
    var9 = {};
    var13 = 'center';
    var9.alignItems = var13;
    var4.carousel = var9;
    var9 = {};
    var9.alignItems = var13;
    var4.upsellContainer = var9;
    var9 = {
        'alignItems': 'center',
        'paddingHorizontal': 8
    };
    var4.premiumUpsellContainer = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'marginVertical': 4294967288
    };
    var4.nitroWheel = var9;
    var9 = {
        'height': 80,
        'width': 120
    };
    var4.upsellImage = var9;
    var9 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var4.upsellTitle = var9;
    var9 = {};
    var10 = 15;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.marginVertical = var14;
    var9.textAlign = var13;
    var4.premiumUpsellTitle = var9;
    var9 = {};
    var9.textAlign = var13;
    var4.upsellDescription = var9;
    var9 = {};
    var9.textAlign = var13;
    var4.premiumUpsellDescription = var9;
    var9 = {};
    var13 = 16;
    var9.marginTop = var13;
    var4.pageIndicatorStyle = var9;
    var9 = {
        'height': 154,
        'width': 226
    };
    var4.largerUpsellImage = var9;
    var9 = {
        'width': 240,
        'height': 194
    };
    var4.customProfileUpsellImage = var9;
    var9 = {};
    var13 = 170;
    var9.height = var13;
    var4.loadingIndicator = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9.borderColor = var13;
    var9.borderWidth = var12;
    var4.customAppIconUpsellLightImage = var9;
    var9 = {
        'height': 80,
        'width': 80
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9.borderRadius = var10;
    var4.customAppIconsUpsellImage = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun61554: for (var _fun61554_ip = 0;;) switch (_fun61554_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot34;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun61554_ip = 69;
                        continue _fun61554
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun61554_ip = 105;
                    continue _fun61554;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot5;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun61555: for (var _fun61555_ip = 0;;) switch (_fun61555_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot22;
                    var1 = var0.context;
                    var3 = undefined;
                    var9 = var2.bind(var3)(var1);
                    var1 = var0.props;
                    var0 = var1.upsellItem;
                    var10 = var1.alertWidth;
                    var14 = var1.isInitial;
                    var7 = var0.image;
                    var13 = var0.activeTitle;
                    var12 = var0.passiveTitle;
                    var8 = var0.description;
                    var2 = _closure1_slot20;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var6 = var9.upsellContainer;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var6 = {};
                    var6.width = var10;
                    var4[1] = var6;
                    var0.style = var4;
                    var11 = _closure1_slot19;
                    var6 = _closure1_slot11;
                    var4 = {};
                    var10 = var9.upsellImage;
                    var4.style = var10;
                    var4.source = var7;
                    var7 = 'contain';
                    var4.resizeMode = var7;
                    var6 = var11.bind(var3)(var6, var4);
                    var4 = new Array(3);
                    var4[0] = var6;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var10 = 16;
                    var6 = var6[var10];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.Text;
                    var6 = {
                        'style': null,
                        'variant': 'text-md/medium',
                        'color': 'mobile-text-heading-primary'
                    };
                    var15 = var9.upsellTitle;
                    var6.style = var15;
                    if (!var14) {
                        _fun61555_ip = 209;
                        continue _fun61555
                    }
                case 206:
                    var12 = var13;
                case 209:
                    var6.children = var12;
                    var6 = var11.bind(var3)(var7, var6);
                    var4[1] = var6;
                    var7 = _closure1_slot19;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var9 = var9.upsellDescription;
                    var5.style = var9;
                    var9 = 'text-sm/medium';
                    var5.variant = var9;
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var3.bind(var0)(var4);
    var _closure1_slot23 = var4;
    var3 = 17;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var4.contextType = var3;
    var3 = {};
    var7 = false;
    var3.isInitial = var7;
    var4.defaultProps = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = var1.upsellItem;
        var15 = var1.alertWidth;
        var14 = var1.imageStyle;
        var7 = var1.style;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 14;
        var1 = var10[var1];
        var3 = undefined;
        var5 = var6.bind(var3)(var1);
        var2 = var5.useLegacyClassComponentStyles;
        var1 = _closure1_slot22;
        var9 = var2.bind(var5)(var1);
        var11 = var0.image;
        var13 = var0.title;
        var8 = var0.description;
        var2 = _closure1_slot20;
        var1 = _closure1_slot10;
        var0 = {};
        var12 = var9.premiumUpsellContainer;
        var5 = new Array(3);
        var5[0] = var12;
        var12 = {};
        var12.width = var15;
        var5[1] = var12;
        var5[2] = var7;
        var0.style = var5;
        var7 = _closure1_slot19;
        var5 = _closure1_slot11;
        var4 = {};
        var15 = var9.upsellImage;
        var12 = new Array(2);
        var12[0] = var15;
        var12[1] = var14;
        var4.style = var12;
        var4.source = var11;
        var11 = 'contain';
        var4.resizeMode = var11;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var5 = 16;
        var11 = var10[var5];
        var11 = var6.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary',
            'accessibilityRole': 'header'
        };
        var14 = var9.premiumUpsellTitle;
        var11.style = var14;
        var11.children = var13;
        var11 = var7.bind(var3)(var12, var11);
        var4[1] = var11;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var9 = var9.premiumUpsellDescription;
        var5.style = var9;
        var9 = 'text-md/medium';
        var5.variant = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var3;
    var4 = function arg0() {
        _fun61557: for (var _fun61557_ip = 0;;) switch (_fun61557_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.alertWidth;
                var0 = var0.useTier0Description;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.usePremiumTrialOffer;
                var2 = var1.bind(var2)();
                var5 = null;
                var6 = var5 == var2;
                var1 = undefined;
                if (var6) {
                    _fun61557_ip = 82;
                    continue _fun61557
                }
            case 61:
                var2 = var2.subscription_trial;
                var6 = var5 == var2;
                var1 = undefined;
                if (var6) {
                    _fun61557_ip = 82;
                    continue _fun61557
                }
            case 76:
                var1 = var2.sku_id;
            case 82:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var10 = 19;
                var8 = var2[var10];
                var8 = var6.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var2 = var2[var10];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var6 = var2["KEn+LY"];
                var2 = {};
                var2 = var8.bind(var9)(var6, var2);
                if (!(var5 == var1)) {
                    _fun61557_ip = 253;
                    continue _fun61557
                }
            case 146:
                var5 = var2;
                if (!var0) {
                    _fun61557_ip = 475;
                    continue _fun61557
                }
            case 155:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = var13[var10];
                var0 = var12.bind(var3)(var0);
                var9 = var0.intl;
                var8 = var9.format;
                var0 = var13[var10];
                var0 = var12.bind(var3)(var0);
                var0 = var0.t;
                var6 = var0.kWBwlJ;
                var0 = {};
                var11 = 20;
                var11 = var13[var11];
                var13 = var12.bind(var3)(var11);
                var12 = var13.getPremiumTypeDisplayName;
                var11 = _closure1_slot18;
                var11 = var11.TIER_0;
                var11 = var12.bind(var13)(var11);
                var0.planName = var11;
                var5 = var8.bind(var9)(var6, var0);
                _fun61557_ip = 475;
                continue _fun61557;
            case 253:
                var0 = _closure1_slot17;
                var0 = var0.TIER_0;
                if (!(var0 !== var1)) {
                    _fun61557_ip = 382;
                    continue _fun61557
                }
            case 267:
                var0 = _closure1_slot17;
                var0 = var0.TIER_2;
                var5 = var2;
                if (!(var0 === var1)) {
                    _fun61557_ip = 475;
                    continue _fun61557
                }
            case 287:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = var11[var10];
                var0 = var9.bind(var3)(var0);
                var6 = var0.intl;
                var2 = var6.format;
                var0 = var11[var10];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["1P7x8p"];
                var0 = {};
                var8 = 20;
                var8 = var11[var8];
                var11 = var9.bind(var3)(var8);
                var9 = var11.getPremiumTypeDisplayName;
                var8 = _closure1_slot18;
                var8 = var8.TIER_2;
                var8 = var9.bind(var11)(var8);
                var0.planName = var8;
                var5 = var2.bind(var6)(var1, var0);
                _fun61557_ip = 475;
                continue _fun61557;
            case 382:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = var11[var10];
                var0 = var9.bind(var3)(var0);
                var6 = var0.intl;
                var2 = var6.format;
                var0 = var11[var10];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["1P7x8p"];
                var0 = {};
                var8 = 20;
                var8 = var11[var8];
                var11 = var9.bind(var3)(var8);
                var9 = var11.getPremiumTypeDisplayName;
                var8 = _closure1_slot18;
                var8 = var8.TIER_0;
                var8 = var9.bind(var11)(var8);
                var0.planName = var8;
                var5 = var2.bind(var6)(var1, var0);
            case 475:
                var2 = _closure1_slot19;
                var1 = _closure1_slot24;
                var0 = {};
                var0.alertWidth = var4;
                var4 = {};
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var8 = 21;
                var8 = var6[var8];
                var8 = var9.bind(var3)(var8);
                var4.image = var8;
                var9 = _closure1_slot0;
                var7 = var6[var10];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var10];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.UNtcBV;
                var6 = var7.bind(var8)(var6);
                var4.title = var6;
                var4.description = var5;
                var0.upsellItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var4;
    var4 = function arg0() {
        _fun61558: for (var _fun61558_ip = 0;;) switch (_fun61558_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.alertWidth;
                var5 = var1.useTier0Description;
                var3 = _closure1_slot19;
                var2 = _closure1_slot24;
                var1 = {};
                var1.alertWidth = var0;
                var4 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 22;
                var6 = var7[var0];
                var0 = undefined;
                var6 = var8.bind(var0)(var6);
                var4.image = var6;
                var11 = _closure1_slot0;
                var6 = 19;
                var8 = var7[var6];
                var8 = var11.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var6];
                var7 = var11.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.F6rmyq;
                var7 = var8.bind(var9)(var7);
                var4.title = var7;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = var13[var6];
                var7 = var12.bind(var0)(var7);
                var9 = var7.intl;
                var8 = var9.format;
                var6 = var13[var6];
                var6 = var12.bind(var0)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun61558_ip = 177;
                    continue _fun61558
                }
            case 161:
                var7 = var6.JxTzzb;
                var5 = {};
                var5 = var8.bind(var9)(var7, var5);
                _fun61558_ip = 231;
                continue _fun61558;
            case 177:
                var7 = var6["1a36ee"];
                var6 = {};
                var11 = 20;
                var11 = var13[var11];
                var12 = var12.bind(var0)(var11);
                var11 = var12.getPremiumTypeDisplayName;
                var10 = _closure1_slot18;
                var10 = var10.TIER_0;
                var10 = var11.bind(var12)(var10);
                var6.planName = var10;
                var5 = var8.bind(var9)(var7, var6);
            case 231:
                var4.description = var5;
                var1.upsellItem = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot26 = var4;
    var4 = function arg0() {
        _fun61559: for (var _fun61559_ip = 0;;) switch (_fun61559_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.alertWidth;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 14;
                var0 = var9[var0];
                var3 = undefined;
                var2 = var7.bind(var3)(var0);
                var1 = var2.useLegacyClassComponentStyles;
                var0 = _closure1_slot22;
                var4 = var1.bind(var2)(var0);
                var1 = _closure1_slot1;
                var0 = 23;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var2 = _closure1_slot19;
                var1 = _closure1_slot24;
                var0 = {};
                var0.alertWidth = var6;
                var4 = var4.largerUpsellImage;
                var0.imageStyle = var4;
                var4 = {};
                var6 = 24;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.isThemeDark;
                var6 = var6.bind(var7)(var8);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var6) {
                    _fun61559_ip = 145;
                    continue _fun61559
                }
            case 131:
                var6 = 26;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                _fun61559_ip = 157;
                continue _fun61559;
            case 145:
                var7 = 25;
                var7 = var9[var7];
                var6 = var8.bind(var3)(var7);
            case 157:
                var4.image = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 19;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.OVN9la;
                var6 = var7.bind(var10)(var6);
                var4.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.j0dyAG;
                var5 = var6.bind(var7)(var5);
                var4.description = var5;
                var0.upsellItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var4;
    var4 = function arg0() {
        var0 = arg0;
        var6 = var0.alertWidth;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 14;
        var0 = var9[var0];
        var3 = undefined;
        var2 = var8.bind(var3)(var0);
        var1 = var2.useLegacyClassComponentStyles;
        var0 = _closure1_slot22;
        var4 = var1.bind(var2)(var0);
        var2 = _closure1_slot19;
        var1 = _closure1_slot24;
        var0 = {};
        var0.alertWidth = var6;
        var4 = var4.customProfileUpsellImage;
        var0.imageStyle = var4;
        var4 = {};
        var6 = _closure1_slot1;
        var5 = 27;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var4.image = var5;
        var5 = 19;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.rTY76D;
        var6 = var7.bind(var10)(var6);
        var4.title = var6;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["2LCxoj"];
        var5 = var6.bind(var7)(var5);
        var4.description = var5;
        var0.upsellItem = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot28 = var4;
    var4 = function arg0() {
        _fun61561: for (var _fun61561_ip = 0;;) switch (_fun61561_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.alertWidth;
                var7 = var0.imageSource;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 14;
                var0 = var8[var0];
                var3 = undefined;
                var6 = var1.bind(var3)(var0);
                var2 = var6.useLegacyClassComponentStyles;
                var0 = _closure1_slot22;
                var9 = var2.bind(var6)(var0);
                var0 = _closure1_slot16;
                var6 = var0.bind(var3)();
                var2 = var6.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.isPremium;
                    return var0;
                };
                var2 = var2.bind(var6)(var0);
                var0 = 0;
                var0 = var2[var0];
                var6 = var0.iconSource;
                var2 = _closure1_slot1;
                var0 = 23;
                var0 = var8[var0];
                var0 = var2.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var0 = 24;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeLight;
                var10 = var0.bind(var1)(var2);
                var2 = _closure1_slot19;
                var1 = _closure1_slot24;
                var0 = {};
                var0.alertWidth = var4;
                var8 = var9.customAppIconsUpsellImage;
                var4 = new Array(2);
                var4[0] = var8;
                var8 = undefined;
                if (!var10) {
                    _fun61561_ip = 175;
                    continue _fun61561
                }
            case 169:
                var8 = var9.customAppIconUpsellLightImage;
            case 175:
                var4[1] = var8;
                var0.imageStyle = var4;
                var4 = {};
                var8 = null;
                if (!(var8 != var7)) {
                    _fun61561_ip = 195;
                    continue _fun61561
                }
            case 192:
                var6 = var7;
            case 195:
                var4.image = var6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 19;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["1B1Cyn"];
                var6 = var7.bind(var10)(var6);
                var4.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.VL5TYT;
                var5 = var6.bind(var7)(var5);
                var4.description = var5;
                var0.upsellItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var4;
    var4 = function arg0() {
        _fun61563: for (var _fun61563_ip = 0;;) switch (_fun61563_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.alertWidth;
                var5 = var1.useTier0Description;
                var3 = _closure1_slot19;
                var2 = _closure1_slot24;
                var1 = {};
                var1.alertWidth = var0;
                var4 = {};
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 28;
                var6 = var7[var0];
                var0 = undefined;
                var6 = var8.bind(var0)(var6);
                var4.image = var6;
                var11 = _closure1_slot0;
                var6 = 19;
                var8 = var7[var6];
                var8 = var11.bind(var0)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var6];
                var7 = var11.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.jn2mBl;
                var7 = var8.bind(var9)(var7);
                var4.title = var7;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = var13[var6];
                var7 = var12.bind(var0)(var7);
                var9 = var7.intl;
                var8 = var9.format;
                var6 = var13[var6];
                var6 = var12.bind(var0)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun61563_ip = 181;
                    continue _fun61563
                }
            case 163:
                var7 = var6["0qJYHK"];
                var5 = {};
                var5 = var8.bind(var9)(var7, var5);
                _fun61563_ip = 235;
                continue _fun61563;
            case 181:
                var7 = var6["8C+FZk"];
                var6 = {};
                var11 = 20;
                var11 = var13[var11];
                var12 = var12.bind(var0)(var11);
                var11 = var12.getPremiumTypeDisplayName;
                var10 = _closure1_slot18;
                var10 = var10.TIER_0;
                var10 = var11.bind(var12)(var10);
                var6.planName = var10;
                var5 = var8.bind(var9)(var7, var6);
            case 235:
                var4.description = var5;
                var1.upsellItem = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot30 = var4;
    var4 = function arg0() {
        _fun61564: for (var _fun61564_ip = 0;;) switch (_fun61564_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.alertWidth;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var0 = var10[var0];
                var3 = undefined;
                var2 = var7.bind(var3)(var0);
                var1 = var2.useLegacyClassComponentStyles;
                var0 = _closure1_slot22;
                var4 = var1.bind(var2)(var0);
                var1 = _closure1_slot1;
                var0 = 23;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var0 = 29;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.bind(var3)();
                var2 = _closure1_slot19;
                var1 = _closure1_slot24;
                var0 = {};
                var0.alertWidth = var6;
                var4 = var4.largerUpsellImage;
                var0.imageStyle = var4;
                var4 = {};
                var6 = 24;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.isThemeDark;
                var6 = var6.bind(var7)(var8);
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                if (var6) {
                    _fun61564_ip = 161;
                    continue _fun61564
                }
            case 147:
                var6 = 31;
                var6 = var10[var6];
                var6 = var8.bind(var3)(var6);
                _fun61564_ip = 173;
                continue _fun61564;
            case 161:
                var7 = 30;
                var7 = var10[var7];
                var6 = var8.bind(var3)(var7);
            case 173:
                var4.image = var6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 19;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["8cjmTj"];
                var7 = var8.bind(var11)(var7);
                var4.title = var7;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.moN9wh;
                var5 = {};
                var5.maxLength = var9;
                var5 = var7.bind(var8)(var6, var5);
                var4.description = var5;
                var0.upsellItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot31 = var4;
    var4 = function arg0() {
        _fun61565: for (var _fun61565_ip = 0;;) switch (_fun61565_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.alertWidth;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 14;
                var0 = var9[var0];
                var3 = undefined;
                var2 = var7.bind(var3)(var0);
                var1 = var2.useLegacyClassComponentStyles;
                var0 = _closure1_slot22;
                var4 = var1.bind(var2)(var0);
                var1 = _closure1_slot1;
                var0 = 23;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var2 = _closure1_slot19;
                var1 = _closure1_slot24;
                var0 = {};
                var0.alertWidth = var6;
                var4 = var4.largerUpsellImage;
                var0.imageStyle = var4;
                var4 = {};
                var6 = 24;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.isThemeDark;
                var6 = var6.bind(var7)(var8);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var6) {
                    _fun61565_ip = 145;
                    continue _fun61565
                }
            case 131:
                var6 = 33;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                _fun61565_ip = 157;
                continue _fun61565;
            case 145:
                var7 = 32;
                var7 = var9[var7];
                var6 = var8.bind(var3)(var7);
            case 157:
                var4.image = var6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 19;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var10 = var7.intl;
                var8 = var10.string;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["CoNXB+"];
                var7 = var8.bind(var10)(var7);
                var4.title = var7;
                var7 = var9[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.mkXb2F;
                var5 = {};
                var5 = var7.bind(var8)(var6, var5);
                var4.description = var5;
                var0.upsellItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var4;
    var4 = function arg0() {
        _fun61566: for (var _fun61566_ip = 0;;) switch (_fun61566_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.item;
                var4 = var0.alertWidth;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 34;
                var0 = var2[var0];
                var3 = undefined;
                var5 = var1.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var0 = _closure1_slot12;
                    var0 = var0.dataSavingMode;
                    return var0;
                };
                var10 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot9;
                var1 = var2.useState;
                var0 = !var10;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var7 = var1[var0];
                var2 = _closure1_slot20;
                var1 = _closure1_slot21;
                var0 = {};
                var11 = _closure1_slot19;
                var8 = _closure1_slot23;
                var5 = {};
                var13 = true;
                var5.isInitial = var13;
                var5.upsellItem = var12;
                var5.alertWidth = var4;
                var4 = _closure1_slot15;
                var4 = var4.UPLOAD;
                var5 = var11.bind(var3)(var8, var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var7) {
                    _fun61566_ip = 335;
                    continue _fun61566
                }
            case 175:
                var8 = _closure1_slot19;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 35;
                var6 = var15[var6];
                var6 = var14.bind(var3)(var6);
                var7 = var6.TableSwitchRow;
                var6 = {
                    'start': true,
                    'end': true
                };
                var11 = 19;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var16 = var12.intl;
                var13 = var16.string;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.ix8XIj;
                var12 = var13.bind(var16)(var12);
                var6.label = var12;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["wC0+Ph"];
                var11 = var12.bind(var13)(var11);
                var6.subLabel = var11;
                var6.value = var10;
                var9 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updatedUnsyncedSettings;
                    var1 = {};
                    var4 = arg0;
                    var1.dataSavingMode = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onValueChange = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 335:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot33 = var4;
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.initialUpsellKey;
        var _closure2_slot0 = var7;
        var13 = var0.analyticsLocation;
        var _closure2_slot1 = var13;
        var5 = var0.analyticsLocations;
        var12 = var0.analyticsProperties;
        var6 = var0.onClose;
        var0 = var0.imageSource;
        var _closure2_slot2 = var0;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 14;
        var1 = var11[var1];
        var3 = undefined;
        var8 = var10.bind(var3)(var1);
        var2 = var8.useLegacyClassComponentStyles;
        var1 = _closure1_slot22;
        var1 = var2.bind(var8)(var1);
        var _closure2_slot3 = var1;
        var9 = _closure1_slot1;
        var1 = 38;
        var1 = var11[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var16 = var1.width;
        var15 = var1.height;
        var1 = global;
        var14 = var1.Math;
        var8 = var14.min;
        var2 = var1.Math;
        var1 = var2.min;
        var2 = var1.bind(var2)(var16, var15);
        var1 = 0.9;
        var2 = var1 * var2;
        var1 = 500;
        var2 = var8.bind(var14)(var2, var1);
        var1 = 32;
        var1 = var2 - var1;
        var _closure2_slot4 = var1;
        var1 = 34;
        var1 = var11[var1];
        var14 = var10.bind(var3)(var1);
        var8 = var14.useStateFromStores;
        var1 = _closure1_slot13;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var4
            var1 = _closure1_slot13;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var8.bind(var14)(var2, var1);
        var _closure2_slot5 = var1;
        var1 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 37;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.getUpsellItems;
            var2 = var1.bind(var2)();
            var1 = var2.sort;
            var0 = function(arg0) { // Environment: var0
                _fun61572: for (var _fun61572_ip = 0;;) switch (_fun61572_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.key;
                        var1 = _closure3_slot0;
                        var0 = 1;
                        if (!(var2 === var1)) {
                            _fun61572_ip = 28;
                            continue _fun61572
                        }
                    case 22:
                        var0 = -1;
                    case 28:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var1.bind(var3)(var7);
        var _closure2_slot6 = var1;
        var1 = 39;
        var1 = var11[var1];
        var2 = var9.bind(var3)(var1);
        var1 = 40;
        var1 = var11[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.PREMIUM_UPSELL_ALERT;
        var1 = var2.bind(var3)(var5, var1);
        var1 = var1.analyticsLocations;
        var _closure2_slot7 = var1;
        var2 = 41;
        var2 = var11[var2];
        var5 = var9.bind(var3)(var2);
        var2 = function() { // Environment: var4
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 42;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot14;
            var2 = var1.OPEN_MODAL;
            var1 = {};
            var5 = 'Nitro Upsell';
            var1.type = var5;
            var5 = _closure2_slot1;
            var1.location = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var2 = var5.bind(var3)(var2);
        var2 = 37;
        var2 = var11[var2];
        var5 = var10.bind(var3)(var2);
        var2 = var5.usePremiumUpsellConfig;
        var5 = var2.bind(var5)(var7, var1, var13);
        var2 = var5.useTier0UpsellContent;
        var _closure2_slot8 = var2;
        var7 = var5.getNitroText;
        var5 = var5.onViewAllPerks;
        var8 = {};
        var8.analyticsLocation = var13;
        var8.analyticsProperties = var12;
        var8.useTier0UpsellContent = var2;
        var _closure2_slot9 = var8;
        var12 = _closure1_slot9;
        var2 = var12.useRef;
        var2 = var2.bind(var12)(var8);
        var _closure2_slot10 = var2;
        var8 = var12.useEffect;
        var2 = function() { // Environment: var4
            var1 = _closure2_slot10;
            var0 = _closure2_slot9;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var8.bind(var12)(var2);
        var8 = var12.useEffect;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var4
            _fun61575: for (var _fun61575_ip = 0;;) switch (_fun61575_ip) {
                case 0:
                    var0 = _closure2_slot10;
                    var0 = var0.current;
                    var9 = var0.analyticsLocation;
                    var10 = var0.analyticsProperties;
                    var6 = var0.useTier0UpsellContent;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 42;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot14;
                    var2 = var1.PREMIUM_UPSELL_VIEWED;
                    var1 = {};
                    var11 = var1;
                    var8 = copyDataProperties(var11, var10);
                    var8 = 'location';
                    var1[var8] = var9;
                    var8 = _closure2_slot7;
                    var7 = 'location_stack';
                    var1[var7] = var8;
                    var5 = _closure1_slot17;
                    if (var6) {
                        _fun61575_ip = 116;
                        continue _fun61575
                    }
                case 108:
                    var6 = var5.TIER_2;
                    _fun61575_ip = 122;
                    continue _fun61575;
                case 116:
                    var6 = var5.TIER_0;
                case 122:
                    var5 = 'sku_id';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var1 = var8.bind(var12)(var1, var2);
        var1 = function() {
            _fun61576: for (var _fun61576_ip = 0;;) switch (_fun61576_ip) {
                case 0:
                    var1 = _closure2_slot8;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    if (var1) {
                        _fun61576_ip = 200;
                        continue _fun61576
                    }
                case 24:
                    var1 = 43;
                    var1 = var8[var1];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var1);
                    var1 = var2.getUserMaxFileSize;
                    var0 = _closure2_slot5;
                    var1 = var1.bind(var2)(var0);
                    var5 = 44;
                    var0 = var8[var5];
                    var0 = var7.bind(var6)(var0);
                    var0 = var0.BYTE_IN_KB;
                    var11 = var1 / var0;
                    var0 = 19;
                    var1 = var8[var0];
                    var1 = var7.bind(var6)(var1);
                    var3 = var1.intl;
                    var2 = var3.format;
                    var0 = var8[var0];
                    var0 = var7.bind(var6)(var0);
                    var0 = var0.t;
                    var1 = var0.DUT5IC;
                    var0 = {};
                    var5 = var8[var5];
                    var10 = var7.bind(var6)(var5);
                    var9 = var10.formatSize;
                    var5 = {};
                    var12 = true;
                    var5.useKibibytes = var12;
                    var5 = var9.bind(var10)(var11, var5);
                    var0.maxUploadStandard = var5;
                    var5 = 20;
                    var5 = var8[var5];
                    var9 = var7.bind(var6)(var5);
                    var6 = var9.getMaxFileSizeForPremiumType;
                    var5 = _closure1_slot18;
                    var5 = var5.TIER_2;
                    var5 = var6.bind(var9)(var5);
                    var0.maxUploadPremium = var5;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                case 200:
                    var0 = 19;
                    var1 = var8[var0];
                    var6 = undefined;
                    var1 = var7.bind(var6)(var1);
                    var3 = var1.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var8[var0];
                    var0 = var7.bind(var6)(var0);
                    var0 = var0.t;
                    var1 = var0.Z7Xb7H;
                    var0 = {};
                    var5 = 20;
                    var9 = var8[var5];
                    var11 = var7.bind(var6)(var9);
                    var10 = var11.getPremiumTypeDisplayName;
                    var4 = _closure1_slot18;
                    var9 = var4.TIER_0;
                    var9 = var10.bind(var11)(var9);
                    var0.premiumPlan = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.getMaxFileSizeForPremiumType;
                    var4 = var4.TIER_0;
                    var4 = var5.bind(var6)(var4);
                    var0.premiumMaxSize = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var _closure2_slot11 = var1;
        var2 = _closure1_slot19;
        var0 = 45;
        var0 = var11[var0];
        var1 = var9.bind(var3)(var0);
        var0 = {};
        var8 = 46;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.Colors;
        var8 = var8.GREEN;
        var0.confirmColor = var8;
        var0.confirmText = var7;
        var7 = function() {
            _fun61577: for (var _fun61577_ip = 0;;) switch (_fun61577_ip) {
                case 0:
                    var5 = _closure1_slot19;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 47;
                    var0 = var7[var0];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var0);
                    var0 = {};
                    var2 = 48;
                    var2 = var7[var2];
                    var2 = var6.bind(var4)(var2);
                    var0.source = var2;
                    var6 = _closure2_slot3;
                    var6 = var6.nitroWheel;
                    var0.style = var6;
                    var6 = 'contain';
                    var0.resizeMode = var6;
                    var0 = var5.bind(var4)(var3, var0);
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot15;
                    var3 = var3.GLOBAL_EMOJI;
                    if (!(var3 !== var2)) {
                        _fun61577_ip = 156;
                        continue _fun61577
                    }
                case 96:
                    var3 = _closure1_slot15;
                    var3 = var3.ANIMATED_EMOJI;
                    if (!(var3 !== var2)) {
                        _fun61577_ip = 156;
                        continue _fun61577
                    }
                case 110:
                    var3 = _closure1_slot15;
                    var3 = var3.CUSTOM_PROFILES;
                    if (!(var3 !== var2)) {
                        _fun61577_ip = 156;
                        continue _fun61577
                    }
                case 124:
                    var3 = _closure1_slot15;
                    var3 = var3.PREMIUM_GUILD_PROFILE;
                    if (!(var3 !== var2)) {
                        _fun61577_ip = 156;
                        continue _fun61577
                    }
                case 138:
                    var1 = _closure1_slot15;
                    var1 = var1.APP_ICONS;
                    if (!(var1 !== var2)) {
                        _fun61577_ip = 156;
                        continue _fun61577
                    }
                case 152:
                    var1 = null;
                    return var1;
                case 156:
                    return var0;
            }
        };
        var0.renderConfirmIcon = var7;
        var7 = 19;
        var8 = var11[var7];
        var8 = var10.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.cpT0Cq;
        var7 = var8.bind(var9)(var7);
        var0.cancelText = var7;
        var0.onClose = var6;
        var0.onConfirm = var5;
        var4 = function() { // Environment: var4
            _fun61578: for (var _fun61578_ip = 0;;) switch (_fun61578_ip) {
                case 0:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 49;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot3;
                    var7 = var6.carousel;
                    var1.style = var7;
                    var7 = _closure2_slot4;
                    var1.width = var7;
                    var6 = var6.pageIndicatorStyle;
                    var1.pageIndicatorStyle = var6;
                    var8 = _closure2_slot6;
                    var7 = var8.map;
                    var6 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var4 = _closure1_slot19;
                        var3 = _closure1_slot23;
                        var2 = {};
                        var6 = _closure2_slot0;
                        var5 = var0.key;
                        var5 = var6 === var5;
                        var2.isInitial = var5;
                        var2.upsellItem = var0;
                        var1 = _closure2_slot4;
                        var2.alertWidth = var1;
                        var1 = var0.key;
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3, var2, var1);
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6);
                    var1.children = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    var5 = _closure2_slot0;
                    var2 = _closure1_slot15;
                    var2 = var2.GLOBAL_EMOJI;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 659;
                        continue _fun61578
                    }
                case 119:
                    var2 = _closure1_slot15;
                    var2 = var2.ANIMATED_EMOJI;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 623;
                        continue _fun61578
                    }
                case 136:
                    var2 = _closure1_slot15;
                    var2 = var2.GLOBAL_STICKER;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 587;
                        continue _fun61578
                    }
                case 153:
                    var2 = _closure1_slot15;
                    var2 = var2.CUSTOM_PROFILES;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 560;
                        continue _fun61578
                    }
                case 170:
                    var2 = _closure1_slot15;
                    var2 = var2.APP_ICONS;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 524;
                        continue _fun61578
                    }
                case 187:
                    var2 = _closure1_slot15;
                    var2 = var2.PREMIUM_GUILD_PROFILE;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 497;
                        continue _fun61578
                    }
                case 204:
                    var2 = _closure1_slot15;
                    var2 = var2.LONGER_MESSAGE;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 470;
                        continue _fun61578
                    }
                case 221:
                    var2 = _closure1_slot15;
                    var2 = var2.GUILD_CAP;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 443;
                        continue _fun61578
                    }
                case 238:
                    var2 = _closure1_slot15;
                    var2 = var2.UPLOAD;
                    if (!(var2 !== var5)) {
                        _fun61578_ip = 254;
                        continue _fun61578
                    }
                case 252:
                    return var1;
                case 254:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot33;
                    var1 = {};
                    var6 = {};
                    var7 = _closure1_slot15;
                    var7 = var7.UPLOAD;
                    var6.key = var7;
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 50;
                    var7 = var11[var7];
                    var7 = var8.bind(var3)(var7);
                    var6.image = var7;
                    var10 = _closure1_slot0;
                    var7 = 19;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8["1EOZqw"];
                    var8 = var9.bind(var12)(var8);
                    var6.activeTitle = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.tB51W4;
                    var7 = var8.bind(var9)(var7);
                    var6.passiveTitle = var7;
                    var7 = _closure2_slot11;
                    var7 = var7.bind(var3)();
                    var6.description = var7;
                    var1.item = var6;
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 443:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot32;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 470:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot31;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 497:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot27;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 524:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot29;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var6 = _closure2_slot2;
                    var1.imageSource = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 560:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot28;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 587:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot30;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var6 = _closure2_slot8;
                    var1.useTier0Description = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 623:
                    var5 = _closure1_slot19;
                    var2 = _closure1_slot26;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.alertWidth = var6;
                    var6 = _closure2_slot8;
                    var1.useTier0Description = var6;
                    var1 = var5.bind(var3)(var2, var1);
                    return var1;
                case 659:
                    var2 = _closure1_slot19;
                    var1 = _closure1_slot25;
                    var0 = {};
                    var5 = _closure2_slot4;
                    var0.alertWidth = var5;
                    var4 = _closure2_slot8;
                    var0.useTier0Description = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4 = var4.bind(var3)();
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/PremiumUpsellAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var1;
    var2.PremiumUpsellItem = var3;
    var2.PremiumUpsellAlert = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 31, 27, 3188, 1613, 660, 7628, 1615, 33, 1297, 671, 3932, 3150, 6648, 1234, 3100, 7606, 7607, 3237, 3197, 7655, 7656, 7657, 7658, 7659, 7660, 7661, 7662, 7663, 566, 5411, 7619, 7605, 1464, 5721, 5574, 4094, 795, 7664, 3348, 3928, 4868, 4699, 6601, 7665, 7609, 2]);