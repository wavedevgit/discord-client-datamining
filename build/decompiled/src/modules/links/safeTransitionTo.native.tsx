// modules/links/safeTransitionTo.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun49791: for (var _fun49791_ip = 0;;) switch (_fun49791_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49791_ip = 655;
                            continue _fun49791
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var8 = undefined;
                        var2 = var2.bind(var8)(var1);
                        var1 = var2.tryParseChannelPath;
                        var1 = var1.bind(var2)(var6);
                        var5 = null;
                        if (!(var5 != var1)) {
                            _fun49791_ip = 295;
                            continue _fun49791
                        }
                    case 58:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 3;
                        var2 = var7[var2];
                        var2 = var3.bind(var8)(var2);
                        var2 = var2.bind(var8)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var2;
                    case 87:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49791_ip = 292;
                            continue _fun49791
                        }
                    case 96:
                        if (var2) {
                            _fun49791_ip = 295;
                            continue _fun49791
                        }
                    case 102:
                        var7 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var3 = 4;
                        var3 = var14[var3];
                        var9 = var7.bind(var8)(var3);
                        var7 = var9.show;
                        var3 = {};
                        var13 = _closure1_slot0;
                        var10 = 5;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var15 = var11.intl;
                        var12 = var15.string;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var11 = var11.t;
                        var11 = var11.r0DLNm;
                        var11 = var12.bind(var15)(var11);
                        var3.title = var11;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var15 = var11.intl;
                        var12 = var15.string;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var11 = var11.t;
                        var11 = var11["6Y0JlN"];
                        var11 = var12.bind(var15)(var11);
                        var3.body = var11;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var14[var10];
                        var10 = var13.bind(var8)(var10);
                        var10 = var10.t;
                        var10 = var10.BddRzS;
                        var10 = var11.bind(var12)(var10);
                        var3.confirmText = var10;
                        var3 = var7.bind(var9)(var3);
                        _fun49791_ip = 462;
                        continue _fun49791;
                    case 292:
                        return var2;
                    case 295:
                        if (!(var5 != var1)) {
                            _fun49791_ip = 370;
                            continue _fun49791
                        }
                    case 299:
                        var2 = var1.guildId;
                        if (!(var5 != var2)) {
                            _fun49791_ip = 370;
                            continue _fun49791
                        }
                    case 308:
                        var7 = _closure1_slot4;
                        var3 = var7.getGuild;
                        var2 = var1.guildId;
                        var2 = var3.bind(var7)(var2);
                        var7 = var1.channelId;
                        if (!(var5 != var2)) {
                            _fun49791_ip = 370;
                            continue _fun49791
                        }
                    case 336:
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 6;
                        var2 = var9[var2];
                        var3 = var3.bind(var8)(var2);
                        var2 = var3.isModeratorReportOrPostChannelId;
                        var2 = var2.bind(var3)(var7);
                        if (var2) {
                            _fun49791_ip = 468;
                            continue _fun49791
                        }
                    case 370:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 8;
                        var2 = var7[var2];
                        var3 = var3.bind(var8)(var2);
                        var2 = var3.maybePerformRoleSubscriptionUpsellRedirect;
                        if (!(var5 == var1)) {
                            _fun49791_ip = 409;
                            continue _fun49791
                        }
                    case 400:
                        var5 = {};
                        var5.guildId = var8;
                        var1 = var5;
                    case 409:
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 418);
                    case 416:
                        return var1;
                    case 418:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun49791_ip = 465;
                            continue _fun49791
                        }
                    case 424:
                        if (var1) {
                            _fun49791_ip = 462;
                            continue _fun49791
                        }
                    case 427:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var2 = var5[var2];
                        var5 = var3.bind(var8)(var2);
                        var3 = var5.transitionTo;
                        var2 = arg1;
                        var2 = var3.bind(var5)(var6, var2);
                    case 462:
                        return var8;
                    case 465:
                        return var1;
                    case 468:
                        var11 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 4;
                        var1 = var9[var1];
                        var3 = var11.bind(var8)(var1);
                        var2 = var3.show;
                        var1 = {};
                        var7 = _closure1_slot0;
                        var4 = 5;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var12 = var5.intl;
                        var10 = var12.string;
                        var5 = 7;
                        var6 = var9[var5];
                        var6 = var11.bind(var8)(var6);
                        var6 = var6.iCIEAV;
                        var6 = var10.bind(var12)(var6);
                        var1.title = var6;
                        var6 = var9[var4];
                        var6 = var7.bind(var8)(var6);
                        var10 = var6.intl;
                        var6 = var10.string;
                        var5 = var9[var5];
                        var5 = var11.bind(var8)(var5);
                        var5 = var5.bvzo6p;
                        var5 = var6.bind(var10)(var5);
                        var1.body = var5;
                        var5 = var9[var4];
                        var5 = var7.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var9[var4];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.t;
                        var4 = var4.BddRzS;
                        var4 = var5.bind(var6)(var4);
                        var1.confirmText = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    case 655:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/safeTransitionTo.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1410, 3463, 5618, 3936, 1234, 5645, 1986, 5680, 1220, 2]);