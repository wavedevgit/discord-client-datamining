// modules/premium/native/gift_code_modal/GiftCodeRedeemUseProfileEffect.tsx
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
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'justifyContent': 'flex-end',
        'flex': 1,
        'paddingTop': 24
    };
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.container = var8;
    var8 = {};
    var9 = 16;
    var8.paddingHorizontal = var9;
    var3.saveButtonContainer = var8;
    var8 = {};
    var8.fontSize = var9;
    var3.saveButtonText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemUseProfileEffect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var2 = var1.profileEffect;
        var16 = var1.user;
        var4 = _closure1_slot5;
        var1 = var4.useState;
        var6 = var1.bind(var4)(var2);
        var2 = _closure1_slot4;
        var3 = undefined;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var19 = var2[var1];
        var _closure2_slot0 = var19;
        var1 = 1;
        var18 = var2[var1];
        var1 = _closure1_slot10;
        var10 = var1.bind(var3)();
        var9 = _closure1_slot1;
        var15 = _closure1_slot2;
        var1 = 7;
        var1 = var15[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var17 = var1.isFetching;
        var1 = 8;
        var1 = var15[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var2 = var1.handleSubmit;
        var _closure2_slot1 = var2;
        var13 = var1.isSubmitting;
        var1 = var1.pendingProfileEffect;
        var _closure2_slot2 = var1;
        var2 = var4.useEffect;
        var1 = function() { // Environment: var0
            _fun56970: for (var _fun56970_ip = 0;;) switch (_fun56970_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var1 = var3 == var0;
                    var0 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun56970_ip = 30;
                        continue _fun56970
                    }
                case 20:
                    var1 = _closure2_slot0;
                    var2 = var1.skuId;
                case 30:
                    var1 = _closure2_slot2;
                    var5 = var3 == var1;
                    var1 = undefined;
                    if (var5) {
                        _fun56970_ip = 53;
                        continue _fun56970
                    }
                case 43:
                    var5 = _closure2_slot2;
                    var1 = var5.skuId;
                case 53:
                    if (!(var2 !== var1)) {
                        _fun56970_ip = 108;
                        continue _fun56970
                    }
                case 57:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setNewPendingProfileEffect;
                    var5 = _closure2_slot0;
                    var5 = var3 != var5;
                    var3 = null;
                    if (!var5) {
                        _fun56970_ip = 103;
                        continue _fun56970
                    }
                case 99:
                    var3 = _closure2_slot0;
                case 103:
                    var1 = var1.bind(var2)(var3);
                case 108:
                    return var0;
            }
        };
        var1 = var2.bind(var4)(var1);
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun56973: for (var _fun56973_ip = 0;;) switch (_fun56973_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun56973_ip = 69;
                                continue _fun56973
                            }
                        case 7:
                            var1 = _closure2_slot1;
                            var2 = undefined;
                            var1 = var1.bind(var2)();
                            SaveGenerator(address = 24);
                        case 22:
                            return var1;
                        case 24:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun56973_ip = 66;
                                continue _fun56973
                            }
                        case 30:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 10;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.pop;
                            var3 = var3.bind(var4)();
                            return var2;
                        case 66:
                            return var1;
                        case 69:
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
        var12 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var14 = _closure1_slot0;
        var0 = 11;
        var0 = var15[var0];
        var0 = var14.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.bottom = var4;
        var4 = var10.container;
        var0.style = var4;
        var7 = _closure1_slot8;
        var6 = _closure1_slot7;
        var4 = {};
        var8 = 12;
        var8 = var15[var8];
        var8 = var14.bind(var3)(var8);
        var11 = var8.EditProfileEffectInner;
        var8 = {};
        var8.selectedProfileEffect = var19;
        var8.setSelectedProfileEffect = var18;
        var8.isFetching = var17;
        var8.user = var16;
        var16 = false;
        var8.showTitle = var16;
        var8 = var7.bind(var3)(var11, var8);
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var10.saveButtonContainer;
        var5.style = var8;
        var11 = 13;
        var8 = var15[var11];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.loading = var13;
        var13 = var15[var11];
        var13 = var14.bind(var3)(var13);
        var13 = var13.ButtonColors;
        var13 = var13.BRAND;
        var8.color = var13;
        var8.onPress = var12;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.ButtonSizes;
        var11 = var11.MEDIUM;
        var8.size = var11;
        var11 = 14;
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["R3BPH+"];
        var11 = var12.bind(var13)(var11);
        var8.text = var11;
        var10 = var10.saveButtonText;
        var8.textStyle = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 33, 1297, 671, 5722, 6939, 5580, 4557, 4729, 6945, 4868, 1234, 2]);