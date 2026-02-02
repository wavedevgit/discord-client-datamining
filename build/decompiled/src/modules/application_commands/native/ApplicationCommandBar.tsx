// modules/application_commands/native/ApplicationCommandBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var12 = 0;
    var3 = var5[var12];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var6 = var5[var13];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var15 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var14 = 4;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var9 = 6;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_700_LIGHT_PRIMARY_230;
    var8.backgroundColor = var10;
    var3.applicationCommandBar = var8;
    var8 = {
        'width': 24,
        'height': 24,
        'borderRadius': null,
        'marginRight': 16
    };
    var10 = 7;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var8.borderRadius = var16;
    var3.applicationIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 16,
        'paddingVertical': 8
    };
    var3.applicationTopWrapperScrollView = var8;
    var8 = {
        'textAlignVertical': 'center',
        'marginRight': 12
    };
    var3.applicationName = var8;
    var8 = {
        'width': null,
        'marginVertical': 8,
        'marginHorizontal': 12,
        'backgroundColor': null,
        'height': '100%'
    };
    var15 = var15.hairlineWidth;
    var8.width = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var15;
    var3.applicationOptionalOptionsDivider = var8;
    var8 = {};
    var8.marginLeft = var14;
    var3.applicationOptionalOptionsDividerWithNoRequired = var8;
    var8 = {
        'marginHorizontal': 4,
        'paddingVertical': 8
    };
    var3.applicationOptionalOptionsIndicator = var8;
    var8 = {};
    var8.flexShrink = var13;
    var3.applicationDescriptionContainer = var8;
    var8 = {};
    var8.marginLeft = var12;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    var8.backgroundColor = var12;
    var3.applicationDescriptionDivider = var8;
    var8 = {
        'marginHorizontal': 4,
        'padding': 8,
        'fontSize': 12,
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var4.bind(var0)(var12);
    var12 = var12.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    var8.backgroundColor = var12;
    var3.applicationCommandOption = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var8.color = var12;
    var3.applicationCommandOptionText = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var8.backgroundColor = var12;
    var3.activeCommandOption = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8.color = var12;
    var3.activeCommandOptionText = var8;
    var8 = {};
    var12 = 0.5;
    var8.opacity = var12;
    var3.completeCommandOptionText = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_CRITICAL;
    var8.color = var12;
    var3.errorCommandOptionText = var8;
    var8 = {
        'overflow': 'hidden',
        'paddingHorizontal': 16,
        'paddingVertical': 8,
        'flexDirection': 'row'
    };
    var3.optionDescriptionContainer = var8;
    var8 = {};
    var12 = 10;
    var8.marginLeft = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.descriptionEllipsis = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var8.backgroundColor = var10;
    var3.descriptionEllipsisDots = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.DARK_PRIMARY_660_LIGHT_PRIMARY_300;
    var8.backgroundColor = var9;
    var3.completeCommandOption = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun90091: for (var _fun90091_ip = 0;;) switch (_fun90091_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.option;
                var11 = var2.optionState;
                var13 = null;
                var1 = Object.create(var13);
                var0 = 0;
                var1.option = var0;
                var1.optionState = var0;
                var19 = {};
                var18 = var2;
                var17 = var1;
                var5 = copyDataProperties(var19, var18, var17);
                var0 = _closure1_slot11;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = var13 == var11;
                var0 = undefined;
                if (var1) {
                    _fun90091_ip = 72;
                    continue _fun90091
                }
            case 66:
                var0 = var11.isActive;
            case 72:
                var9 = var13 != var0;
                if (!var9) {
                    _fun90091_ip = 82;
                    continue _fun90091
                }
            case 79:
                var9 = var0;
            case 82:
                var2 = _closure1_slot8;
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 8;
                var0 = var15[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = 9;
                var12 = var15[var6];
                var12 = var8.bind(var3)(var12);
                var14 = var12.intl;
                var12 = var14.formatToPlainString;
                var6 = var15[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.evoEHc;
                var6 = {};
                var15 = var7.displayName;
                var6.optionName = var15;
                var6 = var12.bind(var14)(var8, var6);
                var0.accessibilityLabel = var6;
                var6 = 'button';
                var0.accessibilityRole = var6;
                var0.disabled = var9;
                var8 = var10.applicationCommandOption;
                var6 = new Array(3);
                var6[0] = var8;
                var8 = var9;
                if (!var9) {
                    _fun90091_ip = 218;
                    continue _fun90091
                }
            case 212:
                var8 = var10.activeCommandOption;
            case 218:
                var6[1] = var8;
                var8 = !var9;
                if (!var8) {
                    _fun90091_ip = 261;
                    continue _fun90091
                }
            case 228:
                var14 = var13 == var11;
                var12 = undefined;
                if (var14) {
                    _fun90091_ip = 258;
                    continue _fun90091
                }
            case 237:
                var14 = var11.lastValidationResult;
                var15 = var13 == var14;
                var12 = undefined;
                if (var15) {
                    _fun90091_ip = 258;
                    continue _fun90091
                }
            case 252:
                var12 = var14.success;
            case 258:
                var8 = var12;
            case 261:
                if (!var8) {
                    _fun90091_ip = 270;
                    continue _fun90091
                }
            case 264:
                var8 = var10.completeCommandOption;
            case 270:
                var6[2] = var8;
                var0.style = var6;
                var19 = var0;
                var18 = var5;
                var5 = copyDataProperties(var19, var18);
                var6 = _closure1_slot8;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 10;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LegacyText;
                var4 = {};
                var12 = var10.applicationCommandOptionText;
                var8 = new Array(4);
                var8[0] = var12;
                var12 = var9;
                if (!var12) {
                    _fun90091_ip = 346;
                    continue _fun90091
                }
            case 340:
                var12 = var10.activeCommandOptionText;
            case 346:
                var8[1] = var12;
                var12 = !var9;
                if (!var12) {
                    _fun90091_ip = 389;
                    continue _fun90091
                }
            case 356:
                var15 = var13 == var11;
                var14 = undefined;
                if (var15) {
                    _fun90091_ip = 386;
                    continue _fun90091
                }
            case 365:
                var15 = var11.lastValidationResult;
                var16 = var13 == var15;
                var14 = undefined;
                if (var16) {
                    _fun90091_ip = 386;
                    continue _fun90091
                }
            case 380:
                var14 = var15.success;
            case 386:
                var12 = var14;
            case 389:
                if (!var12) {
                    _fun90091_ip = 398;
                    continue _fun90091
                }
            case 392:
                var12 = var10.completeCommandOptionText;
            case 398:
                var8[2] = var12;
                var9 = !var9;
                if (!var9) {
                    _fun90091_ip = 444;
                    continue _fun90091
                }
            case 408:
                var14 = var13 == var11;
                var12 = undefined;
                if (var14) {
                    _fun90091_ip = 438;
                    continue _fun90091
                }
            case 417:
                var11 = var11.lastValidationResult;
                var13 = var13 == var11;
                var12 = undefined;
                if (var13) {
                    _fun90091_ip = 438;
                    continue _fun90091
                }
            case 432:
                var12 = var11.success;
            case 438:
                var11 = false;
                var9 = var11 === var12;
            case 444:
                if (!var9) {
                    _fun90091_ip = 453;
                    continue _fun90091
                }
            case 447:
                var9 = var10.errorCommandOptionText;
            case 453:
                var8[3] = var9;
                var4.style = var8;
                var8 = 1;
                var4.numberOfLines = var8;
                var7 = var7.displayName;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function arg0() {
        _fun90092: for (var _fun90092_ip = 0;;) switch (_fun90092_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.command;
                var20 = var0.option;
                var _closure2_slot0 = var20;
                var17 = var0.optionState;
                var0 = _closure1_slot11;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 16;
                var0 = var5[var2];
                var0 = var4.bind(var3)(var0);
                var7 = var0.bind(var3)(var20);
                var _closure2_slot1 = var7;
                var6 = _closure1_slot4;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var3);
                var14 = _closure1_slot3;
                var13 = 2;
                var8 = var14.bind(var3)(var0, var13);
                var10 = 0;
                var19 = var8[var10];
                var _closure2_slot2 = var19;
                var0 = 1;
                var8 = var8[var0];
                var _closure2_slot3 = var8;
                var8 = var6.useState;
                var8 = var8.bind(var6)(var10);
                var8 = var14.bind(var3)(var8, var13);
                var11 = var8[var10];
                var _closure2_slot4 = var11;
                var8 = var8[var0];
                var _closure2_slot5 = var8;
                var8 = var6.useState;
                var8 = var8.bind(var6)(var10);
                var8 = var14.bind(var3)(var8, var13);
                var10 = var8[var10];
                var8 = var8[var0];
                var _closure2_slot6 = var8;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)(var11);
                var _closure2_slot7 = var2;
                var5 = var6.useEffect;
                var4 = new Array(4);
                var4[0] = var7;
                var4[1] = var20;
                var4[2] = var11;
                var4[3] = var2;
                var2 = function() { // Environment: var1
                    _fun90093: for (var _fun90093_ip = 0;;) switch (_fun90093_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            if (!(var2 === var1)) {
                                _fun90093_ip = 55;
                                continue _fun90093
                            }
                        case 15:
                            var1 = _closure2_slot4;
                            var3 = 0;
                            var1 = var1 > var3;
                            if (!var1) {
                                _fun90093_ip = 36;
                                continue _fun90093
                            }
                        case 28:
                            var2 = _closure2_slot7;
                            var1 = var3 === var2;
                        case 36:
                            if (!var1) {
                                _fun90093_ip = 86;
                                continue _fun90093
                            }
                        case 39:
                            var3 = _closure2_slot3;
                            var2 = undefined;
                            var1 = 1;
                            var1 = var3.bind(var2)(var1);
                            _fun90093_ip = 86;
                            continue _fun90093;
                        case 55:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var3 = 0;
                            var2 = var2.bind(var1)(var3);
                            var2 = _closure2_slot6;
                            var2 = var2.bind(var1)(var3);
                            var0 = _closure2_slot3;
                            var0 = var0.bind(var1)(var1);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var4);
                var5 = var6.useCallback;
                var4 = new Array(1);
                var4[0] = var19;
                var2 = function() { // Environment: var1
                    _fun90094: for (var _fun90094_ip = 0;;) switch (_fun90094_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var1 = 1;
                            if (!(var1 === var0)) {
                                _fun90094_ip = 20;
                                continue _fun90094
                            }
                        case 18:
                            var1 = undefined;
                        case 20:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var2, var4);
                var18 = function arg0() {
                    _fun90095: for (var _fun90095_ip = 0;;) switch (_fun90095_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var0 = global;
                            var1 = var0.Math;
                            var0 = var1.trunc;
                            var2 = var0.bind(var1)(var2);
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var3 = var0 === var3;
                            if (var3) {
                                _fun90095_ip = 63;
                                continue _fun90095
                            }
                        case 55:
                            var4 = _closure2_slot4;
                            var3 = var2 > var4;
                        case 63:
                            if (!var3) {
                                _fun90095_ip = 75;
                                continue _fun90095
                            }
                        case 66:
                            var3 = _closure2_slot5;
                            var3 = var3.bind(var0)(var2);
                        case 75:
                            var1 = _closure2_slot6;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var5 = var0 === var19;
                if (!var5) {
                    _fun90092_ip = 277;
                    continue _fun90092
                }
            case 273:
                var5 = var10 === var11;
            case 277:
                var6 = 'button';
                if (!var5) {
                    _fun90092_ip = 288;
                    continue _fun90092
                }
            case 284:
                var6 = 'text';
            case 288:
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.accessibilityRole = var6;
                var0.disabled = var5;
                var0.onPress = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var12.optionDescriptionContainer;
                var4.style = var7;
                var7 = {};
                var8 = var12.applicationDescriptionContainer;
                var7.style = var8;
                var8 = null;
                var14 = var8 == var17;
                var13 = undefined;
                if (var14) {
                    _fun90092_ip = 395;
                    continue _fun90092
                }
            case 375:
                var14 = var17.lastValidationResult;
                var15 = var8 == var14;
                var13 = undefined;
                if (var15) {
                    _fun90092_ip = 395;
                    continue _fun90092
                }
            case 390:
                var13 = var14.error;
            case 395:
                if (!(var8 == var13)) {
                    _fun90092_ip = 488;
                    continue _fun90092
                }
            case 399:
                var15 = _closure1_slot8;
                var14 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = 14;
                var13 = var21[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var13.lineClamp = var19;
                var13.onLayout = var18;
                var21 = 'text-sm/medium';
                var13.variant = var21;
                var21 = 'mobile-text-heading-primary';
                var13.color = var21;
                if (!(var8 == var20)) {
                    _fun90092_ip = 470;
                    continue _fun90092
                }
            case 462:
                var16 = var16.displayDescription;
                _fun90092_ip = 476;
                continue _fun90092;
            case 470:
                var16 = var20.displayDescription;
            case 476:
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                _fun90092_ip = 568;
                continue _fun90092;
            case 488:
                var16 = _closure1_slot8;
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 14;
                var14 = var20[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {};
                var14.lineClamp = var19;
                var14.onLayout = var18;
                var18 = 'text-sm/medium';
                var14.variant = var18;
                var18 = 'text-feedback-critical';
                var14.color = var18;
                var17 = var17.lastValidationResult;
                var17 = var17.error;
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 568:
                var7.children = var13;
                var13 = var2.bind(var3)(var5, var7);
                var7 = new Array(2);
                var7[0] = var13;
                var8 = null;
                if (!(var10 !== var11)) {
                    _fun90092_ip = 645;
                    continue _fun90092
                }
            case 592:
                var11 = _closure1_slot8;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 17;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var12.descriptionEllipsis;
                var9.style = var13;
                var12 = var12.descriptionEllipsisDots;
                var9.dotStyle = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 645:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/native/ApplicationCommandBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90096: for (var _fun90096_ip = 0;;) switch (_fun90096_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.command;
                var _closure2_slot0 = var14;
                var7 = var0.section;
                var _closure2_slot1 = var7;
                var1 = var0.guildId;
                var _closure2_slot2 = var1;
                var13 = var0.currentOption;
                var _closure2_slot3 = var13;
                var1 = var0.optionStates;
                var _closure2_slot4 = var1;
                var0 = var0.onPressOption;
                var _closure2_slot5 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var _closure2_slot6 = var8;
                var5 = _closure1_slot4;
                var0 = var5.useRef;
                var17 = null;
                var6 = var0.bind(var5)(var17);
                var _closure2_slot7 = var6;
                var2 = var5.useRef;
                var0 = {};
                var0 = var2.bind(var5)(var0);
                var _closure2_slot8 = var0;
                var0 = var5.useState;
                var15 = false;
                var0 = var0.bind(var5)(var15);
                var12 = _closure1_slot3;
                var11 = 2;
                var2 = var12.bind(var3)(var0, var11);
                var0 = 0;
                var9 = var2[var0];
                var4 = 1;
                var2 = var2[var4];
                var _closure2_slot9 = var2;
                var2 = var5.useState;
                var2 = var2.bind(var5)(var15);
                var2 = var12.bind(var3)(var2, var11);
                var23 = var2[var0];
                var2 = var2[var4];
                var _closure2_slot10 = var2;
                var2 = var5.useState;
                var2 = var2.bind(var5)();
                var2 = var12.bind(var3)(var2, var11);
                var0 = var2[var0];
                var _closure2_slot11 = var0;
                var2 = var2[var4];
                var _closure2_slot12 = var2;
                var11 = var5.useEffect;
                var4 = new Array(1);
                var4[0] = var14;
                var2 = function() { // Environment: var18
                    _fun90097: for (var _fun90097_ip = 0;;) switch (_fun90097_ip) {
                        case 0:
                            var0 = false;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var0;
                            var0 = _closure2_slot0;
                            var4 = var0.options;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun90097_ip = 47;
                                continue _fun90097
                            }
                        case 30:
                            var3 = var4.forEach;
                            var0 = function(arg0) { // Environment: var1
                                _fun90098: for (var _fun90098_ip = 0;;) switch (_fun90098_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.required;
                                        var1 = true;
                                        if (!(var1 === var0)) {
                                            _fun90098_ip = 24;
                                            continue _fun90098
                                        }
                                    case 15:
                                        _closure3_slot1 = var1;
                                        _fun90098_ip = 31;
                                        continue _fun90098;
                                    case 24:
                                        _closure3_slot0 = var1;
                                    case 31:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var3.bind(var4)(var0);
                        case 47:
                            var4 = _closure2_slot9;
                            var3 = _closure3_slot0;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure2_slot10;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var2 = var11.bind(var5)(var2, var4);
                var11 = var5.useEffect;
                var4 = new Array(1);
                var4[0] = var13;
                var2 = function() { // Environment: var18
                    _fun90099: for (var _fun90099_ip = 0;;) switch (_fun90099_ip) {
                        case 0:
                            var2 = _closure2_slot12;
                            var1 = _closure2_slot3;
                            var0 = null;
                            var4 = var0 == var1;
                            var0 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun90099_ip = 33;
                                continue _fun90099
                            }
                        case 24:
                            var3 = _closure2_slot3;
                            var1 = var3.name;
                        case 33:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var2 = var11.bind(var5)(var2, var4);
                var4 = var5.useEffect;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var8;
                var0 = function() { // Environment: var18
                    _fun90100: for (var _fun90100_ip = 0;;) switch (_fun90100_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var0 = null;
                            var1 = var0 != var1;
                            var4 = null;
                            if (!var1) {
                                _fun90100_ip = 35;
                                continue _fun90100
                            }
                        case 18:
                            var1 = _closure2_slot8;
                            var2 = var1.current;
                            var1 = _closure2_slot11;
                            var4 = var2[var1];
                        case 35:
                            if (!(var0 != var4)) {
                                _fun90100_ip = 100;
                                continue _fun90100
                            }
                        case 39:
                            var1 = _closure2_slot7;
                            var2 = var1.current;
                            if (!(var0 != var2)) {
                                _fun90100_ip = 100;
                                continue _fun90100
                            }
                        case 52:
                            var1 = var2.scrollTo;
                            var0 = {};
                            var4 = var4.x;
                            var3 = _closure2_slot6;
                            var3 = var3.applicationTopWrapperScrollView;
                            var3 = var3.paddingHorizontal;
                            var3 = var4 - var3;
                            var0.x = var3;
                            var3 = true;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                        case 100:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var2);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var11 = var2.bind(var3)(var0);
                var4 = var11.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var18
                    _fun90101: for (var _fun90101_ip = 0;;) switch (_fun90101_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun90101_ip = 40;
                                continue _fun90101
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var3 = var2 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun90101_ip = 36;
                                continue _fun90101
                            }
                        case 26:
                            var3 = _closure2_slot1;
                            var1 = var3.botId;
                        case 36:
                            if (!(var2 == var1)) {
                                _fun90101_ip = 44;
                                continue _fun90101
                            }
                        case 40:
                            var1 = undefined;
                            return var1;
                        case 44:
                            var3 = _closure1_slot7;
                            var2 = var3.getMember;
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot1;
                            var0 = var0.botId;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var4.bind(var11)(var2, var0);
                var _closure2_slot13 = var0;
                var4 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var0;
                var0 = function() { // Environment: var18
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getApplicationCommandsIconSource;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot13;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var16 = var4.bind(var5)(var0, var2);
                var4 = var5.useCallback;
                var2 = function(arg0, arg1) { // Environment: var18
                    var0 = arg0;
                    var4 = var0.nativeEvent;
                    var1 = _closure2_slot8;
                    var0 = var1.current;
                    var2 = arg1;
                    var3 = var2.name;
                    var2 = {};
                    var5 = var4.layout;
                    var5 = var5.x;
                    var2.x = var5;
                    var4 = var4.layout;
                    var4 = var4.width;
                    var2.width = var4;
                    var0[var3] = var2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var5)(var2, var0);
                var _closure2_slot14 = var0;
                var2 = var17 == var13;
                var0 = undefined;
                if (var2) {
                    _fun90096_ip = 423;
                    continue _fun90096
                }
            case 418:
                var0 = var13.name;
            case 423:
                var0 = var17 != var0;
                var12 = undefined;
                if (!var0) {
                    _fun90096_ip = 450;
                    continue _fun90096
                }
            case 432:
                var2 = var17 == var13;
                var0 = undefined;
                if (var2) {
                    _fun90096_ip = 446;
                    continue _fun90096
                }
            case 441:
                var0 = var13.name;
            case 446:
                var12 = var1[var0];
            case 450:
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var8.applicationCommandBar;
                var0.style = var4;
                var5 = _closure1_slot6;
                var4 = {
                    'ref': null,
                    'contentContainerStyle': null,
                    'keyboardShouldPersistTaps': 'always',
                    'showsHorizontalScrollIndicator': false,
                    'horizontal': true
                };
                var4.ref = var6;
                var6 = var8.applicationTopWrapperScrollView;
                var4.contentContainerStyle = var6;
                var7 = var17 != var16;
                if (!var7) {
                    _fun90096_ip = 559;
                    continue _fun90096
                }
            case 513:
                var15 = _closure1_slot8;
                var11 = _closure1_slot1;
                var19 = _closure1_slot2;
                var6 = 13;
                var6 = var19[var6];
                var11 = var11.bind(var3)(var6);
                var6 = {};
                var19 = var8.applicationIcon;
                var6.style = var19;
                var6.source = var16;
                var7 = var15.bind(var3)(var11, var6);
            case 559:
                var6 = new Array(4);
                var6[0] = var7;
                var15 = _closure1_slot8;
                var11 = _closure1_slot0;
                var7 = _closure1_slot2;
                var19 = 14;
                var7 = var7[var19];
                var7 = var11.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var8.applicationName;
                var7.style = var16;
                var20 = var14.displayName;
                var16 = '/ ';
                var16 = var16 + var20;
                var7.children = var16;
                var7 = var15.bind(var3)(var11, var7);
                var6[1] = var7;
                var16 = var14.options;
                var11 = var17 == var16;
                var7 = undefined;
                if (var11) {
                    _fun90096_ip = 682;
                    continue _fun90096
                }
            case 665:
                var15 = var16.map;
                var11 = function(arg0) { // Environment: var18
                    _fun90104: for (var _fun90104_ip = 0;;) switch (_fun90104_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = var1.required;
                            var0 = null;
                            if (!var3) {
                                _fun90104_ip = 96;
                                continue _fun90104
                            }
                        case 20:
                            var5 = _closure1_slot8;
                            var4 = _closure1_slot12;
                            var3 = {};
                            var3.option = var1;
                            var6 = function() {
                                _fun90105: for (var _fun90105_ip = 0;;) switch (_fun90105_ip) {
                                    case 0:
                                        var2 = _closure2_slot5;
                                        var0 = null;
                                        var2 = var0 == var2;
                                        var3 = undefined;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun90105_ip = 36;
                                            continue _fun90105
                                        }
                                    case 20:
                                        var2 = _closure2_slot5;
                                        var1 = _closure3_slot0;
                                        var0 = var2.bind(var3)(var1);
                                    case 36:
                                        return var0;
                                }
                            };
                            var3.onPress = var6;
                            var7 = _closure2_slot4;
                            var6 = var1.name;
                            var6 = var7[var6];
                            var3.optionState = var6;
                            var2 = function arg0() {
                                var3 = _closure2_slot14;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var3.onLayout = var2;
                            var2 = var1.name;
                            var1 = undefined;
                            var0 = var5.bind(var1)(var4, var3, var2);
                        case 96:
                            return var0;
                    }
                };
                var7 = var15.bind(var16)(var11);
            case 682:
                var6[2] = var7;
                var7 = null;
                if (!var9) {
                    _fun90096_ip = 922;
                    continue _fun90096
                }
            case 694:
                var15 = _closure1_slot10;
                var11 = _closure1_slot9;
                var9 = {};
                var21 = _closure1_slot8;
                var20 = _closure1_slot5;
                var16 = {};
                var24 = var8.applicationOptionalOptionsDivider;
                var22 = new Array(2);
                var22[0] = var24;
                var23 = !var23;
                if (!var23) {
                    _fun90096_ip = 740;
                    continue _fun90096
                }
            case 734:
                var23 = var8.applicationOptionalOptionsDividerWithNoRequired;
            case 740:
                var22[1] = var23;
                var16.style = var22;
                var20 = var21.bind(var3)(var20, var16);
                var16 = new Array(3);
                var16[0] = var20;
                var21 = _closure1_slot8;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var19 = var26[var19];
                var19 = var25.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'eyebrow',
                    'color': 'text-muted'
                };
                var22 = var8.applicationOptionalOptionsIndicator;
                var19.style = var22;
                var22 = 9;
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.U19GM3;
                var22 = var23.bind(var24)(var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var16[1] = var19;
                var20 = var14.options;
                var19 = var17 == var20;
                var17 = undefined;
                if (var19) {
                    _fun90096_ip = 908;
                    continue _fun90096
                }
            case 891:
                var19 = var20.map;
                var18 = function(arg0) { // Environment: var18
                    _fun90107: for (var _fun90107_ip = 0;;) switch (_fun90107_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = var1.required;
                            var0 = null;
                            if (var3) {
                                _fun90107_ip = 96;
                                continue _fun90107
                            }
                        case 20:
                            var5 = _closure1_slot8;
                            var4 = _closure1_slot12;
                            var3 = {};
                            var3.option = var1;
                            var6 = function() {
                                var2 = _closure2_slot5;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var3.onPress = var6;
                            var7 = _closure2_slot4;
                            var6 = var1.name;
                            var6 = var7[var6];
                            var3.optionState = var6;
                            var2 = function arg0() {
                                var3 = _closure2_slot14;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var3.onLayout = var2;
                            var2 = var1.name;
                            var1 = undefined;
                            var0 = var5.bind(var1)(var4, var3, var2);
                        case 96:
                            return var0;
                    }
                };
                var17 = var19.bind(var20)(var18);
            case 908:
                var16[2] = var17;
                var9.children = var16;
                var7 = var15.bind(var3)(var11, var9);
            case 922:
                var6[3] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 15;
                var11 = var9[var5];
                var11 = var6.bind(var3)(var11);
                var15 = var11.FormDivider;
                var11 = {};
                var16 = var8.applicationDescriptionDivider;
                var11.style = var16;
                var11 = var7.bind(var3)(var15, var11);
                var4[1] = var11;
                var11 = _closure1_slot13;
                var10 = {};
                var10.command = var14;
                var10.option = var13;
                var10.optionState = var12;
                var10 = var7.bind(var3)(var11, var10);
                var4[2] = var10;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormDivider;
                var5 = {};
                var8 = var8.applicationDescriptionDivider;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1672, 33, 1297, 4837, 671, 4867, 1234, 4841, 566, 9584, 4669, 3902, 5342, 5270, 11670, 2]);