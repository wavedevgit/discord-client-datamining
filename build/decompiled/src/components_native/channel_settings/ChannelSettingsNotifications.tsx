// components_native/channel_settings/ChannelSettingsNotifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun69738: for (var _fun69738_ip = 0;;) switch (_fun69738_ip) {
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
                _fun69738_ip = 76;
                continue _fun69738;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: ChannelSettingsNotificationsGuard, environment: var1
        _fun69741: for (var _fun69741_ip = 0;;) switch (_fun69741_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.onClose;
                var _closure2_slot0 = var12;
                var0 = var0.channelId;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 32;
                var0 = var0[var6];
                var7 = var2.bind(var4)(var0);
                var3 = var7.useStateFromStores;
                var0 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot12;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var3.bind(var7)(var2, var0);
                var _closure2_slot2 = var11;
                var0 = null;
                var3 = var0 == var11;
                var2 = undefined;
                if (var3) {
                    _fun69741_ip = 108;
                    continue _fun69741
                }
            case 98:
                var3 = var11.getGuildId;
                var2 = var3.bind(var11)();
            case 108:
                _closure2_slot3 = var2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = var3[var6];
                var10 = var2.bind(var4)(var7);
                var9 = var10.useStateFromStoresObject;
                var7 = _closure1_slot15;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var1
                    _fun69743: for (var _fun69743_ip = 0;;) switch (_fun69743_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot15;
                            var4 = var5.getChannelMessageNotifications;
                            var1 = _closure2_slot3;
                            var6 = _closure2_slot1;
                            var1 = var4.bind(var5)(var1, var6);
                            var0.messageNotifications = var1;
                            var5 = _closure1_slot15;
                            var4 = var5.isChannelMuted;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1, var6);
                            var0.muted = var1;
                            var5 = _closure1_slot15;
                            var4 = var5.getChannelMuteConfig;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1, var6);
                            var0.muteConfig = var1;
                            var5 = _closure1_slot15;
                            var4 = var5.isMuted;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1);
                            var0.guildMuted = var1;
                            var5 = _closure1_slot15;
                            var4 = var5.getMessageNotifications;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1);
                            var0.guildMessageNotifications = var1;
                            var4 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun69743_ip = 167;
                                continue _fun69743
                            }
                        case 148:
                            var4 = _closure1_slot15;
                            var3 = var4.getNewForumThreadsCreated;
                            var2 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2);
                        case 167:
                            var0.newForumThreadsCreated = var1;
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8, var7);
                var6 = var3[var6];
                var10 = var2.bind(var4)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot13;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var1
                    var2 = _closure1_slot13;
                    var1 = var2.getMemberCount;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var9.bind(var10)(var7, var6);
                var9 = _closure1_slot8;
                var7 = var9.useEffect;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var12;
                var1 = function() { // Environment: var1
                    _fun69745: for (var _fun69745_ip = 0;;) switch (_fun69745_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun69745_ip = 31;
                                continue _fun69745
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun69745_ip = 31;
                                continue _fun69745
                            }
                        case 21:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var9)(var1, var6);
                var1 = 33;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useVoiceActivityNotificationSettingsExperiment;
                var9 = var1.bind(var2)(var11);
                var1 = var0 != var11;
                var0 = null;
                if (!var1) {
                    _fun69741_ip = 360;
                    continue _fun69741
                }
            case 265:
                var3 = _closure1_slot23;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 29;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot23;
                var6 = _closure1_slot27;
                var5 = {};
                var5.onClose = var12;
                var5.channel = var11;
                var15 = var5;
                var14 = var8;
                var8 = copyDataProperties(var15, var14);
                var8 = 'guildMemberCount';
                var5[var8] = var10;
                var8 = 'showVoiceActivityNotificationOptions';
                var5[var8] = var9;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 360:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.isGuildTextChannelType;
    var _closure1_slot10 = var7;
    var6 = var6.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot16 = var6;
    var6 = 13;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot17 = var7;
    var7 = var6.UserNotificationSettings;
    var _closure1_slot18 = var7;
    var7 = var6.ChannelTypes;
    var _closure1_slot19 = var7;
    var7 = var6.SettingsPaneTypes;
    var _closure1_slot20 = var7;
    var6 = var6.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot21 = var6;
    var6 = 14;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TitleStyleType;
    var _closure1_slot22 = var6;
    var6 = 15;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot23 = var7;
    var7 = var6.Fragment;
    var _closure1_slot24 = var7;
    var6 = var6.jsxs;
    var _closure1_slot25 = var6;
    var6 = 16;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {};
    var9.flex = var10;
    var10 = 17;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var6.screenContainer = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot26 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: ChannelSettingsNotifications, environment: var5
            _fun69747: for (var _fun69747_ip = 0;;) switch (_fun69747_ip) {
                case 0:
                    var2 = arg0;
                    var5 = this;
                    var0 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var10 = new Array(1);
                    var10[0] = var2;
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun69747_ip = 75;
                        continue _fun69747
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun69747_ip = 109;
                    continue _fun69747;
                case 75:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = function(arg0, arg1) { // Environment: var1
                        _fun69748: for (var _fun69748_ip = 0;;) switch (_fun69748_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.muted;
                                var3 = var0.messageNotifications;
                                var5 = var0.mute_config;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.channel;
                                var6 = {};
                                var0 = undefined;
                                var2 = false;
                                if (!(var0 !== var4)) {
                                    _fun69748_ip = 74;
                                    continue _fun69748
                                }
                            case 48:
                                var6.muted = var4;
                                var4 = null;
                                var7 = var4 != var5;
                                if (!var7) {
                                    _fun69748_ip = 66;
                                    continue _fun69748
                                }
                            case 63:
                                var4 = var5;
                            case 66:
                                var6.mute_config = var4;
                                var2 = true;
                            case 74:
                                if (!(var0 !== var3)) {
                                    _fun69748_ip = 86;
                                    continue _fun69748
                                }
                            case 78:
                                var6.message_notifications = var3;
                                var2 = true;
                            case 86:
                                if (!var2) {
                                    _fun69748_ip = 146;
                                    continue _fun69748
                                }
                            case 89:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 18;
                                var2 = var4[var2];
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.updateChannelOverrideSettings;
                                var2 = var1.getGuildId;
                                var11 = var2.bind(var1)();
                                var10 = var1.id;
                                var8 = arg1;
                                var12 = var5;
                                var9 = var6;
                                var1 = var12[var4](var11, var10, var9, var8, var7);
                            case 146:
                                return var0;
                        }
                    };
                    var0.updateSetting = var3;
                    var3 = function() { // Environment: var1
                        _fun69749: for (var _fun69749_ip = 0;;) switch (_fun69749_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.state;
                                var4 = var3.muted;
                                var _closure4_slot0 = var4;
                                var2 = var2.props;
                                var8 = var2.channel;
                                if (var4) {
                                    _fun69749_ip = 180;
                                    continue _fun69749
                                }
                            case 40:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var5 = 19;
                                var5 = var2[var5];
                                var9 = undefined;
                                var7 = var6.bind(var9)(var5);
                                var6 = var7.openLazy;
                                var5 = _closure1_slot0;
                                var3 = 21;
                                var3 = var2[var3];
                                var5 = var5.bind(var9)(var3);
                                var3 = 20;
                                var3 = var2[var3];
                                var2 = var2.paths;
                                var5 = var5.bind(var9)(var3, var2);
                                var9 = var8.id;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var3 = var2.concat;
                                var2 = 'muteSettings';
                                var3 = var3.bind(var2)(var9);
                                var2 = {};
                                var9 = var8.getGuildId;
                                var9 = var9.bind(var8)();
                                var2.guildId = var9;
                                var8 = var8.id;
                                var2.channelId = var8;
                                var8 = function(arg0) { // Original name: onOptionPress, environment: var0
                                    var3 = arg0;
                                    var2 = _closure3_slot0;
                                    var1 = var2.updateSetting;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 22;
                                    var4 = var4[var0];
                                    var0 = undefined;
                                    var0 = var5.bind(var0)(var4);
                                    var5 = var0.NotificationLabel;
                                    var4 = var5.muted;
                                    var0 = var3.muted;
                                    var0 = var4.bind(var5)(var0);
                                    var0 = var1.bind(var2)(var3, var0);
                                    return var0;
                                };
                                var2.onOptionPress = var8;
                                var2 = var6.bind(var7)(var5, var3, var2);
                                _fun69749_ip = 213;
                                continue _fun69749;
                            case 180:
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = !var4;
                                var1.muted = var4;
                                var0 = function() { // Environment: var0
                                    var3 = _closure3_slot0;
                                    var2 = var3.updateSetting;
                                    var1 = {};
                                    var0 = _closure4_slot0;
                                    var4 = !var0;
                                    var1.muted = var4;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var4 = 22;
                                    var5 = var5[var4];
                                    var4 = undefined;
                                    var4 = var6.bind(var4)(var5);
                                    var5 = var4.NotificationLabel;
                                    var4 = var5.muted;
                                    var0 = !var0;
                                    var0 = var4.bind(var5)(var0);
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                            case 213:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleToggleMuteChannel = var3;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot18;
                        var0 = var0.NULL;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleResetNotification = var1;
                    var1 = {};
                    var3 = var2.messageNotifications;
                    var1.messageNotifications = var3;
                    var2 = var2.muted;
                    var1.muted = var2;
                    var0.state = var1;
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
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 23;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot17;
            var2 = var1.SETTINGS_PANE_VIEWED;
            var1 = {};
            var6 = 'channel';
            var1.settings_type = var6;
            var5 = _closure1_slot20;
            var5 = var5.CHANNEL_NOTIFICATION_SETTINGS;
            var1.destination_pane = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun69754: for (var _fun69754_ip = 0;;) switch (_fun69754_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var3 = var0.muted;
                    var1 = var2.props;
                    var1 = var1.muted;
                    if (!(var3 !== var1)) {
                        _fun69754_ip = 56;
                        continue _fun69754
                    }
                case 27:
                    var3 = var2.setState;
                    var1 = {};
                    var4 = var2.props;
                    var4 = var4.muted;
                    var1.muted = var4;
                    var1 = var3.bind(var2)(var1);
                case 56:
                    var1 = var0.messageNotifications;
                    var0 = var2.props;
                    var0 = var0.messageNotifications;
                    if (!(var1 !== var0)) {
                        _fun69754_ip = 106;
                        continue _fun69754
                    }
                case 77:
                    var1 = var2.setState;
                    var0 = {};
                    var3 = var2.props;
                    var3 = var3.messageNotifications;
                    var0.messageNotifications = var3;
                    var0 = var1.bind(var2)(var0);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleTypeChange';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var4 = arg0;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var4;
            var2 = var3.setState;
            var1 = {};
            var1.messageNotifications = var4;
            var0 = function() { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3.updateSetting;
                var1 = {};
                var5 = _closure3_slot1;
                var1.messageNotifications = var5;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 22;
                var4 = var4[var0];
                var0 = undefined;
                var0 = var6.bind(var0)(var4);
                var4 = var0.NotificationLabel;
                var0 = var4.notifications;
                var0 = var0.bind(var4)(var5);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSelected';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = this;
            var0 = var0.props;
            var1 = var0.messageNotifications;
            var0 = arg0;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderMuteSection';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun69758: for (var _fun69758_ip = 0;;) switch (_fun69758_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.props;
                    var9 = var0.channel;
                    var11 = var0.muteConfig;
                    var0 = var5.state;
                    var6 = var0.muted;
                    var13 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 24;
                    var0 = var12[var0];
                    var3 = undefined;
                    var7 = var13.bind(var3)(var0);
                    var4 = var7.computeChannelName;
                    var25 = _closure1_slot16;
                    var24 = _closure1_slot14;
                    var23 = true;
                    var27 = var7;
                    var26 = var9;
                    var21 = var27[var4](var26, var25, var24, var23, var22);
                    var2 = _closure1_slot25;
                    var1 = _closure1_slot24;
                    var0 = {};
                    var8 = _closure1_slot23;
                    var19 = 25;
                    var4 = var12[var19];
                    var4 = var13.bind(var3)(var4);
                    var7 = var4.FormSection;
                    var4 = {};
                    var16 = _closure1_slot23;
                    var14 = var12[var19];
                    var14 = var13.bind(var3)(var14);
                    var15 = var14.FormHint;
                    var14 = {};
                    var17 = 26;
                    var18 = var12[var17];
                    var18 = var13.bind(var3)(var18);
                    var22 = var18.intl;
                    var20 = var22.string;
                    var18 = var12[var17];
                    var18 = var13.bind(var3)(var18);
                    var18 = var18.t;
                    var18 = var18["6yI+JS"];
                    var18 = var20.bind(var22)(var18);
                    var14.children = var18;
                    var14 = var16.bind(var3)(var15, var14);
                    var4.hint = var14;
                    var14 = _closure1_slot23;
                    var12 = var12[var19];
                    var12 = var13.bind(var3)(var12);
                    var13 = var12.FormRow;
                    var12 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var18 = var15[var17];
                    var18 = var16.bind(var3)(var18);
                    var20 = var18.intl;
                    var18 = var20.format;
                    var15 = var15[var17];
                    var15 = var16.bind(var3)(var15);
                    var16 = var15.t;
                    if (var6) {
                        _fun69758_ip = 287;
                        continue _fun69758
                    }
                case 265:
                    var17 = var16.byjuJm;
                    var15 = {};
                    var15.name = var21;
                    var15 = var18.bind(var20)(var17, var15);
                    _fun69758_ip = 305;
                    continue _fun69758;
                case 287:
                    var17 = var16["eC+9rj"];
                    var16 = {};
                    var16.name = var21;
                    var15 = var18.bind(var20)(var17, var16);
                case 305:
                    var12.label = var15;
                    var5 = var5.handleToggleMuteChannel;
                    var12.onPress = var5;
                    var15 = null;
                    if (var6) {
                        _fun69758_ip = 365;
                        continue _fun69758
                    }
                case 324:
                    var18 = _closure1_slot23;
                    var17 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var16 = var16[var19];
                    var16 = var17.bind(var3)(var16);
                    var16 = var16.FormRow;
                    var17 = var16.Arrow;
                    var16 = {};
                    var15 = var18.bind(var3)(var17, var16);
                case 365:
                    var12.trailing = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var4.children = var12;
                    var7 = var8.bind(var3)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var7;
                    var5 = null;
                    if (!var6) {
                        _fun69758_ip = 519;
                        continue _fun69758
                    }
                case 399:
                    var8 = _closure1_slot23;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var12 = 27;
                    var6 = var6[var12];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var6.muteConfig = var11;
                    var11 = var9.type;
                    var9 = _closure1_slot19;
                    var9 = var9.GUILD_CATEGORY;
                    if (!(var11 !== var9)) {
                        _fun69758_ip = 480;
                        continue _fun69758
                    }
                case 449:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var9 = var11.bind(var3)(var9);
                    var9 = var9.MuteSettingType;
                    var9 = var9.CHANNEL;
                    _fun69758_ip = 509;
                    continue _fun69758;
                case 480:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.MuteSettingType;
                    var9 = var10.CATEGORY;
                case 509:
                    var6.type = var9;
                    var5 = var8.bind(var3)(var7, var6);
                case 519:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'renderForumSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun69759: for (var _fun69759_ip = 0;;) switch (_fun69759_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.props;
                    var2 = var1.channel;
                    var _closure3_slot0 = var2;
                    var7 = var1.newForumThreadsCreated;
                    var _closure3_slot1 = var7;
                    var6 = var1.guildMuted;
                    var0 = var0.state;
                    var5 = var0.muted;
                    var3 = _closure1_slot23;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 25;
                    var0 = var12[var0];
                    var2 = undefined;
                    var0 = var11.bind(var2)(var0);
                    var1 = var0.FormSwitchRow;
                    var0 = {};
                    var8 = 26;
                    var9 = var12[var8];
                    var9 = var11.bind(var2)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.Rkgjph;
                    var8 = var9.bind(var10)(var8);
                    var0.label = var8;
                    var0.value = var7;
                    if (var5) {
                        _fun69759_ip = 144;
                        continue _fun69759
                    }
                case 141:
                    var5 = var6;
                case 144:
                    var0.disabled = var5;
                    var4 = function() { // Original name: onValueChange, environment: var4
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.setForumThreadsCreated;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot1;
                        var1 = !var1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.onValueChange = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'renderNotificationSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun69761: for (var _fun69761_ip = 0;;) switch (_fun69761_ip) {
                case 0:
                    var14 = this;
                    var _closure3_slot0 = var14;
                    var0 = var14.props;
                    var1 = var0.channel;
                    var11 = var0.guildMuted;
                    var17 = var0.guildMemberCount;
                    var15 = var0.showVoiceActivityNotificationOptions;
                    if (!var15) {
                        _fun69761_ip = 50;
                        continue _fun69761
                    }
                case 40:
                    var0 = var1.isGuildVoice;
                    var15 = var0.bind(var1)();
                case 50:
                    var0 = var14.state;
                    var10 = var0.muted;
                    var0 = var1.isGuildStageVoice;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot25;
                    if (var0) {
                        _fun69761_ip = 806;
                        continue _fun69761
                    }
                case 84:
                    var2 = _closure1_slot9;
                    var1 = {};
                    var0 = 'radiogroup';
                    var1.accessibilityRole = var0;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var18 = 26;
                    var5 = var3[var18];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var5);
                    var8 = var5.intl;
                    var7 = var8.string;
                    var5 = var3[var18];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.h850Ss;
                    var5 = var7.bind(var8)(var5);
                    var1.accessibilityLabel = var5;
                    var7 = _closure1_slot23;
                    var5 = 25;
                    var3 = var3[var5];
                    var3 = var6.bind(var0)(var3);
                    var6 = var3.FormRadioRow;
                    var3 = {};
                    var13 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var16 = var8[var18];
                    var16 = var13.bind(var0)(var16);
                    var19 = var16.intl;
                    var16 = var19.string;
                    var8 = var8[var18];
                    var8 = var13.bind(var0)(var8);
                    var13 = var8.t;
                    if (var15) {
                        _fun69761_ip = 242;
                        continue _fun69761
                    }
                case 229:
                    var8 = var13["n/bTaY"];
                    var8 = var16.bind(var19)(var8);
                    _fun69761_ip = 255;
                    continue _fun69761;
                case 242:
                    var13 = var13["9sGJkt"];
                    var8 = var16.bind(var19)(var13);
                case 255:
                    var3.label = var8;
                    var8 = var10;
                    if (var10) {
                        _fun69761_ip = 268;
                        continue _fun69761
                    }
                case 265:
                    var8 = var11;
                case 268:
                    var3.disabled = var8;
                    var16 = null;
                    var13 = var16 != var17;
                    var8 = null;
                    if (!var13) {
                        _fun69761_ip = 348;
                        continue _fun69761
                    }
                case 283:
                    var13 = _closure1_slot21;
                    var13 = var17 >= var13;
                    var8 = null;
                    if (!var13) {
                        _fun69761_ip = 348;
                        continue _fun69761
                    }
                case 296:
                    var19 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var16 = var13[var18];
                    var16 = var19.bind(var0)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var13 = var13[var18];
                    var13 = var19.bind(var0)(var13);
                    var13 = var13.t;
                    var13 = var13.Dh5p5j;
                    var8 = var16.bind(var17)(var13);
                case 348:
                    var3.subLabel = var8;
                    var8 = function() { // Original name: onPress, environment: var9
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot18;
                        var0 = var0.ALL_MESSAGES;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3.onPress = var8;
                    var13 = var14.isSelected;
                    var8 = _closure1_slot18;
                    var8 = var8.ALL_MESSAGES;
                    var8 = var13.bind(var14)(var8);
                    var3.selected = var8;
                    var8 = 'right';
                    var3.align = var8;
                    var6 = var7.bind(var0)(var6, var3);
                    var3 = new Array(5);
                    var3[0] = var6;
                    var17 = _closure1_slot23;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var13 = var6[var5];
                    var13 = var7.bind(var0)(var13);
                    var16 = var13.FormDivider;
                    var13 = {};
                    var13 = var17.bind(var0)(var16, var13);
                    var3[1] = var13;
                    var13 = _closure1_slot23;
                    var6 = var6[var5];
                    var6 = var7.bind(var0)(var6);
                    var7 = var6.FormRadioRow;
                    var6 = {};
                    var17 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var19 = var16[var18];
                    var19 = var17.bind(var0)(var19);
                    var20 = var19.intl;
                    var19 = var20.format;
                    var16 = var16[var18];
                    var16 = var17.bind(var0)(var16);
                    var16 = var16.t;
                    if (var15) {
                        _fun69761_ip = 533;
                        continue _fun69761
                    }
                case 517:
                    var17 = var16.L2hmYy;
                    var15 = {};
                    var15 = var19.bind(var20)(var17, var15);
                    _fun69761_ip = 549;
                    continue _fun69761;
                case 533:
                    var17 = var16.cpcXvW;
                    var16 = {};
                    var15 = var19.bind(var20)(var17, var16);
                case 549:
                    var6.label = var15;
                    var15 = var10;
                    if (var10) {
                        _fun69761_ip = 562;
                        continue _fun69761
                    }
                case 559:
                    var15 = var11;
                case 562:
                    var6.disabled = var15;
                    var15 = function() { // Original name: onPress, environment: var9
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot18;
                        var0 = var0.ONLY_MENTIONS;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.onPress = var15;
                    var16 = var14.isSelected;
                    var15 = _closure1_slot18;
                    var15 = var15.ONLY_MENTIONS;
                    var15 = var16.bind(var14)(var15);
                    var6.selected = var15;
                    var6.align = var8;
                    var6 = var13.bind(var0)(var7, var6);
                    var3[2] = var6;
                    var15 = _closure1_slot23;
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = var13[var5];
                    var6 = var17.bind(var0)(var6);
                    var7 = var6.FormDivider;
                    var6 = {};
                    var6 = var15.bind(var0)(var7, var6);
                    var3[3] = var6;
                    var7 = _closure1_slot23;
                    var5 = var13[var5];
                    var5 = var17.bind(var0)(var5);
                    var6 = var5.FormRadioRow;
                    var5 = {};
                    var15 = var13[var18];
                    var15 = var17.bind(var0)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var13[var18];
                    var13 = var17.bind(var0)(var13);
                    var13 = var13.t;
                    var13 = var13.CtVGyQ;
                    var13 = var15.bind(var16)(var13);
                    var5.label = var13;
                    var13 = var10;
                    if (var10) {
                        _fun69761_ip = 735;
                        continue _fun69761
                    }
                case 732:
                    var13 = var11;
                case 735:
                    var5.disabled = var13;
                    var13 = function() { // Original name: onPress, environment: var9
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot18;
                        var0 = var0.NO_MESSAGES;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5.onPress = var13;
                    var15 = var14.isSelected;
                    var13 = _closure1_slot18;
                    var13 = var13.NO_MESSAGES;
                    var13 = var15.bind(var14)(var13);
                    var5.selected = var13;
                    var5.align = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var3[4] = var5;
                    var1.children = var3;
                    var0 = var4.bind(var0)(var2, var1);
                    _fun69761_ip = 1222;
                    continue _fun69761;
                case 806:
                    var3 = _closure1_slot24;
                    var2 = {};
                    var7 = _closure1_slot23;
                    var17 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var13 = 25;
                    var5 = var8[var13];
                    var1 = undefined;
                    var5 = var17.bind(var1)(var5);
                    var6 = var5.FormRow;
                    var5 = {};
                    var19 = 26;
                    var15 = var8[var19];
                    var15 = var17.bind(var1)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var8 = var8[var19];
                    var8 = var17.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8["BENn/6"];
                    var8 = var15.bind(var16)(var8);
                    var5.label = var8;
                    var8 = var10;
                    if (var10) {
                        _fun69761_ip = 908;
                        continue _fun69761
                    }
                case 905:
                    var8 = var11;
                case 908:
                    var5.disabled = var8;
                    var8 = function() { // Original name: onPress, environment: var9
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot18;
                        var0 = var0.ONLY_MENTIONS;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5.onPress = var8;
                    var17 = _closure1_slot23;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var8 = var15[var13];
                    var8 = var18.bind(var1)(var8);
                    var8 = var8.FormRow;
                    var16 = var8.Checkmark;
                    var8 = {};
                    var21 = var14.isSelected;
                    var20 = _closure1_slot18;
                    var20 = var20.ONLY_MENTIONS;
                    var20 = var21.bind(var14)(var20);
                    var8.selected = var20;
                    var8 = var17.bind(var1)(var16, var8);
                    var5.trailing = var8;
                    var6 = var7.bind(var1)(var6, var5);
                    var5 = new Array(3);
                    var5[0] = var6;
                    var8 = _closure1_slot23;
                    var6 = var15[var13];
                    var6 = var18.bind(var1)(var6);
                    var7 = var6.FormDivider;
                    var6 = {};
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var8 = _closure1_slot23;
                    var6 = var15[var13];
                    var6 = var18.bind(var1)(var6);
                    var7 = var6.FormRow;
                    var6 = {};
                    var16 = var15[var19];
                    var16 = var18.bind(var1)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.CtVGyQ;
                    var15 = var16.bind(var17)(var15);
                    var6.label = var15;
                    if (var10) {
                        _fun69761_ip = 1115;
                        continue _fun69761
                    }
                case 1112:
                    var10 = var11;
                case 1115:
                    var6.disabled = var10;
                    var9 = function() { // Original name: onPress, environment: var9
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot18;
                        var0 = var0.NO_MESSAGES;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.onPress = var9;
                    var11 = _closure1_slot23;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.FormRow;
                    var10 = var9.Checkmark;
                    var9 = {};
                    var13 = var14.isSelected;
                    var12 = _closure1_slot18;
                    var12 = var12.NO_MESSAGES;
                    var12 = var13.bind(var14)(var12);
                    var9.selected = var12;
                    var9 = var11.bind(var1)(var10, var9);
                    var6.trailing = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[2] = var6;
                    var2.children = var5;
                    var0 = var4.bind(var1)(var3, var2);
                case 1222:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun69767: for (var _fun69767_ip = 0;;) switch (_fun69767_ip) {
                case 0:
                    var16 = this;
                    var0 = var16.props;
                    var1 = var0.guildMuted;
                    var17 = var0.channel;
                    var2 = var0.guildMessageNotifications;
                    var21 = var0.showVoiceActivityNotificationOptions;
                    var0 = var16.state;
                    var12 = var0.messageNotifications;
                    var3 = _closure1_slot26;
                    var0 = var16.context;
                    var4 = undefined;
                    var15 = var3.bind(var4)(var0);
                    var0 = _closure1_slot18;
                    var11 = var0.NULL;
                    if (!var21) {
                        _fun69767_ip = 86;
                        continue _fun69767
                    }
                case 76:
                    var0 = var17.isGuildVoice;
                    var21 = var0.bind(var17)();
                case 86:
                    var3 = _closure1_slot10;
                    var0 = var17.type;
                    var8 = var3.bind(var4)(var0);
                    if (var8) {
                        _fun69767_ip = 113;
                        continue _fun69767
                    }
                case 103:
                    var0 = var17.isForumLikeChannel;
                    var8 = var0.bind(var17)();
                case 113:
                    if (var8) {
                        _fun69767_ip = 119;
                        continue _fun69767
                    }
                case 116:
                    var8 = var21;
                case 119:
                    var9 = null;
                    var3 = var9 == var17;
                    var0 = null;
                    if (var3) {
                        _fun69767_ip = 981;
                        continue _fun69767
                    }
                case 133:
                    if (var1) {
                        _fun69767_ip = 264;
                        continue _fun69767
                    }
                case 139:
                    var1 = _closure1_slot18;
                    var1 = var1.NO_MESSAGES;
                    var14 = undefined;
                    if (!(var2 === var1)) {
                        _fun69767_ip = 368;
                        continue _fun69767
                    }
                case 158:
                    var3 = _closure1_slot23;
                    var6 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var1 = 25;
                    var1 = var19[var1];
                    var1 = var6.bind(var4)(var1);
                    var2 = var1.FormHint;
                    var1 = {};
                    var5 = 26;
                    var7 = var19[var5];
                    var7 = var6.bind(var4)(var7);
                    var10 = var7.intl;
                    var7 = var10.format;
                    var5 = var19[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.t;
                    var6 = var5.nRwUIL;
                    var5 = {};
                    var19 = function(arg0, arg1) { // Original name: notificationHook, environment: var18
                        var4 = _closure1_slot23;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 28;
                        var0 = var2[var0];
                        var3 = undefined;
                        var0 = var1.bind(var3)(var0);
                        var2 = var0.Text;
                        var1 = {
                            'variant': 'text-sm/medium',
                            'color': 'text-feedback-warning'
                        };
                        var0 = arg0;
                        var1.children = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var5.notificationHook = var19;
                    var5 = var7.bind(var10)(var6, var5);
                    var1.children = var5;
                    var14 = var3.bind(var4)(var2, var1);
                    _fun69767_ip = 368;
                    continue _fun69767;
                case 264:
                    var3 = _closure1_slot23;
                    var6 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var1 = 25;
                    var1 = var19[var1];
                    var1 = var6.bind(var4)(var1);
                    var2 = var1.FormHint;
                    var1 = {};
                    var5 = 26;
                    var7 = var19[var5];
                    var7 = var6.bind(var4)(var7);
                    var10 = var7.intl;
                    var7 = var10.format;
                    var5 = var19[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.t;
                    var6 = var5.O34r15;
                    var5 = {};
                    var18 = function(arg0, arg1) { // Original name: mutedHook, environment: var18
                        var4 = _closure1_slot23;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 28;
                        var0 = var2[var0];
                        var3 = undefined;
                        var0 = var1.bind(var3)(var0);
                        var2 = var0.Text;
                        var1 = {
                            'variant': 'text-sm/medium',
                            'color': 'text-feedback-critical'
                        };
                        var0 = arg0;
                        var1.children = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var5.mutedHook = var18;
                    var5 = var7.bind(var10)(var6, var5);
                    var1.children = var5;
                    var14 = var3.bind(var4)(var2, var1);
                case 368:
                    var3 = _closure1_slot23;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 29;
                    var1 = var5[var1];
                    var1 = var6.bind(var4)(var1);
                    var2 = var1.RedesignCompat;
                    var1 = {};
                    var7 = _closure1_slot25;
                    var10 = 25;
                    var5 = var5[var10];
                    var5 = var6.bind(var4)(var5);
                    var6 = var5.Form;
                    var5 = {};
                    var15 = var15.screenContainer;
                    var5.style = var15;
                    var15 = null;
                    if (!var8) {
                        _fun69767_ip = 449;
                        continue _fun69767
                    }
                case 439:
                    var8 = var16.renderMuteSection;
                    var15 = var8.bind(var16)();
                case 449:
                    var8 = new Array(5);
                    var8[0] = var15;
                    var19 = _closure1_slot23;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var15 = var15[var10];
                    var15 = var18.bind(var4)(var15);
                    var18 = var15.FormSection;
                    var15 = {};
                    var20 = null;
                    if (!var21) {
                        _fun69767_ip = 579;
                        continue _fun69767
                    }
                case 491:
                    var23 = _closure1_slot23;
                    var27 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var21 = var28[var10];
                    var21 = var27.bind(var4)(var21);
                    var22 = var21.FormHint;
                    var21 = {};
                    var24 = 26;
                    var25 = var28[var24];
                    var25 = var27.bind(var4)(var25);
                    var26 = var25.intl;
                    var25 = var26.string;
                    var24 = var28[var24];
                    var24 = var27.bind(var4)(var24);
                    var24 = var24.t;
                    var24 = var24.ztcKQJ;
                    var24 = var25.bind(var26)(var24);
                    var21.children = var24;
                    var20 = var23.bind(var4)(var22, var21);
                case 579:
                    var15.hint = var20;
                    var20 = _closure1_slot22;
                    var20 = var20.ANDROID_NO_BORDER;
                    var15.titleStyleType = var20;
                    var24 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var21 = 26;
                    var22 = var20[var21];
                    var22 = var24.bind(var4)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var20 = var20[var21];
                    var20 = var24.bind(var4)(var20);
                    var20 = var20.t;
                    var20 = var20.h850Ss;
                    var20 = var22.bind(var23)(var20);
                    var15.title = var20;
                    var20 = var16.renderNotificationSettings;
                    var20 = var20.bind(var16)();
                    var15.children = var20;
                    var15 = var19.bind(var4)(var18, var15);
                    var8[1] = var15;
                    var15 = var17.isForumLikeChannel;
                    var17 = var15.bind(var17)();
                    var15 = null;
                    if (!var17) {
                        _fun69767_ip = 813;
                        continue _fun69767
                    }
                case 699:
                    var19 = _closure1_slot23;
                    var24 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var17 = var20[var10];
                    var17 = var24.bind(var4)(var17);
                    var18 = var17.FormSection;
                    var17 = {};
                    var22 = _closure1_slot22;
                    var22 = var22.ANDROID_NO_BORDER;
                    var17.titleStyleType = var22;
                    var22 = var20[var21];
                    var22 = var24.bind(var4)(var22);
                    var23 = var22.intl;
                    var22 = var23.string;
                    var20 = var20[var21];
                    var20 = var24.bind(var4)(var20);
                    var20 = var20.t;
                    var20 = var20.bK11jO;
                    var20 = var22.bind(var23)(var20);
                    var17.title = var20;
                    var20 = var16.renderForumSettings;
                    var20 = var20.bind(var16)();
                    var17.children = var20;
                    var15 = var19.bind(var4)(var18, var17);
                case 813:
                    var8[2] = var15;
                    var8[3] = var14;
                    var9 = null;
                    if (!(var12 !== var11)) {
                        _fun69767_ip = 957;
                        continue _fun69767
                    }
                case 830:
                    var12 = _closure1_slot23;
                    var20 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var10 = var17[var10];
                    var10 = var20.bind(var4)(var10);
                    var11 = var10.FormSection;
                    var10 = {};
                    var15 = _closure1_slot23;
                    var13 = 30;
                    var13 = var17[var13];
                    var13 = var20.bind(var4)(var13);
                    var14 = var13.TableRow;
                    var13 = {};
                    var18 = var17[var21];
                    var18 = var20.bind(var4)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var17 = var17[var21];
                    var17 = var20.bind(var4)(var17);
                    var17 = var17.t;
                    var17 = var17["3PBFN6"];
                    var17 = var18.bind(var19)(var17);
                    var13.label = var17;
                    var16 = var16.handleResetNotification;
                    var13.onPress = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var10.children = var13;
                    var9 = var12.bind(var4)(var11, var10);
                case 957:
                    var8[4] = var9;
                    var5.children = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 981:
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot27 = var6;
    var3 = 31;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsNotifications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelSettingsNotificationsSplit, environment: var1
        _fun69770: for (var _fun69770_ip = 0;;) switch (_fun69770_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 32;
                var4 = var3[var4];
                var5 = undefined;
                var8 = var1.bind(var5)(var4);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot12;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var4, var0);
                var0 = 34;
                var0 = var3[var0];
                var3 = var1.bind(var5)(var0);
                var1 = var3.useShouldUseNewNotificationSystem;
                var0 = 'ChannelSettingsNotificationsNative';
                var1 = var1.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var7;
                if (var3) {
                    _fun69770_ip = 204;
                    continue _fun69770
                }
            case 102:
                if (!var1) {
                    _fun69770_ip = 127;
                    continue _fun69770
                }
            case 105:
                var4 = _closure1_slot11;
                var3 = var4.has;
                var1 = var7.type;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun69770_ip = 155;
                    continue _fun69770
                }
            case 127:
                var4 = _closure1_slot23;
                var3 = _closure1_slot29;
                var1 = {};
                var11 = var1;
                var10 = var6;
                var8 = copyDataProperties(var11, var10);
                var1 = var4.bind(var5)(var3, var1);
                _fun69770_ip = 201;
                continue _fun69770;
            case 155:
                var4 = _closure1_slot23;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 35;
                var2 = var8[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var2.channel = var7;
                var11 = var2;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var1 = var4.bind(var5)(var3, var2);
            case 201:
                var0 = var1;
            case 204:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1376, 1372, 1599, 3059, 4266, 1613, 660, 4836, 33, 1297, 671, 4660, 3237, 8702, 1307, 4657, 4265, 4754, 5339, 1234, 8705, 3901, 4859, 4860, 3118, 566, 8706, 8707, 8708, 2]);