// modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.cardStyle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'TIME';
    var3.TIME = var6;
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var11 = var0.guildEvent;
        var _closure2_slot0 = var11;
        var1 = var0.onCloseModal;
        var _closure2_slot1 = var1;
        var10 = var0.recurrenceId;
        var _closure2_slot2 = var10;
        var1 = _closure1_slot9;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var13 = _closure1_slot1;
        var7 = _closure1_slot3;
        var1 = 6;
        var1 = var7[var1];
        var2 = var13.bind(var3)(var1);
        var1 = var11.id;
        var8 = var2.bind(var3)(var10, var1);
        var _closure2_slot3 = var8;
        var1 = _closure1_slot0;
        var2 = 7;
        var5 = var7[var2];
        var6 = var1.bind(var3)(var5);
        var5 = var6.getBaseScheduleForRecurrence;
        var6 = var5.bind(var6)(var10, var11);
        var2 = var7[var2];
        var5 = var1.bind(var3)(var2);
        var2 = var5.getScheduleForRecurrenceWithException;
        var5 = var2.bind(var5)(var6, var8);
        var _closure2_slot4 = var5;
        var12 = _closure1_slot6;
        var2 = var12.useState;
        var2 = var2.bind(var12)(var5);
        var14 = _closure1_slot5;
        var11 = 2;
        var2 = var14.bind(var3)(var2, var11);
        var6 = 0;
        var5 = var2[var6];
        var _closure2_slot5 = var5;
        var5 = 1;
        var2 = var2[var5];
        var _closure2_slot6 = var2;
        var2 = var12.useState;
        var10 = null;
        var2 = var2.bind(var12)(var10);
        var2 = var14.bind(var3)(var2, var11);
        var8 = var2[var6];
        var _closure2_slot7 = var8;
        var2 = var2[var5];
        var _closure2_slot8 = var2;
        var2 = 8;
        var2 = var7[var2];
        var15 = var13.bind(var3)(var2);
        var2 = function() { // Environment: var9
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 9;
            var1 = var2[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.dismissGlobalKeyboard;
            var1 = var1.bind(var3)();
            var1 = _closure1_slot1;
            var0 = 10;
            var0 = var2[var0];
            var4 = var1.bind(var5)(var0);
            var9 = _closure2_slot0;
            var8 = _closure2_slot2;
            var7 = _closure2_slot5;
            var6 = _closure2_slot3;
            var10 = undefined;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var2 = var15.bind(var3)(var2);
        var2 = var14.bind(var3)(var2, var11);
        var6 = var2[var6];
        var _closure2_slot9 = var6;
        var2 = var2[var5];
        var2 = var2.error;
        var _closure2_slot10 = var2;
        var5 = function() { // Environment: var9
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun65433: for (var _fun65433_ip = 0;;) switch (_fun65433_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun65433_ip = 106;
                                continue _fun65433
                            }
                        case 7:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.areSchedulesIdentical;
                            var4 = _closure2_slot5;
                            var3 = _closure2_slot4;
                            var3 = var5.bind(var6)(var4, var3);
                            if (var3) {
                                _fun65433_ip = 95;
                                continue _fun65433
                            }
                        case 58:
                            var3 = _closure2_slot9;
                            var3 = var3.bind(var1)();
                            SaveGenerator(address = 70);
                        case 68:
                            return var3;
                        case 70:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                            if (var4) {
                                _fun65433_ip = 92;
                                continue _fun65433
                            }
                        case 76:
                            var4 = null;
                            if (!(var4 != var3)) {
                                _fun65433_ip = 103;
                                continue _fun65433
                            }
                        case 82:
                            var4 = _closure2_slot1;
                            var4 = var4.bind(var1)();
                            _fun65433_ip = 103;
                            continue _fun65433;
                        case 92:
                            return var3;
                        case 95:
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var1)();
                        case 103:
                            return var1;
                        case 106:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var11 = var5.bind(var3)();
        var5 = function arg0() {
            _fun65435: for (var _fun65435_ip = 0;;) switch (_fun65435_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.startDate;
                    var0 = var0.endDate;
                    var2 = null;
                    var1 = var2 != var5;
                    if (!var1) {
                        _fun65435_ip = 28;
                        continue _fun65435
                    }
                case 24:
                    var1 = var2 != var0;
                case 28:
                    if (!var1) {
                        _fun65435_ip = 42;
                        continue _fun65435
                    }
                case 31:
                    var3 = var0.isBefore;
                    var1 = var3.bind(var0)(var5);
                case 42:
                    if (!var1) {
                        _fun65435_ip = 73;
                        continue _fun65435
                    }
                case 45:
                    var1 = var5.clone;
                    var6 = var1.bind(var5)();
                    var4 = var6.add;
                    var3 = 1;
                    var1 = 'hour';
                    var0 = var4.bind(var6)(var3, var1);
                case 73:
                    var4 = _closure2_slot6;
                    var3 = {};
                    var3.startDate = var5;
                    var3.endDate = var0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var0)(var2);
                    return var0;
            }
        };
        var _closure2_slot11 = var5;
        var6 = var12.useEffect;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var9
            _fun65436: for (var _fun65436_ip = 0;;) switch (_fun65436_ip) {
                case 0:
                    var2 = _closure2_slot8;
                    var0 = _closure2_slot10;
                    var1 = null;
                    var5 = var1 == var0;
                    var0 = undefined;
                    var3 = undefined;
                    if (var5) {
                        _fun65436_ip = 38;
                        continue _fun65436
                    }
                case 24:
                    var5 = _closure2_slot10;
                    var4 = var5.getAnyErrorMessage;
                    var3 = var4.bind(var5)();
                case 38:
                    var4 = var1 != var3;
                    var1 = null;
                    if (!var4) {
                        _fun65436_ip = 50;
                        continue _fun65436
                    }
                case 47:
                    var1 = var3;
                case 50:
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var2 = var6.bind(var12)(var2, var5);
        var2 = _closure1_slot7;
        var12 = 11;
        var5 = var7[var12];
        var6 = var13.bind(var3)(var5);
        var5 = {};
        var12 = var7[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.Sizes;
        var12 = var12.MEDIUM;
        var5.size = var12;
        var12 = 12;
        var13 = var7[var12];
        var13 = var1.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var7[var12];
        var12 = var1.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["R3BPH+"];
        var12 = var13.bind(var14)(var12);
        var5.text = var12;
        var5.onPress = var11;
        var8 = var10 != var8;
        var5.disabled = var8;
        var5 = var2.bind(var3)(var6, var5);
        var _closure2_slot12 = var5;
        var6 = {};
        var5 = _closure1_slot10;
        var8 = var5.TIME;
        var0 = {};
        var10 = '';
        var0.title = var10;
        var10 = function() {
            var3 = _closure1_slot7;
            var1 = _closure1_slot1;
            var6 = _closure1_slot3;
            var0 = 13;
            var0 = var6[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = _closure1_slot0;
            var4 = 14;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.EditGuildEventScreens;
            var4 = var4.DETAILS;
            var0.screen = var4;
            var4 = _closure2_slot1;
            var0.onClose = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.customNavbar = var10;
        var10 = function() {
            var0 = null;
            return var0;
        };
        var0.headerLeft = var10;
        var9 = function() {
            _fun65439: for (var _fun65439_ip = 0;;) switch (_fun65439_ip) {
                case 0:
                    var3 = _closure1_slot8;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var0 = 15;
                    var0 = var8[var0];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot12;
                    var0.action = var4;
                    var7 = _closure1_slot7;
                    var4 = 16;
                    var4 = var8[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4.guildEvent = var8;
                    var8 = _closure2_slot2;
                    var4.recurrenceId = var8;
                    var8 = _closure2_slot5;
                    var4.schedule = var8;
                    var8 = _closure2_slot11;
                    var4.onChange = var8;
                    var5 = var7.bind(var2)(var5, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var7 = _closure2_slot7;
                    var5 = null;
                    var7 = var5 != var7;
                    if (!var7) {
                        _fun65439_ip = 180;
                        continue _fun65439
                    }
                case 123:
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 17;
                    var6 = var10[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {
                        'variant': 'text-md/normal',
                        'color': 'text-feedback-critical'
                    };
                    var9 = _closure2_slot7;
                    var6.children = var9;
                    var5 = var8.bind(var2)(var7, var6);
                case 180:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var0.render = var9;
        var9 = true;
        var0.fullscreen = var9;
        var6[var8] = var0;
        var0 = 18;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var6;
        var5 = var5.TIME;
        var0.initialRouteName = var5;
        var5 = false;
        var0.cardShadowEnabled = var5;
        var0.cardOverlayEnabled = var5;
        var4 = var4.cardStyle;
        var0.cardStyle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 1297, 671, 8090, 8086, 8101, 1582, 8102, 4873, 1234, 8107, 8104, 8108, 8109, 4876, 5786, 2]);