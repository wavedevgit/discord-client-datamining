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
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MarketingURLs;
    var _closure1_slot6 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
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
    var9 = 6;
    var9 = var5[var9];
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
    var8.marginTop = var10;
    var3.error = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 16
    };
    var3.staffOnly = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.hint = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/CreateGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71977: for (var _fun71977_ip = 0;;) switch (_fun71977_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.guild;
                var25 = var1.onIconPress;
                var23 = var1.onNameChange;
                var18 = var1.onStaffOnlyChange;
                var14 = var1.onCreate;
                var13 = var1.submitting;
                var10 = var1.error;
                var17 = var1.customTitle;
                var20 = var1.customDescription;
                var15 = var1.customButtonLabel;
                var21 = var1.autoFocus;
                var3 = undefined;
                if (!(var21 === var3)) {
                    _fun71977_ip = 87;
                    continue _fun71977
                }
            case 85:
                var21 = true;
            case 87:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot9;
                var11 = var1.bind(var3)();
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var9 = null;
                var7 = var9 == var2;
                if (var7) {
                    _fun71977_ip = 141;
                    continue _fun71977
                }
            case 128:
                var1 = var2.isStaff;
                var1 = var1.bind(var2)();
                var7 = !var1;
            case 141:
                var5 = !var7;
                var12 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var12.bind(var3)(var1);
                var1 = var2.useIsScreenReaderEnabled;
                var22 = var1.bind(var2)();
                _closure2_slot0 = var22;
                var16 = _closure1_slot3;
                var1 = var16.useRef;
                var26 = var1.bind(var16)(var9);
                _closure2_slot1 = var26;
                var2 = var16.useEffect;
                var1 = new Array(1);
                var1[0] = var22;
                var0 = function() { // Environment: var0
                    _fun71978: for (var _fun71978_ip = 0;;) switch (_fun71978_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun71978_ip = 25;
                                continue _fun71978
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            var0 = var1 != var2;
                        case 25:
                            if (!var0) {
                                _fun71978_ip = 82;
                                continue _fun71978
                            }
                        case 28:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.setAccessibilityFocus;
                            var0 = {};
                            var3 = _closure2_slot1;
                            var0.ref = var3;
                            var3 = 100;
                            var0.delay = var3;
                            var0 = var1.bind(var2)(var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var16)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {
                    'style': null,
                    'contentInset': null,
                    'automaticallyAdjustContentInsets': false,
                    'keyboardShouldPersistTaps': 'handled',
                    'alwaysBounceVertical': false
                };
                var16 = var11.flex;
                var0.style = var16;
                var16 = {};
                var19 = 0;
                var16.top = var19;
                var0.contentInset = var16;
                var19 = false;
                var16 = var11.contentContainer;
                var0.contentContainerStyle = var16;
                var16 = _closure1_slot7;
                var24 = 9;
                var4 = var4[var24];
                var4 = var12.bind(var3)(var4);
                var12 = var4.Text;
                var4 = {
                    'ref': null,
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var4.ref = var26;
                var26 = var11.header;
                var4.style = var26;
                if (!(var9 == var17)) {
                    _fun71977_ip = 395;
                    continue _fun71977
                }
            case 338:
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 10;
                var27 = var30[var26];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var30[var26];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.XioBx6;
                var17 = var27.bind(var28)(var26);
            case 395:
                var4.children = var17;
                var12 = var16.bind(var3)(var12, var4);
                var4 = new Array(8);
                var4[0] = var12;
                var17 = _closure1_slot7;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var24];
                var12 = var16.bind(var3)(var12);
                var16 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var24 = var11.description;
                var12.style = var24;
                if (!(var9 == var20)) {
                    _fun71977_ip = 523;
                    continue _fun71977
                }
            case 468:
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var24 = 10;
                var26 = var29[var24];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var24 = var29[var24];
                var24 = var28.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["/k/L/j"];
                var20 = var26.bind(var27)(var24);
            case 523:
                var12.children = var20;
                var12 = var17.bind(var3)(var16, var12);
                var4[1] = var12;
                var17 = _closure1_slot7;
                var16 = _closure1_slot1;
                var24 = _closure1_slot2;
                var12 = 11;
                var12 = var24[var12];
                var20 = var16.bind(var3)(var12);
                var12 = {};
                var26 = var11.contentContainer;
                var26 = var26.backgroundColor;
                var12.iconBackgroundColor = var26;
                var26 = var11.iconUploader;
                var12.style = var26;
                var12.onPress = var25;
                var25 = var8.icon;
                var12.icon = var25;
                var12 = var17.bind(var3)(var20, var12);
                var4[2] = var12;
                var12 = 12;
                var12 = var24[var12];
                var16 = var16.bind(var3)(var12);
                var12 = {};
                var27 = _closure1_slot0;
                var20 = 10;
                var25 = var24[var20];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var20];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.dBih7e;
                var24 = var25.bind(var26)(var24);
                var12.label = var24;
                var25 = var9 == var10;
                var24 = undefined;
                if (var25) {
                    _fun71977_ip = 705;
                    continue _fun71977
                }
            case 690:
                var26 = var10.getFirstFieldErrorMessage;
                var25 = 'name';
                var24 = var26.bind(var10)(var25);
            case 705:
                var12.error = var24;
                var24 = var8.name;
                var12.value = var24;
                var12.onChangeText = var23;
                if (!var21) {
                    _fun71977_ip = 729;
                    continue _fun71977
                }
            case 726:
                var21 = !var22;
            case 729:
                var12.autoFocus = var21;
                var12.autoCorrect = var19;
                var19 = 'done';
                var12.returnKeyType = var19;
                var12 = var17.bind(var3)(var16, var12);
                var4[3] = var12;
                if (var7) {
                    _fun71977_ip = 895;
                    continue _fun71977
                }
            case 764:
                var16 = _closure1_slot7;
                var21 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 13;
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
            case 895:
                var4[4] = var5;
                var12 = _closure1_slot7;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 14;
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
                var22 = _closure1_slot6;
                var22 = var22.GUIDELINES;
                var16.guidelinesURL = var22;
                var16 = var19.bind(var21)(var17, var16);
                var5.children = var16;
                var5 = var12.bind(var3)(var7, var5);
                var4[5] = var5;
                var17 = _closure1_slot1;
                var16 = 15;
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
                    _fun71977_ip = 1164;
                    continue _fun71977
                }
            case 1112:
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
            case 1164:
                var5.text = var15;
                var5.onPress = var14;
                var5.loading = var13;
                var5 = var12.bind(var3)(var7, var5);
                var4[6] = var5;
                var7 = var9 == var10;
                var5 = undefined;
                if (var7) {
                    _fun71977_ip = 1211;
                    continue _fun71977
                }
            case 1196:
                var12 = var10.getFirstFieldErrorMessage;
                var7 = 'name';
                var5 = var12.bind(var10)(var7);
            case 1211:
                var7 = var9 == var5;
                var5 = null;
                if (!var7) {
                    _fun71977_ip = 1322;
                    continue _fun71977
                }
            case 1220:
                var12 = var9 == var10;
                var7 = undefined;
                if (var12) {
                    _fun71977_ip = 1234;
                    continue _fun71977
                }
            case 1229:
                var7 = var10.message;
            case 1234:
                var7 = var9 != var7;
                var5 = null;
                if (!var7) {
                    _fun71977_ip = 1322;
                    continue _fun71977
                }
            case 1243:
                var12 = var9 == var10;
                var7 = undefined;
                if (var12) {
                    _fun71977_ip = 1257;
                    continue _fun71977
                }
            case 1252:
                var7 = var10.message;
            case 1257:
                var5 = null;
                if (!(var8 !== var7)) {
                    _fun71977_ip = 1322;
                    continue _fun71977
                }
            case 1263:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 16;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var11 = var11.error;
                var6.style = var11;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun71977_ip = 1312;
                    continue _fun71977
                }
            case 1307:
                var9 = var10.message;
            case 1312:
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1322:
                var4[7] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 660, 33, 1297, 671, 4078, 4894, 3940, 1235, 9000, 5944, 5441, 5393, 4882, 5948, 2]);