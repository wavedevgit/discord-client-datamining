// modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ActivityIndicator;
    var _closure1_slot6 = var8;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: GuildSettingsModalStickerInfoActionSheet, environment: var1
        _fun116023: for (var _fun116023_ip = 0;;) switch (_fun116023_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var1 = var0.stickerId;
                var _closure2_slot1 = var1;
                var0 = var0.hideActionSheet;
                var _closure2_slot2 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var4 = undefined;
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var17
                    _fun116024: for (var _fun116024_ip = 0;;) switch (_fun116024_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = var2.getStickersByGuildId;
                            var0 = _closure2_slot0;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun116024_ip = 55;
                                continue _fun116024
                            }
                        case 36:
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure2_slot1;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 55:
                            return var0;
                    }
                };
                var7 = var3.bind(var5)(var2, var1);
                var _closure2_slot3 = var7;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var1 = false;
                var5 = var2.bind(var3)(var1);
                var2 = _closure1_slot4;
                var1 = 2;
                var2 = var2.bind(var4)(var5, var1);
                var1 = 0;
                var14 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot4 = var1;
                var1 = function() { // Environment: var17
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun116028: for (var _fun116028_ip = 0;;) switch (_fun116028_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun116028_ip = 270;
                                        continue _fun116028
                                    }
                                case 10:
                                    var3 = _closure2_slot3;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun116028_ip = 250;
                                        continue _fun116028
                                    }
                                case 26:
                                    var3 = _closure2_slot4;
                                    var4 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                case 39: // try_start_0 // try_start_1
                                    var3 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 7;
                                    var1 = var5[var1];
                                    var5 = var3.bind(var4)(var1);
                                    var3 = var5.deleteGuildSticker;
                                    var1 = _closure2_slot3;
                                    var1 = var3.bind(var5)(var1);
                                    SaveGenerator(address = 81);
                                case 79:
                                    return var1;
                                case 81:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun116028_ip = 100;
                                        continue _fun116028
                                    }
                                case 87:
                                    var3 = _closure2_slot2;
                                    var3 = var3.bind(var4)();
                                case 95: // try_end0
                                    _fun116028_ip = 239;
                                    continue _fun116028;
                                case 100: // try_end1
                                    var5 = _closure2_slot4;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 114: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var10[var1];
                                    var5 = var3.bind(var4)(var1);
                                    var3 = var5.open;
                                    var1 = {};
                                    var7 = 'IMAGE_PICKER_ERROR';
                                    var1.key = var7;
                                    var9 = _closure1_slot0;
                                    var6 = 9;
                                    var6 = var10[var6];
                                    var6 = var9.bind(var4)(var6);
                                    var6 = var6.CircleErrorIcon;
                                    var1.IconComponent = var6;
                                    var6 = 10;
                                    var7 = var10[var6];
                                    var7 = var9.bind(var4)(var7);
                                    var8 = var7.intl;
                                    var7 = var8.string;
                                    var6 = var10[var6];
                                    var6 = var9.bind(var4)(var6);
                                    var6 = var6.t;
                                    var6 = var6["5NMPSS"];
                                    var6 = var7.bind(var8)(var6);
                                    var1.content = var6;
                                    var1 = var3.bind(var5)(var1);
                                case 239: // try_end2
                                    var3 = _closure2_slot4;
                                    var1 = false;
                                    var1 = var3.bind(var4)(var1);
                                case 250:
                                    var1 = undefined;
                                    return var1;
                                case 255: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot4;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 270:
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
                var13 = var1.bind(var4)();
                var2 = var3.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var7;
                var0 = function() { // Environment: var17
                    _fun116030: for (var _fun116030_ip = 0;;) switch (_fun116030_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun116030_ip = 23;
                                continue _fun116030
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var16 = null;
                var1 = var16 == var7;
                var0 = null;
                if (var1) {
                    _fun116023_ip = 687;
                    continue _fun116023
                }
            case 194:
                var3 = _closure1_slot9;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 11;
                var1 = var20[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var5 = 12;
                var5 = var20[var5];
                var5 = var18.bind(var4)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var8 = var7.name;
                var5.title = var8;
                var7 = var7.description;
                var5.subtitle = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.header = var5;
                var6 = _closure1_slot7;
                var5 = {};
                var7 = {};
                var9 = _closure1_slot1;
                var8 = 13;
                var10 = var20[var8];
                var10 = var9.bind(var4)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_12;
                var7.paddingHorizontal = var10;
                var8 = var20[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var7.paddingBottom = var8;
                var5.style = var7;
                var9 = _closure1_slot10;
                var7 = 14;
                var7 = var20[var7];
                var7 = var18.bind(var4)(var7);
                var8 = var7.TableRowGroup;
                var7 = {};
                var11 = 15;
                var10 = var20[var11];
                var10 = var18.bind(var4)(var10);
                var12 = var10.TableRow;
                var10 = {};
                var19 = 16;
                var19 = var20[var19];
                var19 = var18.bind(var4)(var19);
                var21 = var19.PencilIcon;
                var19 = {};
                var19 = var3.bind(var4)(var21, var19);
                var10.icon = var19;
                var19 = 10;
                var21 = var20[var19];
                var21 = var18.bind(var4)(var21);
                var23 = var21.intl;
                var22 = var23.string;
                var21 = var20[var19];
                var21 = var18.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.tdhW5b;
                var21 = var22.bind(var23)(var21);
                var10.label = var21;
                var17 = function() { // Original name: onPress, environment: var17
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var3 = _closure2_slot1;
                    var1.stickerId = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onPress = var17;
                var12 = var3.bind(var4)(var12, var10);
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var20[var11];
                var11 = var18.bind(var4)(var11);
                var12 = var11.TableRow;
                var11 = {};
                var17 = 18;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.TrashIcon;
                var17 = {};
                var20 = 'text-feedback-critical';
                var17.color = var20;
                var17 = var3.bind(var4)(var18, var17);
                var11.icon = var17;
                var16 = null;
                if (!var14) {
                    _fun116023_ip = 570;
                    continue _fun116023
                }
            case 554:
                var20 = _closure1_slot9;
                var18 = _closure1_slot6;
                var17 = {};
                var16 = var20.bind(var4)(var18, var17);
            case 570:
                var11.trailing = var16;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = var15[var19];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15["+ZhGOk"];
                var15 = var16.bind(var17)(var15);
                var11.label = var15;
                var15 = 'danger';
                var11.variant = var15;
                var11.disabled = var14;
                var11.onPress = var13;
                var11 = var3.bind(var4)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 687:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickerInfoActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 5555, 33, 566, 9317, 3107, 5352, 1234, 4893, 5173, 671, 5324, 4860, 7476, 14755, 3228, 2]);