// modules/user_profile/native/AddFriendNicknameModal.tsx
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
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flex': 1,
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SCRIM;
    var3.backgroundColor = var9;
    var9 = 'center';
    var6.container = var3;
    var3 = {};
    var3.textAlign = var9;
    var6.title = var3;
    var3 = 18;
    var9 = {
        'marginTop': 8,
        'marginBottom': 16,
        'textAlign': 'center',
        'lineHeight': 18
    };
    var6.description = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/AddFriendNicknameModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92676: for (var _fun92676_ip = 0;;) switch (_fun92676_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.userId;
                var _closure2_slot0 = var2;
                var1 = var1.showUserProfile;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var2 = _closure1_slot11;
                var19 = var2.bind(var3)();
                var7 = _closure1_slot5;
                var4 = var7.useState;
                var2 = false;
                var5 = var4.bind(var7)(var2);
                var4 = _closure1_slot4;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var2 = 0;
                var2 = var4[var2];
                var _closure2_slot2 = var2;
                var2 = 1;
                var2 = var4[var2];
                var _closure2_slot3 = var2;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 9;
                var2 = var2[var6];
                var8 = var4.bind(var3)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getNickname;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var5.bind(var8)(var4, var2);
                var5 = var7.useRef;
                var2 = null;
                var8 = var2 != var12;
                var4 = null;
                if (!var8) {
                    _fun92676_ip = 164;
                    continue _fun92676
                }
            case 161:
                var4 = var12;
            case 164:
                var4 = var5.bind(var7)(var4);
                _closure2_slot4 = var4;
                var8 = _closure1_slot5;
                var7 = var8.useCallback;
                var5 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot4;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var4 = new Array(0);
                var13 = var7.bind(var8)(var5, var4);
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var7 = var5.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var6.bind(var7)(var5, var4);
                if (!(var2 != var12)) {
                    _fun92676_ip = 307;
                    continue _fun92676
                }
            case 250:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var4 = var7[var2];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["8pOYUE"];
                var20 = var4.bind(var5)(var2);
                _fun92676_ip = 362;
                continue _fun92676;
            case 307:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var4 = var7[var2];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.BGYkaH;
                var20 = var4.bind(var5)(var2);
            case 362:
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun92680: for (var _fun92680_ip = 0;;) switch (_fun92680_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun92680_ip = 56;
                                continue _fun92680
                            }
                        case 48:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 56:
                            return var0;
                    }
                };
                var9 = var4.bind(var5)(var1, var2);
                _closure2_slot5 = var9;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun92683: for (var _fun92683_ip = 0;;) switch (_fun92683_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun92683_ip = 168;
                                        continue _fun92683
                                    }
                                case 10:
                                    var1 = undefined;
                                    var7 = undefined;
                                    var2 = _closure2_slot2;
                                    if (var2) {
                                        _fun92683_ip = 165;
                                        continue _fun92683
                                    }
                                case 27:
                                    var4 = _closure2_slot3;
                                    var2 = true;
                                    var2 = var4.bind(var1)(var2);
                                case 38: // try_start_0
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 12;
                                    var2 = var5[var2];
                                    var6 = var4.bind(var1)(var2);
                                    var5 = var6.updateRelationship;
                                    var4 = _closure2_slot0;
                                    var2 = _closure2_slot4;
                                    var8 = var2.current;
                                    var7 = var8;
                                    var2 = null;
                                    var8 = var2 != var8;
                                    var2 = '';
                                    if (!var8) {
                                        _fun92683_ip = 99;
                                        continue _fun92683
                                    }
                                case 96:
                                    var2 = var7;
                                case 99:
                                    var2 = var5.bind(var6)(var4, var2);
                                    SaveGenerator(address = 109);
                                case 107:
                                    return var2;
                                case 109:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun92683_ip = 136;
                                        continue _fun92683
                                    }
                                case 115:
                                    var4 = _closure2_slot5;
                                    var4 = var4.bind(var1)();
                                case 123: // try_end0
                                    var5 = _closure2_slot3;
                                    var4 = false;
                                    var4 = var5.bind(var1)(var4);
                                    _fun92683_ip = 165;
                                    continue _fun92683;
                                case 136:
                                    var5 = _closure2_slot3;
                                    var4 = false;
                                    var4 = var5.bind(var1)(var4);
                                    return var2;
                                case 150: // catch_target0
                                    CatchBlockStart(arg_register = 2);
                                    var4 = _closure2_slot3;
                                    var3 = false;
                                    var3 = var4.bind(var1)(var3);
                                    throw var2;
                                case 165:
                                    return var1;
                                case 168:
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
                var10 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var19.container;
                var0.style = var4;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var4 = 13;
                var4 = var16[var4];
                var5 = var14.bind(var3)(var4);
                var4 = {};
                var8 = _closure1_slot10;
                var6 = 14;
                var6 = var16[var6];
                var7 = var14.bind(var3)(var6);
                var6 = {};
                var11 = _closure1_slot0;
                var18 = 10;
                var17 = var16[var18];
                var17 = var11.bind(var3)(var17);
                var22 = var17.intl;
                var21 = var22.string;
                var17 = var16[var18];
                var17 = var11.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["R3BPH+"];
                var17 = var21.bind(var22)(var17);
                var6.confirmText = var17;
                var6.onConfirm = var10;
                var10 = var16[var18];
                var10 = var11.bind(var3)(var10);
                var21 = var10.intl;
                var17 = var21.string;
                var10 = var16[var18];
                var10 = var11.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["ETE/oC"];
                var10 = var17.bind(var21)(var10);
                var6.cancelText = var10;
                var6.onCancel = var9;
                var10 = 15;
                var9 = var16[var10];
                var9 = var11.bind(var3)(var9);
                var17 = var9.Text;
                var9 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var19.title;
                var9.style = var21;
                var9.children = var20;
                var17 = var2.bind(var3)(var17, var9);
                var9 = new Array(3);
                var9[0] = var17;
                var10 = var16[var10];
                var10 = var11.bind(var3)(var10);
                var17 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var19 = var19.description;
                var10.style = var19;
                var19 = var16[var18];
                var19 = var11.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var16[var18];
                var18 = var11.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["NdQ+lP"];
                var18 = var19.bind(var20)(var18);
                var10.children = var18;
                var10 = var2.bind(var3)(var17, var10);
                var9[1] = var10;
                var10 = 16;
                var10 = var16[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.TextField;
                var10 = {
                    'onChange': null,
                    'autoFocus': true,
                    'placeholder': null,
                    'defaultValue': null,
                    'maxLength': 32,
                    'isClearable': true
                };
                var10.onChange = var13;
                var13 = 17;
                var13 = var16[var13];
                var14 = var14.bind(var3)(var13);
                var13 = var14.getName;
                var13 = var13.bind(var14)(var15);
                var10.placeholder = var13;
                var10.defaultValue = var12;
                var10 = var2.bind(var3)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3102, 1621, 33, 1297, 671, 566, 1234, 4561, 8091, 5823, 3938, 3942, 5454, 3237, 2]);