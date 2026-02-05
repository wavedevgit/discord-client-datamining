// modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flex': 0,
        'alignSelf': 'stretch',
        'marginBottom': 16,
        'paddingHorizontal': 16
    };
    var6.container = var3;
    var3 = {
        'lineHeight': 16,
        'marginBottom': 8
    };
    var6.title = var3;
    var3 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'marginBottom': 8,
        'marginEnd': 32,
        'overflow': 'visible'
    };
    var6.breadCrumbItemContainer = var3;
    var3 = {
        'marginStart': 2,
        'marginTop': 8,
        'width': 4,
        'height': 4,
        'borderRadius': 2
    };
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BRAND;
    var3.backgroundColor = var9;
    var6.breadCrumbDot = var3;
    var9 = {
        'position': 'absolute',
        'width': 2,
        'top': 10,
        'bottom': 4294967284,
        'left': 3
    };
    var3 = 10;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var10;
    var6.breadCrumbBar = var9;
    var9 = {
        'marginStart': 8,
        'lineHeight': 20
    };
    var6.breadCrumbText = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsBreadCrumbs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92636: for (var _fun92636_ip = 0;;) switch (_fun92636_ip) {
            case 0:
                var5 = arg0;
                var2 = var5.element;
                var14 = var5.menuName;
                var0 = null;
                var4 = Object.create(var0);
                var3 = 0;
                var4.element = var3;
                var4.menuName = var3;
                var20 = {};
                var19 = var5;
                var18 = var4;
                var1 = copyDataProperties(var20, var19, var18);
                var5 = undefined;
                var _closure2_slot1 = var5;
                var4 = _closure1_slot6;
                var11 = var4.bind(var5)();
                var _closure2_slot0 = var11;
                if (!(var0 != var2)) {
                    _fun92636_ip = 419;
                    continue _fun92636
                }
            case 74:
                var4 = var2.type;
                var2 = 'breadcrumbs';
                if (!(var2 === var4)) {
                    _fun92636_ip = 419;
                    continue _fun92636
                }
            case 90:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var6 = var4.bind(var5)(var2);
                var4 = var6.flatMap;
                var2 = var1.history;
                var1 = function(arg0) { // Environment: var7
                    _fun92637: for (var _fun92637_ip = 0;;) switch (_fun92637_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.destination;
                            var2 = var3;
                            var1 = var2[Symbol.iterator];
                            var2 = var1().next;
                            var5 = var2().value;
                            var2 = var1;
                            var4 = undefined;
                            var3 = var2 === var4;
                            var2 = undefined;
                            if (var3) {
                                _fun92637_ip = 36;
                                continue _fun92637
                            }
                        case 33:
                            var2 = var5;
                        case 36:
                            if (var3) {
                                _fun92637_ip = 42;
                                continue _fun92637
                            }
                        case 39:
                            var1.return();
                        case 42:
                            var6 = var0.multiSelect;
                            var0 = [null, null];
                            var1 = global;
                            var3 = var1.Object;
                            var1 = var3.values;
                            var5 = null;
                            var7 = var5 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun92637_ip = 87;
                                continue _fun92637
                            }
                        case 82:
                            var4 = var6.state;
                        case 87:
                            if (!(var5 == var4)) {
                                _fun92637_ip = 93;
                                continue _fun92637
                            }
                        case 91:
                            var4 = {};
                        case 93:
                            var5 = var1.bind(var3)(var4);
                            var1 = var5.length;
                            var3 = 0;
                            if (!(var1 > var3)) {
                                _fun92637_ip = 129;
                                continue _fun92637
                            }
                        case 109:
                            var4 = var5.join;
                            var1 = ', ';
                            var1 = var4.bind(var5)(var1);
                            var0[var3] = var1;
                        case 129:
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun92637_ip = 144;
                                continue _fun92637
                            }
                        case 137:
                            var1 = 1;
                            var0[var1] = var2;
                        case 144:
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var2, var1);
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var7
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var9 = var2.bind(var4)(var1);
                _closure2_slot1 = var9;
                var2 = var9.length;
                var1 = null;
                if (!(var3 !== var2)) {
                    _fun92636_ip = 417;
                    continue _fun92636
                }
            case 170:
                var4 = _closure1_slot5;
                var3 = _closure1_slot3;
                var2 = {};
                var6 = var11.container;
                var2.style = var6;
                var10 = _closure1_slot4;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 6;
                var6 = var15[var6];
                var6 = var13.bind(var5)(var6);
                var8 = var6.Text;
                var6 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-xs/bold'
                };
                var11 = var11.title;
                var6.style = var11;
                var11 = 7;
                var11 = var15[var11];
                var11 = var13.bind(var5)(var11);
                var11 = var11.ReportMenuTypeSets;
                var13 = var11.REPORT_TO_MOD;
                var11 = var13.has;
                var17 = var11.bind(var13)(var14);
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 8;
                var13 = var16[var11];
                var13 = var15.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                if (var17) {
                    _fun92636_ip = 339;
                    continue _fun92636
                }
            case 310:
                var11 = var16[var11];
                var11 = var15.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11["+3V9Tp"];
                var11 = var13.bind(var14)(var11);
                _fun92636_ip = 368;
                continue _fun92636;
            case 339:
                var15 = _closure1_slot1;
                var12 = 9;
                var12 = var16[var12];
                var12 = var15.bind(var5)(var12);
                var12 = var12["6mx/DP"];
                var11 = var13.bind(var14)(var12);
            case 368:
                var6.children = var11;
                var8 = var10.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var8 = var9.map;
                var7 = function(arg0, arg1) { // Environment: var7
                    _fun92639: for (var _fun92639_ip = 0;;) switch (_fun92639_ip) {
                        case 0:
                            var8 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot5;
                            var3 = _closure1_slot3;
                            var2 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.breadCrumbItemContainer;
                            var2.style = var0;
                            var0 = _closure2_slot1;
                            var6 = var0.length;
                            var0 = 1;
                            var0 = var6 - var0;
                            var6 = null;
                            if (!(var7 !== var0)) {
                                _fun92639_ip = 90;
                                continue _fun92639
                            }
                        case 58:
                            var11 = _closure1_slot4;
                            var10 = _closure1_slot3;
                            var9 = {};
                            var0 = _closure2_slot0;
                            var0 = var0.breadCrumbBar;
                            var9.style = var0;
                            var0 = undefined;
                            var6 = var11.bind(var0)(var10, var9);
                        case 90:
                            var0 = new Array(3);
                            var0[0] = var6;
                            var9 = _closure1_slot4;
                            var11 = _closure1_slot3;
                            var6 = {};
                            var10 = _closure2_slot0;
                            var1 = var10.breadCrumbDot;
                            var6.style = var1;
                            var1 = undefined;
                            var6 = var9.bind(var1)(var11, var6);
                            var0[1] = var6;
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 6;
                            var5 = var11[var5];
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'lineClamp': 2,
                                'ellipsizeMode': 'tail',
                                'style': null,
                                'variant': 'text-md/medium'
                            };
                            var10 = var10.breadCrumbText;
                            var5.style = var10;
                            var5.children = var8;
                            var5 = var9.bind(var1)(var6, var5);
                            var0[2] = var5;
                            var2.children = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = '';
                            var0 = '+';
                            var0 = var6.bind(var5)(var8, var0, var7);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var7 = var8.bind(var9)(var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 417:
                return var1;
            case 419:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 22, 3941, 6516, 1234, 1986, 2]);