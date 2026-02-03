// modules/guild_settings/native/AssetChooser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun114627: for (var _fun114627_ip = 0;;) switch (_fun114627_ip) {
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
                _fun114627_ip = 76;
                continue _fun114627;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var3 = var11.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot9 = var7;
    var7 = var6.Image;
    var _closure1_slot10 = var7;
    var7 = var6.ImageBackground;
    var _closure1_slot11 = var7;
    var6 = var6.TouchableWithoutFeedback;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot14 = var7;
    var7 = var6.Fragment;
    var _closure1_slot15 = var7;
    var6 = var6.jsxs;
    var _closure1_slot16 = var6;
    var6 = 11;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createLegacyClassComponentStyles;
    var6 = {};
    var9 = {
        'width': '100%',
        'alignItems': 'center'
    };
    var6.assetWrapper = var9;
    var9 = {
        'width': '100%',
        'height': 192,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var10 = 12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var6.asset = var9;
    var9 = {
        'position': 'absolute',
        'bottom': 10,
        'right': 10,
        'shadowColor': null,
        'shadowRadius': 10,
        'shadowOffset': null,
        'shadowOpacity': 0.2
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BLACK;
    var9.shadowColor = var12;
    var12 = {
        'height': 8,
        'width': 0
    };
    var9.shadowOffset = var12;
    var6.uploadIconWrapper = var9;
    var9 = {
        'width': 16,
        'height': 16
    };
    var6.uploadIcon = var9;
    var9 = {
        'marginTop': 8,
        'fontSize': 14,
        'lineHeight': 18
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BLUE_345;
    var9.color = var10;
    var6.remove = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot17 = var6;
    var3 = var3.PureComponent;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114631: for (var _fun114631_ip = 0;;) switch (_fun114631_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot18;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun114631_ip = 86;
                        continue _fun114631
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun114631_ip = 120;
                    continue _fun114631;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot3;
                    var2 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114633: for (var _fun114633_ip = 0;;) switch (_fun114633_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114633_ip = 150;
                                        continue _fun114633
                                    }
                                case 10:
                                    var1 = _closure3_slot0;
                                    var1 = var1.props;
                                    var7 = var1.size;
                                    var4 = var1.onChooseAsset;
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 13;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var5 = var3.bind(var2)(var1);
                                    var3 = var5.openImagePicker;
                                    var6 = 'number';
                                    var1 = typeof var7;
                                    if (!(var6 !== var1)) {
                                        _fun114633_ip = 99;
                                        continue _fun114633
                                    }
                                case 75:
                                    var6 = null;
                                    var1 = var7;
                                    if (!(var6 == var1)) {
                                        _fun114633_ip = 97;
                                        continue _fun114633
                                    }
                                case 84:
                                    var6 = {};
                                    var8 = _closure1_slot13;
                                    var6.size = var8;
                                    var1 = var6;
                                case 97:
                                    _fun114633_ip = 108;
                                    continue _fun114633;
                                case 99:
                                    var6 = {};
                                    var6.size = var7;
                                    var1 = var6;
                                case 108:
                                    var1 = var3.bind(var5)(var1);
                                    SaveGenerator(address = 117);
                                case 115:
                                    return var1;
                                case 117:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun114633_ip = 147;
                                        continue _fun114633
                                    }
                                case 123:
                                    var3 = var1.base64;
                                    var5 = null;
                                    if (!(var5 != var3)) {
                                        _fun114633_ip = 144;
                                        continue _fun114633
                                    }
                                case 135:
                                    if (!(var5 != var4)) {
                                        _fun114633_ip = 144;
                                        continue _fun114633
                                    }
                                case 139:
                                    var3 = var4.bind(var2)(var3);
                                case 144:
                                    return var2;
                                case 147:
                                    return var1;
                                case 150:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.handleChooseAsset = var2;
                    var1 = function() { // Environment: var1
                        _fun114634: for (var _fun114634_ip = 0;;) switch (_fun114634_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var2 = var0.onChooseAsset;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun114634_ip = 31;
                                    continue _fun114634
                                }
                            case 24:
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 31:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleRemoveAsset = var1;
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
        var0 = 'getSource';
        var4.key = var0;
        var0 = function() {
            _fun114635: for (var _fun114635_ip = 0;;) switch (_fun114635_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var3 = var0.rawSource;
                    var5 = var0.getSource;
                    var4 = var0.guild;
                    var0 = null;
                    var1 = var0 == var3;
                    if (var1) {
                        _fun114635_ip = 79;
                        continue _fun114635
                    }
                case 34:
                    var2 = var3.startsWith;
                    var1 = 'data:';
                    var1 = var2.bind(var3)(var1);
                    if (var1) {
                        _fun114635_ip = 67;
                        continue _fun114635
                    }
                case 54:
                    var2 = undefined;
                    var1 = 192;
                    var1 = var5.bind(var2)(var4, var1);
                    _fun114635_ip = 76;
                    continue _fun114635;
                case 67:
                    var2 = {};
                    var2.uri = var3;
                    var1 = var2;
                case 76:
                    var0 = var1;
                case 79:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun114636: for (var _fun114636_ip = 0;;) switch (_fun114636_ip) {
                case 0:
                    var10 = this;
                    var1 = _closure1_slot17;
                    var0 = var10.context;
                    var3 = undefined;
                    var12 = var1.bind(var3)(var0);
                    var0 = var10.props;
                    var6 = var0.disabled;
                    var0 = var10.getSource;
                    var5 = var0.bind(var10)();
                    var2 = _closure1_slot16;
                    var1 = _closure1_slot15;
                    var0 = {};
                    var13 = _closure1_slot14;
                    var17 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 14;
                    var4 = var7[var4];
                    var4 = var17.bind(var3)(var4);
                    var8 = var4.PressableOpacity;
                    var4 = {};
                    var11 = 'button';
                    var4.accessibilityRole = var11;
                    var15 = 15;
                    var14 = var7[var15];
                    var14 = var17.bind(var3)(var14);
                    var16 = var14.intl;
                    var14 = var16.string;
                    var7 = var7[var15];
                    var7 = var17.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7["MsUY/S"];
                    var7 = var14.bind(var16)(var7);
                    var4.accessibilityLabel = var7;
                    var7 = var12.assetWrapper;
                    var4.style = var7;
                    var7 = var10.handleChooseAsset;
                    var4.onPress = var7;
                    var4.disabled = var6;
                    var16 = _closure1_slot11;
                    var14 = {};
                    var7 = null;
                    var17 = var5;
                    if (!(var7 == var17)) {
                        _fun114636_ip = 202;
                        continue _fun114636
                    }
                case 182:
                    var19 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var18 = 16;
                    var18 = var20[var18];
                    var17 = var19.bind(var3)(var18);
                case 202:
                    var14.source = var17;
                    var17 = var12.asset;
                    var14.style = var17;
                    var17 = null;
                    if (var6) {
                        _fun114636_ip = 297;
                        continue _fun114636
                    }
                case 221:
                    var20 = _closure1_slot14;
                    var19 = _closure1_slot9;
                    var18 = {};
                    var21 = var12.uploadIconWrapper;
                    var18.style = var21;
                    var22 = _closure1_slot10;
                    var21 = {};
                    var23 = var12.uploadIcon;
                    var21.style = var23;
                    var24 = _closure1_slot1;
                    var25 = _closure1_slot2;
                    var23 = 17;
                    var23 = var25[var23];
                    var23 = var24.bind(var3)(var23);
                    var21.source = var23;
                    var21 = var20.bind(var3)(var22, var21);
                    var18.children = var21;
                    var17 = var20.bind(var3)(var19, var18);
                case 297:
                    var14.children = var17;
                    var14 = var13.bind(var3)(var16, var14);
                    var4.children = var14;
                    var8 = var13.bind(var3)(var8, var4);
                    var4 = new Array(2);
                    var4[0] = var8;
                    var8 = var7 == var5;
                    var5 = null;
                    if (var8) {
                        _fun114636_ip = 471;
                        continue _fun114636
                    }
                case 337:
                    var5 = null;
                    if (var6) {
                        _fun114636_ip = 471;
                        continue _fun114636
                    }
                case 345:
                    var8 = _closure1_slot14;
                    var7 = _closure1_slot12;
                    var6 = {};
                    var6.accessibilityRole = var11;
                    var10 = var10.handleRemoveAsset;
                    var6.onPress = var10;
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 18;
                    var9 = var11[var9];
                    var9 = var14.bind(var3)(var9);
                    var10 = var9.LegacyText;
                    var9 = {};
                    var12 = var12.remove;
                    var9.style = var12;
                    var12 = var11[var15];
                    var12 = var14.bind(var3)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var11[var15];
                    var11 = var14.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.N86XcP;
                    var11 = var12.bind(var13)(var11);
                    var9.children = var11;
                    var9 = var8.bind(var3)(var10, var9);
                    var6.children = var9;
                    var5 = var8.bind(var3)(var7, var6);
                case 471:
                    var4[1] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeContext;
    var1.contextType = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/AssetChooser.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [153, 5, 6, 7, 15, 17, 18, 31, 27, 660, 33, 1297, 671, 4004, 4897, 1234, 14670, 14671, 4871, 3150, 2]);