// ../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.DARWIN_H265_VERSION;
    var _closure1_slot2 = var6;
    var3 = var3.ExperimentFlags;
    var _closure1_slot3 = var3;
    var3 = new Array(2);
    var6 = {
        'name': 'H264',
        'encode': true,
        'decode': true
    };
    var3[0] = var6;
    var6 = {
        'name': 'VP8',
        'encode': true,
        'decode': true
    };
    var3[1] = var6;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun32686: for (var _fun32686_ip = 0;;) switch (_fun32686_ip) {
            case 0:
                var7 = arg0;
                var0 = new Array(0);
                var2 = var7.has;
                var1 = _closure1_slot3;
                var1 = var1.SIGNAL_AV1_DECODE;
                var1 = var2.bind(var7)(var1);
                if (var1) {
                    _fun32686_ip = 82;
                    continue _fun32686
                }
            case 33:
                var2 = var7.has;
                var1 = _closure1_slot3;
                var1 = var1.SIGNAL_AV1;
                var1 = var2.bind(var7)(var1);
                if (!var1) {
                    _fun32686_ip = 106;
                    continue _fun32686
                }
            case 56:
                var2 = var0.push;
                var1 = {
                    'name': 'AV1',
                    'encode': true,
                    'decode': true
                };
                var1 = var2.bind(var0)(var1);
                _fun32686_ip = 106;
                continue _fun32686;
            case 82:
                var2 = var0.push;
                var1 = {
                    'name': 'AV1',
                    'encode': false,
                    'decode': true
                };
                var1 = var2.bind(var0)(var1);
            case 106:
                var2 = var0.push;
                var1 = {};
                var3 = 'H265';
                var1.name = var3;
                var6 = global;
                var3 = var6.window;
                var4 = 'undefined';
                var3 = typeof var3;
                var3 = var4 === var3;
                if (var3) {
                    _fun32686_ip = 196;
                    continue _fun32686
                }
            case 142:
                var4 = var6.window;
                var9 = null;
                var11 = var9 == var4;
                var8 = undefined;
                if (var11) {
                    _fun32686_ip = 186;
                    continue _fun32686
                }
            case 159:
                var4 = var4.DiscordNative;
                var9 = var9 == var4;
                var8 = undefined;
                if (var9) {
                    _fun32686_ip = 186;
                    continue _fun32686
                }
            case 174:
                var4 = var4.process;
                var8 = var4.platform;
            case 186:
                var4 = 'darwin';
                var3 = var4 !== var8;
            case 196:
                if (var3) {
                    _fun32686_ip = 342;
                    continue _fun32686
                }
            case 202:
                var4 = var6.window;
                var11 = null;
                var9 = var11 == var4;
                var12 = undefined;
                var8 = undefined;
                if (var9) {
                    _fun32686_ip = 248;
                    continue _fun32686
                }
            case 221:
                var4 = var4.DiscordNative;
                var9 = var11 == var4;
                var8 = undefined;
                if (var9) {
                    _fun32686_ip = 248;
                    continue _fun32686
                }
            case 236:
                var4 = var4.os;
                var8 = var4.arch;
            case 248:
                var4 = 'arm64';
                var4 = var4 === var8;
                if (!var4) {
                    _fun32686_ip = 339;
                    continue _fun32686
                }
            case 261:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 1;
                var8 = var10[var8];
                var10 = var9.bind(var12)(var8);
                var9 = var10.satisfies;
                var6 = var6.window;
                var13 = var11 == var6;
                var8 = undefined;
                if (var13) {
                    _fun32686_ip = 329;
                    continue _fun32686
                }
            case 302:
                var6 = var6.DiscordNative;
                var11 = var11 == var6;
                var8 = undefined;
                if (var11) {
                    _fun32686_ip = 329;
                    continue _fun32686
                }
            case 317:
                var6 = var6.os;
                var8 = var6.release;
            case 329:
                var6 = _closure1_slot2;
                var4 = var9.bind(var10)(var8, var6);
            case 339:
                var3 = var4;
            case 342:
                var1.encode = var3;
                var4 = null;
                var3 = var4 != var7;
                if (!var3) {
                    _fun32686_ip = 376;
                    continue _fun32686
                }
            case 356:
                var8 = var7.has;
                var6 = _closure1_slot3;
                var6 = var6.H265_HARDWARE_ONLY;
                var3 = var8.bind(var7)(var6);
            case 376:
                var3 = !var3;
                if (var3) {
                    _fun32686_ip = 414;
                    continue _fun32686
                }
            case 382:
                var6 = var4 == var7;
                var4 = undefined;
                if (var6) {
                    _fun32686_ip = 411;
                    continue _fun32686
                }
            case 391:
                var6 = var7.has;
                var5 = _closure1_slot3;
                var5 = var5.H265_HARDWARE_DECODE_AVAILABLE;
                var4 = var6.bind(var7)(var5);
            case 411:
                var3 = var4;
            case 414:
                var1.decode = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.getExperimentCodecs = var3;
    var3 = function arg0, arg1() {
        var1 = global;
        var3 = var1.JSON;
        var2 = var3.parse;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            _fun32691: for (var _fun32691_ip = 0;;) switch (_fun32691_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var3 = var1.codec;
                    var2 = 'AV1';
                    var4 = 'AV1X';
                    if (!(var4 !== var3)) {
                        _fun32691_ip = 28;
                        continue _fun32691
                    }
                case 25:
                    var2 = var3;
                case 28:
                    var0.name = var2;
                    var2 = var1.encode;
                    var0.encode = var2;
                    var1 = var1.decode;
                    var0.decode = var1;
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var1);
        var2 = function arg0, arg1() {
            var3 = arg1;
            var0 = arg0;
            var _closure3_slot0 = var0;
            var2 = var3.concat;
            var0 = _closure1_slot4;
            var3 = var2.bind(var3)(var0);
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun32689: for (var _fun32689_ip = 0;;) switch (_fun32689_ip) {
                    case 0:
                        var4 = arg0;
                        var _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg0) { // Environment: var1
                            var0 = _closure4_slot0;
                            var1 = var0.name;
                            var0 = arg0;
                            var0 = var0.name;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun32689_ip = 102;
                            continue _fun32689
                        }
                    case 37:
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var0 = {};
                        var5 = var3.name;
                        var0.name = var5;
                        var5 = var3.encode;
                        if (!var5) {
                            _fun32689_ip = 72;
                            continue _fun32689
                        }
                    case 66:
                        var5 = var4.encode;
                    case 72:
                        var0.encode = var5;
                        var3 = var3.decode;
                        if (!var3) {
                            _fun32689_ip = 92;
                            continue _fun32689
                        }
                    case 86:
                        var3 = var4.decode;
                    case 92:
                        var0.decode = var3;
                        var0 = var1.bind(var2)(var0);
                    case 102:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = undefined;
        var0 = arg1;
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var2.filterVideoCodecs = var3;
    var1 = function arg0() {
        _fun32692: for (var _fun32692_ip = 0;;) switch (_fun32692_ip) {
            case 0:
                var1 = arg0;
                var0 = 'AV1X';
                var2 = 'AV1';
                if (!(var2 !== var1)) {
                    _fun32692_ip = 20;
                    continue _fun32692
                }
            case 17:
                var0 = var1;
            case 20:
                return var0;
        }
    };
    var2.codecNameToPayloadName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3510, 3682, 2]);