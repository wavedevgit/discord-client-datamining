// design/components/TextInput/native/GhostInput.native.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        _fun88318: for (var _fun88318_ip = 0;;) switch (_fun88318_ip) {
            case 0:
                var6 = arguments[0];
                var4 = arguments[1];
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun88318_ip = 16;
                    continue _fun88318
                }
            case 12:
                var6 = 'lg';
            case 16:
                if (!(var4 === var5)) {
                    _fun88318_ip = 24;
                    continue _fun88318
                }
            case 20:
                var4 = 'default';
            case 24:
                var0 = {};
                var1 = {};
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 3;
                var10 = var9[var7];
                var10 = var8.bind(var5)(var10);
                var10 = var10.TextStyleSheet;
                var10 = var10["text-md/semibold"];
                var3.md = var10;
                var7 = var9[var7];
                var7 = var8.bind(var5)(var7);
                var7 = var7.TextStyleSheet;
                var7 = var7["text-lg/semibold"];
                var3.lg = var7;
                var11 = var3[var6];
                var12 = var1;
                var3 = copyDataProperties(var12, var11);
                var3 = 'error';
                if (!(var3 !== var4)) {
                    _fun88318_ip = 150;
                    continue _fun88318
                }
            case 117:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.colors;
                var3 = var3.TEXT_DEFAULT;
                _fun88318_ip = 181;
                continue _fun88318;
            case 150:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.colors;
                var3 = var2.TEXT_FEEDBACK_CRITICAL;
            case 181:
                var2 = 'color';
                var1[var2] = var3;
                var3 = 48;
                var2 = 'minWidth';
                var1[var2] = var3;
                var0.input = var1;
                var1 = {};
                var2 = 'center';
                var1.alignItems = var2;
                var0.centeredContainerStyle = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TextInput/native/GhostInput.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88319: for (var _fun88319_ip = 0;;) switch (_fun88319_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.useInputStyles;
                var0 = {};
                var6 = var5.size;
                var0.size = var6;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot4;
                var1 = var5.size;
                var0 = var5.status;
                var9 = var2.bind(var3)(var1, var0);
                var0 = var5.isCentered;
                var12 = var3 === var0;
                if (var12) {
                    _fun88319_ip = 86;
                    continue _fun88319
                }
            case 83:
                var12 = var0;
            case 86:
                var0 = var5.autoFocus;
                var8 = var3 === var0;
                if (var8) {
                    _fun88319_ip = 102;
                    continue _fun88319
                }
            case 99:
                var8 = var0;
            case 102:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useTextField;
                var0 = var0.bind(var2)(var5, var3);
                var11 = var0.innerRef;
                var10 = var0.inputProps;
                var2 = _closure1_slot3;
                var0 = 7;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Input;
                var0 = {};
                var14 = var0;
                var13 = var5;
                var6 = copyDataProperties(var14, var13);
                var5 = var5.containerStyle;
                var6 = new Array(2);
                var6[0] = var5;
                var5 = undefined;
                if (!var12) {
                    _fun88319_ip = 205;
                    continue _fun88319
                }
            case 199:
                var5 = var9.centeredContainerStyle;
            case 205:
                var6[1] = var5;
                var5 = 'containerStyle';
                var0[var5] = var6;
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 8;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.NativeTextInput;
                var4 = {};
                var14 = var4;
                var13 = var10;
                var10 = copyDataProperties(var14, var13);
                var10 = 'ref';
                var4[var10] = var11;
                var9 = var9.input;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = 'style';
                var4[var9] = var10;
                var7 = var7.placeholderText;
                var9 = var7.color;
                var7 = 'placeholderTextColor';
                var4[var7] = var9;
                var9 = false;
                var7 = 'spellCheck';
                var4[var7] = var9;
                var7 = 'autoFocus';
                var4[var7] = var8;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GhostInput = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 3943, 671, 5400, 5402, 5394, 5403, 2]);