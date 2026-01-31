// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun13009: for (var _fun13009_ip = 0;;) switch (_fun13009_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot3;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot2;
                var0 = _closure1_slot12;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun13009_ip = 51;
                    continue _fun13009
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun13009_ip = 92;
                continue _fun13009;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun13009_ip = 71;
                    continue _fun13009
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot3;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun13010: for (var _fun13010_ip = 0;;) switch (_fun13010_ip) {
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
                _fun13010_ip = 74;
                continue _fun13010;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = function() { // Original name: NOOP_SET_VISIBILITY, environment: var1
        var0 = undefined;
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var4 = _closure1_slot6;
        var3 = function() { // Original name: FeedbackManager, environment: var1
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = '_feedbackComponentName';
        var0.key = var2;
        var2 = function() { // Original name: get, environment: var1
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Subclasses must override feedbackComponentName';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0.get = var2;
        var2 = new Array(6);
        var2[0] = var0;
        var0 = {};
        var5 = 'initialize';
        var0.key = var5;
        var5 = function(arg0) { // Original name: initialize, environment: var1
            var1 = arg0;
            var0 = this;
            var0._setVisibility = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() { // Original name: reset, environment: var1
            var1 = this;
            var0 = false;
            var1._isVisible = var0;
            var0 = _closure1_slot7;
            var1._setVisibility = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'show';
        var0.key = var5;
        var5 = function() { // Original name: show, environment: var1
            _fun13019: for (var _fun13019_ip = 0;;) switch (_fun13019_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._setVisibility;
                    var0 = _closure1_slot7;
                    if (!(var1 === var0)) {
                        _fun13019_ip = 85;
                        continue _fun13019
                    }
                case 20:
                    var0 = global;
                    var3 = var0.console;
                    var1 = var3.warn;
                    var12 = var2._feedbackComponentName;
                    var10 = var2._feedbackComponentName;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var13 = '[Sentry] ';
                    var11 = " requires 'Sentry.wrap(RootComponent)' to be called before 'show";
                    var9 = "()'.";
                    var0 = var13[var6](var12, var11, var10, var9, var8);
                    var0 = var1.bind(var3)(var0);
                    _fun13019_ip = 104;
                    continue _fun13019;
                case 85:
                    var1 = true;
                    var2._isVisible = var1;
                    var0 = var2._setVisibility;
                    var0 = var0.bind(var2)(var1);
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'hide';
        var0.key = var5;
        var5 = function() { // Original name: hide, environment: var1
            _fun13020: for (var _fun13020_ip = 0;;) switch (_fun13020_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._setVisibility;
                    var0 = _closure1_slot7;
                    if (!(var1 === var0)) {
                        _fun13020_ip = 75;
                        continue _fun13020
                    }
                case 20:
                    var0 = global;
                    var3 = var0.console;
                    var1 = var3.warn;
                    var6 = var2._feedbackComponentName;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var4 = '[Sentry] ';
                    var0 = " requires 'Sentry.wrap(RootComponent)' before interacting with the widget.";
                    var0 = var5.bind(var4)(var6, var0);
                    var0 = var1.bind(var3)(var0);
                    _fun13020_ip = 94;
                    continue _fun13020;
                case 75:
                    var1 = false;
                    var2._isVisible = var1;
                    var0 = var2._setVisibility;
                    var0 = var0.bind(var2)(var1);
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'isFormVisible';
        var0.key = var5;
        var1 = function() { // Original name: isFormVisible, environment: var1
            var0 = this;
            var0 = var0._isVisible;
            return var0;
        };
        var0.value = var1;
        var2[5] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var6 = var3.bind(var0)();
    var3 = false;
    var6._isVisible = var3;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: FeedbackWidgetManager, environment: var1
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot5;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot11;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var0 = {};
        var5 = '_feedbackComponentName';
        var0.key = var5;
        var1 = function() { // Original name: get, environment: var1
            var0 = 'FeedbackWidget';
            return var0;
        };
        var0.get = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var5 = var3.bind(var0)(var6);
    var _closure1_slot8 = var5;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: FeedbackButtonManager, environment: var1
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot5;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot11;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var0 = {};
        var5 = '_feedbackComponentName';
        var0.key = var5;
        var1 = function() { // Original name: get, environment: var1
            var0 = 'FeedbackButton';
            return var0;
        };
        var0.get = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var4 = var3.bind(var0)(var6);
    var _closure1_slot9 = var4;
    var3 = function(arg0) { // Environment: var1
        var4 = function() { // Original name: ScreenshotButtonManager, environment: var1
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot5;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot11;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot6;
        var0 = {};
        var5 = '_feedbackComponentName';
        var0.key = var5;
        var1 = function() { // Original name: get, environment: var1
            var0 = 'ScreenshotButton';
            return var0;
        };
        var0.get = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var3 = var3.bind(var0)(var6);
    var _closure1_slot10 = var3;
    var6 = 200;
    var2.PULL_DOWN_CLOSE_THRESHOLD = var6;
    var2.SLIDE_ANIMATION_DURATION = var6;
    var2.BACKGROUND_ANIMATION_DURATION = var6;
    var2.FeedbackWidgetManager = var5;
    var2.FeedbackButtonManager = var4;
    var2.ScreenshotButtonManager = var3;
    var3 = function() { // Original name: showFeedbackButton, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.lazyLoadAutoInjectFeedbackButtonIntegration;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot9;
        var1 = var2.show;
        var1 = var1.bind(var2)();
        return var0;
    };
    var2.showFeedbackButton = var3;
    var3 = function() { // Original name: hideFeedbackButton, environment: var1
        var1 = _closure1_slot9;
        var0 = var1.hide;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.hideFeedbackButton = var3;
    var3 = function() { // Original name: showFeedbackWidget, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.lazyLoadAutoInjectFeedbackIntegration;
        var2 = var2.bind(var3)();
        var2 = _closure1_slot8;
        var1 = var2.show;
        var1 = var1.bind(var2)();
        return var0;
    };
    var2.showFeedbackWidget = var3;
    var3 = function() { // Original name: showScreenshotButton, environment: var1
        _fun13034: for (var _fun13034_ip = 0;;) switch (_fun13034_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isWeb;
                var4 = var2.bind(var3)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                if (var4) {
                    _fun13034_ip = 84;
                    continue _fun13034
                }
            case 46:
                var4 = 5;
                var4 = var3[var4];
                var5 = var2.bind(var0)(var4);
                var4 = var5.lazyLoadAutoInjectScreenshotButtonIntegration;
                var4 = var4.bind(var5)();
                var4 = _closure1_slot10;
                var1 = var4.show;
                var1 = var1.bind(var4)();
                _fun13034_ip = 118;
                continue _fun13034;
            case 84:
                var1 = 7;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.debug;
                var2 = var3.warn;
                var1 = 'ScreenshotButton is not supported on Web.';
                var1 = var2.bind(var3)(var1);
            case 118:
                return var0;
        }
    };
    var2.showScreenshotButton = var3;
    var3 = function() { // Original name: hideScreenshotButton, environment: var1
        var1 = _closure1_slot10;
        var0 = var1.hide;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.hideScreenshotButton = var3;
    var3 = function() { // Original name: resetFeedbackButtonManager, environment: var1
        var1 = _closure1_slot9;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.resetFeedbackButtonManager = var3;
    var3 = function() { // Original name: resetFeedbackWidgetManager, environment: var1
        var1 = _closure1_slot8;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.resetFeedbackWidgetManager = var3;
    var1 = function() { // Original name: resetScreenshotButtonManager, environment: var1
        var1 = _closure1_slot10;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.resetScreenshotButtonManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 1197, 999, 817]);