// modules/icymi/native/ReplyRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.jsxs;
    var _closure1_slot9 = var6;
    var3 = var3.Fragment;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var2 = arg0;
        var0 = {};
        var1 = {};
        var3 = 1;
        var1.height = var3;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 7;
        var8 = var7[var4];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.colors;
        var8 = var8.BORDER_SUBTLE;
        var1.backgroundColor = var8;
        var8 = var2.margin;
        var1.marginBottom = var8;
        var8 = '100%';
        var1.width = var8;
        var0.separator = var1;
        var1 = {
            'flex': 1,
            'alignItems': 'center',
            'justifyContent': 'center',
            'flexDirection': 'row'
        };
        var8 = var2.margin;
        var1.marginHorizontal = var8;
        var8 = var2.margin;
        var1.marginBottom = var8;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var1.gap = var8;
        var0.container = var1;
        var1 = {
            'flexGrow': 1,
            'flexBasis': 0
        };
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_40;
        var1.height = var8;
        var0.buttonContainer = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between'
        };
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var1.gap = var8;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_40;
        var1.height = var8;
        var0.feedbackContainer = var1;
        var1 = {
            'width': 20,
            'height': 20
        };
        var0.icon = var1;
        var1 = {};
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.colors;
        var8 = var8.BUTTON_OUTLINE_PRIMARY_TEXT;
        var1.tintColor = var8;
        var0.feedbackButtonIcon = var1;
        var1 = {};
        var1.flex = var3;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var1.borderRadius = var8;
        var0.input = var1;
        var1 = {
            'borderRadius': 20,
            'width': '100%',
            'minHeight': 40,
            'backgroundColor': null,
            'justifyContent': 'center'
        };
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.colors;
        var8 = var8.REDESIGN_CHAT_INPUT_BACKGROUND;
        var1.backgroundColor = var8;
        var0.contentInventoryPressable = var1;
        var1 = {
            'marginLeft': null,
            'marginRight': 10,
            'paddingVertical': null,
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var8 = var2.margin;
        var1.marginLeft = var8;
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var1.paddingVertical = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.spacing;
        var4 = var4.PX_4;
        var1.gap = var4;
        var0.contentInventoryContainer = var1;
        var1 = {};
        var1.flexShrink = var3;
        var0.contentInventoryText = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var3 = var2.inset;
        var1.marginLeft = var3;
        var2 = var2.margin;
        var1.marginTop = var2;
        var0.replyContainer = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ReplyRow.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: ContentInventoryReplyRow, environment: var1
        var0 = arg0;
        var13 = var0.reactText;
        var7 = var0.onReply;
        var0 = _closure1_slot11;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var11.replyContainer;
        var0.style = var4;
        var10 = _closure1_slot0;
        var12 = _closure1_slot2;
        var4 = 8;
        var4 = var12[var4];
        var4 = var10.bind(var3)(var4);
        var5 = var4.PressableOpacity;
        var4 = {};
        var8 = 'button';
        var4.accessibilityRole = var8;
        var4.onPress = var7;
        var7 = var11.contentInventoryPressable;
        var4.style = var7;
        var4.accessibilityLabel = var13;
        var7 = 'box-only';
        var4.pointerEvents = var7;
        var7 = _closure1_slot9;
        var6 = {};
        var8 = var11.contentInventoryContainer;
        var6.style = var8;
        var8 = 9;
        var8 = var12[var8];
        var8 = var10.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-md/medium',
            'color': 'input-placeholder-text-default',
            'lineClamp': 1
        };
        var14 = var11.contentInventoryText;
        var8.style = var14;
        var8.children = var13;
        var9 = var2.bind(var3)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = 10;
        var9 = var12[var9];
        var9 = var10.bind(var3)(var9);
        var10 = var9.ReactionIcon;
        var9 = {};
        var11 = var11.icon;
        var9.style = var11;
        var11 = 'custom';
        var9.size = var11;
        var9 = var2.bind(var3)(var10, var9);
        var8[1] = var9;
        var6.children = var8;
        var6 = var7.bind(var3)(var1, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ContentInventoryReplyRow = var3;
    var1 = function(arg0) { // Original name: GeneratedCandidateReplyRow, environment: var1
        _fun104847: for (var _fun104847_ip = 0;;) switch (_fun104847_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.item;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot11;
                var3 = undefined;
                var19 = var1.bind(var3)();
                var4 = _closure1_slot5;
                var2 = var4.useState;
                var1 = false;
                var6 = var2.bind(var4)(var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var3)(var6, var1);
                var1 = 0;
                var15 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot1 = var1;
                var6 = var4.useMemo;
                var1 = var5.content_id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun104848: for (var _fun104848_ip = 0;;) switch (_fun104848_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getDehydratedItems;
                            var8 = var0.bind(var1)();
                            var0 = var8.length;
                            var10 = 0;
                            var1 = var10 < var0;
                            var0 = 0;
                            if (!var1) {
                                _fun104848_ip = 165;
                                continue _fun104848
                            }
                        case 36:
                            var1 = var8[var10];
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var1 = var1.content_id;
                            var6 = 11;
                            var5 = undefined;
                            var4 = 0;
                            var3 = 0;
                            var0 = 0;
                            if (!(var2 !== var1)) {
                                _fun104848_ip = 165;
                                continue _fun104848
                            }
                        case 73:
                            var1 = var8[var3];
                            var2 = var1.type;
                            var10 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var6];
                            var1 = var10.bind(var5)(var1);
                            var1 = var1.ICYMIItemTypes;
                            var1 = var1.GENERATED_CANDIDATE;
                            var10 = var4;
                            if (!(var2 === var1)) {
                                _fun104848_ip = 121;
                                continue _fun104848
                            }
                        case 118:
                            var10 = var4 + 1;
                        case 121:
                            var3 = var3 + 1;
                            var1 = var8.length;
                            var0 = var10;
                            if (!(var3 < var1)) {
                                _fun104848_ip = 165;
                                continue _fun104848
                            }
                        case 136:
                            var1 = var8[var3];
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var1 = var1.content_id;
                            var4 = var10;
                            var0 = var4;
                            if (var2 !== var1) {
                                _fun104848_ip = 73;
                                continue _fun104848
                            }
                        case 165:
                            return var0;
                    }
                };
                var1 = var6.bind(var4)(var1, var2);
                var _closure2_slot2 = var1;
                var6 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var5;
                var1 = function(arg0) { // Environment: var0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 12;
                    var2 = var8[var0];
                    var0 = undefined;
                    var2 = var7.bind(var0)(var2);
                    var5 = var2.ICYMIAnalytics;
                    var4 = var5.trackGeneratedCandidateFeedback;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var3.item = var6;
                    var6 = arg0;
                    var3.isPositive = var6;
                    var6 = _closure2_slot2;
                    var3.generatedItemIndex = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot1;
                    var2 = true;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure1_slot1;
                    var1 = 13;
                    var1 = var8[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var4 = 'generated_candidate_feedback';
                    var1.key = var4;
                    var4 = 14;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.oBL7aH;
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var6.bind(var4)(var1, var2);
                var _closure2_slot3 = var1;
                var7 = var4.useCallback;
                var6 = new Array(1);
                var6[0] = var1;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var22 = var7.bind(var4)(var2, var6);
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16 = var6.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var2 = var6[var4];
                    var0 = undefined;
                    var11 = var5.bind(var0)(var2);
                    var10 = var11.itemInteracted;
                    var2 = _closure2_slot0;
                    var8 = var2.content_id;
                    var9 = 'generated_candidate';
                    var7 = 'press_share';
                    var7 = var10.bind(var11)(var8, var9, var7);
                    var4 = var6[var4];
                    var8 = var5.bind(var0)(var4);
                    var7 = var8.feedItemActioned;
                    var4 = {};
                    var10 = var2.content_id;
                    var4.itemId = var10;
                    var4.itemType = var9;
                    var9 = {
                        'actionGestureType': 'press',
                        'actionTargetElement': 'forward_button',
                        'actionIntentType': 'share',
                        'actionDestinationType': null
                    };
                    var4.actionParameters = var9;
                    var4 = var7.bind(var8)(var4);
                    var4 = 16;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.pushLazy;
                    var4 = _closure1_slot3;
                    var3 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun104854: for (var _fun104854_ip = 0;;) switch (_fun104854_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun104854_ip = 72;
                                        continue _fun104854
                                    }
                                case 7:
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = 18;
                                    var2 = var1[var2];
                                    var4 = undefined;
                                    var3 = var3.bind(var4)(var2);
                                    var2 = 17;
                                    var2 = var1[var2];
                                    var1 = var1.paths;
                                    var1 = var3.bind(var4)(var2, var1);
                                    SaveGenerator(address = 54);
                                case 52:
                                    return var1;
                                case 54:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun104854_ip = 69;
                                        continue _fun104854
                                    }
                                case 60:
                                    var2 = var1.GeneratedCandidateShareModal;
                                    return var2;
                                case 69:
                                    return var1;
                                case 72:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var15 = var4.bind(var0)(var3);
                    var3 = {};
                    var3.item = var2;
                    var1 = function() { // Original name: onShare, environment: var1
                        _fun104855: for (var _fun104855_ip = 0;;) switch (_fun104855_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 13;
                                var1 = var8[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.open;
                                var1 = {};
                                var4 = 'generated_candidate_share';
                                var1.key = var4;
                                var4 = _closure2_slot0;
                                var6 = var4.type;
                                var7 = _closure1_slot0;
                                var4 = 11;
                                var4 = var8[var4];
                                var4 = var7.bind(var0)(var4);
                                var4 = var4.GeneratedCandidateType;
                                var4 = var4.PRO_TIP;
                                if (!(var6 !== var4)) {
                                    _fun104855_ip = 146;
                                    continue _fun104855
                                }
                            case 87:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 14;
                                var6 = var9[var4];
                                var6 = var8.bind(var0)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var4 = var9[var4];
                                var4 = var8.bind(var0)(var4);
                                var4 = var4.t;
                                var4 = var4["2s7kEm"];
                                var4 = var6.bind(var7)(var4);
                                _fun104855_ip = 203;
                                continue _fun104855;
                            case 146:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 14;
                                var6 = var9[var5];
                                var6 = var8.bind(var0)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5["6+JeWa"];
                                var4 = var6.bind(var7)(var5);
                            case 203:
                                var1.content = var4;
                                var4 = function() { // Original name: icon, environment: var4
                                    _fun104856: for (var _fun104856_ip = 0;;) switch (_fun104856_ip) {
                                        case 0:
                                            var0 = _closure2_slot0;
                                            var2 = var0.type;
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var0 = 11;
                                            var0 = var4[var0];
                                            var4 = undefined;
                                            var0 = var3.bind(var4)(var0);
                                            var0 = var0.GeneratedCandidateType;
                                            var0 = var0.PRO_TIP;
                                            if (!(var2 !== var0)) {
                                                _fun104856_ip = 93;
                                                continue _fun104856
                                            }
                                        case 53:
                                            var3 = _closure1_slot8;
                                            var2 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var0 = 20;
                                            var0 = var5[var0];
                                            var0 = var2.bind(var4)(var0);
                                            var2 = var0.FireIcon;
                                            var0 = {};
                                            var0 = var3.bind(var4)(var2, var0);
                                            _fun104856_ip = 131;
                                            continue _fun104856;
                                        case 93:
                                            var3 = _closure1_slot8;
                                            var2 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 19;
                                            var1 = var5[var1];
                                            var1 = var2.bind(var4)(var1);
                                            var2 = var1.LightbulbIcon;
                                            var1 = {};
                                            var0 = var3.bind(var4)(var2, var1);
                                        case 131:
                                            return var0;
                                    }
                                };
                                var1.icon = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var3.onShare = var1;
                    var2 = {};
                    var1 = 'modal';
                    var2.presentation = var1;
                    var13 = 'GeneratedCandidateShareModal';
                    var16 = var6;
                    var14 = var3;
                    var12 = var2;
                    var1 = var16[var5](var15, var14, var13, var12, var11);
                    return var0;
                };
                var8 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var19.container;
                var0.style = var4;
                var6 = _closure1_slot8;
                var4 = {};
                var5 = var19.buttonContainer;
                var4.style = var5;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 21;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var7 = var5.Button;
                var5 = {};
                var10 = _closure1_slot1;
                var9 = 22;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var14 = var19.icon;
                var9.style = var14;
                var14 = 'custom';
                var9.size = var14;
                var9 = var6.bind(var3)(var10, var9);
                var5.icon = var9;
                var17 = 'tertiary';
                var5.variant = var17;
                var5.onPress = var8;
                var8 = 14;
                var9 = var13[var8];
                var9 = var12.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["zAa/E+"];
                var8 = var9.bind(var10)(var8);
                var5.text = var8;
                var5 = var6.bind(var3)(var7, var5);
                var4.children = var5;
                var5 = var6.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var19.feedbackContainer;
                var5.style = var7;
                var7 = null;
                if (var15) {
                    _fun104847_ip = 667;
                    continue _fun104847
                }
            case 438:
                var10 = _closure1_slot9;
                var9 = _closure1_slot10;
                var8 = {};
                var14 = _closure1_slot8;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 23;
                var11 = var21[var12];
                var11 = var18.bind(var3)(var11);
                var13 = var11.IconButton;
                var11 = {};
                var11.variant = var17;
                var20 = 24;
                var20 = var21[var20];
                var20 = var18.bind(var3)(var20);
                var24 = var20.ThumbsUpIcon;
                var23 = {};
                var20 = 'md';
                var23.size = var20;
                var25 = var19.feedbackButtonIcon;
                var23.style = var25;
                var23 = var14.bind(var3)(var24, var23);
                var11.icon = var23;
                var11.onPress = var22;
                var22 = 'Yes';
                var11.accessibilityLabel = var22;
                var11.disabled = var15;
                var13 = var14.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var12 = var21[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.IconButton;
                var12 = {};
                var12.variant = var17;
                var17 = 25;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.ThumbsDownIcon;
                var17 = {};
                var17.size = var20;
                var19 = var19.feedbackButtonIcon;
                var17.style = var19;
                var17 = var14.bind(var3)(var18, var17);
                var12.icon = var17;
                var12.onPress = var16;
                var16 = 'No';
                var12.accessibilityLabel = var16;
                var12.disabled = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 667:
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GeneratedCandidateReplyRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 8822, 33, 13557, 671, 4864, 3901, 7639, 6582, 8836, 3107, 1234, 8832, 4524, 13608, 1307, 13502, 7371, 4043, 8845, 7471, 13613, 13615, 2]);