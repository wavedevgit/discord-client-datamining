// modules/applications/native/AppInteractionInfoActionSheet.tsx
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'paddingVertical': 12,
        'paddingHorizontal': 16,
        'alignItems': 'center'
    };
    var3.itemContainer = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'paddingLeft': 12
    };
    var3.itemLabel = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/native/AppInteractionInfoActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun76367: for (var _fun76367_ip = 0;;) switch (_fun76367_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.message;
                var _closure2_slot0 = var23;
                var15 = var0.guildId;
                var0 = var0.onBack;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot10;
                var14 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var7 = var1.bottom;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var9
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.onBack = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var0 = var23.interactionMetadata;
                var5 = null;
                var2 = var5 == var0;
                var1 = undefined;
                if (var2) {
                    _fun76367_ip = 180;
                    continue _fun76367
                }
            case 138:
                var2 = var0.authorizing_integration_owners;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 9;
                var0 = var8[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.ApplicationIntegrationType;
                var0 = var0.USER_INSTALL;
                var1 = var2[var0];
            case 180:
                _closure2_slot2 = var1;
                var2 = var23.interactionMetadata;
                var6 = var5 == var2;
                var0 = undefined;
                if (var6) {
                    _fun76367_ip = 241;
                    continue _fun76367
                }
            case 199:
                var6 = var2.authorizing_integration_owners;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 9;
                var2 = var10[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ApplicationIntegrationType;
                var2 = var2.GUILD_INSTALL;
                var0 = var6[var2];
            case 241:
                _closure2_slot3 = var0;
                var2 = var23.interactionMetadata;
                var6 = var5 == var2;
                var0 = undefined;
                if (var6) {
                    _fun76367_ip = 270;
                    continue _fun76367
                }
            case 260:
                var2 = var2.user;
                var0 = var2.id;
            case 270:
                _closure2_slot4 = var0;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 10;
                var0 = var8[var2];
                var16 = var6.bind(var3)(var0);
                var13 = var16.useStateFromStores;
                var0 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var0;
                var10 = function() { // Environment: var9
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var13.bind(var16)(var11, var10);
                _closure2_slot5 = var22;
                var10 = var8[var2];
                var16 = var6.bind(var3)(var10);
                var13 = var16.useStateFromStores;
                var10 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var9
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var13.bind(var16)(var11, var10);
                var2 = var8[var2];
                var8 = var6.bind(var3)(var2);
                var6 = var8.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var6.bind(var8)(var2, var0);
                _closure2_slot6 = var0;
                var8 = _closure1_slot3;
                var6 = var8.useEffect;
                var2 = new Array(2);
                var2[0] = var22;
                var2[1] = var1;
                var1 = function() { // Environment: var9
                    _fun76372: for (var _fun76372_ip = 0;;) switch (_fun76372_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var3 = null;
                            var1 = var3 == var1;
                            if (!var1) {
                                _fun76372_ip = 24;
                                continue _fun76372
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun76372_ip = 67;
                                continue _fun76372
                            }
                        case 27:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.getUser;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var1, var2);
                var17 = var0;
                if (!(var5 == var17)) {
                    _fun76367_ip = 501;
                    continue _fun76367
                }
            case 447:
                var2 = _closure1_slot5;
                var1 = var23.interactionMetadata;
                var6 = var5 == var1;
                var0 = undefined;
                if (var6) {
                    _fun76367_ip = 471;
                    continue _fun76367
                }
            case 466:
                var0 = var1.user;
            case 471:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var30 = var1;
                var29 = var0;
                var0 = new var30[var2](var29, var28);
                var0 = var0 instanceof Object ? var0 : var1;
                _closure2_slot6 = var0;
                var17 = var0;
            case 501:
                if (!(var5 == var19)) {
                    _fun76367_ip = 860;
                    continue _fun76367
                }
            case 508:
                var0 = var5 != var22;
                var6 = null;
                if (!var0) {
                    _fun76367_ip = 1150;
                    continue _fun76367
                }
            case 520:
                var2 = _closure1_slot8;
                var24 = _closure1_slot0;
                var27 = _closure1_slot2;
                var0 = 15;
                var0 = var27[var0];
                var0 = var24.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var8 = function() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot5;
                    var4 = var4.id;
                    var0.userId = var4;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var0.channelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.onPress = var8;
                var11 = _closure1_slot9;
                var10 = _closure1_slot4;
                var8 = {};
                var13 = var14.itemContainer;
                var8.style = var13;
                var16 = _closure1_slot1;
                var18 = 17;
                var13 = var27[var18];
                var16 = var16.bind(var3)(var13);
                var13 = {};
                var13.user = var22;
                var18 = var27[var18];
                var18 = var24.bind(var3)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.REFRESH_MEDIUM_32;
                var13.size = var18;
                var13.guildId = var15;
                var16 = var2.bind(var3)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var16 = {};
                var18 = var14.itemLabel;
                var16.style = var18;
                var20 = 13;
                var18 = var27[var20];
                var18 = var24.bind(var3)(var18);
                var21 = var18.Text;
                var18 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var22 = var22.username;
                var18.children = var22;
                var21 = var2.bind(var3)(var21, var18);
                var18 = new Array(2);
                var18[0] = var21;
                var20 = var27[var20];
                var20 = var24.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var22 = 14;
                var25 = var27[var22];
                var25 = var24.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.format;
                var22 = var27[var22];
                var22 = var24.bind(var3)(var22);
                var22 = var22.t;
                var24 = var22.ShLXXB;
                var22 = {};
                var27 = var23.author;
                var27 = var27.username;
                var22.application = var27;
                var22 = var25.bind(var26)(var24, var22);
                var20.children = var22;
                var20 = var2.bind(var3)(var21, var20);
                var18[1] = var20;
                var16.children = var18;
                var16 = var11.bind(var3)(var10, var16);
                var13[1] = var16;
                var8.children = var13;
                var8 = var11.bind(var3)(var10, var8);
                var0.children = var8;
                var6 = var2.bind(var3)(var1, var0);
                _fun76367_ip = 1150;
                continue _fun76367;
            case 860:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var14.itemContainer;
                var0.style = var8;
                var18 = _closure1_slot8;
                var10 = _closure1_slot1;
                var24 = _closure1_slot2;
                var11 = 12;
                var8 = var24[var11];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var8.guild = var19;
                var20 = _closure1_slot0;
                var11 = var24[var11];
                var11 = var20.bind(var3)(var11);
                var11 = var11.GuildIconSizes;
                var11 = var11.SMALL_32;
                var8.size = var11;
                var10 = var18.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var11 = var14.itemLabel;
                var10.style = var11;
                var13 = 13;
                var11 = var24[var13];
                var11 = var20.bind(var3)(var11);
                var16 = var11.Text;
                var11 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var19.name;
                var11.children = var19;
                var16 = var18.bind(var3)(var16, var11);
                var11 = new Array(2);
                var11[0] = var16;
                var13 = var24[var13];
                var13 = var20.bind(var3)(var13);
                var16 = var13.Text;
                var13 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var19 = 14;
                var21 = var24[var19];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var24[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19.ShLXXB;
                var19 = {};
                var23 = var23.author;
                var23 = var23.username;
                var19.application = var23;
                var19 = var21.bind(var22)(var20, var19);
                var13.children = var19;
                var13 = var18.bind(var3)(var16, var13);
                var11[1] = var13;
                var10.children = var11;
                var10 = var2.bind(var3)(var1, var10);
                var8[1] = var10;
                var0.children = var8;
                var6 = var2.bind(var3)(var1, var0);
            case 1150:
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 18;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.header = var4;
                var4 = {};
                var4.paddingBottom = var7;
                var0.bodyStyles = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var5 != var17;
                var5 = null;
                if (!var6) {
                    _fun76367_ip = 1537;
                    continue _fun76367
                }
            case 1218:
                var8 = _closure1_slot8;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var6 = 15;
                var6 = var21[var6];
                var6 = var20.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var9 = function() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot6;
                    var4 = var4.id;
                    var0.userId = var4;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var0.channelId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6.onPress = var9;
                var11 = _closure1_slot9;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = var14.itemContainer;
                var9.style = var13;
                var13 = _closure1_slot1;
                var16 = 17;
                var12 = var21[var16];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.user = var17;
                var16 = var21[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.REFRESH_MEDIUM_32;
                var12.size = var16;
                var12.guildId = var15;
                var13 = var8.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var14 = var14.itemLabel;
                var13.style = var14;
                var15 = 13;
                var14 = var21[var15];
                var14 = var20.bind(var3)(var14);
                var16 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var17.username;
                var14.children = var17;
                var16 = var8.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var15 = var21[var15];
                var15 = var20.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var17 = 14;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["04gxNg"];
                var17 = var18.bind(var19)(var17);
                var15.children = var17;
                var15 = var8.bind(var3)(var16, var15);
                var14[1] = var15;
                var13.children = var14;
                var13 = var11.bind(var3)(var10, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1537:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1628, 1410, 1621, 33, 1297, 1568, 9698, 5355, 566, 6983, 7420, 3943, 1234, 4905, 7377, 5457, 4934, 2]);