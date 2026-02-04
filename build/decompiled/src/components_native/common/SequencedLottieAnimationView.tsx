// components_native/common/SequencedLottieAnimationView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun78843: for (var _fun78843_ip = 0;;) switch (_fun78843_ip) {
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
                _fun78843_ip = 76;
                continue _fun78843;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = ['source', 'style'];
    var _closure1_slot2 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var6 = true;
    var3.value = var6;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.View;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun78847: for (var _fun78847_ip = 0;;) switch (_fun78847_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun78847_ip = 86;
                        continue _fun78847
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun78847_ip = 120;
                    continue _fun78847;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0.animationRef = var2;
                    var2 = var0.props;
                    var2 = var2.nextScene;
                    var0.currentScene = var2;
                    var2 = false;
                    var0.isUnmounted = var2;
                    var2 = function() { // Environment: var1
                        _fun78848: for (var _fun78848_ip = 0;;) switch (_fun78848_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.onSceneComplete;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun78848_ip = 41;
                                    continue _fun78848
                                }
                            case 24:
                                var0 = _closure3_slot0;
                                var1 = var0.currentScene;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleComplete = var2;
                    var1 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1.animationRef = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleSetRef = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var0 = var2.props;
            var1 = var0.nextScene;
            var0 = var2.playScene;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function() {
            _fun78851: for (var _fun78851_ip = 0;;) switch (_fun78851_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var1 = var0.nextScene;
                    var0 = var2.currentScene;
                    if (!(var1 !== var0)) {
                        _fun78851_ip = 35;
                        continue _fun78851
                    }
                case 24:
                    var0 = var2.playScene;
                    var0 = var0.bind(var2)(var1);
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'playScene';
        var4.key = var6;
        var6 = function arg0() {
            _fun78852: for (var _fun78852_ip = 0;;) switch (_fun78852_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.props;
                    var4 = var2.sceneSegments;
                    var2 = var4[var1];
                    var3 = var0.currentScene;
                    var5 = var4[var3];
                    var4 = var0.animationRef;
                    var3 = null;
                    var3 = var3 == var4;
                    if (var3) {
                        _fun78852_ip = 97;
                        continue _fun78852
                    }
                case 46:
                    var4 = var0.currentScene;
                    var4 = var1 !== var4;
                    if (!var4) {
                        _fun78852_ip = 75;
                        continue _fun78852
                    }
                case 59:
                    var7 = var2.BEG;
                    var6 = var5.BEG;
                    var4 = var7 === var6;
                case 75:
                    if (!var4) {
                        _fun78852_ip = 94;
                        continue _fun78852
                    }
                case 78:
                    var6 = var2.END;
                    var5 = var5.END;
                    var4 = var6 === var5;
                case 94:
                    var3 = var4;
                case 97:
                    if (var3) {
                        _fun78852_ip = 130;
                        continue _fun78852
                    }
                case 100:
                    var5 = var0.animationRef;
                    var4 = var5.play;
                    var3 = var2.BEG;
                    var2 = var2.END;
                    var2 = var4.bind(var5)(var3, var2);
                case 130:
                    var0.currentScene = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun78853: for (var _fun78853_ip = 0;;) switch (_fun78853_ip) {
                case 0:
                    var6 = this;
                    var2 = var6.props;
                    var8 = var2.source;
                    var9 = var2.style;
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot2;
                    var3 = undefined;
                    var7 = var1.bind(var3)(var2, var0);
                    var2 = 'object';
                    var1 = typeof var8;
                    var0 = undefined;
                    if (!(var2 === var1)) {
                        _fun78853_ip = 79;
                        continue _fun78853
                    }
                case 50:
                    var1 = var8.uri;
                    var0 = undefined;
                    if (var1) {
                        _fun78853_ip = 79;
                        continue _fun78853
                    }
                case 60:
                    var1 = global;
                    var2 = var1.JSON;
                    var1 = var2.stringify;
                    var0 = var1.bind(var2)(var8);
                case 79:
                    var10 = undefined;
                    if (!(var10 !== var0)) {
                        _fun78853_ip = 109;
                        continue _fun78853
                    }
                case 85:
                    var0 = {};
                    var2 = var8.w;
                    var1 = var8.h;
                    var1 = var2 / var1;
                    var0.aspectRatio = var1;
                    var10 = var0;
                case 109:
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var5 = new Array(2);
                    var5[0] = var10;
                    var5[1] = var9;
                    var0.style = var5;
                    var5 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var4 = 9;
                    var4 = var11[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var4.source = var8;
                    var8 = new Array(2);
                    var8[0] = var10;
                    var8[1] = var9;
                    var4.style = var8;
                    var13 = var4;
                    var12 = var7;
                    var7 = copyDataProperties(var13, var12);
                    var8 = var6.handleSetRef;
                    var7 = 'ref';
                    var4[var7] = var8;
                    var7 = var6.handleComplete;
                    var6 = 'onAnimationFinish';
                    var4[var6] = var7;
                    var4 = var2.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {};
    var3.autoPlay = var6;
    var1.defaultProps = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/SequencedLottieAnimationView.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 33, 6600, 2]);