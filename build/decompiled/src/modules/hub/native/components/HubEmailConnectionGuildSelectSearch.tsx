// modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx
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
    var12 = 0;
    var3 = var5[var12];
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
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var6 = var3.Image;
    var _closure1_slot7 = var6;
    var3 = var3.FlatList;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HubEmailConnectionSteps;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.Fonts;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'height': '100%'
    };
    var3.flex = var8;
    var8 = {
        'flex': 1,
        'width': '100%'
    };
    var9 = 8;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.scrollContainer = var8;
    var8 = {};
    var8.paddingHorizontal = var12;
    var3.fauxHeader = var8;
    var12 = 'center';
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginTop': 64,
        'paddingHorizontal': 16
    };
    var3.emptyWrapper = var8;
    var8 = {};
    var13 = 24;
    var8.marginBottom = var13;
    var3.emptyStateImage = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var8.color = var13;
    var8.textAlign = var12;
    var3.emptyStateText = var8;
    var8 = {
        'marginBottom': 4,
        'textAlign': 'center'
    };
    var3.emptyStateTitle = var8;
    var8 = {};
    var11 = var11.PRIMARY_BOLD;
    var8.fontFamily = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var8.color = var11;
    var11 = 'uppercase';
    var8.textTransform = var11;
    var3.proTip = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var3.divider = var8;
    var8 = {
        'color': null,
        'alignSelf': 'center',
        'fontSize': 14,
        'marginBottom': 8
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var3.error = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = function() {
        var0 = _closure1_slot13;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var8.emptyWrapper;
        var0.style = var4;
        var7 = _closure1_slot10;
        var6 = _closure1_slot7;
        var4 = {};
        var9 = var8.emptyStateImage;
        var4.style = var9;
        var10 = _closure1_slot1;
        var12 = _closure1_slot2;
        var9 = 9;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var4.source = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var11 = _closure1_slot0;
        var5 = 10;
        var5 = var12[var5];
        var5 = var11.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var8.emptyStateTitle;
        var5.style = var8;
        var8 = 11;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["6HXiuE"];
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hub/native/components/HubEmailConnectionGuildSelectSearch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80438: for (var _fun80438_ip = 0;;) switch (_fun80438_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildsInfo;
                var1 = var0.email;
                var _closure2_slot0 = var1;
                var0 = var0.onClose;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var0 = _closure1_slot13;
                var8 = var0.bind(var3)();
                var _closure2_slot2 = var8;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 12;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot3 = var0;
                var15 = _closure1_slot5;
                var1 = var15.useState;
                var0 = '';
                var0 = var1.bind(var15)(var0);
                var12 = _closure1_slot4;
                var11 = 2;
                var0 = var12.bind(var3)(var0, var11);
                var10 = 0;
                var1 = var0[var10];
                var _closure2_slot4 = var1;
                var4 = 1;
                var14 = var0[var4];
                var1 = var15.useState;
                var0 = null;
                var1 = var1.bind(var15)(var0);
                var1 = var12.bind(var3)(var1, var11);
                var2 = var1[var10];
                var1 = var1[var4];
                var _closure2_slot5 = var1;
                var13 = var15.useState;
                var1 = false;
                var1 = var13.bind(var15)(var1);
                var1 = var12.bind(var3)(var1, var11);
                var10 = var1[var10];
                var _closure2_slot6 = var10;
                var1 = var1[var4];
                var _closure2_slot7 = var1;
                var4 = var7.filter;
                var1 = function(arg0) { // Environment: var9
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = _closure2_slot4;
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var4 = var0.name;
                    var0 = var4.toLowerCase;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var11 = var4.bind(var7)(var1);
                var4 = _closure1_slot1;
                var1 = 14;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var10 = var1.bottom;
                var1 = var0 == var2;
                var0 = undefined;
                if (var1) {
                    _fun80438_ip = 259;
                    continue _fun80438
                }
            case 249:
                var1 = var2.getAnyErrorMessage;
                var0 = var1.bind(var2)();
            case 259:
                _closure2_slot8 = var0;
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var7 = _closure1_slot10;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 17;
                var4 = var19[var4];
                var4 = var18.bind(var3)(var4);
                var6 = var4.FauxHeader;
                var4 = {};
                var12 = var8.fauxHeader;
                var4.style = var12;
                var13 = _closure1_slot1;
                var12 = 18;
                var12 = var19[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var15 = 11;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.nL2wKD;
                var15 = var16.bind(var17)(var15);
                var12.placeholder = var15;
                var12.onChange = var14;
                var14 = function() {
                    var1 = _closure2_slot3;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var12.onClose = var14;
                var12 = var7.bind(var3)(var13, var12);
                var4.children = var12;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot8;
                var5 = {};
                var12 = 'always';
                var5.keyboardShouldPersistTaps = var12;
                var5.data = var11;
                var11 = function() {
                    _fun80441: for (var _fun80441_ip = 0;;) switch (_fun80441_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var3 = null;
                            var1 = var3 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun80441_ip = 96;
                                continue _fun80441
                            }
                        case 18:
                            var2 = _closure2_slot8;
                            var1 = '';
                            var0 = null;
                            if (!(var1 !== var2)) {
                                _fun80441_ip = 96;
                                continue _fun80441
                            }
                        case 32:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 19;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.LegacyText;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var6 = var6.error;
                            var1.style = var6;
                            var5 = _closure2_slot8;
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 96:
                            return var0;
                    }
                };
                var5.ListHeaderComponent = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.HubEmailConnectionGuildSelectRow;
                    var0 = {};
                    var7 = var4.id;
                    var _closure3_slot0 = var7;
                    var6 = _closure1_slot3;
                    var5 = function*() { // Environment: var5
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun80444: for (var _fun80444_ip = 0;;) switch (_fun80444_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun80444_ip = 255;
                                        continue _fun80444
                                    }
                                case 10:
                                    var3 = _closure2_slot5;
                                    var4 = undefined;
                                    var1 = null;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot7;
                                    var9 = true;
                                    var1 = var1.bind(var4)(var9);
                                case 37: // try_start_0 // try_start_1
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var1 = 15;
                                    var1 = var6[var1];
                                    var7 = var5.bind(var4)(var1);
                                    var6 = var7.sendVerificationEmail;
                                    var5 = _closure2_slot0;
                                    var1 = _closure3_slot0;
                                    var1 = var6.bind(var7)(var5, var9, var1);
                                    SaveGenerator(address = 88);
                                case 86:
                                    return var1;
                                case 88:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun80444_ip = 149;
                                        continue _fun80444
                                    }
                                case 94:
                                    var7 = _closure2_slot3;
                                    var6 = var7.push;
                                    var3 = _closure1_slot9;
                                    var5 = var3.VERIFY_PIN;
                                    var3 = {};
                                    var9 = _closure2_slot0;
                                    var3.email = var9;
                                    var9 = _closure2_slot1;
                                    var3.onClose = var9;
                                    var8 = _closure3_slot0;
                                    var3.guildId = var8;
                                    var3 = var6.bind(var7)(var5, var3);
                                case 147: // try_end0
                                    _fun80444_ip = 226;
                                    continue _fun80444;
                                case 149: // try_end1
                                    var5 = _closure2_slot7;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 163: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var3 = _closure2_slot5;
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var1 = 16;
                                    var1 = var7[var1];
                                    var1 = var5.bind(var4)(var1);
                                    var1 = var1.APIError;
                                    var5 = var1.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var13 = var5;
                                    var12 = var6;
                                    var1 = new var13[var1](var12, var11);
                                    var1 = var1 instanceof Object ? var1 : var5;
                                    var1 = var3.bind(var4)(var1);
                                case 226: // try_end2
                                    var3 = _closure2_slot7;
                                    var1 = false;
                                    var1 = var3.bind(var4)(var1);
                                    return var4;
                                case 240: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot7;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 255:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var5 = var6.bind(var2)(var5);
                    var0.signup = var5;
                    var0.guildInfo = var4;
                    var4 = _closure2_slot6;
                    var0.loading = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderItem = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var5.keyExtractor = var11;
                var11 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot14;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var5.ListEmptyComponent = var11;
                var9 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var0 = {};
                    var4 = 8;
                    var0.height = var4;
                    var1.style = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.ItemSeparatorComponent = var9;
                var8 = var8.scrollContainer;
                var5.style = var8;
                var8 = {};
                var9 = 16;
                var10 = var10 + var9;
                var8.paddingBottom = var10;
                var8.paddingTop = var9;
                var5.contentContainerStyle = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 10178, 660, 33, 1297, 671, 10210, 3902, 1234, 1469, 5566, 1568, 10199, 3311, 4670, 8921, 4841, 10205, 2]);