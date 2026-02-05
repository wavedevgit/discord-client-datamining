// modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var14 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var15;
    var0 = function arg0, arg1() {
        _fun41729: for (var _fun41729_ip = 0;;) switch (_fun41729_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41729_ip = 46;
                    continue _fun41729
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun41729_ip = 55;
                    continue _fun41729
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun41729_ip = 343;
                    continue _fun41729
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41729_ip = 323;
                    continue _fun41729
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41729_ip = 283;
                    continue _fun41729
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41729_ip = 270;
                    continue _fun41729
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun41729_ip = 163;
                    continue _fun41729
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun41729_ip = 179;
                    continue _fun41729
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41729_ip = 249;
                    continue _fun41729
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41729_ip = 249;
                    continue _fun41729
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41729_ip = 234;
                    continue _fun41729
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41729_ip = 247;
                    continue _fun41729
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun41729_ip = 265;
                continue _fun41729;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun41729_ip = 283;
                continue _fun41729;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun41729_ip = 323;
                    continue _fun41729
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun41729_ip = 330;
                    continue _fun41729
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41730: for (var _fun41730_ip = 0;;) switch (_fun41730_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41730_ip = 56;
                                continue _fun41730
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun41730_ip = 67;
                            continue _fun41730;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun41731: for (var _fun41731_ip = 0;;) switch (_fun41731_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41731_ip = 23;
                    continue _fun41731
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41731_ip = 33;
                    continue _fun41731
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun41731_ip = 70;
                    continue _fun41731
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41731_ip = 55;
                    continue _fun41731
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var7 = function() {
        var0 = {
            'id': null,
            'title': null,
            'options': null,
            'singleSelect': false,
            'required': false,
            'inOnboarding': true
        };
        var1 = global;
        var2 = var1.String;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var6 = undefined;
        var1 = var2.bind(var6)(var1);
        var0.id = var1;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 4;
        var3 = var7[var2];
        var3 = var5.bind(var6)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var5.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.vY91C9;
        var2 = var3.bind(var4)(var2);
        var0.title = var2;
        var2 = new Array(0);
        var0.options = var2;
        var1 = _closure1_slot7;
        var1 = var1.MULTIPLE_CHOICE;
        var0.type = var1;
        return var0;
    };
    var _closure1_slot13 = var7;
    var6 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var4 = var1.options;
        var3 = var4.map;
        var2 = function(arg0) { // Environment: var2
            _fun41734: for (var _fun41734_ip = 0;;) switch (_fun41734_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.channel_ids;
                    var0.channelIds = var2;
                    var2 = var1.role_ids;
                    var0.roleIds = var2;
                    var2 = var1.emoji;
                    var0.emoji = var2;
                    var2 = var1.title;
                    var0.title = var2;
                    var2 = var1.description;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = '';
                    if (!var3) {
                        _fun41734_ip = 77;
                        continue _fun41734
                    }
                case 74:
                    var1 = var2;
                case 77:
                    var0.description = var1;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var0.options = var2;
        var2 = var1.title;
        var0.title = var2;
        var2 = var1.single_select;
        var0.singleSelect = var2;
        var2 = var1.disabled;
        var0.disabled = var2;
        var2 = var1.required;
        var0.required = var2;
        var2 = var1.in_onboarding;
        var0.inOnboarding = var2;
        var1 = var1.type;
        var0.type = var1;
        return var0;
    };
    var _closure1_slot14 = var6;
    var4 = function arg0() {
        _fun41735: for (var _fun41735_ip = 0;;) switch (_fun41735_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.connection_type;
                var0 = _closure1_slot8;
                var0 = var0.APPLICATION;
                if (!(var2 !== var0)) {
                    _fun41735_ip = 58;
                    continue _fun41735
                }
            case 26:
                var3 = var1.provider_id;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'provider:';
                var0 = var2.bind(var0)(var3);
                _fun41735_ip = 88;
                continue _fun41735;
            case 58:
                var3 = var1.application_id;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'app:';
                var0 = var2.bind(var1)(var3);
            case 88:
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var3 = function arg0() {
        _fun41736: for (var _fun41736_ip = 0;;) switch (_fun41736_ip) {
            case 0:
                var2 = arg0;
                var0 = new Array(0);
                var4 = var2.connection_type;
                var3 = _closure1_slot8;
                var3 = var3.APPLICATION;
                if (!(var4 !== var3)) {
                    _fun41736_ip = 53;
                    continue _fun41736
                }
            case 30:
                var4 = var2.connection_type;
                var3 = _closure1_slot8;
                var3 = var3.PROVIDER_CONNECTED_ACCOUNT;
                if (!(var4 === var3)) {
                    _fun41736_ip = 419;
                    continue _fun41736
                }
            case 53:
                var4 = var2.connection_type;
                var3 = _closure1_slot8;
                var3 = var3.APPLICATION;
                if (!(var4 !== var3)) {
                    _fun41736_ip = 256;
                    continue _fun41736
                }
            case 76:
                var4 = var2.connection_type;
                var3 = _closure1_slot8;
                var3 = var3.PROVIDER_CONNECTED_ACCOUNT;
                if (!(var4 === var3)) {
                    _fun41736_ip = 367;
                    continue _fun41736
                }
            case 99:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = 5;
                var3 = var3[var6];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var4 = var7.isNullOrEmpty;
                var3 = var2.provider_id;
                var3 = var4.bind(var7)(var3);
                if (var3) {
                    _fun41736_ip = 182;
                    continue _fun41736
                }
            case 141:
                var7 = _closure1_slot10;
                var4 = var7.includes;
                var3 = var2.provider_id;
                var3 = var4.bind(var7)(var3);
                if (var3) {
                    _fun41736_ip = 198;
                    continue _fun41736
                }
            case 164:
                var4 = var0.push;
                var3 = 'Invalid platform ID';
                var3 = var4.bind(var0)(var3);
                _fun41736_ip = 198;
                continue _fun41736;
            case 182:
                var4 = var0.push;
                var3 = 'Platform ID is required for platform connections';
                var3 = var4.bind(var0)(var3);
            case 198:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var5 = var4.bind(var5)(var3);
                var4 = var5.isNullOrEmpty;
                var3 = var2.application_id;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun41736_ip = 367;
                    continue _fun41736
                }
            case 238:
                var4 = var0.push;
                var3 = 'Application ID not allowed for platform connections';
                var3 = var4.bind(var0)(var3);
                _fun41736_ip = 367;
                continue _fun41736;
            case 256:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 5;
                var3 = var3[var5];
                var4 = undefined;
                var7 = var6.bind(var4)(var3);
                var6 = var7.isNullOrEmpty;
                var3 = var2.application_id;
                var3 = var6.bind(var7)(var3);
                if (!var3) {
                    _fun41736_ip = 314;
                    continue _fun41736
                }
            case 298:
                var6 = var0.push;
                var3 = 'Application ID is required for application connections';
                var3 = var6.bind(var0)(var3);
            case 314:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var4 = var3.bind(var4)(var1);
                var3 = var4.isNullOrEmpty;
                var1 = var2.provider_id;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun41736_ip = 367;
                    continue _fun41736
                }
            case 351:
                var3 = var0.push;
                var1 = 'Platform ID not allowed for application connections';
                var1 = var3.bind(var0)(var1);
            case 367:
                var3 = var2.description;
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun41736_ip = 398;
                    continue _fun41736
                }
            case 381:
                var2 = var2.description;
                var3 = var2.length;
                var2 = 100;
                var1 = var3 > var2;
            case 398:
                if (!var1) {
                    _fun41736_ip = 435;
                    continue _fun41736
                }
            case 401:
                var2 = var0.push;
                var1 = 'Description must be 100 characters or less';
                var1 = var2.bind(var0)(var1);
                _fun41736_ip = 435;
                continue _fun41736;
            case 419:
                var2 = var0.push;
                var1 = 'Invalid connection type';
                var1 = var2.bind(var0)(var1);
            case 435:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var0 = ['id'];
    var _closure1_slot3 = var0;
    var0 = ['id'];
    var _closure1_slot4 = var0;
    var13 = global;
    var10 = var13.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var16 = 0;
    var5 = var15[var16];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var12 = 1;
    var5 = var15[var12];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var15[var5];
    var5 = var14.bind(var0)(var5);
    var17 = var5.PlatformTypes;
    var11 = {};
    var11.CUSTOMIZE = var16;
    var5 = 'CUSTOMIZE';
    var11[var16] = var5;
    var11.BROWSE = var12;
    var5 = 'BROWSE';
    var11[var12] = var5;
    var10 = {};
    var10.MULTIPLE_CHOICE = var16;
    var5 = 'MULTIPLE_CHOICE';
    var10[var16] = var5;
    var10.DROPDOWN = var12;
    var5 = 'DROPDOWN';
    var10[var12] = var5;
    var _closure1_slot7 = var10;
    var9 = {};
    var9.ONBOARDING_DEFAULT = var16;
    var5 = 'ONBOARDING_DEFAULT';
    var9[var16] = var5;
    var9.ONBOARDING_ADVANCED = var12;
    var5 = 'ONBOARDING_ADVANCED';
    var9[var12] = var5;
    var8 = {};
    var8.APPLICATION = var16;
    var5 = 'APPLICATION';
    var8[var16] = var5;
    var8.PROVIDER_CONNECTED_ACCOUNT = var12;
    var5 = 'PROVIDER_CONNECTED_ACCOUNT';
    var8[var12] = var5;
    var _closure1_slot8 = var8;
    var18 = var13.Set;
    var16 = var17.PLAYSTATION_STAGING;
    var5 = new Array(8);
    var5[0] = var16;
    var16 = var17.CONTACTS;
    var5[1] = var16;
    var16 = var17.DOMAIN;
    var5[2] = var16;
    var16 = var17.TWITTER_LEGACY;
    var5[3] = var16;
    var16 = var17.MASTODON;
    var5[4] = var16;
    var16 = var17.INSTAGRAM;
    var5[5] = var16;
    var16 = var17.LEAGUE_OF_LEGENDS;
    var5[6] = var16;
    var16 = var17.SKYPE;
    var5[7] = var16;
    var16 = var18.prototype;
    var16 = Object.create(var16, {
        constructor: {
            value: var18
        }
    });
    var22 = var16;
    var21 = var5;
    var5 = new var22[var18](var21, var20);
    var5 = var5 instanceof Object ? var5 : var16;
    var _closure1_slot9 = var5;
    var16 = var13.Object;
    var13 = var16.values;
    var17 = var13.bind(var16)(var17);
    var16 = var17.filter;
    var13 = function(arg0) { // Environment: var1
        var2 = _closure1_slot9;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = !var0;
        return var0;
    };
    var13 = var16.bind(var17)(var13);
    var _closure1_slot10 = var13;
    var13 = 6;
    var13 = var15[var13];
    var15 = var14.bind(var0)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/guild_onboarding/GuildOnboardingPromptsConstants.tsx';
    var13 = var14.bind(var15)(var13);
    var13 = 100;
    var2.MAX_PROMPT_TITLE_LENGTH = var13;
    var14 = 50;
    var2.MAX_PROMPT_OPTION_TITLE_LENGTH = var14;
    var2.MAX_PROMPT_OPTION_DESCRIPTION_LENGTH = var13;
    var15 = 15;
    var2.MAX_NUM_PROMPTS = var15;
    var15 = 12;
    var2.MULTIPLE_CHOICE_MAX_NUM_OPTIONS = var15;
    var2.DROPDOWN_MAX_NUM_OPTIONS = var14;
    var14 = 25;
    var2.MAX_DEFAULT_CHANNEL_IDS = var14;
    var14 = 10;
    var2.MAX_NUMBER_OF_ONBOARDING_CONNECTIONS = var14;
    var2.MAX_CONNECTION_DESCRIPTION_LENGTH = var13;
    var13 = 4;
    var2.MAX_NUMBER_OF_ONBOARDING_PROMPTS_IN_ONBOARDING = var13;
    var2.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN = var12;
    var12 = 13;
    var2.ONBOARDING_PROMPT_TYPE_SWITCH_THRESHOLD = var12;
    var2.GuildOnboardingTab = var11;
    var2.OnboardingPromptType = var10;
    var2.GuildOnboardingMode = var9;
    var2.OnboardingConnectionType = var8;
    var8 = function arg0() {
        _fun41738: for (var _fun41738_ip = 0;;) switch (_fun41738_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.options;
                var1 = var0.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun41738_ip = 94;
                    continue _fun41738
                }
            case 19:
                var1 = _closure1_slot13;
                var3 = undefined;
                var2 = var1.bind(var3)();
                var1 = var2.id;
                var4 = _closure1_slot6;
                var1 = _closure1_slot3;
                var2 = var4.bind(var3)(var2, var1);
                var1 = var5.id;
                var1 = _closure1_slot4;
                var1 = var4.bind(var3)(var5, var1);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)(var2, var1);
                return var0;
            case 94:
                var0 = false;
                return var0;
        }
    };
    var2.isDefaultPrompt = var8;
    var2.getDefaultPrompt = var7;
    var7 = function arg0() {
        var0 = {
            'id': null,
            'title': '',
            'options': null,
            'singleSelect': false,
            'required': false
        };
        var1 = global;
        var3 = var1.String;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var0.id = var1;
        var1 = new Array(0);
        var0.options = var1;
        var1 = arg0;
        var0.inOnboarding = var1;
        var1 = _closure1_slot7;
        var1 = var1.MULTIPLE_CHOICE;
        var0.type = var1;
        return var0;
    };
    var2.getEmptyPrompt = var7;
    var7 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var4 = var1.options;
        var3 = var4.map;
        var2 = function(arg0) { // Environment: var2
            _fun41741: for (var _fun41741_ip = 0;;) switch (_fun41741_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.channelIds;
                    var0.channel_ids = var2;
                    var2 = var1.roleIds;
                    var0.role_ids = var2;
                    var2 = var1.emoji;
                    var0.emoji = var2;
                    var5 = var1.emoji;
                    var4 = null;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun41741_ip = 69;
                        continue _fun41741
                    }
                case 64:
                    var3 = var5.id;
                case 69:
                    var0.emoji_id = var3;
                    var5 = var1.emoji;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun41741_ip = 94;
                        continue _fun41741
                    }
                case 89:
                    var3 = var5.name;
                case 94:
                    var0.emoji_name = var3;
                    var3 = var1.emoji;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun41741_ip = 120;
                        continue _fun41741
                    }
                case 114:
                    var2 = var3.animated;
                case 120:
                    var0.emoji_animated = var2;
                    var2 = var1.title;
                    var0.title = var2;
                    var1 = var1.description;
                    var0.description = var1;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2);
        var0.options = var2;
        var2 = var1.title;
        var0.title = var2;
        var2 = var1.singleSelect;
        var0.single_select = var2;
        var2 = var1.disabled;
        var0.disabled = var2;
        var2 = var1.required;
        var0.required = var2;
        var2 = var1.inOnboarding;
        var0.in_onboarding = var2;
        var1 = var1.type;
        var0.type = var1;
        return var0;
    };
    var2.clientPromptToServerPrompt = var7;
    var2.serverPromptToClientPrompt = var6;
    var6 = function arg0() {
        _fun41742: for (var _fun41742_ip = 0;;) switch (_fun41742_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = var1.prompts;
                var3 = var4.map;
                var2 = _closure1_slot14;
                var2 = var3.bind(var4)(var2);
                var0.prompts = var2;
                var2 = var1.default_channel_ids;
                var0.defaultChannelIds = var2;
                var3 = var1.responses;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun41742_ip = 60;
                    continue _fun41742
                }
            case 56:
                var3 = new Array(0);
            case 60:
                var0.responses = var3;
                var3 = var1.mode;
                var0.mode = var3;
                var3 = var1.enabled;
                var0.enabled = var3;
                var3 = var1.onboarding_prompts_seen;
                if (!(var2 == var3)) {
                    _fun41742_ip = 95;
                    continue _fun41742
                }
            case 93:
                var3 = {};
            case 95:
                var0.onboardingPromptsSeen = var3;
                var3 = var1.onboarding_responses_seen;
                if (!(var2 == var3)) {
                    _fun41742_ip = 112;
                    continue _fun41742
                }
            case 110:
                var3 = {};
            case 112:
                var0.onboardingResponsesSeen = var3;
                var3 = var1.below_requirements;
                var0.belowRequirements = var3;
                var1 = var1.connections;
                if (!(var2 == var1)) {
                    _fun41742_ip = 144;
                    continue _fun41742
                }
            case 140:
                var1 = new Array(0);
            case 144:
                var0.connections = var1;
                return var0;
        }
    };
    var2.serverApiResponseToClientState = var6;
    var6 = function arg0() {
        _fun41743: for (var _fun41743_ip = 0;;) switch (_fun41743_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 == var2;
                if (var0) {
                    _fun41743_ip = 36;
                    continue _fun41743
                }
            case 12:
                var1 = var2.id;
                var1 = var3 == var1;
                if (!var1) {
                    _fun41743_ip = 33;
                    continue _fun41743
                }
            case 24:
                var2 = var2.name;
                var1 = var3 == var2;
            case 33:
                var0 = var1;
            case 36:
                return var0;
        }
    };
    var2.isEmojiEmpty = var6;
    var2.EXCLUDED_ONBOARDING_PLATFORM_TYPES = var5;
    var2.getConnectionIdentifier = var4;
    var4 = function arg0() {
        _fun41744: for (var _fun41744_ip = 0;;) switch (_fun41744_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = ':';
                var4 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = 2;
                var2 = var2.bind(var1)(var4, var0);
                var0 = 0;
                var6 = var2[var0];
                var0 = 1;
                var2 = var2[var0];
                var0 = 'app';
                if (!(var0 === var6)) {
                    _fun41744_ip = 68;
                    continue _fun41744
                }
            case 56:
                if (!(var1 !== var2)) {
                    _fun41744_ip = 68;
                    continue _fun41744
                }
            case 60:
                var0 = '';
                if (!(var0 === var2)) {
                    _fun41744_ip = 122;
                    continue _fun41744
                }
            case 68:
                var5 = 'provider';
                var0 = null;
                if (!(var5 === var6)) {
                    _fun41744_ip = 120;
                    continue _fun41744
                }
            case 78:
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun41744_ip = 120;
                    continue _fun41744
                }
            case 84:
                var1 = '';
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun41744_ip = 120;
                    continue _fun41744
                }
            case 94:
                var1 = {};
                var4 = _closure1_slot8;
                var4 = var4.PROVIDER_CONNECTED_ACCOUNT;
                var1.type = var4;
                var1.providerId = var2;
                var0 = var1;
            case 120:
                _fun41744_ip = 145;
                continue _fun41744;
            case 122:
                var1 = {};
                var3 = _closure1_slot8;
                var3 = var3.APPLICATION;
                var1.type = var3;
                var1.applicationId = var2;
                var0 = var1;
            case 145:
                return var0;
        }
    };
    var2.parseConnectionIdentifier = var4;
    var2.validateOnboardingConnection = var3;
    var1 = function arg0() {
        _fun41745: for (var _fun41745_ip = 0;;) switch (_fun41745_ip) {
            case 0:
                var3 = arg0;
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var14 = var2;
                var1 = new var14[var1](var13);
                var1 = var1 instanceof Object ? var1 : var2;
                var _closure2_slot1 = var1;
                var9 = function arg0() {
                    _fun41746: for (var _fun41746_ip = 0;;) switch (_fun41746_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var5 = _closure1_slot16;
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var7 = var5.bind(var0)(var4);
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var6 = var7.map;
                            var3 = function(arg0) { // Environment: var3
                                var1 = _closure3_slot0;
                                var0 = 1;
                                var4 = var1 + var0;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var2 = 'Connection ';
                                var1 = ': ';
                                var0 = arg0;
                                var0 = var3.bind(var2)(var4, var1, var0);
                                return var0;
                            };
                            var9 = var6.bind(var7)(var3);
                            var3 = new Array(0);
                            var8 = 0;
                            var10 = var3;
                            var6 = arraySpread(var10, var9, var8);
                            var10 = var4;
                            var9 = var3;
                            var8 = var5;
                            var3 = apply(var10, var9, var8);
                            var3 = _closure1_slot15;
                            var2 = _closure2_slot2;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot1;
                            var2 = var4.has;
                            var2 = var2.bind(var4)(var3);
                            if (!var2) {
                                _fun41746_ip = 130;
                                continue _fun41746
                            }
                        case 110:
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var2 = 'Duplicate connection configuration';
                            var2 = var4.bind(var5)(var2);
                        case 130:
                            var2 = _closure2_slot1;
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var2 = _closure1_slot11;
                var1 = var3.entries;
                var1 = var1.bind(var3)();
                var7 = undefined;
                var6 = var2.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = 2;
                var4 = 0;
                var3 = 1;
                if (var1) {
                    _fun41745_ip = 141;
                    continue _fun41745
                }
            case 94:
                var11 = var2.value;
                var1 = _closure1_slot5;
                var11 = var1.bind(var7)(var11, var5);
                var1 = var11[var4];
                var11 = var11[var3];
                var _closure2_slot2 = var11;
                var1 = var9.bind(var7)(var1);
                var11 = var6.bind(var7)();
                var1 = var11.done;
                var2 = var11;
                if (!var1) {
                    _fun41745_ip = 94;
                    continue _fun41745
                }
            case 141:
                return var0;
        }
    };
    var2.validateOnboardingConnections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 660, 644, 1234, 1607, 2]);