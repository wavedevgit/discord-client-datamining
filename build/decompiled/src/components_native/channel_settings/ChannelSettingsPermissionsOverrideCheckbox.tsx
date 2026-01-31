// components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var _closure1_slot3 = var7;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var13 = 2;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var10 = 3;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.spacing;
    var12 = var3.PX_4;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.radii;
    var14 = var3.md;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var15;
    var9.borderRadius = var14;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var9.height = var15;
    var9.paddingVertical = var12;
    var15 = var12 / var13;
    var9.paddingHorizontal = var15;
    var15 = 'row';
    var9.flexDirection = var15;
    var3.ternaryCheckBox = var9;
    var9 = {};
    var14 = var14 - var12;
    var9.borderRadius = var14;
    var12 = var12 / var13;
    var9.marginHorizontal = var12;
    var12 = 'center';
    var9.justifyContent = var12;
    var12 = '100%';
    var9.height = var12;
    var3.iconWrapper = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginHorizontal = var12;
    var3.icon = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_CRITICAL;
    var9.backgroundColor = var12;
    var3.denyActive = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_FEEDBACK_CRITICAL;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var12 = var12 - var13;
    var9.borderRadius = var12;
    var3.denySelected = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_POSITIVE;
    var9.backgroundColor = var12;
    var3.allowActive = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.ICON_FEEDBACK_POSITIVE;
    var9.backgroundColor = var12;
    var3.allowSelected = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_SELECTED;
    var9.backgroundColor = var12;
    var3.passthroughSelected = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_BACKGROUND_HOVER;
    var9.backgroundColor = var10;
    var3.passthroughActive = var9;
    var9 = {};
    var10 = 0.3;
    var9.opacity = var10;
    var3.disabled = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var7 = 5;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var8 = var3.DENY;
    var3 = new Array(3);
    var3[0] = var8;
    var8 = var5[var7];
    var8 = var4.bind(var0)(var8);
    var8 = var8.PASSTHROUGH;
    var3[1] = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ALLOW;
    var3[2] = var7;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun109165: for (var _fun109165_ip = 0;;) switch (_fun109165_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.value;
                var _closure2_slot0 = var1;
                var7 = var0.disabled;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun109165_ip = 27;
                    continue _fun109165
                }
            case 25:
                var7 = false;
            case 27:
                var0 = var0.onValueChange;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot6;
                var9 = var0.bind(var3)();
                _closure2_slot2 = var9;
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var9.ternaryCheckBox;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = var7;
                if (!var8) {
                    _fun109165_ip = 91;
                    continue _fun109165
                }
            case 86:
                var8 = var9.disabled;
            case 91:
                var6[1] = var8;
                var0.style = var6;
                var6 = 'auto';
                if (!var7) {
                    _fun109165_ip = 110;
                    continue _fun109165
                }
            case 106:
                var6 = 'none';
            case 110:
                var0.pointerEvents = var6;
                var6 = 'radiogroup';
                var0.accessibilityRole = var6;
                var6 = _closure1_slot7;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun109166: for (var _fun109166_ip = 0;;) switch (_fun109166_ip) {
                        case 0:
                            var10 = arg0;
                            var _closure3_slot0 = var10;
                            var4 = _closure1_slot5;
                            var3 = _closure1_slot3;
                            var2 = {};
                            var1 = 'radio';
                            var2.accessibilityRole = var1;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 5;
                            var5 = var1[var6];
                            var1 = undefined;
                            var5 = var7.bind(var1)(var5);
                            var5 = var5.DENY;
                            if (!(var10 !== var5)) {
                                _fun109166_ip = 239;
                                continue _fun109166
                            }
                        case 65:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var6];
                            var5 = var7.bind(var1)(var5);
                            var5 = var5.ALLOW;
                            if (!(var10 !== var5)) {
                                _fun109166_ip = 180;
                                continue _fun109166
                            }
                        case 92:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var6];
                            var5 = var7.bind(var1)(var5);
                            var7 = var5.PASSTHROUGH;
                            var5 = undefined;
                            if (!(var10 === var7)) {
                                _fun109166_ip = 178;
                                continue _fun109166
                            }
                        case 121:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 6;
                            var8 = var13[var7];
                            var8 = var12.bind(var1)(var8);
                            var11 = var8.intl;
                            var8 = var11.string;
                            var7 = var13[var7];
                            var7 = var12.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.ujC3ZS;
                            var5 = var8.bind(var11)(var7);
                        case 178:
                            _fun109166_ip = 237;
                            continue _fun109166;
                        case 180:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 6;
                            var8 = var13[var7];
                            var8 = var12.bind(var1)(var8);
                            var11 = var8.intl;
                            var8 = var11.string;
                            var7 = var13[var7];
                            var7 = var12.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.RzDfSk;
                            var5 = var8.bind(var11)(var7);
                        case 237:
                            _fun109166_ip = 296;
                            continue _fun109166;
                        case 239:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 6;
                            var8 = var13[var7];
                            var8 = var12.bind(var1)(var8);
                            var11 = var8.intl;
                            var8 = var11.string;
                            var7 = var13[var7];
                            var7 = var12.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7["6639O5"];
                            var5 = var8.bind(var11)(var7);
                        case 296:
                            var2.accessibilityLabel = var5;
                            var5 = {};
                            var7 = _closure2_slot0;
                            var7 = var7 === var10;
                            var5.selected = var7;
                            var2.accessibilityState = var5;
                            var5 = function arg0() {
                                _fun109167: for (var _fun109167_ip = 0;;) switch (_fun109167_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.pressed;
                                        var4 = _closure2_slot0;
                                        var0 = _closure3_slot0;
                                        var0 = var4 === var0;
                                        if (var0) {
                                            _fun109167_ip = 45;
                                            continue _fun109167
                                        }
                                    case 30:
                                        if (var3) {
                                            _fun109167_ip = 45;
                                            continue _fun109167
                                        }
                                    case 33:
                                        var3 = _closure2_slot2;
                                        var3 = var3.iconWrapper;
                                        return var3;
                                    case 45:
                                        var4 = _closure3_slot0;
                                        var7 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var6 = 5;
                                        var5 = var2[var6];
                                        var2 = undefined;
                                        var5 = var7.bind(var2)(var5);
                                        var5 = var5.DENY;
                                        if (!(var5 !== var4)) {
                                            _fun109167_ip = 192;
                                            continue _fun109167
                                        }
                                    case 84:
                                        var7 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var6];
                                        var5 = var7.bind(var2)(var5);
                                        var5 = var5.ALLOW;
                                        if (!(var5 !== var4)) {
                                            _fun109167_ip = 166;
                                            continue _fun109167
                                        }
                                    case 111:
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var6];
                                        var3 = var5.bind(var2)(var3);
                                        var3 = var3.PASSTHROUGH;
                                        var2 = undefined;
                                        if (!(var3 === var4)) {
                                            _fun109167_ip = 216;
                                            continue _fun109167
                                        }
                                    case 140:
                                        var4 = _closure2_slot2;
                                        if (var0) {
                                            _fun109167_ip = 155;
                                            continue _fun109167
                                        }
                                    case 147:
                                        var3 = var4.passthroughActive;
                                        _fun109167_ip = 161;
                                        continue _fun109167;
                                    case 155:
                                        var3 = var4.passthroughSelected;
                                    case 161:
                                        var2 = var3;
                                        _fun109167_ip = 216;
                                        continue _fun109167;
                                    case 166:
                                        var4 = _closure2_slot2;
                                        if (var0) {
                                            _fun109167_ip = 181;
                                            continue _fun109167
                                        }
                                    case 173:
                                        var3 = var4.allowActive;
                                        _fun109167_ip = 187;
                                        continue _fun109167;
                                    case 181:
                                        var3 = var4.allowSelected;
                                    case 187:
                                        var2 = var3;
                                        _fun109167_ip = 216;
                                        continue _fun109167;
                                    case 192:
                                        var3 = _closure2_slot2;
                                        if (var0) {
                                            _fun109167_ip = 207;
                                            continue _fun109167
                                        }
                                    case 199:
                                        var0 = var3.denyActive;
                                        _fun109167_ip = 213;
                                        continue _fun109167;
                                    case 207:
                                        var0 = var3.denySelected;
                                    case 213:
                                        var2 = var0;
                                    case 216:
                                        var0 = new Array(2);
                                        var0[0] = var2;
                                        var1 = _closure2_slot2;
                                        var1 = var1.iconWrapper;
                                        var0[1] = var1;
                                        return var0;
                                }
                            };
                            var2.style = var5;
                            var0 = function() {
                                _fun109168: for (var _fun109168_ip = 0;;) switch (_fun109168_ip) {
                                    case 0:
                                        var2 = _closure2_slot1;
                                        var1 = null;
                                        var1 = var1 != var2;
                                        if (!var1) {
                                            _fun109168_ip = 31;
                                            continue _fun109168
                                        }
                                    case 16:
                                        var3 = _closure2_slot0;
                                        var2 = _closure3_slot0;
                                        var1 = var3 !== var2;
                                    case 31:
                                        if (!var1) {
                                            _fun109168_ip = 52;
                                            continue _fun109168
                                        }
                                    case 34:
                                        var2 = _closure2_slot1;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2.onPress = var0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.DENY;
                            if (!(var10 !== var0)) {
                                _fun109166_ip = 717;
                                continue _fun109166
                            }
                        case 375:
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var5.bind(var1)(var0);
                            var0 = var0.ALLOW;
                            if (!(var10 !== var0)) {
                                _fun109166_ip = 577;
                                continue _fun109166
                            }
                        case 405:
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var6];
                            var0 = var5.bind(var1)(var0);
                            var5 = var0.PASSTHROUGH;
                            var0 = null;
                            if (!(var10 === var5)) {
                                _fun109166_ip = 572;
                                continue _fun109166
                            }
                        case 437:
                            var7 = _closure1_slot5;
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 9;
                            var5 = var11[var5];
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.SlashIcon;
                            var5 = {};
                            var11 = 'sm';
                            var5.size = var11;
                            var11 = _closure2_slot2;
                            var11 = var11.icon;
                            var5.style = var11;
                            var11 = _closure2_slot0;
                            if (!(var11 !== var10)) {
                                _fun109166_ip = 531;
                                continue _fun109166
                            }
                        case 498:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var11 = 3;
                            var11 = var13[var11];
                            var11 = var12.bind(var1)(var11);
                            var11 = var11.colors;
                            var11 = var11.INTERACTIVE_TEXT_DEFAULT;
                            _fun109166_ip = 562;
                            continue _fun109166;
                        case 531:
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 3;
                            var12 = var14[var12];
                            var12 = var13.bind(var1)(var12);
                            var12 = var12.colors;
                            var11 = var12.WHITE;
                        case 562:
                            var5.color = var11;
                            var0 = var7.bind(var1)(var6, var5);
                        case 572:
                            _fun109166_ip = 712;
                            continue _fun109166;
                        case 577:
                            var7 = _closure1_slot5;
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 8;
                            var5 = var11[var5];
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.CheckmarkLargeBoldIcon;
                            var5 = {};
                            var11 = 'sm';
                            var5.size = var11;
                            var11 = _closure2_slot2;
                            var11 = var11.icon;
                            var5.style = var11;
                            var11 = _closure2_slot0;
                            if (!(var11 !== var10)) {
                                _fun109166_ip = 671;
                                continue _fun109166
                            }
                        case 638:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var11 = 3;
                            var11 = var13[var11];
                            var11 = var12.bind(var1)(var11);
                            var11 = var11.colors;
                            var11 = var11.ICON_FEEDBACK_POSITIVE;
                            _fun109166_ip = 702;
                            continue _fun109166;
                        case 671:
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var12 = 3;
                            var12 = var14[var12];
                            var12 = var13.bind(var1)(var12);
                            var12 = var12.colors;
                            var11 = var12.WHITE;
                        case 702:
                            var5.color = var11;
                            var0 = var7.bind(var1)(var6, var5);
                        case 712:
                            _fun109166_ip = 852;
                            continue _fun109166;
                        case 717:
                            var7 = _closure1_slot5;
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 7;
                            var5 = var11[var5];
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.DenyIcon;
                            var5 = {};
                            var11 = 'sm';
                            var5.size = var11;
                            var11 = _closure2_slot2;
                            var11 = var11.icon;
                            var5.style = var11;
                            var8 = _closure2_slot0;
                            if (!(var8 !== var10)) {
                                _fun109166_ip = 811;
                                continue _fun109166
                            }
                        case 778:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var8 = 3;
                            var8 = var11[var8];
                            var8 = var10.bind(var1)(var8);
                            var8 = var8.colors;
                            var8 = var8.ICON_FEEDBACK_CRITICAL;
                            _fun109166_ip = 842;
                            continue _fun109166;
                        case 811:
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 3;
                            var9 = var11[var9];
                            var9 = var10.bind(var1)(var9);
                            var9 = var9.colors;
                            var8 = var9.WHITE;
                        case 842:
                            var5.color = var8;
                            var0 = var7.bind(var1)(var6, var5);
                        case 852:
                            var2.children = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = 'checkbox-';
                            var0 = arg1;
                            var0 = var6.bind(var5)(var0);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 1297, 3055, 1234, 10310, 8244, 14007, 2]);