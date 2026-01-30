// modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: HeaderRow, environment: var1
        _fun115948: for (var _fun115948_ip = 0;;) switch (_fun115948_ip) {
            case 0:
                var0 = arg0;
                var21 = var0.isUploading;
                var7 = var0.guild;
                var _closure2_slot0 = var7;
                var1 = var0.emojisLength;
                var _closure2_slot1 = var1;
                var20 = var0.description;
                var1 = var0.onSelectRolesForEmoji;
                var _closure2_slot2 = var1;
                var14 = var0.uploadDisabled;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun115948_ip = 59;
                    continue _fun115948
                }
            case 57:
                var14 = false;
            case 59:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot16;
                var17 = var0.bind(var3)();
                _closure2_slot3 = var17;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = false;
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot4;
                var4 = 2;
                var0 = var0.bind(var3)(var1, var4);
                var1 = 0;
                var19 = var0[var1];
                var6 = 1;
                var0 = var0[var6];
                _closure2_slot4 = var0;
                var2 = _closure1_slot5;
                var0 = var2.useState;
                var8 = null;
                var2 = var0.bind(var2)(var8);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var2, var4);
                var13 = var0[var1];
                var0 = var0[var6];
                _closure2_slot5 = var0;
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var0 = '';
                var2 = var2.bind(var5)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var2, var4);
                var1 = var0[var1];
                _closure2_slot6 = var1;
                var0 = var0[var6];
                _closure2_slot7 = var0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 10;
                var1 = var0[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useManageResourcePermissions;
                var1 = var1.bind(var2)(var7);
                var9 = var1.canCreateExpressions;
                var1 = function() { // Environment: var15
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun115951: for (var _fun115951_ip = 0;;) switch (_fun115951_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun115951_ip = 442;
                                        continue _fun115951
                                    }
                                case 12:
                                    var4 = undefined;
                                    var7 = undefined;
                                    var _closure5_slot0 = var4;
                                    var3 = _closure2_slot4;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                    var1 = _closure2_slot5;
                                    var8 = null;
                                    var1 = var1.bind(var4)(var8);
                                    var3 = _closure2_slot7;
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var10[var1];
                                    var9 = var9.bind(var4)(var1);
                                    var1 = var9.v4;
                                    var1 = var1.bind(var9)();
                                    var1 = var3.bind(var4)(var1);
                                case 87: // try_start_0
                                    var3 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var1 = 12;
                                    var1 = var9[var1];
                                    var12 = var3.bind(var4)(var1);
                                    var11 = var12.track;
                                    var1 = _closure1_slot10;
                                    var10 = var1.EMOJI_UPLOAD_STARTED;
                                    var1 = {};
                                    var13 = _closure2_slot0;
                                    var13 = var13.id;
                                    var1.guild_id = var13;
                                    var13 = _closure2_slot6;
                                    var1.upload_id = var13;
                                    var1 = var11.bind(var12)(var10, var1);
                                    var1 = 15;
                                    var1 = var9[var1];
                                    var9 = var3.bind(var4)(var1);
                                    var3 = var9.openImagePicker;
                                    var1 = {};
                                    var10 = _closure1_slot11;
                                    var1.size = var10;
                                    var1 = var3.bind(var9)(var1);
                                    SaveGenerator(address = 189);
                                case 187:
                                    return var1;
                                case 189:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun115951_ip = 413;
                                        continue _fun115951
                                    }
                                case 198:
                                    var3 = var1.base64;
                                    var7 = var3;
                                    if (!(var8 != var3)) {
                                        _fun115951_ip = 385;
                                        continue _fun115951
                                    }
                                case 214:
                                    var3 = _closure2_slot2;
                                    var8 = var8 == var3;
                                    var3 = undefined;
                                    if (var8) {
                                        _fun115951_ip = 235;
                                        continue _fun115951
                                    }
                                case 227:
                                    var8 = _closure2_slot2;
                                    var3 = var8.bind(var4)();
                                case 235:
                                    SaveGenerator(address = 239);
                                case 237:
                                    return var3;
                                case 239:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                                    if (var8) {
                                        _fun115951_ip = 399;
                                        continue _fun115951
                                    }
                                case 248:
                                    var9 = var7;
                                    _closure5_slot0 = var9;
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var6 = 11;
                                    var6 = var8[var6];
                                    var8 = var7.bind(var4)(var6);
                                    var7 = var8.uploadEmoji;
                                    var6 = {};
                                    var10 = _closure2_slot0;
                                    var10 = var10.id;
                                    var6.guildId = var10;
                                    var6.image = var9;
                                    var10 = _closure2_slot1;
                                    var9 = 1;
                                    var11 = var10 + var9;
                                    var9 = global;
                                    var9 = var9.HermesInternal;
                                    var10 = var9.concat;
                                    var9 = 'emoji_';
                                    var9 = var10.bind(var9)(var11);
                                    var6.name = var9;
                                    var6.roles = var3;
                                    var8 = var7.bind(var8)(var6);
                                    var7 = var8.then;
                                    var6 = function() { // Environment: var5
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 12;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.track;
                                        var0 = _closure1_slot10;
                                        var1 = var0.EMOJI_UPLOAD_COMPLETED;
                                        var0 = {};
                                        var5 = _closure2_slot0;
                                        var5 = var5.id;
                                        var0.guild_id = var5;
                                        var4 = _closure2_slot6;
                                        var0.upload_id = var4;
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var7 = var7.bind(var8)(var6);
                                    var6 = var7.catch;
                                    var5 = function(arg0) { // Environment: var5
                                        _fun115953: for (var _fun115953_ip = 0;;) switch (_fun115953_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var3 = var0.body;
                                                var1 = null;
                                                var4 = var1 != var3;
                                                var0 = undefined;
                                                var2 = undefined;
                                                if (!var4) {
                                                    _fun115953_ip = 374;
                                                    continue _fun115953
                                                }
                                            case 24:
                                                var6 = var3.code;
                                                var5 = _closure1_slot9;
                                                var5 = var5.TOO_MANY_EMOJI;
                                                if (!(var6 !== var5)) {
                                                    _fun115953_ip = 314;
                                                    continue _fun115953
                                                }
                                            case 49:
                                                var6 = var3.code;
                                                var5 = _closure1_slot9;
                                                var5 = var5.TOO_MANY_ANIMATED_EMOJI;
                                                if (!(var6 !== var5)) {
                                                    _fun115953_ip = 255;
                                                    continue _fun115953
                                                }
                                            case 71:
                                                var3 = var3.image;
                                                var5 = var1 != var3;
                                                var3 = undefined;
                                                if (!var5) {
                                                    _fun115953_ip = 253;
                                                    continue _fun115953
                                                }
                                            case 89:
                                                var6 = _closure1_slot1;
                                                var9 = _closure1_slot2;
                                                var5 = 12;
                                                var5 = var9[var5];
                                                var8 = var6.bind(var0)(var5);
                                                var7 = var8.track;
                                                var5 = _closure1_slot10;
                                                var6 = var5.EMOJI_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED;
                                                var5 = {};
                                                var11 = _closure2_slot0;
                                                var11 = var11.id;
                                                var5.guild_id = var11;
                                                var11 = global;
                                                var13 = var11.Buffer;
                                                var12 = var13.byteLength;
                                                var11 = _closure5_slot0;
                                                var11 = var12.bind(var13)(var11);
                                                var5.file_size = var11;
                                                var10 = _closure2_slot6;
                                                var5.upload_id = var10;
                                                var5 = var7.bind(var8)(var6, var5);
                                                var6 = _closure1_slot0;
                                                var5 = 13;
                                                var7 = var9[var5];
                                                var7 = var6.bind(var0)(var7);
                                                var8 = var7.intl;
                                                var7 = var8.formatToPlainString;
                                                var5 = var9[var5];
                                                var5 = var6.bind(var0)(var5);
                                                var5 = var5.t;
                                                var6 = var5.kIO9jy;
                                                var5 = {};
                                                var9 = _closure1_slot12;
                                                var5.maxSize = var9;
                                                var3 = var7.bind(var8)(var6, var5);
                                            case 253:
                                                _fun115953_ip = 312;
                                                continue _fun115953;
                                            case 255:
                                                var8 = _closure1_slot0;
                                                var9 = _closure1_slot2;
                                                var5 = 13;
                                                var6 = var9[var5];
                                                var6 = var8.bind(var0)(var6);
                                                var7 = var6.intl;
                                                var6 = var7.string;
                                                var5 = var9[var5];
                                                var5 = var8.bind(var0)(var5);
                                                var5 = var5.t;
                                                var5 = var5["6v5dP/"];
                                                var3 = var6.bind(var7)(var5);
                                            case 312:
                                                _fun115953_ip = 371;
                                                continue _fun115953;
                                            case 314:
                                                var7 = _closure1_slot0;
                                                var8 = _closure1_slot2;
                                                var4 = 13;
                                                var5 = var8[var4];
                                                var5 = var7.bind(var0)(var5);
                                                var6 = var5.intl;
                                                var5 = var6.string;
                                                var4 = var8[var4];
                                                var4 = var7.bind(var0)(var4);
                                                var4 = var4.t;
                                                var4 = var4["jP/Rqm"];
                                                var3 = var5.bind(var6)(var4);
                                            case 371:
                                                var2 = var3;
                                            case 374:
                                                if (!(var1 != var2)) {
                                                    _fun115953_ip = 390;
                                                    continue _fun115953
                                                }
                                            case 378:
                                                var1 = _closure2_slot5;
                                                var1 = var1.bind(var0)(var2);
                                            case 390:
                                                return var0;
                                        }
                                    };
                                    var5 = var6.bind(var7)(var5);
                                case 385: // try_end0
                                    var6 = _closure2_slot4;
                                    var5 = false;
                                    var5 = var6.bind(var4)(var5);
                                    return var4;
                                case 399:
                                    var6 = _closure2_slot4;
                                    var5 = false;
                                    var5 = var6.bind(var4)(var5);
                                    return var3;
                                case 413:
                                    var5 = _closure2_slot4;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    return var1;
                                case 427: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot4;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 442:
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
                var18 = var1.bind(var3)();
                var2 = function(arg0, arg1) { // Original name: createUploadInstructionsListItem, environment: var15
                    var0 = {};
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = 'GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_';
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    var0.id = var1;
                    var1 = arg0;
                    var0.text = var1;
                    return var0;
                };
                var23 = 13;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var10 = var1.intl;
                var7 = var10.string;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.N2qTQ3;
                var1 = var7.bind(var10)(var1);
                var1 = var2.bind(var3)(var1, var6);
                var16 = new Array(4);
                var16[0] = var1;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var10 = var1.intl;
                var7 = var10.formatToPlainString;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var6 = var1.gfAXoR;
                var1 = {};
                var11 = _closure1_slot12;
                var1.maxSize = var11;
                var1 = var7.bind(var10)(var6, var1);
                var1 = var2.bind(var3)(var1, var4);
                var16[1] = var1;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var6 = var1.intl;
                var4 = var6.string;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.rnwKPH;
                var4 = var4.bind(var6)(var1);
                var1 = 3;
                var1 = var2.bind(var3)(var4, var1);
                var16[2] = var1;
                var1 = var0[var23];
                var1 = var5.bind(var3)(var1);
                var4 = var1.intl;
                var1 = var4.string;
                var0 = var0[var23];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["8Vr5Qd"];
                var1 = var1.bind(var4)(var0);
                var0 = 4;
                var0 = var2.bind(var3)(var1, var0);
                var16[3] = var0;
                var2 = _closure1_slot14;
                var1 = _closure1_slot15;
                var0 = {};
                var6 = _closure1_slot13;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var17.headerContainer;
                var4.style = var7;
                if (!var9) {
                    _fun115948_ip = 685;
                    continue _fun115948
                }
            case 562:
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var22 = _closure1_slot2;
                var7 = 16;
                var7 = var22[var7];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Button;
                var7 = {};
                var22 = 'sm';
                var7.size = var22;
                if (var19) {
                    _fun115948_ip = 608;
                    continue _fun115948
                }
            case 605:
                var19 = var21;
            case 608:
                var7.loading = var19;
                var7.onPress = var18;
                var22 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var23];
                var19 = var22.bind(var3)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var18 = var18[var23];
                var18 = var22.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["DU0dy/"];
                var18 = var19.bind(var21)(var18);
                var7.text = var18;
                var7.disabled = var14;
                var9 = var11.bind(var3)(var10, var7);
            case 685:
                var7 = new Array(3);
                var7[0] = var9;
                var8 = var8 != var13;
                if (!var8) {
                    _fun115948_ip = 765;
                    continue _fun115948
                }
            case 700:
                var11 = _closure1_slot14;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 17;
                var9 = var14[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-feedback-critical'
                };
                var14 = var17.errorText;
                var9.style = var14;
                var9.children = var13;
                var8 = var11.bind(var3)(var10, var9);
            case 765:
                var7[1] = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot6;
                var8 = {};
                var11 = var17.uploadInstructionsContainer;
                var8.style = var11;
                var18 = _closure1_slot14;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 17;
                var11 = var19[var13];
                var11 = var22.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var11.children = var20;
                var14 = var18.bind(var3)(var14, var11);
                var11 = new Array(3);
                var11[0] = var14;
                var18 = _closure1_slot14;
                var13 = var19[var13];
                var13 = var22.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-xs/bold',
                    'color': 'text-muted'
                };
                var20 = var17.uploadInstructionsHeading;
                var13.style = var20;
                var20 = var19[var23];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var23];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.jrXfyw;
                var20 = var20.bind(var21)(var19);
                var19 = var20.toUpperCase;
                var19 = var19.bind(var20)();
                var13.children = var19;
                var13 = var18.bind(var3)(var14, var13);
                var11[1] = var13;
                var14 = _closure1_slot14;
                var13 = _closure1_slot7;
                var12 = {};
                var17 = var17.uploadInstructionsList;
                var12.style = var17;
                var12.data = var16;
                var16 = function(arg0) { // Original name: keyExtractor, environment: var15
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var12.keyExtractor = var16;
                var15 = function(arg0) { // Original name: renderItem, environment: var15
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = _closure1_slot13;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'style': null,
                        'variant': 'text-xs/medium',
                        'color': 'text-muted'
                    };
                    var5 = _closure2_slot3;
                    var5 = var5.uploadListItem;
                    var0.style = var5;
                    var5 = var4.text;
                    var0.accessibilityLabel = var5;
                    var5 = var4.text;
                    var4 = ['•', ' '];
                    var4[2] = var5;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var12.renderItem = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
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
    var _closure1_slot17 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot6 = var6;
    var3 = var3.FlatList;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AbortCodes;
    var _closure1_slot9 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot10 = var6;
    var3 = var3.UPLOAD_SMALL_SIZE;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_MAX_FILESIZE_KB;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.Fragment;
    var _closure1_slot15 = var3;
    var11 = 8;
    var3 = var5[var11];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 9;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginTop = var12;
    var3.uploadInstructionsContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.marginVertical = var12;
    var3.uploadInstructionsHeading = var8;
    var8 = {};
    var8.marginLeft = var11;
    var3.uploadInstructionsList = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var3.headerContainer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginTop = var11;
    var3.errorText = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingRight = var9;
    var3.uploadListItem = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalEmoji/HeaderRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConnectedHeaderRow, environment: var1
        _fun115958: for (var _fun115958_ip = 0;;) switch (_fun115958_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun115958_ip = 110;
                    continue _fun115958
                }
            case 9:
                var10 = {};
                var4 = undefined;
                var9 = var1;
                var8 = undefined;
                var5 = copyDataProperties(var10, var9, var8);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 18;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var1 = _closure1_slot8;
                    var0 = var1.isUploadingEmoji;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var7)(var3, var2);
                var3 = _closure1_slot14;
                var2 = _closure1_slot17;
                var0 = {};
                var0.isUploading = var6;
                var10 = var0;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 110:
                var9 = "Cannot destructure 'undefined' or 'null'.";
                var10 = var1;
                var0 = throwTypeError(var10, var9);
                var0 = undefined;
                throw var0;
        }
    };
    var2.ConnectedHeaderRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 14740, 660, 1616, 33, 1297, 671, 8052, 9184, 795, 1234, 491, 3972, 4043, 3901, 566, 2]);