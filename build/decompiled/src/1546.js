// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = function(arg0) { // Original name: getStateFromParams, environment: var1
        _fun17480: for (var _fun17480_ip = 0;;) switch (_fun17480_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun17480_ip = 17;
                    continue _fun17480
                }
            case 9:
                var2 = var1.state;
                if (var2) {
                    _fun17480_ip = 115;
                    continue _fun17480
                }
            case 17:
                var2 = var0 != var1;
                var7 = undefined;
                var0 = undefined;
                if (!var2) {
                    _fun17480_ip = 113;
                    continue _fun17480
                }
            case 28:
                var2 = var1.screen;
                var0 = undefined;
                if (!var2) {
                    _fun17480_ip = 113;
                    continue _fun17480
                }
            case 39:
                var2 = {};
                var4 = {};
                var3 = var1.screen;
                var4.name = var3;
                var3 = var1.params;
                var4.params = var3;
                var5 = var1.screen;
                var3 = undefined;
                if (!var5) {
                    _fun17480_ip = 93;
                    continue _fun17480
                }
            case 75:
                var6 = _closure1_slot4;
                var5 = var1.params;
                var3 = var6.bind(var7)(var5);
            case 93:
                var4.state = var3;
                var3 = new Array(1);
                var3[0] = var4;
                var2.routes = var3;
                var0 = var2;
            case 113:
                _fun17480_ip = 120;
                continue _fun17480;
            case 115:
                var0 = var1.state;
            case 120:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var1 = function(arg0) { // Original name: useLinkProps, environment: var1
        _fun17481: for (var _fun17481_ip = 0;;) switch (_fun17481_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.to;
                var _closure2_slot0 = var8;
                var0 = var0.action;
                var _closure2_slot1 = var0;
                var7 = _closure1_slot3;
                var2 = var7.useContext;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 2;
                var0 = var3[var4];
                var6 = undefined;
                var0 = var5.bind(var6)(var0);
                var0 = var0.NavigationContainerRefContext;
                var0 = var2.bind(var7)(var0);
                var _closure2_slot2 = var0;
                var2 = var7.useContext;
                var0 = var3[var4];
                var0 = var5.bind(var6)(var0);
                var0 = var0.NavigationHelpersContext;
                var0 = var2.bind(var7)(var0);
                var _closure2_slot3 = var0;
                var5 = var7.useContext;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var2.bind(var6)(var0);
                var0 = var5.bind(var7)(var0);
                var7 = var0.options;
                var0 = 4;
                var0 = var3[var0];
                var0 = var2.bind(var6)(var0);
                var0 = var0.bind(var6)();
                var _closure2_slot4 = var0;
                var3 = null;
                var0 = var3 == var7;
                var5 = undefined;
                if (var0) {
                    _fun17481_ip = 172;
                    continue _fun17481
                }
            case 166:
                var5 = var7.getPathFromState;
            case 172:
                if (!(var3 == var5)) {
                    _fun17481_ip = 199;
                    continue _fun17481
                }
            case 176:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var0 = var2.bind(var6)(var0);
                var5 = var0.getPathFromState;
            case 199:
                var0 = {};
                var9 = 'string';
                var4 = typeof var8;
                var2 = var8;
                if (!(var9 !== var4)) {
                    _fun17481_ip = 292;
                    continue _fun17481
                }
            case 215:
                var4 = {};
                var9 = {};
                var11 = var8.screen;
                var9.name = var11;
                var11 = var8.params;
                var9.params = var11;
                var10 = _closure1_slot4;
                var8 = var8.params;
                var8 = var10.bind(var6)(var8);
                var9.state = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var4.routes = var8;
                var8 = var3 == var7;
                var3 = undefined;
                if (var8) {
                    _fun17481_ip = 286;
                    continue _fun17481
                }
            case 281:
                var3 = var7.config;
            case 286:
                var2 = var5.bind(var6)(var4, var3);
            case 292:
                var0.href = var2;
                var2 = 'link';
                var0.accessibilityRole = var2;
                var1 = function(arg0) { // Original name: onPress, environment: var1
                    _fun17482: for (var _fun17482_ip = 0;;) switch (_fun17482_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun17482_ip = 15;
                                continue _fun17482
                            }
                        case 6:
                            var0 = var0.defaultPrevented;
                            if (var0) {
                                _fun17482_ip = 130;
                                continue _fun17482
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun17482_ip = 42;
                                continue _fun17482
                            }
                        case 25:
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun17482_ip = 130;
                            continue _fun17482;
                        case 42:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun17482_ip = 112;
                                continue _fun17482
                            }
                        case 49:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun17482_ip = 92;
                                continue _fun17482
                            }
                        case 56:
                            var1 = global;
                            var3 = var1.Error;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var4 = "Couldn't find a navigation object. Is your component inside NavigationContainer?";
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 92:
                            var3 = _closure2_slot2;
                            var2 = var3.dispatch;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            _fun17482_ip = 130;
                            continue _fun17482;
                        case 112:
                            var2 = _closure2_slot3;
                            var1 = var2.dispatch;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 130:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onPress = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1472, 1547, 1548]);