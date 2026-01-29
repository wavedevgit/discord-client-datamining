// design/components/TableRow/native/TableRowGroup.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0) { // Original name: TableRowGroupTitle, environment: var1
        var0 = arg0;
        var4 = var0.title;
        var1 = _closure1_slot7;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 5;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'accessibilityRole': 'header',
            'variant': 'text-sm/semibold',
            'color': 'text-default'
        };
        var5 = var5.title;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var10 = 0;
    var7 = var6[var10];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.Fragment;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9.flexShrink = var10;
    var4.container = var9;
    var9 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'flexGrow': 1,
        'flexShrink': 0,
        'padding': 0
    };
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var4.content = var9;
    var9 = {};
    var12 = 8;
    var9.marginBottom = var12;
    var4.title = var9;
    var9 = {};
    var9.marginBottom = var12;
    var4.description = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9.borderBottomLeftRadius = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.none;
    var9.borderBottomRightRadius = var10;
    var4.hasTrailingText = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TableRow/native/TableRowGroup.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.TableRowGroupTitle = var3;
    var1 = function(arg0) { // Original name: TableRowGroup, environment: var1
        _fun47758: for (var _fun47758_ip = 0;;) switch (_fun47758_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.children;
                var18 = var2.title;
                var19 = var2.description;
                var1 = var2.hasIcons;
                var17 = var2.hasTrailingText;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun47758_ip = 40;
                    continue _fun47758
                }
            case 38:
                var17 = false;
            case 40:
                var13 = var2.accessibilityRole;
                if (!(var13 === var3)) {
                    _fun47758_ip = 53;
                    continue _fun47758
                }
            case 49:
                var13 = 'none';
            case 53:
                var12 = var2.accessibilityLabel;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var2 = _closure1_slot7;
                var16 = var2.bind(var3)();
                _closure2_slot0 = var1;
                var1 = false;
                _closure2_slot1 = var1;
                var1 = _closure1_slot2;
                var2 = var1.Children;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun47759: for (var _fun47759_ip = 0;;) switch (_fun47759_ip) {
                        case 0:
                            var7 = arg0;
                            var2 = null;
                            var1 = var2 == var7;
                            var0 = null;
                            if (var1) {
                                _fun47759_ip = 218;
                                continue _fun47759
                            }
                        case 17:
                            var1 = _closure2_slot0;
                            var1 = var2 == var1;
                            if (!var1) {
                                _fun47759_ip = 49;
                                continue _fun47759
                            }
                        case 31:
                            var4 = _closure1_slot2;
                            var3 = var4.isValidElement;
                            var1 = var3.bind(var4)(var7);
                        case 49:
                            if (!var1) {
                                _fun47759_ip = 92;
                                continue _fun47759
                            }
                        case 52:
                            var4 = var7.type;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 6;
                            var5 = var5[var3];
                            var3 = undefined;
                            var3 = var6.bind(var3)(var5);
                            var3 = var3.TableRow;
                            var1 = var4 === var3;
                        case 92:
                            if (!var1) {
                                _fun47759_ip = 113;
                                continue _fun47759
                            }
                        case 95:
                            var1 = var7.props;
                            var1 = var1.icon;
                            var1 = var2 != var1;
                            _closure2_slot0 = var1;
                        case 113:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun47759_ip = 131;
                                continue _fun47759
                            }
                        case 120:
                            var1 = true;
                            _closure2_slot1 = var1;
                            var1 = var7;
                            _fun47759_ip = 215;
                            continue _fun47759;
                        case 131:
                            var5 = _closure1_slot6;
                            var4 = _closure1_slot5;
                            var3 = {};
                            var9 = _closure1_slot4;
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 7;
                            var6 = var6[var2];
                            var2 = undefined;
                            var6 = var8.bind(var2)(var6);
                            var8 = var6.TableRowDivider;
                            var6 = {};
                            var10 = _closure2_slot0;
                            var6.adjustSpacingForIcon = var10;
                            var8 = var9.bind(var2)(var8, var6);
                            var6 = new Array(2);
                            var6[0] = var8;
                            var6[1] = var7;
                            var3.children = var6;
                            var1 = var5.bind(var2)(var4, var3);
                        case 215:
                            var0 = var1;
                        case 218:
                            return var0;
                    }
                };
                var11 = var1.bind(var2)(var4, var0);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.TableRowGroupContext;
                var1 = var0.Provider;
                var0 = {};
                var4 = true;
                var0.value = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var16.container;
                var4.style = var7;
                var15 = null;
                var9 = var15 != var18;
                if (!var9) {
                    _fun47758_ip = 205;
                    continue _fun47758
                }
            case 185:
                var14 = _closure1_slot4;
                var10 = _closure1_slot8;
                var7 = {};
                var7.title = var18;
                var9 = var14.bind(var3)(var10, var7);
            case 205:
                var7 = new Array(3);
                var7[0] = var9;
                var9 = var15 != var19;
                if (!var9) {
                    _fun47758_ip = 282;
                    continue _fun47758
                }
            case 220:
                var18 = _closure1_slot4;
                var14 = _closure1_slot0;
                var20 = _closure1_slot1;
                var10 = 5;
                var10 = var20[var10];
                var10 = var14.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-subtle'
                };
                var20 = var16.description;
                var10.style = var20;
                var10.children = var19;
                var9 = var18.bind(var3)(var14, var10);
            case 282:
                var7[1] = var9;
                var10 = _closure1_slot4;
                var9 = _closure1_slot3;
                var8 = {};
                var18 = var16.content;
                var14 = new Array(2);
                var14[0] = var18;
                var15 = null;
                if (!var17) {
                    _fun47758_ip = 320;
                    continue _fun47758
                }
            case 314:
                var15 = var16.hasTrailingText;
            case 320:
                var14[1] = var15;
                var8.style = var14;
                var8.accessibilityRole = var13;
                var8.accessibilityLabel = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TableRowGroup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3895, 4854, 4825, 4855, 2]);