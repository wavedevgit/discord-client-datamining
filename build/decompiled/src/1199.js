// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun13047: for (var _fun13047_ip = 0;;) switch (_fun13047_ip) {
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
                _fun13047_ip = 74;
                continue _fun13047;
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
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var4 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot7 = var3;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = var4.Appearance;
    var _closure1_slot8 = var5;
    var5 = var4.Image;
    var _closure1_slot9 = var5;
    var5 = var4.Text;
    var _closure1_slot10 = var5;
    var4 = var4.TouchableOpacity;
    var _closure1_slot11 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: FeedbackButton, environment: var5
            _fun13051: for (var _fun13051_ip = 0;;) switch (_fun13051_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var9 = new Array(1);
                    var0 = arg0;
                    var9[0] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun13051_ip = 73;
                        continue _fun13051
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun13051_ip = 107;
                    continue _fun13051;
                case 73:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 107:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 7;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.lazyLoadFeedbackIntegration;
                    var1 = var1.bind(var2)();
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
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: componentDidMount, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot8;
            var2 = var3.addChangeListener;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.forceUpdate;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1._themeListener = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() { // Original name: componentWillUnmount, environment: var5
            _fun13054: for (var _fun13054_ip = 0;;) switch (_fun13054_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._themeListener;
                    if (!var1) {
                        _fun13054_ip = 28;
                        continue _fun13054
                    }
                case 12:
                    var1 = var0._themeListener;
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
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            _fun13055: for (var _fun13055_ip = 0;;) switch (_fun13055_ip) {
                case 0:
                    var1 = this;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 8;
                    var0 = var3[var0];
                    var13 = undefined;
                    var2 = var4.bind(var13)(var0);
                    var0 = var2.getTheme;
                    var11 = var0.bind(var2)();
                    var2 = global;
                    var8 = var2.Object;
                    var7 = var8.assign;
                    var10 = var2.Object;
                    var9 = var10.assign;
                    var0 = 9;
                    var0 = var3[var0];
                    var0 = var4.bind(var13)(var0);
                    var5 = var0.defaultButtonConfiguration;
                    var0 = {};
                    var5 = var9.bind(var10)(var0, var5);
                    var0 = var1.props;
                    var0 = var7.bind(var8)(var5, var0);
                    var9 = {};
                    var8 = var2.Object;
                    var5 = var8.assign;
                    var10 = var2.Object;
                    var7 = var10.assign;
                    var12 = 10;
                    var3 = var3[var12];
                    var4 = var4.bind(var13)(var3);
                    var3 = var4.defaultButtonStyles;
                    var3 = var3.bind(var4)(var11);
                    var4 = var3.triggerButton;
                    var3 = {};
                    var4 = var7.bind(var10)(var3, var4);
                    var3 = var1.props;
                    var10 = var3.styles;
                    var7 = null;
                    var3 = undefined;
                    if (!(var7 !== var10)) {
                        _fun13055_ip = 191;
                        continue _fun13055
                    }
                case 179:
                    var3 = undefined;
                    if (!(var13 !== var10)) {
                        _fun13055_ip = 191;
                        continue _fun13055
                    }
                case 185:
                    var3 = var10.triggerButton;
                case 191:
                    var3 = var5.bind(var8)(var4, var3);
                    var9.triggerButton = var3;
                    var8 = var2.Object;
                    var5 = var8.assign;
                    var14 = var2.Object;
                    var10 = var14.assign;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var12];
                    var4 = var4.bind(var13)(var3);
                    var3 = var4.defaultButtonStyles;
                    var3 = var3.bind(var4)(var11);
                    var4 = var3.triggerText;
                    var3 = {};
                    var4 = var10.bind(var14)(var3, var4);
                    var3 = var1.props;
                    var10 = var3.styles;
                    var3 = undefined;
                    if (!(var7 !== var10)) {
                        _fun13055_ip = 295;
                        continue _fun13055
                    }
                case 283:
                    var3 = undefined;
                    if (!(var13 !== var10)) {
                        _fun13055_ip = 295;
                        continue _fun13055
                    }
                case 289:
                    var3 = var10.triggerText;
                case 295:
                    var3 = var5.bind(var8)(var4, var3);
                    var9.triggerText = var3;
                    var4 = var2.Object;
                    var3 = var4.assign;
                    var10 = var2.Object;
                    var8 = var10.assign;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var12];
                    var5 = var5.bind(var13)(var2);
                    var2 = var5.defaultButtonStyles;
                    var2 = var2.bind(var5)(var11);
                    var5 = var2.triggerIcon;
                    var2 = {};
                    var2 = var8.bind(var10)(var2, var5);
                    var1 = var1.props;
                    var5 = var1.styles;
                    var1 = undefined;
                    if (!(var7 !== var5)) {
                        _fun13055_ip = 399;
                        continue _fun13055
                    }
                case 387:
                    var1 = undefined;
                    if (!(var1 !== var5)) {
                        _fun13055_ip = 399;
                        continue _fun13055
                    }
                case 393:
                    var1 = var5.triggerIcon;
                case 399:
                    var1 = var3.bind(var4)(var2, var1);
                    var9.triggerIcon = var1;
                    var5 = _closure1_slot7;
                    var4 = var5.createElement;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var1 = var9.triggerButton;
                    var2.style = var1;
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var1 = 11;
                    var1 = var14[var1];
                    var1 = var12.bind(var13)(var1);
                    var1 = var1.showFeedbackWidget;
                    var2.onPress = var1;
                    var1 = var0.triggerAriaLabel;
                    var2.accessibilityLabel = var1;
                    var8 = var5.createElement;
                    var7 = _closure1_slot9;
                    var1 = {};
                    var10 = {};
                    var11 = 12;
                    var11 = var14[var11];
                    var11 = var12.bind(var13)(var11);
                    var11 = var11.feedbackIcon;
                    var10.uri = var11;
                    var1.source = var10;
                    var10 = var9.triggerIcon;
                    var1.style = var10;
                    var1 = var8.bind(var5)(var7, var1);
                    var8 = var5.createElement;
                    var7 = _closure1_slot10;
                    var6 = {};
                    var9 = var9.triggerText;
                    var6.style = var9;
                    var9 = 'sentry-feedback-button';
                    var6.testID = var9;
                    var0 = var0.triggerLabel;
                    var15 = var8.bind(var5)(var7, var6, var0);
                    var19 = var5;
                    var18 = var3;
                    var17 = var2;
                    var16 = var1;
                    var0 = var19[var4](var18, var17, var16, var15, var14);
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.FeedbackButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1197, 1198, 1200, 1201, 1196, 1202]);