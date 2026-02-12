// modules/rtc/native/SecureFramesUserVerificationModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.USER_VERIFICATION_CHUNK_SIZE;
    var _closure1_slot8 = var6;
    var6 = var3.USER_VERIFICATION_LENGTH;
    var _closure1_slot9 = var6;
    var6 = var3.USER_VERIFICATION_NUM_COLUMNS;
    var _closure1_slot10 = var6;
    var3 = var3.USER_VERIFIED_TOAST_KEY;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsLocations;
    var _closure1_slot12 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = 9;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'flex': 1,
        'padding': 16,
        'flexDirection': 'column'
    };
    var11 = 16;
    var12 = 10;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var12;
    var3.container = var10;
    var10 = {
        'flex': 1,
        'gap': 16,
        'justifyContent': 'flex-end'
    };
    var3.footer = var10;
    var10 = {};
    var12 = 'center';
    var10.textAlign = var12;
    var3.footerText = var10;
    var10 = {
        'height': 56,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.header = var10;
    var10 = {};
    var10.textAlign = var12;
    var3.subtitle = var10;
    var10 = {};
    var12 = 24;
    var10.marginTop = var12;
    var3.code = var10;
    var10 = {};
    var10.marginBottom = var11;
    var3.helpMessage = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ArrowLargeLeftIcon;
    var3 = {};
    var9 = 'md';
    var3.size = var9;
    var3 = var6.bind(var0)(var8, var3);
    var _closure1_slot18 = var3;
    var3 = {};
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot19 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/native/SecureFramesUserVerificationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69521: for (var _fun69521_ip = 0;;) switch (_fun69521_ip) {
            case 0:
                var1 = arg0;
                var25 = var1.userId;
                var _closure2_slot0 = var25;
                var5 = var1.channelId;
                var _closure2_slot1 = var5;
                var1 = _closure1_slot17;
                var3 = undefined;
                var22 = var1.bind(var3)();
                var31 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 12;
                var2 = var20[var1];
                var7 = var31.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var4, var2);
                var1 = var20[var1];
                var7 = var31.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun69523: for (var _fun69523_ip = 0;;) switch (_fun69523_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot1;
                            var2 = var1.bind(var2)(var0);
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun69523_ip = 45;
                                continue _fun69523
                            }
                        case 35:
                            var1 = var2.getGuildId;
                            var0 = var1.bind(var2)();
                        case 45:
                            return var0;
                    }
                };
                var4 = var4.bind(var7)(var2, var1);
                var17 = _closure1_slot1;
                var1 = 13;
                var1 = var20[var1];
                var2 = var17.bind(var3)(var1);
                var1 = var2.useName;
                var19 = null;
                var33 = var1.bind(var2)(var4, var19, var6);
                var _closure2_slot2 = var33;
                var1 = 14;
                var1 = var20[var1];
                var4 = var31.bind(var3)(var1);
                var2 = var4.useSecureFramesPairwiseFingerprint;
                var1 = {};
                var1.userId = var25;
                var1 = var2.bind(var4)(var1);
                var7 = var1.fingerprint;
                var _closure2_slot3 = var7;
                var24 = var1.userKey;
                var _closure2_slot4 = var24;
                var1 = 15;
                var1 = var20[var1];
                var4 = var31.bind(var3)(var1);
                var2 = var4.useReadableSecureFramesFingerprint;
                var1 = {};
                var1.fingerprintBase64 = var7;
                var6 = _closure1_slot8;
                var1.chunkSize = var6;
                var6 = _closure1_slot9;
                var1.desiredLength = var6;
                var16 = var2.bind(var4)(var1);
                var _closure2_slot5 = var16;
                var1 = 16;
                var1 = var20[var1];
                var4 = var31.bind(var3)(var1);
                var2 = var4.useIsUserSecureFramesVerified;
                var1 = {};
                var1.userId = var25;
                var1.channelId = var5;
                var12 = var2.bind(var4)(var1);
                var _closure2_slot6 = var12;
                var1 = 17;
                var1 = var20[var1];
                var4 = var31.bind(var3)(var1);
                var2 = var4.useIsPersistentSecureFramesFingerprint;
                var1 = {};
                var1.userId = var25;
                var2 = var2.bind(var4)(var1);
                var8 = var2.isCurrentUserKeyPersistent;
                var _closure2_slot7 = var8;
                var1 = var2.isOtherUserKeyPersistent;
                var _closure2_slot8 = var1;
                var18 = var2.loading;
                var4 = _closure1_slot4;
                var9 = var4.useCallback;
                var6 = new Array(5);
                var6[0] = var5;
                var6[1] = var24;
                var6[2] = var1;
                var6[3] = var33;
                var6[4] = var25;
                var2 = function() { // Environment: var0
                    _fun69524: for (var _fun69524_ip = 0;;) switch (_fun69524_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun69524_ip = 234;
                                continue _fun69524
                            }
                        case 16:
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
                            var12 = var0.E2EE_USER_VERIFY_MODAL;
                            var17 = var11;
                            var0 = var17[var10](var16, var15, var14, var13, var12, var11);
                            var1 = _closure1_slot1;
                            var0 = 19;
                            var0 = var9[var0];
                            var2 = var1.bind(var4)(var0);
                            var0 = var2.pop;
                            var0 = var0.bind(var2)();
                            var0 = 20;
                            var0 = var9[var0];
                            var2 = var1.bind(var4)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var3 = _closure1_slot11;
                            var0.key = var3;
                            var3 = 'text-feedback-positive';
                            var0.iconColor = var3;
                            var3 = 21;
                            var3 = var9[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.CircleCheckIcon;
                            var0.IconComponent = var3;
                            var3 = 22;
                            var5 = var9[var3];
                            var5 = var8.bind(var4)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var3 = var9[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.t;
                            var4 = var3.Gwu134;
                            var3 = {};
                            var7 = _closure2_slot2;
                            var3.username = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.content = var3;
                            var0 = var1.bind(var2)(var0);
                        case 234:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var9.bind(var4)(var2, var6);
                var9 = var4.useCallback;
                var6 = new Array(3);
                var6[0] = var24;
                var6[1] = var1;
                var6[2] = var25;
                var2 = function() { // Environment: var0
                    _fun69525: for (var _fun69525_ip = 0;;) switch (_fun69525_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun69525_ip = 89;
                                continue _fun69525
                            }
                        case 13:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 18;
                            var4 = var3[var2];
                            var2 = undefined;
                            var7 = var5.bind(var2)(var4);
                            var6 = var7.deleteVerification;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot4;
                            var1 = _closure2_slot8;
                            var1 = var6.bind(var7)(var5, var4, var1);
                            var1 = _closure1_slot1;
                            var0 = 19;
                            var0 = var3[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var15 = var9.bind(var4)(var2, var6);
                var2 = 23;
                var2 = var20[var2];
                var9 = var31.bind(var3)(var2);
                var6 = var9.useSecureFramesDeeplinkExperiment;
                var2 = {};
                var10 = 'SecureFramesUserVerificationModal';
                var2.location = var10;
                var2 = var6.bind(var9)(var2);
                var2 = var2.enabled;
                var _closure2_slot9 = var2;
                var9 = var4.useCallback;
                var6 = new Array(5);
                var6[0] = var5;
                var6[1] = var16;
                var6[2] = var7;
                var6[3] = var2;
                var6[4] = var25;
                var2 = function() { // Environment: var0
                    _fun69526: for (var _fun69526_ip = 0;;) switch (_fun69526_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun69526_ip = 224;
                                continue _fun69526
                            }
                        case 16:
                            var0 = _closure2_slot5;
                            if (!(var2 != var0)) {
                                _fun69526_ip = 224;
                                continue _fun69526
                            }
                        case 27:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 19;
                            var2 = var5[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.pop;
                            var2 = var2.bind(var4)();
                            var4 = _closure1_slot0;
                            var2 = 24;
                            var2 = var5[var2];
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.trackE2EEUserVerificationShareClicked;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var2.userId = var6;
                            var6 = _closure2_slot1;
                            var2.channelId = var6;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot9;
                            if (var2) {
                                _fun69526_ip = 136;
                                continue _fun69526
                            }
                        case 114:
                            var5 = _closure2_slot5;
                            var4 = var5.join;
                            var2 = ' ';
                            var4 = var4.bind(var5)(var2);
                            _fun69526_ip = 176;
                            continue _fun69526;
                        case 136:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 18;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.getUserVerificationDeeplink;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot3;
                            var4 = var5.bind(var6)(var2, var1);
                        case 176:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 25;
                            var1 = var5[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.showShareActionSheet;
                            var1 = {};
                            var1.message = var4;
                            var0 = _closure1_slot13;
                            var0 = var0.SECURE_FRAMES_VOICE_BOTTOM_SHEET;
                            var0 = var2.bind(var3)(var1, var0);
                        case 224:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var9.bind(var4)(var2, var6);
                var2 = 26;
                var2 = var20[var2];
                var2 = var17.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.analyticsLocations;
                var _closure2_slot10 = var2;
                var9 = var4.useCallback;
                var6 = new Array(3);
                var6[0] = var2;
                var6[1] = var5;
                var6[2] = var25;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 19;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.pop;
                    var1 = var1.bind(var4)();
                    var1 = 27;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.userId = var4;
                    var4 = _closure2_slot1;
                    var1.channelId = var4;
                    var4 = true;
                    var1.isVoiceContext = var4;
                    var3 = _closure2_slot10;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var23 = var9.bind(var4)(var2, var6);
                var2 = 28;
                var2 = var20[var2];
                var9 = var31.bind(var3)(var2);
                var6 = var9.useAlertIfSecureFramesKeyInconsistent;
                var2 = {};
                var2.channelId = var5;
                var2.userId = var25;
                var2.nickname = var33;
                var10 = 19;
                var10 = var20[var10];
                var10 = var17.bind(var3)(var10);
                var10 = var10.pop;
                var2.onAlertOpen = var10;
                var2 = var6.bind(var9)(var2);
                var9 = var4.useMemo;
                var6 = new Array(1);
                var6[0] = var12;
                var2 = function() { // Environment: var0
                    _fun69528: for (var _fun69528_ip = 0;;) switch (_fun69528_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 22;
                            var2 = var5[var1];
                            var3 = undefined;
                            var2 = var4.bind(var3)(var2);
                            var6 = var2.intl;
                            var2 = var6.string;
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.t;
                            if (var0) {
                                _fun69528_ip = 108;
                                continue _fun69528
                            }
                        case 59:
                            var0 = var1.y2b7CA;
                            var7 = var2.bind(var6)(var0);
                            var0 = new Array(2);
                            var0[0] = var7;
                            var7 = 29;
                            var7 = var5[var7];
                            var7 = var4.bind(var3)(var7);
                            var7 = var7.BadgeColors;
                            var7 = var7.DANGER;
                            var0[1] = var7;
                            _fun69528_ip = 160;
                            continue _fun69528;
                        case 108:
                            var1 = var1.UNUuem;
                            var2 = var2.bind(var6)(var1);
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = 29;
                            var2 = var5[var2];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.BadgeColors;
                            var2 = var2.INFO;
                            var1[1] = var2;
                            var0 = var1;
                        case 160:
                            return var0;
                    }
                };
                var9 = var9.bind(var4)(var2, var6);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var3)(var9, var2);
                var2 = 0;
                var26 = var6[var2];
                var2 = 1;
                var27 = var6[var2];
                var6 = var4.useMemo;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var1;
                var2[2] = var33;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getUserVerificationFooterText;
                    var0 = {};
                    var4 = _closure2_slot7;
                    var0.isCurrentUserKeyPersistent = var4;
                    var4 = _closure2_slot8;
                    var0.isOtherUserKeyPersistent = var4;
                    var3 = _closure2_slot2;
                    var0.otherUserNickname = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var21 = var6.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var25;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackE2EEUserVerificationViewed;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.userId = var5;
                    var4 = _closure2_slot1;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot16;
                var0 = 30;
                var0 = var20[var0];
                var0 = var31.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'top': true,
                    'bottom': true
                };
                var4 = var22.container;
                var0.style = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var22.header;
                var4.style = var6;
                var10 = _closure1_slot15;
                var8 = 31;
                var6 = var20[var8];
                var6 = var31.bind(var3)(var6);
                var9 = var6.PressableOpacity;
                var6 = {};
                var28 = 'button';
                var6.accessibilityRole = var28;
                var17 = 22;
                var29 = var20[var17];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var20 = var20[var17];
                var20 = var31.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.cpT0Cq;
                var20 = var29.bind(var30)(var20);
                var6.accessibilityLabel = var20;
                var20 = _closure1_slot14;
                var6.androidRippleConfig = var20;
                var20 = 8;
                var6.hitSlop = var20;
                var6.onPress = var23;
                var23 = _closure1_slot18;
                var6.children = var23;
                var9 = var10.bind(var3)(var9, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var7 = var19 != var7;
                if (!var7) {
                    _fun69521_ip = 949;
                    continue _fun69521
                }
            case 945:
                var7 = var19 != var16;
            case 949:
                if (!var7) {
                    _fun69521_ip = 1149;
                    continue _fun69521
                }
            case 955:
                var10 = _closure1_slot15;
                var30 = _closure1_slot0;
                var23 = _closure1_slot2;
                var8 = var23[var8];
                var8 = var30.bind(var3)(var8);
                var9 = var8.PressableOpacity;
                var8 = {};
                var8.accessibilityRole = var28;
                var28 = var23[var17];
                var28 = var30.bind(var3)(var28);
                var31 = var28.intl;
                var29 = var31.string;
                var28 = var23[var17];
                var28 = var30.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.RDE0Sc;
                var28 = var29.bind(var31)(var28);
                var8.accessibilityLabel = var28;
                var28 = _closure1_slot14;
                var8.androidRippleConfig = var28;
                var8.hitSlop = var20;
                var8.onPress = var11;
                var11 = 32;
                var11 = var23[var11];
                var11 = var30.bind(var3)(var11);
                var20 = var11.Text;
                var11 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-brand'
                };
                var28 = var23[var17];
                var28 = var30.bind(var3)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var23 = var23[var17];
                var23 = var30.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.RDE0Sc;
                var23 = var28.bind(var29)(var23);
                var11.children = var23;
                var11 = var10.bind(var3)(var20, var11);
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1149:
                var6[1] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var28 = _closure1_slot0;
                var23 = _closure1_slot2;
                var5 = 33;
                var5 = var23[var5];
                var5 = var28.bind(var3)(var5);
                var6 = var5.Stack;
                var5 = {
                    'spacing': 8,
                    'justify': 'center',
                    'align': 'center',
                    'direction': 'vertical'
                };
                var20 = _closure1_slot15;
                var8 = 32;
                var9 = var23[var8];
                var9 = var28.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var11 = var23[var17];
                var11 = var28.bind(var3)(var11);
                var30 = var11.intl;
                var29 = var30.string;
                var11 = var23[var17];
                var11 = var28.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["/WPGnF"];
                var11 = var29.bind(var30)(var11);
                var9.children = var11;
                var10 = var20.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var23[var8];
                var10 = var28.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var29 = var22.subtitle;
                var10.style = var29;
                var29 = var23[var17];
                var29 = var28.bind(var3)(var29);
                var32 = var29.intl;
                var31 = var32.format;
                var29 = var23[var17];
                var29 = var28.bind(var3)(var29);
                var29 = var29.t;
                var30 = var29.oc2kce;
                var29 = {};
                var29.username = var33;
                var29 = var31.bind(var32)(var30, var29);
                var10.children = var29;
                var10 = var20.bind(var3)(var11, var10);
                var9[1] = var10;
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var22.code;
                var5.style = var9;
                var11 = _closure1_slot1;
                var9 = 34;
                var9 = var23[var9];
                var10 = var11.bind(var3)(var9);
                var9 = {};
                var29 = var22.helpMessage;
                var9.style = var29;
                var9.userId = var25;
                var9.userKey = var24;
                var10 = var20.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = 35;
                var10 = var23[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var24 = var23[var17];
                var24 = var28.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var23[var17];
                var23 = var28.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23["/WPGnF"];
                var23 = var24.bind(var25)(var23);
                var10.title = var23;
                var10.chunks = var16;
                var23 = _closure1_slot10;
                var10.columns = var23;
                if (!(var19 != var16)) {
                    _fun69521_ip = 1627;
                    continue _fun69521
                }
            case 1579:
                var25 = _closure1_slot15;
                var24 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 29;
                var23 = var28[var23];
                var23 = var24.bind(var3)(var23);
                var24 = var23.TextBadge;
                var23 = {};
                var23.color = var27;
                var23.text = var26;
                var23 = var25.bind(var3)(var24, var23);
                _fun69521_ip = 1631;
                continue _fun69521;
            case 1627:
                var23 = _closure1_slot19;
            case 1631:
                var10.trailing = var23;
                var10 = var20.bind(var3)(var11, var10);
                var9[1] = var10;
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var22.footer;
                var5.style = var9;
                var11 = _closure1_slot15;
                var10 = _closure1_slot0;
                var20 = _closure1_slot2;
                var8 = var20[var8];
                var8 = var10.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/normal',
                    'color': 'text-default'
                };
                var22 = var22.footerText;
                var8.style = var22;
                var8.children = var21;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 36;
                var9 = var20[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var16 = var19 == var16;
                if (var16) {
                    _fun69521_ip = 1780;
                    continue _fun69521
                }
            case 1777:
                var16 = var18;
            case 1780:
                var9.disabled = var16;
                var16 = 'primary';
                var9.variant = var16;
                if (!var12) {
                    _fun69521_ip = 1798;
                    continue _fun69521
                }
            case 1795:
                var14 = var15;
            case 1798:
                var9.onPress = var14;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                if (var12) {
                    _fun69521_ip = 1859;
                    continue _fun69521
                }
            case 1846:
                var12 = var13["0tvNAn"];
                var12 = var14.bind(var15)(var12);
                _fun69521_ip = 1872;
                continue _fun69521;
            case 1859:
                var13 = var13["Osb+/n"];
                var12 = var14.bind(var15)(var13);
            case 1872:
                var9.text = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 1621, 8569, 660, 4850, 33, 1297, 671, 5837, 566, 3956, 8618, 8634, 8635, 8643, 8639, 4567, 3150, 3272, 1234, 3466, 8641, 7603, 5785, 8334, 8644, 8645, 4754, 4880, 3938, 4086, 8646, 8648, 4090, 2]);