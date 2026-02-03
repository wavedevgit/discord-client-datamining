// modules/stage_channels/native/modals/StartStageChannelModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var0 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var1 = _closure1_slot11;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun67141: for (var _fun67141_ip = 0;;) switch (_fun67141_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var0 = _closure1_slot16;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = null;
                var1 = var0 != var1;
                if (var1) {
                    _fun67141_ip = 234;
                    continue _fun67141
                }
            case 33:
                var3 = _closure1_slot14;
                var2 = _closure1_slot7;
                var1 = {};
                var7 = var6.contentContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.contentTopSpacing;
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot14;
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var5 = 12;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var9 = 'button';
                var5.accessibilityRole = var9;
                var9 = 13;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.cpT0Cq;
                var9 = var10.bind(var11)(var9);
                var5.accessibilityLabel = var9;
                var9 = _closure1_slot17;
                var5.onPress = var9;
                var10 = _closure1_slot14;
                var12 = _closure1_slot1;
                var8 = 14;
                var8 = var13[var8];
                var9 = var12.bind(var4)(var8);
                var8 = {};
                var11 = 15;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var8.source = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 234:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun67142: for (var _fun67142_ip = 0;;) switch (_fun67142_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guild;
                var0 = _closure1_slot16;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var5)) {
                    _fun67142_ip = 104;
                    continue _fun67142
                }
            case 27:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 17;
                var0 = var8[var6];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var7 = var7.guildIcon;
                var0.style = var7;
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.GuildIconSizes;
                var6 = var6.LARGE;
                var0.size = var6;
                var0.guild = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun67142_ip = 136;
                continue _fun67142;
            case 104:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 16;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 136:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var1 = function arg0() {
        _fun67143: for (var _fun67143_ip = 0;;) switch (_fun67143_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.sendStartNotification;
                var5 = var0.onToggle;
                var0 = _closure1_slot16;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var17 = _closure1_slot0;
                var14 = _closure1_slot3;
                var0 = 18;
                var0 = var14[var0];
                var6 = var17.bind(var3)(var0);
                var2 = var6.useStateFromStores;
                var0 = 19;
                var0 = var14[var0];
                var0 = var17.bind(var3)(var0);
                var0 = var0.HotspotStore;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 19;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.HotspotStore;
                    var1 = var2.hasHotspot;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.HotspotLocations;
                    var0 = var0.LIVE_STAGE_NOTIFICATION_BADGE;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot14;
                var10 = 20;
                var0 = var14[var10];
                var0 = var17.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var6 = var19.notificationToggle;
                var0.DEPRECATED_style = var6;
                var9 = _closure1_slot15;
                var8 = _closure1_slot7;
                var6 = {};
                var11 = var19.label;
                var6.style = var11;
                var13 = _closure1_slot14;
                var10 = var14[var10];
                var10 = var17.bind(var3)(var10);
                var11 = var10.FormLabel;
                var10 = {};
                var22 = 13;
                var15 = var14[var22];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var22];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.BYJgew;
                var14 = var15.bind(var16)(var14);
                var10.text = var14;
                var11 = var13.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = null;
                if (!var12) {
                    _fun67143_ip = 383;
                    continue _fun67143
                }
            case 244:
                var14 = _closure1_slot14;
                var13 = _closure1_slot7;
                var12 = {};
                var15 = var19.pill;
                var12.style = var15;
                var17 = _closure1_slot14;
                var21 = _closure1_slot0;
                var18 = _closure1_slot3;
                var15 = 21;
                var15 = var18[var15];
                var15 = var21.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-xxs/bold',
                    'color': 'always-white'
                };
                var19 = var19.pillLabel;
                var15.style = var19;
                var19 = var18[var22];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var22];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.y2b7CA;
                var18 = var19.bind(var20)(var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 383:
                var10[1] = var11;
                var6.children = var10;
                var6 = var9.bind(var3)(var8, var6);
                var0.label = var6;
                var0.onPress = var5;
                var6 = _closure1_slot14;
                var5 = _closure1_slot1;
                var8 = _closure1_slot3;
                var4 = 22;
                var4 = var8[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.selected = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var14.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var16 = 1;
    var4 = var6[var16];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var11 = 2;
    var4 = var6[var11];
    var7 = var7.bind(var0)(var4);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.View;
    var _closure1_slot7 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var14.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.MAX_STAGE_TOPIC_LENGTH;
    var _closure1_slot10 = var8;
    var4 = var4.START_STAGE_CHANNEL_EVENT_MODAL_KEY;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildScheduledEventPrivacyLevel;
    var _closure1_slot13 = var4;
    var17 = 8;
    var4 = var6[var17];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10.flex = var16;
    var4.keyboardAwareView = var10;
    var10 = {};
    var13 = 10;
    var10.right = var13;
    var4.closeButtonContainer = var10;
    var10 = {};
    var10.flex = var16;
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var15;
    var4.container = var10;
    var10 = {};
    var15 = 16;
    var10.paddingHorizontal = var15;
    var4.contentContainer = var10;
    var10 = {};
    var10.paddingTop = var15;
    var4.contentTopSpacing = var10;
    var18 = 'center';
    var10 = {
        'alignItems': 'center',
        'paddingBottom': 24
    };
    var4.header = var10;
    var10 = {
        'marginTop': 16,
        'marginBottom': 8
    };
    var4.headerTitle = var10;
    var10 = {};
    var10.textAlign = var18;
    var4.headerSubtitle = var10;
    var10 = {
        'padding': 12,
        'width': '100%',
        'borderRadius': null,
        'backgroundColor': null,
        'marginBottom': 16
    };
    var18 = var6[var13];
    var18 = var14.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.xs;
    var10.borderRadius = var18;
    var18 = var6[var13];
    var18 = var14.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var18;
    var4.textInput = var10;
    var10 = {};
    var10.marginTop = var15;
    var4.startButton = var10;
    var10 = {};
    var10.paddingTop = var17;
    var4.error = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingVertical': 10,
        'marginLeft': 4294967280
    };
    var4.navigationBarContainer = var10;
    var10 = {};
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_DEFAULT;
    var10.tintColor = var17;
    var4.privacyIcon = var10;
    var10 = {};
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var17;
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var10.borderRadius = var17;
    var4.privacyGroup = var10;
    var10 = {
        'color': null,
        'fontSize': 12,
        'lineHeight': 16
    };
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_MUTED;
    var10.color = var17;
    var4.optionSubLabel = var10;
    var10 = {
        'lineHeight': 16,
        'paddingTop': 8
    };
    var4.optionExplanation = var10;
    var10 = {};
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var10.borderBottomColor = var17;
    var10.borderBottomWidth = var16;
    var4.bottomDivider = var10;
    var10 = {};
    var16 = var6[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var10.borderRadius = var16;
    var4.guildIcon = var10;
    var10 = {
        'height': 24,
        'width': 24
    };
    var4.backArrowIcon = var10;
    var10 = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var4.label = var10;
    var10 = {
        'backgroundColor': null,
        'paddingHorizontal': 4,
        'paddingVertical': 2,
        'marginStart': 8
    };
    var16 = var6[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BRAND;
    var10.backgroundColor = var16;
    var16 = var6[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var10.borderRadius = var16;
    var4.pill = var10;
    var10 = {};
    var16 = 'uppercase';
    var10.textTransform = var16;
    var4.pillLabel = var10;
    var10 = {};
    var10.marginTop = var15;
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var15;
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10.borderRadius = var15;
    var4.notificationToggle = var10;
    var10 = {};
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var10.marginBottom = var15;
    var4.ageVerificationNotice = var10;
    var10 = {};
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var10.backgroundColor = var15;
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10.borderRadius = var13;
    var10.paddingHorizontal = var12;
    var10.paddingVertical = var11;
    var4.notificationPill = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var3
        _fun67145: for (var _fun67145_ip = 0;;) switch (_fun67145_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.guild;
                var1 = var0.channel;
                var2 = var0.onStageStarted;
                var _closure2_slot0 = var2;
                var0 = var0.onClose;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var0 = _closure1_slot16;
                var10 = var0.bind(var4)();
                var6 = _closure1_slot6;
                var3 = var6.useImperativeHandle;
                var2 = arg1;
                var0 = function() { // Environment: var22
                    var0 = {};
                    var1 = function() {
                        var0 = _closure1_slot16;
                        var3 = undefined;
                        var7 = var0.bind(var3)();
                        var2 = _closure1_slot14;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var0 = 23;
                        var0 = var6[var0];
                        var1 = var5.bind(var3)(var0);
                        var0 = {};
                        var7 = var7.closeButtonContainer;
                        var0.style = var7;
                        var7 = 'button';
                        var0.accessibilityRole = var7;
                        var9 = _closure1_slot0;
                        var4 = 13;
                        var7 = var6[var4];
                        var7 = var9.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var4 = var6[var4];
                        var4 = var9.bind(var3)(var4);
                        var4 = var4.t;
                        var4 = var4.cpT0Cq;
                        var4 = var7.bind(var8)(var4);
                        var0.accessibilityLabel = var4;
                        var4 = 15;
                        var4 = var6[var4];
                        var4 = var5.bind(var3)(var4);
                        var0.source = var4;
                        var4 = _closure2_slot1;
                        var0.onPress = var4;
                        var4 = true;
                        var0.disableColor = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.renderRightButton = var1;
                    return var0;
                };
                var0 = var3.bind(var6)(var2, var0);
                var0 = var6.useState;
                var1 = var0.bind(var6)(var1);
                var0 = _closure1_slot5;
                var9 = 2;
                var0 = var0.bind(var4)(var1, var9);
                var5 = 0;
                var11 = var0[var5];
                var _closure2_slot2 = var11;
                var3 = 1;
                var26 = var0[var3];
                var2 = var6.useMemo;
                var0 = var11.id;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var22
                    var2 = _closure1_slot9;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot2;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var2.bind(var6)(var0, var1);
                var _closure2_slot3 = var20;
                var2 = var6.useState;
                var1 = null;
                var0 = var1 == var20;
                var7 = undefined;
                if (var0) {
                    _fun67145_ip = 225;
                    continue _fun67145
                }
            case 219:
                var7 = var20.topic;
            case 225:
                var13 = var1 != var7;
                var18 = '';
                var0 = var18;
                if (!var13) {
                    _fun67145_ip = 242;
                    continue _fun67145
                }
            case 239:
                var0 = var7;
            case 242:
                var2 = var2.bind(var6)(var0);
                var0 = _closure1_slot5;
                var0 = var0.bind(var4)(var2, var9);
                var16 = var0[var5];
                _closure2_slot4 = var16;
                var24 = var0[var3];
                _closure2_slot5 = var24;
                var0 = _closure1_slot13;
                var0 = var0.GUILD_ONLY;
                var7 = _closure1_slot6;
                var6 = var7.useState;
                var2 = var1 == var20;
                var13 = undefined;
                if (var2) {
                    _fun67145_ip = 307;
                    continue _fun67145
                }
            case 301:
                var13 = var20.privacy_level;
            case 307:
                var2 = var0;
                if (!(var1 != var13)) {
                    _fun67145_ip = 317;
                    continue _fun67145
                }
            case 314:
                var2 = var13;
            case 317:
                var2 = var6.bind(var7)(var2);
                var6 = _closure1_slot5;
                var2 = var6.bind(var4)(var2, var9);
                var17 = var2[var5];
                _closure2_slot6 = var17;
                var2 = var2[var3];
                _closure2_slot7 = var2;
                var7 = _closure1_slot6;
                var13 = var7.useState;
                var2 = false;
                var2 = var13.bind(var7)(var2);
                var2 = var6.bind(var4)(var2, var9);
                var15 = var2[var5];
                var2 = var2[var3];
                _closure2_slot8 = var2;
                var2 = var7.useState;
                var2 = var2.bind(var7)(var1);
                var2 = var6.bind(var4)(var2, var9);
                var14 = var2[var5];
                var2 = var2[var3];
                _closure2_slot9 = var2;
                var7 = _closure1_slot0;
                var13 = _closure1_slot3;
                var6 = 24;
                var2 = var13[var6];
                var19 = var7.bind(var4)(var2);
                var2 = var19.useCanSendStageStartNotification;
                var2 = var2.bind(var19)(var11);
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.useDefaultSendStartStageNotificationToggle;
                var19 = var6.bind(var7)(var11);
                var7 = var1 == var20;
                if (!var7) {
                    _fun67145_ip = 471;
                    continue _fun67145
                }
            case 468:
                var7 = var2;
            case 471:
                _closure2_slot10 = var7;
                var13 = _closure1_slot6;
                var6 = var13.useState;
                var2 = var7;
                if (!var2) {
                    _fun67145_ip = 493;
                    continue _fun67145
                }
            case 490:
                var2 = var19;
            case 493:
                var6 = var6.bind(var13)(var2);
                var2 = _closure1_slot5;
                var2 = var2.bind(var4)(var6, var9);
                var23 = var2[var5];
                _closure2_slot11 = var23;
                var2 = var2[var3];
                _closure2_slot12 = var2;
                var9 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 18;
                var2 = var6[var2];
                var13 = var9.bind(var4)(var2);
                var5 = var13.useStateFromStores;
                var2 = 19;
                var2 = var6[var2];
                var2 = var9.bind(var4)(var2);
                var2 = var2.HotspotStore;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var22
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 19;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.HotspotStore;
                    var1 = var2.hasHotspot;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.HotspotLocations;
                    var0 = var0.LIVE_STAGE_NOTIFICATION_BADGE;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var13)(var3, var2);
                _closure2_slot13 = var2;
                var2 = {};
                var2.stageInstance = var20;
                var2.privacyDefault = var0;
                _closure2_slot14 = var2;
                var5 = _closure1_slot6;
                var0 = var5.useRef;
                var0 = var0.bind(var5)(var2);
                _closure2_slot15 = var0;
                var2 = var5.useEffect;
                var0 = function() { // Environment: var22
                    var1 = _closure2_slot15;
                    var0 = _closure2_slot14;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var5)(var0);
                var3 = var5.useEffect;
                var0 = var11.id;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var22
                    _fun67151: for (var _fun67151_ip = 0;;) switch (_fun67151_ip) {
                        case 0:
                            var0 = _closure2_slot15;
                            var0 = var0.current;
                            var1 = var0.stageInstance;
                            var5 = var0.privacyDefault;
                            var4 = _closure2_slot7;
                            var3 = null;
                            var7 = var3 == var1;
                            var0 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun67151_ip = 47;
                                continue _fun67151
                            }
                        case 41:
                            var6 = var1.privacy_level;
                        case 47:
                            if (!(var3 != var6)) {
                                _fun67151_ip = 54;
                                continue _fun67151
                            }
                        case 51:
                            var5 = var6;
                        case 54:
                            var4 = var4.bind(var0)(var5);
                            if (!(var3 != var1)) {
                                _fun67151_ip = 78;
                                continue _fun67151
                            }
                        case 63:
                            var2 = _closure2_slot5;
                            var1 = var1.topic;
                            var1 = var2.bind(var0)(var1);
                        case 78:
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0, var2);
                var2 = _closure1_slot1;
                var0 = 25;
                var0 = var6[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var11, var20, var17);
                var27 = var0.helpText;
                var0 = var0.publicDisabled;
                _closure2_slot16 = var0;
                var0 = 26;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = function() { // Environment: var22
                    _fun67152: for (var _fun67152_ip = 0;;) switch (_fun67152_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 27;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot12;
                            var2 = var1.START_STAGE_OPENED;
                            var1 = {};
                            var7 = _closure2_slot3;
                            var6 = null;
                            var7 = var6 == var7;
                            var6 = undefined;
                            if (var7) {
                                _fun67152_ip = 69;
                                continue _fun67152
                            }
                        case 60:
                            var7 = _closure2_slot3;
                            var6 = var7.id;
                        case 69:
                            var1.stage_instance_id = var6;
                            var6 = _closure2_slot16;
                            var6 = !var6;
                            var1.can_start_public_stage = var6;
                            var5 = _closure2_slot2;
                            var5 = var5.guild_id;
                            var1.guild_id = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0);
                var0 = function() { // Environment: var22
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun67155: for (var _fun67155_ip = 0;;) switch (_fun67155_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun67155_ip = 450;
                                        continue _fun67155
                                    }
                                case 10:
                                    var3 = _closure2_slot4;
                                    var2 = '';
                                    if (!(var2 !== var3)) {
                                        _fun67155_ip = 445;
                                        continue _fun67155
                                    }
                                case 28:
                                    var2 = _closure2_slot6;
                                    var6 = null;
                                    if (!(var6 != var2)) {
                                        _fun67155_ip = 445;
                                        continue _fun67155
                                    }
                                case 41:
                                    var4 = _closure2_slot8;
                                    var3 = undefined;
                                    var2 = true;
                                    var2 = var4.bind(var3)(var2);
                                    var2 = _closure2_slot9;
                                    var2 = var2.bind(var3)(var6);
                                    var5 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var4 = 28;
                                    var4 = var7[var4];
                                    var5 = var5.bind(var3)(var4);
                                    var4 = var5.dismissGlobalKeyboard;
                                    var4 = var4.bind(var5)();
                                case 96: // try_start_0
                                    var4 = _closure2_slot3;
                                    if (!(var6 == var4)) {
                                        _fun67155_ip = 247;
                                        continue _fun67155
                                    }
                                case 107:
                                    var5 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var4 = 29;
                                    var4 = var7[var4];
                                    var10 = var5.bind(var3)(var4);
                                    var9 = var10.startStage;
                                    var14 = _closure2_slot2;
                                    var13 = _closure2_slot4;
                                    var12 = _closure2_slot6;
                                    var11 = _closure2_slot11;
                                    var15 = var10;
                                    var4 = var15[var9](var14, var13, var12, var11, var10);
                                    SaveGenerator(address = 160);
                                case 158:
                                    return var4;
                                case 160:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun67155_ip = 244;
                                        continue _fun67155
                                    }
                                case 166:
                                    var7 = _closure2_slot10;
                                    var5 = var7;
                                    if (!var7) {
                                        _fun67155_ip = 180;
                                        continue _fun67155
                                    }
                                case 176:
                                    var5 = _closure2_slot13;
                                case 180:
                                    if (!var5) {
                                        _fun67155_ip = 302;
                                        continue _fun67155
                                    }
                                case 183:
                                    var7 = _closure1_slot2;
                                    var10 = _closure1_slot3;
                                    var5 = 30;
                                    var5 = var10[var5];
                                    var8 = var7.bind(var3)(var5);
                                    var7 = var8.hideHotspot;
                                    var9 = _closure1_slot0;
                                    var5 = 19;
                                    var5 = var10[var5];
                                    var5 = var9.bind(var3)(var5);
                                    var5 = var5.HotspotLocations;
                                    var5 = var5.LIVE_STAGE_NOTIFICATION_BADGE;
                                    var5 = var7.bind(var8)(var5);
                                    _fun67155_ip = 302;
                                    continue _fun67155;
                                case 244: // try_end0
                                    return var4;
                                case 247: // try_start_1
                                    var5 = _closure1_slot2;
                                    var7 = _closure1_slot3;
                                    var4 = 29;
                                    var4 = var7[var4];
                                    var9 = var5.bind(var3)(var4);
                                    var8 = var9.editStage;
                                    var7 = _closure2_slot2;
                                    var5 = _closure2_slot4;
                                    var4 = _closure2_slot6;
                                    var4 = var8.bind(var9)(var7, var5, var4);
                                    SaveGenerator(address = 296);
                                case 294:
                                    return var4;
                                case 296:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun67155_ip = 371;
                                        continue _fun67155
                                    }
                                case 302:
                                    var7 = _closure2_slot8;
                                    var5 = false;
                                    var5 = var7.bind(var3)(var5);
                                    var5 = _closure2_slot9;
                                    var5 = var5.bind(var3)(var6);
                                    var5 = _closure2_slot1;
                                    if (!(var6 == var5)) {
                                        _fun67155_ip = 340;
                                        continue _fun67155
                                    }
                                case 330:
                                    var5 = _closure1_slot17;
                                    var5 = var5.bind(var3)();
                                    _fun67155_ip = 348;
                                    continue _fun67155;
                                case 340:
                                    var5 = _closure2_slot1;
                                    var5 = var5.bind(var3)();
                                case 348:
                                    var5 = _closure2_slot0;
                                    if (!(var6 != var5)) {
                                        _fun67155_ip = 369;
                                        continue _fun67155
                                    }
                                case 356:
                                    var6 = _closure2_slot0;
                                    var5 = _closure2_slot2;
                                    var5 = var6.bind(var3)(var5);
                                case 369: // try_end1
                                    _fun67155_ip = 445;
                                    continue _fun67155;
                                case 371:
                                    return var4;
                                case 374: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 5);
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var2 = 31;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var3)(var2);
                                    var2 = var2.APIError;
                                    var4 = var2.prototype;
                                    var4 = Object.create(var4, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var15 = var4;
                                    var14 = var5;
                                    var2 = new var15[var2](var14, var13);
                                    var4 = var2 instanceof Object ? var2 : var4;
                                    var2 = _closure2_slot9;
                                    var2 = var2.bind(var3)(var4);
                                    var2 = _closure2_slot8;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                case 445:
                                    var1 = undefined;
                                    return var1;
                                case 450:
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
                var19 = var0.bind(var4)();
                var3 = _closure1_slot15;
                var2 = _closure1_slot7;
                var0 = {};
                var5 = var10.header;
                var0.style = var5;
                var21 = _closure1_slot14;
                var13 = _closure1_slot19;
                var5 = {};
                var5.guild = var12;
                var13 = var21.bind(var4)(var13, var5);
                var5 = new Array(3);
                var5[0] = var13;
                var21 = _closure1_slot14;
                var13 = 21;
                var6 = var6[var13];
                var6 = var9.bind(var4)(var6);
                var9 = var6.Text;
                var6 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var25 = var10.headerTitle;
                var6.style = var25;
                if (!(var1 != var20)) {
                    _fun67145_ip = 903;
                    continue _fun67145
                }
            case 846:
                var30 = _closure1_slot0;
                var31 = _closure1_slot3;
                var25 = 13;
                var28 = var31[var25];
                var28 = var30.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var25 = var31[var25];
                var25 = var30.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25["5BKP4y"];
                var25 = var28.bind(var29)(var25);
                _fun67145_ip = 958;
                continue _fun67145;
            case 903:
                var31 = _closure1_slot0;
                var32 = _closure1_slot3;
                var28 = 13;
                var29 = var32[var28];
                var29 = var31.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var32[var28];
                var28 = var31.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.DDF0cJ;
                var25 = var29.bind(var30)(var28);
            case 958:
                var6.children = var25;
                var6 = var21.bind(var4)(var9, var6);
                var5[1] = var6;
                var21 = _closure1_slot14;
                var9 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var13];
                var6 = var9.bind(var4)(var6);
                var9 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var25 = var10.headerSubtitle;
                var6.style = var25;
                if (!(var1 != var20)) {
                    _fun67145_ip = 1085;
                    continue _fun67145
                }
            case 1028:
                var30 = _closure1_slot0;
                var31 = _closure1_slot3;
                var25 = 13;
                var28 = var31[var25];
                var28 = var30.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var25 = var31[var25];
                var25 = var30.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25["I+9bLx"];
                var25 = var28.bind(var29)(var25);
                _fun67145_ip = 1140;
                continue _fun67145;
            case 1085:
                var31 = _closure1_slot0;
                var32 = _closure1_slot3;
                var28 = 13;
                var29 = var32[var28];
                var29 = var31.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var32[var28];
                var28 = var31.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.bqQIwa;
                var25 = var29.bind(var30)(var28);
            case 1140:
                var6.children = var25;
                var6 = var21.bind(var4)(var9, var6);
                var5[2] = var6;
                var0.children = var5;
                var6 = var3.bind(var4)(var2, var0);
                var3 = _closure1_slot15;
                var2 = _closure1_slot8;
                var0 = {
                    'keyboardShouldPersistTaps': 'handled',
                    'showsVerticalScrollIndicator': false,
                    'alwaysBounceVertical': false
                };
                var5 = var10.container;
                var0.style = var5;
                var9 = var10.contentContainer;
                var5 = new Array(2);
                var5[0] = var9;
                var21 = var1 != var12;
                var9 = null;
                if (!var21) {
                    _fun67145_ip = 1224;
                    continue _fun67145
                }
            case 1218:
                var9 = var10.contentTopSpacing;
            case 1224:
                var5[1] = var9;
                var0.contentContainerStyle = var5;
                var5 = new Array(9);
                var5[0] = var6;
                var21 = _closure1_slot14;
                var9 = _closure1_slot1;
                var29 = _closure1_slot3;
                var6 = 32;
                var6 = var29[var6];
                var9 = var9.bind(var4)(var6);
                var6 = {};
                var28 = _closure1_slot0;
                var25 = 13;
                var30 = var29[var25];
                var30 = var28.bind(var4)(var30);
                var32 = var30.intl;
                var31 = var32.string;
                var30 = var29[var25];
                var30 = var28.bind(var4)(var30);
                var30 = var30.t;
                var30 = var30["5FPBOB"];
                var30 = var31.bind(var32)(var30);
                var6.children = var30;
                var6 = var21.bind(var4)(var9, var6);
                var5[1] = var6;
                var21 = _closure1_slot14;
                var6 = 20;
                var6 = var29[var6];
                var6 = var28.bind(var4)(var6);
                var9 = var6.FormInput;
                var6 = {
                    'style': null,
                    'showBorder': false,
                    'showTopContainer': false,
                    'multiline': false
                };
                var30 = var10.textInput;
                var6.style = var30;
                var30 = _closure1_slot10;
                var6.maxLength = var30;
                var6.value = var16;
                var30 = var29[var25];
                var30 = var28.bind(var4)(var30);
                var32 = var30.intl;
                var31 = var32.string;
                var30 = var29[var25];
                var30 = var28.bind(var4)(var30);
                var30 = var30.t;
                var30 = var30.ZwWruY;
                var30 = var31.bind(var32)(var30);
                var6.placeholder = var30;
                var6.onChange = var24;
                var24 = true;
                var6.autoFocus = var24;
                var24 = 33;
                var24 = var29[var24];
                var24 = var28.bind(var4)(var24);
                var24 = var24.ClearButtonVisibility;
                var24 = var24.WITH_CONTENT;
                var6.clearButtonVisibility = var24;
                var6 = var21.bind(var4)(var9, var6);
                var5[2] = var6;
                var6 = var1 != var27;
                if (!var6) {
                    _fun67145_ip = 1562;
                    continue _fun67145
                }
            case 1500:
                var24 = _closure1_slot14;
                var21 = _closure1_slot0;
                var9 = _closure1_slot3;
                var9 = var9[var13];
                var9 = var21.bind(var4)(var9);
                var21 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var28 = var10.optionExplanation;
                var9.style = var28;
                var9.children = var27;
                var6 = var24.bind(var4)(var21, var9);
            case 1562:
                var5[3] = var6;
                var6 = var1 != var12;
                if (!var6) {
                    _fun67145_ip = 1618;
                    continue _fun67145
                }
            case 1573:
                var24 = _closure1_slot14;
                var21 = _closure1_slot1;
                var27 = _closure1_slot3;
                var9 = 34;
                var9 = var27[var9];
                var21 = var21.bind(var4)(var9);
                var9 = {};
                var9.guild = var12;
                var9.channel = var11;
                var9.onChangeChannel = var26;
                var6 = var24.bind(var4)(var21, var9);
            case 1618:
                var5[4] = var6;
                var6 = null;
                if (!var7) {
                    _fun67145_ip = 1660;
                    continue _fun67145
                }
            case 1627:
                var21 = _closure1_slot14;
                var9 = _closure1_slot20;
                var7 = {};
                var7.sendStartNotification = var23;
                var22 = function() {
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dismissGlobalKeyboard;
                    var1 = var1.bind(var2)();
                    var2 = _closure2_slot12;
                    var1 = _closure2_slot11;
                    var1 = !var1;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7.onToggle = var22;
                var6 = var21.bind(var4)(var9, var7);
            case 1660:
                var5[5] = var6;
                var9 = _closure1_slot14;
                var7 = _closure1_slot1;
                var21 = _closure1_slot3;
                var6 = 35;
                var6 = var21[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var21 = _closure1_slot17;
                var6.onConfirmPress = var21;
                var21 = var10.ageVerificationNotice;
                var6.style = var21;
                var11 = var11.id;
                var6.channelId = var11;
                var6 = var9.bind(var4)(var7, var6);
                var5[6] = var6;
                var7 = var1 != var14;
                var6 = null;
                if (!var7) {
                    _fun67145_ip = 1808;
                    continue _fun67145
                }
            case 1737:
                var11 = _closure1_slot14;
                var9 = _closure1_slot0;
                var7 = _closure1_slot3;
                var7 = var7[var13];
                var7 = var9.bind(var4)(var7);
                var9 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-critical'
                };
                var13 = var10.error;
                var7.style = var13;
                var13 = var14.getAnyErrorMessage;
                var13 = var13.bind(var14)();
                var7.children = var13;
                var6 = var11.bind(var4)(var9, var7);
            case 1808:
                var5[7] = var6;
                var9 = _closure1_slot14;
                var7 = _closure1_slot7;
                var6 = {};
                var11 = var10.startButton;
                var6.style = var11;
                var14 = _closure1_slot14;
                var13 = _closure1_slot0;
                var21 = _closure1_slot3;
                var11 = 36;
                var11 = var21[var11];
                var11 = var13.bind(var4)(var11);
                var13 = var11.Button;
                var11 = {};
                if (!(var1 != var20)) {
                    _fun67145_ip = 1922;
                    continue _fun67145
                }
            case 1868:
                var23 = _closure1_slot0;
                var20 = _closure1_slot3;
                var21 = var20[var25];
                var21 = var23.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var20[var25];
                var20 = var23.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.K344S7;
                var20 = var21.bind(var22)(var20);
                _fun67145_ip = 1974;
                continue _fun67145;
            case 1922:
                var24 = _closure1_slot0;
                var21 = _closure1_slot3;
                var22 = var21[var25];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var25];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.s8mM8A;
                var20 = var22.bind(var23)(var21);
            case 1974:
                var11.text = var20;
                var11.onPress = var19;
                var16 = var18 === var16;
                if (var16) {
                    _fun67145_ip = 1993;
                    continue _fun67145
                }
            case 1989:
                var16 = var1 == var17;
            case 1993:
                var11.disabled = var16;
                var11.loading = var15;
                var11 = var14.bind(var4)(var13, var11);
                var6.children = var11;
                var6 = var9.bind(var4)(var7, var6);
                var5[8] = var6;
                var0.children = var5;
                var9 = var3.bind(var4)(var2, var0);
                var0 = var9;
                if (!(var1 == var12)) {
                    _fun67145_ip = 2175;
                    continue _fun67145
                }
            case 2042:
                var3 = _closure1_slot14;
                var2 = _closure1_slot0;
                var11 = _closure1_slot3;
                var1 = 37;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SafeAreaPaddingView;
                var1 = {
                    'top': true,
                    'bottom': true
                };
                var5 = var10.container;
                var1.style = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot1;
                var5 = 38;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var10 = var10.keyboardAwareView;
                var5.style = var10;
                var11 = _closure1_slot14;
                var10 = _closure1_slot18;
                var8 = {};
                var8.guild = var12;
                var10 = var11.bind(var4)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 2175:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/modals/StartStageChannelModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.NotificationToggle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1377, 4231, 660, 1378, 33, 1297, 671, 4557, 4897, 1234, 4077, 6662, 5922, 7388, 566, 8314, 5373, 3932, 4913, 6774, 8318, 8319, 4094, 795, 1582, 5911, 8317, 3341, 5925, 5402, 8320, 5926, 4075, 4729, 5767, 2]);