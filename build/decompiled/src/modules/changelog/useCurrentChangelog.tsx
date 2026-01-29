// modules/changelog/useCurrentChangelog.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0, arg1) { // Original name: useChangelog, environment: var1
        _fun55798: for (var _fun55798_ip = 0;;) switch (_fun55798_ip) {
            case 0:
                var2 = arg0;
                var10 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var10;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var1;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var10;
                var1 = function() { // Environment: var0
                    _fun55799: for (var _fun55799_ip = 0;;) switch (_fun55799_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var5 = null;
                            var0 = var5 != var0;
                            var3 = null;
                            if (!var0) {
                                _fun55799_ip = 45;
                                continue _fun55799
                            }
                        case 18:
                            var6 = _closure1_slot5;
                            var2 = var6.getChangelog;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var3 = var2.bind(var6)(var1, var0);
                        case 45:
                            var0 = _closure2_slot0;
                            var0 = var5 != var0;
                            var2 = null;
                            if (!var0) {
                                _fun55799_ip = 85;
                                continue _fun55799
                            }
                        case 58:
                            var7 = _closure1_slot5;
                            var6 = var7.getChangelog;
                            var1 = _closure2_slot0;
                            var0 = 'en-US';
                            var2 = var6.bind(var7)(var1, var0);
                        case 85:
                            var0 = _closure2_slot0;
                            var1 = var5 != var0;
                            if (!var1) {
                                _fun55799_ip = 123;
                                continue _fun55799
                            }
                        case 96:
                            var8 = _closure1_slot5;
                            var7 = var8.getChangelogLoadStatus;
                            var6 = _closure2_slot0;
                            var0 = 'en-US';
                            var1 = var7.bind(var8)(var6, var0);
                        case 123:
                            var0 = {};
                            var0.changelog = var3;
                            var3 = _closure2_slot0;
                            var3 = var5 != var3;
                            if (!var3) {
                                _fun55799_ip = 168;
                                continue _fun55799
                            }
                        case 141:
                            var7 = _closure1_slot5;
                            var6 = var7.getChangelogLoadStatus;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot1;
                            var3 = var6.bind(var7)(var5, var4);
                        case 168:
                            var0.loadState = var3;
                            var0.defaultChangelog = var2;
                            var0.defaultLoadState = var1;
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var5, var1, var4);
                var1 = var4.changelog;
                var _closure2_slot2 = var1;
                var6 = var4.loadState;
                var _closure2_slot3 = var6;
                var5 = var4.defaultChangelog;
                var4 = var4.defaultLoadState;
                var9 = _closure1_slot3;
                var8 = var9.useEffect;
                var7 = new Array(4);
                var7[0] = var2;
                var7[1] = var1;
                var7[2] = var6;
                var7[3] = var10;
                var0 = function() { // Environment: var0
                    _fun55800: for (var _fun55800_ip = 0;;) switch (_fun55800_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun55800_ip = 24;
                                continue _fun55800
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 == var2;
                        case 24:
                            if (!var1) {
                                _fun55800_ip = 48;
                                continue _fun55800
                            }
                        case 27:
                            var3 = _closure2_slot3;
                            var2 = _closure1_slot6;
                            var2 = var2.NOT_LOADED;
                            var1 = var3 === var2;
                        case 48:
                            if (!var1) {
                                _fun55800_ip = 96;
                                continue _fun55800
                            }
                        case 51:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchChangelog;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 96:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var8.bind(var9)(var0, var7);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun55798_ip = 246;
                    continue _fun55798
                }
            case 161:
                if (!(var0 == var1)) {
                    _fun55798_ip = 179;
                    continue _fun55798
                }
            case 165:
                var0 = _closure1_slot6;
                var0 = var0.LOADED_FAILURE;
                if (!(var6 !== var0)) {
                    _fun55798_ip = 211;
                    continue _fun55798
                }
            case 179:
                var0 = {};
                var0.id = var2;
                var0.changelog = var1;
                var1 = _closure1_slot6;
                var1 = var1.NOT_LOADED;
                var1 = var6 !== var1;
                var0.loaded = var1;
                _fun55798_ip = 244;
                continue _fun55798;
            case 211:
                var1 = {};
                var1.id = var2;
                var1.changelog = var5;
                var3 = _closure1_slot6;
                var3 = var3.NOT_LOADED;
                var3 = var4 !== var3;
                var1.loaded = var3;
                var0 = var1;
            case 244:
                _fun55798_ip = 269;
                continue _fun55798;
            case 246:
                var1 = {
                    'id': null,
                    'changelog': null,
                    'loaded': false
                };
                var1.id = var2;
                var0 = var1;
            case 269:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChangelogLoadState;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/useCurrentChangelog.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useChangelog = var3;
    var1 = function() { // Original name: useCurrentChangelog, environment: var1
        _fun55801: for (var _fun55801_ip = 0;;) switch (_fun55801_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 4;
                var4 = var0[var10];
                var9 = undefined;
                var7 = var2.bind(var9)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var3
                    var0 = _closure1_slot4;
                    var0 = var0.locale;
                    return var0;
                };
                var7 = var6.bind(var7)(var5, var4);
                var4 = var0[var10];
                var8 = var2.bind(var9)(var4);
                var6 = var8.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var3
                    var1 = _closure1_slot5;
                    var0 = var1.latestChangelogId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var8)(var5, var4);
                var0 = var0[var10];
                var5 = var2.bind(var9)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var3
                    var1 = _closure1_slot5;
                    var0 = var1.getConfig;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var4.bind(var5)(var2, var0);
                var0 = null;
                var5 = var0 != var11;
                if (!var5) {
                    _fun55801_ip = 167;
                    continue _fun55801
                }
            case 138:
                var2 = global;
                var4 = var2.Object;
                var2 = var4.keys;
                var2 = var2.bind(var4)(var11);
                var4 = var2.length;
                var2 = 0;
                var5 = var2 === var4;
            case 167:
                var2 = var0 != var11;
                if (!var2) {
                    _fun55801_ip = 203;
                    continue _fun55801
                }
            case 174:
                var4 = global;
                var8 = var4.Object;
                var4 = var8.keys;
                var4 = var4.bind(var8)(var11);
                var8 = var4.length;
                var4 = 0;
                var2 = var8 > var4;
            case 203:
                if (!var2) {
                    _fun55801_ip = 210;
                    continue _fun55801
                }
            case 206:
                var2 = var0 == var6;
            case 210:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var10];
                var10 = var8.bind(var9)(var4);
                var8 = var10.useStateFromStores;
                var11 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var11;
                var3 = function() { // Environment: var3
                    var1 = _closure1_slot5;
                    var0 = var1.overrideId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var10)(var4, var3);
                var1 = _closure1_slot7;
                var4 = var1.bind(var9)(var6, var7);
                var3 = var4.changelog;
                var4 = var4.loaded;
                var1 = var1.bind(var9)(var8, var7);
                var7 = var1.changelog;
                var1 = var1.loaded;
                if (!(var0 != var8)) {
                    _fun55801_ip = 331;
                    continue _fun55801
                }
            case 299:
                if (!(var0 == var7)) {
                    _fun55801_ip = 306;
                    continue _fun55801
                }
            case 303:
                if (var1) {
                    _fun55801_ip = 331;
                    continue _fun55801
                }
            case 306:
                var0 = {};
                var0.id = var8;
                var0.changelog = var7;
                var0.loaded = var1;
                var1 = false;
                var0.clientTooOld = var1;
                _fun55801_ip = 367;
                continue _fun55801;
            case 331:
                var1 = {};
                var1.id = var6;
                var1.changelog = var3;
                var3 = !var5;
                var3 = !var3;
                if (var5) {
                    _fun55801_ip = 354;
                    continue _fun55801
                }
            case 351:
                var3 = var4;
            case 354:
                var1.loaded = var3;
                var1.clientTooOld = var2;
                var0 = var1;
            case 367:
                return var0;
        }
    };
    var2.useCurrentChangelog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1676, 3900, 1660, 632, 6734, 2]);