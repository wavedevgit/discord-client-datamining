// modules/multi_account/native/AccountSwitcherListItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: AccountStatusIcon, environment: var3
        _fun100257: for (var _fun100257_ip = 0;;) switch (_fun100257_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var0 = var3[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var3 = var6.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var3.bind(var6)(var2, var0);
                var3 = var1.id;
                var0 = null;
                var7 = var0 == var6;
                var2 = undefined;
                if (var7) {
                    _fun100257_ip = 86;
                    continue _fun100257
                }
            case 81:
                var2 = var6.id;
            case 86:
                if (!(var3 !== var2)) {
                    _fun100257_ip = 183;
                    continue _fun100257
                }
            case 90:
                var2 = var1.tokenStatus;
                var1 = _closure1_slot8;
                var1 = var1.INVALID;
                var0 = null;
                if (!(var2 === var1)) {
                    _fun100257_ip = 181;
                    continue _fun100257
                }
            case 112:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.CircleInformationIcon;
                var1 = {};
                var7 = _closure1_slot1;
                var6 = 8;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.ICON_FEEDBACK_CRITICAL;
                var1.color = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 181:
                _fun100257_ip = 252;
                continue _fun100257;
            case 183:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.CircleCheckIcon;
                var1 = {};
                var6 = _closure1_slot1;
                var5 = 8;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.TEXT_BRAND;
                var1.color = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 252:
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Pressable;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MultiAccountTokenStatus;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 8;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_LINK;
    var9.color = var11;
    var4.addAccountLabel = var9;
    var9 = {
        'marginLeft': 12,
        'flex': 1
    };
    var4.accountListTag = var9;
    var9 = {};
    var11 = 'auto';
    var9.marginLeft = var11;
    var4.infoIcon = var9;
    var9 = {};
    var9.marginLeft = var11;
    var4.checkedIcon = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var4.tagContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'alignItems': 'center',
        'paddingVertical': 8,
        'paddingHorizontal': 16
    };
    var4.accountSwitcherListItem = var9;
    var9 = {};
    var9.flexShrink = var10;
    var4.username = var9;
    var9 = {
        'flex': 1,
        'minWidth': '30%',
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var4.accountInfo = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/native/AccountSwitcherListItem.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: AccountSwitcherListItem, environment: var3
        _fun100259: for (var _fun100259_ip = 0;;) switch (_fun100259_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.user;
                var9 = var3.onPressUser;
                var2 = var3.showActiveAccountLabel;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun100259_ip = 30;
                    continue _fun100259
                }
            case 28:
                var2 = false;
            case 30:
                var6 = var3.sortHandlers;
                var10 = var3.delayLongPress;
                var8 = var3.leading;
                var5 = var3.trailing;
                var3 = _closure1_slot11;
                var19 = var3.bind(var4)();
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 9;
                var13 = var12[var3];
                var16 = var11.bind(var4)(var13);
                var15 = var16.useStateFromStores;
                var13 = _closure1_slot6;
                var14 = new Array(1);
                var14[0] = var13;
                var13 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var16 = var15.bind(var16)(var14, var13);
                var3 = var12[var3];
                var12 = var11.bind(var4)(var3);
                var11 = var12.useStateFromStores;
                var13 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var13;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var11.bind(var12)(var3, var1);
                var11 = var0.id;
                var1 = null;
                var13 = var1 == var12;
                var3 = undefined;
                if (var13) {
                    _fun100259_ip = 175;
                    continue _fun100259
                }
            case 170:
                var3 = var12.id;
            case 175:
                var12 = var11 === var3;
                var3 = _closure1_slot5;
                var11 = var3.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var3
                    }
                });
                var29 = var11;
                var28 = var0;
                var3 = new var29[var3](var28, var27);
                var20 = var3 instanceof Object ? var3 : var11;
                if (!var12) {
                    _fun100259_ip = 215;
                    continue _fun100259
                }
            case 209:
                if (var2) {
                    _fun100259_ip = 344;
                    continue _fun100259
                }
            case 215:
                var3 = var0.tokenStatus;
                var2 = _closure1_slot8;
                var2 = var2.INVALID;
                var14 = null;
                if (!(var3 === var2)) {
                    _fun100259_ip = 446;
                    continue _fun100259
                }
            case 240:
                var11 = _closure1_slot9;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 12;
                var2 = var21[var2];
                var2 = var18.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-feedback-critical'
                };
                var13 = 13;
                var15 = var21[var13];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var13 = var21[var13];
                var13 = var18.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.tYX2ps;
                var13 = var15.bind(var17)(var13);
                var2.children = var13;
                var14 = var11.bind(var4)(var3, var2);
                _fun100259_ip = 446;
                continue _fun100259;
            case 344:
                var11 = _closure1_slot9;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 12;
                var2 = var21[var2];
                var2 = var18.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-brand'
                };
                var13 = 13;
                var15 = var21[var13];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var13 = var21[var13];
                var13 = var18.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.seV8yt;
                var13 = var15.bind(var17)(var13);
                var2.children = var13;
                var14 = var11.bind(var4)(var3, var2);
            case 446:
                if (!(var1 != var9)) {
                    _fun100259_ip = 478;
                    continue _fun100259
                }
            case 450:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var3 = var1.PressableOpacity;
                _fun100259_ip = 482;
                continue _fun100259;
            case 478:
                var3 = _closure1_slot3;
            case 482:
                var2 = _closure1_slot10;
                var1 = {};
                var11 = 'radio';
                var1.accessibilityRole = var11;
                var11 = {};
                var11.selected = var12;
                var1.accessibilityState = var11;
                var11 = undefined;
                if (var12) {
                    _fun100259_ip = 570;
                    continue _fun100259
                }
            case 513:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 13;
                var13 = var18[var12];
                var13 = var17.bind(var4)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var12 = var18[var12];
                var12 = var17.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.wY4y0R;
                var11 = var13.bind(var15)(var12);
            case 570:
                var1.accessibilityHint = var11;
                var11 = var19.accountSwitcherListItem;
                var1.style = var11;
                var1.delayLongPress = var10;
                var1.onPress = var9;
                var28 = var1;
                var27 = var6;
                var6 = copyDataProperties(var28, var27);
                var6 = new Array(3);
                var6[0] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var19.accountInfo;
                var8.style = var11;
                var13 = _closure1_slot9;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var11 = 15;
                var11 = var23[var11];
                var12 = var22.bind(var4)(var11);
                var11 = {};
                var11.user = var20;
                var11.guildId = var4;
                var12 = var13.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var13 = var19.accountListTag;
                var12.style = var13;
                var13 = {};
                var15 = var19.tagContainer;
                var13.style = var15;
                var18 = _closure1_slot9;
                var17 = _closure1_slot0;
                var21 = 12;
                var15 = var23[var21];
                var15 = var17.bind(var4)(var15);
                var17 = var15.Text;
                var15 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default',
                    'style': null,
                    'lineClamp': 1
                };
                var19 = var19.username;
                var15.style = var19;
                var19 = 16;
                var19 = var23[var19];
                var23 = var22.bind(var4)(var19);
                var22 = var23.getUserTag;
                var19 = {};
                var24 = 'username';
                var19.mode = var24;
                var24 = 'always';
                if (!var16) {
                    _fun100259_ip = 795;
                    continue _fun100259
                }
            case 789:
                var24 = 'never';
            case 795:
                var19.identifiable = var24;
                var19 = var22.bind(var23)(var20, var19);
                var15.children = var19;
                var17 = var18.bind(var4)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var16 = !var16;
                if (!var16) {
                    _fun100259_ip = 843;
                    continue _fun100259
                }
            case 830:
                var17 = var20.hasUniqueUsername;
                var17 = var17.bind(var20)();
                var16 = !var17;
            case 843:
                if (!var16) {
                    _fun100259_ip = 924;
                    continue _fun100259
                }
            case 846:
                var19 = _closure1_slot9;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var21];
                var17 = var18.bind(var4)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-md/normal',
                    'color': 'text-muted'
                };
                var22 = var20.discriminator;
                var20 = global;
                var20 = var20.HermesInternal;
                var21 = var20.concat;
                var20 = '#';
                var20 = var21.bind(var20)(var22);
                var17.children = var20;
                var16 = var19.bind(var4)(var18, var17);
            case 924:
                var15[1] = var16;
                var13.children = var15;
                var15 = var10.bind(var4)(var9, var13);
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var12.children = var13;
                var12 = var10.bind(var4)(var9, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var6[1] = var8;
                if (!(var4 === var5)) {
                    _fun100259_ip = 1002;
                    continue _fun100259
                }
            case 982:
                var9 = _closure1_slot9;
                var8 = _closure1_slot12;
                var7 = {};
                var7.user = var0;
                var5 = var9.bind(var4)(var8, var7);
            case 1002:
                var6[2] = var5;
                var5 = 'children';
                var1[var5] = var6;
                var0 = var0.id;
                var0 = var2.bind(var4)(var3, var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.AccountStatusIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1620, 3196, 1613, 10179, 33, 1297, 671, 566, 3230, 3225, 3900, 1234, 4865, 5414, 3195, 2]);