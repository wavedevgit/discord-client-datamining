// modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot8 = var4;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'height': '100%'
    };
    var3.container = var8;
    var8 = {
        'height': '100%',
        'flex': 1,
        'justifyContent': 'space-between'
    };
    var3.modal = var8;
    var8 = {
        'flexGrow': 0,
        'paddingLeft': 16,
        'paddingTop': 16,
        'paddingRight': 16
    };
    var3.button = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var4 = 'STEP_1';
    var3.STEP_1 = var4;
    var4 = 'STEP_2';
    var3.STEP_2 = var4;
    var4 = 'STEP_3';
    var3.STEP_3 = var4;
    var _closure1_slot11 = var3;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EnableCommunityModalSteps = var3;
    var1 = function arg0() {
        _fun116452: for (var _fun116452_ip = 0;;) switch (_fun116452_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.onSuccess;
                var _closure2_slot0 = var1;
                var13 = var0.disableNextStep;
                var9 = var0.children;
                var15 = var0.buttonText;
                var0 = var0.currentStep;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var0 = _closure1_slot10;
                var12 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStoresObject;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var14
                    var1 = _closure1_slot6;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var3.bind(var5)(var2, var0);
                var0 = var0.guild;
                var _closure2_slot2 = var0;
                var16 = null;
                var3 = var16 == var0;
                var2 = undefined;
                if (var3) {
                    _fun116452_ip = 160;
                    continue _fun116452
                }
            case 134:
                var6 = var0.features;
                var5 = var6.has;
                var3 = _closure1_slot7;
                var3 = var3.COMMUNITY;
                var2 = var5.bind(var6)(var3);
            case 160:
                _closure2_slot3 = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useNavigation;
                var3 = var3.bind(var5)();
                _closure2_slot4 = var3;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var14
                    _fun116454: for (var _fun116454_ip = 0;;) switch (_fun116454_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun116454_ip = 55;
                                continue _fun116454
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.close;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var3);
                if (!(var16 != var0)) {
                    _fun116452_ip = 523;
                    continue _fun116452
                }
            case 235:
                var3 = _closure1_slot8;
                var2 = _closure1_slot5;
                var0 = {};
                var5 = var12.container;
                var0.style = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var5 = var11[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.SafeAreaPaddingView;
                var5 = {};
                var8 = true;
                var5.bottom = var8;
                var8 = var12.modal;
                var5.style = var8;
                var10 = _closure1_slot4;
                var8 = {};
                var17 = {};
                var18 = 1;
                var17.flexGrow = var18;
                var8.style = var17;
                var8.children = var9;
                var9 = var3.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var12 = var12.button;
                var9.style = var12;
                var12 = _closure1_slot1;
                var17 = 12;
                var11 = var11[var17];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                if (!(var16 == var15)) {
                    _fun116452_ip = 429;
                    continue _fun116452
                }
            case 374:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var16 = 13;
                var18 = var21[var16];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var21[var16];
                var16 = var20.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.PDTjLN;
                var15 = var18.bind(var19)(var16);
            case 429:
                var11.text = var15;
                var16 = _closure1_slot1;
                var15 = _closure1_slot2;
                var15 = var15[var17];
                var15 = var16.bind(var4)(var15);
                var15 = var15.Colors;
                var15 = var15.BRAND;
                var11.color = var15;
                var14 = function() {
                    _fun116456: for (var _fun116456_ip = 0;;) switch (_fun116456_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot11;
                            var2 = var2.STEP_1;
                            if (!(var2 !== var3)) {
                                _fun116456_ip = 91;
                                continue _fun116456
                            }
                        case 24:
                            var2 = _closure1_slot11;
                            var2 = var2.STEP_2;
                            if (!(var2 !== var3)) {
                                _fun116456_ip = 65;
                                continue _fun116456
                            }
                        case 38:
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun116456_ip = 115;
                                continue _fun116456
                            }
                        case 48:
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun116456_ip = 115;
                            continue _fun116456;
                        case 65:
                            var4 = _closure2_slot4;
                            var3 = var4.push;
                            var2 = _closure1_slot11;
                            var2 = var2.STEP_3;
                            var2 = var3.bind(var4)(var2);
                            _fun116456_ip = 115;
                            continue _fun116456;
                        case 91:
                            var2 = _closure2_slot4;
                            var1 = var2.push;
                            var0 = _closure1_slot11;
                            var0 = var0.STEP_2;
                            var0 = var1.bind(var2)(var0);
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11.onPress = var14;
                var11.disabled = var13;
                var11 = var3.bind(var4)(var12, var11);
                var9.children = var11;
                var9 = var3.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun116452_ip = 561;
                continue _fun116452;
            case 523:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SceneLoadingIndicator;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 561:
                return var0;
        }
    };
    var2.EnableCommunityModalScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8175, 660, 33, 1297, 566, 1469, 806, 14850, 5856, 4736, 4875, 1234, 2]);