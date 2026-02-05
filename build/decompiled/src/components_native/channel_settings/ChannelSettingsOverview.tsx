// components_native/channel_settings/ChannelSettingsOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun108853: for (var _fun108853_ip = 0;;) switch (_fun108853_ip) {
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
                _fun108853_ip = 76;
                continue _fun108853;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot57 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot57 = var0;
    var1 = function arg0() {
        _fun108856: for (var _fun108856_ip = 0;;) switch (_fun108856_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var6 = var1.style;
                var1 = _closure1_slot54;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 30;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useStateFromStores;
                var7 = _closure1_slot22;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot22;
                    var1 = var2.hasUnreadPins;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var5)(var1, var0);
                var5 = undefined;
                if (!var0) {
                    _fun108856_ip = 143;
                    continue _fun108856
                }
            case 87:
                var2 = _closure1_slot51;
                var1 = _closure1_slot10;
                var0 = {};
                var7 = var10.outer;
                var0.style = var7;
                var9 = _closure1_slot51;
                var8 = _closure1_slot10;
                var7 = {};
                var10 = var10.badge;
                var7.style = var10;
                var7 = var9.bind(var3)(var8, var7);
                var0.children = var7;
                var5 = var2.bind(var3)(var1, var0);
            case 143:
                var2 = _closure1_slot52;
                var1 = _closure1_slot10;
                var0 = {};
                var0.style = var6;
                var7 = _closure1_slot51;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 31;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.PinIcon;
                var4 = {};
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot58 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var11 = 0;
    var4 = var6[var11];
    var0 = undefined;
    var4 = var13.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var19 = 1;
    var4 = var6[var19];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var16 = 4;
    var4 = var6[var16];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot9 = var4;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.EDITABLE_VOICE_SETTINGS_TYPES;
    var _closure1_slot12 = var8;
    var8 = var7.isGuildTextChannelType;
    var _closure1_slot13 = var8;
    var8 = var7.THREADED_CHANNEL_TYPES;
    var _closure1_slot14 = var8;
    var7 = var7.THREAD_CHANNEL_TYPES;
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.isGuildNSFW;
    var _closure1_slot16 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var14 = 14;
    var7 = var6[var14];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot20 = var7;
    var18 = 15;
    var7 = var6[var18];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot21 = var7;
    var17 = 16;
    var7 = var6[var17];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot22 = var7;
    var7 = 17;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot23 = var7;
    var7 = 18;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot24 = var7;
    var7 = 19;
    var7 = var6[var7];
    var7 = var13.bind(var0)(var7);
    var _closure1_slot25 = var7;
    var7 = 20;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.ChannelSettingsAutoFocusElement;
    var _closure1_slot26 = var7;
    var7 = 21;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot27 = var8;
    var8 = var7.BITRATE_DEFAULT;
    var _closure1_slot28 = var8;
    var8 = var7.BITRATE_MIN;
    var _closure1_slot29 = var8;
    var8 = var7.ChannelSettingsSections;
    var _closure1_slot30 = var8;
    var8 = var7.ChannelTypes;
    var _closure1_slot31 = var8;
    var8 = var7.ChannelTypesSets;
    var _closure1_slot32 = var8;
    var8 = var7.GuildFeatures;
    var _closure1_slot33 = var8;
    var8 = var7.GuildSettingsSections;
    var _closure1_slot34 = var8;
    var8 = var7.HelpdeskArticles;
    var _closure1_slot35 = var8;
    var8 = var7.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot36 = var8;
    var8 = var7.MAX_VOICE_USER_LIMIT;
    var _closure1_slot37 = var8;
    var8 = var7.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot38 = var8;
    var8 = var7.Permissions;
    var _closure1_slot39 = var8;
    var8 = var7.SettingsPaneTypes;
    var _closure1_slot40 = var8;
    var8 = var7.SLOWMODE_VALUES;
    var _closure1_slot41 = var8;
    var8 = var7.UNSAFE_Colors;
    var _closure1_slot42 = var8;
    var8 = var7.VideoQualityMode;
    var _closure1_slot43 = var8;
    var7 = var7.PIN_AND_BYPASS_SLOWMODE_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot44 = var7;
    var7 = 22;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.ChannelFlags;
    var _closure1_slot45 = var8;
    var8 = var7.MAX_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot46 = var8;
    var7 = var7.MAX_FORUM_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot47 = var7;
    var7 = 23;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.MAX_FORUM_TAGS;
    var _closure1_slot48 = var7;
    var7 = 24;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot49 = var7;
    var7 = 25;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.TitleStyleType;
    var _closure1_slot50 = var7;
    var7 = 26;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var15 = var7.Fonts;
    var7 = 27;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot51 = var8;
    var8 = var7.jsxs;
    var _closure1_slot52 = var8;
    var7 = var7.Fragment;
    var _closure1_slot53 = var7;
    var7 = 28;
    var8 = var6[var7];
    var10 = var5.bind(var0)(var8);
    var9 = var10.createStyles;
    var8 = {};
    var20 = {
        'position': 'absolute',
        'top': 2,
        'right': 4294967292,
        'width': 12,
        'height': 12,
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = 29;
    var21 = var6[var12];
    var21 = var13.bind(var0)(var21);
    var21 = var21.radii;
    var21 = var21.md;
    var20.borderRadius = var21;
    var21 = var6[var12];
    var21 = var13.bind(var0)(var21);
    var21 = var21.colors;
    var21 = var21.BACKGROUND_SURFACE_HIGH;
    var20.backgroundColor = var21;
    var8.outer = var20;
    var20 = {
        'backgroundColor': null,
        'width': 8,
        'height': 8
    };
    var21 = var6[var12];
    var21 = var13.bind(var0)(var21);
    var21 = var21.unsafe_rawColors;
    var21 = var21.RED_400;
    var20.backgroundColor = var21;
    var21 = var6[var12];
    var21 = var13.bind(var0)(var21);
    var21 = var21.radii;
    var21 = var21.xs;
    var20.borderRadius = var21;
    var8.badge = var20;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot54 = var8;
    var7 = var6[var7];
    var9 = var5.bind(var0)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var10.flex = var19;
    var19 = var6[var12];
    var19 = var13.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var19;
    var7.screenContainer = var10;
    var10 = {};
    var10.marginHorizontal = var18;
    var7.slider = var10;
    var10 = {};
    var18 = var6[var12];
    var18 = var13.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.CARD_BACKGROUND_DEFAULT;
    var10.backgroundColor = var18;
    var7.sliderWrapper = var10;
    var10 = {};
    var10.marginTop = var17;
    var7.alertText = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'paddingHorizontal': 12,
        'paddingBottom': 24
    };
    var7.tagsWrapper = var10;
    var10 = {};
    var10.paddingHorizontal = var16;
    var7.tagsDescription = var10;
    var10 = {
        'justifyContent': 'center',
        'margin': 4
    };
    var7.addTagIconButtonWrapper = var10;
    var10 = {
        'backgroundColor': 'transparent',
        'paddingHorizontal': 0,
        'marginTop': 4
    };
    var7.createTagButton = var10;
    var10 = {};
    var15 = var15.PRIMARY_SEMIBOLD;
    var10.fontFamily = var15;
    var10.fontSize = var14;
    var7.createTagButtonText = var10;
    var10 = {};
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var14;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var10.borderColor = var12;
    var7.deleteButton = var10;
    var10 = {};
    var10.paddingTop = var11;
    var7.tagsTitle = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot55 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun108859: for (var _fun108859_ip = 0;;) switch (_fun108859_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var4, var3);
                    var10 = new Array(1);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var5)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot57;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun108859_ip = 75;
                        continue _fun108859
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun108859_ip = 109;
                    continue _fun108859;
                case 75:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var5)(var4);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var3.bind(var5)(var4, var0);
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 32;
                    var3 = var6[var3];
                    var7 = var4.bind(var5)(var3);
                    var6 = var7.findIndex;
                    var4 = _closure1_slot41;
                    var3 = function(arg0) { // Environment: var2
                        var0 = _closure3_slot0;
                        var0 = var0.props;
                        var0 = var0.channel;
                        var1 = var0.rateLimitPerUser;
                        var0 = arg0;
                        var0 = var0 >= var1;
                        return var0;
                    };
                    var3 = var6.bind(var7)(var4, var3);
                    var0._cooldown = var3;
                    var3 = {};
                    var4 = false;
                    var3.hasChanges = var4;
                    var0.state = var3;
                    var4 = _closure1_slot9;
                    var3 = var4.createRef;
                    var3 = var3.bind(var4)();
                    var0.defaultSortOrderRadioGroupRef = var3;
                    var3 = var4.createRef;
                    var3 = var3.bind(var4)();
                    var0.defaultTagSettingRadioGroupRef = var3;
                    var3 = var4.createRef;
                    var3 = var3.bind(var4)();
                    var0.videoQualityModeRadioGroupRef = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun108861: for (var _fun108861_ip = 0;;) switch (_fun108861_ip) {
                            case 0:
                                var5 = 0;
                                var10 = 0;
                                var4 = copyRestArgs(var10);
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.navigation;
                                var1 = var2.push;
                                var0 = new Array(0);
                                var10 = var0;
                                var9 = var4;
                                var8 = 0;
                                var3 = arraySpread(var10, var9, var8);
                                var10 = var1;
                                var9 = var0;
                                var8 = var2;
                                var0 = apply(var10, var9, var8);
                                var1 = var4[var5];
                                var0 = _closure1_slot30;
                                var0 = var0.PERMISSIONS;
                                if (!(var1 !== var0)) {
                                    _fun108861_ip = 160;
                                    continue _fun108861
                                }
                            case 81:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 33;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.trackWithMetadata;
                                var0 = _closure1_slot27;
                                var1 = var0.SETTINGS_PANE_VIEWED;
                                var0 = {};
                                var7 = 'channel';
                                var0.settings_type = var7;
                                var6 = _closure1_slot40;
                                var6 = var6.CHANNEL_SETTINGS;
                                var0.origin_pane = var6;
                                var4 = var4[var5];
                                var0.destination_pane = var4;
                                var0 = var2.bind(var3)(var1, var0);
                            case 160:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.pushScreen = var3;
                    var3 = function() { // Environment: var2
                        _fun108862: for (var _fun108862_ip = 0;;) switch (_fun108862_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var2 = var2.hasChanges;
                                if (!var2) {
                                    _fun108862_ip = 385;
                                    continue _fun108862
                                }
                            case 26:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var6 = var2.channel;
                                var _closure4_slot0 = var6;
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 34;
                                var2 = var4[var2];
                                var7 = undefined;
                                var5 = var3.bind(var7)(var2);
                                var4 = var5.saveChannel;
                                var3 = var6.id;
                                var2 = {};
                                var8 = var6.name;
                                var2.name = var8;
                                var8 = var6.type;
                                var2.type = var8;
                                var8 = var6.topic;
                                var2.topic = var8;
                                var8 = var6.position;
                                var2.position = var8;
                                var8 = var6.bitrate;
                                var2.bitrate = var8;
                                var8 = var6.userLimit;
                                var2.userLimit = var8;
                                var8 = var6.defaultAutoArchiveDuration;
                                var2.defaultAutoArchiveDuration = var8;
                                var8 = var6.nsfw;
                                var2.nsfw = var8;
                                var8 = var6.rateLimitPerUser;
                                var2.rateLimitPerUser = var8;
                                var8 = var6.videoQualityMode;
                                var2.videoQualityMode = var8;
                                var10 = var6.threadMetadata;
                                var9 = null;
                                var11 = var9 == var10;
                                var8 = undefined;
                                if (var11) {
                                    _fun108862_ip = 209;
                                    continue _fun108862
                                }
                            case 203:
                                var8 = var10.autoArchiveDuration;
                            case 209:
                                var2.autoArchiveDuration = var8;
                                var10 = var6.threadMetadata;
                                var11 = var9 == var10;
                                var8 = undefined;
                                if (var11) {
                                    _fun108862_ip = 235;
                                    continue _fun108862
                                }
                            case 229:
                                var8 = var10.locked;
                            case 235:
                                var2.locked = var8;
                                var8 = var6.threadMetadata;
                                var9 = var9 == var8;
                                var7 = undefined;
                                if (var9) {
                                    _fun108862_ip = 261;
                                    continue _fun108862
                                }
                            case 255:
                                var7 = var8.invitable;
                            case 261:
                                var2.invitable = var7;
                                var7 = var6.flags;
                                var2.flags = var7;
                                var7 = var6.getDefaultSortOrder;
                                var7 = var7.bind(var6)();
                                var2.defaultSortOrder = var7;
                                var7 = var6.defaultForumLayout;
                                var2.defaultForumLayout = var7;
                                var7 = var6.getDefaultTagSetting;
                                var7 = var7.bind(var6)();
                                var2.defaultTagSetting = var7;
                                var7 = var6.iconEmoji;
                                var2.iconEmoji = var7;
                                var6 = var6.themeColor;
                                var2.themeColor = var6;
                                var3 = var4.bind(var5)(var3, var2);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var1
                                    _fun108863: for (var _fun108863_ip = 0;;) switch (_fun108863_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.status;
                                            var0 = 200;
                                            if (!(var0 === var1)) {
                                                _fun108863_ip = 206;
                                                continue _fun108863
                                            }
                                        case 18:
                                            var5 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var0 = 35;
                                            var0 = var6[var0];
                                            var8 = undefined;
                                            var2 = var5.bind(var8)(var0);
                                            var1 = var2.open;
                                            var0 = {};
                                            var3 = 'THREAD_SETTINGS_UPDATED';
                                            var0.key = var3;
                                            var3 = 36;
                                            var3 = var6[var3];
                                            var3 = var5.bind(var8)(var3);
                                            var0.icon = var3;
                                            var5 = _closure4_slot0;
                                            var3 = var5.isThread;
                                            var3 = var3.bind(var5)();
                                            var7 = _closure1_slot0;
                                            var9 = _closure1_slot2;
                                            var4 = 37;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var6 = var5.intl;
                                            var5 = var6.string;
                                            var4 = var9[var4];
                                            var4 = var7.bind(var8)(var4);
                                            var4 = var4.t;
                                            if (var3) {
                                                _fun108863_ip = 156;
                                                continue _fun108863
                                            }
                                        case 141:
                                            var3 = var4["FE/ohq"];
                                            var3 = var5.bind(var6)(var3);
                                            _fun108863_ip = 169;
                                            continue _fun108863;
                                        case 156:
                                            var4 = var4.n2Y84J;
                                            var3 = var5.bind(var6)(var4);
                                        case 169:
                                            var0.content = var3;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = _closure3_slot0;
                                            var0 = var0.props;
                                            var1 = var0.navigation;
                                            var0 = var1.goBack;
                                            var0 = var0.bind(var1)();
                                        case 206:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var3 = false;
                                var0.hasChanges = var3;
                                var0 = var1.bind(var2)(var0);
                            case 385:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSave = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun108864: for (var _fun108864_ip = 0;;) switch (_fun108864_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.channel;
                                var0 = var2.isThread;
                                var3 = var0.bind(var2)();
                                if (var3) {
                                    _fun108864_ip = 102;
                                    continue _fun108864
                                }
                            case 36:
                                var3 = _closure1_slot32;
                                var4 = var3.LIMITED_CHANNEL_NAME;
                                var3 = var4.has;
                                var2 = var2.type;
                                var2 = var3.bind(var4)(var2);
                                var5 = var6;
                                if (!var2) {
                                    _fun108864_ip = 132;
                                    continue _fun108864
                                }
                            case 67:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 39;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.sanitizeGuildTextChannelName;
                                var5 = var2.bind(var3)(var6);
                                _fun108864_ip = 132;
                                continue _fun108864;
                            case 102:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 38;
                                var2 = var4[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = false;
                                var5 = var3.bind(var4)(var6, var2);
                            case 132:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 34;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.updateChannel;
                                var2 = {};
                                var2.name = var5;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = true;
                                var1.hasChanges = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleChangeName = var3;
                    var3 = function() { // Environment: var2
                        _fun108865: for (var _fun108865_ip = 0;;) switch (_fun108865_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.channel;
                                var1 = var2.isThread;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun108865_ip = 136;
                                    continue _fun108865
                                }
                            case 30:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 38;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var2.name;
                                var3 = true;
                                var5 = var6.bind(var4)(var5, var3);
                                var2 = var2.name;
                                if (!(var5 !== var2)) {
                                    _fun108865_ip = 136;
                                    continue _fun108865
                                }
                            case 77:
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var1 = 34;
                                var1 = var6[var1];
                                var4 = var2.bind(var4)(var1);
                                var2 = var4.updateChannel;
                                var1 = {};
                                var1.name = var5;
                                var1 = var2.bind(var4)(var1);
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var0.hasChanges = var3;
                                var0 = var1.bind(var2)(var0);
                            case 136:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleBlurName = var3;
                    var3 = function(arg0) { // Environment: var2
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 34;
                        var1 = var6[var0];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = 40;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.translateInlineEmojiToSurrogates;
                        var4 = arg0;
                        var4 = var5.bind(var6)(var4);
                        var1.topic = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleChangeTopic = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = global;
                        var6 = var4.Math;
                        var5 = var6.round;
                        var4 = arg0;
                        var4 = var5.bind(var6)(var4);
                        var1.bitrate = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleBitRateChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.videoQualityMode = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleVideoQualityModeChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.nsfw = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleNsfwChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun108870: for (var _fun108870_ip = 0;;) switch (_fun108870_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var0 = var3.props;
                                var5 = var0.channel;
                                var0 = var3.state;
                                var4 = var0.hasChanges;
                                var2 = _closure1_slot41;
                                var1 = global;
                                var7 = var1.Math;
                                var6 = var7.round;
                                var1 = arg0;
                                var1 = var6.bind(var7)(var1);
                                var6 = var2[var1];
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 34;
                                var1 = var1[var0];
                                var0 = undefined;
                                var7 = var2.bind(var0)(var1);
                                var2 = var7.updateChannel;
                                var1 = {};
                                var1.rateLimitPerUser = var6;
                                var1 = var2.bind(var7)(var1);
                                var2 = var3.setState;
                                var1 = {};
                                if (var4) {
                                    _fun108870_ip = 121;
                                    continue _fun108870
                                }
                            case 111:
                                var5 = var5.rateLimitPerUser;
                                var4 = var5 !== var6;
                            case 121:
                                var1.hasChanges = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleSlowmodeChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.defaultAutoArchiveDuration = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleDefaultAutoArchiveDurationChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.autoArchiveDuration = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleAutoArchiveDurationChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.defaultSortOrder = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleDefaultSortOrderChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.defaultTagSetting = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleDefaultTagSettingChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = arg0;
                        var1.invitable = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleInvitableChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun108876: for (var _fun108876_ip = 0;;) switch (_fun108876_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 34;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.updateChannel;
                                var1 = {};
                                var5 = _closure1_slot31;
                                var4 = arg0;
                                if (var4) {
                                    _fun108876_ip = 51;
                                    continue _fun108876
                                }
                            case 43:
                                var4 = var5.GUILD_ANNOUNCEMENT;
                                _fun108876_ip = 57;
                                continue _fun108876;
                            case 51:
                                var4 = var5.GUILD_TEXT;
                            case 57:
                                var1.type = var4;
                                var1 = var2.bind(var3)(var1);
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = true;
                                var1.hasChanges = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.handleAnnouncementChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var3 = _closure3_slot0;
                        var0 = var3.props;
                        var2 = var0.channel;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 41;
                        var5 = var4[var0];
                        var0 = undefined;
                        var8 = var6.bind(var0)(var5);
                        var7 = var8.setFlag;
                        var6 = var2.flags;
                        var2 = _closure1_slot45;
                        var5 = var2.ACTIVE_CHANNELS_REMOVED;
                        var2 = arg0;
                        var2 = !var2;
                        var5 = var7.bind(var8)(var6, var5, var2);
                        var2 = _closure1_slot1;
                        var1 = 34;
                        var1 = var4[var1];
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.updateChannel;
                        var1 = {};
                        var1.flags = var5;
                        var1 = var2.bind(var4)(var1);
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleActiveChannelsRemovedChange = var3;
                    var3 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 34;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = global;
                        var6 = var4.Math;
                        var5 = var6.round;
                        var4 = arg0;
                        var4 = var5.bind(var6)(var4);
                        var1.userLimit = var4;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var4 = true;
                        var1.hasChanges = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleUserLimitChange = var3;
                    var4 = _closure1_slot3;
                    var3 = function*() { // Environment: var2
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun108880: for (var _fun108880_ip = 0;;) switch (_fun108880_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun108880_ip = 1541;
                                        continue _fun108880
                                    }
                                case 12:
                                    var2 = undefined;
                                    var _closure5_slot0 = var2;
                                    var4 = _closure1_slot55;
                                    var1 = _closure3_slot0;
                                    var3 = var1.context;
                                    var19 = var4.bind(var2)(var3);
                                    var1 = var1.props;
                                    var11 = var1.channel;
                                    var4 = _closure1_slot20;
                                    var3 = var4.getGuild;
                                    var1 = var11.getGuildId;
                                    var1 = var1.bind(var11)();
                                    var4 = var3.bind(var4)(var1);
                                    _closure5_slot0 = var4;
                                    var3 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 42;
                                    var1 = var5[var1];
                                    var8 = var3.bind(var2)(var1);
                                    var5 = var8.isDefaultChannelThresholdMetAfterDelete;
                                    var1 = var11.getGuildId;
                                    var3 = var1.bind(var11)();
                                    var1 = var11.id;
                                    var1 = var5.bind(var8)(var3, var1);
                                    SaveGenerator(address = 131);
                                case 129:
                                    return var1;
                                case 131:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun108880_ip = 1538;
                                        continue _fun108880
                                    }
                                case 140:
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun108880_ip = 683;
                                        continue _fun108880
                                    }
                                case 149:
                                    var9 = var4.features;
                                    var8 = var9.has;
                                    var5 = _closure1_slot33;
                                    var5 = var5.COMMUNITY;
                                    var5 = var8.bind(var9)(var5);
                                    if (!var5) {
                                        _fun108880_ip = 683;
                                        continue _fun108880
                                    }
                                case 181:
                                    var8 = var4.rulesChannelId;
                                    var5 = var11.id;
                                    if (!(var8 !== var5)) {
                                        _fun108880_ip = 214;
                                        continue _fun108880
                                    }
                                case 196:
                                    var8 = var4.publicUpdatesChannelId;
                                    var5 = var11.id;
                                    if (!(var8 === var5)) {
                                        _fun108880_ip = 683;
                                        continue _fun108880
                                    }
                                case 214:
                                    var8 = var4.rulesChannelId;
                                    var5 = var11.id;
                                    if (!(var8 !== var5)) {
                                        _fun108880_ip = 288;
                                        continue _fun108880
                                    }
                                case 229:
                                    var10 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var5 = 37;
                                    var8 = var12[var5];
                                    var8 = var10.bind(var2)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.string;
                                    var5 = var12[var5];
                                    var5 = var10.bind(var2)(var5);
                                    var5 = var5.t;
                                    var5 = var5["1B1/NB"];
                                    var17 = var8.bind(var9)(var5);
                                    _fun108880_ip = 345;
                                    continue _fun108880;
                                case 288:
                                    var10 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var5 = 37;
                                    var8 = var12[var5];
                                    var8 = var10.bind(var2)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.string;
                                    var5 = var12[var5];
                                    var5 = var10.bind(var2)(var5);
                                    var5 = var5.t;
                                    var5 = var5.yjrZPl;
                                    var17 = var8.bind(var9)(var5);
                                case 345:
                                    var8 = _closure1_slot1;
                                    var24 = _closure1_slot2;
                                    var5 = 43;
                                    var5 = var24[var5];
                                    var9 = var8.bind(var2)(var5);
                                    var8 = var9.show;
                                    var5 = {};
                                    var21 = _closure1_slot0;
                                    var18 = 37;
                                    var10 = var24[var18];
                                    var10 = var21.bind(var2)(var10);
                                    var13 = var10.intl;
                                    var12 = var13.string;
                                    var10 = var24[var18];
                                    var10 = var21.bind(var2)(var10);
                                    var10 = var10.t;
                                    var10 = var10["TY/V+H"];
                                    var10 = var12.bind(var13)(var10);
                                    var5.title = var10;
                                    var10 = var24[var18];
                                    var10 = var21.bind(var2)(var10);
                                    var13 = var10.intl;
                                    var12 = var13.string;
                                    var10 = var24[var18];
                                    var10 = var21.bind(var2)(var10);
                                    var10 = var10.t;
                                    var10 = var10.BddRzS;
                                    var10 = var12.bind(var13)(var10);
                                    var5.confirmText = var10;
                                    var13 = _closure1_slot52;
                                    var12 = _closure1_slot53;
                                    var10 = {};
                                    var16 = _closure1_slot51;
                                    var14 = 44;
                                    var14 = var24[var14];
                                    var14 = var21.bind(var2)(var14);
                                    var15 = var14.Text;
                                    var14 = {};
                                    var22 = var19.alertText;
                                    var14.style = var22;
                                    var22 = 'text-md/medium';
                                    var14.variant = var22;
                                    var14.children = var17;
                                    var15 = var16.bind(var2)(var15, var14);
                                    var14 = new Array(2);
                                    var14[0] = var15;
                                    var17 = _closure1_slot51;
                                    var15 = 45;
                                    var15 = var24[var15];
                                    var15 = var21.bind(var2)(var15);
                                    var16 = var15.TextWithIOSLinkWorkaround;
                                    var15 = {};
                                    var23 = var19.alertText;
                                    var15.style = var23;
                                    var15.variant = var22;
                                    var22 = var24[var18];
                                    var22 = var21.bind(var2)(var22);
                                    var23 = var22.intl;
                                    var22 = var23.format;
                                    var18 = var24[var18];
                                    var18 = var21.bind(var2)(var18);
                                    var18 = var18.t;
                                    var21 = var18.LAJbDm;
                                    var18 = {};
                                    var24 = function() {
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var0 = 43;
                                        var2 = var4[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 34;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 46;
                                        var2 = var4[var2];
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.open;
                                        var2 = _closure5_slot0;
                                        var2 = var2.id;
                                        var1 = _closure1_slot34;
                                        var1 = var1.COMMUNITY;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var18.onClick = var24;
                                    var18 = var22.bind(var23)(var21, var18);
                                    var15.children = var18;
                                    var15 = var17.bind(var2)(var16, var15);
                                    var14[1] = var15;
                                    var10.children = var14;
                                    var10 = var13.bind(var2)(var12, var10);
                                    var5.children = var10;
                                    var5 = var8.bind(var9)(var5);
                                    _fun108880_ip = 1535;
                                    continue _fun108880;
                                case 683:
                                    if (!(var3 != var4)) {
                                        _fun108880_ip = 1080;
                                        continue _fun108880
                                    }
                                case 690:
                                    if (var1) {
                                        _fun108880_ip = 1080;
                                        continue _fun108880
                                    }
                                case 696:
                                    var4 = _closure1_slot1;
                                    var21 = _closure1_slot2;
                                    var3 = 43;
                                    var3 = var21[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.show;
                                    var3 = {};
                                    var17 = _closure1_slot0;
                                    var16 = 37;
                                    var8 = var21[var16];
                                    var8 = var17.bind(var2)(var8);
                                    var10 = var8.intl;
                                    var9 = var10.string;
                                    var8 = var21[var16];
                                    var8 = var17.bind(var2)(var8);
                                    var8 = var8.t;
                                    var8 = var8["TY/V+H"];
                                    var8 = var9.bind(var10)(var8);
                                    var3.title = var8;
                                    var8 = var21[var16];
                                    var8 = var17.bind(var2)(var8);
                                    var10 = var8.intl;
                                    var9 = var10.string;
                                    var8 = var21[var16];
                                    var8 = var17.bind(var2)(var8);
                                    var8 = var8.t;
                                    var8 = var8.BddRzS;
                                    var8 = var9.bind(var10)(var8);
                                    var3.confirmText = var8;
                                    var10 = _closure1_slot52;
                                    var9 = _closure1_slot53;
                                    var8 = {};
                                    var14 = _closure1_slot51;
                                    var12 = 44;
                                    var12 = var21[var12];
                                    var12 = var17.bind(var2)(var12);
                                    var13 = var12.Text;
                                    var12 = {};
                                    var15 = var19.alertText;
                                    var12.style = var15;
                                    var18 = 'text-md/medium';
                                    var12.variant = var18;
                                    var15 = var21[var16];
                                    var15 = var17.bind(var2)(var15);
                                    var23 = var15.intl;
                                    var22 = var23.string;
                                    var15 = var21[var16];
                                    var15 = var17.bind(var2)(var15);
                                    var15 = var15.t;
                                    var15 = var15.iWlB6h;
                                    var15 = var22.bind(var23)(var15);
                                    var12.children = var15;
                                    var13 = var14.bind(var2)(var13, var12);
                                    var12 = new Array(2);
                                    var12[0] = var13;
                                    var15 = _closure1_slot51;
                                    var13 = 45;
                                    var13 = var21[var13];
                                    var13 = var17.bind(var2)(var13);
                                    var14 = var13.TextWithIOSLinkWorkaround;
                                    var13 = {};
                                    var19 = var19.alertText;
                                    var13.style = var19;
                                    var13.variant = var18;
                                    var18 = var21[var16];
                                    var18 = var17.bind(var2)(var18);
                                    var19 = var18.intl;
                                    var18 = var19.format;
                                    var16 = var21[var16];
                                    var16 = var17.bind(var2)(var16);
                                    var16 = var16.t;
                                    var17 = var16.ajiBwB;
                                    var16 = {};
                                    var20 = function() {
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var0 = 43;
                                        var2 = var4[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 34;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 46;
                                        var2 = var4[var2];
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.open;
                                        var2 = _closure5_slot0;
                                        var2 = var2.id;
                                        var1 = _closure1_slot34;
                                        var1 = var1.ONBOARDING;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                    };
                                    var16.onClick = var20;
                                    var16 = var18.bind(var19)(var17, var16);
                                    var13.children = var16;
                                    var13 = var15.bind(var2)(var14, var13);
                                    var12[1] = var13;
                                    var8.children = var12;
                                    var8 = var10.bind(var2)(var9, var8);
                                    var3.children = var8;
                                    var3 = var4.bind(var5)(var3);
                                    _fun108880_ip = 1535;
                                    continue _fun108880;
                                case 1080:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 47;
                                    var3 = var5[var3];
                                    var10 = var4.bind(var2)(var3);
                                    var9 = var10.computeChannelName;
                                    var27 = _closure1_slot25;
                                    var26 = _closure1_slot24;
                                    var25 = true;
                                    var29 = var10;
                                    var28 = var11;
                                    var15 = var29[var9](var28, var27, var26, var25, var24);
                                    var4 = _closure1_slot1;
                                    var3 = 43;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.show;
                                    var3 = {};
                                    var8 = _closure3_slot0;
                                    var8 = var8.props;
                                    var8 = var8.isForumPost;
                                    if (var8) {
                                        _fun108880_ip = 1256;
                                        continue _fun108880
                                    }
                                case 1168:
                                    var8 = _closure3_slot0;
                                    var8 = var8.props;
                                    var8 = var8.isThread;
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var9 = 37;
                                    var10 = var13[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var11 = var10.intl;
                                    var10 = var11.string;
                                    var9 = var13[var9];
                                    var9 = var12.bind(var2)(var9);
                                    var9 = var9.t;
                                    if (var8) {
                                        _fun108880_ip = 1243;
                                        continue _fun108880
                                    }
                                case 1230:
                                    var8 = var9["8D8Rsb"];
                                    var8 = var10.bind(var11)(var8);
                                    _fun108880_ip = 1254;
                                    continue _fun108880;
                                case 1243:
                                    var9 = var9.H7vTe2;
                                    var8 = var10.bind(var11)(var9);
                                case 1254:
                                    _fun108880_ip = 1311;
                                    continue _fun108880;
                                case 1256:
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var9 = 37;
                                    var10 = var13[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var11 = var10.intl;
                                    var10 = var11.string;
                                    var9 = var13[var9];
                                    var9 = var12.bind(var2)(var9);
                                    var9 = var9.t;
                                    var9 = var9.nEOg1N;
                                    var8 = var10.bind(var11)(var9);
                                case 1311:
                                    var3.title = var8;
                                    var12 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var9 = 37;
                                    var10 = var8[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var14 = var10.intl;
                                    var13 = var14.format;
                                    var10 = var8[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var10 = var10.t;
                                    var11 = var10.a6Gz9J;
                                    var10 = {};
                                    var10.channelName = var15;
                                    var10 = var13.bind(var14)(var11, var10);
                                    var3.body = var10;
                                    var10 = var8[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var13 = var10.intl;
                                    var11 = var13.string;
                                    var10 = var8[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var10 = var10.t;
                                    var10 = var10.gm1Vej;
                                    var10 = var11.bind(var13)(var10);
                                    var3.cancelText = var10;
                                    var10 = var8[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var11 = var10.intl;
                                    var10 = var11.string;
                                    var9 = var8[var9];
                                    var9 = var12.bind(var2)(var9);
                                    var9 = var9.t;
                                    var9 = var9.p89ACt;
                                    var9 = var10.bind(var11)(var9);
                                    var3.confirmText = var9;
                                    var7 = _closure3_slot0;
                                    var7 = var7.handleConfirmDeleteChannel;
                                    var3.onConfirm = var7;
                                    var7 = _closure1_slot1;
                                    var6 = 48;
                                    var6 = var8[var6];
                                    var6 = var7.bind(var2)(var6);
                                    var6 = var6.Colors;
                                    var6 = var6.RED;
                                    var3.confirmColor = var6;
                                    var3 = var4.bind(var5)(var3);
                                case 1535:
                                    return var2;
                                case 1538:
                                    return var1;
                                case 1541:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var0.handleDeleteChannel = var3;
                    var3 = function*() { // Environment: var2
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun108884: for (var _fun108884_ip = 0;;) switch (_fun108884_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun108884_ip = 345;
                                        continue _fun108884
                                    }
                                case 10:
                                    var1 = undefined;
                                    var2 = undefined;
                                    var3 = undefined;
                                    var6 = undefined;
                                    var4 = _closure3_slot0;
                                    var4 = var4.props;
                                    var2 = var4.channel;
                                case 35: // try_start_0
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var5 = 34;
                                    var5 = var8[var5];
                                    var7 = var7.bind(var1)(var5);
                                    var5 = var7.deleteChannel;
                                    var2 = var2.id;
                                    var2 = var5.bind(var7)(var2);
                                    SaveGenerator(address = 78);
                                case 76:
                                    return var2;
                                case 78:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun108884_ip = 163;
                                        continue _fun108884
                                    }
                                case 84:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 49;
                                    var4 = var7[var4];
                                    var5 = var5.bind(var1)(var4);
                                    var4 = var5.getRootNavigationRef;
                                    var7 = var4.bind(var5)();
                                    var3 = var7;
                                    var5 = null;
                                    var5 = var5 != var7;
                                    var4 = var5;
                                    if (!var5) {
                                        _fun108884_ip = 142;
                                        continue _fun108884
                                    }
                                case 129:
                                    var7 = var3;
                                    var5 = var7.isReady;
                                    var4 = var5.bind(var7)();
                                case 142:
                                    if (!var4) {
                                        _fun108884_ip = 158;
                                        continue _fun108884
                                    }
                                case 145:
                                    var4 = var3;
                                    var3 = var4.goBack;
                                    var3 = var3.bind(var4)();
                                case 158: // try_end0
                                    _fun108884_ip = 342;
                                    continue _fun108884;
                                case 163:
                                    return var2;
                                case 166: // catch_target0
                                    CatchBlockStart(arg_register = 7);
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 50;
                                    var2 = var4[var2];
                                    var2 = var3.bind(var1)(var2);
                                    var2 = var2.APIError;
                                    var3 = var2.prototype;
                                    var3 = Object.create(var3, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var12 = var3;
                                    var11 = var7;
                                    var2 = new var12[var2](var11, var10);
                                    var3 = var2 instanceof Object ? var2 : var3;
                                    var2 = var3.getAnyErrorMessage;
                                    var8 = var2.bind(var3)();
                                    var6 = var8;
                                    var3 = _closure1_slot1;
                                    var2 = 35;
                                    var2 = var4[var2];
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.open;
                                    var2 = {};
                                    var7 = 'CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR';
                                    var2.key = var7;
                                    var7 = null;
                                    if (!(var7 == var8)) {
                                        _fun108884_ip = 330;
                                        continue _fun108884
                                    }
                                case 273:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 37;
                                    var7 = var10[var5];
                                    var7 = var9.bind(var1)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var5 = var10[var5];
                                    var5 = var9.bind(var1)(var5);
                                    var5 = var5.t;
                                    var5 = var5.CKsXk3;
                                    var5 = var7.bind(var8)(var5);
                                    _fun108884_ip = 333;
                                    continue _fun108884;
                                case 330:
                                    var5 = var6;
                                case 333:
                                    var2.content = var5;
                                    var2 = var3.bind(var4)(var2);
                                case 342:
                                    return var1;
                                case 345:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var0.handleConfirmDeleteChannel = var3;
                    var3 = function(arg0) { // Environment: var2
                        var3 = _closure3_slot0;
                        var2 = var3.pushScreen;
                        var0 = _closure1_slot30;
                        var1 = var0.EDIT_FORUM_TAG;
                        var0 = {};
                        var4 = arg0;
                        var0.tag = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handlePressTag = var3;
                    var3 = function() { // Environment: var2
                        _fun108886: for (var _fun108886_ip = 0;;) switch (_fun108886_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.canManageChannels;
                                if (!var1) {
                                    _fun108886_ip = 174;
                                    continue _fun108886
                                }
                            case 24:
                                var2 = _closure3_slot0;
                                var0 = var2.props;
                                var5 = var0.channel;
                                var3 = var5.hasFlag;
                                var4 = _closure1_slot45;
                                var1 = var4.REQUIRE_TAG;
                                var1 = var3.bind(var5)(var1);
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 41;
                                var6 = var5[var3];
                                var3 = undefined;
                                var8 = var7.bind(var3)(var6);
                                var7 = var8.setFlag;
                                var6 = var2.props;
                                var6 = var6.channel;
                                var6 = var6.flags;
                                var4 = var4.REQUIRE_TAG;
                                var1 = !var1;
                                var4 = var7.bind(var8)(var6, var4, var1);
                                var1 = _closure1_slot1;
                                var0 = 34;
                                var0 = var5[var0];
                                var3 = var1.bind(var3)(var0);
                                var1 = var3.updateChannel;
                                var0 = {};
                                var0.flags = var4;
                                var0 = var1.bind(var3)(var0);
                                var1 = var2.setState;
                                var0 = {};
                                var3 = true;
                                var0.hasChanges = var3;
                                var0 = var1.bind(var2)(var0);
                            case 174:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleToggleRequireTag = var3;
                    var3 = function() { // Environment: var2
                        _fun108887: for (var _fun108887_ip = 0;;) switch (_fun108887_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.canManageChannels;
                                if (!var1) {
                                    _fun108887_ip = 174;
                                    continue _fun108887
                                }
                            case 24:
                                var2 = _closure3_slot0;
                                var0 = var2.props;
                                var5 = var0.channel;
                                var3 = var5.hasFlag;
                                var4 = _closure1_slot45;
                                var1 = var4.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                                var1 = var3.bind(var5)(var1);
                                var7 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 41;
                                var6 = var5[var3];
                                var3 = undefined;
                                var8 = var7.bind(var3)(var6);
                                var7 = var8.setFlag;
                                var6 = var2.props;
                                var6 = var6.channel;
                                var6 = var6.flags;
                                var4 = var4.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                                var1 = !var1;
                                var4 = var7.bind(var8)(var6, var4, var1);
                                var1 = _closure1_slot1;
                                var0 = 34;
                                var0 = var5[var0];
                                var3 = var1.bind(var3)(var0);
                                var1 = var3.updateChannel;
                                var0 = {};
                                var0.flags = var4;
                                var0 = var1.bind(var3)(var0);
                                var1 = var2.setState;
                                var0 = {};
                                var3 = true;
                                var0.hasChanges = var3;
                                var0 = var1.bind(var2)(var0);
                            case 174:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleToggleShowMediaDownloadOptions = var3;
                    var2 = function(arg0) { // Environment: var2
                        _fun108888: for (var _fun108888_ip = 0;;) switch (_fun108888_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.errors;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun108888_ip = 36;
                                    continue _fun108888
                                }
                            case 29:
                                var1 = arg0;
                                var0 = var2[var1];
                            case 36:
                                return var0;
                        }
                    };
                    var0.getError = var2;
                    var2 = var0.state;
                    var3 = _closure1_slot17;
                    var1 = var3.hasChanges;
                    var1 = var1.bind(var3)();
                    var2.hasChanges = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            _fun108889: for (var _fun108889_ip = 0;;) switch (_fun108889_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.updateNavigation;
                    var2 = var1.state;
                    var0 = undefined;
                    var2 = var3.bind(var1)(var0, var2);
                    var2 = var1.props;
                    var2 = var2.regions;
                    var4 = null;
                    var2 = var4 == var2;
                    if (!var2) {
                        _fun108889_ip = 56;
                        continue _fun108889
                    }
                case 42:
                    var3 = var1.props;
                    var3 = var3.guild;
                    var2 = var4 != var3;
                case 56:
                    if (!var2) {
                        _fun108889_ip = 108;
                        continue _fun108889
                    }
                case 59:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 51;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.fetchRegions;
                    var1 = var1.props;
                    var1 = var1.guild;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                case 108:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 33;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot27;
                    var2 = var1.SETTINGS_PANE_VIEWED;
                    var1 = {};
                    var6 = 'channel';
                    var1.settings_type = var6;
                    var5 = _closure1_slot40;
                    var5 = var5.CHANNEL_SETTINGS;
                    var1.destination_pane = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(30);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun108890: for (var _fun108890_ip = 0;;) switch (_fun108890_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var0.updateNavigation;
                    var2 = arg1;
                    var2 = var3.bind(var0)(var1, var2);
                    var2 = var1.channel;
                    var3 = var2.defaultSortOrder;
                    var2 = var0.props;
                    var2 = var2.channel;
                    var2 = var2.defaultSortOrder;
                    if (!(var3 !== var2)) {
                        _fun108890_ip = 100;
                        continue _fun108890
                    }
                case 52:
                    var2 = var0.defaultSortOrderRadioGroupRef;
                    var4 = var2.current;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun108890_ip = 100;
                        continue _fun108890
                    }
                case 69:
                    var3 = var4.setValue;
                    var2 = var0.props;
                    var5 = var2.channel;
                    var2 = var5.getDefaultSortOrder;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                case 100:
                    var2 = var1.channel;
                    var3 = var2.defaultTagSetting;
                    var2 = var0.props;
                    var2 = var2.channel;
                    var2 = var2.defaultTagSetting;
                    if (!(var3 !== var2)) {
                        _fun108890_ip = 179;
                        continue _fun108890
                    }
                case 131:
                    var2 = var0.defaultTagSettingRadioGroupRef;
                    var4 = var2.current;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun108890_ip = 179;
                        continue _fun108890
                    }
                case 148:
                    var3 = var4.setValue;
                    var2 = var0.props;
                    var5 = var2.channel;
                    var2 = var5.getDefaultTagSetting;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                case 179:
                    var1 = var1.channel;
                    var2 = var1.videoQualityMode;
                    var1 = var0.props;
                    var1 = var1.channel;
                    var1 = var1.videoQualityMode;
                    if (!(var2 !== var1)) {
                        _fun108890_ip = 271;
                        continue _fun108890
                    }
                case 210:
                    var1 = var0.videoQualityModeRadioGroupRef;
                    var2 = var1.current;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun108890_ip = 271;
                        continue _fun108890
                    }
                case 227:
                    var1 = var2.setValue;
                    var0 = var0.props;
                    var0 = var0.channel;
                    var0 = var0.videoQualityMode;
                    if (!(var3 == var0)) {
                        _fun108890_ip = 266;
                        continue _fun108890
                    }
                case 253:
                    var3 = _closure1_slot43;
                    var0 = var3.AUTO;
                case 266:
                    var0 = var1.bind(var2)(var0);
                case 271:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateNavigation';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun108891: for (var _fun108891_ip = 0;;) switch (_fun108891_ip) {
                case 0:
                    var5 = arg0;
                    var7 = this;
                    var _closure3_slot0 = var7;
                    var0 = var7.props;
                    var2 = var0.navigation;
                    var6 = var0.submitting;
                    var1 = var0.isThread;
                    var3 = var0.channel;
                    var3 = var3.type;
                    var0 = var0.isForumPost;
                    var7 = var7.state;
                    var7 = var7.hasChanges;
                    var _closure3_slot1 = var7;
                    var8 = null;
                    if (!(var8 != var5)) {
                        _fun108891_ip = 122;
                        continue _fun108891
                    }
                case 72:
                    var8 = var5.submitting;
                    if (!(var6 === var8)) {
                        _fun108891_ip = 122;
                        continue _fun108891
                    }
                case 82:
                    var8 = var5.isThread;
                    if (!(var1 === var8)) {
                        _fun108891_ip = 122;
                        continue _fun108891
                    }
                case 92:
                    var5 = var5.channel;
                    var5 = var5.type;
                    if (!(var3 === var5)) {
                        _fun108891_ip = 122;
                        continue _fun108891
                    }
                case 106:
                    var5 = arg1;
                    var5 = var5.hasChanges;
                    if (!(var7 !== var5)) {
                        _fun108891_ip = 407;
                        continue _fun108891
                    }
                case 122:
                    if (var1) {
                        _fun108891_ip = 265;
                        continue _fun108891
                    }
                case 131:
                    var1 = _closure1_slot31;
                    var1 = var1.GUILD_CATEGORY;
                    if (!(var3 !== var1)) {
                        _fun108891_ip = 204;
                        continue _fun108891
                    }
                case 145:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 37;
                    var3 = var10[var1];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var3);
                    var7 = var3.intl;
                    var3 = var7.string;
                    var1 = var10[var1];
                    var1 = var9.bind(var8)(var1);
                    var1 = var1.t;
                    var1 = var1.XPDhcc;
                    var3 = var3.bind(var7)(var1);
                    _fun108891_ip = 263;
                    continue _fun108891;
                case 204:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 37;
                    var7 = var11[var1];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var1 = var11[var1];
                    var1 = var10.bind(var9)(var1);
                    var1 = var1.t;
                    var1 = var1["/uELTj"];
                    var3 = var7.bind(var8)(var1);
                case 263:
                    _fun108891_ip = 345;
                    continue _fun108891;
                case 265:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 37;
                    var7 = var11[var1];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var1 = var11[var1];
                    var1 = var10.bind(var9)(var1);
                    var1 = var1.t;
                    if (var0) {
                        _fun108891_ip = 329;
                        continue _fun108891
                    }
                case 314:
                    var0 = var1.d4n5Q1;
                    var0 = var7.bind(var8)(var0);
                    _fun108891_ip = 342;
                    continue _fun108891;
                case 329:
                    var1 = var1.BsJrhj;
                    var0 = var7.bind(var8)(var1);
                case 342:
                    var3 = var0;
                case 345:
                    var1 = var2.setOptions;
                    var0 = {};
                    if (var6) {
                        _fun108891_ip = 365;
                        continue _fun108891
                    }
                case 356:
                    var4 = function(arg0) { // Environment: var4
                        var3 = _closure1_slot51;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var0 = 53;
                        var0 = var9[var0];
                        var2 = undefined;
                        var0 = var8.bind(var2)(var0);
                        var1 = var0.HeaderTextButton;
                        var0 = {};
                        var10 = arg0;
                        var11 = var0;
                        var4 = copyDataProperties(var11, var10);
                        var5 = _closure3_slot0;
                        var6 = var5.handleSave;
                        var5 = 'onPress';
                        var0[var5] = var6;
                        var5 = 37;
                        var6 = var9[var5];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var2)(var5);
                        var5 = var5.t;
                        var5 = var5["R3BPH+"];
                        var6 = var6.bind(var7)(var5);
                        var5 = 'label';
                        var0[var5] = var6;
                        var4 = _closure3_slot1;
                        var5 = !var4;
                        var4 = 'disabled';
                        var0[var4] = var5;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    _fun108891_ip = 393;
                    continue _fun108891;
                case 365:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 52;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var4 = var5.HeaderSubmittingIndicator;
                case 393:
                    var0.headerRight = var4;
                    var0.title = var3;
                    var0 = var1.bind(var2)(var0);
                case 407:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'renderChannelInfo';
        var4.key = var6;
        var6 = function() {
            _fun108893: for (var _fun108893_ip = 0;;) switch (_fun108893_ip) {
                case 0:
                    var12 = this;
                    var0 = var12.props;
                    var14 = var0.channel;
                    var15 = var0.canManageChannels;
                    var10 = var0.canManageThread;
                    var9 = var0.canSendMessages;
                    var7 = var0.isChannelOwner;
                    var2 = var0.isThread;
                    var8 = var0.isForumPost;
                    var4 = _closure1_slot13;
                    var1 = var14.type;
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    if (!var1) {
                        _fun108893_ip = 74;
                        continue _fun108893
                    }
                case 71:
                    var1 = !var2;
                case 74:
                    if (var1) {
                        _fun108893_ip = 102;
                        continue _fun108893
                    }
                case 77:
                    var4 = _closure1_slot32;
                    var6 = var4.GUILD_THREADS_ONLY;
                    var5 = var6.has;
                    var4 = var14.type;
                    var1 = var5.bind(var6)(var4);
                case 102:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 54;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.getIsChannelNameSettingEditable;
                    var4 = {};
                    var4.canManageThread = var10;
                    var4.canManageChannels = var15;
                    var4.canSendMessages = var9;
                    var4.isForumPost = var8;
                    var4.isThread = var2;
                    var4.isChannelOwner = var7;
                    var16 = var5.bind(var6)(var4);
                    var4 = var14.isForumPost;
                    var4 = var4.bind(var14)();
                    if (var4) {
                        _fun108893_ip = 377;
                        continue _fun108893
                    }
                case 181:
                    if (var2) {
                        _fun108893_ip = 320;
                        continue _fun108893
                    }
                case 187:
                    var4 = var14.type;
                    var2 = _closure1_slot31;
                    var2 = var2.GUILD_CATEGORY;
                    if (!(var4 !== var2)) {
                        _fun108893_ip = 263;
                        continue _fun108893
                    }
                case 206:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 37;
                    var4 = var7[var2];
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.PVbHDl;
                    var10 = var4.bind(var5)(var2);
                    _fun108893_ip = 318;
                    continue _fun108893;
                case 263:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 37;
                    var4 = var7[var2];
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.OCAkGP;
                    var10 = var4.bind(var5)(var2);
                case 318:
                    _fun108893_ip = 375;
                    continue _fun108893;
                case 320:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 37;
                    var4 = var7[var2];
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.j3XWjD;
                    var10 = var4.bind(var5)(var2);
                case 375:
                    _fun108893_ip = 434;
                    continue _fun108893;
                case 377:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 37;
                    var4 = var7[var2];
                    var4 = var6.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.uyVrTN;
                    var10 = var4.bind(var5)(var2);
                case 434:
                    var5 = _closure1_slot51;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 55;
                    var2 = var13[var7];
                    var2 = var11.bind(var3)(var2);
                    var4 = var2.FormSection;
                    var2 = {};
                    var6 = _closure1_slot50;
                    var6 = var6.ANDROID_NO_BORDER;
                    var2.titleStyleType = var6;
                    var2.title = var10;
                    var9 = _closure1_slot51;
                    var6 = var13[var7];
                    var6 = var11.bind(var3)(var6);
                    var8 = var6.FormInput;
                    var6 = {};
                    var17 = var12.props;
                    var17 = var17.channelNameRef;
                    var6.ref = var17;
                    var6.accessibilityLabel = var10;
                    var10 = 47;
                    var10 = var13[var10];
                    var17 = var11.bind(var3)(var10);
                    var13 = var17.computeChannelName;
                    var11 = _closure1_slot25;
                    var10 = _closure1_slot24;
                    var10 = var13.bind(var17)(var14, var11, var10);
                    var6.value = var10;
                    var10 = var12.handleChangeName;
                    var6.onChange = var10;
                    var10 = true;
                    var6.enableAndroidSanitizedInputWorkaround = var10;
                    var11 = var12.handleBlurName;
                    var6.onBlur = var11;
                    var11 = !var16;
                    var6.disabled = var11;
                    var11 = false;
                    var6.showTopContainer = var11;
                    var18 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 56;
                    var17 = var17[var13];
                    var17 = var18.bind(var3)(var17);
                    var17 = var17.ClearButtonVisibility;
                    if (var16) {
                        _fun108893_ip = 644;
                        continue _fun108893
                    }
                case 636:
                    var16 = var17.NEVER;
                    _fun108893_ip = 650;
                    continue _fun108893;
                case 644:
                    var16 = var17.WITH_CONTENT;
                case 650:
                    var6.clearButtonVisibility = var16;
                    var16 = _closure1_slot36;
                    var6.maxLength = var16;
                    var17 = var12.getError;
                    var16 = 'name';
                    var16 = var17.bind(var12)(var16);
                    var6.error = var16;
                    var6 = var9.bind(var3)(var8, var6);
                    var2.children = var6;
                    var6 = var5.bind(var3)(var4, var2);
                    var5 = undefined;
                    if (!var1) {
                        _fun108893_ip = 1028;
                        continue _fun108893
                    }
                case 707:
                    var1 = var14.isForumLikeChannel;
                    var8 = var1.bind(var14)();
                    var9 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 37;
                    var2 = var16[var1];
                    var2 = var9.bind(var3)(var2);
                    var4 = var2.intl;
                    var2 = var4.string;
                    var1 = var16[var1];
                    var1 = var9.bind(var3)(var1);
                    var1 = var1.t;
                    if (var8) {
                        _fun108893_ip = 779;
                        continue _fun108893
                    }
                case 764:
                    var8 = var1.X8jMDh;
                    var16 = var2.bind(var4)(var8);
                    _fun108893_ip = 790;
                    continue _fun108893;
                case 779:
                    var1 = var1.yR6HwZ;
                    var16 = var2.bind(var4)(var1);
                case 790:
                    var4 = _closure1_slot51;
                    var8 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var1 = var18[var7];
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var1.title = var16;
                    var9 = _closure1_slot51;
                    var7 = var18[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.FormInput;
                    var7 = {};
                    var7.accessibilityLabel = var16;
                    var17 = _closure1_slot1;
                    var16 = 40;
                    var16 = var18[var16];
                    var18 = var17.bind(var3)(var16);
                    var17 = var18.translateSurrogatesToInlineEmoji;
                    var16 = var14.topic;
                    var16 = var17.bind(var18)(var16);
                    var7.value = var16;
                    var16 = var12.handleChangeTopic;
                    var7.onChange = var16;
                    var7.multiline = var10;
                    var15 = !var15;
                    var7.disabled = var15;
                    var15 = 4;
                    var7.numberOfLines = var15;
                    var7.autoCorrect = var10;
                    var7.showTopContainer = var11;
                    var11 = var14.isForumLikeChannel;
                    var11 = var11.bind(var14)();
                    if (var11) {
                        _fun108893_ip = 945;
                        continue _fun108893
                    }
                case 939:
                    var11 = _closure1_slot46;
                    _fun108893_ip = 949;
                    continue _fun108893;
                case 945:
                    var11 = _closure1_slot47;
                case 949:
                    var7.maxLength = var11;
                    var7.showCharactersRemaining = var10;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var13];
                    var10 = var11.bind(var3)(var10);
                    var10 = var10.ClearButtonVisibility;
                    var10 = var10.NEVER;
                    var7.clearButtonVisibility = var10;
                    var11 = var12.getError;
                    var10 = 'topic';
                    var10 = var11.bind(var12)(var10);
                    var7.error = var10;
                    var7 = var9.bind(var3)(var8, var7);
                    var1.children = var7;
                    var5 = var4.bind(var3)(var2, var1);
                case 1028:
                    var2 = _closure1_slot52;
                    var1 = _closure1_slot53;
                    var0 = {};
                    var4 = new Array(2);
                    var4[0] = var6;
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'renderNsfwConfig';
        var4.key = var6;
        var6 = function() {
            _fun108894: for (var _fun108894_ip = 0;;) switch (_fun108894_ip) {
                case 0:
                    var12 = this;
                    var0 = var12.props;
                    var8 = var0.channel;
                    var1 = var0.canManageChannels;
                    var11 = var0.isNSFWDisabled;
                    var3 = var8.type;
                    var0 = _closure1_slot31;
                    var2 = var0.GUILD_TEXT;
                    var10 = null;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun108894_ip = 429;
                        continue _fun108894
                    }
                case 54:
                    var0 = null;
                    if (!var1) {
                        _fun108894_ip = 429;
                        continue _fun108894
                    }
                case 62:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 57;
                    var1 = var3[var1];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    var0 = null;
                    if (var1) {
                        _fun108894_ip = 429;
                        continue _fun108894
                    }
                case 102:
                    var4 = _closure1_slot51;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 55;
                    var2 = var16[var1];
                    var2 = var15.bind(var5)(var2);
                    var3 = var2.FormSection;
                    var2 = {};
                    var14 = _closure1_slot51;
                    var6 = var16[var1];
                    var6 = var15.bind(var5)(var6);
                    var7 = var6.FormHint;
                    var6 = {};
                    var13 = 37;
                    var17 = var16[var13];
                    var17 = var15.bind(var5)(var17);
                    var19 = var17.intl;
                    var18 = var19.string;
                    var17 = var16[var13];
                    var17 = var15.bind(var5)(var17);
                    var17 = var17.t;
                    var17 = var17["9eUgwR"];
                    var17 = var18.bind(var19)(var17);
                    var6.children = var17;
                    var6 = var14.bind(var5)(var7, var6);
                    var2.hint = var6;
                    var7 = _closure1_slot51;
                    var1 = var16[var1];
                    var1 = var15.bind(var5)(var1);
                    var6 = var1.FormSwitchRow;
                    var1 = {};
                    var14 = var16[var13];
                    var14 = var15.bind(var5)(var14);
                    var18 = var14.intl;
                    var17 = var18.string;
                    var14 = var16[var13];
                    var14 = var15.bind(var5)(var14);
                    var14 = var14.t;
                    var14 = var14.Es25Yf;
                    var14 = var17.bind(var18)(var14);
                    var1.label = var14;
                    var14 = 58;
                    var14 = var16[var14];
                    var15 = var15.bind(var5)(var14);
                    var14 = var15.isChannelOrGuildNSFW;
                    var14 = var14.bind(var15)(var8);
                    var1.value = var14;
                    var12 = var12.handleNsfwChange;
                    var1.onValueChange = var12;
                    var1.disabled = var11;
                    var8 = var8.linkedLobby;
                    var10 = var10 != var8;
                    var8 = undefined;
                    if (!var10) {
                        _fun108894_ip = 401;
                        continue _fun108894
                    }
                case 347:
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var13];
                    var10 = var12.bind(var5)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
                    var9 = var12.bind(var5)(var9);
                    var9 = var9.t;
                    var9 = var9.l6uSVa;
                    var8 = var10.bind(var11)(var9);
                case 401:
                    var1.subLabel = var8;
                    var1 = var7.bind(var5)(var6, var1);
                    var2.children = var1;
                    var1 = 'nsfw-section';
                    var0 = var4.bind(var5)(var3, var2, var1);
                case 429:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'renderSlowmode';
        var4.key = var6;
        var6 = function() {
            _fun108895: for (var _fun108895_ip = 0;;) switch (_fun108895_ip) {
                case 0:
                    var9 = this;
                    var1 = _closure1_slot55;
                    var0 = var9.context;
                    var6 = undefined;
                    var11 = var1.bind(var6)(var0);
                    var0 = var9.props;
                    var2 = var0.channel;
                    var1 = var0.canManageChannels;
                    var0 = var0.isThreadModerator;
                    var4 = var2.type;
                    var3 = _closure1_slot31;
                    var3 = var3.GUILD_TEXT;
                    if (!(var4 === var3)) {
                        _fun108895_ip = 66;
                        continue _fun108895
                    }
                case 63:
                    if (var1) {
                        _fun108895_ip = 86;
                        continue _fun108895
                    }
                case 66:
                    var1 = var2.isThread;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun108895_ip = 82;
                        continue _fun108895
                    }
                case 79:
                    if (var0) {
                        _fun108895_ip = 86;
                        continue _fun108895
                    }
                case 82:
                    var0 = null;
                    return var0;
                case 86:
                    var0 = new Array(0);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 59;
                    var1 = var5[var1];
                    var13 = var3.bind(var6)(var1);
                    var8 = var13.getSecondsSliderLabel;
                    var7 = var2.rateLimitPerUser;
                    var12 = 37;
                    var1 = var5[var12];
                    var1 = var3.bind(var6)(var1);
                    var14 = var1.intl;
                    var4 = var14.string;
                    var1 = var5[var12];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.zvDu4h;
                    var4 = var4.bind(var14)(var1);
                    var1 = false;
                    var16 = var8.bind(var13)(var7, var1, var4);
                    var4 = {};
                    var1 = 60;
                    var1 = var5[var1];
                    var13 = var3.bind(var6)(var1);
                    var8 = var13.dateFormat;
                    var3 = _closure1_slot1;
                    var1 = 61;
                    var1 = var5[var1];
                    var7 = var3.bind(var6)(var1);
                    var1 = _closure1_slot44;
                    var7 = var7.bind(var6)(var1);
                    var1 = 'LL';
                    var1 = var8.bind(var13)(var7, var1);
                    var4.breakingChangeDate = var1;
                    var1 = 62;
                    var1 = var5[var1];
                    var5 = var3.bind(var6)(var1);
                    var3 = var5.getArticleURL;
                    var1 = _closure1_slot35;
                    var1 = var1.SLOWMODE;
                    var1 = var3.bind(var5)(var1);
                    var4.helpCenterLink = var1;
                    var1 = var2.isForumLikeChannel;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun108895_ip = 377;
                        continue _fun108895
                    }
                case 291:
                    var1 = var2.isThread;
                    var5 = var1.bind(var2)();
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = var1[var12];
                    var2 = var7.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.format;
                    var1 = var1[var12];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    if (var5) {
                        _fun108895_ip = 361;
                        continue _fun108895
                    }
                case 345:
                    var5 = var1.wW2MWu;
                    var17 = var2.bind(var3)(var5, var4);
                    _fun108895_ip = 375;
                    continue _fun108895;
                case 361:
                    var1 = var1["8sTC8t"];
                    var17 = var2.bind(var3)(var1, var4);
                case 375:
                    _fun108895_ip = 432;
                    continue _fun108895;
                case 377:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = var1[var12];
                    var2 = var5.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.format;
                    var1 = var1[var12];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.EIQq9v;
                    var17 = var2.bind(var3)(var1, var4);
                case 432:
                    var2 = var0.push;
                    var5 = _closure1_slot51;
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 55;
                    var3 = var13[var1];
                    var3 = var14.bind(var6)(var3);
                    var4 = var3.FormSection;
                    var3 = {};
                    var15 = _closure1_slot51;
                    var7 = var13[var1];
                    var7 = var14.bind(var6)(var7);
                    var8 = var7.FormHint;
                    var7 = {};
                    var7.children = var17;
                    var7 = var15.bind(var6)(var8, var7);
                    var3.hint = var7;
                    var8 = _closure1_slot51;
                    var1 = var13[var1];
                    var1 = var14.bind(var6)(var1);
                    var7 = var1.FormSliderRow;
                    var1 = {};
                    var15 = var13[var12];
                    var15 = var14.bind(var6)(var15);
                    var17 = var15.intl;
                    var15 = var17.string;
                    var12 = var13[var12];
                    var12 = var14.bind(var6)(var12);
                    var12 = var12.t;
                    var12 = var12.piZgKF;
                    var12 = var15.bind(var17)(var12);
                    var1.label = var12;
                    var15 = _closure1_slot51;
                    var12 = 44;
                    var12 = var13[var12];
                    var12 = var14.bind(var6)(var12);
                    var14 = var12.Text;
                    var12 = {
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var12.children = var16;
                    var12 = var15.bind(var6)(var14, var12);
                    var1.trailing = var12;
                    var11 = var11.slider;
                    var1.style = var11;
                    var11 = var9._cooldown;
                    var1.value = var11;
                    var11 = 0;
                    var1.minimumValue = var11;
                    var11 = _closure1_slot41;
                    var12 = var11.length;
                    var11 = 1;
                    var11 = var12 - var11;
                    var1.maximumValue = var11;
                    var12 = _closure1_slot1;
                    var11 = 29;
                    var11 = var13[var11];
                    var11 = var12.bind(var6)(var11);
                    var11 = var11.unsafe_rawColors;
                    var11 = var11.BRAND_500;
                    var1.minimumTrackTintColor = var11;
                    var10 = _closure1_slot42;
                    var10 = var10.GREY2;
                    var1.maximumTrackTintColor = var10;
                    var9 = var9.handleSlowmodeChange;
                    var1.onValueChange = var9;
                    var1 = var8.bind(var6)(var7, var1);
                    var3.children = var1;
                    var1 = 'slowmode-section';
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'renderAutoArchiveDuration';
        var4.key = var6;
        var6 = function() {
            _fun108896: for (var _fun108896_ip = 0;;) switch (_fun108896_ip) {
                case 0:
                    var4 = this;
                    var1 = var4.props;
                    var5 = var1.channel;
                    var0 = var1.canManageThread;
                    var8 = var1.isForumPost;
                    var1 = var5.isThread;
                    var1 = var1.bind(var5)();
                    if (!var1) {
                        _fun108896_ip = 41;
                        continue _fun108896
                    }
                case 38:
                    if (var0) {
                        _fun108896_ip = 45;
                        continue _fun108896
                    }
                case 41:
                    var0 = null;
                    return var0;
                case 45:
                    var9 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var6 = 37;
                    var1 = var0[var6];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var0[var6];
                    var0 = var9.bind(var3)(var0);
                    var0 = var0.t;
                    if (var8) {
                        _fun108896_ip = 112;
                        continue _fun108896
                    }
                case 97:
                    var8 = var0.YUXr4Z;
                    var10 = var1.bind(var2)(var8);
                    _fun108896_ip = 125;
                    continue _fun108896;
                case 112:
                    var0 = var0["3aJN9M"];
                    var10 = var1.bind(var2)(var0);
                case 125:
                    var2 = _closure1_slot51;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var0 = 63;
                    var0 = var11[var0];
                    var0 = var8.bind(var3)(var0);
                    var1 = var0.AutoArchiveDurationOptions;
                    var0 = {};
                    var9 = var11[var6];
                    var9 = var8.bind(var3)(var9);
                    var12 = var9.intl;
                    var9 = var12.string;
                    var6 = var11[var6];
                    var6 = var8.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.FGjMZS;
                    var6 = var9.bind(var12)(var6);
                    var0.title = var6;
                    var9 = _closure1_slot51;
                    var6 = 55;
                    var6 = var11[var6];
                    var6 = var8.bind(var3)(var6);
                    var8 = var6.FormHint;
                    var6 = {};
                    var6.children = var10;
                    var6 = var9.bind(var3)(var8, var6);
                    var0.hint = var6;
                    var9 = var5.threadMetadata;
                    var8 = null;
                    var10 = var8 == var9;
                    var6 = undefined;
                    if (var10) {
                        _fun108896_ip = 267;
                        continue _fun108896
                    }
                case 261:
                    var6 = var9.autoArchiveDuration;
                case 267:
                    if (!(var8 == var6)) {
                        _fun108896_ip = 275;
                        continue _fun108896
                    }
                case 271:
                    var6 = _closure1_slot49;
                case 275:
                    var0.selected = var6;
                    var0.channel = var5;
                    var4 = var4.handleAutoArchiveDurationChange;
                    var0.onSelectDuration = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'renderInvitable';
        var4.key = var6;
        var6 = function() {
            _fun108897: for (var _fun108897_ip = 0;;) switch (_fun108897_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var9 = var0.channel;
                    var11 = var0.canManageThread;
                    var0 = var9.threadMetadata;
                    var3 = null;
                    var1 = var3 == var0;
                    var0 = null;
                    if (var1) {
                        _fun108897_ip = 313;
                        continue _fun108897
                    }
                case 39:
                    var2 = var9.type;
                    var1 = _closure1_slot31;
                    var1 = var1.PRIVATE_THREAD;
                    var0 = null;
                    if (!(var2 === var1)) {
                        _fun108897_ip = 313;
                        continue _fun108897
                    }
                case 66:
                    var5 = _closure1_slot51;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 55;
                    var2 = var14[var1];
                    var4 = undefined;
                    var2 = var13.bind(var4)(var2);
                    var3 = var2.FormSection;
                    var2 = {};
                    var15 = _closure1_slot51;
                    var7 = var14[var1];
                    var7 = var13.bind(var4)(var7);
                    var12 = var7.FormHint;
                    var7 = {};
                    var10 = 37;
                    var16 = var14[var10];
                    var16 = var13.bind(var4)(var16);
                    var18 = var16.intl;
                    var17 = var18.string;
                    var16 = var14[var10];
                    var16 = var13.bind(var4)(var16);
                    var16 = var16.t;
                    var16 = var16.cSyXJk;
                    var16 = var17.bind(var18)(var16);
                    var7.children = var16;
                    var7 = var15.bind(var4)(var12, var7);
                    var2.hint = var7;
                    var7 = _closure1_slot51;
                    var1 = var14[var1];
                    var1 = var13.bind(var4)(var1);
                    var6 = var1.FormSwitchRow;
                    var1 = {};
                    var11 = !var11;
                    var1.disabled = var11;
                    var11 = var14[var10];
                    var11 = var13.bind(var4)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var4)(var10);
                    var10 = var10.t;
                    var10 = var10.s2rpNf;
                    var10 = var11.bind(var12)(var10);
                    var1.label = var10;
                    var9 = var9.threadMetadata;
                    var9 = var9.invitable;
                    var1.value = var9;
                    var8 = var8.handleInvitableChange;
                    var1.onValueChange = var8;
                    var1 = var7.bind(var4)(var6, var1);
                    var2.children = var1;
                    var1 = 'thread-invitable-section';
                    var0 = var5.bind(var4)(var3, var2, var1);
                case 313:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'renderDefaultAutoArchiveDuration';
        var4.key = var6;
        var6 = function() {
            _fun108898: for (var _fun108898_ip = 0;;) switch (_fun108898_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.props;
                    var10 = var0.channel;
                    var1 = var0.canManageChannels;
                    var3 = _closure1_slot14;
                    var2 = var3.has;
                    var0 = var10.type;
                    var2 = var2.bind(var3)(var0);
                    var12 = null;
                    var0 = null;
                    if (!var2) {
                        _fun108898_ip = 315;
                        continue _fun108898
                    }
                case 51:
                    var0 = null;
                    if (!var1) {
                        _fun108898_ip = 315;
                        continue _fun108898
                    }
                case 59:
                    var4 = _closure1_slot51;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 63;
                    var1 = var8[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.AutoArchiveDurationOptions;
                    var1 = {};
                    var13 = 37;
                    var7 = var8[var13];
                    var7 = var6.bind(var3)(var7);
                    var14 = var7.intl;
                    var11 = var14.string;
                    var7 = var8[var13];
                    var7 = var6.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.FGjMZS;
                    var7 = var11.bind(var14)(var7);
                    var1.title = var7;
                    var7 = 64;
                    var7 = var8[var7];
                    var11 = var6.bind(var3)(var7);
                    var7 = var11.getAutoArchiveDuration;
                    var7 = var7.bind(var11)(var10, var12);
                    var1.selected = var7;
                    var1.channel = var10;
                    var5 = var5.handleDefaultAutoArchiveDurationChange;
                    var1.onSelectDuration = var5;
                    var7 = _closure1_slot51;
                    var5 = 55;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.FormHint;
                    var5 = {};
                    var8 = var10.isForumLikeChannel;
                    var8 = var8.bind(var10)();
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var10 = var9[var13];
                    var10 = var12.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    if (var8) {
                        _fun108898_ip = 281;
                        continue _fun108898
                    }
                case 266:
                    var8 = var9.W3Noi9;
                    var8 = var10.bind(var11)(var8);
                    _fun108898_ip = 294;
                    continue _fun108898;
                case 281:
                    var9 = var9.fyXclY;
                    var8 = var10.bind(var11)(var9);
                case 294:
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var1.hint = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 315:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'renderDefaultSortOrder';
        var4.key = var6;
        var6 = function() {
            _fun108899: for (var _fun108899_ip = 0;;) switch (_fun108899_ip) {
                case 0:
                    var7 = this;
                    var0 = var7.props;
                    var1 = var0.channel;
                    var0 = var0.canManageChannels;
                    var2 = var1.isForumLikeChannel;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun108899_ip = 35;
                        continue _fun108899
                    }
                case 32:
                    if (var0) {
                        _fun108899_ip = 39;
                        continue _fun108899
                    }
                case 35:
                    var0 = null;
                    return var0;
                case 39:
                    var0 = var1.getDefaultSortOrder;
                    var8 = var0.bind(var1)();
                    var3 = _closure1_slot51;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 55;
                    var0 = var13[var4];
                    var2 = undefined;
                    var0 = var12.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var14 = 37;
                    var5 = var13[var14];
                    var5 = var12.bind(var2)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var13[var14];
                    var5 = var12.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5.gePre2;
                    var5 = var6.bind(var10)(var5);
                    var0.title = var5;
                    var6 = _closure1_slot51;
                    var4 = var13[var4];
                    var4 = var12.bind(var2)(var4);
                    var5 = var4.FormHint;
                    var4 = {};
                    var10 = var13[var14];
                    var10 = var12.bind(var2)(var10);
                    var15 = var10.intl;
                    var11 = var15.string;
                    var10 = var13[var14];
                    var10 = var12.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10["165cVX"];
                    var10 = var11.bind(var15)(var10);
                    var4.children = var10;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.hint = var4;
                    var6 = _closure1_slot52;
                    var4 = 65;
                    var4 = var13[var4];
                    var4 = var12.bind(var2)(var4);
                    var5 = var4.TableRadioGroup;
                    var4 = {};
                    var4.defaultValue = var8;
                    var8 = var7.handleDefaultSortOrderChange;
                    var4.onChange = var8;
                    var8 = false;
                    var4.hasIcons = var8;
                    var7 = var7.defaultSortOrderRadioGroupRef;
                    var4.groupRef = var7;
                    var15 = _closure1_slot51;
                    var8 = 66;
                    var7 = var13[var8];
                    var7 = var12.bind(var2)(var7);
                    var10 = var7.TableRadioRow;
                    var7 = {};
                    var11 = var13[var14];
                    var11 = var12.bind(var2)(var11);
                    var17 = var11.intl;
                    var16 = var17.string;
                    var11 = var13[var14];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.ElZtzj;
                    var11 = var16.bind(var17)(var11);
                    var7.label = var11;
                    var11 = 67;
                    var16 = var13[var11];
                    var16 = var12.bind(var2)(var16);
                    var16 = var16.ThreadSortOrder;
                    var16 = var16.LATEST_ACTIVITY;
                    var7.value = var16;
                    var10 = var15.bind(var2)(var10, var7);
                    var7 = new Array(2);
                    var7[0] = var10;
                    var10 = _closure1_slot51;
                    var8 = var13[var8];
                    var8 = var12.bind(var2)(var8);
                    var9 = var8.TableRadioRow;
                    var8 = {};
                    var15 = var13[var14];
                    var15 = var12.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var13[var14];
                    var14 = var12.bind(var2)(var14);
                    var14 = var14.t;
                    var14 = var14.w28f3F;
                    var14 = var15.bind(var16)(var14);
                    var8.label = var14;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.ThreadSortOrder;
                    var11 = var11.CREATION_DATE;
                    var8.value = var11;
                    var8 = var10.bind(var2)(var9, var8);
                    var7[1] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'renderDefaultTagSetting';
        var4.key = var6;
        var6 = function() {
            _fun108900: for (var _fun108900_ip = 0;;) switch (_fun108900_ip) {
                case 0:
                    var7 = this;
                    var0 = var7.props;
                    var1 = var0.channel;
                    var0 = var0.canManageChannels;
                    var2 = var1.isForumLikeChannel;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun108900_ip = 35;
                        continue _fun108900
                    }
                case 32:
                    if (var0) {
                        _fun108900_ip = 39;
                        continue _fun108900
                    }
                case 35:
                    var0 = null;
                    return var0;
                case 39:
                    var0 = var1.getDefaultTagSetting;
                    var8 = var0.bind(var1)();
                    var3 = _closure1_slot51;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 55;
                    var0 = var13[var4];
                    var2 = undefined;
                    var0 = var12.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var14 = 37;
                    var5 = var13[var14];
                    var5 = var12.bind(var2)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var13[var14];
                    var5 = var12.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5.Paxaug;
                    var5 = var6.bind(var10)(var5);
                    var0.title = var5;
                    var6 = _closure1_slot51;
                    var4 = var13[var4];
                    var4 = var12.bind(var2)(var4);
                    var5 = var4.FormHint;
                    var4 = {};
                    var10 = var13[var14];
                    var10 = var12.bind(var2)(var10);
                    var15 = var10.intl;
                    var11 = var15.string;
                    var10 = var13[var14];
                    var10 = var12.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.DqOl8J;
                    var10 = var11.bind(var15)(var10);
                    var4.children = var10;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.hint = var4;
                    var6 = _closure1_slot52;
                    var4 = 65;
                    var4 = var13[var4];
                    var4 = var12.bind(var2)(var4);
                    var5 = var4.TableRadioGroup;
                    var4 = {};
                    var4.defaultValue = var8;
                    var8 = var7.handleDefaultTagSettingChange;
                    var4.onChange = var8;
                    var8 = false;
                    var4.hasIcons = var8;
                    var7 = var7.defaultTagSettingRadioGroupRef;
                    var4.groupRef = var7;
                    var15 = _closure1_slot51;
                    var8 = 66;
                    var7 = var13[var8];
                    var7 = var12.bind(var2)(var7);
                    var10 = var7.TableRadioRow;
                    var7 = {};
                    var11 = var13[var14];
                    var11 = var12.bind(var2)(var11);
                    var17 = var11.intl;
                    var16 = var17.string;
                    var11 = var13[var14];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.rQ0ctQ;
                    var11 = var16.bind(var17)(var11);
                    var7.label = var11;
                    var11 = 68;
                    var16 = var13[var11];
                    var16 = var12.bind(var2)(var16);
                    var16 = var16.ThreadSearchTagSetting;
                    var16 = var16.MATCH_SOME;
                    var7.value = var16;
                    var10 = var15.bind(var2)(var10, var7);
                    var7 = new Array(2);
                    var7[0] = var10;
                    var10 = _closure1_slot51;
                    var8 = var13[var8];
                    var8 = var12.bind(var2)(var8);
                    var9 = var8.TableRadioRow;
                    var8 = {};
                    var15 = var13[var14];
                    var15 = var12.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var13[var14];
                    var14 = var12.bind(var2)(var14);
                    var14 = var14.t;
                    var14 = var14.FCXUu0;
                    var14 = var15.bind(var16)(var14);
                    var8.label = var14;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.ThreadSearchTagSetting;
                    var11 = var11.MATCH_ALL;
                    var8.value = var11;
                    var8 = var10.bind(var2)(var9, var8);
                    var7[1] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'renderAnnouncement';
        var4.key = var6;
        var6 = function() {
            _fun108901: for (var _fun108901_ip = 0;;) switch (_fun108901_ip) {
                case 0:
                    var12 = this;
                    var0 = var12.props;
                    var13 = var0.channel;
                    var11 = var0.canManageChannels;
                    var2 = var0.guild;
                    var1 = _closure1_slot13;
                    var0 = var13.type;
                    var6 = undefined;
                    var0 = var1.bind(var6)(var0);
                    if (!var0) {
                        _fun108901_ip = 592;
                        continue _fun108901
                    }
                case 49:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun108901_ip = 592;
                        continue _fun108901
                    }
                case 58:
                    var4 = var2.features;
                    var3 = var4.has;
                    var1 = _closure1_slot33;
                    var1 = var1.NEWS;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun108901_ip = 592;
                        continue _fun108901
                    }
                case 90:
                    var3 = var13.id;
                    var4 = var0 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun108901_ip = 110;
                        continue _fun108901
                    }
                case 104:
                    var1 = var2.rulesChannelId;
                case 110:
                    if (!(var3 !== var1)) {
                        _fun108901_ip = 592;
                        continue _fun108901
                    }
                case 117:
                    var1 = var13.id;
                    var3 = var0 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun108901_ip = 137;
                        continue _fun108901
                    }
                case 131:
                    var0 = var2.publicUpdatesChannelId;
                case 137:
                    if (!(var1 !== var0)) {
                        _fun108901_ip = 592;
                        continue _fun108901
                    }
                case 144:
                    var0 = new Array(0);
                    var2 = var0.push;
                    var5 = _closure1_slot51;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 55;
                    var3 = var16[var1];
                    var3 = var15.bind(var6)(var3);
                    var4 = var3.FormSection;
                    var3 = {};
                    var14 = _closure1_slot52;
                    var8 = _closure1_slot53;
                    var7 = {};
                    var19 = _closure1_slot51;
                    var10 = var16[var1];
                    var10 = var15.bind(var6)(var10);
                    var18 = var10.FormHint;
                    var17 = {};
                    var10 = 37;
                    var20 = var16[var10];
                    var20 = var15.bind(var6)(var20);
                    var23 = var20.intl;
                    var22 = var23.format;
                    var20 = var16[var10];
                    var20 = var15.bind(var6)(var20);
                    var20 = var20.t;
                    var21 = var20.tI7KNX;
                    var20 = {};
                    var25 = _closure1_slot1;
                    var24 = 62;
                    var24 = var16[var24];
                    var26 = var25.bind(var6)(var24);
                    var25 = var26.getArticleURL;
                    var24 = _closure1_slot35;
                    var24 = var24.ANNOUNCEMENT_CHANNELS;
                    var24 = var25.bind(var26)(var24);
                    var20.documentationLink = var24;
                    var20 = var22.bind(var23)(var21, var20);
                    var17.children = var20;
                    var18 = var19.bind(var6)(var18, var17);
                    var17 = new Array(2);
                    var17[0] = var18;
                    var20 = _closure1_slot51;
                    var18 = var16[var1];
                    var18 = var15.bind(var6)(var18);
                    var19 = var18.FormHint;
                    var18 = {};
                    var21 = var16[var10];
                    var21 = var15.bind(var6)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var16[var10];
                    var21 = var15.bind(var6)(var21);
                    var21 = var21.t;
                    var21 = var21["2Ab4Id"];
                    var21 = var22.bind(var23)(var21);
                    var18.children = var21;
                    var18 = var20.bind(var6)(var19, var18);
                    var17[1] = var18;
                    var7.children = var17;
                    var7 = var14.bind(var6)(var8, var7);
                    var3.hint = var7;
                    var8 = _closure1_slot51;
                    var1 = var16[var1];
                    var1 = var15.bind(var6)(var1);
                    var7 = var1.FormSwitchRow;
                    var1 = {};
                    var11 = !var11;
                    var1.disabled = var11;
                    var11 = var16[var10];
                    var11 = var15.bind(var6)(var11);
                    var14 = var11.intl;
                    var11 = var14.string;
                    var10 = var16[var10];
                    var10 = var15.bind(var6)(var10);
                    var10 = var10.t;
                    var10 = var10.Au2b7m;
                    var10 = var11.bind(var14)(var10);
                    var1.label = var10;
                    var11 = var13.type;
                    var9 = _closure1_slot31;
                    var10 = var9.GUILD_ANNOUNCEMENT;
                    var10 = var11 === var10;
                    var1.value = var10;
                    var11 = var12.handleAnnouncementChange;
                    var10 = var11.bind;
                    var13 = var13.type;
                    var9 = var9.GUILD_ANNOUNCEMENT;
                    var9 = var13 === var9;
                    var9 = var10.bind(var11)(var12, var9);
                    var1.onValueChange = var9;
                    var1 = var8.bind(var6)(var7, var1);
                    var3.children = var1;
                    var1 = 'announcement-section';
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                case 592:
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'renderBitrateSettings';
        var4.key = var6;
        var6 = function() {
            _fun108902: for (var _fun108902_ip = 0;;) switch (_fun108902_ip) {
                case 0:
                    var13 = this;
                    var1 = _closure1_slot55;
                    var0 = var13.context;
                    var6 = undefined;
                    var18 = var1.bind(var6)(var0);
                    var1 = var13.props;
                    var16 = var1.channel;
                    var0 = var1.canManageChannels;
                    var3 = var1.guild;
                    var1 = var13.showVoiceSettings;
                    var1 = var1.bind(var13)();
                    if (!var1) {
                        _fun108902_ip = 59;
                        continue _fun108902
                    }
                case 56:
                    if (var0) {
                        _fun108902_ip = 63;
                        continue _fun108902
                    }
                case 59:
                    var0 = null;
                    return var0;
                case 63:
                    var0 = new Array(0);
                    var11 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var1 = 39;
                    var1 = var19[var1];
                    var2 = var11.bind(var6)(var1);
                    var1 = var2.getBitrateLimit;
                    var14 = var1.bind(var2)(var3, var16);
                    var2 = var0.push;
                    var5 = _closure1_slot52;
                    var1 = 55;
                    var3 = var19[var1];
                    var3 = var11.bind(var6)(var3);
                    var4 = var3.FormSection;
                    var3 = {};
                    var10 = _closure1_slot51;
                    var7 = var19[var1];
                    var7 = var11.bind(var6)(var7);
                    var8 = var7.FormHint;
                    var7 = {};
                    var9 = 37;
                    var12 = var19[var9];
                    var12 = var11.bind(var6)(var12);
                    var21 = var12.intl;
                    var20 = var21.format;
                    var12 = var19[var9];
                    var12 = var11.bind(var6)(var12);
                    var12 = var12.t;
                    var17 = var12.SbQJk5;
                    var12 = {};
                    var22 = _closure1_slot28;
                    var23 = 1000;
                    var22 = var22 / var23;
                    var12.bitrate = var22;
                    var12 = var20.bind(var21)(var17, var12);
                    var7.children = var12;
                    var7 = var10.bind(var6)(var8, var7);
                    var3.hint = var7;
                    var8 = _closure1_slot51;
                    var1 = var19[var1];
                    var1 = var11.bind(var6)(var1);
                    var7 = var1.FormRow;
                    var1 = {};
                    var10 = var19[var9];
                    var10 = var11.bind(var6)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var9 = var19[var9];
                    var9 = var11.bind(var6)(var9);
                    var9 = var9.t;
                    var9 = var9.w2d0vU;
                    var9 = var10.bind(var12)(var9);
                    var1.label = var9;
                    var12 = _closure1_slot51;
                    var9 = 44;
                    var9 = var19[var9];
                    var9 = var11.bind(var6)(var9);
                    var10 = var9.Text;
                    var9 = {
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var17 = global;
                    var22 = var17.Math;
                    var21 = var22.round;
                    var20 = var16.bitrate;
                    var20 = var20 / var23;
                    var23 = var21.bind(var22)(var20);
                    var20 = var17.HermesInternal;
                    var22 = var20.concat;
                    var21 = '';
                    var20 = 'kbps';
                    var20 = var22.bind(var21)(var23, var20);
                    var9.children = var20;
                    var9 = var12.bind(var6)(var10, var9);
                    var1.trailing = var9;
                    var7 = var8.bind(var6)(var7, var1);
                    var1 = new Array(2);
                    var1[0] = var7;
                    var9 = _closure1_slot51;
                    var8 = _closure1_slot10;
                    var7 = {};
                    var10 = var18.sliderWrapper;
                    var7.style = var10;
                    var12 = _closure1_slot51;
                    var10 = 69;
                    var10 = var19[var10];
                    var10 = var11.bind(var6)(var10);
                    var11 = var10.Slider;
                    var10 = {};
                    var18 = var18.slider;
                    var10.style = var18;
                    var18 = var17.Math;
                    var17 = var18.min;
                    var16 = var16.bitrate;
                    var16 = var17.bind(var18)(var16, var14);
                    var10.value = var16;
                    var15 = _closure1_slot29;
                    var10.minimumValue = var15;
                    var10.maximumValue = var14;
                    var13 = var13.handleBitRateChange;
                    var10.onValueChange = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    var7.children = var10;
                    var7 = var9.bind(var6)(var8, var7);
                    var1[1] = var7;
                    var3.children = var1;
                    var1 = 'bitrate-section';
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'renderVideoQualityModeSettings';
        var4.key = var6;
        var6 = function() {
            _fun108903: for (var _fun108903_ip = 0;;) switch (_fun108903_ip) {
                case 0:
                    var9 = this;
                    var0 = var9.props;
                    var10 = var0.channel;
                    var0 = var0.canManageChannels;
                    var1 = var9.showVoiceSettings;
                    var1 = var1.bind(var9)();
                    if (!var1) {
                        _fun108903_ip = 35;
                        continue _fun108903
                    }
                case 32:
                    if (var0) {
                        _fun108903_ip = 39;
                        continue _fun108903
                    }
                case 35:
                    var0 = null;
                    return var0;
                case 39:
                    var0 = new Array(0);
                    var2 = var0.push;
                    var6 = _closure1_slot51;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 55;
                    var3 = var12[var1];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var4 = var3.FormSection;
                    var3 = {};
                    var18 = 37;
                    var8 = var12[var18];
                    var8 = var7.bind(var5)(var8);
                    var14 = var8.intl;
                    var13 = var14.string;
                    var8 = var12[var18];
                    var8 = var7.bind(var5)(var8);
                    var8 = var8.t;
                    var8 = var8.jhJEJs;
                    var8 = var13.bind(var14)(var8);
                    var3.title = var8;
                    var13 = _closure1_slot51;
                    var1 = var12[var1];
                    var1 = var7.bind(var5)(var1);
                    var8 = var1.FormHint;
                    var1 = {};
                    var14 = var12[var18];
                    var14 = var7.bind(var5)(var14);
                    var17 = var14.intl;
                    var16 = var17.format;
                    var14 = var12[var18];
                    var14 = var7.bind(var5)(var14);
                    var14 = var14.t;
                    var15 = var14.c5W7Ss;
                    var14 = {};
                    var14 = var16.bind(var17)(var15, var14);
                    var1.children = var14;
                    var1 = var13.bind(var5)(var8, var1);
                    var3.hint = var1;
                    var8 = _closure1_slot52;
                    var1 = 65;
                    var1 = var12[var1];
                    var1 = var7.bind(var5)(var1);
                    var7 = var1.TableRadioGroup;
                    var1 = {};
                    var10 = var10.videoQualityMode;
                    var12 = null;
                    if (!(var12 == var10)) {
                        _fun108903_ip = 269;
                        continue _fun108903
                    }
                case 259:
                    var12 = _closure1_slot43;
                    var10 = var12.AUTO;
                case 269:
                    var1.defaultValue = var10;
                    var10 = var9.handleVideoQualityModeChange;
                    var1.onChange = var10;
                    var10 = false;
                    var1.hasIcons = var10;
                    var9 = var9.videoQualityModeRadioGroupRef;
                    var1.groupRef = var9;
                    var15 = _closure1_slot51;
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 66;
                    var9 = var14[var10];
                    var9 = var17.bind(var5)(var9);
                    var12 = var9.TableRadioRow;
                    var9 = {};
                    var13 = var14[var18];
                    var13 = var17.bind(var5)(var13);
                    var19 = var13.intl;
                    var16 = var19.string;
                    var13 = var14[var18];
                    var13 = var17.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.jjKYpu;
                    var13 = var16.bind(var19)(var13);
                    var9.label = var13;
                    var13 = _closure1_slot43;
                    var16 = var13.AUTO;
                    var9.value = var16;
                    var12 = var15.bind(var5)(var12, var9);
                    var9 = new Array(2);
                    var9[0] = var12;
                    var12 = _closure1_slot51;
                    var10 = var14[var10];
                    var10 = var17.bind(var5)(var10);
                    var11 = var10.TableRadioRow;
                    var10 = {};
                    var15 = var14[var18];
                    var15 = var17.bind(var5)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var14[var18];
                    var14 = var17.bind(var5)(var14);
                    var14 = var14.t;
                    var14 = var14["7jOoJE"];
                    var14 = var15.bind(var16)(var14);
                    var10.label = var14;
                    var13 = var13.FULL;
                    var10.value = var13;
                    var10 = var12.bind(var5)(var11, var10);
                    var9[1] = var10;
                    var1.children = var9;
                    var1 = var8.bind(var5)(var7, var1);
                    var3.children = var1;
                    var1 = 'video-quality-section';
                    var1 = var6.bind(var5)(var4, var3, var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'renderUserLimitSettings';
        var4.key = var6;
        var6 = function() {
            _fun108904: for (var _fun108904_ip = 0;;) switch (_fun108904_ip) {
                case 0:
                    var13 = this;
                    var1 = _closure1_slot55;
                    var0 = var13.context;
                    var6 = undefined;
                    var18 = var1.bind(var6)(var0);
                    var0 = var13.props;
                    var16 = var0.channel;
                    var0 = var0.canManageChannels;
                    var1 = var13.showVoiceSettings;
                    var1 = var1.bind(var13)();
                    if (!var1) {
                        _fun108904_ip = 54;
                        continue _fun108904
                    }
                case 51:
                    if (var0) {
                        _fun108904_ip = 58;
                        continue _fun108904
                    }
                case 54:
                    var0 = null;
                    return var0;
                case 58:
                    var0 = new Array(0);
                    var17 = global;
                    var3 = var17.Math;
                    var2 = var3.round;
                    var1 = var16.userLimit;
                    var5 = var2.bind(var3)(var1);
                    var15 = 0;
                    if (!(var15 !== var5)) {
                        _fun108904_ip = 159;
                        continue _fun108904
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 37;
                    var3 = var7[var1];
                    var3 = var2.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1["3uHFUR"];
                    var1 = {};
                    var1.num = var5;
                    var21 = var3.bind(var4)(var2, var1);
                    _fun108904_ip = 216;
                    continue _fun108904;
                case 159:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 37;
                    var2 = var5[var1];
                    var2 = var4.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var5[var1];
                    var1 = var4.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.XX5ciX;
                    var21 = var2.bind(var3)(var1);
                case 216:
                    var1 = var16.isGuildStageVoice;
                    var1 = var1.bind(var16)();
                    if (var1) {
                        _fun108904_ip = 235;
                        continue _fun108904
                    }
                case 229:
                    var14 = _closure1_slot37;
                    _fun108904_ip = 239;
                    continue _fun108904;
                case 235:
                    var14 = _closure1_slot38;
                case 239:
                    var2 = var0.push;
                    var5 = _closure1_slot52;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 55;
                    var3 = var7[var1];
                    var3 = var8.bind(var6)(var3);
                    var4 = var3.FormSection;
                    var3 = {};
                    var11 = _closure1_slot51;
                    var7 = var7[var1];
                    var7 = var8.bind(var6)(var7);
                    var8 = var7.FormHint;
                    var7 = {};
                    var9 = var16.isGuildStageVoice;
                    var12 = var9.bind(var16)();
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var9 = 37;
                    var22 = var19[var9];
                    var22 = var20.bind(var6)(var22);
                    var23 = var22.intl;
                    var22 = var23.format;
                    var19 = var19[var9];
                    var19 = var20.bind(var6)(var19);
                    var19 = var19.t;
                    if (var12) {
                        _fun108904_ip = 372;
                        continue _fun108904
                    }
                case 354:
                    var20 = var19["8yb3JT"];
                    var12 = {};
                    var12 = var22.bind(var23)(var20, var12);
                    _fun108904_ip = 388;
                    continue _fun108904;
                case 372:
                    var20 = var19.OqZI8D;
                    var19 = {};
                    var12 = var22.bind(var23)(var20, var19);
                case 388:
                    var7.children = var12;
                    var7 = var11.bind(var6)(var8, var7);
                    var3.hint = var7;
                    var8 = _closure1_slot51;
                    var11 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var1 = var19[var1];
                    var1 = var11.bind(var6)(var1);
                    var7 = var1.FormRow;
                    var1 = {};
                    var12 = var19[var9];
                    var12 = var11.bind(var6)(var12);
                    var20 = var12.intl;
                    var12 = var20.string;
                    var9 = var19[var9];
                    var9 = var11.bind(var6)(var9);
                    var9 = var9.t;
                    var9 = var9["/AoSGN"];
                    var9 = var12.bind(var20)(var9);
                    var1.label = var9;
                    var20 = _closure1_slot51;
                    var9 = 44;
                    var9 = var19[var9];
                    var9 = var11.bind(var6)(var9);
                    var12 = var9.Text;
                    var9 = {
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var9.children = var21;
                    var9 = var20.bind(var6)(var12, var9);
                    var1.trailing = var9;
                    var7 = var8.bind(var6)(var7, var1);
                    var1 = new Array(2);
                    var1[0] = var7;
                    var9 = _closure1_slot51;
                    var8 = _closure1_slot10;
                    var7 = {};
                    var12 = var18.sliderWrapper;
                    var7.style = var12;
                    var12 = _closure1_slot51;
                    var10 = 69;
                    var10 = var19[var10];
                    var10 = var11.bind(var6)(var10);
                    var11 = var10.Slider;
                    var10 = {};
                    var18 = var18.slider;
                    var10.style = var18;
                    var18 = var17.Math;
                    var17 = var18.min;
                    var16 = var16.userLimit;
                    var16 = var17.bind(var18)(var16, var14);
                    var10.value = var16;
                    var10.minimumValue = var15;
                    var10.maximumValue = var14;
                    var13 = var13.handleUserLimitChange;
                    var10.onValueChange = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    var7.children = var10;
                    var7 = var9.bind(var6)(var8, var7);
                    var1[1] = var7;
                    var3.children = var1;
                    var1 = 'channel-user-limit';
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'renderRegionOverride';
        var4.key = var6;
        var6 = function() {
            _fun108905: for (var _fun108905_ip = 0;;) switch (_fun108905_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = var3.props;
                    var4 = var0.regions;
                    var2 = var0.channel;
                    var _closure3_slot1 = var2;
                    var11 = var0.canManageChannels;
                    var1 = var0.guild;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun108905_ip = 548;
                        continue _fun108905
                    }
                case 49:
                    var1 = var3.showVoiceSettings;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun108905_ip = 546;
                        continue _fun108905
                    }
                case 65:
                    if (!var11) {
                        _fun108905_ip = 546;
                        continue _fun108905
                    }
                case 71:
                    var1 = var2.isGuildStageVoice;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun108905_ip = 546;
                        continue _fun108905
                    }
                case 87:
                    var12 = var0 == var4;
                    if (var12) {
                        _fun108905_ip = 105;
                        continue _fun108905
                    }
                case 94:
                    var2 = var4.length;
                    var1 = 0;
                    var12 = var1 === var2;
                case 105:
                    var2 = var0 != var4;
                    var1 = null;
                    if (!var2) {
                        _fun108905_ip = 131;
                        continue _fun108905
                    }
                case 114:
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var10
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot1;
                        var0 = var0.rtcRegion;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2);
                case 131:
                    if (!(var0 == var1)) {
                        _fun108905_ip = 197;
                        continue _fun108905
                    }
                case 135:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 37;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.JEmsap;
                    var16 = var3.bind(var4)(var2);
                    _fun108905_ip = 202;
                    continue _fun108905;
                case 197:
                    var16 = var1.name;
                case 202:
                    var1 = new Array(0);
                    var3 = var1.push;
                    var7 = _closure1_slot51;
                    var14 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 55;
                    var2 = var17[var13];
                    var6 = undefined;
                    var2 = var14.bind(var6)(var2);
                    var5 = var2.FormSection;
                    var4 = {};
                    var18 = 37;
                    var2 = var17[var18];
                    var2 = var14.bind(var6)(var2);
                    var9 = var2.intl;
                    var8 = var9.string;
                    var2 = var17[var18];
                    var2 = var14.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2["Ms8bX+"];
                    var2 = var8.bind(var9)(var2);
                    var4.title = var2;
                    var9 = _closure1_slot51;
                    var2 = var17[var13];
                    var2 = var14.bind(var6)(var2);
                    var8 = var2.FormHint;
                    var2 = {};
                    var19 = var17[var18];
                    var19 = var14.bind(var6)(var19);
                    var21 = var19.intl;
                    var20 = var21.string;
                    var19 = var17[var18];
                    var19 = var14.bind(var6)(var19);
                    var19 = var19.t;
                    var19 = var19["dbTs+z"];
                    var19 = var20.bind(var21)(var19);
                    var2.children = var19;
                    var2 = var9.bind(var6)(var8, var2);
                    var4.hint = var2;
                    var9 = _closure1_slot51;
                    var2 = var17[var13];
                    var2 = var14.bind(var6)(var2);
                    var8 = var2.FormRow;
                    var2 = {};
                    var19 = var17[var18];
                    var19 = var14.bind(var6)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var18 = var17[var18];
                    var18 = var14.bind(var6)(var18);
                    var18 = var18.t;
                    var18 = var18["Ms8bX+"];
                    var18 = var19.bind(var20)(var18);
                    var2.label = var18;
                    var15 = _closure1_slot51;
                    var13 = var17[var13];
                    var13 = var14.bind(var6)(var13);
                    var13 = var13.FormRow;
                    var14 = var13.Arrow;
                    var13 = {};
                    var13.label = var16;
                    var13 = var15.bind(var6)(var14, var13);
                    var2.trailing = var13;
                    var11 = !var11;
                    if (var11) {
                        _fun108905_ip = 501;
                        continue _fun108905
                    }
                case 498:
                    var11 = var12;
                case 501:
                    var2.disabled = var11;
                    var10 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.pushScreen;
                        var0 = _closure1_slot30;
                        var0 = var0.CHANGE_RTC_REGION;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.onPress = var10;
                    var2 = var9.bind(var6)(var8, var2);
                    var4.children = var2;
                    var2 = 'channel-region-override';
                    var2 = var7.bind(var6)(var5, var4, var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                case 546:
                    return var0;
                case 548:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'showVoiceSettings';
        var4.key = var6;
        var6 = function() {
            _fun108908: for (var _fun108908_ip = 0;;) switch (_fun108908_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var5 = var0.channel;
                    var2 = null;
                    var0 = var2 != var5;
                    if (!var0) {
                        _fun108908_ip = 31;
                        continue _fun108908
                    }
                case 22:
                    var1 = var5.guild_id;
                    var0 = var2 != var1;
                case 31:
                    if (!var0) {
                        _fun108908_ip = 56;
                        continue _fun108908
                    }
                case 34:
                    var3 = _closure1_slot12;
                    var2 = var3.has;
                    var1 = var5.type;
                    var0 = var2.bind(var3)(var1);
                case 56:
                    if (!var0) {
                        _fun108908_ip = 143;
                        continue _fun108908
                    }
                case 59:
                    var1 = var5.isGuildVocal;
                    var1 = var1.bind(var5)();
                    if (var1) {
                        _fun108908_ip = 140;
                        continue _fun108908
                    }
                case 72:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 70;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.VoiceInThreadsExperiment;
                    var3 = var4.getCurrentConfig;
                    var2 = {};
                    var5 = var5.guild_id;
                    var2.guildId = var5;
                    var5 = '9b50bd_1';
                    var2.location = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = var2.enabled;
                case 140:
                    var0 = var1;
                case 143:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'renderPermissions';
        var4.key = var6;
        var6 = function() {
            _fun108909: for (var _fun108909_ip = 0;;) switch (_fun108909_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var1 = var0.canManageRoles;
                    var10 = var0.channel;
                    var0 = null;
                    if (!var1) {
                        _fun108909_ip = 417;
                        continue _fun108909
                    }
                case 33:
                    var4 = _closure1_slot51;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var11 = 55;
                    var1 = var5[var11];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var13 = _closure1_slot51;
                    var7 = var5[var11];
                    var7 = var6.bind(var3)(var7);
                    var12 = var7.FormHint;
                    var7 = {};
                    var16 = 37;
                    var14 = var5[var16];
                    var14 = var6.bind(var3)(var14);
                    var17 = var14.intl;
                    var15 = var17.string;
                    var14 = var5[var16];
                    var14 = var6.bind(var3)(var14);
                    var14 = var14.t;
                    var14 = var14.UAoMCL;
                    var14 = var15.bind(var17)(var14);
                    var7.children = var14;
                    var7 = var13.bind(var3)(var12, var7);
                    var1.hint = var7;
                    var7 = _closure1_slot51;
                    var5 = var5[var11];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.FormRow;
                    var5 = {};
                    var12 = var10.type;
                    var10 = _closure1_slot31;
                    var10 = var10.GUILD_CATEGORY;
                    if (!(var12 !== var10)) {
                        _fun108909_ip = 251;
                        continue _fun108909
                    }
                case 195:
                    var14 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var12 = var10[var16];
                    var12 = var14.bind(var3)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var10 = var10[var16];
                    var10 = var14.bind(var3)(var10);
                    var10 = var10.t;
                    var10 = var10.BAZMBn;
                    var10 = var12.bind(var13)(var10);
                    _fun108909_ip = 305;
                    continue _fun108909;
                case 251:
                    var15 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var13 = var12[var16];
                    var13 = var15.bind(var3)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var12[var16];
                    var12 = var15.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.PgkvDf;
                    var10 = var13.bind(var14)(var12);
                case 305:
                    var5.label = var10;
                    var14 = _closure1_slot51;
                    var10 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var11 = var12[var11];
                    var11 = var10.bind(var3)(var11);
                    var11 = var11.FormRow;
                    var13 = var11.Arrow;
                    var11 = {};
                    var11 = var14.bind(var3)(var13, var11);
                    var5.trailing = var11;
                    var11 = _closure1_slot51;
                    var9 = 71;
                    var9 = var12[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.ShieldUserIcon;
                    var9 = {};
                    var9 = var11.bind(var3)(var10, var9);
                    var5.leading = var9;
                    var8 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.pushScreen;
                        var4 = _closure1_slot30;
                        var1 = var4.PERMISSIONS;
                        var0 = {};
                        var4 = var4.OVERVIEW;
                        var0.origin = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var5.onPress = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 417:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'renderSettingsSection';
        var4.key = var6;
        var6 = function arg0() {
            _fun108911: for (var _fun108911_ip = 0;;) switch (_fun108911_ip) {
                case 0:
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var1 = var7.length;
                    var0 = 0;
                    var1 = var1 > var0;
                    var0 = null;
                    if (!var1) {
                        _fun108911_ip = 89;
                        continue _fun108911
                    }
                case 25:
                    var4 = _closure1_slot51;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 55;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var6 = var7.map;
                    var5 = function(arg0, arg1) { // Environment: var5
                        _fun108912: for (var _fun108912_ip = 0;;) switch (_fun108912_ip) {
                            case 0:
                                var1 = arg0;
                                var5 = arg1;
                                var0 = _closure3_slot0;
                                var2 = var0.length;
                                var0 = 1;
                                var2 = var2 - var0;
                                var0 = var1;
                                if (!(var5 < var2)) {
                                    _fun108912_ip = 58;
                                    continue _fun108912
                                }
                            case 32:
                                var4 = _closure1_slot51;
                                var3 = _closure1_slot10;
                                var2 = {};
                                var2.children = var1;
                                var1 = undefined;
                                var0 = var4.bind(var1)(var3, var2, var5);
                            case 58:
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 89:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'renderCommonSettingsSection';
        var4.key = var6;
        var6 = function() {
            _fun108913: for (var _fun108913_ip = 0;;) switch (_fun108913_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2.props;
                    var5 = var1.channel;
                    var _closure3_slot1 = var5;
                    var3 = var1.canManageChannels;
                    var1 = new Array(0);
                    var6 = _closure1_slot13;
                    var4 = var5.type;
                    var7 = undefined;
                    var4 = var6.bind(var7)(var4);
                    if (var4) {
                        _fun108913_ip = 65;
                        continue _fun108913
                    }
                case 55:
                    var6 = var5.isGuildStageVoice;
                    var4 = var6.bind(var5)();
                case 65:
                    if (!var4) {
                        _fun108913_ip = 261;
                        continue _fun108913
                    }
                case 71:
                    var6 = var1.push;
                    var11 = _closure1_slot51;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 55;
                    var9 = var14[var4];
                    var9 = var12.bind(var7)(var9);
                    var10 = var9.FormRow;
                    var9 = {};
                    var13 = 37;
                    var15 = var14[var13];
                    var15 = var12.bind(var7)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var14[var13];
                    var13 = var12.bind(var7)(var13);
                    var13 = var13.t;
                    var13 = var13.h850Ss;
                    var13 = var15.bind(var16)(var13);
                    var9.label = var13;
                    var15 = _closure1_slot51;
                    var4 = var14[var4];
                    var4 = var12.bind(var7)(var4);
                    var4 = var4.FormRow;
                    var13 = var4.Arrow;
                    var4 = {};
                    var4 = var15.bind(var7)(var13, var4);
                    var9.trailing = var4;
                    var13 = _closure1_slot51;
                    var4 = 72;
                    var4 = var14[var4];
                    var4 = var12.bind(var7)(var4);
                    var12 = var4.BellIcon;
                    var4 = {};
                    var4 = var13.bind(var7)(var12, var4);
                    var9.leading = var4;
                    var4 = function() {
                        _fun108914: for (var _fun108914_ip = 0;;) switch (_fun108914_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var0 = var2.isThread;
                                var0 = var0.bind(var2)();
                                if (var0) {
                                    _fun108914_ip = 50;
                                    continue _fun108914
                                }
                            case 23:
                                var4 = _closure3_slot0;
                                var3 = var4.pushScreen;
                                var0 = _closure1_slot30;
                                var0 = var0.NOTIFICATIONS;
                                var0 = var3.bind(var4)(var0);
                                _fun108914_ip = 87;
                                continue _fun108914;
                            case 50:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 73;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.showThreadNotificationsBottomSheet;
                                var1 = _closure3_slot1;
                                var0 = var2.bind(var3)(var1);
                            case 87:
                                return var0;
                        }
                    };
                    var9.onPress = var4;
                    var4 = 'rowNotifications';
                    var4 = var11.bind(var7)(var10, var9, var4);
                    var4 = var6.bind(var1)(var4);
                case 261:
                    var6 = _closure1_slot13;
                    var4 = var5.type;
                    var4 = var6.bind(var7)(var4);
                    if (!var4) {
                        _fun108913_ip = 481;
                        continue _fun108913
                    }
                case 281:
                    var6 = var1.push;
                    var11 = _closure1_slot51;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var4 = 55;
                    var9 = var14[var4];
                    var9 = var12.bind(var7)(var9);
                    var10 = var9.FormRow;
                    var9 = {};
                    var13 = 37;
                    var15 = var14[var13];
                    var15 = var12.bind(var7)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var14[var13];
                    var13 = var12.bind(var7)(var13);
                    var13 = var13.t;
                    var13 = var13["mp1N/2"];
                    var13 = var15.bind(var16)(var13);
                    var9.label = var13;
                    var13 = _closure1_slot51;
                    var4 = var14[var4];
                    var4 = var12.bind(var7)(var4);
                    var4 = var4.FormRow;
                    var12 = var4.Arrow;
                    var4 = {};
                    var4 = var13.bind(var7)(var12, var4);
                    var9.trailing = var4;
                    var13 = _closure1_slot51;
                    var12 = _closure1_slot58;
                    var4 = {};
                    var14 = var5.id;
                    var4.channelId = var14;
                    var4 = var13.bind(var7)(var12, var4);
                    var9.leading = var4;
                    var4 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.pushScreen;
                        var0 = _closure1_slot30;
                        var0 = var0.PINNED_MESSAGES;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var9.onPress = var4;
                    var4 = var2.props;
                    var4 = var4.pinDisabled;
                    var9.disabled = var4;
                    var4 = 'rowPinnedMessages';
                    var4 = var11.bind(var7)(var10, var9, var4);
                    var4 = var6.bind(var1)(var4);
                case 481:
                    if (!var3) {
                        _fun108913_ip = 503;
                        continue _fun108913
                    }
                case 484:
                    var6 = var5.type;
                    var4 = _closure1_slot31;
                    var4 = var4.GUILD_CATEGORY;
                    var3 = var6 !== var4;
                case 503:
                    if (!var3) {
                        _fun108913_ip = 519;
                        continue _fun108913
                    }
                case 506:
                    var4 = var5.isThread;
                    var4 = var4.bind(var5)();
                    var3 = !var4;
                case 519:
                    if (!var3) {
                        _fun108913_ip = 715;
                        continue _fun108913
                    }
                case 525:
                    var3 = var1.push;
                    var6 = _closure1_slot51;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var10 = 55;
                    var4 = var11[var10];
                    var4 = var9.bind(var7)(var4);
                    var5 = var4.FormRow;
                    var4 = {};
                    var12 = 37;
                    var13 = var11[var12];
                    var13 = var9.bind(var7)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var11[var12];
                    var12 = var9.bind(var7)(var12);
                    var12 = var12.t;
                    var12 = var12.ngRFjZ;
                    var12 = var13.bind(var14)(var12);
                    var4.label = var12;
                    var13 = _closure1_slot51;
                    var10 = var11[var10];
                    var10 = var9.bind(var7)(var10);
                    var10 = var10.FormRow;
                    var12 = var10.Arrow;
                    var10 = {};
                    var10 = var13.bind(var7)(var12, var10);
                    var4.trailing = var10;
                    var10 = _closure1_slot51;
                    var8 = 74;
                    var8 = var11[var8];
                    var8 = var9.bind(var7)(var8);
                    var9 = var8.LinkIcon;
                    var8 = {};
                    var8 = var10.bind(var7)(var9, var8);
                    var4.leading = var8;
                    var0 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.pushScreen;
                        var0 = _closure1_slot30;
                        var0 = var0.INSTANT_INVITES;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4.onPress = var0;
                    var0 = 'rowInstantInvites';
                    var0 = var6.bind(var7)(var5, var4, var0);
                    var0 = var3.bind(var1)(var0);
                case 715:
                    var0 = var2.renderSettingsSection;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'renderDefaultForumLayout';
        var4.key = var6;
        var6 = function() {
            _fun108917: for (var _fun108917_ip = 0;;) switch (_fun108917_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var9 = var0.channel;
                    var0 = var9.isForumChannel;
                    var2 = var0.bind(var9)();
                    var0 = null;
                    if (!var2) {
                        _fun108917_ip = 577;
                        continue _fun108917
                    }
                case 37:
                    var5 = _closure1_slot51;
                    var17 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 55;
                    var2 = var15[var11];
                    var4 = undefined;
                    var2 = var17.bind(var4)(var2);
                    var3 = var2.FormSection;
                    var2 = {};
                    var8 = _closure1_slot51;
                    var6 = var15[var11];
                    var6 = var17.bind(var4)(var6);
                    var7 = var6.FormHint;
                    var6 = {};
                    var20 = 37;
                    var12 = var15[var20];
                    var12 = var17.bind(var4)(var12);
                    var14 = var12.intl;
                    var13 = var14.string;
                    var12 = var15[var20];
                    var12 = var17.bind(var4)(var12);
                    var12 = var12.t;
                    var12 = var12.mOSViT;
                    var12 = var13.bind(var14)(var12);
                    var6.children = var12;
                    var6 = var8.bind(var4)(var7, var6);
                    var2.hint = var6;
                    var8 = _closure1_slot51;
                    var6 = var15[var11];
                    var6 = var17.bind(var4)(var6);
                    var7 = var6.FormRow;
                    var6 = {};
                    var12 = var15[var20];
                    var12 = var17.bind(var4)(var12);
                    var14 = var12.intl;
                    var13 = var14.string;
                    var12 = var15[var20];
                    var12 = var17.bind(var4)(var12);
                    var12 = var12.t;
                    var12 = var12["kQvoC/"];
                    var12 = var13.bind(var14)(var12);
                    var6.label = var12;
                    var14 = _closure1_slot51;
                    var11 = var15[var11];
                    var11 = var17.bind(var4)(var11);
                    var11 = var11.FormRow;
                    var12 = var11.Arrow;
                    var11 = {};
                    var16 = var9.defaultForumLayout;
                    var13 = 75;
                    var15 = var15[var13];
                    var15 = var17.bind(var4)(var15);
                    var15 = var15.ForumLayout;
                    var15 = var15.GRID;
                    if (!(var16 !== var15)) {
                        _fun108917_ip = 345;
                        continue _fun108917
                    }
                case 289:
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var16 = var15[var20];
                    var16 = var18.bind(var4)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var20];
                    var15 = var18.bind(var4)(var15);
                    var15 = var15.t;
                    var15 = var15["4HXEZG"];
                    var15 = var16.bind(var17)(var15);
                    _fun108917_ip = 399;
                    continue _fun108917;
                case 345:
                    var19 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var17 = var16[var20];
                    var17 = var19.bind(var4)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var16 = var16[var20];
                    var16 = var19.bind(var4)(var16);
                    var16 = var16.t;
                    var16 = var16["8RswJG"];
                    var15 = var17.bind(var18)(var16);
                case 399:
                    var11.label = var15;
                    var11 = var14.bind(var4)(var12, var11);
                    var6.trailing = var11;
                    var11 = var9.defaultForumLayout;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.ForumLayout;
                    var9 = var9.GRID;
                    if (!(var11 !== var9)) {
                        _fun108917_ip = 493;
                        continue _fun108917
                    }
                case 453:
                    var12 = _closure1_slot51;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 77;
                    var9 = var13[var9];
                    var9 = var11.bind(var4)(var9);
                    var11 = var9.ListViewIcon;
                    var9 = {};
                    var9 = var12.bind(var4)(var11, var9);
                    _fun108917_ip = 531;
                    continue _fun108917;
                case 493:
                    var12 = _closure1_slot51;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 76;
                    var10 = var13[var10];
                    var10 = var11.bind(var4)(var10);
                    var11 = var10.GridSquareIcon;
                    var10 = {};
                    var9 = var12.bind(var4)(var11, var10);
                case 531:
                    var6.leading = var9;
                    var1 = function() {
                        var2 = _closure3_slot0;
                        var1 = var2.pushScreen;
                        var0 = _closure1_slot30;
                        var0 = var0.DEFAULT_FORUM_LAYOUT;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.onPress = var1;
                    var1 = 'forumDefaultLayout';
                    var1 = var8.bind(var4)(var7, var6, var1);
                    var2.children = var1;
                    var1 = 'default-forum-layout';
                    var0 = var5.bind(var4)(var3, var2, var1);
                case 577:
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'renderUncommonSettingsSection';
        var4.key = var6;
        var6 = function() {
            _fun108919: for (var _fun108919_ip = 0;;) switch (_fun108919_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2.props;
                    var4 = var1.canManageWebhooks;
                    var7 = undefined;
                    var3 = var7 !== var4;
                    if (!var3) {
                        _fun108919_ip = 32;
                        continue _fun108919
                    }
                case 29:
                    var3 = var4;
                case 32:
                    var _closure3_slot1 = var3;
                    var5 = var1.channel;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 78;
                    var1 = var6[var1];
                    var4 = var4.bind(var7)(var1);
                    var1 = var4.canUnlinkLobbyChannel;
                    var4 = var1.bind(var4)(var5);
                    var _closure3_slot2 = var4;
                    var1 = new Array(0);
                    if (var3) {
                        _fun108919_ip = 89;
                        continue _fun108919
                    }
                case 86:
                    var3 = var4;
                case 89:
                    if (!var3) {
                        _fun108919_ip = 273;
                        continue _fun108919
                    }
                case 95:
                    var3 = var1.push;
                    var6 = _closure1_slot51;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 55;
                    var4 = var10[var8];
                    var4 = var9.bind(var7)(var4);
                    var5 = var4.FormRow;
                    var4 = {};
                    var12 = 37;
                    var13 = var10[var12];
                    var13 = var9.bind(var7)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var10[var12];
                    var12 = var9.bind(var7)(var12);
                    var12 = var12.t;
                    var12 = var12.CIsNZw;
                    var12 = var13.bind(var14)(var12);
                    var4.label = var12;
                    var12 = _closure1_slot51;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.FormRow;
                    var11 = var8.Arrow;
                    var8 = {};
                    var8 = var12.bind(var7)(var11, var8);
                    var4.trailing = var8;
                    var8 = 79;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var8 = var8.PuzzlePieceIcon;
                    var4.leading = var8;
                    var0 = function() {
                        var3 = _closure3_slot0;
                        var2 = var3.pushScreen;
                        var0 = _closure1_slot30;
                        var1 = var0.INTEGRATIONS;
                        var0 = {};
                        var5 = _closure3_slot1;
                        var0.canManageWebhooks = var5;
                        var4 = _closure3_slot2;
                        var0.canUnlinkLobby = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var4.onPress = var0;
                    var0 = 'rowIntegrations';
                    var0 = var6.bind(var7)(var5, var4, var0);
                    var0 = var3.bind(var1)(var0);
                case 273:
                    var0 = var2.renderSettingsSection;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'renderThreadManagementActions';
        var4.key = var6;
        var6 = function() {
            _fun108921: for (var _fun108921_ip = 0;;) switch (_fun108921_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var10 = var0.channel;
                    var _closure3_slot0 = var10;
                    var12 = var0.canManageThread;
                    var6 = var0.isThreadModerator;
                    var13 = var0.canUnarchiveThread;
                    var11 = var0.isForumPost;
                    var4 = var0.hasJoinedThread;
                    var3 = _closure1_slot52;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 55;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var7 = null;
                    var5 = null;
                    if (var4) {
                        _fun108921_ip = 254;
                        continue _fun108921
                    }
                case 96:
                    var15 = _closure1_slot51;
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var4 = 80;
                    var4 = var19[var4];
                    var4 = var17.bind(var2)(var4);
                    var14 = var4.TableRow;
                    var4 = {};
                    var18 = _closure1_slot51;
                    var16 = 81;
                    var16 = var19[var16];
                    var16 = var17.bind(var2)(var16);
                    var17 = var16.GroupPlusIcon;
                    var16 = {};
                    var16 = var18.bind(var2)(var17, var16);
                    var4.icon = var16;
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var16 = 37;
                    var18 = var20[var16];
                    var18 = var17.bind(var2)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var16 = var20[var16];
                    var16 = var17.bind(var2)(var16);
                    var17 = var16.t;
                    if (var11) {
                        _fun108921_ip = 222;
                        continue _fun108921
                    }
                case 209:
                    var16 = var17["10kukS"];
                    var16 = var18.bind(var19)(var16);
                    _fun108921_ip = 233;
                    continue _fun108921;
                case 222:
                    var17 = var17.ihLPiO;
                    var16 = var18.bind(var19)(var17);
                case 233:
                    var4.label = var16;
                    var16 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.joinThread;
                        var1 = _closure3_slot0;
                        var0 = 'Context Menu';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var4.onPress = var16;
                    var5 = var15.bind(var2)(var14, var4);
                case 254:
                    var4 = new Array(6);
                    var4[0] = var5;
                    var5 = var10.threadMetadata;
                    var14 = var7 == var5;
                    var15 = undefined;
                    if (var14) {
                        _fun108921_ip = 283;
                        continue _fun108921
                    }
                case 277:
                    var15 = var5.archived;
                case 283:
                    var14 = true;
                    var5 = null;
                    if (!(var14 === var15)) {
                        _fun108921_ip = 460;
                        continue _fun108921
                    }
                case 294:
                    var5 = null;
                    if (!var13) {
                        _fun108921_ip = 460;
                        continue _fun108921
                    }
                case 302:
                    var16 = _closure1_slot51;
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var13 = 80;
                    var13 = var20[var13];
                    var13 = var18.bind(var2)(var13);
                    var15 = var13.TableRow;
                    var13 = {};
                    var19 = _closure1_slot51;
                    var17 = 83;
                    var17 = var20[var17];
                    var17 = var18.bind(var2)(var17);
                    var18 = var17.ClockIcon;
                    var17 = {};
                    var17 = var19.bind(var2)(var18, var17);
                    var13.icon = var17;
                    var18 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var17 = 37;
                    var19 = var21[var17];
                    var19 = var18.bind(var2)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var17 = var21[var17];
                    var17 = var18.bind(var2)(var17);
                    var18 = var17.t;
                    if (var11) {
                        _fun108921_ip = 428;
                        continue _fun108921
                    }
                case 415:
                    var17 = var18.S9E4G7;
                    var17 = var19.bind(var20)(var17);
                    _fun108921_ip = 439;
                    continue _fun108921;
                case 428:
                    var18 = var18.cnRubV;
                    var17 = var19.bind(var20)(var18);
                case 439:
                    var13.label = var17;
                    var17 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.unarchiveThread;
                        var1 = _closure3_slot0;
                        var0 = false;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var13.onPress = var17;
                    var5 = var16.bind(var2)(var15, var13);
                case 460:
                    var4[1] = var5;
                    var5 = var10.threadMetadata;
                    var15 = var7 == var5;
                    var13 = undefined;
                    if (var15) {
                        _fun108921_ip = 485;
                        continue _fun108921
                    }
                case 479:
                    var13 = var5.archived;
                case 485:
                    var5 = null;
                    if (!(var14 !== var13)) {
                        _fun108921_ip = 660;
                        continue _fun108921
                    }
                case 494:
                    var5 = null;
                    if (!var12) {
                        _fun108921_ip = 660;
                        continue _fun108921
                    }
                case 502:
                    var14 = _closure1_slot51;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 80;
                    var12 = var18[var12];
                    var12 = var16.bind(var2)(var12);
                    var13 = var12.TableRow;
                    var12 = {};
                    var17 = _closure1_slot51;
                    var15 = 84;
                    var15 = var18[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.XLargeIcon;
                    var15 = {};
                    var15 = var17.bind(var2)(var16, var15);
                    var12.icon = var15;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 37;
                    var17 = var19[var15];
                    var17 = var16.bind(var2)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var19[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.t;
                    if (var11) {
                        _fun108921_ip = 628;
                        continue _fun108921
                    }
                case 615:
                    var15 = var16.wiIevd;
                    var15 = var17.bind(var18)(var15);
                    _fun108921_ip = 639;
                    continue _fun108921;
                case 628:
                    var16 = var16.BTs4Kb;
                    var15 = var17.bind(var18)(var16);
                case 639:
                    var12.label = var15;
                    var15 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.archiveThread;
                        var1 = _closure3_slot0;
                        var0 = false;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var12.onPress = var15;
                    var5 = var14.bind(var2)(var13, var12);
                case 660:
                    var4[2] = var5;
                    var5 = null;
                    if (!var6) {
                        _fun108921_ip = 848;
                        continue _fun108921
                    }
                case 672:
                    var12 = var10.isLockedThread;
                    var12 = var12.bind(var10)();
                    var5 = null;
                    if (!var12) {
                        _fun108921_ip = 848;
                        continue _fun108921
                    }
                case 690:
                    var14 = _closure1_slot51;
                    var16 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = 80;
                    var12 = var18[var12];
                    var12 = var16.bind(var2)(var12);
                    var13 = var12.TableRow;
                    var12 = {};
                    var17 = _closure1_slot51;
                    var15 = 85;
                    var15 = var18[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.LockIcon;
                    var15 = {};
                    var15 = var17.bind(var2)(var16, var15);
                    var12.icon = var15;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 37;
                    var17 = var19[var15];
                    var17 = var16.bind(var2)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var19[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.t;
                    if (var11) {
                        _fun108921_ip = 816;
                        continue _fun108921
                    }
                case 803:
                    var15 = var16["jeyb/W"];
                    var15 = var17.bind(var18)(var15);
                    _fun108921_ip = 827;
                    continue _fun108921;
                case 816:
                    var16 = var16["/OKSxp"];
                    var15 = var17.bind(var18)(var16);
                case 827:
                    var12.label = var15;
                    var15 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.unlockThread;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var12.onPress = var15;
                    var5 = var14.bind(var2)(var13, var12);
                case 848:
                    var4[3] = var5;
                    var5 = null;
                    if (!var6) {
                        _fun108921_ip = 1036;
                        continue _fun108921
                    }
                case 860:
                    var6 = var10.isLockedThread;
                    var6 = var6.bind(var10)();
                    var5 = null;
                    if (var6) {
                        _fun108921_ip = 1036;
                        continue _fun108921
                    }
                case 878:
                    var10 = _closure1_slot51;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var6 = 80;
                    var6 = var15[var6];
                    var6 = var13.bind(var2)(var6);
                    var7 = var6.TableRow;
                    var6 = {};
                    var14 = _closure1_slot51;
                    var12 = 85;
                    var12 = var15[var12];
                    var12 = var13.bind(var2)(var12);
                    var13 = var12.LockIcon;
                    var12 = {};
                    var12 = var14.bind(var2)(var13, var12);
                    var6.icon = var12;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 37;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var2)(var12);
                    var12 = var12.t;
                    if (var11) {
                        _fun108921_ip = 1004;
                        continue _fun108921
                    }
                case 991:
                    var11 = var12.HoCqm8;
                    var11 = var13.bind(var14)(var11);
                    _fun108921_ip = 1015;
                    continue _fun108921;
                case 1004:
                    var12 = var12["Ur/0Na"];
                    var11 = var13.bind(var14)(var12);
                case 1015:
                    var6.label = var11;
                    var11 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.lockThread;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6.onPress = var11;
                    var5 = var10.bind(var2)(var7, var6);
                case 1036:
                    var4[4] = var5;
                    var7 = _closure1_slot51;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 80;
                    var5 = var13[var5];
                    var5 = var12.bind(var2)(var5);
                    var6 = var5.TableRow;
                    var5 = {};
                    var11 = _closure1_slot51;
                    var9 = 74;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var10 = var9.LinkIcon;
                    var9 = {};
                    var9 = var11.bind(var2)(var10, var9);
                    var5.icon = var9;
                    var9 = 37;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.t;
                    var9 = var9.WqhZss;
                    var9 = var10.bind(var11)(var9);
                    var5.label = var9;
                    var8 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 86;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.copyGuildChannelOrThreadLink;
                        var0 = _closure3_slot0;
                        var1 = var0.guild_id;
                        var0 = var0.id;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var5.onPress = var8;
                    var5 = var7.bind(var2)(var6, var5);
                    var4[5] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'renderDeleteButton';
        var4.key = var6;
        var6 = function() {
            _fun108928: for (var _fun108928_ip = 0;;) switch (_fun108928_ip) {
                case 0:
                    var9 = this;
                    var3 = var9.props;
                    var2 = var3.channel;
                    var _closure3_slot0 = var2;
                    var1 = var3.canManageChannels;
                    var0 = var3.isThreadModerator;
                    var13 = var3.isForumPost;
                    var5 = var3.hasJoinedThread;
                    var3 = var2.isThread;
                    var3 = var3.bind(var2)();
                    if (!var3) {
                        _fun108928_ip = 59;
                        continue _fun108928
                    }
                case 56:
                    var1 = var0;
                case 59:
                    var0 = null;
                    if (!var1) {
                        _fun108928_ip = 642;
                        continue _fun108928
                    }
                case 67:
                    var3 = var2.type;
                    var1 = _closure1_slot31;
                    var1 = var1.GUILD_CATEGORY;
                    if (!(var3 !== var1)) {
                        _fun108928_ip = 239;
                        continue _fun108928
                    }
                case 92:
                    if (var13) {
                        _fun108928_ip = 180;
                        continue _fun108928
                    }
                case 95:
                    var1 = var2.isThread;
                    var4 = var1.bind(var2)();
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 37;
                    var2 = var10[var1];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var10[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    if (var4) {
                        _fun108928_ip = 167;
                        continue _fun108928
                    }
                case 154:
                    var4 = var1["8D8Rsb"];
                    var10 = var2.bind(var3)(var4);
                    _fun108928_ip = 178;
                    continue _fun108928;
                case 167:
                    var1 = var1.H7vTe2;
                    var10 = var2.bind(var3)(var1);
                case 178:
                    _fun108928_ip = 237;
                    continue _fun108928;
                case 180:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 37;
                    var2 = var8[var1];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.nEOg1N;
                    var10 = var2.bind(var3)(var1);
                case 237:
                    _fun108928_ip = 298;
                    continue _fun108928;
                case 239:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 37;
                    var2 = var8[var1];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.ifbXnL;
                    var10 = var2.bind(var3)(var1);
                case 298:
                    var4 = _closure1_slot52;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 55;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var6 = null;
                    if (!var5) {
                        _fun108928_ip = 516;
                        continue _fun108928
                    }
                case 340:
                    var8 = _closure1_slot51;
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var5 = 80;
                    var5 = var17[var5];
                    var5 = var15.bind(var3)(var5);
                    var7 = var5.TableRow;
                    var5 = {};
                    var14 = 'danger';
                    var5.variant = var14;
                    var16 = _closure1_slot51;
                    var14 = 87;
                    var14 = var17[var14];
                    var14 = var15.bind(var3)(var14);
                    var15 = var14.UserMinusIcon;
                    var14 = {};
                    var17 = 'text-feedback-critical';
                    var14.color = var17;
                    var14 = var16.bind(var3)(var15, var14);
                    var5.icon = var14;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 37;
                    var15 = var18[var14];
                    var15 = var17.bind(var3)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var18[var14];
                    var14 = var17.bind(var3)(var14);
                    var14 = var14.t;
                    if (var13) {
                        _fun108928_ip = 484;
                        continue _fun108928
                    }
                case 471:
                    var13 = var14["fa/84m"];
                    var13 = var15.bind(var16)(var13);
                    _fun108928_ip = 495;
                    continue _fun108928;
                case 484:
                    var14 = var14["2LsZdT"];
                    var13 = var15.bind(var16)(var14);
                case 495:
                    var5.label = var13;
                    var12 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 82;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.leaveThread;
                        var1 = _closure3_slot0;
                        var0 = 'Context Menu';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var5.onPress = var12;
                    var6 = var8.bind(var3)(var7, var5);
                case 516:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot51;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 80;
                    var6 = var14[var6];
                    var6 = var12.bind(var3)(var6);
                    var7 = var6.TableRow;
                    var6 = {};
                    var13 = 'danger';
                    var6.variant = var13;
                    var13 = _closure1_slot51;
                    var11 = 88;
                    var11 = var14[var11];
                    var11 = var12.bind(var3)(var11);
                    var12 = var11.TrashIcon;
                    var11 = {};
                    var14 = 'text-feedback-critical';
                    var11.color = var14;
                    var11 = var13.bind(var3)(var12, var11);
                    var6.icon = var11;
                    var6.label = var10;
                    var9 = var9.handleDeleteChannel;
                    var6.onPress = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 642:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'renderForumTags';
        var4.key = var6;
        var6 = function() {
            _fun108930: for (var _fun108930_ip = 0;;) switch (_fun108930_ip) {
                case 0:
                    var11 = this;
                    var _closure3_slot0 = var11;
                    var1 = _closure1_slot55;
                    var0 = var11.context;
                    var3 = undefined;
                    var24 = var1.bind(var3)(var0);
                    var0 = var11.props;
                    var14 = var0.channel;
                    var13 = var0.canManageChannels;
                    var _closure3_slot1 = var13;
                    var0 = var14.isForumLikeChannel;
                    var0 = var0.bind(var14)();
                    var7 = null;
                    if (var0) {
                        _fun108930_ip = 65;
                        continue _fun108930
                    }
                case 63:
                    return var7;
                case 65:
                    var2 = var14.availableTags;
                    var0 = var7 == var2;
                    var15 = undefined;
                    if (var0) {
                        _fun108930_ip = 98;
                        continue _fun108930
                    }
                case 80:
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var28
                        var0 = arg0;
                        var0 = var0.moderated;
                        return var0;
                    };
                    var15 = var1.bind(var2)(var0);
                case 98:
                    var1 = var11.getError;
                    var0 = 'available_tags';
                    var8 = var1.bind(var11)(var0);
                    var2 = _closure1_slot52;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var6 = _closure1_slot51;
                    var19 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var16 = 55;
                    var4 = var9[var16];
                    var4 = var19.bind(var3)(var4);
                    var5 = var4.FormTitle;
                    var4 = {};
                    var18 = 37;
                    var10 = var9[var18];
                    var10 = var19.bind(var3)(var10);
                    var17 = var10.intl;
                    var10 = var17.string;
                    var9 = var9[var18];
                    var9 = var19.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9["P/y+sj"];
                    var9 = var10.bind(var17)(var9);
                    var4.title = var9;
                    var9 = var24.tagsTitle;
                    var4.viewStyle = var9;
                    var7 = var7 != var8;
                    if (!var7) {
                        _fun108930_ip = 237;
                        continue _fun108930
                    }
                case 226:
                    var9 = var8.length;
                    var8 = 0;
                    var7 = var9 > var8;
                case 237:
                    var4.error = var7;
                    var7 = false;
                    var4.uppercaseTitle = var7;
                    var5 = var6.bind(var3)(var5, var4);
                    var4 = new Array(3);
                    var4[0] = var5;
                    var7 = _closure1_slot51;
                    var6 = _closure1_slot10;
                    var5 = {};
                    var8 = var24.tagsWrapper;
                    var5.style = var8;
                    var8 = var14.availableTags;
                    var9 = var8.length;
                    var8 = 0;
                    if (!(!(var9 > var8))) {
                        _fun108930_ip = 623;
                        continue _fun108930
                    }
                case 302:
                    var10 = _closure1_slot52;
                    var9 = _closure1_slot10;
                    var8 = {};
                    var20 = _closure1_slot51;
                    var30 = _closure1_slot0;
                    var25 = _closure1_slot2;
                    var17 = 44;
                    var17 = var25[var17];
                    var17 = var30.bind(var3)(var17);
                    var19 = var17.Text;
                    var17 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-default'
                    };
                    var21 = var24.tagsDescription;
                    var17.style = var21;
                    var21 = var25[var18];
                    var21 = var30.bind(var3)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var25[var18];
                    var21 = var30.bind(var3)(var21);
                    var21 = var21.t;
                    var21 = var21["3v8kZH"];
                    var21 = var22.bind(var23)(var21);
                    var17.children = var21;
                    var19 = var20.bind(var3)(var19, var17);
                    var17 = new Array(2);
                    var17[0] = var19;
                    var21 = _closure1_slot51;
                    var23 = _closure1_slot1;
                    var22 = 92;
                    var19 = var25[var22];
                    var20 = var23.bind(var3)(var19);
                    var19 = {};
                    var26 = !var13;
                    var19.disabled = var26;
                    var26 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePressTag;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var19.onPress = var26;
                    var26 = var24.createTagButton;
                    var19.style = var26;
                    var26 = var24.createTagButtonText;
                    var19.textStyle = var26;
                    var26 = var25[var18];
                    var26 = var30.bind(var3)(var26);
                    var29 = var26.intl;
                    var27 = var29.string;
                    var26 = var25[var18];
                    var26 = var30.bind(var3)(var26);
                    var26 = var26.t;
                    var26 = var26.F4is7L;
                    var26 = var27.bind(var29)(var26);
                    var19.text = var26;
                    var26 = var25[var22];
                    var26 = var23.bind(var3)(var26);
                    var26 = var26.Looks;
                    var26 = var26.LINK;
                    var19.look = var26;
                    var22 = var25[var22];
                    var22 = var23.bind(var3)(var22);
                    var22 = var22.Sizes;
                    var22 = var22.XSMALL;
                    var19.size = var22;
                    var22 = true;
                    var19.shrink = var22;
                    var19 = var21.bind(var3)(var20, var19);
                    var17[1] = var19;
                    var8.children = var17;
                    var8 = var10.bind(var3)(var9, var8);
                    _fun108930_ip = 913;
                    continue _fun108930;
                case 623:
                    var17 = _closure1_slot52;
                    var10 = _closure1_slot53;
                    var9 = {};
                    var21 = var14.availableTags;
                    var20 = var21.map;
                    var19 = function(arg0) { // Environment: var28
                        var0 = arg0;
                        var4 = _closure1_slot51;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 89;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1.tag = var0;
                        var6 = _closure3_slot0;
                        var6 = var6.handlePressTag;
                        var1.onPress = var6;
                        var5 = _closure3_slot1;
                        var5 = !var5;
                        var1.disabled = var5;
                        var0 = var0.id;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var20 = var20.bind(var21)(var19);
                    var19 = new Array(2);
                    var19[0] = var20;
                    var20 = var13;
                    if (!var20) {
                        _fun108930_ip = 689;
                        continue _fun108930
                    }
                case 670:
                    var21 = var14.availableTags;
                    var22 = var21.length;
                    var21 = _closure1_slot48;
                    var20 = var22 < var21;
                case 689:
                    if (!var20) {
                        _fun108930_ip = 899;
                        continue _fun108930
                    }
                case 695:
                    var23 = _closure1_slot51;
                    var22 = _closure1_slot10;
                    var21 = {};
                    var24 = var24.addTagIconButtonWrapper;
                    var21.style = var24;
                    var26 = _closure1_slot51;
                    var30 = _closure1_slot0;
                    var27 = _closure1_slot2;
                    var24 = 90;
                    var24 = var27[var24];
                    var24 = var30.bind(var3)(var24);
                    var25 = var24.IconButton;
                    var24 = {};
                    var33 = _closure1_slot51;
                    var29 = 91;
                    var29 = var27[var29];
                    var29 = var30.bind(var3)(var29);
                    var32 = var29.PlusSmallIcon;
                    var31 = {};
                    var29 = 'sm';
                    var31.size = var29;
                    var35 = _closure1_slot1;
                    var34 = 29;
                    var34 = var27[var34];
                    var34 = var35.bind(var3)(var34);
                    var34 = var34.colors;
                    var34 = var34.WHITE;
                    var31.color = var34;
                    var31 = var33.bind(var3)(var32, var31);
                    var24.icon = var31;
                    var24.size = var29;
                    var28 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePressTag;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var24.onPress = var28;
                    var28 = var27[var18];
                    var28 = var30.bind(var3)(var28);
                    var29 = var28.intl;
                    var28 = var29.string;
                    var27 = var27[var18];
                    var27 = var30.bind(var3)(var27);
                    var27 = var27.t;
                    var27 = var27["/jubeD"];
                    var27 = var28.bind(var29)(var27);
                    var24.accessibilityLabel = var27;
                    var24 = var26.bind(var3)(var25, var24);
                    var21.children = var24;
                    var20 = var23.bind(var3)(var22, var21);
                case 899:
                    var19[1] = var20;
                    var9.children = var19;
                    var8 = var17.bind(var3)(var10, var9);
                case 913:
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[1] = var5;
                    var7 = _closure1_slot51;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = var8[var16];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.FormSection;
                    var5 = {};
                    var10 = _closure1_slot51;
                    var8 = var8[var16];
                    var8 = var9.bind(var3)(var8);
                    var9 = var8.FormSwitchRow;
                    var8 = {};
                    var13 = !var13;
                    if (var13) {
                        _fun108930_ip = 986;
                        continue _fun108930
                    }
                case 983:
                    var13 = var15;
                case 986:
                    var8.disabled = var13;
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var15 = var13[var18];
                    var15 = var17.bind(var3)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var13[var18];
                    var13 = var17.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.yX24uI;
                    var13 = var15.bind(var16)(var13);
                    var8.label = var13;
                    var13 = var14.hasFlag;
                    var12 = _closure1_slot45;
                    var12 = var12.REQUIRE_TAG;
                    var12 = var13.bind(var14)(var12);
                    var8.value = var12;
                    var11 = var11.handleToggleRequireTag;
                    var8.onValueChange = var11;
                    var8 = var10.bind(var3)(var9, var8);
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'renderShowMediaDownloadOptions';
        var4.key = var6;
        var6 = function() {
            _fun108935: for (var _fun108935_ip = 0;;) switch (_fun108935_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var11 = var0.channel;
                    var10 = var0.canManageChannels;
                    var0 = var11.isMediaChannel;
                    var1 = var0.bind(var11)();
                    var0 = null;
                    if (!var1) {
                        _fun108935_ip = 261;
                        continue _fun108935
                    }
                case 37:
                    var4 = _closure1_slot51;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 55;
                    var1 = var15[var5];
                    var3 = undefined;
                    var1 = var14.bind(var3)(var1);
                    var2 = var1.FormSection;
                    var1 = {};
                    var7 = _closure1_slot51;
                    var5 = var15[var5];
                    var5 = var14.bind(var3)(var5);
                    var6 = var5.FormSwitchRow;
                    var5 = {};
                    var10 = !var10;
                    var5.disabled = var10;
                    var10 = 37;
                    var12 = var15[var10];
                    var12 = var14.bind(var3)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var10];
                    var12 = var14.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.u8LZOt;
                    var12 = var13.bind(var16)(var12);
                    var5.label = var12;
                    var12 = var15[var10];
                    var12 = var14.bind(var3)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var10 = var15[var10];
                    var10 = var14.bind(var3)(var10);
                    var10 = var10.t;
                    var10 = var10.J4wCc7;
                    var10 = var12.bind(var13)(var10);
                    var5.subLabel = var10;
                    var10 = var11.hasFlag;
                    var9 = _closure1_slot45;
                    var9 = var9.HIDE_MEDIA_DOWNLOAD_OPTIONS;
                    var9 = var10.bind(var11)(var9);
                    var9 = !var9;
                    var5.value = var9;
                    var8 = var8.handleToggleShowMediaDownloadOptions;
                    var5.onValueChange = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 261:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'renderCategory';
        var4.key = var6;
        var6 = function() {
            _fun108936: for (var _fun108936_ip = 0;;) switch (_fun108936_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0.props;
                    var1 = var2.hasCategories;
                    var4 = var2.category;
                    var0 = var2.channel;
                    var9 = var2.canManageParent;
                    if (!var1) {
                        _fun108936_ip = 400;
                        continue _fun108936
                    }
                case 43:
                    var1 = var0.type;
                    var0 = _closure1_slot31;
                    var0 = var0.GUILD_CATEGORY;
                    if (!(var1 !== var0)) {
                        _fun108936_ip = 400;
                        continue _fun108936
                    }
                case 68:
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun108936_ip = 119;
                        continue _fun108936
                    }
                case 74:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 47;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.computeChannelName;
                    var1 = _closure1_slot25;
                    var0 = _closure1_slot24;
                    var12 = var2.bind(var3)(var4, var1, var0);
                    _fun108936_ip = 176;
                    continue _fun108936;
                case 119:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 37;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.GSfOoo;
                    var12 = var1.bind(var2)(var0);
                case 176:
                    var3 = _closure1_slot51;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var0 = 55;
                    var0 = var13[var0];
                    var2 = undefined;
                    var0 = var10.bind(var2)(var0);
                    var1 = var0.FormSection;
                    var0 = {};
                    var6 = _closure1_slot51;
                    var7 = 80;
                    var4 = var13[var7];
                    var4 = var10.bind(var2)(var4);
                    var5 = var4.TableRow;
                    var4 = {};
                    var16 = _closure1_slot51;
                    var14 = 93;
                    var14 = var13[var14];
                    var14 = var10.bind(var2)(var14);
                    var15 = var14.FolderPlusIcon;
                    var14 = {};
                    var14 = var16.bind(var2)(var15, var14);
                    var4.icon = var14;
                    var14 = 37;
                    var15 = var13[var14];
                    var15 = var10.bind(var2)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var13[var14];
                    var14 = var10.bind(var2)(var14);
                    var14 = var14.t;
                    var14 = var14.vHCZwr;
                    var14 = var15.bind(var16)(var14);
                    var4.label = var14;
                    var11 = _closure1_slot51;
                    var7 = var13[var7];
                    var7 = var10.bind(var2)(var7);
                    var7 = var7.TableRow;
                    var10 = var7.TrailingText;
                    var7 = {};
                    var7.text = var12;
                    var7 = var11.bind(var2)(var10, var7);
                    var4.trailing = var7;
                    var4.arrow = var9;
                    var7 = undefined;
                    if (!var9) {
                        _fun108936_ip = 378;
                        continue _fun108936
                    }
                case 371:
                    var7 = function() { // Environment: var8
                        var2 = _closure3_slot0;
                        var1 = var2.pushScreen;
                        var0 = _closure1_slot30;
                        var0 = var0.CHANGE_CATEGORY;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                case 378:
                    var4.onPress = var7;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                case 400:
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'renderThreadSettings';
        var4.key = var6;
        var6 = function() {
            var6 = this;
            var3 = _closure1_slot52;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 55;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Form;
            var0 = {};
            var4 = var6.renderChannelInfo;
            var5 = var4.bind(var6)();
            var4 = new Array(7);
            var4[0] = var5;
            var5 = var6.renderCommonSettingsSection;
            var5 = var5.bind(var6)();
            var4[1] = var5;
            var5 = var6.renderThreadManagementActions;
            var5 = var5.bind(var6)();
            var4[2] = var5;
            var5 = var6.renderSlowmode;
            var5 = var5.bind(var6)();
            var4[3] = var5;
            var5 = var6.renderAutoArchiveDuration;
            var5 = var5.bind(var6)();
            var4[4] = var5;
            var5 = var6.renderInvitable;
            var5 = var5.bind(var6)();
            var4[5] = var5;
            var5 = var6.renderDeleteButton;
            var5 = var5.bind(var6)();
            var4[6] = var5;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'renderChannelSettings';
        var4.key = var6;
        var6 = function() {
            var6 = this;
            var3 = _closure1_slot52;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 55;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Form;
            var0 = {};
            var4 = var6.renderChannelInfo;
            var5 = var4.bind(var6)();
            var4 = new Array(19);
            var4[0] = var5;
            var5 = var6.renderForumTags;
            var5 = var5.bind(var6)();
            var4[1] = var5;
            var5 = var6.renderCategory;
            var5 = var5.bind(var6)();
            var4[2] = var5;
            var5 = var6.renderPermissions;
            var5 = var5.bind(var6)();
            var4[3] = var5;
            var5 = var6.renderCommonSettingsSection;
            var5 = var5.bind(var6)();
            var4[4] = var5;
            var5 = var6.renderDefaultForumLayout;
            var5 = var5.bind(var6)();
            var4[5] = var5;
            var5 = var6.renderDefaultSortOrder;
            var5 = var5.bind(var6)();
            var4[6] = var5;
            var5 = var6.renderDefaultTagSetting;
            var5 = var5.bind(var6)();
            var4[7] = var5;
            var5 = var6.renderAnnouncement;
            var5 = var5.bind(var6)();
            var4[8] = var5;
            var5 = var6.renderNsfwConfig;
            var5 = var5.bind(var6)();
            var4[9] = var5;
            var5 = var6.renderSlowmode;
            var5 = var5.bind(var6)();
            var4[10] = var5;
            var5 = var6.renderDefaultAutoArchiveDuration;
            var5 = var5.bind(var6)();
            var4[11] = var5;
            var5 = var6.renderBitrateSettings;
            var5 = var5.bind(var6)();
            var4[12] = var5;
            var5 = var6.renderVideoQualityModeSettings;
            var5 = var5.bind(var6)();
            var4[13] = var5;
            var5 = var6.renderUserLimitSettings;
            var5 = var5.bind(var6)();
            var4[14] = var5;
            var5 = var6.renderRegionOverride;
            var5 = var5.bind(var6)();
            var4[15] = var5;
            var5 = var6.renderUncommonSettingsSection;
            var5 = var5.bind(var6)();
            var4[16] = var5;
            var5 = var6.renderShowMediaDownloadOptions;
            var5 = var5.bind(var6)();
            var4[17] = var5;
            var5 = var6.renderDeleteButton;
            var5 = var5.bind(var6)();
            var4[18] = var5;
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun108940: for (var _fun108940_ip = 0;;) switch (_fun108940_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot55;
                    var1 = var2.context;
                    var3 = undefined;
                    var5 = var4.bind(var3)(var1);
                    var1 = var2.props;
                    var1 = var1.isThread;
                    if (var1) {
                        _fun108940_ip = 50;
                        continue _fun108940
                    }
                case 36:
                    var1 = var2.renderChannelSettings;
                    var4 = var1.bind(var2)();
                    _fun108940_ip = 62;
                    continue _fun108940;
                case 50:
                    var1 = var2.renderThreadSettings;
                    var4 = var1.bind(var2)();
                case 62:
                    var2 = _closure1_slot51;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var5 = var5.screenContainer;
                    var0.style = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[29] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var4.bind(var0)(var7);
    var _closure1_slot56 = var7;
    var4 = 94;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ThemeContext;
    var7.contextType = var4;
    var4 = 97;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun108941: for (var _fun108941_ip = 0;;) switch (_fun108941_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var6 = var1.autoFocusElement;
                var _closure2_slot1 = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 95;
                var1 = var8[var1];
                var4 = undefined;
                var2 = var7.bind(var4)(var1);
                var1 = var2.useNavigation;
                var17 = var1.bind(var2)();
                var _closure2_slot2 = var17;
                var3 = 30;
                var1 = var8[var3];
                var11 = var7.bind(var4)(var1);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot18;
                var9 = new Array(1);
                var9[0] = var2;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot18;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var10.bind(var11)(var9, var1);
                var _closure2_slot3 = var11;
                var1 = var8[var3];
                var13 = var7.bind(var4)(var1);
                var12 = var13.useStateFromStores;
                var9 = _closure1_slot17;
                var10 = new Array(1);
                var10[0] = var9;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot17;
                    var0 = var1.getChannel;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var18 = var12.bind(var13)(var10, var1);
                var1 = 70;
                var10 = var8[var1];
                var12 = var7.bind(var4)(var10);
                var10 = var12.useIsThreadModerator;
                var16 = var10.bind(var12)(var11);
                var10 = var8[var3];
                var14 = var7.bind(var4)(var10);
                var13 = var14.useStateFromStoresObject;
                var10 = _closure1_slot11;
                var12 = new Array(1);
                var12[0] = var10;
                var10 = function() { // Environment: var0
                    _fun108944: for (var _fun108944_ip = 0;;) switch (_fun108944_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var4 = null;
                            var5 = var4 != var1;
                            var3 = undefined;
                            if (!var5) {
                                _fun108944_ip = 47;
                                continue _fun108944
                            }
                        case 20:
                            var7 = _closure1_slot11;
                            var6 = var7.isMuted;
                            var5 = _closure2_slot3;
                            var5 = var5.id;
                            var3 = var6.bind(var7)(var5);
                        case 47:
                            var0.isMutedThread = var3;
                            var3 = _closure2_slot3;
                            var3 = var4 != var3;
                            var1 = undefined;
                            if (!var3) {
                                _fun108944_ip = 92;
                                continue _fun108944
                            }
                        case 65:
                            var4 = _closure1_slot11;
                            var3 = var4.hasJoined;
                            var2 = _closure2_slot3;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 92:
                            var0.hasJoinedThread = var1;
                            return var0;
                    }
                };
                var10 = var13.bind(var14)(var12, var10);
                var13 = var10.isMutedThread;
                var12 = var10.hasJoinedThread;
                var1 = var8[var1];
                var10 = var7.bind(var4)(var1);
                var1 = var10.useCanManageThread;
                var15 = var1.bind(var10)(var11);
                var1 = 58;
                var1 = var8[var1];
                var10 = var7.bind(var4)(var1);
                var1 = var10.useIsChannelContentGated;
                var1 = var1.bind(var10)(var11);
                var _closure2_slot4 = var1;
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.useStateFromStoresObject;
                var3 = new Array(7);
                var3[0] = var9;
                var9 = _closure1_slot20;
                var3[1] = var9;
                var3[2] = var2;
                var2 = _closure1_slot25;
                var3[3] = var2;
                var2 = _closure1_slot23;
                var3[4] = var2;
                var2 = _closure1_slot19;
                var3[5] = var2;
                var2 = _closure1_slot21;
                var3[6] = var2;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun108945: for (var _fun108945_ip = 0;;) switch (_fun108945_ip) {
                        case 0:
                            var1 = _closure1_slot17;
                            var0 = var1.getProps;
                            var0 = var0.bind(var1)();
                            var2 = var0.submitting;
                            var1 = var0.errors;
                            var0 = _closure2_slot3;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun108945_ip = 525;
                                continue _fun108945
                            }
                        case 45:
                            var7 = _closure1_slot20;
                            var6 = var7.getGuild;
                            var13 = _closure2_slot3;
                            var0 = var13.getGuildId;
                            var0 = var0.bind(var13)();
                            var7 = var6.bind(var7)(var0);
                            var8 = _closure1_slot18;
                            var6 = var8.getChannel;
                            var0 = var13.parent_id;
                            var12 = var6.bind(var8)(var0);
                            var6 = _closure1_slot25;
                            var0 = var6.getCurrentUser;
                            var9 = var0.bind(var6)();
                            var8 = _closure1_slot15;
                            var6 = var8.has;
                            var0 = var13.type;
                            var6 = var6.bind(var8)(var0);
                            var10 = _closure1_slot23;
                            var8 = var10.getRegions;
                            var0 = var13.getGuildId;
                            var0 = var0.bind(var13)();
                            var8 = var8.bind(var10)(var0);
                            var0 = {};
                            var0.isThread = var6;
                            var0.guild = var7;
                            var0.category = var12;
                            var11 = _closure1_slot19;
                            var10 = var11.hasCategories;
                            var6 = var13.guild_id;
                            var6 = var10.bind(var11)(var6);
                            var0.hasCategories = var6;
                            var6 = _closure2_slot4;
                            var0.pinDisabled = var6;
                            var11 = _closure1_slot21;
                            var10 = var11.can;
                            var6 = _closure1_slot39;
                            var6 = var6.MANAGE_CHANNELS;
                            var6 = var10.bind(var11)(var6, var13);
                            var0.canManageChannels = var6;
                            var6 = var5 != var9;
                            if (!var6) {
                                _fun108945_ip = 257;
                                continue _fun108945
                            }
                        case 238:
                            var10 = _closure2_slot3;
                            var10 = var10.ownerId;
                            var9 = var9.id;
                            var6 = var10 === var9;
                        case 257:
                            var0.isChannelOwner = var6;
                            if (!(var5 == var12)) {
                                _fun108945_ip = 294;
                                continue _fun108945
                            }
                        case 266:
                            var10 = _closure1_slot21;
                            var9 = var10.can;
                            var6 = _closure1_slot39;
                            var6 = var6.MANAGE_CHANNELS;
                            var6 = var9.bind(var10)(var6, var7);
                            _fun108945_ip = 320;
                            continue _fun108945;
                        case 294:
                            var11 = _closure1_slot21;
                            var10 = var11.can;
                            var9 = _closure1_slot39;
                            var9 = var9.MANAGE_CHANNELS;
                            var6 = var10.bind(var11)(var9, var12);
                        case 320:
                            var0.canManageParent = var6;
                            var11 = _closure1_slot21;
                            var12 = var11.can;
                            var9 = _closure1_slot39;
                            var10 = var9.MANAGE_ROLES;
                            var6 = _closure2_slot3;
                            var10 = var12.bind(var11)(var10, var6);
                            var0.canManageRoles = var10;
                            var10 = var11.can;
                            var9 = var9.SEND_MESSAGES;
                            var9 = var10.bind(var11)(var9, var6);
                            var0.canSendMessages = var9;
                            var10 = _closure1_slot13;
                            var9 = var6.type;
                            var6 = undefined;
                            var9 = var10.bind(var6)(var9);
                            if (!var9) {
                                _fun108945_ip = 432;
                                continue _fun108945
                            }
                        case 402:
                            var13 = _closure1_slot21;
                            var12 = var13.can;
                            var10 = _closure1_slot39;
                            var11 = var10.MANAGE_WEBHOOKS;
                            var10 = _closure2_slot3;
                            var9 = var12.bind(var13)(var11, var10);
                        case 432:
                            var0.canManageWebhooks = var9;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 70;
                            var9 = var11[var9];
                            var11 = var10.bind(var6)(var9);
                            var10 = var11.canUnarchiveThread;
                            var9 = _closure2_slot3;
                            var9 = var10.bind(var11)(var9);
                            var0.canUnarchiveThread = var9;
                            var0.regions = var8;
                            var0.submitting = var2;
                            var0.errors = var1;
                            var3 = _closure1_slot16;
                            var3 = var3.bind(var6)(var7);
                            if (var3) {
                                _fun108945_ip = 518;
                                continue _fun108945
                            }
                        case 504:
                            var4 = _closure2_slot3;
                            var4 = var4.linkedLobby;
                            var3 = var5 != var4;
                        case 518:
                            var0.isNSFWDisabled = var3;
                            return var0;
                        case 525:
                            var0 = {};
                            var3 = false;
                            var0.isThread = var3;
                            var0.submitting = var2;
                            var0.errors = var1;
                            return var0;
                    }
                };
                var10 = var7.bind(var8)(var3, var1, var2);
                var3 = _closure1_slot9;
                var1 = var3.useRef;
                var8 = null;
                var9 = var1.bind(var3)(var8);
                var _closure2_slot5 = var9;
                var2 = var3.useEffect;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var17;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = var3.addListener;
                    var1 = 'transitionEnd';
                    var0 = function(arg0) { // Environment: var0
                        _fun108947: for (var _fun108947_ip = 0;;) switch (_fun108947_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.data;
                                var0 = var0.closing;
                                if (var0) {
                                    _fun108947_ip = 73;
                                    continue _fun108947
                                }
                            case 17:
                                var2 = _closure2_slot1;
                                var1 = _closure1_slot26;
                                var1 = var1.CHANNEL_NAME;
                                if (!(var2 === var1)) {
                                    _fun108947_ip = 73;
                                    continue _fun108947
                                }
                            case 41:
                                var0 = _closure2_slot5;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun108947_ip = 71;
                                    continue _fun108947
                                }
                            case 61:
                                var1 = var2.focus;
                                var0 = var1.bind(var2)();
                            case 71:
                                return var0;
                            case 73:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                var1 = var8 != var18;
                var0 = null;
                if (!var1) {
                    _fun108941_ip = 601;
                    continue _fun108941
                }
            case 425:
                var3 = _closure1_slot51;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 96;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot51;
                var6 = _closure1_slot56;
                var5 = {};
                var21 = var5;
                var20 = var10;
                var14 = copyDataProperties(var21, var20);
                var14 = 'channel';
                var5[var14] = var18;
                var14 = 'navigation';
                var5[var14] = var17;
                var14 = 'isThreadModerator';
                var5[var14] = var16;
                var14 = 'canManageThread';
                var5[var14] = var15;
                var14 = var10.canUnarchiveThread;
                var10 = 'canUnarchiveThread';
                var5[var10] = var14;
                var10 = 'isMutedThread';
                var5[var10] = var13;
                var10 = 'hasJoinedThread';
                var5[var10] = var12;
                var8 = var8 == var11;
                var10 = undefined;
                if (var8) {
                    _fun108941_ip = 565;
                    continue _fun108941
                }
            case 555:
                var8 = var11.isForumPost;
                var10 = var8.bind(var11)();
            case 565:
                var8 = 'isForumPost';
                var5[var8] = var10;
                var8 = 'channelNameRef';
                var5[var8] = var9;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 601:
                return var0;
        }
    };
    var2.default = var3;
    var2.PinImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 31, 27, 3093, 1376, 1416, 6486, 1372, 1671, 1410, 3091, 3947, 14049, 3100, 1621, 14050, 660, 1379, 6498, 1233, 4876, 483, 33, 1297, 671, 566, 9795, 22, 4302, 6485, 3148, 7969, 1234, 7627, 4236, 3104, 1384, 8157, 3936, 3941, 5336, 8174, 4794, 3937, 3920, 3350, 14051, 4705, 8922, 14052, 5382, 5411, 478, 4551, 14053, 3132, 3045, 1684, 14054, 7628, 5426, 5425, 1381, 1383, 11472, 6717, 8161, 8192, 8995, 3254, 1382, 14055, 7614, 9157, 10604, 4900, 8668, 6487, 3274, 3264, 4860, 9180, 3252, 3269, 9643, 7530, 7847, 4875, 14056, 3159, 1469, 4899, 2]);