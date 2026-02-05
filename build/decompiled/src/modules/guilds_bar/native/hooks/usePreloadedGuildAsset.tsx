// modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot3 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun101102: for (var _fun101102_ip = 0;;) switch (_fun101102_ip) {
            case 0:
                var5 = arg0;
                var7 = arg1;
                var0 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var7;
                var _closure2_slot2 = var0;
                var10 = _closure1_slot3;
                var4 = var10.useState;
                var3 = {};
                var4 = var4.bind(var10)(var3);
                var3 = _closure1_slot2;
                var6 = undefined;
                var8 = 2;
                var4 = var3.bind(var6)(var4, var8);
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot3 = var3;
                var4 = var10.useRef;
                var3 = {};
                var3.guildId = var5;
                var3.asset = var0;
                var3.icon = var7;
                var3.preloading = var7;
                var4 = var4.bind(var10)(var3);
                var _closure2_slot4 = var4;
                var9 = var10.useEffect;
                var7 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var0 = _closure2_slot4;
                        var1 = var0.current;
                        var0 = undefined;
                        var1.guildId = var0;
                        return var0;
                    };
                    return var0;
                };
                var3 = new Array(0);
                var3 = var9.bind(var10)(var7, var3);
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var8];
                var3 = var7.bind(var6)(var3);
                var3 = var3.bind(var6)(var4);
                var4 = var3.guildId;
                if (!(var5 === var4)) {
                    _fun101102_ip = 161;
                    continue _fun101102
                }
            case 155:
                var0 = var3.asset;
            case 161:
                var3 = _closure1_slot3;
                var2 = var3.useEffect;
                var1 = function() { // Environment: var1
                    _fun101105: for (var _fun101105_ip = 0;;) switch (_fun101105_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var1.guildId;
                            if (!(var2 === var1)) {
                                _fun101105_ip = 171;
                                continue _fun101105
                            }
                        case 28:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun101105_ip = 171;
                                continue _fun101105
                            }
                        case 41:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var1.icon;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun101105_ip = 89;
                                continue _fun101105
                            }
                        case 66:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            var2 = var2.preloading;
                            var1 = var3 !== var2;
                        case 89:
                            if (!var1) {
                                _fun101105_ip = 231;
                                continue _fun101105
                            }
                        case 95:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var3 = _closure2_slot1;
                            var1.preloading = var3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.preload;
                            var3 = var1.bind(var2)(var3);
                            var2 = var3.then;
                            var1 = function() { // Environment: var1
                                _fun101106: for (var _fun101106_ip = 0;;) switch (_fun101106_ip) {
                                    case 0:
                                        var1 = _closure2_slot4;
                                        var1 = var1.current;
                                        var2 = var1.guildId;
                                        var1 = _closure2_slot0;
                                        var1 = var2 === var1;
                                        if (!var1) {
                                            _fun101106_ip = 51;
                                            continue _fun101106
                                        }
                                    case 28:
                                        var2 = _closure2_slot4;
                                        var2 = var2.current;
                                        var3 = var2.preloading;
                                        var2 = _closure2_slot1;
                                        var1 = var3 === var2;
                                    case 51:
                                        if (!var1) {
                                            _fun101106_ip = 101;
                                            continue _fun101106
                                        }
                                    case 54:
                                        var1 = _closure2_slot4;
                                        var3 = var1.current;
                                        var2 = _closure2_slot1;
                                        var3.icon = var2;
                                        var2 = var1.current;
                                        var1 = _closure2_slot2;
                                        var2.asset = var1;
                                        var2 = _closure2_slot3;
                                        var1 = undefined;
                                        var0 = {};
                                        var0 = var2.bind(var1)(var0);
                                    case 101:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            _fun101105_ip = 231;
                            continue _fun101105;
                        case 171:
                            var1 = _closure2_slot4;
                            var3 = var1.current;
                            var2 = _closure2_slot0;
                            var3.guildId = var2;
                            var2 = var1.current;
                            var3 = _closure2_slot1;
                            var2.icon = var3;
                            var2 = var1.current;
                            var2.preloading = var3;
                            var1 = var1.current;
                            var0 = _closure2_slot2;
                            var1.asset = var0;
                        case 231:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4737, 4704, 2]);