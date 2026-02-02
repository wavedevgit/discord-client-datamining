// modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun92171: for (var _fun92171_ip = 0;;) switch (_fun92171_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.user;
                var2 = var0.trialCreationResult;
                var5 = var0.style;
                var0 = _closure1_slot8;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getName;
                var12 = var0.bind(var1)(var7);
                var0 = var7.username;
                var0 = var0 !== var12;
                if (!var0) {
                    _fun92171_ip = 111;
                    continue _fun92171
                }
            case 75:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CreateReferralStatus;
                var1 = var1.SUCCESS;
                var0 = var2 === var1;
            case 111:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CreateReferralStatus;
                var1 = var1.FAIL;
                var14 = var2 === var1;
                if (var0) {
                    _fun92171_ip = 270;
                    continue _fun92171
                }
            case 150:
                var9 = null;
                if (!var14) {
                    _fun92171_ip = 328;
                    continue _fun92171
                }
            case 158:
                var2 = _closure1_slot6;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 8;
                var0 = var15[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var4 = 9;
                var10 = var15[var4];
                var10 = var6.bind(var3)(var10);
                var13 = var10.intl;
                var10 = var13.format;
                var4 = var15[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.RO3T4B;
                var4 = {};
                var4.userName = var12;
                var4 = var10.bind(var13)(var6, var4);
                var0.children = var4;
                var9 = var2.bind(var3)(var1, var0);
                _fun92171_ip = 328;
                continue _fun92171;
            case 270:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/medium',
                    'color': 'text-subtle'
                };
                var4 = var7.username;
                var0.children = var4;
                var9 = var2.bind(var3)(var1, var0);
            case 328:
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var11.sharedUserInner;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 10;
                var4 = var13[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var10 = var11.avatarContainer;
                var4.style = var10;
                var10 = _closure1_slot0;
                var15 = 11;
                var15 = var13[var15];
                var15 = var10.bind(var3)(var15);
                var15 = var15.AvatarSizes;
                var15 = var15.LARGE;
                var4.size = var15;
                var4.user = var7;
                var4.guildId = var3;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot3;
                var5 = {};
                var11 = var11.usernameContainer;
                var5.style = var11;
                var11 = _closure1_slot6;
                var8 = 8;
                var8 = var13[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.Text;
                var8 = {};
                var13 = 'text-md/medium';
                var8.variant = var13;
                var13 = 'text-link';
                if (!var14) {
                    _fun92171_ip = 516;
                    continue _fun92171
                }
            case 510:
                var13 = 'text-muted';
            case 516:
                var8.color = var13;
                var8.children = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REFERRAL_TRIAL_OFFER_EXPIRATION_DAYS;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.content = var8;
    var8 = {};
    var11 = 148;
    var8.height = var11;
    var3.headerAsset = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginTop = var11;
    var11 = 'center';
    var8.alignSelf = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.paddingHorizontal = var12;
    var3.header = var8;
    var8 = {};
    var8.textAlign = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingHorizontal = var11;
    var3.subheader = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.padding = var11;
    var3.sharedUserInner = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.marginHorizontal = var11;
    var3.sharedUsersContainer = var8;
    var8 = {
        'alignSelf': 'center',
        'justifyContent': 'center'
    };
    var3.avatarContainer = var8;
    var8 = {
        'flex': 1,
        'alignSelf': 'center',
        'justifyContent': 'center'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginStart = var9;
    var3.usernameContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/referral_program/native/ReferralProgramShareConfirmationActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92172: for (var _fun92172_ip = 0;;) switch (_fun92172_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.selectedUsers;
                var4 = var0.trialCreationResult;
                var _closure2_slot0 = var4;
                var0 = _closure1_slot8;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var10 = var0.bottom;
                var12 = global;
                var2 = var12.Array;
                var1 = var2.from;
                var0 = var4.values;
                var0 = var0.bind(var4)();
                var2 = var1.bind(var2)(var0);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var11
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.CreateReferralStatus;
                    var1 = var0.SUCCESS;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var5 = var0.length;
                var0 = 0;
                if (!(var0 !== var5)) {
                    _fun92172_ip = 185;
                    continue _fun92172
                }
            case 118:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var2 = var6[var0];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.format;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.iWtOfC;
                var0 = {};
                var0.numReferrals = var5;
                var16 = var2.bind(var4)(var1, var0);
                _fun92172_ip = 242;
                continue _fun92172;
            case 185:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var1 = var5[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["7VBEue"];
                var16 = var1.bind(var2)(var0);
            case 242:
                var18 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var0 = var18.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var0 = 14;
                var0 = var9[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var17 = var0.bind(var1)(var2);
                var2 = _closure1_slot6;
                var0 = 15;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var4 = var13.content;
                var0.contentStyles = var4;
                var7 = _closure1_slot6;
                var4 = 16;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var6 = var4.BottomSheetTitleHeader;
                var4 = {};
                var15 = null;
                var4.title = var15;
                var20 = _closure1_slot6;
                var15 = 17;
                var15 = var9[var15];
                var15 = var5.bind(var3)(var15);
                var19 = var15.ActionSheetCloseButton;
                var15 = {};
                var21 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var15.onPress = var21;
                var15 = var20.bind(var3)(var19, var15);
                var4.leading = var15;
                var4 = var7.bind(var3)(var6, var4);
                var0.header = var4;
                var6 = _closure1_slot7;
                var4 = 19;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = {};
                var7.paddingBottom = var10;
                var4.style = var7;
                var10 = _closure1_slot6;
                var7 = 20;
                var7 = var9[var7];
                var9 = var18.bind(var3)(var7);
                var7 = {};
                var15 = var13.headerAsset;
                var7.style = var15;
                var15 = 'contain';
                var7.resizeMode = var15;
                var15 = {};
                var20 = _closure1_slot2;
                if (var17) {
                    _fun92172_ip = 514;
                    continue _fun92172
                }
            case 505:
                var17 = 22;
                var17 = var20[var17];
                _fun92172_ip = 521;
                continue _fun92172;
            case 514:
                var19 = 21;
                var17 = var20[var19];
            case 521:
                var17 = var18.bind(var3)(var17);
                var15.uri = var17;
                var7.source = var15;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(5);
                var7[0] = var9;
                var15 = _closure1_slot6;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 8;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var13.header;
                var9.style = var19;
                var9.children = var16;
                var9 = var15.bind(var3)(var10, var9);
                var7[1] = var9;
                var15 = _closure1_slot6;
                var9 = 23;
                var9 = var18[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.TextWithIOSLinkWorkaround;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var16 = var13.subheader;
                var9.style = var16;
                var16 = 9;
                var19 = var18[var16];
                var19 = var17.bind(var3)(var19);
                var21 = var19.intl;
                var20 = var21.format;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var19 = var16.CZaMHn;
                var16 = {};
                var17 = _closure1_slot4;
                var16.days = var17;
                var17 = _closure1_slot1;
                var22 = 24;
                var22 = var18[var22];
                var24 = var17.bind(var3)(var22);
                var23 = var24.getArticleURL;
                var22 = _closure1_slot5;
                var22 = var22.REFERRAL_PROGRAM;
                var22 = var23.bind(var24)(var22);
                var16.helpdeskArticle = var22;
                var16 = var20.bind(var21)(var19, var16);
                var9.children = var16;
                var9 = var15.bind(var3)(var10, var9);
                var7[2] = var9;
                var15 = _closure1_slot6;
                var9 = 25;
                var9 = var18[var9];
                var10 = var17.bind(var3)(var9);
                var9 = {};
                var16 = 5;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.spacing;
                var16 = var16.PX_32;
                var9.size = var16;
                var9 = var15.bind(var3)(var10, var9);
                var7[3] = var9;
                var10 = _closure1_slot6;
                var9 = _closure1_slot3;
                var8 = {};
                var13 = var13.sharedUsersContainer;
                var8.style = var13;
                var13 = var12.Array;
                var12 = var13.from;
                var13 = var12.bind(var13)(var14);
                var12 = var13.map;
                var11 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2.user = var0;
                    var6 = _closure2_slot0;
                    var5 = var6.get;
                    var1 = var0.id;
                    var1 = var5.bind(var6)(var1);
                    var2.trialCreationResult = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[4] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 11954, 660, 33, 1297, 671, 3197, 6607, 3902, 1234, 5416, 5418, 1568, 3207, 3167, 4896, 5176, 5174, 3239, 4041, 4669, 11955, 11956, 5296, 1675, 9228, 2]);