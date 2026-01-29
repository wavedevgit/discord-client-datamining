// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var6;
    var0 = function() { // Original name: Content, environment: var3
        _fun117280: for (var _fun117280_ip = 0;;) switch (_fun117280_ip) {
            case 0:
                var1 = _closure1_slot1;
                var12 = _closure1_slot3;
                var0 = 5;
                var0 = var12[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var18 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = 6;
                var0 = var12[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useEditStateContext;
                var0 = var0.bind(var1)();
                var11 = var0.guildId;
                var2 = var0.editStateId;
                var7 = _closure1_slot2;
                var0 = 7;
                var1 = var12[var0];
                var4 = var7.bind(var3)(var1);
                var1 = var4.useName;
                var4 = var1.bind(var4)(var2);
                var1 = _closure1_slot4;
                var9 = 2;
                var1 = var1.bind(var3)(var4, var9);
                var6 = 0;
                var26 = var1[var6];
                var4 = 1;
                var25 = var1[var4];
                var1 = var12[var0];
                var8 = var7.bind(var3)(var1);
                var1 = var8.useImage;
                var8 = var1.bind(var8)(var2);
                var1 = _closure1_slot4;
                var8 = var1.bind(var3)(var8, var9);
                var1 = var8[var6];
                var8 = var8[var4];
                var _closure2_slot0 = var8;
                var8 = var12[var0];
                var10 = var7.bind(var3)(var8);
                var8 = var10.usePriceTier;
                var10 = var8.bind(var10)(var2);
                var8 = _closure1_slot4;
                var8 = var8.bind(var3)(var10, var9);
                var10 = var8[var6];
                var8 = var8[var4];
                var0 = var12[var0];
                var7 = var7.bind(var3)(var0);
                var0 = var7.useDescription;
                var7 = var0.bind(var7)(var2);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var7, var9);
                var22 = var0[var6];
                var21 = var0[var4];
                var9 = null;
                var0 = var9 != var1;
                var28 = null;
                if (!var0) {
                    _fun117280_ip = 259;
                    continue _fun117280
                }
            case 250:
                var0 = {};
                var0.uri = var1;
                var28 = var0;
            case 259:
                var1 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSubscriptionListing;
                var1 = var0.bind(var1)(var2);
                var2 = var9 == var1;
                var0 = undefined;
                if (var2) {
                    _fun117280_ip = 305;
                    continue _fun117280
                }
            case 299:
                var0 = var1.published;
            case 305:
                var24 = true;
                var12 = var24 === var0;
                var20 = _closure1_slot0;
                var14 = _closure1_slot3;
                var0 = 9;
                var0 = var14[var0];
                var1 = var20.bind(var3)(var0);
                var0 = var1.useRoleSubscriptionSettingsDisabled;
                var13 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var16 = _closure1_slot9;
                var6 = _closure1_slot1;
                var7 = 10;
                var4 = var14[var7];
                var15 = var6.bind(var3)(var4);
                var4 = {};
                var17 = var18.header;
                var4.style = var17;
                var17 = 11;
                var19 = var14[var17];
                var19 = var20.bind(var3)(var19);
                var29 = var19.intl;
                var27 = var29.string;
                var19 = var14[var17];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["6XpbbR"];
                var19 = var27.bind(var29)(var19);
                var4.children = var19;
                var15 = var16.bind(var3)(var15, var4);
                var4 = new Array(8);
                var4[0] = var15;
                var19 = _closure1_slot9;
                var27 = 12;
                var15 = var14[var27];
                var16 = var6.bind(var3)(var15);
                var15 = {};
                var29 = var14[var17];
                var29 = var20.bind(var3)(var29);
                var31 = var29.intl;
                var30 = var31.string;
                var29 = var14[var17];
                var29 = var20.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.pNZfgG;
                var29 = var30.bind(var31)(var29);
                var15.description = var29;
                var15.image = var28;
                var28 = _closure1_slot8;
                var15.imageUploadSize = var28;
                var27 = var14[var27];
                var27 = var20.bind(var3)(var27);
                var27 = var27.PreviewShape;
                var27 = var27.CIRCLE;
                var15.previewShape = var27;
                var23 = function(arg0) { // Original name: setImage, environment: var23
                    var0 = arg0;
                    var2 = var0.uri;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var15.setImage = var23;
                var15.disabled = var13;
                var15 = var19.bind(var3)(var16, var15);
                var4[1] = var15;
                var19 = _closure1_slot9;
                var15 = var14[var7];
                var16 = var6.bind(var3)(var15);
                var15 = {};
                var23 = var18.header;
                var15.style = var23;
                var23 = var14[var17];
                var23 = var20.bind(var3)(var23);
                var28 = var23.intl;
                var27 = var28.string;
                var23 = var14[var17];
                var23 = var20.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.rJ6Oad;
                var23 = var27.bind(var28)(var23);
                var15.children = var23;
                var15 = var19.bind(var3)(var16, var15);
                var4[2] = var15;
                var23 = _closure1_slot9;
                var15 = 13;
                var16 = var14[var15];
                var16 = var20.bind(var3)(var16);
                var19 = var16.FormInput;
                var16 = {
                    'style': null,
                    'showTopContainer': false,
                    'multiline': false
                };
                var27 = var18.textInput;
                var16.style = var27;
                var27 = _closure1_slot7;
                var16.maxLength = var27;
                var16.value = var26;
                var26 = var14[var17];
                var26 = var20.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var14[var17];
                var26 = var20.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["i4/g+E"];
                var26 = var27.bind(var28)(var26);
                var16.placeholder = var26;
                var16.onChange = var25;
                var16.autoFocus = var24;
                var24 = 14;
                var24 = var14[var24];
                var24 = var20.bind(var3)(var24);
                var24 = var24.ClearButtonVisibility;
                var24 = var24.WITH_CONTENT;
                var16.clearButtonVisibility = var24;
                var16.disabled = var13;
                var16 = var23.bind(var3)(var19, var16);
                var4[3] = var16;
                var23 = _closure1_slot9;
                var16 = var14[var7];
                var19 = var6.bind(var3)(var16);
                var16 = {};
                var24 = var18.header;
                var16.style = var24;
                var24 = var14[var17];
                var24 = var20.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var14[var17];
                var24 = var20.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["74JctW"];
                var24 = var25.bind(var26)(var24);
                var16.children = var24;
                var16 = var23.bind(var3)(var19, var16);
                var4[4] = var16;
                var19 = _closure1_slot9;
                var15 = var14[var15];
                var15 = var20.bind(var3)(var15);
                var16 = var15.FormInput;
                var15 = {
                    'style': null,
                    'showTopContainer': false,
                    'multiline': true,
                    'maxLength': null,
                    'numberOfLines': 3
                };
                var23 = var18.textInput;
                var15.style = var23;
                var23 = _closure1_slot6;
                var15.maxLength = var23;
                var15.value = var22;
                var22 = var14[var17];
                var22 = var20.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var14[var17];
                var22 = var20.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["3YHwoG"];
                var22 = var23.bind(var24)(var22);
                var15.placeholder = var22;
                var15.onChange = var21;
                var15.disabled = var13;
                var15 = var19.bind(var3)(var16, var15);
                var4[5] = var15;
                var16 = _closure1_slot9;
                var7 = var14[var7];
                var15 = var6.bind(var3)(var7);
                var7 = {};
                var18 = var18.header;
                var7.style = var18;
                var18 = var14[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var14[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.CrRVAx;
                var17 = var18.bind(var19)(var17);
                var7.children = var17;
                var7 = var16.bind(var3)(var15, var7);
                var4[6] = var7;
                var7 = _closure1_slot9;
                var5 = 15;
                var5 = var14[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                if (var12) {
                    _fun117280_ip = 1149;
                    continue _fun117280
                }
            case 1146:
                var12 = var13;
            case 1149:
                var5.disabled = var12;
                var5.guildId = var11;
                var11 = var9 != var10;
                var9 = null;
                if (!var11) {
                    _fun117280_ip = 1169;
                    continue _fun117280
                }
            case 1166:
                var9 = var10;
            case 1169:
                var5.price = var9;
                var5.onChange = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[7] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var7 = var4.bind(var0)(var1);
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot5 = var4;
    var4 = var1.MAX_SUBSCRIPTION_TIER_DESCRIPTION_LENGTH;
    var _closure1_slot6 = var4;
    var1 = var1.MAX_SUBSCRIPTION_TIER_NAME_LENGTH;
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot9 = var4;
    var4 = var1.Fragment;
    var _closure1_slot10 = var4;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var4 = var7.memo;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot9;
        var2 = _closure1_slot13;
        var1 = undefined;
        var0 = {};
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot12 = var1;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDetailsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: GuildRoleSubscriptionTierDetailsModal, environment: var3
        _fun117283: for (var _fun117283_ip = 0;;) switch (_fun117283_ip) {
            case 0:
                var1 = _closure1_slot0;
                var10 = _closure1_slot3;
                var0 = 6;
                var0 = var10[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useEditStateContext;
                var0 = var0.bind(var1)();
                var9 = var0.editStateId;
                var6 = _closure1_slot2;
                var0 = 7;
                var1 = var10[var0];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useName;
                var2 = var1.bind(var2)(var9);
                var1 = _closure1_slot4;
                var8 = 1;
                var1 = var1.bind(var3)(var2, var8);
                var2 = 0;
                var5 = var1[var2];
                var1 = var10[var0];
                var7 = var6.bind(var3)(var1);
                var1 = var7.useImage;
                var7 = var1.bind(var7)(var9);
                var1 = _closure1_slot4;
                var1 = var1.bind(var3)(var7, var8);
                var1 = var1[var2];
                var7 = var10[var0];
                var11 = var6.bind(var3)(var7);
                var7 = var11.usePriceTier;
                var11 = var7.bind(var11)(var9);
                var7 = _closure1_slot4;
                var7 = var7.bind(var3)(var11, var8);
                var7 = var7[var2];
                var0 = var10[var0];
                var6 = var6.bind(var3)(var0);
                var0 = var6.useDescription;
                var6 = var0.bind(var6)(var9);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)(var6, var8);
                var0 = var0[var2];
                var5 = var5.length;
                var5 = var5 > var2;
                if (!var5) {
                    _fun117283_ip = 207;
                    continue _fun117283
                }
            case 201:
                var6 = null;
                var5 = var6 != var7;
            case 207:
                if (!var5) {
                    _fun117283_ip = 219;
                    continue _fun117283
                }
            case 210:
                var0 = var0.length;
                var5 = var0 > var2;
            case 219:
                if (!var5) {
                    _fun117283_ip = 228;
                    continue _fun117283
                }
            case 222:
                var0 = null;
                var5 = var0 != var1;
            case 228:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var10 = _closure1_slot3;
                var0 = 16;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = _closure1_slot0;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.o3pHas;
                var7 = var8.bind(var11)(var7);
                var0.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.oOOME5;
                var6 = var7.bind(var8)(var6);
                var0.description = var6;
                var0.canProceedToNextStep = var5;
                var5 = _closure1_slot5;
                var5 = var5.CHANNEL_BENEFITS;
                var0.nextStep = var5;
                var5 = false;
                var0.scrollable = var5;
                var12 = arg0;
                var13 = var0;
                var5 = copyDataProperties(var13, var12);
                var6 = _closure1_slot9;
                var5 = _closure1_slot12;
                var4 = {};
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.GuildRoleSubscriptionTierDetailsTab = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5593, 660, 33, 12557, 14889, 10717, 10700, 14866, 5888, 1234, 14879, 5335, 5364, 14918, 14881, 2]);