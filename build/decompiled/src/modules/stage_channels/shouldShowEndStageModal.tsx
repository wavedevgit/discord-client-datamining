// modules/stage_channels/shouldShowEndStageModal.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/shouldShowEndStageModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68420: for (var _fun68420_ip = 0;;) switch (_fun68420_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var0 = var6.isGuildStageVoice;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun68420_ip = 26;
                    continue _fun68420
                }
            case 22:
                var0 = false;
                return var0;
            case 26:
                var2 = _closure1_slot5;
                var1 = var2.isLive;
                var0 = var6.id;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun68420_ip = 56;
                    continue _fun68420
                }
            case 52:
                var0 = false;
                return var0;
            case 56:
                var1 = _closure1_slot2;
                var0 = var1.getId;
                var7 = var0.bind(var1)();
                var _closure2_slot1 = var7;
                var2 = _closure1_slot4;
                var1 = var2.isModerator;
                var0 = var6.id;
                var0 = var1.bind(var2)(var7, var0);
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun68420_ip = 268;
                    continue _fun68420
                }
            case 107:
                var4 = _closure1_slot4;
                var2 = var4.isSpeaker;
                var1 = var6.id;
                var1 = var2.bind(var4)(var7, var1);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun68420_ip = 265;
                    continue _fun68420
                }
            case 140:
                var7 = _closure1_slot3;
                var4 = var7.getMutableParticipants;
                var2 = var6.id;
                var7 = var4.bind(var7)(var2);
                var4 = var7.find;
                var2 = function(arg0) { // Environment: var3
                    _fun68421: for (var _fun68421_ip = 0;;) switch (_fun68421_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.user;
                            var3 = var0.id;
                            var0 = _closure2_slot1;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun68421_ip = 65;
                                continue _fun68421
                            }
                        case 27:
                            var4 = _closure1_slot4;
                            var3 = var4.isModerator;
                            var2 = var2.user;
                            var2 = var2.id;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 65:
                            return var0;
                    }
                };
                var2 = var4.bind(var7)(var2);
                var4 = null;
                var2 = var4 == var2;
                if (var2) {
                    _fun68420_ip = 262;
                    continue _fun68420
                }
            case 186:
                var8 = _closure1_slot3;
                var7 = var8.getMutableParticipants;
                var6 = var6.id;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 4;
                var9 = var9[var5];
                var5 = undefined;
                var5 = var10.bind(var5)(var9);
                var5 = var5.StageChannelParticipantNamedIndex;
                var5 = var5.SPEAKER;
                var6 = var7.bind(var8)(var6, var5);
                var5 = var6.find;
                var3 = function(arg0) { // Environment: var3
                    _fun68422: for (var _fun68422_ip = 0;;) switch (_fun68422_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.user;
                            var3 = var0.id;
                            var0 = _closure2_slot1;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun68422_ip = 65;
                                continue _fun68422
                            }
                        case 27:
                            var4 = _closure1_slot4;
                            var3 = var4.isModerator;
                            var2 = var2.user;
                            var2 = var2.id;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 65:
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var2 = var4 == var3;
            case 262:
                var1 = var2;
            case 265:
                var0 = var1;
            case 268:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 4245, 4246, 1377, 5713, 2]);