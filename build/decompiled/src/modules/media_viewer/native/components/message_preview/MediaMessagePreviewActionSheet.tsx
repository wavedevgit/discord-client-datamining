// modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun73474: for (var _fun73474_ip = 0;;) switch (_fun73474_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channel;
                var _closure2_slot0 = var1;
                var6 = var2.message;
                var _closure2_slot1 = var6;
                var5 = var2.user;
                var11 = var2.closeMediaModal;
                var _closure2_slot2 = var11;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.DeveloperMode;
                var2 = var4.useSetting;
                var10 = var2.bind(var4)();
                var2 = var5.isNonUserBot;
                var2 = var2.bind(var5)();
                var8 = !var2;
                if (!var8) {
                    _fun73474_ip = 130;
                    continue _fun73474
                }
            case 99:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.canReportUser;
                var8 = var2.bind(var4)(var5);
            case 130:
                if (!var8) {
                    _fun73474_ip = 164;
                    continue _fun73474
                }
            case 133:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.canReportMessage;
                var8 = var2.bind(var4)(var6);
            case 164:
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2 = new Array(0);
                var5 = var7.bind(var4)(var5, var2);
                _closure2_slot3 = var5;
                var7 = var4.useCallback;
                var2 = new Array(5);
                var2[0] = var5;
                var2[1] = var11;
                var11 = var1.guild_id;
                var2[2] = var11;
                var1 = var1.id;
                var2[3] = var1;
                var1 = var6.id;
                var2[4] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var0)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.transitionToGuild;
                    var2 = _closure2_slot0;
                    var3 = var2.guild_id;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var13 = var7.bind(var4)(var1, var2);
                var7 = var4.useCallback;
                var1 = var6.id;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var5;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 6;
                    var4 = var3[var4];
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.copy;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = 7;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentIdCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var16 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.showReportModalForMessage;
                    var2 = _closure2_slot1;
                    var1 = 'mobile_media_message_preview_action_sheet';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot4;
                var20 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 9;
                var0 = var15[var0];
                var0 = var20.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = _closure1_slot5;
                var14 = 10;
                var4 = var15[var14];
                var4 = var20.bind(var3)(var4);
                var4 = var4.ActionSheetRow;
                var5 = var4.Group;
                var4 = {};
                var7 = var15[var14];
                var7 = var20.bind(var3)(var7);
                var11 = var7.ActionSheetRow;
                var7 = {};
                var17 = var15[var14];
                var17 = var20.bind(var3)(var17);
                var17 = var17.ActionSheetRow;
                var18 = var17.Icon;
                var17 = {};
                var19 = 11;
                var19 = var15[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.ChatArrowRightIcon;
                var17.IconComponent = var19;
                var17 = var2.bind(var3)(var18, var17);
                var7.icon = var17;
                var17 = 12;
                var18 = var15[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var15 = var15[var17];
                var15 = var20.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["+TSRGD"];
                var15 = var18.bind(var19)(var15);
                var7.label = var15;
                var7.onPress = var13;
                var11 = var2.bind(var3)(var11, var7);
                var7 = new Array(3);
                var7[0] = var11;
                if (!var10) {
                    _fun73474_ip = 667;
                    continue _fun73474
                }
            case 525:
                var15 = _closure1_slot4;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = var18[var14];
                var11 = var21.bind(var3)(var11);
                var13 = var11.ActionSheetRow;
                var11 = {};
                var19 = var18[var14];
                var19 = var21.bind(var3)(var19);
                var19 = var19.ActionSheetRow;
                var20 = var19.Icon;
                var19 = {};
                var22 = 13;
                var22 = var18[var22];
                var22 = var21.bind(var3)(var22);
                var22 = var22.IdIcon;
                var19.IconComponent = var22;
                var19 = var15.bind(var3)(var20, var19);
                var11.icon = var19;
                var19 = var18[var17];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var17];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.zBoHlf;
                var18 = var19.bind(var20)(var18);
                var11.label = var18;
                var11.onPress = var16;
                var10 = var15.bind(var3)(var13, var11);
            case 667:
                var7[1] = var10;
                if (!var8) {
                    _fun73474_ip = 827;
                    continue _fun73474
                }
            case 677:
                var11 = _closure1_slot4;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = var13[var14];
                var9 = var16.bind(var3)(var9);
                var10 = var9.ActionSheetRow;
                var9 = {};
                var14 = var13[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.ActionSheetRow;
                var15 = var14.Icon;
                var14 = {};
                var18 = 14;
                var18 = var13[var18];
                var18 = var16.bind(var3)(var18);
                var18 = var18.FlagIcon;
                var14.IconComponent = var18;
                var14 = var11.bind(var3)(var15, var14);
                var9.icon = var14;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["+78Pfm"];
                var13 = var14.bind(var15)(var13);
                var9.label = var13;
                var9.onPress = var12;
                var12 = 'danger';
                var9.variant = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 827:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/message_preview/MediaMessagePreviewActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1348, 5686, 3280, 1220, 5296, 3149, 6517, 5211, 7759, 9220, 1234, 7754, 8970, 2]);