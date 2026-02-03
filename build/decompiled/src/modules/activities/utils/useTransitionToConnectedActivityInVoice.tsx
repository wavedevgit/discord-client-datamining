// modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var4 = var1.onTransition;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = function() {
                var0 = undefined;
                var3 = _closure3_slot1;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot0 = var4;
            var1 = function() {
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot3;
                var1 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun110584: for (var _fun110584_ip = 0;;) switch (_fun110584_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun110584_ip = 237;
                                    continue _fun110584
                                }
                            case 12:
                                var1 = arg0;
                                var7 = var1.location;
                                var _closure6_slot0 = var7;
                                var3 = undefined;
                                var _closure6_slot1 = var3;
                                SaveGenerator(address = 34);
                            case 32:
                                return var3;
                            case 34:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun110584_ip = 234;
                                    continue _fun110584
                                }
                            case 43:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 5;
                                var2 = var8[var2];
                                var5 = var5.bind(var3)(var2);
                                var2 = var5.getEmbeddedActivityLocationChannelId;
                                var8 = var2.bind(var5)(var7);
                                var5 = null;
                                if (!(var5 != var8)) {
                                    _fun110584_ip = 228;
                                    continue _fun110584
                                }
                            case 86:
                                var7 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 6;
                                var2 = var9[var2];
                                var2 = var7.bind(var3)(var2);
                                var2 = var2.bind(var3)(var8);
                                if (!var2) {
                                    _fun110584_ip = 228;
                                    continue _fun110584
                                }
                            case 114:
                                var7 = _closure1_slot6;
                                var2 = var7.getVoiceChannelId;
                                var2 = var2.bind(var7)();
                                if (!(var2 !== var8)) {
                                    _fun110584_ip = 173;
                                    continue _fun110584
                                }
                            case 132:
                                var7 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 7;
                                var2 = var9[var2];
                                var7 = var7.bind(var3)(var2);
                                var2 = {};
                                var2.channelId = var8;
                                var2 = var7.bind(var3)(var2);
                                SaveGenerator(address = 167);
                            case 165:
                                return var2;
                            case 167:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun110584_ip = 231;
                                    continue _fun110584
                                }
                            case 173:
                                var7 = _closure1_slot5;
                                var6 = var7.getChannel;
                                var6 = var6.bind(var7)(var8);
                                var7 = var5 == var6;
                                var5 = undefined;
                                if (var7) {
                                    _fun110584_ip = 201;
                                    continue _fun110584
                                }
                            case 196:
                                var5 = var6.guild_id;
                            case 201:
                                _closure6_slot1 = var5;
                                var5 = global;
                                var6 = var5.setTimeout;
                                var5 = function() { // Environment: var4
                                    _fun110585: for (var _fun110585_ip = 0;;) switch (_fun110585_ip) {
                                        case 0:
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 8;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = _closure6_slot1;
                                            var1 = _closure6_slot0;
                                            var1 = var3.bind(var0)(var2, var1);
                                            var3 = _closure2_slot0;
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun110585_ip = 63;
                                                continue _fun110585
                                            }
                                        case 55:
                                            var1 = _closure2_slot0;
                                            var1 = var1.bind(var0)();
                                        case 63:
                                            return var0;
                                    }
                                };
                                var4 = 0;
                                var4 = var6.bind(var3)(var5, var4);
                            case 228:
                                return var3;
                            case 231:
                                return var2;
                            case 234:
                                return var1;
                            case 237:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                _closure3_slot1 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure3_slot1 = var1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var3);
            var3 = var2.ComponentDispatch;
            var2 = var3.subscribe;
            var1 = _closure1_slot7;
            var1 = var1.OPEN_EMBEDDED_ACTIVITY;
            var1 = var2.bind(var3)(var1, var4);
            var0 = function() { // Environment: var0
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.ComponentDispatch;
                var3 = var4.unsubscribe;
                var1 = _closure1_slot7;
                var2 = var1.OPEN_EMBEDDED_ACTIVITY;
                var1 = _closure3_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1372, 1661, 660, 3072, 7951, 7971, 7960, 1229, 2]);