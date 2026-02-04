// modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.marginTop = var9;
    var3.container = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 8,
        'borderRadius': null,
        'backgroundColor': null,
        'maxHeight': 140
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.scrollView = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66334: for (var _fun66334_ip = 0;;) switch (_fun66334_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var2 = var0.recurrenceRule;
                var1 = var0.guildEventId;
                var _closure2_slot0 = var1;
                var3 = var0.onRecurrencePress;
                var _closure2_slot1 = var3;
                var3 = var0.activeRecurrenceId;
                var _closure2_slot2 = var3;
                var7 = var0.hideViewMoreButton;
                var5 = _closure1_slot3;
                var3 = var5.useRef;
                var0 = null;
                var12 = var3.bind(var5)(var0);
                var _closure2_slot3 = var12;
                var0 = _closure1_slot8;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 5;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)(var1, var4, var2);
                var15 = var0.recurrenceStartTimes;
                var5 = var0.canViewMoreRecurrences;
                var0 = var0.updateRecurrenceStartTimes;
                var _closure2_slot4 = var0;
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var13.container;
                var0.style = var4;
                var11 = _closure1_slot6;
                var18 = _closure1_slot0;
                var4 = 6;
                var4 = var10[var4];
                var4 = var18.bind(var3)(var4);
                var8 = var4.Text;
                var4 = {};
                var14 = 'heading-md/semibold';
                var4.variant = var14;
                var14 = 7;
                var16 = var10[var14];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var10 = var10[var14];
                var10 = var18.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["D/jjoa"];
                var10 = var16.bind(var17)(var10);
                var4.children = var10;
                var8 = var11.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var10 = _closure1_slot5;
                var8 = {};
                var13 = var13.scrollView;
                var8.style = var13;
                var8.ref = var12;
                var13 = var15.map;
                var12 = function(arg0) { // Environment: var9
                    var7 = arg0;
                    var1 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var4 = undefined;
                    var6 = var1.bind(var4)(var2);
                    var3 = var6.fromTimestamp;
                    var2 = var7.getTime;
                    var2 = var2.bind(var7)();
                    var3 = var3.bind(var6)(var2);
                    var2 = _closure1_slot6;
                    var0 = 9;
                    var0 = var5[var0];
                    var1 = var1.bind(var4)(var0);
                    var0 = {};
                    var0.recurrenceId = var3;
                    var6 = _closure2_slot0;
                    var0.guildEventId = var6;
                    var6 = _closure2_slot1;
                    var0.onPress = var6;
                    var5 = _closure2_slot2;
                    var5 = var3 === var5;
                    var0.isActive = var5;
                    var0 = var2.bind(var4)(var1, var0, var3);
                    return var0;
                };
                var12 = var13.bind(var15)(var12);
                var8.children = var12;
                var8 = var11.bind(var3)(var10, var8);
                var4[1] = var8;
                if (!var5) {
                    _fun66334_ip = 316;
                    continue _fun66334
                }
            case 313:
                var5 = !var7;
            case 316:
                if (!var5) {
                    _fun66334_ip = 426;
                    continue _fun66334
                }
            case 319:
                var8 = _closure1_slot6;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 10;
                var6 = var10[var6];
                var6 = var13.bind(var3)(var6);
                var7 = var6.Button;
                var6 = {};
                var11 = var10[var14];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["8O7Hpy"];
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var9 = function arg0() {
                    _fun66336: for (var _fun66336_ip = 0;;) switch (_fun66336_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var1 = _closure2_slot3;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun66336_ip = 51;
                                continue _fun66336
                            }
                        case 41:
                            var1 = var2.scrollToEnd;
                            var1 = var1.bind(var2)();
                        case 51:
                            return var0;
                    }
                };
                var6.onPress = var9;
                var9 = 'sm';
                var6.size = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 426:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8197, 3941, 1234, 21, 8198, 4084, 2]);