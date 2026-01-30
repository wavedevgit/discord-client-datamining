// components_native/common/IconUploader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'right': 4294967289,
        'top': 4294967289
    };
    var3.uploadIcon = var8;
    var8 = {
        'height': 64,
        'width': 64,
        'borderRadius': 32
    };
    var3.avatar = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/IconUploader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: IconUploader, environment: var1
        _fun72703: for (var _fun72703_ip = 0;;) switch (_fun72703_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.disabled;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun72703_ip = 18;
                    continue _fun72703
                }
            case 16:
                var1 = false;
            case 18:
                var7 = var5.makeURL;
                if (!(var7 === var4)) {
                    _fun72703_ip = 35;
                    continue _fun72703
                }
            case 28:
                var7 = function() { // Original name: o, environment: var2
                    var0 = undefined;
                    return var0;
                };
            case 35:
                var3 = var5.type;
                if (!(var3 === var4)) {
                    _fun72703_ip = 48;
                    continue _fun72703
                }
            case 44:
                var3 = 'avatar';
            case 48:
                var11 = var5.name;
                var0 = var5.icon;
                var6 = var5.onUpload;
                var _closure2_slot0 = var6;
                var6 = var5.style;
                var14 = var5.iconStyle;
                var5 = var5.onChangeIconPress;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var4;
                var10 = _closure1_slot4;
                var9 = var10.useRef;
                var8 = false;
                var8 = var9.bind(var10)(var8);
                _closure2_slot2 = var8;
                var9 = null;
                if (!(var9 != var0)) {
                    _fun72703_ip = 154;
                    continue _fun72703
                }
            case 124:
                var10 = /^data:/;
                var8 = var10.test;
                var8 = var8.bind(var10)(var0);
                var13 = var0;
                if (var8) {
                    _fun72703_ip = 159;
                    continue _fun72703
                }
            case 154:
                var13 = var7.bind(var4)(var0);
            case 159:
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun72707: for (var _fun72707_ip = 0;;) switch (_fun72707_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun72707_ip = 162;
                                        continue _fun72707
                                    }
                                case 10:
                                    var1 = _closure2_slot1;
                                    var6 = null;
                                    if (!(var6 != var1)) {
                                        _fun72707_ip = 33;
                                        continue _fun72707
                                    }
                                case 23:
                                    var3 = _closure2_slot1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)();
                                case 33:
                                    var1 = _closure2_slot2;
                                    var1 = var1.current;
                                    if (var1) {
                                        _fun72707_ip = 157;
                                        continue _fun72707
                                    }
                                case 45:
                                    var3 = _closure2_slot2;
                                    var1 = true;
                                    var3.current = var1;
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 5;
                                    var1 = var4[var1];
                                    var5 = undefined;
                                    var4 = var3.bind(var5)(var1);
                                    var3 = var4.openImagePicker;
                                    var1 = {};
                                    var7 = _closure1_slot7;
                                    var1.size = var7;
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 107);
                                case 105:
                                    return var1;
                                case 107:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun72707_ip = 154;
                                        continue _fun72707
                                    }
                                case 113:
                                    var4 = var1.base64;
                                    if (!(var6 != var4)) {
                                        _fun72707_ip = 140;
                                        continue _fun72707
                                    }
                                case 123:
                                    var3 = _closure2_slot0;
                                    if (!(var6 != var3)) {
                                        _fun72707_ip = 140;
                                        continue _fun72707
                                    }
                                case 131:
                                    var3 = _closure2_slot0;
                                    var3 = var3.bind(var5)(var4);
                                case 140:
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var3.current = var2;
                                    _fun72707_ip = 157;
                                    continue _fun72707;
                                case 154:
                                    return var1;
                                case 157:
                                    var1 = undefined;
                                    return var1;
                                case 162:
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
                var8 = var2.bind(var4)();
                var2 = 'guild';
                if (!(var2 !== var3)) {
                    _fun72703_ip = 257;
                    continue _fun72703
                }
            case 178:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.makeSource;
                var10 = var2.bind(var3)(var13);
                var7 = _closure1_slot8;
                var3 = _closure1_slot6;
                var2 = {};
                var12 = _closure1_slot11;
                var15 = var12.avatar;
                var12 = new Array(2);
                var12[0] = var15;
                var12[1] = var14;
                var2.style = var12;
                var2.source = var10;
                var10 = var7.bind(var4)(var3, var2);
                _fun72703_ip = 353;
                continue _fun72703;
            case 257:
                var0 = var9 == var0;
                if (!var0) {
                    _fun72703_ip = 268;
                    continue _fun72703
                }
            case 264:
                var0 = var9 == var11;
            case 268:
                var10 = undefined;
                if (var0) {
                    _fun72703_ip = 353;
                    continue _fun72703
                }
            case 273:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var7 = 6;
                var0 = var12[var7];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.style = var14;
                var0.icon = var13;
                var0.value = var11;
                var11 = _closure1_slot0;
                var7 = var12[var7];
                var7 = var11.bind(var4)(var7);
                var7 = var7.GuildIconSizes;
                var7 = var7.XLARGE;
                var0.size = var7;
                var7 = true;
                var0.animate = var7;
                var10 = var3.bind(var4)(var2, var0);
            case 353:
                var3 = _closure1_slot10;
                var2 = _closure1_slot9;
                var0 = {};
                var7 = new Array(2);
                var7[0] = var10;
                var9 = null;
                if (var1) {
                    _fun72703_ip = 430;
                    continue _fun72703
                }
            case 376:
                var12 = _closure1_slot8;
                var11 = _closure1_slot6;
                var10 = {};
                var13 = _closure1_slot11;
                var13 = var13.uploadIcon;
                var10.style = var13;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 8;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var10.source = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 430:
                var7[1] = var9;
                var0.children = var7;
                var7 = var3.bind(var4)(var2, var0);
                var0 = var7;
                if (var1) {
                    _fun72703_ip = 578;
                    continue _fun72703
                }
            case 453:
                var3 = _closure1_slot8;
                var2 = _closure1_slot5;
                var1 = {};
                var1.style = var6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 9;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var9 = 'button';
                var5.accessibilityRole = var9;
                var9 = 10;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["MsUY/S"];
                var9 = var10.bind(var11)(var9);
                var5.accessibilityLabel = var9;
                var5.onPress = var8;
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 578:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 33, 3972, 7356, 1417, 9079, 4864, 1234, 2]);