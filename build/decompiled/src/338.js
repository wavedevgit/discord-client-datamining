// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun4969: for (var _fun4969_ip = 0;;) switch (_fun4969_ip) {
        case 0:
            var7 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var5;
            var0 = function() {
                _fun4970: for (var _fun4970_ip = 0;;) switch (_fun4970_ip) {
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
                    case 70: // try_end0
                        _fun4970_ip = 74;
                        continue _fun4970;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot14 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var1 = function arg0() {
                var5 = arg0;
                var0 = var5.ref;
                var4 = _closure1_slot4;
                var2 = _closure1_slot3;
                var3 = undefined;
                var7 = var4.bind(var3)(var5, var2);
                var2 = _closure1_slot10;
                var1 = _closure1_slot12;
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.modalRef = var0;
                var0 = {};
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = ['ref'];
            var _closure1_slot3 = var0;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var3);
            var13 = 0;
            var3 = var5[var13];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var12 = 1;
            var3 = var5[var12];
            var11 = var4.bind(var0)(var3);
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var8 = var5[var3];
            var3 = arg3;
            var3 = var3.bind(var0)(var8);
            var8 = 8;
            var8 = var5[var8];
            var8 = var7.bind(var0)(var8);
            var8 = var8.jsx;
            var _closure1_slot10 = var8;
            var _closure1_slot11 = var13;
            var8 = var3.Component;
            var3 = function(arg0) { // Environment: var6
                var3 = function arg0() {
                    _fun4975: for (var _fun4975_ip = 0;;) switch (_fun4975_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = this;
                            var0 = _closure1_slot5;
                            var1 = _closure2_slot0;
                            var3 = undefined;
                            var0 = var0.bind(var3)(var5, var1);
                            var10 = new Array(1);
                            var10[0] = var2;
                            var0 = _closure1_slot8;
                            var9 = var0.bind(var3)(var1);
                            var1 = _closure1_slot7;
                            var0 = _closure1_slot14;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun4975_ip = 73;
                                continue _fun4975
                            }
                        case 60:
                            var0 = var9.apply;
                            var0 = var0.bind(var9)(var5, var10);
                            _fun4975_ip = 107;
                            continue _fun4975;
                        case 73:
                            var6 = global;
                            var8 = var6.Reflect;
                            var7 = var8.construct;
                            var6 = _closure1_slot8;
                            var6 = var6.bind(var3)(var5);
                            var6 = var6.constructor;
                            var0 = var7.bind(var8)(var9, var10, var6);
                        case 107:
                            var0 = var1.bind(var3)(var5, var0);
                            var1 = _closure1_slot11;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure1_slot11 = var3;
                            var0._identifier = var1;
                            var1 = {};
                            var3 = var2.visible;
                            var2 = true;
                            var2 = var2 === var3;
                            var1.isRendered = var2;
                            var0.state = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot6;
                var4 = {};
                var0 = 'componentDidMount';
                var4.key = var0;
                var0 = function() {
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(6);
                var0[0] = var4;
                var4 = {};
                var6 = 'componentWillUnmount';
                var4.key = var6;
                var6 = function() {
                    _fun4977: for (var _fun4977_ip = 0;;) switch (_fun4977_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._eventSubscription;
                            if (!var1) {
                                _fun4977_ip = 28;
                                continue _fun4977
                            }
                        case 12:
                            var1 = var0._eventSubscription;
                            var0 = var1.remove;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'componentDidUpdate';
                var4.key = var6;
                var6 = function arg0() {
                    _fun4978: for (var _fun4978_ip = 0;;) switch (_fun4978_ip) {
                        case 0:
                            var2 = this;
                            var0 = arg0;
                            var1 = var0.visible;
                            var0 = false;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun4978_ip = 38;
                                continue _fun4978
                            }
                        case 21:
                            var1 = var2.props;
                            var3 = var1.visible;
                            var1 = true;
                            var0 = var1 === var3;
                        case 38:
                            if (!var0) {
                                _fun4978_ip = 61;
                                continue _fun4978
                            }
                        case 41:
                            var1 = var2.setState;
                            var0 = {};
                            var3 = true;
                            var0.isRendered = var3;
                            var0 = var1.bind(var2)(var0);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = '_shouldShowModal';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.visible;
                    var0 = true;
                    var0 = var0 === var1;
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'render';
                var4.key = var6;
                var6 = function() {
                    _fun4980: for (var _fun4980_ip = 0;;) switch (_fun4980_ip) {
                        case 0:
                            var4 = this;
                            var0 = var4._shouldShowModal;
                            var0 = var0.bind(var4)();
                            if (var0) {
                                _fun4980_ip = 20;
                                continue _fun4980
                            }
                        case 16:
                            var0 = null;
                            return var0;
                        case 20:
                            var15 = {};
                            var0 = var4.props;
                            var1 = var0.transparent;
                            var0 = 'transparent';
                            var2 = true;
                            if (!(var2 !== var1)) {
                                _fun4980_ip = 73;
                                continue _fun4980
                            }
                        case 43:
                            var1 = var4.props;
                            var3 = var1.backdropColor;
                            var1 = null;
                            var5 = var1 != var3;
                            var1 = 'white';
                            if (!var5) {
                                _fun4980_ip = 70;
                                continue _fun4980
                            }
                        case 67:
                            var1 = var3;
                        case 70:
                            var0 = var1;
                        case 73:
                            var15.backgroundColor = var0;
                            var0 = var4.props;
                            var7 = var0.animationType;
                            if (var7) {
                                _fun4980_ip = 95;
                                continue _fun4980
                            }
                        case 91:
                            var7 = 'none';
                        case 95:
                            var0 = var4.props;
                            var6 = var0.presentationStyle;
                            if (var6) {
                                _fun4980_ip = 137;
                                continue _fun4980
                            }
                        case 109:
                            var0 = var4.props;
                            var1 = var0.transparent;
                            var0 = 'fullScreen';
                            if (!(var2 === var1)) {
                                _fun4980_ip = 134;
                                continue _fun4980
                            }
                        case 128:
                            var0 = 'overFullScreen';
                        case 134:
                            var6 = var0;
                        case 137:
                            var0 = var4.props;
                            var13 = var0.children;
                            var3 = _closure1_slot10;
                            var5 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var0 = 9;
                            var0 = var16[var0];
                            var2 = undefined;
                            var1 = var5.bind(var2)(var0);
                            var0 = {};
                            var0.animationType = var7;
                            var0.presentationStyle = var6;
                            var6 = var4.props;
                            var6 = var6.transparent;
                            var0.transparent = var6;
                            var6 = var4.props;
                            var6 = var6.hardwareAccelerated;
                            var0.hardwareAccelerated = var6;
                            var6 = var4.props;
                            var6 = var6.onRequestClose;
                            var0.onRequestClose = var6;
                            var6 = var4.props;
                            var6 = var6.onShow;
                            var0.onShow = var6;
                            var6 = function() {
                                var0 = undefined;
                                return var0;
                            };
                            var0.onDismiss = var6;
                            var6 = var4.props;
                            var6 = var6.modalRef;
                            var0.ref = var6;
                            var6 = var4.props;
                            var6 = var6.visible;
                            var0.visible = var6;
                            var6 = var4.props;
                            var6 = var6.statusBarTranslucent;
                            var0.statusBarTranslucent = var6;
                            var6 = var4.props;
                            var6 = var6.navigationBarTranslucent;
                            var0.navigationBarTranslucent = var6;
                            var6 = var4._identifier;
                            var0.identifier = var6;
                            var6 = _closure1_slot13;
                            var6 = var6.modal;
                            var0.style = var6;
                            var6 = var4._shouldSetResponder;
                            var0.onStartShouldSetResponder = var6;
                            var6 = var4.props;
                            var6 = var6.supportedOrientations;
                            var0.supportedOrientations = var6;
                            var6 = var4.props;
                            var6 = var6.onOrientationChange;
                            var0.onOrientationChange = var6;
                            var6 = var4.props;
                            var6 = var6.allowSwipeDismissal;
                            var0.allowSwipeDismissal = var6;
                            var4 = var4.props;
                            var4 = var4.testID;
                            var0.testID = var4;
                            var6 = _closure1_slot10;
                            var4 = 10;
                            var4 = var16[var4];
                            var4 = var5.bind(var2)(var4);
                            var5 = var4.VirtualizedListContextResetter;
                            var4 = {};
                            var9 = _closure1_slot10;
                            var11 = _closure1_slot0;
                            var7 = 11;
                            var7 = var16[var7];
                            var7 = var11.bind(var2)(var7);
                            var7 = var7.default;
                            var7 = var7.Context;
                            var8 = var7.Provider;
                            var7 = {};
                            var10 = null;
                            var7.value = var10;
                            var12 = _closure1_slot10;
                            var10 = 12;
                            var10 = var16[var10];
                            var10 = var11.bind(var2)(var10);
                            var11 = var10.default;
                            var10 = {};
                            var14 = _closure1_slot13;
                            var16 = var14.container;
                            var14 = new Array(2);
                            var14[0] = var16;
                            var14[1] = var15;
                            var10.style = var14;
                            var14 = false;
                            var10.collapsable = var14;
                            var10.children = var13;
                            var10 = var12.bind(var2)(var11, var10);
                            var7.children = var10;
                            var7 = var9.bind(var2)(var8, var7);
                            var4.children = var7;
                            var4 = var6.bind(var2)(var5, var4);
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = '_shouldSetResponder';
                var4.key = var6;
                var5 = function() {
                    var0 = true;
                    return var0;
                };
                var4.value = var5;
                var0[5] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var8 = var3.bind(var0)(var8);
            var _closure1_slot12 = var8;
            var3 = {
                'visible': true,
                'hardwareAccelerated': false
            };
            var8.defaultProps = var3;
            var3 = 13;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var3 = var3.RootTagContext;
            var8.contextType = var3;
            var3 = 14;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var8 = var3.default;
            var3 = var8.getConstants;
            var3 = var3.bind(var8)();
            var3 = var3.isRTL;
            var10 = 'left';
            if (!var3) {
                _fun4969_ip = 339;
                continue _fun4969
            }
        case 335:
            var10 = 'right';
        case 339:
            var3 = 15;
            var3 = var5[var3];
            var3 = var7.bind(var0)(var3);
            var8 = var3.default;
            var7 = var8.create;
            var3 = {};
            var9 = {};
            var14 = 'absolute';
            var9.position = var14;
            var3.modal = var9;
            var9 = {};
            var10 = var11.bind(var0)(var9, var10, var13);
            var9 = 'top';
            var10 = var11.bind(var0)(var10, var9, var13);
            var9 = 'flex';
            var9 = var11.bind(var0)(var10, var9, var12);
            var3.container = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot13 = var3;
            var3 = 'Modal';
            var1.displayName = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.VirtualizedListContextResetter;
            var1.Context = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 77, 6, 7, 15, 17, 18, 31, 33, 339, 303, 341, 112, 252, 405, 253]);