// modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventUserResponses;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.marginTop = var9;
    var3.buttonWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildEventRsvpPickerActionSheet, environment: var1
        _fun67036: for (var _fun67036_ip = 0;;) switch (_fun67036_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.event;
                var _closure2_slot0 = var0;
                var2 = var1.recurrenceId;
                var _closure2_slot1 = var2;
                var2 = var1.guildId;
                var _closure2_slot2 = var2;
                var1 = var1.onRsvp;
                var _closure2_slot3 = var1;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot9;
                var10 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 7;
                var4 = var1[var11];
                var4 = var2.bind(var3)(var4);
                var4 = var4.ResponseOptions;
                var4 = var4.SERIES;
                var6 = var5.bind(var6)(var4);
                var5 = _closure1_slot3;
                var4 = 2;
                var5 = var5.bind(var3)(var6, var4);
                var4 = 0;
                var14 = var5[var4];
                var _closure2_slot4 = var14;
                var4 = 1;
                var13 = var5[var4];
                var1 = var1[var11];
                var4 = var2.bind(var3)(var1);
                var2 = var4.getExistingRsvp;
                var0 = var0.id;
                var1 = null;
                var0 = var2.bind(var4)(var0, var1);
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun67036_ip = 180;
                    continue _fun67036
                }
            case 174:
                var1 = var0.response;
            case 180:
                var0 = _closure1_slot6;
                var0 = var0.INTERESTED;
                if (!(var1 !== var0)) {
                    _fun67036_ip = 206;
                    continue _fun67036
                }
            case 194:
                var0 = _closure1_slot6;
                var1 = var0.INTERESTED;
                _fun67036_ip = 216;
                continue _fun67036;
            case 206:
                var0 = _closure1_slot6;
                var1 = var0.UNINTERESTED;
            case 216:
                _closure2_slot5 = var1;
                var0 = _closure1_slot6;
                var0 = var0.INTERESTED;
                if (!(var1 !== var0)) {
                    _fun67036_ip = 293;
                    continue _fun67036
                }
            case 234:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var1 = var5[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["8MPCVr"];
                var6 = var1.bind(var2)(var0);
                _fun67036_ip = 350;
                continue _fun67036;
            case 293:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var1 = var5[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.WtORed;
                var6 = var1.bind(var2)(var0);
            case 350:
                var2 = _closure1_slot7;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 9;
                var0 = var16[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = 10;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var4.title = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot8;
                var4 = 11;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {};
                var7 = true;
                var4.bottom = var7;
                var7 = var10.container;
                var4.style = var7;
                var7 = 12;
                var7 = var16[var7];
                var7 = var15.bind(var3)(var7);
                var9 = var7.TableRadioGroup;
                var7 = {};
                var7.defaultValue = var14;
                var7.onChange = var13;
                var11 = var16[var11];
                var13 = var15.bind(var3)(var11);
                var11 = var13.getResponseOptions;
                var14 = var11.bind(var13)();
                var13 = var14.map;
                var11 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var0.value;
                    var1.value = var5;
                    var5 = var0.name;
                    var1.label = var5;
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var11 = var13.bind(var14)(var11);
                var7.children = var11;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var9 = _closure1_slot5;
                var8 = {};
                var10 = var10.buttonWrapper;
                var8.style = var10;
                var10 = 14;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {};
                var12 = function() { // Original name: onPress, environment: var12
                    _fun67038: for (var _fun67038_ip = 0;;) switch (_fun67038_ip) {
                        case 0:
                            var5 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.ResponseOptions;
                            var3 = var3.SERIES;
                            var4 = null;
                            var9 = null;
                            if (!(var5 !== var3)) {
                                _fun67038_ip = 56;
                                continue _fun67038
                            }
                        case 52:
                            var9 = _closure2_slot1;
                        case 56:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 15;
                            var3 = var6[var3];
                            var8 = var5.bind(var0)(var3);
                            var7 = var8.updateRsvp;
                            var3 = _closure2_slot0;
                            var13 = var3.id;
                            var11 = _closure2_slot2;
                            var10 = _closure2_slot5;
                            var14 = var8;
                            var12 = var9;
                            var3 = var14[var7](var13, var12, var11, var10, var9);
                            var3 = _closure2_slot3;
                            if (!(var4 != var3)) {
                                _fun67038_ip = 125;
                                continue _fun67038
                            }
                        case 117:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)();
                        case 125:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 16;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var10.onPress = var12;
                var12 = 8;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.TyCVIq;
                var12 = var13.bind(var14)(var12);
                var10.text = var12;
                var10 = var2.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1378, 33, 1297, 671, 8063, 1234, 4887, 5167, 4690, 5379, 5378, 4037, 8055, 3237, 2]);