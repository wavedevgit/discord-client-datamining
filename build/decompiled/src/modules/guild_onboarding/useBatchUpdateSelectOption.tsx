// modules/guild_onboarding/useBatchUpdateSelectOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = var3;
    var3 = {};
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/useBatchUpdateSelectOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 8;
        var3 = var3[var0];
        var0 = undefined;
        var7 = var4.bind(var0)(var3);
        var6 = var7.useStateFromStores;
        var0 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var0;
        var3 = new Array(1);
        var3[0] = var5;
        var0 = function() { // Environment: var1
            _fun78018: for (var _fun78018_ip = 0;;) switch (_fun78018_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getPendingResponseOptions;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun78018_ip = 37;
                        continue _fun78018
                    }
                case 33:
                    var0 = _closure1_slot7;
                case 37:
                    return var0;
            }
        };
        var0 = var6.bind(var7)(var4, var0, var3);
        var _closure2_slot1 = var0;
        var4 = _closure1_slot3;
        var6 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot8;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot8;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var0;
        var0 = function() { // Environment: var1
            _fun78021: for (var _fun78021_ip = 0;;) switch (_fun78021_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun78021_ip = 49;
                        continue _fun78021
                    }
                case 16:
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.keys;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var2 !== var3;
                case 49:
                    if (!var1) {
                        _fun78021_ip = 92;
                        continue _fun78021
                    }
                case 52:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.updateOnboardingResponses;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 92:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0, var2);
        var0 = {};
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg0, arg1, arg2) { // Environment: var1
            var8 = arg0;
            var7 = arg1;
            var12 = arg2;
            var3 = _closure1_slot5;
            var0 = var3.getOnboardingResponses;
            var5 = _closure2_slot0;
            var6 = var0.bind(var3)(var5);
            var3 = function arg0, arg1, arg2, arg3() {
                _fun78023: for (var _fun78023_ip = 0;;) switch (_fun78023_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = arg1;
                        var1 = arg2;
                        var _closure4_slot0 = var0;
                        var2 = arg3;
                        var _closure4_slot1 = var2;
                        var2 = var4.singleSelect;
                        if (!var2) {
                            _fun78023_ip = 37;
                            continue _fun78023
                        }
                    case 31:
                        if (var1) {
                            _fun78023_ip = 267;
                            continue _fun78023
                        }
                    case 37:
                        if (var1) {
                            _fun78023_ip = 239;
                            continue _fun78023
                        }
                    case 43:
                        var5 = var4.options;
                        var2 = var5.filter;
                        var1 = function(arg0) { // Environment: var3
                            var2 = _closure4_slot1;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5 = var2.bind(var5)(var1);
                        var2 = var5.filter;
                        var1 = function(arg0) { // Environment: var3
                            var0 = _closure4_slot0;
                            var1 = var0.id;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var11 = var2.bind(var5)(var1);
                        var2 = var5.map;
                        var1 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.roleIds;
                            return var0;
                        };
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.flat;
                        var7 = var1.bind(var2)();
                        var6 = var7.filter;
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 6;
                        var5 = var9[var2];
                        var8 = undefined;
                        var5 = var10.bind(var8)(var5);
                        var5 = var5.isNotNullish;
                        var7 = var6.bind(var7)(var5);
                        var6 = var11.map;
                        var5 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.roleIds;
                            return var0;
                        };
                        var6 = var6.bind(var11)(var5);
                        var5 = var6.flat;
                        var6 = var5.bind(var6)();
                        var5 = var6.filter;
                        var2 = var9[var2];
                        var2 = var10.bind(var8)(var2);
                        var2 = var2.isNotNullish;
                        var6 = var5.bind(var6)(var2);
                        var2 = new Array(0);
                        var5 = _closure1_slot1;
                        var1 = 5;
                        var1 = var9[var1];
                        var5 = var5.bind(var8)(var1);
                        var1 = var5.difference;
                        var1 = var1.bind(var5)(var7, var6);
                        _fun78023_ip = 434;
                        continue _fun78023;
                    case 239:
                        var6 = var0.roleIds;
                        var5 = null;
                        if (!(var5 == var6)) {
                            _fun78023_ip = 255;
                            continue _fun78023
                        }
                    case 251:
                        var6 = new Array(0);
                    case 255:
                        var1 = new Array(0);
                        var2 = var6;
                        _fun78023_ip = 434;
                        continue _fun78023;
                    case 267:
                        var5 = var4.options;
                        var4 = var5.find;
                        var3 = function(arg0) { // Environment: var3
                            var2 = _closure4_slot1;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var8 = var4.bind(var5)(var3);
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var9 = 5;
                        var3 = var3[var9];
                        var4 = undefined;
                        var11 = var6.bind(var4)(var3);
                        var10 = var11.difference;
                        var6 = var0.roleIds;
                        var7 = null;
                        if (!(var7 == var6)) {
                            _fun78023_ip = 336;
                            continue _fun78023
                        }
                    case 332:
                        var6 = new Array(0);
                    case 336:
                        var12 = var7 == var8;
                        var3 = undefined;
                        if (var12) {
                            _fun78023_ip = 351;
                            continue _fun78023
                        }
                    case 345:
                        var3 = var8.roleIds;
                    case 351:
                        if (!(var7 == var3)) {
                            _fun78023_ip = 359;
                            continue _fun78023
                        }
                    case 355:
                        var3 = new Array(0);
                    case 359:
                        var3 = var10.bind(var11)(var6, var3);
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.difference;
                        var9 = var7 == var8;
                        var4 = undefined;
                        if (var9) {
                            _fun78023_ip = 403;
                            continue _fun78023
                        }
                    case 397:
                        var4 = var8.roleIds;
                    case 403:
                        if (!(var7 == var4)) {
                            _fun78023_ip = 411;
                            continue _fun78023
                        }
                    case 407:
                        var4 = new Array(0);
                    case 411:
                        var0 = var0.roleIds;
                        if (!(var7 == var0)) {
                            _fun78023_ip = 425;
                            continue _fun78023
                        }
                    case 421:
                        var0 = new Array(0);
                    case 425:
                        var1 = var5.bind(var6)(var4, var0);
                        var2 = var3;
                    case 434:
                        var0 = {};
                        var0.addedRoleIds = var2;
                        var0.removedRoleIds = var1;
                        return var0;
                }
            };
            var0 = undefined;
            var19 = undefined;
            var18 = var8;
            var17 = var7;
            var16 = var12;
            var15 = var6;
            var3 = var19[var3](var18, var17, var16, var15, var14);
            var4 = var3.addedRoleIds;
            var3 = var3.removedRoleIds;
            var9 = {};
            var9.guildId = var5;
            var9.prompt = var8;
            var9.option = var7;
            var9.selected = var12;
            var9.responses = var6;
            var6 = function arg0() {
                _fun78029: for (var _fun78029_ip = 0;;) switch (_fun78029_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = var2.guildId;
                        var4 = var2.prompt;
                        var0 = var2.option;
                        var _closure4_slot0 = var0;
                        var1 = var2.selected;
                        var2 = var2.responses;
                        var _closure4_slot1 = var2;
                        var2 = var4.singleSelect;
                        if (!var2) {
                            _fun78029_ip = 57;
                            continue _fun78029
                        }
                    case 51:
                        if (var1) {
                            _fun78029_ip = 287;
                            continue _fun78029
                        }
                    case 57:
                        if (var1) {
                            _fun78029_ip = 259;
                            continue _fun78029
                        }
                    case 63:
                        var6 = var4.options;
                        var2 = var6.filter;
                        var1 = function(arg0) { // Environment: var3
                            var2 = _closure4_slot1;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var2.bind(var6)(var1);
                        var2 = var6.filter;
                        var1 = function(arg0) { // Environment: var3
                            var0 = _closure4_slot0;
                            var1 = var0.id;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var12 = var2.bind(var6)(var1);
                        var2 = var6.map;
                        var1 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.channelIds;
                            return var0;
                        };
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.flat;
                        var8 = var1.bind(var2)();
                        var7 = var8.filter;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 6;
                        var6 = var10[var2];
                        var9 = undefined;
                        var6 = var11.bind(var9)(var6);
                        var6 = var6.isNotNullish;
                        var8 = var7.bind(var8)(var6);
                        var7 = var12.map;
                        var6 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.channelIds;
                            return var0;
                        };
                        var7 = var7.bind(var12)(var6);
                        var6 = var7.flat;
                        var7 = var6.bind(var7)();
                        var6 = var7.filter;
                        var2 = var10[var2];
                        var2 = var11.bind(var9)(var2);
                        var2 = var2.isNotNullish;
                        var7 = var6.bind(var7)(var2);
                        var2 = new Array(0);
                        var6 = _closure1_slot1;
                        var1 = 5;
                        var1 = var10[var1];
                        var6 = var6.bind(var9)(var1);
                        var1 = var6.difference;
                        var1 = var1.bind(var6)(var8, var7);
                        _fun78029_ip = 454;
                        continue _fun78029;
                    case 259:
                        var7 = var0.channelIds;
                        var6 = null;
                        if (!(var6 == var7)) {
                            _fun78029_ip = 275;
                            continue _fun78029
                        }
                    case 271:
                        var7 = new Array(0);
                    case 275:
                        var1 = new Array(0);
                        var2 = var7;
                        _fun78029_ip = 454;
                        continue _fun78029;
                    case 287:
                        var6 = var4.options;
                        var4 = var6.find;
                        var3 = function(arg0) { // Environment: var3
                            var2 = _closure4_slot1;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var9 = var4.bind(var6)(var3);
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var10 = 5;
                        var3 = var3[var10];
                        var4 = undefined;
                        var12 = var7.bind(var4)(var3);
                        var11 = var12.difference;
                        var7 = var0.channelIds;
                        var8 = null;
                        if (!(var8 == var7)) {
                            _fun78029_ip = 356;
                            continue _fun78029
                        }
                    case 352:
                        var7 = new Array(0);
                    case 356:
                        var13 = var8 == var9;
                        var3 = undefined;
                        if (var13) {
                            _fun78029_ip = 371;
                            continue _fun78029
                        }
                    case 365:
                        var3 = var9.channelIds;
                    case 371:
                        if (!(var8 == var3)) {
                            _fun78029_ip = 379;
                            continue _fun78029
                        }
                    case 375:
                        var3 = new Array(0);
                    case 379:
                        var3 = var11.bind(var12)(var7, var3);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.difference;
                        var10 = var8 == var9;
                        var4 = undefined;
                        if (var10) {
                            _fun78029_ip = 423;
                            continue _fun78029
                        }
                    case 417:
                        var4 = var9.channelIds;
                    case 423:
                        if (!(var8 == var4)) {
                            _fun78029_ip = 431;
                            continue _fun78029
                        }
                    case 427:
                        var4 = new Array(0);
                    case 431:
                        var0 = var0.channelIds;
                        if (!(var8 == var0)) {
                            _fun78029_ip = 445;
                            continue _fun78029
                        }
                    case 441:
                        var0 = new Array(0);
                    case 445:
                        var1 = var6.bind(var7)(var4, var0);
                        var2 = var3;
                    case 454:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 7;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var6.bind(var3)(var4);
                        var3 = var4.hasNotSetUpChannelOptIn;
                        var3 = var3.bind(var4)(var5);
                        if (!var3) {
                            _fun78029_ip = 539;
                            continue _fun78029
                        }
                    case 493:
                        var3 = var2.push;
                        var4 = _closure1_slot5;
                        var0 = var4.getDefaultChannelIds;
                        var15 = var0.bind(var4)(var5);
                        var0 = new Array(0);
                        var14 = 0;
                        var16 = var0;
                        var4 = arraySpread(var16, var15, var14);
                        var16 = var3;
                        var15 = var0;
                        var14 = var2;
                        var0 = apply(var16, var15, var14);
                    case 539:
                        var0 = {};
                        var0.addedChannelIds = var2;
                        var0.removedChannelIds = var1;
                        return var0;
                }
            };
            var6 = var6.bind(var0)(var9);
            var14 = var6.addedChannelIds;
            var11 = var6.removedChannelIds;
            var10 = {};
            var13 = var14.reduce;
            var9 = function(arg0, arg1) { // Environment: var2
                var0 = arg0;
                var2 = arg1;
                var5 = _closure1_slot4;
                var4 = var5.getChannelIdFlags;
                var1 = _closure2_slot0;
                var7 = var4.bind(var5)(var1, var2);
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 10;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.setFlag;
                var3 = _closure1_slot6;
                var4 = var3.OPT_IN_ENABLED;
                var3 = true;
                var3 = var5.bind(var6)(var7, var4, var3);
                var1.flags = var3;
                var0[var2] = var1;
                return var0;
            };
            var6 = {};
            var17 = var13.bind(var14)(var9, var6);
            var18 = var10;
            var6 = copyDataProperties(var18, var17);
            var9 = var11.reduce;
            var6 = function(arg0, arg1) { // Environment: var2
                var0 = arg0;
                var2 = arg1;
                var5 = _closure1_slot4;
                var4 = var5.getChannelIdFlags;
                var1 = _closure2_slot0;
                var7 = var4.bind(var5)(var1, var2);
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 10;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.setFlag;
                var3 = _closure1_slot6;
                var4 = var3.OPT_IN_ENABLED;
                var3 = false;
                var3 = var5.bind(var6)(var7, var4, var3);
                var1.flags = var3;
                var0[var2] = var1;
                return var0;
            };
            var2 = {};
            var17 = var9.bind(var11)(var6, var2);
            var18 = var10;
            var2 = copyDataProperties(var18, var17);
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 9;
            var9 = var6[var1];
            var11 = var2.bind(var0)(var9);
            var9 = var11.selectOption;
            var17 = var8.id;
            var16 = var7.id;
            var19 = var11;
            var18 = var5;
            var15 = var12;
            var7 = var19[var9](var18, var17, var16, var15, var14);
            var7 = 4;
            var7 = var6[var7];
            var9 = var2.bind(var0)(var7);
            var8 = var9.dispatch;
            var7 = {};
            var11 = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK';
            var7.type = var11;
            var7.guildId = var5;
            var7.overrides = var10;
            var7 = var8.bind(var9)(var7);
            var1 = var6[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.updateRolesLocal;
            var1 = var1.bind(var2)(var5, var4, var3);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.handleSelectOption = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4303, 4688, 665, 806, 22, 1304, 9898, 566, 4691, 1384, 2]);