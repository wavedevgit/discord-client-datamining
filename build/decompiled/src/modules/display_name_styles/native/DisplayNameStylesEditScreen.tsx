// modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var10 = var1.onPress;
        var _closure2_slot0 = var10;
        var15 = var1.visible;
        var _closure2_slot1 = var15;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 14;
        var1 = var14[var1];
        var3 = undefined;
        var5 = var13.bind(var3)(var1);
        var4 = var5.useStateFromStores;
        var1 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot8;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var12 = var4.bind(var5)(var2, var1);
        var _closure2_slot2 = var12;
        var5 = _closure1_slot1;
        var1 = 46;
        var1 = var14[var1];
        var1 = var5.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var11 = var1.bottom;
        var4 = 47;
        var1 = var14[var4];
        var6 = var13.bind(var3)(var1);
        var2 = var6.useAnimatedProps;
        var1 = function() {
            _fun84636: for (var _fun84636_ip = 0;;) switch (_fun84636_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot1;
                    var1 = 'none';
                    if (!var2) {
                        _fun84636_ip = 22;
                        continue _fun84636
                    }
                case 16:
                    var1 = 'box-none';
                case 22:
                    var0.pointerEvents = var1;
                    return var0;
            }
        };
        var8 = {};
        var8.visible = var15;
        var1.__closure = var8;
        var8 = 2349569076845.0;
        var1.__workletHash = var8;
        var8 = _closure1_slot21;
        var1.__initData = var8;
        var8 = var2.bind(var6)(var1);
        var1 = var14[var4];
        var6 = var13.bind(var3)(var1);
        var2 = var6.useAnimatedStyle;
        var1 = function() {
            _fun84637: for (var _fun84637_ip = 0;;) switch (_fun84637_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var5 = 0;
                    if (!var2) {
                        _fun84637_ip = 15;
                        continue _fun84637
                    }
                case 12:
                    var5 = 1;
                case 15:
                    var2 = _closure2_slot1;
                    var10 = 60;
                    if (!var2) {
                        _fun84637_ip = 27;
                        continue _fun84637
                    }
                case 25:
                    var10 = 0;
                case 27:
                    var0 = _closure2_slot1;
                    var11 = 0.9;
                    if (!var0) {
                        _fun84637_ip = 47;
                        continue _fun84637
                    }
                case 44:
                    var11 = 1;
                case 47:
                    var0 = {
                        'position': 'absolute',
                        'bottom': 0,
                        'left': 0,
                        'right': 0,
                        'marginHorizontal': null,
                        'flexDirection': 'column',
                        'justifyContent': 'flex-end'
                    };
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = undefined;
                    var3 = var4.bind(var6)(var3);
                    var3 = var3.spacing;
                    var3 = var3.PX_16;
                    var0.marginHorizontal = var3;
                    var4 = {};
                    var7 = _closure2_slot2;
                    var3 = var10;
                    if (var7) {
                        _fun84637_ip = 149;
                        continue _fun84637
                    }
                case 114:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 48;
                    var7 = var9[var7];
                    var9 = var8.bind(var6)(var7);
                    var8 = var9.withSpring;
                    var7 = _closure1_slot11;
                    var3 = var8.bind(var9)(var10, var7);
                case 149:
                    var4.translateY = var3;
                    var3 = new Array(2);
                    var3[0] = var4;
                    var4 = {};
                    var8 = _closure2_slot2;
                    var7 = var11;
                    if (var8) {
                        _fun84637_ip = 209;
                        continue _fun84637
                    }
                case 174:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 48;
                    var8 = var10[var8];
                    var10 = var9.bind(var6)(var8);
                    var9 = var10.withSpring;
                    var8 = _closure1_slot11;
                    var7 = var9.bind(var10)(var11, var8);
                case 209:
                    var4.scale = var7;
                    var3[1] = var4;
                    var0.transform = var3;
                    var3 = _closure2_slot2;
                    var1 = var5;
                    if (var3) {
                        _fun84637_ip = 267;
                        continue _fun84637
                    }
                case 232:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 48;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.withSpring;
                    var2 = _closure1_slot11;
                    var1 = var3.bind(var4)(var5, var2);
                case 267:
                    var0.opacity = var1;
                    return var0;
            }
        };
        var9 = {};
        var9.visible = var15;
        var15 = 9;
        var15 = var14[var15];
        var15 = var5.bind(var3)(var15);
        var9.tokens = var15;
        var9.reducedMotion = var12;
        var12 = 48;
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.withSpring;
        var9.withSpring = var12;
        var12 = _closure1_slot11;
        var9.MEDIA_PICKER_SEND_BUTTON_SPRING = var12;
        var1.__closure = var9;
        var9 = 10858711048130.0;
        var1.__workletHash = var9;
        var9 = _closure1_slot22;
        var1.__initData = var9;
        var6 = var2.bind(var6)(var1);
        var9 = _closure1_slot4;
        var2 = var9.useCallback;
        var1 = new Array(1);
        var1[0] = var10;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 26;
            var2 = var5[var1];
            var0 = undefined;
            var3 = var4.bind(var0)(var2);
            var2 = var3.triggerHapticFeedback;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.HapticFeedbackTypes;
            var1 = var1.IMPACT_MEDIUM;
            var1 = var2.bind(var3)(var1);
            var1 = _closure2_slot0;
            var1 = var1.bind(var0)();
            return var0;
        };
        var10 = var2.bind(var9)(var0, var1);
        var2 = _closure1_slot12;
        var0 = var14[var4];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var0.style = var6;
        var6 = _closure1_slot12;
        var4 = var14[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var9 = {};
        var9.marginBottom = var11;
        var4.style = var9;
        var4.animatedProps = var8;
        var9 = _closure1_slot12;
        var7 = 45;
        var7 = var14[var7];
        var7 = var13.bind(var3)(var7);
        var8 = var7.Button;
        var7 = {
            'variant': 'primary',
            'onPress': null,
            'size': 'lg'
        };
        var7.onPress = var10;
        var10 = 36;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["1Qm822"];
        var10 = var11.bind(var12)(var10);
        var7.text = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var6 = var3.ScrollView;
    var _closure1_slot6 = var6;
    var3 = var3.Pressable;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MEDIA_PICKER_SEND_BUTTON_SPRING;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var12;
    var10 = 9;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.container = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.padding = var13;
    var3.contentContainer = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9.borderRadius = var13;
    var3.fieldButtonGroup = var9;
    var9 = {
        'padding': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9.padding = var13;
    var13 = 'row';
    var3.fieldButton = var9;
    var9 = {};
    var9.borderTopWidth = var12;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.borderTopColor = var14;
    var3.fieldButtonBorder = var9;
    var9 = {};
    var9.flexDirection = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.gap = var13;
    var3.fieldButtonChevron = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginVertical = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var9.borderTopWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_MUTED;
    var9.borderTopColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.gap = var10;
    var3.buttonContainer = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var9 = var6.ChevronSmallRightIcon;
    var6 = {};
    var8 = 'icon-muted';
    var6.color = var8;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot15 = var6;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var9 = var6.ChevronSmallRightIcon;
    var6 = {};
    var6.color = var8;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot16 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChevronSmallRightIcon;
    var3 = {};
    var3.color = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DiceIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot18 = var3;
    var3 = 12;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var8 = var6.DenyIcon;
    var6 = {};
    var6 = var7.bind(var0)(var8, var6);
    var _closure1_slot19 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DenyIcon;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = "function DisplayNameStylesEditScreenTsx1(){const{visible}=this.__closure;return{pointerEvents:visible?'box-none':'none'};}";
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = "function DisplayNameStylesEditScreenTsx2(){const{visible,tokens,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=visible?1:0;const targetTranslateY=visible?0:60;const targetScale=visible?1:0.9;return{position:'absolute',bottom:0,left:0,right:0,marginHorizontal:tokens.spacing.PX_16,flexDirection:'column',justifyContent:'flex-end',transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}],opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,MEDIA_PICKER_SEND_BUTTON_SPRING)};}";
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = 49;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/DisplayNameStylesEditScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun84639: for (var _fun84639_ip = 0;;) switch (_fun84639_ip) {
            case 0:
                var0 = _closure1_slot14;
                var4 = undefined;
                var20 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var0 = var3[var1];
                var5 = var2.bind(var4)(var0);
                var0 = var5.useRoute;
                var0 = var0.bind(var5)();
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot0 = var1;
                var0 = var0.params;
                var26 = null;
                if (!(var26 == var0)) {
                    _fun84639_ip = 82;
                    continue _fun84639
                }
            case 80:
                var0 = {};
            case 82:
                var21 = var0.guildId;
                var2 = var0.isTryItOut;
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 14;
                var0 = var5[var0];
                var8 = var3.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var43
                    var1 = _closure1_slot9;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var31 = var7.bind(var8)(var6, var0);
                var _closure2_slot2 = var31;
                var0 = 15;
                var0 = var5[var0];
                var6 = var3.bind(var4)(var0);
                var0 = var6.useDisplayNameStylesPendingName;
                var30 = var0.bind(var6)(var31, var21);
                var _closure2_slot3 = var30;
                var0 = 16;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useGuildMemberOrUserPendingDisplayNameStyles;
                var0 = var0.bind(var3)(var31, var21);
                var23 = var0.guildDisplayNameStyles;
                var24 = var0.pendingDisplayNameStyles;
                var6 = var0.tryItOutDisplayNameStyles;
                var3 = _closure1_slot1;
                var0 = 17;
                var0 = var5[var0];
                var3 = var3.bind(var4)(var0);
                var0 = {};
                var7 = var26 == var31;
                var5 = undefined;
                if (var7) {
                    _fun84639_ip = 253;
                    continue _fun84639
                }
            case 248:
                var5 = var31.id;
            case 253:
                var0.userId = var5;
                var0.guildId = var21;
                var5 = var24;
                if (!var2) {
                    _fun84639_ip = 270;
                    continue _fun84639
                }
            case 267:
                var5 = var6;
            case 270:
                var0.pendingDisplayNameStyles = var5;
                var29 = var3.bind(var4)(var0);
                var _closure2_slot4 = var29;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 18;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var5 = var0.bind(var4)();
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var7 = var26 == var29;
                var0 = undefined;
                if (var7) {
                    _fun84639_ip = 332;
                    continue _fun84639
                }
            case 326:
                var0 = var29.fontId;
            case 332:
                if (!(var26 == var0)) {
                    _fun84639_ip = 368;
                    continue _fun84639
                }
            case 336:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 19;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.DisplayNameFont;
                var0 = var7.DEFAULT;
            case 368:
                var3 = var3.bind(var6)(var0);
                var0 = _closure1_slot3;
                var8 = 2;
                var0 = var0.bind(var4)(var3, var8);
                var18 = 0;
                var22 = var0[var18];
                var _closure2_slot5 = var22;
                var7 = 1;
                var0 = var0[var7];
                var _closure2_slot6 = var0;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var9 = var26 == var29;
                var0 = undefined;
                if (var9) {
                    _fun84639_ip = 431;
                    continue _fun84639
                }
            case 425:
                var0 = var29.effectId;
            case 431:
                if (!(var26 == var0)) {
                    _fun84639_ip = 467;
                    continue _fun84639
                }
            case 435:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 20;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.DisplayNameEffect;
                var0 = var9.SOLID;
            case 467:
                var3 = var3.bind(var6)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var3, var8);
                var19 = var0[var18];
                var _closure2_slot7 = var19;
                var0 = var0[var7];
                var _closure2_slot8 = var0;
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 21;
                var6 = var0[var3];
                var10 = var9.bind(var4)(var6);
                var6 = var10.useDisplayNameStylesEffectConfig;
                var46 = var6.bind(var10)(var19);
                var3 = var0[var3];
                var6 = var9.bind(var4)(var3);
                var3 = var6.useDisplayNameStylesEffectConfig;
                var14 = 20;
                var0 = var0[var14];
                var0 = var9.bind(var4)(var0);
                var0 = var0.DisplayNameEffect;
                var0 = var0.GRADIENT;
                var10 = var3.bind(var6)(var0);
                var0 = var26 == var29;
                var9 = undefined;
                if (var0) {
                    _fun84639_ip = 587;
                    continue _fun84639
                }
            case 582:
                var9 = var29.colors;
            case 587:
                if (!(var26 == var9)) {
                    _fun84639_ip = 595;
                    continue _fun84639
                }
            case 591:
                var9 = new Array(0);
            case 595:
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var0 = var9.length;
                if (!(var0 > var18)) {
                    _fun84639_ip = 646;
                    continue _fun84639
                }
            case 613:
                var11 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var14];
                var0 = var11.bind(var4)(var0);
                var0 = var0.DisplayNameEffect;
                var0 = var0.GRADIENT;
                if (!(var19 === var0)) {
                    _fun84639_ip = 658;
                    continue _fun84639
                }
            case 646:
                var0 = var46.defaultColors;
                var0 = var0[var18];
                _fun84639_ip = 662;
                continue _fun84639;
            case 658:
                var0 = var9[var18];
            case 662:
                var3 = var3.bind(var6)(var0);
                var0 = _closure1_slot3;
                var3 = var0.bind(var4)(var3, var8);
                var0 = var3[var18];
                var _closure2_slot9 = var0;
                var3 = var3[var7];
                var _closure2_slot10 = var3;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var11 = var9.length;
                if (!(var11 > var18)) {
                    _fun84639_ip = 744;
                    continue _fun84639
                }
            case 711:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var11 = var13.bind(var4)(var11);
                var11 = var11.DisplayNameEffect;
                var11 = var11.GRADIENT;
                if (!(var19 !== var11)) {
                    _fun84639_ip = 750;
                    continue _fun84639
                }
            case 744:
                var9 = var10.defaultColors;
            case 750:
                var6 = var3.bind(var6)(var9);
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var6, var8);
                var6 = var3[var18];
                var _closure2_slot11 = var6;
                var3 = var3[var7];
                var _closure2_slot12 = var3;
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var7 = new Array(3);
                var7[0] = var19;
                var7[1] = var6;
                var7[2] = var0;
                var3 = function() { // Environment: var43
                    _fun84641: for (var _fun84641_ip = 0;;) switch (_fun84641_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 20;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.DisplayNameEffect;
                            var0 = var0.GRADIENT;
                            if (!(var2 !== var0)) {
                                _fun84641_ip = 62;
                                continue _fun84641
                            }
                        case 48:
                            var2 = _closure2_slot9;
                            var0 = new Array(1);
                            var0[0] = var2;
                            _fun84641_ip = 66;
                            continue _fun84641;
                        case 62:
                            var0 = _closure2_slot11;
                        case 66:
                            return var0;
                    }
                };
                var42 = var8.bind(var9)(var3, var7);
                var _closure2_slot13 = var42;
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var7 = new Array(4);
                var7[0] = var29;
                var7[1] = var22;
                var7[2] = var19;
                var7[3] = var42;
                var3 = function() { // Environment: var43
                    _fun84642: for (var _fun84642_ip = 0;;) switch (_fun84642_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = _closure2_slot4;
                            var5 = null;
                            var3 = var5 == var0;
                            var1 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun84642_ip = 34;
                                continue _fun84642
                            }
                        case 24:
                            var3 = _closure2_slot4;
                            var0 = var3.fontId;
                        case 34:
                            var0 = var2 !== var0;
                            if (var0) {
                                _fun84642_ip = 72;
                                continue _fun84642
                            }
                        case 41:
                            var3 = _closure2_slot7;
                            var2 = _closure2_slot4;
                            var4 = var5 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun84642_ip = 68;
                                continue _fun84642
                            }
                        case 58:
                            var4 = _closure2_slot4;
                            var2 = var4.effectId;
                        case 68:
                            var0 = var3 !== var2;
                        case 72:
                            if (var0) {
                                _fun84642_ip = 147;
                                continue _fun84642
                            }
                        case 75:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 22;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.areArraysShallowEqual;
                            var2 = _closure2_slot13;
                            var7 = _closure2_slot4;
                            var7 = var5 == var7;
                            var1 = undefined;
                            if (var7) {
                                _fun84642_ip = 130;
                                continue _fun84642
                            }
                        case 121:
                            var6 = _closure2_slot4;
                            var1 = var6.colors;
                        case 130:
                            if (!(var5 == var1)) {
                                _fun84642_ip = 138;
                                continue _fun84642
                            }
                        case 134:
                            var1 = new Array(0);
                        case 138:
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = !var1;
                        case 147:
                            return var0;
                    }
                };
                var15 = var8.bind(var9)(var3, var7);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 23;
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.useDisplayNameStylesHandleApply;
                var3 = {};
                var3.hasChanges = var15;
                var3.selectedFontId = var22;
                var3.selectedEffectId = var19;
                var3.selectedColors = var42;
                var9 = var46.defaultColors;
                var9 = var9[var18];
                var3.defaultColor = var9;
                var3.guildId = var21;
                var3.isTryItOut = var2;
                var9 = function() {
                    var1 = _closure2_slot0;
                    var0 = var1.goBack;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3.onClose = var9;
                var16 = var7.bind(var8)(var3);
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var43
                    _fun84644: for (var _fun84644_ip = 0;;) switch (_fun84644_ip) {
                        case 0:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 24;
                            var2 = var7[var0];
                            var0 = undefined;
                            var3 = var6.bind(var0)(var2);
                            var2 = var3.generateRandomDisplayNameStyles;
                            var2 = var2.bind(var3)();
                            var8 = var2.fontId;
                            var5 = var2.effectId;
                            var3 = var2.colors;
                            var4 = _closure2_slot6;
                            var4 = var4.bind(var0)(var8);
                            var4 = _closure2_slot8;
                            var4 = var4.bind(var0)(var5);
                            var4 = 20;
                            var4 = var7[var4];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.DisplayNameEffect;
                            var4 = var4.GRADIENT;
                            if (!(var5 !== var4)) {
                                _fun84644_ip = 118;
                                continue _fun84644
                            }
                        case 101:
                            var5 = _closure2_slot10;
                            var4 = 0;
                            var4 = var3[var4];
                            var4 = var5.bind(var0)(var4);
                            _fun84644_ip = 127;
                            continue _fun84644;
                        case 118:
                            var2 = _closure2_slot12;
                            var2 = var2.bind(var0)(var3);
                        case 127:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 25;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.track;
                            var1 = _closure1_slot10;
                            var1 = var1.DISPLAY_NAME_STYLES_SURPRISE_ME;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var3 = new Array(0);
                var32 = var8.bind(var9)(var7, var3);
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var2;
                var2 = function() { // Environment: var43
                    _fun84645: for (var _fun84645_ip = 0;;) switch (_fun84645_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 26;
                            var3 = var6[var1];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var3);
                            var3 = var4.triggerHapticFeedback;
                            var1 = var6[var1];
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.HapticFeedbackTypes;
                            var1 = var1.IMPACT_MEDIUM;
                            var1 = var3.bind(var4)(var1);
                            var3 = _closure2_slot1;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            if (var3) {
                                _fun84645_ip = 102;
                                continue _fun84645
                            }
                        case 75:
                            var3 = 28;
                            var3 = var5[var3];
                            var7 = var4.bind(var0)(var3);
                            var6 = var7.setPendingDisplayNameStyles;
                            var3 = null;
                            var3 = var6.bind(var7)(var3);
                            _fun84645_ip = 127;
                            continue _fun84645;
                        case 102:
                            var3 = 27;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.setTryItOutDisplayNameStyles;
                            var3 = null;
                            var3 = var4.bind(var5)(var3);
                        case 127:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 25;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.track;
                            var2 = _closure1_slot10;
                            var2 = var2.DISPLAY_NAME_STYLES_REMOVED;
                            var2 = var3.bind(var4)(var2);
                            var2 = _closure2_slot0;
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var33 = var7.bind(var8)(var2, var3);
                var7 = _closure1_slot4;
                var3 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var43
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 26;
                    var4 = var3[var1];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var4.bind(var5)(var1);
                    var1 = 29;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setGuildMemberPendingDisplayNameStyles;
                    var1 = null;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot0;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var25 = var3.bind(var7)(var1, var2);
                var7 = _closure1_slot4;
                var3 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var22;
                var2[1] = var30;
                var1 = function() { // Environment: var43
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 32;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 31;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2.selectedFontId = var6;
                    var6 = _closure2_slot6;
                    var2.onSelectFont = var6;
                    var1 = _closure2_slot3;
                    var2.displayName = var1;
                    var1 = 'DisplayNameStylesFontPickerSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var28 = var3.bind(var7)(var1, var2);
                var7 = _closure1_slot4;
                var3 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var19;
                var8 = var26 == var31;
                var1 = undefined;
                if (var8) {
                    _fun84639_ip = 1109;
                    continue _fun84639
                }
            case 1104:
                var1 = var31.id;
            case 1109:
                var2[1] = var1;
                var1 = function() { // Environment: var43
                    _fun84648: for (var _fun84648_ip = 0;;) switch (_fun84648_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 30;
                            var3 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 32;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 33;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = {};
                            var7 = _closure2_slot2;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun84648_ip = 94;
                                continue _fun84648
                            }
                        case 85:
                            var7 = _closure2_slot2;
                            var6 = var7.id;
                        case 94:
                            var2.userId = var6;
                            var6 = _closure2_slot7;
                            var2.selectedEffectId = var6;
                            var1 = _closure2_slot8;
                            var2.onSelectEffect = var1;
                            var1 = 'DisplayNameStylesEffectPickerSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var38 = var3.bind(var7)(var1, var2);
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var0;
                var1[2] = var19;
                var0 = function() { // Environment: var43
                    _fun84649: for (var _fun84649_ip = 0;;) switch (_fun84649_ip) {
                        case 0:
                            var4 = _closure2_slot7;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.DisplayNameEffect;
                            var2 = var2.GRADIENT;
                            if (!(var4 !== var2)) {
                                _fun84649_ip = 152;
                                continue _fun84649
                            }
                        case 48:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var4 = 30;
                            var4 = var2[var4];
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.openLazy;
                            var5 = _closure1_slot0;
                            var4 = 32;
                            var4 = var2[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = 35;
                            var4 = var2[var4];
                            var2 = var2.paths;
                            var5 = var5.bind(var0)(var4, var2);
                            var4 = {};
                            var2 = _closure2_slot9;
                            var4.selectedColor = var2;
                            var2 = _closure2_slot7;
                            var4.selectedEffectId = var2;
                            var2 = _closure2_slot10;
                            var4.onSelectColor = var2;
                            var2 = 'DisplayNameStylesColorPickerSheet';
                            var2 = var6.bind(var7)(var5, var2, var4);
                            _fun84649_ip = 245;
                            continue _fun84649;
                        case 152:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var4 = 30;
                            var4 = var2[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.openLazy;
                            var6 = _closure1_slot0;
                            var3 = 32;
                            var3 = var2[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = 34;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var6.bind(var0)(var3, var2);
                            var2 = {};
                            var6 = _closure2_slot11;
                            var2.selectedColors = var6;
                            var1 = _closure2_slot12;
                            var2.onSelectColors = var1;
                            var1 = 'DisplayNameStylesGradientPickerSheet';
                            var1 = var4.bind(var5)(var3, var1, var2);
                        case 245:
                            return var0;
                    }
                };
                var35 = var2.bind(var3)(var0, var1);
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var27 = 36;
                var0 = var6[var27];
                var0 = var1.bind(var4)(var0);
                var2 = var0.intl;
                var1 = var2.string;
                var3 = _closure1_slot1;
                var0 = 37;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)(var22);
                var47 = var1.bind(var2)(var0);
                var1 = var26 == var31;
                var0 = null;
                if (var1) {
                    _fun84639_ip = 2698;
                    continue _fun84639
                }
            case 1232:
                var3 = _closure1_slot12;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 38;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.ThemeContextProvider;
                var1 = {};
                var1.theme = var5;
                var7 = _closure1_slot12;
                var5 = 39;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.DisplayNameStylesContext;
                var6 = var5.Provider;
                var5 = {};
                var8 = {};
                var9 = true;
                var8.overrideSettings = var9;
                var5.value = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var20.container;
                var8.style = var11;
                var13 = _closure1_slot6;
                var11 = {};
                var14 = {};
                var50 = var20.contentContainer;
                var51 = var14;
                var17 = copyDataProperties(var51, var50);
                var18 = 0;
                if (!var15) {
                    _fun84639_ip = 1360;
                    continue _fun84639
                }
            case 1357:
                var18 = 70;
            case 1360:
                var17 = 'paddingBottom';
                var14[var17] = var18;
                var11.contentContainerStyle = var14;
                var18 = _closure1_slot12;
                var37 = _closure1_slot1;
                var34 = _closure1_slot2;
                var14 = 40;
                var14 = var34[var14];
                var17 = var37.bind(var4)(var14);
                var14 = {};
                var14.user = var31;
                var14.displayName = var30;
                var14.guildId = var21;
                var14.selectedFontId = var22;
                var14.selectedEffectId = var19;
                var14.selectedColors = var42;
                var17 = var18.bind(var4)(var17, var14);
                var14 = new Array(3);
                var14[0] = var17;
                var19 = _closure1_slot13;
                var18 = _closure1_slot5;
                var17 = {};
                var22 = var20.fieldButtonGroup;
                var17.style = var22;
                var31 = _closure1_slot7;
                var22 = {};
                var22.onPress = var28;
                var28 = var20.fieldButton;
                var22.style = var28;
                var28 = {};
                var44 = _closure1_slot12;
                var36 = _closure1_slot0;
                var39 = 41;
                var30 = var34[var39];
                var30 = var36.bind(var4)(var30);
                var41 = var30.Text;
                var40 = {
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var30 = var34[var27];
                var30 = var36.bind(var4)(var30);
                var49 = var30.intl;
                var48 = var49.string;
                var30 = 42;
                var45 = var34[var30];
                var45 = var37.bind(var4)(var45);
                var45 = var45["0JCuGm"];
                var45 = var48.bind(var49)(var45);
                var40.children = var45;
                var41 = var44.bind(var4)(var41, var40);
                var40 = new Array(2);
                var40[0] = var41;
                var45 = _closure1_slot12;
                var41 = var34[var39];
                var41 = var36.bind(var4)(var41);
                var44 = var41.Text;
                var41 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle'
                };
                var41.children = var47;
                var41 = var45.bind(var4)(var44, var41);
                var40[1] = var41;
                var28.children = var40;
                var40 = var19.bind(var4)(var18, var28);
                var28 = new Array(2);
                var28[0] = var40;
                var40 = _closure1_slot15;
                var28[1] = var40;
                var22.children = var28;
                var28 = var19.bind(var4)(var31, var22);
                var22 = new Array(3);
                var22[0] = var28;
                var28 = {};
                var28.onPress = var38;
                var40 = var20.fieldButton;
                var38 = new Array(2);
                var38[0] = var40;
                var40 = var20.fieldButtonBorder;
                var38[1] = var40;
                var28.style = var38;
                var38 = {};
                var44 = _closure1_slot12;
                var40 = var34[var39];
                var40 = var36.bind(var4)(var40);
                var41 = var40.Text;
                var40 = {
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var45 = var34[var27];
                var45 = var36.bind(var4)(var45);
                var48 = var45.intl;
                var47 = var48.string;
                var45 = var34[var30];
                var45 = var37.bind(var4)(var45);
                var45 = var45.RVtMxT;
                var45 = var47.bind(var48)(var45);
                var40.children = var45;
                var41 = var44.bind(var4)(var41, var40);
                var40 = new Array(2);
                var40[0] = var41;
                var45 = _closure1_slot12;
                var41 = var34[var39];
                var41 = var36.bind(var4)(var41);
                var44 = var41.Text;
                var41 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle'
                };
                var46 = var46.name;
                var41.children = var46;
                var41 = var45.bind(var4)(var44, var41);
                var40[1] = var41;
                var38.children = var40;
                var40 = var19.bind(var4)(var18, var38);
                var38 = new Array(2);
                var38[0] = var40;
                var40 = _closure1_slot16;
                var38[1] = var40;
                var28.children = var38;
                var28 = var19.bind(var4)(var31, var28);
                var22[1] = var28;
                var28 = {};
                var28.onPress = var35;
                var38 = var20.fieldButton;
                var35 = new Array(2);
                var35[0] = var38;
                var38 = var20.fieldButtonBorder;
                var35[1] = var38;
                var28.style = var35;
                var35 = {};
                var41 = _closure1_slot12;
                var38 = var34[var39];
                var38 = var36.bind(var4)(var38);
                var40 = var38.Text;
                var38 = {
                    'variant': 'heading-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var44 = var34[var27];
                var44 = var36.bind(var4)(var44);
                var46 = var44.intl;
                var45 = var46.string;
                var44 = var34[var30];
                var44 = var37.bind(var4)(var44);
                var44 = var44["6OxgN7"];
                var44 = var45.bind(var46)(var44);
                var38.children = var44;
                var40 = var41.bind(var4)(var40, var38);
                var38 = new Array(2);
                var38[0] = var40;
                var41 = _closure1_slot12;
                var39 = var34[var39];
                var39 = var36.bind(var4)(var39);
                var40 = var39.Text;
                var39 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle'
                };
                var44 = var42.map;
                var43 = function(arg0) { // Environment: var43
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 43;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.int2hex;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var45 = var44.bind(var42)(var43);
                var44 = var45.join;
                var43 = ', ';
                var43 = var44.bind(var45)(var43);
                var39.children = var43;
                var39 = var41.bind(var4)(var40, var39);
                var38[1] = var39;
                var35.children = var38;
                var38 = var19.bind(var4)(var18, var35);
                var35 = new Array(2);
                var35[0] = var38;
                var38 = {};
                var39 = var20.fieldButtonChevron;
                var38.style = var39;
                var41 = _closure1_slot12;
                var39 = 44;
                var39 = var34[var39];
                var40 = var37.bind(var4)(var39);
                var39 = {};
                var39.colors = var42;
                var40 = var41.bind(var4)(var40, var39);
                var39 = new Array(2);
                var39[0] = var40;
                var40 = _closure1_slot17;
                var39[1] = var40;
                var38.children = var39;
                var38 = var19.bind(var4)(var18, var38);
                var35[1] = var38;
                var28.children = var35;
                var28 = var19.bind(var4)(var31, var28);
                var22[2] = var28;
                var17.children = var22;
                var17 = var19.bind(var4)(var18, var17);
                var14[1] = var17;
                var17 = {};
                var20 = var20.buttonContainer;
                var17.style = var20;
                var31 = _closure1_slot12;
                var22 = 45;
                var20 = var34[var22];
                var20 = var36.bind(var4)(var20);
                var28 = var20.Button;
                var20 = {
                    'text': null,
                    'onPress': null,
                    'variant': 'tertiary',
                    'size': 'lg',
                    'grow': true,
                    'icon': null,
                    'iconPosition': 'start'
                };
                var35 = var34[var27];
                var35 = var36.bind(var4)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var34 = var34[var30];
                var34 = var37.bind(var4)(var34);
                var34 = var34.NOGFds;
                var34 = var35.bind(var36)(var34);
                var20.text = var34;
                var20.onPress = var32;
                var32 = _closure1_slot18;
                var20.icon = var32;
                var28 = var31.bind(var4)(var28, var20);
                var20 = new Array(3);
                var20[0] = var28;
                var28 = var26 == var21;
                if (!var28) {
                    _fun84639_ip = 2344;
                    continue _fun84639
                }
            case 2340:
                var28 = var26 != var29;
            case 2344:
                if (!var28) {
                    _fun84639_ip = 2461;
                    continue _fun84639
                }
            case 2347:
                var32 = _closure1_slot12;
                var36 = _closure1_slot0;
                var34 = _closure1_slot2;
                var29 = var34[var22];
                var29 = var36.bind(var4)(var29);
                var31 = var29.Button;
                var29 = {
                    'text': null,
                    'onPress': null,
                    'variant': 'tertiary',
                    'size': 'lg',
                    'grow': true,
                    'icon': null,
                    'iconPosition': 'start'
                };
                var35 = var34[var27];
                var35 = var36.bind(var4)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var37 = _closure1_slot1;
                var34 = var34[var30];
                var34 = var37.bind(var4)(var34);
                var34 = var34.ymq8WQ;
                var34 = var35.bind(var36)(var34);
                var29.text = var34;
                var29.onPress = var33;
                var33 = _closure1_slot19;
                var29.icon = var33;
                var28 = var32.bind(var4)(var31, var29);
            case 2461:
                var20[1] = var28;
                var21 = var26 != var21;
                if (!var21) {
                    _fun84639_ip = 2486;
                    continue _fun84639
                }
            case 2472:
                var23 = var26 != var23;
                if (var23) {
                    _fun84639_ip = 2483;
                    continue _fun84639
                }
            case 2479:
                var23 = var26 != var24;
            case 2483:
                var21 = var23;
            case 2486:
                if (!var21) {
                    _fun84639_ip = 2603;
                    continue _fun84639
                }
            case 2489:
                var24 = _closure1_slot12;
                var28 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = var26[var22];
                var22 = var28.bind(var4)(var22);
                var23 = var22.Button;
                var22 = {
                    'text': null,
                    'onPress': null,
                    'variant': 'tertiary',
                    'size': 'lg',
                    'grow': true,
                    'icon': null,
                    'iconPosition': 'start'
                };
                var27 = var26[var27];
                var27 = var28.bind(var4)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var29 = _closure1_slot1;
                var26 = var26[var30];
                var26 = var29.bind(var4)(var26);
                var26 = var26["j/KRxc"];
                var26 = var27.bind(var28)(var26);
                var22.text = var26;
                var22.onPress = var25;
                var25 = _closure1_slot20;
                var22.icon = var25;
                var21 = var24.bind(var4)(var23, var22);
            case 2603:
                var20[2] = var21;
                var17.children = var20;
                var17 = var19.bind(var4)(var18, var17);
                var14[2] = var17;
                var11.children = var14;
                var13 = var10.bind(var4)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var14 = _closure1_slot12;
                var13 = _closure1_slot23;
                var12 = {};
                var12.onPress = var16;
                var12.visible = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 2698:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1621, 660, 1566, 33, 1297, 671, 8440, 10795, 9766, 1470, 566, 10797, 5644, 3979, 3247, 1634, 1633, 7022, 628, 10798, 1631, 795, 3280, 5645, 5780, 5781, 3279, 10799, 1307, 10800, 10801, 10804, 1234, 10156, 3161, 3983, 10805, 3938, 2182, 668, 10157, 4090, 1568, 3717, 4087, 2]);