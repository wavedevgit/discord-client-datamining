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
    var0 = function() {
        _fun70498: for (var _fun70498_ip = 0;;) switch (_fun70498_ip) {
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
                _fun70498_ip = 76;
                continue _fun70498;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun70501: for (var _fun70501_ip = 0;;) switch (_fun70501_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.onClose;
                var _closure2_slot0 = var9;
                var0 = var0.channelId;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 35;
                var0 = var0[var7];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var5.bind(var6)(var3, var0);
                var _closure2_slot2 = var8;
                var0 = null;
                var5 = var0 == var8;
                var3 = undefined;
                if (var5) {
                    _fun70501_ip = 108;
                    continue _fun70501
                }
            case 98:
                var5 = var8.getGuildId;
                var3 = var5.bind(var8)();
            case 108:
                _closure2_slot3 = var3;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = var6[var7];
                var12 = var3.bind(var4)(var5);
                var11 = var12.useStateFromStoresObject;
                var5 = _closure1_slot14;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var2
                    _fun70503: for (var _fun70503_ip = 0;;) switch (_fun70503_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot14;
                            var4 = var5.getChannelMessageNotifications;
                            var1 = _closure2_slot3;
                            var6 = _closure2_slot1;
                            var1 = var4.bind(var5)(var1, var6);
                            var0.messageNotifications = var1;
                            var5 = _closure1_slot14;
                            var4 = var5.isChannelMuted;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1, var6);
                            var0.muted = var1;
                            var5 = _closure1_slot14;
                            var4 = var5.getChannelMuteConfig;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1, var6);
                            var0.muteConfig = var1;
                            var5 = _closure1_slot14;
                            var4 = var5.isMuted;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1);
                            var0.guildMuted = var1;
                            var5 = _closure1_slot14;
                            var4 = var5.getMessageNotifications;
                            var1 = _closure2_slot3;
                            var1 = var4.bind(var5)(var1);
                            var0.guildMessageNotifications = var1;
                            var4 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun70503_ip = 167;
                                continue _fun70503
                            }
                        case 148:
                            var4 = _closure1_slot14;
                            var3 = var4.getNewForumThreadsCreated;
                            var2 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2);
                        case 167:
                            var0.newForumThreadsCreated = var1;
                            return var0;
                    }
                };
                var5 = var11.bind(var12)(var10, var5);
                var7 = var6[var7];
                var12 = var3.bind(var4)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot12;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var2
                    var2 = _closure1_slot12;
                    var1 = var2.getMemberCount;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var11.bind(var12)(var10, var7);
                var12 = _closure1_slot8;
                var11 = var12.useEffect;
                var10 = new Array(2);
                var10[0] = var8;
                var10[1] = var9;
                var2 = function() { // Environment: var2
                    _fun70505: for (var _fun70505_ip = 0;;) switch (_fun70505_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 == var1)) {
                                _fun70505_ip = 31;
                                continue _fun70505
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun70505_ip = 31;
                                continue _fun70505
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
                var2 = var11.bind(var12)(var2, var10);
                var2 = 36;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useVoiceActivityNotificationSettingsExperiment;
                var6 = var2.bind(var3)(var8);
                var2 = var0 != var8;
                var0 = null;
                if (!var2) {
                    _fun70501_ip = 318;
                    continue _fun70501
                }
            case 265:
                var3 = _closure1_slot22;
                var2 = _closure1_slot26;
                var1 = {};
                var1.onClose = var9;
                var1.channel = var8;
                var15 = var1;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
                var5 = 'guildMemberCount';
                var1[var5] = var7;
                var5 = 'showVoiceActivityNotificationOptions';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 318:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
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
    var7 = var6.isGuildTextChannelType;
    var _closure1_slot9 = var7;
    var6 = var6.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var11.bind(var0)(var6);
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
    var6 = var4.bind(var0)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot16 = var7;
    var7 = var6.UserNotificationSettings;
    var _closure1_slot17 = var7;
    var7 = var6.ChannelTypes;
    var _closure1_slot18 = var7;
    var7 = var6.SettingsPaneTypes;
    var _closure1_slot19 = var7;
    var6 = var6.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot20 = var6;
    var6 = 13;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TABLE_ROW_PADDING;
    var _closure1_slot21 = var6;
    var6 = 14;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot22 = var7;
    var7 = var6.Fragment;
    var _closure1_slot23 = var7;
    var6 = var6.jsxs;
    var _closure1_slot24 = var6;
    var6 = 15;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {};
    var9.flex = var10;
    var10 = 16;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingTop = var10;
    var6.screenContainer = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot25 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun70507: for (var _fun70507_ip = 0;;) switch (_fun70507_ip) {
                case 0:
                    var2 = arg0;
                    var6 = this;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var6, var4);
                    var11 = new Array(1);
                    var11[0] = var2;
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var5)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun70507_ip = 75;
                        continue _fun70507
                    }
                case 62:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun70507_ip = 109;
                    continue _fun70507;
                case 75:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot6;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 109:
                    var0 = var4.bind(var5)(var6, var0);
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var3 = var4.createRef;
                    var3 = var3.bind(var4)();
                    var0.radioGroupRef = var3;
                    var3 = function(arg0, arg1) { // Environment: var1
                        _fun70508: for (var _fun70508_ip = 0;;) switch (_fun70508_ip) {
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
                                    _fun70508_ip = 74;
                                    continue _fun70508
                                }
                            case 48:
                                var6.muted = var4;
                                var4 = null;
                                var7 = var4 != var5;
                                if (!var7) {
                                    _fun70508_ip = 66;
                                    continue _fun70508
                                }
                            case 63:
                                var4 = var5;
                            case 66:
                                var6.mute_config = var4;
                                var2 = true;
                            case 74:
                                if (!(var0 !== var3)) {
                                    _fun70508_ip = 86;
                                    continue _fun70508
                                }
                            case 78:
                                var6.message_notifications = var3;
                                var2 = true;
                            case 86:
                                if (!var2) {
                                    _fun70508_ip = 146;
                                    continue _fun70508
                                }
                            case 89:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 17;
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
                        _fun70509: for (var _fun70509_ip = 0;;) switch (_fun70509_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = var2.state;
                                var4 = var3.muted;
                                var _closure4_slot0 = var4;
                                var2 = var2.props;
                                var8 = var2.channel;
                                if (var4) {
                                    _fun70509_ip = 180;
                                    continue _fun70509
                                }
                            case 40:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var5 = 18;
                                var5 = var2[var5];
                                var9 = undefined;
                                var7 = var6.bind(var9)(var5);
                                var6 = var7.openLazy;
                                var5 = _closure1_slot0;
                                var3 = 20;
                                var3 = var2[var3];
                                var5 = var5.bind(var9)(var3);
                                var3 = 19;
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
                                var8 = function arg0() {
                                    var3 = arg0;
                                    var2 = _closure3_slot0;
                                    var1 = var2.updateSetting;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 21;
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
                                _fun70509_ip = 213;
                                continue _fun70509;
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
                                    var4 = 21;
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
                    var3 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var1.messageNotifications = var4;
                        var0 = function() { // Environment: var0
                            var3 = _closure3_slot0;
                            var2 = var3.updateSetting;
                            var1 = {};
                            var5 = _closure4_slot0;
                            var1.messageNotifications = var5;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 21;
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
                    var0.handleTypeChange = var3;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.handleTypeChange;
                        var0 = _closure1_slot17;
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
        var0 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 22;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.trackWithMetadata;
            var1 = _closure1_slot16;
            var2 = var1.SETTINGS_PANE_VIEWED;
            var1 = {};
            var6 = 'channel';
            var1.settings_type = var6;
            var5 = _closure1_slot19;
            var5 = var5.CHANNEL_NOTIFICATION_SETTINGS;
            var1.destination_pane = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun70516: for (var _fun70516_ip = 0;;) switch (_fun70516_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var3 = var0.muted;
                    var1 = var2.props;
                    var1 = var1.muted;
                    if (!(var3 !== var1)) {
                        _fun70516_ip = 56;
                        continue _fun70516
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
                        _fun70516_ip = 106;
                        continue _fun70516
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
        var6 = 'isSelected';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var0 = var0.props;
            var1 = var0.messageNotifications;
            var0 = arg0;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderMuteSection';
        var4.key = var6;
        var6 = function() {
            _fun70518: for (var _fun70518_ip = 0;;) switch (_fun70518_ip) {
                case 0:
                    var14 = this;
                    var0 = var14.props;
                    var9 = var0.channel;
                    var11 = var0.muteConfig;
                    var0 = var14.state;
                    var6 = var0.muted;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var0 = 23;
                    var0 = var15[var0];
                    var3 = undefined;
                    var5 = var12.bind(var3)(var0);
                    var4 = var5.computeChannelName;
                    var24 = _closure1_slot15;
                    var23 = _closure1_slot13;
                    var22 = true;
                    var26 = var5;
                    var25 = var9;
                    var20 = var26[var4](var25, var24, var23, var22, var21);
                    var2 = _closure1_slot24;
                    var1 = _closure1_slot23;
                    var0 = {};
                    var7 = _closure1_slot22;
                    var4 = 24;
                    var4 = var15[var4];
                    var4 = var12.bind(var3)(var4);
                    var5 = var4.TableRowGroup;
                    var4 = {};
                    var17 = 25;
                    var8 = var15[var17];
                    var8 = var12.bind(var3)(var8);
                    var16 = var8.intl;
                    var13 = var16.string;
                    var8 = var15[var17];
                    var8 = var12.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8["6yI+JS"];
                    var8 = var13.bind(var16)(var8);
                    var4.description = var8;
                    var13 = _closure1_slot22;
                    var8 = 26;
                    var8 = var15[var8];
                    var8 = var12.bind(var3)(var8);
                    var12 = var8.TableRow;
                    var8 = {};
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var18 = var15[var17];
                    var18 = var16.bind(var3)(var18);
                    var19 = var18.intl;
                    var18 = var19.format;
                    var15 = var15[var17];
                    var15 = var16.bind(var3)(var15);
                    var16 = var15.t;
                    if (var6) {
                        _fun70518_ip = 258;
                        continue _fun70518
                    }
                case 236:
                    var17 = var16.byjuJm;
                    var15 = {};
                    var15.name = var20;
                    var15 = var18.bind(var19)(var17, var15);
                    _fun70518_ip = 276;
                    continue _fun70518;
                case 258:
                    var17 = var16["eC+9rj"];
                    var16 = {};
                    var16.name = var20;
                    var15 = var18.bind(var19)(var17, var16);
                case 276:
                    var8.label = var15;
                    var14 = var14.handleToggleMuteChannel;
                    var8.onPress = var14;
                    var14 = !var6;
                    var8.arrow = var14;
                    var8 = var13.bind(var3)(var12, var8);
                    var4.children = var8;
                    var5 = var7.bind(var3)(var5, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = null;
                    if (!var6) {
                        _fun70518_ip = 447;
                        continue _fun70518
                    }
                case 327:
                    var8 = _closure1_slot22;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var12 = 27;
                    var6 = var6[var12];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var6.muteConfig = var11;
                    var11 = var9.type;
                    var9 = _closure1_slot18;
                    var9 = var9.GUILD_CATEGORY;
                    if (!(var11 !== var9)) {
                        _fun70518_ip = 408;
                        continue _fun70518
                    }
                case 377:
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var9 = var11.bind(var3)(var9);
                    var9 = var9.MuteSettingType;
                    var9 = var9.CHANNEL;
                    _fun70518_ip = 437;
                    continue _fun70518;
                case 408:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var12];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.MuteSettingType;
                    var9 = var10.CATEGORY;
                case 437:
                    var6.type = var9;
                    var5 = var8.bind(var3)(var7, var6);
                case 447:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderForumSettings';
        var4.key = var6;
        var6 = function() {
            _fun70519: for (var _fun70519_ip = 0;;) switch (_fun70519_ip) {
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
                    var3 = _closure1_slot22;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 28;
                    var0 = var12[var0];
                    var2 = undefined;
                    var0 = var11.bind(var2)(var0);
                    var1 = var0.TableSwitchRow;
                    var0 = {};
                    var8 = 25;
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
                        _fun70519_ip = 144;
                        continue _fun70519
                    }
                case 141:
                    var5 = var6;
                case 144:
                    var0.disabled = var5;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 17;
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
        var0[4] = var4;
        var4 = {};
        var6 = 'renderNotificationSettings';
        var4.key = var6;
        var6 = function() {
            _fun70521: for (var _fun70521_ip = 0;;) switch (_fun70521_ip) {
                case 0:
                    var7 = this;
                    var0 = var7.props;
                    var1 = var0.channel;
                    var11 = var0.guildMuted;
                    var20 = var0.guildMemberCount;
                    var16 = var0.showVoiceActivityNotificationOptions;
                    if (!var16) {
                        _fun70521_ip = 44;
                        continue _fun70521
                    }
                case 34:
                    var0 = var1.isGuildVoice;
                    var16 = var0.bind(var1)();
                case 44:
                    var0 = var7.state;
                    var10 = var0.muted;
                    var8 = var0.messageNotifications;
                    var0 = var1.isGuildStageVoice;
                    var0 = var0.bind(var1)();
                    var4 = _closure1_slot24;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 29;
                    var1 = var5[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.TableRadioGroup;
                    if (var0) {
                        _fun70521_ip = 757;
                        continue _fun70521
                    }
                case 112:
                    var0 = {};
                    var0.value = var8;
                    var1 = var7.handleTypeChange;
                    var0.onChange = var1;
                    var1 = var7.radioGroupRef;
                    var0.groupRef = var1;
                    var19 = 25;
                    var1 = var5[var19];
                    var1 = var6.bind(var3)(var1);
                    var13 = var1.intl;
                    var12 = var13.string;
                    var1 = var5[var19];
                    var1 = var6.bind(var3)(var1);
                    var1 = var1.t;
                    var1 = var1.h850Ss;
                    var1 = var12.bind(var13)(var1);
                    var0.title = var1;
                    var1 = undefined;
                    if (!var16) {
                        _fun70521_ip = 250;
                        continue _fun70521
                    }
                case 196:
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var13 = var12[var19];
                    var13 = var15.bind(var3)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var12[var19];
                    var12 = var15.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.ztcKQJ;
                    var1 = var13.bind(var14)(var12);
                case 250:
                    var0.description = var1;
                    var14 = _closure1_slot22;
                    var13 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var12 = 30;
                    var1 = var1[var12];
                    var1 = var13.bind(var3)(var1);
                    var13 = var1.TableRadioRow;
                    var1 = {};
                    var17 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var18 = var15[var19];
                    var18 = var17.bind(var3)(var18);
                    var21 = var18.intl;
                    var18 = var21.string;
                    var15 = var15[var19];
                    var15 = var17.bind(var3)(var15);
                    var17 = var15.t;
                    if (var16) {
                        _fun70521_ip = 343;
                        continue _fun70521
                    }
                case 330:
                    var15 = var17["n/bTaY"];
                    var15 = var18.bind(var21)(var15);
                    _fun70521_ip = 356;
                    continue _fun70521;
                case 343:
                    var17 = var17["9sGJkt"];
                    var15 = var18.bind(var21)(var17);
                case 356:
                    var1.label = var15;
                    var15 = var10;
                    if (var10) {
                        _fun70521_ip = 369;
                        continue _fun70521
                    }
                case 366:
                    var15 = var11;
                case 369:
                    var1.disabled = var15;
                    var18 = null;
                    var17 = var18 != var20;
                    var15 = null;
                    if (!var17) {
                        _fun70521_ip = 449;
                        continue _fun70521
                    }
                case 384:
                    var17 = _closure1_slot20;
                    var17 = var20 >= var17;
                    var15 = null;
                    if (!var17) {
                        _fun70521_ip = 449;
                        continue _fun70521
                    }
                case 397:
                    var21 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var18 = var17[var19];
                    var18 = var21.bind(var3)(var18);
                    var20 = var18.intl;
                    var18 = var20.string;
                    var17 = var17[var19];
                    var17 = var21.bind(var3)(var17);
                    var17 = var17.t;
                    var17 = var17.Dh5p5j;
                    var15 = var18.bind(var20)(var17);
                case 449:
                    var1.subLabel = var15;
                    var15 = _closure1_slot17;
                    var15 = var15.ALL_MESSAGES;
                    var1.value = var15;
                    var13 = var14.bind(var3)(var13, var1);
                    var1 = new Array(3);
                    var1[0] = var13;
                    var15 = _closure1_slot22;
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var13 = var13[var12];
                    var13 = var14.bind(var3)(var13);
                    var14 = var13.TableRadioRow;
                    var13 = {};
                    var18 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var20 = var17[var19];
                    var20 = var18.bind(var3)(var20);
                    var21 = var20.intl;
                    var20 = var21.format;
                    var17 = var17[var19];
                    var17 = var18.bind(var3)(var17);
                    var17 = var17.t;
                    if (var16) {
                        _fun70521_ip = 571;
                        continue _fun70521
                    }
                case 555:
                    var18 = var17.L2hmYy;
                    var16 = {};
                    var16 = var20.bind(var21)(var18, var16);
                    _fun70521_ip = 587;
                    continue _fun70521;
                case 571:
                    var18 = var17.cpcXvW;
                    var17 = {};
                    var16 = var20.bind(var21)(var18, var17);
                case 587:
                    var13.label = var16;
                    var16 = var10;
                    if (var10) {
                        _fun70521_ip = 600;
                        continue _fun70521
                    }
                case 597:
                    var16 = var11;
                case 600:
                    var13.disabled = var16;
                    var16 = _closure1_slot17;
                    var16 = var16.ONLY_MENTIONS;
                    var13.value = var16;
                    var13 = var15.bind(var3)(var14, var13);
                    var1[1] = var13;
                    var14 = _closure1_slot22;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = var15[var12];
                    var12 = var18.bind(var3)(var12);
                    var13 = var12.TableRadioRow;
                    var12 = {};
                    var16 = var15[var19];
                    var16 = var18.bind(var3)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var3)(var15);
                    var15 = var15.t;
                    var15 = var15.CtVGyQ;
                    var15 = var16.bind(var17)(var15);
                    var12.label = var15;
                    var15 = var10;
                    if (var10) {
                        _fun70521_ip = 714;
                        continue _fun70521
                    }
                case 711:
                    var15 = var11;
                case 714:
                    var12.disabled = var15;
                    var15 = _closure1_slot17;
                    var15 = var15.NO_MESSAGES;
                    var12.value = var15;
                    var12 = var14.bind(var3)(var13, var12);
                    var1[2] = var12;
                    var0.children = var1;
                    var0 = var4.bind(var3)(var2, var0);
                    _fun70521_ip = 1080;
                    continue _fun70521;
                case 757:
                    var1 = {};
                    var1.value = var8;
                    var8 = var7.handleTypeChange;
                    var1.onChange = var8;
                    var7 = var7.radioGroupRef;
                    var1.groupRef = var7;
                    var13 = 25;
                    var7 = var5[var13];
                    var7 = var6.bind(var3)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var5[var13];
                    var7 = var6.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.h850Ss;
                    var7 = var8.bind(var12)(var7);
                    var1.title = var7;
                    var14 = _closure1_slot22;
                    var12 = 30;
                    var5 = var5[var12];
                    var5 = var6.bind(var3)(var5);
                    var8 = var5.TableRadioRow;
                    var5 = {};
                    var6 = var10;
                    if (var10) {
                        _fun70521_ip = 869;
                        continue _fun70521
                    }
                case 866:
                    var6 = var11;
                case 869:
                    var5.disabled = var6;
                    var6 = _closure1_slot17;
                    var6 = var6.ONLY_MENTIONS;
                    var5.value = var6;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var15 = var6[var13];
                    var15 = var7.bind(var3)(var15);
                    var17 = var15.intl;
                    var16 = var17.string;
                    var15 = var6[var13];
                    var15 = var7.bind(var3)(var15);
                    var15 = var15.t;
                    var15 = var15["BENn/6"];
                    var15 = var16.bind(var17)(var15);
                    var5.label = var15;
                    var8 = var14.bind(var3)(var8, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var8 = _closure1_slot22;
                    var6 = var6[var12];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.TableRadioRow;
                    var6 = {};
                    if (var10) {
                        _fun70521_ip = 986;
                        continue _fun70521
                    }
                case 983:
                    var10 = var11;
                case 986:
                    var6.disabled = var10;
                    var10 = _closure1_slot17;
                    var10 = var10.NO_MESSAGES;
                    var6.value = var10;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var13];
                    var10 = var12.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.CtVGyQ;
                    var9 = var10.bind(var11)(var9);
                    var6.label = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 1080:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun70522: for (var _fun70522_ip = 0;;) switch (_fun70522_ip) {
                case 0:
                    var16 = this;
                    var1 = _closure1_slot25;
                    var0 = var16.context;
                    var4 = undefined;
                    var5 = var1.bind(var4)(var0);
                    var0 = var16.props;
                    var1 = var0.guildMuted;
                    var15 = var0.channel;
                    var2 = var0.guildMessageNotifications;
                    var0 = var0.showVoiceActivityNotificationOptions;
                    var3 = var16.state;
                    var11 = var3.messageNotifications;
                    var3 = _closure1_slot17;
                    var10 = var3.NULL;
                    if (!var0) {
                        _fun70522_ip = 86;
                        continue _fun70522
                    }
                case 76:
                    var3 = var15.isGuildVoice;
                    var0 = var3.bind(var15)();
                case 86:
                    var6 = _closure1_slot9;
                    var3 = var15.type;
                    var8 = var6.bind(var4)(var3);
                    if (var8) {
                        _fun70522_ip = 113;
                        continue _fun70522
                    }
                case 103:
                    var3 = var15.isForumLikeChannel;
                    var8 = var3.bind(var15)();
                case 113:
                    if (var8) {
                        _fun70522_ip = 119;
                        continue _fun70522
                    }
                case 116:
                    var8 = var0;
                case 119:
                    var9 = null;
                    var3 = var9 == var15;
                    var0 = null;
                    if (var3) {
                        _fun70522_ip = 834;
                        continue _fun70522
                    }
                case 133:
                    if (var1) {
                        _fun70522_ip = 275;
                        continue _fun70522
                    }
                case 139:
                    var1 = _closure1_slot17;
                    var1 = var1.NO_MESSAGES;
                    var12 = undefined;
                    if (!(var2 === var1)) {
                        _fun70522_ip = 390;
                        continue _fun70522
                    }
                case 158:
                    var3 = _closure1_slot22;
                    var7 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var1 = 31;
                    var1 = var19[var1];
                    var1 = var7.bind(var4)(var1);
                    var2 = var1.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var6 = 25;
                    var14 = var19[var6];
                    var14 = var7.bind(var4)(var14);
                    var17 = var14.intl;
                    var14 = var17.format;
                    var6 = var19[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.t;
                    var7 = var6.nRwUIL;
                    var6 = {};
                    var19 = function arg0, arg1() {
                        var4 = _closure1_slot22;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 31;
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
                    var6.notificationHook = var19;
                    var6 = var14.bind(var17)(var7, var6);
                    var1.children = var6;
                    var12 = var3.bind(var4)(var2, var1);
                    _fun70522_ip = 390;
                    continue _fun70522;
                case 275:
                    var3 = _closure1_slot22;
                    var7 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var1 = 31;
                    var1 = var19[var1];
                    var1 = var7.bind(var4)(var1);
                    var2 = var1.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var6 = 25;
                    var14 = var19[var6];
                    var14 = var7.bind(var4)(var14);
                    var17 = var14.intl;
                    var14 = var17.format;
                    var6 = var19[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.t;
                    var7 = var6.O34r15;
                    var6 = {};
                    var18 = function arg0, arg1() {
                        var4 = _closure1_slot22;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 31;
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
                    var6.mutedHook = var18;
                    var6 = var14.bind(var17)(var7, var6);
                    var1.children = var6;
                    var12 = var3.bind(var4)(var2, var1);
                case 390:
                    var3 = _closure1_slot22;
                    var6 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var1 = 32;
                    var1 = var18[var1];
                    var1 = var6.bind(var4)(var1);
                    var2 = var1.Form;
                    var1 = {};
                    var5 = var5.screenContainer;
                    var1.style = var5;
                    var7 = _closure1_slot24;
                    var5 = 33;
                    var5 = var18[var5];
                    var5 = var6.bind(var4)(var5);
                    var6 = var5.Stack;
                    var5 = {};
                    var17 = _closure1_slot1;
                    var14 = 16;
                    var14 = var18[var14];
                    var14 = var17.bind(var4)(var14);
                    var14 = var14.spacing;
                    var14 = var14.PX_24;
                    var5.spacing = var14;
                    var14 = {};
                    var17 = _closure1_slot21;
                    var14.paddingHorizontal = var17;
                    var5.style = var14;
                    var14 = null;
                    if (!var8) {
                        _fun70522_ip = 516;
                        continue _fun70522
                    }
                case 506:
                    var8 = var16.renderMuteSection;
                    var14 = var8.bind(var16)();
                case 516:
                    var8 = new Array(5);
                    var8[0] = var14;
                    var14 = var16.renderNotificationSettings;
                    var14 = var14.bind(var16)();
                    var8[1] = var14;
                    var14 = var15.isForumLikeChannel;
                    var15 = var14.bind(var15)();
                    var14 = null;
                    if (!var15) {
                        _fun70522_ip = 660;
                        continue _fun70522
                    }
                case 555:
                    var18 = _closure1_slot22;
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var15 = 24;
                    var15 = var23[var15];
                    var15 = var22.bind(var4)(var15);
                    var17 = var15.TableRowGroup;
                    var15 = {};
                    var19 = 25;
                    var20 = var23[var19];
                    var20 = var22.bind(var4)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var23[var19];
                    var19 = var22.bind(var4)(var19);
                    var19 = var19.t;
                    var19 = var19.bK11jO;
                    var19 = var20.bind(var21)(var19);
                    var15.title = var19;
                    var19 = var16.renderForumSettings;
                    var19 = var19.bind(var16)();
                    var15.children = var19;
                    var14 = var18.bind(var4)(var17, var15);
                case 660:
                    var8[2] = var14;
                    var8[3] = var12;
                    var9 = null;
                    if (!(var11 !== var10)) {
                        _fun70522_ip = 810;
                        continue _fun70522
                    }
                case 677:
                    var12 = _closure1_slot22;
                    var20 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var10 = 24;
                    var10 = var21[var10];
                    var10 = var20.bind(var4)(var10);
                    var11 = var10.TableRowGroup;
                    var10 = {};
                    var15 = _closure1_slot22;
                    var13 = 26;
                    var13 = var21[var13];
                    var13 = var20.bind(var4)(var13);
                    var14 = var13.TableRow;
                    var13 = {};
                    var17 = 25;
                    var18 = var21[var17];
                    var18 = var20.bind(var4)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var17 = var21[var17];
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
                case 810:
                    var8[4] = var9;
                    var5.children = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 834:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot26 = var6;
    var3 = 34;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsNotifications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70525: for (var _fun70525_ip = 0;;) switch (_fun70525_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 35;
                var4 = var3[var4];
                var5 = undefined;
                var8 = var1.bind(var5)(var4);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var4, var0);
                var0 = 37;
                var0 = var3[var0];
                var3 = var1.bind(var5)(var0);
                var1 = var3.useShouldUseNewNotificationSystem;
                var0 = 'ChannelSettingsNotificationsNative';
                var1 = var1.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var7;
                if (var3) {
                    _fun70525_ip = 204;
                    continue _fun70525
                }
            case 102:
                if (!var1) {
                    _fun70525_ip = 127;
                    continue _fun70525
                }
            case 105:
                var4 = _closure1_slot10;
                var3 = var4.has;
                var1 = var7.type;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun70525_ip = 155;
                    continue _fun70525
                }
            case 127:
                var4 = _closure1_slot22;
                var3 = _closure1_slot28;
                var1 = {};
                var11 = var1;
                var10 = var6;
                var8 = copyDataProperties(var11, var10);
                var1 = var4.bind(var5)(var3, var1);
                _fun70525_ip = 201;
                continue _fun70525;
            case 155:
                var4 = _closure1_slot22;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 38;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 1376, 1372, 1599, 3102, 4303, 1621, 660, 4872, 33, 1297, 671, 4698, 3279, 8826, 1307, 4695, 4302, 4794, 5415, 1234, 4900, 8829, 5468, 5474, 5473, 3942, 5430, 4080, 3161, 566, 8830, 8831, 8832, 2]);