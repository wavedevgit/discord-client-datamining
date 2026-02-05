// uikit-native/refresh/freeform-input/FreeFormInputGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var9.marginBottom = var10;
    var3.label = var9;
    var9 = {
        'flexGrow': 1,
        'marginBottom': 8
    };
    var3.input = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.error = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.hint = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun51677: for (var _fun51677_ip = 0;;) switch (_fun51677_ip) {
            case 0:
                var5 = arg0;
                var16 = var5.style;
                var14 = var5.label;
                var13 = var5.error;
                var15 = var5.value;
                var12 = var5.hint;
                var19 = var5.textStyle;
                var2 = var5.enableAndroidSanitizedInputWorkaround;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun51677_ip = 49;
                    continue _fun51677
                }
            case 47:
                var2 = false;
            case 49:
                var6 = var5.secureTextEntry;
                var1 = var5.keyboardType;
                var22 = var5.accessibilityLabel;
                var4 = {
                    'style': 0,
                    'label': 0,
                    'error': 0,
                    'value': 0,
                    'hint': 0,
                    'textStyle': 0,
                    'enableAndroidSanitizedInputWorkaround': 0,
                    'secureTextEntry': 0,
                    'keyboardType': 0,
                    'accessibilityLabel': 0
                };
                var9 = null;
                var27 = var4;
                var26 = null;
                var0 = silentSetPrototypeOf(var27, var26);
                var27 = {};
                var26 = var5;
                var25 = var4;
                var4 = copyDataProperties(var27, var26, var25);
                var5 = _closure1_slot7;
                var18 = var5.bind(var3)();
                var5 = var2;
                if (!var5) {
                    _fun51677_ip = 150;
                    continue _fun51677
                }
            case 120:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 4;
                var7 = var10[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.isAndroid;
                var5 = var7.bind(var8)();
            case 150:
                if (var5) {
                    _fun51677_ip = 156;
                    continue _fun51677
                }
            case 153:
                var5 = var6;
            case 156:
                if (!var2) {
                    _fun51677_ip = 198;
                    continue _fun51677
                }
            case 159:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.isAndroid;
                var2 = var2.bind(var6)();
                var6 = 'visible-password';
                if (var2) {
                    _fun51677_ip = 201;
                    continue _fun51677
                }
            case 198:
                var6 = var1;
            case 201:
                var7 = _closure1_slot3;
                var2 = var7.useContext;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 5;
                var1 = var10[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.RedesignCompatContext;
                var1 = var2.bind(var7)(var1);
                var2 = var7.useId;
                var21 = var2.bind(var7)();
                if (var1) {
                    _fun51677_ip = 679;
                    continue _fun51677
                }
            case 258:
                var7 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var1.style = var16;
                var8 = var9 != var14;
                var10 = null;
                if (!var8) {
                    _fun51677_ip = 331;
                    continue _fun51677
                }
            case 281:
                var17 = _closure1_slot5;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var8 = 8;
                var8 = var20[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var20 = var18.label;
                var8.style = var20;
                var8.nativeID = var21;
                var8.children = var14;
                var10 = var17.bind(var3)(var11, var8);
            case 331:
                var8 = new Array(4);
                var8[0] = var10;
                var17 = _closure1_slot5;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var10 = 9;
                var10 = var20[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var27 = var10;
                var26 = var4;
                var20 = copyDataProperties(var27, var26);
                if (!(var9 == var22)) {
                    _fun51677_ip = 424;
                    continue _fun51677
                }
            case 379:
                if (!(var9 != var14)) {
                    _fun51677_ip = 418;
                    continue _fun51677
                }
            case 383:
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 4;
                var20 = var24[var20];
                var23 = var23.bind(var3)(var20);
                var20 = var23.isAndroid;
                var23 = var20.bind(var23)();
                var20 = undefined;
                if (var23) {
                    _fun51677_ip = 421;
                    continue _fun51677
                }
            case 418:
                var20 = var14;
            case 421:
                var22 = var20;
            case 424:
                var20 = 'accessibilityLabel';
                var10[var20] = var22;
                var20 = 'accessibilityLabelledBy';
                var10[var20] = var21;
                var21 = var9 != var13;
                var20 = 'error';
                var10[var20] = var21;
                var21 = arg1;
                var20 = 'ref';
                var10[var20] = var21;
                var20 = 'value';
                var10[var20] = var15;
                var20 = 'secureTextEntry';
                var10[var20] = var5;
                var20 = 'keyboardType';
                var10[var20] = var6;
                var21 = var18.input;
                var20 = new Array(2);
                var20[0] = var21;
                var20[1] = var19;
                var19 = 'style';
                var10[var19] = var20;
                var10 = var17.bind(var3)(var11, var10);
                var8[1] = var10;
                var11 = var9 != var13;
                var10 = null;
                if (!var11) {
                    _fun51677_ip = 585;
                    continue _fun51677
                }
            case 540:
                var19 = _closure1_slot5;
                var17 = _closure1_slot1;
                var20 = _closure1_slot2;
                var11 = 10;
                var11 = var20[var11];
                var17 = var17.bind(var3)(var11);
                var11 = {};
                var20 = var18.error;
                var11.style = var20;
                var11.children = var13;
                var10 = var19.bind(var3)(var17, var11);
            case 585:
                var8[2] = var10;
                var10 = var9 != var12;
                var9 = null;
                if (!var10) {
                    _fun51677_ip = 663;
                    continue _fun51677
                }
            case 598:
                var17 = _closure1_slot5;
                var11 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 11;
                var10 = var19[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var18 = var18.hint;
                var10.style = var18;
                var10.children = var12;
                var9 = var17.bind(var3)(var11, var10);
            case 663:
                var8[3] = var9;
                var1.children = var8;
                var1 = var7.bind(var3)(var2, var1);
                return var1;
            case 679:
                var11 = var4.placeholder;
                var7 = var4.onChangeText;
                var8 = var4.clearButtonVisibility;
                var2 = _closure1_slot5;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 6;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.TextInput;
                var0 = {};
                var0.containerStyle = var16;
                var0.value = var15;
                var0.label = var14;
                var0.errorMessage = var13;
                var0.description = var12;
                var0.placeholder = var11;
                var0.onChange = var7;
                var7 = 7;
                var7 = var10[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.ClearButtonVisibility;
                var7 = var7.WITH_CONTENT;
                var7 = var8 !== var7;
                var0.isClearable = var7;
                var0.keyboardType = var6;
                var0.secureTextEntry = var5;
                var4 = var4.autoCapitalize;
                var0.autoCapitalize = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/freeform-input/FreeFormInputGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 478, 4899, 5405, 5411, 5887, 5888, 5890, 3941, 2]);