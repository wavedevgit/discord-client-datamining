// modules/user_settings/native/devices/UserSettingsSessions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: UserSettingsSessions, environment: var1
        _fun82184: for (var _fun82184_ip = 0;;) switch (_fun82184_ip) {
            case 0:
                var0 = _closure1_slot13;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var _closure2_slot0 = var11;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.useAuthSessions;
                var0 = var0.bind(var1)();
                var21 = var0.currentSession;
                var8 = var0.otherSessions;
                var _closure2_slot1 = var8;
                var0 = 10;
                var0 = var6[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var13
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var9 = 0;
                var1 = var2[var9];
                var0 = 1;
                var0 = var2[var0];
                var _closure2_slot2 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useContext;
                var0 = 11;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var2.bind(var4)(var0);
                var _closure2_slot3 = var0;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var2 = function() { // Environment: var13
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var1 = var3[var1];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.fetchAuthSessions;
                    var1 = var1.bind(var2)();
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var0 = true;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = 500;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 12;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.clearAuthSessions;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var5)(var2, var0);
                var0 = null;
                if (!(var0 != var21)) {
                    _fun82184_ip = 765;
                    continue _fun82184
                }
            case 225:
                var5 = _closure1_slot11;
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 13;
                var2 = var16[var2];
                var2 = var20.bind(var3)(var2);
                var4 = var2.Stack;
                var2 = {};
                var6 = 24;
                var2.spacing = var6;
                var6 = var11.list;
                var2.style = var6;
                var15 = _closure1_slot10;
                var12 = 14;
                var6 = var16[var12];
                var6 = var20.bind(var3)(var6);
                var14 = var6.TableRowGroup;
                var6 = {};
                var18 = 15;
                var17 = var16[var18];
                var17 = var20.bind(var3)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var16 = var16[var18];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.LLS19o;
                var16 = var17.bind(var19)(var16);
                var6.title = var16;
                var17 = var0 != var21;
                var16 = null;
                if (!var17) {
                    _fun82184_ip = 387;
                    continue _fun82184
                }
            case 360:
                var20 = _closure1_slot10;
                var19 = _closure1_slot15;
                var17 = {};
                var17.session = var21;
                var21 = true;
                var17.current = var21;
                var16 = var20.bind(var3)(var19, var17);
            case 387:
                var6.children = var16;
                var14 = var15.bind(var3)(var14, var6);
                var6 = new Array(3);
                var6[0] = var14;
                var14 = var8.length;
                if (!(!(var14 > var9))) {
                    _fun82184_ip = 432;
                    continue _fun82184
                }
            case 414:
                if (!(var0 != var10)) {
                    _fun82184_ip = 432;
                    continue _fun82184
                }
            case 418:
                var14 = var10.mfaEnabled;
                var10 = null;
                if (var14) {
                    _fun82184_ip = 566;
                    continue _fun82184
                }
            case 432:
                var15 = _closure1_slot11;
                var20 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = var16[var12];
                var12 = var20.bind(var3)(var12);
                var14 = var12.TableRowGroup;
                var12 = {};
                var17 = var16[var18];
                var17 = var20.bind(var3)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var16 = var16[var18];
                var16 = var20.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.xx1MWc;
                var16 = var17.bind(var19)(var16);
                var12.title = var16;
                var17 = var8.map;
                var16 = function(arg0, arg1) { // Environment: var13
                    _fun82189: for (var _fun82189_ip = 0;;) switch (_fun82189_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot4;
                            var3 = var2.Fragment;
                            var2 = {};
                            var7 = _closure2_slot3;
                            var6 = null;
                            if (var7) {
                                _fun82189_ip = 77;
                                continue _fun82189
                            }
                        case 34:
                            var8 = 0;
                            var7 = arg1;
                            var6 = null;
                            if (!(var8 !== var7)) {
                                _fun82189_ip = 77;
                                continue _fun82189
                            }
                        case 45:
                            var9 = _closure1_slot10;
                            var8 = _closure1_slot6;
                            var7 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.divider;
                            var7.style = var5;
                            var5 = undefined;
                            var6 = var9.bind(var5)(var8, var7);
                        case 77:
                            var5 = new Array(2);
                            var5[0] = var6;
                            var8 = _closure1_slot10;
                            var7 = _closure1_slot15;
                            var6 = {};
                            var6.session = var0;
                            var1 = undefined;
                            var6 = var8.bind(var1)(var7, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var0.id_hash;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var17 = var17.bind(var8)(var16);
                var16 = new Array(2);
                var16[0] = var17;
                var20 = _closure1_slot10;
                var19 = _closure1_slot16;
                var17 = {};
                var17 = var20.bind(var3)(var19, var17);
                var16[1] = var17;
                var12.children = var16;
                var10 = var15.bind(var3)(var14, var12);
            case 566:
                var6[1] = var10;
                var8 = var8.length;
                var9 = var8 > var9;
                var8 = null;
                if (!var9) {
                    _fun82184_ip = 749;
                    continue _fun82184
                }
            case 587:
                var12 = _closure1_slot10;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 16;
                var9 = var14[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.TableRow;
                var9 = {
                    'start': true,
                    'end': true,
                    'variant': 'danger'
                };
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var19 = var15.intl;
                var16 = var19.string;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.cLmmeY;
                var15 = var16.bind(var19)(var15);
                var9.label = var15;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.OTXyaf;
                var14 = var15.bind(var16)(var14);
                var9.subLabel = var14;
                var13 = function() { // Original name: onPress, environment: var13
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.logOutSessions;
                    var4 = _closure2_slot1;
                    var3 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id_hash;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9.onPress = var13;
                var8 = var12.bind(var3)(var10, var9);
            case 749:
                var6[2] = var8;
                var2.children = var6;
                var8 = var5.bind(var3)(var4, var2);
                _fun82184_ip = 819;
                continue _fun82184;
            case 765:
                var0 = null;
                if (!var1) {
                    _fun82184_ip = 816;
                    continue _fun82184
                }
            case 770:
                var4 = _closure1_slot10;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var11.loading;
                var1.style = var5;
                var9 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var5 = var9.bind(var3)(var6, var5);
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 816:
                var8 = var0;
            case 819:
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var6 = _closure1_slot11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 17;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {};
                var9 = true;
                var4.bottom = var9;
                var10 = _closure1_slot10;
                var7 = 18;
                var7 = var15[var7];
                var7 = var14.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {};
                var12 = 'text-sm/medium';
                var7.variant = var12;
                var11 = var11.description;
                var7.style = var11;
                var11 = 15;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.zZp618;
                var11 = var12.bind(var13)(var11);
                var7.children = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: SessionInfo, environment: var1
        _fun82192: for (var _fun82192_ip = 0;;) switch (_fun82192_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.session;
                var _closure2_slot0 = var4;
                var0 = var0.current;
                var1 = _closure1_slot13;
                var3 = undefined;
                var17 = var1.bind(var3)();
                var1 = var4.client_info;
                var9 = null;
                var2 = var9 == var1;
                var20 = undefined;
                if (var2) {
                    _fun82192_ip = 55;
                    continue _fun82192
                }
            case 50:
                var20 = var1.location;
            case 55:
                if (!(var9 == var20)) {
                    _fun82192_ip = 82;
                    continue _fun82192
                }
            case 59:
                var2 = var4.client_info;
                var6 = var9 == var2;
                var1 = undefined;
                if (var6) {
                    _fun82192_ip = 79;
                    continue _fun82192
                }
            case 74:
                var1 = var2.ip;
            case 79:
                var20 = var1;
            case 82:
                var2 = var4.client_info;
                var6 = var9 == var2;
                var1 = undefined;
                if (var6) {
                    _fun82192_ip = 103;
                    continue _fun82192
                }
            case 97:
                var1 = var2.platform;
            case 103:
                var2 = var4.client_info;
                var6 = var9 == var2;
                var7 = undefined;
                if (var6) {
                    _fun82192_ip = 124;
                    continue _fun82192
                }
            case 118:
                var7 = var2.os;
            case 124:
                var2 = var9 == var7;
                var6 = undefined;
                if (var2) {
                    _fun82192_ip = 153;
                    continue _fun82192
                }
            case 133:
                var2 = var7.toLowerCase;
                var8 = var2.bind(var7)();
                var2 = var8.trim;
                var6 = var2.bind(var8)();
            case 153:
                if (!(var9 !== var6)) {
                    _fun82192_ip = 399;
                    continue _fun82192
                }
            case 160:
                if (!(var3 !== var6)) {
                    _fun82192_ip = 399;
                    continue _fun82192
                }
            case 167:
                var2 = '';
                if (!(var2 !== var6)) {
                    _fun82192_ip = 399;
                    continue _fun82192
                }
            case 178:
                var2 = 'ios';
                if (!(var2 !== var6)) {
                    _fun82192_ip = 337;
                    continue _fun82192
                }
            case 189:
                var2 = 'android';
                if (!(var2 !== var6)) {
                    _fun82192_ip = 337;
                    continue _fun82192
                }
            case 200:
                var2 = 'horizon os';
                if (!(var2 !== var6)) {
                    _fun82192_ip = 272;
                    continue _fun82192
                }
            case 210:
                var6 = {};
                var6.text = var7;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 26;
                var2 = var10[var2];
                var2 = var8.bind(var3)(var2);
                var6.iconSource = var2;
                var8 = _closure1_slot0;
                var2 = 27;
                var2 = var10[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ScreenIcon;
                var6.IconComponent = var2;
                _fun82192_ip = 508;
                continue _fun82192;
            case 272:
                var2 = {};
                var2.text = var7;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 28;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var2.iconSource = var8;
                var10 = _closure1_slot0;
                var8 = 30;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.VrHeadsetIcon;
                var2.IconComponent = var8;
                var6 = var2;
                _fun82192_ip = 508;
                continue _fun82192;
            case 337:
                var2 = {};
                var2.text = var7;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 28;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var2.iconSource = var7;
                var8 = _closure1_slot0;
                var7 = 29;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.MobilePhoneIcon;
                var2.IconComponent = var7;
                var6 = var2;
                _fun82192_ip = 508;
                continue _fun82192;
            case 399:
                var2 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 15;
                var11 = var10[var7];
                var11 = var8.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.cDHCNY;
                var7 = var11.bind(var12)(var7);
                var2.text = var7;
                var11 = _closure1_slot1;
                var7 = 26;
                var7 = var10[var7];
                var7 = var11.bind(var3)(var7);
                var2.iconSource = var7;
                var7 = 27;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.ScreenIcon;
                var2.IconComponent = var7;
                var6 = var2;
            case 508:
                var2 = var6.text;
                var12 = var6.iconSource;
                var11 = var6.IconComponent;
                var16 = null;
                if (var0) {
                    _fun82192_ip = 566;
                    continue _fun82192
                }
            case 529:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 9;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.formatDate;
                var4 = var4.approx_last_used_time;
                var16 = var6.bind(var7)(var4);
            case 566:
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var1;
                var2 = var4.filter;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 19;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.isNotNullish;
                var27 = var2.bind(var4)(var1);
                var4 = null;
                if (var0) {
                    _fun82192_ip = 809;
                    continue _fun82192
                }
            case 622:
                var2 = _closure1_slot10;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 20;
                var0 = var14[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = 'button';
                var0.accessibilityRole = var6;
                var6 = 15;
                var7 = var14[var6];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var14[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.E4MJNt;
                var6 = var7.bind(var8)(var6);
                var0.accessibilityLabel = var6;
                var5 = function() { // Original name: onPress, environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.logOutSessions;
                    var0 = _closure2_slot0;
                    var0 = var0.id_hash;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.onPress = var5;
                var5 = {
                    'top': 5,
                    'left': 5,
                    'bottom': 5,
                    'right': 5
                };
                var0.hitSlop = var5;
                var7 = _closure1_slot10;
                var10 = _closure1_slot1;
                var5 = 21;
                var5 = var14[var5];
                var6 = var10.bind(var3)(var5);
                var5 = {};
                var8 = var17.logoutButton;
                var5.style = var8;
                var8 = 22;
                var8 = var14[var8];
                var8 = var10.bind(var3)(var8);
                var5.source = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.children = var5;
                var4 = var2.bind(var3)(var1, var0);
            case 809:
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var17.sessionInfo;
                var0.style = var5;
                var8 = true;
                var0.accessible = var8;
                var7 = _closure1_slot11;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var17.sessionInfoRow;
                var5.style = var10;
                var15 = _closure1_slot10;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var18 = 18;
                var10 = var10[var18];
                var10 = var14.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {};
                var28 = 'text-md/semibold';
                var10.variant = var28;
                var19 = 0;
                var19 = var27[var19];
                var10.children = var19;
                var14 = var15.bind(var3)(var14, var10);
                var10 = new Array(2);
                var10[0] = var14;
                var14 = var27.length;
                var26 = 1;
                var14 = var14 > var26;
                if (!var14) {
                    _fun82192_ip = 1064;
                    continue _fun82192
                }
            case 936:
                var21 = _closure1_slot11;
                var19 = _closure1_slot12;
                var15 = {};
                var29 = _closure1_slot10;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var22 = var23[var18];
                var22 = var24.bind(var3)(var22);
                var25 = var22.Text;
                var22 = {
                    'variant': 'text-md/semibold',
                    'accessibilityLabel': ',',
                    'style': null,
                    'children': '·'
                };
                var30 = var17.sessionInfoRowSpacing;
                var22.style = var30;
                var25 = var29.bind(var3)(var25, var22);
                var22 = new Array(2);
                var22[0] = var25;
                var25 = _closure1_slot10;
                var23 = var23[var18];
                var23 = var24.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {};
                var23.variant = var28;
                var26 = var27[var26];
                var23.children = var26;
                var23 = var25.bind(var3)(var24, var23);
                var22[1] = var23;
                var15.children = var22;
                var14 = var21.bind(var3)(var19, var15);
            case 1064:
                var10[1] = var14;
                var5.children = var10;
                var5 = var7.bind(var3)(var6, var5);
                var0.children = var5;
                var5 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot10;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 16;
                var0 = var14[var6];
                var0 = var7.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var10 = _closure1_slot10;
                var6 = var14[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.TableRow;
                var7 = var6.Icon;
                var6 = {};
                var6.source = var12;
                var6.IconComponent = var11;
                var11 = 'translucent';
                var6.variant = var11;
                var6 = var10.bind(var3)(var7, var6);
                var0.icon = var6;
                var0.label = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot6;
                var5 = {};
                var5.accessible = var8;
                var10 = var9 != var20;
                if (!var10) {
                    _fun82192_ip = 1288;
                    continue _fun82192
                }
            case 1198:
                var12 = _closure1_slot10;
                var11 = _closure1_slot6;
                var8 = {};
                var14 = var17.sessionInfoRow;
                var8.style = var14;
                var19 = _closure1_slot10;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var18];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var21 = var17.detailsText;
                var14.style = var21;
                var14.children = var20;
                var14 = var19.bind(var3)(var15, var14);
                var8.children = var14;
                var10 = var12.bind(var3)(var11, var8);
            case 1288:
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var9 != var16;
                if (!var9) {
                    _fun82192_ip = 1393;
                    continue _fun82192
                }
            case 1303:
                var12 = _closure1_slot10;
                var11 = _closure1_slot6;
                var10 = {};
                var14 = var17.sessionInfoRow;
                var10.style = var14;
                var15 = _closure1_slot10;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var18];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var17 = var17.detailsText;
                var13.style = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1393:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.subLabel = var5;
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: UnknownLegacySessionsInfo, environment: var1
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 23;
        var0 = var9[var0];
        var3 = undefined;
        var1 = var5.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var2 = _closure1_slot10;
        var4 = 16;
        var0 = var9[var4];
        var0 = var5.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var7 = _closure1_slot10;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.TableRow;
        var6 = var4.Icon;
        var4 = {};
        var11 = 'translucent';
        var4.variant = var11;
        var11 = _closure1_slot1;
        var10 = 24;
        var10 = var9[var10];
        var10 = var11.bind(var3)(var10);
        var4.source = var10;
        var4 = var7.bind(var3)(var6, var4);
        var0.icon = var4;
        var4 = 15;
        var6 = var9[var4];
        var6 = var5.bind(var3)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var4];
        var6 = var5.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.iUa0sn;
        var6 = var7.bind(var10)(var6);
        var0.label = var6;
        var6 = var9[var4];
        var6 = var5.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4["044+8i"];
        var4 = {};
        var8 = function() { // Original name: onClick, environment: var8
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 25;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.setSection;
            var2 = _closure1_slot9;
            var2 = var2.ACCOUNT;
            var2 = var3.bind(var4)(var2);
            var3 = _closure2_slot0;
            var2 = var3.push;
            var1 = _closure1_slot9;
            var1 = var1.ACCOUNT;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.onClick = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.subLabel = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var13 = 4;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var16 = var3.Fonts;
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var11 = 8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingTop': 8,
        'marginBottom': 8
    };
    var3.description = var8;
    var8 = {};
    var17 = 7;
    var10 = var5[var17];
    var15 = var12.bind(var0)(var10);
    var14 = var16.DISPLAY_MEDIUM;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var22 = 12;
    var24 = var15.bind(var0)(var14, var10, var22);
    var25 = var8;
    var10 = copyDataProperties(var25, var24);
    var18 = '700';
    var15 = 'fontWeight';
    var8[var15] = var18;
    var10 = 'uppercase';
    var14 = 'textTransform';
    var8[var14] = var10;
    var3.headerText = var8;
    var8 = {};
    var19 = var5[var17];
    var21 = var12.bind(var0)(var19);
    var20 = var16.DISPLAY_MEDIUM;
    var19 = var5[var11];
    var19 = var12.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_MUTED;
    var24 = var21.bind(var0)(var20, var19, var22);
    var25 = var8;
    var19 = copyDataProperties(var25, var24);
    var8[var15] = var18;
    var8[var14] = var10;
    var3.legacySessionHeaderText = var8;
    var8 = {};
    var14 = var5[var17];
    var20 = var12.bind(var0)(var14);
    var18 = var16.PRIMARY_MEDIUM;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var19 = 14;
    var24 = var20.bind(var0)(var18, var14, var19);
    var25 = var8;
    var14 = copyDataProperties(var25, var24);
    var14 = '500';
    var8[var15] = var14;
    var3.detailsText = var8;
    var8 = {};
    var17 = var5[var17];
    var18 = var12.bind(var0)(var17);
    var17 = var16.PRIMARY_MEDIUM;
    var16 = var5[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_MUTED;
    var24 = var18.bind(var0)(var17, var16, var19);
    var25 = var8;
    var16 = copyDataProperties(var25, var24);
    var8[var15] = var14;
    var3.legacySessionText = var8;
    var14 = 'flex';
    var8 = {
        'display': 'flex',
        'flex': 1
    };
    var3.container = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.loading = var8;
    var8 = {};
    var8.paddingVertical = var11;
    var3.sessionList = var8;
    var8 = {
        'width': 48,
        'height': 48,
        'padding': 8
    };
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xl;
    var8.borderRadius = var15;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var8.backgroundColor = var15;
    var3.sessionIcon = var8;
    var8 = {};
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var15;
    var3.legacySessionIcon = var8;
    var8 = {};
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var8.color = var15;
    var3.sessionIconColor = var8;
    var8 = {};
    var8.display = var14;
    var3.sessionInfo = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.sessionInfoRow = var8;
    var8 = {};
    var8.marginBottom = var13;
    var3.sessionInfoHeaderRow = var8;
    var8 = {};
    var8.marginHorizontal = var13;
    var3.sessionInfoRowSpacing = var8;
    var8 = {};
    var13 = 10;
    var8.marginRight = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var13;
    var3.logoutButton = var8;
    var8 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var8.color = var13;
    var3.logoutAllButton = var8;
    var8 = {
        'backgroundColor': null,
        'height': 1,
        'marginVertical': 8,
        'marginLeft': 16
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var3.divider = var8;
    var8 = {};
    var8.textTransform = var10;
    var3.label = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.list = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/devices/UserSettingsSessions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: UserSettingsSessionsContainer, environment: var1
        var3 = _closure1_slot10;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 11;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.RedesignCompat;
        var0 = {};
        var6 = _closure1_slot10;
        var5 = _closure1_slot14;
        var4 = {};
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 660, 33, 1297, 4645, 671, 7476, 566, 4860, 10480, 4039, 5325, 1234, 4861, 4697, 3900, 1304, 4865, 4045, 5285, 1469, 10395, 7186, 10481, 10482, 8631, 10483, 10485, 2]);