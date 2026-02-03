// components_native/InAppNotificationSettingsModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun69966: for (var _fun69966_ip = 0;;) switch (_fun69966_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun69966_ip = 76;
                continue _fun69966;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        var4 = _closure1_slot10;
        var1 = var4.getChannel;
        var0 = arg0;
        var0 = var1.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = {};
        var4 = function() {
            _fun69970: for (var _fun69970_ip = 0;;) switch (_fun69970_ip) {
                case 0:
                    var10 = _closure2_slot0;
                    var3 = _closure1_slot16;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 21;
                    var0 = var9[var0];
                    var2 = undefined;
                    var0 = var8.bind(var2)(var0);
                    var1 = var0.NavigatorHeader;
                    var0 = {};
                    var4 = 18;
                    var6 = var9[var4];
                    var6 = var8.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var4 = var9[var4];
                    var4 = var8.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.h850Ss;
                    var4 = var6.bind(var7)(var4);
                    var0.title = var4;
                    var4 = null;
                    var6 = var4 != var10;
                    if (!var6) {
                        _fun69970_ip = 150;
                        continue _fun69970
                    }
                case 104:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 16;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.computeChannelName;
                    var13 = _closure1_slot13;
                    var12 = _closure1_slot11;
                    var11 = true;
                    var15 = var9;
                    var14 = var10;
                    var4 = var15[var8](var14, var13, var12, var11, var10);
                case 150:
                    var0.subtitle = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var1.headerTitle = var4;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 21;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.getHeaderCloseButton;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var1.headerLeft = var3;
        var2 = function() {
            var3 = _closure1_slot16;
            var2 = _closure1_slot19;
            var1 = {};
            var0 = _closure2_slot0;
            var1.channel = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1.render = var2;
        var0.IN_APP_NOTIFICATION_SETTINGS = var1;
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isMultiUserDM;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot14 = var7;
    var3 = var3.UserSettingsSections;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot16 = var7;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var7 = var6.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun69973: for (var _fun69973_ip = 0;;) switch (_fun69973_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun69973_ip = 86;
                        continue _fun69973
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun69973_ip = 120;
                    continue _fun69973;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function() { // Environment: var1
                        _fun69974: for (var _fun69974_ip = 0;;) switch (_fun69974_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.channel;
                                var0 = var0.isMuted;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun69974_ip = 134;
                                    continue _fun69974
                                }
                            case 29:
                                var3 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 13;
                                var2 = var9[var2];
                                var8 = undefined;
                                var5 = var3.bind(var8)(var2);
                                var4 = var5.updateChannelOverrideSettings;
                                var2 = var1.getGuildId;
                                var3 = var2.bind(var1)();
                                var12 = var1.id;
                                var1 = {};
                                var7 = !var0;
                                var1.muted = var7;
                                var7 = _closure1_slot0;
                                var6 = 14;
                                var6 = var9[var6];
                                var6 = var7.bind(var8)(var6);
                                var7 = var6.NotificationLabel;
                                var6 = var7.muted;
                                var0 = !var0;
                                var10 = var6.bind(var7)(var0);
                                var14 = var5;
                                var13 = var3;
                                var11 = var1;
                                var0 = var14[var4](var13, var12, var11, var10, var9);
                            case 134:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleGroupDMMute = var2;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot15;
                        var4 = var4.NOTIFICATIONS;
                        var1.screen = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleOpenUserSettings = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'renderGroupDMNotificationSettings';
        var4.key = var0;
        var0 = function() {
            _fun69976: for (var _fun69976_ip = 0;;) switch (_fun69976_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var7 = var0.channel;
                    var9 = var0.isMuted;
                    var0 = null;
                    if (!(var0 != var7)) {
                        _fun69976_ip = 212;
                        continue _fun69976
                    }
                case 28:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var1 = 16;
                    var1 = var15[var1];
                    var4 = undefined;
                    var5 = var11.bind(var4)(var1);
                    var3 = var5.computeChannelName;
                    var2 = _closure1_slot13;
                    var1 = _closure1_slot11;
                    var14 = var3.bind(var5)(var7, var2, var1);
                    var3 = _closure1_slot16;
                    var5 = 17;
                    var1 = var15[var5];
                    var1 = var11.bind(var4)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var7 = _closure1_slot16;
                    var5 = var15[var5];
                    var5 = var11.bind(var4)(var5);
                    var6 = var5.FormSwitchRow;
                    var5 = {};
                    var10 = 18;
                    var12 = var15[var10];
                    var12 = var11.bind(var4)(var12);
                    var13 = var12.intl;
                    var12 = var13.format;
                    var10 = var15[var10];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.t;
                    var11 = var10["u/rEuc"];
                    var10 = {};
                    var10.name = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var5.label = var10;
                    var5.value = var9;
                    var8 = var8.handleGroupDMMute;
                    var5.onValueChange = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var1.children = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                case 212:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'renderTextChannelNotificationSettings';
        var4.key = var6;
        var6 = function() {
            _fun69977: for (var _fun69977_ip = 0;;) switch (_fun69977_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var5 = var0.channel;
                    var0 = null;
                    var1 = var0 == var5;
                    if (var1) {
                        _fun69977_ip = 68;
                        continue _fun69977
                    }
                case 22:
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 19;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = var5.id;
                    var1.channelId = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'renderChannelNotificationSettings';
        var4.key = var6;
        var6 = function() {
            _fun69978: for (var _fun69978_ip = 0;;) switch (_fun69978_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var1 = var0.channel;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun69978_ip = 99;
                        continue _fun69978
                    }
                case 19:
                    var3 = var1.type;
                    var4 = _closure1_slot14;
                    var4 = var4.GROUP_DM;
                    if (!(var4 !== var3)) {
                        _fun69978_ip = 85;
                        continue _fun69978
                    }
                case 41:
                    var4 = _closure1_slot14;
                    var4 = var4.GUILD_TEXT;
                    if (!(var4 !== var3)) {
                        _fun69978_ip = 71;
                        continue _fun69978
                    }
                case 55:
                    var1 = _closure1_slot14;
                    var1 = var1.GUILD_ANNOUNCEMENT;
                    if (!(var1 !== var3)) {
                        _fun69978_ip = 71;
                        continue _fun69978
                    }
                case 69:
                    return var0;
                case 71:
                    var1 = var2.renderTextChannelNotificationSettings;
                    var1 = var1.bind(var2)();
                    return var1;
                case 85:
                    var1 = var2.renderGroupDMNotificationSettings;
                    var1 = var1.bind(var2)();
                    return var1;
                case 99:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            var16 = this;
            var3 = _closure1_slot17;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 17;
            var0 = var12[var5];
            var2 = undefined;
            var0 = var11.bind(var2)(var0);
            var1 = var0.Form;
            var0 = {};
            var4 = var16.renderChannelNotificationSettings;
            var7 = var4.bind(var16)();
            var4 = new Array(3);
            var4[0] = var7;
            var10 = _closure1_slot16;
            var7 = var12[var5];
            var7 = var11.bind(var2)(var7);
            var9 = var7.FormSection;
            var7 = {};
            var8 = 18;
            var13 = var12[var8];
            var13 = var11.bind(var2)(var13);
            var15 = var13.intl;
            var14 = var15.string;
            var13 = var12[var8];
            var13 = var11.bind(var2)(var13);
            var13 = var13.t;
            var13 = var13.clE4PU;
            var13 = var14.bind(var15)(var13);
            var7.title = var13;
            var15 = _closure1_slot16;
            var13 = var12[var5];
            var13 = var11.bind(var2)(var13);
            var14 = var13.FormRow;
            var13 = {};
            var17 = var12[var8];
            var17 = var11.bind(var2)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = var12[var8];
            var17 = var11.bind(var2)(var17);
            var17 = var17.t;
            var17 = var17.cHMaba;
            var17 = var18.bind(var19)(var17);
            var13.label = var17;
            var16 = var16.handleOpenUserSettings;
            var13.onPress = var16;
            var18 = _closure1_slot16;
            var16 = var12[var5];
            var16 = var11.bind(var2)(var16);
            var16 = var16.FormRow;
            var17 = var16.Arrow;
            var16 = {};
            var16 = var18.bind(var2)(var17, var16);
            var13.trailing = var16;
            var13 = var15.bind(var2)(var14, var13);
            var7.children = var13;
            var7 = var10.bind(var2)(var9, var7);
            var4[1] = var7;
            var7 = _closure1_slot16;
            var5 = var12[var5];
            var5 = var11.bind(var2)(var5);
            var6 = var5.FormHint;
            var5 = {};
            var9 = var12[var8];
            var9 = var11.bind(var2)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var2)(var8);
            var8 = var8.t;
            var8 = var8.avgbp1;
            var8 = var9.bind(var10)(var8);
            var5.children = var8;
            var5 = var7.bind(var2)(var6, var5);
            var4[2] = var5;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var7);
    var _closure1_slot18 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.channel;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 20;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var4 = var6.useStateFromStores;
        var7 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var1
            _fun69981: for (var _fun69981_ip = 0;;) switch (_fun69981_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var2 = var0 != var2;
                    var4 = undefined;
                    var0 = undefined;
                    if (!var2) {
                        _fun69981_ip = 81;
                        continue _fun69981
                    }
                case 20:
                    var5 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var3 = var3.type;
                    var3 = var5.bind(var4)(var3);
                    var0 = undefined;
                    if (!var3) {
                        _fun69981_ip = 81;
                        continue _fun69981
                    }
                case 46:
                    var4 = _closure1_slot12;
                    var3 = var4.isChannelMuted;
                    var1 = _closure2_slot0;
                    var2 = var1.getGuildId;
                    var2 = var2.bind(var1)();
                    var1 = var1.id;
                    var0 = var3.bind(var4)(var2, var1);
                case 81:
                    return var0;
            }
        };
        var4 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot16;
        var1 = _closure1_slot18;
        var0 = {};
        var0.channel = var5;
        var0.isMuted = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.channelId;
        var _closure2_slot0 = var6;
        var5 = var0.onClose;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot8;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot21;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4 = var3.bind(var4)(var1, var2);
        var3 = _closure1_slot16;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 22;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var4;
        var4 = 'IN_APP_NOTIFICATION_SETTINGS';
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/InAppNotificationSettingsModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 1376, 1372, 3100, 4303, 1621, 660, 33, 4698, 4695, 5922, 4792, 5378, 1234, 8754, 566, 4705, 5786, 2]);