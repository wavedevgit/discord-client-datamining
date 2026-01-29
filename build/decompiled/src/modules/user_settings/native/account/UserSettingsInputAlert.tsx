// modules/user_settings/native/account/UserSettingsInputAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun81049: for (var _fun81049_ip = 0;;) switch (_fun81049_ip) {
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
                _fun81049_ip = 76;
                continue _fun81049;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot8 = var7;
    var6 = var6.jsxs;
    var _closure1_slot9 = var6;
    var6 = {};
    var7 = '';
    var6.input = var7;
    var6.error = var0;
    var _closure1_slot10 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: UserSettingsInputAlert, environment: var5
            _fun81053: for (var _fun81053_ip = 0;;) switch (_fun81053_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun81053_ip = 86;
                        continue _fun81053
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun81053_ip = 120;
                    continue _fun81053;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot10;
                    var0.state = var2;
                    var2 = function() { // Environment: var1
                        _fun81054: for (var _fun81054_ip = 0;;) switch (_fun81054_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var1 = var0.onClose;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun81054_ip = 30;
                                    continue _fun81054
                                }
                            case 24:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 30:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.close = var2;
                    var1 = function() { // Environment: var1
                        _fun81055: for (var _fun81055_ip = 0;;) switch (_fun81055_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var4 = var2.props;
                                var1 = var4.isLoading;
                                var3 = var4.onSubmit;
                                var5 = var4.onSuccess;
                                var _closure4_slot0 = var5;
                                var5 = var4.closeOnSuccess;
                                var _closure4_slot1 = var5;
                                var5 = var4.onError;
                                var _closure4_slot2 = var5;
                                var4 = var4.skipErrorMsgAbortCode;
                                var _closure4_slot3 = var4;
                                var2 = var2.state;
                                var2 = var2.input;
                                if (var1) {
                                    _fun81055_ip = 88;
                                    continue _fun81055
                                }
                            case 82:
                                var4 = null;
                                var1 = var4 == var3;
                            case 88:
                                if (var1) {
                                    _fun81055_ip = 133;
                                    continue _fun81055
                                }
                            case 91:
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.then;
                                var1 = function() { // Environment: var0
                                    _fun81056: for (var _fun81056_ip = 0;;) switch (_fun81056_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun81056_ip = 23;
                                                continue _fun81056
                                            }
                                        case 13:
                                            var2 = _closure4_slot0;
                                            var1 = undefined;
                                            var1 = var2.bind(var1)();
                                        case 23:
                                            var0 = _closure4_slot1;
                                            if (!var0) {
                                                _fun81056_ip = 47;
                                                continue _fun81056
                                            }
                                        case 30:
                                            var1 = _closure3_slot0;
                                            var0 = var1.close;
                                            var0 = var0.bind(var1)();
                                        case 47:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.catch;
                                var0 = function(arg0) { // Environment: var0
                                    _fun81057: for (var _fun81057_ip = 0;;) switch (_fun81057_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = _closure4_slot2;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun81057_ip = 27;
                                                continue _fun81057
                                            }
                                        case 16:
                                            var2 = _closure4_slot2;
                                            var1 = undefined;
                                            var1 = var2.bind(var1)(var3);
                                        case 27:
                                            if (!var3) {
                                                _fun81057_ip = 134;
                                                continue _fun81057
                                            }
                                        case 30:
                                            var1 = var3.body;
                                            if (!var1) {
                                                _fun81057_ip = 134;
                                                continue _fun81057
                                            }
                                        case 38:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var1 = 7;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var1 = var4.bind(var1)(var2);
                                            var1 = var1.V6OrEarlierAPIError;
                                            var2 = var1.prototype;
                                            var2 = Object.create(var2, {
                                                constructor: {
                                                    value: var1
                                                }
                                            });
                                            var6 = var2;
                                            var5 = var3;
                                            var1 = new var6[var1](var5, var4);
                                            var3 = var1 instanceof Object ? var1 : var2;
                                            var1 = var3.code;
                                            var0 = _closure4_slot3;
                                            if (!(var1 !== var0)) {
                                                _fun81057_ip = 134;
                                                continue _fun81057
                                            }
                                        case 105:
                                            var2 = _closure3_slot0;
                                            var1 = var2.setState;
                                            var0 = {};
                                            var3 = var3.message;
                                            var0.error = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 134:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 133:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSubmit = var1;
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
        var0 = 'renderContent';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun81058: for (var _fun81058_ip = 0;;) switch (_fun81058_ip) {
                case 0:
                    var9 = this;
                    var _closure3_slot0 = var9;
                    var0 = var9.props;
                    var13 = var0.placeholder;
                    var12 = var0.secureTextEntry;
                    var16 = var0.helpText;
                    var14 = var0.inputLabel;
                    var0 = var9.props;
                    var0 = var0.error;
                    var11 = null;
                    if (!(var11 != var0)) {
                        _fun81058_ip = 72;
                        continue _fun81058
                    }
                case 54:
                    var0 = var9.props;
                    var1 = var0.error;
                    var0 = '';
                    if (!(var0 === var1)) {
                        _fun81058_ip = 84;
                        continue _fun81058
                    }
                case 72:
                    var0 = var9.state;
                    var10 = var0.error;
                    _fun81058_ip = 94;
                    continue _fun81058;
                case 84:
                    var0 = var9.props;
                    var10 = var0.error;
                case 94:
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Stack;
                    var0 = {};
                    var4 = 16;
                    var0.spacing = var4;
                    var6 = var11 != var16;
                    if (!var6) {
                        _fun81058_ip = 196;
                        continue _fun81058
                    }
                case 145:
                    var15 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var4 = 9;
                    var4 = var17[var4];
                    var4 = var7.bind(var2)(var4);
                    var7 = var4.Text;
                    var4 = {};
                    var17 = 'text-md/normal';
                    var4.variant = var17;
                    var4.children = var16;
                    var6 = var15.bind(var2)(var7, var4);
                case 196:
                    var4 = new Array(2);
                    var4[0] = var6;
                    var7 = _closure1_slot8;
                    var6 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var5 = 10;
                    var5 = var15[var5];
                    var5 = var6.bind(var2)(var5);
                    var6 = var5.TextInput;
                    var5 = {};
                    var5.label = var14;
                    var5.placeholder = var13;
                    var5.secureTextEntry = var12;
                    var12 = 'done';
                    var5.returnKeyType = var12;
                    var12 = true;
                    var5.autoFocus = var12;
                    var12 = var11 != var10;
                    var11 = 'default';
                    if (!var12) {
                        _fun81058_ip = 281;
                        continue _fun81058
                    }
                case 277:
                    var11 = 'error';
                case 281:
                    var5.status = var11;
                    var5.errorMessage = var10;
                    var9 = var9.handleSubmit;
                    var5.onSubmitEditing = var9;
                    var8 = function(arg0) { // Original name: onChange, environment: var8
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = arg0;
                        var0.input = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5.onChange = var8;
                    var5 = var7.bind(var2)(var6, var5);
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun81060: for (var _fun81060_ip = 0;;) switch (_fun81060_ip) {
                case 0:
                    var7 = this;
                    var0 = var7.props;
                    var10 = var0.title;
                    var9 = var0.actionText;
                    var6 = var0.cancelText;
                    var8 = var0.confirmColor;
                    var2 = var0.useKeyboardAwareWrapper;
                    var5 = _closure1_slot8;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 11;
                    var0 = var4[var0];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var0);
                    var0 = {};
                    var0.title = var10;
                    var0.confirmText = var9;
                    var0.confirmColor = var8;
                    var8 = var7.handleSubmit;
                    var0.onConfirm = var8;
                    var0.cancelText = var6;
                    var6 = var7.close;
                    var0.onCancel = var6;
                    var6 = var7.renderContent;
                    var6 = var6.bind(var7)();
                    var0.children = var6;
                    var5 = var5.bind(var4)(var3, var0);
                    var0 = var5;
                    if (!var2) {
                        _fun81060_ip = 171;
                        continue _fun81060
                    }
                case 135:
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 12;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 171:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {
        'isLoading': false,
        'useKeyboardAwareWrapper': false,
        'secureTextEntry': true
    };
    var1.defaultProps = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/account/UserSettingsInputAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 33, 507, 4033, 3895, 5358, 3891, 5730, 2]);