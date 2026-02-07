// modules/guild_onboarding/native/GuildOnboardingPrompt.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun43745: for (var _fun43745_ip = 0;;) switch (_fun43745_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.currentPrompt;
                var17 = var0.numberOfPrompts;
                var19 = var0.currentPromptIndex;
                var0 = _closure1_slot18;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot16;
                var1 = _closure1_slot17;
                var0 = {};
                var6 = _closure1_slot6;
                var4 = {};
                var7 = var9.promptHeader;
                var4.style = var7;
                var12 = _closure1_slot15;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 23;
                var7 = var13[var10];
                var7 = var14.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var15 = var9.countText;
                var7.style = var15;
                var23 = 24;
                var15 = var13[var23];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var13[var23];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.isV0NW;
                var13 = {};
                var18 = 1;
                var18 = var19 + var18;
                var13.currentQuestion = var18;
                var13.questionCount = var17;
                var13 = var15.bind(var16)(var14, var13);
                var7.children = var13;
                var11 = var12.bind(var3)(var11, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var13 = null;
                var12 = var13 != var8;
                var11 = null;
                if (!var12) {
                    _fun43745_ip = 388;
                    continue _fun43745
                }
            case 220:
                var12 = var8.required;
                var11 = null;
                if (!var12) {
                    _fun43745_ip = 388;
                    continue _fun43745
                }
            case 234:
                var14 = _closure1_slot16;
                var13 = _closure1_slot17;
                var12 = {};
                var17 = _closure1_slot15;
                var16 = _closure1_slot6;
                var15 = {};
                var18 = var9.requiredSeparator;
                var15.style = var18;
                var16 = var17.bind(var3)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot15;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = var19[var10];
                var16 = var22.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-brand'
                };
                var20 = var19[var23];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var23];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.Ur8Vrt;
                var19 = var20.bind(var21)(var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 388:
                var7[1] = var11;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var9.title;
                var5.style = var9;
                var8 = var8.title;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        _fun43746: for (var _fun43746_ip = 0;;) switch (_fun43746_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.guildId;
                var _closure2_slot0 = var1;
                var6 = var2.currentPrompt;
                var1 = var2.selectedOptionIds;
                var _closure2_slot1 = var1;
                var12 = var2.handleOnPress;
                var18 = var2.lastPrompt;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot18;
                var16 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var7 = var4.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var5.bind(var7)(var4, var2);
                var2 = var1.length;
                var7 = 0;
                var17 = var7 === var2;
                if (!var17) {
                    _fun43746_ip = 139;
                    continue _fun43746
                }
            case 121:
                var2 = null;
                var2 = var2 != var6;
                if (!var2) {
                    _fun43746_ip = 136;
                    continue _fun43746
                }
            case 130:
                var2 = var6.required;
            case 136:
                var17 = !var2;
            case 139:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 24;
                var4 = var11[var2];
                var4 = var10.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                if (var18) {
                    _fun43746_ip = 215;
                    continue _fun43746
                }
            case 186:
                if (var17) {
                    _fun43746_ip = 202;
                    continue _fun43746
                }
            case 189:
                var10 = var2.PDTjLN;
                var13 = var4.bind(var5)(var10);
                _fun43746_ip = 213;
                continue _fun43746;
            case 202:
                var10 = var2["5Wxrcd"];
                var13 = var4.bind(var5)(var10);
            case 213:
                _fun43746_ip = 255;
                continue _fun43746;
            case 215:
                var2 = var2["8SuVoE"];
                var10 = var4.bind(var5)(var2);
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '';
                var2 = ' 🎉';
                var13 = var5.bind(var4)(var10, var2);
            case 255:
                var1 = var1.length;
                var15 = var7 === var1;
                if (!var15) {
                    _fun43746_ip = 287;
                    continue _fun43746
                }
            case 267:
                var1 = null;
                var2 = var1 == var6;
                var1 = undefined;
                if (var2) {
                    _fun43746_ip = 284;
                    continue _fun43746
                }
            case 278:
                var1 = var6.required;
            case 284:
                var15 = var1;
            case 287:
                var10 = null;
                var1 = var10 == var6;
                var11 = undefined;
                if (var1) {
                    _fun43746_ip = 327;
                    continue _fun43746
                }
            case 298:
                var4 = var6.options;
                var1 = var10 == var4;
                var11 = undefined;
                if (var1) {
                    _fun43746_ip = 327;
                    continue _fun43746
                }
            case 312:
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var2.bind(var4)(var1);
            case 327:
                _closure2_slot2 = var11;
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var0
                    _fun43749: for (var _fun43749_ip = 0;;) switch (_fun43749_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun43749_ip = 43;
                                continue _fun43749
                            }
                        case 13:
                            var0 = global;
                            var0 = var0.Set;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var6 = var2;
                            var0 = new var6[var0](var5);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _fun43749_ip = 83;
                            continue _fun43749;
                        case 43:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 29;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getSelectedRoleIds;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot4;
                var2 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    _fun43750: for (var _fun43750_ip = 0;;) switch (_fun43750_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun43750_ip = 43;
                                continue _fun43750
                            }
                        case 13:
                            var0 = global;
                            var0 = var0.Set;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var6 = var2;
                            var0 = new var6[var0](var5);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _fun43750_ip = 83;
                            continue _fun43750;
                        case 43:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 29;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.getSelectedChannelIds;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 83:
                            return var0;
                    }
                };
                var2 = var2.bind(var5)(var0, var1);
                var5 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 30;
                var0 = var14[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var0.guild = var8;
                var0.prompt = var6;
                var0.selectedRoleIds = var4;
                var0.selectedChannelIds = var2;
                var2 = _closure1_slot21;
                var0.itemHook = var2;
                var0 = var1.bind(var3)(var0);
                var21 = var0.helpText;
                var20 = var0.helpTextAdditional;
                var1 = 31;
                var0 = var14[var1];
                var6 = var5.bind(var3)(var0);
                var11 = _closure1_slot0;
                var2 = 32;
                var0 = var14[var2];
                var19 = var11.bind(var3)(var0);
                var8 = var19.useToken;
                var0 = 13;
                var4 = var14[var0];
                var4 = var5.bind(var3)(var4);
                var4 = var4.colors;
                var4 = var4.BACKGROUND_BASE_LOWER;
                var4 = var8.bind(var19)(var4);
                var6 = var6.bind(var3)(var4);
                var4 = var6.alpha;
                var6 = var4.bind(var6)(var7);
                var4 = var6.hex;
                var4 = var4.bind(var6)();
                var7 = new Array(2);
                var7[0] = var4;
                var1 = var14[var1];
                var1 = var5.bind(var3)(var1);
                var2 = var14[var2];
                var4 = var11.bind(var3)(var2);
                var2 = var4.useToken;
                var0 = var14[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.BACKGROUND_BASE_LOWER;
                var0 = var2.bind(var4)(var0);
                var2 = var1.bind(var3)(var0);
                var1 = var2.alpha;
                var0 = 1;
                var1 = var1.bind(var2)(var0);
                var0 = var1.hex;
                var0 = var0.bind(var1)();
                var7[1] = var0;
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var16.footer;
                var0.style = var4;
                var6 = _closure1_slot15;
                var4 = 27;
                var4 = var14[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var19 = var16.scrollContainerGradient;
                var8 = new Array(1);
                var8[0] = var19;
                var4.style = var8;
                var8 = 28;
                var19 = var14[var8];
                var19 = var11.bind(var3)(var19);
                var19 = var19.VerticalGradient;
                var19 = var19.START;
                var4.start = var19;
                var8 = var14[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.VerticalGradient;
                var8 = var8.END;
                var4.end = var8;
                var4.colors = var7;
                var7 = 'none';
                var4.pointerEvents = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var16.footerContent;
                var5.style = var8;
                var8 = '';
                if (!(var8 === var21)) {
                    _fun43746_ip = 802;
                    continue _fun43746
                }
            case 796:
                var10 = null;
                if (!(var8 !== var20)) {
                    _fun43746_ip = 889;
                    continue _fun43746
                }
            case 802:
                var14 = _closure1_slot16;
                var11 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 23;
                var8 = var19[var8];
                var8 = var11.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var19 = var16.helpText;
                var8.style = var19;
                var19 = new Array(3);
                var19[0] = var21;
                var21 = ' ';
                var19[1] = var21;
                var19[2] = var20;
                var8.children = var19;
                var10 = var14.bind(var3)(var11, var8);
            case 889:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot15;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 25;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var19 = var16.footerButtonText;
                var14 = new Array(2);
                var14[0] = var19;
                var19 = var15;
                if (!var15) {
                    _fun43746_ip = 949;
                    continue _fun43746
                }
            case 943:
                var19 = var16.buttonTextDisabled;
            case 949:
                var14[1] = var19;
                var9.textStyle = var14;
                var19 = var16.footerButton;
                var14 = new Array(3);
                var14[0] = var19;
                if (!var17) {
                    _fun43746_ip = 978;
                    continue _fun43746
                }
            case 975:
                var17 = !var18;
            case 978:
                if (!var17) {
                    _fun43746_ip = 987;
                    continue _fun43746
                }
            case 981:
                var17 = var16.buttonSkip;
            case 987:
                var14[1] = var17;
                if (!var15) {
                    _fun43746_ip = 1000;
                    continue _fun43746
                }
            case 994:
                var15 = var16.buttonDisabled;
            case 1000:
                var14[2] = var15;
                var9.style = var14;
                var9.text = var13;
                var9.onPress = var12;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        var4 = _closure1_slot15;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 23;
        var0 = var2[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var2 = var0.Text;
        var1 = {
            'variant': 'text-xs/medium',
            'color': 'mobile-text-heading-primary'
        };
        var0 = arg0;
        var1.children = var0;
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun43752: for (var _fun43752_ip = 0;;) switch (_fun43752_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.option;
                var _closure2_slot0 = var8;
                var1 = _closure1_slot18;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 17;
                var1 = var13[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var6 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    _fun43753: for (var _fun43753_ip = 0;;) switch (_fun43753_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.emoji;
                            var5 = null;
                            var2 = var5 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun43753_ip = 29;
                                continue _fun43753
                            }
                        case 24:
                            var0 = var1.id;
                        case 29:
                            var1 = var5 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun43753_ip = 80;
                                continue _fun43753
                            }
                        case 38:
                            var2 = _closure1_slot9;
                            var1 = var2.getUsableCustomEmojiById;
                            var4 = _closure2_slot0;
                            var4 = var4.emoji;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun43753_ip = 75;
                                continue _fun43753
                            }
                        case 70:
                            var3 = var4.id;
                        case 75:
                            var0 = var1.bind(var2)(var3);
                        case 80:
                            return var0;
                    }
                };
                var17 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var12.dropdownPill;
                var0.style = var4;
                var7 = _closure1_slot15;
                var6 = _closure1_slot6;
                var4 = {};
                var9 = var12.emojiContainer;
                var4.style = var9;
                var11 = _closure1_slot15;
                var10 = _closure1_slot1;
                var9 = 34;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var13 = var12.optionTextEmoji;
                var9.textEmojiStyle = var13;
                var12 = var12.optionImageEmoji;
                var9.fastImageStyle = var12;
                var12 = null;
                var14 = var12 != var17;
                var13 = undefined;
                if (!var14) {
                    _fun43752_ip = 232;
                    continue _fun43752
                }
            case 171:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 35;
                var14 = var16[var14];
                var16 = var15.bind(var3)(var14);
                var15 = var16.getEmojiURL;
                var14 = {};
                var18 = var17.id;
                var14.id = var18;
                var17 = var17.animated;
                var14.animated = var17;
                var17 = _closure1_slot14;
                var14.size = var17;
                var13 = var15.bind(var16)(var14);
            case 232:
                var9.src = var13;
                var14 = var8.emoji;
                var15 = var12 == var14;
                var13 = undefined;
                if (var15) {
                    _fun43752_ip = 257;
                    continue _fun43752
                }
            case 252:
                var13 = var14.name;
            case 257:
                var14 = var12 != var13;
                var12 = '';
                if (!var14) {
                    _fun43752_ip = 271;
                    continue _fun43752
                }
            case 268:
                var12 = var13;
            case 271:
                var9.name = var12;
                var9 = var11.bind(var3)(var10, var9);
                var4.children = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 23;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-md/semibold';
                var5.variant = var9;
                var8 = var8.title;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var6 = var3.ScrollView;
    var _closure1_slot7 = var6;
    var3 = var3.FlatList;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildOnboardingModalStates;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var12 = var3.Fonts;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot15 = var6;
    var6 = var3.jsxs;
    var _closure1_slot16 = var6;
    var3 = var3.Fragment;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {
        'display': 'flex',
        'flex': 1,
        'flexGrow': 1,
        'marginTop': null,
        'marginBottom': 16
    };
    var9 = 12;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var8.marginTop = var9;
    var11 = 16;
    var9 = 13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexGrow': 1,
        'justifyContent': 'center',
        'paddingHorizontal': 16,
        'paddingTop': 0
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var3.scrollContainer = var8;
    var8 = {
        'position': 'absolute',
        'height': 48,
        'width': '100%',
        'left': 0,
        'top': 4294967248
    };
    var3.scrollContainerGradient = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.promptHeader = var8;
    var8 = {
        'flexShrink': 0,
        'marginHorizontal': 8,
        'color': null,
        'backgroundColor': null,
        'width': 4,
        'height': 4
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.color = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var8.borderRadius = var13;
    var3.requiredSeparator = var8;
    var8 = {};
    var3.countText = var8;
    var8 = {};
    var13 = 32;
    var8.marginBottom = var13;
    var3.title = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.helpText = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'bottom': 0,
        'paddingBottom': 8,
        'position': 'absolute',
        'width': '100%'
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var13;
    var3.footer = var8;
    var8 = {};
    var8.flexGrow = var0;
    var13 = 44;
    var8.height = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var3.footerButton = var8;
    var8 = {};
    var13 = 14;
    var13 = var5[var13];
    var14 = var10.bind(var0)(var13);
    var13 = var12.PRIMARY_SEMIBOLD;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.WHITE;
    var17 = var14.bind(var0)(var13, var12, var11);
    var18 = var8;
    var12 = copyDataProperties(var18, var17);
    var3.footerButtonText = var8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingBottom': 8,
        'paddingTop': 8
    };
    var3.footerText = var8;
    var8 = {
        'width': '100%',
        'paddingHorizontal': 16
    };
    var3.footerContent = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var12;
    var3.buttonSkip = var8;
    var8 = {};
    var12 = 15;
    var12 = var5[var12];
    var15 = var4.bind(var0)(var12);
    var14 = var15.hexWithOpacity;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.BRAND_500;
    var12 = 0.6;
    var13 = var14.bind(var15)(var13, var12);
    var8.backgroundColor = var13;
    var3.buttonDisabled = var8;
    var8 = {};
    var8.opacity = var12;
    var3.buttonTextDisabled = var8;
    var8 = {
        'fontSize': 18,
        'lineHeight': 22,
        'marginRight': 6
    };
    var3.optionTextEmoji = var8;
    var8 = {
        'height': 22,
        'width': 22,
        'marginRight': 6
    };
    var3.optionImageEmoji = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.emojiContainer = var8;
    var8 = {
        'borderRadius': null,
        'backgroundColor': null,
        'padding': 8,
        'paddingRight': 32,
        'minHeight': 48,
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'alignItems': 'center',
        'position': 'relative'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var12;
    var3.dropdownContainer = var8;
    var8 = {};
    var8.marginTop = var11;
    var3.emptyDropdownText = var8;
    var8 = {
        'borderRadius': null,
        'backgroundColor': null,
        'padding': 6,
        'marginRight': 8,
        'marginTop': 8,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.dropdownPill = var8;
    var8 = {
        'position': 'absolute',
        'right': 4,
        'top': 8
    };
    var3.dropdownIconContainer = var8;
    var8 = {
        'height': 32,
        'width': 32
    };
    var3.dropdownIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/GuildOnboardingPrompt.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun43754: for (var _fun43754_ip = 0;;) switch (_fun43754_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot18;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 16;
                var0 = var5[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var7 = 17;
                var0 = var5[var7];
                var9 = var2.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var0;
                var1 = function() { // Environment: var23
                    var2 = _closure1_slot10;
                    var1 = var2.getRulesPrompt;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var3, var1);
                var _closure2_slot2 = var1;
                var3 = var5[var7];
                var11 = var2.bind(var4)(var3);
                var9 = var11.useStateFromStores;
                var3 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var3;
                var3 = function() { // Environment: var23
                    _fun43756: for (var _fun43756_ip = 0;;) switch (_fun43756_ip) {
                        case 0:
                            var2 = _closure1_slot11;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun43756_ip = 41;
                                continue _fun43756
                            }
                        case 35:
                            var0 = var1.rulesChannelId;
                        case 41:
                            return var0;
                    }
                };
                var3 = var9.bind(var11)(var8, var3);
                var _closure2_slot3 = var3;
                var3 = _closure1_slot1;
                var8 = 18;
                var8 = var5[var8];
                var8 = var3.bind(var4)(var8);
                var8 = var8.bind(var4)();
                var21 = var8.bottom;
                var8 = 64;
                var9 = var8 + var21;
                var8 = 8;
                var14 = var9 + var8;
                var7 = var5[var7];
                var9 = var2.bind(var4)(var7);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot10;
                    var1 = var2.get;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var8.bind(var9)(var7, var0);
                var _closure2_slot4 = var0;
                var8 = _closure1_slot4;
                var7 = var8.useState;
                var0 = false;
                var8 = var7.bind(var8)(var0);
                var7 = _closure1_slot3;
                var0 = 2;
                var7 = var7.bind(var4)(var8, var0);
                var12 = 0;
                var11 = var7[var12];
                var0 = 1;
                var0 = var7[var0];
                var _closure2_slot5 = var0;
                var0 = 19;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.bind(var4)();
                var0 = 20;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isThemeDark;
                var9 = var0.bind(var2)(var3);
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 15;
                var0 = var5[var0];
                var8 = var2.bind(var4)(var0);
                var7 = var8.hexWithOpacity;
                var3 = _closure1_slot1;
                var2 = 13;
                var0 = var5[var2];
                var0 = var3.bind(var4)(var0);
                var0 = var0.unsafe_rawColors;
                if (var9) {
                    _fun43754_ip = 403;
                    continue _fun43754
                }
            case 357:
                var9 = var0.PRIMARY_130;
                var13 = var7.bind(var8)(var9, var12);
                var9 = new Array(2);
                var9[0] = var13;
                var13 = var5[var2];
                var13 = var3.bind(var4)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.PRIMARY_130;
                var9[1] = var13;
                _fun43754_ip = 450;
                continue _fun43754;
            case 403:
                var0 = var0.PRIMARY_600;
                var7 = var7.bind(var8)(var0, var12);
                var0 = new Array(2);
                var0[0] = var7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                var2 = var2.PRIMARY_600;
                var0[1] = var2;
                var9 = var0;
            case 450:
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun43754_ip = 1117;
                    continue _fun43754
                }
            case 462:
                var3 = _closure1_slot16;
                var12 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 21;
                var1 = var20[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.SafeAreaPaddingView;
                var1 = {};
                var5 = true;
                var1.top = var5;
                var7 = var10.flex;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var10.container;
                var5[1] = var7;
                var1.style = var5;
                var13 = _closure1_slot16;
                var8 = _closure1_slot6;
                var5 = {};
                var7 = var10.flex;
                var5.style = var7;
                var16 = _closure1_slot15;
                var15 = _closure1_slot8;
                var7 = {};
                var18 = var10.scrollContainer;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var18.paddingBottom = var14;
                var17[1] = var18;
                var7.contentContainerStyle = var17;
                var17 = [0];
                var7.data = var17;
                var17 = function() {
                    var3 = _closure1_slot15;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.values;
                    var0.rules = var5;
                    var4 = _closure2_slot3;
                    var0.rulesChannelId = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.renderItem = var17;
                var17 = function() {
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var7.onEndReached = var17;
                var7 = var16.bind(var4)(var15, var7);
                var15 = new Array(2);
                var15[0] = var7;
                var18 = _closure1_slot16;
                var17 = _closure1_slot6;
                var16 = {};
                var19 = var10.footer;
                var7 = new Array(3);
                var7[0] = var19;
                var19 = var10.footerContent;
                var7[1] = var19;
                var19 = {};
                var19.paddingBottom = var21;
                var7[2] = var19;
                var16.style = var7;
                var19 = _closure1_slot15;
                var7 = 23;
                var7 = var20[var7];
                var7 = var12.bind(var4)(var7);
                var12 = var7.Text;
                var7 = {};
                var20 = var10.footerText;
                var7.style = var20;
                var20 = 'text-xs/medium';
                var7.variant = var20;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var24 = 24;
                var22 = var20[var24];
                var22 = var21.bind(var4)(var22);
                var25 = var22.intl;
                var22 = var25.string;
                var20 = var20[var24];
                var20 = var21.bind(var4)(var20);
                var21 = var20.t;
                if (var11) {
                    _fun43754_ip = 787;
                    continue _fun43754
                }
            case 772:
                var20 = var21.D0CVAc;
                var20 = var22.bind(var25)(var20);
                _fun43754_ip = 800;
                continue _fun43754;
            case 787:
                var21 = var21.arAe3I;
                var20 = var22.bind(var25)(var21);
            case 800:
                var7.children = var20;
                var7 = var19.bind(var4)(var12, var7);
                var19 = new Array(2);
                var19[0] = var7;
                var22 = _closure1_slot15;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var20 = 25;
                var20 = var12[var20];
                var21 = var7.bind(var4)(var20);
                var20 = {};
                var11 = !var11;
                var20.disabled = var11;
                var25 = var10.footerButtonText;
                var11 = new Array(1);
                var11[0] = var25;
                var20.textStyle = var11;
                var11 = var10.footerButton;
                var20.style = var11;
                var11 = _closure1_slot0;
                var25 = var12[var24];
                var25 = var11.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var12[var24];
                var24 = var11.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24["0KL0ot"];
                var24 = var25.bind(var26)(var24);
                var20.text = var24;
                var23 = function() {
                    _fun43760: for (var _fun43760_ip = 0;;) switch (_fun43760_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun43760_ip = 132;
                                continue _fun43760
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 26;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.submitVerificationForm;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var9 = _closure2_slot4;
                            var10 = var2;
                            var6 = copyDataProperties(var10, var9);
                            var6 = {};
                            var9 = _closure2_slot2;
                            var10 = var6;
                            var7 = copyDataProperties(var10, var9);
                            var8 = true;
                            var7 = 'response';
                            var6[var7] = var8;
                            var7 = new Array(1);
                            var7[0] = var6;
                            var6 = 'formFields';
                            var2[var6] = var7;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot1;
                            var1 = var2.push;
                            var0 = _closure1_slot13;
                            var0 = var0.COMPLETED;
                            var0 = var1.bind(var2)(var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var20.onPress = var23;
                var20 = var22.bind(var4)(var21, var20);
                var19[1] = var20;
                var16.children = var19;
                var16 = var18.bind(var4)(var17, var16);
                var15[1] = var16;
                var5.children = var15;
                var8 = var13.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot15;
                var6 = 27;
                var6 = var12[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var13 = var10.scrollContainerGradient;
                var10 = new Array(2);
                var10[0] = var13;
                var13 = {};
                var13.bottom = var14;
                var10[1] = var13;
                var6.style = var10;
                var10 = 28;
                var13 = var12[var10];
                var13 = var11.bind(var4)(var13);
                var13 = var13.VerticalGradient;
                var13 = var13.START;
                var6.start = var13;
                var10 = var12[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.VerticalGradient;
                var10 = var10.END;
                var6.end = var10;
                var6.colors = var9;
                var9 = 'none';
                var6.pointerEvents = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1117:
                return var0;
        }
    };
    var2.RulesPrompt = var3;
    var3 = function arg0() {
        var0 = arg0;
        var12 = var0.guildId;
        var _closure2_slot0 = var12;
        var11 = var0.currentPrompt;
        var _closure2_slot1 = var11;
        var8 = var0.lastPrompt;
        var15 = var0.currentPromptIndex;
        var17 = var0.numberOfPrompts;
        var1 = var0.selectOption;
        var _closure2_slot2 = var1;
        var9 = var0.handleOnPress;
        var0 = _closure1_slot18;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 18;
        var0 = var2[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var18 = var0.bottom;
        var1 = _closure1_slot0;
        var0 = 17;
        var0 = var2[var0];
        var6 = var1.bind(var3)(var0);
        var4 = var6.useStateFromStoresArray;
        var0 = _closure1_slot12;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = new Array(2);
        var1[0] = var12;
        var1[1] = var11;
        var0 = function() { // Environment: var16
            _fun43762: for (var _fun43762_ip = 0;;) switch (_fun43762_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun43762_ip = 19;
                        continue _fun43762
                    }
                case 13:
                    var0 = new Array(0);
                    _fun43762_ip = 51;
                    continue _fun43762;
                case 19:
                    var4 = _closure1_slot12;
                    var3 = var4.getOnboardingResponsesForPrompt;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var0 = var3.bind(var4)(var2, var1);
                case 51:
                    return var0;
            }
        };
        var10 = var4.bind(var6)(var2, var0, var1);
        var _closure2_slot3 = var10;
        var2 = _closure1_slot16;
        var1 = _closure1_slot17;
        var0 = {};
        var6 = _closure1_slot7;
        var4 = {};
        var13 = var7.scrollContainer;
        var7 = new Array(2);
        var7[0] = var13;
        var13 = {};
        var14 = 64;
        var14 = var14 + var18;
        var18 = 48;
        var14 = var14 + var18;
        var14 = var14 + var18;
        var13.paddingBottom = var14;
        var14 = 'relative';
        var13.position = var14;
        var7[1] = var13;
        var4.contentContainerStyle = var7;
        var14 = _closure1_slot15;
        var13 = _closure1_slot19;
        var7 = {};
        var7.currentPrompt = var11;
        var7.numberOfPrompts = var17;
        var7.currentPromptIndex = var15;
        var13 = var14.bind(var3)(var13, var7);
        var7 = new Array(2);
        var7[0] = var13;
        var15 = _closure1_slot15;
        var14 = _closure1_slot6;
        var13 = {};
        var18 = var11.options;
        var17 = var18.map;
        var16 = function(arg0) { // Environment: var16
            _fun43763: for (var _fun43763_ip = 0;;) switch (_fun43763_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot15;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 33;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.option = var0;
                    var7 = _closure2_slot0;
                    var1.guildId = var7;
                    var6 = function arg0() {
                        _fun43764: for (var _fun43764_ip = 0;;) switch (_fun43764_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure2_slot2;
                                var1 = _closure2_slot1;
                                var3 = var1.id;
                                var1 = _closure3_slot0;
                                var2 = var1.id;
                                var1 = null;
                                var1 = var1 != var0;
                                if (!var1) {
                                    _fun43764_ip = 43;
                                    continue _fun43764
                                }
                            case 40:
                                var1 = var0;
                            case 43:
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3, var2, var1);
                                return var0;
                        }
                    };
                    var1.onSelect = var6;
                    var7 = _closure2_slot3;
                    var6 = var7.includes;
                    var5 = var0.id;
                    var6 = var6.bind(var7)(var5);
                    var5 = null;
                    var5 = var5 != var6;
                    if (!var5) {
                        _fun43763_ip = 97;
                        continue _fun43763
                    }
                case 94:
                    var5 = var6;
                case 97:
                    var1.selected = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var16 = var17.bind(var18)(var16);
        var13.children = var16;
        var13 = var15.bind(var3)(var14, var13);
        var7[1] = var13;
        var4.children = var7;
        var6 = var2.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot15;
        var6 = _closure1_slot20;
        var5 = {};
        var5.guildId = var12;
        var5.currentPrompt = var11;
        var5.selectedOptionIds = var10;
        var5.handleOnPress = var9;
        var5.lastPrompt = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.MultipleChoicePrompt = var3;
    var1 = function arg0() {
        _fun43765: for (var _fun43765_ip = 0;;) switch (_fun43765_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.guildId;
                var _closure2_slot0 = var12;
                var11 = var1.currentPrompt;
                var _closure2_slot1 = var11;
                var8 = var1.lastPrompt;
                var15 = var1.currentPromptIndex;
                var16 = var1.numberOfPrompts;
                var0 = var1.selectOption;
                var _closure2_slot2 = var0;
                var9 = var1.handleOnPress;
                var1 = _closure1_slot18;
                var3 = undefined;
                var26 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 18;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var17 = var1.bottom;
                var2 = _closure1_slot0;
                var1 = 17;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStoresArray;
                var1 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var1;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var11;
                var1 = function() { // Environment: var20
                    _fun43766: for (var _fun43766_ip = 0;;) switch (_fun43766_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun43766_ip = 19;
                                continue _fun43766
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun43766_ip = 51;
                            continue _fun43766;
                        case 19:
                            var4 = _closure1_slot12;
                            var3 = var4.getOnboardingResponsesForPrompt;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 51:
                            return var0;
                    }
                };
                var10 = var6.bind(var7)(var4, var1, var2);
                var _closure2_slot3 = var10;
                var1 = null;
                var2 = var1 == var11;
                var22 = undefined;
                if (var2) {
                    _fun43765_ip = 202;
                    continue _fun43765
                }
            case 173:
                var4 = var11.options;
                var1 = var1 == var4;
                var22 = undefined;
                if (var1) {
                    _fun43765_ip = 202;
                    continue _fun43765
                }
            case 187:
                var2 = var4.filter;
                var1 = function(arg0) { // Environment: var20
                    var2 = _closure2_slot3;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var2.bind(var4)(var1);
            case 202:
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var12;
                var6 = var11.id;
                var1[1] = var6;
                var1[2] = var0;
                var0 = function() { // Environment: var20
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 38;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 37;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.guildId = var6;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var2.promptId = var1;
                    var1 = function arg0, arg1() {
                        _fun43769: for (var _fun43769_ip = 0;;) switch (_fun43769_ip) {
                            case 0:
                                var0 = arg1;
                                var4 = _closure2_slot2;
                                var1 = _closure2_slot1;
                                var3 = var1.id;
                                var1 = arg0;
                                var2 = var1.id;
                                var1 = null;
                                var1 = var1 != var0;
                                if (!var1) {
                                    _fun43769_ip = 39;
                                    continue _fun43769
                                }
                            case 36:
                                var1 = var0;
                            case 39:
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3, var2, var1);
                                return var0;
                        }
                    };
                    var2.onSelect = var1;
                    var1 = 'DropdownOptions';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var19 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot17;
                var0 = {};
                var6 = _closure1_slot7;
                var4 = {};
                var13 = var26.scrollContainer;
                var7 = new Array(2);
                var7[0] = var13;
                var13 = {};
                var14 = 64;
                var14 = var14 + var17;
                var17 = 48;
                var14 = var14 + var17;
                var14 = var14 + var17;
                var13.paddingBottom = var14;
                var14 = 'relative';
                var13.position = var14;
                var7[1] = var13;
                var4.contentContainerStyle = var7;
                var14 = _closure1_slot15;
                var13 = _closure1_slot19;
                var7 = {};
                var7.currentPrompt = var11;
                var7.numberOfPrompts = var16;
                var7.currentPromptIndex = var15;
                var13 = var14.bind(var3)(var13, var7);
                var7 = new Array(2);
                var7[0] = var13;
                var15 = _closure1_slot15;
                var14 = _closure1_slot6;
                var13 = {};
                var18 = _closure1_slot16;
                var17 = _closure1_slot0;
                var21 = _closure1_slot2;
                var16 = 39;
                var16 = var21[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.PressableHighlight;
                var16 = {};
                var21 = var26.dropdownContainer;
                var16.style = var21;
                var16.onPress = var19;
                var21 = var22.length;
                var19 = 0;
                var21 = var19 === var21;
                if (!var21) {
                    _fun43765_ip = 485;
                    continue _fun43765
                }
            case 424:
                var24 = _closure1_slot15;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var19 = 23;
                var19 = var25[var19];
                var19 = var23.bind(var3)(var19);
                var23 = var19.Text;
                var19 = {
                    'style': null,
                    'variant': 'text-sm/normal',
                    'color': 'text-muted',
                    'children': 'No answers selected.'
                };
                var25 = var26.emptyDropdownText;
                var19.style = var25;
                var21 = var24.bind(var3)(var23, var19);
            case 485:
                var19 = new Array(3);
                var19[0] = var21;
                var21 = var22.map;
                var20 = function(arg0) { // Environment: var20
                    var0 = arg0;
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot22;
                    var2 = {};
                    var2.option = var0;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var20 = var21.bind(var22)(var20);
                var19[1] = var20;
                var22 = _closure1_slot15;
                var21 = _closure1_slot6;
                var20 = {};
                var23 = var26.dropdownIconContainer;
                var20.style = var23;
                var25 = _closure1_slot15;
                var24 = _closure1_slot5;
                var23 = {};
                var26 = var26.dropdownIcon;
                var23.style = var26;
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var26 = 40;
                var26 = var28[var26];
                var26 = var27.bind(var3)(var26);
                var23.source = var26;
                var23 = var25.bind(var3)(var24, var23);
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19[2] = var20;
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var7[1] = var13;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot20;
                var5 = {};
                var5.guildId = var12;
                var5.currentPrompt = var11;
                var5.selectedOptionIds = var10;
                var5.handleOnPress = var9;
                var5.lastPrompt = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.DropdownPrompt = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4739, 4701, 1410, 4688, 4685, 1624, 483, 33, 1297, 4703, 671, 4682, 3241, 1469, 566, 1568, 3247, 3207, 4736, 4782, 3942, 1234, 4875, 7502, 4098, 670, 4582, 9958, 669, 3153, 9969, 5820, 1417, 3279, 9968, 1307, 4904, 8744, 2]);