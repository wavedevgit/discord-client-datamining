// modules/user_settings/native/account/SettingsAccountScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: PasswordlessUpsell, environment: var3
        var0 = _closure1_slot15;
        var3 = undefined;
        var16 = var0.bind(var3)();
        var28 = _closure1_slot0;
        var29 = _closure1_slot2;
        var0 = 11;
        var0 = var29[var0];
        var1 = var28.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var16.upsellPasswordless;
        var0.style = var4;
        var6 = _closure1_slot11;
        var4 = 12;
        var4 = var29[var4];
        var4 = var28.bind(var3)(var4);
        var5 = var4.Card;
        var4 = {
            'border': 'none',
            'shadow': 'none'
        };
        var9 = _closure1_slot12;
        var8 = _closure1_slot5;
        var7 = {};
        var22 = 'row';
        var10 = {
            'flexDirection': 'row',
            'gap': 8
        };
        var7.style = var10;
        var12 = _closure1_slot11;
        var11 = _closure1_slot5;
        var10 = {};
        var13 = {
            'width': 70,
            'height': 70
        };
        var10.style = var13;
        var15 = _closure1_slot11;
        var14 = _closure1_slot1;
        var13 = 13;
        var13 = var29[var13];
        var14 = var14.bind(var3)(var13);
        var13 = {};
        var17 = 14;
        var17 = var29[var17];
        var17 = var28.bind(var3)(var17);
        var13.source = var17;
        var17 = 'contain';
        var13.resizeMode = var17;
        var16 = var16.upsellImagePasswordless;
        var13.style = var16;
        var13 = var15.bind(var3)(var14, var13);
        var10.children = var13;
        var11 = var12.bind(var3)(var11, var10);
        var10 = new Array(2);
        var10[0] = var11;
        var13 = _closure1_slot11;
        var12 = _closure1_slot5;
        var11 = {};
        var15 = _closure1_slot12;
        var14 = {};
        var16 = {
            'width': '90%',
            'gap': 8
        };
        var14.style = var16;
        var19 = _closure1_slot11;
        var17 = 15;
        var16 = var29[var17];
        var16 = var28.bind(var3)(var16);
        var18 = var16.Text;
        var16 = {
            'variant': 'heading-lg/medium',
            'color': 'mobile-text-heading-primary'
        };
        var25 = 16;
        var20 = var29[var25];
        var20 = var28.bind(var3)(var20);
        var26 = var20.intl;
        var23 = var26.string;
        var20 = var29[var25];
        var20 = var28.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20["+Svv46"];
        var20 = var23.bind(var26)(var20);
        var16.children = var20;
        var18 = var19.bind(var3)(var18, var16);
        var16 = new Array(3);
        var16[0] = var18;
        var19 = _closure1_slot11;
        var17 = var29[var17];
        var17 = var28.bind(var3)(var17);
        var18 = var17.Text;
        var17 = {
            'variant': 'text-md/normal',
            'color': 'text-muted'
        };
        var20 = var29[var25];
        var20 = var28.bind(var3)(var20);
        var26 = var20.intl;
        var23 = var26.string;
        var20 = var29[var25];
        var20 = var28.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20.S0g2K9;
        var20 = var23.bind(var26)(var20);
        var17.children = var20;
        var17 = var19.bind(var3)(var18, var17);
        var16[1] = var17;
        var19 = _closure1_slot12;
        var18 = _closure1_slot5;
        var17 = {};
        var20 = {};
        var20.flexDirection = var22;
        var17.style = var20;
        var23 = _closure1_slot11;
        var20 = 17;
        var20 = var29[var20];
        var20 = var28.bind(var3)(var20);
        var22 = var20.Button;
        var20 = {};
        var26 = var29[var25];
        var26 = var28.bind(var3)(var26);
        var27 = var26.intl;
        var26 = var27.string;
        var25 = var29[var25];
        var25 = var28.bind(var3)(var25);
        var25 = var25.t;
        var25 = var25.piGf5c;
        var25 = var26.bind(var27)(var25);
        var20.text = var25;
        var24 = function() { // Original name: onPress, environment: var24
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 18;
            var2 = var1[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.pushLazy;
            var6 = _closure1_slot0;
            var2 = 20;
            var2 = var1[var2];
            var6 = var6.bind(var0)(var2);
            var2 = 19;
            var2 = var1[var2];
            var1 = var1.paths;
            var2 = var6.bind(var0)(var2, var1);
            var1 = {};
            var6 = _closure2_slot0;
            var1.navigation = var6;
            var5 = _closure1_slot10;
            var5 = var5.REGISTER;
            var1.initialRouteName = var5;
            var5 = true;
            var1.showNav = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var20.onPress = var24;
        var24 = 'sm';
        var20.size = var24;
        var22 = var23.bind(var3)(var22, var20);
        var20 = new Array(2);
        var20[0] = var22;
        var23 = _closure1_slot11;
        var22 = _closure1_slot5;
        var21 = {};
        var21 = var23.bind(var3)(var22, var21);
        var20[1] = var21;
        var17.children = var20;
        var17 = var19.bind(var3)(var18, var17);
        var16[2] = var17;
        var14.children = var16;
        var14 = var15.bind(var3)(var12, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var10[1] = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: AccountTwoFALabel, environment: var3
        _fun79577: for (var _fun79577_ip = 0;;) switch (_fun79577_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 21;
                var1 = var4[var1];
                var3 = undefined;
                var8 = var2.bind(var3)(var1);
                var7 = var8.useStateFromStoresObject;
                var1 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var2 = var0.hasCredentials;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure1_slot6;
                    var1 = var2.hasFetchedCredentials;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var7 = var7.bind(var8)(var6, var1);
                var6 = _closure1_slot3;
                var1 = 2;
                var6 = var6.bind(var3)(var7, var1);
                var1 = 0;
                var8 = var6[var1];
                var _closure2_slot0 = var8;
                var1 = 1;
                var7 = var6[var1];
                var _closure2_slot1 = var7;
                var1 = 22;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsUserVerified;
                var1 = var1.bind(var2)();
                var _closure2_slot2 = var1;
                var6 = _closure1_slot4;
                var4 = var6.useMemo;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var8;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun79579: for (var _fun79579_ip = 0;;) switch (_fun79579_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun79579_ip = 14;
                                continue _fun79579
                            }
                        case 10:
                            var0 = _closure2_slot1;
                        case 14:
                            if (!var0) {
                                _fun79579_ip = 24;
                                continue _fun79579
                            }
                        case 17:
                            var1 = _closure2_slot0;
                            var0 = !var1;
                        case 24:
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var1, var2);
                var6 = _closure1_slot4;
                var2 = var6.useEffect;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    _fun79580: for (var _fun79580_ip = 0;;) switch (_fun79580_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun79580_ip = 45;
                                continue _fun79580
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchWebAuthnCredentials;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot13;
                var0 = {};
                var6 = var4;
                if (!var6) {
                    _fun79577_ip = 218;
                    continue _fun79577
                }
            case 202:
                var8 = _closure1_slot11;
                var7 = _closure1_slot16;
                var4 = {};
                var6 = var8.bind(var3)(var7, var4);
            case 218:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot11;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 24;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.TableRowGroupTitle;
                var5 = {};
                var8 = 16;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.fuTmEJ;
                var8 = var9.bind(var10)(var8);
                var5.title = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: AccountSecurityPage, environment: var3
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = function() { // Environment: var1
            var11 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 25;
            var0 = var6[var0];
            var5 = undefined;
            var2 = var11.bind(var5)(var0);
            var1 = var2.createList;
            var0 = {};
            var4 = {};
            var7 = 16;
            var8 = var6[var7];
            var8 = var11.bind(var5)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = var6[var7];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.e262Nn;
            var8 = var9.bind(var10)(var8);
            var4.label = var8;
            var8 = _closure1_slot8;
            var9 = var8.ACCOUNT_USERNAME;
            var8 = new Array(6);
            var8[0] = var9;
            var9 = _closure1_slot8;
            var9 = var9.ACCOUNT_DISPLAY_NAME;
            var8[1] = var9;
            var9 = _closure1_slot8;
            var9 = var9.ACCOUNT_EMAIL;
            var8[2] = var9;
            var9 = _closure1_slot8;
            var9 = var9.ACCOUNT_PHONE;
            var8[3] = var9;
            var9 = _closure1_slot8;
            var9 = var9.ACCOUNT_AGE_GROUP_ADULT;
            var8[4] = var9;
            var9 = _closure1_slot8;
            var9 = var9.ACCOUNT_AGE_GROUP_NON_ADULT;
            var8[5] = var9;
            var4.settings = var8;
            var8 = new Array(3);
            var8[0] = var4;
            var4 = {};
            var12 = _closure1_slot11;
            var10 = _closure1_slot17;
            var9 = {};
            var9 = var12.bind(var5)(var10, var9);
            var4.label = var9;
            var9 = _closure1_slot8;
            var10 = var9.ACCOUNT_CHANGE_PASSWORD;
            var9 = new Array(6);
            var9[0] = var10;
            var10 = _closure1_slot8;
            var10 = var10.ACCOUNT_WEB_AUTHN_VIEW;
            var9[1] = var10;
            var10 = _closure1_slot8;
            var10 = var10.ACCOUNT_ENABLE_2FA;
            var9[2] = var10;
            var10 = _closure1_slot8;
            var10 = var10.ACCOUNT_VIEW_BACKUP_CODES;
            var9[3] = var10;
            var10 = _closure1_slot8;
            var10 = var10.ACCOUNT_REMOVE_2FA;
            var9[4] = var10;
            var10 = _closure1_slot8;
            var10 = var10.ACCOUNT_SMS_BACKUP;
            var9[5] = var10;
            var4.settings = var9;
            var8[1] = var4;
            var4 = {};
            var9 = var6[var7];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var6[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7["5V0AkP"];
            var7 = var9.bind(var10)(var7);
            var4.label = var7;
            var7 = _closure1_slot8;
            var9 = var7.ACCOUNT_DISABLE;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = _closure1_slot8;
            var9 = var9.ACCOUNT_DELETE;
            var7[1] = var9;
            var4.settings = var7;
            var8[2] = var4;
            var7 = var8.filter;
            var4 = global;
            var4 = var4.Boolean;
            var4 = var7.bind(var8)(var4);
            var0.sections = var4;
            var4 = _closure1_slot1;
            var3 = 26;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var0.ListHeaderComponent = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = new Array(0);
        var4 = var3.bind(var4)(var2, var1);
        var3 = _closure1_slot11;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 27;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.node = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() { // Original name: AccountStandingPage, environment: var3
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 28;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.default;
        var1 = _closure1_slot11;
        var0 = {};
        var4 = true;
        var0.visible = var4;
        var0 = var1.bind(var3)(var2, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var13 = 1;
    var4 = var6[var13];
    var1 = arg3;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.MobileSetting;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.WebAuthnScreens;
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot11 = var4;
    var4 = var1.jsxs;
    var _closure1_slot12 = var4;
    var1 = var1.Fragment;
    var _closure1_slot13 = var1;
    var1 = {};
    var4 = 'SECURITY';
    var1.SECURITY = var4;
    var4 = 'STANDING';
    var1.STANDING = var4;
    var _closure1_slot14 = var1;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'marginBottom': 16,
        'borderColor': null,
        'borderWidth': 1
    };
    var11 = 10;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_INPUT_CONTROL_SELECTED;
    var10.borderColor = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10.borderRadius = var14;
    var4.upsellPasswordless = var10;
    var10 = {
        'height': '100%',
        'width': '100%'
    };
    var4.upsellImagePasswordless = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10.paddingHorizontal = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10.paddingTop = var14;
    var4.controlContainer = var10;
    var10 = {};
    var10.flex = var13;
    var4.pageContainer = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var10.paddingTop = var11;
    var4.standingPage = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var3 = function() { // Environment: var3
        _fun79584: for (var _fun79584_ip = 0;;) switch (_fun79584_ip) {
            case 0:
                var0 = _closure1_slot15;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var5 = 0;
                var2 = var0.bind(var1)(var5);
                var1 = _closure1_slot3;
                var0 = 2;
                var0 = var1.bind(var3)(var2, var0);
                var12 = var0[var5];
                var6 = 1;
                var0 = var0[var6];
                var _closure2_slot0 = var0;
                var7 = _closure1_slot4;
                var2 = var7.useCallback;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = new Array(0);
                var7 = var2.bind(var7)(var1, var0);
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = 21;
                var0 = var19[var0];
                var9 = var18.bind(var3)(var0);
                var2 = var9.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    var1 = _closure1_slot7;
                    var0 = var1.getSubsection;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var2.bind(var9)(var1, var0);
                var0 = 29;
                var0 = var19[var0];
                var2 = var18.bind(var3)(var0);
                var1 = var2.useSegmentedControlState;
                var0 = {};
                var14 = {};
                var15 = 16;
                var9 = var19[var15];
                var9 = var18.bind(var3)(var9);
                var16 = var9.intl;
                var13 = var16.string;
                var9 = var19[var15];
                var9 = var18.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.Am9YHi;
                var9 = var13.bind(var16)(var9);
                var14.label = var9;
                var9 = _closure1_slot14;
                var13 = var9.SECURITY;
                var14.id = var13;
                var17 = _closure1_slot11;
                var16 = _closure1_slot18;
                var13 = {};
                var13 = var17.bind(var3)(var16, var13);
                var14.page = var13;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = {};
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["00Sfl/"];
                var15 = var16.bind(var17)(var15);
                var14.label = var15;
                var15 = var9.STANDING;
                var14.id = var15;
                var17 = _closure1_slot11;
                var16 = _closure1_slot5;
                var15 = {};
                var18 = var10.standingPage;
                var15.style = var18;
                var20 = _closure1_slot11;
                var19 = _closure1_slot19;
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14.page = var15;
                var13[1] = var14;
                var0.items = var13;
                var0.pageWidth = var12;
                var9 = var9.STANDING;
                if (!(var11 === var9)) {
                    _fun79584_ip = 390;
                    continue _fun79584
                }
            case 387:
                var5 = var6;
            case 390:
                var0.defaultIndex = var5;
                var4 = function(arg0) { // Original name: onSetActiveIndex, environment: var4
                    _fun79587: for (var _fun79587_ip = 0;;) switch (_fun79587_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 30;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot9;
                            var2 = var1.MY_ACCOUNT_PAGE_TAB_NAVIGATE;
                            var1 = {};
                            var7 = 0;
                            var5 = arg0;
                            if (!(var7 !== var5)) {
                                _fun79587_ip = 63;
                                continue _fun79587
                            }
                        case 51:
                            var5 = _closure1_slot14;
                            var5 = var5.STANDING;
                            _fun79587_ip = 73;
                            continue _fun79587;
                        case 63:
                            var6 = _closure1_slot14;
                            var5 = var6.SECURITY;
                        case 73:
                            var1.target_tab_name = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.onSetActiveIndex = var4;
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot13;
                var0 = {};
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                var4 = {};
                var9 = var10.controlContainer;
                var4.style = var9;
                var4.onLayout = var7;
                var14 = _closure1_slot11;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 31;
                var7 = var12[var7];
                var7 = var9.bind(var3)(var7);
                var13 = var7.SegmentedControl;
                var7 = {};
                var7.state = var11;
                var7 = var14.bind(var3)(var13, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var10 = var10.pageContainer;
                var5.style = var10;
                var10 = _closure1_slot11;
                var8 = 32;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SegmentedControlPages;
                var8 = {};
                var8.state = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/account/SettingsAccountScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.AccountSettingsTabs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7456, 5885, 6967, 660, 7453, 33, 1297, 671, 1469, 4863, 4667, 7469, 3900, 1234, 4043, 4525, 10085, 1307, 566, 10086, 4529, 5325, 8943, 10087, 10090, 11478, 7757, 795, 8149, 7765, 2]);