// modules/stage_channels/native/components/StageActionBarButtons.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var8;
    var4 = function arg0() {
        _fun67571: for (var _fun67571_ip = 0;;) switch (_fun67571_ip) {
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
                    _fun67573: for (var _fun67573_ip = 0;;) switch (_fun67573_ip) {
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
                                _fun67573_ip = 47;
                                continue _fun67573
                            }
                        case 45:
                            var4 = 0;
                        case 47:
                            var3 = _closure1_slot17;
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
                                _fun67573_ip = 95;
                                continue _fun67573
                            }
                        case 92:
                            var2 = 1;
                        case 95:
                            var1 = _closure1_slot17;
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
                var12 = _closure1_slot17;
                var11.actionBarAnimationConfig = var12;
                var2.__closure = var11;
                var11 = 5255980384921.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot18;
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
                    _fun67571_ip = 239;
                    continue _fun67571
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
    var _closure1_slot19 = var4;
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
            _fun67575: for (var _fun67575_ip = 0;;) switch (_fun67575_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun67575_ip = 50;
                        continue _fun67575
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
    var _closure1_slot20 = var3;
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
    var5 = var12.bind(var0)(var5);
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
    var5 = var12.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var14 = 4;
    var5 = var8[var14];
    var5 = var12.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var12.bind(var0)(var5);
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
    var6 = var5.jsx;
    var _closure1_slot12 = var6;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 9;
    var6 = var8[var5];
    var10 = var7.bind(var0)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var13 = 'relative';
    var11.position = var13;
    var6.actionBarCTAContainer = var11;
    var13 = {};
    var11 = 10;
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var13.tintColor = var15;
    var6.imageStyle = var13;
    var13 = {
        'tintColor': null,
        'width': 20,
        'height': 20
    };
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var13.tintColor = var15;
    var6.iconStyle = var13;
    var13 = {};
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var13.backgroundColor = var15;
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var13.borderRadius = var15;
    var13.padding = var14;
    var6.iconContainerStyle = var13;
    var13 = 'center';
    var14 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var6.continueContainer = var14;
    var14 = {
        'color': null,
        'fontSize': 14,
        'lineHeight': 18
    };
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BLUE_345;
    var14.color = var15;
    var6.continueText = var14;
    var14 = {};
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BLUE_345;
    var14.tintColor = var15;
    var6.continueIcon = var14;
    var14 = {};
    var15 = var8[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.ICON_FEEDBACK_CRITICAL;
    var14.tintColor = var15;
    var6.ageVerificationIcon = var14;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot14 = var6;
    var5 = var8[var5];
    var9 = var7.bind(var0)(var5);
    var6 = var9.createStyles;
    var5 = {};
    var10 = {};
    var14 = var8[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10.paddingVertical = var14;
    var14 = var8[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var10.gap = var14;
    var5.container = var10;
    var10 = {};
    var10.alignItems = var13;
    var5.header = var10;
    var10 = {
        'width': 120,
        'height': 120
    };
    var5.headerImage = var10;
    var10 = {};
    var14 = var8[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10.gap = var14;
    var5.content = var10;
    var10 = {};
    var10.textAlign = var13;
    var5.title = var10;
    var10 = {};
    var10.textAlign = var13;
    var5.body = var10;
    var10 = {};
    var11 = var8[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10.gap = var11;
    var5.footer = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot15 = var5;
    var5 = function arg0() {
        var0 = arg0;
        var0 = var0.onClose;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot15;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var17 = _closure1_slot3;
        var0 = 35;
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
        var0 = 36;
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
        var10 = _closure1_slot12;
        var7 = 37;
        var7 = var17[var7];
        var7 = var16.bind(var3)(var7);
        var8 = var7.TrafficConeSpotIllustration;
        var7 = {
            'width': 120,
            'height': 120
        };
        var7 = var10.bind(var3)(var8, var7);
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
    var _closure1_slot16 = var5;
    var6 = {
        'mass': 1,
        'stiffness': 100,
        'damping': 30,
        'overshootClamping': false,
        'restSpeedThreshold': 0.01,
        'restDisplacementThreshold': 0.01
    };
    var _closure1_slot17 = var6;
    var6 = {};
    var9 = 'function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}';
    var6.code = var9;
    var _closure1_slot18 = var6;
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
        _fun67581: for (var _fun67581_ip = 0;;) switch (_fun67581_ip) {
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
                    _fun67581_ip = 348;
                    continue _fun67581
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
                    _fun67581_ip = 211;
                    continue _fun67581
                }
            case 198:
                var10 = var11.zqxfrf;
                var10 = var12.bind(var13)(var10);
                _fun67581_ip = 222;
                continue _fun67581;
            case 211:
                var11 = var11.ScHlfl;
                var10 = var12.bind(var13)(var11);
            case 222:
                var1.accessibilityLabel = var10;
                var11 = _closure1_slot1;
                var13 = _closure1_slot3;
                if (var8) {
                    _fun67581_ip = 246;
                    continue _fun67581
                }
            case 237:
                var10 = 18;
                var10 = var13[var10];
                _fun67581_ip = 253;
                continue _fun67581;
            case 246:
                var12 = 17;
                var10 = var13[var12];
            case 253:
                var10 = var11.bind(var4)(var10);
                var1.source = var10;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                if (var8) {
                    _fun67581_ip = 293;
                    continue _fun67581
                }
            case 273:
                var8 = 20;
                var8 = var11[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.MusicIcon;
                _fun67581_ip = 311;
                continue _fun67581;
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
            _fun67585: for (var _fun67585_ip = 0;;) switch (_fun67585_ip) {
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
                        _fun67585_ip = 77;
                        continue _fun67585
                    }
                case 48:
                    var2 = 26;
                    var2 = var4[var2];
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.handleDisconnect;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var2);
                    _fun67585_ip = 104;
                    continue _fun67585;
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
        _fun67586: for (var _fun67586_ip = 0;;) switch (_fun67586_ip) {
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
                    _fun67586_ip = 318;
                    continue _fun67586
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
                _fun67586_ip = 512;
                continue _fun67586;
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
        _fun67588: for (var _fun67588_ip = 0;;) switch (_fun67588_ip) {
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
                    _fun67589: for (var _fun67589_ip = 0;;) switch (_fun67589_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun67589_ip = 17;
                                continue _fun67589
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var0 = !var1;
                        case 17:
                            if (!var0) {
                                _fun67589_ip = 102;
                                continue _fun67589
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
                            var4 = _closure1_slot16;
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
                    _fun67588_ip = 265;
                    continue _fun67588
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
                    _fun67588_ip = 359;
                    continue _fun67588
                }
            case 344:
                var10 = var11.hLbG5N;
                var10 = var12.bind(var13)(var10);
                _fun67588_ip = 372;
                continue _fun67588;
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
                    _fun67588_ip = 436;
                    continue _fun67588
                }
            case 416:
                var8 = 48;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.HandRequestSpeakIcon;
                _fun67588_ip = 454;
                continue _fun67588;
            case 436:
                var9 = 47;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var8 = var9.HandRequestDenyIcon;
            case 454:
                var0.IconComponent = var8;
                if (var5) {
                    _fun67588_ip = 470;
                    continue _fun67588
                }
            case 461:
                var6 = function() { // Environment: var6
                    _fun67591: for (var _fun67591_ip = 0;;) switch (_fun67591_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun67591_ip = 22;
                                continue _fun67591
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun67591_ip = 93;
                            continue _fun67591;
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
                _fun67588_ip = 474;
                continue _fun67588;
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
        _fun67592: for (var _fun67592_ip = 0;;) switch (_fun67592_ip) {
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
                    _fun67592_ip = 172;
                    continue _fun67592
                }
            case 166:
                var1 = var2.openChat;
            case 172:
                _closure2_slot2 = var1;
                var7 = function() {
                    _fun67594: for (var _fun67594_ip = 0;;) switch (_fun67594_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun67594_ip = 20;
                                continue _fun67594
                            }
                        case 10:
                            var3 = _closure2_slot2;
                            var2 = null;
                            var1 = var2 == var3;
                        case 20:
                            if (var1) {
                                _fun67594_ip = 33;
                                continue _fun67594
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
                    _fun67592_ip = 388;
                    continue _fun67592
                }
            case 192:
                if (!(!(var11 > var9))) {
                    _fun67592_ip = 388;
                    continue _fun67592
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
                _fun67592_ip = 597;
                continue _fun67592;
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
                    _fun67592_ip = 427;
                    continue _fun67592
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
        _fun67595: for (var _fun67595_ip = 0;;) switch (_fun67595_ip) {
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
                    _fun67596: for (var _fun67596_ip = 0;;) switch (_fun67596_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun67596_ip = 66;
                                continue _fun67596
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun67596_ip = 39;
                                continue _fun67596
                            }
                        case 17:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun67596_ip = 39;
                                continue _fun67596
                            }
                        case 24:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            _fun67596_ip = 66;
                            continue _fun67596;
                        case 39:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun67596_ip = 50;
                                continue _fun67596
                            }
                        case 46:
                            var1 = _closure2_slot1;
                        case 50:
                            if (!var1) {
                                _fun67596_ip = 66;
                                continue _fun67596
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
                    _fun67600: for (var _fun67600_ip = 0;;) switch (_fun67600_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun67600_ip = 68;
                                continue _fun67600
                            }
                        case 12:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun67600_ip = 68;
                                continue _fun67600
                            }
                        case 19:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun67600_ip = 68;
                                continue _fun67600
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
                    _fun67595_ip = 329;
                    continue _fun67595
                }
            case 275:
                var3 = _closure1_slot12;
                var2 = _closure1_slot19;
                var1 = {};
                var1.show = var6;
                var7 = _closure1_slot12;
                var6 = _closure1_slot20;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3906, 8363, 4199, 660, 33, 1297, 671, 7867, 1234, 8364, 5878, 566, 8365, 8373, 8374, 8375, 7736, 8377, 6412, 8378, 8380, 5874, 8163, 5688, 8371, 5624, 3237, 8381, 1307, 8393, 8394, 1568, 5171, 5924, 3900, 4043, 5894, 4519, 8396, 8397, 4211, 8398, 6413, 8399, 8401, 8403, 7958, 4801, 8404, 3679, 4040, 8054, 5340, 5890, 5873, 4865, 4839, 4045, 8405, 2]);