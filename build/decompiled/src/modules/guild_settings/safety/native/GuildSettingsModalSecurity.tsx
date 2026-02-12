// modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'justifyContent': 'space-between',
        'paddingTop': 99
    };
    var3.wrapper = var9;
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'column'
    };
    var3.center = var9;
    var9 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.label = var9;
    var9 = {
        'width': 295,
        'height': 142,
        'marginHorizontal': 35
    };
    var3.image = var9;
    var9 = {};
    var10 = 40;
    var9.marginBottom = var10;
    var3.infoWrapper = var9;
    var9 = {
        'alignSelf': 'center',
        'paddingHorizontal': 16,
        'marginTop': 16
    };
    var3.button = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NavScrim;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot15 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116977: for (var _fun116977_ip = 0;;) switch (_fun116977_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var8 = var1.contentContainerStyle;
                var1 = _closure1_slot14;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var6 = var4[var1];
                var10 = var2.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var9.bind(var10)(var7, var6);
                var _closure2_slot1 = var11;
                var1 = var4[var1];
                var6 = var2.bind(var3)(var1);
                var4 = var6.useStateFromStores;
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
                var4 = var4.bind(var6)(var2, var1);
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
                    _fun116977_ip = 174;
                    continue _fun116977
                }
            case 168:
                var1 = var2.mfaEnabled;
            case 174:
                var17 = true;
                var21 = var17 === var1;
                if (!var21) {
                    _fun116977_ip = 187;
                    continue _fun116977
                }
            case 183:
                var21 = var12 != var11;
            case 187:
                if (!var21) {
                    _fun116977_ip = 200;
                    continue _fun116977
                }
            case 190:
                var1 = _closure1_slot6;
                var21 = var1.bind(var3)(var11, var2);
            case 200:
                if (!var21) {
                    _fun116977_ip = 241;
                    continue _fun116977
                }
            case 203:
                var1 = !var22;
                if (!var22) {
                    _fun116977_ip = 238;
                    continue _fun116977
                }
            case 209:
                var6 = var11.features;
                var4 = var6.has;
                var2 = _closure1_slot10;
                var2 = var2.DISCOVERABLE;
                var2 = var4.bind(var6)(var2);
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
                    _fun116980: for (var _fun116980_ip = 0;;) switch (_fun116980_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun116980_ip = 94;
                                continue _fun116980
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
                                _fun116980_ip = 78;
                                continue _fun116980
                            }
                        case 70:
                            var3 = var4.ELEVATED;
                            _fun116980_ip = 84;
                            continue _fun116980;
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
                var18 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var23 = 12;
                var0 = var0[var23];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Colors;
                var19 = var0.RED;
                if (var22) {
                    _fun116977_ip = 339;
                    continue _fun116977
                }
            case 310:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var23];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Colors;
                var19 = var0.GREEN;
            case 339:
                var2 = _closure1_slot13;
                var26 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 13;
                var0 = var15[var0];
                var0 = var26.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var6 = _closure1_slot4;
                var4 = {};
                var9 = var14.wrapper;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.style = var7;
                var7 = {};
                var8 = var14.center;
                var7.style = var8;
                var13 = _closure1_slot12;
                var10 = 14;
                var8 = var15[var10];
                var8 = var26.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var14.label;
                var8.style = var16;
                var20 = 15;
                var16 = var15[var20];
                var16 = var26.bind(var3)(var16);
                var25 = var16.intl;
                var24 = var25.string;
                var16 = var15[var20];
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
                var15 = var15[var23];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var23 = var14.button;
                var15.style = var23;
                var26 = _closure1_slot0;
                var23 = _closure1_slot2;
                var24 = var23[var20];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var20];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                if (var22) {
                    _fun116977_ip = 610;
                    continue _fun116977
                }
            case 595:
                var22 = var23.yZcYGa;
                var22 = var24.bind(var25)(var22);
                _fun116977_ip = 623;
                continue _fun116977;
            case 610:
                var23 = var23["MP0Ho+"];
                var22 = var24.bind(var25)(var23);
            case 623:
                var15.text = var22;
                var21 = !var21;
                var15.disabled = var21;
                var15.color = var19;
                var15.onPress = var18;
                var15.shrink = var17;
                var15 = var13.bind(var3)(var16, var15);
                var9.children = var15;
                var9 = var13.bind(var3)(var6, var9);
                var8[1] = var9;
                var13 = var12 != var11;
                var9 = null;
                if (!var13) {
                    _fun116977_ip = 806;
                    continue _fun116977
                }
            case 679:
                var15 = var11.features;
                var13 = var15.has;
                var11 = _closure1_slot10;
                var11 = var11.DISCOVERABLE;
                var11 = var13.bind(var15)(var11);
                var9 = null;
                if (!var11) {
                    _fun116977_ip = 806;
                    continue _fun116977
                }
            case 710:
                var12 = _closure1_slot12;
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = var13[var10];
                var10 = var17.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-feedback-critical'
                };
                var15 = var13[var20];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var13[var20];
                var13 = var17.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["KG1V/E"];
                var13 = var15.bind(var16)(var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 806:
                var8[2] = var9;
                var7.children = var8;
                var8 = var2.bind(var3)(var6, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var14.center;
                var8.style = var11;
                var13 = _closure1_slot12;
                var12 = _closure1_slot5;
                var11 = {};
                var17 = _closure1_slot1;
                var16 = _closure1_slot2;
                var15 = 16;
                var15 = var16[var15];
                var15 = var17.bind(var3)(var15);
                var11.source = var15;
                var15 = var14.image;
                var11.style = var15;
                var15 = 'contain';
                var11.resizeMode = var15;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var14 = var14.infoWrapper;
                var12.style = var14;
                var17 = _closure1_slot0;
                var14 = 17;
                var14 = var16[var14];
                var14 = var17.bind(var3)(var14);
                var15 = var14.FormHint;
                var14 = {};
                var18 = var16[var20];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.format;
                var16 = var16[var20];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16["FK0+iX"];
                var16 = {};
                var16 = var18.bind(var19)(var17, var16);
                var14.children = var16;
                var14 = var13.bind(var3)(var15, var14);
                var12.children = var14;
                var12 = var13.bind(var3)(var9, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = _closure1_slot15;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1416, 1410, 1621, 8285, 660, 33, 1297, 5224, 566, 8284, 4849, 4875, 3938, 1234, 10243, 5441, 2]);