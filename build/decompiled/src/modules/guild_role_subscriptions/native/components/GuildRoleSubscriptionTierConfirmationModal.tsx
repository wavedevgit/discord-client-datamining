// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var3 = 16;
    var9.paddingHorizontal = var3;
    var6.description = var9;
    var9 = {};
    var9.marginHorizontal = var3;
    var6.coverPhotoContainer = var9;
    var9 = {
        'height': 114,
        'width': '100%',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var10 = 7;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var6.coverPhoto = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierConfirmationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117061: for (var _fun117061_ip = 0;;) switch (_fun117061_ip) {
            case 0:
                var4 = arg0;
                var17 = var4.onDone;
                var _closure2_slot0 = var17;
                var6 = var4.isForGroupSetupModal;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun117061_ip = 29;
                    continue _fun117061
                }
            case 27:
                var6 = false;
            case 29:
                var11 = null;
                var2 = Object.create(var11);
                var10 = 0;
                var2.onDone = var10;
                var2.isForGroupSetupModal = var10;
                var31 = {};
                var30 = var4;
                var29 = var2;
                var5 = copyDataProperties(var31, var30, var29);
                var _closure2_slot1 = var3;
                var1 = _closure1_slot11;
                var16 = var1.bind(var3)();
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 8;
                var2 = var12[var2];
                var2 = var1.bind(var3)(var2);
                var13 = var2.bind(var3)();
                var18 = _closure1_slot0;
                var2 = 9;
                var2 = var12[var2];
                var7 = var18.bind(var3)(var2);
                var2 = var7.useEditStateContext;
                var2 = var2.bind(var7)();
                var9 = var2.guildId;
                var8 = var2.editStateId;
                var14 = _closure1_slot5;
                var7 = var14.useState;
                var2 = false;
                var7 = var7.bind(var14)(var2);
                var20 = _closure1_slot4;
                var2 = 2;
                var2 = var20.bind(var3)(var7, var2);
                var7 = var2[var10];
                var15 = 1;
                var19 = var2[var15];
                _closure2_slot1 = var19;
                var21 = _closure1_slot7;
                var2 = var21.useGroupCoverState;
                var2 = var2.bind(var21)();
                var2 = var20.bind(var3)(var2, var15);
                var25 = var2[var10];
                var2 = var21.useGroupDescriptionState;
                var2 = var2.bind(var21)();
                var2 = var20.bind(var3)(var2, var15);
                var15 = var2[var10];
                var10 = var14.useCallback;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun117063: for (var _fun117063_ip = 0;;) switch (_fun117063_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun117063_ip = 89;
                                    continue _fun117063
                                }
                            case 7: // try_start_0
                                var3 = _closure2_slot1;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                                var1 = _closure2_slot0;
                                var1 = var1.bind(var4)();
                                SaveGenerator(address = 35);
                            case 33:
                                return var1;
                            case 35:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun117063_ip = 55;
                                    continue _fun117063
                                }
                            case 41: // try_end0
                                var5 = _closure2_slot1;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var4;
                            case 55:
                                var3 = _closure2_slot1;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            case 69: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var4 = _closure2_slot1;
                                var3 = undefined;
                                var2 = false;
                                var2 = var4.bind(var3)(var2);
                                throw var1;
                            case 89:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var0);
                var0 = new Array(2);
                var0[0] = var19;
                var0[1] = var17;
                var10 = var10.bind(var14)(var2, var0);
                var2 = _closure1_slot10;
                var0 = 10;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var19 = 11;
                var14 = var12[var19];
                var14 = var18.bind(var3)(var14);
                var20 = var14.intl;
                var17 = var20.string;
                var14 = var12[var19];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.T0lZnZ;
                var14 = var17.bind(var20)(var14);
                var0.title = var14;
                var14 = var12[var19];
                var14 = var18.bind(var3)(var14);
                var17 = var14.intl;
                var14 = var17.string;
                var12 = var12[var19];
                var12 = var18.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.ltfNIq;
                var12 = var14.bind(var17)(var12);
                var0.description = var12;
                var12 = !var7;
                var0.canProceedToNextStep = var12;
                var0.nextStep = var11;
                var0.onProceed = var10;
                var0.submitting = var7;
                var31 = var0;
                var30 = var5;
                var5 = copyDataProperties(var31, var30);
                if (!var6) {
                    _fun117061_ip = 805;
                    continue _fun117061
                }
            case 421:
                var10 = _closure1_slot10;
                var7 = _closure1_slot9;
                var5 = {};
                var12 = var11 != var25;
                if (!var12) {
                    _fun117061_ip = 634;
                    continue _fun117061
                }
            case 441:
                var17 = _closure1_slot10;
                var14 = _closure1_slot9;
                var11 = {};
                var22 = _closure1_slot8;
                var24 = _closure1_slot1;
                var26 = _closure1_slot2;
                var18 = 12;
                var18 = var26[var18];
                var20 = var24.bind(var3)(var18);
                var18 = {};
                var21 = var13.header;
                var18.style = var21;
                var28 = _closure1_slot0;
                var21 = var26[var19];
                var21 = var28.bind(var3)(var21);
                var27 = var21.intl;
                var23 = var27.string;
                var21 = var26[var19];
                var21 = var28.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["3S8gA7"];
                var21 = var23.bind(var27)(var21);
                var18.children = var21;
                var20 = var22.bind(var3)(var20, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var21 = _closure1_slot6;
                var20 = {};
                var23 = var16.coverPhotoContainer;
                var20.style = var23;
                var23 = 13;
                var23 = var26[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var26 = var16.coverPhoto;
                var23.style = var26;
                var26 = 'cover';
                var23.resizeMode = var26;
                var23.source = var25;
                var23 = var22.bind(var3)(var24, var23);
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var18[1] = var20;
                var11.children = var18;
                var12 = var17.bind(var3)(var14, var11);
            case 634:
                var11 = new Array(3);
                var11[0] = var12;
                var14 = _closure1_slot8;
                var18 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 12;
                var12 = var17[var12];
                var18 = var18.bind(var3)(var12);
                var12 = {};
                var13 = var13.header;
                var12.style = var13;
                var13 = _closure1_slot0;
                var20 = var17[var19];
                var20 = var13.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var17[var19];
                var19 = var13.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["74JctW"];
                var19 = var20.bind(var21)(var19);
                var12.children = var19;
                var12 = var14.bind(var3)(var18, var12);
                var11[1] = var12;
                var12 = 14;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-active'
                };
                var16 = var16.description;
                var12.style = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var5.children = var11;
                var6 = var10.bind(var3)(var7, var5);
            case 805:
                var5 = new Array(2);
                var5[0] = var6;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 15;
                var4 = var10[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.GuildRoleSubscriptionListingPreview;
                var4 = {};
                var4.guildId = var9;
                var4.listingId = var8;
                var4 = var7.bind(var3)(var6, var4);
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 14925, 33, 1297, 671, 12582, 14936, 14928, 1234, 5934, 4704, 3941, 14960, 2]);