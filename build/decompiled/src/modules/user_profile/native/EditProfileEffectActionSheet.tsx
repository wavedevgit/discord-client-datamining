// modules/user_profile/native/EditProfileEffectActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var10 = 1;
    var4 = var6[var10];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var1 = var1.ActivityIndicator;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.CollectiblesMobileShopScreen;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.MEDIA_PICKER_SEND_BUTTON_SPRING;
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot13 = var4;
    var4 = var1.jsxs;
    var _closure1_slot14 = var4;
    var1 = var1.Fragment;
    var _closure1_slot15 = var1;
    var1 = 10;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {};
    var8.flex = var10;
    var11 = 11;
    var9 = var6[var11];
    var9 = var12.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var1.container = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'paddingBottom': 88,
        'flex': 1
    };
    var1.contentContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967046,
        'height': 250,
        'right': 0,
        'left': 0
    };
    var1.bounceOffset = var8;
    var8 = {};
    var9 = var6[var11];
    var9 = var12.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var9;
    var9 = 25;
    var8.margin = var9;
    var1.title = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 16
    };
    var9 = 16;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var8.color = var13;
    var1.description = var8;
    var8 = {
        'width': '72%',
        'minHeight': 38
    };
    var1.descriptionContainer = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 2
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DEFAULT;
    var8.color = var13;
    var1.purchasedAt = var8;
    var8 = {
        'width': '92%',
        'marginTop': 10,
        'flex': 1
    };
    var1.profileEffectsList = var8;
    var8 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var8.flexGrow = var10;
    var1.ctaButtonStyle = var8;
    var8 = {};
    var8.fontSize = var9;
    var1.ctaTextStyle = var8;
    var8 = {
        'flexGrow': 0,
        'flexDirection': 'row',
        'justifyContent': 'flex-end',
        'paddingHorizontal': 12,
        'height': 48
    };
    var1.buttonRowContainer = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'marginLeft': 24,
        'marginRight': 24,
        'flexDirection': 'column',
        'justifyContent': 'flex-end'
    };
    var1.applyButtonContainer = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot16 = var1;
    var1 = {};
    var4 = 'function EditProfileEffectActionSheetTsx1(){const{shouldShowCtaButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowCtaButton.get()?0:60;const targetScale=shouldShowCtaButton.get()?1:0.9;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}';
    var1.code = var4;
    var _closure1_slot17 = var1;
    var1 = {};
    var4 = "function EditProfileEffectActionSheetTsx2(){const{shouldShowCtaButton}=this.__closure;return{pointerEvents:shouldShowCtaButton.get()?'box-none':'none'};}";
    var1.code = var4;
    var _closure1_slot18 = var1;
    var1 = {};
    var4 = 'function EditProfileEffectActionSheetTsx3(){const{shouldShowCtaButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowCtaButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}';
    var1.code = var4;
    var _closure1_slot19 = var1;
    var1 = function arg0() {
        _fun56870: for (var _fun56870_ip = 0;;) switch (_fun56870_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.user;
                var _closure2_slot0 = var14;
                var13 = var1.selectedProfileEffect;
                var _closure2_slot1 = var13;
                var0 = var1.setSelectedProfileEffect;
                var _closure2_slot2 = var0;
                var0 = var1.isFetching;
                var6 = var1.guildId;
                var _closure2_slot3 = var6;
                var7 = var1.showTitle;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun56870_ip = 63;
                    continue _fun56870
                }
            case 61:
                var7 = true;
            case 63:
                var1 = var1.isTryItOut;
                if (!(var1 === var4)) {
                    _fun56870_ip = 75;
                    continue _fun56870
                }
            case 73:
                var1 = false;
            case 75:
                var _closure2_slot4 = var1;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 36;
                var1 = var8[var1];
                var3 = var2.bind(var4)(var1);
                var1 = var3.useGetOrFetchCollectiblesCategoriesAndPurchases;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot1;
                var1 = 37;
                var1 = var8[var1];
                var1 = var3.bind(var4)(var1);
                var11 = var1.bind(var4)();
                var1 = _closure1_slot16;
                var10 = var1.bind(var4)();
                var3 = 12;
                var1 = var8[var3];
                var16 = var2.bind(var4)(var1);
                var15 = var16.useStateFromStores;
                var1 = _closure1_slot8;
                var12 = new Array(1);
                var12[0] = var1;
                var1 = function() { // Environment: var9
                    _fun56871: for (var _fun56871_ip = 0;;) switch (_fun56871_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getPurchase;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun56871_ip = 41;
                                continue _fun56871
                            }
                        case 31:
                            var3 = _closure2_slot1;
                            var0 = var3.skuId;
                        case 41:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var27 = var15.bind(var16)(var12, var1);
                var1 = 38;
                var1 = var8[var1];
                var8 = var2.bind(var4)(var1);
                var2 = var8.useProfileEffectPreset;
                var21 = null;
                var12 = var21 == var13;
                var1 = undefined;
                if (var12) {
                    _fun56870_ip = 215;
                    continue _fun56870
                }
            case 209:
                var1 = var13.skuId;
            case 215:
                var1 = var2.bind(var8)(var1);
                var2 = var21 == var1;
                var16 = undefined;
                if (var2) {
                    _fun56870_ip = 234;
                    continue _fun56870
                }
            case 229:
                var16 = var1.config;
            case 234:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var8 = var2.bind(var4)(var1);
                var3 = var8.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    var0 = _closure1_slot9;
                    var0 = var0.locale;
                    return var0;
                };
                var30 = var3.bind(var8)(var2, var1);
                var2 = var21 == var27;
                var1 = undefined;
                if (var2) {
                    _fun56870_ip = 294;
                    continue _fun56870
                }
            case 288:
                var1 = var27.expiresAt;
            case 294:
                var1 = var21 != var1;
                var29 = null;
                if (!var1) {
                    _fun56870_ip = 369;
                    continue _fun56870
                }
            case 303:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 39;
                var1 = var3[var1];
                var8 = var2.bind(var4)(var1);
                var3 = var8.diffAsUnits;
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var37 = var2;
                var1 = new var37[var1](var36);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var27.expiresAt;
                var29 = var3.bind(var8)(var2, var1);
            case 369:
                var8 = _closure1_slot4;
                var3 = var8.useEffect;
                var2 = new Array(1);
                var2[0] = var14;
                var1 = function() { // Environment: var9
                    _fun56873: for (var _fun56873_ip = 0;;) switch (_fun56873_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var6 = null;
                            var1 = var6 == var1;
                            if (var1) {
                                _fun56873_ip = 30;
                                continue _fun56873
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.isNonUserBot;
                            var1 = var2.bind(var3)();
                        case 30:
                            if (var1) {
                                _fun56873_ip = 103;
                                continue _fun56873
                            }
                        case 33:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 40;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var5 = _closure2_slot0;
                            var2 = var5.id;
                            var1 = var5.getAvatarURL;
                            var0 = 80;
                            var1 = var1.bind(var5)(var6, var0);
                            var0 = {
                                'withMutualGuilds': true,
                                'dispatchWait': true
                            };
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var8)(var1, var2);
                if (var0) {
                    _fun56870_ip = 1291;
                    continue _fun56870
                }
            case 403:
                var2 = _closure1_slot14;
                var1 = _closure1_slot5;
                var0 = {};
                var3 = var10.contentContainer;
                var0.style = var3;
                if (!var7) {
                    _fun56870_ip = 539;
                    continue _fun56870
                }
            case 426:
                var12 = _closure1_slot13;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var3 = 41;
                var3 = var20[var3];
                var3 = var19.bind(var4)(var3);
                var8 = var3.Text;
                var3 = {
                    'variant': 'redesign/heading-18/bold',
                    'style': null,
                    'accessibilityRole': 'header'
                };
                var15 = var10.title;
                var3.style = var15;
                var15 = 24;
                var17 = var20[var15];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var20[var15];
                var15 = var19.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15["/6nv6N"];
                var15 = var17.bind(var18)(var15);
                var3.children = var15;
                var7 = var12.bind(var4)(var8, var3);
            case 539:
                var3 = new Array(4);
                var3[0] = var7;
                var12 = _closure1_slot13;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var7 = 42;
                var7 = var15[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.user = var14;
                var7.guildId = var6;
                var7.pendingProfileEffectRecord = var13;
                var14 = var21 == var13;
                var6 = undefined;
                if (var14) {
                    _fun56870_ip = 601;
                    continue _fun56870
                }
            case 595:
                var6 = var13.skuId;
            case 601:
                var6 = var12.bind(var4)(var8, var7, var6);
                var3[1] = var6;
                var7 = var21 != var16;
                var6 = undefined;
                if (!var7) {
                    _fun56870_ip = 1226;
                    continue _fun56870
                }
            case 624:
                var12 = _closure1_slot14;
                var8 = _closure1_slot5;
                var7 = {};
                var13 = var10.descriptionContainer;
                var7.style = var13;
                var15 = _closure1_slot13;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var20 = 41;
                var13 = var13[var20];
                var13 = var14.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'heading-md/bold',
                    'color': 'text-default'
                };
                var17 = var10.description;
                var13.style = var17;
                var16 = var16.title;
                var13.children = var16;
                var14 = var15.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = var21 != var27;
                if (!var14) {
                    _fun56870_ip = 1212;
                    continue _fun56870
                }
            case 729:
                var17 = _closure1_slot14;
                var16 = _closure1_slot15;
                var15 = {};
                var19 = var21 != var29;
                if (!var19) {
                    _fun56870_ip = 879;
                    continue _fun56870
                }
            case 749:
                var23 = _closure1_slot13;
                var25 = _closure1_slot0;
                var31 = _closure1_slot2;
                var18 = var31[var20];
                var18 = var25.bind(var4)(var18);
                var22 = var18.Text;
                var18 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = var10.purchasedAt;
                var18.style = var24;
                var24 = 24;
                var26 = var31[var24];
                var26 = var25.bind(var4)(var26);
                var28 = var26.intl;
                var26 = var28.format;
                var24 = var31[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.t;
                var25 = var24.Io7ozn;
                var24 = {};
                var31 = var29.days;
                var29 = var31.toString;
                var29 = var29.bind(var31)();
                var24.days = var29;
                var24 = var26.bind(var28)(var25, var24);
                var18.children = var24;
                var19 = var23.bind(var4)(var22, var18);
            case 879:
                var18 = new Array(3);
                var18[0] = var19;
                var23 = _closure1_slot13;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = var24[var20];
                var19 = var25.bind(var4)(var19);
                var22 = var19.Text;
                var19 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var26 = var10.purchasedAt;
                var19.style = var26;
                var28 = 24;
                var26 = var24[var28];
                var26 = var25.bind(var4)(var26);
                var29 = var26.intl;
                var26 = var29.format;
                var24 = var24[var28];
                var24 = var25.bind(var4)(var24);
                var24 = var24.t;
                var25 = var24.gW9R4B;
                var24 = {};
                var33 = var27.purchasedAt;
                var32 = var33.toLocaleDateString;
                var31 = {
                    'month': 'long',
                    'year': 'numeric'
                };
                var31 = var32.bind(var33)(var30, var31);
                var24.date = var31;
                var24 = var26.bind(var29)(var25, var24);
                var19.children = var24;
                var19 = var23.bind(var4)(var22, var19);
                var18[1] = var19;
                var19 = var27.expiresAt;
                var19 = var21 != var19;
                if (!var19) {
                    _fun56870_ip = 1198;
                    continue _fun56870
                }
            case 1054:
                var22 = _closure1_slot13;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var20 = var23[var20];
                var20 = var24.bind(var4)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = var10.purchasedAt;
                var20.style = var25;
                var25 = var23[var28];
                var25 = var24.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.format;
                var23 = var23[var28];
                var23 = var24.bind(var4)(var23);
                var23 = var23.t;
                var24 = var23.eZSTa5;
                var23 = {};
                var29 = var27.expiresAt;
                var28 = var29.toLocaleDateString;
                var27 = {
                    'minute': 'numeric',
                    'hour': 'numeric',
                    'day': 'numeric',
                    'month': 'long',
                    'year': 'numeric'
                };
                var27 = var28.bind(var29)(var30, var27);
                var23.date = var27;
                var23 = var25.bind(var26)(var24, var23);
                var20.children = var23;
                var19 = var22.bind(var4)(var21, var20);
            case 1198:
                var18[2] = var19;
                var15.children = var18;
                var14 = var17.bind(var4)(var16, var15);
            case 1212:
                var13[1] = var14;
                var7.children = var13;
                var6 = var12.bind(var4)(var8, var7);
            case 1226:
                var3[2] = var6;
                var8 = _closure1_slot13;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var10.profileEffectsList;
                var6.style = var10;
                var10 = var11.map;
                var9 = function(arg0, arg1) { // Environment: var9
                    _fun56874: for (var _fun56874_ip = 0;;) switch (_fun56874_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = var6.items;
                            var1 = var0.length;
                            var0 = 0;
                            var0 = var1 > var0;
                            if (!var0) {
                                _fun56874_ip = 105;
                                continue _fun56874
                            }
                        case 22:
                            var5 = _closure1_slot13;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 43;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = {};
                            var7 = _closure2_slot1;
                            var2.selectedProfileEffect = var7;
                            var7 = _closure2_slot2;
                            var2.setSelectedProfileEffect = var7;
                            var2.section = var6;
                            var6 = _closure2_slot3;
                            var2.guildId = var6;
                            var1 = _closure2_slot4;
                            var2.isTryItOut = var1;
                            var1 = arg1;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 105:
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var3[3] = var6;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun56870_ip = 1348;
                continue _fun56870;
            case 1291:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = {};
                var7 = 250;
                var6.top = var7;
                var1.style = var6;
                var6 = _closure1_slot6;
                var5 = {
                    'animating': true,
                    'size': 'large'
                };
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1348:
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditProfileEffectActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun56875: for (var _fun56875_ip = 0;;) switch (_fun56875_ip) {
            case 0:
                var0 = arg0;
                var30 = var0.user;
                var _closure2_slot0 = var30;
                var5 = var0.currentProfileEffect;
                var _closure2_slot1 = var5;
                var26 = var0.guildId;
                var _closure2_slot2 = var26;
                var25 = var0.isTryItOut;
                var _closure2_slot3 = var25;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot16;
                var18 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 12;
                var2 = var9[var0];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStoresArray;
                var2 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot8;
                    var1 = var0.isFetching;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var2);
                var2 = _closure1_slot3;
                var6 = 1;
                var2 = var2.bind(var3)(var4, var6);
                var7 = 0;
                var27 = var2[var7];
                var4 = _closure1_slot1;
                var2 = 13;
                var2 = var9[var2];
                var4 = var4.bind(var3)(var2);
                var9 = var30.id;
                var13 = null;
                var10 = var13 != var9;
                var2 = '';
                if (!var10) {
                    _fun56875_ip = 197;
                    continue _fun56875
                }
            case 194:
                var2 = var9;
            case 197:
                var2 = var4.bind(var3)(var2);
                _closure2_slot4 = var2;
                var10 = _closure1_slot4;
                var9 = var10.useState;
                var4 = var5;
                if (!(var13 != var26)) {
                    _fun56875_ip = 279;
                    continue _fun56875
                }
            case 222:
                var11 = var13 == var5;
                var14 = undefined;
                if (var11) {
                    _fun56875_ip = 237;
                    continue _fun56875
                }
            case 231:
                var14 = var5.skuId;
            case 237:
                var11 = var13 == var2;
                var12 = undefined;
                if (var11) {
                    _fun56875_ip = 267;
                    continue _fun56875
                }
            case 246:
                var11 = var2.profileEffect;
                var15 = var13 == var11;
                var12 = undefined;
                if (var15) {
                    _fun56875_ip = 267;
                    continue _fun56875
                }
            case 261:
                var12 = var11.skuId;
            case 267:
                var11 = null;
                if (!(var14 !== var12)) {
                    _fun56875_ip = 276;
                    continue _fun56875
                }
            case 273:
                var11 = var5;
            case 276:
                var4 = var11;
            case 279:
                var10 = var9.bind(var10)(var4);
                var9 = _closure1_slot3;
                var4 = 2;
                var4 = var9.bind(var3)(var10, var4);
                var29 = var4[var7];
                _closure2_slot5 = var29;
                var28 = var4[var6];
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 14;
                var4 = var7[var4];
                var6 = var6.bind(var3)(var4);
                var7 = var13 == var29;
                var4 = undefined;
                if (var7) {
                    _fun56875_ip = 344;
                    continue _fun56875
                }
            case 338:
                var4 = var29.skuId;
            case 344:
                var4 = var6.bind(var3)(var4);
                var9 = var4.product;
                var6 = var4.purchase;
                var4 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 15;
                var7 = var15[var12];
                var10 = var4.bind(var3)(var7);
                var7 = var10.useSharedValue;
                var17 = false;
                var33 = var7.bind(var10)(var17);
                _closure2_slot6 = var33;
                var14 = _closure1_slot4;
                var10 = var14.useEffect;
                var7 = new Array(3);
                var7[0] = var29;
                var7[1] = var5;
                var7[2] = var33;
                var5 = function() { // Environment: var1
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var3 = _closure2_slot5;
                    var0 = _closure2_slot1;
                    var0 = var3 !== var0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var5 = var10.bind(var14)(var5, var7);
                var5 = var14.useRef;
                var10 = var5.bind(var14)(var13);
                var5 = 16;
                var5 = var15[var5];
                var7 = var4.bind(var3)(var5);
                var5 = var7.useBottomSheetRef;
                var5 = var5.bind(var7)();
                var20 = var5.bottomSheetRef;
                var11 = var5.bottomSheetClose;
                var0 = var15[var0];
                var7 = var4.bind(var3)(var0);
                var5 = var7.useStateFromStores;
                var0 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var32 = var5.bind(var7)(var4, var0);
                _closure2_slot7 = var32;
                var7 = _closure1_slot1;
                var0 = 17;
                var0 = var15[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var23 = var0.bottom;
                var0 = 18;
                var4 = var15[var0];
                var5 = var7.bind(var3)(var4);
                var4 = 19;
                var4 = var15[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.EDIT_PROFILE_EFFECT_SHEET;
                var4 = var5.bind(var3)(var4);
                var4 = var4.analyticsLocations;
                _closure2_slot8 = var4;
                var7 = var14.useMemo;
                var5 = new Array(3);
                var5[0] = var26;
                var5[1] = var2;
                var15 = var13 == var30;
                var2 = undefined;
                if (var15) {
                    _fun56875_ip = 621;
                    continue _fun56875
                }
            case 615:
                var2 = var30.avatarDecoration;
            case 621:
                var5[2] = var2;
                var2 = function() { // Environment: var1
                    _fun56879: for (var _fun56879_ip = 0;;) switch (_fun56879_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.EDIT_PROFILE_EFFECT_SHEET;
                            var0.type = var2;
                            var2 = _closure2_slot2;
                            var0.guild_id = var2;
                            var4 = _closure2_slot4;
                            var2 = null;
                            var4 = var2 != var4;
                            if (!var4) {
                                _fun56879_ip = 91;
                                continue _fun56879
                            }
                        case 61:
                            var5 = _closure2_slot4;
                            var6 = var2 == var5;
                            var5 = undefined;
                            if (var6) {
                                _fun56879_ip = 88;
                                continue _fun56879
                            }
                        case 74:
                            var7 = _closure2_slot4;
                            var6 = var7.hasPremiumCustomization;
                            var5 = var6.bind(var7)();
                        case 88:
                            var4 = var5;
                        case 91:
                            var0.profile_has_nitro_customization = var4;
                            var4 = global;
                            var5 = var4.Boolean;
                            var4 = _closure2_slot0;
                            var6 = var2 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun56879_ip = 127;
                                continue _fun56879
                            }
                        case 117:
                            var6 = _closure2_slot0;
                            var4 = var6.avatarDecoration;
                        case 127:
                            var4 = var5.bind(var1)(var4);
                            var0.has_avatar_decoration = var4;
                            var4 = _closure2_slot4;
                            var4 = var2 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun56879_ip = 160;
                                continue _fun56879
                            }
                        case 150:
                            var3 = _closure2_slot4;
                            var1 = var3.profileEffect;
                        case 160:
                            var1 = var2 != var1;
                            var0.has_profile_effect = var1;
                            return var0;
                    }
                };
                var2 = var7.bind(var14)(var2, var5);
                _closure2_slot9 = var2;
                var14 = _closure1_slot4;
                var7 = var14.useCallback;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.OPEN_POPOUT;
                    var1 = {};
                    var7 = _closure2_slot9;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var6 = true;
                    var5 = 'is_fullscreen';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var7 = var7.bind(var14)(var2, var5);
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = var16[var12];
                var15 = var14.bind(var3)(var2);
                var5 = var15.useAnimatedStyle;
                var2 = function() {
                    _fun56881: for (var _fun56881_ip = 0;;) switch (_fun56881_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var8 = 60;
                            if (!var0) {
                                _fun56881_ip = 24;
                                continue _fun56881
                            }
                        case 22:
                            var8 = 0;
                        case 24:
                            var1 = _closure2_slot6;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var7 = 0.9;
                            if (!var0) {
                                _fun56881_ip = 53;
                                continue _fun56881
                            }
                        case 50:
                            var7 = 1;
                        case 53:
                            var0 = {};
                            var2 = {};
                            var4 = _closure2_slot7;
                            var1 = var8;
                            if (var4) {
                                _fun56881_ip = 107;
                                continue _fun56881
                            }
                        case 67:
                            var9 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 21;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var9.bind(var5)(var6);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot12;
                            var1 = var5.bind(var6)(var8, var4);
                        case 107:
                            var2.translateY = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var4 = _closure2_slot7;
                            var3 = var7;
                            if (var4) {
                                _fun56881_ip = 172;
                                continue _fun56881
                            }
                        case 132:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 21;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var8.bind(var5)(var6);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot12;
                            var3 = var5.bind(var6)(var7, var4);
                        case 172:
                            var2.scale = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var19 = {};
                var19.shouldShowCtaButton = var33;
                var19.reducedMotion = var32;
                var31 = 21;
                var21 = var16[var31];
                var21 = var14.bind(var3)(var21);
                var21 = var21.withSpring;
                var19.withSpring = var21;
                var24 = _closure1_slot12;
                var19.MEDIA_PICKER_SEND_BUTTON_SPRING = var24;
                var2.__closure = var19;
                var19 = 11257934204092.0;
                var2.__workletHash = var19;
                var19 = _closure1_slot17;
                var2.__initData = var19;
                var22 = var5.bind(var15)(var2);
                var2 = var16[var12];
                var15 = var14.bind(var3)(var2);
                var5 = var15.useAnimatedProps;
                var2 = function() {
                    _fun56882: for (var _fun56882_ip = 0;;) switch (_fun56882_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot6;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 'none';
                            if (!var2) {
                                _fun56882_ip = 31;
                                continue _fun56882
                            }
                        case 25:
                            var1 = 'box-none';
                        case 31:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var19 = {};
                var19.shouldShowCtaButton = var33;
                var2.__closure = var19;
                var19 = 6337989186191.0;
                var2.__workletHash = var19;
                var19 = _closure1_slot18;
                var2.__initData = var19;
                var15 = var5.bind(var15)(var2);
                var2 = var16[var12];
                var19 = var14.bind(var3)(var2);
                var5 = var19.useAnimatedStyle;
                var2 = function() {
                    _fun56883: for (var _fun56883_ip = 0;;) switch (_fun56883_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var5 = 0;
                            if (!var0) {
                                _fun56883_ip = 24;
                                continue _fun56883
                            }
                        case 21:
                            var5 = 1;
                        case 24:
                            var0 = {};
                            var2 = _closure2_slot7;
                            var1 = var5;
                            if (var2) {
                                _fun56883_ip = 96;
                                continue _fun56883
                            }
                        case 36:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var2 = {};
                            var8 = _closure1_slot12;
                            var9 = var2;
                            var6 = copyDataProperties(var9, var8);
                            var7 = true;
                            var6 = 'overshootClamping';
                            var2[var6] = var7;
                            var1 = var3.bind(var4)(var5, var2);
                        case 96:
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var21 = {};
                var21.shouldShowCtaButton = var33;
                var21.reducedMotion = var32;
                var31 = var16[var31];
                var31 = var14.bind(var3)(var31);
                var31 = var31.withSpring;
                var21.withSpring = var31;
                var21.MEDIA_PICKER_SEND_BUTTON_SPRING = var24;
                var2.__closure = var21;
                var21 = 1121286290015.0;
                var2.__workletHash = var21;
                var21 = _closure1_slot19;
                var2.__initData = var21;
                var24 = var5.bind(var19)(var2);
                var5 = _closure1_slot1;
                var2 = 22;
                var2 = var16[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.canUseCollectibles;
                var5 = var2.bind(var5)(var30);
                var2 = 23;
                var2 = var16[var2];
                var14 = var14.bind(var3)(var2);
                var2 = var14.isPremiumCollectiblesProduct;
                var2 = var2.bind(var14)(var9);
                var9 = var13 == var9;
                _closure2_slot10 = var9;
                var21 = var13 != var6;
                if (var21) {
                    _fun56875_ip = 1008;
                    continue _fun56875
                }
            case 996:
                var6 = var2;
                if (!var6) {
                    _fun56875_ip = 1005;
                    continue _fun56875
                }
            case 1002:
                var6 = var25;
            case 1005:
                var21 = var6;
            case 1008:
                _closure2_slot11 = var21;
                var14 = var5;
                if (var14) {
                    _fun56875_ip = 1021;
                    continue _fun56875
                }
            case 1018:
                var14 = !var2;
            case 1021:
                _closure2_slot12 = var14;
                var6 = _closure1_slot4;
                var13 = var6.useMemo;
                var5 = new Array(4);
                var5[0] = var21;
                var5[1] = var14;
                var5[2] = var9;
                var5[3] = var30;
                var2 = function() { // Environment: var1
                    _fun56884: for (var _fun56884_ip = 0;;) switch (_fun56884_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun56884_ip = 202;
                                continue _fun56884
                            }
                        case 13:
                            var1 = _closure2_slot11;
                            if (var1) {
                                _fun56884_ip = 202;
                                continue _fun56884
                            }
                        case 23:
                            var2 = _closure2_slot12;
                            if (var2) {
                                _fun56884_ip = 143;
                                continue _fun56884
                            }
                        case 33:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 22;
                            var2 = var4[var2];
                            var6 = undefined;
                            var3 = var3.bind(var6)(var2);
                            var2 = var3.isPremium;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 24;
                            var3 = var7[var2];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.t;
                            if (var0) {
                                _fun56884_ip = 130;
                                continue _fun56884
                            }
                        case 117:
                            var0 = var2.mr4K7D;
                            var0 = var3.bind(var4)(var0);
                            _fun56884_ip = 141;
                            continue _fun56884;
                        case 130:
                            var2 = var2.KXLX7l;
                            var0 = var3.bind(var4)(var2);
                        case 141:
                            _fun56884_ip = 200;
                            continue _fun56884;
                        case 143:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 24;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.fYfGgK;
                            var0 = var2.bind(var3)(var1);
                        case 200:
                            _fun56884_ip = 262;
                            continue _fun56884;
                        case 202:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 24;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.Jh8fJz;
                            var0 = var2.bind(var3)(var1);
                        case 262:
                            return var0;
                    }
                };
                var19 = var13.bind(var6)(var2, var5);
                var5 = var6.useCallback;
                var2 = new Array(7);
                var2[0] = var9;
                var2[1] = var25;
                var2[2] = var21;
                var2[3] = var14;
                var2[4] = var29;
                var2[5] = var26;
                var2[6] = var4;
                var1 = function() { // Environment: var1
                    _fun56885: for (var _fun56885_ip = 0;;) switch (_fun56885_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            if (var0) {
                                _fun56885_ip = 181;
                                continue _fun56885
                            }
                        case 13:
                            var0 = _closure2_slot11;
                            if (var0) {
                                _fun56885_ip = 181;
                                continue _fun56885
                            }
                        case 23:
                            var0 = _closure2_slot12;
                            var1 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            if (var0) {
                                _fun56885_ip = 70;
                                continue _fun56885
                            }
                        case 41:
                            var0 = 29;
                            var2 = var8[var0];
                            var0 = undefined;
                            var2 = var1.bind(var0)(var2);
                            var0 = var2.navigateToNitroManagement;
                            var0 = var0.bind(var2)();
                            _fun56885_ip = 340;
                            continue _fun56885;
                        case 70:
                            var0 = 28;
                            var0 = var8[var0];
                            var5 = undefined;
                            var2 = var1.bind(var5)(var0);
                            var1 = var2.openCollectiblesShopMobile;
                            var0 = {};
                            var6 = _closure2_slot8;
                            var0.analyticsLocations = var6;
                            var7 = _closure1_slot1;
                            var6 = 19;
                            var6 = var8[var6];
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.EDIT_PROFILE_EFFECT_SHEET;
                            var0.analyticsSource = var6;
                            var7 = _closure2_slot5;
                            var6 = null;
                            var6 = var6 == var7;
                            if (var6) {
                                _fun56885_ip = 151;
                                continue _fun56885
                            }
                        case 141:
                            var6 = _closure2_slot5;
                            var5 = var6.skuId;
                        case 151:
                            var0.initialProductSkuId = var5;
                            var4 = _closure1_slot11;
                            var4 = var4.SHOP_ALL;
                            var0.screen = var4;
                            var0 = var1.bind(var2)(var0);
                            _fun56885_ip = 340;
                            continue _fun56885;
                        case 181:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 25;
                            var1 = var7[var0];
                            var2 = undefined;
                            var5 = var6.bind(var2)(var1);
                            var1 = var5.triggerHapticFeedback;
                            var0 = var7[var0];
                            var0 = var6.bind(var2)(var0);
                            var0 = var0.HapticFeedbackTypes;
                            var0 = var0.IMPACT_MEDIUM;
                            var0 = var1.bind(var5)(var0);
                            var0 = _closure2_slot3;
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            if (var0) {
                                _fun56885_ip = 300;
                                continue _fun56885
                            }
                        case 253:
                            var0 = 27;
                            var0 = var4[var0];
                            var7 = var1.bind(var2)(var0);
                            var6 = var7.setNewPendingProfileEffect;
                            var0 = _closure2_slot5;
                            var5 = null;
                            var0 = var5 != var0;
                            if (!var0) {
                                _fun56885_ip = 288;
                                continue _fun56885
                            }
                        case 284:
                            var5 = _closure2_slot5;
                        case 288:
                            var0 = _closure2_slot2;
                            var0 = var6.bind(var7)(var5, var0);
                            _fun56885_ip = 340;
                            continue _fun56885;
                        case 300:
                            var0 = 26;
                            var0 = var4[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.setTryItOutProfileEffect;
                            var4 = _closure2_slot5;
                            var0 = null;
                            var4 = var0 != var4;
                            if (!var4) {
                                _fun56885_ip = 335;
                                continue _fun56885
                            }
                        case 331:
                            var0 = _closure2_slot5;
                        case 335:
                            var0 = var1.bind(var2)(var0);
                        case 340:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 30;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var13 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot13;
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = var16[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot14;
                var4 = 31;
                var4 = var16[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {
                    'handleDisabled': true,
                    'scrollable': true,
                    'ref': null,
                    'onExpand': null,
                    'startExpanded': true
                };
                var4.ref = var20;
                var4.onExpand = var7;
                var7 = 32;
                var7 = var16[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.BottomSheetScrollView;
                var7 = {};
                var7.scrollsToTop = var17;
                var20 = var18.container;
                var17 = new Array(1);
                var17[0] = var20;
                var7.style = var17;
                var7.ref = var10;
                var17 = _closure1_slot5;
                var10 = {};
                var20 = var18.bounceOffset;
                var10.style = var20;
                var17 = var2.bind(var3)(var17, var10);
                var10 = new Array(2);
                var10[0] = var17;
                var20 = _closure1_slot20;
                var17 = {};
                var17.user = var30;
                var17.selectedProfileEffect = var29;
                var17.setSelectedProfileEffect = var28;
                var17.isFetching = var27;
                var17.guildId = var26;
                var17.isTryItOut = var25;
                var17 = var2.bind(var3)(var20, var17);
                var10[1] = var17;
                var7.children = var10;
                var9 = var6.bind(var3)(var9, var7);
                var7 = new Array(3);
                var7[0] = var9;
                var17 = _closure1_slot1;
                var9 = var16[var12];
                var9 = var17.bind(var3)(var9);
                var10 = var9.View;
                var9 = {};
                var25 = var18.applyButtonContainer;
                var20 = new Array(2);
                var20[0] = var25;
                var20[1] = var24;
                var9.style = var20;
                var9.animatedProps = var15;
                var12 = var16[var12];
                var12 = var17.bind(var3)(var12);
                var15 = var12.View;
                var12 = {};
                var24 = var18.buttonRowContainer;
                var20 = new Array(3);
                var20[0] = var24;
                var20[1] = var22;
                var22 = {};
                var22.marginBottom = var23;
                var20[2] = var22;
                var12.style = var20;
                var20 = 'box-none';
                var12.pointerEvents = var20;
                var20 = 33;
                var16 = var16[var20];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                if (var21) {
                    _fun56875_ip = 1489;
                    continue _fun56875
                }
            case 1455:
                if (var14) {
                    _fun56875_ip = 1489;
                    continue _fun56875
                }
            case 1458:
                var21 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var20];
                var14 = var21.bind(var3)(var14);
                var14 = var14.ButtonColors;
                var14 = var14.GREEN;
                _fun56875_ip = 1518;
                continue _fun56875;
            case 1489:
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var21 = var21[var20];
                var21 = var22.bind(var3)(var21);
                var21 = var21.ButtonColors;
                var14 = var21.BRAND;
            case 1518:
                var16.color = var14;
                var16.onPress = var13;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var20 = var14[var20];
                var20 = var13.bind(var3)(var20);
                var20 = var20.ButtonSizes;
                var20 = var20.MEDIUM;
                var16.size = var20;
                var20 = var18.ctaButtonStyle;
                var16.style = var20;
                var16.text = var19;
                var18 = var18.ctaTextStyle;
                var16.textStyle = var18;
                var16 = var2.bind(var3)(var17, var16);
                var12.children = var16;
                var12 = var2.bind(var3)(var15, var12);
                var9.children = var12;
                var9 = var2.bind(var3)(var10, var9);
                var7[1] = var9;
                var10 = _closure1_slot13;
                var8 = 34;
                var8 = var14[var8];
                var8 = var13.bind(var3)(var8);
                var9 = var8.ActionSheetHeaderBar;
                var8 = {};
                var12 = 35;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.ActionSheetHeaderBarVariants;
                var12 = var12.FLOATING;
                var8.variant = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.EditProfileEffectInner = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 4582, 1676, 660, 3244, 1566, 33, 1297, 671, 566, 6915, 5542, 3681, 5689, 1568, 5690, 5543, 795, 4042, 3070, 4565, 1234, 3240, 5550, 5549, 4563, 5544, 3239, 4896, 4898, 4838, 5167, 5167, 5691, 6920, 6873, 3093, 6916, 3902, 6921, 11985, 2]);