// modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SECURE_FRAMES_GENERATE_FINGERPRINT_VERSION;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Features;
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useSecureFramesPairwiseFingerprint.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var1 = var1.userId;
        var _closure2_slot0 = var1;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var9 = 8;
        var3 = var12[var9];
        var8 = undefined;
        var6 = var11.bind(var8)(var3);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var10 = var5.bind(var6)(var4, var3);
        var _closure2_slot1 = var10;
        var4 = _closure1_slot1;
        var3 = 9;
        var3 = var12[var3];
        var5 = var4.bind(var8)(var3);
        var4 = var10 !== var1;
        var3 = '[useSecureFramesPairwiseFingerprint] Should not pass current user id.';
        var3 = var5.bind(var8)(var4, var3);
        var3 = _closure1_slot5;
        var4 = var3.useState;
        var7 = null;
        var4 = var4.bind(var3)(var7);
        var15 = _closure1_slot4;
        var14 = 2;
        var4 = var15.bind(var8)(var4, var14);
        var5 = 0;
        var6 = var4[var5];
        var _closure2_slot2 = var6;
        var13 = 1;
        var4 = var4[var13];
        var _closure2_slot3 = var4;
        var16 = var3.useState;
        var4 = false;
        var4 = var16.bind(var3)(var4);
        var4 = var15.bind(var8)(var4, var14);
        var5 = var4[var5];
        var _closure2_slot4 = var5;
        var4 = var4[var13];
        var _closure2_slot5 = var4;
        var4 = var12[var9];
        var15 = var11.bind(var8)(var4);
        var14 = var15.useStateFromStores;
        var2 = _closure1_slot8;
        var13 = new Array(1);
        var13[0] = var2;
        var4 = function() { // Environment: var0
            var2 = _closure1_slot8;
            var1 = var2.getSecureFramesRosterMapEntry;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var14.bind(var15)(var13, var4);
        var _closure2_slot6 = var4;
        var9 = var12[var9];
        var12 = var11.bind(var8)(var9);
        var11 = var12.useStateFromStores;
        var9 = new Array(1);
        var9[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot8;
            var1 = var2.getSecureFramesRosterMapEntry;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = var11.bind(var12)(var9, var2);
        var _closure2_slot7 = var9;
        var12 = var3.useCallback;
        var11 = function(arg0) { // Environment: var0
            var3 = _closure2_slot3;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var2);
            var4 = var5.fromByteArray;
            var2 = arg0;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var0)(var2);
            var2 = _closure2_slot5;
            var1 = false;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var2 = new Array(0);
        var12 = var12.bind(var3)(var11, var2);
        var _closure2_slot8 = var12;
        var11 = var3.useCallback;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2, arg3) { // Environment: var0
                var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                    _fun66927: for (var _fun66927_ip = 0;;) switch (_fun66927_ip) {
                        case 0:
                            StartGenerator();
                            var5 = arg2;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun66927_ip = 233;
                                continue _fun66927
                            }
                        case 13:
                            var4 = _closure1_slot7;
                            var3 = var4.supports;
                            var2 = _closure1_slot10;
                            var2 = var2.MLS_PAIRWISE_FINGERPRINTS;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun66927_ip = 182;
                                continue _fun66927
                            }
                        case 47:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 11;
                            var2 = var4[var2];
                            var4 = undefined;
                            var9 = var3.bind(var4)(var2);
                            var8 = var9.generatePairwiseFingerprint;
                            var7 = _closure1_slot9;
                            var2 = global;
                            var10 = var2.Uint8Array;
                            var3 = var10.prototype;
                            var6 = Object.create(var3, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var15 = arg1;
                            var16 = var6;
                            var3 = new var16[var10](var15, var14);
                            var14 = var3 instanceof Object ? var3 : var6;
                            var10 = var2.Uint8Array;
                            var2 = var10.prototype;
                            var3 = Object.create(var2, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var15 = arg3;
                            var16 = var3;
                            var2 = new var16[var10](var15, var14);
                            var12 = var2 instanceof Object ? var2 : var3;
                            var13 = arg0;
                            var16 = var9;
                            var15 = var7;
                            var11 = var5;
                            var2 = var16[var8](var15, var14, var13, var12, var11, var10);
                            SaveGenerator(address = 159);
                        case 157:
                            return var2;
                        case 159:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun66927_ip = 179;
                                continue _fun66927
                            }
                        case 165:
                            var3 = _closure2_slot8;
                            var3 = var3.bind(var4)(var2);
                            _fun66927_ip = 228;
                            continue _fun66927;
                        case 179:
                            return var2;
                        case 182:
                            var3 = _closure1_slot8;
                            var2 = var3.getRTCConnection;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun66927_ip = 228;
                                continue _fun66927
                            }
                        case 202:
                            var3 = var4.getMLSPairwiseFingerprint;
                            var2 = _closure1_slot9;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure2_slot8;
                                var0 = global;
                                var3 = var0.Uint8Array;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = arg0;
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var5, var1);
                        case 228:
                            var1 = undefined;
                            return var1;
                        case 233:
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
        var8 = var2.bind(var8)();
        var2 = new Array(1);
        var2[0] = var12;
        var8 = var11.bind(var3)(var8, var2);
        var _closure2_slot9 = var8;
        var2 = var3.useRef;
        var2 = var2.bind(var3)(var7);
        var _closure2_slot10 = var2;
        var7 = var3.useEffect;
        var2 = new Array(5);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var1;
        var2[4] = var4;
        var1 = function() { // Environment: var0
            _fun66930: for (var _fun66930_ip = 0;;) switch (_fun66930_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var4 = null;
                    var2 = var4 != var2;
                    if (!var2) {
                        _fun66930_ip = 26;
                        continue _fun66930
                    }
                case 18:
                    var3 = _closure2_slot7;
                    var2 = var4 != var3;
                case 26:
                    if (!var2) {
                        _fun66930_ip = 42;
                        continue _fun66930
                    }
                case 29:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var2 = var4 == var3;
                case 42:
                    if (!var2) {
                        _fun66930_ip = 91;
                        continue _fun66930
                    }
                case 45:
                    var3 = _closure2_slot5;
                    var6 = undefined;
                    var2 = true;
                    var2 = var3.bind(var6)(var2);
                    var3 = _closure2_slot10;
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = function() { // Environment: var0
                        var5 = _closure2_slot9;
                        var9 = _closure2_slot1;
                        var8 = _closure2_slot7;
                        var7 = _closure2_slot0;
                        var6 = _closure2_slot6;
                        var10 = undefined;
                        var0 = var10[var5](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var2 = 0;
                    var2 = var5.bind(var6)(var4, var2);
                    var3.current = var2;
                case 91:
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun66932: for (var _fun66932_ip = 0;;) switch (_fun66932_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun66932_ip = 32;
                                    continue _fun66932
                                }
                            case 13:
                                var1 = global;
                                var2 = var1.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 32:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var1 = var7.bind(var3)(var1, var2);
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot2;
            var0.fingerprint = var2;
            var2 = _closure2_slot6;
            var0.userKey = var2;
            var1 = _closure2_slot4;
            var0.loading = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSecureFramesPairwiseFingerprint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1216, 3476, 3518, 8263, 3510, 566, 44, 206, 8247, 2]);