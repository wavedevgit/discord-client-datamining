// modules/hub/native/components/progress_bar/HubProgressHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var6 = var3.HUB_PROGRESS_ACTION_SHEET_ID;
    var _closure1_slot4 = var6;
    var3 = var3.HUB_PROGRESS_NUM_TOTAL_STEPS;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'overflow': 'hidden',
        'height': null,
        'padding': 16
    };
    var8.height = var9;
    var3.container = var8;
    var8 = {
        'width': 48,
        'height': 48
    };
    var3.icon = var8;
    var8 = {
        'paddingVertical': 8,
        'paddingLeft': 8,
        'paddingRight': 12
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.innerContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/progress_bar/HubProgressHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91354: for (var _fun91354_ip = 0;;) switch (_fun91354_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guild;
                var _closure2_slot0 = var6;
                var9 = var0.onDirectoryPage;
                var4 = undefined;
                if (!(var9 === var4)) {
                    _fun91354_ip = 28;
                    continue _fun91354
                }
            case 26:
                var9 = false;
            case 28:
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var4;
                var0 = _closure1_slot7;
                var12 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 7;
                var1 = var0[var5];
                var3 = var2.bind(var4)(var1);
                var1 = var3.useHubProgressBarCompletedSteps;
                var1 = var1.bind(var3)(var6);
                var0 = var0[var5];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getNextHubProgressStep;
                var3 = var0.bind(var2)(var1);
                _closure2_slot2 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun91354_ip = 494;
                    continue _fun91354
                }
            case 111:
                var14 = var1.size;
                if (!var9) {
                    _fun91354_ip = 155;
                    continue _fun91354
                }
            case 119:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.HubProgressStep;
                var1 = var1.JOIN_GUILD;
                var9 = var3 === var1;
            case 155:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getHubProgressTitleForStep;
                var10 = var1.bind(var2)(var3);
                var1 = _closure1_slot5;
                if (!(!(var14 < var1))) {
                    _fun91354_ip = 248;
                    continue _fun91354
                }
            case 191:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["+Gyklt"];
                var7 = var2.bind(var3)(var1);
                _fun91354_ip = 342;
                continue _fun91354;
            case 248:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var3 = var6[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["9j7xDu"];
                var1 = {};
                var6 = global;
                var6 = var6.HermesInternal;
                var13 = var6.concat;
                var6 = '';
                var6 = var13.bind(var6)(var14);
                var1.number = var6;
                var6 = _closure1_slot5;
                var1.total = var6;
                var7 = var3.bind(var5)(var2, var1);
            case 342:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var12.container;
                var1.style = var5;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 10;
                var5 = var13[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.FormCTA;
                var5 = {};
                var14 = var12.innerContainer;
                var5.style = var14;
                var12 = var12.icon;
                var5.iconStyle = var12;
                var11 = function() {
                    _fun91355: for (var _fun91355_ip = 0;;) switch (_fun91355_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun91355_ip = 55;
                                continue _fun91355
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.HubProgressStep;
                            var1 = var1.JOIN_GUILD;
                            var0 = var2 === var1;
                        case 55:
                            if (var0) {
                                _fun91355_ip = 155;
                                continue _fun91355
                            }
                        case 58:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var2 = 11;
                            var2 = var1[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.openLazy;
                            var6 = _closure1_slot0;
                            var2 = 13;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 12;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = _closure1_slot4;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var0.guild = var5;
                            var5 = 'Directory Channel Header';
                            var0.analyticsSource = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 155:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPress = var11;
                var12 = _closure1_slot1;
                var11 = 14;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var5.iconSource = var11;
                var5.title = var10;
                var5.subtitle = var7;
                var7 = undefined;
                if (!var9) {
                    _fun91354_ip = 471;
                    continue _fun91354
                }
            case 455:
                var10 = _closure1_slot6;
                var9 = _closure1_slot3;
                var8 = {};
                var7 = var10.bind(var4)(var9, var8);
            case 471:
                var5.trailing = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 494:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8372, 8962, 33, 1297, 671, 11881, 1311, 1234, 5383, 3280, 11885, 1307, 11886, 2]);