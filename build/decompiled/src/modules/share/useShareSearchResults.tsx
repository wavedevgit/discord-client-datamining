// modules/share/useShareSearchResults.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun72529: for (var _fun72529_ip = 0;;) switch (_fun72529_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getQuickSwitcherOptions;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var3 = var0.query;
                var0 = var0.queryMode;
                var1 = _closure1_slot8;
                var2 = null;
                var4 = var2 != var0;
                if (!var4) {
                    _fun72529_ip = 78;
                    continue _fun72529
                }
            case 64:
                var6 = _closure1_slot8;
                var5 = var6.includes;
                var4 = var5.bind(var6)(var0);
            case 78:
                var2 = null;
                if (!var4) {
                    _fun72529_ip = 97;
                    continue _fun72529
                }
            case 83:
                var4 = new Array(1);
                var4[0] = var0;
                var1 = var4;
                var2 = var0;
            case 97:
                var0 = {};
                var0.query = var3;
                var0.queryMode = var2;
                var0.resultTypes = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ALLOWED_TYPES;
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/useShareSearchResults.tsx';
    var4 = var5.bind(var6)(var4);
    var2.makeAutocompleterSearchParams = var3;
    var1 = function arg0() {
        _fun72530: for (var _fun72530_ip = 0;;) switch (_fun72530_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.targetDestination;
                var _closure2_slot0 = var12;
                var10 = var0.selectedDestinations;
                var _closure2_slot1 = var10;
                var8 = var0.originDestination;
                var _closure2_slot2 = var8;
                var7 = var0.includeMissingDMs;
                var16 = undefined;
                if (!(var7 === var16)) {
                    _fun72530_ip = 49;
                    continue _fun72530
                }
            case 47:
                var7 = false;
            case 49:
                var _closure2_slot3 = var7;
                var _closure2_slot4 = var16;
                var _closure2_slot5 = var16;
                var _closure2_slot6 = var16;
                var _closure2_slot7 = var16;
                var _closure2_slot8 = var16;
                var _closure2_slot9 = var16;
                var _closure2_slot10 = var16;
                var _closure2_slot11 = var16;
                var _closure2_slot12 = var16;
                var _closure2_slot13 = var16;
                var _closure2_slot14 = var16;
                var _closure2_slot15 = var16;
                var _closure2_slot16 = var16;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var17 = 7;
                var0 = var5[var17];
                var6 = var1.bind(var16)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var6)(var1, var0);
                _closure2_slot4 = var0;
                var11 = _closure1_slot4;
                var3 = var11.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var0 = {};
                    var1 = {
                        'blacklist': null,
                        'frecencyBoosters': true,
                        'userFilters': null
                    };
                    var2 = global;
                    var4 = var2.Set;
                    var5 = _closure2_slot4;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'user:';
                    var3 = var3.bind(var2)(var5);
                    var2 = new Array(1);
                    var2[0] = var3;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var6 = var2;
                    var2 = new var7[var4](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.blacklist = var2;
                    var0.searchOptions = var1;
                    return var0;
                };
                var1 = var3.bind(var11)(var0, var1);
                var3 = _closure1_slot1;
                var0 = 8;
                var0 = var5[var0];
                var0 = var3.bind(var16)(var0);
                var0 = var0.bind(var16)(var1);
                var18 = var0.search;
                _closure2_slot5 = var18;
                var3 = var0.query;
                _closure2_slot6 = var3;
                var15 = var0.results;
                _closure2_slot7 = var15;
                var5 = var11.useState;
                var1 = _closure1_slot9;
                var0 = '';
                var1 = var1.bind(var16)(var0);
                var6 = var5.bind(var11)(var1);
                var5 = _closure1_slot3;
                var1 = 2;
                var5 = var5.bind(var16)(var6, var1);
                var1 = 0;
                var6 = var5[var1];
                _closure2_slot8 = var6;
                var1 = 1;
                var1 = var5[var1];
                _closure2_slot9 = var1;
                var9 = var11.useCallback;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot9;
                    var3 = _closure1_slot9;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = var9.bind(var11)(var1, var5);
                var13 = var6.queryMode;
                _closure2_slot10 = var13;
                var9 = var11.useRef;
                var5 = null;
                var9 = var9.bind(var11)(var5);
                _closure2_slot11 = var9;
                var5 = var11.useRef;
                var5 = var5.bind(var11)(var10);
                _closure2_slot12 = var5;
                var11 = var9.current;
                var9 = var10;
                if (!(var3 === var11)) {
                    _fun72530_ip = 383;
                    continue _fun72530
                }
            case 378:
                var9 = var5.current;
            case 383:
                _closure2_slot13 = var9;
                var5 = _closure1_slot4;
                var19 = var5.useEffect;
                var14 = new Array(2);
                var14[0] = var3;
                var14[1] = var10;
                var11 = function() { // Environment: var2
                    _fun72534: for (var _fun72534_ip = 0;;) switch (_fun72534_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot11;
                            var1 = var1.current;
                            if (!(var2 !== var1)) {
                                _fun72534_ip = 34;
                                continue _fun72534
                            }
                        case 20:
                            var2 = _closure2_slot12;
                            var1 = _closure2_slot1;
                            var2.current = var1;
                        case 34:
                            var1 = _closure2_slot11;
                            var0 = _closure2_slot6;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var19.bind(var5)(var11, var14);
                var14 = var5.useLayoutEffect;
                var11 = new Array(2);
                var11[0] = var18;
                var11[1] = var6;
                var6 = function() { // Environment: var2
                    var0 = _closure2_slot8;
                    var3 = var0.query;
                    var0 = _closure2_slot8;
                    var0 = var0.resultTypes;
                    var2 = _closure2_slot5;
                    var1 = {};
                    var1.query = var3;
                    var1.resultTypes = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var14.bind(var5)(var6, var11);
                var14 = _closure1_slot0;
                var6 = _closure1_slot2;
                var11 = 9;
                var11 = var6[var11];
                var18 = var14.bind(var16)(var11);
                var11 = var18.useFrecencySettings;
                var11 = var11.bind(var18)();
                var11 = var6[var17];
                var20 = var14.bind(var16)(var11);
                var19 = var20.useStateFromStores;
                var11 = _closure1_slot7;
                var18 = new Array(1);
                var18[0] = var11;
                var11 = function() { // Environment: var2
                    var1 = _closure1_slot7;
                    var0 = var1.getFrequentlyWithoutFetchingLatest;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var19.bind(var20)(var18, var11);
                _closure2_slot14 = var11;
                var6 = var6[var17];
                var16 = var14.bind(var16)(var6);
                var14 = var16.useStateFromStores;
                var4 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var2
                    var1 = _closure1_slot5;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var14.bind(var16)(var6, var4);
                _closure2_slot15 = var6;
                var14 = var0 !== var3;
                _closure2_slot16 = var14;
                var0 = {};
                var4 = var5.useMemo;
                var3 = new Array(10);
                var3[0] = var15;
                var3[1] = var14;
                var3[2] = var13;
                var3[3] = var12;
                var3[4] = var11;
                var3[5] = var10;
                var3[6] = var9;
                var3[7] = var8;
                var3[8] = var7;
                var3[9] = var6;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot7;
                    var0.results = var4;
                    var4 = _closure2_slot16;
                    var0.hasQuery = var4;
                    var4 = _closure2_slot10;
                    var0.queryMode = var4;
                    var4 = _closure2_slot0;
                    var0.targetDestination = var4;
                    var4 = _closure2_slot14;
                    var0.frequentChannels = var4;
                    var4 = _closure2_slot1;
                    var0.selectedDestinations = var4;
                    var4 = _closure2_slot13;
                    var0.pinnedDestinations = var4;
                    var4 = _closure2_slot2;
                    var0.originDestination = var4;
                    var4 = _closure2_slot3;
                    var0.includeMissingDMs = var4;
                    var3 = _closure2_slot15;
                    var0.isConnected = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var3);
                var0.results = var2;
                var0.updateSearchText = var1;
                return var0;
        }
    };
    var2.useShareSearchResults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3465, 1216, 5593, 6630, 9068, 566, 9071, 9072, 6618, 2]);