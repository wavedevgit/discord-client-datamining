// modules/activity_status/useUserVoiceActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activity_status/useUserVoiceActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useUserVoiceActivity, environment: var1
        _fun61857: for (var _fun61857_ip = 0;;) switch (_fun61857_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.userId;
                var _closure2_slot0 = var2;
                var1 = var1.guildId;
                var _closure2_slot1 = var1;
                var6 = undefined;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 4;
                var2 = var2[var7];
                var5 = var3.bind(var6)(var2);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun61858: for (var _fun61858_ip = 0;;) switch (_fun61858_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun61858_ip = 21;
                                continue _fun61858
                            }
                        case 13:
                            var0 = _closure2_slot0;
                            if (!(var2 == var0)) {
                                _fun61858_ip = 60;
                                continue _fun61858
                            }
                        case 21:
                            var0 = _closure2_slot0;
                            var2 = var2 != var0;
                            var0 = undefined;
                            if (!var2) {
                                _fun61858_ip = 58;
                                continue _fun61858
                            }
                        case 34:
                            var4 = _closure1_slot4;
                            var3 = var4.getDiscoverableVoiceStateForUser;
                            var2 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2);
                        case 58:
                            _fun61858_ip = 89;
                            continue _fun61858;
                        case 60:
                            var4 = _closure1_slot4;
                            var3 = var4.getDiscoverableVoiceState;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 89:
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var2);
                var2 = null;
                var4 = var2 == var3;
                var2 = undefined;
                if (var4) {
                    _fun61857_ip = 100;
                    continue _fun61857
                }
            case 95:
                var2 = var3.channelId;
            case 100:
                _closure2_slot2 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = var4[var7];
                var10 = var5.bind(var6)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot2;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    _fun61859: for (var _fun61859_ip = 0;;) switch (_fun61859_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun61859_ip = 17;
                                continue _fun61859
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var2 = _closure1_slot2;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var9.bind(var10)(var8, var2);
                _closure2_slot3 = var2;
                var4 = var4[var7];
                var5 = var5.bind(var6)(var4);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun61860: for (var _fun61860_ip = 0;;) switch (_fun61860_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun61860_ip = 32;
                                continue _fun61860
                            }
                        case 18:
                            var3 = _closure2_slot3;
                            var2 = var3.isPrivate;
                            var0 = var2.bind(var3)();
                        case 32:
                            if (var0) {
                                _fun61860_ip = 68;
                                continue _fun61860
                            }
                        case 35:
                            var4 = _closure1_slot3;
                            var3 = var4.can;
                            var2 = _closure1_slot5;
                            var2 = var2.VIEW_CHANNEL;
                            var1 = _closure2_slot3;
                            var0 = var3.bind(var4)(var2, var1);
                        case 68:
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var1, var0);
                if (var0) {
                    _fun61857_ip = 197;
                    continue _fun61857
                }
            case 193:
                var0 = {};
                _fun61857_ip = 212;
                continue _fun61857;
            case 197:
                var1 = {};
                var1.voiceState = var3;
                var1.voiceChannel = var2;
                var0 = var1;
            case 212:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3050, 3480, 483, 566, 2]);