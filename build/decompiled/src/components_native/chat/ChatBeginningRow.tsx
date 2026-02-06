// components_native/chat/ChatBeginningRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun90788: for (var _fun90788_ip = 0;;) switch (_fun90788_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userId;
                var _closure2_slot0 = var2;
                var9 = var0.guildId;
                var _closure2_slot1 = var9;
                var2 = _closure1_slot44;
                var3 = undefined;
                var14 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 42;
                var5 = var6[var2];
                var10 = var4.bind(var3)(var5);
                var8 = var10.useStateFromStores;
                var5 = _closure1_slot24;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var1
                    var2 = _closure1_slot24;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var8.bind(var10)(var7, var5);
                var5 = var6[var2];
                var11 = var4.bind(var3)(var5);
                var8 = var11.useStateFromStores;
                var5 = _closure1_slot19;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var1
                    _fun90790: for (var _fun90790_ip = 0;;) switch (_fun90790_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun90790_ip = 43;
                                continue _fun90790
                            }
                        case 16:
                            var4 = _closure1_slot19;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 43:
                            return var0;
                    }
                };
                var5 = var8.bind(var11)(var7, var5);
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useStateFromStores;
                var7 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var1
                    var0 = _closure1_slot8;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var11 = var4.bind(var6)(var2, var1);
                var1 = null;
                var4 = var1 == var5;
                var2 = undefined;
                if (var4) {
                    _fun90788_ip = 181;
                    continue _fun90788
                }
            case 175:
                var2 = var5.nick;
            case 181:
                if (!(var1 == var2)) {
                    _fun90788_ip = 216;
                    continue _fun90788
                }
            case 185:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 43;
                var4 = var7[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.getName;
                var2 = var4.bind(var6)(var10);
            case 216:
                var6 = var1 != var2;
                var4 = '???';
                if (!var6) {
                    _fun90788_ip = 232;
                    continue _fun90788
                }
            case 229:
                var4 = var2;
            case 232:
                var2 = var1 == var5;
                var6 = undefined;
                if (var2) {
                    _fun90788_ip = 247;
                    continue _fun90788
                }
            case 241:
                var6 = var5.colorString;
            case 247:
                var7 = var1 != var6;
                var2 = null;
                if (!var7) {
                    _fun90788_ip = 259;
                    continue _fun90788
                }
            case 256:
                var2 = var6;
            case 259:
                var7 = var1 == var5;
                var6 = undefined;
                if (var7) {
                    _fun90788_ip = 274;
                    continue _fun90788
                }
            case 268:
                var6 = var5.colorStrings;
            case 274:
                var7 = var1 != var6;
                var5 = null;
                if (!var7) {
                    _fun90788_ip = 286;
                    continue _fun90788
                }
            case 283:
                var5 = var6;
            case 286:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 44;
                var7 = var12[var6];
                var13 = var8.bind(var3)(var7);
                var7 = var13.useProcessColorStringsArray;
                var7 = var7.bind(var13)(var5);
                var6 = var12[var6];
                var8 = var8.bind(var3)(var6);
                var6 = var8.useIsRoleStyleAndRoleColorsEligibleForERC;
                var12 = var1 == var10;
                var15 = var5;
                var5 = undefined;
                if (var12) {
                    _fun90788_ip = 349;
                    continue _fun90788
                }
            case 344:
                var5 = var10.id;
            case 349:
                var21 = var8;
                var20 = var9;
                var19 = var5;
                var18 = var11;
                var17 = var7;
                var8 = var21[var6](var20, var19, var18, var17, var16);
                var5 = 'username';
                if (!(var5 !== var11)) {
                    _fun90788_ip = 541;
                    continue _fun90788
                }
            case 379:
                var9 = _closure1_slot43;
                var6 = _closure1_slot42;
                var5 = {};
                var10 = 'dot';
                var11 = var10 === var11;
                if (!var11) {
                    _fun90788_ip = 404;
                    continue _fun90788
                }
            case 400:
                var11 = var1 != var2;
            case 404:
                if (!var11) {
                    _fun90788_ip = 464;
                    continue _fun90788
                }
            case 407:
                var13 = _closure1_slot41;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 46;
                var10 = var16[var10];
                var10 = var12.bind(var3)(var10);
                var12 = var10.RoleDot;
                var10 = {};
                var10.color = var2;
                var10.colors = var15;
                var14 = var14.threadCreatorRoleDot;
                var10.containerStyles = var14;
                var11 = var13.bind(var3)(var12, var10);
            case 464:
                var10 = new Array(2);
                var10[0] = var11;
                var13 = _closure1_slot41;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 33;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var11.children = var4;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var5.children = var10;
                var5 = var9.bind(var3)(var6, var5);
                return var5;
            case 541:
                var1 = var1 != var2;
                var5 = undefined;
                if (!var1) {
                    _fun90788_ip = 559;
                    continue _fun90788
                }
            case 550:
                var1 = {};
                var1.color = var2;
                var5 = var1;
            case 559:
                var2 = _closure1_slot41;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 33;
                var0 = var10[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var6 = 45;
                var6 = var10[var6];
                var9 = var9.bind(var3)(var6);
                var6 = var9.isFabric;
                var6 = var6.bind(var9)();
                var6 = !var6;
                var0.experimental_useNativeText = var6;
                var6 = undefined;
                if (!var8) {
                    _fun90788_ip = 628;
                    continue _fun90788
                }
            case 625:
                var6 = var7;
            case 628:
                var0.gradientColors = var6;
                var0.style = var5;
                var5 = 'text-md/semibold';
                var0.variant = var5;
                var5 = 'text-default';
                var0.color = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var0 = function arg0() {
        _fun90792: for (var _fun90792_ip = 0;;) switch (_fun90792_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channel;
                var _closure2_slot0 = var1;
                var0 = var2.user;
                var3 = var2.showingSpamBanner;
                var11 = var2.color;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun90792_ip = 71;
                    continue _fun90792
                }
            case 36:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 67;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.Colors;
                var11 = var5.RED;
            case 71:
                var13 = var2.style;
                var10 = var2.renderIcon;
                var _closure2_slot1 = var4;
                var2 = _closure1_slot44;
                var14 = var2.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 68;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = var6.useIsRelationshipTypeSpamReportable;
                var2 = var0.id;
                var2 = var5.bind(var6)(var2);
                if (var2) {
                    _fun90792_ip = 142;
                    continue _fun90792
                }
            case 136:
                var2 = var0.bot;
            case 142:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 69;
                var5 = var7[var5];
                var6 = var6.bind(var4)(var5);
                var5 = var6.useLongestChannelMessageBeforeReply;
                var1 = var1.id;
                var0 = var0.id;
                var1 = var5.bind(var6)(var1, var0);
                _closure2_slot1 = var1;
                var15 = null;
                var0 = null;
                if (var3) {
                    _fun90792_ip = 416;
                    continue _fun90792
                }
            case 198:
                var0 = null;
                if (!var2) {
                    _fun90792_ip = 416;
                    continue _fun90792
                }
            case 206:
                var1 = var15 == var1;
                var0 = null;
                if (var1) {
                    _fun90792_ip = 416;
                    continue _fun90792
                }
            case 218:
                var3 = _closure1_slot41;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var14.buttonContainer;
                var1.style = var5;
                var7 = _closure1_slot41;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var12 = 67;
                var5 = var5[var12];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                if (!(var15 == var13)) {
                    _fun90792_ip = 274;
                    continue _fun90792
                }
            case 268:
                var13 = var14.spamButton;
            case 274:
                var5.style = var13;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.Sizes;
                var12 = var12.XSMALL;
                var5.size = var12;
                var5.color = var11;
                var13 = _closure1_slot0;
                var8 = 28;
                var11 = var14[var8];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var14[var8];
                var8 = var13.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.HHZmDn;
                var8 = var11.bind(var12)(var8);
                var5.text = var8;
                var8 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 70;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.showReportModalForFirstDM;
                    var2 = _closure2_slot1;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 71;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.closePrivateChannel;
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = true;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5.onPress = var8;
                var8 = undefined;
                if (!var10) {
                    _fun90792_ip = 395;
                    continue _fun90792
                }
            case 388:
                var8 = function() { // Environment: var9
                    var3 = _closure1_slot41;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 38;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.SMALL;
                    var0.size = var4;
                    var4 = 72;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 395:
                var5.renderIcon = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 416:
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var0 = function arg0() {
        _fun90796: for (var _fun90796_ip = 0;;) switch (_fun90796_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.user;
                var1 = var2.application;
                var _closure2_slot0 = var1;
                var3 = var2.channel;
                var _closure2_slot1 = var3;
                var2 = var2.oauth2Token;
                var _closure2_slot2 = var2;
                var2 = _closure1_slot44;
                var4 = undefined;
                var12 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 42;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var8
                    var1 = _closure1_slot9;
                    var0 = var1.getSelfEmbeddedActivities;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var5.bind(var6)(var3, var2);
                var _closure2_slot3 = var2;
                var3 = var0.bot;
                var2 = null;
                var0 = null;
                if (!var3) {
                    _fun90796_ip = 335;
                    continue _fun90796
                }
            case 121:
                var1 = var2 != var1;
                var0 = null;
                if (!var1) {
                    _fun90796_ip = 335;
                    continue _fun90796
                }
            case 133:
                var3 = _closure1_slot41;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var12.buttonContainer;
                var1.style = var5;
                var7 = _closure1_slot41;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 67;
                var5 = var13[var10];
                var6 = var11.bind(var4)(var5);
                var5 = {};
                var12 = var12.appDMButton;
                var5.style = var12;
                var12 = var13[var10];
                var12 = var11.bind(var4)(var12);
                var12 = var12.Sizes;
                var12 = var12.XSMALL;
                var5.size = var12;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.Colors;
                var10 = var10.GREY;
                var5.color = var10;
                var12 = _closure1_slot0;
                var9 = 28;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["5S3sQF"];
                var9 = var10.bind(var11)(var9);
                var5.text = var9;
                var9 = function() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 73;
                    var2 = var4[var0];
                    var0 = undefined;
                    var9 = var3.bind(var0)(var2);
                    var8 = var9.openAlert;
                    var10 = _closure1_slot41;
                    var3 = _closure1_slot1;
                    var2 = 74;
                    var2 = var4[var2];
                    var7 = var3.bind(var0)(var2);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.application = var6;
                    var11 = function() {
                        _fun90799: for (var _fun90799_ip = 0;;) switch (_fun90799_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 75;
                                var1 = var3[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var5 = var6.delete;
                                var1 = _closure2_slot2;
                                var1 = var1.id;
                                var1 = var5.bind(var6)(var1);
                                var6 = _closure2_slot3;
                                var5 = var6.get;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var6 = var5.bind(var6)(var1);
                                var1 = 76;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.leaveActivity;
                                var1 = {};
                                var5 = null;
                                var7 = var5 == var6;
                                var5 = undefined;
                                if (var7) {
                                    _fun90799_ip = 106;
                                    continue _fun90799
                                }
                            case 101:
                                var5 = var6.location;
                            case 106:
                                var1.location = var5;
                                var4 = _closure2_slot0;
                                var4 = var4.id;
                                var1.applicationId = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var2.onDelete = var11;
                    var7 = var10.bind(var0)(var7, var2);
                    var2 = 'confirm-delete-authed-app';
                    var2 = var8.bind(var9)(var2, var7);
                    var2 = 77;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot25;
                    var2 = var1.APP_MANAGE_CTA_CLICKED;
                    var1 = {};
                    var6 = var6.id;
                    var1.application_id = var6;
                    var5 = _closure2_slot1;
                    var6 = var5.id;
                    var1.channel_id = var6;
                    var5 = var5.type;
                    var1.channel_type = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5.onPress = var9;
                var8 = function() {
                    var3 = _closure1_slot41;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 38;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.SMALL;
                    var0.size = var4;
                    var4 = 78;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderIcon = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 335:
                return var0;
        }
    };
    var _closure1_slot57 = var0;
    var0 = function arg0() {
        _fun90801: for (var _fun90801_ip = 0;;) switch (_fun90801_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var0 = var0.user;
                var1 = _closure1_slot44;
                var4 = undefined;
                var14 = var1.bind(var4)();
                var _closure2_slot1 = var14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 42;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot23;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    var3 = _closure1_slot23;
                    var2 = var3.isChannelMuted;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = null;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var9 = var3.bind(var5)(var2, var1);
                var _closure2_slot2 = var9;
                var1 = var0.bot;
                var0 = null;
                if (!var1) {
                    _fun90801_ip = 343;
                    continue _fun90801
                }
            case 104:
                var3 = _closure1_slot41;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var14.buttonContainer;
                var1.style = var5;
                var7 = _closure1_slot41;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var13 = 67;
                var5 = var11[var13];
                var6 = var12.bind(var4)(var5);
                var5 = {};
                var14 = var14.appDMButton;
                var5.style = var14;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.XSMALL;
                var5.size = var11;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Colors;
                if (var9) {
                    _fun90801_ip = 219;
                    continue _fun90801
                }
            case 211:
                var11 = var12.RED;
                _fun90801_ip = 225;
                continue _fun90801;
            case 219:
                var11 = var12.GREY;
            case 225:
                var5.color = var11;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 28;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun90801_ip = 289;
                    continue _fun90801
                }
            case 276:
                var9 = var10.w4m945;
                var9 = var11.bind(var12)(var9);
                _fun90801_ip = 300;
                continue _fun90801;
            case 289:
                var10 = var10.YqAjXy;
                var9 = var11.bind(var12)(var10);
            case 300:
                var5.text = var9;
                var9 = function() {
                    _fun90803: for (var _fun90803_ip = 0;;) switch (_fun90803_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var1 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            if (var3) {
                                _fun90803_ip = 103;
                                continue _fun90803
                            }
                        case 21:
                            var3 = 83;
                            var3 = var8[var3];
                            var9 = undefined;
                            var7 = var1.bind(var9)(var3);
                            var6 = var7.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 85;
                            var3 = var8[var3];
                            var5 = var4.bind(var9)(var3);
                            var3 = 84;
                            var4 = var8[var3];
                            var3 = var8.paths;
                            var5 = var5.bind(var9)(var4, var3);
                            var4 = {};
                            var3 = _closure2_slot0;
                            var4.channel = var3;
                            var3 = 'MessageNotificationChannelActionSheet';
                            var3 = var6.bind(var7)(var5, var3, var4);
                            _fun90803_ip = 282;
                            continue _fun90803;
                        case 103:
                            var3 = 79;
                            var3 = var8[var3];
                            var7 = undefined;
                            var9 = var1.bind(var7)(var3);
                            var5 = var9.updateChannelOverrideSettings;
                            var2 = _closure2_slot0;
                            var12 = var2.id;
                            var3 = {};
                            var2 = false;
                            var3.muted = var2;
                            var6 = _closure1_slot0;
                            var0 = 80;
                            var0 = var8[var0];
                            var0 = var6.bind(var7)(var0);
                            var0 = var0.NotificationLabels;
                            var10 = var0.Unmuted;
                            var13 = null;
                            var14 = var9;
                            var11 = var3;
                            var0 = var14[var5](var13, var12, var11, var10, var9);
                            var0 = 81;
                            var0 = var8[var0];
                            var2 = var1.bind(var7)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var3 = 'NOTIFICATIONS_UNMUTED';
                            var0.key = var3;
                            var3 = 28;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.t;
                            var3 = var3["/6kulz"];
                            var3 = var4.bind(var5)(var3);
                            var0.content = var3;
                            var3 = function() {
                                var3 = _closure1_slot41;
                                var2 = _closure1_slot7;
                                var1 = {};
                                var7 = _closure2_slot1;
                                var4 = var7.unmutedNotificationContainer;
                                var1.style = var4;
                                var6 = _closure1_slot41;
                                var9 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var0 = 38;
                                var4 = var10[var0];
                                var0 = undefined;
                                var5 = var9.bind(var0)(var4);
                                var4 = {};
                                var8 = 82;
                                var8 = var10[var8];
                                var8 = var9.bind(var0)(var8);
                                var4.source = var8;
                                var8 = 26;
                                var8 = var10[var8];
                                var8 = var9.bind(var0)(var8);
                                var8 = var8.unsafe_rawColors;
                                var8 = var8.WHITE;
                                var4.color = var8;
                                var7 = var7.unmutedNotification;
                                var4.style = var7;
                                var4 = var6.bind(var0)(var5, var4);
                                var1.children = var4;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.icon = var3;
                            var0 = var1.bind(var2)(var0);
                        case 282:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onPress = var9;
                var8 = function() {
                    _fun90805: for (var _fun90805_ip = 0;;) switch (_fun90805_ip) {
                        case 0:
                            var3 = _closure1_slot41;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 38;
                            var0 = var6[var4];
                            var2 = undefined;
                            var1 = var7.bind(var2)(var0);
                            var0 = {};
                            var4 = var6[var4];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.Sizes;
                            var4 = var4.SMALL;
                            var0.size = var4;
                            var6 = _closure2_slot2;
                            var9 = _closure1_slot2;
                            if (var6) {
                                _fun90805_ip = 79;
                                continue _fun90805
                            }
                        case 70:
                            var6 = 82;
                            var6 = var9[var6];
                            _fun90805_ip = 86;
                            continue _fun90805;
                        case 79:
                            var8 = 86;
                            var6 = var9[var8];
                        case 86:
                            var6 = var7.bind(var2)(var6);
                            var0.source = var6;
                            var6 = _closure2_slot2;
                            var4 = undefined;
                            if (var6) {
                                _fun90805_ip = 135;
                                continue _fun90805
                            }
                        case 104:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 26;
                            var5 = var7[var5];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.unsafe_rawColors;
                            var4 = var5.WHITE;
                        case 135:
                            var0.color = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var5.renderIcon = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 343:
                return var0;
        }
    };
    var _closure1_slot58 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var14 = 8;
    var3 = var5[var14];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
    var _closure1_slot14 = var3;
    var3 = 11;
    var6 = var5[var3];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot16 = var3;
    var13 = 12;
    var3 = var5[var13];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var16 = 16;
    var3 = var5[var16];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot24 = var3;
    var12 = 20;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot25 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot26 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot27 = var6;
    var6 = var3.ChannelSettingsSections;
    var _closure1_slot28 = var6;
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot29 = var6;
    var6 = var3.GuildSettingsSections;
    var _closure1_slot30 = var6;
    var6 = var3.HelpdeskArticles;
    var _closure1_slot31 = var6;
    var6 = var3.InstantInviteSources;
    var _closure1_slot32 = var6;
    var6 = var3.Permissions;
    var _closure1_slot33 = var6;
    var6 = var3.RelationshipTypes;
    var _closure1_slot34 = var6;
    var6 = var3.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot35 = var6;
    var3 = var3.WELCOME_OLD_GUILD_AGE_THRESHOLD;
    var _closure1_slot36 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot37 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsActions;
    var _closure1_slot38 = var6;
    var3 = var3.AnalyticsSetupTypes;
    var _closure1_slot39 = var3;
    var3 = 23;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
    var _closure1_slot40 = var3;
    var17 = 24;
    var3 = var5[var17];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot41 = var6;
    var6 = var3.Fragment;
    var _closure1_slot42 = var6;
    var3 = var3.jsxs;
    var _closure1_slot43 = var3;
    var3 = 25;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'paddingVertical': 8,
        'paddingHorizontal': 12,
        'width': '100%'
    };
    var3.container = var8;
    var8 = {};
    var8.marginTop = var16;
    var3.title = var8;
    var8 = {
        'marginBottom': 16,
        'lineHeight': 20
    };
    var3.subtitle = var8;
    var8 = {
        'borderRadius': null,
        'marginTop': 16,
        'width': '100%'
    };
    var10 = 26;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.gdmInviteFriends = var8;
    var8 = {
        'borderRadius': null,
        'marginTop': 8,
        'width': '100%'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.lg;
    var8.borderRadius = var9;
    var3.gdmShareInviteLink = var8;
    var8 = {};
    var8.marginTop = var16;
    var3.gdmShareInviteLinkNoRelationships = var8;
    var8 = {};
    var8.marginLeft = var14;
    var3.ctaLabel = var8;
    var9 = 'row';
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.ctaContainer = var8;
    var15 = 'center';
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.ctaButton = var8;
    var8 = {};
    var8.paddingRight = var17;
    var3.ctaAddRoles = var8;
    var8 = {};
    var8.marginTop = var16;
    var3.channelIcon = var8;
    var8 = {};
    var8.marginBottom = var16;
    var3.avatar = var8;
    var8 = {};
    var8.marginBottom = var16;
    var3.avatarRedesign = var8;
    var8 = {
        'paddingHorizontal': 8,
        'alignItems': 'center'
    };
    var3.centerHeader = var8;
    var8 = {};
    var8.textAlign = var15;
    var3.gdmText = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.dmTitle = var8;
    var8 = {};
    var8.marginTop = var14;
    var3.dmBeginningMessage = var8;
    var8 = {};
    var8.marginTop = var13;
    var3.provisionalAccountExplainer = var8;
    var8 = {
        'marginTop': 8,
        'marginLeft': 8,
        'height': 26
    };
    var3.mutualGuildsLabel = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.mutualGuildsIcons = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginTop': 6
    };
    var3.mutualGuildsContainer = var8;
    var8 = {
        'width': 64,
        'height': 64,
        'borderRadius': null,
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xxl;
    var8.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var13;
    var3.iconContainer = var8;
    var8 = {};
    var8.lineHeight = var12;
    var3.threadDetails = var8;
    var8 = {
        'paddingRight': 4,
        'paddingTop': 2
    };
    var3.threadCreatorRoleDot = var8;
    var8 = {
        'marginTop': 8,
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.tagContainer = var8;
    var8 = {
        'marginTop': 16,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.buttonContainer = var8;
    var8 = {
        'flexGrow': 0,
        'paddingHorizontal': 8,
        'marginRight': 8
    };
    var3.spamButton = var8;
    var8 = {
        'flexGrow': 0,
        'paddingHorizontal': 0,
        'marginRight': 8
    };
    var3.spamButtonNoPadding = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var12;
    var3.forumPostIconColor = var8;
    var8 = {
        'borderRadius': null,
        'backgroundColor': null,
        'height': 24,
        'width': 24,
        'padding': 4,
        'alignContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_POSITIVE;
    var8.backgroundColor = var10;
    var3.unmutedNotificationContainer = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.unmutedNotification = var8;
    var8 = {};
    var8.flexDirection = var9;
    var3.appDMButtonContainer = var8;
    var8 = {
        'flexGrow': 0,
        'marginRight': 8
    };
    var3.appDMButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot44 = var3;
    var3 = function arg0() {
        _fun90806: for (var _fun90806_ip = 0;;) switch (_fun90806_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isPrivate;
                var1 = var2.isThread;
                var3 = var2.isNSFW;
                var2 = var2.isForumPost;
                var5 = _closure1_slot44;
                var3 = undefined;
                var5 = var5.bind(var3)();
                if (var2) {
                    _fun90806_ip = 349;
                    continue _fun90806
                }
            case 46:
                if (var1) {
                    _fun90806_ip = 216;
                    continue _fun90806
                }
            case 52:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var0) {
                    _fun90806_ip = 83;
                    continue _fun90806
                }
            case 63:
                var0 = 31;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.TextIcon;
                _fun90806_ip = 101;
                continue _fun90806;
            case 83:
                var0 = 30;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.TextLockIcon;
            case 101:
                var2 = _closure1_slot41;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = var5.iconContainer;
                var0.style = var6;
                var7 = _closure1_slot41;
                var6 = {
                    'size': 'lg',
                    'color': 'white'
                };
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 28;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.GK18KJ;
                var9 = var10.bind(var11)(var9);
                var6.accessibilityLabel = var9;
                var6 = var7.bind(var3)(var8, var6);
                var0.children = var6;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 216:
                var2 = _closure1_slot41;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = var5.iconContainer;
                var0.style = var6;
                var8 = _closure1_slot41;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 29;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.ThreadIcon;
                var6 = {
                    'size': 'lg',
                    'color': 'white'
                };
                var9 = 28;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["7Xm5QI"];
                var9 = var10.bind(var11)(var9);
                var6.accessibilityLabel = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.children = var6;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 349:
                var2 = _closure1_slot41;
                var1 = _closure1_slot7;
                var0 = {};
                var5 = var5.iconContainer;
                var0.style = var5;
                var6 = _closure1_slot41;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 27;
                var4 = var11[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.ChatIcon;
                var4 = {
                    'size': 'lg',
                    'color': 'white'
                };
                var7 = 28;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Y4REmB;
                var7 = var8.bind(var9)(var7);
                var4.accessibilityLabel = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot45 = var3;
    var3 = function arg0() {
        _fun90807: for (var _fun90807_ip = 0;;) switch (_fun90807_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.title;
                var9 = var0.subtitle;
                var14 = var0.isPrivate;
                var11 = var0.isThread;
                var16 = var0.isNSFW;
                var19 = var0.isForumPost;
                var1 = var0.subtitleLink;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot44;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 32;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsScreenReaderEnabled;
                var0 = var0.bind(var2)();
                var5 = null;
                var13 = var5 != var1;
                if (!var13) {
                    _fun90807_ip = 105;
                    continue _fun90807
                }
            case 102:
                var13 = var0;
            case 105:
                var2 = _closure1_slot43;
                var1 = _closure1_slot42;
                var0 = {};
                var8 = _closure1_slot41;
                var7 = _closure1_slot45;
                var4 = {};
                var4.isNSFW = var16;
                var4.isPrivate = var14;
                var4.isThread = var11;
                var4.isForumPost = var19;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var14 = _closure1_slot41;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 33;
                var7 = var7[var11];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = var10.title;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = {};
                var18 = 8;
                if (!var19) {
                    _fun90807_ip = 225;
                    continue _fun90807
                }
            case 223:
                var18 = 0;
            case 225:
                var17.marginBottom = var18;
                var16[1] = var17;
                var7.style = var16;
                var7.children = var15;
                var7 = var14.bind(var3)(var8, var7);
                var4[1] = var7;
                var5 = var5 != var9;
                if (!var5) {
                    _fun90807_ip = 355;
                    continue _fun90807
                }
            case 260:
                var8 = _closure1_slot41;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var11 = undefined;
                if (!var13) {
                    _fun90807_ip = 297;
                    continue _fun90807
                }
            case 293:
                var11 = 'link';
            case 297:
                var6.accessibilityRole = var11;
                var11 = undefined;
                if (!var13) {
                    _fun90807_ip = 313;
                    continue _fun90807
                }
            case 306:
                var11 = function() { // Environment: var12
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 34;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openURL;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 313:
                var6.onPress = var11;
                var10 = var10.subtitle;
                var6.style = var10;
                var10 = 'text-md/medium';
                var6.variant = var10;
                var10 = 'text-default';
                var6.color = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 355:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot46 = var3;
    var3 = function arg0() {
        _fun90809: for (var _fun90809_ip = 0;;) switch (_fun90809_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.canManageRoles;
                var5 = var0.canEdit;
                var6 = var0.isPrivate;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var7 = var0.theme;
                var0 = _closure1_slot44;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 35;
                var0 = var11[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useToken;
                var8 = _closure1_slot1;
                var0 = 26;
                var0 = var11[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.TEXT_LINK;
                var14 = var1.bind(var2)(var0, var7);
                var2 = _closure1_slot43;
                var1 = _closure1_slot7;
                var0 = {};
                var7 = var13.ctaContainer;
                var0.style = var7;
                if (!var6) {
                    _fun90809_ip = 136;
                    continue _fun90809
                }
            case 133:
                var6 = var4;
            case 136:
                if (!var6) {
                    _fun90809_ip = 438;
                    continue _fun90809
                }
            case 142:
                var8 = _closure1_slot43;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var4 = 36;
                var4 = var21[var4];
                var4 = var20.bind(var3)(var4);
                var7 = var4.PressableOpacity;
                var4 = {};
                var11 = 'button';
                var4.accessibilityRole = var11;
                var11 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 37;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openAddMembersActionSheet;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.onPress = var11;
                var12 = var13.ctaButton;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = var13.subtitle;
                var11[1] = var12;
                var4.style = var11;
                var15 = _closure1_slot41;
                var18 = _closure1_slot1;
                var16 = 38;
                var11 = var21[var16];
                var12 = var18.bind(var3)(var11);
                var11 = {};
                var17 = 39;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var11.source = var17;
                var16 = var21[var16];
                var16 = var20.bind(var3)(var16);
                var16 = var16.IconSizes;
                var16 = var16.REFRESH_SMALL_16;
                var11.size = var16;
                var11.color = var14;
                var12 = var15.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var16 = _closure1_slot41;
                var12 = 33;
                var12 = var21[var12];
                var12 = var20.bind(var3)(var12);
                var15 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var18 = var13.ctaLabel;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var13.ctaAddRoles;
                var17[1] = var18;
                var12.style = var17;
                var17 = 28;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.dMJ3Y6;
                var17 = var18.bind(var19)(var17);
                var12.children = var17;
                var12 = var16.bind(var3)(var15, var12);
                var11[1] = var12;
                var4.children = var11;
                var6 = var8.bind(var3)(var7, var4);
            case 438:
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun90809_ip = 709;
                    continue _fun90809
                }
            case 452:
                var8 = _closure1_slot43;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 36;
                var6 = var17[var6];
                var6 = var16.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var11 = 'button';
                var6.accessibilityRole = var11;
                var9 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 40;
                    var5 = var3[var1];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var5);
                    var5 = var6.setSection;
                    var4 = _closure1_slot28;
                    var4 = var4.OVERVIEW;
                    var4 = var5.bind(var6)(var4);
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6.onPress = var9;
                var11 = var13.ctaButton;
                var9 = new Array(2);
                var9[0] = var11;
                var11 = var13.subtitle;
                var9[1] = var11;
                var6.style = var9;
                var12 = _closure1_slot41;
                var9 = 41;
                var9 = var17[var9];
                var9 = var16.bind(var3)(var9);
                var11 = var9.PencilIcon;
                var9 = {};
                var15 = 'xs';
                var9.size = var15;
                var9.color = var14;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot41;
                var10 = 33;
                var10 = var17[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var14 = var13.ctaLabel;
                var13 = new Array(1);
                var13[0] = var14;
                var10.style = var13;
                var13 = 28;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.GE1Tlo;
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 709:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot47 = var3;
    var3 = function arg0() {
        _fun90812: for (var _fun90812_ip = 0;;) switch (_fun90812_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var0 = _closure1_slot44;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 47;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var14 = var0.bind(var4)(var11);
                var1 = _closure1_slot0;
                var0 = 48;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.isPrivateGuildChannel;
                var13 = var0.bind(var3)(var11);
                var0 = 49;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var0 = var3.useAppliedTags;
                var17 = var0.bind(var3)(var11);
                var0 = 42;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresObject;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var19
                    var2 = _closure1_slot10;
                    var1 = var2.getMessage;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var8 = var0.firstMessage;
                var0 = var11.threadMetadata;
                var9 = null;
                var1 = var9 == var0;
                var0 = null;
                if (var1) {
                    _fun90812_ip = 633;
                    continue _fun90812
                }
            case 171:
                var3 = _closure1_slot43;
                var2 = _closure1_slot42;
                var1 = {};
                var12 = _closure1_slot41;
                var6 = _closure1_slot46;
                var5 = {};
                var15 = var11.isNSFW;
                var15 = var15.bind(var11)();
                var5.isNSFW = var15;
                var5.title = var14;
                var5.isPrivate = var13;
                var13 = true;
                var5.isThread = var13;
                var13 = var11.isForumPost;
                var13 = var13.bind(var11)();
                var5.isForumPost = var13;
                var6 = var12.bind(var4)(var6, var5);
                var5 = new Array(4);
                var5[0] = var6;
                var6 = var11.isForumPost;
                var12 = var6.bind(var11)();
                var6 = null;
                if (!var12) {
                    _fun90812_ip = 329;
                    continue _fun90812
                }
            case 266:
                var13 = var17.length;
                var12 = 0;
                var12 = var13 > var12;
                var6 = null;
                if (!var12) {
                    _fun90812_ip = 329;
                    continue _fun90812
                }
            case 282:
                var14 = _closure1_slot41;
                var13 = _closure1_slot7;
                var12 = {};
                var15 = var10.tagContainer;
                var12.style = var15;
                var16 = var17.map;
                var15 = function(arg0) { // Environment: var19
                    var0 = arg0;
                    var4 = _closure1_slot41;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 50;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.AppliedForumTagPill;
                    var1 = {};
                    var1.tag = var0;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var12.children = var15;
                var6 = var14.bind(var4)(var13, var12);
            case 329:
                var5[1] = var6;
                var6 = var11.isForumPost;
                var6 = var6.bind(var11)();
                var6 = !var6;
                if (!var6) {
                    _fun90812_ip = 479;
                    continue _fun90812
                }
            case 352:
                var14 = _closure1_slot41;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 33;
                var12 = var20[var12];
                var12 = var16.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var15 = var10.threadDetails;
                var12.style = var15;
                var15 = 28;
                var17 = var20[var15];
                var17 = var16.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.format;
                var15 = var20[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.t;
                var16 = var15.imPXd5;
                var15 = {};
                var19 = function arg0, arg1() {
                    var4 = _closure1_slot41;
                    var3 = _closure1_slot55;
                    var2 = {};
                    var0 = _closure2_slot0;
                    var1 = var0.ownerId;
                    var2.userId = var1;
                    var0 = var0.guild_id;
                    var2.guildId = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var15.usernameHook = var19;
                var15 = var17.bind(var18)(var16, var15);
                var12.children = var15;
                var6 = var14.bind(var4)(var13, var12);
            case 479:
                var5[2] = var6;
                var6 = var11.isForumPost;
                var11 = var6.bind(var11)();
                var6 = null;
                if (!var11) {
                    _fun90812_ip = 619;
                    continue _fun90812
                }
            case 498:
                var8 = var9 == var8;
                var6 = null;
                if (!var8) {
                    _fun90812_ip = 619;
                    continue _fun90812
                }
            case 507:
                var9 = _closure1_slot41;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 33;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var10 = var10.threadDetails;
                var7.style = var10;
                var10 = 28;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.mE3KJN;
                var10 = var11.bind(var12)(var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 619:
                var5[3] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 633:
                return var0;
        }
    };
    var _closure1_slot48 = var3;
    var3 = function arg0() {
        _fun90816: for (var _fun90816_ip = 0;;) switch (_fun90816_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var12 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = 47;
                var1 = var0[var1];
                var3 = undefined;
                var2 = var12.bind(var3)(var1);
                var1 = true;
                var8 = var2.bind(var3)(var10, var1);
                var4 = _closure1_slot21;
                var7 = var4.can;
                var1 = _closure1_slot33;
                var2 = var1.MANAGE_CHANNELS;
                var7 = var7.bind(var4)(var2, var10);
                var11 = var4.can;
                var2 = var1.MANAGE_ROLES;
                var14 = var11.bind(var4)(var2, var10);
                var2 = var4.can;
                var1 = var1.READ_MESSAGE_HISTORY;
                var2 = var2.bind(var4)(var1, var10);
                var1 = _closure1_slot0;
                var4 = 48;
                var4 = var0[var4];
                var11 = var1.bind(var3)(var4);
                var4 = var11.isPrivateGuildChannel;
                var11 = var4.bind(var11)(var10);
                var4 = 51;
                var4 = var0[var4];
                var4 = var12.bind(var3)(var4);
                var13 = var4.bind(var3)();
                var16 = 28;
                var4 = var0[var16];
                var4 = var1.bind(var3)(var4);
                var12 = var4.intl;
                var4 = var12.formatToPlainString;
                var0 = var0[var16];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.q0tgLe;
                var0 = {};
                var0.channelName = var8;
                var15 = var4.bind(var12)(var1, var0);
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = var0[var16];
                var4 = var1.bind(var3)(var4);
                var4 = var4.intl;
                if (var11) {
                    _fun90816_ip = 331;
                    continue _fun90816
                }
            case 239:
                if (var2) {
                    _fun90816_ip = 289;
                    continue _fun90816
                }
            case 242:
                var17 = var4.format;
                var2 = var0[var16];
                var2 = var1.bind(var3)(var2);
                var2 = var2.t;
                var12 = var2.hPVEQG;
                var2 = {};
                var18 = var10.name;
                var2.channelName = var18;
                var12 = var17.bind(var4)(var12, var2);
                _fun90816_ip = 329;
                continue _fun90816;
            case 289:
                var18 = var4.formatToPlainString;
                var2 = var0[var16];
                var2 = var1.bind(var3)(var2);
                var2 = var2.t;
                var17 = var2.JHKUGB;
                var2 = {};
                var2.channelName = var8;
                var12 = var18.bind(var4)(var17, var2);
            case 329:
                _fun90816_ip = 385;
                continue _fun90816;
            case 331:
                var2 = var4.format;
                var0 = var0[var16];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.QuwqjG;
                var0 = {};
                var0.channelName = var8;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 52;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.parseTopic;
                    var0 = _closure2_slot0;
                    var2 = var0.topic;
                    var1 = {};
                    var0 = var0.id;
                    var1.channelId = var0;
                    var0 = true;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var0.topicHook = var5;
                var12 = var2.bind(var4)(var1, var0);
            case 385:
                var2 = _closure1_slot43;
                var1 = _closure1_slot42;
                var0 = {};
                var8 = _closure1_slot41;
                var5 = _closure1_slot46;
                var4 = {};
                var4.title = var15;
                var4.subtitle = var12;
                var4.isPrivate = var11;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var12 = _closure1_slot41;
                var8 = _closure1_slot47;
                var5 = {};
                var5.canManageRoles = var14;
                var5.canEdit = var7;
                var5.isPrivate = var11;
                var5.channel = var10;
                var5.theme = var13;
                var5 = var12.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = null;
                if (!var11) {
                    _fun90816_ip = 527;
                    continue _fun90816
                }
            case 482:
                var5 = null;
                if (!var7) {
                    _fun90816_ip = 527;
                    continue _fun90816
                }
            case 487:
                var8 = _closure1_slot41;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 53;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.channel = var10;
                var6.guild = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 527:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot49 = var3;
    var3 = function arg0() {
        _fun90818: for (var _fun90818_ip = 0;;) switch (_fun90818_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.guild;
                var _closure2_slot0 = var6;
                var5 = var1.channel;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 42;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var3 = var7.useStateFromStores;
                var8 = _closure1_slot18;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot18;
                    var1 = var2.getDefaultChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var7)(var2, var0);
                var7 = _closure1_slot21;
                var3 = var7.can;
                var2 = _closure1_slot33;
                var2 = var2.READ_MESSAGE_HISTORY;
                var2 = var3.bind(var7)(var2, var5);
                if (!var2) {
                    _fun90818_ip = 128;
                    continue _fun90818
                }
            case 103:
                var2 = null;
                var3 = var2 == var0;
                var2 = undefined;
                if (var3) {
                    _fun90818_ip = 119;
                    continue _fun90818
                }
            case 114:
                var2 = var0.id;
            case 119:
                var0 = var5.id;
                if (!(var2 !== var0)) {
                    _fun90818_ip = 154;
                    continue _fun90818
                }
            case 128:
                var3 = _closure1_slot41;
                var2 = _closure1_slot49;
                var0 = {};
                var0.guild = var6;
                var0.channel = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun90818_ip = 178;
                continue _fun90818;
            case 154:
                var3 = _closure1_slot41;
                var2 = _closure1_slot51;
                var1 = {};
                var1.guild = var6;
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 178:
                return var0;
        }
    };
    var _closure1_slot50 = var3;
    var3 = function arg0() {
        _fun90820: for (var _fun90820_ip = 0;;) switch (_fun90820_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guild;
                var _closure2_slot0 = var9;
                var17 = var0.channel;
                var _closure2_slot1 = var17;
                var0 = var9.id;
                var _closure2_slot2 = var0;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 54;
                var1 = var12[var0];
                var3 = undefined;
                var2 = var11.bind(var3)(var1);
                var1 = var2.useCompletedStates;
                var1 = var1.bind(var2)(var9);
                var14 = var1.guildPopulated;
                var16 = var1.guildPersonalized;
                var0 = var12[var0];
                var1 = var11.bind(var3)(var0);
                var0 = var1.usePermissions;
                var0 = var0.bind(var1)(var17, var9);
                var1 = var0.canInvite;
                var2 = var0.canManageGuild;
                var4 = 42;
                var0 = var12[var4];
                var8 = var11.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot24;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var15
                    var1 = _closure1_slot24;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var7.bind(var8)(var5, var0);
                var5 = _closure1_slot1;
                var0 = 55;
                var0 = var12[var0];
                var13 = var5.bind(var3)(var0);
                var7 = null;
                var10 = var7 != var8;
                var0 = 'ChatBeginningRowGuildDefaultChannel: currentUser cannot be undefined';
                var0 = var13.bind(var3)(var10, var0);
                var0 = _closure1_slot14;
                var8 = var0.bind(var3)(var9, var8);
                var0 = 56;
                var0 = var12[var0];
                var10 = var5.bind(var3)(var0);
                var5 = var10.extractTimestamp;
                var0 = var9.id;
                var10 = var5.bind(var10)(var0);
                var0 = global;
                var13 = var0.Date;
                var5 = var13.now;
                var13 = var5.bind(var13)();
                var5 = _closure1_slot36;
                var5 = var13 - var5;
                var13 = var10 < var5;
                var5 = 48;
                var5 = var12[var5];
                var10 = var11.bind(var3)(var5);
                var5 = var10.isPrivateGuildChannel;
                var10 = var5.bind(var10)(var17);
                var5 = 57;
                var5 = var12[var5];
                var17 = var11.bind(var3)(var5);
                var5 = var17.useIsEligibleForGuildProgress;
                var5 = var5.bind(var17)(var9);
                var4 = var12[var4];
                var17 = var11.bind(var3)(var4);
                var12 = var17.useStateFromStoresObject;
                var4 = _closure1_slot11;
                var11 = new Array(1);
                var11[0] = var4;
                var4 = function() { // Environment: var15
                    var1 = _closure1_slot11;
                    var0 = var1.getErrors;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var12.bind(var17)(var11, var4);
                var _closure2_slot3 = var4;
                var17 = _closure1_slot5;
                var12 = var17.useLayoutEffect;
                var4 = var4.message;
                var11 = new Array(1);
                var11[0] = var4;
                var4 = function() { // Environment: var15
                    _fun90823: for (var _fun90823_ip = 0;;) switch (_fun90823_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.message;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90823_ip = 63;
                                continue _fun90823
                            }
                        case 18:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 58;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.presentError;
                            var0 = _closure2_slot3;
                            var0 = var0.message;
                            var0 = var1.bind(var2)(var0);
                        case 63:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var12.bind(var17)(var4, var11);
                var11 = undefined;
                if (!var2) {
                    _fun90820_ip = 543;
                    continue _fun90820
                }
            case 390:
                var2 = function() { // Environment: var15
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun90826: for (var _fun90826_ip = 0;;) switch (_fun90826_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun90826_ip = 178;
                                        continue _fun90826
                                    }
                                case 10:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var7 = 59;
                                    var1 = var5[var7];
                                    var2 = undefined;
                                    var9 = var4.bind(var2)(var1);
                                    var8 = var9.init;
                                    var1 = _closure2_slot2;
                                    var1 = var8.bind(var9)(var1);
                                    var1 = 60;
                                    var1 = var5[var1];
                                    var5 = var4.bind(var2)(var1);
                                    var4 = var5.openImagePicker;
                                    var1 = {};
                                    var8 = _closure1_slot35;
                                    var1.size = var8;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 90);
                                case 88:
                                    return var1;
                                case 90:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun90826_ip = 175;
                                        continue _fun90826
                                    }
                                case 96:
                                    var10 = var1.base64;
                                    var4 = null;
                                    if (!(var4 != var10)) {
                                        _fun90826_ip = 172;
                                        continue _fun90826
                                    }
                                case 108:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var8 = var4[var7];
                                    var9 = var5.bind(var2)(var8);
                                    var8 = var9.updateIcon;
                                    var6 = _closure2_slot2;
                                    var8 = var8.bind(var9)(var6, var10);
                                    var4 = var4[var7];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.open;
                                    var3 = _closure1_slot30;
                                    var3 = var3.LANDING;
                                    var3 = var4.bind(var5)(var6, var3);
                                case 172:
                                    return var2;
                                case 175:
                                    return var1;
                                case 178:
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
                var17 = var2.bind(var3)();
                var12 = _closure1_slot41;
                var18 = _closure1_slot1;
                var21 = _closure1_slot2;
                var2 = 61;
                var2 = var21[var2];
                var4 = var18.bind(var3)(var2);
                var2 = {};
                var2.onPress = var17;
                var17 = 62;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var2.source = var17;
                var20 = _closure1_slot0;
                var17 = 28;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["Yhi9/N"];
                var17 = var18.bind(var19)(var17);
                var2.title = var17;
                var2.isCompleted = var16;
                var16 = _closure1_slot39;
                var16 = var16.CHANNEL_WELCOME;
                var2.analyticsSetupType = var16;
                var16 = _closure1_slot38;
                var16 = var16.PERSONALIZE_SERVER;
                var2.analyticsAction = var16;
                var11 = var12.bind(var3)(var4, var2);
            case 543:
                var12 = undefined;
                if (!var1) {
                    _fun90820_ip = 700;
                    continue _fun90820
                }
            case 551:
                var4 = _closure1_slot41;
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var1 = 61;
                var1 = var19[var1];
                var2 = var16.bind(var3)(var1);
                var1 = {};
                var15 = function() {
                    _fun90828: for (var _fun90828_ip = 0;;) switch (_fun90828_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.vanityURLCode;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun90828_ip = 78;
                                continue _fun90828
                            }
                        case 19:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 63;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.showInstantInviteActionSheet;
                            var2 = _closure2_slot1;
                            var0 = {};
                            var5 = _closure1_slot32;
                            var5 = var5.WELCOME_MESSAGE;
                            var0.source = var5;
                            var0 = var3.bind(var4)(var2, var0);
                            _fun90828_ip = 134;
                            continue _fun90828;
                        case 78:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 63;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.showVanityUrlInviteActionSheet;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = _closure1_slot32;
                            var0 = var0.WELCOME_MESSAGE;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 134:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPress = var15;
                var15 = 64;
                var15 = var19[var15];
                var15 = var16.bind(var3)(var15);
                var1.source = var15;
                var18 = _closure1_slot0;
                var15 = 28;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.q9n0Ta;
                var15 = var16.bind(var17)(var15);
                var1.title = var15;
                var1.isCompleted = var14;
                var14 = _closure1_slot39;
                var14 = var14.CHANNEL_WELCOME;
                var1.analyticsSetupType = var14;
                var14 = _closure1_slot38;
                var14 = var14.INVITE;
                var1.analyticsAction = var14;
                var12 = var4.bind(var3)(var2, var1);
            case 700:
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var20 = 28;
                var2 = var1[var20];
                var2 = var14.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var20];
                var1 = var14.bind(var3)(var1);
                var1 = var1.t;
                if (var13) {
                    _fun90820_ip = 780;
                    continue _fun90820
                }
            case 747:
                if (var8) {
                    _fun90820_ip = 765;
                    continue _fun90820
                }
            case 750:
                var8 = var1["ezm+/j"];
                var8 = var2.bind(var4)(var8);
                _fun90820_ip = 778;
                continue _fun90820;
            case 765:
                var13 = var1["1ach9C"];
                var8 = var2.bind(var4)(var13);
            case 778:
                _fun90820_ip = 793;
                continue _fun90820;
            case 780:
                var1 = var1["gwyU/J"];
                var8 = var2.bind(var4)(var1);
            case 793:
                var14 = !var5;
                if (!var14) {
                    _fun90820_ip = 813;
                    continue _fun90820
                }
            case 799:
                var1 = var7 != var12;
                if (var1) {
                    _fun90820_ip = 810;
                    continue _fun90820
                }
            case 806:
                var1 = var7 != var11;
            case 810:
                var14 = var1;
            case 813:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 65;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.getArticleURL;
                var1 = _closure1_slot31;
                var1 = var1.GUILD_GETTING_STARTED;
                var4 = var2.bind(var4)(var1);
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm';
                var13 = var2.bind(var1)(var4, var0);
                var2 = _closure1_slot43;
                var1 = _closure1_slot42;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var8;
                var7 = null;
                if (!var14) {
                    _fun90820_ip = 1000;
                    continue _fun90820
                }
            case 904:
                var16 = _closure1_slot43;
                var15 = _closure1_slot42;
                var8 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var19 = var17[var20];
                var19 = var18.bind(var3)(var19);
                var21 = var19.intl;
                var19 = var21.format;
                var17 = var17[var20];
                var17 = var18.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17.UOtD32;
                var17 = {};
                var17.guideURL = var13;
                var18 = var19.bind(var21)(var18, var17);
                var17 = [' '];
                var17[1] = var18;
                var8.children = var17;
                var7 = var16.bind(var3)(var15, var8);
            case 1000:
                var4[1] = var7;
                var0.children = var4;
                var15 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot43;
                var0 = _closure1_slot5;
                var1 = var0.Fragment;
                var0 = {};
                var8 = _closure1_slot41;
                var7 = _closure1_slot46;
                var4 = {};
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = var16[var20];
                var18 = var17.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.formatToPlainString;
                var16 = var16[var20];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16["j59F/c"];
                var16 = {};
                var20 = var9.name;
                var16.guildName = var20;
                var16 = var18.bind(var19)(var17, var16);
                var4.title = var16;
                var4.subtitle = var15;
                var4.isPrivate = var10;
                var10 = undefined;
                if (!var14) {
                    _fun90820_ip = 1129;
                    continue _fun90820
                }
            case 1126:
                var10 = var13;
            case 1129:
                var4.subtitleLink = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (var5) {
                    _fun90820_ip = 1185;
                    continue _fun90820
                }
            case 1151:
                var8 = _closure1_slot43;
                var7 = _closure1_slot42;
                var5 = {};
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var5.children = var10;
                var5 = var8.bind(var3)(var7, var5);
                _fun90820_ip = 1221;
                continue _fun90820;
            case 1185:
                var8 = _closure1_slot41;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 66;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.guild = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1221:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot51 = var3;
    var3 = function arg0() {
        _fun90829: for (var _fun90829_ip = 0;;) switch (_fun90829_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.channel;
                var _closure2_slot0 = var13;
                var11 = var0.showingSpamBanner;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var0 = _closure1_slot44;
                var17 = var0.bind(var4)();
                var _closure2_slot1 = var17;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 87;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.analyticsLocations;
                var _closure2_slot2 = var0;
                var5 = _closure1_slot0;
                var1 = 42;
                var0 = var3[var1];
                var7 = var5.bind(var4)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot24;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var9
                    var2 = _closure1_slot24;
                    var1 = var2.getUser;
                    var3 = _closure2_slot0;
                    var0 = var3.getRecipientId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var6.bind(var7)(var5, var0);
                var _closure2_slot3 = var12;
                var0 = 88;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var0 = null;
                var5 = var0 == var12;
                var2 = undefined;
                if (var5) {
                    _fun90829_ip = 169;
                    continue _fun90829
                }
            case 164:
                var2 = var12.id;
            case 169:
                if (!(var0 == var2)) {
                    _fun90829_ip = 177;
                    continue _fun90829
                }
            case 173:
                var2 = _closure1_slot29;
            case 177:
                var2 = var3.bind(var4)(var2);
                _closure2_slot4 = var2;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = var10[var1];
                var14 = var3.bind(var4)(var5);
                var7 = var14.useStateFromStoresObject;
                var5 = _closure1_slot15;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var9
                    _fun90831: for (var _fun90831_ip = 0;;) switch (_fun90831_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot15;
                            var3 = var4.getNewestTokenForApplication;
                            var6 = _closure2_slot4;
                            var2 = null;
                            var6 = var2 == var6;
                            var2 = undefined;
                            if (var6) {
                                _fun90831_ip = 42;
                                continue _fun90831
                            }
                        case 33:
                            var5 = _closure2_slot4;
                            var2 = var5.id;
                        case 42:
                            var2 = var3.bind(var4)(var2);
                            var0.authorizedAppToken = var2;
                            var2 = _closure1_slot15;
                            var1 = var2.getFetchState;
                            var1 = var1.bind(var2)();
                            var0.authorizedAppsFetchState = var1;
                            return var0;
                    }
                };
                var5 = var7.bind(var14)(var6, var5);
                var7 = var5.authorizedAppToken;
                var5 = var5.authorizedAppsFetchState;
                _closure2_slot5 = var5;
                var1 = var10[var1];
                var15 = var3.bind(var4)(var1);
                var14 = var15.useStateFromStores;
                var1 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var1;
                var3 = new Array(1);
                var3[0] = var12;
                var1 = function() { // Environment: var9
                    _fun90832: for (var _fun90832_ip = 0;;) switch (_fun90832_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun90832_ip = 43;
                                continue _fun90832
                            }
                        case 16:
                            var3 = _closure1_slot12;
                            var2 = var3.getMutualGuilds;
                            var1 = _closure2_slot3;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var1 = var14.bind(var15)(var6, var1, var3);
                _closure2_slot6 = var1;
                var1 = var13.isSystemDM;
                var3 = var1.bind(var13)();
                var6 = _closure1_slot1;
                var1 = 89;
                var1 = var10[var1];
                var10 = var6.bind(var4)(var1);
                var6 = var10.useExperiment;
                var1 = {};
                var14 = 'EmptyMessages';
                var1.location = var14;
                var1 = var6.bind(var10)(var1);
                var1 = var1.enabledMobile;
                var14 = _closure1_slot5;
                var15 = var14.useEffect;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var13;
                var6 = function() { // Environment: var9
                    _fun90833: for (var _fun90833_ip = 0;;) switch (_fun90833_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var7 = null;
                            if (!(var7 != var1)) {
                                _fun90833_ip = 105;
                                continue _fun90833
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 90;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var6 = _closure2_slot3;
                            var2 = var6.id;
                            var5 = var6.getAvatarURL;
                            var1 = _closure2_slot0;
                            var7 = var7 == var1;
                            var1 = undefined;
                            if (var7) {
                                _fun90833_ip = 75;
                                continue _fun90833
                            }
                        case 66:
                            var0 = _closure2_slot0;
                            var1 = var0.guild_id;
                        case 75:
                            var0 = 80;
                            var1 = var5.bind(var6)(var1, var0);
                            var0 = {
                                'withMutualGuilds': true,
                                'dispatchWait': true
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var15.bind(var14)(var6, var10);
                var10 = var14.useEffect;
                var6 = var0 == var12;
                var15 = undefined;
                if (var6) {
                    _fun90829_ip = 411;
                    continue _fun90829
                }
            case 405:
                var15 = var12.bot;
            case 411:
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var7;
                var6[2] = var5;
                var5 = function() { // Environment: var9
                    _fun90834: for (var _fun90834_ip = 0;;) switch (_fun90834_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun90834_ip = 26;
                                continue _fun90834
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var0 = var2.bot;
                        case 26:
                            if (!var0) {
                                _fun90834_ip = 50;
                                continue _fun90834
                            }
                        case 29:
                            var2 = _closure2_slot5;
                            var1 = _closure1_slot16;
                            var1 = var1.NOT_FETCHED;
                            var0 = var2 === var1;
                        case 50:
                            if (!var0) {
                                _fun90834_ip = 88;
                                continue _fun90834
                            }
                        case 53:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 75;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetch;
                            var0 = var0.bind(var1)();
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var10.bind(var14)(var5, var6);
                if (!(var0 != var12)) {
                    _fun90829_ip = 1678;
                    continue _fun90829
                }
            case 447:
                var10 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 43;
                var14 = var5[var6];
                var16 = var10.bind(var4)(var14);
                var15 = var16.getUserTag;
                var14 = {
                    'decoration': 'never',
                    'identifiable': 'always'
                };
                var23 = var15.bind(var16)(var12, var14);
                _closure2_slot7 = var23;
                var6 = var5[var6];
                var10 = var10.bind(var4)(var6);
                var6 = var10.getName;
                var27 = var6.bind(var10)(var12);
                var24 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 91;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot7;
                    var1 = var4.bind(var5)(var1);
                    var1 = 58;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentUsernameCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var14 = _closure1_slot0;
                var22 = 28;
                var6 = var5[var22];
                var6 = var14.bind(var4)(var6);
                var10 = var6.intl;
                var6 = var10.string;
                var5 = var5[var22];
                var5 = var14.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.Rzvnig;
                var16 = var6.bind(var10)(var5);
                if (var3) {
                    _fun90829_ip = 641;
                    continue _fun90829
                }
            case 580:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = var3[var22];
                var6 = var5.bind(var4)(var6);
                var10 = var6.intl;
                var6 = var10.formatToPlainString;
                var3 = var3[var22];
                var3 = var5.bind(var4)(var3);
                var3 = var3.t;
                var5 = var3.Q56TRC;
                var3 = {};
                var3.username = var27;
                var16 = var6.bind(var10)(var5, var3);
            case 641:
                var3 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 83;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 85;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 92;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = _closure2_slot3;
                    var2.user = var1;
                    var1 = function arg0() {
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 93;
                        var2 = var4[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.trackUserProfileAction;
                        var2 = {};
                        var7 = 'PRESS_MUTUAL_GUILD';
                        var2.action = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = 94;
                        var2 = var4[var2];
                        var5 = var3.bind(var0)(var2);
                        var3 = var5.transitionToGuild;
                        var2 = arg0;
                        var2 = var3.bind(var5)(var2);
                        var3 = _closure1_slot1;
                        var2 = 83;
                        var2 = var4[var2];
                        var5 = var3.bind(var0)(var2);
                        var2 = var5.hideActionSheet;
                        var2 = var2.bind(var5)();
                        var2 = 95;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.popWithKey;
                        var1 = _closure1_slot40;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2.onPressMutualGuild = var1;
                    var1 = 'MutualGuildsActionSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                _closure2_slot8 = var3;
                var3 = var0 != var13;
                var6 = undefined;
                if (!var3) {
                    _fun90829_ip = 917;
                    continue _fun90829
                }
            case 664:
                var3 = var0 != var2;
                var6 = undefined;
                if (!var3) {
                    _fun90829_ip = 917;
                    continue _fun90829
                }
            case 676:
                var5 = new Array(0);
                if (!(var0 != var7)) {
                    _fun90829_ip = 771;
                    continue _fun90829
                }
            case 684:
                var10 = var5.push;
                var18 = _closure1_slot41;
                var15 = _closure1_slot58;
                var14 = {};
                var14.user = var12;
                var14.channel = var13;
                var3 = 'mute';
                var3 = var18.bind(var4)(var15, var14, var3);
                var3 = var10.bind(var5)(var3);
                var3 = var5.push;
                var15 = _closure1_slot41;
                var14 = _closure1_slot57;
                var10 = {};
                var10.user = var12;
                var10.application = var2;
                var10.channel = var13;
                var10.oauth2Token = var7;
                var2 = 'manage';
                var2 = var15.bind(var4)(var14, var10, var2);
                var2 = var3.bind(var5)(var2);
            case 771:
                if (!var1) {
                    _fun90829_ip = 871;
                    continue _fun90829
                }
            case 774:
                var2 = var5.push;
                var14 = _closure1_slot41;
                var10 = _closure1_slot56;
                var3 = {};
                var3.channel = var13;
                var3.user = var12;
                var3.showingSpamBanner = var11;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var1 = 67;
                var1 = var18[var1];
                var1 = var15.bind(var4)(var1);
                var1 = var1.Colors;
                var1 = var1.GREY;
                var3.color = var1;
                var1 = var17.spamButtonNoPadding;
                var3.style = var1;
                var1 = true;
                var3.renderIcon = var1;
                var1 = 'report';
                var1 = var14.bind(var4)(var10, var3, var1);
                var1 = var2.bind(var5)(var1);
            case 871:
                var2 = var5.length;
                var1 = 0;
                var1 = var2 > var1;
                var6 = undefined;
                if (!var1) {
                    _fun90829_ip = 917;
                    continue _fun90829
                }
            case 887:
                var3 = _closure1_slot41;
                var2 = _closure1_slot7;
                var1 = {};
                var10 = var17.appDMButtonContainer;
                var1.style = var10;
                var1.children = var5;
                var6 = var3.bind(var4)(var2, var1);
            case 917:
                var3 = _closure1_slot43;
                var2 = _closure1_slot42;
                var1 = {};
                var15 = _closure1_slot41;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 36;
                var5 = var20[var14];
                var5 = var21.bind(var4)(var5);
                var10 = var5.PressableOpacity;
                var5 = {};
                var25 = 'button';
                var5.accessibilityRole = var25;
                var18 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 96;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot3;
                    var4 = var4.id;
                    var1.userId = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var3 = _closure2_slot2;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onPress = var18;
                var18 = var20[var22];
                var18 = var21.bind(var4)(var18);
                var26 = var18.intl;
                var19 = var26.string;
                var18 = var20[var22];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.iXAna6;
                var18 = var19.bind(var26)(var18);
                var5.accessibilityLabel = var18;
                var26 = _closure1_slot41;
                var19 = _closure1_slot1;
                var28 = 97;
                var18 = var20[var28];
                var19 = var19.bind(var4)(var18);
                var18 = {};
                var29 = var17.avatar;
                var18.style = var29;
                var18.user = var12;
                var29 = var13.guild_id;
                var18.guildId = var29;
                var28 = var20[var28];
                var28 = var21.bind(var4)(var28);
                var28 = var28.AvatarSizes;
                var28 = var28.XXLARGE;
                var18.size = var28;
                var28 = var12.avatarDecoration;
                var18.avatarDecoration = var28;
                var18 = var26.bind(var4)(var19, var18);
                var5.children = var18;
                var10 = var15.bind(var4)(var10, var5);
                var5 = new Array(9);
                var5[0] = var10;
                var19 = _closure1_slot41;
                var10 = var20[var14];
                var10 = var21.bind(var4)(var10);
                var15 = var10.PressableOpacity;
                var10 = {};
                var10.accessibilityRole = var25;
                var10.onPress = var24;
                var18 = var20[var22];
                var18 = var21.bind(var4)(var18);
                var28 = var18.intl;
                var26 = var28.string;
                var18 = var20[var22];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.y5MwJy;
                var18 = var26.bind(var28)(var18);
                var10.accessibilityHint = var18;
                var26 = _closure1_slot41;
                var18 = 33;
                var20 = var20[var18];
                var20 = var21.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'heading-xxl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var20.children = var27;
                var20 = var26.bind(var4)(var21, var20);
                var10.children = var20;
                var10 = var19.bind(var4)(var15, var10);
                var5[1] = var10;
                var10 = var12.isProvisional;
                var10 = !var10;
                if (!var10) {
                    _fun90829_ip = 1421;
                    continue _fun90829
                }
            case 1283:
                var19 = _closure1_slot41;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = var20[var14];
                var14 = var21.bind(var4)(var14);
                var15 = var14.PressableOpacity;
                var14 = {};
                var14.accessibilityRole = var25;
                var14.onPress = var24;
                var24 = var20[var22];
                var24 = var21.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var22 = var20[var22];
                var22 = var21.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.y5MwJy;
                var22 = var24.bind(var25)(var22);
                var14.accessibilityHint = var22;
                var22 = _closure1_slot41;
                var20 = var20[var18];
                var20 = var21.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'heading-lg/medium',
                    'color': 'text-default'
                };
                var20.children = var23;
                var20 = var22.bind(var4)(var21, var20);
                var14.children = var20;
                var10 = var19.bind(var4)(var15, var14);
            case 1421:
                var5[2] = var10;
                var15 = _closure1_slot41;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var18];
                var10 = var14.bind(var4)(var10);
                var14 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var18 = var17.dmBeginningMessage;
                var10.style = var18;
                var10.children = var16;
                var10 = var15.bind(var4)(var14, var10);
                var5[3] = var10;
                var10 = var12.isProvisional;
                if (!var10) {
                    _fun90829_ip = 1565;
                    continue _fun90829
                }
            case 1500:
                var16 = _closure1_slot41;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 98;
                var14 = var18[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.ChatProvisionalAccountExplainerCard;
                var14 = {};
                var17 = var17.provisionalAccountExplainer;
                var14.style = var17;
                var17 = var12.id;
                var14.userId = var17;
                var17 = 14;
                var14.iconSize = var17;
                var10 = var16.bind(var4)(var15, var14);
            case 1565:
                var5[4] = var10;
                var10 = function() { // Environment: var9
                    _fun90839: for (var _fun90839_ip = 0;;) switch (_fun90839_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun90839_ip = 384;
                                continue _fun90839
                            }
                        case 18:
                            var0 = _closure2_slot6;
                            var1 = var0.length;
                            var0 = 1;
                            if (!(!(var1 < var0))) {
                                _fun90839_ip = 384;
                                continue _fun90839
                            }
                        case 37:
                            var0 = _closure2_slot6;
                            var12 = var0.length;
                            var3 = _closure2_slot6;
                            var2 = var3.slice;
                            var1 = 5;
                            var0 = var12 > var1;
                            if (!var0) {
                                _fun90839_ip = 68;
                                continue _fun90839
                            }
                        case 65:
                            var1 = 4;
                        case 68:
                            var0 = 0;
                            var14 = var2.bind(var3)(var0, var1);
                            var3 = _closure1_slot43;
                            var9 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var0 = 36;
                            var0 = var13[var0];
                            var2 = undefined;
                            var0 = var9.bind(var2)(var0);
                            var1 = var0.PressableOpacity;
                            var0 = {};
                            var6 = 'button';
                            var0.accessibilityRole = var6;
                            var6 = _closure2_slot8;
                            var0.onPress = var6;
                            var8 = _closure2_slot1;
                            var4 = var8.mutualGuildsContainer;
                            var0.style = var4;
                            var7 = _closure1_slot41;
                            var4 = 99;
                            var4 = var13[var4];
                            var4 = var9.bind(var2)(var4);
                            var6 = var4.GuildIconPile;
                            var4 = {};
                            var11 = 100;
                            var11 = var13[var11];
                            var11 = var9.bind(var2)(var11);
                            var11 = var11.GuildIconSizes;
                            var11 = var11.SMALL;
                            var4.size = var11;
                            var15 = var14.map;
                            var11 = function(arg0) { // Environment: var10
                                var0 = arg0;
                                var0 = var0.guild;
                                var0 = var0.name;
                                return var0;
                            };
                            var11 = var15.bind(var14)(var11);
                            var4.names = var11;
                            var4.totalCount = var12;
                            var11 = var14.map;
                            var10 = function(arg0) { // Environment: var10
                                var0 = arg0;
                                var0 = var0.guild;
                                var4 = _closure1_slot41;
                                var2 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 100;
                                var1 = var7[var5];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var1.guild = var0;
                                var6 = _closure1_slot0;
                                var5 = var7[var5];
                                var5 = var6.bind(var3)(var5);
                                var5 = var5.GuildIconSizes;
                                var5 = var5.SMALL;
                                var1.size = var5;
                                var0 = var0.id;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                            };
                            var10 = var11.bind(var14)(var10);
                            var4.children = var10;
                            var6 = var7.bind(var2)(var6, var4);
                            var4 = new Array(2);
                            var4[0] = var6;
                            var7 = _closure1_slot41;
                            var5 = 33;
                            var5 = var13[var5];
                            var5 = var9.bind(var2)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'style': null,
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var8 = var8.mutualGuildsLabel;
                            var5.style = var8;
                            var8 = 28;
                            var10 = var13[var8];
                            var10 = var9.bind(var2)(var10);
                            var11 = var10.intl;
                            var10 = var11.format;
                            var8 = var13[var8];
                            var8 = var9.bind(var2)(var8);
                            var8 = var8.t;
                            var9 = var8.eE3oep;
                            var8 = {};
                            var8.count = var12;
                            var8 = var10.bind(var11)(var9, var8);
                            var5.children = var8;
                            var5 = var7.bind(var2)(var6, var5);
                            var4[1] = var5;
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 384:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var10.bind(var4)();
                var5[5] = var10;
                var14 = _closure1_slot41;
                var10 = function() { // Environment: var9
                    _fun90842: for (var _fun90842_ip = 0;;) switch (_fun90842_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 42;
                            var0 = var2[var0];
                            var3 = undefined;
                            var4 = var1.bind(var3)(var0);
                            var2 = var4.useStateFromStores;
                            var0 = _closure1_slot22;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = function() { // Environment: var9
                                var2 = _closure1_slot22;
                                var1 = var2.getRelationshipType;
                                var0 = _closure2_slot3;
                                var0 = var0.id;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var4)(var1, var0);
                            var _closure3_slot0 = var1;
                            var8 = function() {
                                _fun90844: for (var _fun90844_ip = 0;;) switch (_fun90844_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var0 = _closure1_slot34;
                                        var0 = var0.PENDING_INCOMING;
                                        if (!(var1 === var0)) {
                                            _fun90844_ip = 91;
                                            continue _fun90844
                                        }
                                    case 24:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 102;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.maybeConfirmFriendRequestAccept;
                                        var0 = {};
                                        var3 = _closure2_slot3;
                                        var3 = var3.id;
                                        var0.userId = var3;
                                        var3 = _closure1_slot26;
                                        var3 = var3.DM_CHANNEL;
                                        var0.location = var3;
                                        var0 = var1.bind(var2)(var0);
                                        _fun90844_ip = 162;
                                        continue _fun90844;
                                    case 91:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 101;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.addRelationship;
                                        var0 = {};
                                        var3 = _closure2_slot3;
                                        var3 = var3.id;
                                        var0.userId = var3;
                                        var3 = {};
                                        var4 = _closure1_slot26;
                                        var4 = var4.DM_CHANNEL;
                                        var3.location = var4;
                                        var0.context = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 162:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = _closure1_slot34;
                            var0 = var0.FRIEND;
                            if (!(var1 !== var0)) {
                                _fun90842_ip = 899;
                                continue _fun90842
                            }
                        case 85:
                            var0 = _closure2_slot3;
                            var0 = var0.bot;
                            if (var0) {
                                _fun90842_ip = 899;
                                continue _fun90842
                            }
                        case 104:
                            var0 = _closure1_slot34;
                            var0 = var0.NONE;
                            if (!(var0 !== var1)) {
                                _fun90842_ip = 690;
                                continue _fun90842
                            }
                        case 121:
                            var0 = _closure1_slot34;
                            var0 = var0.PENDING_INCOMING;
                            if (!(var0 !== var1)) {
                                _fun90842_ip = 347;
                                continue _fun90842
                            }
                        case 138:
                            var0 = _closure1_slot34;
                            var0 = var0.PENDING_OUTGOING;
                            if (!(var0 !== var1)) {
                                _fun90842_ip = 156;
                                continue _fun90842
                            }
                        case 152:
                            var0 = null;
                            return var0;
                        case 156:
                            var2 = _closure1_slot41;
                            var1 = _closure1_slot7;
                            var0 = {};
                            var14 = _closure2_slot1;
                            var4 = var14.buttonContainer;
                            var0.style = var4;
                            var6 = _closure1_slot41;
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 67;
                            var4 = var11[var7];
                            var5 = var10.bind(var3)(var4);
                            var4 = {};
                            var14 = var14.spamButton;
                            var4.style = var14;
                            var17 = _closure1_slot0;
                            var14 = 28;
                            var15 = var11[var14];
                            var15 = var17.bind(var3)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var11[var14];
                            var14 = var17.bind(var3)(var14);
                            var14 = var14.t;
                            var14 = var14.xMH6vD;
                            var14 = var15.bind(var16)(var14);
                            var4.text = var14;
                            var14 = var11[var7];
                            var14 = var10.bind(var3)(var14);
                            var14 = var14.Sizes;
                            var14 = var14.XSMALL;
                            var4.size = var14;
                            var7 = var11[var7];
                            var7 = var10.bind(var3)(var7);
                            var7 = var7.Colors;
                            var7 = var7.GREEN;
                            var4.color = var7;
                            var7 = true;
                            var4.disabled = var7;
                            var4 = var6.bind(var3)(var5, var4);
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 347:
                            var2 = _closure1_slot43;
                            var1 = _closure1_slot7;
                            var0 = {};
                            var16 = _closure2_slot1;
                            var4 = var16.buttonContainer;
                            var0.style = var4;
                            var6 = _closure1_slot41;
                            var11 = _closure1_slot1;
                            var14 = _closure1_slot2;
                            var10 = 67;
                            var4 = var14[var10];
                            var5 = var11.bind(var3)(var4);
                            var4 = {};
                            var7 = var16.spamButton;
                            var4.style = var7;
                            var18 = _closure1_slot0;
                            var15 = 28;
                            var7 = var14[var15];
                            var7 = var18.bind(var3)(var7);
                            var19 = var7.intl;
                            var17 = var19.string;
                            var7 = var14[var15];
                            var7 = var18.bind(var3)(var7);
                            var7 = var7.t;
                            var7 = var7["+WbSn5"];
                            var7 = var17.bind(var19)(var7);
                            var4.text = var7;
                            var7 = var14[var10];
                            var7 = var11.bind(var3)(var7);
                            var7 = var7.Sizes;
                            var7 = var7.XSMALL;
                            var4.size = var7;
                            var7 = var14[var10];
                            var7 = var11.bind(var3)(var7);
                            var7 = var7.Colors;
                            var7 = var7.GREEN;
                            var4.color = var7;
                            var4.onPress = var8;
                            var5 = var6.bind(var3)(var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var7 = _closure1_slot41;
                            var5 = var14[var10];
                            var6 = var11.bind(var3)(var5);
                            var5 = {};
                            var16 = var16.spamButton;
                            var5.style = var16;
                            var16 = var14[var15];
                            var16 = var18.bind(var3)(var16);
                            var17 = var16.intl;
                            var16 = var17.string;
                            var15 = var14[var15];
                            var15 = var18.bind(var3)(var15);
                            var15 = var15.t;
                            var15 = var15.rQSndv;
                            var15 = var16.bind(var17)(var15);
                            var5.text = var15;
                            var15 = var14[var10];
                            var15 = var11.bind(var3)(var15);
                            var15 = var15.Sizes;
                            var15 = var15.XSMALL;
                            var5.size = var15;
                            var10 = var14[var10];
                            var10 = var11.bind(var3)(var10);
                            var10 = var10.Colors;
                            var10 = var10.PRIMARY;
                            var5.color = var10;
                            var9 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 101;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.cancelFriendRequest;
                                var1 = _closure2_slot3;
                                var2 = var1.id;
                                var1 = {};
                                var5 = _closure1_slot26;
                                var5 = var5.DM_CHANNEL;
                                var1.location = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5.onPress = var9;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[1] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 690:
                            var2 = _closure1_slot41;
                            var1 = _closure1_slot7;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var4 = var4.buttonContainer;
                            var0.style = var4;
                            var4 = _closure2_slot3;
                            var5 = var4.bot;
                            var4 = null;
                            if (var5) {
                                _fun90842_ip = 887;
                                continue _fun90842
                            }
                        case 732:
                            var7 = _closure1_slot41;
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var9 = 67;
                            var5 = var11[var9];
                            var6 = var10.bind(var3)(var5);
                            var5 = {};
                            var13 = _closure2_slot1;
                            var13 = var13.spamButton;
                            var5.style = var13;
                            var15 = _closure1_slot0;
                            var12 = 28;
                            var13 = var11[var12];
                            var13 = var15.bind(var3)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var12 = var11[var12];
                            var12 = var15.bind(var3)(var12);
                            var12 = var12.t;
                            var12 = var12["PMsq/b"];
                            var12 = var13.bind(var14)(var12);
                            var5.text = var12;
                            var12 = var11[var9];
                            var12 = var10.bind(var3)(var12);
                            var12 = var12.Sizes;
                            var12 = var12.XSMALL;
                            var5.size = var12;
                            var9 = var11[var9];
                            var9 = var10.bind(var3)(var9);
                            var9 = var9.Colors;
                            var9 = var9.GREEN;
                            var5.color = var9;
                            var5.onPress = var8;
                            var4 = var7.bind(var3)(var6, var5);
                        case 887:
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 899:
                            var0 = null;
                            return var0;
                    }
                };
                var9 = {};
                var9 = var14.bind(var4)(var10, var9);
                var5[6] = var9;
                var7 = var0 == var7;
                if (!var7) {
                    _fun90829_ip = 1626;
                    continue _fun90829
                }
            case 1614:
                var10 = var12.bot;
                var9 = true;
                var7 = var9 !== var10;
            case 1626:
                if (!var7) {
                    _fun90829_ip = 1658;
                    continue _fun90829
                }
            case 1629:
                var10 = _closure1_slot41;
                var9 = _closure1_slot56;
                var8 = {};
                var8.channel = var13;
                var8.user = var12;
                var8.showingSpamBanner = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 1658:
                var5[7] = var7;
                var5[8] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1678:
                return var0;
        }
    };
    var _closure1_slot52 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var9 = var1.title;
        var8 = var1.subtitle;
        var14 = var1.IconComponent;
        var13 = var1.iconVariant;
        var0 = var1.style;
        var16 = var1.onPress;
        var7 = var1.trailing;
        var3 = _closure1_slot41;
        var2 = _closure1_slot7;
        var1 = {};
        var1.style = var0;
        var6 = _closure1_slot41;
        var11 = _closure1_slot0;
        var15 = _closure1_slot2;
        var10 = 103;
        var4 = var15[var10];
        var0 = undefined;
        var4 = var11.bind(var0)(var4);
        var5 = var4.RowButton;
        var4 = {};
        var4.onPress = var16;
        var12 = _closure1_slot41;
        var10 = var15[var10];
        var10 = var11.bind(var0)(var10);
        var10 = var10.RowButton;
        var11 = var10.Icon;
        var10 = {};
        var10.IconComponent = var14;
        var10.variant = var13;
        var10 = var12.bind(var0)(var11, var10);
        var4.icon = var10;
        var4.label = var9;
        var4.subLabel = var8;
        var4.trailing = var7;
        var4 = var6.bind(var0)(var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot53 = var3;
    var3 = function arg0() {
        _fun90847: for (var _fun90847_ip = 0;;) switch (_fun90847_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.channel;
                var _closure2_slot0 = var14;
                var1 = _closure1_slot44;
                var3 = undefined;
                var20 = var1.bind(var3)();
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 47;
                var1 = var5[var1];
                var1 = var8.bind(var3)(var1);
                var23 = var1.bind(var3)(var14);
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var10 = false;
                var6 = var1.bind(var4)(var10);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var6, var1);
                var1 = 0;
                var17 = var2[var1];
                var _closure2_slot1 = var17;
                var1 = 1;
                var12 = var2[var1];
                var _closure2_slot2 = var12;
                var7 = _closure1_slot0;
                var1 = 42;
                var1 = var5[var1];
                var9 = var7.bind(var3)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot22;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot22;
                    var0 = var1.getRelationshipCount;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var22 = var6.bind(var9)(var2, var1);
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var14;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 104;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.navigateToNewGroupDM;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure1_slot27;
                    var1 = var1.CHANNEL_TEXT_AREA;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var6.bind(var4)(var1, var2);
                var _closure2_slot3 = var1;
                var9 = var4.useCallback;
                var6 = _closure1_slot4;
                var2 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun90851: for (var _fun90851_ip = 0;;) switch (_fun90851_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun90851_ip = 174;
                                    continue _fun90851
                                }
                            case 10:
                                var1 = _closure2_slot1;
                                if (var1) {
                                    _fun90851_ip = 169;
                                    continue _fun90851
                                }
                            case 23:
                                var3 = _closure2_slot2;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var1 = 105;
                                var1 = var6[var1];
                                var7 = var5.bind(var4)(var1);
                                var6 = var7.mobileCreateInvite;
                                var5 = _closure2_slot0;
                                var1 = _closure1_slot32;
                                var1 = var1.GROUP_DM;
                                var1 = var6.bind(var7)(var5, var1);
                                SaveGenerator(address = 89);
                            case 87:
                                return var1;
                            case 89:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun90851_ip = 166;
                                    continue _fun90851
                                }
                            case 95:
                                var5 = null;
                                if (!(var5 != var1)) {
                                    _fun90851_ip = 153;
                                    continue _fun90851
                                }
                            case 101:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 63;
                                var5 = var7[var5];
                                var8 = var6.bind(var4)(var5);
                                var7 = var8.handleCopy;
                                var11 = _closure2_slot0;
                                var3 = _closure1_slot32;
                                var10 = var3.GROUP_DM;
                                var9 = false;
                                var13 = var8;
                                var12 = var1;
                                var3 = var13[var7](var12, var11, var10, var9, var8);
                            case 153:
                                var3 = _closure2_slot2;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                _fun90851_ip = 169;
                                continue _fun90851;
                            case 166:
                                return var1;
                            case 169:
                                var1 = undefined;
                                return var1;
                            case 174:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var6.bind(var3)(var2);
                var2 = new Array(3);
                var2[0] = var14;
                var2[1] = var17;
                var2[2] = var12;
                var6 = var9.bind(var4)(var6, var2);
                var _closure2_slot4 = var6;
                var9 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun90852: for (var _fun90852_ip = 0;;) switch (_fun90852_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 106;
                            var2 = var6[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var2);
                            var3 = var4.UNSAFE_isDismissibleContentDismissed;
                            var2 = 107;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.DismissibleContent;
                            var2 = var2.GDM_INVITE_REMINDER;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun90852_ip = 104;
                                continue _fun90852
                            }
                        case 63:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 108;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var3 = _closure2_slot3;
                            var1.onClick = var3;
                            var1 = var2.bind(var0)(var1);
                            _fun90852_ip = 115;
                            continue _fun90852;
                        case 104:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)();
                        case 115:
                            return var0;
                    }
                };
                var18 = var9.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun90853: for (var _fun90853_ip = 0;;) switch (_fun90853_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 106;
                            var2 = var6[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var2);
                            var3 = var4.UNSAFE_isDismissibleContentDismissed;
                            var2 = 107;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.DismissibleContent;
                            var2 = var2.GDM_INVITE_REMINDER;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun90853_ip = 104;
                                continue _fun90853
                            }
                        case 63:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 108;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var3 = _closure2_slot4;
                            var1.onClick = var3;
                            var1 = var2.bind(var0)(var1);
                            _fun90853_ip = 115;
                            continue _fun90853;
                        case 104:
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var0)();
                        case 115:
                            return var0;
                    }
                };
                var16 = var2.bind(var4)(var0, var1);
                var1 = var14.id;
                var0 = 109;
                var0 = var5[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                var6 = var1 === var0;
                var2 = _closure1_slot43;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var20.centerHeader;
                var0.style = var4;
                var9 = _closure1_slot41;
                var4 = 110;
                var4 = var5[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var12 = var20.avatarRedesign;
                var4.style = var12;
                var4.channel = var14;
                var12 = 97;
                var12 = var5[var12];
                var12 = var7.bind(var3)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.XXLARGE;
                var4.size = var12;
                var4.accessible = var10;
                var8 = var9.bind(var3)(var8, var4);
                var4 = new Array(4);
                var4[0] = var8;
                var8 = _closure1_slot41;
                var9 = 33;
                var5 = var5[var9];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {};
                var10 = var20.dmTitle;
                var5.style = var10;
                var10 = null;
                var13 = var10 != var23;
                var15 = 'heading-xxl/extrabold';
                var12 = var15;
                if (!var13) {
                    _fun90847_ip = 477;
                    continue _fun90847
                }
            case 453:
                var19 = var23.length;
                var13 = 40;
                var13 = var19 > var13;
                var12 = var15;
                if (!var13) {
                    _fun90847_ip = 477;
                    continue _fun90847
                }
            case 471:
                var12 = 'heading-lg/extrabold';
            case 477:
                var5.variant = var12;
                var12 = 'mobile-text-heading-primary';
                var5.color = var12;
                var5.children = var23;
                var5 = var8.bind(var3)(var7, var5);
                var4[1] = var5;
                var8 = _closure1_slot41;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var7.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var9 = var20.gdmText;
                var5.style = var9;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var21 = 28;
                var9 = var12[var21];
                var9 = var13.bind(var3)(var9);
                var19 = var9.intl;
                if (var6) {
                    _fun90847_ip = 619;
                    continue _fun90847
                }
            case 585:
                var15 = var19.string;
                var9 = var12[var21];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["0Q7uk0"];
                var9 = var15.bind(var19)(var9);
                _fun90847_ip = 658;
                continue _fun90847;
            case 619:
                var15 = var19.format;
                var12 = var12[var21];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.MFwcqO;
                var12 = {};
                var12.name = var23;
                var9 = var15.bind(var19)(var13, var12);
            case 658:
                var5.children = var9;
                var5 = var8.bind(var3)(var7, var5);
                var4[2] = var5;
                var5 = null;
                if (var6) {
                    _fun90847_ip = 1113;
                    continue _fun90847
                }
            case 680:
                var8 = _closure1_slot43;
                var7 = _closure1_slot42;
                var6 = {};
                var12 = null;
                if (!var22) {
                    _fun90847_ip = 812;
                    continue _fun90847
                }
            case 695:
                var15 = _closure1_slot41;
                var13 = _closure1_slot53;
                var9 = {};
                var19 = var20.gdmInviteFriends;
                var9.style = var19;
                var9.onPress = var18;
                var24 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = 111;
                var19 = var18[var19];
                var19 = var24.bind(var3)(var19);
                var19 = var19.GroupPlusIcon;
                var9.IconComponent = var19;
                var19 = 'blurple';
                var9.iconVariant = var19;
                var19 = var18[var21];
                var19 = var24.bind(var3)(var19);
                var23 = var19.intl;
                var19 = var23.string;
                var18 = var18[var21];
                var18 = var24.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["LR+Ptf"];
                var18 = var19.bind(var23)(var18);
                var9.title = var18;
                var12 = var15.bind(var3)(var13, var9);
            case 812:
                var9 = new Array(3);
                var9[0] = var12;
                var15 = _closure1_slot41;
                var13 = _closure1_slot53;
                var12 = {};
                var19 = var20.gdmShareInviteLink;
                var18 = new Array(2);
                var18[0] = var19;
                var19 = null;
                if (var22) {
                    _fun90847_ip = 855;
                    continue _fun90847
                }
            case 849:
                var19 = var20.gdmShareInviteLinkNoRelationships;
            case 855:
                var18[1] = var19;
                var12.style = var18;
                var12.onPress = var16;
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = 112;
                var18 = var16[var18];
                var18 = var20.bind(var3)(var18);
                var18 = var18.LinkIcon;
                var12.IconComponent = var18;
                var18 = var16[var21];
                var18 = var20.bind(var3)(var18);
                var22 = var18.intl;
                var19 = var22.string;
                var18 = var16[var21];
                var18 = var20.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["3XVNyt"];
                var18 = var19.bind(var22)(var18);
                var12.title = var18;
                var18 = var16[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var16[var21];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.qa9CQu;
                var16 = var18.bind(var19)(var16);
                var12.subtitle = var16;
                var16 = null;
                if (!var17) {
                    _fun90847_ip = 1017;
                    continue _fun90847
                }
            case 1001:
                var19 = _closure1_slot41;
                var18 = _closure1_slot6;
                var17 = {};
                var16 = var19.bind(var3)(var18, var17);
            case 1017:
                var12.trailing = var16;
                var12 = var15.bind(var3)(var13, var12);
                var9[1] = var12;
                var13 = var14.hasFlag;
                var12 = _closure1_slot37;
                var12 = var12.IS_JOIN_REQUEST_INTERVIEW_CHANNEL;
                var12 = var13.bind(var14)(var12);
                var10 = null;
                if (!var12) {
                    _fun90847_ip = 1099;
                    continue _fun90847
                }
            case 1058:
                var13 = _closure1_slot41;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 113;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var14 = var14.id;
                var11.channelId = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 1099:
                var9[2] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1113:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot54 = var3;
    var3 = 115;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/chat/ChatBeginningRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90854: for (var _fun90854_ip = 0;;) switch (_fun90854_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channelId;
                var _closure2_slot0 = var1;
                var1 = var2.guildId;
                var _closure2_slot1 = var1;
                var1 = var2.shouldRender;
                var9 = var2.showingSpamBanner;
                var2 = _closure1_slot44;
                var3 = undefined;
                var8 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 42;
                var6 = var7[var2];
                var12 = var5.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot17;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot17;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var11.bind(var12)(var10, var6);
                var2 = var7[var2];
                var7 = var5.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var10 = _closure1_slot20;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot20;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var5.bind(var7)(var2, var0);
                if (!var1) {
                    _fun90854_ip = 146;
                    continue _fun90854
                }
            case 140:
                var0 = null;
                var1 = var0 != var6;
            case 146:
                var0 = null;
                var7 = null;
                if (!var1) {
                    _fun90854_ip = 311;
                    continue _fun90854
                }
            case 156:
                var5 = _closure1_slot13;
                var2 = var5.has;
                var1 = var6.type;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun90854_ip = 288;
                    continue _fun90854
                }
            case 178:
                var1 = var6.isDM;
                var1 = var1.bind(var6)();
                if (var1) {
                    _fun90854_ip = 261;
                    continue _fun90854
                }
            case 191:
                var1 = var6.isGroupDM;
                var1 = var1.bind(var6)();
                if (var1) {
                    _fun90854_ip = 239;
                    continue _fun90854
                }
            case 204:
                var1 = var0 != var10;
                var0 = null;
                if (!var1) {
                    _fun90854_ip = 237;
                    continue _fun90854
                }
            case 213:
                var5 = _closure1_slot41;
                var2 = _closure1_slot50;
                var1 = {};
                var1.guild = var10;
                var1.channel = var6;
                var0 = var5.bind(var3)(var2, var1);
            case 237:
                _fun90854_ip = 259;
                continue _fun90854;
            case 239:
                var5 = _closure1_slot41;
                var2 = _closure1_slot54;
                var1 = {};
                var1.channel = var6;
                var0 = var5.bind(var3)(var2, var1);
            case 259:
                _fun90854_ip = 286;
                continue _fun90854;
            case 261:
                var5 = _closure1_slot41;
                var2 = _closure1_slot52;
                var1 = {};
                var1.channel = var6;
                var1.showingSpamBanner = var9;
                var0 = var5.bind(var3)(var2, var1);
            case 286:
                _fun90854_ip = 308;
                continue _fun90854;
            case 288:
                var5 = _closure1_slot41;
                var2 = _closure1_slot48;
                var1 = {};
                var1.channel = var6;
                var0 = var5.bind(var3)(var2, var1);
            case 308:
                var7 = var0;
            case 311:
                var2 = _closure1_slot41;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 114;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var6 = _closure1_slot41;
                var5 = _closure1_slot7;
                var4 = {};
                var9 = false;
                var4.collapsable = var9;
                var8 = var8.container;
                var4.style = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1298, 1371, 5650, 8181, 4661, 1376, 1416, 4587, 1372, 1671, 1681, 1410, 3093, 3102, 4304, 1621, 660, 1379, 10277, 11789, 33, 1297, 671, 4841, 1234, 4843, 4847, 4849, 4071, 3943, 3146, 3153, 4905, 11812, 4087, 11815, 6489, 7540, 566, 3238, 6701, 3913, 8220, 4795, 8161, 8943, 9439, 3248, 4784, 11816, 10288, 44, 21, 10275, 3149, 8180, 4013, 10280, 10282, 8356, 10281, 1684, 11817, 4876, 11819, 11796, 6517, 3947, 8971, 4029, 10589, 5356, 7970, 795, 11820, 4699, 4696, 3150, 6689, 3280, 11821, 1307, 8796, 5734, 11822, 11823, 6982, 5296, 7780, 7002, 5619, 4562, 7377, 5457, 11824, 7832, 7420, 8047, 9046, 5385, 3921, 5906, 3214, 1358, 11828, 5648, 9066, 8674, 3256, 11831, 4900, 2]);