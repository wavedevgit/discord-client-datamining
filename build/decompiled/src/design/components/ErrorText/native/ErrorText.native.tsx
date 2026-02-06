// design/components/ErrorText/native/ErrorText.native.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ErrorText/native/ErrorText.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.children;
        var5 = var1.style;
        var6 = _closure1_slot0;
        var9 = _closure1_slot1;
        var1 = 2;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var6.bind(var3)(var1);
        var1 = var2.getNodeText;
        var10 = var1.bind(var2)(var8);
        var _closure2_slot0 = var10;
        var7 = _closure1_slot2;
        var2 = var7.useEffect;
        var1 = new Array(1);
        var1[0] = var10;
        var0 = function() { // Environment: var0
            _fun48101: for (var _fun48101_ip = 0;;) switch (_fun48101_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun48101_ip = 28;
                        continue _fun48101
                    }
                case 16:
                    var3 = _closure2_slot0;
                    var2 = '';
                    var1 = var2 !== var3;
                case 28:
                    if (!var1) {
                        _fun48101_ip = 77;
                        continue _fun48101
                    }
                case 31:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.AccessibilityAnnouncer;
                    var1 = var2.announce;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 77:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var7)(var0, var1);
        var2 = _closure1_slot4;
        var0 = 4;
        var0 = var9[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.Stack;
        var0 = {
            'direction': 'horizontal',
            'spacing': 4,
            'align': 'flex-start'
        };
        var0.style = var5;
        var7 = _closure1_slot3;
        var4 = 5;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var5 = var4.CircleErrorIcon;
        var4 = {
            'size': 'xs',
            'color': 'text-feedback-critical'
        };
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 6;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-xs/medium',
            'color': 'text-feedback-critical'
        };
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ErrorText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3155, 3208, 4081, 5396, 3943, 2]);