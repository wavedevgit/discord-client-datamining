// modules/video_calls/native/components/useShouldForcePipOrientation.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OrientationLockState;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.isStreamParticipant;
    var _closure1_slot7 = var6;
    var3 = var3.ParticipantTypes;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/useShouldForcePipOrientation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62968: for (var _fun62968_ip = 0;;) switch (_fun62968_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var0 = var0.id;
                var0 = var3.bind(var4)(var0);
                var5 = _closure1_slot0;
                var3 = 6;
                var6 = var7[var3];
                var11 = var5.bind(var4)(var6);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot4;
                var9 = new Array(2);
                var9[0] = var8;
                var6 = _closure1_slot5;
                var9[1] = var6;
                var6 = function() { // Environment: var1
                    _fun62969: for (var _fun62969_ip = 0;;) switch (_fun62969_ip) {
                        case 0:
                            var4 = _closure1_slot4;
                            var3 = var4.getParticipant;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var5 = _closure1_slot5;
                            var0 = var5.getId;
                            var0 = var0.bind(var5)();
                            var1 = var3.bind(var4)(var1, var0);
                            var3 = null;
                            var4 = var3 != var1;
                            var0 = null;
                            if (!var4) {
                                _fun62969_ip = 95;
                                continue _fun62969
                            }
                        case 56:
                            var4 = var1.type;
                            var2 = _closure1_slot8;
                            var2 = var2.USER;
                            var0 = null;
                            if (!(var4 === var2)) {
                                _fun62969_ip = 95;
                                continue _fun62969
                            }
                        case 77:
                            var2 = var1.streamId;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun62969_ip = 95;
                                continue _fun62969
                            }
                        case 92:
                            var0 = var1;
                        case 95:
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var9, var6);
                var3 = var7[var3];
                var7 = var5.bind(var4)(var3);
                var5 = var7.useStateFromStoresObject;
                var9 = _closure1_slot3;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var8;
                var1 = function() { // Environment: var1
                    _fun62970: for (var _fun62970_ip = 0;;) switch (_fun62970_ip) {
                        case 0:
                            var1 = _closure1_slot3;
                            var0 = var1.getCurrentEmbeddedActivity;
                            var2 = var0.bind(var1)();
                            var4 = _closure1_slot4;
                            var1 = var4.getSelectedParticipant;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var5 = var1.bind(var4)(var0);
                            var0 = {};
                            var1 = null;
                            var6 = var1 == var2;
                            var9 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun62970_ip = 64;
                                continue _fun62970
                            }
                        case 59:
                            var4 = var2.applicationId;
                        case 64:
                            var6 = var1 != var4;
                            var4 = null;
                            if (!var6) {
                                _fun62970_ip = 149;
                                continue _fun62970
                            }
                        case 73:
                            var6 = var1 == var5;
                            var7 = undefined;
                            if (var6) {
                                _fun62970_ip = 87;
                                continue _fun62970
                            }
                        case 82:
                            var7 = var5.id;
                        case 87:
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var6 = 7;
                            var6 = var10[var6];
                            var9 = var8.bind(var9)(var6);
                            var8 = var9.getEmbeddedActivityParticipantId;
                            var6 = {};
                            var10 = var2.applicationId;
                            var6.applicationId = var10;
                            var10 = var2.compositeInstanceId;
                            var6.instanceId = var10;
                            var6 = var8.bind(var9)(var6);
                            var4 = null;
                            if (!(var7 === var6)) {
                                _fun62970_ip = 149;
                                continue _fun62970
                            }
                        case 146:
                            var4 = var5;
                        case 149:
                            var0.focusedEmbeddedActivityParticipant = var4;
                            var4 = var1 == var2;
                            var1 = null;
                            if (var4) {
                                _fun62970_ip = 183;
                                continue _fun62970
                            }
                        case 163:
                            var4 = _closure1_slot3;
                            var3 = var4.getPipOrientationLockStateForApp;
                            var2 = var2.applicationId;
                            var1 = var3.bind(var4)(var2);
                        case 183:
                            var0.activityLockOrientation = var1;
                            return var0;
                    }
                };
                var1 = var5.bind(var7)(var3, var1);
                var7 = var1.focusedEmbeddedActivityParticipant;
                var5 = var1.activityLockOrientation;
                var1 = null;
                var8 = var1 != var0;
                var3 = null;
                if (!var8) {
                    _fun62968_ip = 199;
                    continue _fun62968
                }
            case 166:
                var8 = var0.user;
                var9 = var8.id;
                var10 = _closure1_slot5;
                var8 = var10.getId;
                var8 = var8.bind(var10)();
                var3 = null;
                if (!(var9 !== var8)) {
                    _fun62968_ip = 199;
                    continue _fun62968
                }
            case 196:
                var3 = var0;
            case 199:
                var0 = var3;
                if (!(var1 != var7)) {
                    _fun62968_ip = 209;
                    continue _fun62968
                }
            case 206:
                var0 = var7;
            case 209:
                if (!(var1 != var0)) {
                    _fun62968_ip = 295;
                    continue _fun62968
                }
            case 213:
                var7 = _closure1_slot7;
                var7 = var7.bind(var4)(var0);
                if (var7) {
                    _fun62968_ip = 239;
                    continue _fun62968
                }
            case 225:
                var7 = _closure1_slot6;
                var7 = var7.LANDSCAPE;
                if (!(var5 === var7)) {
                    _fun62968_ip = 295;
                    continue _fun62968
                }
            case 239:
                if (!(var1 == var6)) {
                    _fun62968_ip = 295;
                    continue _fun62968
                }
            case 243:
                if (!(var1 != var3)) {
                    _fun62968_ip = 261;
                    continue _fun62968
                }
            case 247:
                var3 = var3.id;
                var0 = var0.id;
                if (!(var3 === var0)) {
                    _fun62968_ip = 295;
                    continue _fun62968
                }
            case 261:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.OrientationType;
                var0 = var0.LANDSCAPE;
                _fun62968_ip = 394;
                continue _fun62968;
            case 295:
                var3 = _closure1_slot6;
                var3 = var3.LANDSCAPE;
                if (!(var5 !== var3)) {
                    _fun62968_ip = 359;
                    continue _fun62968
                }
            case 309:
                var3 = _closure1_slot6;
                var3 = var3.PORTRAIT;
                var1 = null;
                if (!(var5 === var3)) {
                    _fun62968_ip = 357;
                    continue _fun62968
                }
            case 325:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 8;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.OrientationType;
                var1 = var3.PORTRAIT;
            case 357:
                _fun62968_ip = 391;
                continue _fun62968;
            case 359:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.OrientationType;
                var1 = var2.LANDSCAPE;
            case 391:
                var0 = var1;
            case 394:
                return var0;
        }
    };
    var2.useShouldForcePipOrientation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 3948, 1216, 3457, 3523, 7899, 566, 3953, 7817, 2]);