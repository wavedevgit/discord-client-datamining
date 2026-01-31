// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34959: for (var _fun34959_ip = 0;;) switch (_fun34959_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var5;
            var _closure1_slot2 = var6;
            var0 = global;
            var7 = var0.Object;
            var3 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var7)(var2, var0, var1);
            var0 = {};
            var1 = 'function measureFabric_Pnpm_measureTs1(animatedRef){const{logger}=this.__closure;if(!_WORKLET){return null;}const viewTag=animatedRef();if(viewTag===-1){logger.warn("The view with tag "+viewTag+" is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");return null;}const measured=global._measureFabric(viewTag);if(measured===null){logger.warn("The view has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");return null;}else if(measured.x===-1234567){logger.warn("The view returned an invalid measurement response. Please make sure the view is currently rendered.");return null;}else if(isNaN(measured.x)){logger.warn("The view gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.");return null;}else{return measured;}}';
            var0.code = var1;
            var _closure1_slot3 = var0;
            var1 = function() { // Environment: var4
                var0 = function(arg0) { // Original name: measureFabric, environment: var0
                    _fun34961: for (var _fun34961_ip = 0;;) switch (_fun34961_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0._WORKLET;
                            if (var1) {
                                _fun34961_ip = 15;
                                continue _fun34961
                            }
                        case 11:
                            var1 = null;
                            return var1;
                        case 15:
                            var1 = arg0;
                            var3 = undefined;
                            var5 = var1.bind(var3)();
                            var1 = -1;
                            if (!(var1 !== var5)) {
                                _fun34961_ip = 235;
                                continue _fun34961
                            }
                        case 37:
                            var2 = _closure1_slot0;
                            var1 = var2._measureFabric;
                            var1 = var1.bind(var2)(var5);
                            var2 = null;
                            if (!(var2 !== var1)) {
                                _fun34961_ip = 190;
                                continue _fun34961
                            }
                        case 66:
                            var7 = var1.x;
                            var6 = -1234567;
                            if (!(var6 !== var7)) {
                                _fun34961_ip = 145;
                                continue _fun34961
                            }
                        case 81:
                            var7 = var0.isNaN;
                            var6 = var1.x;
                            var6 = var7.bind(var3)(var6);
                            if (!var6) {
                                _fun34961_ip = 143;
                                continue _fun34961
                            }
                        case 100:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 0;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var8 = var6.logger;
                            var7 = var8.warn;
                            var6 = 'The view gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.';
                            var6 = var7.bind(var8)(var6);
                            var1 = null;
                        case 143:
                            _fun34961_ip = 188;
                            continue _fun34961;
                        case 145:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 0;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var8 = var6.logger;
                            var7 = var8.warn;
                            var6 = 'The view returned an invalid measurement response. Please make sure the view is currently rendered.';
                            var6 = var7.bind(var8)(var6);
                            var1 = null;
                        case 188:
                            _fun34961_ip = 233;
                            continue _fun34961;
                        case 190:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 0;
                            var4 = var7[var4];
                            var4 = var6.bind(var3)(var4);
                            var7 = var4.logger;
                            var6 = var7.warn;
                            var4 = 'The view has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).';
                            var4 = var6.bind(var7)(var4);
                            var1 = null;
                        case 233:
                            return var1;
                        case 235:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 0;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.logger;
                            var1 = var2.warn;
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var3 = 'The view with tag ';
                            var0 = ' is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).';
                            var0 = var4.bind(var3)(var5, var0);
                            var0 = var1.bind(var2)(var0);
                            var0 = null;
                            return var0;
                    }
                };
                var2 = {};
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.logger;
                var2.logger = var3;
                var0.__closure = var2;
                var2 = 11588690892656.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot3;
                var0.__initData = var1;
                return var0;
            };
            var0 = undefined;
            var7 = var1.bind(var0)();
            var1 = {};
            var3 = 'function measurePaper_Pnpm_measureTs2(animatedRef){const{logger}=this.__closure;if(!_WORKLET){return null;}const viewTag=animatedRef();if(viewTag===-1){logger.warn("The view with tag "+viewTag+" is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");return null;}const measured=global._measurePaper(viewTag);if(measured===null){logger.warn("The view with tag "+viewTag+" has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).");return null;}else if(measured.x===-1234567){logger.warn("The view with tag "+viewTag+" returned an invalid measurement response. Please make sure the view is currently rendered.");return null;}else if(isNaN(measured.x)){logger.warn("The view with tag "+viewTag+" gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.");return null;}else{return measured;}}';
            var1.code = var3;
            var _closure1_slot4 = var1;
            var1 = function() { // Environment: var4
                var0 = function(arg0) { // Original name: measurePaper, environment: var0
                    _fun34963: for (var _fun34963_ip = 0;;) switch (_fun34963_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0._WORKLET;
                            if (var1) {
                                _fun34963_ip = 15;
                                continue _fun34963
                            }
                        case 11:
                            var1 = null;
                            return var1;
                        case 15:
                            var1 = arg0;
                            var3 = undefined;
                            var5 = var1.bind(var3)();
                            var1 = -1;
                            if (!(var1 !== var5)) {
                                _fun34963_ip = 304;
                                continue _fun34963
                            }
                        case 37:
                            var2 = _closure1_slot0;
                            var1 = var2._measurePaper;
                            var1 = var1.bind(var2)(var5);
                            var2 = null;
                            if (!(var2 !== var1)) {
                                _fun34963_ip = 236;
                                continue _fun34963
                            }
                        case 66:
                            var7 = var1.x;
                            var6 = -1234567;
                            if (!(var6 !== var7)) {
                                _fun34963_ip = 168;
                                continue _fun34963
                            }
                        case 81:
                            var7 = var0.isNaN;
                            var6 = var1.x;
                            var6 = var7.bind(var3)(var6);
                            if (!var6) {
                                _fun34963_ip = 166;
                                continue _fun34963
                            }
                        case 100:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 0;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var8 = var6.logger;
                            var7 = var8.warn;
                            var6 = var0.HermesInternal;
                            var10 = var6.concat;
                            var9 = 'The view with tag ';
                            var6 = ' gets view-flattened on Android. To disable view-flattening, set `collapsable={false}` on this component.';
                            var6 = var10.bind(var9)(var5, var6);
                            var6 = var7.bind(var8)(var6);
                            var1 = null;
                        case 166:
                            _fun34963_ip = 234;
                            continue _fun34963;
                        case 168:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 0;
                            var6 = var8[var6];
                            var6 = var7.bind(var3)(var6);
                            var8 = var6.logger;
                            var7 = var8.warn;
                            var6 = var0.HermesInternal;
                            var10 = var6.concat;
                            var9 = 'The view with tag ';
                            var6 = ' returned an invalid measurement response. Please make sure the view is currently rendered.';
                            var6 = var10.bind(var9)(var5, var6);
                            var6 = var7.bind(var8)(var6);
                            var1 = null;
                        case 234:
                            _fun34963_ip = 302;
                            continue _fun34963;
                        case 236:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 0;
                            var4 = var7[var4];
                            var4 = var6.bind(var3)(var4);
                            var7 = var4.logger;
                            var6 = var7.warn;
                            var4 = var0.HermesInternal;
                            var9 = var4.concat;
                            var8 = 'The view with tag ';
                            var4 = ' has some undefined, not-yet-computed or meaningless value of `LayoutMetrics` type. This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).';
                            var4 = var9.bind(var8)(var5, var4);
                            var4 = var6.bind(var7)(var4);
                            var1 = null;
                        case 302:
                            return var1;
                        case 304:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 0;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.logger;
                            var1 = var2.warn;
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var3 = 'The view with tag ';
                            var0 = ' is not a valid argument for measure(). This may be because the view is not currently rendered, which may not be a bug (e.g. an off-screen FlatList item).';
                            var0 = var4.bind(var3)(var5, var0);
                            var0 = var1.bind(var2)(var0);
                            var0 = null;
                            return var0;
                    }
                };
                var2 = {};
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.logger;
                var2.logger = var3;
                var0.__closure = var2;
                var2 = 12497864483036.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot4;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var3 = 1;
            var8 = var6[var3];
            var9 = var5.bind(var0)(var8);
            var8 = var9.shouldBeUseWeb;
            var9 = var8.bind(var9)();
            var8 = var6[var3];
            var8 = var5.bind(var0)(var8);
            if (var9) {
                _fun34959_ip = 162;
                continue _fun34959
            }
        case 144:
            var9 = var8.isFabric;
            var9 = var9.bind(var8)();
            if (!var9) {
                _fun34959_ip = 160;
                continue _fun34959
            }
        case 157:
            var1 = var7;
        case 160:
            _fun34959_ip = 219;
            continue _fun34959;
        case 162:
            var7 = var8.isJest;
            var7 = var7.bind(var8)();
            if (var7) {
                _fun34959_ip = 211;
                continue _fun34959
            }
        case 175:
            var3 = var6[var3];
            var5 = var5.bind(var0)(var3);
            var3 = var5.isChromeDebugger;
            var3 = var3.bind(var5)();
            if (var3) {
                _fun34959_ip = 204;
                continue _fun34959
            }
        case 197:
            var3 = function() { // Original name: measureDefault, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.logger;
                var1 = var2.warn;
                var0 = 'measure() is not supported on this configuration.';
                var0 = var1.bind(var2)(var0);
                var0 = null;
                return var0;
            };
            _fun34959_ip = 209;
            continue _fun34959;
        case 204:
            var3 = function() { // Original name: measureChromeDebugger, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.logger;
                var1 = var2.warn;
                var0 = 'measure() cannot be used with Chrome Debugger.';
                var0 = var1.bind(var2)(var0);
                var0 = null;
                return var0;
            };
        case 209:
            _fun34959_ip = 216;
            continue _fun34959;
        case 211:
            var3 = function() { // Original name: measureJest, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.logger;
                var1 = var2.warn;
                var0 = 'measure() cannot be used with Jest.';
                var0 = var1.bind(var2)(var0);
                var0 = null;
                return var0;
            };
        case 216:
            var1 = var3;
        case 219:
            var2.measure = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3684, 3683]);