// modules/soundboard/searchSounds.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.SEARCH_STARTED;
        var1 = {};
        var6 = arg1;
        var1.channel_id = var6;
        var5 = _closure1_slot5;
        var5 = var5.SOUNDBOARD;
        var1.search_type = var5;
        var5 = arg0;
        var1.location_stack = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var3 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.SEARCH_RESULT_VIEWED;
        var1 = {};
        var5 = _closure1_slot5;
        var5 = var5.SOUNDBOARD;
        var1.search_type = var5;
        var5 = arg2;
        var1.channel_id = var5;
        var5 = arg3;
        var1.query = var5;
        var5 = arg0;
        var5 = var5.length;
        var1.total_results = var5;
        var5 = arg1;
        var1.location_stack = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var9.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot4 = var8;
    var5 = var5.SearchTypes;
    var _closure1_slot5 = var5;
    var5 = 2;
    var8 = var7[var5];
    var10 = var9.bind(var0)(var8);
    var8 = 350;
    var10 = var10.bind(var0)(var4, var8);
    var _closure1_slot6 = var10;
    var5 = var7[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.bind(var0)(var3, var8);
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/soundboard/searchSounds.tsx';
    var5 = var6.bind(var7)(var5);
    var2.trackSearchStart = var4;
    var2.trackSearchResultViewed = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun50759: for (var _fun50759_ip = 0;;) switch (_fun50759_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var6 = arg3;
                var4 = arg4;
                var _closure2_slot0 = var5;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var4;
                var7 = var3.reduce;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun50760: for (var _fun50760_ip = 0;;) switch (_fun50760_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = arg1;
                            var4 = _closure1_slot6;
                            var3 = _closure2_slot3;
                            var5 = _closure2_slot2;
                            var2 = null;
                            var5 = var2 == var5;
                            var6 = undefined;
                            var2 = undefined;
                            if (var5) {
                                _fun50760_ip = 46;
                                continue _fun50760
                            }
                        case 37:
                            var5 = _closure2_slot2;
                            var2 = var5.id;
                        case 46:
                            var2 = var4.bind(var6)(var3, var2);
                            var2 = var7.soundId;
                            var4 = _closure2_slot0;
                            var3 = var4.toLocaleLowerCase;
                            var11 = var3.bind(var4)();
                            var9 = _closure2_slot1;
                            var8 = _closure2_slot2;
                            var1 = function arg0, arg1, arg2, arg3() {
                                _fun50761: for (var _fun50761_ip = 0;;) switch (_fun50761_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var6 = arg1;
                                        var _closure4_slot0 = var9;
                                        var1 = var6.name;
                                        var0 = var1.toLocaleLowerCase;
                                        var3 = var0.bind(var1)();
                                        var0 = var6.emojiId;
                                        var1 = null;
                                        var4 = var1 != var0;
                                        var0 = null;
                                        if (!var4) {
                                            _fun50761_ip = 68;
                                            continue _fun50761
                                        }
                                    case 44:
                                        var7 = _closure1_slot3;
                                        var5 = var7.getCustomEmojiById;
                                        var4 = var6.emojiId;
                                        var0 = var5.bind(var7)(var4);
                                    case 68:
                                        var4 = var6.emojiName;
                                        var4 = var1 != var4;
                                        var8 = null;
                                        if (!var4) {
                                            _fun50761_ip = 128;
                                            continue _fun50761
                                        }
                                    case 83:
                                        var7 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var4 = 4;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var10 = var7.bind(var4)(var5);
                                        var7 = var10.convertSurrogateToName;
                                        var5 = var6.emojiName;
                                        var4 = false;
                                        var8 = var7.bind(var10)(var5, var4);
                                    case 128:
                                        var5 = var1 != var8;
                                        var4 = null;
                                        if (!var5) {
                                            _fun50761_ip = 173;
                                            continue _fun50761
                                        }
                                    case 137:
                                        var10 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 4;
                                        var7 = var7[var5];
                                        var5 = undefined;
                                        var7 = var10.bind(var5)(var7);
                                        var5 = var7.getByName;
                                        var4 = var5.bind(var7)(var8);
                                    case 173:
                                        if (!(var1 == var0)) {
                                            _fun50761_ip = 201;
                                            continue _fun50761
                                        }
                                    case 177:
                                        var5 = var1 == var4;
                                        var7 = undefined;
                                        if (var5) {
                                            _fun50761_ip = 191;
                                            continue _fun50761
                                        }
                                    case 186:
                                        var7 = var4.names;
                                    case 191:
                                        if (!(var1 == var7)) {
                                            _fun50761_ip = 199;
                                            continue _fun50761
                                        }
                                    case 195:
                                        var7 = new Array(0);
                                    case 199:
                                        _fun50761_ip = 217;
                                        continue _fun50761;
                                    case 201:
                                        var1 = var0.name;
                                        var0 = new Array(1);
                                        var0[0] = var1;
                                        var7 = var0;
                                    case 217:
                                        var1 = 0;
                                        var5 = 0;
                                        if (!(var9 === var3)) {
                                            _fun50761_ip = 228;
                                            continue _fun50761
                                        }
                                    case 225:
                                        var5 = 8;
                                    case 228:
                                        var0 = var7.includes;
                                        var0 = var0.bind(var7)(var9);
                                        var4 = var5;
                                        if (!var0) {
                                            _fun50761_ip = 251;
                                            continue _fun50761
                                        }
                                    case 244:
                                        var0 = 7;
                                        var4 = var5 + var0;
                                    case 251:
                                        var0 = var3.startsWith;
                                        var0 = var0.bind(var3)(var9);
                                        var5 = var4;
                                        if (!var0) {
                                            _fun50761_ip = 275;
                                            continue _fun50761
                                        }
                                    case 268:
                                        var0 = 6;
                                        var5 = var4 + var0;
                                    case 275:
                                        var4 = var7.some;
                                        var0 = function(arg0) { // Environment: var2
                                            var2 = arg0;
                                            var1 = var2.startsWith;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = var4.bind(var7)(var0);
                                        var4 = var5;
                                        if (!var0) {
                                            _fun50761_ip = 304;
                                            continue _fun50761
                                        }
                                    case 297:
                                        var0 = 5;
                                        var4 = var5 + var0;
                                    case 304:
                                        var0 = var3.endsWith;
                                        var0 = var0.bind(var3)(var9);
                                        var3 = var4;
                                        if (!var0) {
                                            _fun50761_ip = 328;
                                            continue _fun50761
                                        }
                                    case 321:
                                        var0 = 4;
                                        var3 = var4 + var0;
                                    case 328:
                                        var4 = var7.some;
                                        var0 = function(arg0) { // Environment: var2
                                            var2 = arg0;
                                            var1 = var2.endsWith;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = var4.bind(var7)(var0);
                                        var8 = var3;
                                        if (!var0) {
                                            _fun50761_ip = 357;
                                            continue _fun50761
                                        }
                                    case 350:
                                        var0 = 3;
                                        var8 = var3 + var0;
                                    case 357:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var3 = 5;
                                        var3 = var4[var3];
                                        var4 = undefined;
                                        var5 = var5.bind(var4)(var3);
                                        var10 = var6.name;
                                        var3 = var10.toLocaleLowerCase;
                                        var3 = var3.bind(var10)();
                                        var3 = var5.bind(var4)(var9, var3);
                                        var5 = var8;
                                        if (!var3) {
                                            _fun50761_ip = 416;
                                            continue _fun50761
                                        }
                                    case 409:
                                        var3 = 2;
                                        var5 = var8 + var3;
                                    case 416:
                                        var3 = var7.some;
                                        var2 = function(arg0) { // Environment: var2
                                            var1 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var0 = 5;
                                            var0 = var2[var0];
                                            var3 = undefined;
                                            var2 = var1.bind(var3)(var0);
                                            var1 = _closure4_slot0;
                                            var0 = arg0;
                                            var0 = var2.bind(var3)(var1, var0);
                                            return var0;
                                        };
                                        var3 = var3.bind(var7)(var2);
                                        var2 = var5;
                                        if (!var3) {
                                            _fun50761_ip = 445;
                                            continue _fun50761
                                        }
                                    case 438:
                                        var3 = 1;
                                        var2 = var5 + var3;
                                    case 445:
                                        var1 = var2 > var1;
                                        if (!var1) {
                                            _fun50761_ip = 491;
                                            continue _fun50761
                                        }
                                    case 452:
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 6;
                                        var0 = var5[var0];
                                        var5 = var3.bind(var4)(var0);
                                        var4 = var5.canUseSoundboardSound;
                                        var3 = arg2;
                                        var0 = arg3;
                                        var1 = var4.bind(var5)(var3, var6, var0);
                                    case 491:
                                        var0 = var2;
                                        if (!var1) {
                                            _fun50761_ip = 504;
                                            continue _fun50761
                                        }
                                    case 497:
                                        var1 = 100;
                                        var0 = var2 + var1;
                                    case 504:
                                        return var0;
                                }
                            };
                            var12 = undefined;
                            var10 = var7;
                            var1 = var12[var1](var11, var10, var9, var8, var7);
                            var0[var2] = var1;
                            return var0;
                    }
                };
                var1 = {};
                var1 = var7.bind(var3)(var2, var1);
                var _closure2_slot4 = var1;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot4;
                    var0 = arg0;
                    var0 = var0.soundId;
                    var1 = var1[var0];
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.sort;
                var0 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure2_slot4;
                    var0 = arg1;
                    var0 = var0.soundId;
                    var1 = var2[var0];
                    var0 = arg0;
                    var0 = var0.soundId;
                    var0 = var2[var0];
                    var0 = var1 - var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var3 = _closure1_slot7;
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                if (var7) {
                    _fun50759_ip = 110;
                    continue _fun50759
                }
            case 105:
                var1 = var6.id;
            case 110:
                var12 = undefined;
                var11 = var0;
                var10 = var4;
                var9 = var1;
                var8 = var5;
                var1 = var12[var3](var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var2.searchSounds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4740, 660, 5695, 795, 3106, 5606, 5697, 2]);