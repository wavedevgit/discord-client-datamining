// modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot10 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot11 = var6;
    var3 = var3.InstantInviteSources;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96617: for (var _fun96617_ip = 0;;) switch (_fun96617_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var _closure2_slot0 = var0;
                var11 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 7;
                var1 = var7[var1];
                var3 = undefined;
                var2 = var11.bind(var3)(var1);
                var1 = var2.useGuildActionSheetPermissions;
                var1 = var1.bind(var2)(var0);
                var8 = var1.canAccessSettings;
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var14 = var1.bind(var3)(var0);
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var0.id;
                var1 = var2.bind(var3)(var1);
                var22 = var1.total;
                var1 = 10;
                var1 = var7[var1];
                var5 = var11.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var2 = _closure1_slot7;
                    var1 = var2.getChannels;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var4.bind(var5)(var2, var1);
                var _closure2_slot1 = var5;
                var1 = 11;
                var1 = var7[var1];
                var2 = var11.bind(var3)(var1);
                var1 = var2.shouldRenderInvite;
                var10 = var1.bind(var2)(var5, var0);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var12
                    _fun96619: for (var _fun96619_ip = 0;;) switch (_fun96619_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getChannelId;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var6 = var3.bind(var4)(var0);
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 11;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.getInviteChannelId;
                            var3 = _closure2_slot1;
                            var5 = var4.bind(var5)(var6, var3);
                            var4 = _closure1_slot6;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var5);
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun96619_ip = 112;
                                continue _fun96619
                            }
                        case 88:
                            var7 = _closure1_slot7;
                            var6 = var7.getDefaultChannel;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var3 = var6.bind(var7)(var5);
                        case 112:
                            if (!(var4 != var3)) {
                                _fun96619_ip = 172;
                                continue _fun96619
                            }
                        case 116:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var4 = 12;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.handleOpenInviteActionsheet;
                            var11 = _closure2_slot0;
                            var10 = var3.id;
                            var9 = _closure2_slot1;
                            var1 = _closure1_slot12;
                            var8 = var1.SERVER_PROFILE;
                            var12 = var6;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                        case 172:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var _closure2_slot2 = var0;
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var13 = true;
                var0.horizontal = var13;
                var4 = {};
                var5 = '100%';
                var4.minWidth = var5;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot14;
                var4 = 13;
                var4 = var7[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.ButtonGroup;
                var4 = {};
                var9 = 'horizontal';
                var4.direction = var9;
                var9 = 14;
                var7 = var7[var9];
                var7 = var11.bind(var3)(var7);
                var11 = var7.IconButton;
                var7 = {};
                var17 = 'secondary';
                var7.variant = var17;
                var16 = 0;
                if (!(!(var22 > var16))) {
                    _fun96617_ip = 372;
                    continue _fun96617
                }
            case 315:
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var16 = 15;
                var18 = var21[var16];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var21[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.Uj0md3;
                var16 = var18.bind(var19)(var16);
                _fun96617_ip = 435;
                continue _fun96617;
            case 372:
                var19 = _closure1_slot0;
                var23 = _closure1_slot3;
                var18 = 15;
                var20 = var23[var18];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.formatToPlainString;
                var18 = var23[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18["pob/cL"];
                var18 = {};
                var18.subscriptions = var22;
                var16 = var20.bind(var21)(var19, var18);
            case 435:
                var7.label = var16;
                var19 = _closure1_slot13;
                var18 = _closure1_slot0;
                var22 = _closure1_slot3;
                var16 = 16;
                var16 = var22[var16];
                var16 = var18.bind(var3)(var16);
                var18 = var16.BoostGemIcon;
                var16 = {};
                var21 = _closure1_slot1;
                var20 = 17;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.unsafe_rawColors;
                var20 = var20.GUILD_BOOSTING_PINK;
                var16.color = var20;
                var16 = var19.bind(var3)(var18, var16);
                var7.icon = var16;
                var7.grow = var13;
                var16 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 18;
                    var2 = var3[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var2);
                    var6 = var7.trackWithMetadata;
                    var2 = _closure1_slot9;
                    var5 = var2.PREMIUM_GUILD_PROMOTION_OPENED;
                    var2 = {};
                    var8 = {};
                    var9 = _closure1_slot11;
                    var9 = var9.GUILD_POPOUT;
                    var8.section = var9;
                    var9 = _closure1_slot10;
                    var9 = var9.BOOST_GEM_ICON;
                    var8.object = var9;
                    var2.location = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = 19;
                    var2 = var3[var2];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openApplyBoostModal;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7.onPress = var16;
                var11 = var2.bind(var3)(var11, var7);
                var7 = new Array(4);
                var7[0] = var11;
                if (!var10) {
                    _fun96617_ip = 674;
                    continue _fun96617
                }
            case 548:
                var18 = _closure1_slot13;
                var23 = _closure1_slot0;
                var21 = _closure1_slot3;
                var11 = var21[var9];
                var11 = var23.bind(var3)(var11);
                var16 = var11.IconButton;
                var11 = {};
                var11.variant = var17;
                var19 = 15;
                var20 = var21[var19];
                var20 = var23.bind(var3)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var19 = var21[var19];
                var19 = var23.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.VINpSK;
                var19 = var20.bind(var22)(var19);
                var11.label = var19;
                var20 = _closure1_slot1;
                var19 = 21;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var11.icon = var19;
                var11.grow = var13;
                var19 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var11.onPress = var19;
                var10 = var18.bind(var3)(var16, var11);
            case 674:
                var7[1] = var10;
                var16 = _closure1_slot13;
                var23 = _closure1_slot0;
                var21 = _closure1_slot3;
                var10 = var21[var9];
                var10 = var23.bind(var3)(var10);
                var11 = var10.IconButton;
                var10 = {};
                var10.variant = var17;
                var20 = 15;
                var18 = var21[var20];
                var18 = var23.bind(var3)(var18);
                var22 = var18.intl;
                var19 = var22.string;
                var18 = var21[var20];
                var18 = var23.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.HcoRu0;
                var18 = var19.bind(var22)(var18);
                var10.label = var18;
                var19 = _closure1_slot1;
                var18 = 22;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var10.icon = var18;
                var10.grow = var13;
                var18 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 19;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10.onPress = var18;
                var10 = var16.bind(var3)(var11, var10);
                var7[2] = var10;
                if (!var8) {
                    _fun96617_ip = 984;
                    continue _fun96617
                }
            case 814:
                var11 = _closure1_slot13;
                var19 = _closure1_slot0;
                var16 = _closure1_slot3;
                var9 = var16[var9];
                var9 = var19.bind(var3)(var9);
                var10 = var9.IconButton;
                var9 = {};
                var9.variant = var17;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["3D5yo/"];
                var16 = var17.bind(var18)(var16);
                var9.label = var16;
                if (var14) {
                    _fun96617_ip = 920;
                    continue _fun96617
                }
            case 898:
                var16 = _closure1_slot1;
                var17 = _closure1_slot3;
                var14 = 25;
                var14 = var17[var14];
                var14 = var16.bind(var3)(var14);
                _fun96617_ip = 958;
                continue _fun96617;
            case 920:
                var17 = _closure1_slot13;
                var16 = _closure1_slot0;
                var18 = _closure1_slot3;
                var15 = 24;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.SettingsCircleIcon;
                var15 = {};
                var14 = var17.bind(var3)(var16, var15);
            case 958:
                var9.icon = var14;
                var9.grow = var13;
                var12 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 19;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 26;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9.onPress = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 984:
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1671, 1670, 660, 33, 10336, 12590, 6713, 566, 8335, 8328, 6443, 7508, 1234, 7678, 671, 4302, 3278, 9949, 8646, 6665, 4698, 12591, 5370, 8152, 2]);