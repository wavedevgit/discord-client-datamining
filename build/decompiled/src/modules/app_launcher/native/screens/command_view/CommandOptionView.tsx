// modules/app_launcher/native/screens/command_view/CommandOptionView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot5 = var7;
    var6 = var6.jsxs;
    var _closure1_slot6 = var6;
    var8 = var3.Set;
    var6 = 4;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationCommandOptionType;
    var7 = var3.STRING;
    var3 = new Array(9);
    var3[0] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.INTEGER;
    var3[1] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.ATTACHMENT;
    var3[2] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.BOOLEAN;
    var3[3] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.MENTIONABLE;
    var3[4] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.USER;
    var3[5] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.ROLE;
    var3[6] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.CHANNEL;
    var3[7] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.NUMBER;
    var3[8] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var15 = var7;
    var14 = var3;
    var3 = new var15[var8](var14, var13);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.marginTop = var6;
    var3.optionDescription = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 4
    };
    var3.optionErrorContainer = var9;
    var9 = {
        'marginRight': 4,
        'tintColor': null,
        'alignItems': 'center'
    };
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.ICON_FEEDBACK_CRITICAL;
    var9.tintColor = var10;
    var3.optionErrorIcon = var9;
    var9 = {};
    var10 = 8;
    var9.marginBottom = var10;
    var3.labelText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var5[var6];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationCommandOptionType;
    var7 = var3.STRING;
    var3 = new Array(3);
    var3[0] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var7 = var7.INTEGER;
    var3[1] = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ApplicationCommandOptionType;
    var6 = var6.NUMBER;
    var3[2] = var6;
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/command_view/CommandOptionView.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108136: for (var _fun108136_ip = 0;;) switch (_fun108136_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.style;
                var20 = var0.option;
                var _closure2_slot0 = var20;
                var27 = var0.autoFocusType;
                var31 = var0.onDismiss;
                var2 = var0.editedOptions;
                var1 = var0.onOptionViewLayout;
                var _closure2_slot1 = var1;
                var33 = var0.onStartEditing;
                var32 = var0.onEndEditing;
                var30 = var0.onOptionValueChange;
                var1 = var0.onPressOption;
                var _closure2_slot2 = var1;
                var1 = var0.onPressAttachmentOption;
                var _closure2_slot3 = var1;
                var28 = var0.channel;
                var21 = var0.optionValidationResults;
                var1 = var0.setFocusedOption;
                var _closure2_slot4 = var1;
                var26 = var0.command;
                var24 = var0.optionValues;
                var0 = var0.isPreSelectedOption;
                var1 = _closure1_slot8;
                var3 = undefined;
                var25 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var6 = var4.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var29
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var1);
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = 8;
                var1 = var1[var13];
                var1 = var5.bind(var3)(var1);
                var1 = var1.ReduceMotion;
                if (var4) {
                    _fun108136_ip = 225;
                    continue _fun108136
                }
            case 217:
                var5 = var1.Never;
                _fun108136_ip = 231;
                continue _fun108136;
            case 225:
                var5 = var1.Always;
            case 231:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 9;
                var1 = var1[var10];
                var4 = var4.bind(var3)(var1);
                var1 = var4.useOptionEnteringAnimation;
                var1 = var1.bind(var4)();
                var15 = var1.EnteringAnimation;
                var6 = var1.registerAnimationCompleteCallback;
                var7 = _closure1_slot7;
                var4 = var7.has;
                var1 = var20.type;
                var1 = var4.bind(var7)(var1);
                if (var1) {
                    _fun108136_ip = 299;
                    continue _fun108136
                }
            case 295:
                var1 = null;
                return var1;
            case 299:
                var4 = var20.required;
                if (var4) {
                    _fun108136_ip = 311;
                    continue _fun108136
                }
            case 308:
                var4 = var0;
            case 311:
                if (!var4) {
                    _fun108136_ip = 321;
                    continue _fun108136
                }
            case 314:
                var6 = function(arg0) { // Environment: var29
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
            case 321:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = var0[var13];
                var7 = var1.bind(var3)(var7);
                var8 = var7.FadeOut;
                var7 = var8.reduceMotion;
                var16 = var7.bind(var8)(var5);
                var0 = var0[var13];
                var0 = var1.bind(var3)(var0);
                var7 = var0.FadeInUp;
                var1 = var7.withInitialValues;
                var0 = {};
                var9 = {};
                var8 = -10;
                var9.translateY = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var0.transform = var8;
                var1 = var1.bind(var7)(var0);
                var0 = var1.reduceMotion;
                var19 = var0.bind(var1)(var5);
                var1 = var2.has;
                var0 = var20.name;
                var12 = var1.bind(var2)(var0);
                if (!var12) {
                    _fun108136_ip = 466;
                    continue _fun108136
                }
            case 437:
                var0 = var20.name;
                var2 = var21[var0];
                var1 = null;
                var5 = var1 == var2;
                var0 = undefined;
                if (var5) {
                    _fun108136_ip = 462;
                    continue _fun108136
                }
            case 457:
                var0 = var2.error;
            case 462:
                var12 = var1 != var0;
            case 466:
                var2 = _closure1_slot9;
                var1 = var2.includes;
                var0 = var20.type;
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = var8[var13];
                var0 = var9.bind(var3)(var0);
                var1 = var0.LayoutAnimationConfig;
                var0 = {};
                var0.skipEntering = var4;
                var4 = 10;
                var4 = var8[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.AwaitAnimationContext;
                var4 = {};
                var4.handleQueuedCallback = var6;
                var7 = _closure1_slot1;
                var6 = var8[var13];
                var6 = var7.bind(var3)(var6);
                var7 = var6.View;
                var6 = {};
                var23 = false;
                var6.collapsable = var23;
                var6.entering = var15;
                var15 = var8[var10];
                var15 = var9.bind(var3)(var15);
                var15 = var15.ExitingAnimation;
                var6.exiting = var15;
                var8 = var8[var10];
                var8 = var9.bind(var3)(var8);
                var8 = var8.LayoutAnimation;
                var6.layout = var8;
                var8 = function arg0() {
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var1, var2);
                    return var0;
                };
                var6.onLayout = var8;
                var10 = _closure1_slot6;
                var9 = _closure1_slot3;
                var8 = {};
                var8.collapsable = var23;
                var8.style = var14;
                var14 = var11;
                if (!var14) {
                    _fun108136_ip = 723;
                    continue _fun108136
                }
            case 653:
                var17 = _closure1_slot5;
                var15 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 11;
                var11 = var22[var11];
                var11 = var15.bind(var3)(var11);
                var15 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var22 = var25.labelText;
                var11.style = var22;
                var22 = var20.displayName;
                var11.children = var22;
                var14 = var17.bind(var3)(var15, var11);
            case 723:
                var11 = new Array(4);
                var11[0] = var14;
                var17 = _closure1_slot5;
                var22 = _closure1_slot1;
                var14 = _closure1_slot2;
                var15 = 12;
                var15 = var14[var15];
                var22 = var22.bind(var3)(var15);
                var15 = {};
                var15.option = var20;
                var15.onStartEditing = var33;
                var15.onEndEditing = var32;
                var15.onDismiss = var31;
                var15.onOptionValueChange = var30;
                var30 = function() {
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onFocus = var30;
                var30 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPress = var30;
                var29 = function() {
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPressAttachmentOption = var29;
                var15.channel = var28;
                var15.autoFocusType = var27;
                var15.command = var26;
                var15.optionValues = var24;
                var15.hasError = var12;
                var15 = var17.bind(var3)(var22, var15);
                var11[1] = var15;
                var15 = _closure1_slot0;
                var22 = 11;
                var14 = var14[var22];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var24 = var25.optionDescription;
                var14.style = var24;
                var24 = var20.displayDescription;
                var14.children = var24;
                var14 = var17.bind(var3)(var15, var14);
                var11[2] = var14;
                if (!var12) {
                    _fun108136_ip = 1130;
                    continue _fun108136
                }
            case 924:
                var15 = _closure1_slot6;
                var26 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = var17[var13];
                var13 = var26.bind(var3)(var13);
                var14 = var13.View;
                var13 = {};
                var13.collapsable = var23;
                var13.entering = var19;
                var13.exiting = var16;
                var16 = var25.optionErrorContainer;
                var13.style = var16;
                var19 = _closure1_slot5;
                var24 = 13;
                var16 = var17[var24];
                var23 = var26.bind(var3)(var16);
                var16 = {};
                var25 = var25.optionErrorIcon;
                var16.style = var25;
                var25 = 14;
                var25 = var17[var25];
                var25 = var26.bind(var3)(var25);
                var16.source = var25;
                var18 = _closure1_slot0;
                var24 = var17[var24];
                var24 = var18.bind(var3)(var24);
                var24 = var24.IconSizes;
                var24 = var24.REFRESH_SMALL_16;
                var16.size = var24;
                var23 = var19.bind(var3)(var23, var16);
                var16 = new Array(2);
                var16[0] = var23;
                var17 = var17[var22];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-critical'
                };
                var20 = var20.name;
                var20 = var21[var20];
                var20 = var20.error;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1130:
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var6.children = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1645, 1297, 671, 566, 3720, 13976, 13977, 3941, 13978, 4086, 9419, 2]);