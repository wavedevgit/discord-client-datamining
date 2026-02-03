// modules/a11y/native/TextWithIOSLinkWorkaround.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var1 = _closure1_slot2;
        var3 = var1.Children;
        var2 = var3.toArray;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var1 = var2.filter;
        var0 = _closure1_slot2;
        var0 = var0.isValidElement;
        var2 = var1.bind(var2)(var0);
        var1 = var2.flatMap;
        var0 = function(arg0) { // Environment: var0
            _fun47618: for (var _fun47618_ip = 0;;) switch (_fun47618_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 4;
                    var0 = var4[var0];
                    var4 = undefined;
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.I18nLinkComponent;
                    if (!(var2 !== var0)) {
                        _fun47618_ip = 81;
                        continue _fun47618
                    }
                case 43:
                    var2 = var1.props;
                    var5 = var2.children;
                    var0 = null;
                    if (!(var0 == var5)) {
                        _fun47618_ip = 65;
                        continue _fun47618
                    }
                case 59:
                    var0 = new Array(0);
                    _fun47618_ip = 79;
                    continue _fun47618;
                case 65:
                    var3 = _closure1_slot7;
                    var2 = var2.children;
                    var0 = var3.bind(var4)(var2);
                case 79:
                    return var0;
                case 81:
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'flexShrink': 1
    };
    var3.column = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/TextWithIOSLinkWorkaround.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47619: for (var _fun47619_ip = 0;;) switch (_fun47619_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.children;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.children = var0;
                var13 = {};
                var12 = var3;
                var11 = var1;
                var12 = copyDataProperties(var13, var12, var11);
                var1 = _closure1_slot6;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 5;
                var1 = var8[var1];
                var5 = var7.bind(var3)(var1);
                var1 = var5.useIsScreenReaderEnabled;
                var1 = var1.bind(var5)();
                var9 = _closure1_slot4;
                var5 = 6;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var13 = var5;
                var10 = copyDataProperties(var13, var12);
                var10 = 'children';
                var5[var10] = var2;
                var6 = var9.bind(var3)(var6, var5);
                var5 = 7;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.isIOS;
                var5 = var5.bind(var7)();
                if (!var5) {
                    _fun47619_ip = 147;
                    continue _fun47619
                }
            case 144:
                if (var1) {
                    _fun47619_ip = 149;
                    continue _fun47619
                }
            case 147:
                return var6;
            case 149:
                var1 = _closure1_slot7;
                var5 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.column;
                var0.style = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TextWithIOSLinkWorkaround = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 1296, 4061, 3932, 478, 2]);