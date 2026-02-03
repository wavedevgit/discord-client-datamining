// modules/nuf/native/components/NUFGuildTemplates.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun81035: for (var _fun81035_ip = 0;;) switch (_fun81035_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81035_ip = 240;
                            continue _fun81035
                        }
                    case 13:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.transitionToGuildSync;
                        var1 = var1.bind(var3)(var8);
                        SaveGenerator(address = 53);
                    case 51:
                        return var1;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun81035_ip = 237;
                            continue _fun81035
                        }
                    case 62:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var4 = var6.bind(var2)(var3);
                        var3 = var4.createGuildProgress;
                        var3 = var3.bind(var4)(var8);
                        var4 = _closure1_slot1;
                        var3 = 10;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.bind(var2)();
                        var3 = 11;
                        var3 = var5[var3];
                        var9 = var4.bind(var2)(var3);
                        var3 = var9.closeCreateGuildOnboardingModal;
                        var3 = var3.bind(var9)();
                        var3 = 12;
                        var3 = var5[var3];
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.showInstantInviteModal;
                        var3 = var3.bind(var6)(var8);
                        var3 = 13;
                        var3 = var5[var3];
                        var6 = var4.bind(var2)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot7;
                        var4 = var3.USER_FLOW_TRANSITION;
                        var3 = {};
                        var8 = _closure1_slot8;
                        var8 = var8.GUILD_CREATE_MODAL;
                        var3.flow_type = var8;
                        var7 = _closure1_slot11;
                        var7 = var7.CREATE_SERVER;
                        var3.from_step = var7;
                        var7 = 'modal_closed';
                        var3.to_step = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 237:
                        return var1;
                    case 240:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun81038: for (var _fun81038_ip = 0;;) switch (_fun81038_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var3 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81038_ip = 96;
                            continue _fun81038
                        }
                    case 13:
                        var1 = arg2;
                        var4 = var1.id;
                        var2 = _closure1_slot10;
                        var2 = var2.CREATE;
                        if (!(var4 === var2)) {
                            _fun81038_ip = 67;
                            continue _fun81038
                        }
                    case 38:
                        var5 = var6.push;
                        var2 = _closure1_slot11;
                        var4 = var2.CHANNEL_PROMPT;
                        var2 = {};
                        var2.guildId = var3;
                        var2 = var5.bind(var6)(var4, var2);
                        _fun81038_ip = 88;
                        continue _fun81038;
                    case 67:
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun81038_ip = 93;
                            continue _fun81038
                        }
                    case 88:
                        var2 = undefined;
                        return var2;
                    case 93:
                        return var1;
                    case 96:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var0 = {};
        var1 = _closure1_slot11;
        var2 = var1.GUILD_TEMPLATES;
        var1 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var7 = 14;
        var4 = var9[var7];
        var6 = undefined;
        var4 = var8.bind(var6)(var4);
        var4 = var4.ImpressionNames;
        var4 = var4.GUILD_ADD_LANDING;
        var1.impressionName = var4;
        var4 = _closure1_slot15;
        var1.impressionProperties = var4;
        var4 = true;
        var1.fullscreen = var4;
        var10 = function() {
            var0 = null;
            return var0;
        };
        var1.headerTitle = var10;
        var10 = 15;
        var10 = var9[var10];
        var12 = var8.bind(var6)(var10);
        var11 = var12.getHeaderCloseButton;
        var10 = function() { // Environment: var3
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 16;
            var2 = var3[var0];
            var0 = undefined;
            var8 = var4.bind(var0)(var2);
            var7 = var8.trackNUFStep;
            var2 = _closure1_slot13;
            var6 = var2.STEP_GUILD_TEMPLATE;
            var2 = _closure1_slot13;
            var5 = var2.STEP_FRIEND_LIST;
            var2 = {};
            var9 = true;
            var2.skip = var9;
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = 17;
            var2 = var3[var2];
            var5 = var4.bind(var0)(var2);
            var4 = var5.transitionTo;
            var2 = _closure1_slot6;
            var2 = var2.fallbackRoute;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot1;
            var1 = 11;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.closeCreateGuildOnboardingModal;
            var1 = var1.bind(var2)();
            return var0;
        };
        var10 = var11.bind(var12)(var10);
        var1.headerLeft = var10;
        var10 = function() {
            var3 = _closure1_slot14;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 18;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure1_slot12;
            var4 = var4.NUF;
            var0.trigger = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var10;
        var0[var2] = var1;
        var1 = _closure1_slot11;
        var2 = var1.CREATION_INTENT;
        var1 = {};
        var10 = var9[var7];
        var10 = var8.bind(var6)(var10);
        var10 = var10.ImpressionNames;
        var10 = var10.GUILD_ADD_INTENT_SELECTION;
        var1.impressionName = var10;
        var10 = _closure1_slot15;
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
            var3 = _closure1_slot14;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 19;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0.guildTemplate = var5;
            var4 = _closure1_slot12;
            var4 = var4.NUF;
            var0.trigger = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var10;
        var0[var2] = var1;
        var1 = _closure1_slot11;
        var2 = var1.CREATE_SERVER;
        var1 = {};
        var10 = var9[var7];
        var10 = var8.bind(var6)(var10);
        var10 = var10.ImpressionNames;
        var10 = var10.GUILD_ADD_CUSTOMIZE;
        var1.impressionName = var10;
        var10 = _closure1_slot15;
        var1.impressionProperties = var10;
        var1.fullscreen = var4;
        var10 = function() {
            var0 = null;
            return var0;
        };
        var1.headerTitle = var10;
        var10 = function arg0, arg1() {
            var6 = arg0;
            var _closure3_slot0 = var6;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var3 = _closure1_slot14;
            var1 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 20;
            var0 = var8[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var10 = var0;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var6 = function arg0() {
                var0 = arg0;
                var1 = var0.guild;
                var4 = _closure3_slot1;
                var3 = var1.id;
                var0 = _closure3_slot0;
                var2 = var0.guildTemplate;
                var1 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot18;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = undefined;
                var0 = var1.bind(var0)(var4, var3, var2);
                return var0;
            };
            var5 = 'onCreate';
            var0[var5] = var6;
            var7 = _closure1_slot0;
            var4 = 21;
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
        var1 = _closure1_slot11;
        var2 = var1.JOIN_SERVER;
        var1 = {};
        var10 = var9[var7];
        var10 = var8.bind(var6)(var10);
        var10 = var10.ImpressionNames;
        var10 = var10.GUILD_ADD_JOIN;
        var1.impressionName = var10;
        var10 = _closure1_slot15;
        var1.impressionProperties = var10;
        var1.fullscreen = var4;
        var10 = function() {
            var0 = null;
            return var0;
        };
        var1.headerTitle = var10;
        var10 = function() {
            var3 = _closure1_slot14;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 22;
            var0 = var6[var0];
            var2 = undefined;
            var1 = var5.bind(var2)(var0);
            var0 = {};
            var4 = 'Onboarding Join Guild Modal';
            var0.location = var4;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.closeCreateGuildModal;
            var0.onClose = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var10;
        var0[var2] = var1;
        var1 = _closure1_slot11;
        var2 = var1.ACCEPT_INVITE;
        var1 = {};
        var10 = var9[var7];
        var10 = var8.bind(var6)(var10);
        var10 = var10.ImpressionNames;
        var10 = var10.GUILD_ADD_ACCEPT_INVITE;
        var1.impressionName = var10;
        var10 = _closure1_slot15;
        var1.impressionProperties = var10;
        var1.fullscreen = var4;
        var10 = function() {
            var0 = null;
            return var0;
        };
        var1.headerTitle = var10;
        var10 = function() {
            var0 = null;
            return var0;
        };
        var1.headerLeft = var10;
        var10 = function arg0() {
            var0 = arg0;
            var4 = var0.code;
            var3 = _closure1_slot14;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 23;
            var0 = var6[var0];
            var2 = undefined;
            var1 = var5.bind(var2)(var0);
            var0 = {};
            var0.code = var4;
            var4 = 11;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var4 = var4.closeCreateGuildModal;
            var0.onPressClose = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var10;
        var0[var2] = var1;
        var1 = _closure1_slot11;
        var2 = var1.CHANNEL_PROMPT;
        var1 = {};
        var7 = var9[var7];
        var7 = var8.bind(var6)(var7);
        var7 = var7.ImpressionNames;
        var7 = var7.GUILD_ADD_CHANNEL_PROMPT;
        var1.impressionName = var7;
        var7 = _closure1_slot15;
        var1.impressionProperties = var7;
        var1.fullscreen = var4;
        var7 = function() {
            var0 = null;
            return var0;
        };
        var1.headerTitle = var7;
        var7 = function arg0() {
            var0 = arg0;
            var5 = var0.guildId;
            var _closure3_slot0 = var5;
            var3 = _closure1_slot14;
            var1 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 24;
            var0 = var8[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {
                'hasSkip': true,
                'hasBack': false
            };
            var7 = _closure1_slot9;
            var0.onCancel = var7;
            var6 = function() {
                var2 = _closure1_slot16;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onSuccess = var6;
            var0.guildId = var5;
            var7 = _closure1_slot0;
            var4 = 21;
            var5 = var8[var4];
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var2)(var4);
            var4 = var4.t;
            var4 = var4["uHXB+F"];
            var4 = var5.bind(var6)(var4);
            var0.buttonText = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var7;
        var0[var2] = var1;
        var1 = _closure1_slot11;
        var2 = var1.JOIN_STUDENT_HUB;
        var1 = {};
        var1.impressionName = var6;
        var5 = _closure1_slot15;
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
            var3 = _closure1_slot14;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 25;
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
    };
    var _closure1_slot19 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Keyboard;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot8 = var6;
    var3 = var3.NOOP;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTemplateId;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CreateGuildModalStates;
    var _closure1_slot11 = var6;
    var6 = var3.GuildTemplateTriggers;
    var _closure1_slot12 = var6;
    var3 = var3.NUXGuildTemplatesAnalytics;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 14;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ImpressionGroups;
    var6 = var6.GUILD_ADD_FLOW;
    var3.impression_group = var6;
    var _closure1_slot15 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/components/NUFGuildTemplates.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot14;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 26;
        var0 = var9[var0];
        var2 = undefined;
        var0 = var8.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var10 = _closure1_slot4;
        var7 = var10.useMemo;
        var6 = function() { // Environment: var5
            var1 = _closure1_slot19;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var5 = new Array(0);
        var5 = var7.bind(var10)(var6, var5);
        var0.screens = var5;
        var5 = _closure1_slot5;
        var5 = var5.dismiss;
        var0.onWillFocus = var5;
        var5 = 21;
        var6 = var9[var5];
        var6 = var8.bind(var2)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["13/7kX"];
        var5 = var6.bind(var7)(var5);
        var0.headerBackTitle = var5;
        var4 = _closure1_slot11;
        var4 = var4.GUILD_TEMPLATES;
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 3217, 660, 10264, 7543, 33, 4679, 10248, 7736, 10246, 10316, 795, 481, 4705, 10265, 1220, 10263, 10267, 8962, 1234, 10270, 10271, 10317, 10291, 5786, 2]);