// components_native/ErrorBoundary.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun99945: for (var _fun99945_ip = 0;;) switch (_fun99945_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun99945_ip = 76;
                continue _fun99945;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        _fun99948: for (var _fun99948_ip = 0;;) switch (_fun99948_ip) {
            case 0:
                var4 = _closure1_slot10;
                var3 = var4.useState;
                var0 = false;
                var5 = var3.bind(var4)(var0);
                var3 = _closure1_slot9;
                var4 = undefined;
                var0 = 2;
                var3 = var3.bind(var4)(var5, var0);
                var0 = 0;
                var6 = var3[var0];
                var0 = 1;
                var0 = var3[var0];
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var0 = var5[var0];
                var7 = var3.bind(var4)(var0);
                var5 = var7.useStateFromStores;
                var0 = _closure1_slot13;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var2
                    _fun99949: for (var _fun99949_ip = 0;;) switch (_fun99949_ip) {
                        case 0:
                            var2 = _closure1_slot13;
                            var0 = var2.getCurrentBuildOverride;
                            var0 = var0.bind(var2)();
                            var4 = var0.overrides;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            var0 = undefined;
                            if (var5) {
                                _fun99949_ip = 80;
                                continue _fun99949
                            }
                        case 36:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 12;
                            var1 = var6[var1];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.DEVICE_FIELD;
                            var1 = var4[var1];
                            var2 = var2 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun99949_ip = 80;
                                continue _fun99949
                            }
                        case 75:
                            var0 = var1.id;
                        case 80:
                            return var0;
                    }
                };
                var3 = var5.bind(var7)(var3, var0);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun99948_ip = 233;
                    continue _fun99948
                }
            case 112:
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot8;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun99952: for (var _fun99952_ip = 0;;) switch (_fun99952_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun99952_ip = 94;
                                        continue _fun99952
                                    }
                                case 7: // try_start_0
                                    var2 = _closure2_slot0;
                                    var3 = undefined;
                                    var1 = true;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 12;
                                    var1 = var4[var1];
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.clearBuildOverride;
                                    var1 = var1.bind(var2)();
                                    SaveGenerator(address = 60);
                                case 58:
                                    return var1;
                                case 60:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun99952_ip = 68;
                                        continue _fun99952
                                    }
                                case 66: // try_end0
                                    _fun99952_ip = 89;
                                    continue _fun99952;
                                case 68:
                                    return var1;
                                case 71: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot0;
                                    var2 = undefined;
                                    var1 = false;
                                    var1 = var3.bind(var2)(var1);
                                case 89:
                                    var1 = undefined;
                                    return var1;
                                case 94:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var5 = var2.bind(var4)();
                var3 = _closure1_slot14;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 13;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.Button;
                var1 = {};
                var7 = 'secondary';
                var1.variant = var7;
                var1.loading = var6;
                var6 = 14;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["/Nz9rY"];
                var6 = var7.bind(var8)(var6);
                var1.text = var6;
                var1.onPress = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 233:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot10 = var3;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.NativeModules;
    var _closure1_slot11 = var8;
    var8 = var6.StyleSheet;
    var6 = var6.View;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot14 = var7;
    var6 = var6.jsxs;
    var _closure1_slot15 = var6;
    var7 = var8.create;
    var6 = {};
    var9 = {
        'position': 'absolute',
        'right': 32,
        'bottom': 32,
        'left': 32,
        'gap': 12
    };
    var6.buttons = var9;
    var10 = 'center';
    var9 = {
        'position': 'absolute',
        'right': 32,
        'top': 64,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 12
    };
    var6.debugLogsContainer = var9;
    var9 = {
        'marginTop': 24,
        'textAlign': 'center'
    };
    var6.error = var9;
    var9 = {};
    var9.textAlign = var10;
    var6.text = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot16 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun99955: for (var _fun99955_ip = 0;;) switch (_fun99955_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun99955_ip = 84;
                        continue _fun99955
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun99955_ip = 118;
                    continue _fun99955;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {
                        'error': null,
                        'info': null
                    };
                    var0.state = var1;
                    var1 = false;
                    var0.discordErrorsSet = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidCatch';
        var4.key = var0;
        var0 = function arg0, arg1() {
            var3 = this;
            var2 = var3.triggerSoftCrash;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'triggerSoftCrash';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var6 = arg0;
            var7 = arg1;
            var2 = this;
            var1 = var2.setState;
            var0 = {};
            var0.error = var6;
            var0.info = var7;
            var0 = var1.bind(var2)(var0);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 15;
            var1 = var3[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.captureCrash;
            var1 = {};
            var1.extra = var7;
            var1 = var4.bind(var5)(var6, var1);
            var1 = 16;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {
                'type': 'CLEAR_CACHES',
                'reason': 'App Crashed'
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleReload';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            var1 = var0.BundleUpdaterManager;
            var0 = var1.reload;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'componentDidMount';
        var4.key = var6;
        var6 = function() {
            _fun99959: for (var _fun99959_ip = 0;;) switch (_fun99959_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = global;
                    var2 = var0.window;
                    var4 = var2.DiscordErrors;
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun99959_ip = 63;
                        continue _fun99959
                    }
                case 29:
                    var2 = var0.window;
                    var0 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.triggerSoftCrash;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.softCrash = var3;
                    var2.DiscordErrors = var0;
                    var0 = true;
                    var1.discordErrorsSet = var0;
                case 63:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            _fun99961: for (var _fun99961_ip = 0;;) switch (_fun99961_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.discordErrorsSet;
                    if (!var0) {
                        _fun99961_ip = 36;
                        continue _fun99961
                    }
                case 12:
                    var0 = global;
                    var2 = var0.window;
                    var0 = null;
                    var2.DiscordErrors = var0;
                    var0 = false;
                    var1.discordErrorsSet = var0;
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun99962: for (var _fun99962_ip = 0;;) switch (_fun99962_ip) {
                case 0:
                    var14 = this;
                    var0 = var14.state;
                    var12 = var0.error;
                    var6 = null;
                    if (!(var6 === var12)) {
                        _fun99962_ip = 34;
                        continue _fun99962
                    }
                case 19:
                    var0 = var14.props;
                    var0 = var0.children;
                    _fun99962_ip = 514;
                    continue _fun99962;
                case 34:
                    var4 = _closure1_slot15;
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var1 = 17;
                    var1 = var10[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var7 = _closure1_slot0;
                    var5 = 18;
                    var5 = var10[var5];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.AppCrash;
                    var1.Illustration = var5;
                    var19 = 14;
                    var5 = var10[var19];
                    var5 = var7.bind(var3)(var5);
                    var9 = var5.intl;
                    var8 = var9.string;
                    var5 = var10[var19];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.tx8CkI;
                    var5 = var8.bind(var9)(var5);
                    var1.title = var5;
                    var5 = var10[var19];
                    var5 = var7.bind(var3)(var5);
                    var9 = var5.intl;
                    var8 = var9.string;
                    var5 = var10[var19];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.CvQlAH;
                    var5 = var8.bind(var9)(var5);
                    var1.body = var5;
                    var9 = _closure1_slot16;
                    var5 = var9.text;
                    var1.titleStyle = var5;
                    var5 = var9.text;
                    var1.bodyStyle = var5;
                    var8 = _closure1_slot14;
                    var5 = 19;
                    var5 = var10[var5];
                    var5 = var7.bind(var3)(var5);
                    var7 = var5.Text;
                    var5 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-muted'
                    };
                    var9 = var9.error;
                    var5.style = var9;
                    var9 = var6 == var12;
                    var10 = undefined;
                    if (var9) {
                        _fun99962_ip = 279;
                        continue _fun99962
                    }
                case 274:
                    var10 = var12.message;
                case 279:
                    if (!(var6 == var10)) {
                        _fun99962_ip = 300;
                        continue _fun99962
                    }
                case 283:
                    var13 = var6 == var12;
                    var9 = undefined;
                    if (var13) {
                        _fun99962_ip = 297;
                        continue _fun99962
                    }
                case 292:
                    var9 = var12.name;
                case 297:
                    var10 = var9;
                case 300:
                    var12 = var6 != var10;
                    var9 = 'Unknown Error';
                    if (!var12) {
                        _fun99962_ip = 316;
                        continue _fun99962
                    }
                case 313:
                    var9 = var10;
                case 316:
                    var5.children = var9;
                    var7 = var8.bind(var3)(var7, var5);
                    var5 = new Array(3);
                    var5[0] = var7;
                    var9 = _closure1_slot15;
                    var8 = _closure1_slot12;
                    var7 = {};
                    var10 = _closure1_slot16;
                    var10 = var10.buttons;
                    var7.style = var10;
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot18;
                    var10 = {};
                    var12 = var13.bind(var3)(var12, var10);
                    var10 = new Array(2);
                    var10[0] = var12;
                    var13 = _closure1_slot14;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var11 = 13;
                    var11 = var15[var11];
                    var11 = var18.bind(var3)(var11);
                    var12 = var11.Button;
                    var11 = {};
                    var16 = var15[var19];
                    var16 = var18.bind(var3)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var15[var19];
                    var15 = var18.bind(var3)(var15);
                    var15 = var15.t;
                    var15 = var15["4n8OJn"];
                    var15 = var16.bind(var17)(var15);
                    var11.text = var15;
                    var14 = var14.handleReload;
                    var11.onPress = var14;
                    var11 = var13.bind(var3)(var12, var11);
                    var10[1] = var11;
                    var7.children = var10;
                    var7 = var9.bind(var3)(var8, var7);
                    var5[1] = var7;
                    var5[2] = var6;
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 514:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/ErrorBoundary.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 57, 31, 27, 9852, 33, 566, 10075, 4084, 1234, 1207, 806, 7361, 8353, 3941, 2]);