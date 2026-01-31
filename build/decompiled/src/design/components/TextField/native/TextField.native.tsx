// design/components/TextField/native/TextField.native.tsx
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
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun47973: for (var _fun47973_ip = 0;;) switch (_fun47973_ip) {
            case 0:
                var7 = arg0;
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useTextField;
                var1 = arg1;
                var1 = var4.bind(var5)(var7, var1);
                var8 = var1.innerRef;
                var4 = var1.inputProps;
                var5 = var1.state;
                var1 = 3;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useInputClearButtonConfig;
                var2 = var1.bind(var2)(var7, var5);
                var1 = null;
                var1 = var1 != var2;
                var6 = undefined;
                if (!var1) {
                    _fun47973_ip = 121;
                    continue _fun47973
                }
            case 95:
                var1 = {};
                var5 = var2.content;
                var1.trailing = var5;
                var2 = var2.pressableProps;
                var1.trailingPressableProps = var2;
                var6 = var1;
            case 121:
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 4;
                var2 = var9[var2];
                var5 = var1.bind(var3)(var2);
                var2 = var5.useInputAttachments;
                var2 = var2.bind(var5)(var7, var6);
                var7 = var2.leading;
                var6 = var2.trailing;
                var5 = var2.inputStyle;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BaseTextField;
                var0 = {};
                var11 = var0;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = 'ref';
                var0[var4] = var8;
                var4 = 'leading';
                var0[var4] = var7;
                var4 = 'trailing';
                var0[var4] = var6;
                var4 = 'inputStyle';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TextField/native/TextField.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.TextField = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5359, 5365, 5366, 5368, 2]);