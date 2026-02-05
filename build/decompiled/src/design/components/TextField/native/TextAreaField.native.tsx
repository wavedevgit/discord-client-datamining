// design/components/TextField/native/TextAreaField.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun48104: for (var _fun48104_ip = 0;;) switch (_fun48104_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = null;
                var3 = var1 == var5;
                var2 = 'text-muted';
                var0 = var2;
                if (var3) {
                    _fun48104_ip = 75;
                    continue _fun48104
                }
            case 24:
                var1 = var1 == var4;
                var0 = var2;
                if (var1) {
                    _fun48104_ip = 75;
                    continue _fun48104
                }
            case 34:
                var1 = 0;
                var3 = var4 <= var1;
                var1 = 'text-feedback-critical';
                if (var3) {
                    _fun48104_ip = 72;
                    continue _fun48104
                }
            case 49:
                var3 = 9;
                var3 = var5 / var3;
                var3 = var4 < var3;
                if (!var3) {
                    _fun48104_ip = 69;
                    continue _fun48104
                }
            case 63:
                var2 = 'text-feedback-warning';
            case 69:
                var1 = var2;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 128,
        'textAlignVertical': 'top'
    };
    var3.area = var9;
    var9 = {};
    var10 = 'absolute';
    var9.position = var10;
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.bottom = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.right = var10;
    var3.maxLengthIndicator = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun48105: for (var _fun48105_ip = 0;;) switch (_fun48105_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var1 = var2[var0];
                var3 = undefined;
                var7 = var4.bind(var3)(var1);
                var6 = var7.useInputStyles;
                var1 = {
                    'size': 'lg',
                    'isRound': false
                };
                var8 = var5.isDisabled;
                var1.isDisabled = var8;
                var8 = var6.bind(var7)(var1);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)();
                var13 = var5.maxLength;
                var1 = 6;
                var1 = var2[var1];
                var7 = var4.bind(var3)(var1);
                var6 = var7.useTextField;
                var1 = arg1;
                var1 = var6.bind(var7)(var5, var1);
                var17 = var1.inputProps;
                var14 = var1.innerRef;
                var1 = var1.state;
                var18 = 7;
                var2 = var2[var18];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useFocus;
                var2 = var2.bind(var4)();
                var16 = var2.focusProps;
                var6 = var2.isFocused;
                var4 = null;
                var2 = var4 != var13;
                var11 = undefined;
                if (!var2) {
                    _fun48105_ip = 181;
                    continue _fun48105
                }
            case 167:
                var1 = var1.value;
                var1 = var1.length;
                var11 = var13 - var1;
            case 181:
                var2 = _closure1_slot4;
                var15 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = var10[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.InputFieldContainer;
                var0 = {};
                var20 = var0;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var5 = 'isFocused';
                var0[var5] = var6;
                var7 = _closure1_slot3;
                var5 = 8;
                var5 = var10[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.NativeTextInput;
                var5 = {};
                var10 = var10[var18];
                var15 = var15.bind(var3)(var10);
                var10 = var15.mergeProps;
                var19 = var10.bind(var15)(var17, var16);
                var20 = var5;
                var10 = copyDataProperties(var20, var19);
                var10 = 'ref';
                var5[var10] = var14;
                var10 = var8.padding;
                var14 = new Array(3);
                var14[0] = var10;
                var10 = var8.text;
                var14[1] = var10;
                var10 = var9.area;
                var14[2] = var10;
                var10 = 'style';
                var5[var10] = var14;
                var8 = var8.placeholderText;
                var10 = var8.color;
                var8 = 'placeholderTextColor';
                var5[var8] = var10;
                var10 = true;
                var8 = 'multiline';
                var5[var8] = var10;
                var6 = var7.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var4 = null;
                if (!(var4 != var11)) {
                    _fun48105_ip = 473;
                    continue _fun48105
                }
            case 382:
                var8 = _closure1_slot3;
                var7 = _closure1_slot2;
                var6 = {};
                var9 = var9.maxLengthIndicator;
                var6.style = var9;
                var10 = _closure1_slot0;
                var14 = _closure1_slot1;
                var9 = 9;
                var9 = var14[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {};
                var14 = 'text-xs/semibold';
                var9.variant = var14;
                var12 = _closure1_slot6;
                var12 = var12.bind(var3)(var13, var11);
                var9.color = var12;
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var4 = var8.bind(var3)(var7, var6);
            case 473:
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TextField/native/TextAreaField.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.TextAreaField = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5399, 5401, 3153, 5402, 3941, 2]);