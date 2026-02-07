// modules/multi_account/native/ManageAccountsModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun103605: for (var _fun103605_ip = 0;;) switch (_fun103605_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var _closure2_slot0 = var2;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 15;
                var5 = var7[var4];
                var10 = var6.bind(var3)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var1
                    var0 = _closure1_slot9;
                    var0 = var0.hidePersonalInformation;
                    return var0;
                };
                var5 = var9.bind(var10)(var8, var5);
                var4 = var7[var4];
                var8 = var6.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var1
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var7.bind(var8)(var6, var4);
                var6 = null;
                var7 = var6 == var4;
                var6 = undefined;
                if (var7) {
                    _fun103605_ip = 128;
                    continue _fun103605
                }
            case 123:
                var6 = var4.id;
            case 128:
                var4 = var2.id;
                if (!(var6 !== var4)) {
                    _fun103605_ip = 386;
                    continue _fun103605
                }
            case 140:
                var4 = var2.username;
                _closure2_slot1 = var4;
                if (var5) {
                    _fun103605_ip = 168;
                    continue _fun103605
                }
            case 152:
                var7 = var2.discriminator;
                var6 = '0';
                var5 = var6 === var7;
            case 168:
                if (var5) {
                    _fun103605_ip = 207;
                    continue _fun103605
                }
            case 171:
                var6 = var2.discriminator;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = '#';
                var2 = var5.bind(var2)(var6);
                var2 = var4 + var2;
                _closure2_slot1 = var2;
            case 207:
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun103610: for (var _fun103610_ip = 0;;) switch (_fun103610_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun103610_ip = 358;
                                        continue _fun103610
                                    }
                                case 10:
                                    var3 = _closure1_slot1;
                                    var11 = _closure1_slot3;
                                    var1 = 17;
                                    var1 = var11[var1];
                                    var2 = undefined;
                                    var6 = var3.bind(var2)(var1);
                                    var5 = var6.confirm;
                                    var1 = {};
                                    var10 = _closure1_slot0;
                                    var7 = 18;
                                    var3 = var11[var7];
                                    var3 = var10.bind(var2)(var3);
                                    var9 = var3.intl;
                                    var8 = var9.string;
                                    var3 = var11[var7];
                                    var3 = var10.bind(var2)(var3);
                                    var3 = var3.t;
                                    var3 = var3.n0Fbg6;
                                    var3 = var8.bind(var9)(var3);
                                    var1.title = var3;
                                    var3 = var11[var7];
                                    var3 = var10.bind(var2)(var3);
                                    var13 = var3.intl;
                                    var12 = var13.formatToPlainString;
                                    var3 = var11[var7];
                                    var3 = var10.bind(var2)(var3);
                                    var3 = var3.t;
                                    var9 = var3.phEQmS;
                                    var8 = {};
                                    var14 = _closure2_slot1;
                                    var8.username = var14;
                                    var8 = var12.bind(var13)(var9, var8);
                                    var1.body = var8;
                                    var8 = var11[var7];
                                    var8 = var10.bind(var2)(var8);
                                    var12 = var8.intl;
                                    var9 = var12.string;
                                    var8 = var11[var7];
                                    var8 = var10.bind(var2)(var8);
                                    var8 = var8.t;
                                    var8 = var8.N86XcP;
                                    var8 = var9.bind(var12)(var8);
                                    var1.confirmText = var8;
                                    var8 = 19;
                                    var8 = var11[var8];
                                    var8 = var10.bind(var2)(var8);
                                    var8 = var8.ButtonColors;
                                    var8 = var8.RED;
                                    var1.confirmColor = var8;
                                    var8 = var11[var7];
                                    var8 = var10.bind(var2)(var8);
                                    var9 = var8.intl;
                                    var8 = var9.string;
                                    var7 = var11[var7];
                                    var7 = var10.bind(var2)(var7);
                                    var7 = var7.t;
                                    var7 = var7["ETE/oC"];
                                    var7 = var8.bind(var9)(var7);
                                    var1.cancelText = var7;
                                    var7 = true;
                                    var1.isDismissable = var7;
                                    var1 = var5.bind(var6)(var1);
                                    SaveGenerator(address = 303);
                                case 301:
                                    return var1;
                                case 303:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun103610_ip = 355;
                                        continue _fun103610
                                    }
                                case 309:
                                    if (!var1) {
                                        _fun103610_ip = 352;
                                        continue _fun103610
                                    }
                                case 312:
                                    var5 = _closure1_slot2;
                                    var6 = _closure1_slot3;
                                    var4 = 20;
                                    var4 = var6[var4];
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.removeAccount;
                                    var3 = _closure2_slot0;
                                    var3 = var3.id;
                                    var3 = var4.bind(var5)(var3);
                                case 352:
                                    return var2;
                                case 355:
                                    return var1;
                                case 358:
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
                var5 = var1.bind(var3)();
                var4 = _closure1_slot17;
                var6 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 21;
                var1 = var10[var1];
                var1 = var6.bind(var3)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = 'button';
                var1.accessibilityRole = var7;
                var7 = 18;
                var8 = var10[var7];
                var8 = var6.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var10[var7];
                var7 = var6.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.lSLMaU;
                var7 = var8.bind(var9)(var7);
                var1.accessibilityLabel = var7;
                var1.onPress = var5;
                var7 = _closure1_slot17;
                var5 = 22;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.CircleMinusIcon;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = 14;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.colors;
                var8 = var8.ICON_FEEDBACK_CRITICAL;
                var5.color = var8;
                var5 = var7.bind(var3)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 386:
                var2 = _closure1_slot17;
                var1 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 16;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = 21;
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun103612: for (var _fun103612_ip = 0;;) switch (_fun103612_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.isEditing;
                var _closure2_slot0 = var10;
                var0 = var0.navigation;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot20;
                var3 = undefined;
                var21 = var0.bind(var3)();
                var _closure2_slot2 = var21;
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 23;
                var0 = var11[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useMultiAccountUsers;
                var0 = var0.bind(var1)();
                var9 = var0.multiAccountUsers;
                var _closure2_slot3 = var9;
                var0 = 15;
                var0 = var11[var0];
                var4 = var8.bind(var3)(var0);
                var2 = var4.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var17
                    var0 = {};
                    var2 = _closure1_slot8;
                    var1 = var2.getId;
                    var1 = var1.bind(var2)();
                    var0.currentUserId = var1;
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var0 = var0.currentUserId;
                var _closure2_slot4 = var0;
                var0 = 24;
                var1 = var11[var0];
                var4 = var8.bind(var3)(var1);
                var2 = var4.useSharedValue;
                var1 = 0;
                var5 = var2.bind(var4)(var1);
                var _closure2_slot5 = var5;
                var0 = var11[var0];
                var2 = var8.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.withTiming;
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = {};
                    var5 = _closure1_slot12;
                    var1.duration = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.width = var1;
                    return var0;
                };
                var4 = {};
                var6 = 25;
                var6 = var11[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.withTiming;
                var4.withTiming = var6;
                var4.leadingWidth = var5;
                var5 = _closure1_slot12;
                var4.MANAGE_EDIT_TRANSITION_DURATION = var5;
                var0.__closure = var4;
                var4 = 3389178545077.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot21;
                var0.__initData = var4;
                var0 = var1.bind(var2)(var0);
                var _closure2_slot6 = var0;
                var5 = _closure1_slot1;
                var0 = 26;
                var0 = var11[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)(var10);
                var _closure2_slot7 = var0;
                var2 = _closure1_slot6;
                var1 = var2.useEffect;
                var0 = function() { // Environment: var17
                    _fun103615: for (var _fun103615_ip = 0;;) switch (_fun103615_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun103615_ip = 28;
                                continue _fun103615
                            }
                        case 16:
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot0;
                            var1 = var3 !== var2;
                        case 28:
                            if (!var1) {
                                _fun103615_ip = 57;
                                continue _fun103615
                            }
                        case 31:
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var3 = _closure2_slot0;
                            var0 = 0;
                            if (!var3) {
                                _fun103615_ip = 52;
                                continue _fun103615
                            }
                        case 49:
                            var0 = 37;
                        case 52:
                            var0 = var1.bind(var2)(var0);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot17;
                var0 = 28;
                var0 = var11[var0];
                var0 = var8.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var4 = var21.container;
                var0.style = var4;
                var7 = true;
                var0.bottom = var7;
                var6 = _closure1_slot17;
                var4 = 29;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.data = var9;
                var9 = function arg0() {
                    var0 = arg0;
                    var4 = var0.from;
                    var3 = var0.to;
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.moveAccount;
                    var1 = var1.bind(var2)(var4, var3);
                    return var0;
                };
                var4.onRowMoved = var9;
                var9 = !var10;
                var4.disableSorting = var9;
                var9 = var21.sortableListView;
                var4.wrapperStyles = var9;
                var9 = function arg0, arg1() {
                    _fun103617: for (var _fun103617_ip = 0;;) switch (_fun103617_ip) {
                        case 0:
                            var16 = arg0;
                            var _closure3_slot0 = var16;
                            var4 = _closure1_slot17;
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot3;
                            var8 = 30;
                            var0 = var0[var8];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = {};
                            var1.user = var16;
                            var7 = _closure2_slot0;
                            var5 = null;
                            if (var7) {
                                _fun103617_ip = 63;
                                continue _fun103617
                            }
                        case 56:
                            var5 = function() { // Environment: var6
                                _fun103618: for (var _fun103618_ip = 0;;) switch (_fun103618_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var2 = _closure2_slot0;
                                        var5 = undefined;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun103618_ip = 187;
                                            continue _fun103618
                                        }
                                    case 24:
                                        var4 = var1.id;
                                        var2 = _closure2_slot4;
                                        var0 = undefined;
                                        if (!(var4 !== var2)) {
                                            _fun103618_ip = 187;
                                            continue _fun103618
                                        }
                                    case 42:
                                        var6 = var1.tokenStatus;
                                        var4 = _closure1_slot11;
                                        var4 = var4.INVALID;
                                        if (!(var6 !== var4)) {
                                            _fun103618_ip = 105;
                                            continue _fun103618
                                        }
                                    case 65:
                                        var6 = _closure1_slot2;
                                        var7 = _closure1_slot3;
                                        var4 = 20;
                                        var4 = var7[var4];
                                        var6 = var6.bind(var5)(var4);
                                        var4 = var6.switchAccount;
                                        var1 = var1.id;
                                        var1 = var4.bind(var6)(var1);
                                        var1 = undefined;
                                        _fun103618_ip = 184;
                                        continue _fun103618;
                                    case 105:
                                        var6 = _closure2_slot1;
                                        var4 = var6.push;
                                        var3 = _closure1_slot16;
                                        var3 = var3.LOGIN;
                                        var3 = var4.bind(var6)(var3);
                                        var4 = _closure1_slot1;
                                        var6 = _closure1_slot3;
                                        var3 = 27;
                                        var3 = var6[var3];
                                        var5 = var4.bind(var5)(var3);
                                        var4 = var5.track;
                                        var2 = _closure1_slot15;
                                        var3 = var2.LOGIN_VIEWED;
                                        var2 = {};
                                        var6 = 'multi_account_invalid_user';
                                        var2.source = var6;
                                        var2 = var4.bind(var5)(var3, var2);
                                        var1 = undefined;
                                    case 184:
                                        var0 = var1;
                                    case 187:
                                        return var0;
                                }
                            };
                        case 63:
                            var1.onPressUser = var5;
                            var5 = true;
                            var1.showActiveAccountLabel = var5;
                            var7 = _closure1_slot17;
                            var6 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var9 = 31;
                            var5 = var12[var9];
                            var5 = var6.bind(var3)(var5);
                            var6 = var5.TransitionGroup;
                            var5 = {
                                'component': null,
                                'transitionEnter': true,
                                'transitionLeave': true
                            };
                            var11 = _closure1_slot1;
                            var10 = 24;
                            var10 = var12[var10];
                            var10 = var11.bind(var3)(var10);
                            var10 = var10.View;
                            var5.component = var10;
                            var10 = _closure2_slot6;
                            var5.style = var10;
                            var10 = _closure2_slot0;
                            if (!var10) {
                                _fun103617_ip = 225;
                                continue _fun103617
                            }
                        case 161:
                            var14 = _closure1_slot17;
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot3;
                            var11 = 32;
                            var11 = var15[var11];
                            var12 = var12.bind(var3)(var11);
                            var11 = {};
                            var15 = _closure1_slot12;
                            var11.duration = var15;
                            var18 = _closure1_slot17;
                            var17 = _closure1_slot22;
                            var15 = {};
                            var15.user = var16;
                            var15 = var18.bind(var3)(var17, var15);
                            var11.children = var15;
                            var10 = var14.bind(var3)(var12, var11);
                        case 225:
                            var5.children = var10;
                            var5 = var7.bind(var3)(var6, var5);
                            var1.leading = var5;
                            var7 = _closure1_slot17;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var5 = var5[var9];
                            var5 = var6.bind(var3)(var5);
                            var6 = var5.TransitionGroup;
                            var5 = {
                                'component': null,
                                'transitionEnter': true,
                                'transitionLeave': true,
                                'transitionAppear': true
                            };
                            var9 = _closure1_slot7;
                            var5.component = var9;
                            var9 = _closure2_slot2;
                            var9 = var9.trailingIconContainer;
                            var5.style = var9;
                            var9 = _closure2_slot0;
                            var12 = _closure1_slot17;
                            var11 = _closure1_slot1;
                            var15 = _closure1_slot3;
                            var10 = 32;
                            var10 = var15[var10];
                            var11 = var11.bind(var3)(var10);
                            var10 = {};
                            var14 = _closure1_slot12;
                            var10.duration = var14;
                            var14 = _closure2_slot2;
                            var14 = var14.trailingIcon;
                            var10.style = var14;
                            var14 = _closure1_slot17;
                            var13 = _closure1_slot0;
                            if (var9) {
                                _fun103617_ip = 412;
                                continue _fun103617
                            }
                        case 368:
                            var8 = var15[var8];
                            var8 = var13.bind(var3)(var8);
                            var9 = var8.AccountStatusIcon;
                            var8 = {};
                            var8.user = var16;
                            var8 = var14.bind(var3)(var9, var8);
                            var10.children = var8;
                            var8 = 'status';
                            var8 = var12.bind(var3)(var11, var10, var8);
                            _fun103617_ip = 453;
                            continue _fun103617;
                        case 412:
                            var9 = 33;
                            var9 = var15[var9];
                            var9 = var13.bind(var3)(var9);
                            var13 = var9.DragIcon;
                            var9 = {};
                            var9 = var14.bind(var3)(var13, var9);
                            var10.children = var9;
                            var9 = 'drag';
                            var8 = var12.bind(var3)(var11, var10, var9);
                        case 453:
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var1.trailing = var5;
                            var5 = _closure2_slot0;
                            var0 = undefined;
                            if (!var5) {
                                _fun103617_ip = 480;
                                continue _fun103617
                            }
                        case 477:
                            var0 = 100;
                        case 480:
                            var1.delayLongPress = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var4.renderRow = var9;
                var9 = 'handled';
                var4.keyboardShouldPersistTaps = var9;
                var9 = 16;
                var4.scrollEventThrottle = var9;
                var4.scrollEnabled = var7;
                var9 = _closure1_slot17;
                var7 = 31;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.TransitionGroup;
                var7 = {
                    'component': null,
                    'transitionEnter': true,
                    'transitionLeave': true,
                    'transitionAppear': true
                };
                var11 = _closure1_slot7;
                var7.component = var11;
                var10 = !var10;
                if (!var10) {
                    _fun103612_ip = 742;
                    continue _fun103612
                }
            case 493:
                var13 = _closure1_slot17;
                var27 = _closure1_slot1;
                var25 = _closure1_slot3;
                var11 = 32;
                var11 = var25[var11];
                var12 = var27.bind(var3)(var11);
                var11 = {};
                var14 = _closure1_slot12;
                var11.duration = var14;
                var16 = _closure1_slot17;
                var24 = _closure1_slot0;
                var18 = 34;
                var14 = var25[var18];
                var14 = var24.bind(var3)(var14);
                var15 = var14.FormRow;
                var14 = {};
                var23 = _closure1_slot17;
                var20 = 35;
                var20 = var25[var20];
                var20 = var24.bind(var3)(var20);
                var22 = var20.CirclePlusIcon;
                var20 = {};
                var26 = 14;
                var26 = var25[var26];
                var26 = var27.bind(var3)(var26);
                var26 = var26.colors;
                var26 = var26.TEXT_LINK;
                var20.color = var26;
                var20 = var23.bind(var3)(var22, var20);
                var14.leading = var20;
                var20 = _closure1_slot17;
                var18 = var25[var18];
                var18 = var24.bind(var3)(var18);
                var18 = var18.FormRow;
                var19 = var18.Label;
                var18 = {};
                var21 = var21.addAccountLabel;
                var18.style = var21;
                var21 = 18;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.bPP34Q;
                var21 = var22.bind(var23)(var21);
                var18.text = var21;
                var18 = var20.bind(var3)(var19, var18);
                var14.label = var18;
                var17 = function() {
                    _fun103619: for (var _fun103619_ip = 0;;) switch (_fun103619_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = var1.length;
                            var1 = _closure1_slot13;
                            if (!(!(var2 >= var1))) {
                                _fun103619_ip = 107;
                                continue _fun103619
                            }
                        case 23:
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var0 = _closure1_slot16;
                            var0 = var0.LOGIN;
                            var0 = var1.bind(var2)(var0);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 27;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.track;
                            var0 = _closure1_slot15;
                            var1 = var0.LOGIN_VIEWED;
                            var0 = {};
                            var4 = 'multi_account_add_account';
                            var0.source = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            _fun103619_ip = 264;
                            continue _fun103619;
                        case 107:
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var0 = 17;
                            var0 = var9[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.show;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = 18;
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
                            var7 = _closure1_slot13;
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
                var14.onPress = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 742:
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.footer = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot6 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MultiAccountTokenStatus;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.MANAGE_EDIT_TRANSITION_DURATION;
    var _closure1_slot12 = var7;
    var3 = var3.MAX_ACCOUNTS;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ManageAccountsScreens;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot15 = var7;
    var3 = var3.AuthStates;
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot17 = var7;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var10 = 12;
    var3 = var5[var10];
    var7 = var4.bind(var0)(var3);
    var3 = var7.createNativeStackNavigator;
    var3 = var3.bind(var7)();
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'backgroundColor': null,
        'flex': 1,
        'paddingTop': 16
    };
    var11 = 14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var3.container = var9;
    var9 = {};
    var9.flex = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.sortableListView = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_LINK;
    var9.color = var11;
    var3.addAccountLabel = var9;
    var9 = {};
    var9.marginTop = var10;
    var3.spinner = var9;
    var9 = {
        'width': 24,
        'height': 24
    };
    var3.trailingIconContainer = var9;
    var9 = {};
    var10 = 'absolute';
    var9.position = var10;
    var3.trailingIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var7 = 'function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}';
    var3.code = var7;
    var _closure1_slot21 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun103620: for (var _fun103620_ip = 0;;) switch (_fun103620_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.initialRouteName;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun103620_ip = 30;
                    continue _fun103620
                }
            case 17:
                var0 = _closure1_slot14;
                var4 = var0.MANAGE_ACCOUNTS;
            case 30:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 36;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useAccessibilityNativeStackOptions;
                var0 = var0.bind(var1)();
                _closure2_slot0 = var0;
                var2 = _closure1_slot6;
                var1 = var2.useState;
                var0 = false;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var1[var0];
                _closure2_slot1 = var0;
                var0 = 1;
                var0 = var1[var0];
                _closure2_slot2 = var0;
                var2 = _closure1_slot18;
                var5 = _closure1_slot19;
                var1 = var5.Navigator;
                var0 = {};
                var0.initialRouteName = var4;
                var4 = function arg0() {
                    _fun103621: for (var _fun103621_ip = 0;;) switch (_fun103621_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.navigation;
                            var0 = {};
                            var1 = function arg0() {
                                var2 = arg0;
                                var5 = var2.children;
                                var0 = null;
                                var1 = Object.create(var0);
                                var0 = 0;
                                var1.children = var0;
                                var8 = {};
                                var7 = var2;
                                var6 = var1;
                                var7 = copyDataProperties(var8, var7, var6);
                                var3 = _closure1_slot17;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 37;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.GenericHeaderTitle;
                                var0 = {};
                                var0.title = var5;
                                var8 = var0;
                                var4 = copyDataProperties(var8, var7);
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.headerTitle = var1;
                            var4 = _closure2_slot1;
                            var2 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun103621_ip = 73;
                                continue _fun103621
                            }
                        case 39:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var4 = 37;
                            var4 = var7[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.getRenderModalCloseImage;
                            var3 = var4.bind(var5)(var6);
                        case 73:
                            var0.headerLeft = var3;
                            var3 = 'center';
                            var0.headerTitleAlign = var3;
                            var8 = _closure2_slot0;
                            var9 = var0;
                            var1 = copyDataProperties(var9, var8);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 38;
                            var1 = var4[var1];
                            var1 = var3.bind(var2)(var1);
                            var8 = var1.bind(var2)();
                            var9 = var0;
                            var1 = copyDataProperties(var9, var8);
                            return var0;
                    }
                };
                var0.screenOptions = var4;
                var10 = _closure1_slot17;
                var7 = var5.Screen;
                var4 = {};
                var9 = _closure1_slot14;
                var11 = var9.MANAGE_ACCOUNTS;
                var4.name = var11;
                var11 = function() {
                    _fun103623: for (var _fun103623_ip = 0;;) switch (_fun103623_ip) {
                        case 0:
                            var0 = {};
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var10 = 18;
                            var4 = var1[var10];
                            var9 = undefined;
                            var4 = var6.bind(var9)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var1[var10];
                            var1 = var6.bind(var9)(var1);
                            var1 = var1.t;
                            var1 = var1.WbFpq4;
                            var1 = var4.bind(var5)(var1);
                            var0.title = var1;
                            var1 = _closure2_slot1;
                            var8 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var4 = 37;
                            var4 = var3[var4];
                            var5 = var8.bind(var9)(var4);
                            var4 = var5.getRenderHeaderTextButton;
                            var6 = var3[var10];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var3 = var3[var10];
                            var3 = var8.bind(var9)(var3);
                            var3 = var3.t;
                            if (var1) {
                                _fun103623_ip = 163;
                                continue _fun103623
                            }
                        case 137:
                            var1 = var3.bt75uw;
                            var8 = var6.bind(var7)(var1);
                            var1 = function() { // Environment: var2
                                var2 = _closure2_slot2;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var4.bind(var5)(var8, var1);
                            _fun103623_ip = 187;
                            continue _fun103623;
                        case 163:
                            var3 = var3.i4jeWR;
                            var3 = var6.bind(var7)(var3);
                            var2 = function() { // Environment: var2
                                var2 = _closure2_slot2;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var4.bind(var5)(var3, var2);
                        case 187:
                            var0.headerRight = var1;
                            return var0;
                    }
                };
                var4.options = var11;
                var11 = function arg0() {
                    var0 = arg0;
                    var0 = var0.navigation;
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot23;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1.isEditing = var4;
                    var1.navigation = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4.children = var11;
                var7 = var10.bind(var3)(var7, var4);
                var4 = new Array(4);
                var4[0] = var7;
                var11 = _closure1_slot17;
                var10 = var5.Screen;
                var7 = {};
                var12 = var9.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
                var7.name = var12;
                var12 = function() {
                    var0 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 18;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.WbFpq4;
                    var1 = var2.bind(var3)(var1);
                    var0.title = var1;
                    return var0;
                };
                var7.options = var12;
                var12 = function() {
                    var3 = _closure1_slot17;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 39;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = function arg0, arg1, arg2() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 40;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.login;
                        var1 = {};
                        var4 = arg0;
                        var1.login = var4;
                        var4 = arg1;
                        var1.password = var4;
                        var4 = arg2;
                        var1.undelete = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleLogin = var5;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 40;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.loginReset;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.onReset = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.children = var12;
                var7 = var11.bind(var3)(var10, var7);
                var4[1] = var7;
                var11 = _closure1_slot17;
                var10 = var5.Screen;
                var7 = {};
                var12 = var9.LOGIN;
                var7.name = var12;
                var12 = function() {
                    var0 = {};
                    var1 = false;
                    var0.headerShown = var1;
                    return var0;
                };
                var7.options = var12;
                var12 = function() {
                    var3 = _closure1_slot17;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 41;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = true;
                    var0.isMultiAccount = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.children = var12;
                var7 = var11.bind(var3)(var10, var7);
                var4[2] = var7;
                var7 = _closure1_slot17;
                var6 = var5.Screen;
                var5 = {};
                var9 = var9.MFA;
                var5.name = var9;
                var9 = function() {
                    var0 = {};
                    var1 = false;
                    var0.headerShown = var1;
                    return var0;
                };
                var5.options = var9;
                var8 = function() {
                    var3 = _closure1_slot17;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 42;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/native/ManageAccountsModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1216, 3238, 1621, 10347, 10348, 13535, 660, 33, 9192, 1297, 671, 566, 9352, 3937, 1234, 4875, 11082, 4904, 10968, 13121, 3721, 4097, 5358, 795, 4736, 13536, 13122, 10429, 10431, 4911, 5430, 10971, 5837, 8972, 9201, 13146, 4557, 7548, 13145, 2]);