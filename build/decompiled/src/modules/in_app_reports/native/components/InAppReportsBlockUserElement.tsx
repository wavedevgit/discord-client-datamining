// modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsBlockUserElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92564: for (var _fun92564_ip = 0;;) switch (_fun92564_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.user;
                var _closure2_slot0 = var1;
                var7 = var2.channelId;
                var _closure2_slot1 = var7;
                var9 = var2.reportId;
                var _closure2_slot2 = var9;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var8 = var5[var2];
                var4 = undefined;
                var13 = var3.bind(var4)(var8);
                var12 = var13.useStateFromStores;
                var8 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var8;
                var10 = new Array(1);
                var10[0] = var1;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.isBlocked;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var12.bind(var13)(var11, var8, var10);
                var2 = var5[var2];
                var11 = var3.bind(var4)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var3 = new Array(1);
                var3[0] = var7;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var10.bind(var11)(var5, var2, var3);
                var _closure2_slot3 = var2;
                var5 = _closure1_slot3;
                var10 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var1;
                var2 = function() { // Environment: var0
                    _fun92567: for (var _fun92567_ip = 0;;) switch (_fun92567_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var2.bind(var1)(var0);
                            var3 = var4.getName;
                            var2 = _closure2_slot3;
                            var6 = null;
                            var5 = var6 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun92567_ip = 58;
                                continue _fun92567
                            }
                        case 49:
                            var5 = _closure2_slot3;
                            var2 = var5.guild_id;
                        case 58:
                            var5 = _closure2_slot3;
                            var5 = var6 == var5;
                            var1 = undefined;
                            if (var5) {
                                _fun92567_ip = 80;
                                continue _fun92567
                            }
                        case 71:
                            var5 = _closure2_slot3;
                            var1 = var5.id;
                        case 80:
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var14 = var10.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(3);
                var2[0] = var1;
                var2[1] = var9;
                var2[2] = var7;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 7;
                    var2 = var5[var0];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var2);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot6;
                    var6 = var1.IAR_BLOCK_USER_BUTTON_CLICKED;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var9 = var2.id;
                    var3.other_user_id = var9;
                    var9 = _closure2_slot2;
                    var3.report_id = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 8;
                    var3 = var5[var3];
                    var8 = var4.bind(var0)(var3);
                    var7 = var8.blockUser;
                    var6 = var2.id;
                    var3 = {};
                    var9 = 'ReportMenuBlockUser-iOS';
                    var3.location = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 9;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.showBlockSuccessToast;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var3.bind(var5)(var0, var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun92564_ip = 487;
                    continue _fun92564
                }
            case 229:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = _closure1_slot0;
                var9 = 11;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var13 = var10.intl;
                var12 = var13.formatToPlainString;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10["Q1o/f3"];
                var10 = {};
                var10.username = var14;
                var10 = var12.bind(var13)(var11, var10);
                var1.title = var10;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var13 = var10.intl;
                var12 = var13.formatToPlainString;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10["kA0S/d"];
                var10 = {};
                var10.username = var14;
                var10 = var12.bind(var13)(var11, var10);
                var1.disabledTitle = var10;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var7[var9];
                var9 = var6.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.G08MKu;
                var9 = var10.bind(var11)(var9);
                var1.description = var9;
                var1.disabled = var8;
                var8 = 'danger';
                var1.variant = var8;
                var1.onPress = var5;
                var5 = 12;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.DenyIcon;
                var5 = {};
                var7 = 'text-feedback-critical';
                var5.color = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.icon = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 487:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 3061, 660, 33, 566, 3922, 4268, 7983, 5888, 12060, 1234, 10312, 2]);