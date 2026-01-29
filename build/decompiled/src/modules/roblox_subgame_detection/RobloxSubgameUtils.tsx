// modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function(arg0, arg1) { // Original name: hasSubgameInfoChanged, environment: var1
        _fun31834: for (var _fun31834_ip = 0;;) switch (_fun31834_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var3 = null;
                var0 = var3 == var6;
                if (!var0) {
                    _fun31834_ip = 19;
                    continue _fun31834
                }
            case 15:
                var0 = var3 != var5;
            case 19:
                if (var0) {
                    _fun31834_ip = 96;
                    continue _fun31834
                }
            case 22:
                var1 = var3 != var6;
                if (!var1) {
                    _fun31834_ip = 33;
                    continue _fun31834
                }
            case 29:
                var1 = var3 == var5;
            case 33:
                if (var1) {
                    _fun31834_ip = 93;
                    continue _fun31834
                }
            case 36:
                var2 = var3 != var6;
                if (!var2) {
                    _fun31834_ip = 47;
                    continue _fun31834
                }
            case 43:
                var2 = var3 != var5;
            case 47:
                if (!var2) {
                    _fun31834_ip = 90;
                    continue _fun31834
                }
            case 50:
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var3 = var4.isEqual;
                var3 = var3.bind(var4)(var6, var5);
                var2 = !var3;
            case 90:
                var1 = var2;
            case 93:
                var0 = var1;
            case 96:
                return var0;
        }
    };
    var _closure1_slot8 = var4;
    var0 = function(arg0) { // Original name: isActivityRobloxSubgame, environment: var1
        _fun31835: for (var _fun31835_ip = 0;;) switch (_fun31835_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.metadata;
                var1 = null;
                var1 = var1 == var0;
                var4 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun31835_ip = 28;
                    continue _fun31835
                }
            case 22:
                var3 = var0.distributor;
            case 28:
                var0 = _closure1_slot7;
                var0 = var0.ROBLOX;
                var0 = var3 === var0;
                if (!var0) {
                    _fun31835_ip = 84;
                    continue _fun31835
                }
            case 48:
                var2 = var2.application_id;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ROBLOX_APPLICATION_ID;
                var0 = var2 !== var1;
            case 84:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var3 = function(arg0) { // Original name: isRobloxSubgame, environment: var1
        _fun31836: for (var _fun31836_ip = 0;;) switch (_fun31836_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.distributor;
                var0 = _closure1_slot7;
                var0 = var0.ROBLOX;
                var0 = var3 === var0;
                if (!var0) {
                    _fun31836_ip = 66;
                    continue _fun31836
                }
            case 29:
                var2 = var2.id;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ROBLOX_APPLICATION_ID;
                var0 = var2 !== var1;
            case 66:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = function() { // Original name: _openRobloxURLWithRootPlaceId, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun31839: for (var _fun31839_ip = 0;;) switch (_fun31839_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun31839_ip = 100;
                            continue _fun31839
                        }
                    case 7:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var1 = var3[var1];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var1);
                        var4 = var5.getRobloxSubgameURL;
                        var1 = arg0;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun31839_ip = 97;
                            continue _fun31839
                        }
                    case 56:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.bind(var3)(var1);
                        SaveGenerator(address = 85);
                    case 83:
                        return var2;
                    case 85:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun31839_ip = 94;
                            continue _fun31839
                        }
                    case 91:
                        return var2;
                    case 94:
                        return var2;
                    case 97:
                        return var1;
                    case 100:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.isDetectionEnabled;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.ActivityTypes;
    var _closure1_slot5 = var8;
    var8 = var5.DistributorNames;
    var _closure1_slot6 = var8;
    var5 = var5.Distributors;
    var _closure1_slot7 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/roblox_subgame_detection/RobloxSubgameUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0) { // Original name: keyForRobloxGame, environment: var1
        _fun31840: for (var _fun31840_ip = 0;;) switch (_fun31840_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.distributor;
                var0 = _closure1_slot7;
                var4 = var0.ROBLOX;
                var2 = null;
                var0 = null;
                if (!(var5 === var4)) {
                    _fun31840_ip = 145;
                    continue _fun31840
                }
            case 30:
                var4 = var1.sku;
                var4 = var2 != var4;
                var0 = null;
                if (!var4) {
                    _fun31840_ip = 145;
                    continue _fun31840
                }
            case 45:
                var5 = var1.sku;
                var4 = var1.gameMetadata;
                var6 = var2 == var4;
                var7 = undefined;
                var1 = undefined;
                if (var6) {
                    _fun31840_ip = 104;
                    continue _fun31840
                }
            case 68:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 3;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.RobloxMetadataKeys;
                var3 = var3.PLACE_ID;
                var1 = var4[var3];
            case 104:
                var2 = var2 != var1;
                var4 = '';
                var3 = var4;
                if (!var2) {
                    _fun31840_ip = 121;
                    continue _fun31840
                }
            case 118:
                var3 = var1;
            case 121:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var0 = var2.bind(var4)(var5, var1, var3);
            case 145:
                return var0;
        }
    };
    var2.keyForRobloxGame = var5;
    var5 = function(arg0, arg1, arg2) { // Original name: hasRunningGameChanged, environment: var1
        _fun31841: for (var _fun31841_ip = 0;;) switch (_fun31841_ip) {
            case 0:
                var3 = arg0;
                var2 = arg2;
                var1 = var3.distributor;
                var0 = _closure1_slot7;
                var0 = var0.ROBLOX;
                var0 = var1 === var0;
                if (!var0) {
                    _fun31841_ip = 211;
                    continue _fun31841
                }
            case 35:
                var6 = null;
                var1 = var6 != var2;
                if (!var1) {
                    _fun31841_ip = 58;
                    continue _fun31841
                }
            case 44:
                var4 = var3.id;
                var2 = var2.id;
                var1 = var4 !== var2;
            case 58:
                if (var1) {
                    _fun31841_ip = 208;
                    continue _fun31841
                }
            case 64:
                var5 = _closure1_slot8;
                var8 = var3.distributor;
                var2 = _closure1_slot7;
                var2 = var2.ROBLOX;
                var4 = null;
                if (!(var8 === var2)) {
                    _fun31841_ip = 197;
                    continue _fun31841
                }
            case 90:
                var2 = var3.gameMetadata;
                var2 = var6 == var2;
                var4 = null;
                if (var2) {
                    _fun31841_ip = 197;
                    continue _fun31841
                }
            case 105:
                var2 = var3.sku;
                var2 = var6 == var2;
                var4 = null;
                if (var2) {
                    _fun31841_ip = 197;
                    continue _fun31841
                }
            case 120:
                var2 = {};
                var8 = var3.gameMetadata;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 3;
                var9 = var9[var7];
                var7 = undefined;
                var7 = var10.bind(var7)(var9);
                var7 = var7.RobloxMetadataKeys;
                var7 = var7.PLACE_ID;
                var7 = var8[var7];
                var8 = var6 != var7;
                var6 = null;
                if (!var8) {
                    _fun31841_ip = 178;
                    continue _fun31841
                }
            case 175:
                var6 = var7;
            case 178:
                var2.placeId = var6;
                var3 = var3.sku;
                var2.universeId = var3;
                var4 = var2;
            case 197:
                var3 = undefined;
                var2 = arg1;
                var1 = var5.bind(var3)(var4, var2);
            case 208:
                var0 = var1;
            case 211:
                return var0;
        }
    };
    var2.hasRunningGameChanged = var5;
    var2.hasSubgameInfoChanged = var4;
    var4 = function(arg0, arg1) { // Original name: updateRunningGameWithRobloxSubgameInfo, environment: var1
        _fun31842: for (var _fun31842_ip = 0;;) switch (_fun31842_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var0 = {};
                var16 = var0;
                var15 = var6;
                var2 = copyDataProperties(var16, var15);
                var3 = var1.subgameInfo;
                var7 = var1.application;
                var1 = global;
                var5 = var1.Number;
                var9 = var6.gameMetadata;
                var10 = null;
                var8 = var10 == var9;
                var2 = undefined;
                var4 = undefined;
                if (var8) {
                    _fun31842_ip = 97;
                    continue _fun31842
                }
            case 58:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 3;
                var8 = var12[var8];
                var8 = var11.bind(var2)(var8);
                var8 = var8.RobloxMetadataKeys;
                var8 = var8.ROBLOX_TIME_STARTED;
                var4 = var9[var8];
            case 97:
                var4 = var5.bind(var2)(var4);
                var5 = var1.isNaN;
                var5 = var5.bind(var2)(var4);
                if (var5) {
                    _fun31842_ip = 122;
                    continue _fun31842
                }
            case 116:
                var8 = 0;
                var5 = var8 === var4;
            case 122:
                if (!var5) {
                    _fun31842_ip = 152;
                    continue _fun31842
                }
            case 125:
                var5 = var6.start;
                if (!(var10 == var5)) {
                    _fun31842_ip = 149;
                    continue _fun31842
                }
            case 134:
                var9 = var1.Date;
                var8 = var9.now;
                var5 = var8.bind(var9)();
            case 149:
                var4 = var5;
            case 152:
                if (!(var10 != var3)) {
                    _fun31842_ip = 654;
                    continue _fun31842
                }
            case 159:
                var5 = {};
                if (!(var10 != var7)) {
                    _fun31842_ip = 321;
                    continue _fun31842
                }
            case 168:
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var6.exePath;
                var8.exePath = var12;
                var12 = var7.name;
                var8.name = var12;
                var12 = var7.id;
                var8.id = var12;
                var12 = _closure1_slot7;
                var12 = var12.ROBLOX;
                var8.distributor = var12;
                var8 = var9.bind(var2)(var8);
                if (!var8) {
                    _fun31842_ip = 321;
                    continue _fun31842
                }
            case 229:
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var6.exePath;
                var8.exePath = var12;
                var13 = _closure1_slot6;
                var12 = _closure1_slot7;
                var12 = var12.ROBLOX;
                var12 = var13[var12];
                var8.name = var12;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 3;
                var12 = var14[var12];
                var12 = var13.bind(var2)(var12);
                var12 = var12.ROBLOX_APPLICATION_ID;
                var8.id = var12;
                var11 = _closure1_slot7;
                var11 = var11.ROBLOX;
                var8.distributor = var11;
                var8 = var9.bind(var2)(var8);
                if (var8) {
                    _fun31842_ip = 388;
                    continue _fun31842
                }
            case 321:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 3;
                var9 = var12[var9];
                var9 = var11.bind(var2)(var9);
                var9 = var9.ROBLOX_APPLICATION_ID;
                var0.id = var9;
                var9 = _closure1_slot6;
                var8 = _closure1_slot7;
                var8 = var8.ROBLOX;
                var8 = var9[var8];
                var0.name = var8;
                var0.start = var4;
                _fun31842_ip = 490;
                continue _fun31842;
            case 388:
                var8 = var7.id;
                var0.id = var8;
                var8 = var7.name;
                var0.name = var8;
                var7 = var7.name;
                var0.gameName = var7;
                var8 = var1.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var0.start = var7;
                var9 = var1.Math;
                var8 = var9.floor;
                var11 = var1.Date;
                var7 = var11.now;
                var11 = var7.bind(var11)();
                var7 = 1000;
                var7 = var11 / var7;
                var7 = var8.bind(var9)(var7);
                var0.lastFocused = var7;
            case 490:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = 3;
                var8 = var8[var9];
                var8 = var11.bind(var2)(var8);
                var8 = var8.RobloxMetadataKeys;
                var11 = var8.ROBLOX_TIME_STARTED;
                var8 = var4.toString;
                var8 = var8.bind(var4)();
                var5[var11] = var8;
                var11 = var3.universeId;
                var12 = var10 != var11;
                var8 = undefined;
                if (!var12) {
                    _fun31842_ip = 556;
                    continue _fun31842
                }
            case 553:
                var8 = var11;
            case 556:
                var0.sku = var8;
                var8 = var3.placeId;
                if (!(var10 != var8)) {
                    _fun31842_ip = 611;
                    continue _fun31842
                }
            case 572:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var2)(var7);
                var7 = var7.RobloxMetadataKeys;
                var7 = var7.PLACE_ID;
                var3 = var3.placeId;
                var5[var7] = var3;
            case 611:
                var7 = var1.Object;
                var3 = var7.keys;
                var3 = var3.bind(var7)(var5);
                var7 = var3.length;
                var3 = 0;
                var7 = var7 > var3;
                var3 = undefined;
                if (!var7) {
                    _fun31842_ip = 646;
                    continue _fun31842
                }
            case 643:
                var3 = var5;
            case 646:
                var0.gameMetadata = var3;
                _fun31842_ip = 776;
                continue _fun31842;
            case 654:
                var5 = _closure1_slot10;
                var5 = var5.bind(var2)(var6);
                if (!var5) {
                    _fun31842_ip = 725;
                    continue _fun31842
                }
            case 669:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 3;
                var5 = var7[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.ROBLOX_APPLICATION_ID;
                var0.id = var5;
                var5 = _closure1_slot6;
                var3 = _closure1_slot7;
                var3 = var3.ROBLOX;
                var3 = var5[var3];
                var0.name = var3;
            case 725:
                var0.gameMetadata = var2;
                var0.sku = var2;
                var0.start = var4;
                var3 = var1.Math;
                var2 = var3.floor;
                var1 = 1000;
                var1 = var4 / var1;
                var1 = var2.bind(var3)(var1);
                var0.lastFocused = var1;
            case 776:
                return var0;
        }
    };
    var2.updateRunningGameWithRobloxSubgameInfo = var4;
    var4 = function(arg0) { // Original name: convertMapToRobloxSubgameInfo, environment: var1
        _fun31843: for (var _fun31843_ip = 0;;) switch (_fun31843_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 3;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var0 = var0.NativeRobloxSubgameKeys;
                var0 = var0.UNIVERSE_ID;
                var0 = var3[var0];
                var4 = null;
                var1 = var4 == var0;
                var0 = null;
                if (var1) {
                    _fun31843_ip = 170;
                    continue _fun31843
                }
            case 55:
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var7.bind(var5)(var1);
                var1 = var1.NativeRobloxSubgameKeys;
                var1 = var1.PLACE_ID;
                var1 = var3[var1];
                var1 = var4 == var1;
                var0 = null;
                if (var1) {
                    _fun31843_ip = 170;
                    continue _fun31843
                }
            case 97:
                var1 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = var2[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.NativeRobloxSubgameKeys;
                var7 = var7.UNIVERSE_ID;
                var7 = var3[var7];
                var1.universeId = var7;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.NativeRobloxSubgameKeys;
                var2 = var2.PLACE_ID;
                var2 = var3[var2];
                var1.placeId = var2;
                var0 = var1;
            case 170:
                return var0;
        }
    };
    var2.convertMapToRobloxSubgameInfo = var4;
    var4 = function(arg0) { // Original name: getSubgameMetadata, environment: var1
        _fun31844: for (var _fun31844_ip = 0;;) switch (_fun31844_ip) {
            case 0:
                var5 = arg0;
                var3 = var5.distributor;
                var0 = _closure1_slot7;
                var1 = var0.ROBLOX;
                var2 = null;
                var0 = null;
                if (!(var3 === var1)) {
                    _fun31844_ip = 166;
                    continue _fun31844
                }
            case 33:
                var1 = var5.gameMetadata;
                var1 = var2 != var1;
                var0 = null;
                if (!var1) {
                    _fun31844_ip = 166;
                    continue _fun31844
                }
            case 48:
                var3 = var5.gameMetadata;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 3;
                var1 = var1[var8];
                var7 = undefined;
                var1 = var6.bind(var7)(var1);
                var1 = var1.RobloxMetadataKeys;
                var1 = var1.PLACE_ID;
                var1 = var3[var1];
                var1 = var2 != var1;
                var0 = null;
                if (!var1) {
                    _fun31844_ip = 166;
                    continue _fun31844
                }
            case 101:
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.stringify;
                var1 = {};
                var5 = var5.gameMetadata;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var8];
                var4 = var6.bind(var7)(var4);
                var4 = var4.RobloxMetadataKeys;
                var4 = var4.PLACE_ID;
                var4 = var5[var4];
                var1.placeId = var4;
                var0 = var2.bind(var3)(var1);
            case 166:
                return var0;
        }
    };
    var2.getSubgameMetadata = var4;
    var4 = function(arg0) { // Original name: maybeAddAdditionalGameMetadata, environment: var1
        _fun31845: for (var _fun31845_ip = 0;;) switch (_fun31845_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.distributor;
                var0 = _closure1_slot7;
                var0 = var0.ROBLOX;
                if (!(var3 === var0)) {
                    _fun31845_ip = 192;
                    continue _fun31845
                }
            case 29:
                var0 = var2.gameMetadata;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun31845_ip = 192;
                    continue _fun31845
                }
            case 44:
                var6 = var2.gameMetadata;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var7.bind(var4)(var0);
                var0 = var0.RobloxMetadataKeys;
                var0 = var0.ROBLOX_TIME_STARTED;
                var0 = var6[var0];
                if (!(var3 != var0)) {
                    _fun31845_ip = 192;
                    continue _fun31845
                }
            case 92:
                var6 = var2.id;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.ROBLOX_APPLICATION_ID;
                if (!(var6 !== var0)) {
                    _fun31845_ip = 192;
                    continue _fun31845
                }
            case 124:
                var0 = var2.gameName;
                if (!(var3 != var0)) {
                    _fun31845_ip = 192;
                    continue _fun31845
                }
            case 134:
                var0 = {};
                var3 = var2.gameName;
                var0.name = var3;
                var2 = var2.gameMetadata;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.RobloxMetadataKeys;
                var1 = var1.ROBLOX_TIME_STARTED;
                var1 = var2[var1];
                var0.sync_id = var1;
                _fun31845_ip = 194;
                continue _fun31845;
            case 192:
                var0 = {};
            case 194:
                return var0;
        }
    };
    var2.maybeAddAdditionalGameMetadata = var4;
    var4 = function(arg0) { // Original name: transformRobloxSubgameNames, environment: var1
        _fun31846: for (var _fun31846_ip = 0;;) switch (_fun31846_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot9;
                var3 = undefined;
                var0 = var0.bind(var3)(var5);
                if (var0) {
                    _fun31846_ip = 22;
                    continue _fun31846
                }
            case 20:
                return var5;
            case 22:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var4 = var0.ViewRobloxSubgamesInRichPresenceExperiment;
                var2 = var4.getConfig;
                var0 = {};
                var6 = 'transformRobloxSubgameNames';
                var0.location = var6;
                var0 = var2.bind(var4)(var0);
                var2 = var0.alternativeTitle;
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 6;
                var0 = var0[var6];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                if (var2) {
                    _fun31846_ip = 113;
                    continue _fun31846
                }
            case 103:
                var4 = var0.G6BGdx;
                _fun31846_ip = 121;
                continue _fun31846;
            case 113:
                var4 = var0.HjVwG3;
            case 121:
                var0 = {};
                var8 = var0;
                var7 = var5;
                var2 = copyDataProperties(var8, var7);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var2.bind(var3)(var1);
                var3 = var1.intl;
                var2 = var3.formatToPlainString;
                var1 = {};
                var5 = var5.name;
                var1.subgameName = var5;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 'name';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.transformRobloxSubgameNames = var4;
    var4 = function(arg0) { // Original name: maybeTransformRobloxSubgameIntoRobloxActivity, environment: var1
        _fun31847: for (var _fun31847_ip = 0;;) switch (_fun31847_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = _closure1_slot5;
                var1 = var1.PLAYING;
                if (!(var2 === var1)) {
                    _fun31847_ip = 159;
                    continue _fun31847
                }
            case 28:
                var1 = _closure1_slot9;
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                if (var1) {
                    _fun31847_ip = 44;
                    continue _fun31847
                }
            case 42:
                return var0;
            case 44:
                var2 = global;
                var3 = var2.Number;
                var1 = var0.sync_id;
                var3 = var3.bind(var4)(var1);
                var1 = {};
                var10 = var1;
                var9 = var0;
                var6 = copyDataProperties(var10, var9);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 3;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.ROBLOX_APPLICATION_ID;
                var1.application_id = var6;
                var6 = _closure1_slot6;
                var5 = _closure1_slot7;
                var5 = var5.ROBLOX;
                var5 = var6[var5];
                var1.name = var5;
                var2 = var2.isNaN;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun31847_ip = 157;
                    continue _fun31847
                }
            case 145:
                var2 = {};
                var2.start = var3;
                var1.timestamps = var2;
            case 157:
                return var1;
            case 159:
                return var0;
        }
    };
    var2.maybeTransformRobloxSubgameIntoRobloxActivity = var4;
    var2.isRobloxSubgame = var3;
    var3 = function(arg0) { // Original name: isRobloxSubgameApplication, environment: var1
        var0 = arg0;
        var2 = var0.thirdPartySkus;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.distributor;
            var0 = _closure1_slot7;
            var0 = var0.ROBLOX;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isRobloxSubgameApplication = var3;
    var3 = function() { // Original name: openRobloxURLWithRootPlaceId, environment: var1
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.openRobloxURLWithRootPlaceId = var3;
    var1 = function(arg0) { // Original name: maybeTransformRobloxSubgameToRoblox, environment: var1
        _fun31851: for (var _fun31851_ip = 0;;) switch (_fun31851_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.distributor;
                var0 = _closure1_slot7;
                var1 = var0.ROBLOX;
                var0 = var3;
                if (!(var4 === var1)) {
                    _fun31851_ip = 143;
                    continue _fun31851
                }
            case 29:
                var4 = var3.id;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 3;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var7.bind(var5)(var1);
                var1 = var1.ROBLOX_APPLICATION_ID;
                var0 = var3;
                if (!(var4 !== var1)) {
                    _fun31851_ip = 143;
                    continue _fun31851
                }
            case 69:
                var1 = {};
                var9 = var1;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var4 = var3.ROBLOX_APPLICATION_ID;
                var3 = 'id';
                var1[var3] = var4;
                var3 = _closure1_slot6;
                var2 = _closure1_slot7;
                var2 = var2.ROBLOX;
                var3 = var3[var2];
                var2 = 'name';
                var1[var2] = var3;
                var0 = var1;
            case 143:
                return var0;
        }
    };
    var2.maybeTransformRobloxSubgameToRoblox = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3442, 660, 3575, 22, 3573, 1234, 3576, 3097, 2]);