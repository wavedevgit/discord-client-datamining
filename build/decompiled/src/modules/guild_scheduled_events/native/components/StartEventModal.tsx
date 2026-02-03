// modules/guild_scheduled_events/native/components/StartEventModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.onClose;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot12;
        var2 = _closure1_slot6;
        var1 = {};
        var12 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 12;
        var4 = var11[var0];
        var0 = undefined;
        var4 = var12.bind(var0)(var4);
        var5 = var4.PressableOpacity;
        var4 = {};
        var8 = 'button';
        var4.accessibilityRole = var8;
        var8 = 13;
        var9 = var11[var8];
        var9 = var12.bind(var0)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var11[var8];
        var8 = var12.bind(var0)(var8);
        var8 = var8.t;
        var8 = var8.cpT0Cq;
        var8 = var9.bind(var10)(var8);
        var4.accessibilityLabel = var8;
        var7 = function() {
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.onPress = var7;
        var8 = _closure1_slot12;
        var10 = _closure1_slot1;
        var6 = 14;
        var6 = var11[var6];
        var7 = var10.bind(var0)(var6);
        var6 = {};
        var9 = 15;
        var9 = var11[var9];
        var9 = var10.bind(var0)(var9);
        var6.source = var9;
        var6 = var8.bind(var0)(var7, var6);
        var4.children = var6;
        var4 = var3.bind(var0)(var5, var4);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.event;
        var0 = _closure1_slot14;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot13;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var9.header;
        var0.style = var4;
        var12 = _closure1_slot12;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 16;
        var4 = var10[var5];
        var4 = var6.bind(var3)(var4);
        var11 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-lg/bold',
            'color': 'mobile-text-heading-primary'
        };
        var13 = var9.headerPrivacyLevel;
        var4.style = var13;
        var13 = 13;
        var14 = var10[var13];
        var14 = var6.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var10[var13];
        var13 = var6.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["q+fFJv"];
        var13 = var14.bind(var15)(var13);
        var4.children = var13;
        var11 = var12.bind(var3)(var11, var4);
        var4 = new Array(2);
        var4[0] = var11;
        var7 = _closure1_slot12;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-default'
        };
        var9 = var9.headerTitle;
        var5.style = var9;
        var8 = var8.name;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.event;
        var1 = _closure1_slot14;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 17;
        var0 = var6[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.event = var4;
        var4 = true;
        var0.hideControls = var4;
        var5 = var5.previewCard;
        var0.style = var5;
        var0.hideAgeVerificationNotice = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
    var _closure1_slot9 = var7;
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.START_EVENT_MODAL_KEY;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 10;
    var9.right = var10;
    var4.closeButtonContainer = var9;
    var9 = {};
    var9.flex = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.padding = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var4.mainContainer = var9;
    var12 = 'center';
    var9 = {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'alignContent': 'center'
    };
    var4.container = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9.gap = var13;
    var4.headerContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var4.footerContainer = var9;
    var9 = {};
    var9.alignSelf = var12;
    var4.center = var9;
    var9 = {};
    var9.alignItems = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.paddingTop = var12;
    var4.header = var9;
    var9 = {
        'lineHeight': 24,
        'textAlign': 'center'
    };
    var4.headerTitle = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.gap = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var4.buttonContainer = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var12;
    var4.icon = var9;
    var9 = {
        'borderColor': null,
        'backgroundColor': null,
        'shadowColor': '#000',
        'shadowOpacity': 0.2,
        'shadowRadius': 16
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var12 = {
        'height': 8,
        'width': 0
    };
    var9.shadowOffset = var12;
    var4.previewCard = var9;
    var9 = {
        'textAlign': 'center',
        'lineHeight': 18
    };
    var4.headerPrivacyLevel = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var10;
    var4.previewPrivacyText = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/StartEventModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun67101: for (var _fun67101_ip = 0;;) switch (_fun67101_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.event;
                var _closure2_slot0 = var25;
                var0 = var0.onCloseActionSheet;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot14;
                var16 = var0.bind(var3)();
                var0 = var25.guild_id;
                var _closure2_slot2 = var0;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 18;
                var0 = var5[var1];
                var7 = var2.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var22
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var6.bind(var7)(var4, var0);
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var1;
                var4 = new Array(1);
                var4[0] = var25;
                var1 = function() { // Environment: var22
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var7.bind(var8)(var6, var1, var4);
                var1 = 19;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useManageResourcePermissions;
                var18 = null;
                if (!(var18 != var4)) {
                    _fun67101_ip = 192;
                    continue _fun67101
                }
            case 189:
                var0 = var4;
            case 192:
                var0 = var1.bind(var2)(var0);
                var0 = var0.canManageGuildEvent;
                var0 = var0.bind(var3)(var25);
                _closure2_slot3 = var0;
                var1 = var25.entity_type;
                var0 = _closure1_slot10;
                var0 = var0.STAGE_INSTANCE;
                var14 = var1 === var0;
                var1 = _closure1_slot5;
                var0 = var1.useState;
                var0 = var0.bind(var1)(var14);
                var6 = _closure1_slot4;
                var5 = 2;
                var0 = var6.bind(var3)(var0, var5);
                var2 = 0;
                var23 = var0[var2];
                _closure2_slot4 = var23;
                var1 = 1;
                var0 = var0[var1];
                _closure2_slot5 = var0;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 20;
                var0 = var4[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var6.bind(var3)(var0, var5);
                var2 = var0[var2];
                _closure2_slot6 = var2;
                var0 = var0[var1];
                var20 = var0.loading;
                var24 = var0.error;
                var7 = function() {
                    _fun67104: for (var _fun67104_ip = 0;;) switch (_fun67104_ip) {
                        case 0:
                            var2 = arguments[0];
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun67104_ip = 11;
                                continue _fun67104
                            }
                        case 9:
                            var2 = false;
                        case 11:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 11;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.popWithKey;
                            var1 = _closure1_slot11;
                            var1 = var3.bind(var4)(var1);
                            var4 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun67104_ip = 71;
                                continue _fun67104
                            }
                        case 62:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 71:
                            return var0;
                    }
                };
                _closure2_slot7 = var7;
                var0 = function() { // Environment: var22
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun67107: for (var _fun67107_ip = 0;;) switch (_fun67107_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun67107_ip = 87;
                                        continue _fun67107
                                    }
                                case 7:
                                    var2 = _closure2_slot3;
                                    if (var2) {
                                        _fun67107_ip = 32;
                                        continue _fun67107
                                    }
                                case 17:
                                    var4 = _closure2_slot7;
                                    var3 = undefined;
                                    var2 = false;
                                    var2 = var4.bind(var3)(var2);
                                    _fun67107_ip = 79;
                                    continue _fun67107;
                                case 32:
                                    var5 = _closure2_slot6;
                                    var4 = _closure2_slot0;
                                    var3 = _closure2_slot4;
                                    var2 = {};
                                    var1 = function() {
                                        var2 = _closure2_slot7;
                                        var1 = undefined;
                                        var0 = true;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var2.onSuccess = var1;
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var4, var3, var2);
                                    SaveGenerator(address = 73);
                                case 71:
                                    return var1;
                                case 73:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun67107_ip = 84;
                                        continue _fun67107
                                    }
                                case 79:
                                    var2 = undefined;
                                    return var2;
                                case 84:
                                    return var1;
                                case 87:
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
                var21 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var1 = _closure1_slot0;
                var0 = 21;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {
                    'top': true,
                    'bottom': true
                };
                var4 = var16.mainContainer;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot15;
                var4 = {};
                var4.onClose = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var16.container;
                var5.style = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot6;
                var8 = {};
                var11 = var16.headerContainer;
                var8.style = var11;
                var13 = _closure1_slot12;
                var12 = _closure1_slot16;
                var11 = {};
                var11.event = var25;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var15 = _closure1_slot12;
                var13 = _closure1_slot17;
                var12 = {};
                var12.event = var25;
                var12 = var15.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot13;
                var10 = _closure1_slot6;
                var9 = {};
                var12 = var16.footerContainer;
                var9.style = var12;
                var15 = _closure1_slot9;
                var13 = var15.has;
                var12 = var25.entity_type;
                var13 = var13.bind(var15)(var12);
                if (!var13) {
                    _fun67101_ip = 625;
                    continue _fun67101
                }
            case 584:
                var19 = _closure1_slot12;
                var15 = _closure1_slot1;
                var26 = _closure1_slot2;
                var12 = 22;
                var12 = var26[var12];
                var15 = var15.bind(var3)(var12);
                var12 = {};
                var25 = var25.channel_id;
                var12.channelId = var25;
                var13 = var19.bind(var3)(var15, var12);
            case 625:
                var12 = new Array(3);
                var12[0] = var13;
                var13 = null;
                if (!var14) {
                    _fun67101_ip = 693;
                    continue _fun67101
                }
            case 638:
                var19 = _closure1_slot12;
                var15 = _closure1_slot0;
                var25 = _closure1_slot2;
                var14 = 23;
                var14 = var25[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.NotificationToggle;
                var14 = {};
                var14.sendStartNotification = var23;
                var22 = function() {
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var14.onToggle = var22;
                var13 = var19.bind(var3)(var15, var14);
            case 693:
                var12[1] = var13;
                var15 = _closure1_slot13;
                var14 = _closure1_slot6;
                var13 = {};
                var16 = var16.buttonContainer;
                var13.style = var16;
                var16 = var18 != var24;
                var18 = null;
                if (!var16) {
                    _fun67101_ip = 789;
                    continue _fun67101
                }
            case 726:
                var22 = _closure1_slot12;
                var19 = _closure1_slot0;
                var23 = _closure1_slot2;
                var16 = 16;
                var16 = var23[var16];
                var16 = var19.bind(var3)(var16);
                var19 = var16.Text;
                var16 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-critical'
                };
                var23 = var24.getAnyErrorMessage;
                var23 = var23.bind(var24)();
                var16.children = var23;
                var18 = var22.bind(var3)(var19, var16);
            case 789:
                var16 = new Array(2);
                var16[0] = var18;
                var19 = _closure1_slot12;
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var17 = 24;
                var17 = var26[var17];
                var17 = var25.bind(var3)(var17);
                var18 = var17.Button;
                var17 = {};
                var22 = 'active';
                var17.variant = var22;
                var22 = 13;
                var23 = var26[var22];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.cK1GGY;
                var22 = var23.bind(var24)(var22);
                var17.text = var22;
                var17.onPress = var21;
                var17.disabled = var20;
                var17.loading = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[2] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.PreviewEventCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1372, 1410, 1378, 8091, 33, 1297, 671, 4557, 4897, 1234, 4077, 6662, 3932, 8308, 566, 8084, 8310, 4729, 5926, 8313, 4075, 2]);