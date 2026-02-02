// modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 28;
    var8.marginHorizontal = var9;
    var3.durationsContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'paddingVertical': 20,
        'alignItems': 'center',
        'borderColor': null,
        'borderBottomWidth': 1
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderColor = var9;
    var3.duration = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/message_reminders/native/MessageReminderDurationActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75934: for (var _fun75934_ip = 0;;) switch (_fun75934_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.createReminder;
                var _closure2_slot0 = var11;
                var10 = var1.removeReminder;
                var _closure2_slot1 = var10;
                var2 = var1.channelId;
                var _closure2_slot2 = var2;
                var2 = var1.messageId;
                var _closure2_slot3 = var2;
                var12 = var1.onBack;
                var _closure2_slot4 = var12;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot8;
                var7 = var1.bind(var3)();
                var _closure2_slot5 = var7;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var1 = var2[var1];
                var9 = var5.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = var3.getSavedMessage;
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var13 = var8.bind(var9)(var6, var1);
                var14 = _closure1_slot4;
                var6 = var14.useState;
                var1 = global;
                var1 = var1.Date;
                var8 = var1.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var1
                    }
                });
                var17 = var8;
                var1 = new var17[var1](var16);
                var1 = var1 instanceof Object ? var1 : var8;
                var8 = var6.bind(var14)(var1);
                var6 = _closure1_slot3;
                var1 = 2;
                var8 = var6.bind(var3)(var8, var1);
                var1 = 0;
                var1 = var8[var1];
                var6 = 1;
                var6 = var8[var6];
                var _closure2_slot6 = var6;
                var9 = var14.useEffect;
                var8 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setInterval;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.Millis;
                    var2 = var1.MINUTE;
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot6;
                        var0 = global;
                        var0 = var0.Date;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var4 = var1;
                        var0 = new var4[var0](var3);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var4.bind(var3)(var1, var2);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearInterval;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var6 = new Array(0);
                var6 = var9.bind(var14)(var8, var6);
                var9 = 9;
                var2 = var2[var9];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useDueInString;
                var2 = {};
                var8 = null;
                var14 = var8 == var13;
                var8 = undefined;
                if (var14) {
                    _fun75934_ip = 261;
                    continue _fun75934
                }
            case 249:
                var13 = var13.saveData;
                var8 = var13.dueAt;
            case 261:
                var2.dueAt = var8;
                var2.now = var1;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var9];
                var9 = var1.bind(var3)(var9);
                var9 = var9.DueInStringTypes;
                var9 = var9.SHORT;
                var2.type = var9;
                var2 = var5.bind(var6)(var2);
                var2 = var2.dueInText;
                _closure2_slot7 = var2;
                var9 = _closure1_slot4;
                var6 = var9.useMemo;
                var5 = new Array(2);
                var5[0] = var12;
                var5[1] = var2;
                var2 = function() { // Environment: var0
                    _fun75939: for (var _fun75939_ip = 0;;) switch (_fun75939_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 10;
                            var0 = var4[var0];
                            var2 = undefined;
                            var0 = var8.bind(var2)(var0);
                            var1 = var0.BottomSheetTitleHeader;
                            var0 = {};
                            var12 = 11;
                            var6 = var4[var12];
                            var6 = var8.bind(var2)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var4 = var4[var12];
                            var4 = var8.bind(var2)(var4);
                            var4 = var4.t;
                            var4 = var4.roMu1H;
                            var4 = var6.bind(var7)(var4);
                            var0.title = var4;
                            var4 = _closure2_slot7;
                            var0.subtitle = var4;
                            var6 = _closure2_slot4;
                            var4 = null;
                            var4 = var4 != var6;
                            if (!var4) {
                                _fun75939_ip = 209;
                                continue _fun75939
                            }
                        case 115:
                            var7 = _closure1_slot7;
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 12;
                            var5 = var8[var5];
                            var5 = var11.bind(var2)(var5);
                            var6 = var5.ActionSheetHeaderPressableText;
                            var5 = {};
                            var9 = _closure2_slot4;
                            var5.onPress = var9;
                            var9 = var8[var12];
                            var9 = var11.bind(var2)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var8[var12];
                            var8 = var11.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8["13/7kX"];
                            var8 = var9.bind(var10)(var8);
                            var5.label = var8;
                            var4 = var7.bind(var2)(var6, var5);
                        case 209:
                            var0.leading = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5 = var6.bind(var9)(var2, var5);
                var6 = var9.useMemo;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var10;
                var10 = var7.duration;
                var2[2] = var10;
                var0 = function() { // Environment: var0
                    _fun75940: for (var _fun75940_ip = 0;;) switch (_fun75940_ip) {
                        case 0:
                            var18 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var0 = 13;
                            var0 = var15[var0];
                            var6 = undefined;
                            var0 = var18.bind(var6)(var0);
                            var2 = var0.MESSAGE_REMINDER_DURATION_ITEMS;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var1 = var0.getDueAt;
                                var _closure4_slot0 = var1;
                                var0 = var0.getLabel;
                                var4 = _closure1_slot7;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var1 = 14;
                                var1 = var7[var1];
                                var3 = undefined;
                                var1 = var6.bind(var3)(var1);
                                var2 = var1.PressableOpacity;
                                var1 = {};
                                var8 = 'button';
                                var1.accessibilityRole = var8;
                                var8 = var0.bind(var3)();
                                var1.accessibilityLabel = var8;
                                var8 = _closure2_slot5;
                                var8 = var8.duration;
                                var1.style = var8;
                                var5 = function() {
                                    var2 = _closure2_slot0;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    var1 = var2.bind(var0)(var1);
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 15;
                                    var1 = var3[var1];
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.hideActionSheet;
                                    var1 = var1.bind(var2)();
                                    return var0;
                                };
                                var1.onPress = var5;
                                var5 = 16;
                                var5 = var7[var5];
                                var5 = var6.bind(var3)(var5);
                                var6 = var5.Text;
                                var5 = {
                                    'variant': 'text-md/semibold',
                                    'color': 'interactive-text-active'
                                };
                                var7 = var0.bind(var3)();
                                var5.children = var7;
                                var5 = var4.bind(var3)(var6, var5);
                                var1.children = var5;
                                var6 = var0.bind(var3)();
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var5 = var0.concat;
                                var0 = 'create-reminder-';
                                var0 = var5.bind(var0)(var6);
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var5 = var0.push;
                            var13 = _closure1_slot7;
                            var3 = 14;
                            var1 = var15[var3];
                            var1 = var18.bind(var6)(var1);
                            var11 = var1.PressableOpacity;
                            var8 = {};
                            var10 = 'button';
                            var8.accessibilityRole = var10;
                            var12 = 11;
                            var1 = var15[var12];
                            var1 = var18.bind(var6)(var1);
                            var9 = var1.intl;
                            var2 = var9.string;
                            var1 = var15[var12];
                            var1 = var18.bind(var6)(var1);
                            var1 = var1.t;
                            var1 = var1.OLA8Zi;
                            var1 = var2.bind(var9)(var1);
                            var8.accessibilityLabel = var1;
                            var1 = _closure2_slot5;
                            var1 = var1.duration;
                            var8.style = var1;
                            var1 = function() {
                                var2 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 15;
                                var1 = var7[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var1 = var4.hideActionSheet;
                                var1 = var1.bind(var4)();
                                var1 = 17;
                                var4 = var7[var1];
                                var6 = var2.bind(var0)(var4);
                                var5 = var6.pushLazy;
                                var4 = _closure1_slot0;
                                var3 = 19;
                                var3 = var7[var3];
                                var8 = var4.bind(var0)(var3);
                                var3 = 18;
                                var4 = var7[var3];
                                var3 = var7.paths;
                                var4 = var8.bind(var0)(var4, var3);
                                var3 = {};
                                var1 = var7[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.pop;
                                var1 = var1.bind(var2)();
                                var3.onClose = var1;
                                var1 = _closure2_slot0;
                                var3.createReminder = var1;
                                var2 = {};
                                var1 = 'modal';
                                var2.presentation = var1;
                                var10 = 'create-reminder-custom';
                                var13 = var6;
                                var12 = var4;
                                var11 = var3;
                                var9 = var2;
                                var1 = var13[var5](var12, var11, var10, var9, var8);
                                return var0;
                            };
                            var8.onPress = var1;
                            var1 = 16;
                            var2 = var15[var1];
                            var2 = var18.bind(var6)(var2);
                            var14 = var2.Text;
                            var2 = {
                                'variant': 'text-md/semibold',
                                'color': 'interactive-text-active'
                            };
                            var16 = var15[var12];
                            var16 = var18.bind(var6)(var16);
                            var17 = var16.intl;
                            var16 = var17.string;
                            var15 = var15[var12];
                            var15 = var18.bind(var6)(var15);
                            var15 = var15.t;
                            var15 = var15.OLA8Zi;
                            var15 = var16.bind(var17)(var15);
                            var2.children = var15;
                            var2 = var13.bind(var6)(var14, var2);
                            var8.children = var2;
                            var2 = 'create-reminder-custom';
                            var2 = var13.bind(var6)(var11, var8, var2);
                            var2 = var5.bind(var0)(var2);
                            var5 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun75940_ip = 499;
                                continue _fun75940
                            }
                        case 285:
                            var2 = var0.push;
                            var5 = _closure1_slot7;
                            var11 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = var8[var3];
                            var3 = var11.bind(var6)(var3);
                            var4 = var3.PressableOpacity;
                            var3 = {};
                            var3.accessibilityRole = var10;
                            var10 = var8[var12];
                            var10 = var11.bind(var6)(var10);
                            var14 = var10.intl;
                            var13 = var14.string;
                            var10 = var8[var12];
                            var10 = var11.bind(var6)(var10);
                            var10 = var10.t;
                            var10 = var10["1Gzslf"];
                            var10 = var13.bind(var14)(var10);
                            var3.accessibilityLabel = var10;
                            var9 = _closure2_slot5;
                            var9 = var9.duration;
                            var3.style = var9;
                            var7 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var3.onPress = var7;
                            var1 = var8[var1];
                            var1 = var11.bind(var6)(var1);
                            var7 = var1.Text;
                            var1 = {
                                'variant': 'text-md/semibold',
                                'color': 'text-feedback-critical'
                            };
                            var9 = var8[var12];
                            var9 = var11.bind(var6)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var8[var12];
                            var8 = var11.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8["1Gzslf"];
                            var8 = var9.bind(var10)(var8);
                            var1.children = var8;
                            var1 = var5.bind(var6)(var7, var1);
                            var3.children = var1;
                            var1 = 'remove-reminder';
                            var1 = var5.bind(var6)(var4, var3, var1);
                            var1 = var2.bind(var0)(var1);
                        case 499:
                            return var0;
                    }
                };
                var6 = var6.bind(var9)(var0, var2);
                var2 = _closure1_slot7;
                var0 = 20;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.header = var5;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var7.durationsContainer;
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9588, 33, 1297, 671, 566, 667, 9598, 5176, 1234, 5175, 9602, 4867, 3239, 3902, 4527, 9603, 1307, 4896, 2]);