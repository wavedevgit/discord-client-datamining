// modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NO_PARTICIPANTS;
    var _closure1_slot6 = var3;
    var8 = 3;
    var3 = var5[var8];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.setIsChannelDetailsSearchActive;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AnalyticEvents;
    var _closure1_slot12 = var9;
    var9 = var3.AnalyticsSections;
    var _closure1_slot13 = var9;
    var3 = var3.ChannelTypes;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANGELOG_URL;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchEntrypointAnalyticsLocations;
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot18 = var9;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var9 = 13;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var10 = var3.AVATAR_SIZE_MAP;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var3 = var3.XSMALL;
    var12 = var10[var3];
    var3 = {};
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.CutoutDirection;
    var9 = var9.RIGHT;
    var3.direction = var9;
    var7 = var12 / var7;
    var7 = var7 + var8;
    var3.radius = var7;
    var10 = -6;
    var3.inset = var10;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var15 = 'row';
    var9 = {
        'flexDirection': 'row',
        'gap': 12,
        'paddingEnd': 1
    };
    var3.privateChannelButtonsWrapper = var9;
    var9 = {};
    var13 = 15;
    var11 = var5[var13];
    var11 = var14.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9.backgroundColor = var11;
    var11 = var5[var13];
    var11 = var14.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9.borderRadius = var11;
    var11 = var5[var13];
    var11 = var14.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var9.minHeight = var11;
    var11 = var5[var13];
    var11 = var14.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var9.minWidth = var11;
    var11 = var5[var13];
    var11 = var14.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var9.padding = var11;
    var11 = 'center';
    var9.justifyContent = var11;
    var9.flexDirection = var15;
    var9.alignItems = var11;
    var3.button = var9;
    var9 = {};
    var15 = 0.6;
    var9.opacity = var15;
    var3.disabledButton = var9;
    var9 = {};
    var15 = var5[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var9.backgroundColor = var15;
    var13 = var5[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var9.width = var12;
    var9.height = var12;
    var9.justifyContent = var11;
    var9.alignItems = var11;
    var9.marginLeft = var10;
    var3.overflowBadge = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot21 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun72174: for (var _fun72174_ip = 0;;) switch (_fun72174_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channelId;
                var _closure2_slot0 = var8;
                var10 = var0.screenIndex;
                var _closure2_slot1 = var10;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var1 = _closure1_slot21;
                var7 = var1.bind(var3)();
                var _closure2_slot2 = var7;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 16;
                var1 = var1[var11];
                var6 = var2.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var5.bind(var6)(var2, var1);
                var _closure2_slot3 = var9;
                var2 = null;
                var1 = var2 == var9;
                var6 = undefined;
                if (var1) {
                    _fun72174_ip = 164;
                    continue _fun72174
                }
            case 154:
                var1 = var9.getRecipientId;
                var6 = var1.bind(var9)();
            case 164:
                _closure2_slot4 = var6;
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = var13[var11];
                var16 = var5.bind(var3)(var1);
                var15 = var16.useStateFromStores;
                var1 = _closure1_slot10;
                var14 = new Array(1);
                var14[0] = var1;
                var12 = new Array(1);
                var12[0] = var9;
                var1 = function() { // Environment: var4
                    _fun72176: for (var _fun72176_ip = 0;;) switch (_fun72176_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun72176_ip = 43;
                                continue _fun72176
                            }
                        case 16:
                            var3 = _closure1_slot10;
                            var2 = var3.isInChannel;
                            var1 = _closure2_slot3;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var12 = var15.bind(var16)(var14, var1, var12);
                var1 = 17;
                var1 = var13[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useInappropriateConversationSafetyToolsWarningForChannel;
                var16 = var1.bind(var5)(var8);
                _closure2_slot5 = var16;
                var19 = var2 != var16;
                if (!var19) {
                    _fun72174_ip = 262;
                    continue _fun72174
                }
            case 258:
                var19 = var2 != var6;
            case 262:
                _closure2_slot6 = var19;
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = var13[var11];
                var17 = var5.bind(var3)(var1);
                var15 = var17.useStateFromStores;
                var1 = _closure1_slot8;
                var14 = new Array(2);
                var14[0] = var1;
                var1 = _closure1_slot9;
                var14[1] = var1;
                var1 = function() { // Environment: var4
                    _fun72177: for (var _fun72177_ip = 0;;) switch (_fun72177_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var4 = null;
                            var0 = var4 == var0;
                            var1 = undefined;
                            if (var0) {
                                _fun72177_ip = 27;
                                continue _fun72177
                            }
                        case 18:
                            var0 = _closure2_slot3;
                            var1 = var0.type;
                        case 27:
                            var0 = _closure1_slot14;
                            var0 = var0.DM;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun72177_ip = 55;
                                continue _fun72177
                            }
                        case 47:
                            var1 = _closure2_slot4;
                            var0 = var4 != var1;
                        case 55:
                            if (!var0) {
                                _fun72177_ip = 123;
                                continue _fun72177
                            }
                        case 58:
                            var7 = _closure1_slot8;
                            var6 = var7.isBlocked;
                            var1 = _closure2_slot4;
                            var1 = var6.bind(var7)(var1);
                            if (var1) {
                                _fun72177_ip = 120;
                                continue _fun72177
                            }
                        case 80:
                            var6 = _closure1_slot9;
                            var5 = var6.getUser;
                            var2 = _closure2_slot4;
                            var2 = var5.bind(var6)(var2);
                            var4 = var4 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun72177_ip = 114;
                                continue _fun72177
                            }
                        case 108:
                            var3 = var2.isProvisional;
                        case 114:
                            var2 = true;
                            var1 = var2 === var3;
                        case 120:
                            var0 = var1;
                        case 123:
                            return var0;
                    }
                };
                var17 = var15.bind(var17)(var14, var1);
                var1 = 18;
                var1 = var13[var1];
                var13 = var5.bind(var3)(var1);
                var5 = var13.useIsCallActiveNullable;
                var14 = var2 == var9;
                var1 = undefined;
                if (var14) {
                    _fun72174_ip = 353;
                    continue _fun72174
                }
            case 348:
                var1 = var9.id;
            case 353:
                var28 = var5.bind(var13)(var1);
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var13 = var5.bind(var3)(var1);
                var11 = var13.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var4
                    _fun72178: for (var _fun72178_ip = 0;;) switch (_fun72178_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var5 = null;
                            var3 = var5 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun72178_ip = 34;
                                continue _fun72178
                            }
                        case 20:
                            var6 = _closure2_slot3;
                            var3 = var6.isMultiUserDM;
                            var1 = var3.bind(var6)();
                        case 34:
                            var3 = true;
                            if (!(var3 !== var1)) {
                                _fun72178_ip = 49;
                                continue _fun72178
                            }
                        case 40:
                            var1 = _closure1_slot6;
                            _fun72178_ip = 76;
                            continue _fun72178;
                        case 49:
                            var8 = _closure1_slot5;
                            var7 = var8.getParticipants;
                            var6 = _closure2_slot3;
                            var6 = var6.id;
                            var1 = var7.bind(var8)(var6);
                        case 76:
                            var0.callParticipants = var1;
                            var1 = _closure2_slot3;
                            var1 = var5 == var1;
                            var4 = undefined;
                            if (var1) {
                                _fun72178_ip = 108;
                                continue _fun72178
                            }
                        case 94:
                            var5 = _closure2_slot3;
                            var1 = var5.isMultiUserDM;
                            var4 = var1.bind(var5)();
                        case 108:
                            var1 = -1;
                            if (!(var3 === var4)) {
                                _fun72178_ip = 145;
                                continue _fun72178
                            }
                        case 118:
                            var4 = _closure1_slot5;
                            var3 = var4.getParticipantsVersion;
                            var2 = _closure2_slot3;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 145:
                            var0.participantsVersion = var1;
                            return var0;
                    }
                };
                var1 = var11.bind(var13)(var5, var1);
                var1 = var1.callParticipants;
                _closure2_slot7 = var1;
                var14 = _closure1_slot3;
                var13 = var14.useMemo;
                var11 = new Array(1);
                var11[0] = var1;
                var5 = function() { // Environment: var4
                    var2 = _closure2_slot7;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot15;
                        var0 = var0.ACTIVITY;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = var1.slice;
                    var3 = 0;
                    var2 = 5;
                    var2 = var4.bind(var1)(var3, var2);
                    var0.visibleParticipants = var2;
                    var1 = var1.length;
                    var0.totalParticipantCount = var1;
                    return var0;
                };
                var5 = var13.bind(var14)(var5, var11);
                var24 = var5.visibleParticipants;
                _closure2_slot8 = var24;
                var30 = var5.totalParticipantCount;
                _closure2_slot9 = var30;
                var5 = var2 == var9;
                var14 = undefined;
                if (var5) {
                    _fun72174_ip = 485;
                    continue _fun72174
                }
            case 475:
                var5 = var9.isMultiUserDM;
                var14 = var5.bind(var9)();
            case 485:
                var15 = var14;
                if (!var15) {
                    _fun72174_ip = 502;
                    continue _fun72174
                }
            case 491:
                var5 = var1.length;
                var1 = 0;
                var15 = var5 > var1;
            case 502:
                _closure2_slot10 = var15;
                var13 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 19;
                var1 = var18[var1];
                var5 = var13.bind(var3)(var1);
                var1 = {};
                var11 = {};
                var20 = 'channel';
                var11.type = var20;
                var11.channel = var9;
                var1.context = var11;
                var1 = var5.bind(var3)(var1);
                var5 = var1.application;
                _closure2_slot11 = var5;
                var1 = var1.isAppDM;
                var11 = 20;
                var11 = var18[var11];
                var18 = var13.bind(var3)(var11);
                var13 = var18.useConfig;
                var11 = {};
                var20 = 'PrivateChannelButtons';
                var11.location = var20;
                var11 = var13.bind(var18)(var11);
                var13 = var11.enabled;
                _closure2_slot12 = var13;
                var11 = _closure1_slot3;
                var20 = var11.useCallback;
                var18 = new Array(2);
                var18[0] = var13;
                var18[1] = var9;
                var13 = function() { // Environment: var4
                    _fun72181: for (var _fun72181_ip = 0;;) switch (_fun72181_ip) {
                        case 0:
                            var1 = arguments[0];
                            var0 = undefined;
                            if (!(var1 === var0)) {
                                _fun72181_ip = 13;
                                continue _fun72181
                            }
                        case 11:
                            var1 = false;
                        case 13:
                            var _closure3_slot0 = var1;
                            var4 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun72181_ip = 101;
                                continue _fun72181
                            }
                        case 30:
                            var4 = _closure2_slot3;
                            var3 = var4.isPrivate;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun72181_ip = 101;
                                continue _fun72181
                            }
                        case 47:
                            var3 = function() {
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 21;
                                var0 = var2[var0];
                                var3 = undefined;
                                var2 = var1.bind(var3)(var0);
                                var1 = _closure2_slot3;
                                var0 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1, var0);
                                var0 = var1.onPress;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var1 = _closure2_slot12;
                            if (var1) {
                                _fun72181_ip = 67;
                                continue _fun72181
                            }
                        case 61:
                            var1 = var3.bind(var0)();
                            _fun72181_ip = 101;
                            continue _fun72181;
                        case 67:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 22;
                            var1 = var4[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.confirmStartCall;
                            var1 = var1.bind(var2)(var3);
                        case 101:
                            return var0;
                    }
                };
                var13 = var20.bind(var11)(var13, var18);
                _closure2_slot13 = var13;
                var21 = var11.useCallback;
                var20 = new Array(1);
                var20[0] = var13;
                var18 = function() { // Environment: var4
                    var2 = _closure2_slot13;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var18 = var21.bind(var11)(var18, var20);
                _closure2_slot14 = var18;
                var20 = var11.useCallback;
                var18 = new Array(1);
                var18[0] = var13;
                var13 = function() { // Environment: var4
                    var2 = _closure2_slot13;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var20 = var20.bind(var11)(var13, var18);
                var18 = var11.useCallback;
                var13 = new Array(3);
                var13[0] = var9;
                var13[1] = var8;
                var13[2] = var10;
                var10 = function() { // Environment: var4
                    _fun72185: for (var _fun72185_ip = 0;;) switch (_fun72185_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var1);
                            var5 = var7.navigateToChannelDetails;
                            var6 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = 'private-channel-search-button';
                            var2 = var5.bind(var7)(var6, var3, var2);
                            var5 = _closure1_slot11;
                            var3 = true;
                            var2 = 'action';
                            var2 = var5.bind(var0)(var6, var3, var2);
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun72185_ip = 192;
                                continue _fun72185
                            }
                        case 82:
                            var3 = _closure2_slot3;
                            var2 = var3.getGuildId;
                            var7 = var2.bind(var3)();
                            var2 = var3.isThread;
                            var6 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 24;
                            var2 = var3[var2];
                            var5 = var5.bind(var0)(var2);
                            var2 = var5.getChannelDetailsSearchContext;
                            var1 = _closure2_slot0;
                            var5 = var2.bind(var5)(var1, var7, var6);
                            var2 = _closure1_slot1;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackSearchOpened;
                            var1 = {};
                            var1.searchContext = var5;
                            var4 = _closure1_slot17;
                            var4 = var4.INDIVIDUAL_DM;
                            var1.searchLocation = var4;
                            var1 = var2.bind(var3)(var1);
                        case 192:
                            return var0;
                    }
                };
                var13 = var18.bind(var11)(var10, var13);
                _closure2_slot15 = var13;
                var18 = var11.useCallback;
                var10 = new Array(3);
                var10[0] = var6;
                var10[1] = var9;
                var10[2] = var5;
                var9 = function() { // Environment: var4
                    _fun72186: for (var _fun72186_ip = 0;;) switch (_fun72186_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun72186_ip = 24;
                                continue _fun72186
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun72186_ip = 35;
                                continue _fun72186
                            }
                        case 27:
                            var2 = _closure2_slot11;
                            var1 = var3 != var2;
                        case 35:
                            if (!var1) {
                                _fun72186_ip = 223;
                                continue _fun72186
                            }
                        case 41:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 26;
                            var3 = var1[var3];
                            var6 = undefined;
                            var8 = var4.bind(var6)(var3);
                            var7 = var8.trackWithMetadata;
                            var3 = _closure1_slot12;
                            var5 = var3.SETTINGS_PANE_VIEWED;
                            var3 = {
                                'settings_type': 'user',
                                'destination_pane': null,
                                'source_page': 'app_dm_settings'
                            };
                            var9 = _closure1_slot13;
                            var9 = var9.SETTINGS_APP_DMS_MENU;
                            var3.destination_pane = var9;
                            var9 = _closure2_slot11;
                            var9 = var9.id;
                            var3.application_id = var9;
                            var3 = var7.bind(var8)(var5, var3);
                            var3 = 27;
                            var3 = var1[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.openLazy;
                            var5 = _closure1_slot0;
                            var2 = 29;
                            var2 = var1[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = 28;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var5.bind(var6)(var2, var1);
                            var1 = {};
                            var5 = _closure2_slot4;
                            var1.userId = var5;
                            var5 = _closure2_slot3;
                            var1.channel = var5;
                            var0 = _closure2_slot11;
                            var1.application = var0;
                            var0 = 'AppDMOptionsBottomSheet';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 223:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = var18.bind(var11)(var9, var10);
                var10 = var11.useMemo;
                var9 = new Array(7);
                var9[0] = var19;
                var19 = var7.button;
                var9[1] = var19;
                var9[2] = var13;
                var9[3] = var8;
                var9[4] = var6;
                var19 = var2 == var16;
                var6 = undefined;
                if (var19) {
                    _fun72174_ip = 825;
                    continue _fun72174
                }
            case 820:
                var6 = var16.id;
            case 825:
                var9[5] = var6;
                var19 = var2 == var16;
                var6 = undefined;
                if (var19) {
                    _fun72174_ip = 843;
                    continue _fun72174
                }
            case 838:
                var6 = var16.type;
            case 843:
                var9[6] = var6;
                var6 = function() { // Environment: var4
                    _fun72187: for (var _fun72187_ip = 0;;) switch (_fun72187_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (var0) {
                                _fun72187_ip = 177;
                                continue _fun72187
                            }
                        case 13:
                            var3 = _closure1_slot18;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 30;
                            var0 = var7[var0];
                            var2 = undefined;
                            var0 = var5.bind(var2)(var0);
                            var1 = var0.PressableOpacity;
                            var0 = {};
                            var4 = _closure2_slot2;
                            var4 = var4.button;
                            var0.style = var4;
                            var4 = _closure2_slot15;
                            var0.onPress = var4;
                            var4 = 31;
                            var8 = var7[var4];
                            var8 = var5.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var4 = var7[var4];
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.t;
                            var4 = var4["5h0QOP"];
                            var4 = var8.bind(var9)(var4);
                            var0.accessibilityLabel = var4;
                            var4 = 'button';
                            var0.accessibilityRole = var4;
                            var4 = 32;
                            var4 = var7[var4];
                            var4 = var5.bind(var2)(var4);
                            var5 = var4.MagnifyingGlassIcon;
                            var4 = {};
                            var7 = 'sm';
                            var4.size = var7;
                            var4 = var3.bind(var2)(var5, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            _fun72187_ip = 277;
                            continue _fun72187;
                        case 177:
                            var2 = _closure2_slot6;
                            var1 = null;
                            if (!var2) {
                                _fun72187_ip = 274;
                                continue _fun72187
                            }
                        case 186:
                            var5 = _closure1_slot18;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 33;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.SafetyToolsButton;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var2.channelId = var7;
                            var7 = _closure2_slot4;
                            var2.recipientId = var7;
                            var7 = _closure2_slot5;
                            var7 = var7.id;
                            var2.warningId = var7;
                            var6 = _closure2_slot5;
                            var6 = var6.type;
                            var2.warningType = var6;
                            var1 = var5.bind(var4)(var3, var2);
                        case 274:
                            var0 = var1;
                        case 277:
                            return var0;
                    }
                };
                var10 = var10.bind(var11)(var6, var9);
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 34;
                var6 = var11[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.bind(var3)(var8);
                if (var6) {
                    _fun72174_ip = 2120;
                    continue _fun72174
                }
            case 891:
                if (var1) {
                    _fun72174_ip = 1789;
                    continue _fun72174
                }
            case 897:
                var8 = _closure1_slot19;
                var6 = _closure1_slot4;
                var1 = {};
                var9 = var7.privateChannelButtonsWrapper;
                var1.style = var9;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var21 = 30;
                var9 = var9[var21];
                var9 = var11.bind(var3)(var9);
                var11 = var9.PressableOpacity;
                var9 = {};
                var22 = _closure1_slot0;
                var16 = _closure1_slot2;
                var19 = 31;
                var23 = var16[var19];
                var23 = var22.bind(var3)(var23);
                var25 = var23.intl;
                var23 = var25.string;
                var16 = var16[var19];
                var16 = var22.bind(var3)(var16);
                var22 = var16.t;
                if (var15) {
                    _fun72174_ip = 1021;
                    continue _fun72174
                }
            case 992:
                if (var12) {
                    _fun72174_ip = 1008;
                    continue _fun72174
                }
            case 995:
                var16 = var22.focH1t;
                var16 = var23.bind(var25)(var16);
                _fun72174_ip = 1019;
                continue _fun72174;
            case 1008:
                var26 = var22["4ry6yi"];
                var16 = var23.bind(var25)(var26);
            case 1019:
                _fun72174_ip = 1032;
                continue _fun72174;
            case 1021:
                var22 = var22["0D/6Rz"];
                var16 = var23.bind(var25)(var22);
            case 1032:
                var9.accessibilityLabel = var16;
                var16 = 'button';
                var9.accessibilityRole = var16;
                var23 = var7.button;
                var22 = new Array(3);
                var22[0] = var23;
                var23 = {};
                var25 = undefined;
                if (!var15) {
                    _fun72174_ip = 1068;
                    continue _fun72174
                }
            case 1065:
                var25 = 1;
            case 1068:
                var23.borderWidth = var25;
                var25 = undefined;
                if (!var15) {
                    _fun72174_ip = 1123;
                    continue _fun72174
                }
            case 1078:
                var27 = _closure1_slot1;
                var29 = _closure1_slot2;
                var26 = 15;
                var26 = var29[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.unsafe_rawColors;
                if (var12) {
                    _fun72174_ip = 1114;
                    continue _fun72174
                }
            case 1106:
                var26 = var27.BRAND_400;
                _fun72174_ip = 1120;
                continue _fun72174;
            case 1114:
                var26 = var27.GREEN_360;
            case 1120:
                var25 = var26;
            case 1123:
                var23.borderColor = var25;
                var22[1] = var23;
                var23 = null;
                if (!var17) {
                    _fun72174_ip = 1143;
                    continue _fun72174
                }
            case 1137:
                var23 = var7.disabledButton;
            case 1143:
                var22[2] = var23;
                var9.style = var22;
                var22 = function() {
                    _fun72189: for (var _fun72189_ip = 0;;) switch (_fun72189_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            if (!var1) {
                                _fun72189_ip = 20;
                                continue _fun72189
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun72189_ip = 32;
                                continue _fun72189
                            }
                        case 20:
                            var2 = _closure2_slot14;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun72189_ip = 72;
                            continue _fun72189;
                        case 32:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 39;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openChannelCallModal;
                            var0 = _closure2_slot3;
                            var0 = var1.bind(var2)(var0);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var22;
                var9.disabled = var17;
                var25 = _closure1_slot18;
                var23 = _closure1_slot0;
                var26 = _closure1_slot2;
                if (var15) {
                    _fun72174_ip = 1330;
                    continue _fun72174
                }
            case 1184:
                if (var12) {
                    _fun72174_ip = 1263;
                    continue _fun72174
                }
            case 1187:
                var15 = 42;
                var15 = var26[var15];
                var15 = var23.bind(var3)(var15);
                var22 = var15.PhoneCallIcon;
                var15 = {};
                var27 = 'sm';
                var15.size = var27;
                var27 = undefined;
                if (!var28) {
                    _fun72174_ip = 1251;
                    continue _fun72174
                }
            case 1220:
                var29 = _closure1_slot1;
                var31 = _closure1_slot2;
                var28 = 15;
                var28 = var31[var28];
                var28 = var29.bind(var3)(var28);
                var28 = var28.unsafe_rawColors;
                var27 = var28.GREEN_360;
            case 1251:
                var15.color = var27;
                var22 = var25.bind(var3)(var22, var15);
                _fun72174_ip = 1328;
                continue _fun72174;
            case 1263:
                var15 = 41;
                var15 = var26[var15];
                var15 = var23.bind(var3)(var15);
                var27 = var15.PhoneHangUpIcon;
                var15 = {};
                var28 = 'sm';
                var15.size = var28;
                var29 = _closure1_slot1;
                var28 = 15;
                var28 = var26[var28];
                var28 = var29.bind(var3)(var28);
                var28 = var28.unsafe_rawColors;
                var28 = var28.RED_400;
                var15.color = var28;
                var22 = var25.bind(var3)(var27, var15);
            case 1328:
                _fun72174_ip = 1410;
                continue _fun72174;
            case 1330:
                var15 = 40;
                var15 = var26[var15];
                var15 = var23.bind(var3)(var15);
                var23 = var15.VoiceNormalIcon;
                var15 = {};
                var26 = 'sm';
                var15.size = var26;
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var26 = 15;
                var26 = var28[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.unsafe_rawColors;
                if (var12) {
                    _fun72174_ip = 1394;
                    continue _fun72174
                }
            case 1386:
                var26 = var27.BRAND_400;
                _fun72174_ip = 1400;
                continue _fun72174;
            case 1394:
                var26 = var27.GREEN_360;
            case 1400:
                var15.color = var26;
                var22 = var25.bind(var3)(var23, var15);
            case 1410:
                var15 = new Array(3);
                var15[0] = var22;
                var23 = var24.map;
                var22 = function(arg0, arg1) { // Environment: var4
                    _fun72190: for (var _fun72190_ip = 0;;) switch (_fun72190_ip) {
                        case 0:
                            var0 = arg0;
                            var8 = arg1;
                            var1 = _closure2_slot8;
                            var2 = var1.length;
                            var1 = 1;
                            var7 = var2 - var1;
                            var2 = var0.type;
                            var1 = _closure1_slot15;
                            var1 = var1.STREAM;
                            if (!(var1 !== var2)) {
                                _fun72190_ip = 79;
                                continue _fun72190
                            }
                        case 47:
                            var1 = _closure1_slot15;
                            var1 = var1.HIDDEN_STREAM;
                            if (!(var1 !== var2)) {
                                _fun72190_ip = 79;
                                continue _fun72190
                            }
                        case 61:
                            var1 = _closure1_slot15;
                            var1 = var1.USER;
                            if (!(var1 !== var2)) {
                                _fun72190_ip = 79;
                                continue _fun72190
                            }
                        case 75:
                            var1 = null;
                            return var1;
                        case 79:
                            var4 = _closure1_slot18;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var11 = 13;
                            var1 = var1[var11];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var9 = {};
                            var10 = -6;
                            var12 = 0;
                            if (!(var12 === var8)) {
                                _fun72190_ip = 152;
                                continue _fun72190
                            }
                        case 121:
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 15;
                            var12 = var14[var12];
                            var12 = var13.bind(var3)(var12);
                            var12 = var12.spacing;
                            var10 = var12.PX_4;
                        case 152:
                            var9.marginLeft = var10;
                            var1.style = var9;
                            var9 = var0.user;
                            var1.user = var9;
                            var1.guildId = var3;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var9 = var10.bind(var3)(var9);
                            var9 = var9.AvatarSizes;
                            var9 = var9.XSMALL;
                            var1.size = var9;
                            if (!(var8 === var7)) {
                                _fun72190_ip = 227;
                                continue _fun72190
                            }
                        case 211:
                            var7 = _closure2_slot9;
                            var5 = 5;
                            var7 = var7 > var5;
                            var5 = undefined;
                            if (!var7) {
                                _fun72190_ip = 231;
                                continue _fun72190
                            }
                        case 227:
                            var5 = _closure1_slot20;
                        case 231:
                            var1.cutout = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var22 = var23.bind(var24)(var22);
                var15[1] = var22;
                var29 = 5;
                var22 = var30 > var29;
                if (!var22) {
                    _fun72174_ip = 1550;
                    continue _fun72174
                }
            case 1449:
                var25 = _closure1_slot18;
                var24 = _closure1_slot4;
                var23 = {};
                var26 = var7.overflowBadge;
                var23.style = var26;
                var28 = _closure1_slot19;
                var27 = _closure1_slot0;
                var31 = _closure1_slot2;
                var26 = 43;
                var26 = var31[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.Text;
                var26 = {
                    'variant': 'text-xxs/semibold',
                    'color': 'button-outline-primary-text'
                };
                var30 = var30 - var29;
                var29 = ['+'];
                var29[1] = var30;
                var26.children = var29;
                var26 = var28.bind(var3)(var27, var26);
                var23.children = var26;
                var22 = var25.bind(var3)(var24, var23);
            case 1550:
                var15[2] = var22;
                var9.children = var15;
                var11 = var8.bind(var3)(var11, var9);
                var9 = new Array(3);
                var9[0] = var11;
                var11 = null;
                if (var14) {
                    _fun72174_ip = 1766;
                    continue _fun72174
                }
            case 1580:
                var11 = null;
                if (var12) {
                    _fun72174_ip = 1766;
                    continue _fun72174
                }
            case 1588:
                var15 = _closure1_slot18;
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var21];
                var12 = var14.bind(var3)(var12);
                var14 = var12.PressableOpacity;
                var12 = {};
                var22 = var7.button;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = null;
                if (!var17) {
                    _fun72174_ip = 1642;
                    continue _fun72174
                }
            case 1636:
                var22 = var7.disabledButton;
            case 1642:
                var21[1] = var22;
                var12.style = var21;
                var12.onPress = var20;
                var12.disabled = var17;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var21 = var20[var19];
                var21 = var17.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var19 = var20[var19];
                var19 = var17.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.oCqlGG;
                var19 = var21.bind(var22)(var19);
                var12.accessibilityLabel = var19;
                var12.accessibilityRole = var16;
                var19 = _closure1_slot18;
                var16 = 44;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.VideoIcon;
                var16 = {};
                var20 = 'sm';
                var16.size = var20;
                var16 = var19.bind(var3)(var17, var16);
                var12.children = var16;
                var11 = var15.bind(var3)(var14, var12);
            case 1766:
                var9[1] = var11;
                var9[2] = var10;
                var1.children = var9;
                var1 = var8.bind(var3)(var6, var1);
                _fun72174_ip = 2118;
                continue _fun72174;
            case 1789:
                var5 = var2 == var5;
                var2 = null;
                if (var5) {
                    _fun72174_ip = 2115;
                    continue _fun72174
                }
            case 1801:
                var8 = _closure1_slot19;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var7.privateChannelButtonsWrapper;
                var5.style = var9;
                var12 = _closure1_slot18;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 30;
                var9 = var16[var10];
                var9 = var14.bind(var3)(var9);
                var11 = var9.PressableOpacity;
                var9 = {};
                var15 = var7.button;
                var9.style = var15;
                var9.onPress = var13;
                var17 = 31;
                var13 = var16[var17];
                var13 = var14.bind(var3)(var13);
                var19 = var13.intl;
                var15 = var19.string;
                var13 = var16[var17];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["5h0QOP"];
                var13 = var15.bind(var19)(var13);
                var9.accessibilityLabel = var13;
                var13 = 'button';
                var9.accessibilityRole = var13;
                var15 = 32;
                var15 = var16[var15];
                var15 = var14.bind(var3)(var15);
                var20 = var15.MagnifyingGlassIcon;
                var19 = {};
                var15 = 'sm';
                var19.size = var15;
                var19 = var12.bind(var3)(var20, var19);
                var9.children = var19;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var16[var10];
                var10 = var14.bind(var3)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var19 = var7.button;
                var10.style = var19;
                var10.onPress = var18;
                var18 = var16[var17];
                var18 = var14.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var16[var17];
                var17 = var14.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.oCqlGG;
                var17 = var18.bind(var19)(var17);
                var10.accessibilityLabel = var17;
                var10.accessibilityRole = var13;
                var13 = 38;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.SettingsIcon;
                var13 = {};
                var13.size = var15;
                var13 = var12.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var5.children = var9;
                var2 = var8.bind(var3)(var6, var5);
            case 2115:
                var1 = var2;
            case 2118:
                return var1;
            case 2120:
                var2 = _closure1_slot18;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 30;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var7 = var7.button;
                var0.style = var7;
                var4 = function() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 35;
                    var2 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var2 = var6.openURL;
                    var5 = _closure1_slot16;
                    var2 = var2.bind(var6)(var5);
                    var2 = 36;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot12;
                    var2 = var1.CHANGE_LOG_CTA_CLICKED;
                    var1 = {};
                    var6 = 'channel_header';
                    var1.cta_type = var6;
                    var1.target = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.onPress = var4;
                var4 = 31;
                var7 = var6[var4];
                var7 = var5.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["+KSnWX"];
                var4 = var7.bind(var8)(var4);
                var0.accessibilityLabel = var4;
                var4 = 37;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.WindowLaunchIcon;
                var4 = {};
                var6 = 'sm';
                var4.size = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 45;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3948, 1372, 3100, 1621, 3521, 8912, 660, 3523, 1669, 8913, 33, 5454, 1297, 671, 566, 9006, 6684, 9012, 9013, 9014, 9015, 9029, 8976, 8977, 4302, 3278, 9050, 1307, 4902, 1234, 7010, 9051, 5894, 3144, 795, 9083, 5369, 7876, 4863, 8796, 7783, 3941, 8790, 2]);