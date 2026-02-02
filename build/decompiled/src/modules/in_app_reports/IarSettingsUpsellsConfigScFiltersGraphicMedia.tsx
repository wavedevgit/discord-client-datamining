// modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var1 = {};
    var0 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.RVX1zT;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getTitle = var0;
    var0 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.SYkEBi;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getDisabledTitle = var0;
    var0 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.aqlmp8;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getDescription = var0;
    var7 = 3;
    var6 = var5[var7];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.ReportSubType;
    var8 = var6.SUB_GORE;
    var6 = new Array(2);
    var6[0] = var8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ReportSubType;
    var7 = var7.SUB_GLORIFYING_VIOLENCE;
    var6[1] = var7;
    var1.eligibleReportSubtypes = var6;
    var6 = function() {
        _fun53774: for (var _fun53774_ip = 0;;) switch (_fun53774_ip) {
            case 0:
                var10 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var1 = var4[var0];
                var5 = undefined;
                var2 = var10.bind(var5)(var1);
                var1 = var2.updateGoreContentSetting;
                var0 = var4[var0];
                var6 = var10.bind(var5)(var0);
                var0 = var6.getGoreContentSettingOrDefault;
                var0 = var0.bind(var6)();
                var9 = var0.goreContentGuilds;
                var8 = var0.goreContentFriendDm;
                var7 = var0.goreContentNonFriendDm;
                var0 = {};
                var6 = 1;
                var4 = var4[var6];
                var4 = var10.bind(var5)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.SHOW;
                if (!(var9 === var4)) {
                    _fun53774_ip = 132;
                    continue _fun53774
                }
            case 97:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.BLUR;
                var0.goreContentGuilds = var4;
            case 132:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.SHOW;
                if (!(var8 === var4)) {
                    _fun53774_ip = 200;
                    continue _fun53774
                }
            case 165:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var8.bind(var5)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.BLUR;
                var0.goreContentFriendDm = var4;
            case 200:
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var8.bind(var5)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.SHOW;
                if (!(var7 === var4)) {
                    _fun53774_ip = 268;
                    continue _fun53774
                }
            case 233:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.ExplicitContentRedaction;
                var3 = var3.BLUR;
                var0.goreContentNonFriendDm = var3;
            case 268:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.onApply = var6;
    var3 = function() {
        _fun53775: for (var _fun53775_ip = 0;;) switch (_fun53775_ip) {
            case 0:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var2 = 0;
                var2 = var0[var2];
                var4 = undefined;
                var3 = var7.bind(var4)(var2);
                var2 = var3.getGoreContentSettingOrDefault;
                var2 = var2.bind(var3)();
                var3 = var2.goreContentGuilds;
                var6 = var2.goreContentFriendDm;
                var2 = var2.goreContentNonFriendDm;
                var5 = 1;
                var0 = var0[var5];
                var0 = var7.bind(var4)(var0);
                var0 = var0.ExplicitContentRedaction;
                var0 = var0.SHOW;
                var0 = var3 === var0;
                if (var0) {
                    _fun53775_ip = 116;
                    continue _fun53775
                }
            case 83:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var7.bind(var4)(var3);
                var3 = var3.ExplicitContentRedaction;
                var3 = var3.SHOW;
                var0 = var6 === var3;
            case 116:
                if (var0) {
                    _fun53775_ip = 152;
                    continue _fun53775
                }
            case 119:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.SHOW;
                var0 = var2 === var1;
            case 152:
                return var0;
        }
    };
    var1.predicate = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/IarSettingsUpsellsConfigScFiltersGraphicMedia.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4247, 1311, 1234, 6458, 2]);