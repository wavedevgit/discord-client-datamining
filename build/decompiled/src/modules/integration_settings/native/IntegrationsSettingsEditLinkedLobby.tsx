// modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.screenContainer = var8;
    var8 = {
        'alignItems': 'center',
        'marginTop': 8,
        'marginBottom': 32,
        'gap': 12
    };
    var3.header = var8;
    var8 = {
        'paddingLeft': 12,
        'marginBottom': 8
    };
    var3.currentlySyncingText = var8;
    var8 = {
        'height': 1,
        'width': 48
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_STRONG;
    var8.backgroundColor = var9;
    var3.divider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109293: for (var _fun109293_ip = 0;;) switch (_fun109293_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channel;
                var _closure2_slot0 = var1;
                var2 = var2.numScreensToPop;
                var _closure2_slot1 = var2;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot9;
                var13 = var3.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var7 = var5.bind(var4)(var3);
                var3 = var7.useNavigation;
                var12 = var3.bind(var7)();
                var _closure2_slot2 = var12;
                var8 = _closure1_slot1;
                var3 = 7;
                var3 = var6[var3];
                var7 = var8.bind(var4)(var3);
                var3 = 8;
                var3 = var6[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.EDIT_CHANNEL_SYNCING;
                var3 = var7.bind(var4)(var3);
                var8 = var3.analyticsLocations;
                var _closure2_slot3 = var8;
                var3 = 9;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.useGetOrFetchApplication;
                var7 = var1.linkedLobby;
                var16 = null;
                var9 = var16 == var7;
                var3 = undefined;
                if (var9) {
                    _fun109293_ip = 173;
                    continue _fun109293
                }
            case 167:
                var3 = var7.application_id;
            case 173:
                var19 = var5.bind(var6)(var3);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = true;
                var21 = var5.bind(var4)(var1, var3);
                var3 = var1.linkedLobby;
                var5 = var16 == var3;
                var7 = undefined;
                if (var5) {
                    _fun109293_ip = 229;
                    continue _fun109293
                }
            case 221:
                var7 = var3.linked_at;
            case 229:
                _closure2_slot4 = var7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var3 = var5[var3];
                var11 = var6.bind(var4)(var3);
                var9 = var11.useStateFromStores;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    _fun109294: for (var _fun109294_ip = 0;;) switch (_fun109294_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getUser;
                            var0 = _closure2_slot0;
                            var3 = var0.linkedLobby;
                            var0 = null;
                            var4 = var0 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun109294_ip = 43;
                                continue _fun109294
                            }
                        case 37:
                            var0 = var3.linked_by;
                        case 43:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var9.bind(var11)(var6, var3);
                _closure2_slot5 = var6;
                var11 = _closure1_slot3;
                var9 = var11.useCallback;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.pop;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var9 = var9.bind(var11)(var2, var3);
                var3 = _closure1_slot1;
                var2 = 12;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var1.id;
                var2 = var16 == var19;
                var11 = undefined;
                if (var2) {
                    _fun109293_ip = 356;
                    continue _fun109293
                }
            case 351:
                var11 = var19.name;
            case 356:
                var12 = var16 != var11;
                var2 = '';
                if (!var12) {
                    _fun109293_ip = 370;
                    continue _fun109293
                }
            case 367:
                var2 = var11;
            case 370:
                var14 = var5.bind(var4)(var3, var2, var9);
                var3 = _closure1_slot3;
                var5 = var3.useCallback;
                var2 = new Array(3);
                var2[0] = var6;
                var2[1] = var8;
                var1 = var1.id;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun109296: for (var _fun109296_ip = 0;;) switch (_fun109296_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun109296_ip = 80;
                                continue _fun109296
                            }
                        case 13:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure2_slot5;
                            var4 = var4.id;
                            var0.userId = var4;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var0.channelId = var4;
                            var3 = _closure2_slot3;
                            var0.sourceAnalyticsLocations = var3;
                            var0 = var1.bind(var2)(var0);
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var3)(var1, var2);
                _closure2_slot6 = var5;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    _fun109297: for (var _fun109297_ip = 0;;) switch (_fun109297_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun109297_ip = 227;
                                continue _fun109297
                            }
                        case 16:
                            var1 = global;
                            var3 = var1.Date;
                            var11 = _closure2_slot4;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var12 = var2;
                            var1 = new var12[var3](var11, var10);
                            var6 = var1 instanceof Object ? var1 : var2;
                            var1 = _closure2_slot5;
                            if (!(var0 == var1)) {
                                _fun109297_ip = 128;
                                continue _fun109297
                            }
                        case 56:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 14;
                            var3 = var8[var1];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var8[var1];
                            var1 = var5.bind(var2)(var1);
                            var1 = var1.t;
                            var2 = var1.EyygeM;
                            var1 = {};
                            var1.linkedAtDate = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            _fun109297_ip = 225;
                            continue _fun109297;
                        case 128:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 14;
                            var4 = var9[var2];
                            var3 = undefined;
                            var4 = var8.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.format;
                            var2 = var9[var2];
                            var2 = var8.bind(var3)(var2);
                            var2 = var2.t;
                            var3 = var2.uV2AkA;
                            var2 = {};
                            var7 = _closure2_slot5;
                            var7 = var7.username;
                            var2.username = var7;
                            var7 = function arg0, arg1() {
                                var4 = _closure1_slot6;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 15;
                                var0 = var2[var0];
                                var3 = undefined;
                                var0 = var1.bind(var3)(var0);
                                var2 = var0.Text;
                                var1 = {
                                    'onPress': null,
                                    'variant': 'text-sm/semibold',
                                    'color': 'text-strong'
                                };
                                var0 = _closure2_slot6;
                                var1.onPress = var0;
                                var0 = arg0;
                                var1.children = var0;
                                var0 = arg1;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                            };
                            var2.usernameHook = var7;
                            var2.linkedAtDate = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 225:
                            return var1;
                        case 227:
                            return var0;
                    }
                };
                var25 = var2.bind(var3)(var0, var1);
                var1 = var16 == var19;
                var0 = null;
                if (var1) {
                    _fun109293_ip = 1095;
                    continue _fun109293
                }
            case 470:
                var3 = _closure1_slot6;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 16;
                var1 = var17[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot8;
                var12 = 17;
                var5 = var17[var12];
                var5 = var18.bind(var4)(var5);
                var6 = var5.Form;
                var5 = {};
                var8 = var13.screenContainer;
                var5.style = var8;
                var11 = _closure1_slot4;
                var8 = {};
                var9 = var13.header;
                var8.style = var9;
                var23 = _closure1_slot1;
                var20 = 18;
                var9 = var17[var20];
                var15 = var23.bind(var4)(var9);
                var9 = {};
                var22 = 19;
                var22 = var17[var22];
                var24 = var23.bind(var4)(var22);
                var23 = var24.getApplicationIconSource;
                var22 = {};
                var26 = var19.id;
                var22.id = var26;
                var26 = var19.icon;
                var22.icon = var26;
                var22 = var23.bind(var24)(var22);
                var9.source = var22;
                var20 = var17[var20];
                var20 = var18.bind(var4)(var20);
                var20 = var20.AvatarSizes;
                var20 = var20.XXLARGE;
                var9.size = var20;
                var9 = var3.bind(var4)(var15, var9);
                var15 = new Array(3);
                var15[0] = var9;
                var9 = 15;
                var17 = var17[var9];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var19.name;
                var17.children = var19;
                var17 = var3.bind(var4)(var18, var17);
                var15[1] = var17;
                var16 = var16 != var25;
                if (!var16) {
                    _fun109293_ip = 816;
                    continue _fun109293
                }
            case 712:
                var19 = _closure1_slot8;
                var18 = _closure1_slot7;
                var17 = {};
                var24 = _closure1_slot6;
                var22 = _closure1_slot4;
                var20 = {};
                var23 = var13.divider;
                var20.style = var23;
                var22 = var24.bind(var4)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var9];
                var22 = var23.bind(var4)(var22);
                var23 = var22.Text;
                var22 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var22.children = var25;
                var22 = var24.bind(var4)(var23, var22);
                var20[1] = var22;
                var17.children = var20;
                var16 = var19.bind(var4)(var18, var17);
            case 816:
                var15[2] = var16;
                var8.children = var15;
                var11 = var7.bind(var4)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var11 = _closure1_slot6;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = var19[var9];
                var9 = var18.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var13 = var13.currentlySyncingText;
                var9.style = var13;
                var15 = 14;
                var13 = var19[var15];
                var13 = var18.bind(var4)(var13);
                var20 = var13.intl;
                var17 = var20.format;
                var13 = var19[var15];
                var13 = var18.bind(var4)(var13);
                var13 = var13.t;
                var16 = var13.DA9v5F;
                var13 = {};
                var13.channelName = var21;
                var13 = var17.bind(var20)(var16, var13);
                var9.children = var13;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var9 = var19[var12];
                var9 = var18.bind(var4)(var9);
                var10 = var9.FormSection;
                var9 = {};
                var12 = var19[var12];
                var12 = var18.bind(var4)(var12);
                var13 = var12.FormRow;
                var12 = {};
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.LLWaxQ;
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var15 = 'danger';
                var12.variant = var15;
                var12.onPress = var14;
                var12 = var11.bind(var4)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1095:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 33, 1297, 671, 1469, 5726, 5579, 6879, 4792, 566, 9137, 7350, 1234, 3941, 4897, 5378, 5452, 1417, 2]);