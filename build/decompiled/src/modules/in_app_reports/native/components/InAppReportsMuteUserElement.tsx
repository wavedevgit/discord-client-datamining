// modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
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
    var3 = var3.MuteUntilSeconds;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsMuteUserElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92565: for (var _fun92565_ip = 0;;) switch (_fun92565_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var _closure2_slot0 = var1;
                var10 = var0.channelId;
                var _closure2_slot1 = var10;
                var9 = var0.reportId;
                var _closure2_slot2 = var9;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot5;
                var5 = var0.getDMFromUserId;
                var3 = var1.id;
                var11 = var5.bind(var0)(var3);
                var _closure2_slot3 = var11;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 6;
                var3 = var7[var3];
                var8 = var5.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var0;
                var3 = new Array(1);
                var3[0] = var10;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var5, var0, var3);
                var _closure2_slot4 = var0;
                var7 = _closure1_slot4;
                var5 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var0;
                var3[1] = var1;
                var0 = function() { // Environment: var2
                    _fun92567: for (var _fun92567_ip = 0;;) switch (_fun92567_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var2.bind(var1)(var0);
                            var3 = var4.getName;
                            var2 = _closure2_slot4;
                            var6 = null;
                            var5 = var6 == var2;
                            var2 = undefined;
                            if (var5) {
                                _fun92567_ip = 58;
                                continue _fun92567
                            }
                        case 49:
                            var5 = _closure2_slot4;
                            var2 = var5.guild_id;
                        case 58:
                            var5 = _closure2_slot4;
                            var5 = var6 == var5;
                            var1 = undefined;
                            if (var5) {
                                _fun92567_ip = 80;
                                continue _fun92567
                            }
                        case 71:
                            var5 = _closure2_slot4;
                            var1 = var5.id;
                        case 80:
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var14 = var5.bind(var7)(var0, var3);
                var5 = var7.useMemo;
                var3 = new Array(1);
                var3[0] = var11;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getMuteSettings;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var5.bind(var7)(var0, var3);
                var8 = var0.muted;
                var5 = var7.useState;
                var0 = null;
                var3 = var0 != var8;
                if (!var3) {
                    _fun92565_ip = 208;
                    continue _fun92565
                }
            case 205:
                var3 = var8;
            case 208:
                var7 = var5.bind(var7)(var3);
                var5 = _closure1_slot3;
                var3 = 2;
                var5 = var5.bind(var4)(var7, var3);
                var3 = 0;
                var8 = var5[var3];
                var3 = 1;
                var3 = var5[var3];
                _closure2_slot5 = var3;
                var7 = _closure1_slot4;
                var5 = var7.useCallback;
                var3 = new Array(4);
                var3[0] = var11;
                var3[1] = var10;
                var3[2] = var1;
                var3[3] = var9;
                var2 = function() { // Environment: var2
                    var3 = _closure2_slot5;
                    var0 = undefined;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var9 = var4.bind(var0)(var2);
                    var7 = var9.trackWithMetadata;
                    var2 = _closure1_slot6;
                    var6 = var2.IAR_MUTE_USER_BUTTON_CLICKED;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var10 = var2.id;
                    var3.other_user_id = var10;
                    var10 = _closure2_slot2;
                    var3.report_id = var10;
                    var3 = var7.bind(var9)(var6, var3);
                    var6 = _closure1_slot0;
                    var3 = 8;
                    var3 = var5[var3];
                    var7 = var6.bind(var0)(var3);
                    var6 = var7.handleMuteSettingPress;
                    var3 = {};
                    var9 = _closure2_slot3;
                    var3.channelId = var9;
                    var9 = null;
                    var3.guildId = var9;
                    var8 = _closure1_slot7;
                    var8 = var8.ALWAYS;
                    var3.muteDurationSeconds = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.showMuteSuccessToast;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var5.bind(var7)(var2, var3);
                var1 = var0 == var1;
                var0 = null;
                if (var1) {
                    _fun92565_ip = 539;
                    continue _fun92565
                }
            case 297:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = _closure1_slot0;
                var9 = 12;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var13 = var10.intl;
                var12 = var13.formatToPlainString;
                var10 = var7[var9];
                var10 = var6.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10.TRp5wR;
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
                var11 = var10.raALhx;
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
                var9 = var9["yM/+AJ"];
                var9 = var10.bind(var11)(var9);
                var1.description = var9;
                var1.disabled = var8;
                var1.onPress = var5;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.BellSlashIcon;
                var5 = {};
                var5 = var3.bind(var4)(var6, var5);
                var1.icon = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 539:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 660, 1351, 33, 566, 3952, 8737, 4298, 5919, 12094, 1234, 8749, 2]);