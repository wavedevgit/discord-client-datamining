// modules/create_guild/native/components/CreateGuildContainer.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {};
    var9 = 8;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var8.marginTop = var9;
    var3.contentContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/create_guild/native/components/CreateGuildContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CreateGuildContainer, environment: var1
        _fun71385: for (var _fun71385_ip = 0;;) switch (_fun71385_ip) {
            case 0:
                var4 = arg0;
                var22 = var4.onCreate;
                var _closure2_slot0 = var22;
                var23 = var4.guildTemplate;
                var _closure2_slot1 = var23;
                var7 = var4.autoFocus;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun71385_ip = 39;
                    continue _fun71385
                }
            case 37:
                var7 = true;
            case 39:
                var21 = var4.onHubGuildInfoSet;
                var _closure2_slot2 = var21;
                var20 = var4.isCommunityIntent;
                var _closure2_slot3 = var20;
                var2 = {
                    'onCreate': 0,
                    'guildTemplate': 0,
                    'autoFocus': 0,
                    'onHubGuildInfoSet': 0,
                    'isCommunityIntent': 0
                };
                var13 = null;
                var27 = var2;
                var26 = null;
                var0 = silentSetPrototypeOf(var27, var26);
                var6 = 0;
                var27 = {};
                var26 = var4;
                var25 = var2;
                var14 = copyDataProperties(var27, var26, var25);
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var2 = _closure1_slot10;
                var18 = var2.bind(var3)();
                var19 = _closure1_slot5;
                var8 = var19.useState;
                var5 = _closure1_slot1;
                var17 = _closure1_slot2;
                var2 = 9;
                var2 = var17[var2];
                var10 = var5.bind(var3)(var2);
                var9 = var10.getGuildNameSuggestion;
                var2 = {};
                var4 = true;
                var2.truncateUsername = var4;
                var2 = var9.bind(var10)(var2);
                var2 = var8.bind(var19)(var2);
                var11 = _closure1_slot4;
                var9 = 2;
                var2 = var11.bind(var3)(var2, var9);
                var16 = var2[var6];
                _closure2_slot4 = var16;
                var8 = 1;
                var10 = var2[var8];
                var2 = var19.useState;
                var2 = var2.bind(var19)(var13);
                var2 = var11.bind(var3)(var2, var9);
                var15 = var2[var6];
                _closure2_slot5 = var15;
                var2 = var2[var8];
                _closure2_slot6 = var2;
                var12 = var19.useState;
                var2 = false;
                var2 = var12.bind(var19)(var2);
                var2 = var11.bind(var3)(var2, var9);
                var12 = var2[var6];
                var2 = var2[var8];
                _closure2_slot7 = var2;
                var2 = var19.useState;
                var2 = var2.bind(var19)(var13);
                var2 = var11.bind(var3)(var2, var9);
                var13 = var2[var6];
                var2 = var2[var8];
                _closure2_slot8 = var2;
                var24 = var19.useState;
                var2 = function() { // Environment: var1
                    _fun71386: for (var _fun71386_ip = 0;;) switch (_fun71386_ip) {
                        case 0:
                            var1 = _closure1_slot7;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun71386_ip = 37;
                                continue _fun71386
                            }
                        case 27:
                            var2 = var3.isStaff;
                            var1 = var2.bind(var3)();
                        case 37:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun71386_ip = 47;
                                continue _fun71386
                            }
                        case 44:
                            var0 = var1;
                        case 47:
                            return var0;
                    }
                };
                var2 = var24.bind(var19)(var2);
                var2 = var11.bind(var3)(var2, var9);
                var6 = var2[var6];
                _closure2_slot9 = var6;
                var9 = var2[var8];
                var24 = var19.useCallback;
                var2 = _closure1_slot3;
                var8 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun71388: for (var _fun71388_ip = 0;;) switch (_fun71388_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun71388_ip = 93;
                                    continue _fun71388
                                }
                            case 7:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.openImagePicker;
                                var1 = {};
                                var5 = _closure1_slot8;
                                var1.size = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 57);
                            case 55:
                                return var1;
                            case 57:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun71388_ip = 90;
                                    continue _fun71388
                                }
                            case 63:
                                var4 = var1.base64;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun71388_ip = 87;
                                    continue _fun71388
                                }
                            case 75:
                                var3 = _closure2_slot6;
                                var3 = var3.bind(var2)(var4);
                            case 87:
                                return var2;
                            case 90:
                                return var1;
                            case 93:
                                return var0;
                        }
                    };
                    return var0;
                };
                var11 = var2.bind(var3)(var8);
                var8 = new Array(0);
                var11 = var24.bind(var19)(var11, var8);
                var8 = var19.useCallback;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun71390: for (var _fun71390_ip = 0;;) switch (_fun71390_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun71390_ip = 394;
                                    continue _fun71390
                                }
                            case 10:
                                var1 = undefined;
                                var5 = undefined;
                                var6 = undefined;
                                var9 = undefined;
                                var4 = _closure2_slot7;
                                var3 = true;
                                var3 = var4.bind(var1)(var3);
                            case 32: // try_start_0
                                var3 = _closure2_slot2;
                                var7 = null;
                                if (!(var7 == var3)) {
                                    _fun71390_ip = 344;
                                    continue _fun71390
                                }
                            case 45:
                                var4 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var3 = 11;
                                var3 = var10[var3];
                                var14 = var4.bind(var1)(var3);
                                var13 = var14.createGuildFromTemplate;
                                var19 = _closure2_slot4;
                                var18 = _closure2_slot5;
                                var17 = _closure2_slot1;
                                var16 = _closure2_slot3;
                                var15 = _closure2_slot9;
                                var20 = var14;
                                var3 = var20[var13](var19, var18, var17, var16, var15, var14);
                                SaveGenerator(address = 105);
                            case 103:
                                return var3;
                            case 105:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun71390_ip = 341;
                                    continue _fun71390
                                }
                            case 114:
                                var5 = var3;
                                var11 = var3.id;
                                var6 = var11;
                                var10 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var4 = 12;
                                var4 = var12[var4];
                                var10 = var10.bind(var1)(var4);
                                var4 = var10.waitForGuild;
                                var4 = var4.bind(var10)(var11);
                                SaveGenerator(address = 160);
                            case 158:
                                return var4;
                            case 160:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 10);
                                if (var10) {
                                    _fun71390_ip = 338;
                                    continue _fun71390
                                }
                            case 169:
                                var11 = _closure1_slot6;
                                var10 = var11.getDefaultChannel;
                                var10 = var10.bind(var11)(var6);
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var11 = 13;
                                var11 = var8[var11];
                                var12 = var6.bind(var1)(var11);
                                var11 = var12.dangerouslyConstructGuildRecordFromUntypedObject;
                                var11 = var11.bind(var12)(var5);
                                var9 = var11;
                                var5 = 14;
                                var5 = var8[var5];
                                var8 = var6.bind(var1)(var5);
                                var6 = var8.loadInviteSuggestions;
                                var5 = {};
                                var12 = global;
                                var12 = var12.Set;
                                var13 = var12.prototype;
                                var13 = Object.create(var13, {
                                    constructor: {
                                        value: var12
                                    }
                                });
                                var20 = var13;
                                var12 = new var20[var12](var19);
                                var12 = var12 instanceof Object ? var12 : var13;
                                var5.omitUserIds = var12;
                                var5.guild = var11;
                                var5.channel = var10;
                                var5 = var6.bind(var8)(var5);
                                SaveGenerator(address = 288);
                            case 286:
                                return var5;
                            case 288:
                                ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun71390_ip = 335;
                                    continue _fun71390
                                }
                            case 294:
                                var6 = _closure2_slot0;
                                var7 = var7 == var6;
                                var6 = undefined;
                                if (var7) {
                                    _fun71390_ip = 322;
                                    continue _fun71390
                                }
                            case 307:
                                var8 = _closure2_slot0;
                                var7 = {};
                                var7.guild = var9;
                                var6 = var8.bind(var1)(var7);
                            case 322:
                                SaveGenerator(address = 326);
                            case 324:
                                return var6;
                            case 326:
                                ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                if (!var7) {
                                    _fun71390_ip = 367;
                                    continue _fun71390
                                }
                            case 332: // try_end0
                                return var6;
                            case 335:
                                return var5;
                            case 338:
                                return var4;
                            case 341:
                                return var3;
                            case 344: // try_start_1
                                var6 = _closure2_slot2;
                                var5 = _closure2_slot4;
                                var4 = _closure2_slot5;
                                var3 = _closure2_slot1;
                                var3 = var6.bind(var1)(var5, var4, var3);
                            case 367: // try_end1
                                _fun71390_ip = 380;
                                continue _fun71390;
                            case 369: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 4);
                                var3 = _closure2_slot8;
                                var3 = var3.bind(var1)(var4);
                            case 380:
                                var3 = _closure2_slot7;
                                var2 = false;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            case 394:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(7);
                var1[0] = var23;
                var1[1] = var15;
                var1[2] = var16;
                var1[3] = var22;
                var1[4] = var21;
                var1[5] = var6;
                var1[6] = var20;
                var8 = var8.bind(var19)(var2, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var0 = 15;
                var0 = var17[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SafeAreaPaddingView;
                var0 = {};
                var0.top = var4;
                var19 = var18.flex;
                var4 = new Array(2);
                var4[0] = var19;
                var18 = var18.contentContainer;
                var4[1] = var18;
                var0.style = var4;
                var4 = 16;
                var4 = var17[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var27 = var4;
                var26 = var14;
                var14 = copyDataProperties(var27, var26);
                var14 = {};
                var14.name = var16;
                var14.icon = var15;
                var14.staffOnly = var6;
                var6 = 'guild';
                var4[var6] = var14;
                var6 = 'error';
                var4[var6] = var13;
                var6 = 'submitting';
                var4[var6] = var12;
                var6 = 'onIconPress';
                var4[var6] = var11;
                var6 = 'onNameChange';
                var4[var6] = var10;
                var6 = 'onStaffOnlyChange';
                var4[var6] = var9;
                var6 = 'onCreate';
                var4[var6] = var8;
                var6 = 'autoFocus';
                var4[var6] = var7;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1662, 1613, 660, 33, 1297, 4659, 5562, 3966, 8892, 4635, 1598, 8305, 4690, 8906, 2]);