// components_native/QRCode.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1, arg2() {
        _fun67649: for (var _fun67649_ip = 0;;) switch (_fun67649_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot8;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot7;
                var0 = _closure1_slot20;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun67649_ip = 51;
                    continue _fun67649
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun67649_ip = 92;
                continue _fun67649;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun67649_ip = 71;
                    continue _fun67649
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot8;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        _fun67650: for (var _fun67650_ip = 0;;) switch (_fun67650_ip) {
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
                _fun67650_ip = 76;
                continue _fun67650;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = ['style', 'text', 'blur'];
    var _closure1_slot3 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var12.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var5 = var8[var4];
    var4 = arg3;
    var9 = var4.bind(var0)(var5);
    var4 = 7;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var5 = var4.View;
    var _closure1_slot10 = var5;
    var5 = var4.Image;
    var _closure1_slot11 = var5;
    var4 = var4.StyleSheet;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot13 = var5;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var8[var4];
    var6 = var7.bind(var0)(var4);
    var5 = var6.createLegacyClassComponentStyles;
    var4 = {};
    var10 = {
        'display': 'flex',
        'alignSelf': 'flex-start'
    };
    var11 = 10;
    var13 = var8[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.padding = var13;
    var11 = var8[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var10.borderRadius = var11;
    var4.qrCode = var10;
    var10 = {
        'display': 'flex',
        'alignSelf': 'flex-start',
        'alignItems': 'center',
        'justifyContent': 'center',
        'position': 'relative'
    };
    var4.qrCodeContainer = var10;
    var10 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.qrCodeOverlay = var10;
    var10 = {
        'width': 40,
        'height': 40
    };
    var4['size-40'] = var10;
    var10 = {
        'width': 60,
        'height': 60
    };
    var4['size-60'] = var10;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var5 = 'SIZE_40';
    var4.SIZE_40 = var5;
    var5 = 'SIZE_60';
    var4.SIZE_60 = var5;
    var _closure1_slot16 = var4;
    var6 = var3.Object;
    var5 = var6.freeze;
    var3 = {};
    var11 = var4.SIZE_40;
    var10 = 'size-40';
    var3[var11] = var10;
    var11 = var4.SIZE_60;
    var10 = 'size-60';
    var3[var11] = var10;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot17 = var3;
    var6 = var9.PureComponent;
    var5 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot5;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot19;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot9;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot6;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun67655: for (var _fun67655_ip = 0;;) switch (_fun67655_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot15;
                    var1 = var0.context;
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var0.props;
                    var5 = var2.style;
                    var10 = var2.text;
                    var8 = var2.blur;
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot3;
                    var9 = var1.bind(var3)(var2, var0);
                    var2 = _closure1_slot13;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var6 = var4.qrCode;
                    var4 = new Array(3);
                    var4[0] = var6;
                    var6 = {};
                    var7 = var9.bgColor;
                    var6.backgroundColor = var7;
                    var4[1] = var6;
                    var4[2] = var5;
                    var0.style = var4;
                    var5 = _closure1_slot14;
                    var4 = {};
                    var6 = {};
                    var7 = 'relative';
                    var6.position = var7;
                    var7 = var9.size;
                    var6.width = var7;
                    var7 = var9.size;
                    var6.height = var7;
                    var4.style = var6;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var6 = 11;
                    var6 = var12[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var6.value = var10;
                    var10 = 'M';
                    var6.level = var10;
                    var14 = var6;
                    var13 = var9;
                    var9 = copyDataProperties(var14, var13);
                    var7 = var2.bind(var3)(var7, var6);
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = null;
                    if (!var8) {
                        _fun67655_ip = 262;
                        continue _fun67655
                    }
                case 207:
                    var10 = _closure1_slot13;
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 12;
                    var8 = var12[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var11 = _closure1_slot12;
                    var11 = var11.absoluteFill;
                    var8.style = var11;
                    var11 = 'dark';
                    var8.blurTheme = var11;
                    var7 = var10.bind(var3)(var9, var8);
                case 262:
                    var6[1] = var7;
                    var4.children = var6;
                    var4 = var5.bind(var3)(var1, var4);
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
    var5 = var5.bind(var0)(var6);
    var _closure1_slot18 = var5;
    var6 = 13;
    var10 = var8[var6];
    var10 = var7.bind(var0)(var10);
    var10 = var10.ThemeContext;
    var5.contextType = var10;
    var10 = {
        'size': 128,
        'bgColor': '#ffffff',
        'fgColor': '#000000'
    };
    var5.defaultProps = var10;
    var9 = var9.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot5;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot19;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot9;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot6;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() {
            _fun67658: for (var _fun67658_ip = 0;;) switch (_fun67658_ip) {
                case 0:
                    var10 = this;
                    var1 = _closure1_slot15;
                    var0 = var10.context;
                    var3 = undefined;
                    var13 = var1.bind(var3)(var0);
                    var0 = var10.props;
                    var1 = var0.overlaySize;
                    var6 = var0.blur;
                    var0 = _closure1_slot17;
                    var5 = null;
                    if (!(var5 == var1)) {
                        _fun67658_ip = 59;
                        continue _fun67658
                    }
                case 49:
                    var2 = _closure1_slot16;
                    var1 = var2.SIZE_40;
                case 59:
                    var12 = var0[var1];
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot10;
                    var0 = {};
                    var4 = var13.qrCodeContainer;
                    var0.style = var4;
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot18;
                    var4 = {};
                    var15 = var10.props;
                    var16 = var4;
                    var10 = copyDataProperties(var16, var15);
                    var11 = false;
                    var10 = 'blur';
                    var4[var10] = var11;
                    var7 = var8.bind(var3)(var7, var4);
                    var4 = new Array(3);
                    var4[0] = var7;
                    var7 = {};
                    var11 = var13.qrCodeOverlay;
                    var10 = new Array(2);
                    var10[0] = var11;
                    var11 = _closure1_slot12;
                    var11 = var11.absoluteFill;
                    var10[1] = var11;
                    var7.style = var10;
                    var11 = _closure1_slot11;
                    var10 = {};
                    var12 = var13[var12];
                    var10.style = var12;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var12 = 14;
                    var12 = var14[var12];
                    var12 = var13.bind(var3)(var12);
                    var10.source = var12;
                    var10 = var8.bind(var3)(var11, var10);
                    var7.children = var10;
                    var7 = var8.bind(var3)(var1, var7);
                    var4[1] = var7;
                    var5 = null;
                    if (!var6) {
                        _fun67658_ip = 273;
                        continue _fun67658
                    }
                case 227:
                    var8 = _closure1_slot13;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 15;
                    var6 = var10[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = {};
                    var9 = _closure1_slot12;
                    var9 = var9.absoluteFill;
                    var6.style = var9;
                    var5 = var8.bind(var3)(var7, var6);
                case 273:
                    var4[2] = var5;
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
    var1 = var1.bind(var0)(var9);
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ThemeContext;
    var1.contextType = var6;
    var6 = {
        'size': 144,
        'bgColor': '#ffffff',
        'fgColor': '#000000'
    };
    var1.defaultProps = var6;
    var6 = 16;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'components_native/QRCode.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.QRCodeOverlaySizes = var4;
    var2.QR_CODE_OVERLAY_SIZE_MAP = var3;
    var2.QRCodeWithOverlay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 33, 1297, 671, 8390, 4073, 3159, 8401, 8402, 2]);