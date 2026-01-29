// modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun107720: for (var _fun107720_ip = 0;;) switch (_fun107720_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun107720_ip = 45;
                    continue _fun107720
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun107720_ip = 54;
                    continue _fun107720
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun107720_ip = 344;
                    continue _fun107720
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun107720_ip = 322;
                    continue _fun107720
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun107720_ip = 282;
                    continue _fun107720
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun107720_ip = 269;
                    continue _fun107720
                }
            case 109:
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
                    _fun107720_ip = 162;
                    continue _fun107720
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun107720_ip = 178;
                    continue _fun107720
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun107720_ip = 248;
                    continue _fun107720
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun107720_ip = 248;
                    continue _fun107720
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun107720_ip = 233;
                    continue _fun107720
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun107720_ip = 246;
                    continue _fun107720
                }
            case 233:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun107720_ip = 264;
                continue _fun107720;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun107720_ip = 282;
                continue _fun107720;
            case 269:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun107720_ip = 322;
                    continue _fun107720
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun107720_ip = 329;
                    continue _fun107720
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun107721: for (var _fun107721_ip = 0;;) switch (_fun107721_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun107721_ip = 56;
                                continue _fun107721
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
                            _fun107721_ip = 67;
                            continue _fun107721;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun107722: for (var _fun107722_ip = 0;;) switch (_fun107722_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun107722_ip = 23;
                    continue _fun107722
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun107722_ip = 33;
                    continue _fun107722
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
                    _fun107722_ip = 70;
                    continue _fun107722
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun107722_ip = 55;
                    continue _fun107722
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/onboarding/hooks/useBannerBots.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useBannerBots, environment: var1
        _fun107723: for (var _fun107723_ip = 0;;) switch (_fun107723_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.context;
                var14 = undefined;
                var _closure2_slot0 = var14;
                var2 = {};
                var2.context = var3;
                var1 = function(arg0) { // Original name: useAppsMap, environment: var0
                    var1 = arg0;
                    var5 = var1.context;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useApplicationsInContext;
                    var2 = {
                        'context': null,
                        'onlyWithCommands': true,
                        'includeBuiltIn': false,
                        'includeEmbeddedApps': false,
                        'includeNonEmbeddedApps': true
                    };
                    var2.context = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.apps;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot2;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun107725: for (var _fun107725_ip = 0;;) switch (_fun107725_ip) {
                            case 0:
                                var0 = global;
                                var0 = var0.Map;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var9 = var1;
                                var0 = new var9[var0](var8);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var2 = _closure1_slot5;
                                var1 = _closure3_slot0;
                                var4 = undefined;
                                var3 = var2.bind(var4)(var1);
                                var2 = var3.bind(var4)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun107725_ip = 97;
                                    continue _fun107725
                                }
                            case 61:
                                var6 = var2.value;
                                var5 = var0.set;
                                var1 = var6.id;
                                var1 = var5.bind(var0)(var1, var6);
                                var5 = var3.bind(var4)();
                                var1 = var5.done;
                                var2 = var5;
                                if (!var1) {
                                    _fun107725_ip = 61;
                                    continue _fun107725
                                }
                            case 97:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var13 = var1.bind(var14)(var2);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var7 = var5.bind(var14)(var2);
                var4 = var7.useApplicationsInContext;
                var2 = {
                    'context': null,
                    'onlyWithCommands': true,
                    'includeBuiltIn': false,
                    'includeEmbeddedApps': false,
                    'includeNonEmbeddedApps': true
                };
                var2.context = var3;
                var8 = true;
                var2 = var4.bind(var7)(var2);
                var7 = var2.apps;
                var4 = {};
                var4.context = var3;
                var2 = function(arg0) { // Original name: useCommandsMap, environment: var0
                    var1 = arg0;
                    var5 = var1.context;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useApplicationCommandsInContext;
                    var2 = {};
                    var2.context = var5;
                    var5 = false;
                    var2.includeBuiltIn = var5;
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.commands;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot2;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun107727: for (var _fun107727_ip = 0;;) switch (_fun107727_ip) {
                            case 0:
                                var0 = global;
                                var0 = var0.Map;
                                var1 = var0.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var9 = var1;
                                var0 = new var9[var0](var8);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var2 = _closure1_slot5;
                                var1 = _closure3_slot0;
                                var4 = undefined;
                                var3 = var2.bind(var4)(var1);
                                var2 = var3.bind(var4)();
                                var1 = var2.done;
                                if (var1) {
                                    _fun107727_ip = 97;
                                    continue _fun107727
                                }
                            case 61:
                                var6 = var2.value;
                                var5 = var0.set;
                                var1 = var6.id;
                                var1 = var5.bind(var0)(var1, var6);
                                var5 = var3.bind(var4)();
                                var1 = var5.done;
                                var2 = var5;
                                if (!var1) {
                                    _fun107727_ip = 61;
                                    continue _fun107727
                                }
                            case 97:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var12 = var2.bind(var14)(var4);
                var4 = {};
                var4.context = var3;
                var2 = function(arg0) { // Original name: useFrecencyCommandIds, environment: var0
                    var1 = arg0;
                    var5 = var1.context;
                    var _closure3_slot0 = var5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 3;
                    var6 = var4[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var6);
                    var6 = var7.useStateFromStores;
                    var8 = _closure1_slot3;
                    var2 = new Array(1);
                    var2[0] = var8;
                    var0 = function() { // Environment: var0
                        _fun107729: for (var _fun107729_ip = 0;;) switch (_fun107729_ip) {
                            case 0:
                                var2 = _closure1_slot3;
                                var1 = var2.getGuild;
                                var0 = _closure3_slot0;
                                var3 = var0.channel;
                                var0 = null;
                                var4 = var0 == var3;
                                var0 = undefined;
                                if (var4) {
                                    _fun107729_ip = 40;
                                    continue _fun107729
                                }
                            case 35:
                                var0 = var3.guild_id;
                            case 40:
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0 = var6.bind(var7)(var2, var0);
                    var2 = {};
                    var5 = var5.channel;
                    var2.channel = var5;
                    var2.guild = var0;
                    var0 = 4;
                    var0 = var4[var0];
                    var1 = var3.bind(var1)(var0);
                    var0 = var1.useTopCommands;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var2 = var2.bind(var14)(var4);
                var4 = 6;
                var4 = var6[var4];
                var6 = var5.bind(var14)(var4);
                var5 = var6.useActivityApplications;
                var4 = {};
                var10 = var3.channel;
                var3 = null;
                var11 = var3 == var10;
                var9 = undefined;
                if (var11) {
                    _fun107723_ip = 173;
                    continue _fun107723
                }
            case 168:
                var9 = var10.guild_id;
            case 173:
                var4.guildId = var9;
                var4.fetchesShelf = var8;
                var4 = var5.bind(var6)(var4);
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 3;
                var5 = var8[var5];
                var9 = var6.bind(var14)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getRecentApplicationCommandMetadata;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var8.bind(var9)(var6, var5);
                var8 = var3 != var5;
                var6 = null;
                if (!var8) {
                    _fun107723_ip = 261;
                    continue _fun107723
                }
            case 246:
                var8 = var13.get;
                var5 = var5.applicationId;
                var6 = var8.bind(var13)(var5);
            case 261:
                _closure2_slot0 = var6;
                var1 = _closure1_slot5;
                var11 = var1.bind(var14)(var2);
                var2 = var11.bind(var14)();
                var1 = var2.done;
                var10 = var6;
                var8 = var2;
                var5 = undefined;
                var2 = undefined;
                var6 = var10;
                var9 = undefined;
                if (var1) {
                    _fun107723_ip = 443;
                    continue _fun107723
                }
            case 304:
                var15 = var8.value;
                var1 = var12.get;
                var1 = var1.bind(var12)(var15);
                var15 = var10;
                var16 = var5;
                if (!(var3 != var1)) {
                    _fun107723_ip = 414;
                    continue _fun107723
                }
            case 329:
                var17 = var13.get;
                var1 = var1.applicationId;
                var1 = var17.bind(var13)(var1);
                var15 = var10;
                var16 = var5;
                var2 = var1;
                if (!(var3 != var1)) {
                    _fun107723_ip = 414;
                    continue _fun107723
                }
            case 357:
                if (!(var3 != var10)) {
                    _fun107723_ip = 401;
                    continue _fun107723
                }
            case 361:
                var18 = var1.id;
                var19 = var3 == var10;
                var17 = undefined;
                if (var19) {
                    _fun107723_ip = 380;
                    continue _fun107723
                }
            case 375:
                var17 = var10.id;
            case 380:
                var15 = var10;
                var16 = var15;
                var2 = var1;
                var6 = var16;
                var9 = var2;
                if (!(var18 === var17)) {
                    _fun107723_ip = 443;
                    continue _fun107723
                }
            case 399:
                _fun107723_ip = 414;
                continue _fun107723;
            case 401:
                _closure2_slot0 = var1;
                var15 = var1;
                var16 = var5;
                var2 = var15;
            case 414:
                var17 = var11.bind(var14)();
                var1 = var17.done;
                var10 = var15;
                var5 = var16;
                var8 = var17;
                var6 = var10;
                var9 = undefined;
                if (!var1) {
                    _fun107723_ip = 304;
                    continue _fun107723
                }
            case 443:
                if (!(var3 != var6)) {
                    _fun107723_ip = 479;
                    continue _fun107723
                }
            case 447:
                var5 = var6;
                var1 = var9;
                if (!(var3 == var9)) {
                    _fun107723_ip = 526;
                    continue _fun107723
                }
            case 457:
                var8 = var7.find;
                var2 = function(arg0) { // Environment: var0
                    _fun107731: for (var _fun107731_ip = 0;;) switch (_fun107731_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var2 = _closure2_slot0;
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun107731_ip = 31;
                                continue _fun107731
                            }
                        case 26:
                            var0 = var2.id;
                        case 31:
                            var0 = var1 !== var0;
                            return var0;
                    }
                };
                var1 = var8.bind(var7)(var2);
                var5 = var6;
                _fun107723_ip = 526;
                continue _fun107723;
            case 479:
                var8 = var7.length;
                var2 = 0;
                if (!(var8 > var2)) {
                    _fun107723_ip = 501;
                    continue _fun107723
                }
            case 490:
                var2 = var7[var2];
                _closure2_slot0 = var2;
                var6 = var2;
            case 501:
                var8 = var7.length;
                var2 = 1;
                var5 = var6;
                var1 = var9;
                if (!(var8 > var2)) {
                    _fun107723_ip = 526;
                    continue _fun107723
                }
            case 519:
                var1 = var7[var2];
                var5 = var6;
            case 526:
                if (!(var3 != var5)) {
                    _fun107723_ip = 548;
                    continue _fun107723
                }
            case 530:
                var2 = var5;
                if (!(var3 == var1)) {
                    _fun107723_ip = 568;
                    continue _fun107723
                }
            case 537:
                var3 = 0;
                var1 = var4[var3];
                var2 = var5;
                _fun107723_ip = 568;
                continue _fun107723;
            case 548:
                var3 = 0;
                var3 = var4[var3];
                _closure2_slot0 = var3;
                var0 = 1;
                var1 = var4[var0];
                var2 = var3;
            case 568:
                var0 = {};
                var0.firstBotApplication = var2;
                var0.secondBotApplication = var1;
                return var0;
        }
    };
    var2.useBannerBots = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 11727, 566, 12189, 13873, 11731, 2]);