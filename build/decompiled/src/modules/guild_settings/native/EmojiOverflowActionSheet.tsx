// modules/guild_settings/native/EmojiOverflowActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 8,
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 16
    };
    var3.header = var8;
    var8 = {
        'width': 30,
        'height': 30,
        'resizeMode': 'contain'
    };
    var3.emojiImage = var8;
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_FEEDBACK_CRITICAL;
    var8.tintColor = var11;
    var3.destructiveIcon = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_FEEDBACK_CRITICAL;
    var8.color = var9;
    var3.destructiveText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/EmojiOverflowActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: EmojiOverflowActionSheet, environment: var1
        _fun115662: for (var _fun115662_ip = 0;;) switch (_fun115662_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.emoji;
                var _closure2_slot0 = var10;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var13 = var0.onSelectRolesForEmoji;
                var _closure2_slot2 = var13;
                var1 = var0.onEdit;
                var _closure2_slot3 = var1;
                var11 = var0.onClose;
                var _closure2_slot4 = var11;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 6;
                var0 = var22[var0];
                var0 = var25.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var8.header;
                var4.style = var6;
                var16 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var8 = var8.emojiImage;
                var6.style = var8;
                var8 = {};
                var14 = _closure1_slot1;
                var12 = 7;
                var12 = var22[var12];
                var15 = var14.bind(var3)(var12);
                var14 = var15.getEmojiURL;
                var12 = {};
                var18 = var10.id;
                var12.id = var18;
                var18 = var10.animated;
                var12.animated = var18;
                var18 = 48;
                var12.size = var18;
                var12 = var14.bind(var15)(var12);
                var8.uri = var12;
                var6.source = var8;
                var7 = var16.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var12 = 8;
                var7 = var22[var12];
                var7 = var25.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = 'text-md/semibold';
                var18 = var10.name;
                var10 = global;
                var10 = var10.HermesInternal;
                var14 = var10.concat;
                var10 = ':';
                var10 = var14.bind(var10)(var18, var10);
                var7.children = var10;
                var7 = var16.bind(var3)(var8, var7);
                var6[1] = var7;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 9;
                var5 = var22[var5];
                var5 = var25.bind(var3)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var8 = 10;
                var7 = var22[var8];
                var7 = var25.bind(var3)(var7);
                var10 = var7.TableRow;
                var7 = {};
                var14 = 11;
                var14 = var22[var14];
                var14 = var25.bind(var3)(var14);
                var18 = var14.TrashIcon;
                var14 = {};
                var19 = 'text-feedback-critical';
                var14.color = var19;
                var14 = var16.bind(var3)(var18, var14);
                var7.icon = var14;
                var14 = var22[var12];
                var14 = var25.bind(var3)(var14);
                var19 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-feedback-critical'
                };
                var18 = 12;
                var20 = var22[var18];
                var20 = var25.bind(var3)(var20);
                var23 = var20.intl;
                var21 = var23.string;
                var20 = var22[var18];
                var20 = var25.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.oyYWHE;
                var20 = var21.bind(var23)(var20);
                var14.children = var20;
                var14 = var16.bind(var3)(var19, var14);
                var7.label = var14;
                var14 = function() { // Original name: onPress, environment: var17
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.deleteEmoji;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var7.onPress = var14;
                var10 = var16.bind(var3)(var10, var7);
                var7 = new Array(4);
                var7[0] = var10;
                var10 = var22[var8];
                var10 = var25.bind(var3)(var10);
                var14 = var10.TableRow;
                var10 = {};
                var19 = 14;
                var20 = var22[var19];
                var20 = var25.bind(var3)(var20);
                var21 = var20.PencilIcon;
                var20 = {};
                var20 = var16.bind(var3)(var21, var20);
                var10.icon = var20;
                var20 = var22[var12];
                var20 = var25.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {};
                var20.variant = var15;
                var23 = var22[var18];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var18];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.bt75uw;
                var22 = var23.bind(var24)(var22);
                var20.children = var22;
                var20 = var16.bind(var3)(var21, var20);
                var10.label = var20;
                var20 = function() { // Original name: onPress, environment: var17
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var1 = _closure2_slot4;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var10.onPress = var20;
                var10 = var16.bind(var3)(var14, var10);
                var7[1] = var10;
                var10 = null;
                var13 = var10 != var13;
                if (!var13) {
                    _fun115662_ip = 821;
                    continue _fun115662
                }
            case 661:
                var16 = _closure1_slot6;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = var21[var8];
                var13 = var24.bind(var3)(var13);
                var14 = var13.TableRow;
                var13 = {};
                var19 = var21[var19];
                var19 = var24.bind(var3)(var19);
                var20 = var19.PencilIcon;
                var19 = {};
                var19 = var16.bind(var3)(var20, var19);
                var13.icon = var19;
                var19 = var21[var12];
                var19 = var24.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {};
                var19.variant = var15;
                var22 = var21[var18];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var18];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["+riKdA"];
                var21 = var22.bind(var23)(var21);
                var19.children = var21;
                var19 = var16.bind(var3)(var20, var19);
                var13.label = var19;
                var19 = _closure1_slot3;
                var17 = function*() { // Environment: var17
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun115666: for (var _fun115666_ip = 0;;) switch (_fun115666_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun115666_ip = 292;
                                    continue _fun115666
                                }
                            case 10:
                                var1 = undefined;
                                var5 = undefined;
                            case 14: // try_start_0
                                var3 = _closure2_slot2;
                                var2 = _closure2_slot0;
                                var2 = var3.bind(var1)(var2);
                                SaveGenerator(address = 34);
                            case 32:
                                return var2;
                            case 34:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun115666_ip = 121;
                                    continue _fun115666
                                }
                            case 40:
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 13;
                                var3 = var7[var3];
                                var7 = var4.bind(var1)(var3);
                                var4 = var7.updateEmoji;
                                var3 = {};
                                var9 = _closure2_slot1;
                                var3.guildId = var9;
                                var8 = _closure2_slot0;
                                var8 = var8.id;
                                var3.emojiId = var8;
                                var3.roles = var2;
                                var3 = var4.bind(var7)(var3);
                                SaveGenerator(address = 107);
                            case 105:
                                return var3;
                            case 107:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun115666_ip = 118;
                                    continue _fun115666
                                }
                            case 113: // try_end0
                                _fun115666_ip = 278;
                                continue _fun115666;
                            case 118:
                                return var3;
                            case 121:
                                return var2;
                            case 124: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var6 = var4;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 15;
                                var3 = var8[var3];
                                var3 = var7.bind(var1)(var3);
                                var3 = var3.APIError;
                                var3 = var4 instanceof var3;
                                if (!var3) {
                                    _fun115666_ip = 278;
                                    continue _fun115666
                                }
                            case 165:
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 16;
                                var3 = var7[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.presentError;
                                var7 = var6;
                                var6 = var7.getAnyErrorMessage;
                                var7 = var6.bind(var7)();
                                var5 = var7;
                                var6 = null;
                                if (!(var6 == var7)) {
                                    _fun115666_ip = 270;
                                    continue _fun115666
                                }
                            case 213:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var2 = 12;
                                var6 = var9[var2];
                                var6 = var8.bind(var1)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var2 = var9[var2];
                                var2 = var8.bind(var1)(var2);
                                var2 = var2.t;
                                var2 = var2.R0RpRX;
                                var2 = var6.bind(var7)(var2);
                                _fun115666_ip = 273;
                                continue _fun115666;
                            case 270:
                                var2 = var5;
                            case 273:
                                var2 = var3.bind(var4)(var2);
                            case 278:
                                var2 = _closure2_slot4;
                                var2 = var2.bind(var1)();
                                return var1;
                            case 292:
                                return var0;
                        }
                    };
                    return var0;
                };
                var17 = var19.bind(var3)(var17);
                var13.onPress = var17;
                var10 = var16.bind(var3)(var14, var13);
            case 821:
                var7[2] = var10;
                var10 = _closure1_slot6;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = var14[var8];
                var8 = var17.bind(var3)(var8);
                var9 = var8.TableRow;
                var8 = {};
                var13 = 17;
                var13 = var14[var13];
                var13 = var17.bind(var3)(var13);
                var16 = var13.XSmallIcon;
                var13 = {};
                var13 = var10.bind(var3)(var16, var13);
                var8.icon = var13;
                var12 = var14[var12];
                var12 = var17.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var12.variant = var15;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["ETE/oC"];
                var14 = var15.bind(var16)(var14);
                var12.children = var14;
                var12 = var10.bind(var3)(var13, var12);
                var8.label = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 671, 5164, 1417, 3895, 5320, 4854, 3228, 1234, 9179, 7473, 3309, 3106, 4688, 2]);