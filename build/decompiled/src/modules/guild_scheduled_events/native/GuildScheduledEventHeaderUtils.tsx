// modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.isGuildEventEnded;
    var _closure1_slot3 = var6;
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66226: for (var _fun66226_ip = 0;;) switch (_fun66226_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.eventTimeData;
                var17 = var1.startDateTimeString;
                var24 = var1.diffMinutes;
                var4 = var1.currentOrPastEvent;
                var3 = var1.upcomingEvent;
                var16 = var0.isStage;
                var10 = var0.theme;
                var14 = var0.event;
                var8 = var0.isCanceled;
                var5 = var0.recurrenceId;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var12 = undefined;
                var2 = var2.bind(var12)(var1);
                var1 = var2.isThemeDark;
                var2 = var1.bind(var2)(var10);
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var13 = 3;
                var1 = var1[var13];
                var1 = var6.bind(var12)(var1);
                var1 = var1.unsafe_rawColors;
                if (var2) {
                    _fun66226_ip = 135;
                    continue _fun66226
                }
            case 127:
                var18 = var1.BRAND_500;
                _fun66226_ip = 141;
                continue _fun66226;
            case 135:
                var18 = var1.BRAND_360;
            case 141:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var2 = var2.bind(var12)(var1);
                var1 = var2.getNextRecurrenceIdInEvent;
                var1 = var1.bind(var2)(var14);
                var15 = null;
                if (!(var15 == var5)) {
                    _fun66226_ip = 189;
                    continue _fun66226
                }
            case 178:
                var2 = _closure1_slot4;
                var2 = var2.bind(var12)(var14);
                _fun66226_ip = 208;
                continue _fun66226;
            case 189:
                var1 = var1 === var5;
                if (!var1) {
                    _fun66226_ip = 205;
                    continue _fun66226
                }
            case 196:
                var5 = _closure1_slot4;
                var1 = var5.bind(var12)(var14);
            case 205:
                var2 = var1;
            case 208:
                var1 = _closure1_slot3;
                var1 = var1.bind(var12)(var14);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 5;
                var5 = var7[var5];
                var9 = var6.bind(var12)(var5);
                if (var2) {
                    _fun66226_ip = 542;
                    continue _fun66226
                }
            case 243:
                if (var1) {
                    _fun66226_ip = 511;
                    continue _fun66226
                }
            case 249:
                if (var4) {
                    _fun66226_ip = 432;
                    continue _fun66226
                }
            case 255:
                var5 = var18;
                var6 = var17;
                var7 = var9;
                if (!var3) {
                    _fun66226_ip = 735;
                    continue _fun66226
                }
            case 270:
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var11 = 8;
                var11 = var20[var11];
                var11 = var19.bind(var12)(var11);
                var19 = 0;
                if (!(!(var24 > var19))) {
                    _fun66226_ip = 353;
                    continue _fun66226
                }
            case 296:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 6;
                var20 = var23[var19];
                var20 = var22.bind(var12)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var12)(var19);
                var19 = var19.t;
                var19 = var19.WINqKV;
                var19 = var20.bind(var21)(var19);
                _fun66226_ip = 418;
                continue _fun66226;
            case 353:
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var20 = 6;
                var22 = var25[var20];
                var22 = var21.bind(var12)(var22);
                var23 = var22.intl;
                var22 = var23.formatToPlainString;
                var20 = var25[var20];
                var20 = var21.bind(var12)(var20);
                var20 = var20.t;
                var21 = var20.PQlCWk;
                var20 = {};
                var20.minutes = var24;
                var19 = var22.bind(var23)(var21, var20);
            case 418:
                var6 = var19;
                var5 = var18;
                var7 = var11;
                _fun66226_ip = 735;
                continue _fun66226;
            case 432:
                var19 = _closure1_slot1;
                var23 = _closure1_slot2;
                var11 = 8;
                var11 = var23[var11];
                var7 = var19.bind(var12)(var11);
                var22 = _closure1_slot0;
                var19 = 6;
                var20 = var23[var19];
                var20 = var22.bind(var12)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var12)(var19);
                var19 = var19.t;
                var19 = var19.WINqKV;
                var6 = var20.bind(var21)(var19);
                var5 = var18;
                _fun66226_ip = 735;
                continue _fun66226;
            case 511:
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var11 = 8;
                var11 = var20[var11];
                var7 = var19.bind(var12)(var11);
                var5 = var18;
                var6 = var17;
                _fun66226_ip = 735;
                continue _fun66226;
            case 542:
                var20 = _closure1_slot0;
                var11 = _closure1_slot2;
                var18 = 6;
                var17 = var11[var18];
                var17 = var20.bind(var12)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var11 = var11[var18];
                var11 = var20.bind(var12)(var11);
                var11 = var11.t;
                var11 = var11["X2K3/4"];
                var11 = var17.bind(var19)(var11);
                if (!var16) {
                    _fun66226_ip = 620;
                    continue _fun66226
                }
            case 600:
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 7;
                var16 = var19[var16];
                var9 = var17.bind(var12)(var16);
            case 620:
                var16 = var15 == var14;
                var15 = undefined;
                if (var16) {
                    _fun66226_ip = 635;
                    continue _fun66226
                }
            case 629:
                var15 = var14.entity_type;
            case 635:
                var14 = _closure1_slot5;
                var14 = var14.EXTERNAL;
                if (!(var15 === var14)) {
                    _fun66226_ip = 701;
                    continue _fun66226
                }
            case 649:
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var18];
                var15 = var17.bind(var12)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var12)(var14);
                var14 = var14.t;
                var14 = var14.TxqPQR;
                var11 = var15.bind(var16)(var14);
            case 701:
                var15 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var13];
                var14 = var15.bind(var12)(var14);
                var14 = var14.unsafe_rawColors;
                var5 = var14.GREEN_360;
                var6 = var11;
                var7 = var9;
            case 735:
                if (!var8) {
                    _fun66226_ip = 793;
                    continue _fun66226
                }
            case 738:
                var11 = _closure1_slot1;
                var0 = _closure1_slot2;
                var8 = var0[var13];
                var8 = var11.bind(var12)(var8);
                var9 = var8.internal;
                var8 = var9.resolveSemanticColor;
                var0 = var0[var13];
                var0 = var11.bind(var12)(var0);
                var0 = var0.colors;
                var0 = var0.TEXT_FEEDBACK_CRITICAL;
                var5 = var8.bind(var9)(var10, var0);
            case 793:
                var0 = {};
                var0.icon = var7;
                var0.text = var6;
                var0.color = var5;
                var1 = !var1;
                if (!var1) {
                    _fun66226_ip = 828;
                    continue _fun66226
                }
            case 813:
                if (var2) {
                    _fun66226_ip = 819;
                    continue _fun66226
                }
            case 816:
                var2 = var4;
            case 819:
                if (var2) {
                    _fun66226_ip = 825;
                    continue _fun66226
                }
            case 822:
                var2 = var3;
            case 825:
                var1 = var2;
            case 828:
                var0.shouldChangeTextColor = var1;
                return var0;
        }
    };
    var2.getGuildScheduledEventHeaderProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3334, 1378, 3206, 671, 8086, 8181, 1234, 6462, 8182, 2]);