// components_native/StreamPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2) { // Original name: _callSuper, environment: var1
        _fun69234: for (var _fun69234_ip = 0;;) switch (_fun69234_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot18;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun69234_ip = 51;
                    continue _fun69234
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun69234_ip = 92;
                continue _fun69234;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun69234_ip = 71;
                    continue _fun69234
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun69235: for (var _fun69235_ip = 0;;) switch (_fun69235_ip) {
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
                _fun69235_ip = 76;
                continue _fun69235;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot18 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Image;
    var _closure1_slot8 = var7;
    var12 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var7 = 9;
    var3 = var5[var7];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var3 = {};
    var17 = var12.absoluteFillObject;
    var18 = var3;
    var12 = copyDataProperties(var18, var17);
    var14 = 'center';
    var12 = 'alignItems';
    var3[var12] = var14;
    var12 = 'justifyContent';
    var3[var12] = var14;
    var14 = 20;
    var12 = 'paddingLeft';
    var3[var12] = var14;
    var12 = 'paddingRight';
    var3[var12] = var14;
    var8.wrapper = var3;
    var14 = {
        'textAlign': 'center',
        'fontSize': 14,
        'lineHeight': 18,
        'marginTop': 16
    };
    var3 = 14;
    var12 = 10;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_MUTED;
    var14.color = var15;
    var8.text = var14;
    var14 = {};
    var15 = '100%';
    var14.width = var15;
    var8.fallbackImage = var14;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot13 = var8;
    var9 = var6.PureComponent;
    var8 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: DefaultFallback, environment: var0
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot17;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            _fun69240: for (var _fun69240_ip = 0;;) switch (_fun69240_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot13;
                    var1 = var0.context;
                    var3 = undefined;
                    var6 = var2.bind(var3)(var1);
                    var0 = var0.props;
                    var9 = var0.theme;
                    var2 = _closure1_slot11;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var4 = var6.wrapper;
                    var0.style = var4;
                    var5 = _closure1_slot8;
                    var4 = {};
                    var8 = 'contain';
                    var4.resizeMode = var8;
                    var6 = var6.fallbackImage;
                    var4.style = var6;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 11;
                    var6 = var10[var6];
                    var8 = var8.bind(var3)(var6);
                    var6 = var8.isThemeDark;
                    var6 = var6.bind(var8)(var9);
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    if (var6) {
                        _fun69240_ip = 133;
                        continue _fun69240
                    }
                case 119:
                    var6 = 13;
                    var6 = var9[var6];
                    var6 = var8.bind(var3)(var6);
                    _fun69240_ip = 145;
                    continue _fun69240;
                case 133:
                    var7 = 12;
                    var7 = var9[var7];
                    var6 = var8.bind(var3)(var7);
                case 145:
                    var4.source = var6;
                    var4 = var2.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var8.bind(var0)(var9);
    var _closure1_slot14 = var9;
    var8 = var5[var3];
    var8 = var4.bind(var0)(var8);
    var8 = var8.ThemeContext;
    var9.contextType = var8;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {
        'flex': 1,
        'width': '100%',
        'height': null,
        'aspectRatio': 1.7777777777777777
    };
    var10.height = var0;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var14;
    var7.touchable = var10;
    var10 = {};
    var10.flex = var11;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BLACK;
    var10.backgroundColor = var12;
    var7.imageContainer = var10;
    var10 = {};
    var10.flex = var11;
    var7.image = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot15 = var7;
    var7 = var6.PureComponent;
    var6 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: StreamPreview, environment: var0
            var5 = this;
            var10 = 0;
            var6 = copyRestArgs(var10);
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot17;
            var0 = new Array(0);
            var10 = var0;
            var9 = var6;
            var8 = 0;
            var6 = arraySpread(var10, var9, var8);
            var0 = var2.bind(var3)(var5, var4, var0);
            var _closure3_slot0 = var0;
            var2 = {
                'isImageLoaded': false,
                'isImageErrored': false
            };
            var0.state = var2;
            var2 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.setState;
                var0 = {
                    'isImageLoaded': false,
                    'isImageErrored': false
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0.handleLoadStart = var2;
            var2 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.setState;
                var0 = {};
                var3 = true;
                var0.isImageLoaded = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0.handleLoad = var2;
            var1 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.setState;
                var0 = {};
                var3 = true;
                var0.isImageErrored = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0.handleError = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: value, environment: var0
            _fun69246: for (var _fun69246_ip = 0;;) switch (_fun69246_ip) {
                case 0:
                    var16 = this;
                    var1 = _closure1_slot15;
                    var0 = var16.context;
                    var3 = undefined;
                    var7 = var1.bind(var3)(var0);
                    var0 = var16.props;
                    var18 = var0.url;
                    var11 = var0.ctaText;
                    var13 = var0.isFetching;
                    var2 = var0.renderFallback;
                    var12 = var0.style;
                    var5 = var0.children;
                    var1 = var0.theme;
                    var6 = var0.onPress;
                    var10 = var0.disabled;
                    var0 = var16.state;
                    var8 = var0.isImageLoaded;
                    var9 = var0.isImageErrored;
                    var0 = null;
                    if (!(var0 != var18)) {
                        _fun69246_ip = 223;
                        continue _fun69246
                    }
                case 102:
                    if (var13) {
                        _fun69246_ip = 223;
                        continue _fun69246
                    }
                case 105:
                    if (var9) {
                        _fun69246_ip = 223;
                        continue _fun69246
                    }
                case 108:
                    var9 = undefined;
                    if (var8) {
                        _fun69246_ip = 133;
                        continue _fun69246
                    }
                case 113:
                    var14 = var0 == var2;
                    var8 = undefined;
                    if (var14) {
                        _fun69246_ip = 130;
                        continue _fun69246
                    }
                case 122:
                    var14 = true;
                    var8 = var2.bind(var3)(var14, var1);
                case 130:
                    var9 = var8;
                case 133:
                    var15 = _closure1_slot11;
                    var14 = _closure1_slot8;
                    var8 = {};
                    var17 = 'contain';
                    var8.resizeMode = var17;
                    var17 = var7.image;
                    var8.style = var17;
                    var17 = {};
                    var17.uri = var18;
                    var18 = 'force-cache';
                    var17.cache = var18;
                    var8.source = var17;
                    var17 = var16.handleLoadStart;
                    var8.onLoadStart = var17;
                    var17 = var16.handleLoad;
                    var8.onLoad = var17;
                    var16 = var16.handleError;
                    var8.onError = var16;
                    var8 = var15.bind(var3)(var14, var8);
                    _fun69246_ip = 243;
                    continue _fun69246;
                case 223:
                    var14 = var0 == var2;
                    var0 = undefined;
                    if (var14) {
                        _fun69246_ip = 238;
                        continue _fun69246
                    }
                case 232:
                    var0 = var2.bind(var3)(var13, var1);
                case 238:
                    var9 = var0;
                    var8 = undefined;
                case 243:
                    var2 = _closure1_slot12;
                    var1 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var0 = 16;
                    var0 = var13[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.PressableOpacity;
                    var0 = {
                        'accessibilityRole': 'button',
                        'accessibilityLabel': null,
                        'activeOpacity': 0.6
                    };
                    var0.accessibilityLabel = var11;
                    var13 = var7.touchable;
                    var11 = new Array(2);
                    var11[0] = var13;
                    var11[1] = var12;
                    var0.style = var11;
                    var0.disabled = var10;
                    var0.onPress = var6;
                    var6 = _closure1_slot9;
                    var4 = {};
                    var7 = var7.imageContainer;
                    var4.style = var7;
                    var7 = new Array(2);
                    var7[0] = var9;
                    var7[1] = var8;
                    var4.children = var7;
                    var6 = var2.bind(var3)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var7);
    var _closure1_slot16 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var6.contextType = var3;
    var3 = {};
    var7 = function(arg0, arg1) { // Original name: renderFallback, environment: var1
        _fun69247: for (var _fun69247_ip = 0;;) switch (_fun69247_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = _closure1_slot14;
                var1 = {};
                var4 = arg1;
                var1.theme = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 15;
                var6 = var8[var4];
                var0 = undefined;
                var6 = var5.bind(var0)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var8[var4];
                var4 = var5.bind(var0)(var4);
                var5 = var4.t;
                var4 = arg0;
                if (var4) {
                    _fun69247_ip = 88;
                    continue _fun69247
                }
            case 73:
                var4 = var5.uQZTBV;
                var4 = var6.bind(var7)(var4);
                _fun69247_ip = 101;
                continue _fun69247;
            case 88:
                var5 = var5.NQ7H8V;
                var4 = var6.bind(var7)(var5);
            case 101:
                var1.caption = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var3.renderFallback = var7;
    var6.defaultProps = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/StreamPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConnectedStreamPreview, environment: var1
        var4 = arg0;
        var0 = var4.stream;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var2 = var0.ownerId;
        var8 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 17;
        var1 = var5[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var1 = var1.bind(var3)(var7, var6, var2);
        var7 = var1.previewUrl;
        var6 = var1.isLoading;
        var2 = _closure1_slot0;
        var1 = 18;
        var1 = var5[var1];
        var8 = var2.bind(var3)(var1);
        var5 = var8.useStateFromStores;
        var1 = _closure1_slot10;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var1
            var0 = _closure1_slot10;
            var0 = var0.theme;
            return var0;
        };
        var5 = var5.bind(var8)(var2, var1);
        var2 = _closure1_slot11;
        var1 = _closure1_slot16;
        var0 = {};
        var11 = var0;
        var10 = var4;
        var4 = copyDataProperties(var11, var10);
        var4 = 'url';
        var0[var4] = var7;
        var4 = 'isFetching';
        var0[var4] = var6;
        var4 = 'theme';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 3155, 33, 1297, 671, 3165, 8627, 8628, 3118, 1234, 4864, 8629, 566, 2]);