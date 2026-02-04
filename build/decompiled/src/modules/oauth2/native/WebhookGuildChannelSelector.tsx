// modules/oauth2/native/WebhookGuildChannelSelector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
    var1 = var10.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var4 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.createChannelRecord;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot10 = var4;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {
        'flexDirection': 'column',
        'gap': 8
    };
    var1.selectorGroup = var8;
    var8 = {};
    var9 = 9;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var1.select = var8;
    var8 = {};
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var8.color = var11;
    var11 = '500';
    var8.fontWeight = var11;
    var1.label = var8;
    var8 = {};
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var1.error = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot12 = var1;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/WebhookGuildChannelSelector.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun48297: for (var _fun48297_ip = 0;;) switch (_fun48297_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.selectedGuildId;
                var _closure2_slot0 = var8;
                var3 = var0.selectedChannelId;
                var _closure2_slot1 = var3;
                var11 = var0.onChannelChange;
                var _closure2_slot2 = var11;
                var15 = var0.error;
                var0 = _closure1_slot12;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var7 = _closure1_slot5;
                var2 = var7.useState;
                var0 = null;
                var6 = var2.bind(var7)(var0);
                var5 = _closure1_slot4;
                var2 = 2;
                var6 = var5.bind(var4)(var6, var2);
                var2 = 0;
                var2 = var6[var2];
                var _closure2_slot3 = var2;
                var5 = 1;
                var5 = var6[var5];
                var _closure2_slot4 = var5;
                var6 = var7.useRef;
                var5 = false;
                var5 = var6.bind(var7)(var5);
                var _closure2_slot5 = var5;
                var12 = var7.useCallback;
                var6 = new Array(4);
                var6[0] = var2;
                var6[1] = var11;
                var6[2] = var3;
                var6[3] = var8;
                var5 = function() { // Environment: var1
                    _fun48298: for (var _fun48298_ip = 0;;) switch (_fun48298_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var7 = null;
                            var0 = var7 != var0;
                            if (!var0) {
                                _fun48298_ip = 35;
                                continue _fun48298
                            }
                        case 18:
                            var1 = _closure2_slot3;
                            var2 = var1.guildId;
                            var1 = _closure2_slot0;
                            var0 = var2 === var1;
                        case 35:
                            if (!var0) {
                                _fun48298_ip = 231;
                                continue _fun48298
                            }
                        case 41:
                            var3 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var0 = 10;
                            var2 = var12[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.openLazy;
                            var11 = _closure1_slot0;
                            var1 = 12;
                            var1 = var12[var1];
                            var8 = var11.bind(var0)(var1);
                            var1 = 11;
                            var2 = var12[var1];
                            var1 = var12.paths;
                            var2 = var8.bind(var0)(var2, var1);
                            var1 = {};
                            var8 = 13;
                            var9 = var12[var8];
                            var9 = var11.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8["Re/64R"];
                            var8 = var9.bind(var10)(var8);
                            var1.title = var8;
                            var8 = _closure2_slot3;
                            var10 = var8.channels;
                            var9 = var10.map;
                            var8 = function(arg0) { // Environment: var6
                                var1 = arg0;
                                var0 = {};
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 14;
                                var3 = var4[var3];
                                var4 = undefined;
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.computeChannelName;
                                var3 = _closure1_slot7;
                                var4 = var3.bind(var4)(var1);
                                var3 = _closure1_slot9;
                                var2 = _closure1_slot8;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                var0.label = var2;
                                var1 = var1.id;
                                var0.value = var1;
                                return var0;
                            };
                            var8 = var9.bind(var10)(var8);
                            var1.items = var8;
                            var6 = function arg0() {
                                var2 = _closure2_slot2;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 10;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.hideActionSheet;
                                var1 = 'WebhookGuildChannelSelector';
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onItemSelect = var6;
                            var6 = _closure2_slot1;
                            var6 = var7 != var6;
                            if (!var6) {
                                _fun48298_ip = 213;
                                continue _fun48298
                            }
                        case 209:
                            var0 = _closure2_slot1;
                        case 213:
                            var1.selectedItem = var0;
                            var0 = 'WebhookGuildChannelSelector';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 231:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var12.bind(var7)(var5, var6);
                var12 = var7.useEffect;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var8;
                var5 = function() { // Environment: var1
                    _fun48301: for (var _fun48301_ip = 0;;) switch (_fun48301_ip) {
                        case 0:
                            var0 = function() {
                                var3 = undefined;
                                var0 = undefined;
                                var2 = _closure1_slot3;
                                var1 = function*(arg0) { // Environment: var1
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun48304: for (var _fun48304_ip = 0;;) switch (_fun48304_ip) {
                                            case 0:
                                                StartGenerator();
                                                var6 = arg0;
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun48304_ip = 123;
                                                    continue _fun48304
                                                }
                                            case 10:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 15;
                                                var1 = var2[var1];
                                                var2 = undefined;
                                                var3 = var3.bind(var2)(var1);
                                                var1 = var3.fetchChannels;
                                                var1 = var1.bind(var3)(var6);
                                                SaveGenerator(address = 50);
                                            case 48:
                                                return var1;
                                            case 50:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                if (var3) {
                                                    _fun48304_ip = 120;
                                                    continue _fun48304
                                                }
                                            case 56:
                                                var4 = _closure2_slot0;
                                                if (!(var4 === var6)) {
                                                    _fun48304_ip = 117;
                                                    continue _fun48304
                                                }
                                            case 67:
                                                var5 = var1.sort;
                                                var4 = function(arg0, arg1) { // Environment: var4
                                                    var0 = arg0;
                                                    var2 = var0.name;
                                                    var1 = var2.localeCompare;
                                                    var0 = arg1;
                                                    var0 = var0.name;
                                                    var0 = var1.bind(var2)(var0);
                                                    return var0;
                                                };
                                                var4 = var5.bind(var1)(var4);
                                                var5 = _closure2_slot4;
                                                var4 = {};
                                                var4.guildId = var6;
                                                var4.channels = var1;
                                                var4 = var5.bind(var2)(var4);
                                                var4 = _closure2_slot5;
                                                var3 = true;
                                                var4.current = var3;
                                            case 117:
                                                return var2;
                                            case 120:
                                                return var1;
                                            case 123:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var3 = var2.bind(var3)(var1);
                                _closure3_slot0 = var3;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var _closure3_slot0 = var0;
                            var4 = _closure2_slot4;
                            var0 = undefined;
                            var2 = null;
                            var4 = var4.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            if (!(var2 != var4)) {
                                _fun48301_ip = 51;
                                continue _fun48301
                            }
                        case 35:
                            var4 = _closure2_slot0;
                            var3 = function arg0() {
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var3 = var3.bind(var0)(var4);
                            _fun48301_ip = 60;
                            continue _fun48301;
                        case 51:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                        case 60:
                            return var0;
                    }
                };
                var5 = var12.bind(var7)(var5, var6);
                var6 = var7.useEffect;
                var5 = new Array(4);
                var5[0] = var2;
                var5[1] = var11;
                var5[2] = var3;
                var5[3] = var8;
                var3 = function() { // Environment: var1
                    _fun48307: for (var _fun48307_ip = 0;;) switch (_fun48307_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var1 = var1.current;
                            if (!var1) {
                                _fun48307_ip = 88;
                                continue _fun48307
                            }
                        case 15:
                            var1 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun48307_ip = 69;
                                continue _fun48307
                            }
                        case 25:
                            var1 = _closure2_slot3;
                            var4 = var1.channels;
                            var3 = var4.some;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure2_slot1;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun48307_ip = 88;
                                continue _fun48307
                            }
                        case 56:
                            var3 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun48307_ip = 88;
                            continue _fun48307;
                        case 69:
                            var1 = _closure2_slot1;
                            if (!(var2 != var1)) {
                                _fun48307_ip = 88;
                                continue _fun48307
                            }
                        case 77:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 88:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var3, var5);
                if (!(var0 != var8)) {
                    _fun48297_ip = 746;
                    continue _fun48297
                }
            case 226:
                var3 = var0 == var2;
                var16 = undefined;
                if (var3) {
                    _fun48297_ip = 256;
                    continue _fun48297
                }
            case 235:
                var3 = var2.channels;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var16 = var2.bind(var3)(var1);
            case 256:
                var3 = _closure1_slot11;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var10.selectorGroup;
                var1.style = var5;
                var7 = _closure1_slot10;
                var18 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 16;
                var5 = var11[var5];
                var5 = var18.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var13 = 13;
                var12 = var11[var13];
                var12 = var18.bind(var4)(var12);
                var17 = var12.intl;
                var12 = var17.string;
                var11 = var11[var13];
                var11 = var18.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["8qKd+J"];
                var11 = var12.bind(var17)(var11);
                var5.children = var11;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(4);
                var5[0] = var6;
                var7 = var0 != var15;
                var6 = null;
                if (!var7) {
                    _fun48297_ip = 456;
                    continue _fun48297
                }
            case 395:
                var7 = '';
                var6 = null;
                if (!(var7 !== var15)) {
                    _fun48297_ip = 456;
                    continue _fun48297
                }
            case 405:
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var7 = 17;
                var7 = var17[var7];
                var7 = var11.bind(var4)(var7);
                var11 = var7.LegacyText;
                var7 = {};
                var17 = var10.error;
                var7.style = var17;
                var7.children = var15;
                var6 = var12.bind(var4)(var11, var7);
            case 456:
                var5[1] = var6;
                var11 = _closure1_slot10;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var15 = 18;
                var6 = var6[var15];
                var6 = var7.bind(var4)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var17 = var0 == var16;
                var12 = undefined;
                if (var17) {
                    _fun48297_ip = 506;
                    continue _fun48297
                }
            case 501:
                var12 = var16.name;
            case 506:
                if (!(var0 == var12)) {
                    _fun48297_ip = 562;
                    continue _fun48297
                }
            case 510:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var13];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var13];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16["Re/64R"];
                var12 = var17.bind(var18)(var16);
            case 562:
                var6.label = var12;
                var8 = var0 == var8;
                var6.disabled = var8;
                var8 = _closure1_slot10;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var15 = var9[var15];
                var15 = var12.bind(var4)(var15);
                var15 = var15.FormRow;
                var16 = var15.Arrow;
                var15 = {};
                var15 = var8.bind(var4)(var16, var15);
                var6.trailing = var15;
                var15 = var10.select;
                var6.DEPRECATED_style = var15;
                var6.onPress = var14;
                var6 = var11.bind(var4)(var7, var6);
                var5[2] = var6;
                var6 = 17;
                var6 = var9[var6];
                var6 = var12.bind(var4)(var6);
                var7 = var6.LegacyText;
                var6 = {};
                var10 = var10.label;
                var6.style = var10;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.kQXMfN;
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[3] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 746:
                return var0;
        }
    };
    var2.default = var3;
    var2.useStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1376, 3100, 1621, 33, 1297, 671, 3278, 5377, 1307, 1234, 4792, 5349, 3941, 4876, 5378, 2]);