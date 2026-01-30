// modules/mfa/native/components/ClipboardCopyInput.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'alignSelf': 'stretch'
    };
    var3.inputContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mfa/native/components/ClipboardCopyInput.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ClipboardCopyInput, environment: var1
        var0 = arg0;
        var12 = var0.label;
        var11 = var0.placeholder;
        var17 = var0.isValidClipboardCode;
        var14 = var0.maxLength;
        var13 = var0.onChangeCode;
        var15 = var0.error;
        var9 = var0.textContentType;
        var8 = var0.autoComplete;
        var7 = var0.keyboardType;
        var6 = var0.isDisabled;
        var2 = _closure1_slot9;
        var3 = undefined;
        var4 = var2.bind(var3)();
        var18 = _closure1_slot4;
        var2 = var18.useRef;
        var5 = null;
        var2 = var2.bind(var18)(var5);
        var _closure2_slot0 = var2;
        var2 = var18.useRef;
        var10 = var2.bind(var18)(var5);
        var _closure2_slot1 = var10;
        var5 = _closure1_slot0;
        var16 = _closure1_slot2;
        var2 = 7;
        var2 = var16[var2];
        var21 = var5.bind(var3)(var2);
        var20 = var21.useStateFromStores;
        var2 = _closure1_slot6;
        var19 = new Array(1);
        var19[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot6;
            var0 = var1.getState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var21 = var20.bind(var21)(var19, var2);
        var _closure2_slot2 = var21;
        var20 = _closure1_slot1;
        var2 = 8;
        var19 = var16[var2];
        var19 = var20.bind(var3)(var19);
        var19 = var19.bind(var3)(var13);
        var2 = var16[var2];
        var2 = var20.bind(var3)(var2);
        var20 = var2.bind(var3)(var17);
        var _closure2_slot3 = var20;
        var17 = var18.useEffect;
        var2 = new Array(3);
        var2[0] = var21;
        var2[1] = var20;
        var2[2] = var19;
        var1 = function() { // Environment: var1
            _fun86330: for (var _fun86330_ip = 0;;) switch (_fun86330_ip) {
                case 0:
                    var1 = function() { // Original name: _run, environment: var0
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun86333: for (var _fun86333_ip = 0;;) switch (_fun86333_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun86333_ip = 237;
                                            continue _fun86333
                                        }
                                    case 12:
                                        var3 = global;
                                        var5 = var3.Promise;
                                        var1 = var5.prototype;
                                        var4 = Object.create(var1, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var8 = function(arg0) { // Environment: var2
                                            var0 = global;
                                            var3 = var0.setTimeout;
                                            var2 = undefined;
                                            var1 = arg0;
                                            var0 = 500;
                                            var0 = var3.bind(var2)(var1, var0);
                                            return var0;
                                        };
                                        var9 = var4;
                                        var1 = new var9[var5](var8, var7);
                                        var1 = var1 instanceof Object ? var1 : var4;
                                        SaveGenerator(address = 51);
                                    case 49:
                                        return var1;
                                    case 51:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun86333_ip = 234;
                                            continue _fun86333
                                        }
                                    case 60:
                                        var4 = var3.Promise;
                                        var3 = var4.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var8 = function(arg0) { // Environment: var2
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 9;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.runAfterInteractions;
                                            var0 = arg0;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var9 = var3;
                                        var2 = new var9[var4](var8, var7);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        SaveGenerator(address = 97);
                                    case 95:
                                        return var2;
                                    case 97:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun86333_ip = 231;
                                            continue _fun86333
                                        }
                                    case 106:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 10;
                                        var3 = var4[var3];
                                        var4 = undefined;
                                        var5 = var5.bind(var4)(var3);
                                        var3 = var5.getString;
                                        var3 = var3.bind(var5)();
                                        SaveGenerator(address = 145);
                                    case 143:
                                        return var3;
                                    case 145:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun86333_ip = 228;
                                            continue _fun86333
                                        }
                                    case 151:
                                        var5 = var3.trim;
                                        var7 = var5.bind(var3)();
                                        var6 = _closure2_slot0;
                                        var6 = var6.current;
                                        if (!(var7 !== var6)) {
                                            _fun86333_ip = 225;
                                            continue _fun86333
                                        }
                                    case 177:
                                        var6 = _closure2_slot0;
                                        var6.current = var7;
                                        var6 = _closure2_slot3;
                                        var6 = var6.bind(var4)(var7);
                                        if (!var6) {
                                            _fun86333_ip = 225;
                                            continue _fun86333
                                        }
                                    case 199:
                                        var5 = _closure2_slot1;
                                        var6 = var5.current;
                                        var5 = null;
                                        if (!(var5 != var6)) {
                                            _fun86333_ip = 225;
                                            continue _fun86333
                                        }
                                    case 214:
                                        var5 = var6.setText;
                                        var5 = var5.bind(var6)(var7);
                                    case 225:
                                        return var4;
                                    case 228:
                                        return var3;
                                    case 231:
                                        return var2;
                                    case 234:
                                        return var1;
                                    case 237:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot0 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var1 = var1.ACTIVE;
                    if (!(var2 === var1)) {
                        _fun86330_ip = 50;
                        continue _fun86330
                    }
                case 37:
                    var1 = function() { // Original name: run, environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var17.bind(var18)(var1, var2);
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.inputContainer;
        var0.style = var4;
        var4 = 11;
        var4 = var16[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.TextInput;
        var4 = {
            'ref': null,
            'autoFocus': true,
            'autoCorrect': false,
            'autoCapitalize': 'none'
        };
        var4.ref = var10;
        var10 = true;
        var4.errorMessage = var15;
        var4.maxLength = var14;
        var4.onChange = var13;
        var4.label = var12;
        var4.accessibilityLabel = var12;
        var4.placeholder = var11;
        var4.isClearable = var10;
        var4.textContentType = var9;
        var4.autoComplete = var8;
        var4.keyboardType = var7;
        var4.isDisabled = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5245, 660, 33, 1297, 566, 7498, 5812, 5252, 5362, 2]);