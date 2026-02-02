// modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 'center';
    var8.justifyContent = var11;
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingTop = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.container = var8;
    var8 = {
        'alignSelf': 'center',
        'width': 231,
        'height': 231,
        'borderRadius': null,
        'marginBottom': 16
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var3.img = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var3.header = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {};
    var8.textAlign = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginBottom = var11;
    var3.description = var8;
    var8 = {
        'tintColor': null,
        'width': 32,
        'height': 32,
        'marginTop': 4294967294,
        'marginLeft': 4294967280
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.tintColor = var11;
    var3.nitroWheel = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.gap = var9;
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/upsell_tooltip/native/PremiumUpsellTooltipActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92236: for (var _fun92236_ip = 0;;) switch (_fun92236_ip) {
            case 0:
                var0 = arg0;
                var27 = var0.title;
                var29 = var0.backdropProps;
                var22 = var0.description;
                var24 = var0.descriptionStyle;
                var11 = var0.imageSource;
                var15 = var0.imageStyle;
                var1 = var0.dismissibleContent;
                var _closure2_slot0 = var1;
                var16 = var0.primaryButtonText;
                var20 = var0.primaryButtonIcon;
                var18 = var0.secondaryButtonText;
                var1 = var0.onDismiss;
                var _closure2_slot1 = var1;
                var1 = var0.onPrimaryButtonPress;
                var _closure2_slot2 = var1;
                var0 = var0.onSecondaryButtonPress;
                var _closure2_slot3 = var0;
                var0 = _closure1_slot8;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var5 = function arg0() {
                    _fun92237: for (var _fun92237_ip = 0;;) switch (_fun92237_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = null;
                            var0 = var2 != var5;
                            if (!var0) {
                                _fun92237_ip = 29;
                                continue _fun92237
                            }
                        case 12:
                            var1 = _closure1_slot5;
                            var1 = var1.DISMISS;
                            var0 = var5 !== var1;
                        case 29:
                            if (var0) {
                                _fun92237_ip = 43;
                                continue _fun92237
                            }
                        case 32:
                            var1 = _closure2_slot1;
                            var0 = var2 == var1;
                        case 43:
                            if (var0) {
                                _fun92237_ip = 59;
                                continue _fun92237
                            }
                        case 46:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 59:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                            var2 = _closure2_slot0;
                            var1 = {};
                            var6 = true;
                            var1.forceTrack = var6;
                            var1.dismissAction = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var _closure2_slot4 = var5;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var6 = true;
                var0.startExpanded = var6;
                var30 = var0;
                var4 = copyDataProperties(var30, var29);
                var4 = 'onDismiss';
                var0[var4] = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = var19.container;
                var4.style = var7;
                var12 = null;
                var7 = var12 != var11;
                var8 = null;
                if (!var7) {
                    _fun92236_ip = 250;
                    continue _fun92236
                }
            case 208:
                var10 = _closure1_slot6;
                var9 = _closure1_slot3;
                var7 = {};
                var21 = var19.img;
                var14 = new Array(2);
                var14[0] = var21;
                var14[1] = var15;
                var7.style = var14;
                var7.source = var11;
                var8 = var10.bind(var3)(var9, var7);
            case 250:
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var21 = {};
                var8 = var19.header;
                var21.style = var8;
                var15 = _closure1_slot6;
                var14 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 8;
                var8 = var11[var8];
                var14 = var14.bind(var3)(var8);
                var8 = {};
                var23 = var19.nitroWheel;
                var8.style = var23;
                var8 = var15.bind(var3)(var14, var8);
                var23 = new Array(2);
                var23[0] = var8;
                var14 = _closure1_slot0;
                var8 = 9;
                var25 = var11[var8];
                var25 = var14.bind(var3)(var25);
                var26 = var25.Text;
                var25 = {
                    'variant': 'heading-xl/bold',
                    'style': null,
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var28 = var19.title;
                var25.style = var28;
                var25.children = var27;
                var25 = var15.bind(var3)(var26, var25);
                var23[1] = var25;
                var21.children = var23;
                var21 = var10.bind(var3)(var9, var21);
                var7[1] = var21;
                var8 = var11[var8];
                var8 = var14.bind(var3)(var8);
                var21 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var25 = var19.description;
                var23 = new Array(2);
                var23[0] = var25;
                var23[1] = var24;
                var8.style = var23;
                var8.children = var22;
                var8 = var15.bind(var3)(var21, var8);
                var7[2] = var8;
                var8 = {};
                var19 = var19.buttonContainer;
                var8.style = var19;
                var19 = 10;
                var11 = var11[var19];
                var11 = var14.bind(var3)(var11);
                var14 = var11.Button;
                var11 = {};
                var21 = 'active';
                var11.variant = var21;
                var11.text = var16;
                var16 = function() {
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 11;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.hideActionSheet;
                    var3 = var3.bind(var4)();
                    var2 = _closure2_slot4;
                    var1 = _closure1_slot5;
                    var1 = var1.PRIMARY;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var16;
                var21 = var12 == var20;
                var16 = undefined;
                if (var21) {
                    _fun92236_ip = 534;
                    continue _fun92236
                }
            case 530:
                var16 = var20.bind(var3)();
            case 534:
                var11.icon = var16;
                var16 = 'lg';
                var11.size = var16;
                var14 = var15.bind(var3)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = var12 != var18;
                var12 = null;
                if (!var14) {
                    _fun92236_ip = 631;
                    continue _fun92236
                }
            case 569:
                var15 = _closure1_slot6;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var19];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Button;
                var13 = {};
                var19 = 'secondary';
                var13.variant = var19;
                var13.text = var18;
                var17 = function() {
                    _fun92239: for (var _fun92239_ip = 0;;) switch (_fun92239_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun92239_ip = 23;
                                continue _fun92239
                            }
                        case 13:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 11;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.hideActionSheet;
                            var3 = var3.bind(var4)();
                            var2 = _closure2_slot4;
                            var1 = _closure1_slot5;
                            var1 = var1.DISMISS;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var13.onPress = var17;
                var13.size = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 631:
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1369, 33, 1297, 671, 3173, 4896, 6569, 3902, 4045, 3239, 2]);