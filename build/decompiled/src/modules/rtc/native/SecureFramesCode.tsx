// modules/rtc/native/SecureFramesCode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.chunks;
        var _closure2_slot0 = var7;
        var1 = var0.columns;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot8;
        var3 = undefined;
        var2 = var2.bind(var3)();
        var _closure2_slot2 = var2;
        var6 = _closure1_slot2;
        var5 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var1;
        var1 = function() { // Environment: var4
            _fun67000: for (var _fun67000_ip = 0;;) switch (_fun67000_ip) {
                case 0:
                    var0 = new Array(0);
                    var1 = global;
                    var3 = var1.Math;
                    var2 = var3.ceil;
                    var1 = _closure2_slot0;
                    var5 = var1.length;
                    var1 = _closure2_slot1;
                    var1 = var5 / var1;
                    var3 = var2.bind(var3)(var1);
                    var2 = 0;
                    var5 = var2 < var3;
                    var1 = 0;
                    if (!var5) {
                        _fun67000_ip = 125;
                        continue _fun67000
                    }
                case 54:
                    var6 = new Array(0);
                    var5 = _closure2_slot1;
                    var5 = var2 < var5;
                    var7 = 0;
                    if (!var5) {
                        _fun67000_ip = 108;
                        continue _fun67000
                    }
                case 71:
                    var5 = _closure2_slot1;
                    var8 = var1 * var5;
                    var10 = var8 + var7;
                    var9 = var6.push;
                    var8 = _closure2_slot0;
                    var8 = var8[var10];
                    var8 = var9.bind(var6)(var8);
                    var7 = var7 + 1;
                    if (var7 < var5) {
                        _fun67000_ip = 71;
                        continue _fun67000
                    }
                case 108:
                    var5 = var0.push;
                    var5 = var5.bind(var0)(var6);
                    var1 = var1 + 1;
                    if (var1 < var3) {
                        _fun67000_ip = 54;
                        continue _fun67000
                    }
                case 125:
                    return var0;
            }
        };
        var6 = var5.bind(var6)(var1, var2);
        var _closure2_slot3 = var6;
        var2 = _closure1_slot5;
        var1 = _closure1_slot7;
        var0 = {};
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            _fun67001: for (var _fun67001_ip = 0;;) switch (_fun67001_ip) {
                case 0:
                    var6 = arg0;
                    var8 = arg1;
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var5 = _closure1_slot5;
                    var0 = {};
                    var1 = _closure2_slot2;
                    var1 = var1.row;
                    var0.style = var1;
                    var9 = var6.map;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var8 = arg0;
                        var4 = _closure1_slot5;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 6;
                        var0 = var2[var0];
                        var3 = undefined;
                        var0 = var1.bind(var3)(var0);
                        var2 = var0.Text;
                        var1 = {
                            'style': null,
                            'variant': 'text-md/normal',
                            'color': 'text-default'
                        };
                        var0 = _closure2_slot2;
                        var0 = var0.codeText;
                        var1.style = var0;
                        var1.children = var8;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var7 = var0.concat;
                        var6 = '';
                        var5 = '-';
                        var0 = arg1;
                        var0 = var7.bind(var6)(var8, var5, var0);
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var1 = var9.bind(var6)(var1);
                    var0.children = var1;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3, var0);
                    var0 = new Array(2);
                    var0[0] = var5;
                    var5 = _closure2_slot3;
                    var9 = var5.length;
                    var5 = 1;
                    var5 = var9 - var5;
                    var5 = var8 < var5;
                    if (!var5) {
                        _fun67001_ip = 134;
                        continue _fun67001
                    }
                case 104:
                    var10 = _closure1_slot5;
                    var9 = _closure1_slot4;
                    var7 = {};
                    var11 = _closure2_slot2;
                    var11 = var11.divider;
                    var7.style = var11;
                    var5 = var10.bind(var1)(var9, var7);
                case 134:
                    var0[1] = var5;
                    var2.children = var0;
                    var5 = var6.join;
                    var0 = ' ';
                    var7 = var5.bind(var6)(var0);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '';
                    var0 = '-';
                    var0 = var6.bind(var5)(var7, var0, var8);
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = var11.CODE_NORMAL;
    var8.fontFamily = var11;
    var3.codeText = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'paddingVertical': 8
    };
    var3.row = var8;
    var8 = {};
    var8.height = var9;
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var3.divider = var8;
    var8 = {
        'backgroundColor': null,
        'borderTopRightRadius': null,
        'borderTopLeftRadius': null,
        'paddingVertical': 10,
        'paddingHorizontal': 16,
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderTopRightRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderTopLeftRadius = var11;
    var3.codeHeader = var8;
    var8 = {
        'backgroundColor': null,
        'paddingVertical': 8,
        'paddingHorizontal': 16
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderBottomRightRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderBottomLeftRadius = var9;
    var3.code = var8;
    var8 = {};
    var9 = 126;
    var8.minHeight = var9;
    var3.loading = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/native/SecureFramesCode.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67003: for (var _fun67003_ip = 0;;) switch (_fun67003_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.title;
                var7 = var0.trailing;
                var13 = var0.chunks;
                var12 = var0.columns;
                var0 = _closure1_slot8;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = _closure1_slot7;
                var0 = {};
                var5 = _closure1_slot4;
                var4 = {};
                var6 = var14.codeHeader;
                var4.style = var6;
                var10 = _closure1_slot5;
                var8 = _closure1_slot0;
                var15 = _closure1_slot1;
                var6 = 6;
                var6 = var15[var6];
                var6 = var8.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-md/semibold'
                };
                var6.children = var11;
                var8 = var10.bind(var3)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var14.code;
                var5.style = var8;
                var8 = null;
                if (!(var8 == var13)) {
                    _fun67003_ip = 201;
                    continue _fun67003
                }
            case 173:
                var11 = _closure1_slot5;
                var10 = _closure1_slot3;
                var8 = {};
                var14 = var14.loading;
                var8.style = var14;
                var8 = var11.bind(var3)(var10, var8);
                _fun67003_ip = 227;
                continue _fun67003;
            case 201:
                var11 = _closure1_slot5;
                var10 = _closure1_slot9;
                var9 = {};
                var9.chunks = var13;
                var9.columns = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 227:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 671, 3941, 2]);