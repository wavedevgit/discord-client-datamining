// modules/devtools/native/components/DevToolsLazy.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun99992: for (var _fun99992_ip = 0;;) switch (_fun99992_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var8.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.NativeModules;
            var _closure1_slot4 = var3;
            var6 = 3;
            var6 = var5[var6];
            var6 = var8.bind(var0)(var6);
            var _closure1_slot5 = var6;
            var6 = 4;
            var6 = var5[var6];
            var6 = var8.bind(var0)(var6);
            var _closure1_slot6 = var6;
            var6 = 5;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.jsx;
            var _closure1_slot7 = var6;
            var6 = {
                'input': 'o',
                'modifierFlags': null,
                'eventName': 'keyCommandShowDevTools',
                'discoverabilityTitle': 'Open DevTools Panel'
            };
            var7 = 6;
            var7 = var5[var7];
            var9 = var4.bind(var0)(var7);
            var7 = var9.isAndroid;
            var7 = var7.bind(var9)();
            if (var7) {
                _fun99992_ip = 218;
                continue _fun99992
            }
        case 204:
            var3 = var3.KeyCommandsView;
            var3 = var3.keyModifierControl;
            _fun99992_ip = 246;
            continue _fun99992;
        case 218:
            var7 = 7;
            var7 = var5[var7];
            var8 = var8.bind(var0)(var7);
            var7 = var8.getConstants;
            var7 = var7.bind(var8)();
            var3 = var7.keyModifierControl;
        case 246:
            var6.modifierFlags = var3;
            var3 = function() {
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun99995: for (var _fun99995_ip = 0;;) switch (_fun99995_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun99995_ip = 76;
                                    continue _fun99995
                                }
                            case 7:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var2 = 9;
                                var3 = var1[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = 8;
                                var3 = var1[var3];
                                var1 = var1.paths;
                                var1 = var4.bind(var2)(var3, var1);
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun99995_ip = 73;
                                    continue _fun99995
                                }
                            case 60:
                                var3 = var1.navigateToDevTools;
                                var3 = var3.bind(var2)();
                                return var2;
                            case 73:
                                return var1;
                            case 76:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
            };
            var6.onKeyCommand = var3;
            var3 = new Array(1);
            var3[0] = var6;
            var _closure1_slot8 = var3;
            var3 = 13;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/devtools/native/components/DevToolsLazy.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function() {
                _fun99996: for (var _fun99996_ip = 0;;) switch (_fun99996_ip) {
                    case 0:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 10;
                        var2 = var6[var1];
                        var3 = undefined;
                        var9 = var5.bind(var3)(var2);
                        var8 = var9.useStateFromStores;
                        var2 = _closure1_slot5;
                        var7 = new Array(1);
                        var7[0] = var2;
                        var2 = function() { // Environment: var4
                            var0 = _closure1_slot5;
                            var0 = var0.isDeveloper;
                            return var0;
                        };
                        var2 = var8.bind(var9)(var7, var2);
                        var _closure2_slot0 = var2;
                        var1 = var6[var1];
                        var9 = var5.bind(var3)(var1);
                        var8 = var9.useStateFromStores;
                        var1 = _closure1_slot6;
                        var7 = new Array(1);
                        var7[0] = var1;
                        var1 = function() { // Environment: var4
                            var0 = _closure1_slot6;
                            var0 = var0.showDevWidget;
                            return var0;
                        };
                        var1 = var8.bind(var9)(var7, var1);
                        var8 = _closure1_slot3;
                        var7 = var8.useEffect;
                        var4 = function() { // Environment: var4
                            _fun99999: for (var _fun99999_ip = 0;;) switch (_fun99999_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 6;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.isIOS;
                                    var2 = var2.bind(var3)();
                                    if (!var2) {
                                        _fun99999_ip = 62;
                                        continue _fun99999
                                    }
                                case 38:
                                    var3 = _closure1_slot5;
                                    var2 = var3.addChangeListener;
                                    var1 = function() { // Environment: var1
                                        _fun100000: for (var _fun100000_ip = 0;;) switch (_fun100000_ip) {
                                            case 0:
                                                var0 = _closure1_slot4;
                                                var2 = var0.NSUserDefaultsBridge;
                                                var0 = null;
                                                if (!(var0 != var2)) {
                                                    _fun100000_ip = 39;
                                                    continue _fun100000
                                                }
                                            case 19:
                                                var1 = var2.setIsDiscordDeveloper;
                                                var0 = _closure2_slot0;
                                                var0 = var1.bind(var2)(var0);
                                            case 39:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                case 62:
                                    return var0;
                            }
                        };
                        var4 = var7.bind(var8)(var4);
                        var4 = 11;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.useKeyCommands;
                        if (var2) {
                            _fun99996_ip = 148;
                            continue _fun99996
                        }
                    case 142:
                        var4 = new Array(0);
                        _fun99996_ip = 152;
                        continue _fun99996;
                    case 148:
                        var4 = _closure1_slot8;
                    case 152:
                        var4 = var5.bind(var6)(var4);
                        if (!var2) {
                            _fun99996_ip = 163;
                            continue _fun99996
                        }
                    case 160:
                        if (var1) {
                            _fun99996_ip = 167;
                            continue _fun99996
                        }
                    case 163:
                        var1 = null;
                        return var1;
                    case 167:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 12;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.default;
                        var1 = _closure1_slot7;
                        var0 = {};
                        var0 = var1.bind(var3)(var2, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5263, 5262, 33, 478, 13026, 11370, 1307, 566, 13020, 13027, 2]);