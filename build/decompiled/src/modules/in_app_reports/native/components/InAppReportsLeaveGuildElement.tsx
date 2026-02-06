// modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsLeaveGuildElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92686: for (var _fun92686_ip = 0;;) switch (_fun92686_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.guild;
                var _closure2_slot0 = var12;
                var8 = var0.addCallback;
                var _closure2_slot1 = var8;
                var0 = var0.reportId;
                var _closure2_slot2 = var0;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var1 = false;
                var6 = var2.bind(var7)(var1);
                var2 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var6, var1);
                var1 = 0;
                var6 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var11 = null;
                var1 = var11 != var12;
                var _closure2_slot4 = var1;
                var9 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var5
                    var2 = _closure2_slot3;
                    var0 = _closure2_slot4;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var9.bind(var7)(var1, var2);
                var2 = var7.useCallback;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var0;
                var1[2] = var12;
                var0 = function() { // Environment: var5
                    _fun92688: for (var _fun92688_ip = 0;;) switch (_fun92688_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun92688_ip = 113;
                                continue _fun92688
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.leaveGuild;
                                var0 = _closure2_slot0;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 5;
                            var3 = var5[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.trackWithMetadata;
                            var1 = _closure1_slot5;
                            var3 = var1.IAR_LEAVE_GUILD_BUTTON_CLICKED;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var1.guild_id = var6;
                            var6 = _closure2_slot2;
                            var1.report_id = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = _closure2_slot3;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 113:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var _closure2_slot5 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 6;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = _closure1_slot0;
                var7 = 7;
                var9 = var13[var7];
                var9 = var8.bind(var3)(var9);
                var14 = var9.intl;
                var10 = var14.string;
                var9 = var13[var7];
                var9 = var8.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.cU96ip;
                var9 = var10.bind(var14)(var9);
                var0.title = var9;
                var9 = var13[var7];
                var9 = var8.bind(var3)(var9);
                var14 = var9.intl;
                var10 = var14.string;
                var9 = var13[var7];
                var9 = var8.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.rJGMXU;
                var9 = var10.bind(var14)(var9);
                var0.disabledTitle = var9;
                var9 = var13[var7];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var7 = var13[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7["26mR6/"];
                var7 = {};
                var13 = var11 == var12;
                var11 = undefined;
                if (var13) {
                    _fun92686_ip = 350;
                    continue _fun92686
                }
            case 345:
                var11 = var12.name;
            case 350:
                var7.guildName = var11;
                var7 = var9.bind(var10)(var8, var7);
                var0.description = var7;
                var0.disabled = var6;
                var6 = 'danger';
                var0.variant = var6;
                var5 = function() {
                    _fun92690: for (var _fun92690_ip = 0;;) switch (_fun92690_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 8;
                            var1 = var5[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var7 = 7;
                            var8 = var5[var7];
                            var8 = var6.bind(var0)(var8);
                            var10 = var8.intl;
                            var9 = var10.string;
                            var8 = var5[var7];
                            var8 = var6.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8.J2TBi3;
                            var8 = var9.bind(var10)(var8);
                            var1.title = var8;
                            var8 = var5[var7];
                            var8 = var6.bind(var0)(var8);
                            var10 = var8.intl;
                            var9 = var10.formatToPlainString;
                            var5 = var5[var7];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.t;
                            var8 = var5.TB1og8;
                            var6 = {};
                            var12 = _closure2_slot0;
                            var11 = null;
                            var12 = var11 == var12;
                            var11 = undefined;
                            if (var12) {
                                _fun92690_ip = 156;
                                continue _fun92690
                            }
                        case 147:
                            var12 = _closure2_slot0;
                            var11 = var12.name;
                        case 156:
                            var6.name = var11;
                            var6 = var9.bind(var10)(var8, var6);
                            var1.body = var6;
                            var10 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var8 = var6[var7];
                            var8 = var10.bind(var0)(var8);
                            var11 = var8.intl;
                            var9 = var11.string;
                            var8 = var6[var7];
                            var8 = var10.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8.p89ACt;
                            var8 = var9.bind(var11)(var8);
                            var1.confirmText = var8;
                            var8 = var6[var7];
                            var8 = var10.bind(var0)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var6[var7];
                            var7 = var10.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7.gm1Vej;
                            var7 = var8.bind(var9)(var7);
                            var1.cancelText = var7;
                            var5 = _closure2_slot5;
                            var1.onConfirm = var5;
                            var5 = _closure1_slot1;
                            var4 = 9;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.Colors;
                            var4 = var4.RED;
                            var1.confirmColor = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0.onPress = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.DoorExitIcon;
                var4 = {};
                var7 = 'text-feedback-critical';
                var4.color = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.icon = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 8180, 4303, 12127, 1234, 3938, 3939, 8445, 2]);