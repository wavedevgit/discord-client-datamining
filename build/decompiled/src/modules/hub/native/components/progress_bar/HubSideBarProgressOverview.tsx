// modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx
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
    var6 = var3.HUB_PROGRESS_ACTION_SHEET_ID;
    var _closure1_slot3 = var6;
    var3 = var3.HUB_PROGRESS_NUM_TOTAL_STEPS;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/progress_bar/HubSideBarProgressOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102209: for (var _fun102209_ip = 0;;) switch (_fun102209_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guild;
                var _closure2_slot0 = var7;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 3;
                var2 = var0[var6];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var2 = var5.useHubProgressBarCompletedSteps;
                var2 = var2.bind(var5)(var7);
                var0 = var0[var6];
                var3 = var3.bind(var4)(var0);
                var0 = var3.getNextHubProgressStep;
                var5 = var0.bind(var3)(var2);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun102209_ip = 388;
                    continue _fun102209
                }
            case 79:
                var12 = var2.size;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getHubProgressTitleForStep;
                var7 = var2.bind(var3)(var5);
                var2 = _closure1_slot4;
                if (!(!(var12 < var2))) {
                    _fun102209_ip = 177;
                    continue _fun102209
                }
            case 120:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var3 = var9[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var9[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["+Gyklt"];
                var6 = var3.bind(var5)(var2);
                _fun102209_ip = 271;
                continue _fun102209;
            case 177:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 4;
                var5 = var10[var2];
                var5 = var3.bind(var4)(var5);
                var9 = var5.intl;
                var5 = var9.formatToPlainString;
                var2 = var10[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var3 = var2["9j7xDu"];
                var2 = {};
                var10 = global;
                var10 = var10.HermesInternal;
                var11 = var10.concat;
                var10 = '';
                var10 = var11.bind(var10)(var12);
                var2.number = var10;
                var10 = _closure1_slot4;
                var2.total = var10;
                var6 = var5.bind(var9)(var3, var2);
            case 271:
                var2 = global;
                var11 = var2.Math;
                var10 = var11.max;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 5;
                var3 = var9[var3];
                var3 = var2.bind(var4)(var3);
                var5 = var3.MIN_PROGRESS_PERCENT;
                var3 = 100;
                var12 = var3 * var12;
                var3 = _closure1_slot4;
                var3 = var12 / var3;
                var5 = var10.bind(var11)(var5, var3);
                var3 = _closure1_slot5;
                var1 = 6;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GuildProgressOverviewView;
                var1 = {};
                var8 = function() {
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 9;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 8;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot3;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.guild = var6;
                    var6 = 'Channels Sidebar';
                    var1.analyticsSource = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1.onPress = var8;
                var1.title = var7;
                var1.subtitle = var6;
                var1.percentComplete = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 388:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8366, 33, 11878, 1234, 10269, 12613, 3278, 11882, 1307, 2]);