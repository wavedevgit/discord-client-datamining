// modules/stage_channels/native/components/StageActionBarButtons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var8;
    var4 = function arg0() {
        _fun90799: for (var _fun90799_ip = 0;;) switch (_fun90799_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.show;
                var _closure2_slot0 = var12;
                var4 = var0.children;
                var6 = var0.style;
                var0 = _closure1_slot14;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var14 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 15;
                var0 = var9[var0];
                var10 = var14.bind(var3)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var2
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var8.bind(var10)(var7, var0);
                var0 = 53;
                var7 = var9[var0];
                var10 = var14.bind(var3)(var7);
                var7 = var10.useAnimatedStyle;
                var2 = function() {
                    _fun90801: for (var _fun90801_ip = 0;;) switch (_fun90801_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var6 = 54;
                            var2 = var2[var6];
                            var5 = undefined;
                            var8 = var3.bind(var5)(var2);
                            var7 = var8.withSpring;
                            var3 = _closure2_slot0;
                            var4 = 20;
                            if (!var3) {
                                _fun90801_ip = 47;
                                continue _fun90801
                            }
                        case 45:
                            var4 = 0;
                        case 47:
                            var3 = _closure1_slot18;
                            var3 = var7.bind(var8)(var4, var3);
                            var0.marginTop = var3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.withSpring;
                            var5 = _closure2_slot0;
                            var2 = 0;
                            if (!var5) {
                                _fun90801_ip = 95;
                                continue _fun90801
                            }
                        case 92:
                            var2 = 1;
                        case 95:
                            var1 = _closure1_slot18;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var11 = {};
                var13 = 54;
                var13 = var9[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.withSpring;
                var11.withSpring = var13;
                var11.show = var12;
                var12 = _closure1_slot18;
                var11.actionBarAnimationConfig = var12;
                var2.__closure = var11;
                var11 = 5255980384921.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot19;
                var2.__initData = var11;
                var7 = var7.bind(var10)(var2);
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var9 = var5.actionBarCTAContainer;
                var5 = new Array(3);
                var5[0] = var9;
                var5[1] = var6;
                var6 = undefined;
                if (var8) {
                    _fun90799_ip = 239;
                    continue _fun90799
                }
            case 236:
                var6 = var7;
            case 239:
                var5[2] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var4;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var4 = var0.isLive;
        var _closure2_slot1 = var4;
        var5 = var0.style;
        var0 = _closure1_slot14;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var0 = 56;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.FormCTA;
        var0 = {};
        var10 = function() {
            _fun90803: for (var _fun90803_ip = 0;;) switch (_fun90803_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun90803_ip = 50;
                        continue _fun90803
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.openStageChannelSettings;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.onPress = var10;
        var10 = _closure1_slot1;
        var9 = 57;
        var9 = var8[var9];
        var9 = var10.bind(var3)(var9);
        var0.iconSource = var9;
        var9 = var6.iconStyle;
        var0.iconStyle = var9;
        var6 = var6.iconContainerStyle;
        var0.iconContainerStyle = var6;
        var0.style = var5;
        var0.completed = var4;
        var4 = 12;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.OYbHfv;
        var5 = var6.bind(var9)(var5);
        var0.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.yXwLMQ;
        var4 = var5.bind(var6)(var4);
        var0.subtitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var13.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var15 = 4;
    var5 = var8[var15];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.REQUEST_TO_SPEAK_SHEET_KEY;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.NOOP;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var9 = var5.jsx;
    var _closure1_slot12 = var9;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 9;
    var6 = var8[var5];
    var11 = var7.bind(var0)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {};
    var14 = 'relative';
    var12.position = var14;
    var6.actionBarCTAContainer = var12;
    var14 = {};
    var12 = 10;
    var16 = var8[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var14.tintColor = var16;
    var6.imageStyle = var14;
    var14 = {
        'tintColor': null,
        'width': 20,
        'height': 20
    };
    var16 = var8[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var14.tintColor = var16;
    var6.iconStyle = var14;
    var14 = {};
    var16 = var8[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.GREEN_360;
    var14.backgroundColor = var16;
    var16 = var8[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var14.borderRadius = var16;
    var14.padding = var15;
    var6.iconContainerStyle = var14;
    var14 = 'center';
    var15 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var6.continueContainer = var15;
    var15 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18
    };
    var16 = var8[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLUE_345;
    var15.color = var16;
    var6.continueText = var15;
    var15 = {};
    var16 = var8[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.BLUE_345;
    var15.tintColor = var16;
    var6.continueIcon = var15;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var5 = var8[var5];
    var10 = var7.bind(var0)(var5);
    var6 = var10.createStyles;
    var5 = {};
    var11 = {};
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var11.paddingVertical = var15;
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var11.gap = var15;
    var5.container = var11;
    var11 = {};
    var11.alignItems = var14;
    var5.header = var11;
    var11 = {};
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11.gap = var15;
    var5.content = var11;
    var11 = {};
    var11.textAlign = var14;
    var5.title = var11;
    var11 = {};
    var11.textAlign = var14;
    var5.body = var11;
    var11 = {};
    var12 = var8[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var11.gap = var12;
    var5.footer = var11;
    var5 = var6.bind(var10)(var5);
    var _closure1_slot15 = var5;
    var5 = 35;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.TrafficConeSpotIllustration;
    var5 = {
        'width': 120,
        'height': 120
    };
    var5 = var9.bind(var0)(var6, var5);
    var _closure1_slot16 = var5;
    var5 = function arg0() {
        var0 = arg0;
        var0 = var0.onClose;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot15;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var17 = _closure1_slot3;
        var0 = 36;
        var0 = var17[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var5 = var0.bottom;
        var14 = function() {
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 30;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var2 = _closure1_slot12;
        var16 = _closure1_slot0;
        var0 = 37;
        var0 = var17[var0];
        var0 = var16.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var4 = true;
        var0.startExpanded = var4;
        var0.onDismiss = var14;
        var4 = {};
        var4.paddingBottom = var5;
        var0.contentStyles = var4;
        var5 = _closure1_slot12;
        var6 = _closure1_slot6;
        var4 = {};
        var7 = var9.header;
        var4.style = var7;
        var7 = _closure1_slot16;
        var4.children = var7;
        var4 = var5.bind(var3)(var6, var4);
        var0.header = var4;
        var5 = _closure1_slot13;
        var4 = {};
        var7 = var9.container;
        var4.style = var7;
        var7 = {};
        var8 = var9.content;
        var7.style = var8;
        var15 = _closure1_slot12;
        var10 = 38;
        var8 = var17[var10];
        var8 = var16.bind(var3)(var8);
        var12 = var8.Text;
        var8 = {
            'variant': 'heading-lg/bold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var9.title;
        var8.style = var13;
        var13 = 12;
        var18 = var17[var13];
        var18 = var16.bind(var3)(var18);
        var21 = var18.intl;
        var20 = var21.string;
        var18 = var17[var13];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.zvubnM;
        var18 = var20.bind(var21)(var18);
        var8.children = var18;
        var12 = var15.bind(var3)(var12, var8);
        var8 = new Array(2);
        var8[0] = var12;
        var15 = _closure1_slot12;
        var10 = var17[var10];
        var10 = var16.bind(var3)(var10);
        var12 = var10.Text;
        var10 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var18 = var9.body;
        var10.style = var18;
        var18 = var17[var13];
        var18 = var16.bind(var3)(var18);
        var21 = var18.intl;
        var20 = var21.string;
        var18 = var17[var13];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["/wx+J2"];
        var18 = var20.bind(var21)(var18);
        var10.children = var18;
        var10 = var15.bind(var3)(var12, var10);
        var8[1] = var10;
        var7.children = var8;
        var8 = var5.bind(var3)(var6, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = {};
        var9 = var9.footer;
        var8.style = var9;
        var18 = _closure1_slot12;
        var10 = 39;
        var9 = var17[var10];
        var9 = var16.bind(var3)(var9);
        var12 = var9.Button;
        var9 = {};
        var15 = 'lg';
        var9.size = var15;
        var19 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var0 = 40;
            var1 = var3[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var4 = var5.showAgeVerificationGetStartedModal;
            var1 = {};
            var7 = _closure1_slot0;
            var6 = 41;
            var6 = var3[var6];
            var6 = var7.bind(var0)(var6);
            var6 = var6.AgeVerificationModalEntryPoint;
            var6 = var6.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT;
            var1.entryPoint = var6;
            var1 = var4.bind(var5)(var1);
            var1 = _closure2_slot0;
            var1 = var1.bind(var0)();
            var1 = 30;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var9.onPress = var19;
        var19 = var17[var13];
        var19 = var16.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var17[var13];
        var19 = var16.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.KXVgjt;
        var19 = var20.bind(var21)(var19);
        var9.text = var19;
        var12 = var18.bind(var3)(var12, var9);
        var9 = new Array(2);
        var9[0] = var12;
        var12 = _closure1_slot12;
        var10 = var17[var10];
        var10 = var16.bind(var3)(var10);
        var11 = var10.Button;
        var10 = {};
        var10.size = var15;
        var10.onPress = var14;
        var14 = var17[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.WAI6xu;
        var13 = var14.bind(var15)(var13);
        var10.text = var13;
        var13 = 'secondary';
        var10.variant = var13;
        var10 = var12.bind(var3)(var11, var10);
        var9[1] = var10;
        var8.children = var9;
        var8 = var5.bind(var3)(var6, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var5.bind(var3)(var6, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var5;
    var6 = {
        'mass': 1,
        'stiffness': 100,
        'damping': 30,
        'overshootClamping': false,
        'restSpeedThreshold': 0.01,
        'restDisplacementThreshold': 0.01
    };
    var _closure1_slot18 = var6;
    var6 = {};
    var9 = 'function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}';
    var6.code = var9;
    var _closure1_slot19 = var6;
    var6 = 63;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/native/components/StageActionBarButtons.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var4 = var0.isSmallSize;
        var3 = _closure1_slot12;
        var1 = _closure1_slot2;
        var8 = _closure1_slot3;
        var0 = 11;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ActionButton;
        var0 = {};
        var11 = _closure1_slot0;
        var7 = 12;
        var9 = var8[var7];
        var9 = var11.bind(var2)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var7 = var8[var7];
        var7 = var11.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7.ezLpY6;
        var7 = var9.bind(var10)(var7);
        var0.accessibilityLabel = var7;
        var7 = _closure1_slot1;
        var6 = 13;
        var6 = var8[var6];
        var6 = var7.bind(var2)(var6);
        var0.source = var6;
        var5 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.audienceAckRequestToSpeak;
            var2 = _closure2_slot0;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.onPress = var5;
        var0.isSmallSize = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.MoveToAudienceButton = var6;
    var6 = function(arg0) { // Environment: var1
        _fun90809: for (var _fun90809_ip = 0;;) switch (_fun90809_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var5 = var1.isSmallSize;
                var1 = _closure1_slot14;
                var4 = undefined;
                var7 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 15;
                var1 = var3[var1];
                var11 = var2.bind(var4)(var1);
                var10 = var11.useStateFromStores;
                var1 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var6
                    var1 = _closure1_slot9;
                    var0 = var1.isMuted;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var10.bind(var11)(var8, var1);
                var _closure2_slot0 = var8;
                var1 = 16;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useShowStageMusicMuteButton;
                var0 = var0.id;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!var1) {
                    _fun90809_ip = 348;
                    continue _fun90809
                }
            case 119:
                var3 = _closure1_slot12;
                var2 = _closure1_slot2;
                var10 = _closure1_slot3;
                var1 = 11;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ActionButton;
                var1 = {};
                var11 = _closure1_slot0;
                var14 = _closure1_slot3;
                var10 = 12;
                var12 = var14[var10];
                var12 = var11.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var14[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.t;
                if (var8) {
                    _fun90809_ip = 211;
                    continue _fun90809
                }
            case 198:
                var10 = var11.zqxfrf;
                var10 = var12.bind(var13)(var10);
                _fun90809_ip = 222;
                continue _fun90809;
            case 211:
                var11 = var11.ScHlfl;
                var10 = var12.bind(var13)(var11);
            case 222:
                var1.accessibilityLabel = var10;
                var11 = _closure1_slot1;
                var13 = _closure1_slot3;
                if (var8) {
                    _fun90809_ip = 246;
                    continue _fun90809
                }
            case 237:
                var10 = 18;
                var10 = var13[var10];
                _fun90809_ip = 253;
                continue _fun90809;
            case 246:
                var12 = 17;
                var10 = var13[var12];
            case 253:
                var10 = var11.bind(var4)(var10);
                var1.source = var10;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                if (var8) {
                    _fun90809_ip = 293;
                    continue _fun90809
                }
            case 273:
                var8 = 20;
                var8 = var11[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.MusicIcon;
                _fun90809_ip = 311;
                continue _fun90809;
            case 293:
                var9 = 19;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var8 = var9.MusicSlashIcon;
            case 311:
                var1.IconComponent = var8;
                var7 = var7.imageStyle;
                var1.imageStyle = var7;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateStageMusicMuted;
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onPress = var6;
                var1.isSmallSize = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 348:
                return var0;
        }
    };
    var2.MusicMuteButton = var6;
    var6 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var4 = var0.isSmallSize;
        var3 = _closure1_slot12;
        var1 = _closure1_slot2;
        var8 = _closure1_slot3;
        var0 = 11;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PrimaryActionButton;
        var0 = {};
        var7 = _closure1_slot0;
        var9 = 12;
        var10 = var8[var9];
        var10 = var7.bind(var2)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var8[var9];
        var9 = var7.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9.SMKyih;
        var9 = var10.bind(var11)(var9);
        var0.accessibilityLabel = var9;
        var9 = _closure1_slot1;
        var6 = 22;
        var6 = var8[var6];
        var6 = var9.bind(var2)(var6);
        var0.source = var6;
        var6 = 23;
        var6 = var8[var6];
        var6 = var7.bind(var2)(var6);
        var6 = var6.DoorExitIcon;
        var0.IconComponent = var6;
        var5 = function() {
            _fun90813: for (var _fun90813_ip = 0;;) switch (_fun90813_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    if (var2) {
                        _fun90813_ip = 77;
                        continue _fun90813
                    }
                case 48:
                    var2 = 26;
                    var2 = var4[var2];
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.handleDisconnect;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    _fun90813_ip = 104;
                    continue _fun90813;
                case 77:
                    var2 = 25;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openEndStageModal;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                case 104:
                    return var0;
            }
        };
        var0.onPress = var5;
        var0.isSmallSize = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.DisconnectStageButton = var6;
    var6 = function(arg0) { // Environment: var1
        _fun90814: for (var _fun90814_ip = 0;;) switch (_fun90814_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channel;
                var _closure2_slot0 = var1;
                var5 = var2.isSmallSize;
                var3 = _closure1_slot1;
                var9 = _closure1_slot3;
                var2 = 27;
                var2 = var9[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var2 = var2.analyticsLocations;
                var _closure2_slot1 = var2;
                var7 = _closure1_slot0;
                var2 = 28;
                var2 = var9[var2];
                var6 = var7.bind(var4)(var2);
                var3 = var6.useStageParticipantsCount;
                var2 = var1.id;
                var1 = 29;
                var1 = var9[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.StageChannelParticipantNamedIndex;
                var1 = var1.REQUESTED_TO_SPEAK_ONLY;
                var6 = var3.bind(var6)(var2, var1);
                var7 = function() {
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 30;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 32;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 31;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot10;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var1.channelId = var7;
                    var6 = _closure2_slot1;
                    var1.analyticsLocations = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0 = 0;
                if (!(!(var6 > var0))) {
                    _fun90814_ip = 318;
                    continue _fun90814
                }
            case 132:
                var2 = _closure1_slot12;
                var1 = _closure1_slot2;
                var10 = _closure1_slot3;
                var0 = 11;
                var0 = var10[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.ActionButton;
                var0 = {};
                var9 = _closure1_slot0;
                var3 = 12;
                var11 = var10[var3];
                var11 = var9.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.KJnyvh;
                var3 = var11.bind(var12)(var3);
                var0.accessibilityLabel = var3;
                var12 = _closure1_slot1;
                var3 = 33;
                var3 = var10[var3];
                var3 = var12.bind(var4)(var3);
                var0.source = var3;
                var3 = {};
                var11 = 10;
                var11 = var10[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.WHITE;
                var3.tintColor = var11;
                var0.imageStyle = var3;
                var3 = 34;
                var3 = var10[var3];
                var3 = var9.bind(var4)(var3);
                var3 = var3.HandRequestSpeakListIcon;
                var0.IconComponent = var3;
                var0.onPress = var7;
                var0.isSmallSize = var5;
                var0 = var2.bind(var4)(var1, var0);
                _fun90814_ip = 512;
                continue _fun90814;
            case 318:
                var3 = _closure1_slot12;
                var2 = _closure1_slot2;
                var10 = _closure1_slot3;
                var1 = 11;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.NotifiedActionButton;
                var1 = {};
                var9 = _closure1_slot0;
                var11 = 12;
                var12 = var10[var11];
                var12 = var9.bind(var4)(var12);
                var14 = var12.intl;
                var13 = var14.formatToPlainString;
                var11 = var10[var11];
                var11 = var9.bind(var4)(var11);
                var11 = var11.t;
                var12 = var11.OhK58v;
                var11 = {};
                var11.count = var6;
                var11 = var13.bind(var14)(var12, var11);
                var1.accessibilityLabel = var11;
                var12 = _closure1_slot1;
                var8 = 33;
                var8 = var10[var8];
                var8 = var12.bind(var4)(var8);
                var1.source = var8;
                var8 = {};
                var11 = 10;
                var11 = var10[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.unsafe_rawColors;
                var11 = var11.WHITE;
                var8.tintColor = var11;
                var1.imageStyle = var8;
                var8 = 34;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.HandRequestSpeakListIcon;
                var1.IconComponent = var8;
                var1.onPress = var7;
                var1.notifications = var6;
                var1.isSmallSize = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 512:
                return var0;
        }
    };
    var2.RequestToSpeakListButton = var6;
    var2.AgeVerificationSpeakerActionSheet = var5;
    var5 = function(arg0) { // Environment: var1
        _fun90816: for (var _fun90816_ip = 0;;) switch (_fun90816_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var4 = var0.isSmallSize;
                var1 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 42;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)(var2);
                var12 = _closure1_slot4;
                var11 = 2;
                var0 = var12.bind(var3)(var0, var11);
                var10 = 0;
                var9 = var0[var10];
                var8 = 1;
                var0 = var0[var8];
                var _closure2_slot0 = var0;
                var1 = _closure1_slot0;
                var0 = 43;
                var0 = var5[var0];
                var15 = var1.bind(var3)(var0);
                var14 = var15.useLocalStorageState;
                var13 = 'age-verification-stage-popover-dismissed';
                var0 = false;
                var0 = var14.bind(var15)(var13, var0);
                var0 = var12.bind(var3)(var0, var11);
                var13 = var0[var10];
                var _closure2_slot1 = var13;
                var0 = var0[var8];
                var _closure2_slot2 = var0;
                var10 = 44;
                var8 = var5[var10];
                var12 = var1.bind(var3)(var8);
                var11 = var12.useShouldAgeVerifyToSpeakForCurrentUser;
                var8 = var2.id;
                var8 = var11.bind(var12)(var8);
                var _closure2_slot3 = var8;
                var10 = var5[var10];
                var12 = var1.bind(var3)(var10);
                var11 = var12.useShouldShowAgeVerificationPopover;
                var10 = var2.id;
                var14 = var11.bind(var12)(var10);
                var _closure2_slot4 = var14;
                var12 = _closure1_slot5;
                var11 = var12.useEffect;
                var10 = new Array(3);
                var10[0] = var14;
                var10[1] = var13;
                var10[2] = var0;
                var0 = function() { // Environment: var6
                    _fun90817: for (var _fun90817_ip = 0;;) switch (_fun90817_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun90817_ip = 17;
                                continue _fun90817
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var0 = !var1;
                        case 17:
                            if (!var0) {
                                _fun90817_ip = 102;
                                continue _fun90817
                            }
                        case 20:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 30;
                            var0 = var2[var0];
                            var6 = undefined;
                            var2 = var1.bind(var6)(var0);
                            var1 = var2.showActionSheet;
                            var0 = {};
                            var5 = _closure1_slot12;
                            var4 = _closure1_slot17;
                            var3 = {};
                            var7 = function() {
                                var2 = _closure2_slot2;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var3.onClose = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.content = var3;
                            var3 = 'AgeVerificationSpeakerActionSheet';
                            var0.key = var3;
                            var0 = var1.bind(var2)(var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var11.bind(var12)(var0, var10);
                var0 = 45;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCanRaiseHand;
                var0 = var0.bind(var1)(var2);
                var5 = !var0;
                if (!var5) {
                    _fun90816_ip = 265;
                    continue _fun90816
                }
            case 262:
                var5 = !var9;
            case 265:
                var2 = _closure1_slot12;
                var1 = _closure1_slot2;
                var10 = _closure1_slot3;
                var0 = 11;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ToggledActionButton;
                var0 = {};
                var11 = _closure1_slot0;
                var14 = _closure1_slot3;
                var10 = 12;
                var12 = var14[var10];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.t;
                if (var9) {
                    _fun90816_ip = 359;
                    continue _fun90816
                }
            case 344:
                var10 = var11.hLbG5N;
                var10 = var12.bind(var13)(var10);
                _fun90816_ip = 372;
                continue _fun90816;
            case 359:
                var11 = var11.GCimTk;
                var10 = var12.bind(var13)(var11);
            case 372:
                var0.accessibilityLabel = var10;
                var0.isActive = var9;
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var9 = 46;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var0.source = var9;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                if (var8) {
                    _fun90816_ip = 436;
                    continue _fun90816
                }
            case 416:
                var8 = 48;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.HandRequestSpeakIcon;
                _fun90816_ip = 454;
                continue _fun90816;
            case 436:
                var9 = 47;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var8 = var9.HandRequestDenyIcon;
            case 454:
                var0.IconComponent = var8;
                if (var5) {
                    _fun90816_ip = 470;
                    continue _fun90816
                }
            case 461:
                var6 = function() { // Environment: var6
                    _fun90819: for (var _fun90819_ip = 0;;) switch (_fun90819_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun90819_ip = 22;
                                continue _fun90819
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun90819_ip = 93;
                            continue _fun90819;
                        case 22:
                            var1 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var0 = 40;
                            var0 = var6[var0];
                            var5 = undefined;
                            var2 = var1.bind(var5)(var0);
                            var1 = var2.showAgeVerificationGetStartedModal;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = 41;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.AgeVerificationModalEntryPoint;
                            var3 = var3.STAGE_CHANNEL_RAISE_HAND;
                            var0.entryPoint = var3;
                            var0 = var1.bind(var2)(var0);
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                _fun90816_ip = 474;
                continue _fun90816;
            case 470:
                var6 = _closure1_slot11;
            case 474:
                var0.onPress = var6;
                var0.appearsDisabled = var5;
                var0.isSmallSize = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RequestToSpeakButton = var5;
    var5 = function arg0() {
        _fun90820: for (var _fun90820_ip = 0;;) switch (_fun90820_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.channel;
                var _closure2_slot0 = var7;
                var5 = var1.isSmallSize;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 15;
                var1 = var3[var1];
                var11 = var2.bind(var4)(var1);
                var10 = var11.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = var7.id;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot8;
                    var4 = var3.getUnreadCount;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.unreadCount = var2;
                    var2 = var3.getMentionCount;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.mentionCount = var1;
                    return var0;
                };
                var1 = var10.bind(var11)(var9, var1, var6);
                var11 = var1.unreadCount;
                var10 = var1.mentionCount;
                var1 = 49;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var1 = var6.useIsVoiceChannelLocked;
                var6 = var1.bind(var6)(var7);
                var _closure2_slot1 = var6;
                var1 = 50;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useVoiceChatNavigationContext;
                var2 = var1.bind(var2)();
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun90820_ip = 172;
                    continue _fun90820
                }
            case 166:
                var1 = var2.openChat;
            case 172:
                _closure2_slot2 = var1;
                var7 = function() {
                    _fun90822: for (var _fun90822_ip = 0;;) switch (_fun90822_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun90822_ip = 20;
                                continue _fun90822
                            }
                        case 10:
                            var3 = _closure2_slot2;
                            var2 = null;
                            var1 = var2 == var3;
                        case 20:
                            if (var1) {
                                _fun90822_ip = 33;
                                continue _fun90822
                            }
                        case 23:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = 0;
                if (!(!(var10 > var9))) {
                    _fun90820_ip = 388;
                    continue _fun90820
                }
            case 192:
                if (!(!(var11 > var9))) {
                    _fun90820_ip = 388;
                    continue _fun90820
                }
            case 199:
                var2 = _closure1_slot12;
                var1 = _closure1_slot2;
                var13 = _closure1_slot3;
                var0 = 11;
                var0 = var13[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.ActionButton;
                var0 = {};
                var3 = {};
                var12 = _closure1_slot1;
                var14 = 10;
                var14 = var13[var14];
                var14 = var12.bind(var4)(var14);
                var14 = var14.unsafe_rawColors;
                var14 = var14.WHITE;
                var3.tintColor = var14;
                var0.imageStyle = var3;
                var14 = _closure1_slot0;
                var3 = 12;
                var15 = var13[var3];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var3 = var13[var3];
                var3 = var14.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.ZXxLQg;
                var3 = var15.bind(var16)(var3);
                var0.accessibilityLabel = var3;
                var3 = 51;
                var3 = var13[var3];
                var3 = var14.bind(var4)(var3);
                var3 = var3.ChatIcon;
                var0.IconComponent = var3;
                var3 = 52;
                var3 = var13[var3];
                var3 = var12.bind(var4)(var3);
                var0.source = var3;
                var0.onPress = var7;
                var0.appearsDisabled = var6;
                var0.isSmallSize = var5;
                var0 = var2.bind(var4)(var1, var0);
                _fun90820_ip = 597;
                continue _fun90820;
            case 388:
                var3 = _closure1_slot12;
                var2 = _closure1_slot2;
                var12 = _closure1_slot3;
                var1 = 11;
                var1 = var12[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.NotifiedActionButton;
                var1 = {};
                if (!(var10 > var9)) {
                    _fun90820_ip = 427;
                    continue _fun90820
                }
            case 424:
                var11 = var10;
            case 427:
                var1.notifications = var11;
                var9 = var10 > var9;
                var1.isMentioned = var9;
                var11 = {};
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var12 = 10;
                var12 = var10[var12];
                var12 = var9.bind(var4)(var12);
                var12 = var12.unsafe_rawColors;
                var12 = var12.WHITE;
                var11.tintColor = var12;
                var1.imageStyle = var11;
                var11 = _closure1_slot0;
                var8 = 12;
                var12 = var10[var8];
                var12 = var11.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var10[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.ZXxLQg;
                var8 = var12.bind(var13)(var8);
                var1.accessibilityLabel = var8;
                var8 = 51;
                var8 = var10[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.ChatIcon;
                var1.IconComponent = var8;
                var8 = 52;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var1.source = var8;
                var1.onPress = var7;
                var1.appearsDisabled = var6;
                var1.isSmallSize = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 597:
                return var0;
        }
    };
    var2.ChatButton = var5;
    var2.AnimatedPrompt = var4;
    var4 = function arg0() {
        _fun90823: for (var _fun90823_ip = 0;;) switch (_fun90823_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.channel;
                var8 = var1.style;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 55;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStageChannelStartEvent;
                var1 = var10.id;
                var1 = var2.bind(var3)(var1);
                var9 = var1.isLive;
                var _closure2_slot0 = var9;
                var7 = _closure1_slot5;
                var1 = var7.useState;
                var3 = false;
                var1 = var1.bind(var7)(var3);
                var13 = _closure1_slot4;
                var12 = 2;
                var2 = var13.bind(var4)(var1, var12);
                var1 = 0;
                var6 = var2[var1];
                var _closure2_slot1 = var6;
                var11 = 1;
                var2 = var2[var11];
                var _closure2_slot2 = var2;
                var2 = var7.useState;
                var2 = var2.bind(var7)(var3);
                var3 = var13.bind(var4)(var2, var12);
                var2 = var3[var1];
                var _closure2_slot3 = var2;
                var3 = var3[var11];
                var _closure2_slot4 = var3;
                var3 = var7.useState;
                var3 = var3.bind(var7)(var9);
                var3 = var13.bind(var4)(var3, var12);
                var1 = var3[var1];
                var _closure2_slot5 = var1;
                var3 = var3[var11];
                var _closure2_slot6 = var3;
                var11 = var7.useEffect;
                var3 = new Array(3);
                var3[0] = var9;
                var3[1] = var6;
                var3[2] = var2;
                var2 = function() { // Environment: var0
                    _fun90824: for (var _fun90824_ip = 0;;) switch (_fun90824_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun90824_ip = 66;
                                continue _fun90824
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun90824_ip = 39;
                                continue _fun90824
                            }
                        case 17:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun90824_ip = 39;
                                continue _fun90824
                            }
                        case 24:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            _fun90824_ip = 66;
                            continue _fun90824;
                        case 39:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun90824_ip = 50;
                                continue _fun90824
                            }
                        case 46:
                            var1 = _closure2_slot1;
                        case 50:
                            if (!var1) {
                                _fun90824_ip = 66;
                                continue _fun90824
                            }
                        case 53:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var7)(var2, var3);
                var11 = var7.useEffect;
                var3 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 400;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = new Array(0);
                var2 = var11.bind(var7)(var3, var2);
                var3 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var9;
                var2[1] = var6;
                var2[2] = var1;
                var0 = function() { // Environment: var0
                    _fun90828: for (var _fun90828_ip = 0;;) switch (_fun90828_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun90828_ip = 68;
                                continue _fun90828
                            }
                        case 12:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun90828_ip = 68;
                                continue _fun90828
                            }
                        case 19:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun90828_ip = 68;
                                continue _fun90828
                            }
                        case 26:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot6;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 400;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var7)(var0, var2);
                var0 = null;
                if (var1) {
                    _fun90823_ip = 329;
                    continue _fun90823
                }
            case 275:
                var3 = _closure1_slot12;
                var2 = _closure1_slot20;
                var1 = {};
                var1.show = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot21;
                var5 = {};
                var5.channel = var10;
                var5.isLive = var9;
                var5.style = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 329:
                return var0;
        }
    };
    var2.AnimatedStartStagePrompt = var4;
    var2.StartStagePrompt = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var4 = var0.style;
        var0 = _closure1_slot14;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var0 = 56;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.FormCTA;
        var0 = {};
        var9 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 58;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.connectAndOpen;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var9;
        var9 = _closure1_slot1;
        var6 = 57;
        var6 = var8[var6];
        var6 = var9.bind(var3)(var6);
        var0.iconSource = var6;
        var6 = var5.iconStyle;
        var0.iconStyle = var6;
        var5 = var5.iconContainerStyle;
        var0.iconContainerStyle = var5;
        var0.style = var4;
        var4 = 12;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["7vb2cc"];
        var5 = var6.bind(var9)(var5);
        var0.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.lyCW4E;
        var4 = var5.bind(var6)(var4);
        var0.subtitle = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.JoinStagePrompt = var3;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.onContinue;
        var0 = _closure1_slot14;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var17 = _closure1_slot0;
        var14 = _closure1_slot3;
        var0 = 59;
        var0 = var14[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var5 = 'button';
        var0.accessibilityRole = var5;
        var0.onPress = var4;
        var6 = _closure1_slot13;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = var15.continueContainer;
        var4.style = var7;
        var8 = _closure1_slot12;
        var7 = {};
        var9 = 60;
        var9 = var14[var9];
        var9 = var17.bind(var3)(var9);
        var11 = var9.LegacyText;
        var9 = {};
        var12 = var15.continueText;
        var9.style = var12;
        var12 = 12;
        var13 = var14[var12];
        var13 = var17.bind(var3)(var13);
        var16 = var13.intl;
        var13 = var16.string;
        var12 = var14[var12];
        var12 = var17.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["jMLfp/"];
        var12 = var13.bind(var16)(var12);
        var9.children = var12;
        var9 = var8.bind(var3)(var11, var9);
        var7.children = var9;
        var8 = var8.bind(var3)(var5, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var9 = _closure1_slot12;
        var8 = {};
        var13 = _closure1_slot1;
        var12 = 61;
        var10 = var14[var12];
        var11 = var13.bind(var3)(var10);
        var10 = {};
        var15 = var15.continueIcon;
        var10.style = var15;
        var15 = 62;
        var15 = var14[var15];
        var15 = var13.bind(var3)(var15);
        var10.source = var15;
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.Sizes;
        var12 = var12.SMALL;
        var10.size = var12;
        var12 = true;
        var10.disableColor = var12;
        var10 = var9.bind(var3)(var11, var10);
        var8.children = var10;
        var8 = var9.bind(var3)(var5, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ContinueToStagePrompt = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3944, 11722, 4241, 660, 33, 1297, 671, 7943, 1234, 11723, 5996, 566, 11724, 11725, 11726, 11727, 8469, 11729, 6541, 10968, 11730, 5989, 8915, 5785, 11415, 5721, 3279, 11731, 1307, 11739, 11740, 6030, 1568, 5232, 3938, 4090, 6009, 4561, 11742, 11042, 4253, 11743, 6542, 11744, 11746, 11748, 8124, 4814, 11749, 3717, 4087, 8221, 5441, 5994, 5988, 4880, 4852, 4092, 10353, 2]);