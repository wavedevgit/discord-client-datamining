// components_native/common/SwipeableFastList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun73371: for (var _fun73371_ip = 0;;) switch (_fun73371_ip) {
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
                _fun73371_ip = 76;
                continue _fun73371;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var3 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var1.Component;
    var1 = function(arg0) { // Environment: var6
        var3 = function arg0() {
            _fun73375: for (var _fun73375_ip = 0;;) switch (_fun73375_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun73375_ip = 86;
                        continue _fun73375
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun73375_ip = 120;
                    continue _fun73375;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = var0.props;
                    var2 = var2.bounceFirstRowOnMount;
                    var0._shouldBounceFirstRowOnMount = var2;
                    var2 = null;
                    var0._openRowKey = var2;
                    var3 = {};
                    var0._refs = var3;
                    var0._bounceTimeout = var2;
                    var2 = function(arg0, arg1, arg2) { // Environment: var1
                        _fun73376: for (var _fun73376_ip = 0;;) switch (_fun73376_ip) {
                            case 0:
                                var7 = arg0;
                                var6 = arg1;
                                var _closure4_slot0 = var7;
                                var _closure4_slot1 = var6;
                                var2 = _closure3_slot0;
                                var1 = var2.props;
                                var3 = var1.renderQuickActions;
                                var _closure4_slot2 = var3;
                                var5 = var1.renderItem;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var8 = var1.concat;
                                var3 = '';
                                var1 = ':';
                                var1 = var8.bind(var3)(var7, var1, var6);
                                var _closure4_slot3 = var1;
                                var1 = false;
                                var _closure4_slot4 = var1;
                                var2 = var2._shouldBounceFirstRowOnMount;
                                if (!var2) {
                                    _fun73376_ip = 107;
                                    continue _fun73376
                                }
                            case 91:
                                var0 = _closure3_slot0;
                                var0._shouldBounceFirstRowOnMount = var1;
                                var0 = true;
                                _closure4_slot4 = var0;
                            case 107:
                                var3 = _closure1_slot7;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 7;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var8 = function() {
                                    var3 = _closure4_slot2;
                                    var2 = _closure4_slot0;
                                    var1 = _closure4_slot1;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var0.renderRightActions = var8;
                                var8 = function arg0() {
                                    _fun73378: for (var _fun73378_ip = 0;;) switch (_fun73378_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var1 = _closure3_slot0;
                                            var2 = var1._refs;
                                            var1 = _closure4_slot3;
                                            var2[var1] = var4;
                                            var2 = null;
                                            var1 = var2 != var4;
                                            if (!var1) {
                                                _fun73378_ip = 40;
                                                continue _fun73378
                                            }
                                        case 36:
                                            var1 = _closure4_slot4;
                                        case 40:
                                            if (!var1) {
                                                _fun73378_ip = 94;
                                                continue _fun73378
                                            }
                                        case 43:
                                            var1 = _closure3_slot0;
                                            var3 = var1.bounceSwipeable;
                                            var3 = var3.bind(var1)(var4);
                                            var1 = var1.props;
                                            var1 = var1.onBounceSwipable;
                                            if (!(var2 != var1)) {
                                                _fun73378_ip = 94;
                                                continue _fun73378
                                            }
                                        case 75:
                                            var0 = _closure3_slot0;
                                            var1 = var0.props;
                                            var0 = var1.onBounceSwipable;
                                            var0 = var0.bind(var1)();
                                        case 94:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0.ref = var8;
                                var8 = 8;
                                var0.overshootFriction = var8;
                                var8 = function() {
                                    var2 = _closure3_slot0;
                                    var1 = var2.handleOpen;
                                    var0 = _closure4_slot3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0.onSwipeableWillOpen = var8;
                                var4 = function() {
                                    var2 = _closure3_slot0;
                                    var1 = var2.handleClose;
                                    var0 = _closure4_slot3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0.onSwipeableClose = var4;
                                var4 = true;
                                var0.useNativeAnimations = var4;
                                var4 = arg2;
                                var4 = var5.bind(var2)(var7, var6, var4);
                                var0.children = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                        }
                    };
                    var0.renderRow = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun73381: for (var _fun73381_ip = 0;;) switch (_fun73381_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.closeOpenRow;
                                var1 = var1.bind(var0)();
                                var0 = var0.props;
                                var2 = var0.onScroll;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun73381_ip = 44;
                                    continue _fun73381
                                }
                            case 34:
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 44:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleScroll = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'componentWillUnmount';
        var4.key = var0;
        var0 = function() {
            _fun73382: for (var _fun73382_ip = 0;;) switch (_fun73382_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._bounceTimeout;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun73382_ip = 36;
                        continue _fun73382
                    }
                case 15:
                    var1 = global;
                    var2 = var1.clearTimeout;
                    var1 = var0._bounceTimeout;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'bounceSwipeable';
        var4.key = var6;
        var6 = function arg0() {
            _fun73383: for (var _fun73383_ip = 0;;) switch (_fun73383_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var3 = var2._bounceTimeout;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun73383_ip = 49;
                        continue _fun73383
                    }
                case 28:
                    var0 = global;
                    var4 = var0.clearTimeout;
                    var3 = var2._bounceTimeout;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                case 49:
                    var0 = global;
                    var4 = var0.setTimeout;
                    var0 = undefined;
                    var3 = function() { // Environment: var1
                        var2 = _closure3_slot1;
                        var1 = var2.openRight;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot0;
                        var0 = global;
                        var4 = var0.setTimeout;
                        var0 = undefined;
                        var3 = function() { // Environment: var1
                            var1 = _closure3_slot1;
                            var0 = var1.close;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var1 = 400;
                        var1 = var4.bind(var0)(var3, var1);
                        var2._bounceTimeout = var1;
                        return var0;
                    };
                    var1 = 700;
                    var1 = var4.bind(var0)(var3, var1);
                    var2._bounceTimeout = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'closeOpenRow';
        var4.key = var6;
        var6 = function() {
            _fun73386: for (var _fun73386_ip = 0;;) switch (_fun73386_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._openRowKey;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun73386_ip = 67;
                        continue _fun73386
                    }
                case 15:
                    var3 = var1._refs;
                    var2 = var1._openRowKey;
                    var2 = var3[var2];
                    if (!(var0 != var2)) {
                        _fun73386_ip = 61;
                        continue _fun73386
                    }
                case 35:
                    var3 = var1._refs;
                    var2 = var1._openRowKey;
                    var3 = var3[var2];
                    var2 = var3.close;
                    var2 = var2.bind(var3)();
                case 61:
                    var1._openRowKey = var0;
                case 67:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleOpen';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = var1.closeOpenRow;
            var0 = var0.bind(var1)();
            var0 = arg0;
            var1._openRowKey = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleClose';
        var4.key = var6;
        var6 = function arg0() {
            _fun73388: for (var _fun73388_ip = 0;;) switch (_fun73388_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._openRowKey;
                    var0 = arg0;
                    if (!(var2 === var0)) {
                        _fun73388_ip = 24;
                        continue _fun73388
                    }
                case 16:
                    var0 = null;
                    var1._openRowKey = var0;
                case 24:
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
            var4 = this;
            var3 = _closure1_slot7;
            var1 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 8;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var7 = var4.props;
            var8 = var0;
            var5 = copyDataProperties(var8, var7);
            var6 = var4.handleScroll;
            var5 = 'onScroll';
            var0[var5] = var6;
            var5 = var4.renderRow;
            var4 = 'renderItem';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {};
    var3.bounceFirstRowOnMount = var7;
    var6 = function() {
        var0 = null;
        return var0;
    };
    var3.renderQuickActions = var6;
    var1.defaultProps = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/SwipeableFastList.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 33, 4997, 6418, 2]);