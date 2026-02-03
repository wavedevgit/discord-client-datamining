// modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx
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
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.Keyboard;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DirectoryEntryCategories;
    var _closure1_slot9 = var6;
    var3 = var3.getHubCategories;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginHorizontal': 16,
        'gap': 24
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71587: for (var _fun71587_ip = 0;;) switch (_fun71587_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.onSubmit;
                var _closure2_slot0 = var0;
                var8 = var1.buttonLabel;
                var0 = var1.entry;
                var2 = var1.directoryChannelId;
                var _closure2_slot1 = var2;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot13;
                var4 = var1.bind(var3)();
                var1 = _closure1_slot10;
                var19 = var1.bind(var3)(var2);
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var6 = var2.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var17
                    var2 = _closure1_slot8;
                    var1 = var2.getCurrentCategoryId;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var1);
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var7 = null;
                var9 = var7 == var0;
                var6 = undefined;
                if (var9) {
                    _fun71587_ip = 155;
                    continue _fun71587
                }
            case 149:
                var6 = var0.primaryCategoryId;
            case 155:
                if (!(var7 != var6)) {
                    _fun71587_ip = 162;
                    continue _fun71587
                }
            case 159:
                var1 = var6;
            case 162:
                var2 = var2.bind(var5)(var1);
                var1 = _closure1_slot4;
                var5 = 2;
                var2 = var1.bind(var3)(var2, var5);
                var14 = 0;
                var13 = var2[var14];
                _closure2_slot2 = var13;
                var1 = 1;
                var2 = var2[var1];
                _closure2_slot3 = var2;
                var6 = _closure1_slot5;
                var2 = var6.useState;
                var10 = var7 == var0;
                var9 = undefined;
                if (var10) {
                    _fun71587_ip = 224;
                    continue _fun71587
                }
            case 219:
                var9 = var0.description;
            case 224:
                var10 = var7 != var9;
                var0 = '';
                if (!var10) {
                    _fun71587_ip = 238;
                    continue _fun71587
                }
            case 235:
                var0 = var9;
            case 238:
                var0 = var2.bind(var6)(var0);
                var2 = _closure1_slot4;
                var0 = var2.bind(var3)(var0, var5);
                var11 = var0[var14];
                _closure2_slot4 = var11;
                var20 = var0[var1];
                var6 = _closure1_slot5;
                var9 = var6.useState;
                var0 = false;
                var0 = var9.bind(var6)(var0);
                var0 = var2.bind(var3)(var0, var5);
                var9 = var0[var14];
                var0 = var0[var1];
                _closure2_slot5 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)(var7);
                var0 = var2.bind(var3)(var0, var5);
                var16 = var0[var14];
                var0 = var0[var1];
                _closure2_slot6 = var0;
                var0 = function() { // Environment: var17
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun71591: for (var _fun71591_ip = 0;;) switch (_fun71591_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun71591_ip = 156;
                                        continue _fun71591
                                    }
                                case 10:
                                    var3 = _closure2_slot5;
                                    var4 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                case 26: // try_start_0 // try_start_1
                                    var5 = _closure2_slot0;
                                    var3 = _closure2_slot4;
                                    var1 = _closure2_slot2;
                                    var1 = var5.bind(var4)(var3, var1);
                                    SaveGenerator(address = 48);
                                case 46:
                                    return var1;
                                case 48:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun71591_ip = 56;
                                        continue _fun71591
                                    }
                                case 54: // try_end0
                                    _fun71591_ip = 127;
                                    continue _fun71591;
                                case 56: // try_end1
                                    var5 = _closure2_slot5;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 70: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var3 = _closure2_slot6;
                                    var5 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var1 = 9;
                                    var1 = var7[var1];
                                    var1 = var5.bind(var4)(var1);
                                    var5 = var1.prototype;
                                    var5 = Object.create(var5, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var10 = var5;
                                    var9 = var6;
                                    var1 = new var10[var1](var9, var8);
                                    var1 = var1 instanceof Object ? var1 : var5;
                                    var1 = var3.bind(var4)(var1);
                                case 127: // try_end2
                                    var3 = _closure2_slot5;
                                    var1 = false;
                                    var1 = var3.bind(var4)(var1);
                                    return var4;
                                case 141: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot5;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 156:
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
                var10 = var0.bind(var3)();
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var6 = _closure1_slot11;
                var22 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 10;
                var4 = var15[var4];
                var4 = var22.bind(var3)(var4);
                var5 = var4.TextArea;
                var4 = {};
                var18 = 11;
                var21 = var15[var18];
                var21 = var22.bind(var3)(var21);
                var24 = var21.intl;
                var23 = var24.string;
                var21 = var15[var18];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.FFFAGt;
                var21 = var23.bind(var24)(var21);
                var4.label = var21;
                var21 = var15[var18];
                var21 = var22.bind(var3)(var21);
                var24 = var21.intl;
                var23 = var24.string;
                var21 = var15[var18];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["/zbXqm"];
                var21 = var23.bind(var24)(var21);
                var4.description = var21;
                var4.value = var11;
                var4.onChange = var20;
                var20 = var15[var18];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var15 = var15[var18];
                var15 = var22.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.VzuITC;
                var15 = var20.bind(var21)(var15);
                var4.placeholder = var15;
                var15 = 200;
                var4.maxLength = var15;
                var20 = var7 != var16;
                var15 = 'default';
                if (!var20) {
                    _fun71587_ip = 575;
                    continue _fun71587
                }
            case 571:
                var15 = 'error';
            case 575:
                var4.status = var15;
                var15 = var7 == var16;
                var7 = undefined;
                if (var15) {
                    _fun71587_ip = 598;
                    continue _fun71587
                }
            case 588:
                var15 = var16.getAnyErrorMessage;
                var7 = var15.bind(var16)();
            case 598:
                var4.errorMessage = var7;
                var7 = 'blurAndSubmit';
                var4.submitBehavior = var7;
                var7 = 'done';
                var4.returnKeyType = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 12;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var16 = var5.TableRadioGroup;
                var5 = {};
                var20 = var15[var18];
                var20 = var6.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var15[var18];
                var18 = var6.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.Olo8FB;
                var18 = var20.bind(var21)(var18);
                var5.title = var18;
                var5.defaultValue = var13;
                var18 = function arg0() {
                    var1 = _closure1_slot7;
                    var0 = var1.dismiss;
                    var0 = var0.bind(var1)();
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onChange = var18;
                var18 = var19.map;
                var17 = function(arg0) { // Environment: var17
                    var0 = arg0;
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var0.label;
                    var1.label = var5;
                    var5 = var0.value;
                    var1.value = var5;
                    var0 = var0.value;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var17 = var18.bind(var19)(var17);
                var5.children = var17;
                var5 = var7.bind(var3)(var16, var5);
                var4[1] = var5;
                var5 = 14;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var11 = var11.length;
                var11 = var14 === var11;
                if (var11) {
                    _fun71587_ip = 813;
                    continue _fun71587
                }
            case 799:
                var12 = _closure1_slot9;
                var12 = var12.ALL;
                var11 = var13 === var12;
            case 813:
                var5.disabled = var11;
                var5.onPress = var10;
                var5.loading = var9;
                var5.text = var8;
                var8 = 'lg';
                var5.size = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 8937, 8930, 33, 1297, 566, 3352, 5388, 1234, 5422, 5421, 4084, 2]);