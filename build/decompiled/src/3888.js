// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = function(arg0, arg1) { // Original name: registerHost, environment: var2
        _fun35210: for (var _fun35210_ip = 0;;) switch (_fun35210_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var1 = var2 in var0;
                if (var1) {
                    _fun35210_ip = 21;
                    continue _fun35210
                }
            case 13:
                var1 = new Array(0);
                var0[var2] = var1;
            case 21:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: removePortal, environment: var2
        _fun35211: for (var _fun35211_ip = 0;;) switch (_fun35211_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var10 = arg2;
                var _closure2_slot0 = var10;
                var3 = var1 in var0;
                if (var3) {
                    _fun35211_ip = 135;
                    continue _fun35211
                }
            case 22:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.print;
                var3 = {};
                var7 = _closure1_slot4;
                var7 = var7.name;
                var3.component = var7;
                var6 = _closure1_slot3;
                var6 = var6.name;
                var3.method = var6;
                var6 = global;
                var6 = var6.HermesInternal;
                var9 = var6.concat;
                var15 = "Failed to remove portal '";
                var13 = "', '";
                var11 = "' was not registered!";
                var14 = var10;
                var12 = var1;
                var6 = var15[var9](var14, var13, var12, var11, var10);
                var3.params = var6;
                var3 = var4.bind(var5)(var3);
                return var0;
            case 135:
                var4 = var0[var1];
                var3 = var4.findIndex;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var2 = -1;
                if (!(var2 !== var4)) {
                    _fun35211_ip = 184;
                    continue _fun35211
                }
            case 165:
                var3 = var0[var1];
                var2 = var3.splice;
                var1 = 1;
                var1 = var2.bind(var3)(var4, var1);
            case 184:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1) { // Original name: reducer, environment: var2
        _fun35213: for (var _fun35213_ip = 0;;) switch (_fun35213_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var6 = var1.type;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4);
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 1;
                var5 = var3[var8];
                var3 = undefined;
                var5 = var7.bind(var3)(var5);
                var5 = var5.ACTIONS;
                var5 = var5.REGISTER_HOST;
                if (!(var5 !== var6)) {
                    _fun35213_ip = 253;
                    continue _fun35213
                }
            case 76:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var7.bind(var3)(var5);
                var5 = var5.ACTIONS;
                var5 = var5.DEREGISTER_HOST;
                if (!(var5 !== var6)) {
                    _fun35213_ip = 241;
                    continue _fun35213
                }
            case 112:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var7.bind(var3)(var5);
                var5 = var5.ACTIONS;
                var5 = var5.ADD_UPDATE_PORTAL;
                if (!(var5 !== var6)) {
                    _fun35213_ip = 205;
                    continue _fun35213
                }
            case 145:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var7.bind(var3)(var5);
                var5 = var5.ACTIONS;
                var5 = var5.REMOVE_PORTAL;
                if (!(var5 !== var6)) {
                    _fun35213_ip = 180;
                    continue _fun35213
                }
            case 178:
                return var4;
            case 180:
                var6 = _closure1_slot3;
                var5 = var1.hostName;
                var4 = var1.portalName;
                var4 = var6.bind(var3)(var0, var5, var4);
                return var0;
            case 205:
                var11 = var1.hostName;
                var10 = var1.portalName;
                var9 = var1.node;
                var4 = function(arg0, arg1, arg2, arg3) { // Original name: addUpdatePortal, environment: var4
                    _fun35214: for (var _fun35214_ip = 0;;) switch (_fun35214_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var7 = arg2;
                            var2 = arg3;
                            var _closure3_slot0 = var7;
                            var4 = var1 in var0;
                            if (var4) {
                                _fun35214_ip = 40;
                                continue _fun35214
                            }
                        case 25:
                            var5 = _closure1_slot2;
                            var4 = undefined;
                            var4 = var5.bind(var4)(var0, var1);
                        case 40:
                            var5 = var0[var1];
                            var4 = var5.findIndex;
                            var3 = function(arg0) { // Environment: var3
                                var0 = arg0;
                                var1 = var0.name;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            var4 = -1;
                            if (!(var4 === var3)) {
                                _fun35214_ip = 97;
                                continue _fun35214
                            }
                        case 70:
                            var6 = var0[var1];
                            var5 = var6.push;
                            var4 = {};
                            var4.name = var7;
                            var4.node = var2;
                            var4 = var5.bind(var6)(var4);
                            _fun35214_ip = 111;
                            continue _fun35214;
                        case 97:
                            var1 = var0[var1];
                            var1 = var1[var3];
                            var1.node = var2;
                        case 111:
                            return var0;
                    }
                };
                var13 = undefined;
                var12 = var0;
                var4 = var13[var4](var12, var11, var10, var9, var8);
                return var0;
            case 241:
                var4 = var1.hostName;
                var4 = delete var0[var4];
                return var0;
            case 253:
                var2 = _closure1_slot2;
                var1 = var1.hostName;
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var1.reducer = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3889, 3884]);