// uikit-native/modals/CreateGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MarketingURLs;
    var _closure1_slot5 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {
        'backgroundColor': null,
        'paddingHorizontal': 16,
        'paddingBottom': 16
    };
    var10 = 6;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.contentContainer = var8;
    var9 = 8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.header = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'marginBottom': 32
    };
    var3.description = var8;
    var8 = {
        'alignSelf': 'center',
        'marginBottom': 12
    };
    var3.iconUploader = var8;
    var8 = {
        'width': '100%',
        'marginTop': 8
    };
    var3.createButton = var8;
    var8 = {};
    var8.marginTop = var12;
    var3.error = var8;
    var8 = {
        'backgroundColor': null,
        'borderWidth': 1,
        'borderColor': null,
        'borderStyle': 'solid',
        'borderRadius': null,
        'marginBottom': 8,
        'paddingHorizontal': 8,
        'paddingVertical': 8
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.borderColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var3.hubInput = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 8
    };
    var3.hubLabel = var8;
    var8 = {
        'fontSize': 12,
        'color': null,
        'marginBottom': 16
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var8.color = var10;
    var3.hubHint = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 16
    };
    var3.staffOnly = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.hint = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/CreateGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71462: for (var _fun71462_ip = 0;;) switch (_fun71462_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guild;
                var24 = var0.onIconPress;
                var22 = var0.onNameChange;
                var18 = var0.onStaffOnlyChange;
                var14 = var0.onCreate;
                var13 = var0.submitting;
                var10 = var0.error;
                var17 = var0.customTitle;
                var20 = var0.customDescription;
                var15 = var0.customButtonLabel;
                var21 = var0.autoFocus;
                var3 = undefined;
                if (!(var21 === var3)) {
                    _fun71462_ip = 85;
                    continue _fun71462
                }
            case 83:
                var21 = true;
            case 85:
                var0 = _closure1_slot8;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var9 = null;
                var7 = var9 == var1;
                if (var7) {
                    _fun71462_ip = 131;
                    continue _fun71462
                }
            case 118:
                var0 = var1.isStaff;
                var0 = var0.bind(var1)();
                var7 = !var0;
            case 131:
                var5 = !var7;
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {
                    'style': null,
                    'contentInset': null,
                    'automaticallyAdjustContentInsets': false,
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var4 = var11.flex;
                var0.style = var4;
                var4 = {};
                var12 = 0;
                var4.top = var12;
                var0.contentInset = var4;
                var19 = false;
                var4 = var11.contentContainer;
                var0.contentContainerStyle = var4;
                var16 = _closure1_slot6;
                var12 = _closure1_slot0;
                var4 = _closure1_slot2;
                var23 = 7;
                var4 = var4[var23];
                var4 = var12.bind(var3)(var4);
                var12 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = var11.header;
                var4.style = var25;
                if (!(var9 == var17)) {
                    _fun71462_ip = 309;
                    continue _fun71462
                }
            case 252:
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var25 = 8;
                var26 = var29[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.XioBx6;
                var17 = var26.bind(var27)(var25);
            case 309:
                var4.children = var17;
                var12 = var16.bind(var3)(var12, var4);
                var4 = new Array(8);
                var4[0] = var12;
                var17 = _closure1_slot6;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var23];
                var12 = var16.bind(var3)(var12);
                var16 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var23 = var11.description;
                var12.style = var23;
                if (!(var9 == var20)) {
                    _fun71462_ip = 437;
                    continue _fun71462
                }
            case 382:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 8;
                var25 = var28[var23];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var23 = var28[var23];
                var23 = var27.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["/k/L/j"];
                var20 = var25.bind(var26)(var23);
            case 437:
                var12.children = var20;
                var12 = var17.bind(var3)(var16, var12);
                var4[1] = var12;
                var17 = _closure1_slot6;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var12 = 9;
                var12 = var23[var12];
                var20 = var16.bind(var3)(var12);
                var12 = {};
                var25 = var11.contentContainer;
                var25 = var25.backgroundColor;
                var12.iconBackgroundColor = var25;
                var25 = var11.iconUploader;
                var12.style = var25;
                var12.onPress = var24;
                var24 = var8.icon;
                var12.icon = var24;
                var12 = var17.bind(var3)(var20, var12);
                var4[2] = var12;
                var12 = 10;
                var12 = var23[var12];
                var16 = var16.bind(var3)(var12);
                var12 = {};
                var26 = _closure1_slot0;
                var20 = 8;
                var24 = var23[var20];
                var24 = var26.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var20];
                var23 = var26.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.dBih7e;
                var23 = var24.bind(var25)(var23);
                var12.label = var23;
                var24 = var9 == var10;
                var23 = undefined;
                if (var24) {
                    _fun71462_ip = 619;
                    continue _fun71462
                }
            case 604:
                var25 = var10.getFirstFieldErrorMessage;
                var24 = 'name';
                var23 = var25.bind(var10)(var24);
            case 619:
                var12.error = var23;
                var23 = var8.name;
                var12.value = var23;
                var12.onChangeText = var22;
                var12.autoFocus = var21;
                var12.autoCorrect = var19;
                var19 = 'done';
                var12.returnKeyType = var19;
                var12 = var17.bind(var3)(var16, var12);
                var4[3] = var12;
                if (var7) {
                    _fun71462_ip = 803;
                    continue _fun71462
                }
            case 672:
                var16 = _closure1_slot6;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 11;
                var7 = var17[var7];
                var7 = var21.bind(var3)(var7);
                var12 = var7.FormSwitchRow;
                var7 = {
                    'onValueChange': null,
                    'value': null,
                    'start': true,
                    'end': true,
                    'style': null,
                    'label': 'Staff Only'
                };
                var7.onValueChange = var18;
                var18 = var8.staffOnly;
                var7.value = var18;
                var18 = var11.staffOnly;
                var7.style = var18;
                var18 = var17[var20];
                var18 = var21.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var20];
                var17 = var21.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.edQ5va;
                var17 = var18.bind(var19)(var17);
                var7.subLabel = var17;
                var5 = var16.bind(var3)(var12, var7);
            case 803:
                var4[4] = var5;
                var12 = _closure1_slot6;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 12;
                var5 = var18[var5];
                var5 = var17.bind(var3)(var5);
                var7 = var5.TextWithIOSLinkWorkaround;
                var5 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var16 = var11.hint;
                var5.style = var16;
                var16 = var18[var20];
                var16 = var17.bind(var3)(var16);
                var21 = var16.intl;
                var19 = var21.format;
                var16 = var18[var20];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16["2bprXx"];
                var16 = {};
                var22 = _closure1_slot5;
                var22 = var22.GUIDELINES;
                var16.guidelinesURL = var22;
                var16 = var19.bind(var21)(var17, var16);
                var5.children = var16;
                var5 = var12.bind(var3)(var7, var5);
                var4[5] = var5;
                var17 = _closure1_slot1;
                var16 = 13;
                var5 = var18[var16];
                var7 = var17.bind(var3)(var5);
                var5 = {};
                var19 = var8.name;
                var8 = '';
                var19 = var8 === var19;
                var5.disabled = var19;
                var19 = true;
                var5.shrink = var19;
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.Sizes;
                var16 = var16.MEDIUM;
                var5.size = var16;
                var16 = var11.createButton;
                var5.style = var16;
                if (!(var9 == var15)) {
                    _fun71462_ip = 1072;
                    continue _fun71462
                }
            case 1020:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var20];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["O0p/lS"];
                var15 = var17.bind(var18)(var16);
            case 1072:
                var5.text = var15;
                var5.onPress = var14;
                var5.loading = var13;
                var5 = var12.bind(var3)(var7, var5);
                var4[6] = var5;
                var7 = var9 == var10;
                var5 = undefined;
                if (var7) {
                    _fun71462_ip = 1119;
                    continue _fun71462
                }
            case 1104:
                var12 = var10.getFirstFieldErrorMessage;
                var7 = 'name';
                var5 = var12.bind(var10)(var7);
            case 1119:
                var7 = var9 == var5;
                var5 = null;
                if (!var7) {
                    _fun71462_ip = 1230;
                    continue _fun71462
                }
            case 1128:
                var12 = var9 == var10;
                var7 = undefined;
                if (var12) {
                    _fun71462_ip = 1142;
                    continue _fun71462
                }
            case 1137:
                var7 = var10.message;
            case 1142:
                var7 = var9 != var7;
                var5 = null;
                if (!var7) {
                    _fun71462_ip = 1230;
                    continue _fun71462
                }
            case 1151:
                var12 = var9 == var10;
                var7 = undefined;
                if (var12) {
                    _fun71462_ip = 1165;
                    continue _fun71462
                }
            case 1160:
                var7 = var10.message;
            case 1165:
                var5 = null;
                if (!(var8 !== var7)) {
                    _fun71462_ip = 1230;
                    continue _fun71462
                }
            case 1171:
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 14;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var11 = var11.error;
                var6.style = var11;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun71462_ip = 1220;
                    continue _fun71462
                }
            case 1215:
                var9 = var10.message;
            case 1220:
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1230:
                var4[7] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 660, 33, 1297, 671, 3900, 1234, 8911, 5844, 5340, 5294, 4836, 5848, 2]);