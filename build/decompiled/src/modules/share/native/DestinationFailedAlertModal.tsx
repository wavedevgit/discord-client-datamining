// modules/share/native/DestinationFailedAlertModal.tsx
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
        var12 = var0.channel;
        var0 = _closure1_slot13;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 11;
        var0 = var10[var0];
        var0 = var6.bind(var3)(var0);
        var8 = var0.bind(var3)(var12);
        var2 = _closure1_slot11;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var9.row;
        var0.style = var4;
        var11 = _closure1_slot10;
        var4 = 12;
        var4 = var10[var4];
        var7 = var6.bind(var3)(var4);
        var4 = {};
        var6 = _closure1_slot0;
        var13 = 13;
        var13 = var10[var13];
        var13 = var6.bind(var3)(var13);
        var13 = var13.AvatarSizes;
        var13 = var13.REFRESH_MEDIUM_32;
        var4.size = var13;
        var4.channel = var12;
        var7 = var11.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot10;
        var5 = 14;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/medium',
            'lineClamp': 1,
            'ellipsizeMode': 'tail'
        };
        var9 = var9.label;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun73156: for (var _fun73156_ip = 0;;) switch (_fun73156_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.user;
                var _closure2_slot0 = var12;
                var1 = _closure1_slot13;
                var4 = undefined;
                var13 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var5 = var3[var1];
                var8 = var2.bind(var4)(var5);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getNickname;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var7.bind(var8)(var6, var5);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStoresObject;
                var5 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var5 = _closure1_slot6;
                    var4 = var5.isMobileOnline;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isMobileOnline = var3;
                    var5 = _closure1_slot6;
                    var4 = var5.getStatus;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.status = var3;
                    var3 = _closure1_slot6;
                    var2 = var3.isVROnline;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isVROnline = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var14 = var0.isMobileOnline;
                var7 = var0.isVROnline;
                var17 = var0.status;
                var11 = null;
                var1 = var11 != var12;
                var0 = null;
                if (!var1) {
                    _fun73156_ip = 405;
                    continue _fun73156
                }
            case 148:
                var3 = _closure1_slot11;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var13.row;
                var1.style = var5;
                var8 = _closure1_slot10;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var15 = 13;
                var5 = var5[var15];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.user = var12;
                var5.guildId = var4;
                var16 = _closure1_slot9;
                var18 = var16.OFFLINE;
                var16 = null;
                if (!(var18 !== var17)) {
                    _fun73156_ip = 221;
                    continue _fun73156
                }
            case 218:
                var16 = var17;
            case 221:
                var5.status = var16;
                var5.isMobileOnline = var14;
                var5.isVROnline = var7;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var15];
                var15 = var7.bind(var4)(var15);
                var15 = var15.AvatarSizes;
                var15 = var15.XSMALL;
                var5.size = var15;
                var15 = var12.avatarDecoration;
                var5.avatarDecoration = var15;
                var15 = true;
                var5.autoStatusCutout = var15;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot10;
                var6 = 14;
                var6 = var14[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'lineClamp': 1,
                    'ellipsizeMode': 'tail'
                };
                var13 = var13.label;
                var6.style = var13;
                if (!(var11 == var9)) {
                    _fun73156_ip = 381;
                    continue _fun73156
                }
            case 350:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 16;
                var10 = var13[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.getName;
                var9 = var10.bind(var11)(var12);
            case 381:
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 405:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var13 = var1.channel;
        var _closure2_slot0 = var13;
        var1 = _closure1_slot13;
        var3 = undefined;
        var9 = var1.bind(var3)();
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 15;
        var1 = var10[var1];
        var4 = var6.bind(var3)(var1);
        var2 = var4.useStateFromStores;
        var7 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var7;
        var0 = function() { // Environment: var0
            _fun73160: for (var _fun73160_ip = 0;;) switch (_fun73160_ip) {
                case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var4 = _closure2_slot0;
                    var0 = null;
                    var4 = var0 == var4;
                    var0 = undefined;
                    if (var4) {
                        _fun73160_ip = 39;
                        continue _fun73160
                    }
                case 30:
                    var3 = _closure2_slot0;
                    var0 = var3.guild_id;
                case 39:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var14 = var2.bind(var4)(var1, var0);
        var1 = _closure1_slot1;
        var0 = 11;
        var0 = var10[var0];
        var0 = var1.bind(var3)(var0);
        var8 = var0.bind(var3)(var13);
        var2 = _closure1_slot11;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var9.row;
        var0.style = var4;
        var11 = _closure1_slot10;
        var12 = 17;
        var4 = var10[var12];
        var4 = var6.bind(var3)(var4);
        var7 = var4.GuildIconWithChannelType;
        var4 = {};
        var15 = '';
        var4['aria-label'] = var15;
        var4.guild = var14;
        var4.channel = var13;
        var12 = var10[var12];
        var12 = var6.bind(var3)(var12);
        var12 = var12.GuildIconWithChannelTypeSizes;
        var12 = var12.SMALL_32;
        var4.size = var12;
        var7 = var11.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot10;
        var5 = 14;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/medium',
            'lineClamp': 1,
            'ellipsizeMode': 'tail'
        };
        var9 = var9.label;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun73161: for (var _fun73161_ip = 0;;) switch (_fun73161_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.destination;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStoresObject;
                var6 = _closure1_slot4;
                var2 = new Array(2);
                var2[0] = var6;
                var6 = _closure1_slot8;
                var2[1] = var6;
                var0 = function() { // Environment: var0
                    _fun73162: for (var _fun73162_ip = 0;;) switch (_fun73162_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot0;
                            var5 = var1.type;
                            var4 = 'channel';
                            var3 = null;
                            if (!(var4 === var5)) {
                                _fun73162_ip = 50;
                                continue _fun73162
                            }
                        case 24:
                            var6 = _closure1_slot4;
                            var5 = var6.getChannel;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var3 = var5.bind(var6)(var4);
                        case 50:
                            var0.channel = var3;
                            var3 = _closure2_slot0;
                            var4 = var3.type;
                            var3 = 'user';
                            var1 = null;
                            if (!(var3 === var4)) {
                                _fun73162_ip = 100;
                                continue _fun73162
                            }
                        case 73:
                            var4 = _closure1_slot8;
                            var3 = var4.getUser;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 100:
                            var0.user = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var2, var0);
                var5 = var0.channel;
                var7 = var0.user;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun73161_ip = 108;
                    continue _fun73161
                }
            case 95:
                var2 = var5.isGroupDM;
                var2 = var2.bind(var5)();
                if (var2) {
                    _fun73161_ip = 165;
                    continue _fun73161
                }
            case 108:
                if (!(var0 == var7)) {
                    _fun73161_ip = 143;
                    continue _fun73161
                }
            case 112:
                var2 = var0 != var5;
                var0 = null;
                if (!var2) {
                    _fun73161_ip = 141;
                    continue _fun73161
                }
            case 121:
                var6 = _closure1_slot10;
                var3 = _closure1_slot16;
                var2 = {};
                var2.channel = var5;
                var0 = var6.bind(var4)(var3, var2);
            case 141:
                _fun73161_ip = 163;
                continue _fun73161;
            case 143:
                var6 = _closure1_slot10;
                var3 = _closure1_slot15;
                var2 = {};
                var2.user = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 163:
                _fun73161_ip = 185;
                continue _fun73161;
            case 165:
                var3 = _closure1_slot10;
                var2 = _closure1_slot14;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 185:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.borderWidth = var9;
    var10 = 10;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var8.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingVertical = var12;
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': null,
        'height': 40
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.gap = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.marginHorizontal = var10;
    var3.row = var8;
    var8 = {};
    var8.flexShrink = var9;
    var3.label = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/DestinationFailedAlertModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73163: for (var _fun73163_ip = 0;;) switch (_fun73163_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.title;
                var4 = var0.content;
                var12 = var0.failedDestinations;
                var11 = var0.onRetry;
                var0 = _closure1_slot13;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = 18;
                var0 = var7[var13];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AlertModal;
                var0 = {};
                var0.title = var6;
                var0.content = var4;
                var8 = _closure1_slot10;
                var6 = _closure1_slot3;
                var4 = {};
                var9 = var9.container;
                var4.style = var9;
                var10 = var12.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var0 = arg0;
                    var2.destination = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var9 = var10.bind(var12)(var9);
                var4.children = var9;
                var4 = var8.bind(var3)(var6, var4);
                var0.extraContent = var4;
                var6 = _closure1_slot10;
                var4 = 19;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.AlertActions;
                var4 = {};
                var7 = null;
                if (!(var7 == var11)) {
                    _fun73163_ip = 265;
                    continue _fun73163
                }
            case 161:
                var10 = _closure1_slot10;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = var17[var13];
                var7 = var16.bind(var3)(var7);
                var9 = var7.AlertActionButton;
                var8 = {};
                var7 = 'primary';
                var8.variant = var7;
                var7 = 20;
                var12 = var17[var7];
                var12 = var16.bind(var3)(var12);
                var15 = var12.intl;
                var12 = var15.string;
                var7 = var17[var7];
                var7 = var16.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.BddRzS;
                var7 = var12.bind(var15)(var7);
                var8.text = var7;
                var7 = 'confirm';
                var7 = var10.bind(var3)(var9, var8, var7);
                _fun73163_ip = 488;
                continue _fun73163;
            case 265:
                var10 = _closure1_slot11;
                var9 = _closure1_slot12;
                var8 = {};
                var17 = _closure1_slot10;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = var19[var13];
                var12 = var18.bind(var3)(var12);
                var16 = var12.AlertActionButton;
                var15 = {};
                var12 = 'primary';
                var15.variant = var12;
                var15.onPress = var11;
                var12 = 20;
                var11 = var19[var12];
                var11 = var18.bind(var3)(var11);
                var21 = var11.intl;
                var20 = var21.string;
                var11 = var19[var12];
                var11 = var18.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["5911Lb"];
                var11 = var20.bind(var21)(var11);
                var15.text = var11;
                var11 = 'confirm';
                var15 = var17.bind(var3)(var16, var15, var11);
                var11 = new Array(2);
                var11[0] = var15;
                var15 = _closure1_slot10;
                var13 = var19[var13];
                var13 = var18.bind(var3)(var13);
                var14 = var13.AlertActionButton;
                var13 = {};
                var16 = 'secondary';
                var13.variant = var16;
                var16 = var19[var12];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var12 = var19[var12];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.WAI6xu;
                var12 = var16.bind(var17)(var12);
                var13.text = var12;
                var12 = 'cancel';
                var12 = var15.bind(var3)(var14, var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 488:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.actions = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3610, 3100, 1621, 483, 33, 1297, 671, 4792, 9039, 5452, 3941, 566, 3236, 9170, 4027, 4027, 1234, 2]);