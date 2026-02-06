// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 10;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot10;
        var2 = var1.ACTIVITY_CARD_CLICKED;
        var1 = {};
        var5 = arg0;
        var1.type = var5;
        var5 = 0;
        var1.order = var5;
        var5 = arg1;
        var1.guild_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HappeningNowCardTrackingType;
    var _closure1_slot9 = var6;
    var12 = var3.HAPPENING_NOW_CARD_HEIGHT;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot10 = var6;
    var3 = var3.InstantInviteSources;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 8,
        'borderWidth': 1
    };
    var10 = 9;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9.borderRadius = var13;
    var9.height = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var3.actionCard = var9;
    var9 = {
        'backgroundColor': null,
        'height': 44,
        'width': '100%',
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginBottom': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var3.actionCardImage = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun101777: for (var _fun101777_ip = 0;;) switch (_fun101777_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.text;
                var6 = var0.onPress;
                var12 = var0.imageSource;
                var4 = var0.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101777_ip = 33;
                    continue _fun101777
                }
            case 31:
                var4 = false;
            case 33:
                var0 = _closure1_slot14;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 20;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var6;
                var6 = var10.actionCard;
                var0.style = var6;
                var6 = 'medium';
                var0.width = var6;
                var0.panelVariant = var4;
                var7 = _closure1_slot12;
                var6 = _closure1_slot4;
                var4 = {};
                var10 = var10.actionCardImage;
                var4.style = var10;
                var11 = _closure1_slot5;
                var10 = {};
                var10.source = var12;
                var10 = var7.bind(var3)(var11, var10);
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var5 = 21;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/normal',
                    'maxFontSizeMultiplier': 2
                };
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowActions.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun101778: for (var _fun101778_ip = 0;;) switch (_fun101778_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var4 = var1.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101778_ip = 28;
                    continue _fun101778
                }
            case 26:
                var4 = false;
            case 28:
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot16;
                    var0 = _closure1_slot9;
                    var2 = var0.GUILD_ACTION_CREATE_CHANNEL_CARD;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2, var4);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var9 = var3;
                    var8 = null;
                    var7 = var4;
                    var6 = null;
                    var5 = null;
                    var1 = var9[var2](var8, var7, var6, var5, var4);
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot15;
                var0 = {};
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 12;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var0.imageSource = var7;
                var0.onPress = var6;
                var8 = _closure1_slot0;
                var5 = 13;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5["fUYU+j"];
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowCardCreateChannel = var3;
    var3 = function arg0() {
        _fun101780: for (var _fun101780_ip = 0;;) switch (_fun101780_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var4 = var1.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101780_ip = 28;
                    continue _fun101780
                }
            case 26:
                var4 = false;
            case 28:
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot16;
                    var0 = _closure1_slot9;
                    var2 = var0.GUILD_ACTION_CUSTOMIZE_CARD;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2, var3);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.open;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot15;
                var0 = {};
                var7 = 'Customize';
                var0.text = var7;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 15;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var0.imageSource = var6;
                var0.onPress = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowCardCustomizeGuild = var3;
    var3 = function arg0() {
        _fun101782: for (var _fun101782_ip = 0;;) switch (_fun101782_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var4 = var1.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101782_ip = 28;
                    continue _fun101782
                }
            case 26:
                var4 = false;
            case 28:
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun101783: for (var _fun101783_ip = 0;;) switch (_fun101783_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getGuild;
                            var6 = _closure2_slot0;
                            var5 = var2.bind(var3)(var6);
                            var3 = _closure1_slot6;
                            var2 = var3.getChannels;
                            var4 = var2.bind(var3)(var6);
                            var3 = _closure1_slot8;
                            var2 = var3.getChannelId;
                            var3 = var2.bind(var3)(var6);
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun101783_ip = 138;
                                continue _fun101783
                            }
                        case 60:
                            var7 = _closure1_slot16;
                            var2 = _closure1_slot9;
                            var2 = var2.GUILD_ACTION_INVITE_CARD;
                            var1 = _closure2_slot0;
                            var6 = undefined;
                            var1 = var7.bind(var6)(var2, var1);
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 16;
                            var1 = var7[var1];
                            var2 = var2.bind(var6)(var1);
                            var1 = var2.handleOpenInviteActionsheet;
                            var0 = _closure1_slot11;
                            var8 = var0.SERVER_PROFILE;
                            var12 = var2;
                            var11 = var5;
                            var10 = var3;
                            var9 = var4;
                            var0 = var12[var1](var11, var10, var9, var8, var7);
                        case 138:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot15;
                var0 = {};
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 17;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var0.imageSource = var7;
                var0.onPress = var6;
                var8 = _closure1_slot0;
                var5 = 13;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.VINpSK;
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowCardInvite = var3;
    var1 = function arg0() {
        _fun101784: for (var _fun101784_ip = 0;;) switch (_fun101784_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var4 = var1.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun101784_ip = 28;
                    continue _fun101784
                }
            case 26:
                var4 = false;
            case 28:
                var6 = _closure1_slot3;
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun101785: for (var _fun101785_ip = 0;;) switch (_fun101785_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getGuild;
                            var5 = _closure2_slot0;
                            var4 = var2.bind(var3)(var5);
                            var3 = _closure1_slot6;
                            var2 = var3.getDefaultChannel;
                            var3 = var2.bind(var3)(var5);
                            var5 = null;
                            var2 = var5 != var4;
                            if (!var2) {
                                _fun101785_ip = 52;
                                continue _fun101785
                            }
                        case 48:
                            var2 = var5 != var3;
                        case 52:
                            if (!var2) {
                                _fun101785_ip = 144;
                                continue _fun101785
                            }
                        case 55:
                            var6 = _closure1_slot16;
                            var2 = _closure1_slot9;
                            var5 = var2.GUILD_ACTION_STUDENT_HUB_ADD_SERVER;
                            var1 = _closure2_slot0;
                            var2 = undefined;
                            var1 = var6.bind(var2)(var5, var1);
                            var1 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 18;
                            var0 = var5[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var5 = var4.id;
                            var0.directoryGuildId = var5;
                            var4 = var4.name;
                            var0.directoryGuildName = var4;
                            var3 = var3.id;
                            var0.directoryChannelId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 144:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot15;
                var0 = {};
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 19;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var0.imageSource = var7;
                var0.onPress = var6;
                var8 = _closure1_slot0;
                var5 = 13;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.emRpdS;
                var5 = var6.bind(var7)(var5);
                var0.text = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowStudentHubAddServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1671, 1410, 1670, 10922, 660, 33, 1297, 671, 795, 8160, 13282, 1234, 8180, 13283, 8356, 13284, 8960, 11439, 10923, 3943, 2]);