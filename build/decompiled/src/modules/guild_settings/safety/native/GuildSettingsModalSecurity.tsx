// modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot10 = var6;
    var3 = var3.MFALevels;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'space-between',
        'paddingTop': 99
    };
    var3.wrapper = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'column'
    };
    var3.center = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.label = var8;
    var8 = {
        'width': 295,
        'height': 142,
        'marginHorizontal': 35
    };
    var3.image = var8;
    var8 = {};
    var9 = 40;
    var8.marginBottom = var9;
    var3.infoWrapper = var8;
    var8 = {
        'marginTop': 15,
        'fontSize': 13
    };
    var9 = 9;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var8.color = var9;
    var3.info = var8;
    var8 = {
        'alignSelf': 'center',
        'paddingHorizontal': 16,
        'marginTop': 16
    };
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115582: for (var _fun115582_ip = 0;;) switch (_fun115582_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var8 = var1.contentContainerStyle;
                var1 = _closure1_slot14;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var5 = var4[var1];
                var10 = var2.bind(var3)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var9.bind(var10)(var7, var5);
                var _closure2_slot1 = var11;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    var0 = var0.mfaLevel;
                    return var0;
                };
                var4 = var4.bind(var5)(var2, var1);
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot11;
                var1 = var1.ELEVATED;
                var22 = var4 === var1;
                var _closure2_slot2 = var22;
                var12 = null;
                var4 = var12 == var2;
                var1 = undefined;
                if (var4) {
                    _fun115582_ip = 174;
                    continue _fun115582
                }
            case 168:
                var1 = var2.mfaEnabled;
            case 174:
                var18 = true;
                var21 = var18 === var1;
                if (!var21) {
                    _fun115582_ip = 187;
                    continue _fun115582
                }
            case 183:
                var21 = var12 != var11;
            case 187:
                if (!var21) {
                    _fun115582_ip = 200;
                    continue _fun115582
                }
            case 190:
                var1 = _closure1_slot6;
                var21 = var1.bind(var3)(var11, var2);
            case 200:
                if (!var21) {
                    _fun115582_ip = 241;
                    continue _fun115582
                }
            case 203:
                var1 = !var22;
                if (!var22) {
                    _fun115582_ip = 238;
                    continue _fun115582
                }
            case 209:
                var5 = var11.features;
                var4 = var5.has;
                var2 = _closure1_slot10;
                var2 = var2.DISCOVERABLE;
                var2 = var4.bind(var5)(var2);
                var1 = !var2;
            case 238:
                var21 = var1;
            case 241:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var22;
                var0 = function() { // Environment: var0
                    _fun115585: for (var _fun115585_ip = 0;;) switch (_fun115585_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115585_ip = 94;
                                continue _fun115585
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateMFALevel;
                            var0 = {};
                            var5 = _closure2_slot1;
                            var5 = var5.id;
                            var0.guildId = var5;
                            var3 = _closure2_slot2;
                            var4 = _closure1_slot11;
                            if (var3) {
                                _fun115585_ip = 78;
                                continue _fun115585
                            }
                        case 70:
                            var3 = var4.ELEVATED;
                            _fun115585_ip = 84;
                            continue _fun115585;
                        case 78:
                            var3 = var4.NONE;
                        case 84:
                            var0.level = var3;
                            var0 = var1.bind(var2)(var0);
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var23 = 12;
                var0 = var0[var23];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Colors;
                var20 = var0.RED;
                if (var22) {
                    _fun115582_ip = 339;
                    continue _fun115582
                }
            case 310:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var23];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Colors;
                var20 = var0.GREEN;
            case 339:
                var2 = _closure1_slot13;
                var26 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 13;
                var0 = var14[var0];
                var0 = var26.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var15.wrapper;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.style = var7;
                var7 = {};
                var8 = var15.center;
                var7.style = var8;
                var13 = _closure1_slot12;
                var10 = 14;
                var8 = var14[var10];
                var8 = var26.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var15.label;
                var8.style = var16;
                var17 = 15;
                var16 = var14[var17];
                var16 = var26.bind(var3)(var16);
                var25 = var16.intl;
                var24 = var25.string;
                var16 = var14[var17];
                var16 = var26.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.Wi9LEV;
                var16 = var24.bind(var25)(var16);
                var8.children = var16;
                var9 = var13.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var9 = {};
                var16 = _closure1_slot1;
                var14 = var14[var23];
                var16 = var16.bind(var3)(var14);
                var14 = {};
                var23 = var15.button;
                var14.style = var23;
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var24 = var23[var17];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var17];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                if (var22) {
                    _fun115582_ip = 610;
                    continue _fun115582
                }
            case 595:
                var22 = var23.yZcYGa;
                var22 = var24.bind(var25)(var22);
                _fun115582_ip = 623;
                continue _fun115582;
            case 610:
                var23 = var23["MP0Ho+"];
                var22 = var24.bind(var25)(var23);
            case 623:
                var14.text = var22;
                var21 = !var21;
                var14.disabled = var21;
                var14.color = var20;
                var14.onPress = var19;
                var14.shrink = var18;
                var14 = var13.bind(var3)(var16, var14);
                var9.children = var14;
                var9 = var13.bind(var3)(var5, var9);
                var8[1] = var9;
                var13 = var12 != var11;
                var9 = null;
                if (!var13) {
                    _fun115582_ip = 806;
                    continue _fun115582
                }
            case 679:
                var14 = var11.features;
                var13 = var14.has;
                var11 = _closure1_slot10;
                var11 = var11.DISCOVERABLE;
                var11 = var13.bind(var14)(var11);
                var9 = null;
                if (!var11) {
                    _fun115582_ip = 806;
                    continue _fun115582
                }
            case 710:
                var12 = _closure1_slot12;
                var18 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = var13[var10];
                var10 = var18.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-feedback-critical'
                };
                var14 = var13[var17];
                var14 = var18.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var13 = var13[var17];
                var13 = var18.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["KG1V/E"];
                var13 = var14.bind(var16)(var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 806:
                var8[2] = var9;
                var7.children = var8;
                var7 = var2.bind(var3)(var5, var7);
                var9 = new Array(2);
                var9[0] = var7;
                var12 = _closure1_slot13;
                var11 = _closure1_slot4;
                var10 = {};
                var7 = var15.center;
                var10.style = var7;
                var7 = _closure1_slot12;
                var14 = _closure1_slot5;
                var13 = {};
                var18 = _closure1_slot1;
                var8 = _closure1_slot2;
                var16 = 16;
                var16 = var8[var16];
                var16 = var18.bind(var3)(var16);
                var13.source = var16;
                var16 = var15.image;
                var13.style = var16;
                var16 = 'contain';
                var13.resizeMode = var16;
                var14 = var7.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var15 = var15.infoWrapper;
                var14.style = var15;
                var6 = _closure1_slot0;
                var15 = 17;
                var15 = var8[var15];
                var15 = var6.bind(var3)(var15);
                var16 = var15.FormHint;
                var15 = {};
                var18 = var8[var17];
                var18 = var6.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.format;
                var17 = var8[var17];
                var17 = var6.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17["FK0+iX"];
                var17 = {};
                var17 = var19.bind(var20)(var18, var17);
                var15.children = var17;
                var15 = var7.bind(var3)(var16, var15);
                var14.children = var15;
                var14 = var7.bind(var3)(var11, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var4.children = var9;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 18;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1416, 1410, 1621, 8153, 660, 33, 1297, 671, 566, 8152, 4873, 4897, 3941, 1234, 10400, 5378, 5204, 2]);