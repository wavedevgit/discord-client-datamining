// modules/oauth2/native/useOAuth2AuthorizeForm.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var3 = var3.ActivityIndicator;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMOJI_POINTING_DOWN_CODE_POINT;
    var _closure1_slot13 = var6;
    var3 = var3.OAuth2Steps;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot15 = var6;
    var6 = var3.ApplicationFlags;
    var _closure1_slot16 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot18 = var6;
    var6 = var3.Fragment;
    var _closure1_slot19 = var6;
    var3 = var3.jsxs;
    var _closure1_slot20 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignSelf': 'center',
        'justifyContent': 'center'
    };
    var3.loading = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var3.switchContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.switchLabelContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = 'function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}';
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = 55;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/useOAuth2AuthorizeForm.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48224: for (var _fun48224_ip = 0;;) switch (_fun48224_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.clientId;
                var _closure2_slot0 = var16;
                var44 = var1.responseType;
                var _closure2_slot1 = var44;
                var41 = var1.redirectUri;
                var _closure2_slot2 = var41;
                var39 = var1.codeChallenge;
                var _closure2_slot3 = var39;
                var38 = var1.codeChallengeMethod;
                var _closure2_slot4 = var38;
                var22 = var1.state;
                var _closure2_slot5 = var22;
                var49 = var1.nonce;
                var _closure2_slot6 = var49;
                var32 = var1.prompt;
                var _closure2_slot7 = var32;
                var15 = var1.scopes;
                var _closure2_slot8 = var15;
                var2 = var1.permissions;
                var _closure2_slot9 = var2;
                var21 = var1.guildId;
                var11 = var1.channelId;
                var14 = var1.integrationType;
                var _closure2_slot10 = var14;
                var59 = var1.disableGuildSelect;
                var4 = undefined;
                if (!(var59 === var4)) {
                    _fun48224_ip = 138;
                    continue _fun48224
                }
            case 136:
                var59 = false;
            case 138:
                var45 = var1.isTrustedName;
                if (!(var45 === var4)) {
                    _fun48224_ip = 150;
                    continue _fun48224
                }
            case 148:
                var45 = false;
            case 150:
                var27 = var1.isEmbeddedFlow;
                if (!(var27 === var4)) {
                    _fun48224_ip = 162;
                    continue _fun48224
                }
            case 160:
                var27 = false;
            case 162:
                var3 = var1.withBackPressHandler;
                if (!(var3 === var4)) {
                    _fun48224_ip = 174;
                    continue _fun48224
                }
            case 172:
                var3 = true;
            case 174:
                var48 = var1.callback;
                var _closure2_slot11 = var48;
                var54 = var1.callbackWithoutPost;
                var _closure2_slot12 = var54;
                var0 = var1.dismissOAuthModal;
                var _closure2_slot13 = var0;
                var60 = var1.disclosures;
                var _closure2_slot14 = var60;
                var17 = var1.wasDeepLink;
                if (!(var17 === var4)) {
                    _fun48224_ip = 226;
                    continue _fun48224
                }
            case 224:
                var17 = false;
            case 226:
                var _closure2_slot15 = var17;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var _closure2_slot19 = var4;
                var _closure2_slot20 = var4;
                var _closure2_slot21 = var4;
                var _closure2_slot22 = var4;
                var _closure2_slot23 = var4;
                var _closure2_slot24 = var4;
                var _closure2_slot25 = var4;
                var _closure2_slot26 = var4;
                var _closure2_slot27 = var4;
                var _closure2_slot28 = var4;
                var _closure2_slot29 = var4;
                var _closure2_slot30 = var4;
                var _closure2_slot31 = var4;
                var _closure2_slot32 = var4;
                var _closure2_slot33 = var4;
                var _closure2_slot34 = var4;
                var _closure2_slot35 = var4;
                var _closure2_slot36 = var4;
                var _closure2_slot37 = var4;
                var _closure2_slot38 = var4;
                var _closure2_slot39 = var4;
                var _closure2_slot40 = var4;
                var _closure2_slot41 = var4;
                var _closure2_slot42 = var4;
                var _closure2_slot43 = var4;
                var _closure2_slot44 = var4;
                var _closure2_slot45 = var4;
                var _closure2_slot46 = var4;
                var _closure2_slot47 = var4;
                var _closure2_slot48 = var4;
                var _closure2_slot49 = var4;
                var _closure2_slot50 = var4;
                var _closure2_slot51 = var4;
                var _closure2_slot52 = var4;
                var _closure2_slot53 = var4;
                var _closure2_slot54 = var4;
                var _closure2_slot55 = var4;
                var _closure2_slot56 = var4;
                var _closure2_slot57 = var4;
                var _closure2_slot58 = var4;
                var _closure2_slot59 = var4;
                var _closure2_slot60 = var4;
                var _closure2_slot61 = var4;
                var _closure2_slot62 = var4;
                var _closure2_slot63 = var4;
                var6 = _closure1_slot21;
                var55 = var6.bind(var4)();
                _closure2_slot16 = var55;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var6 = 12;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var8 = var6.ActivityDMNoPushExperiment;
                var7 = var8.useExperiment;
                var6 = {};
                var9 = 'oauth2_authorize';
                var6.location = var9;
                var30 = var7.bind(var8)(var6);
                _closure2_slot17 = var30;
                var10 = _closure1_slot6;
                var6 = var10.useState;
                var23 = null;
                var6 = var6.bind(var10)(var23);
                var9 = _closure1_slot5;
                var13 = 2;
                var6 = var9.bind(var4)(var6, var13);
                var56 = 0;
                var18 = var6[var56];
                _closure2_slot18 = var18;
                var7 = 1;
                var6 = var6[var7];
                _closure2_slot19 = var6;
                var6 = var10.useState;
                var6 = var6.bind(var10)(var23);
                var6 = var9.bind(var4)(var6, var13);
                var19 = var6[var56];
                _closure2_slot20 = var19;
                var6 = var6[var7];
                _closure2_slot21 = var6;
                var6 = var10.useState;
                var6 = var6.bind(var10)(var23);
                var6 = var9.bind(var4)(var6, var13);
                var8 = var6[var56];
                _closure2_slot22 = var8;
                var6 = var6[var7];
                _closure2_slot23 = var6;
                var6 = var10.useState;
                var12 = false;
                var6 = var6.bind(var10)(var12);
                var6 = var9.bind(var4)(var6, var13);
                var20 = var6[var56];
                var6 = var6[var7];
                _closure2_slot24 = var6;
                var6 = var23 == var18;
                var34 = undefined;
                if (var6) {
                    _fun48224_ip = 649;
                    continue _fun48224
                }
            case 643:
                var34 = var18.guilds;
            case 649:
                _closure2_slot25 = var34;
                var10 = _closure1_slot6;
                var9 = var10.useState;
                var24 = var23 != var21;
                var6 = null;
                if (!var24) {
                    _fun48224_ip = 674;
                    continue _fun48224
                }
            case 671:
                var6 = var21;
            case 674:
                var9 = var9.bind(var10)(var6);
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var9, var13);
                var51 = var6[var56];
                _closure2_slot26 = var51;
                var58 = var6[var7];
                _closure2_slot27 = var58;
                var10 = _closure1_slot6;
                var9 = var10.useState;
                var21 = var23 != var11;
                var6 = null;
                if (!var21) {
                    _fun48224_ip = 726;
                    continue _fun48224
                }
            case 723:
                var6 = var11;
            case 726:
                var6 = var9.bind(var10)(var6);
                var9 = _closure1_slot5;
                var6 = var9.bind(var4)(var6, var13);
                var35 = var6[var56];
                _closure2_slot28 = var35;
                var50 = var6[var7];
                _closure2_slot29 = var50;
                var10 = _closure1_slot6;
                var11 = var10.useState;
                var21 = _closure1_slot2;
                var6 = _closure1_slot3;
                var42 = 13;
                var6 = var6[var42];
                var6 = var21.bind(var4)(var6);
                var6 = var6.NONE;
                var6 = var11.bind(var10)(var6);
                var6 = var9.bind(var4)(var6, var13);
                var43 = var6[var56];
                _closure2_slot30 = var43;
                var6 = var6[var7];
                _closure2_slot31 = var6;
                var9 = var10.useState;
                var11 = var30.defaultOnMobile;
                var6 = var23 != var11;
                if (!var6) {
                    _fun48224_ip = 840;
                    continue _fun48224
                }
            case 837:
                var6 = var11;
            case 840:
                var6 = var9.bind(var10)(var6);
                var9 = _closure1_slot5;
                var6 = var9.bind(var4)(var6, var13);
                var53 = var6[var56];
                _closure2_slot32 = var53;
                var52 = var6[var7];
                _closure2_slot33 = var52;
                var33 = _closure1_slot0;
                var31 = _closure1_slot3;
                var10 = 14;
                var6 = var31[var10];
                var24 = var33.bind(var4)(var6);
                var21 = var24.useStateFromStores;
                var6 = _closure1_slot12;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var5
                    var1 = _closure1_slot12;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var26 = var21.bind(var24)(var11, var6);
                var29 = _closure1_slot6;
                var21 = var29.useMemo;
                var11 = new Array(2);
                var11[0] = var34;
                var11[1] = var51;
                var6 = function() { // Environment: var5
                    _fun48226: for (var _fun48226_ip = 0;;) switch (_fun48226_ip) {
                        case 0:
                            var2 = _closure2_slot25;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun48226_ip = 39;
                                continue _fun48226
                            }
                        case 18:
                            var3 = _closure2_slot25;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure2_slot26;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var36 = var21.bind(var29)(var6, var11);
                _closure2_slot34 = var36;
                var6 = var29.useState;
                var6 = var6.bind(var29)(var23);
                var6 = var9.bind(var4)(var6, var13);
                var47 = var6[var56];
                _closure2_slot35 = var47;
                var6 = var6[var7];
                _closure2_slot36 = var6;
                var6 = var29.useState;
                var6 = var6.bind(var29)(var12);
                var6 = var9.bind(var4)(var6, var13);
                var9 = var6[var56];
                _closure2_slot37 = var9;
                var6 = var6[var7];
                _closure2_slot38 = var6;
                var10 = var31[var10];
                var24 = var33.bind(var4)(var10);
                var21 = var24.useStateFromStores;
                var10 = _closure1_slot10;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var5
                    var0 = _closure1_slot10;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var37 = var21.bind(var24)(var11, var10);
                _closure2_slot39 = var37;
                var10 = 15;
                var10 = var31[var10];
                var11 = var33.bind(var4)(var10);
                var10 = var11.useIsScreenReaderEnabled;
                var11 = var10.bind(var11)();
                _closure2_slot40 = var11;
                var24 = 16;
                var10 = var31[var24];
                var25 = var33.bind(var4)(var10);
                var21 = var25.useAnimatedStyle;
                var10 = function() {
                    _fun48229: for (var _fun48229_ip = 0;;) switch (_fun48229_ip) {
                        case 0:
                            var0 = _closure2_slot39;
                            if (var0) {
                                _fun48229_ip = 280;
                                continue _fun48229
                            }
                        case 13:
                            var0 = {};
                            var2 = {};
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot3;
                            var1 = 16;
                            var3 = var15[var1];
                            var13 = undefined;
                            var5 = var14.bind(var13)(var3);
                            var4 = var5.withSequence;
                            var6 = 17;
                            var3 = var15[var6];
                            var9 = var14.bind(var13)(var3);
                            var8 = var9.withTiming;
                            var7 = {};
                            var3 = 250;
                            var7.duration = var3;
                            var3 = var15[var1];
                            var3 = var14.bind(var13)(var3);
                            var11 = var3.Easing;
                            var10 = var11.inOut;
                            var3 = var15[var1];
                            var3 = var14.bind(var13)(var3);
                            var3 = var3.Easing;
                            var3 = var3.quad;
                            var3 = var10.bind(var11)(var3);
                            var7.easing = var3;
                            var3 = -5;
                            var3 = var8.bind(var9)(var3, var7);
                            var7 = var15[var1];
                            var9 = var14.bind(var13)(var7);
                            var8 = var9.withRepeat;
                            var6 = var15[var6];
                            var10 = var14.bind(var13)(var6);
                            var7 = var10.withTiming;
                            var6 = {};
                            var11 = 500;
                            var6.duration = var11;
                            var11 = var15[var1];
                            var11 = var14.bind(var13)(var11);
                            var12 = var11.Easing;
                            var11 = var12.inOut;
                            var1 = var15[var1];
                            var1 = var14.bind(var13)(var1);
                            var1 = var1.Easing;
                            var1 = var1.quad;
                            var1 = var11.bind(var12)(var1);
                            var6.easing = var1;
                            var1 = 5;
                            var7 = var7.bind(var10)(var1, var6);
                            var6 = -1;
                            var1 = true;
                            var1 = var8.bind(var9)(var7, var6, var1);
                            var1 = var4.bind(var5)(var3, var1);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            _fun48229_ip = 282;
                            continue _fun48229;
                        case 280:
                            var0 = {};
                        case 282:
                            return var0;
                    }
                };
                var28 = {};
                var28.shouldReduceMotion = var37;
                var37 = var31[var24];
                var37 = var33.bind(var4)(var37);
                var37 = var37.withSequence;
                var28.withSequence = var37;
                var37 = 17;
                var37 = var31[var37];
                var37 = var33.bind(var4)(var37);
                var37 = var37.withTiming;
                var28.withTiming = var37;
                var37 = var31[var24];
                var37 = var33.bind(var4)(var37);
                var37 = var37.Easing;
                var28.Easing = var37;
                var31 = var31[var24];
                var31 = var33.bind(var4)(var31);
                var31 = var31.withRepeat;
                var28.withRepeat = var31;
                var10.__closure = var28;
                var28 = 1476082137097.0;
                var10.__workletHash = var28;
                var28 = _closure1_slot22;
                var10.__initData = var28;
                var28 = var21.bind(var25)(var10);
                var25 = var29.useMemo;
                var21 = var23 == var15;
                var10 = undefined;
                if (var21) {
                    _fun48224_ip = 1253;
                    continue _fun48224
                }
            case 1248:
                var10 = var15.length;
            case 1253:
                var21 = new Array(3);
                var21[0] = var10;
                var21[1] = var41;
                var21[2] = var14;
                var10 = function() { // Environment: var5
                    _fun48230: for (var _fun48230_ip = 0;;) switch (_fun48230_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = null;
                            var0 = var2 == var0;
                            if (!var0) {
                                _fun48230_ip = 56;
                                continue _fun48230
                            }
                        case 16:
                            var3 = _closure2_slot8;
                            var3 = var2 == var3;
                            var5 = undefined;
                            if (var3) {
                                _fun48230_ip = 38;
                                continue _fun48230
                            }
                        case 29:
                            var3 = _closure2_slot8;
                            var5 = var3.length;
                        case 38:
                            var6 = var2 != var5;
                            var4 = 0;
                            var3 = 0;
                            if (!var6) {
                                _fun48230_ip = 52;
                                continue _fun48230
                            }
                        case 49:
                            var3 = var5;
                        case 52:
                            var0 = var4 === var3;
                        case 56:
                            if (!var0) {
                                _fun48230_ip = 67;
                                continue _fun48230
                            }
                        case 59:
                            var1 = _closure2_slot2;
                            var0 = var2 == var1;
                        case 67:
                            return var0;
                    }
                };
                var21 = var25.bind(var29)(var10, var21);
                _closure2_slot41 = var21;
                var31 = _closure1_slot6;
                var10 = var31.useState;
                var25 = var10.bind(var31)(var23);
                var10 = _closure1_slot5;
                var10 = var10.bind(var4)(var25, var13);
                var33 = var10[var56];
                _closure2_slot42 = var33;
                var10 = var10[var7];
                _closure2_slot43 = var10;
                var29 = var31.useEffect;
                var25 = new Array(2);
                var25[0] = var16;
                var25[1] = var21;
                var10 = function() { // Environment: var5
                    _fun48231: for (var _fun48231_ip = 0;;) switch (_fun48231_ip) {
                        case 0:
                            var1 = _closure2_slot41;
                            if (!var1) {
                                _fun48231_ip = 67;
                                continue _fun48231
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchApplication;
                            var0 = _closure2_slot0;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot43;
                                var3 = _closure1_slot11;
                                var1 = var3.createFromServer;
                                var0 = arg0;
                                var1 = var1.bind(var3)(var0);
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var29.bind(var31)(var10, var25);
                var29 = var31.useMemo;
                var25 = var23 == var33;
                var10 = undefined;
                if (var25) {
                    _fun48224_ip = 1372;
                    continue _fun48224
                }
            case 1366:
                var10 = var33.integrationTypesConfig;
            case 1372:
                var25 = new Array(2);
                var25[0] = var10;
                var25[1] = var47;
                var10 = function() { // Environment: var5
                    _fun48233: for (var _fun48233_ip = 0;;) switch (_fun48233_ip) {
                        case 0:
                            var0 = _closure2_slot35;
                            var3 = null;
                            var1 = var3 == var0;
                            var0 = null;
                            if (var1) {
                                _fun48233_ip = 76;
                                continue _fun48233
                            }
                        case 18:
                            var1 = _closure2_slot42;
                            var5 = var3 == var1;
                            var1 = undefined;
                            if (var5) {
                                _fun48233_ip = 73;
                                continue _fun48233
                            }
                        case 31:
                            var5 = _closure2_slot42;
                            var5 = var5.integrationTypesConfig;
                            var6 = var3 == var5;
                            var1 = undefined;
                            if (var6) {
                                _fun48233_ip = 73;
                                continue _fun48233
                            }
                        case 50:
                            var2 = _closure2_slot35;
                            var2 = var5[var2];
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun48233_ip = 73;
                                continue _fun48233
                            }
                        case 67:
                            var1 = var2.oauth2InstallParams;
                        case 73:
                            var0 = var1;
                        case 76:
                            return var0;
                    }
                };
                var10 = var29.bind(var31)(var10, var25);
                _closure2_slot44 = var10;
                var31 = _closure1_slot6;
                var29 = var31.useMemo;
                var25 = var23 == var10;
                var37 = undefined;
                if (var25) {
                    _fun48224_ip = 1423;
                    continue _fun48224
                }
            case 1417:
                var37 = var10.scopes;
            case 1423:
                var25 = new Array(3);
                var25[0] = var37;
                var25[1] = var15;
                var25[2] = var21;
                var15 = function() { // Environment: var5
                    _fun48234: for (var _fun48234_ip = 0;;) switch (_fun48234_ip) {
                        case 0:
                            var1 = _closure2_slot41;
                            if (var1) {
                                _fun48234_ip = 18;
                                continue _fun48234
                            }
                        case 12:
                            var5 = _closure2_slot8;
                            _fun48234_ip = 46;
                            continue _fun48234;
                        case 18:
                            var3 = _closure2_slot44;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if (var3) {
                                _fun48234_ip = 43;
                                continue _fun48234
                            }
                        case 33:
                            var2 = _closure2_slot44;
                            var1 = var2.scopes;
                        case 43:
                            var5 = var1;
                        case 46:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 19;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.filterScopes;
                            var6 = null;
                            if (!(var6 == var5)) {
                                _fun48234_ip = 87;
                                continue _fun48234
                            }
                        case 83:
                            var5 = new Array(0);
                        case 87:
                            var2 = var2.bind(var3)(var5);
                            var _closure3_slot0 = var2;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 20;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var3 = var1.OrderedAccountScopes;
                            var1 = var3.filter;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var0.requestedScopes = var2;
                            var0.accountScopes = var1;
                            return var0;
                    }
                };
                var15 = var29.bind(var31)(var15, var25);
                var31 = var15.requestedScopes;
                _closure2_slot45 = var31;
                var25 = var15.accountScopes;
                var29 = _closure1_slot6;
                var15 = var29.useMemo;
                var40 = var23 == var10;
                var37 = undefined;
                if (var40) {
                    _fun48224_ip = 1490;
                    continue _fun48224
                }
            case 1484:
                var37 = var10.permissions;
            case 1490:
                var10 = new Array(3);
                var10[0] = var37;
                var10[1] = var2;
                var10[2] = var21;
                var2 = function() { // Environment: var5
                    _fun48236: for (var _fun48236_ip = 0;;) switch (_fun48236_ip) {
                        case 0:
                            var0 = _closure2_slot41;
                            if (var0) {
                                _fun48236_ip = 16;
                                continue _fun48236
                            }
                        case 10:
                            var0 = _closure2_slot9;
                            _fun48236_ip = 87;
                            continue _fun48236;
                        case 16:
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var1 = 21;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.deserialize;
                            var6 = _closure2_slot44;
                            var1 = null;
                            var6 = var1 == var6;
                            if (var6) {
                                _fun48236_ip = 70;
                                continue _fun48236
                            }
                        case 60:
                            var5 = _closure2_slot44;
                            var4 = var5.permissions;
                        case 70:
                            var5 = var1 != var4;
                            var1 = 0;
                            if (!var5) {
                                _fun48236_ip = 82;
                                continue _fun48236
                            }
                        case 79:
                            var1 = var4;
                        case 82:
                            var0 = var2.bind(var3)(var1);
                        case 87:
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun48236_ip = 124;
                                continue _fun48236
                            }
                        case 93:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var0 = var1.NONE;
                        case 124:
                            return var0;
                    }
                };
                var40 = var15.bind(var29)(var2, var10);
                _closure2_slot46 = var40;
                var15 = _closure1_slot6;
                var2 = var15.useState;
                var2 = var2.bind(var15)(var12);
                var10 = _closure1_slot5;
                var2 = var10.bind(var4)(var2, var13);
                var46 = var2[var56];
                _closure2_slot47 = var46;
                var2 = var2[var7];
                _closure2_slot48 = var2;
                var37 = var15.useEffect;
                var29 = new Array(1);
                var29[0] = var16;
                var2 = function() { // Environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.checkIfOAuthRequest;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.then;
                    var1 = _closure2_slot48;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var37.bind(var15)(var2, var29);
                var2 = var15.useState;
                var2 = var2.bind(var15)(var23);
                var2 = var10.bind(var4)(var2, var13);
                var29 = var2[var56];
                var15 = var2[var7];
                var37 = var22;
                if (!var46) {
                    _fun48224_ip = 1761;
                    continue _fun48224
                }
            case 1618:
                var10 = _closure1_slot0;
                var57 = _closure1_slot3;
                var2 = 23;
                var2 = var57[var2];
                var10 = var10.bind(var4)(var2);
                var2 = var10.getAPIBaseURL;
                var10 = var2.bind(var10)(var12);
                var2 = '/v6';
                var10 = var10 + var2;
                var2 = _closure1_slot17;
                var2 = var2.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK;
                var10 = var10 + var2;
                _closure2_slot2 = var10;
                var2 = var23 == var22;
                if (!var2) {
                    _fun48224_ip = 1688;
                    continue _fun48224
                }
            case 1684:
                var2 = var23 == var29;
            case 1688:
                if (!var2) {
                    _fun48224_ip = 1726;
                    continue _fun48224
                }
            case 1691:
                var57 = _closure1_slot0;
                var61 = _closure1_slot3;
                var2 = 24;
                var2 = var61[var2];
                var57 = var57.bind(var4)(var2);
                var2 = var57.v4;
                var2 = var2.bind(var57)();
                var2 = var15.bind(var4)(var2);
            case 1726:
                var2 = var22;
                if (!(var23 != var29)) {
                    _fun48224_ip = 1755;
                    continue _fun48224
                }
            case 1733:
                var15 = var22;
                if (!(var23 == var22)) {
                    _fun48224_ip = 1748;
                    continue _fun48224
                }
            case 1740:
                var22 = 'SA';
                var15 = var22 + var29;
            case 1748:
                _closure2_slot5 = var15;
                var2 = var15;
            case 1755:
                var37 = var2;
                var41 = var10;
            case 1761:
                var15 = _closure1_slot6;
                var2 = var15.useRef;
                var2 = var2.bind(var15)(var12);
                _closure2_slot49 = var2;
                var10 = var15.useState;
                var2 = var60;
                if (!(var23 == var2)) {
                    _fun48224_ip = 1795;
                    continue _fun48224
                }
            case 1791:
                var2 = new Array(0);
            case 1795:
                var2 = var10.bind(var15)(var2);
                var10 = _closure1_slot5;
                var2 = var10.bind(var4)(var2, var13);
                var29 = var2[var56];
                _closure2_slot50 = var29;
                var57 = var2[var7];
                _closure2_slot51 = var57;
                var15 = _closure1_slot6;
                var22 = var15.useState;
                var2 = var23 != var60;
                var2 = var22.bind(var15)(var2);
                var2 = var10.bind(var4)(var2, var13);
                var22 = var2[var56];
                _closure2_slot52 = var22;
                var2 = var2[var7];
                _closure2_slot53 = var2;
                var13 = var15.useEffect;
                var10 = new Array(4);
                var10[0] = var16;
                var10[1] = var60;
                var10[2] = var57;
                var10[3] = var2;
                var2 = function() { // Environment: var5
                    _fun48238: for (var _fun48238_ip = 0;;) switch (_fun48238_ip) {
                        case 0:
                            var0 = _closure2_slot49;
                            var0 = var0.current;
                            if (var0) {
                                _fun48238_ip = 42;
                                continue _fun48238
                            }
                        case 15:
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun48241: for (var _fun48241_ip = 0;;) switch (_fun48241_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun48241_ip = 302;
                                                    continue _fun48241
                                                }
                                            case 10:
                                                var1 = undefined;
                                                var5 = undefined;
                                                var4 = _closure2_slot49;
                                                var3 = true;
                                                var4.current = var3;
                                            case 29: // try_start_0 // try_start_1
                                                var4 = _closure1_slot0;
                                                var6 = _closure1_slot3;
                                                var3 = 25;
                                                var3 = var6[var3];
                                                var6 = var4.bind(var1)(var3);
                                                var4 = var6.getDisclosures;
                                                var3 = _closure2_slot0;
                                                var3 = var4.bind(var6)(var3);
                                                SaveGenerator(address = 71);
                                            case 69:
                                                return var3;
                                            case 71:
                                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun48241_ip = 115;
                                                    continue _fun48241
                                                }
                                            case 77:
                                                var6 = var3.disclosures;
                                                var4 = var3.allAcked;
                                                var7 = _closure2_slot53;
                                                var4 = !var4;
                                                var4 = var7.bind(var1)(var4);
                                                var4 = _closure2_slot51;
                                                var4 = var4.bind(var1)(var6);
                                            case 110: // try_end0
                                                _fun48241_ip = 271;
                                                continue _fun48241;
                                            case 115: // try_end1
                                                var6 = _closure2_slot49;
                                                var4 = false;
                                                var6.current = var4;
                                                return var3;
                                            case 130: // try_start_2 // catch_target0
                                                CatchBlockStart(arg_register = 3);
                                                var7 = var3.body;
                                                var5 = var7;
                                                var4 = _closure2_slot23;
                                                var3 = global;
                                                var6 = var3.Error;
                                                var8 = var7.message;
                                                var7 = null;
                                                if (!(var7 == var8)) {
                                                    _fun48241_ip = 238;
                                                    continue _fun48241
                                                }
                                            case 163:
                                                var8 = var3.Object;
                                                var7 = var8.keys;
                                                var11 = var5;
                                                var7 = var7.bind(var8)(var11);
                                                var8 = 0;
                                                var10 = var7[var8];
                                                var9 = var3.Object;
                                                var7 = var9.values;
                                                var7 = var7.bind(var9)(var11);
                                                var9 = var7[var8];
                                                var3 = var3.HermesInternal;
                                                var8 = var3.concat;
                                                var7 = '';
                                                var3 = ': ';
                                                var3 = var8.bind(var7)(var10, var3, var9);
                                                _fun48241_ip = 243;
                                                continue _fun48241;
                                            case 238:
                                                var3 = var5.message;
                                            case 243:
                                                var5 = var6.prototype;
                                                var5 = Object.create(var5, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var15 = var5;
                                                var14 = var3;
                                                var3 = new var15[var6](var14, var13);
                                                var3 = var3 instanceof Object ? var3 : var5;
                                                var3 = var4.bind(var1)(var3);
                                            case 271: // try_end2
                                                var4 = _closure2_slot49;
                                                var3 = false;
                                                var4.current = var3;
                                                return var1;
                                            case 286: // catch_target1 // catch_target2
                                                CatchBlockStart(arg_register = 1);
                                                var3 = _closure2_slot49;
                                                var2 = false;
                                                var3.current = var2;
                                                throw var1;
                                            case 302:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var1 = undefined;
                            var0 = var0.bind(var1)();
                            var3 = _closure2_slot14;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun48238_ip = 42;
                                continue _fun48238
                            }
                        case 38:
                            var0 = var0.bind(var1)();
                        case 42:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var13.bind(var15)(var2, var10);
                var13 = var15.useCallback;
                var2 = function() { // Environment: var5
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun48245: for (var _fun48245_ip = 0;;) switch (_fun48245_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun48245_ip = 981;
                                        continue _fun48245
                                    }
                                case 13:
                                    var2 = var1.isAuthorized;
                                    var10 = var1.overrideSuccessCallback;
                                    var14 = var1.canceled;
                                    var4 = undefined;
                                    var9 = undefined;
                                    var6 = undefined;
                                    SaveGenerator(address = 41);
                                case 39:
                                    return var4;
                                case 41:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun48245_ip = 978;
                                        continue _fun48245
                                    }
                                case 50:
                                    var7 = _closure2_slot12;
                                    var5 = null;
                                    if (!(var5 == var7)) {
                                        _fun48245_ip = 934;
                                        continue _fun48245
                                    }
                                case 66:
                                    var7 = _closure2_slot35;
                                    if (!(var5 == var7)) {
                                        _fun48245_ip = 122;
                                        continue _fun48245
                                    }
                                case 74:
                                    var8 = _closure2_slot23;
                                    var7 = global;
                                    var12 = var7.Error;
                                    var7 = var12.prototype;
                                    var11 = Object.create(var7, {
                                        constructor: {
                                            value: var12
                                        }
                                    });
                                    var21 = 'No integration type was selected.';
                                    var22 = var11;
                                    var7 = new var22[var12](var21, var20);
                                    var7 = var7 instanceof Object ? var7 : var11;
                                    var7 = var8.bind(var4)(var7);
                                    _fun48245_ip = 916;
                                    continue _fun48245;
                                case 122: // try_start_0 // try_start_2
                                    var8 = _closure2_slot24;
                                    var7 = true;
                                    var7 = var8.bind(var4)(var7);
                                    var15 = _closure1_slot0;
                                    var13 = _closure1_slot3;
                                    var7 = 26;
                                    var7 = var13[var7];
                                    var12 = var15.bind(var4)(var7);
                                    var11 = var12.authorize;
                                    var7 = {};
                                    var16 = var2;
                                    var7.authorize = var16;
                                    var16 = _closure2_slot0;
                                    var7.clientId = var16;
                                    var16 = _closure2_slot45;
                                    var7.scopes = var16;
                                    var16 = _closure2_slot1;
                                    var7.responseType = var16;
                                    var16 = _closure2_slot2;
                                    var7.redirectUri = var16;
                                    var16 = _closure2_slot3;
                                    var7.codeChallenge = var16;
                                    var16 = _closure2_slot4;
                                    var7.codeChallengeMethod = var16;
                                    var16 = _closure2_slot5;
                                    var7.state = var16;
                                    var16 = _closure2_slot6;
                                    var7.nonce = var16;
                                    var17 = _closure1_slot2;
                                    var16 = 21;
                                    var16 = var13[var16];
                                    var19 = var17.bind(var4)(var16);
                                    var18 = var19.remove;
                                    var17 = _closure2_slot46;
                                    var16 = _closure2_slot30;
                                    var16 = var18.bind(var19)(var17, var16);
                                    var7.permissions = var16;
                                    var16 = _closure2_slot35;
                                    var17 = 27;
                                    var13 = var13[var17];
                                    var13 = var15.bind(var4)(var13);
                                    var13 = var13.ApplicationIntegrationType;
                                    var15 = var13.GUILD_INSTALL;
                                    var13 = undefined;
                                    if (!(var16 === var15)) {
                                        _fun48245_ip = 335;
                                        continue _fun48245
                                    }
                                case 318:
                                    var15 = _closure2_slot26;
                                    var15 = var5 != var15;
                                    var13 = undefined;
                                    if (!var15) {
                                        _fun48245_ip = 335;
                                        continue _fun48245
                                    }
                                case 331:
                                    var13 = _closure2_slot26;
                                case 335:
                                    var7.guildId = var13;
                                    var16 = _closure2_slot35;
                                    var15 = _closure1_slot0;
                                    var13 = _closure1_slot3;
                                    var13 = var13[var17];
                                    var13 = var15.bind(var4)(var13);
                                    var13 = var13.ApplicationIntegrationType;
                                    var15 = var13.GUILD_INSTALL;
                                    var13 = undefined;
                                    if (!(var16 === var15)) {
                                        _fun48245_ip = 395;
                                        continue _fun48245
                                    }
                                case 378:
                                    var15 = _closure2_slot28;
                                    var15 = var5 != var15;
                                    var13 = undefined;
                                    if (!var15) {
                                        _fun48245_ip = 395;
                                        continue _fun48245
                                    }
                                case 391:
                                    var13 = _closure2_slot28;
                                case 395:
                                    var7.channelId = var13;
                                    var13 = _closure2_slot35;
                                    var7.integrationType = var13;
                                    var13 = {};
                                    var15 = _closure2_slot32;
                                    var13.allowMobilePush = var15;
                                    var7.dmSettings = var13;
                                    var7 = var11.bind(var12)(var7);
                                    SaveGenerator(address = 433);
                                case 431:
                                    return var7;
                                case 433:
                                    ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 11);
                                    if (var11) {
                                        _fun48245_ip = 744;
                                        continue _fun48245
                                    }
                                case 442:
                                    var9 = var7;
                                    var11 = var2;
                                    if (!var11) {
                                        _fun48245_ip = 530;
                                        continue _fun48245
                                    }
                                case 451:
                                    var13 = _closure1_slot1;
                                    var12 = _closure1_slot3;
                                    var11 = 28;
                                    var11 = var12[var11];
                                    var13 = var13.bind(var4)(var11);
                                    var11 = var13.fetch;
                                    var11 = var11.bind(var13)();
                                    var11 = _closure1_slot0;
                                    var8 = 25;
                                    var8 = var12[var8];
                                    var13 = var11.bind(var4)(var8);
                                    var12 = var13.ackDisclosures;
                                    var11 = _closure2_slot0;
                                    var8 = _closure2_slot50;
                                    var8 = var12.bind(var13)(var11, var8);
                                    SaveGenerator(address = 521);
                                case 519:
                                    return var8;
                                case 521:
                                    ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                                    if (var11) {
                                        _fun48245_ip = 730;
                                        continue _fun48245
                                    }
                                case 530:
                                    var11 = var10;
                                    if (!(var5 == var11)) {
                                        _fun48245_ip = 715;
                                        continue _fun48245
                                    }
                                case 540:
                                    var11 = _closure2_slot13;
                                    if (!(var5 != var11)) {
                                        _fun48245_ip = 556;
                                        continue _fun48245
                                    }
                                case 548:
                                    var11 = _closure2_slot13;
                                    var11 = var11.bind(var4)();
                                case 556:
                                    var11 = global;
                                    var13 = var11.Promise;
                                    var11 = var13.prototype;
                                    var12 = Object.create(var11, {
                                        constructor: {
                                            value: var13
                                        }
                                    });
                                    var21 = function(arg0) { // Environment: var11
                                        var0 = global;
                                        var3 = var0.setTimeout;
                                        var2 = undefined;
                                        var1 = arg0;
                                        var0 = 100;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                    };
                                    var22 = var12;
                                    var11 = new var22[var13](var21, var20);
                                    var11 = var11 instanceof Object ? var11 : var12;
                                    SaveGenerator(address = 595);
                                case 593:
                                    return var11;
                                case 595:
                                    ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 12);
                                    if (var12) {
                                        _fun48245_ip = 701;
                                        continue _fun48245
                                    }
                                case 601:
                                    var12 = _closure2_slot11;
                                    if (!(var5 != var12)) {
                                        _fun48245_ip = 725;
                                        continue _fun48245
                                    }
                                case 609:
                                    var13 = _closure2_slot11;
                                    var12 = {};
                                    var20 = var9;
                                    var21 = var12;
                                    var15 = copyDataProperties(var21, var20);
                                    var15 = var14;
                                    var14 = 'canceled';
                                    var12[var14] = var15;
                                    var14 = _closure2_slot18;
                                    var14 = var5 == var14;
                                    var15 = undefined;
                                    if (var14) {
                                        _fun48245_ip = 659;
                                        continue _fun48245
                                    }
                                case 650:
                                    var14 = _closure2_slot18;
                                    var15 = var14.application;
                                case 659:
                                    var14 = 'application';
                                    var12[var14] = var15;
                                    var15 = _closure2_slot34;
                                    var14 = 'guild';
                                    var12[var14] = var15;
                                    var15 = _closure2_slot15;
                                    var14 = 'wasDeepLink';
                                    var12[var14] = var15;
                                    var12 = var13.bind(var4)(var12);
                                    _fun48245_ip = 725;
                                    continue _fun48245;
                                case 701: // try_end0 // try_end2
                                    var13 = _closure2_slot24;
                                    var12 = false;
                                    var12 = var13.bind(var4)(var12);
                                    return var11;
                                case 715: // try_start_1 // try_start_3
                                    var9 = var9.location;
                                    var9 = var10.bind(var4)(var9);
                                case 725: // try_end1
                                    _fun48245_ip = 905;
                                    continue _fun48245;
                                case 730: // try_end3
                                    var10 = _closure2_slot24;
                                    var9 = false;
                                    var9 = var10.bind(var4)(var9);
                                    return var8;
                                case 744:
                                    var9 = _closure2_slot24;
                                    var8 = false;
                                    var8 = var9.bind(var4)(var8);
                                    return var7;
                                case 758: // try_start_4 // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 7);
                                    var7 = var7.body;
                                    var6 = var7;
                                    var8 = var5 == var7;
                                    var7 = undefined;
                                    if (var8) {
                                        _fun48245_ip = 785;
                                        continue _fun48245
                                    }
                                case 777:
                                    var8 = var6;
                                    var7 = var8.message;
                                case 785:
                                    if (!(var5 != var7)) {
                                        _fun48245_ip = 805;
                                        continue _fun48245
                                    }
                                case 789:
                                    var7 = var6;
                                    var8 = var7.message;
                                    var7 = '';
                                    if (!(var7 === var8)) {
                                        _fun48245_ip = 841;
                                        continue _fun48245
                                    }
                                case 805:
                                    var8 = _closure2_slot23;
                                    var7 = var6;
                                    var7 = var8.bind(var4)(var7);
                                    var8 = _closure2_slot21;
                                    var7 = _closure1_slot14;
                                    var7 = var7.AUTHORIZE_SCOPES;
                                    var7 = var8.bind(var4)(var7);
                                    _fun48245_ip = 905;
                                    continue _fun48245;
                                case 841:
                                    var7 = _closure2_slot23;
                                    var8 = global;
                                    var9 = var8.Error;
                                    var21 = var6.message;
                                    var8 = var9.prototype;
                                    var8 = Object.create(var8, {
                                        constructor: {
                                            value: var9
                                        }
                                    });
                                    var22 = var8;
                                    var6 = new var22[var9](var21, var20);
                                    var6 = var6 instanceof Object ? var6 : var8;
                                    var6 = var7.bind(var4)(var6);
                                    var7 = _closure2_slot21;
                                    var6 = _closure1_slot14;
                                    var6 = var6.AUTHORIZE_SCOPES;
                                    var6 = var7.bind(var4)(var6);
                                case 905: // try_end4
                                    var7 = _closure2_slot24;
                                    var6 = false;
                                    var6 = var7.bind(var4)(var6);
                                case 916:
                                    return var4;
                                case 919: // catch_target2 // catch_target3 // catch_target4
                                    CatchBlockStart(arg_register = 6);
                                    var8 = _closure2_slot24;
                                    var7 = false;
                                    var7 = var8.bind(var4)(var7);
                                    throw var6;
                                case 934:
                                    var7 = _closure2_slot24;
                                    var6 = true;
                                    var6 = var7.bind(var4)(var6);
                                    var6 = _closure2_slot12;
                                    var2 = var6.bind(var4)(var2);
                                    var2 = _closure2_slot13;
                                    var2 = var5 == var2;
                                    if (var2) {
                                        _fun48245_ip = 973;
                                        continue _fun48245
                                    }
                                case 965:
                                    var3 = _closure2_slot13;
                                    var2 = var3.bind(var4)();
                                case 973:
                                    var2 = undefined;
                                    return var2;
                                case 978:
                                    return var1;
                                case 981:
                                    return var0;
                            }
                        };
                        var1 = var0.next;
                        var1 = var1.bind(var0)();
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
                var10 = var2.bind(var4)();
                var2 = new Array(21);
                var2[0] = var47;
                var2[1] = var54;
                var2[2] = var16;
                var2[3] = var31;
                var2[4] = var44;
                var2[5] = var41;
                var2[6] = var39;
                var2[7] = var38;
                var2[8] = var37;
                var2[9] = var49;
                var2[10] = var40;
                var2[11] = var43;
                var2[12] = var51;
                var2[13] = var35;
                var2[14] = var29;
                var2[15] = var0;
                var2[16] = var48;
                var2[17] = var17;
                var48 = var23 == var18;
                var17 = undefined;
                if (var48) {
                    _fun48224_ip = 2006;
                    continue _fun48224
                }
            case 2001:
                var17 = var18.application;
            case 2006:
                var2[18] = var17;
                var2[19] = var36;
                var2[20] = var53;
                var10 = var13.bind(var15)(var10, var2);
                _closure2_slot54 = var10;
                var15 = _closure1_slot6;
                var17 = var15.useCallback;
                var13 = new Array(1);
                var13[0] = var10;
                var2 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot54;
                        var1 = {};
                        var3 = _closure3_slot0;
                        var1.isAuthorized = var3;
                        var0 = function arg0() {
                            var2 = _closure4_slot0;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1.overrideSuccessCallback = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var2 = var17.bind(var15)(var2, var13);
                _closure2_slot55 = var2;
                var17 = var15.useCallback;
                var13 = new Array(8);
                var13[0] = var16;
                var13[1] = var46;
                var13[2] = var44;
                var13[3] = var10;
                var13[4] = var2;
                var13[5] = var37;
                var13[6] = var0;
                var13[7] = var31;
                var2 = function(arg0) { // Environment: var5
                    _fun48251: for (var _fun48251_ip = 0;;) switch (_fun48251_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure2_slot47;
                            if (var3) {
                                _fun48251_ip = 42;
                                continue _fun48251
                            }
                        case 19:
                            var3 = _closure2_slot54;
                            var2 = {};
                            var2.isAuthorized = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun48251_ip = 168;
                            continue _fun48251;
                        case 42:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.showConnectionDisclaimer;
                            var3 = var1.bind(var2)();
                            var2 = var3.then;
                            var1 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 22;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.getAccountUrlAndAuthCode;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                _fun48253: for (var _fun48253_ip = 0;;) switch (_fun48253_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = var2[Symbol.iterator];
                                        var2 = var0().next;
                                        var3 = var2().value;
                                        var1 = var0;
                                        var5 = undefined;
                                        var1 = var1 === var5;
                                        var9 = undefined;
                                        if (var1) {
                                            _fun48253_ip = 27;
                                            continue _fun48253
                                        }
                                    case 24:
                                        var9 = var3;
                                    case 27:
                                        var3 = undefined;
                                        if (var1) {
                                            _fun48253_ip = 57;
                                            continue _fun48253
                                        }
                                    case 32:
                                        var4 = var2().value;
                                        var2 = var0;
                                        var2 = var2 === var5;
                                        var3 = undefined;
                                        var1 = var2;
                                        if (var2) {
                                            _fun48253_ip = 57;
                                            continue _fun48253
                                        }
                                    case 51:
                                        var3 = var4;
                                        var1 = var2;
                                    case 57:
                                        if (var1) {
                                            _fun48253_ip = 63;
                                            continue _fun48253
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var0 = global;
                                        var2 = var0.Promise;
                                        var1 = var2.all;
                                        var0 = new Array(2);
                                        var0[0] = var3;
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var3 = 26;
                                        var3 = var6[var3];
                                        var8 = var4.bind(var5)(var3);
                                        var7 = var8.startSamsungAuthorization;
                                        var14 = _closure2_slot0;
                                        var13 = _closure2_slot45;
                                        var12 = _closure2_slot1;
                                        var10 = _closure2_slot5;
                                        var15 = var8;
                                        var11 = var9;
                                        var3 = var15[var7](var14, var13, var12, var11, var10, var9);
                                        var0[1] = var3;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                _fun48254: for (var _fun48254_ip = 0;;) switch (_fun48254_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = var2[Symbol.iterator];
                                        var2 = var0().next;
                                        var4 = var2().value;
                                        var1 = var0;
                                        var5 = undefined;
                                        var1 = var1 === var5;
                                        var3 = undefined;
                                        if (var1) {
                                            _fun48254_ip = 27;
                                            continue _fun48254
                                        }
                                    case 24:
                                        var3 = var4;
                                    case 27:
                                        if (var1) {
                                            _fun48254_ip = 41;
                                            continue _fun48254
                                        }
                                    case 30:
                                        var2 = var2().value;
                                        var2 = var0;
                                        var1 = var2 === var5;
                                    case 41:
                                        if (var1) {
                                            _fun48254_ip = 47;
                                            continue _fun48254
                                        }
                                    case 44:
                                        var0.return();
                                    case 47:
                                        var0 = global;
                                        var2 = var0.Promise;
                                        var1 = var2.all;
                                        var0 = new Array(2);
                                        var0[0] = var3;
                                        var4 = _closure2_slot55;
                                        var3 = _closure3_slot0;
                                        var3 = var4.bind(var5)(var3);
                                        var0[1] = var3;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                _fun48255: for (var _fun48255_ip = 0;;) switch (_fun48255_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = var5[Symbol.iterator];
                                        var5 = var0().next;
                                        var3 = var5().value;
                                        var1 = var0;
                                        var2 = undefined;
                                        var1 = var1 === var2;
                                        var4 = undefined;
                                        if (var1) {
                                            _fun48255_ip = 27;
                                            continue _fun48255
                                        }
                                    case 24:
                                        var4 = var3;
                                    case 27:
                                        var3 = undefined;
                                        if (var1) {
                                            _fun48255_ip = 57;
                                            continue _fun48255
                                        }
                                    case 32:
                                        var6 = var5().value;
                                        var5 = var0;
                                        var5 = var5 === var2;
                                        var3 = undefined;
                                        var1 = var5;
                                        if (var5) {
                                            _fun48255_ip = 57;
                                            continue _fun48255
                                        }
                                    case 51:
                                        var3 = var6;
                                        var1 = var5;
                                    case 57:
                                        if (var1) {
                                            _fun48255_ip = 63;
                                            continue _fun48255
                                        }
                                    case 60:
                                        var0.return();
                                    case 63:
                                        var1 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var0 = 22;
                                        var0 = var5[var0];
                                        var2 = var1.bind(var2)(var0);
                                        var1 = var2.finishSamsungAuthorization;
                                        var0 = _closure2_slot5;
                                        var0 = var1.bind(var2)(var4, var3, var0);
                                        return var0;
                                }
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function() { // Environment: var0
                                _fun48256: for (var _fun48256_ip = 0;;) switch (_fun48256_ip) {
                                    case 0:
                                        var2 = _closure2_slot13;
                                        var0 = null;
                                        var3 = var0 == var2;
                                        var2 = undefined;
                                        var0 = undefined;
                                        if (var3) {
                                            _fun48256_ip = 28;
                                            continue _fun48256
                                        }
                                    case 20:
                                        var1 = _closure2_slot13;
                                        var0 = var1.bind(var2)();
                                    case 28:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.catch;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 29;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.captureException;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 168:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var17.bind(var15)(var2, var13);
                _closure2_slot56 = var2;
                var2 = var15.useRef;
                var2 = var2.bind(var15)(var12);
                _closure2_slot57 = var2;
                var17 = var15.useCallback;
                var13 = _closure1_slot4;
                var2 = function*() { // Environment: var5
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun48259: for (var _fun48259_ip = 0;;) switch (_fun48259_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun48259_ip = 571;
                                    continue _fun48259
                                }
                            case 10:
                                var1 = undefined;
                                var9 = undefined;
                                var5 = undefined;
                                var2 = _closure2_slot57;
                                var2 = var2.current;
                                if (var2) {
                                    _fun48259_ip = 568;
                                    continue _fun48259
                                }
                            case 34:
                                var2 = _closure2_slot57;
                                var8 = true;
                                var2.current = var8;
                            case 46: // try_start_0 // try_start_1
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var2 = 26;
                                var2 = var7[var2];
                                var7 = var6.bind(var1)(var2);
                                var6 = var7.fetchAuthorization;
                                var2 = {};
                                var10 = _closure2_slot0;
                                var2.clientId = var10;
                                var10 = _closure2_slot45;
                                var2.scopes = var10;
                                var10 = _closure2_slot1;
                                var2.responseType = var10;
                                var10 = _closure2_slot2;
                                var2.redirectUri = var10;
                                var10 = _closure2_slot3;
                                var2.codeChallenge = var10;
                                var10 = _closure2_slot4;
                                var2.codeChallengeMethod = var10;
                                var10 = _closure2_slot5;
                                var2.state = var10;
                                var11 = _closure2_slot35;
                                var10 = null;
                                var11 = var10 != var11;
                                var10 = undefined;
                                if (!var11) {
                                    _fun48259_ip = 158;
                                    continue _fun48259
                                }
                            case 154:
                                var10 = _closure2_slot35;
                            case 158:
                                var2.integrationType = var10;
                                var2 = var6.bind(var7)(var2);
                                SaveGenerator(address = 172);
                            case 170:
                                return var2;
                            case 172:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun48259_ip = 382;
                                    continue _fun48259
                                }
                            case 181:
                                var9 = var2;
                                var7 = _closure2_slot19;
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot3;
                                var6 = 30;
                                var6 = var13[var6];
                                var10 = var12.bind(var1)(var6);
                                var6 = var10.convertOAuth2Authorization;
                                var6 = var6.bind(var10)(var2);
                                var6 = var7.bind(var1)(var6);
                                var11 = _closure2_slot7;
                                var10 = 31;
                                var10 = var13[var10];
                                var10 = var12.bind(var1)(var10);
                                var10 = var10.OAuth2Prompts;
                                var10 = var10.NONE;
                                var10 = var11 === var10;
                                var7 = var10;
                                if (!var10) {
                                    _fun48259_ip = 271;
                                    continue _fun48259
                                }
                            case 262:
                                var10 = var9;
                                var7 = var10.authorized;
                            case 271:
                                var6 = var7;
                                if (!var7) {
                                    _fun48259_ip = 284;
                                    continue _fun48259
                                }
                            case 277:
                                var7 = _closure2_slot52;
                                var6 = !var7;
                            case 284:
                                if (!var6) {
                                    _fun48259_ip = 303;
                                    continue _fun48259
                                }
                            case 287:
                                var7 = _closure2_slot54;
                                var6 = {};
                                var6.isAuthorized = var8;
                                var6 = var7.bind(var1)(var6);
                            case 303:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var6 = 32;
                                var6 = var8[var6];
                                var8 = var7.bind(var1)(var6);
                                var7 = var8.trackWithMetadata;
                                var4 = _closure1_slot15;
                                var6 = var4.OAUTH2_AUTHORIZE_VIEWED;
                                var4 = {};
                                var9 = var9.application;
                                var9 = var9.id;
                                var4.application_id = var9;
                                var9 = _closure2_slot17;
                                var9 = var9.defaultOnMobile;
                                var4.mobile_push_notification_default_setting = var9;
                                var4 = var7.bind(var8)(var6, var4);
                            case 377: // try_end0
                                _fun48259_ip = 538;
                                continue _fun48259;
                            case 382: // try_end1
                                var6 = _closure2_slot57;
                                var4 = false;
                                var6.current = var4;
                                return var2;
                            case 397: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 2);
                                var7 = var2.body;
                                var5 = var7;
                                var4 = _closure2_slot23;
                                var2 = global;
                                var6 = var2.Error;
                                var8 = var7.message;
                                var7 = null;
                                if (!(var7 == var8)) {
                                    _fun48259_ip = 505;
                                    continue _fun48259
                                }
                            case 430:
                                var8 = var2.Object;
                                var7 = var8.keys;
                                var11 = var5;
                                var7 = var7.bind(var8)(var11);
                                var8 = 0;
                                var10 = var7[var8];
                                var9 = var2.Object;
                                var7 = var9.values;
                                var7 = var7.bind(var9)(var11);
                                var9 = var7[var8];
                                var2 = var2.HermesInternal;
                                var8 = var2.concat;
                                var7 = '';
                                var2 = ': ';
                                var2 = var8.bind(var7)(var10, var2, var9);
                                _fun48259_ip = 510;
                                continue _fun48259;
                            case 505:
                                var2 = var5.message;
                            case 510:
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var17 = var5;
                                var16 = var2;
                                var2 = new var17[var6](var16, var15);
                                var2 = var2 instanceof Object ? var2 : var5;
                                var2 = var4.bind(var1)(var2);
                            case 538: // try_end2
                                var4 = _closure2_slot57;
                                var2 = false;
                                var4.current = var2;
                                _fun48259_ip = 568;
                                continue _fun48259;
                            case 552: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 2);
                                var4 = _closure2_slot57;
                                var3 = false;
                                var4.current = var3;
                                throw var2;
                            case 568:
                                return var1;
                            case 571:
                                return var0;
                        }
                    };
                    return var0;
                };
                var13 = var13.bind(var4)(var2);
                var2 = new Array(12);
                var2[0] = var16;
                var2[1] = var31;
                var2[2] = var44;
                var2[3] = var41;
                var2[4] = var39;
                var2[5] = var38;
                var2[6] = var37;
                var2[7] = var47;
                var2[8] = var32;
                var2[9] = var10;
                var2[10] = var22;
                var22 = var30.defaultOnMobile;
                var2[11] = var22;
                var13 = var17.bind(var15)(var13, var2);
                _closure2_slot58 = var13;
                var22 = var15.useMemo;
                var17 = new Array(2);
                var17[0] = var33;
                var17[1] = var21;
                var2 = function() { // Environment: var5
                    _fun48260: for (var _fun48260_ip = 0;;) switch (_fun48260_ip) {
                        case 0:
                            var0 = _closure2_slot42;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun48260_ip = 22;
                                continue _fun48260
                            }
                        case 15:
                            var0 = _closure2_slot41;
                            if (var0) {
                                _fun48260_ip = 28;
                                continue _fun48260
                            }
                        case 22:
                            var0 = new Array(0);
                            _fun48260_ip = 93;
                            continue _fun48260;
                        case 28:
                            var3 = global;
                            var4 = var3.Object;
                            var3 = var4.entries;
                            var2 = _closure2_slot42;
                            var2 = var2.integrationTypesConfig;
                            if (!(var5 == var2)) {
                                _fun48260_ip = 58;
                                continue _fun48260
                            }
                        case 56:
                            var2 = {};
                        case 58:
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var1
                                _fun48261: for (var _fun48261_ip = 0;;) switch (_fun48261_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = var3[Symbol.iterator];
                                        var3 = var1().next;
                                        var0 = var3().value;
                                        var0 = var1;
                                        var5 = undefined;
                                        var2 = var0 === var5;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun48261_ip = 49;
                                            continue _fun48261
                                        }
                                    case 24:
                                        var4 = var3().value;
                                        var3 = var1;
                                        var3 = var3 === var5;
                                        var0 = undefined;
                                        var2 = var3;
                                        if (var3) {
                                            _fun48261_ip = 49;
                                            continue _fun48261
                                        }
                                    case 43:
                                        var0 = var4;
                                        var2 = var3;
                                    case 49:
                                        if (var2) {
                                            _fun48261_ip = 55;
                                            continue _fun48261
                                        }
                                    case 52:
                                        var1.return();
                                    case 55:
                                        var1 = var0.oauth2InstallParams;
                                        var0 = null;
                                        var0 = var0 != var1;
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                _fun48262: for (var _fun48262_ip = 0;;) switch (_fun48262_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = var4[Symbol.iterator];
                                        var4 = var0().next;
                                        var5 = var4().value;
                                        var1 = var0;
                                        var2 = undefined;
                                        var3 = var1 === var2;
                                        var1 = undefined;
                                        if (var3) {
                                            _fun48262_ip = 27;
                                            continue _fun48262
                                        }
                                    case 24:
                                        var1 = var5;
                                    case 27:
                                        if (var3) {
                                            _fun48262_ip = 41;
                                            continue _fun48262
                                        }
                                    case 30:
                                        var4 = var4().value;
                                        var4 = var0;
                                        var3 = var4 === var2;
                                    case 41:
                                        if (var3) {
                                            _fun48262_ip = 47;
                                            continue _fun48262
                                        }
                                    case 44:
                                        var0.return();
                                    case 47:
                                        var0 = global;
                                        var0 = var0.Number;
                                        var0 = var0.bind(var2)(var1);
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1);
                        case 93:
                            return var0;
                    }
                };
                var2 = var22.bind(var15)(var2, var17);
                _closure2_slot59 = var2;
                var17 = var15.useRef;
                var17 = var17.bind(var15)(var23);
                _closure2_slot60 = var17;
                var22 = var15.useEffect;
                var17 = new Array(6);
                var17[0] = var16;
                var17[1] = var47;
                var17[2] = var40;
                var17[3] = var31;
                var17[4] = var19;
                var16 = var30.defaultOnMobile;
                var17[5] = var16;
                var16 = function() { // Environment: var5
                    _fun48263: for (var _fun48263_ip = 0;;) switch (_fun48263_ip) {
                        case 0:
                            var1 = _closure2_slot20;
                            var0 = _closure2_slot60;
                            var0 = var0.current;
                            if (!(var1 !== var0)) {
                                _fun48263_ip = 155;
                                continue _fun48263
                            }
                        case 23:
                            var1 = _closure2_slot60;
                            var0 = _closure2_slot20;
                            var1.current = var0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 32;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.trackWithMetadata;
                            var0 = _closure1_slot15;
                            var1 = var0.OAUTH2_AUTHORIZE_STEP_VIEWED;
                            var0 = {};
                            var5 = _closure2_slot20;
                            var0.step = var5;
                            var5 = _closure2_slot0;
                            var0.application_id = var5;
                            var5 = _closure2_slot35;
                            var0.integration_type = var5;
                            var5 = _closure2_slot45;
                            var0.scopes = var5;
                            var6 = _closure2_slot46;
                            var5 = var6.toString;
                            var5 = var5.bind(var6)();
                            var0.permissions = var5;
                            var4 = _closure2_slot17;
                            var4 = var4.defaultOnMobile;
                            var0.mobile_push_notification_default_setting = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 155:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var22.bind(var15)(var16, var17);
                var17 = var15.useEffect;
                var16 = new Array(5);
                var16[0] = var2;
                var16[1] = var33;
                var16[2] = var21;
                var16[3] = var14;
                var16[4] = var19;
                var14 = function() { // Environment: var5
                    _fun48264: for (var _fun48264_ip = 0;;) switch (_fun48264_ip) {
                        case 0:
                            var1 = _closure2_slot20;
                            var2 = null;
                            var1 = var2 != var1;
                            if (var1) {
                                _fun48264_ip = 34;
                                continue _fun48264
                            }
                        case 16:
                            var3 = _closure2_slot41;
                            if (!var3) {
                                _fun48264_ip = 31;
                                continue _fun48264
                            }
                        case 23:
                            var4 = _closure2_slot42;
                            var3 = var2 == var4;
                        case 31:
                            var1 = var3;
                        case 34:
                            if (var1) {
                                _fun48264_ip = 255;
                                continue _fun48264
                            }
                        case 40:
                            var1 = _closure2_slot59;
                            var1 = var1.length;
                            var3 = 1;
                            if (!(!(var1 > var3))) {
                                _fun48264_ip = 231;
                                continue _fun48264
                            }
                        case 59:
                            var1 = _closure2_slot59;
                            var1 = var1.length;
                            if (!(var3 !== var1)) {
                                _fun48264_ip = 186;
                                continue _fun48264
                            }
                        case 72:
                            var1 = _closure2_slot10;
                            if (!(var2 == var1)) {
                                _fun48264_ip = 147;
                                continue _fun48264
                            }
                        case 80:
                            var4 = _closure2_slot36;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 27;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.ApplicationIntegrationType;
                            var2 = var2.GUILD_INSTALL;
                            var2 = var4.bind(var3)(var2);
                            var2 = _closure2_slot21;
                            var1 = _closure1_slot14;
                            var1 = var1.AUTHORIZE_SCOPES;
                            var1 = var2.bind(var3)(var1);
                            _fun48264_ip = 255;
                            continue _fun48264;
                        case 147:
                            var2 = _closure2_slot36;
                            var1 = _closure2_slot10;
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot21;
                            var1 = _closure1_slot14;
                            var1 = var1.AUTHORIZE_SCOPES;
                            var1 = var2.bind(var3)(var1);
                            _fun48264_ip = 255;
                            continue _fun48264;
                        case 186:
                            var2 = _closure2_slot36;
                            var3 = _closure2_slot59;
                            var1 = 0;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure2_slot21;
                            var1 = _closure1_slot14;
                            var1 = var1.AUTHORIZE_SCOPES;
                            var1 = var2.bind(var3)(var1);
                            _fun48264_ip = 255;
                            continue _fun48264;
                        case 231:
                            var2 = _closure2_slot21;
                            var0 = _closure1_slot14;
                            var1 = var0.SELECT_INSTALL_TYPE;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 255:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var17.bind(var15)(var14, var16);
                var16 = var15.useEffect;
                var14 = new Array(6);
                var14[0] = var13;
                var14[1] = var31;
                var14[2] = var40;
                var14[3] = var47;
                var14[4] = var18;
                var14[5] = var8;
                var13 = function() { // Environment: var5
                    _fun48265: for (var _fun48265_ip = 0;;) switch (_fun48265_ip) {
                        case 0:
                            var1 = _closure2_slot35;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun48265_ip = 353;
                                continue _fun48265
                            }
                        case 16:
                            var1 = _closure2_slot18;
                            if (!(var4 == var1)) {
                                _fun48265_ip = 353;
                                continue _fun48265
                            }
                        case 27:
                            var1 = _closure2_slot22;
                            if (!(var4 == var1)) {
                                _fun48265_ip = 353;
                                continue _fun48265
                            }
                        case 38:
                            var5 = _closure2_slot35;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 27;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var3 = var3.ApplicationIntegrationType;
                            var3 = var3.USER_INSTALL;
                            if (!(var5 === var3)) {
                                _fun48265_ip = 101;
                                continue _fun48265
                            }
                        case 83:
                            var3 = _closure2_slot27;
                            var3 = var3.bind(var2)(var4);
                            var3 = _closure2_slot29;
                            var3 = var3.bind(var2)(var4);
                        case 101:
                            var5 = _closure2_slot45;
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var3
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var2 = var0.ValidScopes;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var6 = var4.bind(var5)(var3);
                            var3 = _closure2_slot45;
                            var3 = var3.length;
                            var4 = 0;
                            if (!(var4 !== var3)) {
                                _fun48265_ip = 310;
                                continue _fun48265
                            }
                        case 140:
                            var3 = var6.length;
                            if (!(!(var3 > var4))) {
                                _fun48265_ip = 245;
                                continue _fun48265
                            }
                        case 149:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 33;
                            var1 = var5[var1];
                            var5 = var3.bind(var2)(var1);
                            var3 = var5.containsDisallowedPermission;
                            var1 = _closure2_slot46;
                            var1 = var3.bind(var5)(var1);
                            if (var1) {
                                _fun48265_ip = 200;
                                continue _fun48265
                            }
                        case 187:
                            var1 = _closure2_slot58;
                            var1 = var1.bind(var2)();
                            _fun48265_ip = 353;
                            continue _fun48265;
                        case 200:
                            var3 = _closure2_slot23;
                            var1 = global;
                            var7 = var1.Error;
                            var1 = var7.prototype;
                            var5 = Object.create(var1, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var8 = 'Invalid permission(s) provided.';
                            var9 = var5;
                            var1 = new var9[var7](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var3.bind(var2)(var1);
                            _fun48265_ip = 353;
                            continue _fun48265;
                        case 245:
                            var3 = _closure2_slot23;
                            var1 = global;
                            var5 = var1.Error;
                            var6 = var6[var4];
                            var1 = var1.HermesInternal;
                            var4 = var1.concat;
                            var1 = 'Invalid scope: ';
                            var8 = var4.bind(var1)(var6);
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var9 = var4;
                            var1 = new var9[var5](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var1 = var3.bind(var2)(var1);
                            _fun48265_ip = 353;
                            continue _fun48265;
                        case 310:
                            var1 = _closure2_slot23;
                            var0 = global;
                            var4 = var0.Error;
                            var0 = var4.prototype;
                            var3 = Object.create(var0, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var8 = 'No scopes were provided.';
                            var9 = var3;
                            var0 = new var9[var4](var8, var7);
                            var0 = var0 instanceof Object ? var0 : var3;
                            var0 = var1.bind(var2)(var0);
                        case 353:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var16.bind(var15)(var13, var14);
                var14 = var15.useCallback;
                var13 = new Array(2);
                var13[0] = var11;
                var13[1] = var9;
                var11 = function() { // Environment: var5
                    _fun48267: for (var _fun48267_ip = 0;;) switch (_fun48267_ip) {
                        case 0:
                            var1 = _closure2_slot40;
                            if (!var1) {
                                _fun48267_ip = 17;
                                continue _fun48267
                            }
                        case 10:
                            var2 = _closure2_slot37;
                            var1 = !var2;
                        case 17:
                            if (!var1) {
                                _fun48267_ip = 33;
                                continue _fun48267
                            }
                        case 20:
                            var2 = _closure2_slot38;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var14.bind(var15)(var11, var13);
                var11 = _closure1_slot14;
                var11 = var11.AUTHORIZE_SCOPES;
                if (!(var19 === var11)) {
                    _fun48224_ip = 2448;
                    continue _fun48224
                }
            case 2439:
                var2 = var2.length;
                if (!(!(var2 > var7))) {
                    _fun48224_ip = 2483;
                    continue _fun48224
                }
            case 2448:
                var2 = _closure1_slot14;
                var2 = var2.AUTHORIZE_BOT_PERMISSIONS;
                var11 = undefined;
                if (!(var19 === var2)) {
                    _fun48224_ip = 2500;
                    continue _fun48224
                }
            case 2464:
                var2 = _closure1_slot14;
                var2 = var2.AUTHORIZE_SCOPES;
                _closure2_slot61 = var2;
                var11 = var2;
                _fun48224_ip = 2500;
                continue _fun48224;
            case 2483:
                var2 = _closure1_slot14;
                var2 = var2.SELECT_INSTALL_TYPE;
                _closure2_slot61 = var2;
                var11 = var2;
            case 2500:
                var13 = _closure1_slot6;
                var7 = var13.useCallback;
                var2 = new Array(3);
                var2[0] = var11;
                var2[1] = var0;
                var2[2] = var10;
                var0 = function() { // Environment: var5
                    _fun48268: for (var _fun48268_ip = 0;;) switch (_fun48268_ip) {
                        case 0:
                            var1 = _closure2_slot61;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun48268_ip = 56;
                                continue _fun48268
                            }
                        case 13:
                            var4 = _closure2_slot54;
                            var2 = undefined;
                            var1 = {
                                'isAuthorized': false,
                                'canceled': true
                            };
                            var1 = var4.bind(var2)(var1);
                            var1 = _closure2_slot13;
                            if (!(var3 != var1)) {
                                _fun48268_ip = 71;
                                continue _fun48268
                            }
                        case 46:
                            var1 = _closure2_slot13;
                            var1 = var1.bind(var2)();
                            _fun48268_ip = 71;
                            continue _fun48268;
                        case 56:
                            var2 = _closure2_slot21;
                            var1 = _closure2_slot61;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 71:
                            var0 = true;
                            return var0;
                    }
                };
                var2 = var7.bind(var13)(var0, var2);
                _closure2_slot62 = var2;
                var7 = _closure1_slot1;
                var14 = _closure1_slot3;
                var0 = 34;
                var0 = var14[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.bind(var4)(var2, var3);
                var7 = var13.useCallback;
                var3 = function(arg0) { // Environment: var5
                    var3 = _closure2_slot36;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot19;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot21;
                    var1 = _closure1_slot14;
                    var1 = var1.AUTHORIZE_SCOPES;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var32 = var7.bind(var13)(var3, var0);
                var7 = var13.useCallback;
                var3 = function(arg0, arg1) { // Environment: var5
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var2 = _closure2_slot31;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun48271: for (var _fun48271_ip = 0;;) switch (_fun48271_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = _closure3_slot0;
                                var5 = _closure1_slot2;
                                var3 = _closure1_slot3;
                                var2 = 21;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var5.bind(var2)(var3);
                                if (var0) {
                                    _fun48271_ip = 55;
                                    continue _fun48271
                                }
                            case 38:
                                var2 = var3.add;
                                var0 = _closure3_slot1;
                                var0 = var2.bind(var3)(var4, var0);
                                _fun48271_ip = 71;
                                continue _fun48271;
                            case 55:
                                var2 = var3.remove;
                                var1 = _closure3_slot1;
                                var0 = var2.bind(var3)(var4, var1);
                            case 71:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var41 = var7.bind(var13)(var3, var0);
                var15 = global;
                var0 = var15.Error;
                var0 = var8 instanceof var0;
                if (var0) {
                    _fun48224_ip = 5461;
                    continue _fun48224
                }
            case 2624:
                var7 = function() {
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot7;
                    var1 = {};
                    var4 = _closure2_slot16;
                    var4 = var4.loading;
                    var1.style = var4;
                    var5 = _closure1_slot8;
                    var4 = {
                        'animating': true,
                        'color': null,
                        'size': 'large'
                    };
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var0 = 38;
                    var6 = var6[var0];
                    var0 = undefined;
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.unsafe_rawColors;
                    var6 = var6.BRAND_500;
                    var4.color = var6;
                    var4 = var3.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                if (!(var23 !== var19)) {
                    _fun48224_ip = 5441;
                    continue _fun48224
                }
            case 2636:
                var0 = _closure1_slot14;
                var0 = var0.SELECT_INSTALL_TYPE;
                if (!(var0 !== var19)) {
                    _fun48224_ip = 4320;
                    continue _fun48224
                }
            case 2653:
                var0 = _closure1_slot14;
                var0 = var0.AUTHORIZE_SCOPES;
                if (!(var0 !== var19)) {
                    _fun48224_ip = 2798;
                    continue _fun48224
                }
            case 2670:
                var0 = _closure1_slot14;
                var37 = var0.AUTHORIZE_BOT_PERMISSIONS;
                var13 = undefined;
                var17 = undefined;
                var3 = false;
                var22 = false;
                var14 = true;
                var0 = true;
                if (!(var37 === var19)) {
                    _fun48224_ip = 4378;
                    continue _fun48224
                }
            case 2699:
                if (!(var23 != var18)) {
                    _fun48224_ip = 2778;
                    continue _fun48224
                }
            case 2703:
                var39 = _closure1_slot18;
                var38 = _closure1_slot1;
                var44 = _closure1_slot3;
                var37 = 51;
                var37 = var44[var37];
                var38 = var38.bind(var4)(var37);
                var37 = {};
                var44 = var18.application;
                var37.application = var44;
                var37.permissions = var40;
                var37.deniedPermissions = var43;
                var37.onPermissionsChange = var41;
                var37.guild = var36;
                var13 = var39.bind(var4)(var38, var37);
                var17 = undefined;
                var3 = true;
                var22 = false;
                var14 = true;
                var0 = true;
                _fun48224_ip = 4378;
                continue _fun48224;
            case 2778:
                var16 = {};
                var38 = _closure1_slot18;
                var37 = {};
                var37 = var38.bind(var4)(var7, var37);
                var16.body = var37;
                return var16;
            case 2798:
                if (!(var23 != var18)) {
                    _fun48224_ip = 4300;
                    continue _fun48224
                }
            case 2805:
                if (!(var23 != var26)) {
                    _fun48224_ip = 4300;
                    continue _fun48224
                }
            case 2812:
                if (!(var23 != var47)) {
                    _fun48224_ip = 4300;
                    continue _fun48224
                }
            case 2819:
                if (!(var23 != var8)) {
                    _fun48224_ip = 2839;
                    continue _fun48224
                }
            case 2823:
                var15 = var15.Error;
                var15 = var8 instanceof var15;
                var57 = var8;
                if (!var15) {
                    _fun48224_ip = 2841;
                    continue _fun48224
                }
            case 2839:
                var57 = {};
            case 2841:
                var15 = var23 == var34;
                var54 = undefined;
                if (var15) {
                    _fun48224_ip = 2866;
                    continue _fun48224
                }
            case 2850:
                var16 = var34.sort;
                var15 = function(arg0, arg1) { // Environment: var5
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = var1.toLowerCase;
                    var2 = var0.bind(var1)();
                    var1 = var2.localeCompare;
                    var0 = arg1;
                    var3 = var0.name;
                    var0 = var3.toLowerCase;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var54 = var16.bind(var34)(var15);
            case 2866:
                var16 = _closure1_slot0;
                var15 = _closure1_slot3;
                var38 = 27;
                var15 = var15[var38];
                var15 = var16.bind(var4)(var15);
                var15 = var15.ApplicationIntegrationType;
                var15 = var15.GUILD_INSTALL;
                var15 = var47 === var15;
                if (!var15) {
                    _fun48224_ip = 2947;
                    continue _fun48224
                }
            case 2905:
                var34 = var31.includes;
                var37 = _closure1_slot0;
                var39 = _closure1_slot3;
                var16 = 40;
                var16 = var39[var16];
                var16 = var37.bind(var4)(var16);
                var16 = var16.OAuth2Scopes;
                var16 = var16.WEBHOOK_INCOMING;
                var15 = var34.bind(var31)(var16);
            case 2947:
                var16 = var15;
                if (var15) {
                    _fun48224_ip = 3082;
                    continue _fun48224
                }
            case 2956:
                var37 = _closure1_slot0;
                var34 = _closure1_slot3;
                var34 = var34[var38];
                var34 = var37.bind(var4)(var34);
                var34 = var34.ApplicationIntegrationType;
                var34 = var34.GUILD_INSTALL;
                var34 = var47 === var34;
                if (!var34) {
                    _fun48224_ip = 3079;
                    continue _fun48224
                }
            case 2992:
                var39 = var31.includes;
                var41 = _closure1_slot0;
                var37 = _closure1_slot3;
                var44 = 40;
                var37 = var37[var44];
                var37 = var41.bind(var4)(var37);
                var37 = var37.OAuth2Scopes;
                var37 = var37.BOT;
                var37 = var39.bind(var31)(var37);
                if (var37) {
                    _fun48224_ip = 3076;
                    continue _fun48224
                }
            case 3037:
                var41 = var31.includes;
                var43 = _closure1_slot0;
                var39 = _closure1_slot3;
                var39 = var39[var44];
                var39 = var43.bind(var4)(var39);
                var39 = var39.OAuth2Scopes;
                var39 = var39.APPLICATIONS_COMMANDS;
                var37 = var41.bind(var31)(var39);
            case 3076:
                var34 = var37;
            case 3079:
                var16 = var34;
            case 3082:
                var37 = _closure1_slot0;
                var39 = _closure1_slot3;
                var34 = 41;
                var34 = var39[var34];
                var41 = var37.bind(var4)(var34);
                var39 = var41.hasFlag;
                var34 = var18.application;
                var34 = var34.flags;
                var43 = var23 != var34;
                var37 = 0;
                if (!var43) {
                    _fun48224_ip = 3130;
                    continue _fun48224
                }
            case 3127:
                var37 = var34;
            case 3130:
                var34 = _closure1_slot16;
                var34 = var34.EMBEDDED;
                var41 = var39.bind(var41)(var37, var34);
                if (!var41) {
                    _fun48224_ip = 3182;
                    continue _fun48224
                }
            case 3149:
                var37 = _closure1_slot0;
                var34 = _closure1_slot3;
                var34 = var34[var38];
                var34 = var37.bind(var4)(var34);
                var34 = var34.ApplicationIntegrationType;
                var34 = var34.USER_INSTALL;
                var41 = var47 === var34;
            case 3182:
                if (!var41) {
                    _fun48224_ip = 3190;
                    continue _fun48224
                }
            case 3185:
                var41 = var30.enabled;
            case 3190:
                var34 = _closure1_slot0;
                var48 = _closure1_slot3;
                var30 = 42;
                var30 = var48[var30];
                var37 = var34.bind(var4)(var30);
                var34 = var37.getIsSocialLayerParentApplication;
                var30 = var18.application;
                var46 = var34.bind(var37)(var30);
                var37 = _closure1_slot20;
                var34 = _closure1_slot19;
                var30 = {};
                var44 = _closure1_slot18;
                var43 = _closure1_slot1;
                var38 = 43;
                var38 = var48[var38];
                var39 = var43.bind(var4)(var38);
                var38 = {};
                var49 = var18.application;
                var38.application = var49;
                var38.accountScopes = var25;
                var39 = var44.bind(var4)(var39, var38);
                var38 = new Array(5);
                var38[0] = var39;
                var39 = 44;
                var39 = var48[var39];
                var43 = var43.bind(var4)(var39);
                var39 = {};
                var48 = var18.application;
                var39.application = var48;
                var39.accountScopes = var25;
                var39.requestedScopes = var31;
                var39.integrationType = var47;
                var39.errors = var57;
                if (var45) {
                    _fun48224_ip = 3335;
                    continue _fun48224
                }
            case 3332:
                var45 = var46;
            case 3335:
                var39.isTrustedName = var45;
                var39 = var44.bind(var4)(var43, var39);
                var38[1] = var39;
                var39 = null;
                if (!var16) {
                    _fun48224_ip = 3577;
                    continue _fun48224
                }
            case 3358:
                var45 = _closure1_slot20;
                var44 = _closure1_slot19;
                var43 = {};
                var49 = _closure1_slot18;
                var61 = _closure1_slot0;
                var60 = _closure1_slot3;
                var46 = 45;
                var46 = var60[var46];
                var46 = var61.bind(var4)(var46);
                var47 = var46.AuthorizeFormSeparator;
                var46 = {};
                var47 = var49.bind(var4)(var47, var46);
                var46 = new Array(2);
                var46[0] = var47;
                var48 = _closure1_slot1;
                var47 = 46;
                var47 = var60[var47];
                var48 = var48.bind(var4)(var47);
                var47 = {};
                var63 = 40;
                var60 = var60[var63];
                var60 = var61.bind(var4)(var60);
                var60 = var60.OAuth2Scopes;
                var60 = var60.BOT;
                var60 = var57[var60];
                if (!(var23 == var60)) {
                    _fun48224_ip = 3497;
                    continue _fun48224
                }
            case 3464:
                var62 = _closure1_slot0;
                var61 = _closure1_slot3;
                var61 = var61[var63];
                var61 = var62.bind(var4)(var61);
                var61 = var61.OAuth2Scopes;
                var61 = var61.APPLICATIONS_COMMANDS;
                var60 = var57[var61];
            case 3497:
                if (!(var23 == var60)) {
                    _fun48224_ip = 3505;
                    continue _fun48224
                }
            case 3501:
                var60 = new Array(0);
            case 3505:
                var60 = var60[var56];
                var47.error = var60;
                var47.selectedGuildId = var51;
                var47.onGuildChange = var58;
                if (!(var23 == var54)) {
                    _fun48224_ip = 3531;
                    continue _fun48224
                }
            case 3527:
                var54 = new Array(0);
            case 3531:
                var47.guilds = var54;
                var54 = '';
                var54 = var54 !== var51;
                if (!var54) {
                    _fun48224_ip = 3553;
                    continue _fun48224
                }
            case 3547:
                var58 = true;
                var54 = var58 === var59;
            case 3553:
                var47.disabled = var54;
                var47 = var49.bind(var4)(var48, var47);
                var46[1] = var47;
                var43.children = var46;
                var39 = var45.bind(var4)(var44, var43);
            case 3577:
                var38[2] = var39;
                var39 = null;
                if (!var15) {
                    _fun48224_ip = 3742;
                    continue _fun48224
                }
            case 3589:
                var45 = _closure1_slot20;
                var44 = _closure1_slot19;
                var43 = {};
                var49 = _closure1_slot18;
                var58 = _closure1_slot0;
                var59 = _closure1_slot3;
                var46 = 45;
                var46 = var59[var46];
                var46 = var58.bind(var4)(var46);
                var47 = var46.AuthorizeFormSeparator;
                var46 = {};
                var47 = var49.bind(var4)(var47, var46);
                var46 = new Array(2);
                var46[0] = var47;
                var48 = _closure1_slot1;
                var47 = 47;
                var47 = var59[var47];
                var48 = var48.bind(var4)(var47);
                var47 = {};
                var54 = 40;
                var54 = var59[var54];
                var54 = var58.bind(var4)(var54);
                var54 = var54.OAuth2Scopes;
                var54 = var54.WEBHOOK_INCOMING;
                var54 = var57[var54];
                if (!(var23 == var54)) {
                    _fun48224_ip = 3699;
                    continue _fun48224
                }
            case 3695:
                var54 = new Array(0);
            case 3699:
                var54 = var54[var56];
                var47.error = var54;
                var47.selectedChannelId = var35;
                var47.selectedGuildId = var51;
                var47.onChannelChange = var50;
                var47 = var49.bind(var4)(var48, var47);
                var46[1] = var47;
                var43.children = var46;
                var39 = var45.bind(var4)(var44, var43);
            case 3742:
                var38[3] = var39;
                var39 = null;
                if (!var41) {
                    _fun48224_ip = 4126;
                    continue _fun48224
                }
            case 3754:
                var44 = _closure1_slot20;
                var43 = _closure1_slot19;
                var41 = {};
                var51 = _closure1_slot18;
                var50 = _closure1_slot0;
                var54 = _closure1_slot3;
                var45 = 45;
                var45 = var54[var45];
                var45 = var50.bind(var4)(var45);
                var46 = var45.AuthorizeFormSeparator;
                var45 = {};
                var46 = var51.bind(var4)(var46, var45);
                var45 = new Array(2);
                var45[0] = var46;
                var46 = 48;
                var46 = var54[var46];
                var46 = var50.bind(var4)(var46);
                var47 = var46.PressableOpacity;
                var46 = {};
                var48 = var55.switchContainer;
                var46.style = var48;
                var48 = function() {
                    var2 = _closure2_slot33;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var46.onPress = var48;
                var49 = _closure1_slot7;
                var48 = {};
                var55 = var55.switchLabelContainer;
                var48.style = var55;
                var56 = 49;
                var55 = var54[var56];
                var55 = var50.bind(var4)(var55);
                var57 = var55.Text;
                var55 = {};
                var58 = 'text-md/semibold';
                var55.variant = var58;
                var58 = 37;
                var59 = var54[var58];
                var59 = var50.bind(var4)(var59);
                var61 = var59.intl;
                var60 = var61.string;
                var59 = var54[var58];
                var59 = var50.bind(var4)(var59);
                var59 = var59.t;
                var59 = var59["Pkw//o"];
                var59 = var60.bind(var61)(var59);
                var55.children = var59;
                var57 = var51.bind(var4)(var57, var55);
                var55 = new Array(2);
                var55[0] = var57;
                var56 = var54[var56];
                var56 = var50.bind(var4)(var56);
                var57 = var56.Text;
                var56 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var59 = var54[var58];
                var59 = var50.bind(var4)(var59);
                var60 = var59.intl;
                var59 = var60.string;
                var58 = var54[var58];
                var58 = var50.bind(var4)(var58);
                var58 = var58.t;
                var58 = var58.c1uXox;
                var58 = var59.bind(var60)(var58);
                var56.children = var58;
                var56 = var51.bind(var4)(var57, var56);
                var55[1] = var56;
                var48.children = var55;
                var49 = var44.bind(var4)(var49, var48);
                var48 = new Array(2);
                var48[0] = var49;
                var49 = 50;
                var49 = var54[var49];
                var49 = var50.bind(var4)(var49);
                var50 = var49.FormSwitch;
                var49 = {};
                var49.value = var53;
                var49.onValueChange = var52;
                var49 = var51.bind(var4)(var50, var49);
                var48[1] = var49;
                var46.children = var48;
                var46 = var44.bind(var4)(var47, var46);
                var45[1] = var46;
                var41.children = var45;
                var39 = var44.bind(var4)(var43, var41);
            case 4126:
                var38[4] = var39;
                var30.children = var38;
                var34 = var37.bind(var4)(var34, var30);
                var37 = var31.includes;
                var38 = _closure1_slot0;
                var39 = _closure1_slot3;
                var30 = 40;
                var30 = var39[var30];
                var30 = var38.bind(var4)(var30);
                var30 = var30.OAuth2Scopes;
                var30 = var30.BOT;
                var37 = var37.bind(var31)(var30);
                if (!var37) {
                    _fun48224_ip = 4235;
                    continue _fun48224
                }
            case 4185:
                var41 = _closure1_slot2;
                var30 = _closure1_slot3;
                var38 = 21;
                var38 = var30[var38];
                var39 = var41.bind(var4)(var38);
                var38 = var39.equals;
                var30 = var30[var42];
                var30 = var41.bind(var4)(var30);
                var30 = var30.NONE;
                var30 = var38.bind(var39)(var40, var30);
                var37 = !var30;
            case 4235:
                var30 = undefined;
                if (!var37) {
                    _fun48224_ip = 4257;
                    continue _fun48224
                }
            case 4240:
                var37 = _closure1_slot14;
                var37 = var37.AUTHORIZE_BOT_PERMISSIONS;
                _closure2_slot63 = var37;
                var30 = var37;
            case 4257:
                if (!var16) {
                    _fun48224_ip = 4264;
                    continue _fun48224
                }
            case 4260:
                var16 = var23 == var36;
            case 4264:
                if (var16) {
                    _fun48224_ip = 4277;
                    continue _fun48224
                }
            case 4267:
                if (!var15) {
                    _fun48224_ip = 4274;
                    continue _fun48224
                }
            case 4270:
                var15 = var23 == var35;
            case 4274:
                var16 = var15;
            case 4277:
                if (var16) {
                    _fun48224_ip = 4283;
                    continue _fun48224
                }
            case 4280:
                var16 = !var9;
            case 4283:
                var3 = true;
                var22 = var16;
                var13 = var34;
                var17 = var30;
                var14 = true;
                var0 = true;
                _fun48224_ip = 4378;
                continue _fun48224;
            case 4300:
                var15 = {};
                var30 = _closure1_slot18;
                var16 = {};
                var16 = var30.bind(var4)(var7, var16);
                var15.body = var16;
                return var15;
            case 4320:
                if (!(var23 != var33)) {
                    _fun48224_ip = 5421;
                    continue _fun48224
                }
            case 4327:
                var30 = _closure1_slot18;
                var16 = _closure1_slot1;
                var34 = _closure1_slot3;
                var15 = 39;
                var15 = var34[var15];
                var16 = var16.bind(var4)(var15);
                var15 = {};
                var15.application = var33;
                var15.onSelect = var32;
                var13 = var30.bind(var4)(var16, var15);
                var17 = undefined;
                var3 = false;
                var22 = false;
                var14 = false;
                var0 = false;
            case 4378:
                var12 = undefined;
                if (!var14) {
                    _fun48224_ip = 4567;
                    continue _fun48224
                }
            case 4386:
                var14 = _closure1_slot14;
                var14 = var14.AUTHORIZE_BOT_PERMISSIONS;
                var12 = undefined;
                if (!(var17 !== var14)) {
                    _fun48224_ip = 4567;
                    continue _fun48224
                }
            case 4405:
                var14 = var23 != var18;
                var12 = undefined;
                if (!var14) {
                    _fun48224_ip = 4567;
                    continue _fun48224
                }
            case 4417:
                var14 = var23 == var18;
                var30 = undefined;
                if (var14) {
                    _fun48224_ip = 4437;
                    continue _fun48224
                }
            case 4426:
                var14 = var18.application;
                var30 = var14.approximate_guild_count;
            case 4437:
                if (!(var23 == var30)) {
                    _fun48224_ip = 4474;
                    continue _fun48224
                }
            case 4441:
                var15 = var23 == var18;
                var14 = undefined;
                if (var15) {
                    _fun48224_ip = 4471;
                    continue _fun48224
                }
            case 4450:
                var15 = var18.bot;
                var16 = var23 == var15;
                var14 = undefined;
                if (var16) {
                    _fun48224_ip = 4471;
                    continue _fun48224
                }
            case 4465:
                var14 = var15.approximate_guild_count;
            case 4471:
                var30 = var14;
            case 4474:
                var16 = _closure1_slot18;
                var15 = _closure1_slot1;
                var32 = _closure1_slot3;
                var14 = 52;
                var14 = var32[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var32 = var18.application;
                var14.application = var32;
                var14.scopes = var31;
                var14.disclosures = var29;
                var31 = var18.redirect_uri;
                var32 = var23 != var31;
                var29 = null;
                if (!var32) {
                    _fun48224_ip = 4537;
                    continue _fun48224
                }
            case 4534:
                var29 = var31;
            case 4537:
                var14.redirectUri = var29;
                var29 = null;
                if (!(var4 !== var30)) {
                    _fun48224_ip = 4551;
                    continue _fun48224
                }
            case 4548:
                var29 = var30;
            case 4551:
                var14.approximateGuildCount = var29;
                var14.isEmbeddedFlow = var27;
                var12 = var16.bind(var4)(var15, var14);
            case 4567:
                if (!var0) {
                    _fun48224_ip = 4574;
                    continue _fun48224
                }
            case 4570:
                var0 = var23 != var18;
            case 4574:
                if (!var0) {
                    _fun48224_ip = 4581;
                    continue _fun48224
                }
            case 4577:
                var0 = var23 != var26;
            case 4581:
                var14 = undefined;
                if (!var0) {
                    _fun48224_ip = 4647;
                    continue _fun48224
                }
            case 4586:
                var16 = _closure1_slot18;
                var15 = _closure1_slot1;
                var27 = _closure1_slot3;
                var0 = 53;
                var0 = var27[var0];
                var15 = var15.bind(var4)(var0);
                var0 = {};
                var0.user = var26;
                var26 = var18.application;
                var0.application = var26;
                var0.accountScopes = var25;
                var18 = var18.bot;
                var0.bot = var18;
                var14 = var16.bind(var4)(var15, var0);
            case 4647:
                var0 = {};
                var0.header = var14;
                var0.body = var13;
                var15 = _closure1_slot18;
                var14 = _closure1_slot19;
                var13 = {};
                var16 = _closure1_slot14;
                var18 = var16.SELECT_INSTALL_TYPE;
                var16 = null;
                if (!(var19 !== var18)) {
                    _fun48224_ip = 5367;
                    continue _fun48224
                }
            case 4686:
                var19 = _closure1_slot18;
                var25 = _closure1_slot0;
                var26 = _closure1_slot3;
                var18 = 36;
                var18 = var26[var18];
                var18 = var25.bind(var4)(var18);
                var18 = var18.Button;
                if (!(var23 == var17)) {
                    _fun48224_ip = 5043;
                    continue _fun48224
                }
            case 4723:
                var17 = {};
                var23 = 'lg';
                var17.size = var23;
                var25 = _closure1_slot0;
                var23 = _closure1_slot3;
                var29 = 37;
                var26 = var23[var29];
                var26 = var25.bind(var4)(var26);
                var30 = var26.intl;
                var27 = var30.string;
                var23 = var23[var29];
                var23 = var25.bind(var4)(var23);
                var26 = var23.t;
                if (var22) {
                    _fun48224_ip = 4793;
                    continue _fun48224
                }
            case 4780:
                var23 = var26["y+/PE9"];
                var23 = var27.bind(var30)(var23);
                _fun48224_ip = 4823;
                continue _fun48224;
            case 4793:
                if (var9) {
                    _fun48224_ip = 4809;
                    continue _fun48224
                }
            case 4796:
                var25 = var26.N22i9F;
                var25 = var27.bind(var30)(var25);
                _fun48224_ip = 4820;
                continue _fun48224;
            case 4809:
                var26 = var26.BwwiSM;
                var25 = var27.bind(var30)(var26);
            case 4820:
                var23 = var25;
            case 4823:
                var17.text = var23;
                var23 = function() {
                    var2 = _closure2_slot56;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var17.onPress = var23;
                var23 = undefined;
                if (var9) {
                    _fun48224_ip = 4932;
                    continue _fun48224
                }
            case 4841:
                var27 = _closure1_slot18;
                var31 = _closure1_slot1;
                var32 = _closure1_slot3;
                var25 = var32[var24];
                var25 = var31.bind(var4)(var25);
                var26 = var25.View;
                var25 = {};
                var25.style = var28;
                var30 = 54;
                var30 = var32[var30];
                var31 = var31.bind(var4)(var30);
                var30 = {};
                var32 = _closure1_slot9;
                var34 = var32.convert;
                var33 = var34.fromCodePoint;
                var32 = _closure1_slot13;
                var32 = var33.bind(var34)(var32);
                var30.name = var32;
                var30 = var27.bind(var4)(var31, var30);
                var25.children = var30;
                var23 = var27.bind(var4)(var26, var25);
            case 4932:
                var17.icon = var23;
                var23 = 'end';
                var17.iconPosition = var23;
                var17.disabled = var22;
                var17.loading = var20;
                var23 = {};
                var20 = 'enable';
                var23.name = var20;
                var27 = _closure1_slot0;
                var20 = _closure1_slot3;
                var25 = var20[var29];
                var25 = var27.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var20 = var20[var29];
                var20 = var27.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.eIL75W;
                var20 = var25.bind(var26)(var20);
                var23.label = var20;
                var20 = new Array(1);
                var20[0] = var23;
                var17.accessibilityActions = var20;
                var17.onAccessibilityAction = var21;
                _fun48224_ip = 5361;
                continue _fun48224;
            case 5043:
                var20 = {};
                var23 = 'lg';
                var20.size = var23;
                var25 = _closure1_slot0;
                var23 = _closure1_slot3;
                var27 = 37;
                var26 = var23[var27];
                var26 = var25.bind(var4)(var26);
                var30 = var26.intl;
                var29 = var30.string;
                var23 = var23[var27];
                var23 = var25.bind(var4)(var23);
                var26 = var23.t;
                if (var22) {
                    _fun48224_ip = 5113;
                    continue _fun48224
                }
            case 5100:
                var23 = var26["3PatSz"];
                var23 = var29.bind(var30)(var23);
                _fun48224_ip = 5143;
                continue _fun48224;
            case 5113:
                if (var9) {
                    _fun48224_ip = 5129;
                    continue _fun48224
                }
            case 5116:
                var25 = var26.N22i9F;
                var25 = var29.bind(var30)(var25);
                _fun48224_ip = 5140;
                continue _fun48224;
            case 5129:
                var26 = var26.BwwiSM;
                var25 = var29.bind(var30)(var26);
            case 5140:
                var23 = var25;
            case 5143:
                var20.text = var23;
                var23 = undefined;
                if (var9) {
                    _fun48224_ip = 5248;
                    continue _fun48224
                }
            case 5152:
                var23 = undefined;
                if (!var22) {
                    _fun48224_ip = 5248;
                    continue _fun48224
                }
            case 5157:
                var26 = _closure1_slot18;
                var29 = _closure1_slot1;
                var30 = _closure1_slot3;
                var24 = var30[var24];
                var24 = var29.bind(var4)(var24);
                var25 = var24.View;
                var24 = {};
                var24.style = var28;
                var28 = 54;
                var28 = var30[var28];
                var29 = var29.bind(var4)(var28);
                var28 = {};
                var30 = _closure1_slot9;
                var32 = var30.convert;
                var31 = var32.fromCodePoint;
                var30 = _closure1_slot13;
                var30 = var31.bind(var32)(var30);
                var28.name = var30;
                var28 = var26.bind(var4)(var29, var28);
                var24.children = var28;
                var23 = var26.bind(var4)(var25, var24);
            case 5248:
                var20.icon = var23;
                var23 = 'end';
                var20.iconPosition = var23;
                var23 = function() {
                    var2 = _closure2_slot21;
                    var1 = _closure2_slot63;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var20.onPress = var23;
                var20.disabled = var22;
                var23 = {};
                var22 = 'enable';
                var23.name = var22;
                var26 = _closure1_slot0;
                var22 = _closure1_slot3;
                var24 = var22[var27];
                var24 = var26.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var22 = var22[var27];
                var22 = var26.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.eIL75W;
                var22 = var24.bind(var25)(var22);
                var23.label = var22;
                var22 = new Array(1);
                var22[0] = var23;
                var20.accessibilityActions = var22;
                var20.onAccessibilityAction = var21;
                var17 = var20;
            case 5361:
                var16 = var19.bind(var4)(var18, var17);
            case 5367:
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var0.footer = var13;
                var0.appDetails = var12;
                var0.backStep = var11;
                var0.sendAuthorize = var10;
                var0.goBackOrCancel = var2;
                var0.allContentSeen = var9;
                var0.setAllContentSeen = var6;
                var0.hasContentBackground = var3;
                return var0;
            case 5421:
                var0 = {};
                var6 = _closure1_slot18;
                var3 = {};
                var3 = var6.bind(var4)(var7, var3);
                var0.body = var3;
                return var0;
            case 5441:
                var0 = {};
                var6 = _closure1_slot18;
                var3 = {};
                var3 = var6.bind(var4)(var7, var3);
                var0.body = var3;
                return var0;
            case 5461:
                var0 = {};
                var3 = _closure1_slot18;
                var7 = _closure1_slot1;
                var10 = _closure1_slot3;
                var6 = 35;
                var6 = var10[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var8 = var8.message;
                var6.error = var8;
                var8 = true;
                var6.hideFooter = var8;
                var6 = var3.bind(var4)(var7, var6);
                var0.body = var6;
                var0.goBackOrCancel = var2;
                var9 = _closure1_slot0;
                var1 = 36;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.Button;
                var1 = {};
                var6 = 'lg';
                var1.size = var6;
                var6 = 37;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.cpT0Cq;
                var6 = var7.bind(var8)(var6);
                var1.text = var6;
                var5 = function() {
                    var1 = _closure2_slot62;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var1.onPress = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0.footer = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 3107, 1298, 3456, 1621, 5394, 660, 33, 1297, 5395, 3098, 566, 4070, 3721, 4097, 5396, 3338, 3339, 484, 5398, 507, 491, 5399, 5401, 5402, 5403, 1207, 5404, 5405, 4302, 5406, 4079, 5407, 4084, 1234, 671, 5409, 3340, 1384, 5417, 5418, 5424, 5423, 5428, 5489, 4904, 3942, 5469, 5490, 5493, 5503, 5820, 2]);