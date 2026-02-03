// modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var0 = function arg0() {
        _fun107507: for (var _fun107507_ip = 0;;) switch (_fun107507_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.renderedName;
                var0 = var0.showsPromoted;
                var1 = _closure1_slot26;
                var4 = undefined;
                var11 = var1.bind(var4)();
                if (var0) {
                    _fun107507_ip = 89;
                    continue _fun107507
                }
            case 31:
                var2 = _closure1_slot20;
                var1 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 16;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var0.children = var8;
                var0 = var2.bind(var4)(var1, var0);
                _fun107507_ip = 315;
                continue _fun107507;
            case 89:
                var3 = _closure1_slot21;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var11.appRowLabelWithPromotedContainer;
                var1.style = var5;
                var7 = _closure1_slot20;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var9 = 16;
                var5 = var16[var9];
                var5 = var15.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var12 = var11.appRowLabelWithPromotedTextContainer;
                var5.style = var12;
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot20;
                var7 = _closure1_slot6;
                var6 = {};
                var11 = var11.promotedLabel;
                var6.style = var11;
                var11 = _closure1_slot20;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-xxs/semibold',
                    'color': 'text-muted'
                };
                var12 = 17;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["/eVltv"];
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 315:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var1 = function arg0() {
        _fun107508: for (var _fun107508_ip = 0;;) switch (_fun107508_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.application;
                var _closure2_slot0 = var10;
                var8 = var1.iconSource;
                var4 = var1.onPress;
                var6 = var1.isFirstRow;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun107508_ip = 39;
                    continue _fun107508
                }
            case 37:
                var6 = false;
            case 39:
                var5 = var1.isLastRow;
                if (!(var5 === var3)) {
                    _fun107508_ip = 51;
                    continue _fun107508
                }
            case 49:
                var5 = false;
            case 51:
                var11 = var1.showsPromoted;
                if (!(var11 === var3)) {
                    _fun107508_ip = 63;
                    continue _fun107508
                }
            case 61:
                var11 = false;
            case 63:
                var13 = null;
                var9 = var13 != var8;
                if (!var9) {
                    _fun107508_ip = 112;
                    continue _fun107508
                }
            case 72:
                var7 = _closure1_slot20;
                var2 = _closure1_slot1;
                var12 = _closure1_slot3;
                var1 = 18;
                var1 = var12[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.iconSource = var8;
                var9 = var7.bind(var3)(var2, var1);
            case 112:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var15 = 19;
                var1 = var1[var15];
                var8 = var2.bind(var3)(var1);
                var2 = var8.getSectionName;
                var1 = var10;
                if (!(var13 == var10)) {
                    _fun107508_ip = 171;
                    continue _fun107508
                }
            case 148:
                var14 = _closure1_slot0;
                var12 = _closure1_slot3;
                var12 = var12[var15];
                var12 = var14.bind(var3)(var12);
                var1 = var12.FAKE_BUILT_IN_APP;
            case 171:
                var12 = var2.bind(var8)(var1);
                if (var11) {
                    _fun107508_ip = 237;
                    continue _fun107508
                }
            case 179:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var15];
                var8 = var2.bind(var3)(var1);
                var2 = var8.isPromotedApplication;
                var1 = var10;
                if (!(var13 == var1)) {
                    _fun107508_ip = 232;
                    continue _fun107508
                }
            case 209:
                var14 = _closure1_slot0;
                var13 = _closure1_slot3;
                var13 = var13[var15];
                var13 = var14.bind(var3)(var13);
                var1 = var13.FAKE_BUILT_IN_APP;
            case 232:
                var11 = var2.bind(var8)(var1);
            case 237:
                var8 = _closure1_slot5;
                var2 = var8.useMemo;
                var1 = new Array(1);
                var1[0] = var10;
                var0 = function() { // Environment: var0
                    _fun107509: for (var _fun107509_ip = 0;;) switch (_fun107509_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var8 = 19;
                            var0 = var0[var8];
                            var6 = undefined;
                            var4 = var2.bind(var6)(var0);
                            var2 = var4.getSectionDescription;
                            var0 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun107509_ip = 69;
                                continue _fun107509
                            }
                        case 44:
                            var7 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var0 = var0[var8];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.FAKE_BUILT_IN_APP;
                            _fun107509_ip = 73;
                            continue _fun107509;
                        case 69:
                            var0 = _closure2_slot0;
                        case 73:
                            var4 = var2.bind(var4)(var0);
                            var2 = var3 != var4;
                            var0 = null;
                            if (!var2) {
                                _fun107509_ip = 180;
                                continue _fun107509
                            }
                        case 87:
                            var2 = '';
                            var0 = null;
                            if (!(var2 !== var4)) {
                                _fun107509_ip = 180;
                                continue _fun107509
                            }
                        case 97:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 20;
                            var1 = var7[var1];
                            var3 = var5.bind(var6)(var1);
                            var2 = var3.renderMessagePreviewMarkup;
                            var1 = {};
                            var1.content = var4;
                            var4 = false;
                            var1.muted = var4;
                            var4 = 21;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.ChannelListLayoutTypes;
                            var4 = var4.COMPACT;
                            var1.layout = var4;
                            var4 = 'text-muted';
                            var1.color = var4;
                            var0 = var2.bind(var3)(var1);
                        case 180:
                            return var0;
                    }
                };
                var8 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot20;
                var1 = _closure1_slot0;
                var10 = _closure1_slot3;
                var0 = 22;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.icon = var9;
                var10 = _closure1_slot20;
                var9 = _closure1_slot27;
                var7 = {};
                var7.renderedName = var12;
                var7.showsPromoted = var11;
                var7 = var10.bind(var3)(var9, var7);
                var0.label = var7;
                var7 = 1;
                var0.labelLineClamp = var7;
                var0.subLabel = var8;
                var0.subLabelLineClamp = var7;
                var0.start = var6;
                var0.end = var5;
                var5 = true;
                var0.arrow = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var1;
    var0 = function arg0() {
        _fun107510: for (var _fun107510_ip = 0;;) switch (_fun107510_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.section;
                var6 = var0.onPress;
                var5 = var0.isFirstRow;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun107510_ip = 27;
                    continue _fun107510
                }
            case 25:
                var5 = false;
            case 27:
                var4 = var0.isLastRow;
                if (!(var4 === var3)) {
                    _fun107510_ip = 39;
                    continue _fun107510
                }
            case 37:
                var4 = false;
            case 39:
                var2 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 23;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.getAppLauncherIconSource;
                var1 = var8.application;
                var7 = var2.bind(var7)(var1);
                var2 = _closure1_slot20;
                var1 = _closure1_slot28;
                var0 = {};
                var8 = var8.application;
                var0.application = var8;
                var0.iconSource = var7;
                var0.onPress = var6;
                var0.isFirstRow = var5;
                var0.isLastRow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun107511: for (var _fun107511_ip = 0;;) switch (_fun107511_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.section;
                var _closure2_slot0 = var9;
                var12 = var0.onPress;
                var _closure2_slot1 = var12;
                var7 = var0.isFirstRow;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun107511_ip = 37;
                    continue _fun107511
                }
            case 35:
                var7 = false;
            case 37:
                var6 = var0.isLastRow;
                if (!(var6 === var3)) {
                    _fun107511_ip = 49;
                    continue _fun107511
                }
            case 47:
                var6 = false;
            case 49:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 24;
                var2 = var5[var2];
                var10 = var4.bind(var3)(var2);
                var8 = var10.getApplicationIconSource;
                var4 = {};
                var2 = var9.application;
                var2 = var2.id;
                var4.id = var2;
                var2 = var9.application;
                var2 = var2.icon;
                var4.icon = var2;
                var11 = var9.application;
                var2 = null;
                var13 = var2 == var11;
                var5 = undefined;
                if (var13) {
                    _fun107511_ip = 130;
                    continue _fun107511
                }
            case 124:
                var5 = var11.bot;
            case 130:
                var4.bot = var5;
                var5 = true;
                var4.botIconFirst = var5;
                var11 = var8.bind(var10)(var4);
                var10 = var2 != var11;
                if (!var10) {
                    _fun107511_ip = 191;
                    continue _fun107511
                }
            case 154:
                var8 = _closure1_slot20;
                var4 = _closure1_slot1;
                var13 = _closure1_slot3;
                var2 = 18;
                var2 = var13[var2];
                var4 = var4.bind(var3)(var2);
                var2 = {};
                var2.iconSource = var11;
                var10 = var8.bind(var3)(var4, var2);
            case 191:
                var11 = _closure1_slot5;
                var8 = var11.useMemo;
                var4 = new Array(1);
                var4[0] = var9;
                var2 = function() { // Environment: var1
                    _fun107512: for (var _fun107512_ip = 0;;) switch (_fun107512_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.application;
                            var4 = var0.description;
                            var2 = null;
                            var1 = var2 != var4;
                            var0 = null;
                            if (!var1) {
                                _fun107512_ip = 126;
                                continue _fun107512
                            }
                        case 28:
                            var1 = '';
                            var0 = null;
                            if (!(var1 !== var4)) {
                                _fun107512_ip = 126;
                                continue _fun107512
                            }
                        case 38:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 20;
                            var1 = var7[var1];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var1);
                            var2 = var3.renderMessagePreviewMarkup;
                            var1 = {};
                            var1.content = var4;
                            var4 = false;
                            var1.muted = var4;
                            var4 = 21;
                            var4 = var7[var4];
                            var4 = var6.bind(var5)(var4);
                            var4 = var4.ChannelListLayoutTypes;
                            var4 = var4.COMPACT;
                            var1.layout = var4;
                            var4 = 'text-muted';
                            var1.color = var4;
                            var0 = var2.bind(var3)(var1);
                        case 126:
                            return var0;
                    }
                };
                var8 = var8.bind(var11)(var2, var4);
                var11 = _closure1_slot5;
                var4 = var11.useCallback;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var12;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var4.bind(var11)(var1, var2);
                var2 = _closure1_slot20;
                var1 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 22;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.icon = var10;
                var9 = var9.application;
                var9 = var9.name;
                var0.label = var9;
                var0.subLabel = var8;
                var8 = 1;
                var0.subLabelLineClamp = var8;
                var0.start = var7;
                var0.end = var6;
                var0.arrow = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun107514: for (var _fun107514_ip = 0;;) switch (_fun107514_ip) {
            case 0:
                var1 = arg0;
                var19 = var1.context;
                var18 = var1.sectionName;
                var17 = var1.onPress;
                var16 = var1.usesHandleActivityItemSelected;
                var15 = var1.onActivityItemSelected;
                var20 = var1.shelfItem1;
                var14 = var1.shelfItem2;
                var7 = var1.isLastTuple;
                var13 = var1.entrypoint;
                var5 = var1.containerWidth;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot26;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun107515: for (var _fun107515_ip = 0;;) switch (_fun107515_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107515_ip = 103;
                                continue _fun107515
                            }
                        case 13:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 25;
                            var4 = var6[var2];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var7 = _closure2_slot0;
                            var0 = 2;
                            var7 = var7 / var0;
                            var0 = _closure1_slot15;
                            var7 = var7 - var0;
                            var0 = 6;
                            var0 = var7 - var0;
                            var4 = var4.bind(var3)(var0);
                            var0 = {};
                            var0.width = var4;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            var1 = _closure1_slot23;
                            var1 = var4 / var1;
                            var1 = var2.bind(var3)(var1);
                            var0.height = var1;
                            return var0;
                        case 103:
                            var0 = {};
                            var1 = undefined;
                            var0.width = var1;
                            var0.height = var1;
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot21;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var10.activityItemTupleContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = 12;
                if (!var7) {
                    _fun107514_ip = 144;
                    continue _fun107514
                }
            case 142:
                var6 = undefined;
            case 144:
                var5.marginBottom = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot20;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var10.activityItemTupleShelfItemContainer;
                var4.style = var7;
                var11 = _closure1_slot20;
                var8 = _closure1_slot32;
                var7 = {};
                var7.context = var19;
                var7.sectionName = var18;
                var7.onPress = var17;
                var7.usesHandleActivityItemSelected = var16;
                var7.onActivityItemSelected = var15;
                var7.shelfItem = var20;
                var7.entrypoint = var13;
                var20 = var12.width;
                var7.imageWidth = var20;
                var20 = var12.height;
                var7.imageHeight = var20;
                var7 = var11.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var14;
                if (!var5) {
                    _fun107514_ip = 371;
                    continue _fun107514
                }
            case 272:
                var8 = _closure1_slot20;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var10.activityItemTupleShelfItemContainer;
                var6.style = var10;
                var11 = _closure1_slot20;
                var10 = _closure1_slot32;
                var9 = {};
                var9.context = var19;
                var9.sectionName = var18;
                var9.onPress = var17;
                var9.usesHandleActivityItemSelected = var16;
                var9.onActivityItemSelected = var15;
                var9.shelfItem = var14;
                var9.entrypoint = var13;
                var13 = var12.width;
                var9.imageWidth = var13;
                var12 = var12.height;
                var9.imageHeight = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 371:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun107516: for (var _fun107516_ip = 0;;) switch (_fun107516_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.context;
                var _closure2_slot0 = var25;
                var11 = var0.shelfItem;
                var _closure2_slot1 = var11;
                var24 = var0.sectionName;
                var12 = var0.onPress;
                var _closure2_slot2 = var12;
                var1 = var0.usesHandleActivityItemSelected;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun107516_ip = 53;
                    continue _fun107516
                }
            case 51:
                var1 = false;
            case 53:
                var _closure2_slot3 = var1;
                var21 = var0.onActivityItemSelected;
                var20 = var0.entrypoint;
                var17 = var0.imageWidth;
                var14 = var0.imageHeight;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot26;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 26;
                var0 = var9[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useHeroMediaDimensions;
                var16 = var0.bind(var2)();
                var2 = _closure1_slot5;
                var0 = var2.useState;
                var18 = false;
                var2 = var0.bind(var2)(var18);
                var0 = _closure1_slot4;
                var15 = 2;
                var2 = var0.bind(var3)(var2, var15);
                var5 = 0;
                var0 = var2[var5];
                var4 = 1;
                var2 = var2[var4];
                _closure2_slot4 = var2;
                var7 = _closure1_slot1;
                var2 = 27;
                var2 = var9[var2];
                var7 = var7.bind(var3)(var2);
                var2 = {};
                var9 = var11.application;
                var9 = var9.id;
                var2.applicationId = var9;
                var13 = null;
                var9 = var17;
                if (!(var13 == var9)) {
                    _fun107516_ip = 222;
                    continue _fun107516
                }
            case 217:
                var9 = var16.width;
            case 222:
                var2.size = var9;
                var9 = ['embedded_cover'];
                var2.names = var9;
                var7 = var7.bind(var3)(var2);
                var9 = _closure1_slot5;
                var2 = var9.useId;
                var19 = var2.bind(var9)();
                var9 = _closure1_slot0;
                var16 = _closure1_slot3;
                var2 = 28;
                var2 = var16[var2];
                var22 = var9.bind(var3)(var2);
                var16 = var22.useStateFromStoresArray;
                var2 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var6
                    _fun107517: for (var _fun107517_ip = 0;;) switch (_fun107517_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var0 = var2.isLaunchingActivity;
                            var2 = var0.bind(var2)();
                            var0 = new Array(2);
                            var0[0] = var2;
                            var4 = _closure1_slot8;
                            var3 = var4.getLaunchState;
                            var1 = _closure2_slot1;
                            var1 = var1.application;
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var7 = var1.type;
                            var6 = 'channel';
                            var1 = undefined;
                            if (!(var6 === var7)) {
                                _fun107517_ip = 85;
                                continue _fun107517
                            }
                        case 71:
                            var5 = _closure2_slot0;
                            var5 = var5.channel;
                            var1 = var5.id;
                        case 85:
                            var1 = var3.bind(var4)(var2, var1);
                            var0[1] = var1;
                            return var0;
                    }
                };
                var9 = var16.bind(var22)(var9, var2);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var9, var15);
                var5 = var2[var5];
                var2 = var2[var4];
                var16 = var13 != var2;
                if (!var16) {
                    _fun107516_ip = 341;
                    continue _fun107516
                }
            case 335:
                var16 = var2.isLaunching;
            case 341:
                if (!var16) {
                    _fun107516_ip = 354;
                    continue _fun107516
                }
            case 344:
                var2 = var2.componentId;
                var16 = var2 === var19;
            case 354:
                var22 = _closure1_slot0;
                var23 = _closure1_slot3;
                var2 = 19;
                var2 = var23[var2];
                var9 = var22.bind(var3)(var2);
                var4 = var9.getShelfBadgeTypeIfActive;
                var2 = var11.application;
                var15 = var4.bind(var9)(var2);
                var2 = 23;
                var2 = var23[var2];
                var9 = var22.bind(var3)(var2);
                var4 = var9.useHandleActivityItemSelected;
                var2 = {};
                var26 = var11.application;
                var26 = var26.id;
                var2.applicationId = var26;
                var2.context = var25;
                var2.sectionName = var24;
                var2.onActivityItemSelected = var21;
                var21 = 29;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.ApplicationCommandTriggerLocations;
                var21 = var21.APP_LAUNCHER_HOME;
                var2.location = var21;
                var2.entrypoint = var20;
                var2.launchingComponentId = var19;
                var2.fetchesApplication = var18;
                var2 = var4.bind(var9)(var2);
                var18 = var2.handleActivityItemSelected;
                _closure2_slot5 = var18;
                var9 = _closure1_slot5;
                var4 = var9.useCallback;
                var2 = new Array(4);
                var2[0] = var18;
                var2[1] = var12;
                var2[2] = var11;
                var2[3] = var1;
                var1 = function() { // Environment: var6
                    _fun107518: for (var _fun107518_ip = 0;;) switch (_fun107518_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun107518_ip = 20;
                                continue _fun107518
                            }
                        case 10:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 20:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4 = var4.bind(var9)(var1, var2);
                var2 = var7.state;
                var1 = 'not-found';
                var1 = var1 === var2;
                if (var1) {
                    _fun107516_ip = 559;
                    continue _fun107516
                }
            case 556:
                var1 = var0;
            case 559:
                var2 = var7.state;
                var0 = 'loading';
                var0 = var0 === var2;
                if (var0) {
                    _fun107516_ip = 584;
                    continue _fun107516
                }
            case 575:
                var2 = var7.url;
                var0 = var13 == var2;
            case 584:
                if (var1) {
                    _fun107516_ip = 671;
                    continue _fun107516
                }
            case 587:
                var9 = null;
                if (var0) {
                    _fun107516_ip = 669;
                    continue _fun107516
                }
            case 592:
                var2 = _closure1_slot20;
                var1 = _closure1_slot1;
                var12 = _closure1_slot3;
                var0 = 31;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = function() {
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.onError = var6;
                var6 = var10.activityItemImage;
                var0.style = var6;
                var6 = {};
                var7 = var7.url;
                var6.uri = var7;
                var0.source = var6;
                var6 = 'cover';
                var0.resizeMode = var6;
                var9 = var2.bind(var3)(var1, var0);
            case 669:
                _fun107516_ip = 703;
                continue _fun107516;
            case 671:
                var2 = _closure1_slot20;
                var1 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 30;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var2.bind(var3)(var1, var0);
            case 703:
                var2 = _closure1_slot21;
                var1 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 32;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableScale;
                var0 = {};
                var6 = var10.activityItemContainer;
                var0.style = var6;
                var0.disabled = var5;
                var0.onPress = var4;
                var6 = _closure1_slot21;
                var5 = _closure1_slot6;
                var4 = {};
                var12 = var10.activityImageContainer;
                var7 = new Array(2);
                var7[0] = var12;
                var12 = var13 != var17;
                if (!var12) {
                    _fun107516_ip = 788;
                    continue _fun107516
                }
            case 784:
                var12 = var13 != var14;
            case 788:
                if (!var12) {
                    _fun107516_ip = 804;
                    continue _fun107516
                }
            case 791:
                var13 = {};
                var13.width = var17;
                var13.height = var14;
                var12 = var13;
            case 804:
                var7[1] = var12;
                var4.style = var7;
                var7 = new Array(3);
                var7[0] = var9;
                var14 = _closure1_slot20;
                var13 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 33;
                var9 = var12[var9];
                var13 = var13.bind(var3)(var9);
                var9 = {};
                var9.labelType = var15;
                var9 = var14.bind(var3)(var13, var9);
                var7[1] = var9;
                var15 = _closure1_slot20;
                var9 = _closure1_slot0;
                var13 = 34;
                var13 = var12[var13];
                var13 = var9.bind(var3)(var13);
                var14 = var13.SubmittingOverlay;
                var13 = {};
                var13.submitting = var16;
                var16 = var10.submittingOverlay;
                var13.style = var16;
                var13 = var15.bind(var3)(var14, var13);
                var7[2] = var13;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var10.activityDetailsContainer;
                var5.style = var10;
                var10 = _closure1_slot20;
                var8 = 16;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'heading-sm/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var11 = var11.application;
                var11 = var11.name;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun107520: for (var _fun107520_ip = 0;;) switch (_fun107520_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.context;
                var16 = var1.sectionName;
                var15 = var1.onPress;
                var18 = var1.item1;
                var14 = var1.item2;
                var7 = var1.isLastTuple;
                var13 = var1.entrypoint;
                var5 = var1.containerWidth;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot26;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun107521: for (var _fun107521_ip = 0;;) switch (_fun107521_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107521_ip = 103;
                                continue _fun107521
                            }
                        case 13:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 25;
                            var4 = var6[var2];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var7 = _closure2_slot0;
                            var0 = 2;
                            var7 = var7 / var0;
                            var0 = _closure1_slot15;
                            var7 = var7 - var0;
                            var0 = 6;
                            var0 = var7 - var0;
                            var4 = var4.bind(var3)(var0);
                            var0 = {};
                            var0.width = var4;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            var1 = _closure1_slot23;
                            var1 = var4 / var1;
                            var1 = var2.bind(var3)(var1);
                            var0.height = var1;
                            return var0;
                        case 103:
                            var0 = {};
                            var1 = undefined;
                            var0.width = var1;
                            var0.height = var1;
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot21;
                var1 = _closure1_slot6;
                var0 = {};
                var5 = var10.activityItemTupleContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = 12;
                if (!var7) {
                    _fun107520_ip = 132;
                    continue _fun107520
                }
            case 130:
                var6 = undefined;
            case 132:
                var5.marginBottom = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot20;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var10.activityItemTupleShelfItemContainer;
                var4.style = var7;
                var11 = _closure1_slot20;
                var8 = _closure1_slot34;
                var7 = {};
                var7.context = var17;
                var7.sectionName = var16;
                var7.onPress = var15;
                var7.item = var18;
                var7.entrypoint = var13;
                var18 = var12.width;
                var7.imageWidth = var18;
                var18 = var12.height;
                var7.imageHeight = var18;
                var7 = var11.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var14;
                if (!var5) {
                    _fun107520_ip = 337;
                    continue _fun107520
                }
            case 249:
                var8 = _closure1_slot20;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var10.activityItemTupleShelfItemContainer;
                var6.style = var10;
                var11 = _closure1_slot20;
                var10 = _closure1_slot34;
                var9 = {};
                var9.context = var17;
                var9.sectionName = var16;
                var9.onPress = var15;
                var9.item = var14;
                var9.entrypoint = var13;
                var13 = var12.width;
                var9.imageWidth = var13;
                var12 = var12.height;
                var9.imageHeight = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 337:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun107522: for (var _fun107522_ip = 0;;) switch (_fun107522_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.item;
                var1 = var0.sectionName;
                var _closure2_slot0 = var1;
                var12 = var0.onPress;
                var _closure2_slot1 = var12;
                var16 = var0.imageWidth;
                var15 = var0.imageHeight;
                var2 = var0.context;
                var0 = var0.entrypoint;
                var0 = _closure1_slot26;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 26;
                var0 = var7[var0];
                var2 = var6.bind(var3)(var0);
                var0 = var2.useHeroMediaDimensions;
                var13 = var0.bind(var2)();
                var10 = _closure1_slot5;
                var2 = var10.useState;
                var0 = false;
                var10 = var2.bind(var10)(var0);
                var2 = _closure1_slot4;
                var0 = 2;
                var10 = var2.bind(var3)(var10, var0);
                var0 = 0;
                var0 = var10[var0];
                var2 = 1;
                var2 = var10[var2];
                var _closure2_slot2 = var2;
                var11 = var4.application;
                var _closure2_slot3 = var11;
                var17 = 19;
                var2 = var7[var17];
                var6 = var6.bind(var3)(var2);
                var2 = var6.isEmbeddedApp;
                var10 = var2.bind(var6)(var11);
                var6 = _closure1_slot1;
                var2 = 27;
                var2 = var7[var2];
                var6 = var6.bind(var3)(var2);
                var2 = {};
                var7 = var11.id;
                var2.applicationId = var7;
                var14 = null;
                var7 = var16;
                if (!(var14 == var7)) {
                    _fun107522_ip = 214;
                    continue _fun107522
                }
            case 209:
                var7 = var13.width;
            case 214:
                var2.size = var7;
                var7 = ['embedded_cover'];
                var2.names = var7;
                var6 = var6.bind(var3)(var2);
                var2 = var4.overrideImageUrl;
                if (!(var14 != var2)) {
                    _fun107522_ip = 270;
                    continue _fun107522
                }
            case 247:
                var2 = {};
                var7 = 'loaded';
                var2.state = var7;
                var4 = var4.overrideImageUrl;
                var2.url = var4;
                var6 = var2;
            case 270:
                var7 = _closure1_slot5;
                var4 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var1;
                var1 = function() { // Environment: var5
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var4.bind(var7)(var1, var2);
                var2 = var6.state;
                var1 = 'not-found';
                var1 = var1 === var2;
                if (var1) {
                    _fun107522_ip = 329;
                    continue _fun107522
                }
            case 326:
                var1 = var0;
            case 329:
                var2 = var6.state;
                var0 = 'loading';
                var0 = var0 === var2;
                if (var0) {
                    _fun107522_ip = 354;
                    continue _fun107522
                }
            case 345:
                var2 = var6.url;
                var0 = var14 == var2;
            case 354:
                if (var1) {
                    _fun107522_ip = 441;
                    continue _fun107522
                }
            case 357:
                var12 = null;
                if (var0) {
                    _fun107522_ip = 439;
                    continue _fun107522
                }
            case 362:
                var2 = _closure1_slot20;
                var1 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 31;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = function() {
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0.onError = var5;
                var5 = var9.activityItemImage;
                var0.style = var5;
                var5 = {};
                var6 = var6.url;
                var5.uri = var6;
                var0.source = var5;
                var5 = 'cover';
                var0.resizeMode = var5;
                var12 = var2.bind(var3)(var1, var0);
            case 439:
                _fun107522_ip = 473;
                continue _fun107522;
            case 441:
                var2 = _closure1_slot20;
                var1 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 30;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = var2.bind(var3)(var1, var0);
            case 473:
                var2 = _closure1_slot21;
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 32;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableScale;
                var0 = {};
                var5 = var9.activityItemContainer;
                var0.style = var5;
                var0.onPress = var4;
                var6 = _closure1_slot21;
                var5 = _closure1_slot6;
                var4 = {};
                var13 = var9.activityImageContainer;
                var7 = new Array(2);
                var7[0] = var13;
                var13 = var14 != var16;
                if (!var13) {
                    _fun107522_ip = 554;
                    continue _fun107522
                }
            case 550:
                var13 = var14 != var15;
            case 554:
                if (!var13) {
                    _fun107522_ip = 570;
                    continue _fun107522
                }
            case 557:
                var14 = {};
                var14.width = var16;
                var14.height = var15;
                var13 = var14;
            case 570:
                var7[1] = var13;
                var4.style = var7;
                var7 = new Array(2);
                var7[0] = var12;
                if (!var10) {
                    _fun107522_ip = 650;
                    continue _fun107522
                }
            case 589:
                var14 = _closure1_slot20;
                var13 = _closure1_slot1;
                var15 = _closure1_slot3;
                var12 = 33;
                var12 = var15[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = _closure1_slot0;
                var15 = var15[var17];
                var16 = var16.bind(var3)(var15);
                var15 = var16.getShelfBadgeTypeIfActive;
                var15 = var15.bind(var16)(var11);
                var12.labelType = var15;
                var10 = var14.bind(var3)(var13, var12);
            case 650:
                var7[1] = var10;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = var9.activityDetailsContainer;
                var5.style = var9;
                var10 = _closure1_slot20;
                var9 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 16;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'heading-sm/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var11 = var11.name;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var0 = _closure1_slot26;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 35;
        var0 = var2[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var9 = var0.left;
        var7 = var0.right;
        var2 = _closure1_slot20;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = var4.divider;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var8 = _closure1_slot15;
        var8 = -var8;
        var8 = var8 - var9;
        var5.marginLeft = var8;
        var6 = _closure1_slot15;
        var6 = -var6;
        var6 = var6 - var7;
        var5.marginRight = var6;
        var4[1] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun107526: for (var _fun107526_ip = 0;;) switch (_fun107526_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.index;
                var4 = var0.children;
                var1 = _closure1_slot26;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var2 = _closure1_slot20;
                var1 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 16;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var6 = var5.sectionHeader;
                var5 = new Array(2);
                var5[0] = var6;
                var7 = 0;
                var6 = null;
                if (!(var7 !== var8)) {
                    _fun107526_ip = 103;
                    continue _fun107526
                }
            case 91:
                var7 = {};
                var8 = 24;
                var7.marginTop = var8;
                var6 = var7;
            case 103:
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun107527: for (var _fun107527_ip = 0;;) switch (_fun107527_ip) {
            case 0:
                var9 = arg0;
                var5 = arg1;
                var3 = arg2;
                var8 = arguments[3];
                var4 = arguments[4];
                var _closure2_slot0 = var5;
                var11 = undefined;
                if (!(var8 === var11)) {
                    _fun107527_ip = 56;
                    continue _fun107527
                }
            case 27:
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 81;
                var0 = var2[var0];
                var0 = var1.bind(var11)(var0);
                var8 = var0.COLLAPSED_LIST_ITEM_MAX;
            case 56:
                if (!(var4 === var11)) {
                    _fun107527_ip = 62;
                    continue _fun107527
                }
            case 60:
                var4 = undefined;
            case 62:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var11;
                var _closure2_slot4 = var11;
                var2 = var9.length;
                var13 = 0;
                if (!(var13 !== var2)) {
                    _fun107527_ip = 368;
                    continue _fun107527
                }
            case 92:
                var7 = global;
                var1 = var7.Math;
                var0 = var1.min;
                var10 = var0.bind(var1)(var2, var8);
                _closure2_slot2 = var10;
                var1 = var10 < var2;
                _closure2_slot3 = var1;
                var0 = new Array(0);
                _closure2_slot4 = var0;
                var14 = {};
                var16 = _closure1_slot0;
                var15 = _closure1_slot3;
                var12 = 44;
                var15 = var15[var12];
                var15 = var16.bind(var11)(var15);
                var15 = var15.AppLauncherHomeListItemType;
                var15 = var15.RECOMMENDATION_SECTION_HEADER;
                var14.type = var15;
                var14.section = var3;
                var14.sectionName = var5;
                var14.numItems = var2;
                var14.numVisibleItems = var10;
                var2 = var0.push;
                var2 = var2.bind(var0)(var14);
                var2 = var9.slice;
                var13 = var2.bind(var9)(var13, var10);
                var10 = var13.forEach;
                var2 = function(arg0, arg1) { // Environment: var6
                    _fun107528: for (var _fun107528_ip = 0;;) switch (_fun107528_ip) {
                        case 0:
                            var6 = arg0;
                            var5 = arg1;
                            var3 = _closure2_slot4;
                            var2 = var3.push;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var0 = 44;
                            var7 = var7[var0];
                            var0 = undefined;
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.AppLauncherHomeListItemType;
                            var7 = var7.RECOMMENDATION_APP;
                            var1.type = var7;
                            var7 = var6.application;
                            var1.application = var7;
                            var6 = var6.showsPromoted;
                            var1.showsPromoted = var6;
                            var6 = 0;
                            var6 = var6 === var5;
                            var1.isFirstRow = var6;
                            var7 = _closure2_slot2;
                            var6 = 1;
                            var6 = var7 - var6;
                            var6 = var5 === var6;
                            if (!var6) {
                                _fun107528_ip = 117;
                                continue _fun107528
                            }
                        case 110:
                            var7 = _closure2_slot3;
                            var6 = !var7;
                        case 117:
                            var1.isLastRow = var6;
                            var6 = _closure2_slot0;
                            var1.sectionName = var6;
                            var1.sectionPosition = var5;
                            var4 = _closure2_slot1;
                            var1.sectionOverallPosition = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var10.bind(var13)(var2);
                if (!var1) {
                    _fun107527_ip = 366;
                    continue _fun107527
                }
            case 235:
                var2 = var0.push;
                var1 = {};
                var10 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var12];
                var8 = var10.bind(var11)(var8);
                var8 = var8.AppLauncherHomeListItemType;
                var8 = var8.VIEW_ALL;
                var1.type = var8;
                var10 = var9.map;
                var8 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var0 = var0.application;
                    return var0;
                };
                var8 = var10.bind(var9)(var8);
                var1.applications = var8;
                var8 = var9.reduce;
                var7 = var7.Set;
                var10 = var7.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var7
                    }
                });
                var19 = var10;
                var7 = new var19[var7](var18);
                var7 = var7 instanceof Object ? var7 : var10;
                var6 = function(arg0, arg1) { // Environment: var6
                    _fun107530: for (var _fun107530_ip = 0;;) switch (_fun107530_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var2 = var1.showsPromoted;
                            if (!var2) {
                                _fun107530_ip = 35;
                                continue _fun107530
                            }
                        case 15:
                            var2 = var0.add;
                            var1 = var1.application;
                            var1 = var1.id;
                            var1 = var2.bind(var0)(var1);
                        case 35:
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var1.promotedApplicationIds = var6;
                var1.sectionName = var5;
                var1.sectionOverallPosition = var4;
                var1.title = var3;
                var1 = var2.bind(var0)(var1);
            case 366:
                return var0;
            case 368:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var11 = 0;
    var4 = var6[var11];
    var0 = undefined;
    var4 = var13.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.useWindowDimensions;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.useContextIndexState;
    var _closure1_slot9 = var7;
    var4 = var4.useUserIndexState;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var16 = 8;
    var4 = var6[var16];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var15 = var4.DEFAULT_CONTENT_PADDING;
    var _closure1_slot15 = var15;
    var4 = var4.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot17 = var7;
    var4 = var4.Permissions;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var7 = var4.jsxs;
    var _closure1_slot21 = var7;
    var4 = var4.Fragment;
    var _closure1_slot22 = var4;
    var12 = 13;
    var4 = var6[var12];
    var4 = var13.bind(var0)(var4);
    var4 = var4.spacing;
    var14 = var4.PX_4;
    var4 = 1.7777777777777777;
    var _closure1_slot23 = var4;
    var4 = new Array(0);
    var _closure1_slot24 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ApplicationCollectionSurface;
    var4 = var4.APP_LAUNCHER_IN_TEXT;
    var _closure1_slot25 = var4;
    var4 = 15;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var17 = var6[var12];
    var17 = var13.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var17;
    var9.flex = var10;
    var4.container = var9;
    var9 = {
        'backgroundColor': null,
        'position': 'absolute',
        'top': 4294967280,
        'left': 0,
        'right': 0,
        'height': 16
    };
    var17 = var6[var12];
    var17 = var13.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var17;
    var4.topBackgroundFill = var9;
    var9 = {};
    var9.marginBottom = var16;
    var4.serverAppsHeader = var9;
    var9 = {
        'marginBottom': 8,
        'marginTop': 8
    };
    var4.sectionHeader = var9;
    var9 = {};
    var9.paddingHorizontal = var15;
    var16 = var6[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var16;
    var4.list = var9;
    var9 = {};
    var16 = var6[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var16;
    var4.activitiesRow = var9;
    var9 = {
        'backgroundColor': null,
        'marginBottom': 16,
        'flexGrow': 0,
        'flexShrink': 1,
        'flexDirection': 'row'
    };
    var16 = var6[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var16;
    var4.activitiesRowContainer = var9;
    var9 = {};
    var9.paddingHorizontal = var15;
    var9.paddingBottom = var15;
    var4.searchBarContainer = var9;
    var9 = {};
    var15 = var6[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_STRONG;
    var9.borderColor = var15;
    var9.borderTopWidth = var10;
    var15 = var6[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var9.marginTop = var15;
    var4.divider = var9;
    var9 = {
        'overflow': 'hidden',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9.gap = var14;
    var4.appRowLabelWithPromotedContainer = var9;
    var9 = {};
    var9.flexShrink = var10;
    var4.appRowLabelWithPromotedTextContainer = var9;
    var9 = {
        'alignSelf': 'center',
        'justifyContent': 'center',
        'paddingVertical': 2
    };
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9.paddingHorizontal = var14;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_BACKGROUND_ACTIVE;
    var9.backgroundColor = var14;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9.borderRadius = var14;
    var4.promotedLabel = var9;
    var9 = {
        'borderRadius': null,
        'overflow': 'hidden',
        'height': '100%'
    };
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9.borderRadius = var14;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var14;
    var4.activityItemContainer = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 120
    };
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var14;
    var4.activityImageContainer = var9;
    var9 = {};
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9.borderBottomLeftRadius = var14;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9.borderBottomEndRadius = var14;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9.padding = var14;
    var9.flexGrow = var10;
    var9.flexShrink = var10;
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var9.borderTopWidth = var11;
    var9.borderRightWidth = var10;
    var9.borderBottomWidth = var10;
    var9.borderLeftWidth = var10;
    var4.activityDetailsContainer = var9;
    var9 = {
        'flexDirection': 'row',
        'gap': 12
    };
    var4.activityItemTupleContainer = var9;
    var9 = {
        'width': '50%',
        'flexShrink': 1
    };
    var4.activityItemTupleShelfItemContainer = var9;
    var9 = {
        'height': '100%',
        'width': '100%'
    };
    var4.activityItemImage = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'height': '100%',
        'width': '100%'
    };
    var4.submittingOverlay = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot26 = var4;
    var4 = 86;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun107531: for (var _fun107531_ip = 0;;) switch (_fun107531_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.route;
                var0 = var0.params;
                var17 = var0.context;
                var _closure2_slot0 = var17;
                var0 = var0.initialSearchQuery;
                var _closure2_slot1 = var0;
                var21 = var1.navigation;
                var _closure2_slot2 = var21;
                var3 = undefined;
                var _closure2_slot29 = var3;
                var _closure2_slot30 = var3;
                var _closure2_slot31 = var3;
                var _closure2_slot32 = var3;
                var _closure2_slot33 = var3;
                var _closure2_slot34 = var3;
                var _closure2_slot35 = var3;
                var _closure2_slot36 = var3;
                var10 = _closure1_slot0;
                var13 = _closure1_slot3;
                var1 = 38;
                var1 = var13[var1];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useViewableAppLauncherHomeItems;
                var1 = var1.bind(var2)();
                var7 = var1.hasViewedActivityItem;
                var4 = var1.hasViewedLearnMoreItem;
                var14 = var1.handleViewableItemsChanged;
                var _closure2_slot3 = var14;
                var2 = _closure1_slot1;
                var1 = 39;
                var5 = var13[var1];
                var5 = var2.bind(var3)(var5);
                var16 = var5.bind(var3)(var7);
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var23 = var1.bind(var3)(var4);
                var _closure2_slot4 = var23;
                var1 = _closure1_slot26;
                var40 = var1.bind(var3)();
                var _closure2_slot5 = var40;
                var1 = 40;
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var _closure2_slot6 = var9;
                var1 = 35;
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var1.bottom;
                var2 = 41;
                var2 = var13[var2];
                var4 = var10.bind(var3)(var2);
                var2 = var4.useRequiredAppLauncherContext;
                var5 = var2.bind(var4)();
                var15 = var5.chatInputRef;
                var _closure2_slot7 = var15;
                var4 = var5.keyboardCloseReasonRef;
                var _closure2_slot8 = var4;
                var2 = var5.width;
                var _closure2_slot9 = var2;
                var7 = var5.entrypoint;
                var _closure2_slot10 = var7;
                var20 = var5.onActivityItemSelected;
                var _closure2_slot11 = var20;
                var5 = _closure1_slot7;
                var11 = var5.bind(var3)();
                var8 = var11.width;
                var5 = var11.height;
                var22 = var8 > var5;
                var _closure2_slot12 = var22;
                var18 = _closure1_slot5;
                var12 = var18.useEffect;
                var8 = new Array(1);
                var8[0] = var7;
                var5 = function() { // Environment: var41
                    _fun107532: for (var _fun107532_ip = 0;;) switch (_fun107532_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 37;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.AppLauncherEntrypoint;
                            var2 = var2.VOICE;
                            if (!(var3 === var2)) {
                                _fun107532_ip = 78;
                                continue _fun107532
                            }
                        case 48:
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 42;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dismissNewActivityIndicator;
                            var1 = var1.bind(var2)();
                        case 78:
                            return var0;
                    }
                };
                var5 = var12.bind(var18)(var5, var8);
                var12 = _closure1_slot5;
                var8 = var12.useCallback;
                var5 = new Array(2);
                var5[0] = var15;
                var5[1] = var4;
                var4 = function() { // Environment: var41
                    _fun107533: for (var _fun107533_ip = 0;;) switch (_fun107533_ip) {
                        case 0:
                            var3 = _closure2_slot8;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 41;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.AppLauncherKeyboardCloseReason;
                            var2 = var2.COMMAND;
                            var3.current = var2;
                            var1 = _closure2_slot7;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107533_ip = 75;
                                continue _fun107533
                            }
                        case 65:
                            var1 = var2.closeCustomKeyboard;
                            var1 = var1.bind(var2)();
                        case 75:
                            return var0;
                    }
                };
                var15 = var8.bind(var12)(var4, var5);
                var12 = _closure1_slot5;
                var8 = var12.useCallback;
                var5 = new Array(3);
                var5[0] = var17;
                var5[1] = var7;
                var5[2] = var21;
                var4 = function(arg0, arg1) { // Environment: var41
                    _fun107534: for (var _fun107534_ip = 0;;) switch (_fun107534_ip) {
                        case 0:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var0 = 23;
                            var1 = var7[var0];
                            var0 = undefined;
                            var3 = var6.bind(var0)(var1);
                            var2 = var3.handleApplicationSelected;
                            var1 = {};
                            var4 = 29;
                            var4 = var7[var4];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.ApplicationCommandTriggerLocations;
                            var4 = var4.APP_LAUNCHER_HOME;
                            var1.location = var4;
                            var4 = arg0;
                            var4 = var4.application;
                            var6 = null;
                            if (!(var6 == var4)) {
                                _fun107534_ip = 101;
                                continue _fun107534
                            }
                        case 75:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var5 = 19;
                            var5 = var7[var5];
                            var5 = var6.bind(var0)(var5);
                            var4 = var5.FAKE_BUILT_IN_APP;
                        case 101:
                            var1.application = var4;
                            var5 = _closure2_slot2;
                            var1.navigation = var5;
                            var5 = _closure2_slot0;
                            var1.context = var5;
                            var5 = arg1;
                            var1.sectionName = var5;
                            var4 = _closure2_slot10;
                            var1.entrypoint = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var18 = var8.bind(var12)(var4, var5);
                var _closure2_slot13 = var18;
                var12 = _closure1_slot5;
                var8 = var12.useCallback;
                var5 = new Array(3);
                var5[0] = var17;
                var5[1] = var7;
                var5[2] = var21;
                var4 = function(arg0) { // Environment: var41
                    _fun107535: for (var _fun107535_ip = 0;;) switch (_fun107535_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.shelfData;
                            var6 = var0.sectionName;
                            var5 = var0.navigates;
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun107535_ip = 29;
                                continue _fun107535
                            }
                        case 27:
                            var5 = true;
                        case 29:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var1 = 23;
                            var1 = var9[var1];
                            var3 = var8.bind(var0)(var1);
                            var2 = var3.handleApplicationSelected;
                            var1 = {};
                            var7 = 29;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.ApplicationCommandTriggerLocations;
                            var7 = var7.APP_LAUNCHER_HOME;
                            var1.location = var7;
                            var4 = var4.application;
                            var1.application = var4;
                            var7 = _closure2_slot2;
                            var1.navigation = var7;
                            var7 = _closure2_slot0;
                            var1.context = var7;
                            var1.sectionName = var6;
                            var1.navigates = var5;
                            var4 = _closure2_slot10;
                            var1.entrypoint = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var19 = var8.bind(var12)(var4, var5);
                var _closure2_slot14 = var19;
                var5 = {};
                var5.context = var17;
                var5.entrypoint = var7;
                var4 = function arg0() {
                    _fun107536: for (var _fun107536_ip = 0;;) switch (_fun107536_ip) {
                        case 0:
                            var1 = arg0;
                            var17 = var1.context;
                            var _closure3_slot0 = var17;
                            var15 = var1.entrypoint;
                            var _closure3_slot1 = var15;
                            var19 = undefined;
                            var _closure3_slot2 = var19;
                            var _closure3_slot3 = var19;
                            var _closure3_slot4 = var19;
                            var _closure3_slot5 = var19;
                            var _closure3_slot6 = var19;
                            var _closure3_slot7 = var19;
                            var _closure3_slot8 = var19;
                            var _closure3_slot9 = var19;
                            var _closure3_slot10 = var19;
                            var _closure3_slot11 = var19;
                            var _closure3_slot12 = var19;
                            var _closure3_slot13 = var19;
                            var _closure3_slot14 = var19;
                            var _closure3_slot15 = var19;
                            var _closure3_slot16 = var19;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 73;
                            var1 = var3[var1];
                            var2 = var2.bind(var19)(var1);
                            var1 = var2.useFetchDeveloperActivityShelfItems;
                            var1 = var1.bind(var2)();
                            var2 = _closure1_slot1;
                            var1 = 74;
                            var1 = var3[var1];
                            var2 = var2.bind(var19)(var1);
                            var1 = {};
                            var4 = var17.type;
                            var20 = 'channel';
                            var3 = undefined;
                            if (!(var20 === var4)) {
                                _fun107536_ip = 162;
                                continue _fun107536
                            }
                        case 152:
                            var4 = var17.channel;
                            var3 = var4.guild_id;
                        case 162:
                            var1.guildId = var3;
                            var12 = var2.bind(var19)(var1);
                            _closure3_slot2 = var12;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 37;
                            var2 = var5[var1];
                            var2 = var3.bind(var19)(var2);
                            var2 = var2.AppLauncherEntrypoint;
                            var2 = var2.VOICE;
                            var14 = var15 === var2;
                            _closure3_slot3 = var14;
                            var4 = _closure1_slot1;
                            var2 = 75;
                            var2 = var5[var2];
                            var6 = var4.bind(var19)(var2);
                            var2 = {};
                            var2.context = var17;
                            var2.onlyActivityApps = var14;
                            var6 = var6.bind(var19)(var2);
                            var9 = var6.frecencyCommands;
                            var2 = var6.frecentApps;
                            _closure3_slot4 = var2;
                            var7 = var6.sectionDescriptors;
                            var6 = var6.loading;
                            var1 = var5[var1];
                            var1 = var3.bind(var19)(var1);
                            var1 = var1.AppLauncherEntrypoint;
                            var1 = var1.TEXT;
                            var16 = var15 === var1;
                            _closure3_slot5 = var16;
                            var1 = 76;
                            var1 = var5[var1];
                            var4 = var4.bind(var19)(var1);
                            var1 = {};
                            var1.context = var17;
                            var1 = var4.bind(var19)(var1);
                            var1 = var1.appsInThisServer;
                            _closure3_slot6 = var1;
                            var11 = _closure1_slot5;
                            var8 = var11.useMemo;
                            var4 = new Array(2);
                            var4[0] = var1;
                            var4[1] = var16;
                            var1 = function() { // Environment: var0
                                _fun107537: for (var _fun107537_ip = 0;;) switch (_fun107537_ip) {
                                    case 0:
                                        var1 = _closure3_slot5;
                                        if (var1) {
                                            _fun107537_ip = 19;
                                            continue _fun107537
                                        }
                                    case 10:
                                        var7 = _closure1_slot24;
                                        _fun107537_ip = 23;
                                        continue _fun107537;
                                    case 19:
                                        var7 = _closure3_slot6;
                                    case 23:
                                        var1 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var2 = 17;
                                        var3 = var6[var2];
                                        var5 = undefined;
                                        var3 = var1.bind(var5)(var3);
                                        var4 = var3.intl;
                                        var3 = var4.string;
                                        var2 = var6[var2];
                                        var2 = var1.bind(var5)(var2);
                                        var2 = var2.t;
                                        var2 = var2.oJyzCu;
                                        var9 = var3.bind(var4)(var2);
                                        var3 = _closure1_slot37;
                                        var2 = var7.map;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = {};
                                            var1 = arg0;
                                            var1 = var1.application;
                                            var0.application = var1;
                                            return var0;
                                        };
                                        var2 = var2.bind(var7)(var0);
                                        var0 = 67;
                                        var0 = var6[var0];
                                        var0 = var1.bind(var5)(var0);
                                        var8 = var0.IN_THIS_SERVER_ITEM_MAX;
                                        var10 = 'in_this_server';
                                        var12 = undefined;
                                        var11 = var2;
                                        var0 = var12[var3](var11, var10, var9, var8, var7);
                                        return var0;
                                }
                            };
                            var1 = var8.bind(var11)(var1, var4);
                            var13 = _closure1_slot5;
                            var11 = var13.useMemo;
                            var8 = new Array(1);
                            var8[0] = var2;
                            var4 = function() { // Environment: var0
                                var2 = _closure3_slot4;
                                var1 = var2.map;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var1 = arg0;
                                    var2 = arg1;
                                    var0 = {};
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var3 = 44;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var4);
                                    var3 = var3.AppLauncherHomeListItemType;
                                    var3 = var3.APP;
                                    var0.type = var3;
                                    var3 = var1.id;
                                    var0.applicationId = var3;
                                    var0.section = var1;
                                    var1 = 0;
                                    var1 = var1 === var2;
                                    var0.isFirstRow = var1;
                                    var1 = _closure3_slot4;
                                    var3 = var1.length;
                                    var1 = 1;
                                    var1 = var3 - var1;
                                    var1 = var2 === var1;
                                    var0.isLastRow = var1;
                                    var1 = 'recents';
                                    var0.sectionName = var1;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var8 = var11.bind(var13)(var4, var8);
                            var13 = _closure1_slot5;
                            var11 = var13.useMemo;
                            var4 = new Array(2);
                            var4[0] = var16;
                            var4[1] = var2;
                            var2 = function() { // Environment: var0
                                _fun107541: for (var _fun107541_ip = 0;;) switch (_fun107541_ip) {
                                    case 0:
                                        var2 = _closure3_slot5;
                                        var0 = !var2;
                                        if (!var2) {
                                            _fun107541_ip = 40;
                                            continue _fun107541
                                        }
                                    case 13:
                                        var3 = _closure3_slot4;
                                        var2 = var3.some;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var1 = var0.application;
                                            var0 = null;
                                            var0 = var0 != var1;
                                            return var0;
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        var0 = !var1;
                                    case 40:
                                        return var0;
                                }
                            };
                            var4 = var11.bind(var13)(var2, var4);
                            var2 = 77;
                            var2 = var5[var2];
                            var5 = var3.bind(var19)(var2);
                            var3 = var5.useIsActivitiesInTextEnabled;
                            var11 = var17.type;
                            var2 = undefined;
                            if (!(var20 === var11)) {
                                _fun107536_ip = 474;
                                continue _fun107536
                            }
                        case 464:
                            var11 = var17.channel;
                            var2 = var11.id;
                        case 474:
                            var2 = var3.bind(var5)(var2);
                            _closure3_slot7 = var2;
                            var11 = _closure1_slot5;
                            var5 = var11.useEffect;
                            var3 = new Array(3);
                            var3[0] = var2;
                            var3[1] = var17;
                            var3[2] = var15;
                            var2 = function() { // Environment: var0
                                _fun107543: for (var _fun107543_ip = 0;;) switch (_fun107543_ip) {
                                    case 0:
                                        var0 = _closure3_slot7;
                                        if (var0) {
                                            _fun107543_ip = 55;
                                            continue _fun107543
                                        }
                                    case 10:
                                        var2 = _closure3_slot1;
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var1 = 37;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var5.bind(var1)(var3);
                                        var1 = var1.AppLauncherEntrypoint;
                                        var1 = var1.VOICE;
                                        var0 = var2 === var1;
                                    case 55:
                                        if (!var0) {
                                            _fun107543_ip = 138;
                                            continue _fun107543
                                        }
                                    case 58:
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 42;
                                        var0 = var2[var0];
                                        var3 = undefined;
                                        var2 = var1.bind(var3)(var0);
                                        var1 = var2.fetchShelf;
                                        var0 = {};
                                        var5 = _closure3_slot0;
                                        var6 = var5.type;
                                        var5 = 'channel';
                                        if (!(var5 === var6)) {
                                            _fun107543_ip = 122;
                                            continue _fun107543
                                        }
                                    case 108:
                                        var4 = _closure3_slot0;
                                        var4 = var4.channel;
                                        var3 = var4.guild_id;
                                    case 122:
                                        var0.guildId = var3;
                                        var3 = true;
                                        var0.force = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 138:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var11)(var2, var3);
                            var2 = function() {
                                _fun107544: for (var _fun107544_ip = 0;;) switch (_fun107544_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var5 = _closure1_slot3;
                                        var1 = 28;
                                        var1 = var5[var1];
                                        var4 = undefined;
                                        var6 = var2.bind(var4)(var1);
                                        var3 = var6.useStateFromStores;
                                        var1 = _closure1_slot11;
                                        var2 = new Array(1);
                                        var2[0] = var1;
                                        var1 = function() { // Environment: var1
                                            var2 = _closure1_slot11;
                                            var1 = var2.get;
                                            var0 = 'only_show_preview_app_collections';
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var2 = var3.bind(var6)(var2, var1);
                                        var3 = _closure1_slot1;
                                        var1 = 71;
                                        var1 = var5[var1];
                                        var6 = var3.bind(var4)(var1);
                                        var5 = var6.getCurrentConfig;
                                        var3 = {};
                                        var1 = 'App Launcher Home (Mobile)';
                                        var3.location = var1;
                                        var1 = {};
                                        var7 = false;
                                        var1.autoTrackExposure = var7;
                                        var1 = var5.bind(var6)(var3, var1);
                                        var1 = var1.enabled;
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot3;
                                        var0 = 72;
                                        var0 = var5[var0];
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var0.ApplicationCollectionActiveState;
                                        if (var2) {
                                            _fun107544_ip = 159;
                                            continue _fun107544
                                        }
                                    case 140:
                                        if (var1) {
                                            _fun107544_ip = 151;
                                            continue _fun107544
                                        }
                                    case 143:
                                        var1 = var0.ACTIVE;
                                        return var1;
                                    case 151:
                                        var1 = var0.NON_STAFF_PREVIEW;
                                        return var1;
                                    case 159:
                                        var0 = var0.PREVIEW;
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var19)();
                            _closure3_slot8 = var2;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var21 = 28;
                            var3 = var3[var21];
                            var13 = var5.bind(var19)(var3);
                            var11 = var13.useStateFromStores;
                            var3 = _closure1_slot12;
                            var5 = new Array(1);
                            var5[0] = var3;
                            var3 = function() { // Environment: var0
                                var2 = _closure1_slot12;
                                var1 = var2.getCollections;
                                var0 = {};
                                var3 = _closure1_slot25;
                                var0.surface = var3;
                                var3 = _closure3_slot8;
                                var0.activeState = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = var11.bind(var13)(var5, var3);
                            _closure3_slot9 = var3;
                            var13 = _closure1_slot5;
                            var11 = var13.useMemo;
                            var5 = new Array(2);
                            var5[0] = var3;
                            var5[1] = var14;
                            var3 = function() { // Environment: var0
                                _fun107547: for (var _fun107547_ip = 0;;) switch (_fun107547_ip) {
                                    case 0:
                                        var0 = _closure3_slot3;
                                        if (var0) {
                                            _fun107547_ip = 16;
                                            continue _fun107547
                                        }
                                    case 10:
                                        var0 = _closure3_slot9;
                                        _fun107547_ip = 56;
                                        continue _fun107547;
                                    case 16:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var2 = 19;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.ensureRecommendationSectionsOnlyContainActivities;
                                        var1 = _closure3_slot9;
                                        var0 = var2.bind(var3)(var1);
                                    case 56:
                                        return var0;
                                }
                            };
                            var11 = var11.bind(var13)(var3, var5);
                            _closure3_slot10 = var11;
                            var13 = _closure1_slot5;
                            var5 = var13.useEffect;
                            var3 = new Array(2);
                            var3[0] = var2;
                            var3[1] = var15;
                            var2 = function() { // Environment: var0
                                _fun107548: for (var _fun107548_ip = 0;;) switch (_fun107548_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 19;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.appLauncherShowsRecommendations;
                                        var1 = _closure3_slot1;
                                        var1 = var2.bind(var3)(var1);
                                        if (!var1) {
                                            _fun107548_ip = 97;
                                            continue _fun107548
                                        }
                                    case 46:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var1 = 78;
                                        var1 = var3[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.fetchCollections;
                                        var1 = {};
                                        var5 = _closure1_slot25;
                                        var1.surface = var5;
                                        var4 = _closure3_slot8;
                                        var1.activeState = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 97:
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var13)(var2, var3);
                            var5 = var12.length;
                            var16 = _closure1_slot5;
                            var13 = var16.useMemo;
                            var3 = new Array(2);
                            var3[0] = var15;
                            var3[1] = var12;
                            var2 = function() { // Environment: var0
                                _fun107549: for (var _fun107549_ip = 0;;) switch (_fun107549_ip) {
                                    case 0:
                                        var5 = function arg0() {
                                            var0 = arg0;
                                            var4 = var0.shelfItem1;
                                            var3 = var0.shelfItem2;
                                            var2 = var0.shelfItem1SectionPosition;
                                            var1 = var0.shelfItem2SectionPosition;
                                            var0 = {};
                                            var7 = _closure1_slot0;
                                            var6 = _closure1_slot3;
                                            var5 = 44;
                                            var6 = var6[var5];
                                            var5 = undefined;
                                            var5 = var7.bind(var5)(var6);
                                            var5 = var5.AppLauncherHomeListItemType;
                                            var5 = var5.SHELF_ITEM_TUPLE;
                                            var0.type = var5;
                                            var0.shelfItem1 = var4;
                                            var0.shelfItem2 = var3;
                                            var3 = 'activities';
                                            var0.sectionName = var3;
                                            var0.shelfItem1SectionPosition = var2;
                                            var0.shelfItem2SectionPosition = var1;
                                            var1 = 0;
                                            var0.sectionOverallPosition = var1;
                                            var1 = false;
                                            var0.isLastTuple = var1;
                                            return var0;
                                        };
                                        var1 = _closure3_slot2;
                                        var1 = var1.length;
                                        var7 = 0;
                                        if (!(var7 !== var1)) {
                                            _fun107549_ip = 439;
                                            continue _fun107549
                                        }
                                    case 30:
                                        var2 = _closure3_slot1;
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var1 = 37;
                                        var1 = var6[var1];
                                        var8 = undefined;
                                        var1 = var3.bind(var8)(var1);
                                        var1 = var1.AppLauncherEntrypoint;
                                        var1 = var1.VOICE;
                                        if (!(var2 === var1)) {
                                            _fun107549_ip = 439;
                                            continue _fun107549
                                        }
                                    case 78:
                                        var2 = new Array(0);
                                        var1 = _closure3_slot2;
                                        var3 = var1.length;
                                        var1 = 1;
                                        var3 = var3 - var1;
                                        var6 = 2;
                                        var7 = 0;
                                        if (!(var7 < var3)) {
                                            _fun107549_ip = 185;
                                            continue _fun107549
                                        }
                                    case 107:
                                        var9 = var7 + var1;
                                        var3 = {};
                                        var10 = _closure3_slot2;
                                        var10 = var10[var7];
                                        var3.shelfItem1 = var10;
                                        var10 = _closure3_slot2;
                                        var10 = var10[var9];
                                        var3.shelfItem2 = var10;
                                        var3.shelfItem1SectionPosition = var7;
                                        var3.shelfItem2SectionPosition = var9;
                                        var9 = var5.bind(var8)(var3);
                                        var3 = var2.push;
                                        var3 = var3.bind(var2)(var9);
                                        var7 = var7 + var6;
                                        var3 = _closure3_slot2;
                                        var3 = var3.length;
                                        var3 = var3 - var1;
                                        if (var7 < var3) {
                                            _fun107549_ip = 107;
                                            continue _fun107549
                                        }
                                    case 185:
                                        var3 = _closure3_slot2;
                                        var3 = var3.length;
                                        var3 = var3 % var6;
                                        if (!(var3 === var1)) {
                                            _fun107549_ip = 269;
                                            continue _fun107549
                                        }
                                    case 202:
                                        var3 = {};
                                        var7 = _closure3_slot2;
                                        var6 = var7.length;
                                        var6 = var6 - var1;
                                        var6 = var7[var6];
                                        var3.shelfItem1 = var6;
                                        var3.shelfItem2 = var8;
                                        var6 = _closure3_slot2;
                                        var6 = var6.length;
                                        var6 = var6 - var1;
                                        var3.shelfItem1SectionPosition = var6;
                                        var3.shelfItem2SectionPosition = var8;
                                        var5 = var5.bind(var8)(var3);
                                        var3 = var2.push;
                                        var3 = var3.bind(var2)(var5);
                                    case 269:
                                        var3 = var2.length;
                                        var3 = var3 - var1;
                                        var5 = var2[var3];
                                        var3 = true;
                                        var5.isLastTuple = var3;
                                        var3 = {};
                                        var7 = _closure1_slot0;
                                        var9 = _closure1_slot3;
                                        var4 = 44;
                                        var4 = var9[var4];
                                        var4 = var7.bind(var8)(var4);
                                        var4 = var4.AppLauncherHomeListItemType;
                                        var4 = var4.SECTION_HEADER;
                                        var3.type = var4;
                                        var4 = 17;
                                        var5 = var9[var4];
                                        var5 = var7.bind(var8)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.string;
                                        var4 = var9[var4];
                                        var4 = var7.bind(var8)(var4);
                                        var4 = var4.t;
                                        var4 = var4.aeuOoh;
                                        var4 = var5.bind(var6)(var4);
                                        var3.section = var4;
                                        var4 = 'activities';
                                        var3.sectionName = var4;
                                        var4 = _closure3_slot2;
                                        var4 = var4.length;
                                        var3.numItems = var4;
                                        var0 = _closure3_slot2;
                                        var0 = var0.length;
                                        var3.numVisibleItems = var0;
                                        var0 = new Array(1);
                                        var0[0] = var3;
                                        var13 = var0;
                                        var12 = var2;
                                        var11 = var1;
                                        var1 = arraySpread(var13, var12, var11);
                                        return var0;
                                    case 439:
                                        var0 = new Array(0);
                                        return var0;
                                }
                            };
                            var13 = var13.bind(var16)(var2, var3);
                            _closure3_slot11 = var13;
                            var2 = _closure1_slot9;
                            var18 = true;
                            var16 = false;
                            var3 = var2.bind(var19)(var17, var18, var16);
                            _closure3_slot12 = var3;
                            var2 = _closure1_slot10;
                            var2 = var2.bind(var19)(var18, var16);
                            _closure3_slot13 = var2;
                            var22 = _closure1_slot5;
                            var18 = var22.useMemo;
                            var3 = var3.result;
                            var16 = null;
                            var24 = var16 == var3;
                            var23 = undefined;
                            if (var24) {
                                _fun107536_ip = 770;
                                continue _fun107536
                            }
                        case 764:
                            var23 = var3.sections;
                        case 770:
                            var3 = new Array(2);
                            var3[0] = var23;
                            var23 = var2.result;
                            var24 = var16 == var23;
                            var2 = undefined;
                            if (var24) {
                                _fun107536_ip = 799;
                                continue _fun107536
                            }
                        case 793:
                            var2 = var23.sections;
                        case 799:
                            var3[1] = var2;
                            var2 = function() { // Environment: var0
                                _fun107551: for (var _fun107551_ip = 0;;) switch (_fun107551_ip) {
                                    case 0:
                                        var0 = _closure3_slot12;
                                        var4 = var0.result;
                                        var1 = null;
                                        var5 = var1 == var4;
                                        var3 = undefined;
                                        var0 = undefined;
                                        if (var5) {
                                            _fun107551_ip = 32;
                                            continue _fun107551
                                        }
                                    case 26:
                                        var0 = var4.sections;
                                    case 32:
                                        if (!(var1 == var0)) {
                                            _fun107551_ip = 38;
                                            continue _fun107551
                                        }
                                    case 36:
                                        var0 = {};
                                    case 38:
                                        var2 = _closure3_slot13;
                                        var4 = var2.result;
                                        var5 = var1 == var4;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun107551_ip = 63;
                                            continue _fun107551
                                        }
                                    case 57:
                                        var2 = var4.sections;
                                    case 63:
                                        if (!(var1 == var2)) {
                                            _fun107551_ip = 69;
                                            continue _fun107551
                                        }
                                    case 67:
                                        var2 = {};
                                    case 69:
                                        var1 = function arg0() {
                                            var0 = global;
                                            var2 = var0.Object;
                                            var1 = var2.values;
                                            var0 = arg0;
                                            var2 = var1.bind(var2)(var0);
                                            var1 = var2.some;
                                            var0 = function(arg0) { // Environment: var0
                                                var0 = global;
                                                var2 = var0.Object;
                                                var1 = var2.keys;
                                                var0 = arg0;
                                                var0 = var0.commands;
                                                var0 = var1.bind(var2)(var0);
                                                var1 = var0.length;
                                                var0 = 0;
                                                var0 = var1 > var0;
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var0 = var1.bind(var3)(var0);
                                        if (var0) {
                                            _fun107551_ip = 91;
                                            continue _fun107551
                                        }
                                    case 86:
                                        var0 = var1.bind(var3)(var2);
                                    case 91:
                                        return var0;
                                }
                            };
                            var3 = var18.bind(var22)(var2, var3);
                            var18 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var21];
                            var21 = var18.bind(var19)(var2);
                            var19 = var21.useStateFromStores;
                            var2 = _closure1_slot13;
                            var18 = new Array(1);
                            var18[0] = var2;
                            var2 = function() { // Environment: var0
                                _fun107554: for (var _fun107554_ip = 0;;) switch (_fun107554_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var1 = var0.type;
                                        var0 = 'channel';
                                        var0 = var0 === var1;
                                        if (!var0) {
                                            _fun107554_ip = 108;
                                            continue _fun107554
                                        }
                                    case 23:
                                        var1 = _closure3_slot0;
                                        var3 = var1.channel;
                                        var1 = var3.isDM;
                                        var1 = var1.bind(var3)();
                                        if (var1) {
                                            _fun107554_ip = 64;
                                            continue _fun107554
                                        }
                                    case 45:
                                        var3 = _closure3_slot0;
                                        var4 = var3.channel;
                                        var3 = var4.isMultiUserDM;
                                        var1 = var3.bind(var4)();
                                    case 64:
                                        if (var1) {
                                            _fun107554_ip = 105;
                                            continue _fun107554
                                        }
                                    case 67:
                                        var5 = _closure1_slot13;
                                        var4 = var5.can;
                                        var3 = _closure1_slot18;
                                        var3 = var3.USE_APPLICATION_COMMANDS;
                                        var2 = _closure3_slot0;
                                        var2 = var2.channel;
                                        var1 = var4.bind(var5)(var3, var2);
                                    case 105:
                                        var0 = var1;
                                    case 108:
                                        return var0;
                                }
                            };
                            var2 = var19.bind(var21)(var18, var2);
                            var19 = var17.type;
                            var18 = null;
                            if (!(var20 === var19)) {
                                _fun107536_ip = 879;
                                continue _fun107536
                            }
                        case 874:
                            var18 = var17.channel;
                        case 879:
                            var17 = var3;
                            if (!var17) {
                                _fun107536_ip = 888;
                                continue _fun107536
                            }
                        case 885:
                            var17 = var4;
                        case 888:
                            if (var17) {
                                _fun107536_ip = 894;
                                continue _fun107536
                            }
                        case 891:
                            var17 = !var2;
                        case 894:
                            var3 = var4;
                            if (!var4) {
                                _fun107536_ip = 903;
                                continue _fun107536
                            }
                        case 900:
                            var3 = !var17;
                        case 903:
                            if (!var3) {
                                _fun107536_ip = 926;
                                continue _fun107536
                            }
                        case 906:
                            var2 = var16 != var18;
                            if (!var2) {
                                _fun107536_ip = 923;
                                continue _fun107536
                            }
                        case 913:
                            var19 = var18.isPrivate;
                            var2 = var19.bind(var18)();
                        case 923:
                            var3 = !var2;
                        case 926:
                            if (!var3) {
                                _fun107536_ip = 932;
                                continue _fun107536
                            }
                        case 929:
                            var3 = !var14;
                        case 932:
                            var2 = var4;
                            if (!var2) {
                                _fun107536_ip = 941;
                                continue _fun107536
                            }
                        case 938:
                            var2 = var17;
                        case 941:
                            if (!var2) {
                                _fun107536_ip = 964;
                                continue _fun107536
                            }
                        case 944:
                            var16 = var16 != var18;
                            if (!var16) {
                                _fun107536_ip = 961;
                                continue _fun107536
                            }
                        case 951:
                            var17 = var18.isPrivate;
                            var16 = var17.bind(var18)();
                        case 961:
                            var2 = !var16;
                        case 964:
                            if (!var2) {
                                _fun107536_ip = 970;
                                continue _fun107536
                            }
                        case 967:
                            var2 = !var14;
                        case 970:
                            _closure3_slot14 = var2;
                            var17 = _closure1_slot5;
                            var16 = var17.useMemo;
                            var14 = new Array(3);
                            var14[0] = var11;
                            var14[1] = var12;
                            var14[2] = var2;
                            var12 = function() { // Environment: var0
                                _fun107555: for (var _fun107555_ip = 0;;) switch (_fun107555_ip) {
                                    case 0:
                                        var3 = _closure3_slot14;
                                        var0 = new Array(0);
                                        if (var3) {
                                            _fun107555_ip = 96;
                                            continue _fun107555
                                        }
                                    case 16:
                                        var _closure4_slot0 = var0;
                                        var3 = global;
                                        var3 = var3.Set;
                                        var4 = var3.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var7 = var4;
                                        var3 = new var7[var3](var6);
                                        var3 = var3 instanceof Object ? var3 : var4;
                                        var _closure4_slot1 = var3;
                                        var5 = _closure3_slot10;
                                        var4 = var5.forEach;
                                        var3 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var2 = var0.application_directory_collection_items;
                                            var1 = var2.forEach;
                                            var0 = function(arg0) { // Environment: var0
                                                _fun107557: for (var _fun107557_ip = 0;;) switch (_fun107557_ip) {
                                                    case 0:
                                                        var1 = arg0;
                                                        var3 = var1.type;
                                                        var4 = _closure1_slot0;
                                                        var2 = _closure1_slot3;
                                                        var0 = 79;
                                                        var2 = var2[var0];
                                                        var0 = undefined;
                                                        var2 = var4.bind(var0)(var2);
                                                        var2 = var2.ApplicationDirectoryCollectionItemType;
                                                        var2 = var2.APPLICATION;
                                                        if (!(var3 === var2)) {
                                                            _fun107557_ip = 76;
                                                            continue _fun107557
                                                        }
                                                    case 49:
                                                        var3 = _closure4_slot1;
                                                        var2 = var3.add;
                                                        var1 = var1.application;
                                                        var1 = var1.id;
                                                        var1 = var2.bind(var3)(var1);
                                                    case 76:
                                                        return var0;
                                                }
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var3 = var4.bind(var5)(var3);
                                        var3 = _closure3_slot2;
                                        var2 = var3.forEach;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun107558: for (var _fun107558_ip = 0;;) switch (_fun107558_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var4 = _closure4_slot1;
                                                    var3 = var4.has;
                                                    var1 = var2.application;
                                                    var1 = var1.id;
                                                    var1 = var3.bind(var4)(var1);
                                                    if (var1) {
                                                        _fun107558_ip = 47;
                                                        continue _fun107558
                                                    }
                                                case 33:
                                                    var1 = _closure4_slot0;
                                                    var0 = var1.push;
                                                    var0 = var0.bind(var1)(var2);
                                                case 47:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    case 96:
                                        return var0;
                                }
                            };
                            var17 = var16.bind(var17)(var12, var14);
                            _closure3_slot15 = var17;
                            var16 = _closure1_slot5;
                            var14 = var16.useMemo;
                            var12 = new Array(3);
                            var12[0] = var17;
                            var12[1] = var11;
                            var12[2] = var2;
                            var11 = function() { // Environment: var0
                                _fun107559: for (var _fun107559_ip = 0;;) switch (_fun107559_ip) {
                                    case 0:
                                        var0 = new Array(0);
                                        var _closure4_slot0 = var0;
                                        var3 = _closure3_slot14;
                                        if (var3) {
                                            _fun107559_ip = 43;
                                            continue _fun107559
                                        }
                                    case 20:
                                        var3 = _closure3_slot10;
                                        var2 = var3.forEach;
                                        var1 = function(arg0, arg1) { // Environment: var1
                                            _fun107560: for (var _fun107560_ip = 0;;) switch (_fun107560_ip) {
                                                case 0:
                                                    var19 = arg0;
                                                    var18 = arg1;
                                                    var3 = var19.type;
                                                    var17 = var19.application_directory_collection_items;
                                                    var4 = _closure1_slot0;
                                                    var0 = _closure1_slot3;
                                                    var5 = 80;
                                                    var2 = var0[var5];
                                                    var0 = undefined;
                                                    var2 = var4.bind(var0)(var2);
                                                    var2 = var2.ApplicationDirectoryCollectionType;
                                                    var2 = var2.BANNER_CARDS;
                                                    if (!(var3 !== var2)) {
                                                        _fun107560_ip = 313;
                                                        continue _fun107560
                                                    }
                                                case 63:
                                                    var4 = _closure1_slot0;
                                                    var2 = _closure1_slot3;
                                                    var2 = var2[var5];
                                                    var2 = var4.bind(var0)(var2);
                                                    var2 = var2.ApplicationDirectoryCollectionType;
                                                    var2 = var2.EXPANDABLE_LIST;
                                                    if (!(var3 === var2)) {
                                                        _fun107560_ip = 1076;
                                                        continue _fun107560
                                                    }
                                                case 99:
                                                    var4 = var19.application_directory_collection_items;
                                                    var3 = var4.map;
                                                    var2 = function(arg0) { // Environment: var1
                                                        _fun107561: for (var _fun107561_ip = 0;;) switch (_fun107561_ip) {
                                                            case 0:
                                                                var1 = arg0;
                                                                var3 = var1.type;
                                                                var4 = _closure1_slot0;
                                                                var5 = _closure1_slot3;
                                                                var0 = 79;
                                                                var0 = var5[var0];
                                                                var6 = undefined;
                                                                var0 = var4.bind(var6)(var0);
                                                                var0 = var0.ApplicationDirectoryCollectionItemType;
                                                                var0 = var0.APPLICATION;
                                                                if (!(var3 !== var0)) {
                                                                    _fun107561_ip = 51;
                                                                    continue _fun107561
                                                                }
                                                            case 49:
                                                                return var6;
                                                            case 51:
                                                                var0 = {};
                                                                var3 = var1.application;
                                                                var0.application = var3;
                                                                var5 = _closure1_slot0;
                                                                var7 = _closure1_slot3;
                                                                var2 = 83;
                                                                var2 = var7[var2];
                                                                var4 = var5.bind(var6)(var2);
                                                                var3 = var4.hasFlag;
                                                                var2 = var1.flags;
                                                                var1 = 84;
                                                                var1 = var7[var1];
                                                                var1 = var5.bind(var6)(var1);
                                                                var1 = var1.ApplicationCollectionItemFlags;
                                                                var1 = var1.PROMOTED;
                                                                var1 = var3.bind(var4)(var2, var1);
                                                                var0.showsPromoted = var1;
                                                                return var0;
                                                        }
                                                    };
                                                    var4 = var3.bind(var4)(var2);
                                                    var3 = var4.filter;
                                                    var7 = _closure1_slot0;
                                                    var8 = _closure1_slot3;
                                                    var2 = 66;
                                                    var2 = var8[var2];
                                                    var2 = var7.bind(var0)(var2);
                                                    var2 = var2.isNotNullish;
                                                    var4 = var3.bind(var4)(var2);
                                                    var _closure5_slot0 = var4;
                                                    var2 = 83;
                                                    var2 = var8[var2];
                                                    var6 = var7.bind(var0)(var2);
                                                    var5 = var6.hasFlag;
                                                    var3 = var19.flags;
                                                    var2 = 85;
                                                    var2 = var8[var2];
                                                    var2 = var7.bind(var0)(var2);
                                                    var2 = var2.ApplicationCollectionFlags;
                                                    var2 = var2.APPENDS_REMAINING_ACTIVITIES;
                                                    var2 = var5.bind(var6)(var3, var2);
                                                    if (!var2) {
                                                        _fun107560_ip = 242;
                                                        continue _fun107560
                                                    }
                                                case 218:
                                                    var3 = _closure3_slot15;
                                                    var2 = var3.forEach;
                                                    var1 = function(arg0) { // Environment: var1
                                                        var2 = _closure5_slot0;
                                                        var1 = var2.push;
                                                        var0 = {};
                                                        var3 = arg0;
                                                        var3 = var3.application;
                                                        var0.application = var3;
                                                        var3 = false;
                                                        var0.showsPromoted = var3;
                                                        var0 = var1.bind(var2)(var0);
                                                        var0 = undefined;
                                                        return var0;
                                                    };
                                                    var1 = var2.bind(var3)(var1);
                                                case 242:
                                                    var3 = _closure1_slot37;
                                                    var35 = var19.title;
                                                    var34 = var19.title;
                                                    var37 = undefined;
                                                    var36 = var4;
                                                    var33 = undefined;
                                                    var32 = var18;
                                                    var35 = var37[var3](var36, var35, var34, var33, var32, var31);
                                                    var3 = _closure4_slot0;
                                                    var2 = var3.push;
                                                    var1 = new Array(0);
                                                    var34 = 0;
                                                    var36 = var1;
                                                    var4 = arraySpread(var36, var35, var34);
                                                    var36 = var2;
                                                    var35 = var1;
                                                    var34 = var3;
                                                    var1 = apply(var36, var35, var34);
                                                    _fun107560_ip = 1076;
                                                    continue _fun107560;
                                                case 313:
                                                    var2 = var17.length;
                                                    var1 = global;
                                                    var6 = var1.Math;
                                                    var3 = var6.min;
                                                    var5 = _closure1_slot0;
                                                    var4 = _closure1_slot3;
                                                    var1 = 81;
                                                    var1 = var4[var1];
                                                    var1 = var5.bind(var0)(var1);
                                                    var1 = var1.COLLAPSED_LIST_ITEM_MAX;
                                                    var1 = var3.bind(var6)(var2, var1);
                                                    var3 = {};
                                                    var15 = 44;
                                                    var4 = var4[var15];
                                                    var4 = var5.bind(var0)(var4);
                                                    var4 = var4.AppLauncherHomeListItemType;
                                                    var4 = var4.RECOMMENDATION_SECTION_HEADER;
                                                    var3.type = var4;
                                                    var4 = var19.title;
                                                    var3.section = var4;
                                                    var4 = var19.title;
                                                    var3.sectionName = var4;
                                                    var3.numItems = var2;
                                                    var3.numVisibleItems = var1;
                                                    var2 = _closure4_slot0;
                                                    var1 = var2.push;
                                                    var1 = var1.bind(var2)(var3);
                                                    var1 = var17.length;
                                                    var13 = 0;
                                                    var1 = var13 < var1;
                                                    var12 = 2;
                                                    var11 = null;
                                                    var10 = 83;
                                                    var9 = 84;
                                                    var8 = 82;
                                                    var7 = 79;
                                                    var6 = 1;
                                                    var5 = undefined;
                                                    var4 = undefined;
                                                    var3 = undefined;
                                                    var2 = undefined;
                                                    if (!var1) {
                                                        _fun107560_ip = 1076;
                                                        continue _fun107560
                                                    }
                                                case 484:
                                                    var21 = var17[var13];
                                                    var28 = var13 + var6;
                                                    var1 = var17.length;
                                                    var1 = var28 < var1;
                                                    var27 = undefined;
                                                    if (!var1) {
                                                        _fun107560_ip = 510;
                                                        continue _fun107560
                                                    }
                                                case 506:
                                                    var27 = var17[var28];
                                                case 510:
                                                    var22 = var21.type;
                                                    var20 = _closure1_slot0;
                                                    var1 = _closure1_slot3;
                                                    var1 = var1[var7];
                                                    var1 = var20.bind(var0)(var1);
                                                    var1 = var1.ApplicationDirectoryCollectionItemType;
                                                    var1 = var1.APPLICATION;
                                                    var20 = var2;
                                                    if (!(var22 === var1)) {
                                                        _fun107560_ip = 1057;
                                                        continue _fun107560
                                                    }
                                                case 554:
                                                    var1 = var21.id;
                                                    var1 = var11 != var1;
                                                    if (!var1) {
                                                        _fun107560_ip = 576;
                                                        continue _fun107560
                                                    }
                                                case 566:
                                                    var22 = var21.image_hash;
                                                    var1 = var11 != var22;
                                                case 576:
                                                    var23 = undefined;
                                                    if (!var1) {
                                                        _fun107560_ip = 631;
                                                        continue _fun107560
                                                    }
                                                case 581:
                                                    var22 = _closure1_slot0;
                                                    var1 = _closure1_slot3;
                                                    var1 = var1[var8];
                                                    var24 = var22.bind(var0)(var1);
                                                    var22 = var24.getCollectionItemAssetUrl;
                                                    var1 = {};
                                                    var25 = var21.id;
                                                    var1.itemId = var25;
                                                    var25 = var21.image_hash;
                                                    var1.hash = var25;
                                                    var23 = var22.bind(var24)(var1);
                                                case 631:
                                                    var22 = {};
                                                    var1 = var21.application;
                                                    var22.application = var1;
                                                    var26 = _closure1_slot0;
                                                    var1 = _closure1_slot3;
                                                    var24 = var1[var10];
                                                    var25 = var26.bind(var0)(var24);
                                                    var24 = var25.hasFlag;
                                                    var21 = var21.flags;
                                                    var1 = var1[var9];
                                                    var1 = var26.bind(var0)(var1);
                                                    var1 = var1.ApplicationCollectionItemFlags;
                                                    var1 = var1.PROMOTED;
                                                    var1 = var24.bind(var25)(var21, var1);
                                                    var22.showsPromoted = var1;
                                                    var22.overrideImageUrl = var23;
                                                    var24 = var11 != var27;
                                                    var21 = undefined;
                                                    var1 = var2;
                                                    if (!var24) {
                                                        _fun107560_ip = 927;
                                                        continue _fun107560
                                                    }
                                                case 722:
                                                    var25 = var27.type;
                                                    var26 = _closure1_slot0;
                                                    var24 = _closure1_slot3;
                                                    var24 = var24[var7];
                                                    var24 = var26.bind(var0)(var24);
                                                    var24 = var24.ApplicationDirectoryCollectionItemType;
                                                    var24 = var24.APPLICATION;
                                                    var21 = undefined;
                                                    var1 = var2;
                                                    if (!(var25 === var24)) {
                                                        _fun107560_ip = 927;
                                                        continue _fun107560
                                                    }
                                                case 768:
                                                    var24 = var27.id;
                                                    var25 = var11 != var24;
                                                    if (!var25) {
                                                        _fun107560_ip = 790;
                                                        continue _fun107560
                                                    }
                                                case 780:
                                                    var24 = var27.image_hash;
                                                    var25 = var11 != var24;
                                                case 790:
                                                    var24 = undefined;
                                                    if (!var25) {
                                                        _fun107560_ip = 845;
                                                        continue _fun107560
                                                    }
                                                case 795:
                                                    var26 = _closure1_slot0;
                                                    var25 = _closure1_slot3;
                                                    var25 = var25[var8];
                                                    var29 = var26.bind(var0)(var25);
                                                    var26 = var29.getCollectionItemAssetUrl;
                                                    var25 = {};
                                                    var30 = var27.id;
                                                    var25.itemId = var30;
                                                    var30 = var27.image_hash;
                                                    var25.hash = var30;
                                                    var24 = var26.bind(var29)(var25);
                                                case 845:
                                                    var25 = {};
                                                    var26 = var27.application;
                                                    var25.application = var26;
                                                    var31 = _closure1_slot0;
                                                    var26 = _closure1_slot3;
                                                    var29 = var26[var10];
                                                    var30 = var31.bind(var0)(var29);
                                                    var29 = var30.hasFlag;
                                                    var27 = var27.flags;
                                                    var26 = var26[var9];
                                                    var26 = var31.bind(var0)(var26);
                                                    var26 = var26.ApplicationCollectionItemFlags;
                                                    var26 = var26.PROMOTED;
                                                    var26 = var29.bind(var30)(var27, var26);
                                                    var25.showsPromoted = var26;
                                                    var25.overrideImageUrl = var24;
                                                    var1 = var24;
                                                    var21 = var25;
                                                case 927:
                                                    var26 = _closure4_slot0;
                                                    var25 = var26.push;
                                                    var24 = {};
                                                    var29 = _closure1_slot0;
                                                    var27 = _closure1_slot3;
                                                    var27 = var27[var15];
                                                    var27 = var29.bind(var0)(var27);
                                                    var27 = var27.AppLauncherHomeListItemType;
                                                    var27 = var27.RECOMMENDATION_TUPLE;
                                                    var24.type = var27;
                                                    var27 = var19.title;
                                                    var24.sectionName = var27;
                                                    var24.sectionOverallPosition = var18;
                                                    var24.item1 = var22;
                                                    var24.item2 = var21;
                                                    var29 = var17.length;
                                                    var27 = var13 + var12;
                                                    var27 = var27 >= var29;
                                                    var24.isLastTuple = var27;
                                                    var24.item1SectionPosition = var13;
                                                    var29 = var11 != var21;
                                                    var27 = undefined;
                                                    if (!var29) {
                                                        _fun107560_ip = 1033;
                                                        continue _fun107560
                                                    }
                                                case 1030:
                                                    var27 = var28;
                                                case 1033:
                                                    var24.item2SectionPosition = var27;
                                                    var24 = var25.bind(var26)(var24);
                                                    var5 = var23;
                                                    var4 = var22;
                                                    var3 = var21;
                                                    var20 = var1;
                                                case 1057:
                                                    var13 = var13 + var12;
                                                    var1 = var17.length;
                                                    var2 = var20;
                                                    if (var13 < var1) {
                                                        _fun107560_ip = 484;
                                                        continue _fun107560
                                                    }
                                                case 1076:
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        _fun107559_ip = 47;
                                        continue _fun107559;
                                    case 43:
                                        var0 = new Array(0);
                                    case 47:
                                        return var0;
                                }
                            };
                            var14 = var14.bind(var16)(var11, var12);
                            _closure3_slot16 = var14;
                            var12 = _closure1_slot5;
                            var11 = var12.useMemo;
                            var10 = new Array(3);
                            var10[0] = var15;
                            var10[1] = var14;
                            var10[2] = var13;
                            var0 = function() { // Environment: var0
                                _fun107563: for (var _fun107563_ip = 0;;) switch (_fun107563_ip) {
                                    case 0:
                                        var1 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var0 = 19;
                                        var0 = var3[var0];
                                        var4 = undefined;
                                        var5 = var1.bind(var4)(var0);
                                        var3 = var5.appLauncherShowsRecommendations;
                                        var1 = _closure3_slot1;
                                        var1 = var3.bind(var5)(var1);
                                        if (var1) {
                                            _fun107563_ip = 65;
                                            continue _fun107563
                                        }
                                    case 46:
                                        var7 = _closure3_slot11;
                                        var1 = new Array(0);
                                        var6 = 0;
                                        var8 = var1;
                                        var3 = arraySpread(var8, var7, var6);
                                        return var1;
                                    case 65:
                                        var1 = {};
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot3;
                                        var2 = 44;
                                        var2 = var5[var2];
                                        var2 = var3.bind(var4)(var2);
                                        var2 = var2.AppLauncherHomeListItemType;
                                        var2 = var2.LEARN_MORE;
                                        var1.type = var2;
                                        var7 = _closure3_slot16;
                                        var0 = new Array(1);
                                        var6 = 0;
                                        var8 = var0;
                                        var2 = arraySpread(var8, var7, var6);
                                        var0[var2] = var1;
                                        var1 = 1;
                                        var1 = var2 + var1;
                                        return var0;
                                }
                            };
                            var10 = var11.bind(var12)(var0, var10);
                            var0 = {};
                            var0.list = var10;
                            var0.frecencyCommands = var9;
                            var0.frecencyUsedAppList = var8;
                            var0.sectionDescriptors = var7;
                            var0.loading = var6;
                            var0.hasNoCommands = var4;
                            var4 = 0;
                            var4 = var4 === var5;
                            var0.hasNoShelfItems = var4;
                            var0.showsEmptyState = var3;
                            var0.showNoPermsState = var2;
                            var0.inThisServerItems = var1;
                            return var0;
                    }
                };
                var4 = var4.bind(var3)(var5);
                var25 = var4.list;
                var _closure2_slot15 = var25;
                var47 = var4.frecencyCommands;
                var _closure2_slot16 = var47;
                var45 = var4.frecencyUsedAppList;
                var _closure2_slot17 = var45;
                var48 = var4.sectionDescriptors;
                var _closure2_slot18 = var48;
                var46 = var4.loading;
                var38 = var4.showsEmptyState;
                var35 = var4.showNoPermsState;
                var43 = var4.inThisServerItems;
                var _closure2_slot19 = var43;
                var4 = {};
                var4.entrypoint = var7;
                var26 = var4.entrypoint;
                var4 = 36;
                var4 = var13[var4];
                var5 = var10.bind(var3)(var4);
                var4 = var5.useFontScale;
                var24 = var4.bind(var5)();
                var4 = {};
                var12 = 37;
                var5 = var13[var12];
                var5 = var10.bind(var3)(var5);
                var5 = var5.AppLauncherEntrypoint;
                var8 = var5.VOICE;
                var5 = 120;
                if (!(var26 !== var8)) {
                    _fun107531_ip = 638;
                    continue _fun107531
                }
            case 631:
                var8 = 24;
                var5 = var8 * var24;
            case 638:
                var4.estimatedItemSize = var5;
                var24 = var4.estimatedItemSize;
                var26 = _closure1_slot5;
                var8 = var26.useCallback;
                var5 = new Array(4);
                var5[0] = var17;
                var5[1] = var7;
                var5[2] = var21;
                var5[3] = var48;
                var4 = function(arg0) { // Environment: var41
                    _fun107564: for (var _fun107564_ip = 0;;) switch (_fun107564_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.application;
                            var _closure3_slot0 = var4;
                            var5 = var0.sectionName;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 19;
                            var3 = var3[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isEmbeddedApp;
                            var3 = var3.bind(var6)(var4);
                            var6 = !var3;
                            if (!var6) {
                                _fun107564_ip = 92;
                                continue _fun107564
                            }
                        case 62:
                            var7 = _closure2_slot18;
                            var3 = var7.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure3_slot0;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var3.bind(var7)(var2);
                            var2 = null;
                            var6 = var2 != var3;
                        case 92:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var1 = 23;
                            var1 = var9[var1];
                            var3 = var8.bind(var0)(var1);
                            var2 = var3.handleApplicationSelected;
                            var1 = {};
                            var7 = 29;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.ApplicationCommandTriggerLocations;
                            var7 = var7.APP_LAUNCHER_HOME;
                            var1.location = var7;
                            var1.application = var4;
                            var7 = _closure2_slot2;
                            var1.navigation = var7;
                            var7 = _closure2_slot0;
                            var1.context = var7;
                            var6 = !var6;
                            var1.installOnDemand = var6;
                            var1.sectionName = var5;
                            var4 = _closure2_slot10;
                            var1.entrypoint = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var42 = var8.bind(var26)(var4, var5);
                var _closure2_slot20 = var42;
                var4 = 43;
                var4 = var13[var4];
                var5 = var10.bind(var3)(var4);
                var4 = var5.useClickOnHomeActivityOpensAppDetails;
                var26 = var4.bind(var5)();
                var _closure2_slot21 = var26;
                var8 = _closure1_slot5;
                var5 = var8.useCallback;
                var4 = new Array(14);
                var4[0] = var26;
                var4[1] = var17;
                var4[2] = var7;
                var4[3] = var23;
                var4[4] = var22;
                var22 = var25.length;
                var4[5] = var22;
                var4[6] = var21;
                var4[7] = var20;
                var4[8] = var19;
                var4[9] = var18;
                var4[10] = var42;
                var4[11] = var9;
                var9 = var40.sectionHeader;
                var4[12] = var9;
                var4[13] = var2;
                var2 = function(arg0) { // Environment: var41
                    _fun107566: for (var _fun107566_ip = 0;;) switch (_fun107566_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var _closure3_slot0 = var5;
                            var6 = var0.index;
                            var4 = var5.type;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var8 = 44;
                            var2 = var2[var8];
                            var3 = undefined;
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.PLACEHOLDER;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 1405;
                                continue _fun107566
                            }
                        case 68:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.SECTION_HEADER;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 1296;
                                continue _fun107566
                            }
                        case 104:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.SHELF_ITEM;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 1220;
                                continue _fun107566
                            }
                        case 140:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.SHELF_ITEM_TUPLE;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 1014;
                                continue _fun107566
                            }
                        case 176:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.RECOMMENDATION_TUPLE;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 912;
                                continue _fun107566
                            }
                        case 212:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.APP;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 824;
                                continue _fun107566
                            }
                        case 248:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.RECOMMENDATION_SECTION_HEADER;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 793;
                                continue _fun107566
                            }
                        case 284:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.RECOMMENDATION_BANNER_CARD;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 678;
                                continue _fun107566
                            }
                        case 320:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.RECOMMENDATION_APP;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 580;
                                continue _fun107566
                            }
                        case 356:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.VIEW_ALL;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 535;
                                continue _fun107566
                            }
                        case 392:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.DIVIDER_ITEM;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 517;
                                continue _fun107566
                            }
                        case 425:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var8];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AppLauncherHomeListItemType;
                            var2 = var2.LEARN_MORE;
                            if (!(var2 !== var4)) {
                                _fun107566_ip = 462;
                                continue _fun107566
                            }
                        case 458:
                            var2 = null;
                            return var2;
                        case 462:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 51;
                            var2 = var8[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = {};
                            var9 = _closure2_slot4;
                            var8 = var9.valueOf;
                            var8 = var8.bind(var9)();
                            var2.visible = var8;
                            var2 = var7.bind(var3)(var4, var2);
                            return var2;
                        case 517:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot35;
                            var2 = {};
                            var2 = var7.bind(var3)(var4, var2);
                            return var2;
                        case 535:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 48;
                            var2 = var8[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = {};
                            var8 = function() {
                                var4 = _closure3_slot0;
                                var2 = var4.applications;
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var5
                                    var0 = arg0;
                                    return var0;
                                };
                                var7 = var1.bind(var2)(var0);
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var0 = 23;
                                var1 = var9[var0];
                                var0 = undefined;
                                var3 = var8.bind(var0)(var1);
                                var2 = var3.handleViewAllSelected;
                                var1 = {};
                                var6 = 29;
                                var6 = var9[var6];
                                var6 = var8.bind(var0)(var6);
                                var6 = var6.ApplicationCommandTriggerLocations;
                                var6 = var6.APP_LAUNCHER_HOME;
                                var1.location = var6;
                                var10 = _closure2_slot2;
                                var1.navigation = var10;
                                var6 = _closure2_slot0;
                                var1.context = var6;
                                var6 = var4.sectionName;
                                var1.sectionName = var6;
                                var6 = var4.sectionOverallPosition;
                                var1.sectionOverallPosition = var6;
                                var1.applications = var7;
                                var6 = 49;
                                var6 = var9[var6];
                                var6 = var8.bind(var0)(var6);
                                var6 = var6.SectionItemType;
                                var6 = var6.APPS;
                                var1.sectionItemType = var6;
                                var6 = new Array(0);
                                var1.commands = var6;
                                var6 = var7.map;
                                var5 = function(arg0) { // Environment: var5
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 50;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.getApplicationCommandSection;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var5 = var6.bind(var7)(var5);
                                var1.sectionDescriptors = var5;
                                var5 = var4.title;
                                var1.title = var5;
                                var4 = var4.promotedApplicationIds;
                                var1.promotedApplicationIds = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2.onPress = var8;
                            var2 = var7.bind(var3)(var4, var2);
                            return var2;
                        case 580:
                            var8 = _closure1_slot20;
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 47;
                            var2 = var7[var2];
                            var7 = var4.bind(var3)(var2);
                            var4 = {};
                            var2 = var5.application;
                            var4.application = var2;
                            var2 = var5.isFirstRow;
                            var4.isFirstRow = var2;
                            var2 = var5.isLastRow;
                            var4.isLastRow = var2;
                            var2 = function() {
                                var2 = _closure2_slot20;
                                var1 = {};
                                var0 = _closure3_slot0;
                                var3 = var0.application;
                                var1.application = var3;
                                var0 = var0.sectionName;
                                var1.sectionName = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4.onPress = var2;
                            var2 = var5.showsPromoted;
                            var4.showsPromoted = var2;
                            var2 = var5.application;
                            var2 = var2.id;
                            var2 = var8.bind(var3)(var7, var4, var2);
                            return var2;
                        case 678:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var2 = 46;
                            var2 = var8[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = {};
                            var8 = var5.item;
                            var8 = var8.application;
                            var2.application = var8;
                            var8 = var5.isFirst;
                            var2.isFirst = var8;
                            var8 = var5.isLast;
                            var2.isLast = var8;
                            var8 = function() {
                                var2 = _closure2_slot20;
                                var1 = {};
                                var0 = _closure3_slot0;
                                var3 = var0.item;
                                var3 = var3.application;
                                var1.application = var3;
                                var0 = var0.sectionName;
                                var1.sectionName = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var8;
                            var8 = _closure2_slot12;
                            var2.isLandscape = var8;
                            var8 = var5.showsPromoted;
                            var2.showsPromoted = var8;
                            var8 = var5.overrideImageUrl;
                            var2.overrideImageUrl = var8;
                            var2 = var7.bind(var3)(var4, var2);
                            return var2;
                        case 793:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot36;
                            var2 = {};
                            var2.index = var6;
                            var8 = var5.section;
                            var2.children = var8;
                            var2 = var7.bind(var3)(var4, var2);
                            return var2;
                        case 824:
                            var8 = _closure1_slot20;
                            var7 = _closure1_slot29;
                            var4 = {};
                            var2 = var5.section;
                            var4.section = var2;
                            var2 = function() {
                                var3 = _closure2_slot13;
                                var0 = _closure3_slot0;
                                var2 = var0.section;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 37;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.AppLauncherSectionName;
                                var1 = var1.INSTALLED;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var4.onPress = var2;
                            var2 = var5.isFirstRow;
                            var4.isFirstRow = var2;
                            var2 = var5.isLastRow;
                            var4.isLastRow = var2;
                            var2 = {};
                            var9 = _closure2_slot6;
                            var2.height = var9;
                            var4.style = var2;
                            var2 = var5.section;
                            var2 = var2.id;
                            var2 = var8.bind(var3)(var7, var4, var2);
                            return var2;
                        case 912:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot33;
                            var2 = {};
                            var9 = _closure2_slot0;
                            var2.context = var9;
                            var9 = var5.sectionName;
                            var2.sectionName = var9;
                            var9 = function arg0, arg1() {
                                var2 = _closure2_slot20;
                                var1 = {};
                                var0 = arg0;
                                var1.application = var0;
                                var0 = arg1;
                                var1.sectionName = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var9;
                            var9 = var5.item1;
                            var2.item1 = var9;
                            var9 = var5.item2;
                            var2.item2 = var9;
                            var9 = var5.isLastTuple;
                            var2.isLastTuple = var9;
                            var9 = _closure2_slot10;
                            var2.entrypoint = var9;
                            var8 = _closure2_slot9;
                            var2.containerWidth = var8;
                            var2 = var7.bind(var3)(var4, var2);
                            return var2;
                        case 1014:
                            var8 = _closure1_slot20;
                            var7 = _closure1_slot31;
                            var4 = {};
                            var9 = _closure2_slot0;
                            var4.context = var9;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var13 = 37;
                            var9 = var9[var13];
                            var9 = var10.bind(var3)(var9);
                            var9 = var9.AppLauncherSectionName;
                            var9 = var9.ACTIVITIES;
                            var4.sectionName = var9;
                            var9 = function arg0() {
                                _fun107568: for (var _fun107568_ip = 0;;) switch (_fun107568_ip) {
                                    case 0:
                                        var2 = _closure2_slot14;
                                        var1 = {};
                                        var0 = arg0;
                                        var1.shelfData = var0;
                                        var0 = _closure3_slot0;
                                        var0 = var0.sectionName;
                                        var1.sectionName = var0;
                                        var0 = _closure2_slot21;
                                        var4 = !var0;
                                        var0 = !var4;
                                        if (!var4) {
                                            _fun107568_ip = 93;
                                            continue _fun107568
                                        }
                                    case 48:
                                        var4 = _closure2_slot10;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot3;
                                        var3 = 37;
                                        var5 = var5[var3];
                                        var3 = undefined;
                                        var3 = var6.bind(var3)(var5);
                                        var3 = var3.AppLauncherEntrypoint;
                                        var3 = var3.VOICE;
                                        var0 = var4 !== var3;
                                    case 93:
                                        var1.navigates = var0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var4.onPress = var9;
                            var9 = _closure2_slot21;
                            var9 = !var9;
                            if (!var9) {
                                _fun107566_ip = 1130;
                                continue _fun107566
                            }
                        case 1093:
                            var11 = _closure2_slot10;
                            var12 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var10 = var10[var13];
                            var10 = var12.bind(var3)(var10);
                            var10 = var10.AppLauncherEntrypoint;
                            var10 = var10.VOICE;
                            var9 = var11 === var10;
                        case 1130:
                            var4.usesHandleActivityItemSelected = var9;
                            var9 = _closure2_slot11;
                            var4.onActivityItemSelected = var9;
                            var9 = var5.shelfItem1;
                            var4.shelfItem1 = var9;
                            var9 = var5.shelfItem2;
                            var4.shelfItem2 = var9;
                            var9 = var5.isLastTuple;
                            var4.isLastTuple = var9;
                            var9 = _closure2_slot10;
                            var4.entrypoint = var9;
                            var2 = _closure2_slot9;
                            var4.containerWidth = var2;
                            var2 = var5.shelfItem1;
                            var2 = var2.application;
                            var2 = var2.id;
                            var2 = var8.bind(var3)(var7, var4, var2);
                            return var2;
                        case 1220:
                            var7 = _closure1_slot20;
                            var4 = _closure1_slot30;
                            var2 = {};
                            var8 = var5.section;
                            var2.section = var8;
                            var1 = function arg0() {
                                var2 = _closure2_slot14;
                                var1 = {};
                                var0 = arg0;
                                var1.shelfData = var0;
                                var0 = _closure3_slot0;
                                var0 = var0.sectionName;
                                var1.sectionName = var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var1;
                            var1 = var5.isFirstRow;
                            var2.isFirstRow = var1;
                            var1 = var5.isLastRow;
                            var2.isLastRow = var1;
                            var1 = var5.section;
                            var1 = var1.application;
                            var1 = var1.id;
                            var1 = var7.bind(var3)(var4, var2, var1);
                            return var1;
                        case 1296:
                            var4 = _closure1_slot20;
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 16;
                            var1 = var7[var1];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'variant': 'text-lg/bold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var7 = _closure2_slot5;
                            var8 = var7.sectionHeader;
                            var7 = new Array(2);
                            var7[0] = var8;
                            var9 = 0;
                            var8 = null;
                            if (!(var9 !== var6)) {
                                _fun107566_ip = 1380;
                                continue _fun107566
                            }
                        case 1368:
                            var9 = {};
                            var10 = 24;
                            var9.marginTop = var10;
                            var8 = var9;
                        case 1380:
                            var7[1] = var8;
                            var1.style = var7;
                            var5 = var5.section;
                            var1.children = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        case 1405:
                            var2 = _closure1_slot20;
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 45;
                            var0 = var4[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var4 = 0;
                            var4 = var4 === var6;
                            var0.isFirstRow = var4;
                            var4 = _closure2_slot15;
                            var7 = var4.length;
                            var4 = 1;
                            var4 = var7 - var4;
                            var4 = var6 === var4;
                            var0.isLastRow = var4;
                            var4 = {};
                            var5 = _closure2_slot6;
                            var4.height = var5;
                            var0.style = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var27 = var5.bind(var8)(var2, var4);
                var4 = _closure1_slot5;
                var2 = var4.useRef;
                var34 = null;
                var18 = var2.bind(var4)(var34);
                var _closure2_slot22 = var18;
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var22 = false;
                var4 = var2.bind(var4)(var22);
                var2 = _closure1_slot4;
                var9 = 2;
                var5 = var2.bind(var3)(var4, var9);
                var4 = 0;
                var8 = var5[var4];
                var2 = 1;
                var5 = var5[var2];
                var _closure2_slot23 = var5;
                var21 = _closure1_slot5;
                var20 = var21.useMemo;
                var19 = new Array(1);
                var19[0] = var7;
                var5 = function() { // Environment: var41
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 52;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.debounce;
                    var2 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 53;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot17;
                        var2 = var1.APP_LAUNCHER_SEARCH_QUERY_TYPED;
                        var1 = {};
                        var5 = arg0;
                        var1.query = var5;
                        var5 = _closure2_slot10;
                        var1.source = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = 400;
                    var0 = {
                        'leading': false,
                        'trailing': true
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var5 = var20.bind(var21)(var5, var19);
                var _closure2_slot24 = var5;
                var20 = _closure1_slot5;
                var19 = var20.useRef;
                var19 = var19.bind(var20)(var34);
                var _closure2_slot25 = var19;
                var23 = _closure1_slot5;
                var21 = var23.useEffect;
                var20 = function() { // Environment: var41
                    var0 = function() { // Environment: var0
                        _fun107579: for (var _fun107579_ip = 0;;) switch (_fun107579_ip) {
                            case 0:
                                var0 = _closure2_slot25;
                                var1 = var0.current;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun107579_ip = 28;
                                    continue _fun107579
                                }
                            case 18:
                                var0 = var1.cancel;
                                var0 = var0.bind(var1)();
                            case 28:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var19 = new Array(0);
                var19 = var21.bind(var23)(var20, var19);
                var21 = _closure1_slot5;
                var20 = var21.useCallback;
                var19 = new Array(1);
                var19[0] = var5;
                var5 = function(arg0) { // Environment: var41
                    _fun107580: for (var _fun107580_ip = 0;;) switch (_fun107580_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var5 = _closure2_slot23;
                            var6 = var2.length;
                            var0 = undefined;
                            var4 = 0;
                            var4 = var4 !== var6;
                            var4 = var5.bind(var0)(var4);
                            var4 = _closure2_slot25;
                            var5 = var4.current;
                            var4 = null;
                            if (!(var4 != var5)) {
                                _fun107580_ip = 59;
                                continue _fun107580
                            }
                        case 49:
                            var4 = var5.cancel;
                            var4 = var4.bind(var5)();
                        case 59:
                            var4 = _closure2_slot25;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var5 = 54;
                            var5 = var7[var5];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.runAfterInteractions;
                            var5 = function() { // Environment: var3
                                _fun107581: for (var _fun107581_ip = 0;;) switch (_fun107581_ip) {
                                    case 0:
                                        var0 = _closure2_slot22;
                                        var2 = var0.current;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun107581_ip = 36;
                                            continue _fun107581
                                        }
                                    case 18:
                                        var1 = var2.setQuery;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                    case 36:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = 100;
                            var3 = var6.bind(var7)(var5, var3);
                            var4.current = var3;
                            var1 = _closure2_slot24;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var50 = var20.bind(var21)(var5, var19);
                var _closure2_slot26 = var50;
                var19 = _closure1_slot5;
                var5 = var19.useRef;
                var5 = var5.bind(var19)(var50);
                var _closure2_slot27 = var5;
                var21 = _closure1_slot5;
                var20 = var21.useEffect;
                var19 = new Array(1);
                var19[0] = var50;
                var5 = function() { // Environment: var41
                    var1 = _closure2_slot27;
                    var0 = _closure2_slot26;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var20.bind(var21)(var5, var19);
                var21 = _closure1_slot5;
                var20 = var21.useCallback;
                var19 = new Array(1);
                var19[0] = var7;
                var5 = function() { // Environment: var41
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 53;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot17;
                    var2 = var1.APP_LAUNCHER_SEARCH_FOCUSED;
                    var1 = {};
                    var5 = _closure2_slot10;
                    var1.source = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5 = var20.bind(var21)(var5, var19);
                var _closure2_slot28 = var5;
                var5 = 55;
                var5 = var13[var5];
                var13 = var10.bind(var3)(var5);
                var10 = var13.usePinnedSearchBarBottomBorder;
                var5 = {};
                var19 = 'home-scroller';
                if (!var8) {
                    _fun107531_ip = 1109;
                    continue _fun107531
                }
            case 1103:
                var19 = 'search-scroller';
            case 1109:
                var5.key = var19;
                var19 = 5;
                var5.triggerScrollHeight = var19;
                var33 = var10.bind(var13)(var5);
                _closure2_slot29 = var33;
                var10 = _closure1_slot5;
                var5 = var10.useRef;
                var52 = var5.bind(var10)(var34);
                _closure2_slot30 = var52;
                var13 = _closure1_slot5;
                var10 = var13.useLayoutEffect;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var41
                    _fun107584: for (var _fun107584_ip = 0;;) switch (_fun107584_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107584_ip = 82;
                                continue _fun107584
                            }
                        case 13:
                            var2 = _closure2_slot30;
                            var4 = var2.current;
                            if (!(var1 != var4)) {
                                _fun107584_ip = 41;
                                continue _fun107584
                            }
                        case 26:
                            var3 = var4.setText;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var4)(var2);
                        case 41:
                            var2 = _closure2_slot30;
                            var2 = var2.current;
                            if (!(var1 != var2)) {
                                _fun107584_ip = 64;
                                continue _fun107584
                            }
                        case 54:
                            var1 = var2.focus;
                            var1 = var1.bind(var2)();
                        case 64:
                            var2 = _closure2_slot27;
                            var1 = var2.current;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 82:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var10.bind(var13)(var0, var5);
                var0 = _closure1_slot15;
                var1 = var1 + var0;
                _closure2_slot31 = var1;
                var51 = _closure1_slot0;
                var23 = _closure1_slot3;
                var0 = 56;
                var0 = var23[var0];
                var5 = var51.bind(var3)(var0);
                var0 = var5.useBottomSheetFlashListBottomViewabilityInset;
                var0 = var0.bind(var5)();
                var19 = var0.flashListRef;
                var20 = var0.bottomVisibilityInsetRef;
                var5 = _closure1_slot1;
                var0 = 57;
                var0 = var23[var0];
                var13 = var5.bind(var3)(var0);
                var10 = {};
                var0 = 58;
                var5 = var23[var0];
                var5 = var51.bind(var3)(var5);
                var5 = var5.ImpressionTypes;
                var5 = var5.VIEW;
                var10.type = var5;
                var0 = var23[var0];
                var0 = var51.bind(var3)(var0);
                var0 = var0.ImpressionNames;
                var0 = var0.APP_LAUNCHER_HOME_ACTIVITY_ITEM;
                var10.name = var0;
                var5 = {};
                var0 = !var16;
                var5.disableTrack = var0;
                var0 = new Array(1);
                var0[0] = var16;
                var0 = var13.bind(var3)(var10, var5, var0);
                var5 = _closure1_slot5;
                var0 = var5.useState;
                var5 = var0.bind(var5)(var22);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var5, var9);
                var37 = var0[var4];
                var0 = var0[var2];
                _closure2_slot32 = var0;
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var2 = function() { // Environment: var41
                    var2 = _closure2_slot32;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var5)(var2, var0);
                var0 = 28;
                var0 = var23[var0];
                var5 = var51.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot14;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var41
                    var1 = _closure1_slot14;
                    var0 = var1.getTriggeredOnboardingContentMetadata;
                    var0 = var0.bind(var1)();
                    var0 = var0.willShowGlobalSearchOnboarding;
                    return var0;
                };
                var10 = var4.bind(var5)(var2, var0);
                _closure2_slot33 = var10;
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function(arg0) { // Environment: var41
                    _fun107587: for (var _fun107587_ip = 0;;) switch (_fun107587_ip) {
                        case 0:
                            var0 = arg0;
                            var8 = var0.actionType;
                            var0 = _closure2_slot33;
                            if (!var0) {
                                _fun107587_ip = 147;
                                continue _fun107587
                            }
                        case 22:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 59;
                            var0 = var4[var0];
                            var1 = undefined;
                            var7 = var2.bind(var1)(var0);
                            var6 = var7.UNSAFE_markDismissibleContentAsDismissed;
                            var0 = 60;
                            var0 = var4[var0];
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.DismissibleContent;
                            var5 = var0.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
                            var0 = {};
                            var0.dismissAction = var8;
                            var0 = var6.bind(var7)(var5, var0);
                            var0 = 61;
                            var0 = var4[var0];
                            var2 = var2.bind(var1)(var0);
                            var1 = var2.setTriggeredOnboardingContentMetadata;
                            var0 = {};
                            var4 = _closure1_slot14;
                            var3 = var4.getTriggeredOnboardingContentMetadata;
                            var9 = var3.bind(var4)();
                            var10 = var0;
                            var3 = copyDataProperties(var10, var9);
                            var4 = false;
                            var3 = 'willShowGlobalSearchOnboarding';
                            var0[var3] = var4;
                            var0 = var1.bind(var2)(var0);
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var4.bind(var5)(var0, var2);
                _closure2_slot34 = var9;
                var0 = 62;
                var0 = var23[var0];
                var2 = var51.bind(var3)(var0);
                var0 = var2.useTrackAppLauncherHomeItemImpression;
                var0 = var0.bind(var2)();
                var0 = var0.trackAppLauncherHomeItemImpression;
                _closure2_slot35 = var0;
                var13 = _closure1_slot5;
                var5 = var13.useMemo;
                var4 = new Array(2);
                var4[0] = var1;
                var2 = var40.list;
                var4[1] = var2;
                var2 = function() { // Environment: var41
                    var0 = {};
                    var2 = _closure2_slot5;
                    var3 = var2.list;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot31;
                    var1 = 'paddingBottom';
                    var0[var1] = var2;
                    return var0;
                };
                var29 = var5.bind(var13)(var2, var4);
                var5 = _closure1_slot5;
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var41
                    var0 = {};
                    var1 = _closure2_slot31;
                    var0.bottom = var1;
                    return var0;
                };
                var28 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = function(arg0) { // Environment: var41
                    var0 = arg0;
                    var0 = var0.type;
                    return var0;
                };
                var1 = new Array(0);
                var26 = var4.bind(var5)(var2, var1);
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var33;
                var1 = function(arg0) { // Environment: var41
                    var2 = _closure2_slot29;
                    var1 = var2.scrollHandler;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var13 = var4.bind(var5)(var1, var2);
                _closure2_slot36 = var13;
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function(arg0) { // Environment: var41
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var2 = {};
                    var1 = var0.layoutMeasurement;
                    var1 = var1.width;
                    var2.width = var1;
                    var1 = var0.layoutMeasurement;
                    var1 = var1.height;
                    var2.height = var1;
                    var1 = var0.contentOffset;
                    var1 = var1.y;
                    var2.offset = var1;
                    var1 = var0.contentSize;
                    var1 = var1.width;
                    var2.contentWidth = var1;
                    var0 = var0.contentSize;
                    var0 = var0.height;
                    var2.contentHeight = var0;
                    var1 = _closure2_slot36;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var16 = var4.bind(var5)(var1, var2);
                var5 = 63;
                var1 = var23[var5];
                var4 = var51.bind(var3)(var1);
                var2 = var4.useAppLauncherFlashListProps;
                var1 = {};
                var1.onScrollHandler = var13;
                var13 = var2.bind(var4)(var1);
                var4 = _closure1_slot5;
                var2 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var14;
                var1[1] = var0;
                var0 = function() { // Environment: var41
                    var1 = {};
                    var0 = {};
                    var1.viewabilityConfig = var0;
                    var0 = _closure2_slot3;
                    var1.onViewableItemsChanged = var0;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var3 = _closure1_slot16;
                    var1.viewabilityConfig = var3;
                    var2 = _closure2_slot35;
                    var1.onViewableItemsChanged = var2;
                    var0[1] = var1;
                    return var0;
                };
                var21 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot21;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var40.container;
                var0.style = var4;
                var30 = _closure1_slot20;
                var14 = _closure1_slot6;
                var4 = {};
                var31 = var40.topBackgroundFill;
                var4.style = var31;
                var14 = var30.bind(var3)(var14, var4);
                var4 = new Array(4);
                var4[0] = var14;
                var31 = _closure1_slot21;
                var30 = _closure1_slot22;
                var14 = {};
                var39 = _closure1_slot20;
                var36 = _closure1_slot6;
                var32 = {};
                var40 = var40.searchBarContainer;
                var32.style = var40;
                var49 = _closure1_slot20;
                var40 = 64;
                var40 = var23[var40];
                var40 = var51.bind(var3)(var40);
                var44 = var40.SearchField;
                var40 = {};
                var40.ref = var52;
                var23 = var23[var12];
                var23 = var51.bind(var3)(var23);
                var23 = var23.AppLauncherEntrypoint;
                var23 = var23.VOICE;
                if (!(var7 !== var23)) {
                    _fun107531_ip = 1922;
                    continue _fun107531
                }
            case 1863:
                var53 = _closure1_slot0;
                var54 = _closure1_slot3;
                var23 = 17;
                var51 = var54[var23];
                var51 = var53.bind(var3)(var51);
                var52 = var51.intl;
                var51 = var52.string;
                var23 = var54[var23];
                var23 = var53.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.ziyFv2;
                var23 = var51.bind(var52)(var23);
                _fun107531_ip = 1979;
                continue _fun107531;
            case 1922:
                var54 = _closure1_slot0;
                var55 = _closure1_slot3;
                var51 = 17;
                var52 = var55[var51];
                var52 = var54.bind(var3)(var52);
                var53 = var52.intl;
                var52 = var53.string;
                var51 = var55[var51];
                var51 = var54.bind(var3)(var51);
                var51 = var51.t;
                var51 = var51["pw+r5b"];
                var23 = var52.bind(var53)(var51);
            case 1979:
                var40.placeholder = var23;
                var23 = true;
                var40.isRound = var23;
                var51 = 'md';
                var40.size = var51;
                var40.onChange = var50;
                var50 = function() {
                    var2 = _closure2_slot28;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot34;
                    var1 = {};
                    var3 = _closure1_slot19;
                    var3 = var3.TAKE_ACTION;
                    var1.actionType = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var40.onFocus = var50;
                var40 = var49.bind(var3)(var44, var40);
                var32.children = var40;
                var36 = var39.bind(var3)(var36, var32);
                var32 = new Array(2);
                var32[0] = var36;
                var33 = var33.bottomBorderComponent;
                var32[1] = var33;
                var14.children = var32;
                var14 = var31.bind(var3)(var30, var14);
                var4[1] = var14;
                var14 = _closure1_slot20;
                if (var8) {
                    _fun107531_ip = 2502;
                    continue _fun107531
                }
            case 2074:
                var39 = _closure1_slot1;
                var44 = _closure1_slot3;
                var5 = var44[var5];
                var8 = var39.bind(var3)(var5);
                var5 = {};
                var32 = _closure1_slot21;
                var31 = _closure1_slot22;
                var30 = {};
                var40 = _closure1_slot20;
                var33 = 49;
                var33 = var44[var33];
                var36 = var39.bind(var3)(var33);
                var33 = {};
                var33.context = var17;
                var33.sectionDescriptors = var48;
                var33.commands = var47;
                var33.loading = var46;
                var33.apps = var45;
                var33.onAppSelected = var42;
                var45 = function arg0, arg1() {
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var0 = 23;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.handleApplicationCommandSelected;
                    var1 = {};
                    var4 = 29;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.ApplicationCommandTriggerLocations;
                    var4 = var4.APP_LAUNCHER_HOME;
                    var1.location = var4;
                    var5 = _closure2_slot0;
                    var1.context = var5;
                    var5 = arg0;
                    var1.command = var5;
                    var5 = arg1;
                    var1.section = var5;
                    var5 = _closure2_slot18;
                    var1.sectionDescriptors = var5;
                    var5 = '';
                    var1.query = var5;
                    var5 = _closure2_slot2;
                    var1.navigation = var5;
                    var5 = 37;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.AppLauncherSectionName;
                    var5 = var5.RECENT_COMMANDS;
                    var1.sectionName = var5;
                    var4 = _closure2_slot10;
                    var1.entrypoint = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var33.onCommandSelected = var45;
                var45 = function arg0() {
                    _fun107596: for (var _fun107596_ip = 0;;) switch (_fun107596_ip) {
                        case 0:
                            var6 = arg0;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var0 = 23;
                            var1 = var7[var0];
                            var0 = undefined;
                            var3 = var9.bind(var0)(var1);
                            var2 = var3.handleViewAllSelected;
                            var1 = {};
                            var4 = 29;
                            var4 = var7[var4];
                            var4 = var9.bind(var0)(var4);
                            var4 = var4.ApplicationCommandTriggerLocations;
                            var4 = var4.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                            var1.location = var4;
                            var8 = _closure2_slot2;
                            var1.navigation = var8;
                            var8 = _closure2_slot0;
                            var1.context = var8;
                            var8 = 49;
                            var7 = var7[var8];
                            var7 = var9.bind(var0)(var7);
                            var7 = var7.SectionItemType;
                            var9 = var7.COMMANDS;
                            var7 = 'recent_apps_view_more';
                            if (!(var6 === var9)) {
                                _fun107596_ip = 124;
                                continue _fun107596
                            }
                        case 118:
                            var7 = 'recent_commands_view_more';
                        case 124:
                            var1.sectionName = var7;
                            var10 = _closure2_slot17;
                            var9 = var10.map;
                            var7 = function(arg0) { // Environment: var7
                                _fun107597: for (var _fun107597_ip = 0;;) switch (_fun107597_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.section;
                                        var0 = null;
                                        var2 = var0 == var1;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun107597_ip = 24;
                                            continue _fun107597
                                        }
                                    case 19:
                                        var0 = var1.application;
                                    case 24:
                                        return var0;
                                }
                            };
                            var12 = var9.bind(var10)(var7);
                            var11 = var12.filter;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var7 = 66;
                            var7 = var10[var7];
                            var7 = var9.bind(var0)(var7);
                            var7 = var7.isNotNullish;
                            var7 = var11.bind(var12)(var7);
                            var1.applications = var7;
                            var1.sectionItemType = var6;
                            var7 = _closure2_slot16;
                            var1.commands = var7;
                            var7 = _closure2_slot18;
                            var1.sectionDescriptors = var7;
                            var7 = _closure2_slot10;
                            var4 = 37;
                            var4 = var10[var4];
                            var4 = var9.bind(var0)(var4);
                            var4 = var4.AppLauncherEntrypoint;
                            var4 = var4.VOICE;
                            if (!(var7 !== var4)) {
                                _fun107596_ip = 402;
                                continue _fun107596
                            }
                        case 251:
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var4 = var4[var8];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.SectionItemType;
                            var4 = var4.COMMANDS;
                            if (!(var6 !== var4)) {
                                _fun107596_ip = 343;
                                continue _fun107596
                            }
                        case 284:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var4 = 17;
                            var6 = var9[var4];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.SCViVk;
                            var4 = var6.bind(var7)(var4);
                            _fun107596_ip = 400;
                            continue _fun107596;
                        case 343:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var6 = 17;
                            var7 = var10[var6];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.V3Sq95;
                            var4 = var7.bind(var8)(var6);
                        case 400:
                            _fun107596_ip = 459;
                            continue _fun107596;
                        case 402:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var5 = 17;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5["2pFD8L"];
                            var4 = var6.bind(var7)(var5);
                        case 459:
                            var1.title = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var33.onViewAllSelected = var45;
                var36 = var40.bind(var3)(var36, var33);
                var33 = new Array(4);
                var33[0] = var36;
                var40 = _closure1_slot20;
                var36 = 67;
                var36 = var44[var36];
                var39 = var39.bind(var3)(var36);
                var36 = {};
                var36.items = var43;
                var36.onAppSelected = var42;
                var41 = function() {
                    _fun107598: for (var _fun107598_ip = 0;;) switch (_fun107598_ip) {
                        case 0:
                            var2 = _closure2_slot19;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                var1 = var0.type;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 44;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.AppLauncherHomeListItemType;
                                var0 = var0.VIEW_ALL;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            var6 = undefined;
                            if (var3) {
                                _fun107598_ip = 71;
                                continue _fun107598
                            }
                        case 39:
                            var7 = var2.applications;
                            var2 = var1 == var7;
                            var6 = undefined;
                            if (var2) {
                                _fun107598_ip = 71;
                                continue _fun107598
                            }
                        case 54:
                            var3 = var7.map;
                            var2 = function(arg0) { // Environment: var4
                                var0 = arg0;
                                return var0;
                            };
                            var6 = var3.bind(var7)(var2);
                        case 71:
                            if (!(var1 != var6)) {
                                _fun107598_ip = 304;
                                continue _fun107598
                            }
                        case 78:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var1 = 23;
                            var1 = var8[var1];
                            var3 = var7.bind(var0)(var1);
                            var2 = var3.handleViewAllSelected;
                            var1 = {};
                            var9 = 29;
                            var9 = var8[var9];
                            var9 = var7.bind(var0)(var9);
                            var9 = var9.ApplicationCommandTriggerLocations;
                            var9 = var9.APP_LAUNCHER_HOME;
                            var1.location = var9;
                            var9 = _closure2_slot2;
                            var1.navigation = var9;
                            var5 = _closure2_slot0;
                            var1.context = var5;
                            var5 = 37;
                            var5 = var8[var5];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.AppLauncherSectionName;
                            var5 = var5.APPS_IN_THIS_SERVER;
                            var1.sectionName = var5;
                            var1.applications = var6;
                            var5 = 49;
                            var5 = var8[var5];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.SectionItemType;
                            var5 = var5.APPS;
                            var1.sectionItemType = var5;
                            var5 = new Array(0);
                            var1.commands = var5;
                            var5 = var6.map;
                            var4 = function(arg0) { // Environment: var4
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 50;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getApplicationCommandSection;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                            var1.sectionDescriptors = var4;
                            var4 = 17;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.oJyzCu;
                            var4 = var5.bind(var6)(var4);
                            var1.title = var4;
                            var1 = var2.bind(var3)(var1);
                        case 304:
                            return var0;
                    }
                };
                var36.onViewAllSelected = var41;
                var36 = var40.bind(var3)(var39, var36);
                var33[1] = var36;
                var36 = null;
                if (!var38) {
                    _fun107531_ip = 2279;
                    continue _fun107531
                }
            case 2242:
                var36 = null;
                if (!var37) {
                    _fun107531_ip = 2279;
                    continue _fun107531
                }
            case 2247:
                var39 = _closure1_slot20;
                var38 = _closure1_slot1;
                var40 = _closure1_slot3;
                var37 = 68;
                var37 = var40[var37];
                var38 = var38.bind(var3)(var37);
                var37 = {};
                var36 = var39.bind(var3)(var38, var37);
            case 2279:
                var33[2] = var36;
                var34 = null;
                if (!var35) {
                    _fun107531_ip = 2320;
                    continue _fun107531
                }
            case 2288:
                var37 = _closure1_slot20;
                var36 = _closure1_slot1;
                var38 = _closure1_slot3;
                var35 = 69;
                var35 = var38[var35];
                var36 = var36.bind(var3)(var35);
                var35 = {};
                var34 = var37.bind(var3)(var36, var35);
            case 2320:
                var33[3] = var34;
                var30.children = var33;
                var30 = var32.bind(var3)(var31, var30);
                var5.ListHeaderComponent = var30;
                var5.contentContainerStyle = var29;
                var5.scrollIndicatorInsets = var28;
                var5.renderItem = var27;
                var5.getItemType = var26;
                var5.data = var25;
                var5.estimatedItemSize = var24;
                var5.preserveScrollMomentum = var23;
                var5.automaticallyAdjustsScrollIndicatorInsets = var22;
                var23 = 'on-drag';
                var5.keyboardDismissMode = var23;
                var23 = 'always';
                var5.keyboardShouldPersistTaps = var23;
                var5.showsVerticalScrollIndicator = var22;
                var5.viewabilityConfigCallbackPairs = var21;
                var5.bottomViewabilityInsetRef = var20;
                var21 = _closure1_slot0;
                var20 = _closure1_slot3;
                var20 = var20[var12];
                var20 = var21.bind(var3)(var20);
                var20 = var20.AppLauncherEntrypoint;
                var20 = var20.VOICE;
                if (!(var7 === var20)) {
                    _fun107531_ip = 2452;
                    continue _fun107531
                }
            case 2446:
                var19 = var13.scrollerRef;
            case 2452:
                var5.ref = var19;
                var5.onScroll = var16;
                var19 = var13.onScroll;
                var5.animatedOnScroll = var19;
                var19 = var13.gestureRef;
                var5.simultaneousHandlers = var19;
                var13 = var13.animatedProps;
                var5.animatedProps = var13;
                var5 = var14.bind(var3)(var8, var5);
                _fun107531_ip = 2559;
                continue _fun107531;
            case 2502:
                var13 = _closure1_slot0;
                var19 = _closure1_slot3;
                var8 = 65;
                var8 = var19[var8];
                var8 = var13.bind(var3)(var8);
                var13 = var8.SearchLocalAndGlobalContentView;
                var8 = {};
                var8.ref = var18;
                var8.context = var17;
                var8.onScroll = var16;
                var8.onSend = var15;
                var8.entrypoint = var7;
                var5 = var14.bind(var3)(var13, var8);
            case 2559:
                var4[2] = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var12];
                var5 = var8.bind(var3)(var5);
                var5 = var5.AppLauncherEntrypoint;
                var5 = var5.TEXT;
                var5 = var7 === var5;
                if (!var5) {
                    _fun107531_ip = 2646;
                    continue _fun107531
                }
            case 2599:
                var8 = _closure1_slot20;
                var7 = _closure1_slot1;
                var12 = _closure1_slot3;
                var6 = 70;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.windowDimensions = var11;
                var6.visible = var10;
                var6.markAsDismissed = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2646:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.BaseAppRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 4669, 3996, 13866, 3082, 11715, 1468, 660, 1369, 33, 671, 13870, 1297, 3932, 1234, 10542, 4668, 8779, 8783, 4893, 13847, 1417, 13122, 13876, 8063, 566, 4543, 13877, 4699, 7020, 13878, 13854, 1568, 4081, 7729, 13879, 8185, 7554, 7728, 7907, 13881, 13880, 13882, 13883, 13885, 13886, 13848, 4540, 13887, 22, 4298, 5846, 13889, 13890, 5209, 481, 3203, 1358, 11717, 13891, 13734, 7004, 13893, 1304, 13901, 13902, 13904, 13907, 13908, 13871, 13909, 11721, 13910, 13913, 6814, 13864, 12186, 13914, 13897, 13915, 1384, 13916, 13917, 2]);