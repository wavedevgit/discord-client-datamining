// modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun86175: for (var _fun86175_ip = 0;;) switch (_fun86175_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.result;
                var0 = _closure1_slot10;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var _closure2_slot0 = var12;
                var7 = var11.totalFileCount;
                var2 = _closure1_slot9;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 10;
                var0 = var13[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = _closure1_slot11;
                var0.header = var4;
                var6 = _closure1_slot9;
                var5 = _closure1_slot7;
                var4 = {};
                var8 = var12.verificationLine;
                var4.style = var8;
                var15 = _closure1_slot12;
                var8 = new Array(2);
                var8[0] = var15;
                var15 = _closure1_slot8;
                var19 = 9;
                var13 = var13[var19];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var18 = 'text-md/normal';
                var13.variant = var18;
                var17 = var11.hasOtaApplied;
                var20 = 'No';
                var16 = var20;
                if (!var17) {
                    _fun86175_ip = 165;
                    continue _fun86175
                }
            case 159:
                var16 = 'Yes';
            case 165:
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var8[1] = var13;
                var4.children = var8;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(5);
                var4[0] = var5;
                var13 = _closure1_slot9;
                var8 = _closure1_slot7;
                var6 = {};
                var5 = var12.verificationLine;
                var6.style = var5;
                var5 = _closure1_slot13;
                var14 = new Array(2);
                var14[0] = var5;
                var17 = _closure1_slot8;
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var19];
                var5 = var15.bind(var3)(var5);
                var16 = var5.Text;
                var15 = {};
                var15.variant = var18;
                var21 = var11.hasLocalCopy;
                var5 = null;
                var22 = var5 == var21;
                var21 = '--';
                if (var22) {
                    _fun86175_ip = 303;
                    continue _fun86175
                }
            case 282:
                var23 = var11.hasLocalCopy;
                var22 = var20;
                if (!var23) {
                    _fun86175_ip = 300;
                    continue _fun86175
                }
            case 294:
                var22 = 'Yes';
            case 300:
                var21 = var22;
            case 303:
                var15.children = var21;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var6.children = var14;
                var6 = var13.bind(var3)(var8, var6);
                var4[1] = var6;
                var13 = _closure1_slot9;
                var8 = _closure1_slot7;
                var6 = {};
                var14 = var12.verificationLine;
                var6.style = var14;
                var15 = _closure1_slot14;
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot8;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var19];
                var15 = var16.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {};
                var15.variant = var18;
                var21 = var11.isValid;
                if (!var21) {
                    _fun86175_ip = 410;
                    continue _fun86175
                }
            case 404:
                var20 = 'Yes';
            case 410:
                var15.children = var20;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var6.children = var14;
                var6 = var13.bind(var3)(var8, var6);
                var4[2] = var6;
                var6 = null;
                if (!(var5 !== var7)) {
                    _fun86175_ip = 629;
                    continue _fun86175
                }
            case 447:
                var13 = _closure1_slot9;
                var8 = _closure1_slot7;
                var7 = {};
                var14 = var12.verificationLine;
                var7.style = var14;
                var15 = _closure1_slot15;
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot9;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var19];
                var15 = var16.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {};
                var15.variant = var18;
                var19 = var11.totalFileCount;
                var18 = new Array(6);
                var18[0] = var19;
                var19 = ' files. ';
                var18[1] = var19;
                var20 = var11.successes;
                var21 = var5 == var20;
                var19 = undefined;
                if (var21) {
                    _fun86175_ip = 557;
                    continue _fun86175
                }
            case 552:
                var19 = var20.length;
            case 557:
                var18[2] = var19;
                var19 = ' successes, ';
                var18[3] = var19;
                var20 = var11.failures;
                var21 = var5 == var20;
                var19 = undefined;
                if (var21) {
                    _fun86175_ip = 591;
                    continue _fun86175
                }
            case 586:
                var19 = var20.length;
            case 591:
                var18[4] = var19;
                var19 = ' failures.';
                var18[5] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var7.children = var14;
                var6 = var13.bind(var3)(var8, var7);
            case 629:
                var4[3] = var6;
                var6 = var11.failures;
                var7 = var6.length;
                var6 = 0;
                var6 = var7 > var6;
                var5 = null;
                if (!var6) {
                    _fun86175_ip = 724;
                    continue _fun86175
                }
            case 655:
                var8 = _closure1_slot9;
                var7 = _closure1_slot7;
                var6 = {};
                var12 = var12.verificationLine;
                var6.style = var12;
                var12 = _closure1_slot16;
                var9 = new Array(2);
                var9[0] = var12;
                var12 = var11.failures;
                var11 = var12.map;
                var10 = function(arg0) { // Environment: var10
                    var4 = arg0;
                    var3 = _closure1_slot8;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {};
                    var5 = 'text-md/normal';
                    var0.variant = var5;
                    var5 = _closure2_slot0;
                    var5 = var5.verificationFailure;
                    var0.style = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var10 = var11.bind(var12)(var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 724:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var13 = 1;
    var3 = var5[var13];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ScrollView;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 7;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var9.flex = var13;
    var3.wrap = var9;
    var9 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.padding = var13;
    var3.contentContainer = var9;
    var9 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingHorizontal = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var9.paddingVertical = var11;
    var3.verificationLine = var9;
    var9 = {};
    var10 = var10.CODE_NORMAL;
    var9.fontFamily = var10;
    var3.verificationFailure = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BottomSheetTitleHeader;
    var3 = {};
    var8 = 'OTA Verification Result';
    var3.title = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-md/bold',
        'children': 'Has OTA Applied'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot12 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-md/bold',
        'children': 'Has Local Copy'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot13 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-md/bold',
        'children': 'OTA is Valid'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot14 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.Text;
    var6 = {
        'variant': 'heading-md/bold',
        'children': 'File Counts'
    };
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot15 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Text;
    var3 = {
        'variant': 'heading-md/bold',
        'children': 'Failures'
    };
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot16 = var3;
    var3 = 11;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.WrenchIcon;
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot17 = var6;
    var6 = 12;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var8 = var6.PaperIcon;
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot18 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.WrenchIcon;
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot19 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.WrenchIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot20 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DownloadIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot21 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ClipboardCheckIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot22 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun86177: for (var _fun86177_ip = 0;;) switch (_fun86177_ip) {
            case 0:
                var0 = function() {
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun86180: for (var _fun86180_ip = 0;;) switch (_fun86180_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun86180_ip = 161;
                                        continue _fun86180
                                    }
                                case 10:
                                    var4 = _closure2_slot4;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var4.bind(var2)(var1);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 15;
                                    var1 = var5[var1];
                                    var4 = var4.bind(var2)(var1);
                                    var1 = var4.verifyOtaFiles;
                                    var1 = var1.bind(var4)();
                                    SaveGenerator(address = 63);
                                case 61:
                                    return var1;
                                case 63:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun86180_ip = 158;
                                        continue _fun86180
                                    }
                                case 69:
                                    var4 = _closure2_slot4;
                                    var3 = false;
                                    var3 = var4.bind(var2)(var3);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 16;
                                    var3 = var5[var3];
                                    var7 = var4.bind(var2)(var3);
                                    var6 = var7.openLazy;
                                    var3 = global;
                                    var5 = var3.Promise;
                                    var4 = var5.resolve;
                                    var3 = {};
                                    var8 = _closure1_slot23;
                                    var3.default = var8;
                                    var5 = var4.bind(var5)(var3);
                                    var4 = {};
                                    var4.result = var1;
                                    var3 = 'OtaVerificationActionSheet';
                                    var3 = var6.bind(var7)(var5, var3, var4);
                                    return var2;
                                case 158:
                                    return var1;
                                case 161:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot5 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot5 = var0;
                var0 = _closure1_slot10;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var5 = _closure1_slot5;
                var1 = var5.useState;
                var0 = '';
                var0 = var1.bind(var5)(var0);
                var6 = _closure1_slot4;
                var25 = 2;
                var0 = var6.bind(var3)(var0, var25);
                var2 = 0;
                var20 = var0[var2];
                var _closure2_slot0 = var20;
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot1 = var0;
                var0 = var5.useState;
                var24 = null;
                var0 = var0.bind(var5)(var24);
                var0 = var6.bind(var3)(var0, var25);
                var21 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var0 = var5.useState;
                var0 = var0.bind(var5)(var24);
                var0 = var6.bind(var3)(var0, var25);
                var23 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var7 = var5.useState;
                var0 = false;
                var0 = var7.bind(var5)(var0);
                var0 = var6.bind(var3)(var0, var25);
                var15 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var2 = var5.useEffect;
                var1 = function() { // Environment: var16
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var1 = var4[var2];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var1 = var5.getOtaRootPath;
                    var7 = var1.bind(var5)();
                    var6 = var7.then;
                    var5 = _closure2_slot1;
                    var5 = var6.bind(var7)(var5);
                    var5 = var4[var2];
                    var6 = var3.bind(var0)(var5);
                    var5 = var6.getManifestInfo;
                    var7 = var5.bind(var6)();
                    var6 = var7.then;
                    var5 = _closure2_slot2;
                    var5 = var6.bind(var7)(var5);
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getBuildOverrideCookieContents;
                    var3 = var2.bind(var3)();
                    var2 = var3.then;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var4.wrap;
                var0.style = var5;
                var4 = var4.contentContainer;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot9;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 17;
                var4 = var12[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = 16;
                var4.spacing = var7;
                var10 = _closure1_slot8;
                var8 = 18;
                var7 = var12[var8];
                var7 = var13.bind(var3)(var7);
                var9 = var7.TableRowGroup;
                var7 = {};
                var11 = 'OTA Root Path (tap to copy)';
                var7.title = var11;
                var19 = _closure1_slot8;
                var18 = 19;
                var11 = var12[var18];
                var11 = var13.bind(var3)(var11);
                var14 = var11.TableRow;
                var11 = {};
                var11.label = var20;
                var20 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.copy;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11.onPress = var20;
                var11 = var19.bind(var3)(var14, var11);
                var7.children = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(4);
                var7[0] = var9;
                var11 = _closure1_slot9;
                var9 = var12[var8];
                var9 = var13.bind(var3)(var9);
                var10 = var9.TableRowGroup;
                var9 = {};
                var14 = 'Manifest';
                var9.title = var14;
                var14 = _closure1_slot8;
                var12 = var12[var18];
                var12 = var13.bind(var3)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var19 = 'Manifest Source';
                var12.label = var19;
                var19 = var24 == var21;
                var20 = undefined;
                if (var19) {
                    _fun86177_ip = 429;
                    continue _fun86177
                }
            case 424:
                var20 = var21.source;
            case 429:
                var22 = var24 != var20;
                var19 = 'Unknown';
                if (!var22) {
                    _fun86177_ip = 443;
                    continue _fun86177
                }
            case 440:
                var19 = var20;
            case 443:
                var12.subLabel = var19;
                var19 = _closure1_slot17;
                var12.icon = var19;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var19 = _closure1_slot8;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var18];
                var13 = var14.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var20 = _closure1_slot18;
                var13.icon = var20;
                var22 = var24 != var21;
                var20 = '{}';
                if (!var22) {
                    _fun86177_ip = 553;
                    continue _fun86177
                }
            case 520:
                var22 = global;
                var26 = var22.JSON;
                var22 = var26.stringify;
                var21 = var21.metadata;
                if (!(var24 == var21)) {
                    _fun86177_ip = 546;
                    continue _fun86177
                }
            case 544:
                var21 = {};
            case 546:
                var20 = var22.bind(var26)(var21, var24, var25);
            case 553:
                var13.label = var20;
                var13 = var19.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var7[1] = var9;
                var11 = _closure1_slot9;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = var12[var8];
                var9 = var13.bind(var3)(var9);
                var10 = var9.TableRowGroup;
                var9 = {};
                var14 = 'Build Override Cookie';
                var9.title = var14;
                var14 = _closure1_slot8;
                var12 = var12[var18];
                var12 = var13.bind(var3)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var19 = _closure1_slot19;
                var12.icon = var19;
                var19 = 'Is cookie set?';
                var12.label = var19;
                var20 = var24 == var23;
                var19 = 'Yes';
                if (!var20) {
                    _fun86177_ip = 678;
                    continue _fun86177
                }
            case 672:
                var19 = 'No';
            case 678:
                var12.subLabel = var19;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = var24 != var23;
                if (!var13) {
                    _fun86177_ip = 772;
                    continue _fun86177
                }
            case 704:
                var20 = _closure1_slot8;
                var19 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var18];
                var14 = var19.bind(var3)(var14);
                var19 = var14.TableRow;
                var14 = {};
                var21 = _closure1_slot20;
                var14.icon = var21;
                var21 = global;
                var22 = var21.JSON;
                var21 = var22.stringify;
                var21 = var21.bind(var22)(var23, var24, var25);
                var14.label = var21;
                var13 = var20.bind(var3)(var19, var14);
            case 772:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var7[2] = var9;
                var10 = _closure1_slot9;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = var12[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.TableRowGroup;
                var8 = {};
                var11 = 'Actions';
                var8.title = var11;
                var19 = _closure1_slot8;
                var11 = var12[var18];
                var11 = var13.bind(var3)(var11);
                var14 = var11.TableRow;
                var11 = {};
                var20 = 'Check for Update & Reload';
                var11.label = var20;
                var20 = _closure1_slot21;
                var11.icon = var20;
                var21 = _closure1_slot1;
                var20 = 15;
                var20 = var12[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.checkForUpdateAndReload;
                var11.onPress = var20;
                var14 = var19.bind(var3)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot8;
                var12 = var12[var18];
                var12 = var13.bind(var3)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var18 = 'Verify OTA Files';
                var12.label = var18;
                var18 = 'Verify content hashes for all app files';
                if (!var15) {
                    _fun86177_ip = 954;
                    continue _fun86177
                }
            case 948:
                var18 = 'Verification in progress';
            case 954:
                var12.subLabel = var18;
                var17 = _closure1_slot22;
                var12.icon = var17;
                var16 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot5;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var12.onPress = var16;
                var12.disabled = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 483, 33, 1297, 671, 5237, 3938, 4907, 10976, 8721, 3261, 11086, 10027, 3279, 4086, 5343, 4876, 5321, 2]);