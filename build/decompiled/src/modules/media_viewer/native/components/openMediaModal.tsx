// modules/media_viewer/native/components/openMediaModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun70501: for (var _fun70501_ip = 0;;) switch (_fun70501_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun70501_ip = 371;
                            continue _fun70501
                        }
                    case 15:
                        var6 = var8.originViewOrOriginLayout;
                        var1 = var8.initialIndex;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun70501_ip = 35;
                            continue _fun70501
                        }
                    case 33:
                        var1 = 0;
                    case 35:
                        var _closure4_slot0 = var1;
                        var1 = var8.initialSources;
                        var _closure4_slot1 = var1;
                        var1 = var8.analyticsSource;
                        var _closure4_slot2 = var1;
                        var1 = var8.channelId;
                        var _closure4_slot3 = var1;
                        var7 = {
                            'originViewOrOriginLayout': 0,
                            'initialIndex': 0,
                            'initialSources': 0,
                            'analyticsSource': 0,
                            'channelId': 0
                        };
                        var17 = null;
                        var18 = var7;
                        var1 = silentSetPrototypeOf(var18, var17);
                        var5 = 0;
                        var18 = {};
                        var17 = var8;
                        var16 = var7;
                        var1 = copyDataProperties(var18, var17, var16);
                        var _closure4_slot4 = var1;
                        var _closure4_slot5 = var3;
                        var _closure4_slot6 = var3;
                        var _closure4_slot7 = var3;
                        SaveGenerator(address = 125);
                    case 123:
                        return var3;
                    case 125:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun70501_ip = 368;
                            continue _fun70501
                        }
                    case 134:
                        var2 = global;
                        var9 = var2.Promise;
                        var8 = var9.all;
                        var12 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var11 = 5;
                        var2 = var10[var11];
                        var14 = var12.bind(var3)(var2);
                        var2 = 4;
                        var13 = var10[var2];
                        var2 = var10.paths;
                        var13 = var14.bind(var3)(var13, var2);
                        var2 = new Array(3);
                        var2[0] = var13;
                        var13 = var10[var11];
                        var15 = var12.bind(var3)(var13);
                        var13 = 6;
                        var14 = var10[var13];
                        var13 = var10.paths;
                        var13 = var15.bind(var3)(var14, var13);
                        var2[1] = var13;
                        var11 = var10[var11];
                        var12 = var12.bind(var3)(var11);
                        var11 = 7;
                        var11 = var10[var11];
                        var10 = var10.paths;
                        var10 = var12.bind(var3)(var11, var10);
                        var2[2] = var10;
                        var2 = var8.bind(var9)(var2);
                        SaveGenerator(address = 268);
                    case 266:
                        return var2;
                    case 268:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun70501_ip = 365;
                            continue _fun70501
                        }
                    case 274:
                        var8 = _closure1_slot3;
                        var7 = 3;
                        var7 = var8.bind(var3)(var2, var7);
                        var5 = var7[var5];
                        var5 = var5.setMediaViewerSources;
                        _closure4_slot5 = var5;
                        var5 = 1;
                        var5 = var7[var5];
                        var5 = var5.MediaViewerAnalytics;
                        _closure4_slot6 = var5;
                        var5 = 2;
                        var5 = var7[var5];
                        var5 = var5.initVideoStateStore;
                        _closure4_slot7 = var5;
                        var5 = function arg0() {
                            _fun70502: for (var _fun70502_ip = 0;;) switch (_fun70502_ip) {
                                case 0:
                                    var3 = arg0;
                                    var _closure5_slot0 = var3;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun70502_ip = 26;
                                        continue _fun70502
                                    }
                                case 15:
                                    var1 = 'measureInWindow';
                                    var1 = var1 in var3;
                                    if (var1) {
                                        _fun70502_ip = 35;
                                        continue _fun70502
                                    }
                                case 26:
                                    var0 = function(arg0) { // Environment: var0
                                        _fun70503: for (var _fun70503_ip = 0;;) switch (_fun70503_ip) {
                                            case 0:
                                                var2 = _closure5_slot0;
                                                var0 = null;
                                                if (!(var0 == var2)) {
                                                    _fun70503_ip = 97;
                                                    continue _fun70503
                                                }
                                            case 13:
                                                var0 = {
                                                    'x': 0,
                                                    'y': 0
                                                };
                                                var4 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var2 = 3;
                                                var6 = var5[var2];
                                                var3 = undefined;
                                                var7 = var4.bind(var3)(var6);
                                                var6 = var7.getWindowDimensions;
                                                var6 = var6.bind(var7)();
                                                var6 = var6.width;
                                                var0.width = var6;
                                                var2 = var5[var2];
                                                var3 = var4.bind(var3)(var2);
                                                var2 = var3.getWindowDimensions;
                                                var2 = var2.bind(var3)();
                                                var2 = var2.height;
                                                var0.height = var2;
                                                _fun70503_ip = 101;
                                                continue _fun70503;
                                            case 97:
                                                var0 = _closure5_slot0;
                                            case 101:
                                                var12 = var0.x;
                                                var11 = var0.y;
                                                var10 = var0.width;
                                                var9 = var0.height;
                                                var8 = var0.resizeMode;
                                                var1 = arg0;
                                                var0 = undefined;
                                                var13 = undefined;
                                                var1 = var13[var1](var12, var11, var10, var9, var8, var7);
                                                return var0;
                                        }
                                    };
                                    _fun70502_ip = 51;
                                    continue _fun70502;
                                case 35:
                                    var2 = var3.measureInWindow;
                                    var1 = var2.bind;
                                    var0 = var1.bind(var2)(var3);
                                case 51:
                                    return var0;
                            }
                        };
                        var5 = var5.bind(var3)(var6);
                        var4 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var4
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var3 = var1[var0];
                            var0 = undefined;
                            var8 = var4.bind(var0)(var3);
                            var7 = var8.pushLazy;
                            var4 = _closure1_slot0;
                            var3 = 5;
                            var3 = var1[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 9;
                            var3 = var1[var3];
                            var1 = var1.paths;
                            var6 = var4.bind(var0)(var3, var1);
                            var5 = {};
                            var12 = _closure4_slot4;
                            var13 = var5;
                            var3 = copyDataProperties(var13, var12);
                            var4 = _closure4_slot0;
                            var3 = 'initialIndex';
                            var5[var3] = var4;
                            var9 = {};
                            var3 = arg0;
                            var9.x = var3;
                            var3 = arg1;
                            var9.y = var3;
                            var3 = arg2;
                            var9.width = var3;
                            var3 = arg3;
                            var9.height = var3;
                            var3 = arg4;
                            var9.resizeMode = var3;
                            var3 = 'originLayout';
                            var5[var3] = var9;
                            var11 = _closure1_slot5;
                            var2 = {};
                            var9 = 'none';
                            var2.animation = var9;
                            var14 = var8;
                            var13 = var6;
                            var12 = var5;
                            var10 = var2;
                            var2 = var14[var7](var13, var12, var11, var10, var9);
                            var3 = _closure4_slot5;
                            var2 = {};
                            var5 = _closure4_slot1;
                            var2.sources = var5;
                            var2.initialIndex = var4;
                            var2 = var3.bind(var0)(var2);
                            var4 = _closure4_slot6;
                            var3 = var4.markSessionStarted;
                            var2 = {};
                            var6 = _closure4_slot3;
                            var2.channelId = var6;
                            var5 = var5.length;
                            var2.numMediaItems = var5;
                            var5 = _closure4_slot2;
                            var2.source = var5;
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure4_slot7;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var4 = var5.bind(var3)(var4);
                        var4 = !var4;
                        return var3;
                    case 365:
                        return var2;
                    case 368:
                        return var1;
                    case 371:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.MEDIA_MODAL_KEY;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/openMediaModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.openMediaModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 660, 1464, 8876, 1307, 8878, 8882, 4561, 8888, 2]);