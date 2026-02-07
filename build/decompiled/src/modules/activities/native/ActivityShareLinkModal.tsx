// modules/activities/native/ActivityShareLinkModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRowModes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.headerContainer = var8;
    var8 = {
        'borderBottomWidth': 0,
        'shadowColor': 'transparent',
        'backgroundColor': 'transparent'
    };
    var3.header = var8;
    var8 = {};
    var11 = 'center';
    var8.textAlign = var11;
    var3.title = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var11;
    var3.button = var8;
    var8 = {
        'flex': 1,
        'display': 'flex'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/ActivityShareLinkModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun98628: for (var _fun98628_ip = 0;;) switch (_fun98628_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.applicationId;
                var _closure2_slot0 = var20;
                var24 = var0.customId;
                var _closure2_slot1 = var24;
                var23 = var0.linkId;
                var _closure2_slot2 = var23;
                var15 = var0.message;
                var _closure2_slot3 = var15;
                var11 = var0.onShare;
                var _closure2_slot4 = var11;
                var0 = _closure1_slot14;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 12;
                var1 = var10[var0];
                var5 = var9.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    var1 = _closure1_slot9;
                    var0 = var1.getConnectedActivityChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var4.bind(var5)(var2, var1);
                var _closure2_slot5 = var1;
                var4 = _closure1_slot5;
                var5 = var4.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var8
                    _fun98630: for (var _fun98630_ip = 0;;) switch (_fun98630_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var2 = var0 != var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (!var2) {
                                _fun98630_ip = 58;
                                continue _fun98630
                            }
                        case 20:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 13;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getDestinationIdFromChannelId;
                            var1 = _closure2_slot5;
                            var0 = var2.bind(var3)(var1);
                        case 58:
                            return var0;
                    }
                };
                var21 = var5.bind(var4)(var1, var2);
                var1 = var4.useState;
                var6 = false;
                var2 = var1.bind(var4)(var6);
                var5 = _closure1_slot4;
                var1 = 2;
                var2 = var5.bind(var3)(var2, var1);
                var14 = 0;
                var16 = var2[var14];
                var12 = 1;
                var2 = var2[var12];
                var _closure2_slot6 = var2;
                var2 = var4.useState;
                var2 = var2.bind(var4)(var6);
                var2 = var5.bind(var3)(var2, var1);
                var17 = var2[var14];
                var _closure2_slot7 = var17;
                var2 = var2[var12];
                var _closure2_slot8 = var2;
                var6 = var4.useState;
                var2 = new Array(0);
                var2 = var6.bind(var4)(var2);
                var2 = var5.bind(var3)(var2, var1);
                var7 = var2[var14];
                var _closure2_slot9 = var7;
                var2 = var2[var12];
                var _closure2_slot10 = var2;
                var18 = var7.length;
                var22 = var4.useCallback;
                var6 = function(arg0) { // Environment: var8
                    var2 = _closure2_slot10;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var22 = var22.bind(var4)(var6, var2);
                var0 = var10[var0];
                var25 = var9.bind(var3)(var0);
                var6 = var25.useStateFromStores;
                var0 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var25 = var6.bind(var25)(var2, var0);
                var _closure2_slot11 = var25;
                var2 = var4.useState;
                var0 = '';
                var0 = var2.bind(var4)(var0);
                var1 = var5.bind(var3)(var0, var1);
                var0 = var1[var14];
                var _closure2_slot12 = var0;
                var1 = var1[var12];
                var _closure2_slot13 = var1;
                var6 = var4.useEffect;
                var2 = new Array(5);
                var2[0] = var20;
                var2[1] = var25;
                var2[2] = var24;
                var2[3] = var23;
                var2[4] = var1;
                var1 = function() { // Environment: var8
                    _fun98633: for (var _fun98633_ip = 0;;) switch (_fun98633_ip) {
                        case 0:
                            var2 = _closure2_slot13;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.getActivityLaunchURL;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.applicationId = var6;
                            var7 = _closure2_slot11;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun98633_ip = 72;
                                continue _fun98633
                            }
                        case 63:
                            var7 = _closure2_slot11;
                            var6 = var7.id;
                        case 72:
                            var1.referrerId = var6;
                            var6 = _closure2_slot1;
                            var1.customId = var6;
                            var5 = _closure2_slot2;
                            var1.linkId = var5;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1 = var6.bind(var4)(var1, var2);
                var6 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var17;
                var2[1] = var11;
                var1 = function() { // Environment: var8
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var1 = false;
                    var1 = var3.bind(var0)(var1, var2);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.closeActivityShareLinkModal;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var24 = var6.bind(var4)(var1, var2);
                var1 = _closure1_slot1;
                var2 = 16;
                var2 = var10[var2];
                var6 = var1.bind(var3)(var2);
                var2 = new Array(1);
                var2[0] = var20;
                var2 = var6.bind(var3)(var2);
                var2 = var5.bind(var3)(var2, var12);
                var20 = var2[var14];
                var _closure2_slot14 = var20;
                var6 = var4.useCallback;
                var5 = _closure1_slot3;
                var2 = function*() { // Environment: var8
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun98636: for (var _fun98636_ip = 0;;) switch (_fun98636_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun98636_ip = 365;
                                    continue _fun98636
                                }
                            case 12:
                                var2 = undefined;
                                var _closure4_slot0 = var2;
                                var4 = _closure2_slot14;
                                var1 = null;
                                if (!(var1 != var4)) {
                                    _fun98636_ip = 359;
                                    continue _fun98636
                                }
                            case 34:
                                var1 = global;
                                var5 = var1.Promise;
                                var4 = var5.all;
                                var9 = _closure2_slot9;
                                var7 = var9.map;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 13;
                                var1 = var11[var1];
                                var1 = var10.bind(var2)(var1);
                                var1 = var1.getOrResolveChannelIdFromDestinationId;
                                var1 = var7.bind(var9)(var1);
                                var1 = var4.bind(var5)(var1);
                                SaveGenerator(address = 100);
                            case 98:
                                return var1;
                            case 100:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun98636_ip = 362;
                                    continue _fun98636
                                }
                            case 109:
                                var9 = var1.filter;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var7 = 17;
                                var7 = var5[var7];
                                var7 = var4.bind(var2)(var7);
                                var7 = var7.isNotNullish;
                                var10 = var9.bind(var1)(var7);
                                var7 = 18;
                                var7 = var5[var7];
                                var12 = var4.bind(var2)(var7);
                                var11 = var12.resolveActivityShareMessageContent;
                                var9 = _closure2_slot3;
                                var14 = _closure2_slot14;
                                var7 = _closure2_slot12;
                                var7 = var11.bind(var12)(var9, var14, var7);
                                _closure4_slot0 = var7;
                                var9 = _closure2_slot6;
                                var7 = true;
                                var9 = var9.bind(var2)(var7);
                                var9 = var10.forEach;
                                var8 = function() { // Environment: var8
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = function*(arg0) { // Environment: var0
                                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                            _fun98639: for (var _fun98639_ip = 0;;) switch (_fun98639_ip) {
                                                case 0:
                                                    StartGenerator();
                                                    var6 = arg0;
                                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                    if (var1) {
                                                        _fun98639_ip = 144;
                                                        continue _fun98639
                                                    }
                                                case 13:
                                                    var3 = _closure1_slot7;
                                                    var2 = var3.getChannel;
                                                    var8 = var2.bind(var3)(var6);
                                                    var2 = null;
                                                    if (!(var2 != var8)) {
                                                        _fun98639_ip = 136;
                                                        continue _fun98639
                                                    }
                                                case 36:
                                                    var7 = _closure1_slot1;
                                                    var9 = _closure1_slot2;
                                                    var2 = 19;
                                                    var2 = var9[var2];
                                                    var3 = undefined;
                                                    var5 = var7.bind(var3)(var2);
                                                    var4 = var5.sendMessage;
                                                    var2 = 20;
                                                    var2 = var9[var2];
                                                    var7 = var7.bind(var3)(var2);
                                                    var3 = var7.parse;
                                                    var2 = _closure4_slot0;
                                                    var12 = var3.bind(var7)(var8, var2);
                                                    var2 = {};
                                                    var1 = _closure1_slot11;
                                                    var1 = var1.ACTIVITY_SHARE;
                                                    var2.location = var1;
                                                    var11 = false;
                                                    var14 = var5;
                                                    var13 = var6;
                                                    var10 = var2;
                                                    var1 = var14[var4](var13, var12, var11, var10, var9);
                                                    SaveGenerator(address = 130);
                                                case 128:
                                                    return var1;
                                                case 130:
                                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                    if (var2) {
                                                        _fun98639_ip = 141;
                                                        continue _fun98639
                                                    }
                                                case 136:
                                                    var2 = undefined;
                                                    return var2;
                                                case 141:
                                                    return var1;
                                                case 144:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var1 = var3.bind(var2)(var1);
                                    var _closure5_slot0 = var1;
                                    var0 = function() { // Environment: var0
                                        var0 = undefined;
                                        var3 = _closure5_slot0;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var8 = var8.bind(var2)();
                                var8 = var9.bind(var10)(var8);
                                var8 = _closure1_slot1;
                                var6 = 21;
                                var6 = var5[var6];
                                var9 = var8.bind(var2)(var6);
                                var8 = var9.open;
                                var6 = {};
                                var10 = 'ACTIVITY_SHARE_LINK_SUCCESS';
                                var6.key = var10;
                                var10 = 22;
                                var11 = var5[var10];
                                var11 = var4.bind(var2)(var11);
                                var13 = var11.intl;
                                var12 = var13.formatToPlainString;
                                var10 = var5[var10];
                                var10 = var4.bind(var2)(var10);
                                var10 = var10.t;
                                var11 = var10.jQULqL;
                                var10 = {};
                                var14 = var14.name;
                                var10.applicationName = var14;
                                var10 = var12.bind(var13)(var11, var10);
                                var6.content = var10;
                                var6 = var8.bind(var9)(var6);
                                var6 = _closure2_slot4;
                                var3 = _closure2_slot7;
                                var3 = var6.bind(var2)(var7, var3);
                                var3 = 15;
                                var3 = var5[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.closeActivityShareLinkModal;
                                var3 = var3.bind(var4)();
                            case 359:
                                return var2;
                            case 362:
                                return var1;
                            case 365:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var5.bind(var3)(var2);
                var2 = new Array(6);
                var2[0] = var20;
                var2[1] = var17;
                var2[2] = var0;
                var2[3] = var15;
                var2[4] = var11;
                var2[5] = var7;
                var15 = var6.bind(var4)(var5, var2);
                var5 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.copy;
                    var4 = _closure2_slot12;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot8;
                    var1 = true;
                    var1 = var4.bind(var0)(var1);
                    var1 = 24;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentLinkCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = var5.bind(var4)(var0, var2);
                var _closure2_slot15 = var0;
                var0 = 25;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var23 = true;
                var0.ignoreKeyboard = var23;
                var0 = var1.bind(var3)(var0);
                var0 = var0.height;
                var _closure2_slot16 = var0;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    _fun98642: for (var _fun98642_ip = 0;;) switch (_fun98642_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isAndroid;
                            var2 = var1.bind(var2)();
                            var1 = '100%';
                            if (!var2) {
                                _fun98642_ip = 53;
                                continue _fun98642
                            }
                        case 46:
                            var1 = _closure2_slot16;
                        case 53:
                            var0.height = var1;
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var0.style = var4;
                var5 = _closure1_slot12;
                var4 = {};
                var6 = var19.headerContainer;
                var4.style = var6;
                var6 = 27;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var7 = var6.Header;
                var6 = {};
                var11 = var19.header;
                var6.headerStyle = var11;
                var17 = 22;
                var11 = var10[var17];
                var11 = var9.bind(var3)(var11);
                var25 = var11.intl;
                var20 = var25.string;
                var11 = var10[var17];
                var11 = var9.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.r9qKow;
                var11 = var20.bind(var25)(var11);
                var6.title = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var4 = var0.children;
                    var3 = _closure1_slot12;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 28;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.GenericHeaderTitle;
                    var0 = {};
                    var0.title = var4;
                    var4 = _closure2_slot3;
                    var0.subtitle = var4;
                    var4 = 'redesign/heading-18/bold';
                    var0.variant = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6.headerTitle = var11;
                var11 = 29;
                var11 = var10[var11];
                var20 = var9.bind(var3)(var11);
                var11 = var20.getHeaderCloseButton;
                var11 = var11.bind(var20)(var24);
                var6.headerLeft = var11;
                var8 = function arg0() {
                    var3 = _closure1_slot12;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 30;
                    var0 = var6[var0];
                    var2 = undefined;
                    var0 = var5.bind(var2)(var0);
                    var1 = var0.HeaderActionButton;
                    var0 = {};
                    var9 = arg0;
                    var10 = var0;
                    var4 = copyDataProperties(var10, var9);
                    var7 = _closure2_slot15;
                    var4 = 'onPress';
                    var0[var4] = var7;
                    var4 = 22;
                    var7 = var6[var4];
                    var7 = var5.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.Xrt5Po;
                    var7 = var7.bind(var8)(var4);
                    var4 = 'accessibilityLabel';
                    var0[var4] = var7;
                    var4 = 31;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.LinkIcon;
                    var4 = 'IconComponent';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var6.headerRight = var8;
                var8 = 26;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.isIOS;
                var9 = var8.bind(var9)();
                var8 = undefined;
                if (!var9) {
                    _fun98628_ip = 821;
                    continue _fun98628
                }
            case 819:
                var8 = 0;
            case 821:
                var6.headerStatusBarHeight = var8;
                var8 = 'center';
                var6.headerTitleAlign = var8;
                var6 = var5.bind(var3)(var7, var6);
                var4.children = var6;
                var5 = var5.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var19.container;
                var5.style = var8;
                var11 = _closure1_slot12;
                var10 = _closure1_slot1;
                var20 = _closure1_slot2;
                var8 = 32;
                var8 = var20[var8];
                var9 = var10.bind(var3)(var8);
                var8 = {};
                var8.absolute = var23;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var9 = 33;
                var9 = var20[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {
                    'disableGradient': true,
                    'disableStickySections': true,
                    'initialSelectedDestinations': null,
                    'insetEnd': 0
                };
                var23 = new Array(0);
                var9.initialSelectedDestinations = var23;
                var9.onSelectedDestinationChange = var22;
                var9.originDestination = var21;
                var21 = _closure1_slot10;
                var21 = var21.TOGGLE;
                var9.rowMode = var21;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var10 = _closure1_slot0;
                var9 = 34;
                var9 = var20[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.ModalFloatingAction;
                var9 = {};
                var9.disabled = var16;
                var19 = var19.container;
                var19 = var19.backgroundColor;
                var9.floatingBackgroundColor = var19;
                var14 = var18 > var14;
                var9.isVisible = var14;
                var9.loading = var16;
                var14 = undefined;
                if (var16) {
                    _fun98628_ip = 1059;
                    continue _fun98628
                }
            case 1056:
                var14 = var15;
            case 1059:
                var9.onPress = var14;
                if (!(var12 !== var18)) {
                    _fun98628_ip = 1129;
                    continue _fun98628
                }
            case 1067:
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var15 = var12[var17];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var12 = var12[var17];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var14 = var12.jWtYUm;
                var12 = {};
                var12.count = var18;
                var12 = var15.bind(var16)(var14, var12);
                _fun98628_ip = 1181;
                continue _fun98628;
            case 1129:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.TXNS7S;
                var12 = var14.bind(var15)(var13);
            case 1181:
                var9.text = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1372, 1621, 1371, 8966, 1346, 33, 1297, 671, 566, 6690, 7895, 12869, 6953, 1304, 12871, 6593, 5639, 3150, 1234, 5343, 3149, 1464, 478, 4709, 8972, 4705, 5374, 3255, 8795, 9156, 9256, 2]);