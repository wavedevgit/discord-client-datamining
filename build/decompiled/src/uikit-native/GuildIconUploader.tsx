// uikit-native/GuildIconUploader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun71687: for (var _fun71687_ip = 0;;) switch (_fun71687_ip) {
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
                _fun71687_ip = 76;
                continue _fun71687;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot8 = var7;
    var3 = var3.Image;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var3 = {
        'width': 82,
        'height': 82,
        'marginTop': 4
    };
    var7.container = var3;
    var3 = {};
    var11 = 10;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var10;
    var7.guildPlaceholder = var3;
    var3 = {
        'width': 82,
        'height': 82,
        'borderRadius': 41
    };
    var7.guildIcon = var3;
    var3 = 20;
    var10 = {
        'position': 'absolute',
        'top': 4294967288,
        'right': 4294967288,
        'width': 40,
        'height': 40,
        'borderRadius': 20,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var7.iconWrapperBorder = var10;
    var10 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_ACTIVE;
    var10.backgroundColor = var13;
    var7.filledIconWrapper = var10;
    var10 = {
        'position': 'absolute',
        'top': 4294967292,
        'right': 4294967292,
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.BRAND_500;
    var10.backgroundColor = var13;
    var7.emptyIconWrapper = var10;
    var10 = {
        'borderWidth': 2,
        'borderStyle': 'dashed',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var10.borderColor = var11;
    var7.emptyGuildIcon = var10;
    var10 = {
        'textAlign': 'center',
        'lineHeight': 16,
        'paddingTop': 4
    };
    var7.emptyGuildIconText = var10;
    var10 = {
        'height': 16,
        'width': 16
    };
    var7.uploadIcon = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var6 = var6.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun71691: for (var _fun71691_ip = 0;;) switch (_fun71691_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71691_ip = 69;
                        continue _fun71691
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71691_ip = 105;
                    continue _fun71691;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'renderIcon';
        var4.key = var0;
        var0 = function() {
            _fun71692: for (var _fun71692_ip = 0;;) switch (_fun71692_ip) {
                case 0:
                    var0 = this;
                    var3 = _closure1_slot13;
                    var2 = var0.context;
                    var4 = undefined;
                    var7 = var3.bind(var4)(var2);
                    var0 = var0.props;
                    var6 = var0.icon;
                    var0 = null;
                    if (!(var0 == var6)) {
                        _fun71692_ip = 323;
                        continue _fun71692
                    }
                case 41:
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot8;
                    var0 = {};
                    var8 = var7.guildIcon;
                    var5 = new Array(2);
                    var5[0] = var8;
                    var8 = var7.emptyGuildIcon;
                    var5[1] = var8;
                    var0.style = var5;
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot9;
                    var5 = {};
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 11;
                    var10 = var12[var10];
                    var12 = var11.bind(var4)(var10);
                    var11 = var12.isThemeDark;
                    var10 = _closure1_slot10;
                    var10 = var10.theme;
                    var10 = var11.bind(var12)(var10);
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    if (var10) {
                        _fun71692_ip = 155;
                        continue _fun71692
                    }
                case 141:
                    var10 = 13;
                    var10 = var13[var10];
                    var10 = var12.bind(var4)(var10);
                    _fun71692_ip = 167;
                    continue _fun71692;
                case 155:
                    var11 = 12;
                    var11 = var13[var11];
                    var10 = var12.bind(var4)(var11);
                case 167:
                    var5.source = var10;
                    var8 = var9.bind(var4)(var8, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var10 = _closure1_slot11;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var8 = 14;
                    var8 = var15[var8];
                    var8 = var14.bind(var4)(var8);
                    var9 = var8.Text;
                    var8 = {
                        'style': null,
                        'variant': 'text-xs/bold',
                        'color': 'text-default'
                    };
                    var11 = var7.emptyGuildIconText;
                    var8.style = var11;
                    var11 = 15;
                    var12 = var15[var11];
                    var12 = var14.bind(var4)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var4)(var11);
                    var11 = var11.t;
                    var11 = var11["3UB9ad"];
                    var12 = var12.bind(var13)(var11);
                    var11 = var12.toUpperCase;
                    var11 = var11.bind(var12)();
                    var8.children = var11;
                    var8 = var10.bind(var4)(var9, var8);
                    var5[1] = var8;
                    var0.children = var5;
                    var0 = var3.bind(var4)(var2, var0);
                    _fun71692_ip = 377;
                    continue _fun71692;
                case 323:
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var8 = var7.guildIcon;
                    var5 = new Array(2);
                    var5[0] = var8;
                    var7 = var7.guildPlaceholder;
                    var5[1] = var7;
                    var1.style = var5;
                    var5 = {};
                    var5.uri = var6;
                    var1.source = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 377:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'renderUpload';
        var4.key = var6;
        var6 = function() {
            _fun71693: for (var _fun71693_ip = 0;;) switch (_fun71693_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot13;
                    var1 = var0.context;
                    var3 = undefined;
                    var11 = var2.bind(var3)(var1);
                    var0 = var0.props;
                    var4 = var0.icon;
                    var13 = var0.iconBackgroundColor;
                    var2 = _closure1_slot11;
                    var1 = _closure1_slot8;
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun71693_ip = 113;
                        continue _fun71693
                    }
                case 52:
                    var0 = {};
                    var4 = var11.emptyIconWrapper;
                    var0.style = var4;
                    var6 = _closure1_slot11;
                    var5 = _closure1_slot9;
                    var4 = {};
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 17;
                    var7 = var9[var7];
                    var7 = var8.bind(var3)(var7);
                    var4.source = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    _fun71693_ip = 245;
                    continue _fun71693;
                case 113:
                    var4 = {};
                    var6 = var11.iconWrapperBorder;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = {};
                    var6.backgroundColor = var13;
                    var5[1] = var6;
                    var4.style = var5;
                    var7 = _closure1_slot11;
                    var6 = _closure1_slot8;
                    var5 = {};
                    var8 = var11.filledIconWrapper;
                    var5.style = var8;
                    var9 = _closure1_slot9;
                    var8 = {};
                    var12 = var11.uploadIcon;
                    var11 = new Array(2);
                    var11[0] = var12;
                    var12 = {};
                    var12.tintColor = var13;
                    var11[1] = var12;
                    var8.style = var11;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 16;
                    var10 = var12[var10];
                    var10 = var11.bind(var3)(var10);
                    var8.source = var10;
                    var8 = var7.bind(var3)(var9, var8);
                    var5.children = var8;
                    var5 = var7.bind(var3)(var6, var5);
                    var4.children = var5;
                    var0 = var4;
                case 245:
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun71694: for (var _fun71694_ip = 0;;) switch (_fun71694_ip) {
                case 0:
                    var9 = this;
                    var1 = _closure1_slot13;
                    var0 = var9.context;
                    var3 = undefined;
                    var10 = var1.bind(var3)(var0);
                    var0 = var9.props;
                    var11 = var0.style;
                    var4 = var0.onPress;
                    var6 = var0.icon;
                    var2 = _closure1_slot11;
                    var1 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 18;
                    var0 = var5[var0];
                    var0 = var1.bind(var3)(var0);
                    var1 = var0.PressableOpacity;
                    var0 = {};
                    var5 = 'button';
                    var0.accessibilityRole = var5;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun71694_ip = 145;
                        continue _fun71694
                    }
                case 88:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 15;
                    var6 = var13[var5];
                    var6 = var12.bind(var3)(var6);
                    var8 = var6.intl;
                    var6 = var8.string;
                    var5 = var13[var5];
                    var5 = var12.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5["MsUY/S"];
                    var5 = var6.bind(var8)(var5);
                    _fun71694_ip = 202;
                    continue _fun71694;
                case 145:
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 15;
                    var8 = var14[var6];
                    var8 = var13.bind(var3)(var8);
                    var12 = var8.intl;
                    var8 = var12.string;
                    var6 = var14[var6];
                    var6 = var13.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.VATxfe;
                    var5 = var8.bind(var12)(var6);
                case 202:
                    var0.accessibilityLabel = var5;
                    var0.onPress = var4;
                    var6 = _closure1_slot12;
                    var5 = _closure1_slot8;
                    var4 = {};
                    var12 = var10.container;
                    var8 = new Array(2);
                    var8[0] = var12;
                    var8[1] = var11;
                    var4.style = var8;
                    var8 = _closure1_slot11;
                    var7 = {};
                    var10 = var10.guildIcon;
                    var7.style = var10;
                    var10 = var9.renderIcon;
                    var10 = var10.bind(var9)();
                    var7.children = var10;
                    var8 = var8.bind(var3)(var5, var7);
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = var9.renderUpload;
                    var8 = var8.bind(var9)();
                    var7[1] = var8;
                    var4.children = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var6 = 19;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ThemeContext;
    var1.contextType = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/GuildIconUploader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 3196, 33, 1297, 671, 3206, 8965, 8966, 3941, 1234, 8967, 8968, 4902, 3159, 2]);