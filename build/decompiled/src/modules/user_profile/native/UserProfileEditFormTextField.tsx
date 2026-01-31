// modules/user_profile/native/UserProfileEditFormTextField.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'width': '100%',
        'paddingVertical': 12
    };
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_STRONG;
    var8.borderColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.textField = var8;
    var8 = {};
    var9 = 6;
    var8.paddingRight = var9;
    var3.withClearButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEditFormTextField.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79857: for (var _fun79857_ip = 0;;) switch (_fun79857_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.label;
                var15 = var2.description;
                var5 = var2.errorMessage;
                var4 = var2.containerStyle;
                var9 = var2.clearButtonVisibility;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun79857_ip = 72;
                    continue _fun79857
                }
            case 37:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 4;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ClearButtonVisibility;
                var9 = var0.WITH_CONTENT;
            case 72:
                var6 = var2.multiline;
                var14 = var2.scrollTargetRef;
                var1 = {
                    'label': 0,
                    'description': 0,
                    'errorMessage': 0,
                    'containerStyle': 0,
                    'clearButtonVisibility': 0,
                    'multiline': 0,
                    'scrollTargetRef': 0
                };
                var18 = null;
                var19 = var1;
                var0 = silentSetPrototypeOf(var19, var18);
                var19 = {};
                var18 = var2;
                var17 = var1;
                var10 = copyDataProperties(var19, var18, var17);
                var1 = _closure1_slot4;
                var2 = var1.bind(var3)();
                var8 = _closure1_slot2;
                var1 = var8.useId;
                var13 = var1.bind(var8)();
                var1 = var2.textField;
                var8 = new Array(2);
                var8[0] = var1;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = 4;
                var1 = var12[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.ClearButtonVisibility;
                var11 = var1.NEVER;
                var1 = undefined;
                if (!(var9 !== var11)) {
                    _fun79857_ip = 210;
                    continue _fun79857
                }
            case 196:
                var11 = true;
                var1 = undefined;
                if (!(var11 !== var6)) {
                    _fun79857_ip = 210;
                    continue _fun79857
                }
            case 204:
                var1 = var2.withClearButton;
            case 210:
                var8[1] = var1;
                var2 = _closure1_slot3;
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 5;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.Input;
                var0 = {};
                var0.label = var7;
                var0.labelId = var13;
                var0.description = var15;
                var0.errorMessage = var5;
                var0.containerStyle = var4;
                var4 = 6;
                var4 = var12[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.FormInput;
                var4 = {};
                var19 = var4;
                var18 = var10;
                var10 = copyDataProperties(var19, var18);
                var10 = 'ref';
                var4[var10] = var14;
                var10 = 'accessibilityLabelledBy';
                var4[var10] = var13;
                var10 = 7;
                var10 = var12[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.isAndroid;
                var11 = var10.bind(var11)();
                var10 = undefined;
                if (var11) {
                    _fun79857_ip = 347;
                    continue _fun79857
                }
            case 344:
                var10 = var7;
            case 347:
                var7 = 'accessibilityLabel';
                var4[var7] = var10;
                var7 = 'clearButtonVisibility';
                var4[var7] = var9;
                var7 = 'multiline';
                var4[var7] = var6;
                var9 = false;
                var7 = 'showBorder';
                var4[var7] = var9;
                var7 = 'showTopContainer';
                var4[var7] = var9;
                var7 = 'style';
                var4[var7] = var8;
                var8 = 'center';
                if (!var6) {
                    _fun79857_ip = 414;
                    continue _fun79857
                }
            case 410:
                var8 = 'top';
            case 414:
                var7 = 'textAlignVertical';
                var4[var7] = var8;
                var7 = 'done';
                if (!var6) {
                    _fun79857_ip = 434;
                    continue _fun79857
                }
            case 430:
                var7 = 'default';
            case 434:
                var6 = 'returnKeyType';
                var4[var6] = var7;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 5369, 5351, 5340, 478, 2]);