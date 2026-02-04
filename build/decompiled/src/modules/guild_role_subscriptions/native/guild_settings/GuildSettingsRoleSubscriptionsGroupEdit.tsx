// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun116568: for (var _fun116568_ip = 0;;) switch (_fun116568_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.guildId;
                var _closure2_slot0 = var23;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 6;
                var1 = var6[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useNavigation;
                var19 = var1.bind(var2)();
                var _closure2_slot1 = var19;
                var1 = 7;
                var2 = var6[var1];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useSubscriptionsSettings;
                var12 = var2.bind(var4)(var23);
                var _closure2_slot2 = var12;
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)(var23);
                var20 = var2.isFullServerGating;
                var _closure2_slot3 = var20;
                var2 = 9;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = _closure1_slot8;
                var2 = var2.GUILD_ROLE_SUBSCRIPTIONS;
                var2 = var4.bind(var3)(var23, var2);
                var24 = var2.application;
                var4 = _closure1_slot6;
                var2 = var4.useState;
                var9 = null;
                var4 = var2.bind(var4)(var9);
                var2 = _closure1_slot5;
                var13 = 2;
                var2 = var2.bind(var3)(var4, var13);
                var4 = 0;
                var21 = var2[var4];
                var _closure2_slot4 = var21;
                var6 = 1;
                var11 = var2[var6];
                var _closure2_slot5 = var11;
                var8 = _closure1_slot6;
                var7 = var8.useState;
                var2 = var9 == var12;
                var10 = undefined;
                if (var2) {
                    _fun116568_ip = 245;
                    continue _fun116568
                }
            case 240:
                var10 = var12.description;
            case 245:
                var14 = var9 != var10;
                var2 = undefined;
                if (!var14) {
                    _fun116568_ip = 257;
                    continue _fun116568
                }
            case 254:
                var2 = var10;
            case 257:
                var7 = var7.bind(var8)(var2);
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)(var7, var13);
                var10 = var2[var4];
                _closure2_slot6 = var10;
                var8 = var2[var6];
                var7 = _closure1_slot6;
                var2 = var7.useState;
                var7 = var2.bind(var7)(var20);
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)(var7, var13);
                var16 = var2[var4];
                _closure2_slot7 = var16;
                var15 = var2[var6];
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useUpdateSubscriptionsSettings;
                var1 = var1.bind(var2)();
                var17 = var1.loading;
                _closure2_slot8 = var17;
                var22 = var1.updateSubscriptionsSettings;
                _closure2_slot9 = var22;
                var7 = var1.error;
                _closure2_slot10 = var7;
                var2 = _closure1_slot1;
                var1 = 10;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var2.bind(var3)(var1);
                var6 = var1.insets;
                var18 = var9 != var21;
                if (var18) {
                    _fun116568_ip = 452;
                    continue _fun116568
                }
            case 412:
                var1 = var9 != var10;
                if (!var1) {
                    _fun116568_ip = 437;
                    continue _fun116568
                }
            case 419:
                var13 = var9 == var12;
                var2 = undefined;
                if (var13) {
                    _fun116568_ip = 433;
                    continue _fun116568
                }
            case 428:
                var2 = var12.description;
            case 433:
                var1 = var10 !== var2;
            case 437:
                if (!var1) {
                    _fun116568_ip = 449;
                    continue _fun116568
                }
            case 440:
                var2 = var10.length;
                var1 = var4 !== var2;
            case 449:
                var18 = var1;
            case 452:
                if (var18) {
                    _fun116568_ip = 459;
                    continue _fun116568
                }
            case 455:
                var18 = var20 !== var16;
            case 459:
                _closure2_slot11 = var18;
                var13 = var21;
                if (!(var9 == var13)) {
                    _fun116568_ip = 560;
                    continue _fun116568
                }
            case 470:
                var2 = var9 == var12;
                var1 = undefined;
                if (var2) {
                    _fun116568_ip = 485;
                    continue _fun116568
                }
            case 479:
                var1 = var12.cover_image_asset;
            case 485:
                var2 = var9 != var1;
                var1 = null;
                if (!var2) {
                    _fun116568_ip = 557;
                    continue _fun116568
                }
            case 494:
                var2 = var9 != var24;
                var1 = null;
                if (!var2) {
                    _fun116568_ip = 557;
                    continue _fun116568
                }
            case 503:
                var4 = _closure1_slot2;
                var14 = _closure1_slot3;
                var2 = 11;
                var2 = var14[var2];
                var14 = var4.bind(var3)(var2);
                var4 = var14.getSource;
                var2 = {};
                var24 = var24.id;
                var2.application_id = var24;
                var24 = var12.cover_image_asset;
                var2.image_asset = var24;
                var1 = var4.bind(var14)(var2);
            case 557:
                var13 = var1;
            case 560:
                var14 = _closure1_slot6;
                var4 = var14.useCallback;
                var2 = _closure1_slot4;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun116570: for (var _fun116570_ip = 0;;) switch (_fun116570_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun116570_ip = 216;
                                    continue _fun116570
                                }
                            case 10:
                                var6 = {};
                                var1 = _closure2_slot6;
                                var4 = null;
                                var1 = var4 != var1;
                                if (!var1) {
                                    _fun116570_ip = 58;
                                    continue _fun116570
                                }
                            case 28:
                                var5 = _closure2_slot6;
                                var2 = _closure2_slot2;
                                var7 = var4 == var2;
                                var2 = undefined;
                                if (var7) {
                                    _fun116570_ip = 54;
                                    continue _fun116570
                                }
                            case 45:
                                var7 = _closure2_slot2;
                                var2 = var7.description;
                            case 54:
                                var1 = var5 !== var2;
                            case 58:
                                if (!var1) {
                                    _fun116570_ip = 76;
                                    continue _fun116570
                                }
                            case 61:
                                var2 = _closure2_slot6;
                                var5 = var2.length;
                                var2 = 0;
                                var1 = var2 !== var5;
                            case 76:
                                if (!var1) {
                                    _fun116570_ip = 89;
                                    continue _fun116570
                                }
                            case 79:
                                var1 = _closure2_slot6;
                                var6.description = var1;
                            case 89:
                                var1 = _closure2_slot4;
                                if (!(var4 != var1)) {
                                    _fun116570_ip = 112;
                                    continue _fun116570
                                }
                            case 97:
                                var1 = _closure2_slot4;
                                var1 = var1.uri;
                                var6.cover_image = var1;
                            case 112:
                                var2 = _closure2_slot3;
                                var1 = _closure2_slot7;
                                if (!(var2 !== var1)) {
                                    _fun116570_ip = 136;
                                    continue _fun116570
                                }
                            case 124:
                                var1 = _closure2_slot7;
                                var6.full_server_gate = var1;
                            case 136:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 12;
                                var2 = var2[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var2);
                                var2 = var5.isEmpty;
                                var2 = var2.bind(var5)(var6);
                                if (var2) {
                                    _fun116570_ip = 213;
                                    continue _fun116570
                                }
                            case 175:
                                var5 = _closure2_slot9;
                                var2 = _closure2_slot0;
                                var2 = var5.bind(var1)(var2, var6);
                                SaveGenerator(address = 193);
                            case 191:
                                return var2;
                            case 193:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun116570_ip = 210;
                                    continue _fun116570
                                }
                            case 199:
                                var3 = _closure2_slot5;
                                var3 = var3.bind(var1)(var4);
                                _fun116570_ip = 213;
                                continue _fun116570;
                            case 210:
                                return var2;
                            case 213:
                                return var1;
                            case 216:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(7);
                var1[0] = var10;
                var1[1] = var23;
                var1[2] = var22;
                var1[3] = var12;
                var1[4] = var21;
                var1[5] = var16;
                var1[6] = var20;
                var1 = var4.bind(var14)(var2, var1);
                _closure2_slot12 = var1;
                var14 = _closure1_slot6;
                var4 = var14.useLayoutEffect;
                var2 = new Array(4);
                var2[0] = var19;
                var2[1] = var18;
                var2[2] = var17;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun116571: for (var _fun116571_ip = 0;;) switch (_fun116571_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.setOptions;
                            var0 = {};
                            var5 = _closure2_slot8;
                            if (var5) {
                                _fun116571_ip = 49;
                                continue _fun116571
                            }
                        case 24:
                            var3 = _closure2_slot11;
                            if (var3) {
                                _fun116571_ip = 40;
                                continue _fun116571
                            }
                        case 31:
                            var3 = function() { // Environment: var4
                                var0 = null;
                                return var0;
                            };
                            _fun116571_ip = 47;
                            continue _fun116571;
                        case 40:
                            var3 = function() { // Environment: var4
                                var3 = _closure1_slot9;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 14;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = 15;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var4 = _closure2_slot12;
                                var0.onPress = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 47:
                            _fun116571_ip = 56;
                            continue _fun116571;
                        case 49:
                            var3 = function() { // Environment: var4
                                var3 = _closure1_slot9;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 13;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderSubmittingIndicator;
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 56:
                            var0.headerRight = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var14)(var1, var2);
                var4 = _closure1_slot6;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun116575: for (var _fun116575_ip = 0;;) switch (_fun116575_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun116575_ip = 122;
                                continue _fun116575
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 16;
                            var1 = var5[var1];
                            var7 = undefined;
                            var2 = var2.bind(var7)(var1);
                            var1 = var2.presentError;
                            var5 = _closure2_slot10;
                            var0 = var5.getAnyErrorMessage;
                            var0 = var0.bind(var5)();
                            if (!(var4 == var0)) {
                                _fun116575_ip = 117;
                                continue _fun116575
                            }
                        case 62:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 15;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.t;
                            var3 = var3.ZUEGFn;
                            var0 = var4.bind(var5)(var3);
                        case 117:
                            var0 = var1.bind(var2)(var0);
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = {};
                var17 = var6.bottom;
                var6 = _closure1_slot1;
                var14 = _closure1_slot3;
                var7 = 17;
                var7 = var14[var7];
                var7 = var6.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var7 = var17 + var7;
                var4.paddingBottom = var7;
                var0.contentContainerStyle = var4;
                var7 = _closure1_slot9;
                var4 = 18;
                var4 = var14[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var4.isFullServerGating = var16;
                var4.onChange = var15;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var5 = 19;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Content;
                var5 = {};
                var5.cover = var13;
                var5.setCover = var11;
                if (!(var9 == var10)) {
                    _fun116568_ip = 862;
                    continue _fun116568
                }
            case 845:
                var13 = var9 == var12;
                var11 = undefined;
                if (var13) {
                    _fun116568_ip = 859;
                    continue _fun116568
                }
            case 854:
                var11 = var12.description;
            case 859:
                var10 = var11;
            case 862:
                var11 = var9 != var10;
                var9 = '';
                if (!var11) {
                    _fun116568_ip = 876;
                    continue _fun116568
                }
            case 873:
                var9 = var10;
            case 876:
                var5.description = var9;
                var5.setDescription = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsGroupEdit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var3 = _closure1_slot9;
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 20;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.guildId = var7;
        var6 = _closure1_slot9;
        var5 = _closure1_slot11;
        var4 = {};
        var4.guildId = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3485, 33, 1469, 10808, 14871, 14821, 4893, 14872, 22, 4705, 5322, 1234, 3147, 671, 14874, 14877, 14882, 2]);