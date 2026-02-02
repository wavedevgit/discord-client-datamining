// modules/guild_member_verification/native/components/MemberVerificationModal.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SCROLL_EVENT_TIMER_MS;
    var _closure1_slot8 = var6;
    var3 = var3.useBannerHeight;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var10.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.flex = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 9;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.flexLoading = var8;
    var8 = {};
    var8.flex = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.scrollContainer = var8;
    var11 = 'absolute';
    var8 = {
        'position': 'absolute',
        'right': 0
    };
    var3.closeButtonContainer = var8;
    var8 = {
        'position': 'relative',
        'marginTop': 10,
        'marginRight': 20,
        'width': 24,
        'height': 24
    };
    var3.closeIconContainer = var8;
    var8 = {};
    var8.position = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8.tintColor = var12;
    var3.closeIcon = var8;
    var8 = {};
    var8.position = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8.tintColor = var12;
    var3.closeIconOverBanner = var8;
    var8 = {};
    var8.position = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var8.tintColor = var9;
    var3.closeIconAfterBanner = var8;
    var8 = {
        'marginHorizontal': 16,
        'marginVertical': 12
    };
    var3.headerSeparator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}";
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}";
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/MemberVerificationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60279: for (var _fun60279_ip = 0;;) switch (_fun60279_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var16 = var1.onClose;
                var _closure2_slot1 = var16;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var1 = _closure1_slot13;
                var5 = var1.bind(var4)();
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var1 = var8.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var24 = var1.bottom;
                var15 = var1.top;
                var _closure2_slot2 = var15;
                var3 = _closure1_slot0;
                var9 = 6;
                var1 = var6[var9];
                var10 = var3.bind(var4)(var1);
                var2 = var10.useSharedValue;
                var1 = 0;
                var23 = var2.bind(var10)(var1);
                var _closure2_slot3 = var23;
                var1 = var6[var9];
                var10 = var3.bind(var4)(var1);
                var2 = var10.useAnimatedScrollHandler;
                var1 = function arg0() {
                    var0 = arg0;
                    var0 = var0.contentOffset;
                    var2 = var0.y;
                    var1 = _closure2_slot3;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var11 = {};
                var11.scrollTop = var23;
                var1.__closure = var11;
                var11 = 16447800091731.0;
                var1.__workletHash = var11;
                var11 = _closure1_slot14;
                var1.__initData = var11;
                var11 = var2.bind(var10)(var1);
                var1 = 11;
                var1 = var6[var1];
                var1 = var8.bind(var4)(var1);
                var17 = var1.bind(var4)();
                var _closure2_slot4 = var17;
                var1 = _closure1_slot9;
                var13 = var1.bind(var4)();
                var _closure2_slot5 = var13;
                var1 = var6[var9];
                var10 = var3.bind(var4)(var1);
                var2 = var10.useAnimatedStyle;
                var1 = function() {
                    _fun60281: for (var _fun60281_ip = 0;;) switch (_fun60281_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.interpolate;
                            var3 = _closure2_slot3;
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var3 = _closure2_slot5;
                            var2 = _closure2_slot2;
                            var2 = var3 - var2;
                            var3 = [0];
                            var3[1] = var2;
                            var7 = _closure2_slot4;
                            var2 = 'dark';
                            var1 = 0;
                            if (!(var2 === var7)) {
                                _fun60281_ip = 92;
                                continue _fun60281
                            }
                        case 89:
                            var1 = 1;
                        case 92:
                            var2 = [1];
                            var2[1] = var1;
                            var8 = 'clamp';
                            var12 = var6;
                            var11 = var4;
                            var10 = var3;
                            var9 = var2;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var12 = {};
                var18 = var6[var9];
                var18 = var3.bind(var4)(var18);
                var18 = var18.interpolate;
                var12.interpolate = var18;
                var12.scrollTop = var23;
                var12.bannerHeight = var13;
                var12.safeAreaTop = var15;
                var12.theme = var17;
                var1.__closure = var12;
                var12 = 9776820170891.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot15;
                var1.__initData = var12;
                var21 = var2.bind(var10)(var1);
                var1 = var6[var9];
                var10 = var3.bind(var4)(var1);
                var2 = var10.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.interpolate;
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var10 = var2.bind(var3)();
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot2;
                    var1 = var2 - var1;
                    var3 = [0];
                    var3[1] = var1;
                    var8 = [0, 1];
                    var7 = 'clamp';
                    var11 = var6;
                    var9 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.opacity = var1;
                    return var0;
                };
                var12 = {};
                var17 = var6[var9];
                var17 = var3.bind(var4)(var17);
                var17 = var17.interpolate;
                var12.interpolate = var17;
                var12.scrollTop = var23;
                var12.bannerHeight = var13;
                var12.safeAreaTop = var15;
                var1.__closure = var12;
                var12 = 4275816745587.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot16;
                var1.__initData = var12;
                var18 = var2.bind(var10)(var1);
                var1 = 12;
                var1 = var6[var1];
                var2 = var3.bind(var4)(var1);
                var1 = var2.useSetInitialVerificationEffect;
                var2 = var1.bind(var2)(var0);
                var1 = 13;
                var1 = var6[var1];
                var1 = var8.bind(var4)(var1);
                var17 = var1.bind(var4)(var0);
                var1 = 14;
                var1 = var6[var1];
                var8 = var3.bind(var4)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var14
                    var2 = _closure1_slot7;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var6.bind(var8)(var3, var0, var1);
                var _closure2_slot6 = var3;
                var10 = _closure1_slot3;
                var8 = var10.useMemo;
                var1 = null;
                var6 = var1 == var3;
                var0 = undefined;
                if (var6) {
                    _fun60279_ip = 524;
                    continue _fun60279
                }
            case 518:
                var0 = var3.formFields;
            case 524:
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var14
                    _fun60284: for (var _fun60284_ip = 0;;) switch (_fun60284_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = null;
                            var4 = var0 == var1;
                            var1 = undefined;
                            if (var4) {
                                _fun60284_ip = 55;
                                continue _fun60284
                            }
                        case 18:
                            var2 = _closure2_slot6;
                            var4 = var2.formFields;
                            var2 = var0 == var4;
                            var1 = undefined;
                            if (var2) {
                                _fun60284_ip = 55;
                                continue _fun60284
                            }
                        case 37:
                            var3 = var4.some;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.field_type;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 15;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2);
                                var0 = var0.VerificationFormFieldTypes;
                                var0 = var0.TERMS;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2);
                        case 55:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun60284_ip = 65;
                                continue _fun60284
                            }
                        case 62:
                            var0 = var1;
                        case 65:
                            return var0;
                    }
                };
                var13 = var8.bind(var10)(var0, var6);
                var8 = _closure1_slot3;
                var6 = var8.useMemo;
                var10 = var1 == var3;
                var0 = undefined;
                if (var10) {
                    _fun60279_ip = 567;
                    continue _fun60279
                }
            case 561:
                var0 = var3.formFields;
            case 567:
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var14
                    _fun60286: for (var _fun60286_ip = 0;;) switch (_fun60286_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = null;
                            var4 = var1 == var2;
                            var6 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun60286_ip = 32;
                                continue _fun60286
                            }
                        case 22:
                            var3 = _closure2_slot6;
                            var2 = var3.formFields;
                        case 32:
                            if (!(var1 == var2)) {
                                _fun60286_ip = 40;
                                continue _fun60286
                            }
                        case 36:
                            var2 = new Array(0);
                        case 40:
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.values;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 15;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.VerificationFormFieldTypes;
                            var1 = var3.bind(var4)(var1);
                            var _closure3_slot0 = var1;
                            var1 = var2.some;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var0.field_type;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = var6.bind(var8)(var0, var3);
                _closure2_slot7 = var0;
                var10 = _closure1_slot3;
                var3 = var10.useRef;
                var3 = var3.bind(var10)(var16);
                _closure2_slot8 = var3;
                var6 = var10.useEffect;
                var3 = function() { // Environment: var14
                    var1 = _closure2_slot8;
                    var0 = _closure2_slot1;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var6.bind(var10)(var3);
                var8 = var10.useEffect;
                var6 = new Array(1);
                var6[0] = var0;
                var3 = function() { // Environment: var14
                    _fun60289: for (var _fun60289_ip = 0;;) switch (_fun60289_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            if (!var0) {
                                _fun60289_ip = 53;
                                continue _fun60289
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                _fun60290: for (var _fun60290_ip = 0;;) switch (_fun60290_ip) {
                                    case 0:
                                        var1 = _closure2_slot8;
                                        var2 = var1.current;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun60290_ip = 31;
                                            continue _fun60290
                                        }
                                    case 18:
                                        var1 = _closure2_slot8;
                                        var0 = var1.current;
                                        var0 = var0.bind(var1)();
                                    case 31:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 17;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.openMemberVerificationUpdateAlert;
                                        var1 = var1.bind(var2)();
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var8.bind(var10)(var3, var6);
                if (!(var1 != var17)) {
                    _fun60279_ip = 1212;
                    continue _fun60279
                }
            case 654:
                if (!(var1 != var2)) {
                    _fun60279_ip = 1212;
                    continue _fun60279
                }
            case 661:
                if (var0) {
                    _fun60279_ip = 1212;
                    continue _fun60279
                }
            case 667:
                var2 = _closure1_slot10;
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 18;
                var0 = var20[var0];
                var0 = var22.bind(var4)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var8 = _closure1_slot11;
                var19 = _closure1_slot1;
                var3 = 19;
                var3 = var20[var3];
                var6 = var19.bind(var4)(var3);
                var3 = {};
                var10 = var5.flex;
                var3.style = var10;
                var9 = var20[var9];
                var9 = var19.bind(var4)(var9);
                var10 = var9.ScrollView;
                var9 = {};
                var12 = var5.scrollContainer;
                var9.style = var12;
                var12 = {};
                var12.paddingBottom = var24;
                var9.contentContainerStyle = var12;
                var12 = _closure1_slot8;
                var9.scrollEventThrottle = var12;
                var12 = 'handled';
                var9.keyboardShouldPersistTaps = var12;
                var9.onScroll = var11;
                var11 = 20;
                var11 = var20[var11];
                var12 = var19.bind(var4)(var11);
                var11 = {};
                var11.guild = var17;
                var11.scrollTop = var23;
                var11.hasManualFormFields = var13;
                var12 = var2.bind(var4)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var12 = 21;
                var12 = var20[var12];
                var13 = var19.bind(var4)(var12);
                var12 = {};
                var23 = var5.headerSeparator;
                var12.style = var23;
                var12 = var2.bind(var4)(var13, var12);
                var11[1] = var12;
                var12 = 22;
                var12 = var20[var12];
                var13 = var19.bind(var4)(var12);
                var12 = {};
                var12.guild = var17;
                var17 = function arg0() {
                    _fun60291: for (var _fun60291_ip = 0;;) switch (_fun60291_ip) {
                        case 0:
                            var4 = _closure1_slot6;
                            var3 = var4.getSelfMember;
                            var0 = _closure2_slot0;
                            var3 = var3.bind(var4)(var0);
                            var0 = null;
                            var4 = var0 != var3;
                            var0 = arg0;
                            var5 = var0.application_status;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 15;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.SUBMITTED;
                            var3 = var5 !== var3;
                            if (var3) {
                                _fun60291_ip = 84;
                                continue _fun60291
                            }
                        case 81:
                            var3 = var4;
                        case 84:
                            if (var3) {
                                _fun60291_ip = 122;
                                continue _fun60291
                            }
                        case 87:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 17;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openMemberVerificationPendingAlert;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 122:
                            return var0;
                    }
                };
                var12.onSuccess = var17;
                var12.onClose = var16;
                var12 = var2.bind(var4)(var13, var12);
                var11[2] = var12;
                var9.children = var11;
                var10 = var8.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var11 = _closure1_slot5;
                var10 = {};
                var13 = var5.closeButtonContainer;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var13.top = var15;
                var12[1] = var13;
                var10.style = var12;
                var12 = 23;
                var12 = var20[var12];
                var12 = var22.bind(var4)(var12);
                var13 = var12.PressableOpacity;
                var12 = {};
                var15 = 'button';
                var12.accessibilityRole = var15;
                var15 = 24;
                var16 = var20[var15];
                var16 = var22.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var20[var15];
                var15 = var22.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.cpT0Cq;
                var15 = var16.bind(var17)(var15);
                var12.accessibilityLabel = var15;
                var15 = var5.closeIconContainer;
                var12.style = var15;
                var14 = function() {
                    _fun60292: for (var _fun60292_ip = 0;;) switch (_fun60292_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun60292_ip = 28;
                                continue _fun60292
                            }
                        case 20:
                            var1 = _closure2_slot1;
                            var0 = var1.bind(var2)();
                        case 28:
                            return var0;
                    }
                };
                var12.onPress = var14;
                var16 = _closure1_slot12;
                var14 = {};
                var17 = 25;
                var15 = var20[var17];
                var15 = var19.bind(var4)(var15);
                var14.source = var15;
                var22 = var5.closeIconOverBanner;
                var15 = new Array(2);
                var15[0] = var22;
                var15[1] = var21;
                var14.style = var15;
                var15 = var2.bind(var4)(var16, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var17 = var20[var17];
                var17 = var19.bind(var4)(var17);
                var15.source = var17;
                var19 = var5.closeIconAfterBanner;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var15.style = var17;
                var15 = var2.bind(var4)(var16, var15);
                var14[1] = var15;
                var12.children = var14;
                var12 = var8.bind(var4)(var13, var12);
                var10.children = var12;
                var10 = var2.bind(var4)(var11, var10);
                var9[1] = var10;
                var3.children = var9;
                var3 = var8.bind(var4)(var6, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun60279_ip = 1303;
                continue _fun60279;
            case 1212:
                var3 = _closure1_slot10;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var5.flexLoading;
                var1.style = var5;
                var6 = _closure1_slot4;
                var5 = {
                    'animating': true,
                    'color': null,
                    'size': 'large'
                };
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.unsafe_rawColors;
                var7 = var7.BRAND_500;
                var5.color = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1303:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1672, 4666, 7410, 33, 3681, 4047, 1297, 671, 1568, 3207, 7411, 7413, 566, 3177, 806, 7384, 4862, 5736, 7414, 7419, 7420, 4867, 1234, 6631, 2]);