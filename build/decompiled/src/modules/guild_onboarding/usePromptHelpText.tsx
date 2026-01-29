// modules/guild_onboarding/usePromptHelpText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: formatRoleString, environment: var1
        _fun77368: for (var _fun77368_ip = 0;;) switch (_fun77368_ip) {
            case 0:
                var6 = arg0;
                var1 = var6.length;
                var0 = '';
                var5 = 0;
                if (!(var5 !== var1)) {
                    _fun77368_ip = 185;
                    continue _fun77368
                }
            case 21:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 6;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var3.bind(var7)(var2);
                var4 = var2.intl;
                var3 = var4.format;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = arg2;
                if (var2) {
                    _fun77368_ip = 94;
                    continue _fun77368
                }
            case 84:
                var2 = var1.Kj5GIT;
                _fun77368_ip = 102;
                continue _fun77368;
            case 94:
                var2 = var1.cJZxWf;
            case 102:
                var1 = {};
                var7 = var6.length;
                var1.count = var7;
                var7 = global;
                var9 = var7.Math;
                var8 = var9.max;
                var10 = var6.length;
                var7 = 2;
                var7 = var10 - var7;
                var7 = var8.bind(var9)(var7, var5);
                var1.extraCount = var7;
                var5 = var6[var5];
                var1.role1 = var5;
                var5 = 1;
                var5 = var6[var5];
                var1.role2 = var5;
                var5 = arg1;
                var1.itemHook = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 185:
                return var0;
        }
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/usePromptHelpText.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: usePromptHelpText, environment: var1
        _fun77369: for (var _fun77369_ip = 0;;) switch (_fun77369_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.guild;
                var1 = var2.prompt;
                var7 = var2.selectedRoleIds;
                var _closure2_slot0 = var7;
                var4 = var2.selectedChannelIds;
                var _closure2_slot1 = var4;
                var5 = var2.itemHook;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var2 = null;
                var6 = var2 == var0;
                var14 = undefined;
                if (var6) {
                    _fun77369_ip = 64;
                    continue _fun77369
                }
            case 59:
                var14 = var0.id;
            case 64:
                _closure2_slot2 = var14;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 7;
                var10 = var9[var6];
                var13 = var8.bind(var4)(var10);
                var12 = var13.useStateFromStoresArray;
                var10 = _closure1_slot3;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = new Array(2);
                var10[0] = var14;
                var10[1] = var7;
                var7 = function() { // Environment: var3
                    _fun77370: for (var _fun77370_ip = 0;;) switch (_fun77370_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun77370_ip = 19;
                                continue _fun77370
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun77370_ip = 46;
                            continue _fun77370;
                        case 19:
                            var4 = _closure1_slot3;
                            var3 = var4.getManyRoles;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 46:
                            return var0;
                    }
                };
                var7 = var12.bind(var13)(var11, var7, var10);
                var6 = var9[var6];
                var10 = var8.bind(var4)(var6);
                var9 = var10.useStateFromStoresArray;
                var6 = _closure1_slot2;
                var8 = new Array(4);
                var8[0] = var6;
                var6 = _closure1_slot6;
                var8[1] = var6;
                var6 = _closure1_slot5;
                var8[2] = var6;
                var6 = _closure1_slot4;
                var8[3] = var6;
                var6 = function() { // Environment: var3
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot2;
                        var1 = var2.getChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun77373: for (var _fun77373_ip = 0;;) switch (_fun77373_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun77373_ip = 41;
                                    continue _fun77373
                                }
                            case 12:
                                var3 = _closure1_slot4;
                                var2 = var3.can;
                                var1 = _closure1_slot7;
                                var1 = var1.VIEW_CHANNEL;
                                var0 = var2.bind(var3)(var1, var4);
                            case 41:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.computeChannelName;
                        var8 = _closure1_slot6;
                        var7 = _closure1_slot5;
                        var9 = arg0;
                        var6 = true;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var9.bind(var10)(var8, var6);
                var6 = var7.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var2 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = '@';
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var3 = var6.bind(var7)(var3);
                if (!(var2 != var1)) {
                    _fun77369_ip = 233;
                    continue _fun77369
                }
            case 220:
                var1 = var1.singleSelect;
                var2 = '';
                if (var1) {
                    _fun77369_ip = 288;
                    continue _fun77369
                }
            case 233:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 6;
                var6 = var9[var1];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.JshhEl;
                var2 = var6.bind(var7)(var1);
            case 288:
                var1 = var14.length;
                var9 = 0;
                if (!(var9 === var1)) {
                    _fun77369_ip = 311;
                    continue _fun77369
                }
            case 299:
                var1 = var3.length;
                if (!(!(var1 > var9))) {
                    _fun77369_ip = 513;
                    continue _fun77369
                }
            case 311:
                var1 = var14.length;
                var7 = var1 > var9;
                var6 = '';
                var1 = var6;
                if (!var7) {
                    _fun77369_ip = 527;
                    continue _fun77369
                }
            case 333:
                var8 = var14.length;
                var7 = var6;
                if (!(var9 !== var8)) {
                    _fun77369_ip = 480;
                    continue _fun77369
                }
            case 348:
                var10 = _closure1_slot0;
                var13 = _closure1_slot1;
                var8 = 6;
                var11 = var13[var8];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var8 = var13[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.t;
                var10 = var8.Rj841R;
                var8 = {};
                var13 = var14.length;
                var8.count = var13;
                var13 = global;
                var16 = var13.Math;
                var15 = var16.max;
                var17 = var14.length;
                var13 = 2;
                var13 = var17 - var13;
                var13 = var15.bind(var16)(var13, var9);
                var8.extraCount = var13;
                var13 = var14[var9];
                var8.channel1 = var13;
                var13 = 1;
                var13 = var14[var13];
                var8.channel2 = var13;
                var8.itemHook = var5;
                var7 = var11.bind(var12)(var10, var8);
            case 480:
                var8 = var3.length;
                var8 = var8 > var9;
                if (!var8) {
                    _fun77369_ip = 505;
                    continue _fun77369
                }
            case 492:
                var9 = _closure1_slot8;
                var8 = true;
                var6 = var9.bind(var4)(var3, var5, var8);
            case 505:
                var1 = var6;
                var2 = var7;
                _fun77369_ip = 527;
                continue _fun77369;
            case 513:
                var0 = _closure1_slot8;
                var2 = var0.bind(var4)(var3, var5);
                var1 = '';
            case 527:
                var0 = {};
                var0.helpText = var2;
                var0.helpTextAdditional = var1;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: useCustomizeCommunityPromptHelpText, environment: var1
        _fun77376: for (var _fun77376_ip = 0;;) switch (_fun77376_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.guild;
                var1 = var2.prompt;
                var6 = var2.selectedRoleIds;
                var _closure2_slot0 = var6;
                var4 = var2.selectedChannelIds;
                var _closure2_slot1 = var4;
                var5 = var2.itemHook;
                var8 = undefined;
                var _closure2_slot2 = var8;
                var2 = null;
                var4 = var2 == var0;
                var14 = undefined;
                if (var4) {
                    _fun77376_ip = 64;
                    continue _fun77376
                }
            case 59:
                var14 = var0.id;
            case 64:
                _closure2_slot2 = var14;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var10 = var9[var4];
                var13 = var7.bind(var8)(var10);
                var12 = var13.useStateFromStoresArray;
                var10 = _closure1_slot3;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = new Array(2);
                var10[0] = var14;
                var10[1] = var6;
                var6 = function() { // Environment: var3
                    _fun77377: for (var _fun77377_ip = 0;;) switch (_fun77377_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun77377_ip = 19;
                                continue _fun77377
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun77377_ip = 46;
                            continue _fun77377;
                        case 19:
                            var4 = _closure1_slot3;
                            var3 = var4.getManyRoles;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 46:
                            return var0;
                    }
                };
                var6 = var12.bind(var13)(var11, var6, var10);
                var4 = var9[var4];
                var10 = var7.bind(var8)(var4);
                var9 = var10.useStateFromStoresArray;
                var4 = _closure1_slot2;
                var7 = new Array(4);
                var7[0] = var4;
                var4 = _closure1_slot6;
                var7[1] = var4;
                var4 = _closure1_slot5;
                var7[2] = var4;
                var4 = _closure1_slot4;
                var7[3] = var4;
                var4 = function() { // Environment: var3
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot2;
                        var1 = var2.getChannel;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        _fun77380: for (var _fun77380_ip = 0;;) switch (_fun77380_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun77380_ip = 41;
                                    continue _fun77380
                                }
                            case 12:
                                var3 = _closure1_slot4;
                                var2 = var3.can;
                                var1 = _closure1_slot7;
                                var1 = var1.VIEW_CHANNEL;
                                var0 = var2.bind(var3)(var1, var4);
                            case 41:
                                return var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.computeChannelName;
                        var8 = _closure1_slot6;
                        var7 = _closure1_slot5;
                        var9 = arg0;
                        var6 = true;
                        var10 = var5;
                        var0 = var10[var4](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var9.bind(var10)(var7, var4);
                var4 = var6.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var2 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = '@';
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var7 = var4.bind(var6)(var3);
                if (!(var2 != var1)) {
                    _fun77376_ip = 233;
                    continue _fun77376
                }
            case 220:
                var2 = var1.singleSelect;
                var1 = '';
                if (var2) {
                    _fun77376_ip = 288;
                    continue _fun77376
                }
            case 233:
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 6;
                var3 = var9[var2];
                var3 = var6.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var9[var2];
                var2 = var6.bind(var8)(var2);
                var2 = var2.t;
                var2 = var2.JshhEl;
                var1 = var3.bind(var4)(var2);
            case 288:
                var2 = var11.length;
                var6 = 0;
                if (!(var6 === var2)) {
                    _fun77376_ip = 311;
                    continue _fun77376
                }
            case 299:
                var2 = var7.length;
                if (!(!(var2 > var6))) {
                    _fun77376_ip = 698;
                    continue _fun77376
                }
            case 311:
                var2 = var11.length;
                if (!(var2 > var6)) {
                    _fun77376_ip = 332;
                    continue _fun77376
                }
            case 320:
                var2 = var7.length;
                if (!(var6 !== var2)) {
                    _fun77376_ip = 561;
                    continue _fun77376
                }
            case 332:
                var2 = var11.length;
                var2 = var2 > var6;
                if (!var2) {
                    _fun77376_ip = 353;
                    continue _fun77376
                }
            case 344:
                var3 = var7.length;
                var2 = var3 > var6;
            case 353:
                if (!var2) {
                    _fun77376_ip = 830;
                    continue _fun77376
                }
            case 359:
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 6;
                var4 = var10[var2];
                var4 = var3.bind(var8)(var4);
                var9 = var4.intl;
                var4 = var9.format;
                var2 = var10[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                var3 = var2.WewRHM;
                var2 = {};
                var10 = var11.length;
                var2.channelCount = var10;
                var12 = global;
                var14 = var12.Math;
                var13 = var14.max;
                var10 = var11.length;
                var15 = 2;
                var10 = var10 - var15;
                var10 = var13.bind(var14)(var10, var6);
                var2.extraChannelCount = var10;
                var10 = var11[var6];
                var2.channel1 = var10;
                var10 = 1;
                var13 = var11[var10];
                var2.channel2 = var13;
                var2.itemHook = var5;
                var13 = var7.length;
                var2.roleCount = var13;
                var14 = var12.Math;
                var13 = var14.max;
                var12 = var7.length;
                var12 = var12 - var15;
                var12 = var13.bind(var14)(var12, var6);
                var2.extraRoleCount = var12;
                var12 = var7[var6];
                var2.role1 = var12;
                var10 = var7[var10];
                var2.role2 = var10;
                var1 = var4.bind(var9)(var3, var2);
                _fun77376_ip = 830;
                continue _fun77376;
            case 561:
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 6;
                var4 = var10[var2];
                var4 = var3.bind(var8)(var4);
                var9 = var4.intl;
                var4 = var9.format;
                var2 = var10[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.t;
                var3 = var2.ZKywGU;
                var2 = {};
                var10 = var11.length;
                var2.count = var10;
                var10 = global;
                var13 = var10.Math;
                var12 = var13.max;
                var14 = var11.length;
                var10 = 2;
                var10 = var14 - var10;
                var10 = var12.bind(var13)(var10, var6);
                var2.extraCount = var10;
                var10 = var11[var6];
                var2.channel1 = var10;
                var10 = 1;
                var10 = var11[var10];
                var2.channel2 = var10;
                var2.itemHook = var5;
                var1 = var4.bind(var9)(var3, var2);
                _fun77376_ip = 830;
                continue _fun77376;
            case 698:
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 6;
                var3 = var9[var0];
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var0 = var9[var0];
                var0 = var2.bind(var8)(var0);
                var0 = var0.t;
                var2 = var0.vdtNYa;
                var0 = {};
                var8 = var7.length;
                var0.count = var8;
                var8 = global;
                var10 = var8.Math;
                var9 = var10.max;
                var11 = var7.length;
                var8 = 2;
                var8 = var11 - var8;
                var8 = var9.bind(var10)(var8, var6);
                var0.extraCount = var8;
                var6 = var7[var6];
                var0.role1 = var6;
                var6 = 1;
                var6 = var7[var6];
                var0.role2 = var6;
                var0.itemHook = var5;
                var1 = var3.bind(var4)(var2, var0);
            case 830:
                var0 = {};
                var0.helpText = var1;
                var1 = '';
                var0.helpTextAdditional = var1;
                return var0;
        }
    };
    var2.useCustomizeCommunityPromptHelpText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1665, 3050, 3059, 1613, 660, 1234, 566, 4748, 2]);