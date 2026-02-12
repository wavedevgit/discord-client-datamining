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
        _fun109558: for (var _fun109558_ip = 0;;) switch (_fun109558_ip) {
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
                _fun109558_ip = 76;
                continue _fun109558;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot72 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot72 = var0;
    var1 = function arg0() {
        _fun109561: for (var _fun109561_ip = 0;;) switch (_fun109561_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var6 = var1.style;
                var1 = _closure1_slot53;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 31;
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
                    _fun109561_ip = 143;
                    continue _fun109561
                }
            case 87:
                var2 = _closure1_slot50;
                var1 = _closure1_slot10;
                var0 = {};
                var7 = var10.outer;
                var0.style = var7;
                var9 = _closure1_slot50;
                var8 = _closure1_slot10;
                var7 = {};
                var10 = var10.badge;
                var7.style = var10;
                var7 = var9.bind(var3)(var8, var7);
                var0.children = var7;
                var5 = var2.bind(var3)(var1, var0);
            case 143:
                var2 = _closure1_slot51;
                var1 = _closure1_slot10;
                var0 = {};
                var0.style = var6;
                var6 = _closure1_slot54;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot73 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
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
    var4 = 4;
    var4 = var6[var4];
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
    var8 = var7.VideoQualityMode;
    var _closure1_slot42 = var8;
    var7 = var7.PIN_AND_BYPASS_SLOWMODE_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot43 = var7;
    var7 = 22;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.TABLE_ROW_PADDING;
    var _closure1_slot44 = var7;
    var7 = 23;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.ChannelFlags;
    var _closure1_slot45 = var8;
    var8 = var7.MAX_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot46 = var8;
    var7 = var7.MAX_FORUM_CHANNEL_TOPIC_LENGTH;
    var _closure1_slot47 = var7;
    var7 = 24;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.MAX_FORUM_TAGS;
    var _closure1_slot48 = var7;
    var7 = 25;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.DEFAULT_AUTO_ARCHIVE_DURATION;
    var _closure1_slot49 = var7;
    var7 = 26;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var15 = var7.Fonts;
    var7 = 27;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var9 = var7.jsx;
    var _closure1_slot50 = var9;
    var8 = var7.jsxs;
    var _closure1_slot51 = var8;
    var7 = var7.Fragment;
    var _closure1_slot52 = var7;
    var7 = 28;
    var8 = var6[var7];
    var11 = var5.bind(var0)(var8);
    var10 = var11.createStyles;
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
    var16 = var6[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var20.borderRadius = var16;
    var16 = 'center';
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
    var8 = var10.bind(var11)(var8);
    var _closure1_slot53 = var8;
    var8 = 30;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.PinIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot54 = var8;
    var7 = var6[var7];
    var10 = var5.bind(var0)(var7);
    var8 = var10.createLegacyClassComponentStyles;
    var7 = {};
    var11 = {};
    var11.flex = var19;
    var19 = var6[var12];
    var19 = var13.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var19;
    var19 = var6[var12];
    var19 = var13.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var11.paddingTop = var19;
    var7.screenContainer = var11;
    var11 = {};
    var11.marginHorizontal = var18;
    var7.slider = var11;
    var11 = {};
    var18 = var6[var12];
    var18 = var13.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.CARD_BACKGROUND_DEFAULT;
    var11.backgroundColor = var18;
    var7.sliderWrapper = var11;
    var11 = {};
    var11.marginTop = var17;
    var7.alertText = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var7.tagsWrapper = var11;
    var11 = {};
    var11.justifyContent = var16;
    var16 = var6[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11.margin = var16;
    var7.addTagIconButtonWrapper = var11;
    var11 = {
        'backgroundColor': 'transparent',
        'paddingHorizontal': 0
    };
    var16 = var6[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var11.marginTop = var16;
    var7.createTagButton = var11;
    var11 = {};
    var15 = var15.PRIMARY_SEMIBOLD;
    var11.fontFamily = var15;
    var11.fontSize = var14;
    var7.createTagButtonText = var11;
    var11 = {};
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var14;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var11.borderColor = var12;
    var7.deleteButton = var11;
    var7 = var8.bind(var10)(var7);
    var _closure1_slot55 = var7;
    var7 = 32;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.ShieldUserIcon;
    var7 = {};
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot56 = var7;
    var7 = 33;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.BellIcon;
    var7 = {};
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot57 = var7;
    var7 = 34;
    var8 = var6[var7];
    var8 = var5.bind(var0)(var8);
    var10 = var8.LinkIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot58 = var8;
    var8 = 35;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.GridSquareIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot59 = var8;
    var8 = 36;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.ListViewIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot60 = var8;
    var8 = 37;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.PuzzlePieceIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot61 = var8;
    var8 = 38;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.GroupPlusIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot62 = var8;
    var8 = 39;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.ClockIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot63 = var8;
    var8 = 40;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.XLargeIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot64 = var8;
    var8 = 41;
    var10 = var6[var8];
    var10 = var5.bind(var0)(var10);
    var11 = var10.LockIcon;
    var10 = {};
    var10 = var9.bind(var0)(var11, var10);
    var _closure1_slot65 = var10;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var10 = var8.LockIcon;
    var8 = {};
    var8 = var9.bind(var0)(var10, var8);
    var _closure1_slot66 = var8;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.LinkIcon;
    var7 = {};
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot67 = var7;
    var7 = 42;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.UserMinusIcon;
    var7 = {};
    var10 = 'text-feedback-critical';
    var7.color = var10;
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot68 = var7;
    var7 = 43;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.TrashIcon;
    var7 = {};
    var7.color = var10;
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot69 = var7;
    var7 = 44;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.FolderPlusIcon;
    var7 = {};
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot70 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun109564: for (var _fun109564_ip = 0;;) switch (_fun109564_ip) {
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
                    var0 = _closure1_slot72;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun109564_ip = 75;
                        continue _fun109564
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var10);
                    _fun109564_ip = 109;
                    continue _fun109564;
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
                    var3 = 45;
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
                    var3 = function(arg0) { // Environment: var2
                        _fun109566: for (var _fun109566_ip = 0;;) switch (_fun109566_ip) {
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
                                    _fun109566_ip = 160;
                                    continue _fun109566
                                }
                            case 81:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 46;
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
                        _fun109567: for (var _fun109567_ip = 0;;) switch (_fun109567_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var2 = var2.hasChanges;
                                if (!var2) {
                                    _fun109567_ip = 385;
                                    continue _fun109567
                                }
                            case 26:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var6 = var2.channel;
                                var _closure4_slot0 = var6;
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 47;
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
                                    _fun109567_ip = 209;
                                    continue _fun109567
                                }
                            case 203:
                                var8 = var10.autoArchiveDuration;
                            case 209:
                                var2.autoArchiveDuration = var8;
                                var10 = var6.threadMetadata;
                                var11 = var9 == var10;
                                var8 = undefined;
                                if (var11) {
                                    _fun109567_ip = 235;
                                    continue _fun109567
                                }
                            case 229:
                                var8 = var10.locked;
                            case 235:
                                var2.locked = var8;
                                var8 = var6.threadMetadata;
                                var9 = var9 == var8;
                                var7 = undefined;
                                if (var9) {
                                    _fun109567_ip = 261;
                                    continue _fun109567
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
                                    _fun109568: for (var _fun109568_ip = 0;;) switch (_fun109568_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var1 = var0.status;
                                            var0 = 200;
                                            if (!(var0 === var1)) {
                                                _fun109568_ip = 206;
                                                continue _fun109568
                                            }
                                        case 18:
                                            var5 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var0 = 48;
                                            var0 = var6[var0];
                                            var8 = undefined;
                                            var2 = var5.bind(var8)(var0);
                                            var1 = var2.open;
                                            var0 = {};
                                            var3 = 'THREAD_SETTINGS_UPDATED';
                                            var0.key = var3;
                                            var3 = 49;
                                            var3 = var6[var3];
                                            var3 = var5.bind(var8)(var3);
                                            var0.icon = var3;
                                            var5 = _closure4_slot0;
                                            var3 = var5.isThread;
                                            var3 = var3.bind(var5)();
                                            var7 = _closure1_slot0;
                                            var9 = _closure1_slot2;
                                            var4 = 50;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var6 = var5.intl;
                                            var5 = var6.string;
                                            var4 = var9[var4];
                                            var4 = var7.bind(var8)(var4);
                                            var4 = var4.t;
                                            if (var3) {
                                                _fun109568_ip = 156;
                                                continue _fun109568
                                            }
                                        case 141:
                                            var3 = var4["FE/ohq"];
                                            var3 = var5.bind(var6)(var3);
                                            _fun109568_ip = 169;
                                            continue _fun109568;
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
                        _fun109569: for (var _fun109569_ip = 0;;) switch (_fun109569_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.channel;
                                var0 = var2.isThread;
                                var3 = var0.bind(var2)();
                                if (var3) {
                                    _fun109569_ip = 102;
                                    continue _fun109569
                                }
                            case 36:
                                var3 = _closure1_slot32;
                                var4 = var3.LIMITED_CHANNEL_NAME;
                                var3 = var4.has;
                                var2 = var2.type;
                                var2 = var3.bind(var4)(var2);
                                var5 = var6;
                                if (!var2) {
                                    _fun109569_ip = 132;
                                    continue _fun109569
                                }
                            case 67:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 52;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.sanitizeGuildTextChannelName;
                                var5 = var2.bind(var3)(var6);
                                _fun109569_ip = 132;
                                continue _fun109569;
                            case 102:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 51;
                                var2 = var4[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = false;
                                var5 = var3.bind(var4)(var6, var2);
                            case 132:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 47;
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
                        _fun109570: for (var _fun109570_ip = 0;;) switch (_fun109570_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.channel;
                                var1 = var2.isThread;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun109570_ip = 136;
                                    continue _fun109570
                                }
                            case 30:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 51;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var2.name;
                                var3 = true;
                                var5 = var6.bind(var4)(var5, var3);
                                var2 = var2.name;
                                if (!(var5 !== var2)) {
                                    _fun109570_ip = 136;
                                    continue _fun109570
                                }
                            case 77:
                                var2 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var1 = 47;
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
                        var0 = 47;
                        var1 = var6[var0];
                        var0 = undefined;
                        var3 = var5.bind(var0)(var1);
                        var2 = var3.updateChannel;
                        var1 = {};
                        var4 = 53;
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
                        var0 = 47;
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
                        var0 = 47;
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
                        var0 = 47;
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
                        _fun109575: for (var _fun109575_ip = 0;;) switch (_fun109575_ip) {
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
                                var0 = 47;
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
                                    _fun109575_ip = 121;
                                    continue _fun109575
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
                        var0 = 47;
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
                        var0 = 47;
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
                        var0 = 47;
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
                        var0 = 47;
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
                        var0 = 47;
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
                        _fun109581: for (var _fun109581_ip = 0;;) switch (_fun109581_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 47;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.updateChannel;
                                var1 = {};
                                var5 = _closure1_slot31;
                                var4 = arg0;
                                if (var4) {
                                    _fun109581_ip = 51;
                                    continue _fun109581
                                }
                            case 43:
                                var4 = var5.GUILD_ANNOUNCEMENT;
                                _fun109581_ip = 57;
                                continue _fun109581;
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
                        var0 = 54;
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
                        var1 = 47;
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
                        var0 = 47;
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
                            _fun109585: for (var _fun109585_ip = 0;;) switch (_fun109585_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun109585_ip = 1541;
                                        continue _fun109585
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
                                    var1 = 55;
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
                                        _fun109585_ip = 1538;
                                        continue _fun109585
                                    }
                                case 140:
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun109585_ip = 683;
                                        continue _fun109585
                                    }
                                case 149:
                                    var9 = var4.features;
                                    var8 = var9.has;
                                    var5 = _closure1_slot33;
                                    var5 = var5.COMMUNITY;
                                    var5 = var8.bind(var9)(var5);
                                    if (!var5) {
                                        _fun109585_ip = 683;
                                        continue _fun109585
                                    }
                                case 181:
                                    var8 = var4.rulesChannelId;
                                    var5 = var11.id;
                                    if (!(var8 !== var5)) {
                                        _fun109585_ip = 214;
                                        continue _fun109585
                                    }
                                case 196:
                                    var8 = var4.publicUpdatesChannelId;
                                    var5 = var11.id;
                                    if (!(var8 === var5)) {
                                        _fun109585_ip = 683;
                                        continue _fun109585
                                    }
                                case 214:
                                    var8 = var4.rulesChannelId;
                                    var5 = var11.id;
                                    if (!(var8 !== var5)) {
                                        _fun109585_ip = 288;
                                        continue _fun109585
                                    }
                                case 229:
                                    var10 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var5 = 50;
                                    var8 = var12[var5];
                                    var8 = var10.bind(var2)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.string;
                                    var5 = var12[var5];
                                    var5 = var10.bind(var2)(var5);
                                    var5 = var5.t;
                                    var5 = var5["1B1/NB"];
                                    var17 = var8.bind(var9)(var5);
                                    _fun109585_ip = 345;
                                    continue _fun109585;
                                case 288:
                                    var10 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var5 = 50;
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
                                    var5 = 56;
                                    var5 = var24[var5];
                                    var9 = var8.bind(var2)(var5);
                                    var8 = var9.show;
                                    var5 = {};
                                    var21 = _closure1_slot0;
                                    var18 = 50;
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
                                    var13 = _closure1_slot51;
                                    var12 = _closure1_slot52;
                                    var10 = {};
                                    var16 = _closure1_slot50;
                                    var14 = 57;
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
                                    var17 = _closure1_slot50;
                                    var15 = 58;
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
                                        var0 = 56;
                                        var2 = var4[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 47;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 59;
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
                                    _fun109585_ip = 1535;
                                    continue _fun109585;
                                case 683:
                                    if (!(var3 != var4)) {
                                        _fun109585_ip = 1080;
                                        continue _fun109585
                                    }
                                case 690:
                                    if (var1) {
                                        _fun109585_ip = 1080;
                                        continue _fun109585
                                    }
                                case 696:
                                    var4 = _closure1_slot1;
                                    var21 = _closure1_slot2;
                                    var3 = 56;
                                    var3 = var21[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.show;
                                    var3 = {};
                                    var17 = _closure1_slot0;
                                    var16 = 50;
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
                                    var10 = _closure1_slot51;
                                    var9 = _closure1_slot52;
                                    var8 = {};
                                    var14 = _closure1_slot50;
                                    var12 = 57;
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
                                    var15 = _closure1_slot50;
                                    var13 = 58;
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
                                        var0 = 56;
                                        var2 = var4[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 47;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.close;
                                        var2 = var2.bind(var5)();
                                        var2 = 59;
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
                                    _fun109585_ip = 1535;
                                    continue _fun109585;
                                case 1080:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 60;
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
                                    var3 = 56;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.show;
                                    var3 = {};
                                    var8 = _closure3_slot0;
                                    var8 = var8.props;
                                    var8 = var8.isForumPost;
                                    if (var8) {
                                        _fun109585_ip = 1256;
                                        continue _fun109585
                                    }
                                case 1168:
                                    var8 = _closure3_slot0;
                                    var8 = var8.props;
                                    var8 = var8.isThread;
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var9 = 50;
                                    var10 = var13[var9];
                                    var10 = var12.bind(var2)(var10);
                                    var11 = var10.intl;
                                    var10 = var11.string;
                                    var9 = var13[var9];
                                    var9 = var12.bind(var2)(var9);
                                    var9 = var9.t;
                                    if (var8) {
                                        _fun109585_ip = 1243;
                                        continue _fun109585
                                    }
                                case 1230:
                                    var8 = var9["8D8Rsb"];
                                    var8 = var10.bind(var11)(var8);
                                    _fun109585_ip = 1254;
                                    continue _fun109585;
                                case 1243:
                                    var9 = var9.H7vTe2;
                                    var8 = var10.bind(var11)(var9);
                                case 1254:
                                    _fun109585_ip = 1311;
                                    continue _fun109585;
                                case 1256:
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var9 = 50;
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
                                    var9 = 50;
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
                                    var6 = 61;
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
                            _fun109589: for (var _fun109589_ip = 0;;) switch (_fun109589_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun109589_ip = 345;
                                        continue _fun109589
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
                                    var5 = 47;
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
                                        _fun109589_ip = 163;
                                        continue _fun109589
                                    }
                                case 84:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 62;
                                    var4 = var7[var4];
                                    var5 = var5.bind(var1)(var4);
                                    var4 = var5.getRootNavigationRef;
                                    var7 = var4.bind(var5)();
                                    var3 = var7;
                                    var5 = null;
                                    var5 = var5 != var7;
                                    var4 = var5;
                                    if (!var5) {
                                        _fun109589_ip = 142;
                                        continue _fun109589
                                    }
                                case 129:
                                    var7 = var3;
                                    var5 = var7.isReady;
                                    var4 = var5.bind(var7)();
                                case 142:
                                    if (!var4) {
                                        _fun109589_ip = 158;
                                        continue _fun109589
                                    }
                                case 145:
                                    var4 = var3;
                                    var3 = var4.goBack;
                                    var3 = var3.bind(var4)();
                                case 158: // try_end0
                                    _fun109589_ip = 342;
                                    continue _fun109589;
                                case 163:
                                    return var2;
                                case 166: // catch_target0
                                    CatchBlockStart(arg_register = 7);
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 63;
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
                                    var2 = 48;
                                    var2 = var4[var2];
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.open;
                                    var2 = {};
                                    var7 = 'CHANNEL_SETTINGS_DELETE_CHANNEL_ERROR';
                                    var2.key = var7;
                                    var7 = null;
                                    if (!(var7 == var8)) {
                                        _fun109589_ip = 330;
                                        continue _fun109589
                                    }
                                case 273:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 50;
                                    var7 = var10[var5];
                                    var7 = var9.bind(var1)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var5 = var10[var5];
                                    var5 = var9.bind(var1)(var5);
                                    var5 = var5.t;
                                    var5 = var5.CKsXk3;
                                    var5 = var7.bind(var8)(var5);
                                    _fun109589_ip = 333;
                                    continue _fun109589;
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
                        _fun109591: for (var _fun109591_ip = 0;;) switch (_fun109591_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.canManageChannels;
                                if (!var1) {
                                    _fun109591_ip = 174;
                                    continue _fun109591
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
                                var3 = 54;
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
                                var0 = 47;
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
                        _fun109592: for (var _fun109592_ip = 0;;) switch (_fun109592_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.canManageChannels;
                                if (!var1) {
                                    _fun109592_ip = 174;
                                    continue _fun109592
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
                                var3 = 54;
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
                                var0 = 47;
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
                        _fun109593: for (var _fun109593_ip = 0;;) switch (_fun109593_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.errors;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun109593_ip = 36;
                                    continue _fun109593
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
            _fun109594: for (var _fun109594_ip = 0;;) switch (_fun109594_ip) {
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
                        _fun109594_ip = 56;
                        continue _fun109594
                    }
                case 42:
                    var3 = var1.props;
                    var3 = var3.guild;
                    var2 = var4 != var3;
                case 56:
                    if (!var2) {
                        _fun109594_ip = 108;
                        continue _fun109594
                    }
                case 59:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 64;
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
                    var1 = 46;
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
            var3 = this;
            var2 = var3.updateNavigation;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateNavigation';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun109596: for (var _fun109596_ip = 0;;) switch (_fun109596_ip) {
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
                        _fun109596_ip = 122;
                        continue _fun109596
                    }
                case 72:
                    var8 = var5.submitting;
                    if (!(var6 === var8)) {
                        _fun109596_ip = 122;
                        continue _fun109596
                    }
                case 82:
                    var8 = var5.isThread;
                    if (!(var1 === var8)) {
                        _fun109596_ip = 122;
                        continue _fun109596
                    }
                case 92:
                    var5 = var5.channel;
                    var5 = var5.type;
                    if (!(var3 === var5)) {
                        _fun109596_ip = 122;
                        continue _fun109596
                    }
                case 106:
                    var5 = arg1;
                    var5 = var5.hasChanges;
                    if (!(var7 !== var5)) {
                        _fun109596_ip = 407;
                        continue _fun109596
                    }
                case 122:
                    if (var1) {
                        _fun109596_ip = 265;
                        continue _fun109596
                    }
                case 131:
                    var1 = _closure1_slot31;
                    var1 = var1.GUILD_CATEGORY;
                    if (!(var3 !== var1)) {
                        _fun109596_ip = 204;
                        continue _fun109596
                    }
                case 145:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 50;
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
                    _fun109596_ip = 263;
                    continue _fun109596;
                case 204:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 50;
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
                    _fun109596_ip = 345;
                    continue _fun109596;
                case 265:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 50;
                    var7 = var11[var1];
                    var9 = undefined;
                    var7 = var10.bind(var9)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var1 = var11[var1];
                    var1 = var10.bind(var9)(var1);
                    var1 = var1.t;
                    if (var0) {
                        _fun109596_ip = 329;
                        continue _fun109596
                    }
                case 314:
                    var0 = var1.d4n5Q1;
                    var0 = var7.bind(var8)(var0);
                    _fun109596_ip = 342;
                    continue _fun109596;
                case 329:
                    var1 = var1.BsJrhj;
                    var0 = var7.bind(var8)(var1);
                case 342:
                    var3 = var0;
                case 345:
                    var1 = var2.setOptions;
                    var0 = {};
                    if (var6) {
                        _fun109596_ip = 365;
                        continue _fun109596
                    }
                case 356:
                    var4 = function(arg0) { // Environment: var4
                        var3 = _closure1_slot50;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var0 = 66;
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
                        var5 = 50;
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
                    _fun109596_ip = 393;
                    continue _fun109596;
                case 365:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 65;
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
            _fun109598: for (var _fun109598_ip = 0;;) switch (_fun109598_ip) {
                case 0:
                    var9 = this;
                    var0 = var9.props;
                    var8 = var0.channel;
                    var7 = var0.canManageChannels;
                    var13 = var0.canManageThread;
                    var12 = var0.canSendMessages;
                    var10 = var0.isChannelOwner;
                    var2 = var0.isThread;
                    var11 = var0.isForumPost;
                    var4 = _closure1_slot13;
                    var1 = var8.type;
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    if (!var1) {
                        _fun109598_ip = 74;
                        continue _fun109598
                    }
                case 71:
                    var1 = !var2;
                case 74:
                    if (var1) {
                        _fun109598_ip = 102;
                        continue _fun109598
                    }
                case 77:
                    var4 = _closure1_slot32;
                    var6 = var4.GUILD_THREADS_ONLY;
                    var5 = var6.has;
                    var4 = var8.type;
                    var1 = var5.bind(var6)(var4);
                case 102:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 67;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.getIsChannelNameSettingEditable;
                    var4 = {};
                    var4.canManageThread = var13;
                    var4.canManageChannels = var7;
                    var4.canSendMessages = var12;
                    var4.isForumPost = var11;
                    var4.isThread = var2;
                    var4.isChannelOwner = var10;
                    var6 = var5.bind(var6)(var4);
                    var4 = var8.isForumPost;
                    var4 = var4.bind(var8)();
                    if (var4) {
                        _fun109598_ip = 377;
                        continue _fun109598
                    }
                case 181:
                    if (var2) {
                        _fun109598_ip = 320;
                        continue _fun109598
                    }
                case 187:
                    var4 = var8.type;
                    var2 = _closure1_slot31;
                    var2 = var2.GUILD_CATEGORY;
                    if (!(var4 !== var2)) {
                        _fun109598_ip = 263;
                        continue _fun109598
                    }
                case 206:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 50;
                    var4 = var11[var2];
                    var4 = var10.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var11[var2];
                    var2 = var10.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.PVbHDl;
                    var10 = var4.bind(var5)(var2);
                    _fun109598_ip = 318;
                    continue _fun109598;
                case 263:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 50;
                    var4 = var12[var2];
                    var4 = var11.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var12[var2];
                    var2 = var11.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.OCAkGP;
                    var10 = var4.bind(var5)(var2);
                case 318:
                    _fun109598_ip = 375;
                    continue _fun109598;
                case 320:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 50;
                    var4 = var12[var2];
                    var4 = var11.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var12[var2];
                    var2 = var11.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.j3XWjD;
                    var10 = var4.bind(var5)(var2);
                case 375:
                    _fun109598_ip = 434;
                    continue _fun109598;
                case 377:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 50;
                    var4 = var12[var2];
                    var4 = var11.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var2 = var12[var2];
                    var2 = var11.bind(var3)(var2);
                    var2 = var2.t;
                    var2 = var2.uyVrTN;
                    var10 = var4.bind(var5)(var2);
                case 434:
                    var5 = _closure1_slot50;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var2 = 68;
                    var2 = var12[var2];
                    var2 = var11.bind(var3)(var2);
                    var4 = var2.TextInput;
                    var2 = {};
                    var13 = var9.props;
                    var13 = var13.channelNameRef;
                    var2.ref = var13;
                    var2.label = var10;
                    var2.accessibilityLabel = var10;
                    var10 = 60;
                    var10 = var12[var10];
                    var13 = var11.bind(var3)(var10);
                    var12 = var13.computeChannelName;
                    var11 = _closure1_slot25;
                    var10 = _closure1_slot24;
                    var10 = var12.bind(var13)(var8, var11, var10);
                    var2.value = var10;
                    var10 = var9.handleChangeName;
                    var2.onChange = var10;
                    var10 = var9.handleBlurName;
                    var2.onBlur = var10;
                    var6 = !var6;
                    var2.isDisabled = var6;
                    var6 = _closure1_slot36;
                    var2.maxLength = var6;
                    var10 = var9.getError;
                    var6 = 'name';
                    var6 = var10.bind(var9)(var6);
                    var2.errorMessage = var6;
                    var6 = var5.bind(var3)(var4, var2);
                    var5 = undefined;
                    if (!var1) {
                        _fun109598_ip = 841;
                        continue _fun109598
                    }
                case 601:
                    var1 = var8.isForumLikeChannel;
                    var10 = var1.bind(var8)();
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 50;
                    var2 = var12[var1];
                    var2 = var11.bind(var3)(var2);
                    var4 = var2.intl;
                    var2 = var4.string;
                    var1 = var12[var1];
                    var1 = var11.bind(var3)(var1);
                    var1 = var1.t;
                    if (var10) {
                        _fun109598_ip = 673;
                        continue _fun109598
                    }
                case 658:
                    var10 = var1.X8jMDh;
                    var10 = var2.bind(var4)(var10);
                    _fun109598_ip = 684;
                    continue _fun109598;
                case 673:
                    var1 = var1.yR6HwZ;
                    var10 = var2.bind(var4)(var1);
                case 684:
                    var4 = _closure1_slot50;
                    var2 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 69;
                    var1 = var12[var1];
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TextArea;
                    var1 = {};
                    var1.label = var10;
                    var1.accessibilityLabel = var10;
                    var11 = _closure1_slot1;
                    var10 = 53;
                    var10 = var12[var10];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.translateSurrogatesToInlineEmoji;
                    var10 = var8.topic;
                    var10 = var11.bind(var12)(var10);
                    var1.value = var10;
                    var10 = var9.handleChangeTopic;
                    var1.onChange = var10;
                    var7 = !var7;
                    var1.isDisabled = var7;
                    var7 = true;
                    var1.autoCorrect = var7;
                    var7 = var8.isForumLikeChannel;
                    var7 = var7.bind(var8)();
                    if (var7) {
                        _fun109598_ip = 806;
                        continue _fun109598
                    }
                case 800:
                    var7 = _closure1_slot46;
                    _fun109598_ip = 810;
                    continue _fun109598;
                case 806:
                    var7 = _closure1_slot47;
                case 810:
                    var1.maxLength = var7;
                    var8 = var9.getError;
                    var7 = 'topic';
                    var7 = var8.bind(var9)(var7);
                    var1.errorMessage = var7;
                    var5 = var4.bind(var3)(var2, var1);
                case 841:
                    var2 = _closure1_slot51;
                    var1 = _closure1_slot52;
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
            _fun109599: for (var _fun109599_ip = 0;;) switch (_fun109599_ip) {
                case 0:
                    var16 = this;
                    var0 = var16.props;
                    var12 = var0.channel;
                    var1 = var0.canManageChannels;
                    var15 = var0.isNSFWDisabled;
                    var3 = var12.type;
                    var0 = _closure1_slot31;
                    var2 = var0.GUILD_TEXT;
                    var14 = null;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun109599_ip = 481;
                        continue _fun109599
                    }
                case 54:
                    var0 = null;
                    if (!var1) {
                        _fun109599_ip = 481;
                        continue _fun109599
                    }
                case 62:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 70;
                    var1 = var3[var1];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.isIOS;
                    var1 = var1.bind(var2)();
                    var0 = null;
                    if (var1) {
                        _fun109599_ip = 481;
                        continue _fun109599
                    }
                case 102:
                    var3 = _closure1_slot51;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var9 = _closure1_slot50;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var5 = 71;
                    var5 = var19[var5];
                    var5 = var18.bind(var4)(var5);
                    var8 = var5.TableRowGroup;
                    var7 = {};
                    var11 = _closure1_slot50;
                    var5 = 72;
                    var5 = var19[var5];
                    var5 = var18.bind(var4)(var5);
                    var10 = var5.TableSwitchRow;
                    var5 = {};
                    var13 = 50;
                    var17 = var19[var13];
                    var17 = var18.bind(var4)(var17);
                    var21 = var17.intl;
                    var20 = var21.string;
                    var17 = var19[var13];
                    var17 = var18.bind(var4)(var17);
                    var17 = var17.t;
                    var17 = var17.Es25Yf;
                    var17 = var20.bind(var21)(var17);
                    var5.label = var17;
                    var17 = 73;
                    var17 = var19[var17];
                    var18 = var18.bind(var4)(var17);
                    var17 = var18.isChannelOrGuildNSFW;
                    var17 = var17.bind(var18)(var12);
                    var5.value = var17;
                    var16 = var16.handleNsfwChange;
                    var5.onValueChange = var16;
                    var5.disabled = var15;
                    var12 = var12.linkedLobby;
                    var14 = var14 != var12;
                    var12 = undefined;
                    if (!var14) {
                        _fun109599_ip = 332;
                        continue _fun109599
                    }
                case 278:
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var15 = var14[var13];
                    var15 = var17.bind(var4)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var14[var13];
                    var14 = var17.bind(var4)(var14);
                    var14 = var14.t;
                    var14 = var14.l6uSVa;
                    var12 = var15.bind(var16)(var14);
                case 332:
                    var5.subLabel = var12;
                    var5 = var11.bind(var4)(var10, var5);
                    var7.children = var5;
                    var5 = 'nsfw-section';
                    var7 = var9.bind(var4)(var8, var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot50;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 57;
                    var6 = var9[var6];
                    var6 = var12.bind(var4)(var6);
                    var7 = var6.Text;
                    var6 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var10 = var9[var13];
                    var10 = var12.bind(var4)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var9[var13];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.t;
                    var9 = var9["9eUgwR"];
                    var9 = var10.bind(var11)(var9);
                    var6.children = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 481:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'renderSlowmode';
        var4.key = var6;
        var6 = function() {
            _fun109600: for (var _fun109600_ip = 0;;) switch (_fun109600_ip) {
                case 0:
                    var21 = this;
                    var1 = _closure1_slot55;
                    var0 = var21.context;
                    var6 = undefined;
                    var22 = var1.bind(var6)(var0);
                    var0 = var21.props;
                    var2 = var0.channel;
                    var1 = var0.canManageChannels;
                    var0 = var0.isThreadModerator;
                    var4 = var2.type;
                    var3 = _closure1_slot31;
                    var3 = var3.GUILD_TEXT;
                    if (!(var4 === var3)) {
                        _fun109600_ip = 66;
                        continue _fun109600
                    }
                case 63:
                    if (var1) {
                        _fun109600_ip = 86;
                        continue _fun109600
                    }
                case 66:
                    var1 = var2.isThread;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun109600_ip = 82;
                        continue _fun109600
                    }
                case 79:
                    if (var0) {
                        _fun109600_ip = 86;
                        continue _fun109600
                    }
                case 82:
                    var0 = null;
                    return var0;
                case 86:
                    var0 = new Array(0);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 74;
                    var1 = var5[var1];
                    var10 = var3.bind(var6)(var1);
                    var8 = var10.getSecondsSliderLabel;
                    var7 = var2.rateLimitPerUser;
                    var25 = 50;
                    var1 = var5[var25];
                    var1 = var3.bind(var6)(var1);
                    var11 = var1.intl;
                    var4 = var11.string;
                    var1 = var5[var25];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.zvDu4h;
                    var4 = var4.bind(var11)(var1);
                    var1 = false;
                    var26 = var8.bind(var10)(var7, var1, var4);
                    var4 = {};
                    var1 = 75;
                    var1 = var5[var1];
                    var10 = var3.bind(var6)(var1);
                    var8 = var10.dateFormat;
                    var3 = _closure1_slot1;
                    var1 = 76;
                    var1 = var5[var1];
                    var7 = var3.bind(var6)(var1);
                    var1 = _closure1_slot43;
                    var7 = var7.bind(var6)(var1);
                    var1 = 'LL';
                    var1 = var8.bind(var10)(var7, var1);
                    var4.breakingChangeDate = var1;
                    var1 = 77;
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
                        _fun109600_ip = 377;
                        continue _fun109600
                    }
                case 291:
                    var1 = var2.isThread;
                    var5 = var1.bind(var2)();
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = var1[var25];
                    var2 = var7.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.format;
                    var1 = var1[var25];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    if (var5) {
                        _fun109600_ip = 361;
                        continue _fun109600
                    }
                case 345:
                    var5 = var1.wW2MWu;
                    var10 = var2.bind(var3)(var5, var4);
                    _fun109600_ip = 375;
                    continue _fun109600;
                case 361:
                    var1 = var1["8sTC8t"];
                    var10 = var2.bind(var3)(var1, var4);
                case 375:
                    _fun109600_ip = 432;
                    continue _fun109600;
                case 377:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = var1[var25];
                    var2 = var5.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.format;
                    var1 = var1[var25];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.EIQq9v;
                    var10 = var2.bind(var3)(var1, var4);
                case 432:
                    var2 = var0.push;
                    var5 = _closure1_slot51;
                    var4 = _closure1_slot10;
                    var3 = {};
                    var13 = _closure1_slot50;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var1 = 71;
                    var1 = var11[var1];
                    var1 = var8.bind(var6)(var1);
                    var12 = var1.TableRowGroup;
                    var1 = {};
                    var16 = _closure1_slot51;
                    var7 = 78;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var15 = var7.Card;
                    var14 = {};
                    var19 = _closure1_slot51;
                    var18 = _closure1_slot10;
                    var17 = {};
                    var7 = {
                        'flexDirection': 'row',
                        'justifyContent': 'space-between',
                        'alignItems': 'center'
                    };
                    var17.style = var7;
                    var24 = _closure1_slot50;
                    var7 = 57;
                    var20 = var11[var7];
                    var20 = var8.bind(var6)(var20);
                    var23 = var20.Text;
                    var20 = {
                        'variant': 'text-md/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var27 = var11[var25];
                    var27 = var8.bind(var6)(var27);
                    var28 = var27.intl;
                    var27 = var28.string;
                    var25 = var11[var25];
                    var25 = var8.bind(var6)(var25);
                    var25 = var25.t;
                    var25 = var25.piZgKF;
                    var25 = var27.bind(var28)(var25);
                    var20.children = var25;
                    var23 = var24.bind(var6)(var23, var20);
                    var20 = new Array(2);
                    var20[0] = var23;
                    var25 = _closure1_slot50;
                    var23 = var11[var7];
                    var23 = var8.bind(var6)(var23);
                    var24 = var23.Text;
                    var23 = {
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var23.children = var26;
                    var23 = var25.bind(var6)(var24, var23);
                    var20[1] = var23;
                    var17.children = var20;
                    var18 = var19.bind(var6)(var18, var17);
                    var17 = new Array(2);
                    var17[0] = var18;
                    var20 = _closure1_slot50;
                    var18 = 79;
                    var18 = var11[var18];
                    var18 = var8.bind(var6)(var18);
                    var19 = var18.Slider;
                    var18 = {};
                    var23 = var22.slider;
                    var22 = new Array(2);
                    var22[0] = var23;
                    var23 = {
                        'marginStart': 4294967292,
                        'marginTop': 8
                    };
                    var22[1] = var23;
                    var18.style = var22;
                    var22 = var21._cooldown;
                    var18.value = var22;
                    var22 = 0;
                    var18.minimumValue = var22;
                    var22 = _closure1_slot41;
                    var23 = var22.length;
                    var22 = 1;
                    var22 = var23 - var22;
                    var18.maximumValue = var22;
                    var21 = var21.handleSlowmodeChange;
                    var18.onValueChange = var21;
                    var18 = var20.bind(var6)(var19, var18);
                    var17[1] = var18;
                    var14.children = var17;
                    var14 = var16.bind(var6)(var15, var14);
                    var1.children = var14;
                    var12 = var13.bind(var6)(var12, var1);
                    var1 = new Array(2);
                    var1[0] = var12;
                    var9 = _closure1_slot50;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var8 = var7.Text;
                    var7 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var7.children = var10;
                    var7 = var9.bind(var6)(var8, var7);
                    var1[1] = var7;
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
            _fun109601: for (var _fun109601_ip = 0;;) switch (_fun109601_ip) {
                case 0:
                    var4 = this;
                    var1 = var4.props;
                    var5 = var1.channel;
                    var0 = var1.canManageThread;
                    var6 = var1.isForumPost;
                    var1 = var5.isThread;
                    var1 = var1.bind(var5)();
                    if (!var1) {
                        _fun109601_ip = 41;
                        continue _fun109601
                    }
                case 38:
                    if (var0) {
                        _fun109601_ip = 45;
                        continue _fun109601
                    }
                case 41:
                    var0 = null;
                    return var0;
                case 45:
                    var8 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var12 = 50;
                    var1 = var0[var12];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var0[var12];
                    var0 = var8.bind(var3)(var0);
                    var0 = var0.t;
                    if (var6) {
                        _fun109601_ip = 112;
                        continue _fun109601
                    }
                case 97:
                    var6 = var0.YUXr4Z;
                    var6 = var1.bind(var2)(var6);
                    _fun109601_ip = 125;
                    continue _fun109601;
                case 112:
                    var0 = var0["3aJN9M"];
                    var6 = var1.bind(var2)(var0);
                case 125:
                    var2 = _closure1_slot50;
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 80;
                    var0 = var8[var0];
                    var0 = var11.bind(var3)(var0);
                    var1 = var0.AutoArchiveDurationOptions;
                    var0 = {};
                    var9 = var8[var12];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var8[var12];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.FGjMZS;
                    var8 = var9.bind(var10)(var8);
                    var0.title = var8;
                    var0.description = var6;
                    var9 = var5.threadMetadata;
                    var8 = null;
                    var10 = var8 == var9;
                    var6 = undefined;
                    if (var10) {
                        _fun109601_ip = 232;
                        continue _fun109601
                    }
                case 226:
                    var6 = var9.autoArchiveDuration;
                case 232:
                    if (!(var8 == var6)) {
                        _fun109601_ip = 240;
                        continue _fun109601
                    }
                case 236:
                    var6 = _closure1_slot49;
                case 240:
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
            _fun109602: for (var _fun109602_ip = 0;;) switch (_fun109602_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var9 = var0.channel;
                    var11 = var0.canManageThread;
                    var0 = var9.threadMetadata;
                    var4 = null;
                    var1 = var4 == var0;
                    var0 = null;
                    if (var1) {
                        _fun109602_ip = 284;
                        continue _fun109602
                    }
                case 39:
                    var3 = var9.type;
                    var2 = _closure1_slot31;
                    var2 = var2.PRIVATE_THREAD;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun109602_ip = 284;
                        continue _fun109602
                    }
                case 66:
                    var5 = _closure1_slot50;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var2 = 71;
                    var2 = var14[var2];
                    var4 = undefined;
                    var2 = var13.bind(var4)(var2);
                    var3 = var2.TableRowGroup;
                    var2 = {};
                    var10 = 50;
                    var6 = var14[var10];
                    var6 = var13.bind(var4)(var6);
                    var12 = var6.intl;
                    var7 = var12.string;
                    var6 = var14[var10];
                    var6 = var13.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.cSyXJk;
                    var6 = var7.bind(var12)(var6);
                    var2.description = var6;
                    var7 = _closure1_slot50;
                    var1 = 72;
                    var1 = var14[var1];
                    var1 = var13.bind(var4)(var1);
                    var6 = var1.TableSwitchRow;
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
                case 284:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'renderDefaultAutoArchiveDuration';
        var4.key = var6;
        var6 = function() {
            _fun109603: for (var _fun109603_ip = 0;;) switch (_fun109603_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.props;
                    var7 = var0.channel;
                    var1 = var0.canManageChannels;
                    var3 = _closure1_slot14;
                    var2 = var3.has;
                    var0 = var7.type;
                    var2 = var2.bind(var3)(var0);
                    var11 = null;
                    var0 = null;
                    if (!var2) {
                        _fun109603_ip = 280;
                        continue _fun109603
                    }
                case 51:
                    var0 = null;
                    if (!var1) {
                        _fun109603_ip = 280;
                        continue _fun109603
                    }
                case 59:
                    var4 = _closure1_slot50;
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 80;
                    var1 = var12[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.AutoArchiveDurationOptions;
                    var1 = {};
                    var10 = 50;
                    var8 = var12[var10];
                    var8 = var9.bind(var3)(var8);
                    var14 = var8.intl;
                    var13 = var14.string;
                    var8 = var12[var10];
                    var8 = var9.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.FGjMZS;
                    var8 = var13.bind(var14)(var8);
                    var1.title = var8;
                    var8 = 81;
                    var8 = var12[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.getAutoArchiveDuration;
                    var8 = var8.bind(var9)(var7, var11);
                    var1.selected = var8;
                    var1.channel = var7;
                    var5 = var5.handleDefaultAutoArchiveDurationChange;
                    var1.onSelectDuration = var5;
                    var5 = var7.isForumLikeChannel;
                    var5 = var5.bind(var7)();
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = var6[var10];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    if (var5) {
                        _fun109603_ip = 257;
                        continue _fun109603
                    }
                case 242:
                    var5 = var6.W3Noi9;
                    var5 = var7.bind(var8)(var5);
                    _fun109603_ip = 270;
                    continue _fun109603;
                case 257:
                    var6 = var6.fyXclY;
                    var5 = var7.bind(var8)(var6);
                case 270:
                    var1.description = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 280:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'renderDefaultSortOrder';
        var4.key = var6;
        var6 = function() {
            _fun109604: for (var _fun109604_ip = 0;;) switch (_fun109604_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.props;
                    var1 = var0.channel;
                    var0 = var0.canManageChannels;
                    var2 = var1.isForumLikeChannel;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun109604_ip = 35;
                        continue _fun109604
                    }
                case 32:
                    if (var0) {
                        _fun109604_ip = 39;
                        continue _fun109604
                    }
                case 35:
                    var0 = null;
                    return var0;
                case 39:
                    var0 = var1.getDefaultSortOrder;
                    var5 = var0.bind(var1)();
                    var3 = _closure1_slot51;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 82;
                    var0 = var10[var0];
                    var2 = undefined;
                    var0 = var9.bind(var2)(var0);
                    var1 = var0.TableRadioGroup;
                    var0 = {};
                    var11 = 50;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7.gePre2;
                    var7 = var8.bind(var12)(var7);
                    var0.title = var7;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7["165cVX"];
                    var7 = var8.bind(var12)(var7);
                    var0.description = var7;
                    var0.value = var5;
                    var4 = var4.handleDefaultSortOrderChange;
                    var0.onChange = var4;
                    var4 = false;
                    var0.hasIcons = var4;
                    var12 = _closure1_slot50;
                    var5 = 83;
                    var4 = var10[var5];
                    var4 = var9.bind(var2)(var4);
                    var7 = var4.TableRadioRow;
                    var4 = {};
                    var8 = var10[var11];
                    var8 = var9.bind(var2)(var8);
                    var14 = var8.intl;
                    var13 = var14.string;
                    var8 = var10[var11];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.ElZtzj;
                    var8 = var13.bind(var14)(var8);
                    var4.label = var8;
                    var8 = 84;
                    var13 = var10[var8];
                    var13 = var9.bind(var2)(var13);
                    var13 = var13.ThreadSortOrder;
                    var13 = var13.LATEST_ACTIVITY;
                    var4.value = var13;
                    var7 = var12.bind(var2)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var7;
                    var7 = _closure1_slot50;
                    var5 = var10[var5];
                    var5 = var9.bind(var2)(var5);
                    var6 = var5.TableRadioRow;
                    var5 = {};
                    var12 = var10[var11];
                    var12 = var9.bind(var2)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var10[var11];
                    var11 = var9.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.w28f3F;
                    var11 = var12.bind(var13)(var11);
                    var5.label = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.ThreadSortOrder;
                    var8 = var8.CREATION_DATE;
                    var5.value = var8;
                    var5 = var7.bind(var2)(var6, var5);
                    var4[1] = var5;
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
            _fun109605: for (var _fun109605_ip = 0;;) switch (_fun109605_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.props;
                    var1 = var0.channel;
                    var0 = var0.canManageChannels;
                    var2 = var1.isForumLikeChannel;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun109605_ip = 35;
                        continue _fun109605
                    }
                case 32:
                    if (var0) {
                        _fun109605_ip = 39;
                        continue _fun109605
                    }
                case 35:
                    var0 = null;
                    return var0;
                case 39:
                    var0 = var1.getDefaultTagSetting;
                    var5 = var0.bind(var1)();
                    var3 = _closure1_slot51;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 82;
                    var0 = var10[var0];
                    var2 = undefined;
                    var0 = var9.bind(var2)(var0);
                    var1 = var0.TableRadioGroup;
                    var0 = {};
                    var11 = 50;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7.Paxaug;
                    var7 = var8.bind(var12)(var7);
                    var0.title = var7;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var10[var11];
                    var7 = var9.bind(var2)(var7);
                    var7 = var7.t;
                    var7 = var7.DqOl8J;
                    var7 = var8.bind(var12)(var7);
                    var0.description = var7;
                    var0.value = var5;
                    var4 = var4.handleDefaultTagSettingChange;
                    var0.onChange = var4;
                    var4 = false;
                    var0.hasIcons = var4;
                    var12 = _closure1_slot50;
                    var5 = 83;
                    var4 = var10[var5];
                    var4 = var9.bind(var2)(var4);
                    var7 = var4.TableRadioRow;
                    var4 = {};
                    var8 = var10[var11];
                    var8 = var9.bind(var2)(var8);
                    var14 = var8.intl;
                    var13 = var14.string;
                    var8 = var10[var11];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.t;
                    var8 = var8.rQ0ctQ;
                    var8 = var13.bind(var14)(var8);
                    var4.label = var8;
                    var8 = 85;
                    var13 = var10[var8];
                    var13 = var9.bind(var2)(var13);
                    var13 = var13.ThreadSearchTagSetting;
                    var13 = var13.MATCH_SOME;
                    var4.value = var13;
                    var7 = var12.bind(var2)(var7, var4);
                    var4 = new Array(2);
                    var4[0] = var7;
                    var7 = _closure1_slot50;
                    var5 = var10[var5];
                    var5 = var9.bind(var2)(var5);
                    var6 = var5.TableRadioRow;
                    var5 = {};
                    var12 = var10[var11];
                    var12 = var9.bind(var2)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var10[var11];
                    var11 = var9.bind(var2)(var11);
                    var11 = var11.t;
                    var11 = var11.FCXUu0;
                    var11 = var12.bind(var13)(var11);
                    var5.label = var11;
                    var8 = var10[var8];
                    var8 = var9.bind(var2)(var8);
                    var8 = var8.ThreadSearchTagSetting;
                    var8 = var8.MATCH_ALL;
                    var5.value = var8;
                    var5 = var7.bind(var2)(var6, var5);
                    var4[1] = var5;
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
            _fun109606: for (var _fun109606_ip = 0;;) switch (_fun109606_ip) {
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
                        _fun109606_ip = 542;
                        continue _fun109606
                    }
                case 49:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun109606_ip = 542;
                        continue _fun109606
                    }
                case 58:
                    var4 = var2.features;
                    var3 = var4.has;
                    var1 = _closure1_slot33;
                    var1 = var1.NEWS;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun109606_ip = 542;
                        continue _fun109606
                    }
                case 90:
                    var3 = var13.id;
                    var4 = var0 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun109606_ip = 110;
                        continue _fun109606
                    }
                case 104:
                    var1 = var2.rulesChannelId;
                case 110:
                    if (!(var3 !== var1)) {
                        _fun109606_ip = 542;
                        continue _fun109606
                    }
                case 117:
                    var1 = var13.id;
                    var3 = var0 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun109606_ip = 137;
                        continue _fun109606
                    }
                case 131:
                    var0 = var2.publicUpdatesChannelId;
                case 137:
                    if (!(var1 !== var0)) {
                        _fun109606_ip = 542;
                        continue _fun109606
                    }
                case 144:
                    var0 = new Array(0);
                    var2 = var0.push;
                    var5 = _closure1_slot50;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var1 = 71;
                    var1 = var16[var1];
                    var1 = var15.bind(var6)(var1);
                    var4 = var1.TableRowGroup;
                    var3 = {};
                    var8 = _closure1_slot51;
                    var7 = _closure1_slot52;
                    var1 = {};
                    var10 = 50;
                    var14 = var16[var10];
                    var14 = var15.bind(var6)(var14);
                    var19 = var14.intl;
                    var18 = var19.format;
                    var14 = var16[var10];
                    var14 = var15.bind(var6)(var14);
                    var14 = var14.t;
                    var17 = var14.tI7KNX;
                    var14 = {};
                    var21 = _closure1_slot1;
                    var20 = 77;
                    var20 = var16[var20];
                    var22 = var21.bind(var6)(var20);
                    var21 = var22.getArticleURL;
                    var20 = _closure1_slot35;
                    var20 = var20.ANNOUNCEMENT_CHANNELS;
                    var20 = var21.bind(var22)(var20);
                    var14.documentationLink = var20;
                    var17 = var18.bind(var19)(var17, var14);
                    var14 = new Array(3);
                    var14[0] = var17;
                    var17 = '\n\n';
                    var14[1] = var17;
                    var17 = var16[var10];
                    var17 = var15.bind(var6)(var17);
                    var19 = var17.intl;
                    var18 = var19.string;
                    var17 = var16[var10];
                    var17 = var15.bind(var6)(var17);
                    var17 = var17.t;
                    var17 = var17["2Ab4Id"];
                    var17 = var18.bind(var19)(var17);
                    var14[2] = var17;
                    var1.children = var14;
                    var1 = var8.bind(var6)(var7, var1);
                    var3.description = var1;
                    var8 = _closure1_slot50;
                    var1 = 72;
                    var1 = var16[var1];
                    var1 = var15.bind(var6)(var1);
                    var7 = var1.TableSwitchRow;
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
                case 542:
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
            _fun109607: for (var _fun109607_ip = 0;;) switch (_fun109607_ip) {
                case 0:
                    var16 = this;
                    var1 = _closure1_slot55;
                    var0 = var16.context;
                    var6 = undefined;
                    var21 = var1.bind(var6)(var0);
                    var1 = var16.props;
                    var19 = var1.channel;
                    var0 = var1.canManageChannels;
                    var3 = var1.guild;
                    var1 = var16.showVoiceSettings;
                    var1 = var1.bind(var16)();
                    if (!var1) {
                        _fun109607_ip = 59;
                        continue _fun109607
                    }
                case 56:
                    if (var0) {
                        _fun109607_ip = 63;
                        continue _fun109607
                    }
                case 59:
                    var0 = null;
                    return var0;
                case 63:
                    var0 = new Array(0);
                    var14 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var1 = 52;
                    var1 = var22[var1];
                    var2 = var14.bind(var6)(var1);
                    var1 = var2.getBitrateLimit;
                    var17 = var1.bind(var2)(var3, var19);
                    var2 = var0.push;
                    var5 = _closure1_slot50;
                    var1 = 71;
                    var1 = var22[var1];
                    var1 = var14.bind(var6)(var1);
                    var4 = var1.TableRowGroup;
                    var3 = {};
                    var23 = 50;
                    var1 = var22[var23];
                    var1 = var14.bind(var6)(var1);
                    var9 = var1.intl;
                    var8 = var9.format;
                    var1 = var22[var23];
                    var1 = var14.bind(var6)(var1);
                    var1 = var1.t;
                    var7 = var1.SbQJk5;
                    var1 = {};
                    var10 = _closure1_slot28;
                    var27 = 1000;
                    var10 = var10 / var27;
                    var1.bitrate = var10;
                    var1 = var8.bind(var9)(var7, var1);
                    var3.description = var1;
                    var8 = _closure1_slot51;
                    var1 = 78;
                    var1 = var22[var1];
                    var1 = var14.bind(var6)(var1);
                    var7 = var1.Card;
                    var1 = {};
                    var11 = _closure1_slot51;
                    var10 = _closure1_slot10;
                    var9 = {};
                    var12 = {
                        'flexDirection': 'row',
                        'justifyContent': 'space-between',
                        'alignItems': 'center'
                    };
                    var9.style = var12;
                    var20 = _closure1_slot50;
                    var13 = 57;
                    var12 = var22[var13];
                    var12 = var14.bind(var6)(var12);
                    var15 = var12.Text;
                    var12 = {
                        'variant': 'text-md/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var24 = var22[var23];
                    var24 = var14.bind(var6)(var24);
                    var25 = var24.intl;
                    var24 = var25.string;
                    var23 = var22[var23];
                    var23 = var14.bind(var6)(var23);
                    var23 = var23.t;
                    var23 = var23.w2d0vU;
                    var23 = var24.bind(var25)(var23);
                    var12.children = var23;
                    var15 = var20.bind(var6)(var15, var12);
                    var12 = new Array(2);
                    var12[0] = var15;
                    var23 = _closure1_slot50;
                    var13 = var22[var13];
                    var13 = var14.bind(var6)(var13);
                    var15 = var13.Text;
                    var13 = {
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var20 = global;
                    var26 = var20.Math;
                    var25 = var26.round;
                    var24 = var19.bitrate;
                    var24 = var24 / var27;
                    var27 = var25.bind(var26)(var24);
                    var24 = var20.HermesInternal;
                    var26 = var24.concat;
                    var25 = '';
                    var24 = 'kbps';
                    var24 = var26.bind(var25)(var27, var24);
                    var13.children = var24;
                    var13 = var23.bind(var6)(var15, var13);
                    var12[1] = var13;
                    var9.children = var12;
                    var10 = var11.bind(var6)(var10, var9);
                    var9 = new Array(2);
                    var9[0] = var10;
                    var12 = _closure1_slot50;
                    var11 = _closure1_slot10;
                    var10 = {};
                    var13 = var21.sliderWrapper;
                    var10.style = var13;
                    var15 = _closure1_slot50;
                    var13 = 79;
                    var13 = var22[var13];
                    var13 = var14.bind(var6)(var13);
                    var14 = var13.Slider;
                    var13 = {};
                    var21 = var21.slider;
                    var13.style = var21;
                    var21 = var20.Math;
                    var20 = var21.min;
                    var19 = var19.bitrate;
                    var19 = var20.bind(var21)(var19, var17);
                    var13.value = var19;
                    var18 = _closure1_slot29;
                    var13.minimumValue = var18;
                    var13.maximumValue = var17;
                    var16 = var16.handleBitRateChange;
                    var13.onValueChange = var16;
                    var13 = var15.bind(var6)(var14, var13);
                    var10.children = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    var9[1] = var10;
                    var1.children = var9;
                    var1 = var8.bind(var6)(var7, var1);
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
            _fun109608: for (var _fun109608_ip = 0;;) switch (_fun109608_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var7 = var0.channel;
                    var0 = var0.canManageChannels;
                    var2 = var1.showVoiceSettings;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun109608_ip = 35;
                        continue _fun109608
                    }
                case 32:
                    if (var0) {
                        _fun109608_ip = 39;
                        continue _fun109608
                    }
                case 35:
                    var0 = null;
                    return var0;
                case 39:
                    var0 = new Array(0);
                    var2 = var0.push;
                    var6 = _closure1_slot51;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 82;
                    var3 = var9[var3];
                    var5 = undefined;
                    var3 = var10.bind(var5)(var3);
                    var4 = var3.TableRadioGroup;
                    var3 = {};
                    var15 = 50;
                    var11 = var9[var15];
                    var11 = var10.bind(var5)(var11);
                    var13 = var11.intl;
                    var12 = var13.string;
                    var11 = var9[var15];
                    var11 = var10.bind(var5)(var11);
                    var11 = var11.t;
                    var11 = var11.jhJEJs;
                    var11 = var12.bind(var13)(var11);
                    var3.title = var11;
                    var11 = var9[var15];
                    var11 = var10.bind(var5)(var11);
                    var12 = var11.intl;
                    var11 = var12.format;
                    var9 = var9[var15];
                    var9 = var10.bind(var5)(var9);
                    var9 = var9.t;
                    var10 = var9.c5W7Ss;
                    var9 = {};
                    var9 = var11.bind(var12)(var10, var9);
                    var3.description = var9;
                    var7 = var7.videoQualityMode;
                    var9 = null;
                    if (!(var9 == var7)) {
                        _fun109608_ip = 213;
                        continue _fun109608
                    }
                case 203:
                    var9 = _closure1_slot42;
                    var7 = var9.AUTO;
                case 213:
                    var3.value = var7;
                    var1 = var1.handleVideoQualityModeChange;
                    var3.onChange = var1;
                    var1 = false;
                    var3.hasIcons = var1;
                    var12 = _closure1_slot50;
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 83;
                    var1 = var11[var7];
                    var1 = var14.bind(var5)(var1);
                    var9 = var1.TableRadioRow;
                    var1 = {};
                    var10 = var11[var15];
                    var10 = var14.bind(var5)(var10);
                    var16 = var10.intl;
                    var13 = var16.string;
                    var10 = var11[var15];
                    var10 = var14.bind(var5)(var10);
                    var10 = var10.t;
                    var10 = var10.jjKYpu;
                    var10 = var13.bind(var16)(var10);
                    var1.label = var10;
                    var10 = _closure1_slot42;
                    var13 = var10.AUTO;
                    var1.value = var13;
                    var9 = var12.bind(var5)(var9, var1);
                    var1 = new Array(2);
                    var1[0] = var9;
                    var9 = _closure1_slot50;
                    var7 = var11[var7];
                    var7 = var14.bind(var5)(var7);
                    var8 = var7.TableRadioRow;
                    var7 = {};
                    var12 = var11[var15];
                    var12 = var14.bind(var5)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var11[var15];
                    var11 = var14.bind(var5)(var11);
                    var11 = var11.t;
                    var11 = var11["7jOoJE"];
                    var11 = var12.bind(var13)(var11);
                    var7.label = var11;
                    var10 = var10.FULL;
                    var7.value = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var1[1] = var7;
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
            _fun109609: for (var _fun109609_ip = 0;;) switch (_fun109609_ip) {
                case 0:
                    var16 = this;
                    var1 = _closure1_slot55;
                    var0 = var16.context;
                    var6 = undefined;
                    var21 = var1.bind(var6)(var0);
                    var0 = var16.props;
                    var19 = var0.channel;
                    var0 = var0.canManageChannels;
                    var1 = var16.showVoiceSettings;
                    var1 = var1.bind(var16)();
                    if (!var1) {
                        _fun109609_ip = 54;
                        continue _fun109609
                    }
                case 51:
                    if (var0) {
                        _fun109609_ip = 58;
                        continue _fun109609
                    }
                case 54:
                    var0 = null;
                    return var0;
                case 58:
                    var0 = new Array(0);
                    var20 = global;
                    var3 = var20.Math;
                    var2 = var3.round;
                    var1 = var19.userLimit;
                    var5 = var2.bind(var3)(var1);
                    var18 = 0;
                    if (!(var18 !== var5)) {
                        _fun109609_ip = 159;
                        continue _fun109609
                    }
                case 92:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 50;
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
                    var25 = var3.bind(var4)(var2, var1);
                    _fun109609_ip = 216;
                    continue _fun109609;
                case 159:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 50;
                    var2 = var5[var1];
                    var2 = var4.bind(var6)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var5[var1];
                    var1 = var4.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1.XX5ciX;
                    var25 = var2.bind(var3)(var1);
                case 216:
                    var1 = var19.isGuildStageVoice;
                    var1 = var1.bind(var19)();
                    if (var1) {
                        _fun109609_ip = 235;
                        continue _fun109609
                    }
                case 229:
                    var17 = _closure1_slot37;
                    _fun109609_ip = 239;
                    continue _fun109609;
                case 235:
                    var17 = _closure1_slot38;
                case 239:
                    var2 = var0.push;
                    var5 = _closure1_slot50;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 71;
                    var1 = var4[var1];
                    var1 = var3.bind(var6)(var1);
                    var4 = var1.TableRowGroup;
                    var3 = {};
                    var1 = var19.isGuildStageVoice;
                    var1 = var1.bind(var19)();
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var26 = 50;
                    var9 = var7[var26];
                    var9 = var8.bind(var6)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var7[var26];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.t;
                    if (var1) {
                        _fun109609_ip = 351;
                        continue _fun109609
                    }
                case 333:
                    var8 = var7["8yb3JT"];
                    var1 = {};
                    var1 = var9.bind(var10)(var8, var1);
                    _fun109609_ip = 367;
                    continue _fun109609;
                case 351:
                    var8 = var7.OqZI8D;
                    var7 = {};
                    var1 = var9.bind(var10)(var8, var7);
                case 367:
                    var3.description = var1;
                    var8 = _closure1_slot51;
                    var14 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var1 = 78;
                    var1 = var22[var1];
                    var1 = var14.bind(var6)(var1);
                    var7 = var1.Card;
                    var1 = {};
                    var11 = _closure1_slot51;
                    var10 = _closure1_slot10;
                    var9 = {};
                    var12 = {
                        'flexDirection': 'row',
                        'justifyContent': 'space-between',
                        'alignItems': 'center'
                    };
                    var9.style = var12;
                    var24 = _closure1_slot50;
                    var15 = 57;
                    var12 = var22[var15];
                    var12 = var14.bind(var6)(var12);
                    var23 = var12.Text;
                    var12 = {
                        'variant': 'text-md/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var27 = var22[var26];
                    var27 = var14.bind(var6)(var27);
                    var28 = var27.intl;
                    var27 = var28.string;
                    var26 = var22[var26];
                    var26 = var14.bind(var6)(var26);
                    var26 = var26.t;
                    var26 = var26["/AoSGN"];
                    var26 = var27.bind(var28)(var26);
                    var12.children = var26;
                    var23 = var24.bind(var6)(var23, var12);
                    var12 = new Array(2);
                    var12[0] = var23;
                    var24 = _closure1_slot50;
                    var15 = var22[var15];
                    var15 = var14.bind(var6)(var15);
                    var23 = var15.Text;
                    var15 = {
                        'variant': 'text-md/medium',
                        'color': 'text-muted'
                    };
                    var15.children = var25;
                    var15 = var24.bind(var6)(var23, var15);
                    var12[1] = var15;
                    var9.children = var12;
                    var10 = var11.bind(var6)(var10, var9);
                    var9 = new Array(2);
                    var9[0] = var10;
                    var12 = _closure1_slot50;
                    var11 = _closure1_slot10;
                    var10 = {};
                    var15 = var21.sliderWrapper;
                    var10.style = var15;
                    var15 = _closure1_slot50;
                    var13 = 79;
                    var13 = var22[var13];
                    var13 = var14.bind(var6)(var13);
                    var14 = var13.Slider;
                    var13 = {};
                    var21 = var21.slider;
                    var13.style = var21;
                    var21 = var20.Math;
                    var20 = var21.min;
                    var19 = var19.userLimit;
                    var19 = var20.bind(var21)(var19, var17);
                    var13.value = var19;
                    var13.minimumValue = var18;
                    var13.maximumValue = var17;
                    var16 = var16.handleUserLimitChange;
                    var13.onValueChange = var16;
                    var13 = var15.bind(var6)(var14, var13);
                    var10.children = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    var9[1] = var10;
                    var1.children = var9;
                    var1 = var8.bind(var6)(var7, var1);
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
            _fun109610: for (var _fun109610_ip = 0;;) switch (_fun109610_ip) {
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
                        _fun109610_ip = 526;
                        continue _fun109610
                    }
                case 49:
                    var1 = var3.showVoiceSettings;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun109610_ip = 524;
                        continue _fun109610
                    }
                case 65:
                    if (!var11) {
                        _fun109610_ip = 524;
                        continue _fun109610
                    }
                case 71:
                    var1 = var2.isGuildStageVoice;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun109610_ip = 524;
                        continue _fun109610
                    }
                case 87:
                    var12 = var0 == var4;
                    if (var12) {
                        _fun109610_ip = 105;
                        continue _fun109610
                    }
                case 94:
                    var2 = var4.length;
                    var1 = 0;
                    var12 = var1 === var2;
                case 105:
                    var2 = var0 != var4;
                    var1 = null;
                    if (!var2) {
                        _fun109610_ip = 131;
                        continue _fun109610
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
                        _fun109610_ip = 197;
                        continue _fun109610
                    }
                case 135:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 50;
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
                    _fun109610_ip = 202;
                    continue _fun109610;
                case 197:
                    var16 = var1.name;
                case 202:
                    var1 = new Array(0);
                    var3 = var1.push;
                    var7 = _closure1_slot50;
                    var14 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var2 = 71;
                    var2 = var17[var2];
                    var6 = undefined;
                    var2 = var14.bind(var6)(var2);
                    var5 = var2.TableRowGroup;
                    var4 = {};
                    var18 = 50;
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
                    var2 = var17[var18];
                    var2 = var14.bind(var6)(var2);
                    var9 = var2.intl;
                    var8 = var9.string;
                    var2 = var17[var18];
                    var2 = var14.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2["dbTs+z"];
                    var2 = var8.bind(var9)(var2);
                    var4.description = var2;
                    var9 = _closure1_slot50;
                    var13 = 86;
                    var2 = var17[var13];
                    var2 = var14.bind(var6)(var2);
                    var8 = var2.TableRow;
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
                    var15 = _closure1_slot50;
                    var13 = var17[var13];
                    var13 = var14.bind(var6)(var13);
                    var13 = var13.TableRow;
                    var14 = var13.TrailingText;
                    var13 = {};
                    var13.text = var16;
                    var13 = var15.bind(var6)(var14, var13);
                    var2.trailing = var13;
                    var13 = true;
                    var2.arrow = var13;
                    var11 = !var11;
                    if (var11) {
                        _fun109610_ip = 479;
                        continue _fun109610
                    }
                case 476:
                    var11 = var12;
                case 479:
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
                case 524:
                    return var0;
                case 526:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'showVoiceSettings';
        var4.key = var6;
        var6 = function() {
            _fun109613: for (var _fun109613_ip = 0;;) switch (_fun109613_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var5 = var0.channel;
                    var2 = null;
                    var0 = var2 != var5;
                    if (!var0) {
                        _fun109613_ip = 31;
                        continue _fun109613
                    }
                case 22:
                    var1 = var5.guild_id;
                    var0 = var2 != var1;
                case 31:
                    if (!var0) {
                        _fun109613_ip = 56;
                        continue _fun109613
                    }
                case 34:
                    var3 = _closure1_slot12;
                    var2 = var3.has;
                    var1 = var5.type;
                    var0 = var2.bind(var3)(var1);
                case 56:
                    if (!var0) {
                        _fun109613_ip = 143;
                        continue _fun109613
                    }
                case 59:
                    var1 = var5.isGuildVocal;
                    var1 = var1.bind(var5)();
                    if (var1) {
                        _fun109613_ip = 140;
                        continue _fun109613
                    }
                case 72:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 87;
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
            _fun109614: for (var _fun109614_ip = 0;;) switch (_fun109614_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var1 = var0.canManageRoles;
                    var13 = var0.channel;
                    var0 = null;
                    if (!var1) {
                        _fun109614_ip = 454;
                        continue _fun109614
                    }
                case 33:
                    var4 = _closure1_slot51;
                    var10 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 88;
                    var1 = var14[var1];
                    var3 = undefined;
                    var1 = var10.bind(var3)(var1);
                    var2 = var1.Stack;
                    var1 = {};
                    var7 = _closure1_slot1;
                    var5 = 29;
                    var5 = var14[var5];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.spacing;
                    var5 = var5.PX_8;
                    var1.spacing = var5;
                    var8 = _closure1_slot50;
                    var5 = 71;
                    var5 = var14[var5];
                    var5 = var10.bind(var3)(var5);
                    var7 = var5.TableRowGroup;
                    var5 = {};
                    var11 = _closure1_slot50;
                    var9 = 86;
                    var9 = var14[var9];
                    var9 = var10.bind(var3)(var9);
                    var10 = var9.TableRow;
                    var9 = {};
                    var14 = var13.type;
                    var13 = _closure1_slot31;
                    var13 = var13.GUILD_CATEGORY;
                    if (!(var14 !== var13)) {
                        _fun109614_ip = 227;
                        continue _fun109614
                    }
                case 168:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 50;
                    var14 = var17[var13];
                    var14 = var16.bind(var3)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.BAZMBn;
                    var13 = var14.bind(var15)(var13);
                    _fun109614_ip = 284;
                    continue _fun109614;
                case 227:
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 50;
                    var15 = var18[var14];
                    var15 = var17.bind(var3)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var18[var14];
                    var14 = var17.bind(var3)(var14);
                    var14 = var14.t;
                    var14 = var14.PgkvDf;
                    var13 = var15.bind(var16)(var14);
                case 284:
                    var9.label = var13;
                    var13 = true;
                    var9.arrow = var13;
                    var13 = _closure1_slot56;
                    var9.icon = var13;
                    var12 = function() {
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
                    var9.onPress = var12;
                    var9 = var11.bind(var3)(var10, var9);
                    var5.children = var9;
                    var7 = var8.bind(var3)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot50;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var6 = 57;
                    var6 = var13[var6];
                    var6 = var12.bind(var3)(var6);
                    var7 = var6.Text;
                    var6 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var9 = 50;
                    var10 = var13[var9];
                    var10 = var12.bind(var3)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var3)(var9);
                    var9 = var9.t;
                    var9 = var9.UAoMCL;
                    var9 = var10.bind(var11)(var9);
                    var6.children = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 454:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'renderSettingsSection';
        var4.key = var6;
        var6 = function arg0() {
            _fun109616: for (var _fun109616_ip = 0;;) switch (_fun109616_ip) {
                case 0:
                    var5 = arg0;
                    var1 = var5.length;
                    var0 = 0;
                    var1 = var1 > var0;
                    var0 = null;
                    if (!var1) {
                        _fun109616_ip = 66;
                        continue _fun109616
                    }
                case 19:
                    var4 = _closure1_slot50;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 71;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 66:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'renderCommonSettingsSection';
        var4.key = var6;
        var6 = function() {
            _fun109617: for (var _fun109617_ip = 0;;) switch (_fun109617_ip) {
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
                        _fun109617_ip = 65;
                        continue _fun109617
                    }
                case 55:
                    var6 = var5.isGuildStageVoice;
                    var4 = var6.bind(var5)();
                case 65:
                    if (!var4) {
                        _fun109617_ip = 203;
                        continue _fun109617
                    }
                case 71:
                    var6 = var1.push;
                    var11 = _closure1_slot50;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 86;
                    var4 = var15[var4];
                    var4 = var14.bind(var7)(var4);
                    var10 = var4.TableRow;
                    var9 = {};
                    var4 = 50;
                    var12 = var15[var4];
                    var12 = var14.bind(var7)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var4 = var15[var4];
                    var4 = var14.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.h850Ss;
                    var4 = var12.bind(var13)(var4);
                    var9.label = var4;
                    var4 = true;
                    var9.arrow = var4;
                    var4 = _closure1_slot57;
                    var9.icon = var4;
                    var4 = function() {
                        _fun109618: for (var _fun109618_ip = 0;;) switch (_fun109618_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var0 = var2.isThread;
                                var0 = var0.bind(var2)();
                                if (var0) {
                                    _fun109618_ip = 50;
                                    continue _fun109618
                                }
                            case 23:
                                var4 = _closure3_slot0;
                                var3 = var4.pushScreen;
                                var0 = _closure1_slot30;
                                var0 = var0.NOTIFICATIONS;
                                var0 = var3.bind(var4)(var0);
                                _fun109618_ip = 87;
                                continue _fun109618;
                            case 50:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 89;
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
                case 203:
                    var6 = _closure1_slot13;
                    var4 = var5.type;
                    var4 = var6.bind(var7)(var4);
                    if (!var4) {
                        _fun109617_ip = 391;
                        continue _fun109617
                    }
                case 223:
                    var6 = var1.push;
                    var11 = _closure1_slot50;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var4 = 86;
                    var4 = var15[var4];
                    var4 = var14.bind(var7)(var4);
                    var10 = var4.TableRow;
                    var9 = {};
                    var4 = 50;
                    var12 = var15[var4];
                    var12 = var14.bind(var7)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var4 = var15[var4];
                    var4 = var14.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4["mp1N/2"];
                    var4 = var12.bind(var13)(var4);
                    var9.label = var4;
                    var4 = true;
                    var9.arrow = var4;
                    var13 = _closure1_slot50;
                    var12 = _closure1_slot73;
                    var4 = {};
                    var14 = var5.id;
                    var4.channelId = var14;
                    var4 = var13.bind(var7)(var12, var4);
                    var9.icon = var4;
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
                case 391:
                    if (!var3) {
                        _fun109617_ip = 413;
                        continue _fun109617
                    }
                case 394:
                    var6 = var5.type;
                    var4 = _closure1_slot31;
                    var4 = var4.GUILD_CATEGORY;
                    var3 = var6 !== var4;
                case 413:
                    if (!var3) {
                        _fun109617_ip = 429;
                        continue _fun109617
                    }
                case 416:
                    var4 = var5.isThread;
                    var4 = var4.bind(var5)();
                    var3 = !var4;
                case 429:
                    if (!var3) {
                        _fun109617_ip = 567;
                        continue _fun109617
                    }
                case 435:
                    var3 = var1.push;
                    var6 = _closure1_slot50;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 86;
                    var4 = var13[var4];
                    var4 = var12.bind(var7)(var4);
                    var5 = var4.TableRow;
                    var4 = {};
                    var9 = 50;
                    var10 = var13[var9];
                    var10 = var12.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var7)(var9);
                    var9 = var9.t;
                    var9 = var9.ngRFjZ;
                    var9 = var10.bind(var11)(var9);
                    var4.label = var9;
                    var9 = true;
                    var4.arrow = var9;
                    var8 = _closure1_slot58;
                    var4.icon = var8;
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
                case 567:
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
            _fun109621: for (var _fun109621_ip = 0;;) switch (_fun109621_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = var0.props;
                    var9 = var0.channel;
                    var0 = var9.isForumChannel;
                    var2 = var0.bind(var9)();
                    var0 = null;
                    if (!var2) {
                        _fun109621_ip = 486;
                        continue _fun109621
                    }
                case 37:
                    var5 = _closure1_slot50;
                    var17 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 71;
                    var2 = var15[var2];
                    var4 = undefined;
                    var2 = var17.bind(var4)(var2);
                    var3 = var2.TableRowGroup;
                    var2 = {};
                    var20 = 50;
                    var6 = var15[var20];
                    var6 = var17.bind(var4)(var6);
                    var8 = var6.intl;
                    var7 = var8.string;
                    var6 = var15[var20];
                    var6 = var17.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.mOSViT;
                    var6 = var7.bind(var8)(var6);
                    var2.description = var6;
                    var8 = _closure1_slot50;
                    var11 = 86;
                    var6 = var15[var11];
                    var6 = var17.bind(var4)(var6);
                    var7 = var6.TableRow;
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
                    var14 = _closure1_slot50;
                    var11 = var15[var11];
                    var11 = var17.bind(var4)(var11);
                    var11 = var11.TableRow;
                    var12 = var11.TrailingText;
                    var11 = {};
                    var16 = var9.defaultForumLayout;
                    var13 = 90;
                    var15 = var15[var13];
                    var15 = var17.bind(var4)(var15);
                    var15 = var15.ForumLayout;
                    var15 = var15.GRID;
                    if (!(var16 !== var15)) {
                        _fun109621_ip = 316;
                        continue _fun109621
                    }
                case 260:
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
                    _fun109621_ip = 370;
                    continue _fun109621;
                case 316:
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
                case 370:
                    var11.text = var15;
                    var11 = var14.bind(var4)(var12, var11);
                    var6.trailing = var11;
                    var11 = true;
                    var6.arrow = var11;
                    var11 = var9.defaultForumLayout;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var13];
                    var9 = var12.bind(var4)(var9);
                    var9 = var9.ForumLayout;
                    var9 = var9.GRID;
                    if (!(var11 !== var9)) {
                        _fun109621_ip = 437;
                        continue _fun109621
                    }
                case 431:
                    var9 = _closure1_slot60;
                    _fun109621_ip = 441;
                    continue _fun109621;
                case 437:
                    var9 = _closure1_slot59;
                case 441:
                    var6.icon = var9;
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
                case 486:
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'renderUncommonSettingsSection';
        var4.key = var6;
        var6 = function() {
            _fun109623: for (var _fun109623_ip = 0;;) switch (_fun109623_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = var2.props;
                    var4 = var1.canManageWebhooks;
                    var7 = undefined;
                    var3 = var7 !== var4;
                    if (!var3) {
                        _fun109623_ip = 32;
                        continue _fun109623
                    }
                case 29:
                    var3 = var4;
                case 32:
                    var _closure3_slot1 = var3;
                    var5 = var1.channel;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 91;
                    var1 = var6[var1];
                    var4 = var4.bind(var7)(var1);
                    var1 = var4.canUnlinkLobbyChannel;
                    var4 = var1.bind(var4)(var5);
                    var _closure3_slot2 = var4;
                    var1 = new Array(0);
                    if (var3) {
                        _fun109623_ip = 89;
                        continue _fun109623
                    }
                case 86:
                    var3 = var4;
                case 89:
                    if (!var3) {
                        _fun109623_ip = 227;
                        continue _fun109623
                    }
                case 95:
                    var3 = var1.push;
                    var6 = _closure1_slot50;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var4 = 86;
                    var4 = var13[var4];
                    var4 = var12.bind(var7)(var4);
                    var5 = var4.TableRow;
                    var4 = {};
                    var9 = 50;
                    var10 = var13[var9];
                    var10 = var12.bind(var7)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var7)(var9);
                    var9 = var9.t;
                    var9 = var9.CIsNZw;
                    var9 = var10.bind(var11)(var9);
                    var4.label = var9;
                    var9 = true;
                    var4.arrow = var9;
                    var8 = _closure1_slot61;
                    var4.icon = var8;
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
                case 227:
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
            _fun109625: for (var _fun109625_ip = 0;;) switch (_fun109625_ip) {
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
                    var3 = _closure1_slot51;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 71;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRowGroup;
                    var0 = {};
                    var7 = null;
                    var5 = null;
                    if (var4) {
                        _fun109625_ip = 228;
                        continue _fun109625
                    }
                case 96:
                    var15 = _closure1_slot50;
                    var14 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 86;
                    var4 = var16[var4];
                    var4 = var14.bind(var2)(var4);
                    var14 = var4.TableRow;
                    var4 = {};
                    var16 = _closure1_slot62;
                    var4.icon = var16;
                    var17 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var16 = 50;
                    var18 = var20[var16];
                    var18 = var17.bind(var2)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var16 = var20[var16];
                    var16 = var17.bind(var2)(var16);
                    var17 = var16.t;
                    if (var11) {
                        _fun109625_ip = 196;
                        continue _fun109625
                    }
                case 183:
                    var16 = var17["10kukS"];
                    var16 = var18.bind(var19)(var16);
                    _fun109625_ip = 207;
                    continue _fun109625;
                case 196:
                    var17 = var17.ihLPiO;
                    var16 = var18.bind(var19)(var17);
                case 207:
                    var4.label = var16;
                    var16 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 92;
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
                case 228:
                    var4 = new Array(6);
                    var4[0] = var5;
                    var5 = var10.threadMetadata;
                    var14 = var7 == var5;
                    var15 = undefined;
                    if (var14) {
                        _fun109625_ip = 257;
                        continue _fun109625
                    }
                case 251:
                    var15 = var5.archived;
                case 257:
                    var14 = true;
                    var5 = null;
                    if (!(var14 === var15)) {
                        _fun109625_ip = 408;
                        continue _fun109625
                    }
                case 268:
                    var5 = null;
                    if (!var13) {
                        _fun109625_ip = 408;
                        continue _fun109625
                    }
                case 276:
                    var16 = _closure1_slot50;
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = 86;
                    var13 = var17[var13];
                    var13 = var15.bind(var2)(var13);
                    var15 = var13.TableRow;
                    var13 = {};
                    var17 = _closure1_slot63;
                    var13.icon = var17;
                    var18 = _closure1_slot0;
                    var21 = _closure1_slot2;
                    var17 = 50;
                    var19 = var21[var17];
                    var19 = var18.bind(var2)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var17 = var21[var17];
                    var17 = var18.bind(var2)(var17);
                    var18 = var17.t;
                    if (var11) {
                        _fun109625_ip = 376;
                        continue _fun109625
                    }
                case 363:
                    var17 = var18.S9E4G7;
                    var17 = var19.bind(var20)(var17);
                    _fun109625_ip = 387;
                    continue _fun109625;
                case 376:
                    var18 = var18.cnRubV;
                    var17 = var19.bind(var20)(var18);
                case 387:
                    var13.label = var17;
                    var17 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 92;
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
                case 408:
                    var4[1] = var5;
                    var5 = var10.threadMetadata;
                    var15 = var7 == var5;
                    var13 = undefined;
                    if (var15) {
                        _fun109625_ip = 433;
                        continue _fun109625
                    }
                case 427:
                    var13 = var5.archived;
                case 433:
                    var5 = null;
                    if (!(var14 !== var13)) {
                        _fun109625_ip = 582;
                        continue _fun109625
                    }
                case 442:
                    var5 = null;
                    if (!var12) {
                        _fun109625_ip = 582;
                        continue _fun109625
                    }
                case 450:
                    var14 = _closure1_slot50;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 86;
                    var12 = var15[var12];
                    var12 = var13.bind(var2)(var12);
                    var13 = var12.TableRow;
                    var12 = {};
                    var15 = _closure1_slot64;
                    var12.icon = var15;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 50;
                    var17 = var19[var15];
                    var17 = var16.bind(var2)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var19[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.t;
                    if (var11) {
                        _fun109625_ip = 550;
                        continue _fun109625
                    }
                case 537:
                    var15 = var16.wiIevd;
                    var15 = var17.bind(var18)(var15);
                    _fun109625_ip = 561;
                    continue _fun109625;
                case 550:
                    var16 = var16.BTs4Kb;
                    var15 = var17.bind(var18)(var16);
                case 561:
                    var12.label = var15;
                    var15 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 92;
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
                case 582:
                    var4[2] = var5;
                    var5 = null;
                    if (!var6) {
                        _fun109625_ip = 744;
                        continue _fun109625
                    }
                case 594:
                    var12 = var10.isLockedThread;
                    var12 = var12.bind(var10)();
                    var5 = null;
                    if (!var12) {
                        _fun109625_ip = 744;
                        continue _fun109625
                    }
                case 612:
                    var14 = _closure1_slot50;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 86;
                    var12 = var15[var12];
                    var12 = var13.bind(var2)(var12);
                    var13 = var12.TableRow;
                    var12 = {};
                    var15 = _closure1_slot65;
                    var12.icon = var15;
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 50;
                    var17 = var19[var15];
                    var17 = var16.bind(var2)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var15 = var19[var15];
                    var15 = var16.bind(var2)(var15);
                    var16 = var15.t;
                    if (var11) {
                        _fun109625_ip = 712;
                        continue _fun109625
                    }
                case 699:
                    var15 = var16["jeyb/W"];
                    var15 = var17.bind(var18)(var15);
                    _fun109625_ip = 723;
                    continue _fun109625;
                case 712:
                    var16 = var16["/OKSxp"];
                    var15 = var17.bind(var18)(var16);
                case 723:
                    var12.label = var15;
                    var15 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 92;
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
                case 744:
                    var4[3] = var5;
                    var5 = null;
                    if (!var6) {
                        _fun109625_ip = 906;
                        continue _fun109625
                    }
                case 756:
                    var6 = var10.isLockedThread;
                    var6 = var6.bind(var10)();
                    var5 = null;
                    if (var6) {
                        _fun109625_ip = 906;
                        continue _fun109625
                    }
                case 774:
                    var10 = _closure1_slot50;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 86;
                    var6 = var12[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.TableRow;
                    var6 = {};
                    var12 = _closure1_slot66;
                    var6.icon = var12;
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var12 = 50;
                    var13 = var16[var12];
                    var13 = var15.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var16[var12];
                    var12 = var15.bind(var2)(var12);
                    var12 = var12.t;
                    if (var11) {
                        _fun109625_ip = 874;
                        continue _fun109625
                    }
                case 861:
                    var11 = var12.HoCqm8;
                    var11 = var13.bind(var14)(var11);
                    _fun109625_ip = 885;
                    continue _fun109625;
                case 874:
                    var12 = var12["Ur/0Na"];
                    var11 = var13.bind(var14)(var12);
                case 885:
                    var6.label = var11;
                    var11 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 92;
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
                case 906:
                    var4[4] = var5;
                    var7 = _closure1_slot50;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 86;
                    var5 = var13[var5];
                    var5 = var12.bind(var2)(var5);
                    var6 = var5.TableRow;
                    var5 = {};
                    var9 = _closure1_slot67;
                    var5.icon = var9;
                    var9 = 50;
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
                        var0 = 93;
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
            _fun109632: for (var _fun109632_ip = 0;;) switch (_fun109632_ip) {
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
                        _fun109632_ip = 59;
                        continue _fun109632
                    }
                case 56:
                    var1 = var0;
                case 59:
                    var0 = null;
                    if (!var1) {
                        _fun109632_ip = 570;
                        continue _fun109632
                    }
                case 67:
                    var3 = var2.type;
                    var1 = _closure1_slot31;
                    var1 = var1.GUILD_CATEGORY;
                    if (!(var3 !== var1)) {
                        _fun109632_ip = 239;
                        continue _fun109632
                    }
                case 92:
                    if (var13) {
                        _fun109632_ip = 180;
                        continue _fun109632
                    }
                case 95:
                    var1 = var2.isThread;
                    var4 = var1.bind(var2)();
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 50;
                    var2 = var10[var1];
                    var7 = undefined;
                    var2 = var8.bind(var7)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var10[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    if (var4) {
                        _fun109632_ip = 167;
                        continue _fun109632
                    }
                case 154:
                    var4 = var1["8D8Rsb"];
                    var10 = var2.bind(var3)(var4);
                    _fun109632_ip = 178;
                    continue _fun109632;
                case 167:
                    var1 = var1.H7vTe2;
                    var10 = var2.bind(var3)(var1);
                case 178:
                    _fun109632_ip = 237;
                    continue _fun109632;
                case 180:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 50;
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
                    _fun109632_ip = 298;
                    continue _fun109632;
                case 239:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 50;
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
                    var4 = _closure1_slot51;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 71;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var6 = null;
                    if (!var5) {
                        _fun109632_ip = 480;
                        continue _fun109632
                    }
                case 340:
                    var8 = _closure1_slot50;
                    var7 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var5 = 86;
                    var5 = var14[var5];
                    var5 = var7.bind(var3)(var5);
                    var7 = var5.TableRow;
                    var5 = {};
                    var14 = 'danger';
                    var5.variant = var14;
                    var14 = _closure1_slot68;
                    var5.icon = var14;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var14 = 50;
                    var15 = var18[var14];
                    var15 = var17.bind(var3)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var18[var14];
                    var14 = var17.bind(var3)(var14);
                    var14 = var14.t;
                    if (var13) {
                        _fun109632_ip = 448;
                        continue _fun109632
                    }
                case 435:
                    var13 = var14["fa/84m"];
                    var13 = var15.bind(var16)(var13);
                    _fun109632_ip = 459;
                    continue _fun109632;
                case 448:
                    var14 = var14["2LsZdT"];
                    var13 = var15.bind(var16)(var14);
                case 459:
                    var5.label = var13;
                    var12 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 92;
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
                case 480:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var8 = _closure1_slot50;
                    var7 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 86;
                    var6 = var12[var6];
                    var6 = var7.bind(var3)(var6);
                    var7 = var6.TableRow;
                    var6 = {};
                    var12 = 'danger';
                    var6.variant = var12;
                    var11 = _closure1_slot69;
                    var6.icon = var11;
                    var6.label = var10;
                    var9 = var9.handleDeleteChannel;
                    var6.onPress = var9;
                    var6 = var8.bind(var3)(var7, var6);
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 570:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'renderForumTags';
        var4.key = var6;
        var6 = function() {
            _fun109634: for (var _fun109634_ip = 0;;) switch (_fun109634_ip) {
                case 0:
                    var11 = this;
                    var _closure3_slot0 = var11;
                    var1 = _closure1_slot55;
                    var0 = var11.context;
                    var3 = undefined;
                    var22 = var1.bind(var3)(var0);
                    var0 = var11.props;
                    var14 = var0.channel;
                    var13 = var0.canManageChannels;
                    var _closure3_slot1 = var13;
                    var0 = var14.isForumLikeChannel;
                    var0 = var0.bind(var14)();
                    var6 = null;
                    if (var0) {
                        _fun109634_ip = 65;
                        continue _fun109634
                    }
                case 63:
                    return var6;
                case 65:
                    var2 = var14.availableTags;
                    var0 = var6 == var2;
                    var15 = undefined;
                    if (var0) {
                        _fun109634_ip = 98;
                        continue _fun109634
                    }
                case 80:
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var23
                        var0 = arg0;
                        var0 = var0.moderated;
                        return var0;
                    };
                    var15 = var1.bind(var2)(var0);
                case 98:
                    var29 = var13;
                    if (!var29) {
                        _fun109634_ip = 123;
                        continue _fun109634
                    }
                case 104:
                    var0 = var14.availableTags;
                    var1 = var0.length;
                    var0 = _closure1_slot48;
                    var29 = var1 < var0;
                case 123:
                    var0 = var14.availableTags;
                    var0 = var0.length;
                    var8 = 0;
                    var9 = var0 > var8;
                    var1 = var11.getError;
                    var0 = 'available_tags';
                    var10 = var1.bind(var11)(var0);
                    var2 = _closure1_slot51;
                    var21 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var0 = 88;
                    var0 = var17[var0];
                    var0 = var21.bind(var3)(var0);
                    var1 = var0.Stack;
                    var0 = {};
                    var5 = _closure1_slot1;
                    var41 = 29;
                    var4 = var17[var41];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.spacing;
                    var4 = var4.PX_12;
                    var0.spacing = var4;
                    var16 = _closure1_slot50;
                    var5 = 71;
                    var4 = var17[var5];
                    var4 = var21.bind(var3)(var4);
                    var7 = var4.TableRowGroup;
                    var4 = {};
                    var18 = 50;
                    var19 = var17[var18];
                    var19 = var21.bind(var3)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var17 = var17[var18];
                    var17 = var21.bind(var3)(var17);
                    var17 = var17.t;
                    var17 = var17["P/y+sj"];
                    var17 = var19.bind(var20)(var17);
                    var4.title = var17;
                    var17 = undefined;
                    if (var9) {
                        _fun109634_ip = 352;
                        continue _fun109634
                    }
                case 300:
                    var24 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var20 = var19[var18];
                    var20 = var24.bind(var3)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var19[var18];
                    var19 = var24.bind(var3)(var19);
                    var19 = var19.t;
                    var19 = var19["3v8kZH"];
                    var17 = var20.bind(var21)(var19);
                case 352:
                    var4.description = var17;
                    var20 = _closure1_slot50;
                    var19 = _closure1_slot10;
                    var17 = {};
                    var21 = var22.tagsWrapper;
                    var17.style = var21;
                    var21 = null;
                    if (!var9) {
                        _fun109634_ip = 648;
                        continue _fun109634
                    }
                case 384:
                    var26 = _closure1_slot51;
                    var25 = _closure1_slot52;
                    var24 = {};
                    var30 = var14.availableTags;
                    var28 = var30.map;
                    var27 = function(arg0) { // Environment: var23
                        var0 = arg0;
                        var4 = _closure1_slot50;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 94;
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
                    var28 = var28.bind(var30)(var27);
                    var27 = new Array(2);
                    var27[0] = var28;
                    var28 = null;
                    if (!var29) {
                        _fun109634_ip = 634;
                        continue _fun109634
                    }
                case 433:
                    var31 = _closure1_slot50;
                    var30 = _closure1_slot10;
                    var29 = {};
                    var32 = var22.addTagIconButtonWrapper;
                    var29.style = var32;
                    var34 = _closure1_slot50;
                    var38 = _closure1_slot0;
                    var35 = _closure1_slot2;
                    var32 = 95;
                    var32 = var35[var32];
                    var32 = var38.bind(var3)(var32);
                    var33 = var32.IconButton;
                    var32 = {};
                    var40 = _closure1_slot50;
                    var36 = 96;
                    var36 = var35[var36];
                    var36 = var38.bind(var3)(var36);
                    var39 = var36.PlusSmallIcon;
                    var37 = {};
                    var36 = 'sm';
                    var37.size = var36;
                    var42 = _closure1_slot1;
                    var41 = var35[var41];
                    var41 = var42.bind(var3)(var41);
                    var41 = var41.colors;
                    var41 = var41.WHITE;
                    var37.color = var41;
                    var37 = var40.bind(var3)(var39, var37);
                    var32.icon = var37;
                    var32.size = var36;
                    var36 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePressTag;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var32.onPress = var36;
                    var36 = var35[var18];
                    var36 = var38.bind(var3)(var36);
                    var37 = var36.intl;
                    var36 = var37.string;
                    var35 = var35[var18];
                    var35 = var38.bind(var3)(var35);
                    var35 = var35.t;
                    var35 = var35["/jubeD"];
                    var35 = var36.bind(var37)(var35);
                    var32.accessibilityLabel = var35;
                    var32 = var34.bind(var3)(var33, var32);
                    var29.children = var32;
                    var28 = var31.bind(var3)(var30, var29);
                case 634:
                    var27[1] = var28;
                    var24.children = var27;
                    var21 = var26.bind(var3)(var25, var24);
                case 648:
                    var17.children = var21;
                    var17 = var20.bind(var3)(var19, var17);
                    var4.children = var17;
                    var7 = var16.bind(var3)(var7, var4);
                    var4 = new Array(4);
                    var4[0] = var7;
                    var7 = null;
                    if (var9) {
                        _fun109634_ip = 867;
                        continue _fun109634
                    }
                case 684:
                    var17 = _closure1_slot50;
                    var20 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var19 = 97;
                    var9 = var21[var19];
                    var16 = var20.bind(var3)(var9);
                    var9 = {};
                    var24 = !var13;
                    var9.disabled = var24;
                    var23 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePressTag;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var9.onPress = var23;
                    var23 = var22.createTagButton;
                    var9.style = var23;
                    var22 = var22.createTagButtonText;
                    var9.textStyle = var22;
                    var25 = _closure1_slot0;
                    var22 = var21[var18];
                    var22 = var25.bind(var3)(var22);
                    var24 = var22.intl;
                    var23 = var24.string;
                    var22 = var21[var18];
                    var22 = var25.bind(var3)(var22);
                    var22 = var22.t;
                    var22 = var22.F4is7L;
                    var22 = var23.bind(var24)(var22);
                    var9.text = var22;
                    var22 = var21[var19];
                    var22 = var20.bind(var3)(var22);
                    var22 = var22.Looks;
                    var22 = var22.LINK;
                    var9.look = var22;
                    var19 = var21[var19];
                    var19 = var20.bind(var3)(var19);
                    var19 = var19.Sizes;
                    var19 = var19.XSMALL;
                    var9.size = var19;
                    var19 = true;
                    var9.shrink = var19;
                    var7 = var17.bind(var3)(var16, var9);
                case 867:
                    var4[1] = var7;
                    var6 = var6 != var10;
                    if (!var6) {
                        _fun109634_ip = 887;
                        continue _fun109634
                    }
                case 878:
                    var7 = var10.length;
                    var6 = var7 > var8;
                case 887:
                    if (!var6) {
                        _fun109634_ip = 943;
                        continue _fun109634
                    }
                case 890:
                    var9 = _closure1_slot50;
                    var8 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var7 = 57;
                    var7 = var16[var7];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.Text;
                    var7 = {
                        'variant': 'text-sm/normal',
                        'color': 'text-feedback-critical'
                    };
                    var7.children = var10;
                    var6 = var9.bind(var3)(var8, var7);
                case 943:
                    var4[2] = var6;
                    var7 = _closure1_slot50;
                    var9 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var5 = var16[var5];
                    var5 = var9.bind(var3)(var5);
                    var6 = var5.TableRowGroup;
                    var5 = {};
                    var10 = _closure1_slot50;
                    var8 = 72;
                    var8 = var16[var8];
                    var8 = var9.bind(var3)(var8);
                    var9 = var8.TableSwitchRow;
                    var8 = {};
                    var13 = !var13;
                    if (var13) {
                        _fun109634_ip = 1009;
                        continue _fun109634
                    }
                case 1006:
                    var13 = var15;
                case 1009:
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
                    var4[3] = var5;
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
            _fun109639: for (var _fun109639_ip = 0;;) switch (_fun109639_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var11 = var0.channel;
                    var10 = var0.canManageChannels;
                    var0 = var11.isMediaChannel;
                    var1 = var0.bind(var11)();
                    var0 = null;
                    if (!var1) {
                        _fun109639_ip = 264;
                        continue _fun109639
                    }
                case 37:
                    var4 = _closure1_slot50;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var1 = 71;
                    var1 = var15[var1];
                    var3 = undefined;
                    var1 = var14.bind(var3)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var7 = _closure1_slot50;
                    var5 = 72;
                    var5 = var15[var5];
                    var5 = var14.bind(var3)(var5);
                    var6 = var5.TableSwitchRow;
                    var5 = {};
                    var10 = !var10;
                    var5.disabled = var10;
                    var10 = 50;
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
                case 264:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'renderCategory';
        var4.key = var6;
        var6 = function() {
            _fun109640: for (var _fun109640_ip = 0;;) switch (_fun109640_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0.props;
                    var1 = var2.hasCategories;
                    var4 = var2.category;
                    var0 = var2.channel;
                    var9 = var2.canManageParent;
                    if (!var1) {
                        _fun109640_ip = 374;
                        continue _fun109640
                    }
                case 43:
                    var1 = var0.type;
                    var0 = _closure1_slot31;
                    var0 = var0.GUILD_CATEGORY;
                    if (!(var1 !== var0)) {
                        _fun109640_ip = 374;
                        continue _fun109640
                    }
                case 68:
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun109640_ip = 119;
                        continue _fun109640
                    }
                case 74:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 60;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.computeChannelName;
                    var1 = _closure1_slot25;
                    var0 = _closure1_slot24;
                    var12 = var2.bind(var3)(var4, var1, var0);
                    _fun109640_ip = 176;
                    continue _fun109640;
                case 119:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 50;
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
                    var3 = _closure1_slot50;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var0 = 71;
                    var0 = var13[var0];
                    var2 = undefined;
                    var0 = var10.bind(var2)(var0);
                    var1 = var0.TableRowGroup;
                    var0 = {};
                    var6 = _closure1_slot50;
                    var7 = 86;
                    var4 = var13[var7];
                    var4 = var10.bind(var2)(var4);
                    var5 = var4.TableRow;
                    var4 = {};
                    var14 = _closure1_slot70;
                    var4.icon = var14;
                    var14 = 50;
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
                    var11 = _closure1_slot50;
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
                        _fun109640_ip = 352;
                        continue _fun109640
                    }
                case 345:
                    var7 = function() { // Environment: var8
                        var2 = _closure3_slot0;
                        var1 = var2.pushScreen;
                        var0 = _closure1_slot30;
                        var0 = var0.CHANGE_CATEGORY;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                case 352:
                    var4.onPress = var7;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                case 374:
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
            var9 = this;
            var3 = _closure1_slot50;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var0 = 98;
            var0 = var11[var0];
            var2 = undefined;
            var0 = var5.bind(var2)(var0);
            var1 = var0.Form;
            var0 = {};
            var6 = _closure1_slot51;
            var4 = 88;
            var4 = var11[var4];
            var4 = var5.bind(var2)(var4);
            var5 = var4.Stack;
            var4 = {};
            var10 = _closure1_slot1;
            var7 = 29;
            var7 = var11[var7];
            var7 = var10.bind(var2)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_24;
            var4.spacing = var7;
            var7 = {};
            var8 = _closure1_slot44;
            var7.paddingHorizontal = var8;
            var4.style = var7;
            var7 = var9.renderChannelInfo;
            var8 = var7.bind(var9)();
            var7 = new Array(7);
            var7[0] = var8;
            var8 = var9.renderCommonSettingsSection;
            var8 = var8.bind(var9)();
            var7[1] = var8;
            var8 = var9.renderThreadManagementActions;
            var8 = var8.bind(var9)();
            var7[2] = var8;
            var8 = var9.renderSlowmode;
            var8 = var8.bind(var9)();
            var7[3] = var8;
            var8 = var9.renderAutoArchiveDuration;
            var8 = var8.bind(var9)();
            var7[4] = var8;
            var8 = var9.renderInvitable;
            var8 = var8.bind(var9)();
            var7[5] = var8;
            var8 = var9.renderDeleteButton;
            var8 = var8.bind(var9)();
            var7[6] = var8;
            var4.children = var7;
            var4 = var6.bind(var2)(var5, var4);
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
            var9 = this;
            var3 = _closure1_slot50;
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var0 = 98;
            var0 = var11[var0];
            var2 = undefined;
            var0 = var5.bind(var2)(var0);
            var1 = var0.Form;
            var0 = {};
            var6 = _closure1_slot51;
            var4 = 88;
            var4 = var11[var4];
            var4 = var5.bind(var2)(var4);
            var5 = var4.Stack;
            var4 = {};
            var10 = _closure1_slot1;
            var7 = 29;
            var7 = var11[var7];
            var7 = var10.bind(var2)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_24;
            var4.spacing = var7;
            var7 = {};
            var8 = _closure1_slot44;
            var7.paddingHorizontal = var8;
            var4.style = var7;
            var7 = var9.renderChannelInfo;
            var8 = var7.bind(var9)();
            var7 = new Array(19);
            var7[0] = var8;
            var8 = var9.renderForumTags;
            var8 = var8.bind(var9)();
            var7[1] = var8;
            var8 = var9.renderCategory;
            var8 = var8.bind(var9)();
            var7[2] = var8;
            var8 = var9.renderPermissions;
            var8 = var8.bind(var9)();
            var7[3] = var8;
            var8 = var9.renderCommonSettingsSection;
            var8 = var8.bind(var9)();
            var7[4] = var8;
            var8 = var9.renderDefaultForumLayout;
            var8 = var8.bind(var9)();
            var7[5] = var8;
            var8 = var9.renderDefaultSortOrder;
            var8 = var8.bind(var9)();
            var7[6] = var8;
            var8 = var9.renderDefaultTagSetting;
            var8 = var8.bind(var9)();
            var7[7] = var8;
            var8 = var9.renderAnnouncement;
            var8 = var8.bind(var9)();
            var7[8] = var8;
            var8 = var9.renderNsfwConfig;
            var8 = var8.bind(var9)();
            var7[9] = var8;
            var8 = var9.renderSlowmode;
            var8 = var8.bind(var9)();
            var7[10] = var8;
            var8 = var9.renderDefaultAutoArchiveDuration;
            var8 = var8.bind(var9)();
            var7[11] = var8;
            var8 = var9.renderBitrateSettings;
            var8 = var8.bind(var9)();
            var7[12] = var8;
            var8 = var9.renderVideoQualityModeSettings;
            var8 = var8.bind(var9)();
            var7[13] = var8;
            var8 = var9.renderUserLimitSettings;
            var8 = var8.bind(var9)();
            var7[14] = var8;
            var8 = var9.renderRegionOverride;
            var8 = var8.bind(var9)();
            var7[15] = var8;
            var8 = var9.renderUncommonSettingsSection;
            var8 = var8.bind(var9)();
            var7[16] = var8;
            var8 = var9.renderShowMediaDownloadOptions;
            var8 = var8.bind(var9)();
            var7[17] = var8;
            var8 = var9.renderDeleteButton;
            var8 = var8.bind(var9)();
            var7[18] = var8;
            var4.children = var7;
            var4 = var6.bind(var2)(var5, var4);
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
            _fun109644: for (var _fun109644_ip = 0;;) switch (_fun109644_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot55;
                    var1 = var2.context;
                    var3 = undefined;
                    var5 = var4.bind(var3)(var1);
                    var1 = var2.props;
                    var1 = var1.isThread;
                    if (var1) {
                        _fun109644_ip = 50;
                        continue _fun109644
                    }
                case 36:
                    var1 = var2.renderChannelSettings;
                    var4 = var1.bind(var2)();
                    _fun109644_ip = 62;
                    continue _fun109644;
                case 50:
                    var1 = var2.renderThreadSettings;
                    var4 = var1.bind(var2)();
                case 62:
                    var2 = _closure1_slot50;
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
    var _closure1_slot71 = var7;
    var4 = 99;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ThemeContext;
    var7.contextType = var4;
    var4 = 101;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun109645: for (var _fun109645_ip = 0;;) switch (_fun109645_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var16 = var1.autoFocusElement;
                var _closure2_slot1 = var16;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 100;
                var2 = var7[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useNavigation;
                var14 = var2.bind(var3)();
                var _closure2_slot2 = var14;
                var5 = 31;
                var2 = var7[var5];
                var10 = var6.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot18;
                var8 = new Array(1);
                var8[0] = var3;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot18;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var2);
                var _closure2_slot3 = var8;
                var2 = var7[var5];
                var12 = var6.bind(var4)(var2);
                var10 = var12.useStateFromStores;
                var11 = _closure1_slot17;
                var9 = new Array(1);
                var9[0] = var11;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot17;
                    var0 = var1.getChannel;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var15 = var10.bind(var12)(var9, var2);
                var2 = 87;
                var9 = var7[var2];
                var10 = var6.bind(var4)(var9);
                var9 = var10.useIsThreadModerator;
                var13 = var9.bind(var10)(var8);
                var9 = var7[var5];
                var17 = var6.bind(var4)(var9);
                var12 = var17.useStateFromStoresObject;
                var9 = _closure1_slot11;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    _fun109648: for (var _fun109648_ip = 0;;) switch (_fun109648_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var4 = null;
                            var5 = var4 != var1;
                            var3 = undefined;
                            if (!var5) {
                                _fun109648_ip = 47;
                                continue _fun109648
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
                                _fun109648_ip = 92;
                                continue _fun109648
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
                var9 = var12.bind(var17)(var10, var9);
                var10 = var9.isMutedThread;
                var9 = var9.hasJoinedThread;
                var2 = var7[var2];
                var12 = var6.bind(var4)(var2);
                var2 = var12.useCanManageThread;
                var12 = var2.bind(var12)(var8);
                var2 = 73;
                var2 = var7[var2];
                var17 = var6.bind(var4)(var2);
                var2 = var17.useIsChannelContentGated;
                var2 = var2.bind(var17)(var8);
                var _closure2_slot4 = var2;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useStateFromStoresObject;
                var5 = new Array(7);
                var5[0] = var11;
                var11 = _closure1_slot20;
                var5[1] = var11;
                var5[2] = var3;
                var3 = _closure1_slot25;
                var5[3] = var3;
                var3 = _closure1_slot23;
                var5[4] = var3;
                var3 = _closure1_slot19;
                var5[5] = var3;
                var3 = _closure1_slot21;
                var5[6] = var3;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    _fun109649: for (var _fun109649_ip = 0;;) switch (_fun109649_ip) {
                        case 0:
                            var1 = _closure1_slot17;
                            var0 = var1.getProps;
                            var0 = var0.bind(var1)();
                            var2 = var0.submitting;
                            var1 = var0.errors;
                            var0 = _closure2_slot3;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun109649_ip = 525;
                                continue _fun109649
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
                                _fun109649_ip = 257;
                                continue _fun109649
                            }
                        case 238:
                            var10 = _closure2_slot3;
                            var10 = var10.ownerId;
                            var9 = var9.id;
                            var6 = var10 === var9;
                        case 257:
                            var0.isChannelOwner = var6;
                            if (!(var5 == var12)) {
                                _fun109649_ip = 294;
                                continue _fun109649
                            }
                        case 266:
                            var10 = _closure1_slot21;
                            var9 = var10.can;
                            var6 = _closure1_slot39;
                            var6 = var6.MANAGE_CHANNELS;
                            var6 = var9.bind(var10)(var6, var7);
                            _fun109649_ip = 320;
                            continue _fun109649;
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
                                _fun109649_ip = 432;
                                continue _fun109649
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
                            var9 = 87;
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
                                _fun109649_ip = 518;
                                continue _fun109649
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
                var7 = var6.bind(var7)(var5, var2, var3);
                var11 = _closure1_slot9;
                var2 = var11.useRef;
                var5 = null;
                var6 = var2.bind(var11)(var5);
                var _closure2_slot5 = var6;
                var3 = var11.useEffect;
                var2 = new Array(2);
                var2[0] = var16;
                var2[1] = var14;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = var3.addListener;
                    var1 = 'transitionEnd';
                    var0 = function(arg0) { // Environment: var0
                        _fun109651: for (var _fun109651_ip = 0;;) switch (_fun109651_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.data;
                                var0 = var0.closing;
                                if (var0) {
                                    _fun109651_ip = 73;
                                    continue _fun109651
                                }
                            case 17:
                                var2 = _closure2_slot1;
                                var1 = _closure1_slot26;
                                var1 = var1.CHANNEL_NAME;
                                if (!(var2 === var1)) {
                                    _fun109651_ip = 73;
                                    continue _fun109651
                                }
                            case 41:
                                var0 = _closure2_slot5;
                                var2 = var0.current;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun109651_ip = 71;
                                    continue _fun109651
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
                var0 = var3.bind(var11)(var0, var2);
                var2 = var5 != var15;
                var0 = null;
                if (!var2) {
                    _fun109645_ip = 559;
                    continue _fun109645
                }
            case 425:
                var3 = _closure1_slot50;
                var2 = _closure1_slot71;
                var1 = {};
                var20 = var1;
                var19 = var7;
                var11 = copyDataProperties(var20, var19);
                var11 = 'channel';
                var1[var11] = var15;
                var11 = 'navigation';
                var1[var11] = var14;
                var11 = 'isThreadModerator';
                var1[var11] = var13;
                var11 = 'canManageThread';
                var1[var11] = var12;
                var11 = var7.canUnarchiveThread;
                var7 = 'canUnarchiveThread';
                var1[var7] = var11;
                var7 = 'isMutedThread';
                var1[var7] = var10;
                var7 = 'hasJoinedThread';
                var1[var7] = var9;
                var5 = var5 == var8;
                var7 = undefined;
                if (var5) {
                    _fun109645_ip = 533;
                    continue _fun109645
                }
            case 523:
                var5 = var8.isForumPost;
                var7 = var5.bind(var8)();
            case 533:
                var5 = 'isForumPost';
                var1[var5] = var7;
                var5 = 'channelNameRef';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 559:
                return var0;
        }
    };
    var2.default = var3;
    var2.PinImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 31, 27, 3095, 1376, 1416, 6559, 1372, 1673, 1410, 3093, 3944, 14093, 3102, 1621, 14097, 660, 4846, 1379, 6571, 1233, 483, 33, 1297, 671, 9475, 566, 7367, 8303, 3255, 14089, 7776, 10415, 9069, 3275, 3265, 4834, 3253, 3270, 14098, 22, 4308, 6558, 3150, 7985, 1234, 8044, 4242, 3106, 1384, 8265, 3933, 3938, 5384, 8284, 4768, 3934, 3917, 3347, 14099, 5836, 7704, 14100, 5464, 5451, 478, 5343, 5344, 4557, 14101, 3134, 3047, 1686, 4878, 11255, 14102, 8045, 5481, 5480, 1381, 1383, 4876, 6791, 4086, 9473, 1382, 8985, 6560, 9075, 9446, 7585, 8508, 4849, 5441, 3161, 1469, 2]);