// modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useIsPersistentSecureFramesFingerprint.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var7 = var1.userId;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 5;
        var1 = var4[var1];
        var5 = undefined;
        var6 = var3.bind(var5)(var1);
        var4 = var6.useStateFromStores;
        var1 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getSecureFramesRosterMapEntry;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = var4.bind(var6)(var3, var1);
        var _closure2_slot1 = var9;
        var6 = _closure1_slot4;
        var3 = var6.useState;
        var1 = true;
        var1 = var3.bind(var6)(var1);
        var11 = _closure1_slot3;
        var10 = 2;
        var2 = var11.bind(var5)(var1, var10);
        var1 = 0;
        var3 = var2[var1];
        var8 = 1;
        var2 = var2[var8];
        var _closure2_slot2 = var2;
        var2 = var6.useState;
        var12 = false;
        var2 = var2.bind(var6)(var12);
        var4 = var11.bind(var5)(var2, var10);
        var2 = var4[var1];
        var4 = var4[var8];
        var _closure2_slot3 = var4;
        var4 = var6.useState;
        var4 = var4.bind(var6)(var12);
        var4 = var11.bind(var5)(var4, var10);
        var1 = var4[var1];
        var4 = var4[var8];
        var _closure2_slot4 = var4;
        var8 = var6.useCallback;
        var4 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun66959: for (var _fun66959_ip = 0;;) switch (_fun66959_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun66959_ip = 229;
                                continue _fun66959
                            }
                        case 10:
                            var7 = arg0;
                            var6 = arg1;
                            var4 = undefined;
                            var3 = undefined;
                            var5 = undefined;
                            var8 = _closure2_slot2;
                            var1 = true;
                            var1 = var8.bind(var4)(var1);
                        case 36: // try_start_0 // try_start_1
                            var11 = _closure1_slot6;
                            var3 = var11;
                            var9 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var10 = 6;
                            var1 = var1[var10];
                            var9 = var9.bind(var4)(var1);
                            var1 = var9.isCurrentUserPublicKeyMatch;
                            var1 = var1.bind(var9)(var11);
                            SaveGenerator(address = 81);
                        case 79:
                            return var1;
                        case 81:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                            if (var9) {
                                _fun66959_ip = 164;
                                continue _fun66959
                            }
                        case 87:
                            var5 = var1;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var8 = var8[var10];
                            var9 = var9.bind(var4)(var8);
                            var8 = var9.isPublicKeyMatch;
                            var3 = var8.bind(var9)(var7, var6, var3);
                            SaveGenerator(address = 124);
                        case 122:
                            return var3;
                        case 124:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                            if (var6) {
                                _fun66959_ip = 150;
                                continue _fun66959
                            }
                        case 130:
                            var6 = _closure2_slot3;
                            var5 = var6.bind(var4)(var5);
                            var5 = _closure2_slot4;
                            var5 = var5.bind(var4)(var3);
                        case 148: // try_end0
                            _fun66959_ip = 200;
                            continue _fun66959;
                        case 150: // try_end1
                            var6 = _closure2_slot2;
                            var5 = false;
                            var5 = var6.bind(var4)(var5);
                            return var3;
                        case 164:
                            var5 = _closure2_slot2;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 178: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var1 = _closure2_slot3;
                            var3 = false;
                            var1 = var1.bind(var4)(var3);
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var4)(var3);
                        case 200: // try_end2
                            var3 = _closure2_slot2;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
                            return var4;
                        case 214: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot2;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 229:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var5 = var4.bind(var5)();
        var4 = new Array(0);
        var8 = var8.bind(var6)(var5, var4);
        var _closure2_slot5 = var8;
        var5 = var6.useEffect;
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var0 = function() { // Environment: var0
            _fun66961: for (var _fun66961_ip = 0;;) switch (_fun66961_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun66961_ip = 35;
                        continue _fun66961
                    }
                case 13:
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    _fun66961_ip = 66;
                    continue _fun66961;
                case 35:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = false;
                    var3 = var3.bind(var2)(var1);
                    var3 = _closure2_slot4;
                    var3 = var3.bind(var2)(var1);
                    var0 = _closure2_slot2;
                    var0 = var0.bind(var2)(var1);
                case 66:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.loading = var3;
        var0.isCurrentUserKeyPersistent = var2;
        var0.isOtherUserKeyPersistent = var1;
        return var0;
    };
    var2.useIsPersistentSecureFramesFingerprint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3518, 8266, 566, 8265, 2]);