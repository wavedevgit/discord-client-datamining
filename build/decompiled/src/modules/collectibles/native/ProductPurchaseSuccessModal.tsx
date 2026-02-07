// modules/collectibles/native/ProductPurchaseSuccessModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot6 = var7;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Orientation;
    var _closure1_slot9 = var7;
    var3 = var3.VerticalGradient;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var7 = var3.jsxs;
    var _closure1_slot12 = var7;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var11 = 8;
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var10.tintColor = var11;
    var7.closeButtonIcon = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot14 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun76031: for (var _fun76031_ip = 0;;) switch (_fun76031_ip) {
            case 0:
                var8 = arg0;
                var3 = arguments[1];
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun76031_ip = 14;
                    continue _fun76031
                }
            case 12:
                var3 = false;
            case 14:
                var0 = {};
                var1 = {};
                var11 = 1;
                var1.flex = var11;
                var12 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 8;
                var6 = var10[var5];
                var6 = var12.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_BASE_LOW;
                var1.backgroundColor = var6;
                var0.root = var1;
                var1 = {
                    'flexDirection': 'row',
                    'justifyContent': 'space-between',
                    'alignItems': 'center'
                };
                var6 = 'center';
                var7 = var10[var5];
                var7 = var12.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var1.paddingHorizontal = var7;
                var0.header = var1;
                var1 = {
                    'resizeMode': 'cover',
                    'position': 'absolute',
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0
                };
                var0.imageBackground = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0
                };
                var0.backdrop = var1;
                var1 = {};
                var1.flex = var11;
                var0.main = var1;
                var1 = {
                    'position': 'absolute',
                    'backgroundColor': null,
                    'top': 0,
                    'bottom': 0,
                    'left': 0,
                    'right': 0
                };
                var9 = var10[var5];
                var9 = var12.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.BLACK;
                var1.backgroundColor = var9;
                var0.curtain = var1;
                var1 = {
                    'flex': 1,
                    'flexDirection': 'column',
                    'justifyContent': 'center'
                };
                var0.body = var1;
                var1 = {
                    'flexDirection': 'row',
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var12 = _closure1_slot0;
                var9 = 9;
                var10 = var10[var9];
                var10 = var12.bind(var4)(var10);
                var10 = var10.CollectiblesItemType;
                var12 = var10.AVATAR_DECORATION;
                var10 = 0;
                if (!(var8 === var12)) {
                    _fun76031_ip = 276;
                    continue _fun76031
                }
            case 273:
                var10 = var11;
            case 276:
                var1.flex = var10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var9];
                var10 = var11.bind(var4)(var10);
                var10 = var10.CollectiblesItemType;
                var10 = var10.AVATAR_DECORATION;
                var7 = 0;
                if (!(var8 === var10)) {
                    _fun76031_ip = 321;
                    continue _fun76031
                }
            case 315:
                var7 = '20%';
            case 321:
                var1.marginTop = var7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var10.bind(var4)(var7);
                var7 = var7.CollectiblesItemType;
                var10 = var7.NAMEPLATE;
                var7 = undefined;
                if (!(var8 === var10)) {
                    _fun76031_ip = 388;
                    continue _fun76031
                }
            case 360:
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var5];
                var10 = var11.bind(var4)(var10);
                var10 = var10.spacing;
                var7 = var10.PX_32;
            case 388:
                var1.marginHorizontal = var7;
                if (!var3) {
                    _fun76031_ip = 429;
                    continue _fun76031
                }
            case 396:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var9];
                var3 = var7.bind(var4)(var3);
                var3 = var3.CollectiblesItemType;
                var3 = var3.AVATAR_DECORATION;
                if (!(var8 !== var3)) {
                    _fun76031_ip = 433;
                    continue _fun76031
                }
            case 429:
                var3 = {};
                _fun76031_ip = 500;
                continue _fun76031;
            case 433:
                var7 = {
                    'shadowColor': null,
                    'shadowOffset': null,
                    'shadowOpacity': 1,
                    'shadowRadius': 60,
                    'elevation': 24
                };
                var11 = _closure1_slot1;
                var10 = _closure1_slot2;
                var10 = var10[var5];
                var10 = var11.bind(var4)(var10);
                var10 = var10.unsafe_rawColors;
                var10 = var10.PRIMARY_630;
                var7.shadowColor = var10;
                var10 = {
                    'width': 0,
                    'height': 0
                };
                var7.shadowOffset = var10;
                var3 = var7;
            case 500:
                var14 = var1;
                var13 = var3;
                var3 = copyDataProperties(var14, var13);
                var0.preview = var1;
                var1 = {
                    'flex': 1,
                    'justifyContent': 'flex-start',
                    'alignItems': 'center',
                    'minHeight': 250
                };
                var0.previewBundle = var1;
                var1 = {
                    'paddingTop': null,
                    'height': null,
                    'flexDirection': 'column',
                    'alignItems': 'center',
                    'justifyContent': 'flex-start'
                };
                var10 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = var3[var5];
                var7 = var10.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_24;
                var1.paddingTop = var7;
                var7 = _closure1_slot0;
                var3 = var3[var9];
                var3 = var7.bind(var4)(var3);
                var3 = var3.CollectiblesItemType;
                var7 = var3.AVATAR_DECORATION;
                var3 = undefined;
                if (!(var8 === var7)) {
                    _fun76031_ip = 619;
                    continue _fun76031
                }
            case 613:
                var3 = '32%';
            case 619:
                var1.height = var3;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var5];
                var7 = var3.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var1.gap = var7;
                var0.messages = var1;
                var1 = {};
                var1.textAlign = var6;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_32;
                var1.marginHorizontal = var6;
                var0.title = var1;
                var1 = {};
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.marginBottom = var6;
                var0.footer = var1;
                var1 = {};
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_16;
                var1.paddingVertical = var6;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_24;
                var1.marginHorizontal = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var0.cta = var1;
                var1 = {
                    'alignSelf': 'flex-end',
                    'flexGrow': 1
                };
                var0.profilePreview = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.tintColor;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot14;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot1 = var1;
        var6 = _closure1_slot5;
        var5 = var6.useCallback;
        var2 = function() { // Environment: var4
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.close;
            var1 = var1.bind(var2)();
            return var0;
        };
        var1 = new Array(0);
        var5 = var5.bind(var6)(var2, var1);
        var2 = _closure1_slot11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 11;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.HeaderBackButton;
        var0 = {};
        var0.onPress = var5;
        var4 = function() {
            var3 = _closure1_slot11;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 12;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.XSmallIcon;
            var0 = {};
            var4 = 'lg';
            var0.size = var4;
            var4 = _closure2_slot1;
            var5 = var4.closeButtonIcon;
            var4 = new Array(2);
            var4[0] = var5;
            var5 = {};
            var6 = _closure2_slot0;
            var5.tintColor = var6;
            var4[1] = var5;
            var0.style = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.backImage = var4;
        var4 = 13;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.cpT0Cq;
        var4 = var5.bind(var6)(var4);
        var0.accessibilityLabel = var4;
        var4 = false;
        var0.labelVisible = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var3;
    var3 = {};
    var7 = 'function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfileEffect}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfileEffect?0.6:0,1])}]};}';
    var3.code = var7;
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = {};
    var7 = 'function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}';
    var3.code = var7;
    var _closure1_slot19 = var3;
    var3 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
    var _closure1_slot20 = var3;
    var3 = 18;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = 'black';
    var6 = var6.bind(var0)(var3);
    var3 = var6.toHexString;
    var3 = var3.bind(var6)();
    var _closure1_slot21 = var3;
    var3 = function arg0() {
        _fun76035: for (var _fun76035_ip = 0;;) switch (_fun76035_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.product;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var4 = _closure1_slot15;
                var2 = var0.type;
                var7 = var4.bind(var3)(var2);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 19;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var0 = var0.styles;
                var0 = var2.bind(var3)(var0);
                var10 = var0.backgroundColors;
                var _closure2_slot0 = var10;
                var2 = null;
                var4 = var2 == var10;
                var0 = undefined;
                if (var4) {
                    _fun76035_ip = 100;
                    continue _fun76035
                }
            case 94:
                var0 = var10.tertiary;
            case 100:
                var0 = var2 != var0;
                _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 20;
                var2 = var11[var4];
                var13 = var5.bind(var3)(var2);
                var12 = var13.useToken;
                var8 = _closure1_slot1;
                var2 = 8;
                var9 = var11[var2];
                var9 = var8.bind(var3)(var9);
                var9 = var9.colors;
                var9 = var9.BACKGROUND_BASE_LOW;
                var9 = var12.bind(var13)(var9);
                _closure2_slot2 = var9;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.useToken;
                var2 = var11[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_SURFACE_HIGH;
                var8 = var4.bind(var5)(var2);
                _closure2_slot3 = var8;
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var2 = new Array(4);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var0;
                var1 = function() { // Environment: var1
                    _fun76036: for (var _fun76036_ip = 0;;) switch (_fun76036_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun76036_ip = 161;
                                continue _fun76036
                            }
                        case 16:
                            var0 = _closure2_slot1;
                            var3 = _closure2_slot0;
                            var4 = var3.primary;
                            var1 = var4.toHexString;
                            var4 = var1.bind(var4)();
                            if (var0) {
                                _fun76036_ip = 108;
                                continue _fun76036
                            }
                        case 43:
                            var0 = new Array(5);
                            var0[0] = var4;
                            var5 = var3.primary;
                            var1 = var5.toHexString;
                            var1 = var1.bind(var5)();
                            var0[1] = var1;
                            var5 = var3.secondary;
                            var1 = var5.toHexString;
                            var1 = var1.bind(var5)();
                            var0[2] = var1;
                            var1 = _closure1_slot21;
                            var0[3] = var1;
                            var0[4] = var1;
                            _fun76036_ip = 159;
                            continue _fun76036;
                        case 108:
                            var1 = new Array(3);
                            var1[0] = var4;
                            var5 = var3.secondary;
                            var4 = var5.toHexString;
                            var4 = var4.bind(var5)();
                            var1[1] = var4;
                            var4 = var3.tertiary;
                            var3 = var4.toHexString;
                            var3 = var3.bind(var4)();
                            var1[2] = var3;
                            var0 = var1;
                        case 159:
                            _fun76036_ip = 207;
                            continue _fun76036;
                        case 161:
                            var3 = _closure2_slot2;
                            var1 = new Array(5);
                            var1[0] = var3;
                            var3 = _closure2_slot2;
                            var1[1] = var3;
                            var2 = _closure2_slot3;
                            var1[2] = var2;
                            var2 = _closure1_slot21;
                            var1[3] = var2;
                            var1[4] = var2;
                            var0 = var1;
                        case 207:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                if (var0) {
                    _fun76035_ip = 271;
                    continue _fun76035
                }
            case 259:
                var5 = [0, 0.05, 0.6, 0.95, 1];
                _fun76035_ip = 281;
                continue _fun76035;
            case 271:
                var5 = [0, 0.6, 0.85];
            case 281:
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 21;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var7.backdrop;
                var0.style = var7;
                var6 = _closure1_slot10;
                var7 = var6.START;
                var0.start = var7;
                var6 = var6.END;
                var0.end = var6;
                var0.locations = var5;
                var0.colors = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var3 = 40;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductPurchaseSuccessModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76037: for (var _fun76037_ip = 0;;) switch (_fun76037_ip) {
            case 0:
                var0 = arg0;
                var35 = var0.product;
                var14 = var0.useCategoryImage;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun76037_ip = 25;
                    continue _fun76037
                }
            case 23:
                var14 = false;
            case 25:
                var24 = var0.renderMessages;
                var10 = var0.onSuccess;
                var15 = var0.showOrbBalancePill;
                if (!(var15 === var3)) {
                    _fun76037_ip = 49;
                    continue _fun76037
                }
            case 47:
                var15 = false;
            case 49:
                var25 = var0.orbBalancePriorToPurchase;
                if (!(var25 === var3)) {
                    _fun76037_ip = 61;
                    continue _fun76037
                }
            case 59:
                var25 = null;
            case 61:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 22;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCurrentUser;
                var34 = var0.bind(var1)();
                var1 = _closure1_slot1;
                var0 = 19;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var35.styles;
                var0 = var1.bind(var3)(var0);
                var42 = var0.backgroundColors;
                var23 = null;
                var1 = var23 == var42;
                var0 = undefined;
                if (var1) {
                    _fun76037_ip = 152;
                    continue _fun76037
                }
            case 146:
                var0 = var42.tertiary;
            case 152:
                var2 = var23 != var0;
                var1 = _closure1_slot15;
                var0 = var35.type;
                var8 = var1.bind(var3)(var0, var2);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 20;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
                var4 = var6.useToken;
                var7 = _closure1_slot1;
                var0 = 8;
                var0 = var2[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.INTERACTIVE_TEXT_ACTIVE;
                var38 = var4.bind(var6)(var0);
                var7 = _closure1_slot5;
                var4 = var7.useRef;
                var0 = _closure1_slot20;
                var0 = var4.bind(var7)(var0);
                _closure2_slot0 = var0;
                var6 = var7.useCallback;
                var4 = function() { // Environment: var19
                    _fun76038: for (var _fun76038_ip = 0;;) switch (_fun76038_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var0 = _closure2_slot0;
                            var2 = var0.current;
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var7 = 0;
                            var5 = var6[var7];
                            var3 = var6.slice;
                            var2 = 1;
                            var2 = var3.bind(var6)(var2);
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun76038_ip = 63;
                                continue _fun76038
                            }
                        case 51:
                            var6 = var2.length;
                            if (!(var7 !== var6)) {
                                _fun76038_ip = 196;
                                continue _fun76038
                            }
                        case 63:
                            var7 = var2.length;
                            var6 = _closure1_slot20;
                            var8 = var6.length;
                            var6 = 2;
                            var6 = var8 / var6;
                            if (!(!(var7 >= var6))) {
                                _fun76038_ip = 142;
                                continue _fun76038
                            }
                        case 88:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 17;
                            var7 = var10[var6];
                            var8 = var9.bind(var0)(var7);
                            var7 = var8.triggerHapticFeedback;
                            var6 = var10[var6];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.HapticFeedbackTypes;
                            var6 = var6.IMPACT_MEDIUM;
                            var6 = var7.bind(var8)(var6);
                            _fun76038_ip = 248;
                            continue _fun76038;
                        case 142:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 17;
                            var7 = var10[var6];
                            var8 = var9.bind(var0)(var7);
                            var7 = var8.triggerHapticFeedback;
                            var6 = var10[var6];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.HapticFeedbackTypes;
                            var6 = var6.IMPACT_LIGHT;
                            var6 = var7.bind(var8)(var6);
                            _fun76038_ip = 248;
                            continue _fun76038;
                        case 196:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 17;
                            var6 = var9[var4];
                            var7 = var8.bind(var0)(var6);
                            var6 = var7.triggerHapticFeedback;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.HapticFeedbackTypes;
                            var4 = var4.IMPACT_HEAVY;
                            var4 = var6.bind(var7)(var4);
                        case 248:
                            if (!(var3 != var5)) {
                                _fun76038_ip = 270;
                                continue _fun76038
                            }
                        case 252:
                            var3 = global;
                            var4 = var3.setTimeout;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var0)(var3, var5);
                        case 270:
                            var1 = _closure2_slot0;
                            var1.current = var2;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var6.bind(var7)(var4, var0);
                _closure2_slot1 = var0;
                var6 = var7.useEffect;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var19
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot0;
                        var0 = new Array(0);
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0 = var6.bind(var7)(var0, var4);
                var0 = 23;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useAvatarDecorationPreviewSizes;
                var0 = var0.bind(var4)();
                var4 = var0.avatarSize;
                var31 = var0.avatarDecorationSize;
                var0 = 24;
                var0 = var2[var0];
                var9 = var1.bind(var3)(var0);
                var7 = var9.useStateFromStores;
                var0 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var19
                    var0 = _closure1_slot8;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var29 = var7.bind(var9)(var6, var0);
                var7 = var35.type;
                var28 = 9;
                var0 = var2[var28];
                var0 = var1.bind(var3)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.PROFILE_EFFECT;
                var6 = function(arg0, arg1) { // Environment: var19
                    var0 = arg0;
                    var13 = arg1;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var13;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 14;
                    var2 = var10[var7];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var2);
                    var2 = var3.useSharedValue;
                    var5 = 0;
                    var12 = var2.bind(var3)(var5);
                    var _closure3_slot2 = var12;
                    var2 = var10[var7];
                    var3 = var9.bind(var8)(var2);
                    var2 = var3.useSharedValue;
                    var6 = var2.bind(var3)(var5);
                    var _closure3_slot3 = var6;
                    var5 = _closure1_slot5;
                    var3 = var5.useEffect;
                    var2 = new Array(3);
                    var2[0] = var12;
                    var2[1] = var0;
                    var2[2] = var6;
                    var0 = function() { // Environment: var1
                        _fun76043: for (var _fun76043_ip = 0;;) switch (_fun76043_ip) {
                            case 0:
                                var3 = _closure3_slot2;
                                var2 = var3.set;
                                var4 = _closure3_slot0;
                                var9 = 1;
                                var1 = var9;
                                if (var4) {
                                    _fun76043_ip = 102;
                                    continue _fun76043
                                }
                            case 25:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 14;
                                var4 = var10[var4];
                                var5 = undefined;
                                var7 = var8.bind(var5)(var4);
                                var6 = var7.withDelay;
                                var4 = 15;
                                var4 = var10[var4];
                                var8 = var8.bind(var5)(var4);
                                var5 = var8.withSpring;
                                var4 = {
                                    'duration': 500,
                                    'dampingRatio': 0.7
                                };
                                var5 = var5.bind(var8)(var9, var4);
                                var4 = 200;
                                var1 = var6.bind(var7)(var4, var5);
                            case 102:
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot3;
                                var1 = var2.set;
                                var3 = _closure3_slot0;
                                var0 = var9;
                                if (var3) {
                                    _fun76043_ip = 195;
                                    continue _fun76043
                                }
                            case 126:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 14;
                                var3 = var8[var3];
                                var4 = undefined;
                                var6 = var7.bind(var4)(var3);
                                var5 = var6.withDelay;
                                var3 = 16;
                                var3 = var8[var3];
                                var8 = var7.bind(var4)(var3);
                                var7 = var8.withTiming;
                                var3 = {};
                                var4 = 200;
                                var3.duration = var4;
                                var3 = var7.bind(var8)(var9, var3);
                                var0 = var5.bind(var6)(var4, var3);
                            case 195:
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var3.bind(var5)(var0, var2);
                    var0 = {};
                    var2 = var10[var7];
                    var5 = var9.bind(var8)(var2);
                    var3 = var5.useAnimatedStyle;
                    var2 = function() {
                        _fun76044: for (var _fun76044_ip = 0;;) switch (_fun76044_ip) {
                            case 0:
                                var0 = {};
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 14;
                                var1 = var7[var3];
                                var5 = undefined;
                                var11 = var6.bind(var5)(var1);
                                var10 = var11.interpolate;
                                var4 = _closure3_slot2;
                                var2 = var4.get;
                                var9 = var2.bind(var4)();
                                var8 = [0, 1];
                                var2 = [0.1, 1];
                                var2 = var10.bind(var11)(var9, var8, var2);
                                var0.opacity = var2;
                                var2 = {};
                                var3 = var7[var3];
                                var6 = var6.bind(var5)(var3);
                                var5 = var6.interpolate;
                                var3 = var4.get;
                                var4 = var3.bind(var4)();
                                var3 = _closure3_slot1;
                                var1 = 0;
                                if (!var3) {
                                    _fun76044_ip = 125;
                                    continue _fun76044
                                }
                            case 115:
                                var1 = 0.6;
                            case 125:
                                var3 = new Array(2);
                                var3[0] = var1;
                                var1 = 1;
                                var3[1] = var1;
                                var1 = [0, 1];
                                var1 = var5.bind(var6)(var4, var1, var3);
                                var2.scale = var1;
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0.transform = var1;
                                return var0;
                        }
                    };
                    var11 = {};
                    var14 = var10[var7];
                    var14 = var9.bind(var8)(var14);
                    var14 = var14.interpolate;
                    var11.interpolate = var14;
                    var11.springInput = var12;
                    var11.isProfileEffect = var13;
                    var2.__closure = var11;
                    var11 = 5554673710726.0;
                    var2.__workletHash = var11;
                    var11 = _closure1_slot17;
                    var2.__initData = var11;
                    var2 = var3.bind(var5)(var2);
                    var0.previewViewStyle = var2;
                    var2 = var10[var7];
                    var5 = var9.bind(var8)(var2);
                    var3 = var5.useAnimatedStyle;
                    var2 = function() {
                        var0 = {};
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 14;
                        var2 = var6[var1];
                        var4 = undefined;
                        var10 = var5.bind(var4)(var2);
                        var9 = var10.interpolate;
                        var3 = _closure3_slot2;
                        var2 = var3.get;
                        var8 = var2.bind(var3)();
                        var7 = [0, 1];
                        var2 = [0, 1];
                        var2 = var9.bind(var10)(var8, var7, var2);
                        var0.opacity = var2;
                        var2 = {};
                        var1 = var6[var1];
                        var6 = var5.bind(var4)(var1);
                        var5 = var6.interpolate;
                        var1 = var3.get;
                        var4 = var1.bind(var3)();
                        var3 = [0, 1];
                        var1 = [0.75, 1];
                        var1 = var5.bind(var6)(var4, var3, var1);
                        var2.scale = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0.transform = var1;
                        return var0;
                    };
                    var11 = {};
                    var13 = var10[var7];
                    var13 = var9.bind(var8)(var13);
                    var13 = var13.interpolate;
                    var11.interpolate = var13;
                    var11.springInput = var12;
                    var2.__closure = var11;
                    var11 = 4517716462039.0;
                    var2.__workletHash = var11;
                    var11 = _closure1_slot18;
                    var2.__initData = var11;
                    var2 = var3.bind(var5)(var2);
                    var0.textViewStyle = var2;
                    var2 = var10[var7];
                    var3 = var9.bind(var8)(var2);
                    var2 = var3.useAnimatedStyle;
                    var1 = function() {
                        var0 = {};
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.interpolate;
                        var2 = _closure3_slot3;
                        var1 = var2.get;
                        var3 = var1.bind(var2)();
                        var2 = [0, 1];
                        var1 = [0.5, 0];
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var0.opacity = var1;
                        return var0;
                    };
                    var5 = {};
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.interpolate;
                    var5.interpolate = var7;
                    var5.linearInput = var6;
                    var1.__closure = var5;
                    var5 = 6018737312.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot19;
                    var1.__initData = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.curtainViewStyle = var1;
                    return var0;
                };
                var0 = var7 === var0;
                var0 = var6.bind(var3)(var29, var0);
                var27 = var0.previewViewStyle;
                var26 = var0.textViewStyle;
                var9 = var0.curtainViewStyle;
                var0 = 25;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useFetchCollectiblesProductCategory;
                var0 = var35.skuId;
                var0 = var1.bind(var2)(var0);
                var0 = var0.category;
                var1 = var23 == var0;
                var12 = undefined;
                if (var1) {
                    _fun76037_ip = 493;
                    continue _fun76037
                }
            case 487:
                var12 = var0.mobileBgUrl;
            case 493:
                var1 = _closure1_slot3;
                var0 = var35.items;
                var33 = 1;
                var0 = var1.bind(var3)(var0, var33);
                var36 = 0;
                var32 = var0[var36];
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 26;
                var0 = var2[var0];
                var7 = var1.bind(var3)(var0);
                var6 = var7.useHandleUseNow;
                var0 = {};
                var0.product = var35;
                var0.onSuccess = var10;
                var0 = var6.bind(var7)(var0);
                var20 = var0.handleUseNow;
                var21 = var0.isApplying;
                var0 = var34.getAvatarSource;
                var41 = false;
                var30 = var0.bind(var34)(var3, var41, var4);
                var0 = 27;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
                var4 = var6.useVirtualCurrencyMobileEnabled;
                var0 = {};
                var7 = 'ProductPurchaseSuccessModal';
                var0.location = var7;
                var0 = var4.bind(var6)(var0);
                var16 = var0.enabled;
                var0 = 28;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.useFetchVirtualCurrencyBalance;
                var0 = var0.bind(var4)();
                var22 = var0.balance;
                var7 = _closure1_slot5;
                var6 = var7.useEffect;
                var4 = function() { // Environment: var19
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.lockOrientation;
                    var0 = _closure1_slot9;
                    var0 = var0.PORTRAIT;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 29;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.restoreDefaultOrientation;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var6.bind(var7)(var4, var0);
                var0 = 30;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var0 = var4.usePreviewCollectibleProduct;
                var37 = true;
                var0 = var0.bind(var4)(var35, var37);
                var0 = 31;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useShopProductItems;
                var40 = var0.bind(var1)(var35);
                var2 = _closure1_slot12;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var8.root;
                var0.style = var4;
                var4 = var35.skuId;
                var0.id = var4;
                if (!var14) {
                    _fun76037_ip = 767;
                    continue _fun76037
                }
            case 763:
                if (!(var23 == var12)) {
                    _fun76037_ip = 790;
                    continue _fun76037
                }
            case 767:
                var7 = _closure1_slot11;
                var6 = _closure1_slot22;
                var4 = {};
                var4.product = var35;
                var6 = var7.bind(var3)(var6, var4);
                _fun76037_ip = 826;
                continue _fun76037;
            case 790:
                var10 = _closure1_slot11;
                var7 = _closure1_slot6;
                var4 = {};
                var11 = {};
                var11.uri = var12;
                var4.source = var11;
                var11 = var8.imageBackground;
                var4.style = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 826:
                var4 = new Array(3);
                var4[0] = var6;
                var13 = _closure1_slot12;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 32;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var12 = var6.SafeAreaPaddingView;
                var11 = {
                    'style': null,
                    'top': true,
                    'bottom': true,
                    'left': true,
                    'right': true
                };
                var7 = var8.main;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var10 = undefined;
                if (!var14) {
                    _fun76037_ip = 905;
                    continue _fun76037
                }
            case 899:
                var10 = 'rgba(0, 0, 0, 0.3)';
            case 905:
                var7.backgroundColor = var10;
                var6[1] = var7;
                var11.style = var6;
                var10 = _closure1_slot12;
                var7 = _closure1_slot7;
                var6 = {};
                var14 = var8.header;
                var6.style = var14;
                var18 = _closure1_slot11;
                var17 = _closure1_slot16;
                var14 = {};
                var43 = var23 == var42;
                var39 = undefined;
                if (var43) {
                    _fun76037_ip = 972;
                    continue _fun76037
                }
            case 957:
                var43 = var42.label;
                var42 = var43.toHexString;
                var39 = var42.bind(var43)();
            case 972:
                if (!(var23 != var39)) {
                    _fun76037_ip = 979;
                    continue _fun76037
                }
            case 976:
                var38 = var39;
            case 979:
                var14.tintColor = var38;
                var17 = var18.bind(var3)(var17, var14);
                var14 = new Array(2);
                var14[0] = var17;
                if (!var15) {
                    _fun76037_ip = 1004;
                    continue _fun76037
                }
            case 1001:
                var15 = var16;
            case 1004:
                if (!var15) {
                    _fun76037_ip = 1082;
                    continue _fun76037
                }
            case 1007:
                var18 = _closure1_slot11;
                var17 = _closure1_slot0;
                var38 = _closure1_slot2;
                var16 = 33;
                var16 = var38[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.BalanceWidgetPill;
                var16 = {
                    'initialRenderedBalance': null,
                    'balance': null,
                    'animateBalanceChanges': true,
                    'onPress': null,
                    'disabled': true,
                    'variant': 'secondary'
                };
                var16.initialRenderedBalance = var25;
                var16.balance = var22;
                var22 = function() {
                    var0 = undefined;
                    return var0;
                };
                var16.onPress = var22;
                var15 = var18.bind(var3)(var17, var16);
            case 1082:
                var14[1] = var15;
                var6.children = var14;
                var6 = var10.bind(var3)(var7, var6);
                var14 = new Array(3);
                var14[0] = var6;
                var15 = _closure1_slot12;
                var7 = _closure1_slot7;
                var6 = {};
                var10 = var8.body;
                var6.style = var10;
                var18 = _closure1_slot11;
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var10 = 14;
                var16 = var22[var10];
                var16 = var17.bind(var3)(var16);
                var17 = var16.View;
                var16 = {};
                var38 = var8.preview;
                var25 = new Array(2);
                var25[0] = var38;
                var25[1] = var27;
                var16.style = var25;
                var25 = var35.type;
                var27 = _closure1_slot0;
                var22 = var22[var28];
                var22 = var27.bind(var3)(var22);
                var22 = var22.CollectiblesItemType;
                var22 = var22.AVATAR_DECORATION;
                if (!(var25 !== var22)) {
                    _fun76037_ip = 1571;
                    continue _fun76037
                }
            case 1213:
                var25 = var35.type;
                var27 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var28];
                var22 = var27.bind(var3)(var22);
                var22 = var22.CollectiblesItemType;
                var22 = var22.PROFILE_EFFECT;
                if (!(var25 !== var22)) {
                    _fun76037_ip = 1504;
                    continue _fun76037
                }
            case 1254:
                var25 = var35.type;
                var27 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var28];
                var22 = var27.bind(var3)(var22);
                var22 = var22.CollectiblesItemType;
                var22 = var22.NAMEPLATE;
                if (!(var25 !== var22)) {
                    _fun76037_ip = 1441;
                    continue _fun76037
                }
            case 1295:
                var27 = var35.type;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var28];
                var22 = var25.bind(var3)(var22);
                var22 = var22.CollectiblesItemType;
                var25 = var22.BUNDLE;
                var22 = null;
                if (!(var27 === var25)) {
                    _fun76037_ip = 1439;
                    continue _fun76037
                }
            case 1335:
                var28 = _closure1_slot11;
                var27 = _closure1_slot7;
                var25 = {};
                var38 = var8.previewBundle;
                var25.style = var38;
                var39 = _closure1_slot1;
                var42 = _closure1_slot2;
                var38 = 37;
                var38 = var42[var38];
                var39 = var39.bind(var3)(var38);
                var38 = {};
                var38.isPurchased = var41;
                var41 = var40.firstAvatarDecoration;
                var38.deco = var41;
                var41 = var40.firstProfileEffect;
                var38.pfx = var41;
                var40 = var40.firstNameplate;
                var38.nameplate = var40;
                var40 = 'large';
                var38.size = var40;
                var38 = var28.bind(var3)(var39, var38);
                var25.children = var38;
                var22 = var28.bind(var3)(var27, var25);
            case 1439:
                _fun76037_ip = 1502;
                continue _fun76037;
            case 1441:
                var28 = _closure1_slot11;
                var27 = _closure1_slot0;
                var38 = _closure1_slot2;
                var25 = 36;
                var25 = var38[var25];
                var25 = var27.bind(var3)(var25);
                var27 = var25.NameplatePreview;
                var25 = {};
                var25.user = var34;
                var38 = var35.items;
                var38 = var38[var36];
                var25.nameplate = var38;
                var25.animate = var37;
                var22 = var28.bind(var3)(var27, var25);
            case 1502:
                _fun76037_ip = 1569;
                continue _fun76037;
            case 1504:
                var28 = _closure1_slot11;
                var27 = _closure1_slot1;
                var37 = _closure1_slot2;
                var25 = 35;
                var25 = var37[var25];
                var27 = var27.bind(var3)(var25);
                var25 = {};
                var25.user = var34;
                var34 = var8.profilePreview;
                var25.style = var34;
                var34 = var35.items;
                var34 = var34[var36];
                var25.pendingProfileEffectRecord = var34;
                var25.bioLineClamp = var33;
                var22 = var28.bind(var3)(var27, var25);
            case 1569:
                _fun76037_ip = 1624;
                continue _fun76037;
            case 1571:
                var28 = _closure1_slot11;
                var27 = _closure1_slot1;
                var33 = _closure1_slot2;
                var25 = 34;
                var25 = var33[var25];
                var27 = var27.bind(var3)(var25);
                var25 = {};
                var25.item = var32;
                var25.size = var31;
                var25.avatarSource = var30;
                var29 = !var29;
                var25.animate = var29;
                var22 = var28.bind(var3)(var27, var25);
            case 1624:
                var16.children = var22;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var22 = _closure1_slot11;
                var18 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var10];
                var17 = var18.bind(var3)(var17);
                var18 = var17.View;
                var17 = {};
                var27 = var8.messages;
                var25 = new Array(2);
                var25[0] = var27;
                var25[1] = var26;
                var17.style = var25;
                if (!(var23 == var24)) {
                    _fun76037_ip = 1959;
                    continue _fun76037
                }
            case 1699:
                var26 = _closure1_slot12;
                var25 = _closure1_slot13;
                var23 = {};
                var30 = _closure1_slot11;
                var32 = _closure1_slot0;
                var36 = _closure1_slot2;
                var28 = 38;
                var27 = var36[var28];
                var27 = var32.bind(var3)(var27);
                var29 = var27.Text;
                var27 = {
                    'variant': 'heading-xl/bold',
                    'color': 'white'
                };
                var31 = var8.title;
                var27.style = var31;
                var31 = 13;
                var33 = var36[var31];
                var33 = var32.bind(var3)(var33);
                var38 = var33.intl;
                var37 = var38.format;
                var33 = var36[var31];
                var33 = var32.bind(var3)(var33);
                var33 = var33.t;
                var34 = var33.YNaxMp;
                var33 = {};
                var39 = var35.name;
                var33.itemName = var39;
                var33 = var37.bind(var38)(var34, var33);
                var27.children = var33;
                var29 = var30.bind(var3)(var29, var27);
                var27 = new Array(2);
                var27[0] = var29;
                var28 = var36[var28];
                var28 = var32.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {
                    'variant': 'text-md/medium',
                    'color': 'white'
                };
                var33 = var8.title;
                var28.style = var33;
                var33 = var36[var31];
                var33 = var32.bind(var3)(var33);
                var34 = var33.intl;
                var33 = var34.format;
                var31 = var36[var31];
                var31 = var32.bind(var3)(var31);
                var31 = var31.t;
                var32 = var31["4kp0AB"];
                var31 = {};
                var35 = var35.name;
                var31.itemName = var35;
                var31 = var33.bind(var34)(var32, var31);
                var28.children = var31;
                var28 = var30.bind(var3)(var29, var28);
                var27[1] = var28;
                var23.children = var27;
                var23 = var26.bind(var3)(var25, var23);
                _fun76037_ip = 1963;
                continue _fun76037;
            case 1959:
                var23 = var24.bind(var3)();
            case 1963:
                var17.children = var23;
                var17 = var22.bind(var3)(var18, var17);
                var16[1] = var17;
                var6.children = var16;
                var6 = var15.bind(var3)(var7, var6);
                var14[1] = var6;
                var7 = _closure1_slot11;
                var16 = _closure1_slot7;
                var15 = {};
                var6 = var8.footer;
                var15.style = var6;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var17 = 39;
                var17 = var5[var17];
                var18 = var6.bind(var3)(var17);
                var17 = {};
                var17.loading = var21;
                var17.onPress = var20;
                var19 = function() {
                    var3 = _closure1_slot11;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 38;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'text-md/semibold',
                        'color': 'white'
                    };
                    var4 = 13;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.MAS7uK;
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var17.text = var19;
                var19 = var8.cta;
                var17.style = var19;
                var17 = var7.bind(var3)(var18, var17);
                var15.children = var17;
                var15 = var7.bind(var3)(var16, var15);
                var14[2] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4[1] = var11;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var10 = var8.curtain;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.style = var8;
                var8 = 'none';
                var5.pointerEvents = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 852, 31, 27, 1298, 660, 33, 1297, 671, 3494, 9614, 4709, 4734, 1234, 3721, 4081, 4097, 3280, 4624, 9616, 3153, 4098, 9570, 9618, 566, 9619, 7013, 3345, 9620, 7888, 9623, 6955, 4736, 9624, 6984, 7031, 6991, 6971, 4878, 4875, 2]);