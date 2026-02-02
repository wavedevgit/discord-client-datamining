// modules/gateway/GatewaySocketSingleton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94458: for (var _fun94458_ip = 0;;) switch (_fun94458_ip) {
        case 0:
            var6 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var9;
            var0 = metroImportAll;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var7;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var0 = 0;
            var1 = var7[var0];
            var0 = undefined;
            var1 = var9.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var7[var1];
            var4 = var9.bind(var0)(var1);
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var15 = 'ConnectionStore';
            var16 = var3;
            var1 = new var16[var4](var15, var14);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var7[var1];
            var1 = var9.bind(var0)(var1);
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var16 = var3;
            var1 = new var16[var1](var15);
            var4 = var1 instanceof Object ? var1 : var3;
            var _closure1_slot5 = var4;
            var1 = 3;
            var1 = var7[var1];
            var1 = var9.bind(var0)(var1);
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var16 = var3;
            var15 = var4;
            var1 = new var16[var1](var15, var14);
            var3 = var1 instanceof Object ? var1 : var3;
            var _closure1_slot6 = var3;
            var1 = 4;
            var1 = var7[var1];
            var1 = var9.bind(var0)(var1);
            var8 = var1.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var1
                }
            });
            var16 = var8;
            var15 = var4;
            var1 = new var16[var1](var15, var14);
            var1 = var1 instanceof Object ? var1 : var8;
            var8 = function() { // Environment: var5
                _fun94459: for (var _fun94459_ip = 0;;) switch (_fun94459_ip) {
                    case 0:
                        var1 = _closure1_slot3;
                        var0 = var1.getToken;
                        var3 = var0.bind(var1)();
                        var6 = _closure1_slot4;
                        var5 = var6.verbose;
                        var4 = {};
                        var0 = null;
                        var1 = var0 != var3;
                        var4.hasToken = var1;
                        var1 = 'handleIdentify called';
                        var1 = var5.bind(var6)(var1, var4);
                        if (!(var0 != var3)) {
                            _fun94459_ip = 254;
                            continue _fun94459
                        }
                    case 61:
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 5;
                        var1 = var8[var1];
                        var7 = undefined;
                        var4 = var9.bind(var7)(var1);
                        var1 = var4.getState;
                        var5 = var1.bind(var4)();
                        var4 = _closure1_slot3;
                        var1 = var4.getInstallationForTracking;
                        var6 = var1.bind(var4)();
                        var1 = {};
                        var1.token = var3;
                        var3 = {};
                        var4 = 6;
                        var4 = var8[var4];
                        var9 = var9.bind(var7)(var4);
                        var4 = var9.getSuperProperties;
                        var10 = var4.bind(var9)();
                        var11 = var3;
                        var4 = copyDataProperties(var11, var10);
                        var4 = 'client_app_state';
                        var3[var4] = var5;
                        var5 = false;
                        var4 = 'is_fast_connect';
                        var3[var4] = var5;
                        var5 = _closure1_slot1;
                        var4 = 7;
                        var4 = var8[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.describeConnectionReasons;
                        var5 = var4.bind(var5)();
                        var4 = 'gateway_connect_reasons';
                        var3[var4] = var5;
                        if (!(var0 == var6)) {
                            _fun94459_ip = 208;
                            continue _fun94459
                        }
                    case 204:
                        var4 = {};
                        _fun94459_ip = 218;
                        continue _fun94459;
                    case 208:
                        var5 = {};
                        var5.installation_id = var6;
                        var4 = var5;
                    case 218:
                        var11 = var3;
                        var10 = var4;
                        var4 = copyDataProperties(var11, var10);
                        var1.properties = var3;
                        var3 = _closure1_slot6;
                        var2 = var3.getInitialState;
                        var2 = var2.bind(var3)();
                        var1.presence = var2;
                        return var1;
                    case 254:
                        return var0;
                }
            };
            var4.handleIdentify = var8;
            var8 = 8;
            var8 = var7[var8];
            var10 = var6.bind(var0)(var8);
            var8 = var10.isDesktop;
            var8 = var8.bind(var10)();
            if (!var8) {
                _fun94458_ip = 309;
                continue _fun94458
            }
        case 268:
            var8 = 9;
            var8 = var7[var8];
            var8 = var9.bind(var0)(var8);
            var12 = var8.remotePowerMonitor;
            var11 = var12.on;
            var10 = 'resume';
            var8 = function() { // Environment: var5
                var3 = _closure1_slot5;
                var2 = var3.expeditedHeartbeat;
                var1 = 5000;
                var0 = 'power monitor resumed';
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var8 = var11.bind(var12)(var10, var8);
        case 309:
            var8 = 10;
            var10 = var7[var8];
            var12 = var9.bind(var0)(var10);
            var11 = var12.addOfflineCallback;
            var10 = function() { // Environment: var5
                var4 = _closure1_slot5;
                var3 = var4.networkStateChange;
                var2 = 15000;
                var1 = 'network detected offline.';
                var0 = false;
                var0 = var3.bind(var4)(var2, var1, var0);
                var0 = undefined;
                return var0;
            };
            var10 = var11.bind(var12)(var10);
            var8 = var7[var8];
            var10 = var9.bind(var0)(var8);
            var9 = var10.addOnlineCallback;
            var8 = function() { // Environment: var5
                var3 = _closure1_slot5;
                var2 = var3.networkStateChange;
                var1 = 5000;
                var0 = 'network detected online.';
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var8 = var9.bind(var10)(var8);
            var10 = var4.on;
            var9 = 'disconnect';
            var8 = function(arg0) { // Environment: var5
                var0 = arg0;
                var5 = var0.code;
                var4 = var0.reason;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'CONNECTION_CLOSED';
                var1.type = var6;
                var1.code = var5;
                var1.reason = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var8 = var10.bind(var4)(var9, var8);
            var9 = var4.on;
            var8 = 'close';
            var5 = function(arg0) { // Environment: var5
                var0 = arg0;
                var5 = var0.code;
                var4 = var0.reason;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'CONNECTION_INTERRUPTED';
                var1.type = var6;
                var1.code = var5;
                var1.reason = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var5 = var9.bind(var4)(var8, var5);
            var5 = 12;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/gateway/GatewaySocketSingleton.tsx';
            var5 = var6.bind(var7)(var5);
            var2.socket = var4;
            var2.localPresenceState = var3;
            var2.localVoiceState = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3, 12351, 12389, 12392, 5247, 795, 659, 478, 3035, 1444, 806, 2]);