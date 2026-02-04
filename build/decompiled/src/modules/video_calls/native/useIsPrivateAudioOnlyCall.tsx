// modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun62848: for (var _fun62848_ip = 0;;) switch (_fun62848_ip) {
            case 0:
                var4 = arg0;
                var1 = var4[Symbol.iterator];
                var4 = var1().next;
                var11 = undefined;
                var2 = undefined;
                var3 = undefined;
                var5 = var4().value;
                var8 = var1;
                var8 = var8 === var11;
                var2 = var8;
                if (var8) {
                    _fun62848_ip = 32;
                    continue _fun62848
                }
            case 29:
                var3 = var5;
            case 32:
                var3 = undefined;
                var5 = var2;
                if (var5) {
                    _fun62848_ip = 60;
                    continue _fun62848
                }
            case 40:
                var4 = var4().value;
                var5 = var1;
                var5 = var5 === var11;
                var2 = var5;
                if (var5) {
                    _fun62848_ip = 60;
                    continue _fun62848
                }
            case 57:
                var3 = var4;
            case 60:
                var7 = var3;
                var3 = var2;
                if (var3) {
                    _fun62848_ip = 72;
                    continue _fun62848
                }
            case 69:
                var1.return();
            case 72:
                var9 = arg1;
                var4 = var9[Symbol.iterator];
                var9 = var4().next;
                var5 = undefined;
                var8 = undefined;
                var10 = var9().value;
                var12 = var4;
                var12 = var12 === var11;
                var5 = var12;
                if (var12) {
                    _fun62848_ip = 102;
                    continue _fun62848
                }
            case 99:
                var8 = var10;
            case 102:
                var8 = undefined;
                var10 = var5;
                if (var10) {
                    _fun62848_ip = 130;
                    continue _fun62848
                }
            case 110:
                var9 = var9().value;
                var10 = var4;
                var10 = var10 === var11;
                var5 = var10;
                if (var10) {
                    _fun62848_ip = 130;
                    continue _fun62848
                }
            case 127:
                var8 = var9;
            case 130:
                var6 = var8;
                var8 = var5;
                if (var8) {
                    _fun62848_ip = 142;
                    continue _fun62848
                }
            case 139:
                var4.return();
            case 142:
                var6 = var7 === var6;
                return var6;
            case 148:
                CatchBlockStart(arg_register = 3);
                if (var5) {
                    _fun62848_ip = 156;
                    continue _fun62848
                }
            case 153:
                var4.return();
            case 156:
                throw var3;
            case 158:
                CatchBlockStart(arg_register = 0);
                if (var2) {
                    _fun62848_ip = 166;
                    continue _fun62848
                }
            case 163:
                var1.return();
            case 166:
                throw var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isActivityParticipant;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/useIsPrivateAudioOnlyCall.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62849: for (var _fun62849_ip = 0;;) switch (_fun62849_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 7;
                var2 = var2[var7];
                var4 = undefined;
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var2;
                var5 = new Array(1);
                var5[0] = var6;
                var11 = _closure1_slot9;
                var13 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = var3.getSelectedParticipant;
                    var1 = _closure2_slot0;
                    var0 = var1.id;
                    var2 = var2.bind(var3)(var0);
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = var3.getParticipantsVersion;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0[1] = var1;
                    return var0;
                };
                var15 = var10;
                var14 = var8;
                var12 = var5;
                var5 = var15[var9](var14, var13, var12, var11, var10);
                var3 = _closure1_slot2;
                var2 = 1;
                var2 = var3.bind(var4)(var5, var2);
                var5 = 0;
                var3 = var2[var5];
                var9 = _closure1_slot3;
                var8 = var9.getEmbeddedActivitiesForChannel;
                var2 = var6.id;
                var2 = var8.bind(var9)(var2);
                var2 = var2.length;
                var5 = var2 > var5;
                if (var5) {
                    _fun62849_ip = 141;
                    continue _fun62849
                }
            case 132:
                var2 = _closure1_slot8;
                var5 = var2.bind(var4)(var3);
            case 141:
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStores;
                var7 = _closure1_slot7;
                var2 = new Array(3);
                var2[0] = var7;
                var7 = _closure1_slot6;
                var2[1] = var7;
                var1 = _closure1_slot5;
                var2[2] = var1;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun62851: for (var _fun62851_ip = 0;;) switch (_fun62851_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isPrivate;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun62851_ip = 50;
                                continue _fun62851
                            }
                        case 20:
                            var4 = _closure1_slot7;
                            var3 = var4.hasVideo;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var0 = !var2;
                        case 50:
                            if (!var0) {
                                _fun62851_ip = 60;
                                continue _fun62851
                            }
                        case 53:
                            var2 = _closure2_slot1;
                            var0 = !var2;
                        case 60:
                            if (!var0) {
                                _fun62851_ip = 101;
                                continue _fun62851
                            }
                        case 63:
                            var4 = _closure1_slot5;
                            var3 = var4.getAllApplicationStreamsForChannel;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.length;
                            var2 = 0;
                            var0 = var2 === var3;
                        case 101:
                            if (!var0) {
                                _fun62851_ip = 142;
                                continue _fun62851
                            }
                        case 104:
                            var3 = _closure1_slot5;
                            var2 = var3.getAllActiveStreamsForChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var1 === var2;
                        case 142:
                            if (!var0) {
                                _fun62851_ip = 165;
                                continue _fun62851
                            }
                        case 145:
                            var2 = _closure1_slot6;
                            var1 = var2.isVideoEnabled;
                            var1 = var1.bind(var2)();
                            var0 = !var1;
                        case 165:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1371, 3948, 3714, 3476, 3521, 3523, 566, 2]);