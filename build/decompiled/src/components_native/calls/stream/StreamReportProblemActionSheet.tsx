// components_native/calls/stream/StreamReportProblemActionSheet.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.padding = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/calls/stream/StreamReportProblemActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.stream;
        var _closure2_slot0 = var2;
        var0 = var0.analyticsData;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot6;
        var3 = undefined;
        var6 = var2.bind(var3)();
        var4 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 6;
        var2 = var9[var2];
        var5 = var4.bind(var3)(var2);
        var2 = function() { // Environment: var1
            _fun68790: for (var _fun68790_ip = 0;;) switch (_fun68790_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var2 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var3 = var6.getStreamerApplication;
                    var5 = _closure2_slot0;
                    var2 = _closure1_slot3;
                    var6 = var3.bind(var6)(var5, var2);
                    var3 = _closure1_slot1;
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot4;
                    var2 = var1.OPEN_POPOUT;
                    var1 = {};
                    var7 = 'Stream Issue Sheet';
                    var1.type = var7;
                    var5 = var5.ownerId;
                    var1.other_user_id = var5;
                    var5 = null;
                    var8 = var5 != var6;
                    var7 = null;
                    if (!var8) {
                        _fun68790_ip = 118;
                        continue _fun68790
                    }
                case 113:
                    var7 = var6.id;
                case 118:
                    var1.application_id = var7;
                    var8 = var5 != var6;
                    var7 = null;
                    if (!var8) {
                        _fun68790_ip = 137;
                        continue _fun68790
                    }
                case 132:
                    var7 = var6.name;
                case 137:
                    var1.application_name = var7;
                    var7 = var5 != var6;
                    var5 = null;
                    if (!var7) {
                        _fun68790_ip = 156;
                        continue _fun68790
                    }
                case 151:
                    var5 = var6.id;
                case 156:
                    var1.game_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var2 = var5.bind(var3)(var2);
        var2 = 12;
        var2 = var9[var2];
        var4 = var4.bind(var3)(var2);
        var2 = {
            'isStreamer': false,
            'isEndStream': false
        };
        var4 = var4.bind(var3)(var2);
        var2 = var4.map;
        var1 = function(arg0, arg1) { // Environment: var1
            var1 = arg0;
            var2 = var1.value;
            var _closure3_slot0 = var2;
            var5 = var1.label;
            var4 = _closure1_slot5;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.ActionSheetRow;
            var1 = {};
            var1.label = var5;
            var5 = true;
            var1.arrow = var5;
            var0 = function() {
                var1 = _closure3_slot0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var2 = undefined;
                var5 = var4.bind(var2)(var0);
                var0 = {};
                var0.problem = var1;
                var10 = _closure2_slot0;
                var0.stream = var10;
                var1 = '';
                var0.feedback = var1;
                var1 = _closure1_slot0;
                var8 = 7;
                var8 = var3[var8];
                var9 = var1.bind(var2)(var8);
                var8 = var9.getStreamerApplication;
                var7 = _closure1_slot3;
                var7 = var8.bind(var9)(var10, var7);
                var0.streamApplication = var7;
                var6 = _closure2_slot1;
                var0.analyticsData = var6;
                var6 = 'Stream';
                var0.location = var6;
                var0 = var5.bind(var2)(var0);
                var0 = 10;
                var0 = var3[var0];
                var4 = var4.bind(var2)(var0);
                var0 = var4.hideActionSheet;
                var0 = var0.bind(var4)();
                var0 = 11;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.presentFeedbackSent;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1.onPress = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var8 = var2.bind(var4)(var1);
        var2 = _closure1_slot5;
        var7 = _closure1_slot0;
        var0 = 14;
        var0 = var9[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var4 = true;
        var0.scrollable = var4;
        var4 = 15;
        var4 = var9[var4];
        var4 = var7.bind(var3)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var10 = 16;
        var11 = var9[var10];
        var11 = var7.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var9[var10];
        var10 = var7.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.XuqqwI;
        var10 = var11.bind(var12)(var10);
        var4.title = var10;
        var4 = var2.bind(var3)(var5, var4);
        var0.header = var4;
        var4 = 17;
        var4 = var9[var4];
        var4 = var7.bind(var3)(var4);
        var5 = var4.BottomSheetScrollView;
        var4 = {};
        var6 = var6.container;
        var4.style = var6;
        var6 = 13;
        var6 = var9[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.ActionSheetRow;
        var7 = var6.Group;
        var6 = {};
        var6.children = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3610, 660, 33, 1297, 671, 4103, 6542, 795, 8599, 3278, 3147, 8600, 7732, 5208, 5211, 1234, 4933, 2]);