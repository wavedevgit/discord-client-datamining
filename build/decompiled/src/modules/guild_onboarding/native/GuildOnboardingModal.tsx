// modules/guild_onboarding/native/GuildOnboardingModal.tsx
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
        var0 = null;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var _closure2_slot0 = var4;
        var1 = var0.prompts;
        var _closure2_slot1 = var1;
        var1 = var0.connections;
        var1 = var0.selectOption;
        var _closure2_slot2 = var1;
        var1 = var0.completeOnboarding;
        var _closure2_slot3 = var1;
        var1 = var0.onFinish;
        var _closure2_slot4 = var1;
        var1 = var0.onClose;
        var _closure2_slot5 = var1;
        var1 = var0.landingAnimation;
        var _closure2_slot6 = var1;
        var1 = var0.isFirstOpen;
        var _closure2_slot7 = var1;
        var0 = var0.backShouldLeaveGuild;
        var _closure2_slot8 = var0;
        var2 = _closure1_slot6;
        var0 = var2.getGuild;
        var0 = var0.bind(var2)(var4);
        var _closure2_slot9 = var0;
        var2 = _closure1_slot4;
        var0 = var2.getRulesPrompt;
        var0 = var0.bind(var2)(var4);
        var _closure2_slot10 = var0;
        var0 = {};
        var2 = _closure1_slot9;
        var7 = var2.PROMPT;
        var2 = {};
        var6 = true;
        var2.fullscreen = var6;
        var5 = _closure1_slot13;
        var2.headerTitle = var5;
        var4 = _closure1_slot14;
        var2.headerRight = var4;
        var8 = function arg0() {
            _fun43577: for (var _fun43577_ip = 0;;) switch (_fun43577_ip) {
                case 0:
                    var7 = arg0;
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.guildId = var5;
                    var5 = null;
                    var8 = var5 == var7;
                    var6 = undefined;
                    if (var8) {
                        _fun43577_ip = 62;
                        continue _fun43577
                    }
                case 56:
                    var6 = var7.currentPrompt;
                case 62:
                    var7 = var5 != var6;
                    var5 = 0;
                    if (!var7) {
                        _fun43577_ip = 74;
                        continue _fun43577
                    }
                case 71:
                    var5 = var6;
                case 74:
                    var0.currentPromptIdx = var5;
                    var5 = _closure2_slot1;
                    var0.prompts = var5;
                    var5 = _closure2_slot2;
                    var0.selectOption = var5;
                    var5 = _closure2_slot5;
                    var0.onClose = var5;
                    var5 = _closure2_slot6;
                    var0.landingAnimation = var5;
                    var5 = _closure2_slot7;
                    var0.isFirstOpen = var5;
                    var4 = _closure2_slot8;
                    var0.backShouldLeaveGuild = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var2.render = var8;
        var0[var7] = var2;
        var2 = _closure1_slot9;
        var7 = var2.CONNECTIONS;
        var2 = {};
        var2.fullscreen = var6;
        var2.headerTitle = var5;
        var2.headerRight = var4;
        var10 = _closure1_slot0;
        var9 = _closure1_slot2;
        var8 = 11;
        var9 = var9[var8];
        var8 = undefined;
        var10 = var10.bind(var8)(var9);
        var9 = var10.getHeaderCloseButton;
        var8 = function() { // Environment: var3
            _fun43578: for (var _fun43578_ip = 0;;) switch (_fun43578_ip) {
                case 0:
                    var1 = _closure2_slot8;
                    if (var1) {
                        _fun43578_ip = 25;
                        continue _fun43578
                    }
                case 10:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun43578_ip = 199;
                    continue _fun43578;
                case 25:
                    var3 = _closure2_slot0;
                    var1 = _closure2_slot5;
                    var2 = _closure1_slot7;
                    var0 = var2.getLastSelectedChannelId;
                    var5 = var0.bind(var2)();
                    var2 = _closure1_slot5;
                    var0 = var2.getChannel;
                    var0 = var0.bind(var2)(var5);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun43578_ip = 79;
                        continue _fun43578
                    }
                case 70:
                    var2 = var0.guild_id;
                    if (!(var2 === var3)) {
                        _fun43578_ip = 134;
                        continue _fun43578
                    }
                case 79:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.transitionTo;
                    var2 = _closure1_slot11;
                    var3 = var2.ME;
                    var2 = {};
                    var7 = true;
                    var2.navigationReplace = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    _fun43578_ip = 193;
                    continue _fun43578;
                case 134:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.transitionTo;
                    var6 = _closure1_slot11;
                    var5 = var6.CHANNEL;
                    var4 = var0.guild_id;
                    var0 = var0.id;
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var2.bind(var3)(var0);
                case 193:
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 199:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var9.bind(var10)(var8);
        var2.headerLeft = var8;
        var8 = function() {
            _fun43579: for (var _fun43579_ip = 0;;) switch (_fun43579_ip) {
                case 0:
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.guildId = var5;
                    var5 = _closure2_slot1;
                    var7 = var5.length;
                    var5 = 0;
                    var5 = var5 === var7;
                    if (!var5) {
                        _fun43579_ip = 103;
                        continue _fun43579
                    }
                case 60:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 13;
                    var6 = var8[var6];
                    var9 = var7.bind(var2)(var6);
                    var8 = var9.showRulesInOnboarding;
                    var7 = _closure2_slot9;
                    var6 = _closure2_slot10;
                    var6 = var8.bind(var9)(var7, var6);
                    var5 = !var6;
                case 103:
                    var0.isLastStep = var5;
                    var4 = _closure2_slot3;
                    var0.onComplete = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var2.render = var8;
        var0[var7] = var2;
        var2 = _closure1_slot9;
        var7 = var2.COMPLETED;
        var2 = {};
        var2.fullscreen = var6;
        var2.headerTitle = var5;
        var2.headerRight = var4;
        var8 = function() {
            var3 = _closure1_slot12;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 14;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var5 = _closure2_slot0;
            var0.guildId = var5;
            var5 = _closure2_slot1;
            var0.prompts = var5;
            var4 = _closure2_slot3;
            var0.completeOnboarding = var4;
            var4 = function() {
                var2 = _closure2_slot5;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var1 = _closure2_slot4;
                var1 = var1.bind(var0)();
                return var0;
            };
            var0.onClose = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2.render = var8;
        var0[var7] = var2;
        var1 = _closure1_slot9;
        var2 = var1.RULES;
        var1 = {};
        var1.fullscreen = var6;
        var1.headerTitle = var5;
        var1.headerRight = var4;
        var3 = function() {
            var3 = _closure1_slot12;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 15;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.RulesPrompt;
            var0 = {};
            var5 = _closure2_slot0;
            var0.guildId = var5;
            var4 = _closure2_slot5;
            var0.onClose = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildOnboardingModalStates;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot10 = var6;
    var3 = var3.Routes;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/GuildOnboardingModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun43583: for (var _fun43583_ip = 0;;) switch (_fun43583_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.guildId;
                var _closure2_slot0 = var15;
                var11 = var0.onFinish;
                var _closure2_slot1 = var11;
                var10 = var0.onClose;
                var _closure2_slot2 = var10;
                var9 = var0.landingAnimation;
                var _closure2_slot3 = var9;
                var2 = var0.isFirstOpen;
                var _closure2_slot4 = var2;
                var8 = var0.backShouldLeaveGuild;
                var _closure2_slot5 = var8;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 16;
                var1 = var12[var6];
                var3 = undefined;
                var14 = var7.bind(var3)(var1);
                var13 = var14.useStateFromStores;
                var1 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var4
                    _fun43584: for (var _fun43584_ip = 0;;) switch (_fun43584_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var1 = var3.getGuild;
                            var0 = _closure2_slot0;
                            var3 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun43584_ip = 94;
                                continue _fun43584
                            }
                        case 33:
                            var5 = var3.features;
                            var4 = var5.has;
                            var1 = _closure1_slot10;
                            var1 = var1.MEMBER_VERIFICATION_GATE_ENABLED;
                            var1 = var4.bind(var5)(var1);
                            if (!var1) {
                                _fun43584_ip = 91;
                                continue _fun43584
                            }
                        case 62:
                            var4 = var3.features;
                            var3 = var4.has;
                            var2 = _closure1_slot10;
                            var2 = var2.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                            var2 = var3.bind(var4)(var2);
                            var1 = !var2;
                        case 91:
                            var0 = var1;
                        case 94:
                            return var0;
                    }
                };
                var5 = var13.bind(var14)(var5, var1);
                var _closure2_slot6 = var5;
                var1 = var12[var6];
                var17 = var7.bind(var3)(var1);
                var16 = var17.useStateFromStoresArray;
                var1 = _closure1_slot8;
                var14 = new Array(1);
                var14[0] = var1;
                var13 = function() { // Environment: var4
                    var2 = _closure1_slot8;
                    var1 = var2.getOnboardingPromptsForOnboarding;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var16.bind(var17)(var14, var13);
                var _closure2_slot7 = var14;
                var6 = var12[var6];
                var12 = var7.bind(var3)(var6);
                var7 = var12.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot8;
                    var1 = var2.getConnections;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var7.bind(var12)(var6, var1);
                var _closure2_slot8 = var1;
                var7 = _closure1_slot3;
                var13 = var7.useCallback;
                var12 = new Array(1);
                var12[0] = var15;
                var6 = function(arg0, arg1, arg2) { // Environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.selectOption;
                    var10 = _closure2_slot0;
                    var9 = arg0;
                    var8 = arg1;
                    var7 = arg2;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var13 = var13.bind(var7)(var6, var12);
                var _closure2_slot9 = var13;
                var16 = var7.useCallback;
                var12 = new Array(2);
                var12[0] = var15;
                var12[1] = var14;
                var6 = function() { // Environment: var4
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.completeOnboarding;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot7;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12 = var16.bind(var7)(var6, var12);
                var _closure2_slot10 = var12;
                var16 = var7.useEffect;
                var6 = new Array(2);
                var6[0] = var15;
                var6[1] = var5;
                var5 = function() { // Environment: var4
                    _fun43589: for (var _fun43589_ip = 0;;) switch (_fun43589_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun43589_ip = 50;
                                continue _fun43589
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchVerificationForm;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var16.bind(var7)(var5, var6);
                var6 = var7.useMemo;
                var5 = new Array(10);
                var5[0] = var15;
                var5[1] = var14;
                var5[2] = var1;
                var5[3] = var13;
                var5[4] = var12;
                var5[5] = var11;
                var5[6] = var10;
                var5[7] = var9;
                var5[8] = var2;
                var5[9] = var8;
                var4 = function() { // Environment: var4
                    var2 = _closure1_slot15;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.guildId = var3;
                    var3 = _closure2_slot7;
                    var1.prompts = var3;
                    var3 = _closure2_slot8;
                    var1.connections = var3;
                    var3 = _closure2_slot9;
                    var1.selectOption = var3;
                    var3 = _closure2_slot10;
                    var1.completeOnboarding = var3;
                    var3 = _closure2_slot1;
                    var1.onFinish = var3;
                    var3 = _closure2_slot2;
                    var1.onClose = var3;
                    var3 = _closure2_slot3;
                    var1.landingAnimation = var3;
                    var3 = _closure2_slot4;
                    var1.isFirstOpen = var3;
                    var0 = _closure2_slot5;
                    var1.backShouldLeaveGuild = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var6.bind(var7)(var4, var5);
                if (!var2) {
                    _fun43583_ip = 366;
                    continue _fun43583
                }
            case 355:
                var2 = var1.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun43583_ip = 378;
                    continue _fun43583
                }
            case 366:
                var1 = _closure1_slot9;
                var4 = var1.PROMPT;
                _fun43583_ip = 388;
                continue _fun43583;
            case 378:
                var1 = _closure1_slot9;
                var4 = var1.CONNECTIONS;
            case 388:
                var2 = _closure1_slot12;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 19;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.screens = var5;
                var0.initialRouteName = var4;
                var4 = 20;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["13/7kX"];
                var4 = var5.bind(var6)(var4);
                var0.headerBackTitle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4701, 1372, 1410, 1672, 4688, 4685, 660, 33, 1220, 4702, 4705, 12259, 4582, 12260, 4738, 566, 4691, 7502, 5837, 1234, 2]);