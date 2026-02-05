// modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx
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
    var6 = var3.useEffect;
    var _closure1_slot2 = var6;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90742: for (var _fun90742_ip = 0;;) switch (_fun90742_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var10 = null;
                var0 = var5;
                if (!(var10 == var0)) {
                    _fun90742_ip = 20;
                    continue _fun90742
                }
            case 18:
                var0 = {};
            case 20:
                var6 = var0.communicationDisabledUntil;
                var8 = var0.userId;
                var _closure2_slot1 = var8;
                var9 = var0.guildId;
                var _closure2_slot2 = var9;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                if (!(var10 == var6)) {
                    _fun90742_ip = 92;
                    continue _fun90742
                }
            case 73:
                var0 = global;
                var7 = var0.Date;
                var0 = var7.now;
                var0 = var0.bind(var7)();
                _fun90742_ip = 111;
                continue _fun90742;
            case 92:
                var7 = global;
                var11 = var7.Date;
                var7 = var11.parse;
                var0 = var7.bind(var11)(var6);
            case 111:
                var0 = var3.bind(var4)(var0);
                var7 = var0.seconds;
                var _closure2_slot3 = var7;
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var10);
                var _closure2_slot4 = var3;
                var3 = _closure1_slot2;
                var2 = new Array(5);
                var2[0] = var9;
                var2[1] = var8;
                var2[2] = var7;
                var2[3] = var6;
                var2[4] = var5;
                var1 = function() { // Environment: var1
                    _fun90743: for (var _fun90743_ip = 0;;) switch (_fun90743_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun90743_ip = 31;
                                continue _fun90743
                            }
                        case 15:
                            var2 = _closure2_slot2;
                            if (!(var4 != var2)) {
                                _fun90743_ip = 31;
                                continue _fun90743
                            }
                        case 23:
                            var2 = _closure2_slot1;
                            if (!(var4 == var2)) {
                                _fun90743_ip = 57;
                                continue _fun90743
                            }
                        case 31:
                            var2 = global;
                            var5 = var2.clearTimeout;
                            var2 = _closure2_slot4;
                            var3 = var2.current;
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            return var2;
                        case 57:
                            var3 = _closure2_slot3;
                            var2 = 0;
                            var2 = var3 <= var2;
                            if (!var2) {
                                _fun90743_ip = 83;
                                continue _fun90743
                            }
                        case 70:
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var2 = var4 == var3;
                        case 83:
                            if (!var2) {
                                _fun90743_ip = 125;
                                continue _fun90743
                            }
                        case 86:
                            var2 = _closure2_slot4;
                            var1 = global;
                            var5 = var1.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.clearGuildMemberTimeout;
                                var2 = _closure2_slot2;
                                var1 = _closure2_slot1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1 = 1000;
                            var1 = var5.bind(var4)(var3, var1);
                            var2.current = var1;
                        case 125:
                            var0 = function() { // Environment: var0
                                _fun90745: for (var _fun90745_ip = 0;;) switch (_fun90745_ip) {
                                    case 0:
                                        var1 = _closure2_slot4;
                                        var2 = var1.current;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun90745_ip = 52;
                                            continue _fun90745
                                        }
                                    case 18:
                                        var2 = global;
                                        var4 = var2.clearTimeout;
                                        var2 = _closure2_slot4;
                                        var3 = var2.current;
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var3);
                                        var0 = _closure2_slot4;
                                        var0.current = var1;
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useCommunicationDisabledCountdownCleanup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7082, 11805, 2]);