// modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx
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
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 9;
        var3 = var5[var2];
        var2 = undefined;
        var7 = var4.bind(var2)(var3);
        var6 = var7.useStateFromStores;
        var9 = _closure1_slot7;
        var3 = new Array(2);
        var3[0] = var9;
        var8 = _closure1_slot5;
        var3[1] = var8;
        var1 = function() { // Environment: var1
            _fun72373: for (var _fun72373_ip = 0;;) switch (_fun72373_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var8 = var0.recipients;
                    var3 = new Array(1);
                    var2 = 0;
                    var9 = var3;
                    var7 = 0;
                    var1 = arraySpread(var9, var8, var7);
                    var4 = _closure1_slot7;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var0 = null;
                    var6 = var0 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun72373_ip = 60;
                        continue _fun72373
                    }
                case 55:
                    var4 = var5.id;
                case 60:
                    var5 = var0 != var4;
                    var0 = '0';
                    if (!var5) {
                        _fun72373_ip = 76;
                        continue _fun72373
                    }
                case 73:
                    var0 = var4;
                case 76:
                    var3[var1] = var0;
                    var0 = 1;
                    var0 = var1 + var0;
                    var1 = var3.reduce;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun72374: for (var _fun72374_ip = 0;;) switch (_fun72374_ip) {
                            case 0:
                                var3 = _closure1_slot5;
                                var2 = var3.getStatus;
                                var1 = arg1;
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure1_slot9;
                                var4 = var1.INVISIBLE;
                                var1 = 0;
                                if (!(var2 !== var4)) {
                                    _fun72374_ip = 72;
                                    continue _fun72374
                                }
                            case 37:
                                var4 = _closure1_slot9;
                                var4 = var4.OFFLINE;
                                var1 = 0;
                                if (!(var2 !== var4)) {
                                    _fun72374_ip = 72;
                                    continue _fun72374
                                }
                            case 53:
                                var0 = _closure1_slot9;
                                var0 = var0.UNKNOWN;
                                var1 = 0;
                                if (!(var2 !== var0)) {
                                    _fun72374_ip = 72;
                                    continue _fun72374
                                }
                            case 69:
                                var1 = 1;
                            case 72:
                                var0 = arg0;
                                var0 = var0 + var1;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var3)(var0, var2);
                    return var0;
            }
        };
        var3 = var6.bind(var7)(var3, var1);
        var1 = 15;
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.renderMemberCountText;
        var0 = var0.recipients;
        var0 = var0.length;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot8 = var7;
    var3 = var3.StatusTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.Fragment;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9.color = var10;
    var3.activityStatusText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun72375: for (var _fun72375_ip = 0;;) switch (_fun72375_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channelId;
                var _closure2_slot0 = var3;
                var9 = var1.screenIndex;
                var _closure2_slot1 = var9;
                var1 = var1.pressable;
                var2 = _closure1_slot13;
                var4 = undefined;
                var7 = var2.bind(var4)();
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var10 = var8[var2];
                var13 = var6.bind(var4)(var10);
                var12 = var13.useStateFromStores;
                var10 = _closure1_slot4;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var12.bind(var13)(var11, var10);
                var _closure2_slot2 = var15;
                var10 = var8[var2];
                var13 = var6.bind(var4)(var10);
                var12 = var13.useStateFromStores;
                var10 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var0
                    _fun72377: for (var _fun72377_ip = 0;;) switch (_fun72377_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var2;
                            var4 = undefined;
                            if (var2) {
                                _fun72377_ip = 27;
                                continue _fun72377
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var4 = var2.type;
                        case 27:
                            var3 = _closure1_slot8;
                            var3 = var3.DM;
                            var0 = undefined;
                            if (!(var4 === var3)) {
                                _fun72377_ip = 75;
                                continue _fun72377
                            }
                        case 46:
                            var3 = _closure1_slot7;
                            var2 = var3.getUser;
                            var4 = _closure2_slot2;
                            var1 = var4.getRecipientId;
                            var1 = var1.bind(var4)();
                            var0 = var2.bind(var3)(var1);
                        case 75:
                            return var0;
                    }
                };
                var17 = var12.bind(var13)(var11, var10);
                var _closure2_slot3 = var17;
                var2 = var8[var2];
                var10 = var6.bind(var4)(var2);
                var8 = var10.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    _fun72378: for (var _fun72378_ip = 0;;) switch (_fun72378_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot3;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun72378_ip = 45;
                                continue _fun72378
                            }
                        case 18:
                            var6 = _closure1_slot5;
                            var5 = var6.isMobileOnline;
                            var4 = _closure2_slot3;
                            var4 = var4.id;
                            var1 = var5.bind(var6)(var4);
                        case 45:
                            var0.isMobileOnline = var1;
                            var1 = _closure2_slot3;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun72378_ip = 88;
                                continue _fun72378
                            }
                        case 61:
                            var6 = _closure1_slot5;
                            var5 = var6.isVROnline;
                            var4 = _closure2_slot3;
                            var4 = var4.id;
                            var1 = var5.bind(var6)(var4);
                        case 88:
                            var0.isVROnline = var1;
                            var1 = _closure2_slot3;
                            if (!(var3 == var1)) {
                                _fun72378_ip = 116;
                                continue _fun72378
                            }
                        case 101:
                            var1 = _closure1_slot9;
                            var1 = var1.UNKNOWN;
                            _fun72378_ip = 143;
                            continue _fun72378;
                        case 116:
                            var4 = _closure1_slot5;
                            var3 = var4.getStatus;
                            var2 = _closure2_slot3;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 143:
                            var0.status = var1;
                            return var0;
                    }
                };
                var2 = var8.bind(var10)(var6, var2);
                var19 = var2.isMobileOnline;
                var11 = var2.isVROnline;
                var10 = var2.status;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var2 = new Array(2);
                var2[0] = var3;
                var2[1] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.navigateToChannelDetails;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = 'private-channel-header-title';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var9 = var6.bind(var8)(var0, var2);
                var14 = null;
                if (!(var14 == var15)) {
                    _fun72375_ip = 294;
                    continue _fun72375
                }
            case 237:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 12;
                var2 = var12[var0];
                var2 = var8.bind(var4)(var2);
                var6 = var2.intl;
                var2 = var6.string;
                var0 = var12[var0];
                var0 = var8.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.ai6Lbr;
                var12 = var2.bind(var6)(var0);
                _fun72375_ip = 335;
                continue _fun72375;
            case 294:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 11;
                var0 = var6[var0];
                var8 = var2.bind(var4)(var0);
                var6 = var8.computeChannelName;
                var2 = _closure1_slot7;
                var0 = _closure1_slot6;
                var12 = var6.bind(var8)(var15, var2, var0);
            case 335:
                var0 = var14 != var17;
                var16 = null;
                if (!var0) {
                    _fun72375_ip = 414;
                    continue _fun72375
                }
            case 344:
                var6 = _closure1_slot10;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 13;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var8 = var17.id;
                var0.userId = var8;
                var13 = var14 == var15;
                var8 = undefined;
                if (var13) {
                    _fun72375_ip = 393;
                    continue _fun72375
                }
            case 388:
                var8 = var15.guild_id;
            case 393:
                var0.guildId = var8;
                var7 = var7.activityStatusText;
                var0.textStyle = var7;
                var16 = var6.bind(var4)(var2, var0);
            case 414:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 14;
                var0 = var0[var6];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useShouldChannelShowLoadingIndicator;
                var2 = var0.bind(var2)(var3);
                var0 = var14 != var15;
                if (!var0) {
                    _fun72375_ip = 462;
                    continue _fun72375
                }
            case 452:
                var3 = var15.isMultiUserDM;
                var0 = var3.bind(var15)();
            case 462:
                if (var2) {
                    _fun72375_ip = 490;
                    continue _fun72375
                }
            case 465:
                if (!var0) {
                    _fun72375_ip = 488;
                    continue _fun72375
                }
            case 468:
                var3 = _closure1_slot10;
                var2 = _closure1_slot14;
                var0 = {};
                var0.channel = var15;
                var16 = var3.bind(var4)(var2, var0);
            case 488:
                _fun72375_ip = 525;
                continue _fun72375;
            case 490:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var2.bind(var4)(var0);
                var2 = var0.ChannelHeaderLoadingIndicator;
                var0 = {};
                var16 = var3.bind(var4)(var2, var0);
            case 525:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var13 = 12;
                var3 = var0[var13];
                var3 = var2.bind(var4)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var0 = var0[var13];
                var0 = var2.bind(var4)(var0);
                var0 = var0.t;
                var2 = var0.UbNmGc;
                var0 = {};
                var0.channelName = var12;
                var18 = var3.bind(var6)(var2, var0);
                var3 = _closure1_slot12;
                var2 = _closure1_slot11;
                var0 = {};
                if (!(var14 == var17)) {
                    _fun72375_ip = 684;
                    continue _fun72375
                }
            case 602:
                if (!(var14 != var15)) {
                    _fun72375_ip = 619;
                    continue _fun72375
                }
            case 606:
                var6 = var15.isGroupDM;
                var6 = var6.bind(var15)();
                if (var6) {
                    _fun72375_ip = 651;
                    continue _fun72375
                }
            case 619:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 15;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.renderEmptyIcon;
                var6 = var6.bind(var7)();
                _fun72375_ip = 682;
                continue _fun72375;
            case 651:
                var8 = _closure1_slot0;
                var20 = _closure1_slot2;
                var7 = 15;
                var7 = var20[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.renderGroupDMIcon;
                var6 = var7.bind(var8)(var15);
            case 682:
                _fun72375_ip = 729;
                continue _fun72375;
            case 684:
                var8 = _closure1_slot0;
                var20 = _closure1_slot2;
                var7 = 15;
                var7 = var20[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.renderUserAvatar;
                var25 = var8;
                var24 = var17;
                var23 = var10;
                var22 = var19;
                var21 = var11;
                var6 = var25[var7](var24, var23, var22, var21, var20);
            case 729:
                var7 = new Array(2);
                var7[0] = var6;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 15;
                var8 = var8[var6];
                var11 = var10.bind(var4)(var8);
                var10 = var11.renderChannelTitle;
                var8 = {};
                var8.accessibleTitle = var18;
                var8.subtitle = var16;
                var16 = !var1;
                var8.disableArrow = var16;
                var18 = var14 == var17;
                var16 = undefined;
                if (var18) {
                    _fun72375_ip = 797;
                    continue _fun72375
                }
            case 792:
                var16 = var17.id;
            case 797:
                var8.userId = var16;
                var16 = var14 == var15;
                var14 = undefined;
                if (var16) {
                    _fun72375_ip = 815;
                    continue _fun72375
                }
            case 810:
                var14 = var15.guild_id;
            case 815:
                var8.guildId = var14;
                var8 = var10.bind(var11)(var12, var8);
                var7[1] = var8;
                var0.children = var7;
                var8 = var3.bind(var4)(var2, var0);
                var0 = var8;
                if (!var1) {
                    _fun72375_ip = 939;
                    continue _fun72375
                }
            case 845:
                var3 = _closure1_slot10;
                var2 = _closure1_slot11;
                var1 = {};
                var12 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = var5[var6];
                var7 = var12.bind(var4)(var6);
                var6 = var7.renderTitleWrapper;
                var10 = var5[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var5[var13];
                var5 = var12.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.x87QCk;
                var5 = var10.bind(var11)(var5);
                var5 = var6.bind(var7)(var8, var9, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 939:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 3610, 3100, 1621, 660, 33, 1297, 671, 566, 9050, 4794, 1234, 7782, 9056, 9058, 2]);