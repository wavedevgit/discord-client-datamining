// design/components/TextField/native/BaseTextField.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot2 = var7;
    var3 = var3.jsxs;
    var _closure1_slot3 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun48099: for (var _fun48099_ip = 0;;) switch (_fun48099_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 3;
                var1 = var5[var0];
                var3 = undefined;
                var8 = var2.bind(var3)(var1);
                var7 = var8.useInputStyles;
                var1 = {};
                var9 = var4.size;
                var1.size = var9;
                var9 = var4.isRound;
                var1.isRound = var9;
                var9 = var4.leadingIcon;
                var10 = null;
                var9 = var10 != var9;
                var1.hasLeadingIcon = var9;
                var9 = var7.bind(var8)(var1);
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useFocus;
                var1 = var1.bind(var2)();
                var12 = var1.focusProps;
                var7 = var1.isFocused;
                var1 = var4.enableAndroidSanitizedInputWorkaround;
                if (!var1) {
                    _fun48099_ip = 294;
                    continue _fun48099
                }
            case 124:
                var8 = var4.secureTextEntry;
                var5 = var4.keyboardType;
                var13 = var4.autoComplete;
                if (!(var8 === var3)) {
                    _fun48099_ip = 148;
                    continue _fun48099
                }
            case 146:
                var8 = false;
            case 148:
                if (!(var5 === var3)) {
                    _fun48099_ip = 156;
                    continue _fun48099
                }
            case 152:
                var5 = 'default';
            case 156:
                var1 = {};
                var14 = _closure1_slot0;
                var2 = _closure1_slot1;
                var11 = 2;
                var2 = var2[var11];
                var14 = var14.bind(var3)(var2);
                var2 = var14.isAndroid;
                var14 = var2.bind(var14)();
                var2 = 'off';
                if (var14) {
                    _fun48099_ip = 198;
                    continue _fun48099
                }
            case 195:
                var2 = var13;
            case 198:
                var1.autoComplete = var2;
                var13 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var11];
                var13 = var13.bind(var3)(var2);
                var2 = var13.isAndroid;
                var2 = var2.bind(var13)();
                var13 = !var2;
                var2 = !var13;
                if (!var13) {
                    _fun48099_ip = 242;
                    continue _fun48099
                }
            case 239:
                var2 = var8;
            case 242:
                var1.secureTextEntry = var2;
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var11];
                var8 = var8.bind(var3)(var2);
                var2 = var8.isAndroid;
                var8 = var2.bind(var8)();
                var2 = 'visible-password';
                if (var8) {
                    _fun48099_ip = 286;
                    continue _fun48099
                }
            case 283:
                var2 = var5;
            case 286:
                var1.keyboardType = var2;
                var10 = var1;
            case 294:
                var2 = _closure1_slot3;
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var0 = var13[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.InputFieldContainer;
                var0 = {};
                var16 = var0;
                var15 = var4;
                var5 = copyDataProperties(var16, var15);
                var5 = 'isFocused';
                var0[var5] = var7;
                var7 = var4.leading;
                var5 = new Array(3);
                var5[0] = var7;
                var8 = _closure1_slot2;
                var6 = 5;
                var6 = var13[var6];
                var6 = var11.bind(var3)(var6);
                var7 = var6.NativeTextInput;
                var6 = {};
                var16 = var6;
                var15 = var10;
                var10 = copyDataProperties(var16, var15);
                var10 = 6;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = var11.mergeProps;
                var15 = var10.bind(var11)(var4, var12);
                var16 = var6;
                var10 = copyDataProperties(var16, var15);
                var11 = arg1;
                var10 = 'ref';
                var6[var10] = var11;
                var10 = var9.padding;
                var11 = new Array(3);
                var11[0] = var10;
                var10 = var9.text;
                var11[1] = var10;
                var10 = var4.inputStyle;
                var11[2] = var10;
                var10 = 'style';
                var6[var10] = var11;
                var9 = var9.placeholderText;
                var10 = var9.color;
                var9 = 'placeholderTextColor';
                var6[var9] = var10;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4 = var4.trailing;
                var5[2] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TextField/native/BaseTextField.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BaseTextField = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 478, 5390, 3147, 5393, 3146, 2]);