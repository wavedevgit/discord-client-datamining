// modules/stage_channels/useToggleRequestToSpeak.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/useToggleRequestToSpeak.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun67876: for (var _fun67876_ip = 0;;) switch (_fun67876_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var5 = var0[var5];
                var6 = undefined;
                var9 = var3.bind(var6)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var9)(var7, var5);
                var9 = _closure1_slot1;
                var7 = 4;
                var5 = var0[var7];
                var5 = var9.bind(var6)(var5);
                var4 = var4.id;
                var4 = var5.bind(var6)(var8, var4);
                var _closure2_slot1 = var4;
                var0 = var0[var7];
                var0 = var3.bind(var6)(var0);
                var0 = var0.RequestToSpeakStates;
                var0 = var0.REQUESTED_TO_SPEAK;
                var0 = var4 === var0;
                if (var0) {
                    _fun67876_ip = 156;
                    continue _fun67876
                }
            case 123:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.RequestToSpeakStates;
                var3 = var3.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                var0 = var4 === var3;
            case 156:
                var _closure2_slot2 = var0;
                var5 = _closure1_slot4;
                var3 = var5.useState;
                var4 = var3.bind(var5)(var0);
                var3 = _closure1_slot3;
                var2 = 2;
                var4 = var3.bind(var6)(var4, var2);
                var2 = 0;
                var2 = var4[var2];
                var _closure2_slot3 = var2;
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot4 = var3;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = new Array(2);
                var0[0] = var2;
                var1 = function() { // Environment: var1
                    _fun67879: for (var _fun67879_ip = 0;;) switch (_fun67879_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var3 = var5.shouldAgeVerifyToSpeakForCurrentUser;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var5)(var2);
                            if (var2) {
                                _fun67879_ip = 195;
                                continue _fun67879
                            }
                        case 54:
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 4;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.RequestToSpeakStates;
                            var2 = var2.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                            if (!(var3 !== var2)) {
                                _fun67879_ip = 139;
                                continue _fun67879
                            }
                        case 94:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.toggleRequestToSpeak;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot3;
                            var2 = !var2;
                            var2 = var5.bind(var6)(var3, var2);
                            _fun67879_ip = 177;
                            continue _fun67879;
                        case 139:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.audienceAckRequestToSpeak;
                            var3 = _closure2_slot0;
                            var2 = true;
                            var2 = var5.bind(var6)(var3, var2);
                        case 177:
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot3;
                            var1 = !var1;
                            var1 = var2.bind(var0)(var1);
                            _fun67879_ip = 261;
                            continue _fun67879;
                        case 195:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var1 = var6[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.showAgeVerificationGetStartedModal;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = 7;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.AgeVerificationModalEntryPoint;
                            var4 = var4.STAGE_CHANNEL_RAISE_HAND;
                            var1.entryPoint = var4;
                            var1 = var2.bind(var3)(var1);
                        case 261:
                            return var0;
                    }
                };
                var0[1] = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1216, 566, 4234, 4243, 5927, 4551, 5911, 2]);