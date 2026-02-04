// modules/multi_account/native/ChooseAccount.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MultiAccountTokenStatus;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_ACCOUNTS;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.AuthStates;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.margin = var11;
    var3.container = var8;
    var8 = {
        'marginVertical': null,
        'borderRadius': null,
        'flexDirection': 'column',
        'alignItems': 'stretch',
        'alignSelf': 'stretch',
        'display': 'flex'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.mainCard = var8;
    var8 = {
        'marginTop': 8,
        'marginLeft': 0
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var3.divider = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_LINK;
    var8.color = var9;
    var3.addAccountLabel = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/native/ChooseAccount.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot12;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var15 = _closure1_slot0;
        var16 = _closure1_slot3;
        var0 = 9;
        var0 = var16[var0];
        var1 = var15.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var0 = 10;
        var0 = var16[var0];
        var1 = var15.bind(var3)(var0);
        var0 = var1.useMultiAccountUsers;
        var0 = var0.bind(var1)();
        var9 = var0.multiAccountUsers;
        var _closure2_slot1 = var9;
        var0 = function arg0() {
            _fun100291: for (var _fun100291_ip = 0;;) switch (_fun100291_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.tokenStatus;
                    var1 = _closure1_slot6;
                    var1 = var1.INVALID;
                    if (!(var3 !== var1)) {
                        _fun100291_ip = 66;
                        continue _fun100291
                    }
                case 26:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.switchAccount;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                case 66:
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var1 = _closure1_slot9;
                    var1 = var1.LOGIN;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot8;
                    var1 = var0.LOGIN_VIEWED;
                    var0 = {};
                    var4 = 'choose_account_user_invalid';
                    var0.source = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot2 = var0;
        var0 = function() { // Environment: var10
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun100294: for (var _fun100294_ip = 0;;) switch (_fun100294_ip) {
                        case 0:
                            StartGenerator();
                            var3 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun100294_ip = 468;
                                continue _fun100294
                            }
                        case 13:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var1 = 13;
                            var1 = var7[var1];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var1);
                            var5 = var6.confirm;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var11 = 14;
                            var9 = var7[var11];
                            var9 = var8.bind(var2)(var9);
                            var12 = var9.intl;
                            var10 = var12.string;
                            var9 = var7[var11];
                            var9 = var8.bind(var2)(var9);
                            var9 = var9.t;
                            var9 = var9.n0Fbg6;
                            var9 = var10.bind(var12)(var9);
                            var1.title = var9;
                            var9 = var7[var11];
                            var9 = var8.bind(var2)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var7 = var7[var11];
                            var7 = var8.bind(var2)(var7);
                            var7 = var7.t;
                            var8 = var7.phEQmS;
                            var7 = {};
                            var13 = var3.discriminator;
                            var12 = '0';
                            if (!(var12 !== var13)) {
                                _fun100294_ip = 199;
                                continue _fun100294
                            }
                        case 158:
                            var16 = var3.username;
                            var15 = var3.discriminator;
                            var12 = global;
                            var12 = var12.HermesInternal;
                            var14 = var12.concat;
                            var13 = '';
                            var12 = '#';
                            var12 = var14.bind(var13)(var16, var12, var15);
                            _fun100294_ip = 226;
                            continue _fun100294;
                        case 199:
                            var15 = var3.username;
                            var13 = global;
                            var13 = var13.HermesInternal;
                            var14 = var13.concat;
                            var13 = '';
                            var12 = var14.bind(var13)(var15);
                        case 226:
                            var7.username = var12;
                            var7 = var9.bind(var10)(var8, var7);
                            var1.body = var7;
                            var10 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var8 = var7[var11];
                            var8 = var10.bind(var2)(var8);
                            var12 = var8.intl;
                            var9 = var12.string;
                            var8 = var7[var11];
                            var8 = var10.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8.N86XcP;
                            var8 = var9.bind(var12)(var8);
                            var1.confirmText = var8;
                            var8 = 15;
                            var8 = var7[var8];
                            var8 = var10.bind(var2)(var8);
                            var8 = var8.ButtonColors;
                            var8 = var8.RED;
                            var1.confirmColor = var8;
                            var8 = var7[var11];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var7[var11];
                            var7 = var10.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7["ETE/oC"];
                            var7 = var8.bind(var9)(var7);
                            var1.cancelText = var7;
                            var7 = true;
                            var1.isDismissable = var7;
                            var1 = var5.bind(var6)(var1);
                            SaveGenerator(address = 391);
                        case 389:
                            return var1;
                        case 391:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                            if (var5) {
                                _fun100294_ip = 465;
                                continue _fun100294
                            }
                        case 397:
                            if (!var1) {
                                _fun100294_ip = 462;
                                continue _fun100294
                            }
                        case 400:
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var5 = 16;
                            var5 = var6[var5];
                            var7 = var7.bind(var2)(var5);
                            var5 = var7.hideActionSheet;
                            var5 = var5.bind(var7)();
                            var5 = _closure1_slot2;
                            var4 = 12;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.removeAccount;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                        case 462:
                            return var2;
                        case 465:
                            return var1;
                        case 468:
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
        var0 = var0.bind(var3)();
        var _closure2_slot3 = var0;
        var2 = _closure1_slot10;
        var18 = _closure1_slot1;
        var0 = 18;
        var0 = var16[var0];
        var1 = var18.bind(var3)(var0);
        var0 = {};
        var12 = 14;
        var5 = var16[var12];
        var5 = var15.bind(var3)(var5);
        var7 = var5.intl;
        var6 = var7.string;
        var5 = var16[var12];
        var5 = var15.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.bVbB63;
        var5 = var6.bind(var7)(var5);
        var0.headerText = var5;
        var5 = 19;
        var5 = var16[var5];
        var5 = var15.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var13 = var7.intl;
        var8 = var13.string;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["0M5fN7"];
        var7 = var8.bind(var13)(var7);
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var0.subHeader = var5;
        var5 = 20;
        var5 = var16[var5];
        var5 = var18.bind(var3)(var5);
        var0.backgroundImageSource = var5;
        var5 = true;
        var0.backgroundImageCover = var5;
        var5 = var11.container;
        var0.contentStyle = var5;
        var6 = _closure1_slot11;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var11.mainCard;
        var4.style = var7;
        var8 = var9.map;
        var7 = function(arg0) { // Environment: var10
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot10;
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var1 = 21;
            var1 = var11[var1];
            var3 = undefined;
            var2 = var10.bind(var3)(var1);
            var1 = {};
            var1.user = var0;
            var6 = function() {
                var2 = _closure2_slot2;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onPressUser = var6;
            var6 = _closure1_slot0;
            var5 = 22;
            var5 = var11[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var8 = 'button';
            var5.accessibilityRole = var8;
            var7 = function() {
                var2 = _closure3_slot0;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure5_slot0 = var0;
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var0 = 16;
                    var2 = var11[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var10 = _closure1_slot0;
                    var1 = 17;
                    var1 = var11[var1];
                    var3 = var10.bind(var0)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {};
                    var4 = 'RemoveAccount';
                    var1.key = var4;
                    var5 = {};
                    var7 = 14;
                    var4 = var11[var7];
                    var4 = var10.bind(var0)(var4);
                    var9 = var4.intl;
                    var8 = var9.string;
                    var4 = var11[var7];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["DSN+hw"];
                    var4 = var8.bind(var9)(var4);
                    var5.label = var4;
                    var4 = function() {
                        var2 = _closure2_slot2;
                        var1 = _closure5_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var5.onPress = var4;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var8 = var11[var7];
                    var8 = var10.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.lSLMaU;
                    var7 = var8.bind(var9)(var7);
                    var5.label = var7;
                    var6 = function() {
                        var2 = _closure2_slot3;
                        var1 = _closure5_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var5.onPress = var6;
                    var6 = true;
                    var5.isDestructive = var6;
                    var4[1] = var5;
                    var1.options = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var5.onPress = var7;
            var9 = 23;
            var7 = var11[var9];
            var8 = var10.bind(var3)(var7);
            var7 = {};
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.Sizes;
            var9 = var9.SMALL_20;
            var7.size = var9;
            var9 = 24;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var7.source = var9;
            var9 = true;
            var7.disableColor = var9;
            var7 = var4.bind(var3)(var8, var7);
            var5.children = var7;
            var5 = var4.bind(var3)(var6, var5);
            var1.trailing = var5;
            var0 = var0.id;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var8 = var8.bind(var9)(var7);
        var7 = new Array(2);
        var7[0] = var8;
        var13 = 25;
        var8 = var16[var13];
        var8 = var15.bind(var3)(var8);
        var9 = var8.FormRow;
        var8 = {};
        var13 = var16[var13];
        var13 = var15.bind(var3)(var13);
        var13 = var13.FormRow;
        var14 = var13.Icon;
        var13 = {};
        var17 = 8;
        var17 = var16[var17];
        var17 = var18.bind(var3)(var17);
        var17 = var17.colors;
        var17 = var17.TEXT_LINK;
        var13.themedColor = var17;
        var17 = 23;
        var17 = var16[var17];
        var17 = var18.bind(var3)(var17);
        var17 = var17.Sizes;
        var17 = var17.SMALL_20;
        var13.size = var17;
        var17 = 26;
        var17 = var16[var17];
        var17 = var18.bind(var3)(var17);
        var13.source = var17;
        var13 = var2.bind(var3)(var14, var13);
        var8.leading = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.bPP34Q;
        var12 = var13.bind(var14)(var12);
        var8.label = var12;
        var11 = var11.addAccountLabel;
        var8.labelStyle = var11;
        var10 = function() {
            _fun100302: for (var _fun100302_ip = 0;;) switch (_fun100302_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.length;
                    var1 = _closure1_slot7;
                    if (!(!(var2 >= var1))) {
                        _fun100302_ip = 107;
                        continue _fun100302
                    }
                case 23:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot9;
                    var0 = var0.LOGIN;
                    var0 = var1.bind(var2)(var0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.track;
                    var0 = _closure1_slot8;
                    var1 = var0.LOGIN_VIEWED;
                    var0 = {};
                    var4 = 'choose_account_add_account';
                    var0.source = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    _fun100302_ip = 264;
                    continue _fun100302;
                case 107:
                    var1 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var0 = 13;
                    var0 = var9[var0];
                    var8 = undefined;
                    var2 = var1.bind(var8)(var0);
                    var1 = var2.show;
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = 14;
                    var5 = var9[var3];
                    var5 = var4.bind(var8)(var5);
                    var10 = var5.intl;
                    var6 = var10.string;
                    var5 = var9[var3];
                    var5 = var4.bind(var8)(var5);
                    var5 = var5.t;
                    var5 = var5.w7wfXi;
                    var5 = var6.bind(var10)(var5);
                    var0.title = var5;
                    var5 = var9[var3];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var9[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.t;
                    var4 = var3.WOyelG;
                    var3 = {};
                    var7 = _closure1_slot7;
                    var3.maxNumAccounts = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var0.body = var3;
                    var3 = true;
                    var0.isDismissable = var3;
                    var0 = var1.bind(var2)(var0);
                case 264:
                    var0 = undefined;
                    return var0;
            }
        };
        var8.onPress = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 10281, 10282, 660, 33, 1297, 671, 1469, 13057, 795, 10285, 3936, 1234, 4873, 3278, 7732, 7531, 3941, 10509, 13058, 4902, 4086, 8199, 5378, 13059, 2]);