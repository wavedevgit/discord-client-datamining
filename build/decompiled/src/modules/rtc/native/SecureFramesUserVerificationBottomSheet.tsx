// modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsSecureFramesUserVerification;
    var _closure1_slot9 = var6;
    var6 = var3.SECURE_FRAMES_PUBLIC_KEY_VERSION;
    var _closure1_slot10 = var6;
    var3 = var3.USER_VERIFIED_TOAST_KEY;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsLocations;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'height': 80,
        'width': 80,
        'borderRadius': 40,
        'alignItems': 'center',
        'justifyContent': 'center',
        'backgroundColor': null,
        'marginBottom': 16
    };
    var10 = 40;
    var9 = 9;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var9;
    var9 = 16;
    var3.iconContainer = var8;
    var8 = {
        'height': 48,
        'width': 48
    };
    var3.icon = var8;
    var8 = {
        'padding': 16,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.content = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 40
    };
    var3.subtitle = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.buttons = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.helpMessage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66829: for (var _fun66829_ip = 0;;) switch (_fun66829_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.userId;
                var _closure2_slot0 = var14;
                var9 = var1.channelId;
                var _closure2_slot1 = var9;
                var8 = var1.guildId;
                var24 = var1.fingerprint;
                var _closure2_slot2 = var24;
                var1 = _closure1_slot15;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var _closure2_slot3 = var11;
                var7 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 10;
                var1 = var22[var1];
                var4 = var7.bind(var3)(var1);
                var2 = var4.useSecureFramesPairwiseFingerprint;
                var1 = {};
                var1.userId = var14;
                var1 = var2.bind(var4)(var1);
                var10 = var1.userKey;
                var _closure2_slot4 = var10;
                var15 = var1.fingerprint;
                var _closure2_slot5 = var15;
                var18 = var1.loading;
                var1 = 11;
                var1 = var22[var1];
                var4 = var7.bind(var3)(var1);
                var2 = var4.useIsSecureFramesUIEnabled;
                var1 = {};
                var1.channelId = var9;
                var19 = var2.bind(var4)(var1);
                var _closure2_slot6 = var19;
                var12 = 12;
                var1 = var22[var12];
                var4 = var7.bind(var3)(var1);
                var2 = var4.useIsUserSecureFramesVerified;
                var1 = {};
                var1.userId = var14;
                var1.channelId = var9;
                var2 = var2.bind(var4)(var1);
                var _closure2_slot7 = var2;
                var1 = 13;
                var1 = var22[var1];
                var5 = var7.bind(var3)(var1);
                var4 = var5.useIsPersistentSecureFramesFingerprint;
                var1 = {};
                var1.userId = var14;
                var1 = var4.bind(var5)(var1);
                var6 = var1.isOtherUserKeyPersistent;
                var _closure2_slot8 = var6;
                var17 = var1.loading;
                var1 = 14;
                var4 = var22[var1];
                var21 = var7.bind(var3)(var4);
                var20 = var21.useStateFromStores;
                var4 = _closure1_slot7;
                var16 = new Array(1);
                var16[0] = var4;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var23 = var20.bind(var21)(var16, var5);
                var _closure2_slot9 = var23;
                var5 = var22[var1];
                var20 = var7.bind(var3)(var5);
                var16 = var20.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.isUserConnected;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var16.bind(var20)(var5, var4);
                var _closure2_slot10 = var20;
                var4 = 15;
                var4 = var22[var4];
                var16 = var7.bind(var3)(var4);
                var5 = var16.useIsSecureFramesKeyInconsistent;
                var4 = {};
                var4.userId = var14;
                var21 = var5.bind(var16)(var4);
                var _closure2_slot11 = var21;
                var4 = _closure1_slot4;
                var16 = var4.useMemo;
                var5 = new Array(8);
                var5[0] = var24;
                var5[1] = var9;
                var5[2] = var15;
                var5[3] = var23;
                var5[4] = var21;
                var5[5] = var20;
                var5[6] = var19;
                var5[7] = var2;
                var2 = function() { // Environment: var0
                    _fun66832: for (var _fun66832_ip = 0;;) switch (_fun66832_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun66832_ip = 20;
                                continue _fun66832
                            }
                        case 13:
                            var0 = _closure2_slot9;
                            if (var0) {
                                _fun66832_ip = 38;
                                continue _fun66832
                            }
                        case 20:
                            var0 = _closure1_slot9;
                            var0 = var0.CURRENT_USER_DISCONNECTED;
                            _fun66832_ip = 175;
                            continue _fun66832;
                        case 38:
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun66832_ip = 60;
                                continue _fun66832
                            }
                        case 45:
                            var1 = _closure1_slot9;
                            var1 = var1.OTHER_USER_DISCONNECTED;
                            _fun66832_ip = 172;
                            continue _fun66832;
                        case 60:
                            var2 = _closure2_slot6;
                            if (var2) {
                                _fun66832_ip = 82;
                                continue _fun66832
                            }
                        case 67:
                            var2 = _closure1_slot9;
                            var2 = var2.UNABLE_TO_VERIFY;
                            _fun66832_ip = 169;
                            continue _fun66832;
                        case 82:
                            var4 = _closure2_slot7;
                            if (var4) {
                                _fun66832_ip = 153;
                                continue _fun66832
                            }
                        case 89:
                            var4 = _closure2_slot11;
                            if (var4) {
                                _fun66832_ip = 138;
                                continue _fun66832
                            }
                        case 96:
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot5;
                            if (!(var4 === var3)) {
                                _fun66832_ip = 123;
                                continue _fun66832
                            }
                        case 108:
                            var3 = _closure1_slot9;
                            var3 = var3.MATCH;
                            _fun66832_ip = 136;
                            continue _fun66832;
                        case 123:
                            var4 = _closure1_slot9;
                            var3 = var4.FINGERPRINT_MISMATCH;
                        case 136:
                            _fun66832_ip = 151;
                            continue _fun66832;
                        case 138:
                            var4 = _closure1_slot9;
                            var3 = var4.OTHER_USER_INCONSISTENT_KEYS;
                        case 151:
                            _fun66832_ip = 166;
                            continue _fun66832;
                        case 153:
                            var4 = _closure1_slot9;
                            var3 = var4.OTHER_USER_ALREADY_VERIFIED;
                        case 166:
                            var2 = var3;
                        case 169:
                            var1 = var2;
                        case 172:
                            var0 = var1;
                        case 175:
                            return var0;
                    }
                };
                var20 = var16.bind(var4)(var2, var5);
                var _closure2_slot12 = var20;
                var16 = var4.useEffect;
                var5 = new Array(1);
                var5[0] = var14;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getUser;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var16.bind(var4)(var2, var5);
                var1 = var22[var1];
                var16 = var7.bind(var3)(var1);
                var5 = var16.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var16)(var2, var1);
                var2 = _closure1_slot1;
                var1 = 17;
                var1 = var22[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useName;
                var5 = var1.bind(var2)(var8, var9, var5);
                var _closure2_slot13 = var5;
                var8 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var20;
                var2[1] = var5;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getUserVerifyStateText;
                    var1 = _closure2_slot12;
                    var0 = _closure2_slot13;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var8.bind(var4)(var1, var2);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var8, var1);
                var1 = 0;
                var24 = var2[var1];
                var1 = 1;
                var21 = var2[var1];
                var8 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var9;
                var2[1] = var20;
                var2[2] = var14;
                var1 = function() { // Environment: var0
                    _fun66836: for (var _fun66836_ip = 0;;) switch (_fun66836_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var0 = _closure1_slot9;
                            var0 = var0.OTHER_USER_ALREADY_VERIFIED;
                            if (!(var0 !== var1)) {
                                _fun66836_ip = 109;
                                continue _fun66836
                            }
                        case 24:
                            var0 = _closure1_slot9;
                            var0 = var0.MATCH;
                            if (!(var0 !== var1)) {
                                _fun66836_ip = 109;
                                continue _fun66836
                            }
                        case 38:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackE2EEUserVerificationFailed;
                            var1 = {};
                            var6 = _closure2_slot1;
                            var1.channelId = var6;
                            var6 = _closure2_slot0;
                            var1.userId = var6;
                            var5 = _closure2_slot12;
                            var1.reason = var5;
                            var4 = _closure1_slot10;
                            var1.keyVersion = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var4)(var1, var2);
                var8 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var20;
                var1 = var11.icon;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun66837: for (var _fun66837_ip = 0;;) switch (_fun66837_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var0 = _closure1_slot9;
                            var0 = var0.OTHER_USER_ALREADY_VERIFIED;
                            if (!(var0 !== var1)) {
                                _fun66837_ip = 124;
                                continue _fun66837
                            }
                        case 24:
                            var0 = _closure1_slot9;
                            var0 = var0.MATCH;
                            if (!(var0 !== var1)) {
                                _fun66837_ip = 124;
                                continue _fun66837
                            }
                        case 38:
                            var3 = _closure1_slot13;
                            var1 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 21;
                            var0 = var8[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.XLargeBoldIcon;
                            var0 = {};
                            var6 = _closure2_slot3;
                            var6 = var6.icon;
                            var0.style = var6;
                            var7 = _closure1_slot1;
                            var6 = 9;
                            var6 = var8[var6];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.colors;
                            var6 = var6.TEXT_FEEDBACK_CRITICAL;
                            var0.color = var6;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 124:
                            var3 = _closure1_slot13;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 20;
                            var0 = var6[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.CheckmarkLargeBoldIcon;
                            var0 = {};
                            var5 = _closure2_slot3;
                            var5 = var5.icon;
                            var0.style = var5;
                            var5 = _closure1_slot1;
                            var4 = 9;
                            var4 = var6[var4];
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.colors;
                            var4 = var4.TEXT_FEEDBACK_POSITIVE;
                            var0.color = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var4)(var1, var2);
                var16 = var4.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var1 = new Array(0);
                var16 = var16.bind(var4)(var2, var1);
                var2 = var4.useCallback;
                var1 = new Array(5);
                var1[0] = var9;
                var1[1] = var10;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var14;
                var0 = function() { // Environment: var0
                    _fun66839: for (var _fun66839_ip = 0;;) switch (_fun66839_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun66839_ip = 24;
                                continue _fun66839
                            }
                        case 16:
                            var1 = _closure2_slot4;
                            var0 = var2 != var1;
                        case 24:
                            if (!var0) {
                                _fun66839_ip = 248;
                                continue _fun66839
                            }
                        case 30:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 18;
                            var0 = var9[var0];
                            var4 = undefined;
                            var11 = var8.bind(var4)(var0);
                            var10 = var11.addVerification;
                            var16 = _closure2_slot0;
                            var15 = _closure2_slot4;
                            var14 = _closure2_slot8;
                            var13 = _closure2_slot1;
                            var0 = _closure1_slot12;
                            var12 = var0.DEEP_LINK;
                            var17 = var11;
                            var0 = var17[var10](var16, var15, var14, var13, var12, var11);
                            var1 = _closure1_slot1;
                            var0 = 22;
                            var0 = var9[var0];
                            var2 = var1.bind(var4)(var0);
                            var0 = var2.hideActionSheet;
                            var0 = var0.bind(var2)();
                            var0 = 23;
                            var0 = var9[var0];
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var3 = _closure1_slot11;
                            var0.key = var3;
                            var3 = 'text-feedback-positive';
                            var0.iconColor = var3;
                            var3 = 24;
                            var3 = var9[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.CircleCheckIcon;
                            var0.IconComponent = var3;
                            var3 = 25;
                            var5 = var9[var3];
                            var5 = var8.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var3 = var9[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.t;
                            var4 = var3.Gwu134;
                            var3 = {};
                            var7 = _closure2_slot13;
                            var3.username = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.content = var3;
                            var0 = var1.bind(var2)(var0);
                        case 248:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot13;
                var0 = 26;
                var0 = var22[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var4 = 27;
                var4 = var22[var4];
                var4 = var7.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var9 = null;
                var4.title = var9;
                var6 = 28;
                var6 = var22[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.ActionSheetCloseButton;
                var6 = {};
                var6.onPress = var16;
                var6 = var2.bind(var3)(var7, var6);
                var4.leading = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var11.content;
                var4.style = var7;
                var7 = {};
                var22 = var11.iconContainer;
                var7.style = var22;
                if (var17) {
                    _fun66829_ip = 843;
                    continue _fun66829
                }
            case 836:
                if (var18) {
                    _fun66829_ip = 843;
                    continue _fun66829
                }
            case 839:
                if (!(var9 == var15)) {
                    _fun66829_ip = 859;
                    continue _fun66829
                }
            case 843:
                var18 = _closure1_slot13;
                var15 = _closure1_slot5;
                var9 = {};
                var8 = var18.bind(var3)(var15, var9);
            case 859:
                var7.children = var8;
                var8 = var2.bind(var3)(var5, var7);
                var7 = new Array(5);
                var7[0] = var8;
                var15 = _closure1_slot13;
                var23 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 29;
                var9 = var18[var8];
                var9 = var23.bind(var3)(var9);
                var22 = var9.Text;
                var9 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var9.children = var24;
                var9 = var15.bind(var3)(var22, var9);
                var7[1] = var9;
                var8 = var18[var8];
                var8 = var23.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var22 = var11.subtitle;
                var8.style = var22;
                var8.children = var21;
                var8 = var15.bind(var3)(var9, var8);
                var7[2] = var8;
                var9 = _closure1_slot1;
                var8 = 30;
                var8 = var18[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var21 = var11.helpMessage;
                var8.style = var21;
                var8.userId = var14;
                var8.userKey = var10;
                var8 = var15.bind(var3)(var9, var8);
                var7[3] = var8;
                var10 = _closure1_slot14;
                var8 = 31;
                var8 = var18[var8];
                var8 = var23.bind(var3)(var8);
                var9 = var8.Stack;
                var8 = {};
                var8.spacing = var12;
                var11 = var11.buttons;
                var8.style = var11;
                var12 = 32;
                var11 = var18[var12];
                var11 = var23.bind(var3)(var11);
                var14 = var11.Button;
                var11 = {};
                var21 = 'primary';
                var11.variant = var21;
                var11.onPress = var19;
                var19 = 25;
                var21 = var18[var19];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var18 = var18[var19];
                var18 = var23.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["0tvNAn"];
                var18 = var21.bind(var22)(var18);
                var11.text = var18;
                if (var17) {
                    _fun66829_ip = 1173;
                    continue _fun66829
                }
            case 1159:
                var18 = _closure1_slot9;
                var18 = var18.MATCH;
                var17 = var20 !== var18;
            case 1173:
                var11.disabled = var17;
                var14 = var15.bind(var3)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot13;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = var15[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var17 = 'secondary';
                var12.variant = var17;
                var12.onPress = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["ETE/oC"];
                var15 = var16.bind(var17)(var15);
                var12.text = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3477, 1613, 8224, 660, 33, 1297, 671, 8228, 8243, 8204, 8230, 566, 8234, 6915, 3920, 8223, 8231, 8244, 8246, 3237, 3107, 3230, 1234, 4894, 5174, 5172, 3900, 8236, 4039, 4043, 2]);