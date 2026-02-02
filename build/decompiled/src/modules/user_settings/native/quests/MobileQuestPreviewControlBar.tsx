// modules/user_settings/native/quests/MobileQuestPreviewControlBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var1 = function arg0() {
        _fun83732: for (var _fun83732_ip = 0;;) switch (_fun83732_ip) {
            case 0:
                var2 = arg0;
                var17 = var2.questId;
                var _closure2_slot0 = var17;
                var1 = var2.setQuestId;
                var _closure2_slot1 = var1;
                var20 = var2.refreshQuest;
                var _closure2_slot2 = var20;
                var2 = _closure1_slot11;
                var3 = undefined;
                var10 = var2.bind(var3)();
                var5 = _closure1_slot5;
                var4 = var5.useState;
                var2 = false;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot4;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var2 = 0;
                var23 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var _closure2_slot3 = var2;
                var25 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 9;
                var2 = var18[var2];
                var4 = var25.bind(var3)(var2);
                var2 = var4.useQuestsWithPreviewAccess;
                var2 = var2.bind(var4)();
                var _closure2_slot4 = var2;
                var4 = 10;
                var5 = var18[var4];
                var11 = var25.bind(var3)(var5);
                var9 = var11.useStateFromStores;
                var5 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var5;
                var7 = new Array(1);
                var7[0] = var17;
                var5 = function() { // Environment: var0
                    _fun83733: for (var _fun83733_ip = 0;;) switch (_fun83733_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun83733_ip = 38;
                                continue _fun83733
                            }
                        case 16:
                            var3 = _closure1_slot7;
                            var2 = var3.getFetchQuestPreviewError;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var9 = var9.bind(var11)(var8, var5, var7);
                var4 = var18[var4];
                var11 = var25.bind(var3)(var4);
                var8 = var11.useStateFromStores;
                var4 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var4;
                var5 = new Array(1);
                var5[0] = var17;
                var4 = function() { // Environment: var0
                    _fun83734: for (var _fun83734_ip = 0;;) switch (_fun83734_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun83734_ip = 38;
                                continue _fun83734
                            }
                        case 16:
                            var3 = _closure1_slot7;
                            var2 = var3.isFetchingQuestPreview;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var22 = var8.bind(var11)(var7, var4, var5);
                var7 = _closure1_slot5;
                var5 = var7.useMemo;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var17;
                var2 = function() { // Environment: var0
                    _fun83735: for (var _fun83735_ip = 0;;) switch (_fun83735_ip) {
                        case 0:
                            var4 = _closure2_slot4;
                            var1 = var4.map;
                            var0 = function(arg0) { // Environment: var2
                                _fun83736: for (var _fun83736_ip = 0;;) switch (_fun83736_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = {};
                                        var3 = var1.config;
                                        var2 = null;
                                        var4 = var2 == var3;
                                        var7 = undefined;
                                        if (var4) {
                                            _fun83736_ip = 42;
                                            continue _fun83736
                                        }
                                    case 21:
                                        var3 = var3.messages;
                                        var4 = var2 == var3;
                                        var7 = undefined;
                                        if (var4) {
                                            _fun83736_ip = 42;
                                            continue _fun83736
                                        }
                                    case 36:
                                        var7 = var3.questName;
                                    case 42:
                                        if (!(var2 == var7)) {
                                            _fun83736_ip = 51;
                                            continue _fun83736
                                        }
                                    case 46:
                                        var7 = var1.id;
                                    case 51:
                                        var9 = var1.id;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var5 = var2.concat;
                                        var12 = '';
                                        var10 = ' (';
                                        var8 = ')';
                                        var11 = var7;
                                        var2 = var12[var5](var11, var10, var9, var8, var7);
                                        var0.label = var2;
                                        var1 = var1.id;
                                        var0.value = var1;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var4)(var0);
                            var4 = _closure2_slot0;
                            var1 = null;
                            var1 = var1 == var4;
                            if (var1) {
                                _fun83735_ip = 57;
                                continue _fun83735
                            }
                        case 39:
                            var4 = var0.some;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure2_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var4.bind(var0)(var2);
                        case 57:
                            if (var1) {
                                _fun83735_ip = 85;
                                continue _fun83735
                            }
                        case 60:
                            var2 = var0.unshift;
                            var1 = {};
                            var3 = _closure2_slot0;
                            var1.label = var3;
                            var1.value = var3;
                            var1 = var2.bind(var0)(var1);
                        case 85:
                            return var0;
                    }
                };
                var24 = var5.bind(var7)(var2, var4);
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun83738: for (var _fun83738_ip = 0;;) switch (_fun83738_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun83738_ip = 27;
                                continue _fun83738
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun83740: for (var _fun83740_ip = 0;;) switch (_fun83740_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun83740_ip = 141;
                                    continue _fun83740
                                }
                            case 10:
                                var3 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun83740_ip = 107;
                                    continue _fun83740
                                }
                            case 23:
                                var3 = _closure2_slot3;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 36: // try_start_0
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 11;
                                var1 = var5[var1];
                                var6 = var3.bind(var4)(var1);
                                var5 = var6.completeQuestPreview;
                                var3 = _closure2_slot0;
                                var1 = 1;
                                var1 = var5.bind(var6)(var3, var1);
                                SaveGenerator(address = 82);
                            case 80:
                                return var1;
                            case 82:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun83740_ip = 112;
                                    continue _fun83740
                                }
                            case 88:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var4)();
                            case 96: // try_end0
                                var5 = _closure2_slot3;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                            case 107:
                                var3 = undefined;
                                return var3;
                            case 112:
                                var5 = _closure2_slot3;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 126: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot3;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 141:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(2);
                var1[0] = var17;
                var1[1] = var20;
                var8 = var4.bind(var5)(var2, var1);
                var _closure2_slot5 = var8;
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun83742: for (var _fun83742_ip = 0;;) switch (_fun83742_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun83742_ip = 137;
                                    continue _fun83742
                                }
                            case 10:
                                var3 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun83742_ip = 103;
                                    continue _fun83742
                                }
                            case 23:
                                var3 = _closure2_slot3;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 36: // try_start_0
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 11;
                                var1 = var5[var1];
                                var5 = var3.bind(var4)(var1);
                                var3 = var5.resetQuestPreviewStatus;
                                var1 = _closure2_slot0;
                                var1 = var3.bind(var5)(var1);
                                SaveGenerator(address = 78);
                            case 76:
                                return var1;
                            case 78:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun83742_ip = 108;
                                    continue _fun83742
                                }
                            case 84:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var4)();
                            case 92: // try_end0
                                var5 = _closure2_slot3;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                            case 103:
                                var3 = undefined;
                                return var3;
                            case 108:
                                var5 = _closure2_slot3;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 122: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot3;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 137:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(2);
                var1[0] = var17;
                var1[1] = var20;
                var7 = var4.bind(var5)(var2, var1);
                var _closure2_slot6 = var7;
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun83744: for (var _fun83744_ip = 0;;) switch (_fun83744_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun83744_ip = 156;
                                    continue _fun83744
                                }
                            case 10:
                                var3 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun83744_ip = 122;
                                    continue _fun83744
                                }
                            case 23:
                                var3 = _closure2_slot3;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 36: // try_start_0
                                var1 = global;
                                var3 = var1.Math;
                                var1 = var3.random;
                                var6 = var1.bind(var3)();
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 11;
                                var1 = var5[var1];
                                var5 = var3.bind(var4)(var1);
                                var3 = var5.completeQuestPreview;
                                var1 = _closure2_slot0;
                                var1 = var3.bind(var5)(var1, var6);
                                SaveGenerator(address = 97);
                            case 95:
                                return var1;
                            case 97:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun83744_ip = 127;
                                    continue _fun83744
                                }
                            case 103:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var4)();
                            case 111: // try_end0
                                var5 = _closure2_slot3;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                            case 122:
                                var3 = undefined;
                                return var3;
                            case 127:
                                var5 = _closure2_slot3;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 141: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot3;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 156:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(2);
                var1[0] = var17;
                var1[1] = var20;
                var5 = var4.bind(var5)(var2, var1);
                var _closure2_slot7 = var5;
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = new Array(4);
                var1[0] = var17;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 12;
                    var1 = var10[var0];
                    var0 = undefined;
                    var3 = var9.bind(var0)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {};
                    var4 = 'quest-preview-menu';
                    var1.key = var4;
                    var5 = {};
                    var6 = 13;
                    var4 = var10[var6];
                    var4 = var9.bind(var0)(var4);
                    var8 = var4.intl;
                    var7 = var8.string;
                    var4 = var10[var6];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.jQEfRT;
                    var4 = var7.bind(var8)(var4);
                    var5.label = var4;
                    var4 = _closure2_slot5;
                    var5.onPress = var4;
                    var4 = new Array(4);
                    var4[0] = var5;
                    var5 = {};
                    var8 = var10[var6];
                    var8 = var9.bind(var0)(var8);
                    var12 = var8.intl;
                    var11 = var12.string;
                    var8 = var10[var6];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.taqkwK;
                    var8 = var11.bind(var12)(var8);
                    var5.label = var8;
                    var8 = _closure2_slot6;
                    var5.onPress = var8;
                    var4[1] = var5;
                    var5 = {};
                    var8 = var10[var6];
                    var8 = var9.bind(var0)(var8);
                    var12 = var8.intl;
                    var11 = var12.string;
                    var8 = var10[var6];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.cKSLr4;
                    var8 = var11.bind(var12)(var8);
                    var5.label = var8;
                    var7 = _closure2_slot7;
                    var5.onPress = var7;
                    var4[2] = var5;
                    var5 = {};
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6.rNGQfD;
                    var6 = var7.bind(var8)(var6);
                    var5.label = var6;
                    var6 = function() {
                        _fun83746: for (var _fun83746_ip = 0;;) switch (_fun83746_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun83746_ip = 68;
                                    continue _fun83746
                                }
                            case 13:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.copy;
                                var4 = _closure1_slot8;
                                var3 = var4.QUEST_PREVIEW_TOOL_2;
                                var0 = _closure2_slot0;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                            case 68:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5.onPress = var6;
                    var4[3] = var5;
                    var1.options = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var21 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var7 = _closure1_slot9;
                var5 = _closure1_slot1;
                var4 = 15;
                var4 = var18[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var11 = _closure1_slot10;
                var8 = _closure1_slot6;
                var7 = {};
                var5 = var10.questInputContainer;
                var7.style = var5;
                var13 = _closure1_slot9;
                var12 = _closure1_slot6;
                var5 = {};
                var14 = var10.searchField;
                var5.style = var14;
                var16 = _closure1_slot9;
                var14 = 16;
                var14 = var18[var14];
                var14 = var25.bind(var3)(var14);
                var15 = var14.MobileSearchableSelect;
                var14 = {};
                var14.options = var24;
                var14.value = var17;
                var14.onChange = var19;
                var28 = 13;
                var19 = var18[var28];
                var19 = var25.bind(var3)(var19);
                var24 = var19.intl;
                var19 = var24.string;
                var18 = var18[var28];
                var18 = var25.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.Zw8jxn;
                var18 = var19.bind(var24)(var18);
                var14.placeholder = var18;
                var18 = true;
                var14.allowCustomValue = var18;
                var18 = var22;
                if (var22) {
                    _fun83732_ip = 676;
                    continue _fun83732
                }
            case 673:
                var18 = var23;
            case 676:
                var14.isDisabled = var18;
                var14 = var16.bind(var3)(var15, var14);
                var5.children = var14;
                var5 = var13.bind(var3)(var12, var5);
                var12 = new Array(2);
                var12[0] = var5;
                var15 = _closure1_slot10;
                var14 = _closure1_slot6;
                var13 = {};
                var5 = var10.iconsColumn;
                var13.style = var5;
                var19 = _closure1_slot9;
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var18 = 17;
                var5 = var24[var18];
                var5 = var27.bind(var3)(var5);
                var16 = var5.IconButton;
                var5 = {};
                var29 = _closure1_slot9;
                var25 = 18;
                var25 = var24[var25];
                var25 = var27.bind(var3)(var25);
                var26 = var25.RefreshIcon;
                var25 = {};
                var25 = var29.bind(var3)(var26, var25);
                var5.icon = var25;
                var25 = var24[var28];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var28];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.wzzjk9;
                var24 = var25.bind(var26)(var24);
                var5.accessibilityLabel = var24;
                var5.onPress = var20;
                var20 = var22;
                if (var22) {
                    _fun83732_ip = 855;
                    continue _fun83732
                }
            case 849:
                var24 = null;
                var20 = var24 == var17;
            case 855:
                var5.disabled = var20;
                var5.loading = var22;
                var20 = 'sm';
                var5.size = var20;
                var20 = 'secondary';
                var5.variant = var20;
                var5 = var19.bind(var3)(var16, var5);
                var16 = new Array(2);
                var16[0] = var5;
                var5 = null;
                var17 = var5 != var17;
                if (!var17) {
                    _fun83732_ip = 1051;
                    continue _fun83732
                }
            case 906:
                var20 = _closure1_slot9;
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var18 = var24[var18];
                var18 = var27.bind(var3)(var18);
                var19 = var18.IconButton;
                var18 = {
                    'icon': null,
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var29 = _closure1_slot9;
                var25 = 19;
                var25 = var24[var25];
                var25 = var27.bind(var3)(var25);
                var26 = var25.MoreVerticalIcon;
                var25 = {};
                var25 = var29.bind(var3)(var26, var25);
                var18.icon = var25;
                var25 = var24[var28];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var28];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["+1H47t"];
                var24 = var25.bind(var26)(var24);
                var18.accessibilityLabel = var24;
                if (var22) {
                    _fun83732_ip = 1037;
                    continue _fun83732
                }
            case 1034:
                var22 = var23;
            case 1037:
                var18.disabled = var22;
                var18.onPress = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 1051:
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var7.children = var12;
                var7 = var11.bind(var3)(var8, var7);
                var4[1] = var7;
                var5 = var5 != var9;
                if (!var5) {
                    _fun83732_ip = 1158;
                    continue _fun83732
                }
            case 1090:
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 20;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-critical'
                };
                var10 = var10.errorText;
                var6.style = var10;
                var9 = var9.message;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1158:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var5[var10];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppRoutes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'overflow': 'visible',
        'zIndex': 1
    };
    var3.container = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'justifyContent': 'flex-start',
        'gap': null,
        'zIndex': 2,
        'overflow': 'visible'
    };
    var13 = 'row';
    var11 = 8;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.gap = var14;
    var3.questInputContainer = var9;
    var9 = {
        'flex': 1,
        'zIndex': 3,
        'overflow': 'visible'
    };
    var3.searchField = var9;
    var9 = {};
    var9.flexDirection = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.gap = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.paddingTop = var13;
    var3.iconsColumn = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var9.marginTop = var11;
    var9.zIndex = var10;
    var3.errorText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/quests/MobileQuestPreviewControlBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.MobileQuestPreviewControlBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 5191, 483, 33, 1297, 671, 5277, 566, 5223, 7694, 1234, 5255, 10684, 10688, 7472, 10669, 9164, 3902, 2]);