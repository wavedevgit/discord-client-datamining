// modules/polls/native/PollCreation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun108320: for (var _fun108320_ip = 0;;) switch (_fun108320_ip) {
        case 0:
            var4 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                var0 = arg0;
                var7 = var0.onConfirm;
                var3 = _closure1_slot9;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 7;
                var0 = var15[var9];
                var2 = undefined;
                var0 = var14.bind(var2)(var0);
                var1 = var0.AlertModal;
                var0 = {};
                var8 = 8;
                var4 = var15[var8];
                var4 = var14.bind(var2)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var15[var8];
                var4 = var14.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.HMrgcp;
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var4 = var15[var8];
                var4 = var14.bind(var2)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var15[var8];
                var4 = var14.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4["Wxa/j8"];
                var4 = var5.bind(var6)(var4);
                var0.content = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot10;
                var4 = {};
                var13 = _closure1_slot9;
                var11 = var15[var9];
                var11 = var14.bind(var2)(var11);
                var12 = var11.AlertActionButton;
                var11 = {};
                var16 = var15[var8];
                var16 = var14.bind(var2)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var15[var8];
                var16 = var14.bind(var2)(var16);
                var16 = var16.t;
                var16 = var16.TzJA4g;
                var16 = var17.bind(var18)(var16);
                var11.text = var16;
                var11.onPress = var7;
                var7 = 'confirm';
                var11 = var13.bind(var2)(var12, var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var11 = _closure1_slot9;
                var9 = var15[var9];
                var9 = var14.bind(var2)(var9);
                var10 = var9.AlertActionButton;
                var9 = {};
                var12 = 'secondary';
                var9.variant = var12;
                var12 = var15[var8];
                var12 = var14.bind(var2)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var8 = var15[var8];
                var8 = var14.bind(var2)(var8);
                var8 = var8.t;
                var8 = var8["2BR5R2"];
                var8 = var12.bind(var13)(var8);
                var9.text = var8;
                var8 = 'back';
                var8 = var11.bind(var2)(var10, var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var2)(var5, var4);
                var0.actions = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var _closure1_slot14 = var0;
            var0 = function arg0() {
                var0 = arg0;
                var7 = var0.onPress;
                var0 = _closure1_slot12;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var4 = var6.addAnswerButtonDefault;
                var2 = _closure1_slot9;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 10;
                var0 = var12[var8];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var10 = 11;
                var10 = var12[var10];
                var10 = var9.bind(var3)(var10);
                var0.source = var10;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.Sizes;
                var8 = var8.LARGE;
                var0.size = var8;
                var6 = var6.addAnswerIcon;
                var6 = var6.color;
                var0.color = var6;
                var6 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var0.onPress = var7;
                var0.style = var4;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var11 = _closure1_slot0;
                var8 = 8;
                var4 = var12[var8];
                var4 = var11.bind(var3)(var4);
                var9 = var4.intl;
                var7 = var9.string;
                var4 = var12[var8];
                var4 = var11.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.B2Uvme;
                var4 = var7.bind(var9)(var4);
                var0.accessibilityLabel = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var5 = 12;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.B2Uvme;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot15 = var0;
            var0 = function arg0() {
                var0 = arg0;
                var1 = var0.selectedDuration;
                var _closure2_slot0 = var1;
                var0 = var0.onChange;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 13;
                var0 = var8[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var7 = var0[var1];
                var2 = _closure1_slot9;
                var5 = _closure1_slot0;
                var0 = 17;
                var0 = var8[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var9 = 8;
                var10 = var8[var9];
                var10 = var5.bind(var3)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var8[var9];
                var10 = var5.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.bGHzxb;
                var10 = var11.bind(var12)(var10);
                var0.label = var10;
                var10 = var8[var9];
                var10 = var5.bind(var3)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var8[var9];
                var10 = var5.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.bGHzxb;
                var13 = var11.bind(var12)(var10);
                var10 = global;
                var10 = var10.HermesInternal;
                var12 = var10.concat;
                var11 = '';
                var10 = ' ';
                var10 = var12.bind(var11)(var13, var10, var7);
                var0.accessibilityLabel = var10;
                var10 = var8[var9];
                var10 = var5.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var8[var9];
                var9 = var5.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.A4PJ1o;
                var9 = var10.bind(var11)(var9);
                var0.accessibilityHint = var9;
                var6 = function() {
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var3 = var2[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var3);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot1;
                    var3 = 14;
                    var3 = var2[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = 16;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 15;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot8;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.selectedDuration = var7;
                    var6 = _closure2_slot1;
                    var1.onChange = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.onPress = var6;
                var6 = _closure1_slot9;
                var4 = 12;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-md/normal',
                    'color': 'text-muted'
                };
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var4 = true;
                var0.arrow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot16 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var6 = var5[var0];
            var3 = arg3;
            var0 = undefined;
            var7 = var3.bind(var0)(var6);
            var _closure1_slot3 = var7;
            var12 = 1;
            var3 = var5[var12];
            var3 = var4.bind(var0)(var3);
            var6 = var3.TouchableOpacity;
            var _closure1_slot4 = var6;
            var6 = var3.View;
            var _closure1_slot5 = var6;
            var3 = var3.ScrollView;
            var _closure1_slot6 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.MAX_POLL_QUESTION_LENGTH;
            var _closure1_slot7 = var6;
            var3 = var3.POLL_CREATION_DURATION_ACTION_SHEET_KEY;
            var _closure1_slot8 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot9 = var6;
            var6 = var3.Fragment;
            var _closure1_slot10 = var6;
            var3 = var3.jsxs;
            var _closure1_slot11 = var3;
            var3 = 4;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var6 = var8.createStyles;
            var3 = {};
            var9 = {};
            var10 = 18;
            var9.paddingHorizontal = var10;
            var3.viewPadding = var9;
            var9 = {
                'paddingVertical': 20,
                'gap': 16
            };
            var3.scrollContainer = var9;
            var9 = {};
            var9.flex = var12;
            var3.container = var9;
            var9 = {};
            var10 = 5;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_BASE_LOW;
            var9.backgroundColor = var13;
            var9.flex = var12;
            var3.safeAreaContainer = var9;
            var14 = 10;
            var9 = {
                'flexDirection': 'row',
                'paddingHorizontal': 18,
                'paddingVertical': 10
            };
            var3.header = var9;
            var9 = {
                'flex': 0,
                'justifyContent': 'flex-start',
                'minWidth': 48,
                'paddingHorizontal': 0,
                'marginHorizontal': 0
            };
            var3.actionButton = var9;
            var9 = {};
            var13 = 'flex-end';
            var9.justifyContent = var13;
            var3.postButton = var9;
            var9 = {
                'textAlign': 'center',
                'flexGrow': 1
            };
            var3.title = var9;
            var9 = {};
            var13 = 14;
            var9.fontSize = var13;
            var3.label = var9;
            var9 = {
                'marginVertical': 20,
                'rowGap': 16
            };
            var3.answerInputsContainer = var9;
            var9 = {
                'paddingVertical': null,
                'paddingLeft': 14,
                'marginRight': 30,
                'display': 'flex',
                'flexDirection': 'row',
                'gap': 16,
                'alignItems': 'center',
                'justifyContent': 'flex-start'
            };
            var13 = 6;
            var13 = var5[var13];
            var15 = var4.bind(var0)(var13);
            var13 = var15.isAndroid;
            var15 = var13.bind(var15)();
            var13 = 8;
            if (!var15) {
                _fun108320_ip = 477;
                continue _fun108320
            }
        case 474:
            var13 = var14;
        case 477:
            var9.paddingVertical = var13;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.MESSAGE_BACKGROUND_HOVER;
            var9.backgroundColor = var13;
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.radii;
            var13 = var13.lg;
            var9.borderRadius = var13;
            var3.addAnswerButtonDefault = var9;
            var9 = {};
            var13 = var5[var10];
            var13 = var11.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_MUTED;
            var9.color = var13;
            var3.addAnswerIcon = var9;
            var9 = {};
            var9.borderTopWidth = var12;
            var10 = var5[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.INTERACTIVE_BACKGROUND_HOVER;
            var9.borderColor = var10;
            var3.pollConfigSection = var9;
            var3 = var6.bind(var8)(var3);
            var _closure1_slot12 = var3;
            var6 = var7.forwardRef;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun108325: for (var _fun108325_ip = 0;;) switch (_fun108325_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.onChange;
                        var5 = var0.onSubmitEditing;
                        var7 = var0.error;
                        var0 = null;
                        var9 = var0 != var7;
                        if (!var9) {
                            _fun108325_ip = 40;
                            continue _fun108325
                        }
                    case 29:
                        var1 = var7.length;
                        var0 = 0;
                        var9 = var1 > var0;
                    case 40:
                        var3 = _closure1_slot9;
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 9;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var12.bind(var2)(var0);
                        var1 = var0.TextInput;
                        var0 = {};
                        var10 = arg1;
                        var0.ref = var10;
                        var10 = 'center';
                        var0.textAlignVertical = var10;
                        var13 = 8;
                        var10 = var8[var13];
                        var10 = var12.bind(var2)(var10);
                        var14 = var10.intl;
                        var11 = var14.string;
                        var10 = var8[var13];
                        var10 = var12.bind(var2)(var10);
                        var10 = var10.t;
                        var10 = var10.WBiKnI;
                        var10 = var11.bind(var14)(var10);
                        var0.label = var10;
                        var10 = var8[var13];
                        var10 = var12.bind(var2)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var8 = var8[var13];
                        var8 = var12.bind(var2)(var8);
                        var8 = var8.t;
                        var8 = var8.WBiKnI;
                        var8 = var10.bind(var11)(var8);
                        var0.accessibilityLabel = var8;
                        var8 = undefined;
                        if (!var9) {
                            _fun108325_ip = 257;
                            continue _fun108325
                        }
                    case 197:
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var12 = var10[var13];
                        var12 = var11.bind(var2)(var12);
                        var14 = var12.intl;
                        var12 = var14.formatToPlainString;
                        var10 = var10[var13];
                        var10 = var11.bind(var2)(var10);
                        var10 = var10.t;
                        var11 = var10.jnq5Ho;
                        var10 = {};
                        var10.errorMessage = var7;
                        var8 = var12.bind(var14)(var11, var10);
                    case 257:
                        var0.accessibilityHint = var8;
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var10 = var8[var13];
                        var10 = var12.bind(var2)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var8 = var8[var13];
                        var8 = var12.bind(var2)(var8);
                        var8 = var8.t;
                        var8 = var8["/uQqJW"];
                        var8 = var10.bind(var11)(var8);
                        var0.placeholder = var8;
                        var0.onChange = var4;
                        var4 = true;
                        var0.isClearable = var4;
                        var8 = 'default';
                        if (!var9) {
                            _fun108325_ip = 344;
                            continue _fun108325
                        }
                    case 340:
                        var8 = 'error';
                    case 344:
                        var0.status = var8;
                        var0.errorMessage = var7;
                        var6 = _closure1_slot7;
                        var0.maxLength = var6;
                        var6 = 'next';
                        var0.returnKeyType = var6;
                        var6 = false;
                        var0.blurOnSubmit = var6;
                        var0.onSubmitEditing = var5;
                        var5 = 'none';
                        var0.textContentType = var5;
                        var0.autoFocus = var4;
                        var0.autoCorrect = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var3 = var6.bind(var7)(var3);
            var _closure1_slot13 = var3;
            var3 = 38;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/polls/native/PollCreation.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun108326: for (var _fun108326_ip = 0;;) switch (_fun108326_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.channel;
                        var _closure2_slot0 = var5;
                        var0 = var0.onCancel;
                        var _closure2_slot1 = var0;
                        var3 = undefined;
                        var _closure2_slot2 = var3;
                        var29 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var1 = 19;
                        var1 = var20[var1];
                        var2 = var29.bind(var3)(var1);
                        var1 = {};
                        var30 = _closure1_slot0;
                        var4 = 20;
                        var6 = var20[var4];
                        var6 = var30.bind(var3)(var6);
                        var6 = var6.ImpressionTypes;
                        var6 = var6.VIEW;
                        var1.type = var6;
                        var4 = var20[var4];
                        var4 = var30.bind(var3)(var4);
                        var4 = var4.ImpressionNames;
                        var4 = var4.POLL_EDITOR_VIEWED;
                        var1.name = var4;
                        var1 = var2.bind(var3)(var1);
                        var4 = _closure1_slot3;
                        var2 = var4.useEffect;
                        var1 = new Array(1);
                        var1[0] = var0;
                        var0 = function() { // Environment: var15
                            var0 = function() { // Environment: var0
                                _fun108328: for (var _fun108328_ip = 0;;) switch (_fun108328_ip) {
                                    case 0:
                                        var1 = _closure2_slot2;
                                        var1 = var1.current;
                                        if (var1) {
                                            _fun108328_ip = 25;
                                            continue _fun108328
                                        }
                                    case 15:
                                        var3 = _closure2_slot1;
                                        var2 = null;
                                        var1 = var2 == var3;
                                    case 25:
                                        if (var1) {
                                            _fun108328_ip = 38;
                                            continue _fun108328
                                        }
                                    case 28:
                                        var1 = _closure2_slot1;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 38:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var0 = var2.bind(var4)(var0, var1);
                        var0 = _closure1_slot12;
                        var11 = var0.bind(var3)();
                        var0 = 21;
                        var0 = var20[var0];
                        var1 = var29.bind(var3)(var0);
                        var0 = {};
                        var2 = true;
                        var0.includeKeyboardHeight = var2;
                        var0 = var1.bind(var3)(var0);
                        var6 = var0.insets;
                        var1 = var4.useRef;
                        var0 = false;
                        var0 = var1.bind(var4)(var0);
                        _closure2_slot2 = var0;
                        var2 = var4.useCallback;
                        var1 = function() { // Environment: var15
                            var1 = _closure2_slot2;
                            var0 = true;
                            var1.current = var0;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 22;
                            var2 = var8[var0];
                            var0 = undefined;
                            var3 = var7.bind(var0)(var2);
                            var2 = var3.closeCreatePollModal;
                            var2 = var2.bind(var3)();
                            var2 = _closure1_slot1;
                            var1 = 23;
                            var1 = var8[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var4 = 'POLL_CREATED_SUCCESS';
                            var1.key = var4;
                            var4 = 24;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.PollsIcon;
                            var1.IconComponent = var4;
                            var4 = 8;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.OPsckI;
                            var4 = var5.bind(var6)(var4);
                            var1.content = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = new Array(0);
                        var2 = var2.bind(var4)(var1, var0);
                        var7 = var4.useCallback;
                        var1 = function(arg0) { // Environment: var15
                            var0 = arg0;
                            var8 = var0.indexToRemove;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 25;
                            var1 = var7[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 8;
                            var5 = var7[var1];
                            var5 = var4.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.t;
                            var4 = var1.BByGU4;
                            var1 = {};
                            var7 = 1;
                            var7 = var8 + var7;
                            var1.number = var7;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = new Array(0);
                        var1 = var7.bind(var4)(var1, var0);
                        var0 = 26;
                        var0 = var20[var0];
                        var0 = var29.bind(var3)(var0);
                        var1 = var0.bind(var3)(var5, var2, var1);
                        var26 = var1.answers;
                        var _closure2_slot3 = var26;
                        var0 = var1.question;
                        var _closure2_slot4 = var0;
                        var16 = var1.allowMultiSelect;
                        var _closure2_slot5 = var16;
                        var0 = var1.setAllowMultiSelect;
                        var _closure2_slot6 = var0;
                        var23 = var1.canAddMoreAnswers;
                        var0 = var1.canRemoveMoreAnswers;
                        var _closure2_slot7 = var0;
                        var28 = var1.handleQuestionChange;
                        var0 = var1.handleAnswerTextChange;
                        var _closure2_slot8 = var0;
                        var0 = var1.handleEmojiSelect;
                        var _closure2_slot9 = var0;
                        var27 = var1.handleAddAnswer;
                        var _closure2_slot10 = var27;
                        var0 = var1.handleRemoveAnswer;
                        var _closure2_slot11 = var0;
                        var0 = var1.handleRemoveAnswerImage;
                        var _closure2_slot12 = var0;
                        var14 = var1.handleSubmitPoll;
                        var24 = var1.fieldErrors;
                        var _closure2_slot13 = var24;
                        var18 = var1.duration;
                        var17 = var1.setDuration;
                        var31 = var1.createPollError;
                        var19 = var1.submitting;
                        var0 = var1.shouldFocusOnInvalidField;
                        var _closure2_slot14 = var0;
                        var5 = var1.setShouldFocusOnInvalidField;
                        var _closure2_slot15 = var5;
                        var1 = 27;
                        var1 = var20[var1];
                        var2 = var30.bind(var3)(var1);
                        var1 = var2.useTrackPollCreationEvents;
                        var1 = var1.bind(var2)(var26, var16);
                        var1 = var1.trackPollCreationCancelled;
                        var _closure2_slot16 = var1;
                        var1 = function() {
                            var1 = _closure2_slot16;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 22;
                            var1 = var7[var1];
                            var2 = var6.bind(var0)(var1);
                            var1 = var2.closeCreatePollModal;
                            var1 = var1.bind(var2)();
                            var1 = 25;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var3 = var1.AccessibilityAnnouncer;
                            var2 = var3.announce;
                            var1 = 8;
                            var4 = var7[var1];
                            var4 = var6.bind(var0)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.t;
                            var1 = var1["+G3oRq"];
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var _closure2_slot17 = var1;
                        var1 = 28;
                        var1 = var20[var1];
                        var7 = var30.bind(var3)(var1);
                        var2 = var7.useNavigatorBackPressHandler;
                        var1 = function() { // Environment: var15
                            _fun108332: for (var _fun108332_ip = 0;;) switch (_fun108332_ip) {
                                case 0:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 29;
                                    var0 = var3[var0];
                                    var7 = undefined;
                                    var5 = var2.bind(var7)(var0);
                                    var4 = var5.isPollCreationEmpty;
                                    var3 = _closure2_slot4;
                                    var0 = _closure2_slot3;
                                    var0 = var4.bind(var5)(var3, var0);
                                    if (var0) {
                                        _fun108332_ip = 118;
                                        continue _fun108332
                                    }
                                case 51:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 30;
                                    var0 = var4[var0];
                                    var5 = var3.bind(var7)(var0);
                                    var4 = var5.openAlert;
                                    var6 = _closure1_slot9;
                                    var3 = _closure1_slot14;
                                    var0 = {};
                                    var8 = _closure2_slot17;
                                    var0.onConfirm = var8;
                                    var3 = var6.bind(var7)(var3, var0);
                                    var0 = 'poll-creation-unsaved-changes';
                                    var0 = var4.bind(var5)(var0, var3);
                                    var0 = true;
                                    _fun108332_ip = 212;
                                    continue _fun108332;
                                case 118:
                                    var2 = _closure2_slot16;
                                    var2 = var2.bind(var7)();
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var1 = 25;
                                    var1 = var8[var1];
                                    var1 = var6.bind(var7)(var1);
                                    var3 = var1.AccessibilityAnnouncer;
                                    var2 = var3.announce;
                                    var1 = 8;
                                    var4 = var8[var1];
                                    var4 = var6.bind(var7)(var4);
                                    var5 = var4.intl;
                                    var4 = var5.string;
                                    var1 = var8[var1];
                                    var1 = var6.bind(var7)(var1);
                                    var1 = var1.t;
                                    var1 = var1["+G3oRq"];
                                    var1 = var4.bind(var5)(var1);
                                    var1 = var2.bind(var3)(var1);
                                    var0 = false;
                                case 212:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var7)(var1);
                        var1 = 31;
                        var1 = var20[var1];
                        var2 = var29.bind(var3)(var1);
                        var1 = {};
                        var7 = function() {
                            var1 = _closure2_slot10;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var1.onAddAnswer = var7;
                        var25 = var2.bind(var3)(var1);
                        var _closure2_slot18 = var25;
                        var2 = var4.useEffect;
                        var1 = new Array(4);
                        var1[0] = var24;
                        var1[1] = var25;
                        var1[2] = var5;
                        var1[3] = var0;
                        var0 = function() { // Environment: var15
                            _fun108334: for (var _fun108334_ip = 0;;) switch (_fun108334_ip) {
                                case 0:
                                    var0 = global;
                                    var3 = var0.Object;
                                    var2 = var3.keys;
                                    var1 = _closure2_slot13;
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.length;
                                    var1 = 0;
                                    if (!(var2 > var1)) {
                                        _fun108334_ip = 182;
                                        continue _fun108334
                                    }
                                case 39:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var4 = 8;
                                    var6 = var7[var4];
                                    var2 = undefined;
                                    var6 = var5.bind(var2)(var6);
                                    var9 = var6.intl;
                                    var8 = var9.formatToPlainString;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var2)(var4);
                                    var4 = var4.t;
                                    var6 = var4.w8e4qF;
                                    var4 = {};
                                    var10 = var3.length;
                                    var4.numOfErrors = var10;
                                    var6 = var8.bind(var9)(var6, var4);
                                    var4 = 25;
                                    var4 = var7[var4];
                                    var4 = var5.bind(var2)(var4);
                                    var5 = var4.AccessibilityAnnouncer;
                                    var4 = var5.announce;
                                    var4 = var4.bind(var5)(var6);
                                    var4 = _closure2_slot14;
                                    if (!var4) {
                                        _fun108334_ip = 182;
                                        continue _fun108334
                                    }
                                case 152:
                                    var4 = var3[var1];
                                    var3 = _closure2_slot18;
                                    var1 = var3.focus;
                                    var1 = var1.bind(var3)(var4);
                                    var1 = _closure2_slot15;
                                    var0 = false;
                                    var0 = var1.bind(var2)(var0);
                                case 182:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot9;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var5 = var11.safeAreaContainer;
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = {};
                        var7 = var6.top;
                        var5.paddingTop = var7;
                        var6 = var6.bottom;
                        var5.paddingBottom = var6;
                        var4[1] = var5;
                        var0.style = var4;
                        var6 = _closure1_slot11;
                        var5 = _closure1_slot10;
                        var4 = {};
                        var7 = {};
                        var8 = var11.header;
                        var7.style = var8;
                        var13 = _closure1_slot9;
                        var9 = 32;
                        var8 = var20[var9];
                        var8 = var30.bind(var3)(var8);
                        var10 = var8.HeaderActionButton;
                        var8 = {};
                        var21 = 8;
                        var22 = var20[var21];
                        var22 = var30.bind(var3)(var22);
                        var33 = var22.intl;
                        var32 = var33.string;
                        var22 = var20[var21];
                        var22 = var30.bind(var3)(var22);
                        var22 = var22.t;
                        var22 = var22["ETE/oC"];
                        var22 = var32.bind(var33)(var22);
                        var8.accessibilityLabel = var22;
                        var22 = function() {
                            _fun108335: for (var _fun108335_ip = 0;;) switch (_fun108335_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 29;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var6 = var3.bind(var0)(var1);
                                    var5 = var6.isPollCreationEmpty;
                                    var4 = _closure2_slot4;
                                    var3 = _closure2_slot3;
                                    var3 = var5.bind(var6)(var4, var3);
                                    if (var3) {
                                        _fun108335_ip = 116;
                                        continue _fun108335
                                    }
                                case 51:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 30;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.openAlert;
                                    var6 = _closure1_slot9;
                                    var3 = _closure1_slot14;
                                    var2 = {};
                                    var7 = _closure2_slot17;
                                    var2.onConfirm = var7;
                                    var3 = var6.bind(var0)(var3, var2);
                                    var2 = 'poll-creation-unsaved-changes';
                                    var2 = var4.bind(var5)(var2, var3);
                                    _fun108335_ip = 124;
                                    continue _fun108335;
                                case 116:
                                    var1 = _closure2_slot17;
                                    var1 = var1.bind(var0)();
                                case 124:
                                    return var0;
                            }
                        };
                        var8.onPress = var22;
                        var22 = 33;
                        var22 = var20[var22];
                        var22 = var29.bind(var3)(var22);
                        var8.source = var22;
                        var22 = var11.actionButton;
                        var8.style = var22;
                        var10 = var13.bind(var3)(var10, var8);
                        var8 = new Array(3);
                        var8[0] = var10;
                        var22 = _closure1_slot9;
                        var10 = 12;
                        var10 = var20[var10];
                        var10 = var30.bind(var3)(var10);
                        var13 = var10.Text;
                        var10 = {
                            'accessibilityRole': 'header',
                            'variant': 'redesign/heading-18/bold',
                            'color': 'mobile-text-heading-primary'
                        };
                        var29 = var11.title;
                        var10.style = var29;
                        var29 = var20[var21];
                        var29 = var30.bind(var3)(var29);
                        var33 = var29.intl;
                        var32 = var33.string;
                        var29 = var20[var21];
                        var29 = var30.bind(var3)(var29);
                        var29 = var29.t;
                        var29 = var29.Flr51u;
                        var29 = var32.bind(var33)(var29);
                        var10.children = var29;
                        var10 = var22.bind(var3)(var13, var10);
                        var8[1] = var10;
                        var13 = _closure1_slot9;
                        var9 = var20[var9];
                        var9 = var30.bind(var3)(var9);
                        var10 = var9.HeaderActionButton;
                        var9 = {};
                        var22 = var20[var21];
                        var22 = var30.bind(var3)(var22);
                        var29 = var22.intl;
                        var22 = var29.string;
                        var20 = var20[var21];
                        var20 = var30.bind(var3)(var20);
                        var20 = var20.t;
                        var20 = var20.JOj8Zk;
                        var20 = var22.bind(var29)(var20);
                        var9.text = var20;
                        var22 = var11.actionButton;
                        var20 = new Array(2);
                        var20[0] = var22;
                        var22 = var11.postButton;
                        var20[1] = var22;
                        var9.style = var20;
                        var9.disabled = var19;
                        var9.onPress = var14;
                        var9 = var13.bind(var3)(var10, var9);
                        var8[2] = var9;
                        var7.children = var8;
                        var8 = var6.bind(var3)(var1, var7);
                        var7 = new Array(3);
                        var7[0] = var8;
                        var10 = _closure1_slot11;
                        var9 = _closure1_slot6;
                        var8 = {};
                        var13 = var11.viewPadding;
                        var8.style = var13;
                        var13 = var11.scrollContainer;
                        var8.contentContainerStyle = var13;
                        var13 = 'handled';
                        var8.keyboardShouldPersistTaps = var13;
                        var22 = null;
                        var14 = var22 != var31;
                        if (!var14) {
                            _fun108326_ip = 1129;
                            continue _fun108326
                        }
                    case 1074:
                        var20 = _closure1_slot9;
                        var19 = _closure1_slot1;
                        var29 = _closure1_slot2;
                        var13 = 34;
                        var13 = var29[var13];
                        var19 = var19.bind(var3)(var13);
                        var13 = {};
                        var30 = var22 == var31;
                        var29 = undefined;
                        if (var30) {
                            _fun108326_ip = 1119;
                            continue _fun108326
                        }
                    case 1109:
                        var30 = var31.getAnyErrorMessage;
                        var29 = var30.bind(var31)();
                    case 1119:
                        var13.children = var29;
                        var14 = var20.bind(var3)(var19, var13);
                    case 1129:
                        var13 = new Array(3);
                        var13[0] = var14;
                        var20 = _closure1_slot9;
                        var19 = _closure1_slot13;
                        var14 = {};
                        var30 = var25.refWithKey;
                        var29 = 'question';
                        var29 = var30.bind(var25)(var29);
                        var14.ref = var29;
                        var14.onChange = var28;
                        var25 = var25.focusNext;
                        var14.onSubmitEditing = var25;
                        var25 = var22 == var24;
                        var22 = undefined;
                        if (var25) {
                            _fun108326_ip = 1197;
                            continue _fun108326
                        }
                    case 1191:
                        var22 = var24.question;
                    case 1197:
                        var14.error = var22;
                        var14 = var20.bind(var3)(var19, var14);
                        var13[1] = var14;
                        var20 = _closure1_slot11;
                        var19 = _closure1_slot5;
                        var14 = {};
                        var22 = var11.answerInputsContainer;
                        var14.style = var22;
                        var25 = _closure1_slot9;
                        var31 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var22 = 35;
                        var22 = var28[var22];
                        var22 = var31.bind(var3)(var22);
                        var24 = var22.FormLabel;
                        var22 = {};
                        var29 = var28[var21];
                        var29 = var31.bind(var3)(var29);
                        var30 = var29.intl;
                        var29 = var30.string;
                        var28 = var28[var21];
                        var28 = var31.bind(var3)(var28);
                        var28 = var28.t;
                        var28 = var28.oMBfeS;
                        var28 = var29.bind(var30)(var28);
                        var22.text = var28;
                        var28 = 'text-subtle';
                        var22.color = var28;
                        var28 = var11.label;
                        var22.style = var28;
                        var24 = var25.bind(var3)(var24, var22);
                        var22 = new Array(3);
                        var22[0] = var24;
                        var25 = var26.map;
                        var24 = function(arg0, arg1) { // Environment: var15
                            _fun108336: for (var _fun108336_ip = 0;;) switch (_fun108336_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = _closure1_slot9;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 36;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = {};
                                    var5 = _closure2_slot18;
                                    var10 = var5.refWithKey;
                                    var11 = var0.localCreationAnswerId;
                                    var6 = global;
                                    var8 = var6.HermesInternal;
                                    var8 = var8.concat;
                                    var9 = 'answer-';
                                    var8 = var8.bind(var9)(var11);
                                    var8 = var10.bind(var5)(var8);
                                    var1.inputRef = var8;
                                    var1.answer = var0;
                                    var8 = arg1;
                                    var1.index = var8;
                                    var8 = _closure2_slot0;
                                    var8 = var8.id;
                                    var1.channelId = var8;
                                    var5 = var5.focusNext;
                                    var1.onSubmitEditing = var5;
                                    var5 = _closure2_slot8;
                                    var1.onAnswerTextChange = var5;
                                    var5 = _closure2_slot9;
                                    var1.onAnswerEmojiSelect = var5;
                                    var5 = _closure2_slot11;
                                    var1.onRemoveAnswer = var5;
                                    var5 = _closure2_slot12;
                                    var1.onRemoveAnswerImage = var5;
                                    var5 = _closure2_slot7;
                                    var1.canRemoveAnswer = var5;
                                    var8 = _closure2_slot13;
                                    var5 = null;
                                    var8 = var5 == var8;
                                    var5 = undefined;
                                    if (var8) {
                                        _fun108336_ip = 213;
                                        continue _fun108336
                                    }
                                case 183:
                                    var7 = _closure2_slot13;
                                    var8 = var0.localCreationAnswerId;
                                    var6 = var6.HermesInternal;
                                    var6 = var6.concat;
                                    var6 = var6.bind(var9)(var8);
                                    var5 = var7[var6];
                                case 213:
                                    var1.error = var5;
                                    var0 = var0.localCreationAnswerId;
                                    var0 = var4.bind(var3)(var2, var1, var0);
                                    return var0;
                            }
                        };
                        var24 = var25.bind(var26)(var24);
                        var22[1] = var24;
                        if (!var23) {
                            _fun108326_ip = 1390;
                            continue _fun108326
                        }
                    case 1370:
                        var26 = _closure1_slot9;
                        var25 = _closure1_slot15;
                        var24 = {};
                        var24.onPress = var27;
                        var23 = var26.bind(var3)(var25, var24);
                    case 1390:
                        var22[2] = var23;
                        var14.children = var22;
                        var14 = var20.bind(var3)(var19, var14);
                        var13[2] = var14;
                        var8.children = var13;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var10 = _closure1_slot11;
                        var9 = _closure1_slot5;
                        var8 = {};
                        var11 = var11.pollConfigSection;
                        var8.style = var11;
                        var14 = _closure1_slot9;
                        var13 = _closure1_slot16;
                        var11 = {};
                        var11.selectedDuration = var18;
                        var11.onChange = var17;
                        var13 = var14.bind(var3)(var13, var11);
                        var11 = new Array(2);
                        var11[0] = var13;
                        var14 = _closure1_slot9;
                        var20 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var12 = 37;
                        var12 = var17[var12];
                        var12 = var20.bind(var3)(var12);
                        var13 = var12.TableCheckboxRow;
                        var12 = {};
                        var18 = var17[var21];
                        var18 = var20.bind(var3)(var18);
                        var19 = var18.intl;
                        var18 = var19.string;
                        var17 = var17[var21];
                        var17 = var20.bind(var3)(var17);
                        var17 = var17.t;
                        var17 = var17["Ux+iQU"];
                        var17 = var18.bind(var19)(var17);
                        var12.label = var17;
                        var12.checked = var16;
                        var15 = function() {
                            var2 = _closure2_slot6;
                            var0 = _closure2_slot5;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var12.onPress = var15;
                        var12 = var14.bind(var3)(var13, var12);
                        var11[1] = var12;
                        var8.children = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[2] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6608, 33, 1297, 671, 478, 4027, 1234, 5401, 4086, 11864, 3941, 13983, 3278, 13984, 1307, 4898, 3718, 5214, 481, 4893, 13981, 3148, 9585, 3160, 13985, 13989, 4708, 6551, 4029, 13990, 5322, 4733, 13991, 5378, 13993, 8785, 2]);