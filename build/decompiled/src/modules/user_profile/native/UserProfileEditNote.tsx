// modules/user_profile/native/UserProfileEditNote.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOTE_MAX_LENGTH;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingVertical': 24,
        'paddingHorizontal': 16,
        'gap': 8
    };
    var3.contentContainer = var8;
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var9 = 12;
    var8.padding = var9;
    var3.inputContainer = var8;
    var8 = {
        'paddingVertical': 0,
        'paddingHorizontal': 0
    };
    var3.input = var8;
    var8 = {
        'flexGrow': 1,
        'lineHeight': 20
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileEditNote.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91873: for (var _fun91873_ip = 0;;) switch (_fun91873_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.userId;
                var _closure2_slot0 = var12;
                var6 = var1.onSave;
                var _closure2_slot1 = var6;
                var5 = var1.onClose;
                var _closure2_slot2 = var5;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot9;
                var10 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var14 = var1.bind(var2)();
                var _closure2_slot3 = var14;
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var12);
                var9 = var1.loading;
                var7 = var1.note;
                var _closure2_slot4 = var7;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = null;
                var11 = var1 != var7;
                var1 = '';
                if (!var11) {
                    _fun91873_ip = 151;
                    continue _fun91873
                }
            case 148:
                var1 = var7;
            case 151:
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var13 = var2[var1];
                _closure2_slot5 = var13;
                var1 = 1;
                var11 = var2[var1];
                _closure2_slot6 = var11;
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var1 = new Array(6);
                var1[0] = var14;
                var1[1] = var12;
                var1[2] = var7;
                var1[3] = var13;
                var1[4] = var6;
                var1[5] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var5 = var5[var0];
                    var0 = undefined;
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.getHeaderConditionalBackButton;
                    var5 = function() { // Environment: var4
                        var0 = global;
                        var2 = var0.Promise;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = function(arg0) { // Environment: var0
                            _fun91876: for (var _fun91876_ip = 0;;) switch (_fun91876_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = {};
                                    var7 = _closure2_slot4;
                                    var6 = null;
                                    var7 = var6 != var7;
                                    var6 = '';
                                    if (!var7) {
                                        _fun91876_ip = 60;
                                        continue _fun91876
                                    }
                                case 56:
                                    var6 = _closure2_slot4;
                                case 60:
                                    var5 = _closure2_slot5;
                                    var5 = var6 !== var5;
                                    var1.hasEdits = var5;
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var4 = 11;
                                    var4 = var6[var4];
                                    var4 = var5.bind(var0)(var4);
                                    var4 = var4.dismissKeyboard;
                                    var1.onHasEdits = var4;
                                    var4 = function() {
                                        _fun91877: for (var _fun91877_ip = 0;;) switch (_fun91877_ip) {
                                            case 0:
                                                var2 = _closure2_slot6;
                                                var3 = _closure2_slot4;
                                                var1 = null;
                                                var3 = var1 != var3;
                                                var1 = '';
                                                if (!var3) {
                                                    _fun91877_ip = 28;
                                                    continue _fun91877
                                                }
                                            case 24:
                                                var1 = _closure2_slot4;
                                            case 28:
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                                return var0;
                                        }
                                    };
                                    var1.resetPending = var4;
                                    var3 = function() {
                                        _fun91878: for (var _fun91878_ip = 0;;) switch (_fun91878_ip) {
                                            case 0:
                                                var2 = _closure5_slot0;
                                                var0 = undefined;
                                                var1 = true;
                                                var1 = var2.bind(var0)(var1);
                                                var3 = _closure2_slot2;
                                                var2 = null;
                                                if (!(var2 != var3)) {
                                                    _fun91878_ip = 37;
                                                    continue _fun91878
                                                }
                                            case 29:
                                                var1 = _closure2_slot2;
                                                var1 = var1.bind(var0)();
                                            case 37:
                                                return var0;
                                        }
                                    };
                                    var1.onConfirm = var3;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var5 = var6.bind(var7)(var5);
                    var1.headerLeft = var5;
                    var4 = function arg0() {
                        _fun91879: for (var _fun91879_ip = 0;;) switch (_fun91879_ip) {
                            case 0:
                                var3 = _closure1_slot7;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 12;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderTextButton;
                                var0 = {};
                                var9 = arg0;
                                var10 = var0;
                                var4 = copyDataProperties(var10, var9);
                                var4 = 13;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var5 = var5.bind(var6)(var4);
                                var4 = 'label';
                                var0[var4] = var5;
                                var6 = _closure2_slot4;
                                var5 = null;
                                var6 = var5 != var6;
                                var5 = '';
                                if (!var6) {
                                    _fun91879_ip = 127;
                                    continue _fun91879
                                }
                            case 123:
                                var5 = _closure2_slot4;
                            case 127:
                                var4 = _closure2_slot5;
                                var5 = var5 === var4;
                                var4 = 'disabled';
                                var0[var4] = var5;
                                var5 = function() {
                                    _fun91880: for (var _fun91880_ip = 0;;) switch (_fun91880_ip) {
                                        case 0:
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 14;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var5 = var2.bind(var0)(var1);
                                            var4 = var5.updateNote;
                                            var3 = _closure2_slot0;
                                            var2 = _closure2_slot5;
                                            var2 = var4.bind(var5)(var3, var2);
                                            var2 = _closure2_slot1;
                                            var3 = null;
                                            if (!(var3 != var2)) {
                                                _fun91880_ip = 66;
                                                continue _fun91880
                                            }
                                        case 58:
                                            var2 = _closure2_slot1;
                                            var2 = var2.bind(var0)();
                                        case 66:
                                            var2 = _closure2_slot2;
                                            if (!(var3 != var2)) {
                                                _fun91880_ip = 82;
                                                continue _fun91880
                                            }
                                        case 74:
                                            var1 = _closure2_slot2;
                                            var1 = var1.bind(var0)();
                                        case 82:
                                            return var0;
                                    }
                                };
                                var4 = 'onPress';
                                var0[var4] = var5;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                        }
                    };
                    var1.headerRight = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var10.contentContainer;
                var0.contentContainerStyle = var4;
                var4 = 'always';
                var0.keyboardShouldPersistTaps = var4;
                var7 = _closure1_slot7;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 15;
                var4 = var14[var4];
                var4 = var17.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var6 = 'text-sm/semibold';
                var4.variant = var6;
                var12 = 13;
                var6 = var14[var12];
                var6 = var17.bind(var3)(var6);
                var16 = var6.intl;
                var15 = var16.string;
                var6 = var14[var12];
                var6 = var17.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["mQKv+v"];
                var6 = var15.bind(var16)(var6);
                var4.children = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot1;
                var5 = 16;
                var5 = var14[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'value': null,
                    'onChange': null,
                    'multiline': true,
                    'numberOfLines': 8,
                    'maxLength': null,
                    'autoFocus': true,
                    'autoCorrect': false,
                    'showBorder': false,
                    'showTopContainer': false,
                    'textAlignVertical': 'top',
                    'autoCapitalize': 'none'
                };
                var5.value = var13;
                var5.onChange = var11;
                var11 = _closure1_slot6;
                var5.maxLength = var11;
                var11 = var10.input;
                var5.style = var11;
                var11 = var10.inputContainer;
                var5.inputContainerStyle = var11;
                var10 = var10.text;
                var5.inputTextStyle = var10;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var12];
                var11 = var14.bind(var3)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var10 = var10[var12];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun91873_ip = 519;
                    continue _fun91873
                }
            case 504:
                var9 = var10.tRZR6T;
                var9 = var11.bind(var13)(var9);
                _fun91873_ip = 532;
                continue _fun91873;
            case 519:
                var10 = var10["WLKx/9"];
                var9 = var11.bind(var13)(var10);
            case 532:
                var5.placeholder = var9;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["mQKv+v"];
                var8 = var9.bind(var10)(var8);
                var5.accessibilityLabel = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 1469, 11947, 4705, 9118, 3718, 8901, 1234, 11954, 3941, 5387, 2]);