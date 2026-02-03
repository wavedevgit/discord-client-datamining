// modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 12,
        'borderWidth': 2,
        'borderColor': 'transparent',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var12 = 12;
    var3.container = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_FEEDBACK_CRITICAL;
    var8.borderColor = var13;
    var8.padding = var12;
    var3.hasError = var8;
    var8 = {
        'overflow': 'hidden',
        'maxHeight': 100,
        'flex': 1,
        'padding': 0,
        'paddingTop': 0
    };
    var3.stringOptionInput = var8;
    var8 = {
        'fontSize': 16,
        'alignSelf': 'center'
    };
    var11 = var11.PRIMARY_MEDIUM;
    var8.fontFamily = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var8.color = var9;
    var3.inputText = var8;
    var8 = {};
    var9 = 8;
    var8.marginBottom = var9;
    var3.labelText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108129: for (var _fun108129_ip = 0;;) switch (_fun108129_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.style;
                var2 = var1.option;
                var _closure2_slot0 = var2;
                var2 = var1.onSelect;
                var _closure2_slot1 = var2;
                var2 = var1.onOpenAutocompleteSheet;
                var _closure2_slot2 = var2;
                var2 = var1.onDismissAutocompleteSheet;
                var _closure2_slot3 = var2;
                var2 = var1.channel;
                var _closure2_slot4 = var2;
                var2 = var1.activeCommand;
                var _closure2_slot5 = var2;
                var2 = var1.optionValues;
                var _closure2_slot6 = var2;
                var2 = var1.initialValue;
                var _closure2_slot7 = var2;
                var11 = var1.autoFocus;
                var9 = var1.hasError;
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var1 = function() { // Environment: var0
                    _fun108130: for (var _fun108130_ip = 0;;) switch (_fun108130_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun108130_ip = 47;
                                continue _fun108130
                            }
                        case 13:
                            var0 = _closure2_slot7;
                            var2 = var0.type;
                            var0 = 'text';
                            if (!(var0 === var2)) {
                                _fun108130_ip = 47;
                                continue _fun108130
                            }
                        case 30:
                            var0 = _closure2_slot7;
                            var2 = var0.text;
                            var0 = '';
                            if (!(var0 === var2)) {
                                _fun108130_ip = 51;
                                continue _fun108130
                            }
                        case 47:
                            var0 = undefined;
                            return var0;
                        case 51:
                            var0 = {};
                            var1 = _closure2_slot7;
                            var2 = var1.text;
                            var0.displayName = var2;
                            var2 = var1.text;
                            var0.name = var2;
                            var1 = var1.text;
                            var0.value = var1;
                            return var0;
                    }
                };
                var5 = var2.bind(var3)(var1);
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var8 = var2[var1];
                var _closure2_slot8 = var8;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot9 = var1;
                var1 = _closure1_slot6;
                var7 = var1.bind(var3)();
                var5 = function() {
                    _fun108131: for (var _fun108131_ip = 0;;) switch (_fun108131_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun108131_ip = 23;
                                continue _fun108131
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var4 = var2[var0];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var4);
                            var4 = var5.dismissGlobalKeyboard;
                            var4 = var4.bind(var5)();
                            var4 = _closure1_slot1;
                            var3 = 7;
                            var3 = var2[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = 9;
                            var3 = var2[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = 8;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var6.bind(var0)(var3, var2);
                            var2 = {};
                            var6 = _closure2_slot0;
                            var2.option = var6;
                            var6 = _closure2_slot8;
                            var2.initChoice = var6;
                            var6 = function arg0() {
                                var2 = arg0;
                                var3 = _closure2_slot9;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var0)(var2);
                                return var0;
                            };
                            var2.onChoiceSelect = var6;
                            var6 = _closure2_slot4;
                            var2.channel = var6;
                            var6 = _closure2_slot5;
                            var2.activeCommand = var6;
                            var6 = _closure2_slot3;
                            var2.onDismissAutocompleteSheet = var6;
                            var1 = _closure2_slot6;
                            var1 = var1.current;
                            var2.optionValues = var1;
                            var1 = 'AppLauncherAutocompleteActionSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useAnimationDelayedAutoFocus;
                var0 = var0.bind(var2)(var11, var5);
                var2 = _closure1_slot5;
                var0 = 11;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.onPress = var5;
                var10 = var7.container;
                var5 = new Array(3);
                var5[0] = var10;
                if (!var9) {
                    _fun108129_ip = 258;
                    continue _fun108129
                }
            case 252:
                var9 = var7.hasError;
            case 258:
                var5[1] = var9;
                var5[2] = var6;
                var0.style = var5;
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 12;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var9 = 'text-md/normal';
                var4.variant = var9;
                var7 = var7.inputText;
                var4.style = var7;
                var7 = null;
                var9 = var7 != var8;
                var7 = ' ';
                if (!var9) {
                    _fun108129_ip = 341;
                    continue _fun108129
                }
            case 336:
                var7 = var8.displayName;
            case 341:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 1297, 671, 1582, 3278, 13960, 1307, 13958, 4902, 3941, 2]);