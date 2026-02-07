// modules/create_guild/native/components/CreateGuildModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun81020: for (var _fun81020_ip = 0;;) switch (_fun81020_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var0 = {};
                var1 = _closure1_slot6;
                var2 = var1.GUILD_TEMPLATES;
                var1 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 11;
                var4 = var7[var9];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var4 = var4.ImpressionNames;
                var4 = var4.GUILD_ADD_LANDING;
                var1.impressionName = var4;
                var4 = _closure1_slot11;
                var1.impressionProperties = var4;
                var4 = true;
                var1.fullscreen = var4;
                var10 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var10;
                var10 = 12;
                var10 = var7[var10];
                var12 = var8.bind(var6)(var10);
                var11 = var12.getHeaderCloseButton;
                var13 = _closure1_slot1;
                var10 = 10;
                var10 = var7[var10];
                var10 = var13.bind(var6)(var10);
                var10 = var10.closeCreateGuildModal;
                var10 = var11.bind(var12)(var10);
                var1.headerLeft = var10;
                var10 = function() {
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure1_slot7;
                    var4 = var4.IN_APP;
                    var0.trigger = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var10;
                var0[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.CREATION_INTENT;
                var1 = {};
                var10 = var7[var9];
                var10 = var8.bind(var6)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.GUILD_ADD_INTENT_SELECTION;
                var1.impressionName = var10;
                var10 = _closure1_slot11;
                var1.impressionProperties = var10;
                var1.fullscreen = var4;
                var10 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var10;
                var10 = function arg0() {
                    var0 = arg0;
                    var5 = var0.guildTemplate;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.guildTemplate = var5;
                    var4 = _closure1_slot7;
                    var4 = var4.IN_APP;
                    var0.trigger = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var10;
                var0[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.CREATE_SERVER;
                var1 = {};
                var10 = var7[var9];
                var10 = var8.bind(var6)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.GUILD_ADD_CUSTOMIZE;
                var1.impressionName = var10;
                var10 = _closure1_slot11;
                var1.impressionProperties = var10;
                var1.fullscreen = var4;
                var10 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var10;
                var10 = function arg0, arg1() {
                    var0 = arg1;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 15;
                    var0 = var8[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var9 = arg0;
                    var10 = var0;
                    var6 = copyDataProperties(var10, var9);
                    var6 = function arg0() {
                        _fun81027: for (var _fun81027_ip = 0;;) switch (_fun81027_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.guild;
                                var8 = var0.id;
                                var7 = _closure3_slot0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.createGuildProgress;
                                var1 = var1.bind(var2)(var8);
                                var2 = _closure1_slot5;
                                var1 = var2.getDefaultChannel;
                                var1 = var1.bind(var2)(var8);
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun81027_ip = 237;
                                    continue _fun81027
                                }
                            case 80:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var4 = 7;
                                var4 = var3[var4];
                                var9 = var2.bind(var0)(var4);
                                var6 = var9.init;
                                var4 = var1.id;
                                var1 = {};
                                var10 = 'Guild Create Flow';
                                var1.location = var10;
                                var1 = var6.bind(var9)(var8, var4, var1);
                                var6 = var7.push;
                                var1 = _closure1_slot6;
                                var4 = var1.GUILD_INVITE;
                                var1 = {};
                                var1.guildId = var8;
                                var1 = var6.bind(var7)(var4, var1);
                                var1 = 8;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot8;
                                var2 = var1.USER_FLOW_TRANSITION;
                                var1 = {};
                                var6 = _closure1_slot9;
                                var6 = var6.GUILD_CREATE_MODAL;
                                var1.flow_type = var6;
                                var6 = _closure1_slot6;
                                var6 = var6.CREATE_SERVER;
                                var1.from_step = var6;
                                var5 = _closure1_slot6;
                                var5 = var5.GUILD_INVITE;
                                var1.to_step = var5;
                                var1 = var3.bind(var4)(var2, var1);
                            case 237:
                                return var0;
                        }
                    };
                    var5 = 'onCreate';
                    var0[var5] = var6;
                    var7 = _closure1_slot0;
                    var4 = 16;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4["5HZu07"];
                    var5 = var5.bind(var6)(var4);
                    var4 = 'customTitle';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var10;
                var0[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.GUILD_INVITE;
                var1 = {};
                var10 = var7[var9];
                var10 = var8.bind(var6)(var10);
                var10 = var10.ImpressionNames;
                var10 = var10.GUILD_ADD_GUILD_INVITE;
                var1.impressionName = var10;
                var10 = _closure1_slot11;
                var1.impressionProperties = var10;
                var1.fullscreen = var4;
                var10 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var10;
                var10 = function arg0() {
                    var0 = arg0;
                    var0 = var0.guildId;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = false;
                    var0.closeOnEditInviteLink = var5;
                    var4 = function() {
                        _fun81030: for (var _fun81030_ip = 0;;) switch (_fun81030_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = _closure2_slot1;
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var0 = 9;
                                var3 = var5[var0];
                                var0 = undefined;
                                var6 = var4.bind(var0)(var3);
                                var3 = var6.transitionToGuildSync;
                                var3 = var3.bind(var6)(var2);
                                var3 = 10;
                                var3 = var5[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.closeCreateGuildModal;
                                var3 = var3.bind(var4)();
                                var3 = null;
                                if (!(var3 != var1)) {
                                    _fun81030_ip = 83;
                                    continue _fun81030
                                }
                            case 78:
                                var1 = var1.bind(var0)(var2);
                            case 83:
                                return var0;
                        }
                    };
                    var0.onClose = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var10;
                var0[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.JOIN_SERVER;
                var1 = {};
                var7 = var7[var9];
                var7 = var8.bind(var6)(var7);
                var7 = var7.ImpressionNames;
                var7 = var7.GUILD_ADD_JOIN;
                var1.impressionName = var7;
                var7 = _closure1_slot11;
                var1.impressionProperties = var7;
                var1.fullscreen = var4;
                var7 = arg0;
                if (var7) {
                    _fun81020_ip = 477;
                    continue _fun81020
                }
            case 468:
                var7 = function() { // Environment: var3
                    var0 = null;
                    return var0;
                };
                _fun81020_ip = 484;
                continue _fun81020;
            case 477:
                var7 = function() { // Environment: var3
                    var3 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 18;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.GenericHeaderTitle;
                    var0 = {};
                    var4 = 16;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.jlfuFW;
                    var4 = var5.bind(var6)(var4);
                    var0.title = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 484:
                var1.headerTitle = var7;
                var7 = function arg0() {
                    var3 = _closure1_slot10;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 19;
                    var0 = var6[var0];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.initialRoute = var4;
                    var7 = arg0;
                    var8 = var0;
                    var4 = copyDataProperties(var8, var7);
                    var4 = 10;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.closeCreateGuildModal;
                    var4 = 'onClose';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var7;
                var0[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.ACCEPT_INVITE;
                var1 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var6)(var7);
                var7 = var7.ImpressionNames;
                var7 = var7.GUILD_ADD_ACCEPT_INVITE;
                var1.impressionName = var7;
                var7 = _closure1_slot11;
                var1.impressionProperties = var7;
                var1.fullscreen = var4;
                var7 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var7;
                var7 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerLeft = var7;
                var7 = function arg0() {
                    var0 = arg0;
                    var7 = var0.code;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 20;
                    var0 = var9[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.RedesignCompatContext;
                    var1 = var0.Provider;
                    var0 = {};
                    var5 = false;
                    var0.value = var5;
                    var6 = _closure1_slot10;
                    var8 = _closure1_slot1;
                    var4 = 21;
                    var4 = var9[var4];
                    var5 = var8.bind(var2)(var4);
                    var4 = {};
                    var4.code = var7;
                    var7 = 10;
                    var7 = var9[var7];
                    var7 = var8.bind(var2)(var7);
                    var7 = var7.closeCreateGuildModal;
                    var4.onPressClose = var7;
                    var4 = var6.bind(var2)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var7;
                var0[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.JOIN_STUDENT_HUB;
                var1 = {};
                var1.impressionName = var6;
                var5 = _closure1_slot11;
                var1.impressionProperties = var5;
                var1.fullscreen = var4;
                var1.ignoreKeyboard = var4;
                var4 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerTitle = var4;
                var4 = function() {
                    var0 = null;
                    return var0;
                };
                var1.headerLeft = var4;
                var3 = function() {
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = true;
                    var0.isNestedNavigator = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Keyboard;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CreateGuildModalStates;
    var _closure1_slot6 = var6;
    var3 = var3.GuildTemplateTriggers;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ImpressionGroups;
    var6 = var6.GUILD_ADD_FLOW;
    var3.impression_group = var6;
    var _closure1_slot11 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/native/components/CreateGuildModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var0 = var1.channel;
        var _closure2_slot0 = var0;
        var17 = var1.initialState;
        var _closure2_slot1 = var17;
        var15 = var1.onSuccess;
        var _closure2_slot2 = var15;
        var14 = _closure1_slot3;
        var2 = var14.useMemo;
        var1 = new Array(2);
        var1[0] = var0;
        var1[1] = var17;
        var0 = function() { // Environment: var9
            _fun81041: for (var _fun81041_ip = 0;;) switch (_fun81041_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = _closure1_slot6;
                    var0 = var0.JOIN_SERVER;
                    if (!(var1 !== var0)) {
                        _fun81041_ip = 137;
                        continue _fun81041
                    }
                case 24:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun81041_ip = 108;
                        continue _fun81041
                    }
                case 34:
                    var1 = {};
                    var0 = _closure1_slot6;
                    var0 = var0.GUILD_INVITE;
                    var1.name = var0;
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.channel = var2;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.closeCreateGuildModal;
                    var0.onClose = var2;
                    var1.param = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    _fun81041_ip = 135;
                    continue _fun81041;
                case 108:
                    var2 = {};
                    var1 = _closure1_slot6;
                    var1 = var1.GUILD_TEMPLATES;
                    var2.name = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 135:
                    _fun81041_ip = 186;
                    continue _fun81041;
                case 137:
                    var2 = {};
                    var1 = _closure1_slot6;
                    var1 = var1.JOIN_SERVER;
                    var2.name = var1;
                    var1 = {};
                    var3 = _closure1_slot6;
                    var3 = var3.JOIN_SERVER;
                    var1.initialRoute = var3;
                    var2.param = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 186:
                    return var0;
            }
        };
        var8 = var2.bind(var14)(var0, var1);
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 23;
        var0 = var12[var0];
        var3 = undefined;
        var1 = var11.bind(var3)(var0);
        var0 = var1.useIsWindowSmall;
        var16 = var0.bind(var1)();
        var _closure2_slot3 = var16;
        var2 = _closure1_slot10;
        var0 = 20;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var1 = var0.RedesignCompat;
        var0 = {};
        var6 = _closure1_slot10;
        var4 = 24;
        var4 = var12[var4];
        var4 = var11.bind(var3)(var4);
        var5 = var4.Navigator;
        var4 = {};
        var13 = var14.useMemo;
        var10 = new Array(3);
        var10[0] = var17;
        var10[1] = var16;
        var10[2] = var15;
        var9 = function() { // Environment: var9
            var4 = _closure1_slot12;
            var3 = _closure2_slot3;
            var2 = _closure2_slot1;
            var1 = _closure2_slot2;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var9 = var13.bind(var14)(var9, var10);
        var4.screens = var9;
        var4.initialRouteStack = var8;
        var8 = 16;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["13/7kX"];
        var8 = var9.bind(var10)(var8);
        var4.headerBackTitle = var8;
        var7 = _closure1_slot4;
        var7 = var7.dismiss;
        var4.onWillFocus = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1673, 7614, 660, 33, 10320, 8411, 795, 4679, 10318, 481, 4705, 10335, 10339, 9033, 1234, 10340, 8972, 10342, 4899, 10343, 10361, 8993, 5837, 2]);