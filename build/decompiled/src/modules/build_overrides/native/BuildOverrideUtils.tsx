// modules/build_overrides/native/BuildOverrideUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun78635: for (var _fun78635_ip = 0;;) switch (_fun78635_ip) {
        case 0:
            var8 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var9;
            var5 = function arg0() {
                var2 = _closure1_slot7;
                var1 = {};
                var0 = 'branch';
                var1.type = var0;
                var0 = arg0;
                var1.id = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var _closure1_slot6 = var5;
            var4 = function() {
                var0 = undefined;
                var3 = _closure1_slot8;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot7 = var4;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun78640: for (var _fun78640_ip = 0;;) switch (_fun78640_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun78640_ip = 187;
                                    continue _fun78640
                                }
                            case 10:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 3;
                                var1 = var2[var1];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var1);
                                var4 = var5.applyStaffBuildOverride;
                                var1 = {};
                                var7 = _closure1_slot5;
                                var6 = arg0;
                                var1[var7] = var6;
                                var1 = var4.bind(var5)(var1);
                                SaveGenerator(address = 64);
                            case 62:
                                return var1;
                            case 64:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun78640_ip = 184;
                                    continue _fun78640
                                }
                            case 70:
                                var5 = var1.status;
                                var4 = 400;
                                if (!(var4 === var5)) {
                                    _fun78640_ip = 151;
                                    continue _fun78640
                                }
                            case 85:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 5;
                                var4 = var6[var4];
                                var6 = var5.bind(var2)(var4);
                                var5 = var6.show;
                                var4 = {
                                    'title': 'Override Error',
                                    'body': null,
                                    'isDismissable': true
                                };
                                var8 = var1.body;
                                var7 = _closure1_slot5;
                                var7 = var8[var7];
                                var4.body = var7;
                                var4 = var5.bind(var6)(var4);
                                _fun78640_ip = 181;
                                continue _fun78640;
                            case 151:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 4;
                                var3 = var5[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.checkForUpdateAndReload;
                                var3 = var3.bind(var4)();
                            case 181:
                                return var2;
                            case 184:
                                return var1;
                            case 187:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot8 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot8 = var0;
            var3 = function() {
                var0 = undefined;
                var3 = _closure1_slot10;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot9 = var3;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun78644: for (var _fun78644_ip = 0;;) switch (_fun78644_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun78644_ip = 164;
                                    continue _fun78644
                                }
                            case 10:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 3;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var1);
                                var1 = var4.clearBuildOverride;
                                var1 = var1.bind(var4)();
                                SaveGenerator(address = 49);
                            case 47:
                                return var1;
                            case 49:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun78644_ip = 161;
                                    continue _fun78644
                                }
                            case 55:
                                var5 = var1.status;
                                var4 = 400;
                                if (!(var4 === var5)) {
                                    _fun78644_ip = 128;
                                    continue _fun78644
                                }
                            case 70:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 5;
                                var4 = var6[var4];
                                var6 = var5.bind(var2)(var4);
                                var5 = var6.show;
                                var4 = {
                                    'title': 'Clear Override Error',
                                    'body': null,
                                    'isDismissable': true
                                };
                                var7 = var1.body;
                                var4.body = var7;
                                var4 = var5.bind(var6)(var4);
                                _fun78644_ip = 158;
                                continue _fun78644;
                            case 128:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 4;
                                var3 = var5[var3];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.checkForUpdateAndReload;
                                var3 = var3.bind(var4)();
                            case 158:
                                return var2;
                            case 161:
                                return var1;
                            case 164:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot10 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot10 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun78647: for (var _fun78647_ip = 0;;) switch (_fun78647_ip) {
                            case 0:
                                StartGenerator();
                                var8 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun78647_ip = 385;
                                    continue _fun78647
                                }
                            case 13:
                                var3 = _closure1_slot4;
                                var1 = var3.getCurrentBuildOverride;
                                var1 = var1.bind(var3)();
                                var4 = var1.overrides;
                                var5 = null;
                                var3 = var5 == var4;
                                var1 = undefined;
                                var6 = undefined;
                                if (var3) {
                                    _fun78647_ip = 71;
                                    continue _fun78647
                                }
                            case 49:
                                var3 = _closure1_slot5;
                                var3 = var4[var3];
                                var4 = var5 == var3;
                                var6 = undefined;
                                if (var4) {
                                    _fun78647_ip = 71;
                                    continue _fun78647
                                }
                            case 66:
                                var6 = var3.id;
                            case 71:
                                var4 = _closure1_slot4;
                                var3 = var4.getBuildOverride;
                                var3 = var3.bind(var4)(var8);
                                var7 = var3.override;
                                var9 = var5 == var7;
                                var4 = undefined;
                                if (var9) {
                                    _fun78647_ip = 138;
                                    continue _fun78647
                                }
                            case 101:
                                var9 = var7.targetBuildOverride;
                                var7 = var5 == var9;
                                var4 = undefined;
                                if (var7) {
                                    _fun78647_ip = 138;
                                    continue _fun78647
                                }
                            case 116:
                                var7 = _closure1_slot5;
                                var7 = var9[var7];
                                var9 = var5 == var7;
                                var4 = undefined;
                                if (var9) {
                                    _fun78647_ip = 138;
                                    continue _fun78647
                                }
                            case 133:
                                var4 = var7.id;
                            case 138:
                                if (!(var6 !== var4)) {
                                    _fun78647_ip = 374;
                                    continue _fun78647
                                }
                            case 145:
                                var6 = var3.payload;
                                if (!(var5 != var6)) {
                                    _fun78647_ip = 382;
                                    continue _fun78647
                                }
                            case 158:
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var6 = 6;
                                var6 = var9[var6];
                                var7 = var7.bind(var1)(var6);
                                var6 = var7.isManualBuildOverrideLink;
                                var6 = var6.bind(var7)(var8);
                                if (!var6) {
                                    _fun78647_ip = 199;
                                    continue _fun78647
                                }
                            case 192:
                                if (!(var5 == var4)) {
                                    _fun78647_ip = 362;
                                    continue _fun78647
                                }
                            case 199:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 3;
                                var5 = var7[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.applyPublicBuildOverride;
                                var3 = var3.payload;
                                var3 = var5.bind(var6)(var3);
                                SaveGenerator(address = 240);
                            case 238:
                                return var3;
                            case 240:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun78647_ip = 359;
                                    continue _fun78647
                                }
                            case 246:
                                var6 = var3.status;
                                var5 = 400;
                                if (!(var5 === var6)) {
                                    _fun78647_ip = 327;
                                    continue _fun78647
                                }
                            case 261:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 5;
                                var5 = var7[var5];
                                var7 = var6.bind(var1)(var5);
                                var6 = var7.show;
                                var5 = {
                                    'title': 'Override Error',
                                    'body': null,
                                    'isDismissable': true
                                };
                                var9 = var3.body;
                                var8 = _closure1_slot5;
                                var8 = var9[var8];
                                var5.body = var8;
                                var5 = var6.bind(var7)(var5);
                                _fun78647_ip = 382;
                                continue _fun78647;
                            case 327:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var5 = 4;
                                var5 = var7[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = var6.checkForUpdateAndReload;
                                var5 = var5.bind(var6)();
                                _fun78647_ip = 382;
                                continue _fun78647;
                            case 359:
                                return var3;
                            case 362:
                                var3 = _closure1_slot6;
                                var3 = var3.bind(var1)(var4);
                                return var1;
                            case 374:
                                var2 = _closure1_slot9;
                                var2 = var2.bind(var1)();
                            case 382:
                                return var1;
                            case 385:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot11 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot11 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun78650: for (var _fun78650_ip = 0;;) switch (_fun78650_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun78650_ip = 324;
                                    continue _fun78650
                                }
                            case 10:
                                var2 = _closure1_slot4;
                                var1 = var2.getCurrentBuildOverride;
                                var1 = var1.bind(var2)();
                                var4 = var1.overrides;
                                var5 = null;
                                var2 = var5 == var4;
                                var1 = undefined;
                                var6 = undefined;
                                if (var2) {
                                    _fun78650_ip = 68;
                                    continue _fun78650
                                }
                            case 46:
                                var2 = _closure1_slot5;
                                var2 = var4[var2];
                                var4 = var5 == var2;
                                var6 = undefined;
                                if (var4) {
                                    _fun78650_ip = 68;
                                    continue _fun78650
                                }
                            case 63:
                                var6 = var2.id;
                            case 68:
                                var7 = _closure1_slot4;
                                var4 = var7.getBuildOverride;
                                var2 = arg0;
                                var2 = var4.bind(var7)(var2);
                                var7 = var2.override;
                                var8 = var5 == var7;
                                var4 = undefined;
                                if (var8) {
                                    _fun78650_ip = 138;
                                    continue _fun78650
                                }
                            case 101:
                                var8 = var7.targetBuildOverride;
                                var7 = var5 == var8;
                                var4 = undefined;
                                if (var7) {
                                    _fun78650_ip = 138;
                                    continue _fun78650
                                }
                            case 116:
                                var7 = _closure1_slot5;
                                var7 = var8[var7];
                                var8 = var5 == var7;
                                var4 = undefined;
                                if (var8) {
                                    _fun78650_ip = 138;
                                    continue _fun78650
                                }
                            case 133:
                                var4 = var7.id;
                            case 138:
                                if (!(var6 !== var4)) {
                                    _fun78650_ip = 321;
                                    continue _fun78650
                                }
                            case 145:
                                var4 = var2.payload;
                                if (!(var5 != var4)) {
                                    _fun78650_ip = 321;
                                    continue _fun78650
                                }
                            case 158:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 3;
                                var4 = var6[var4];
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.applyPublicBuildOverride;
                                var2 = var2.payload;
                                var2 = var4.bind(var5)(var2);
                                SaveGenerator(address = 199);
                            case 197:
                                return var2;
                            case 199:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun78650_ip = 318;
                                    continue _fun78650
                                }
                            case 205:
                                var5 = var2.status;
                                var4 = 400;
                                if (!(var4 === var5)) {
                                    _fun78650_ip = 286;
                                    continue _fun78650
                                }
                            case 220:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 5;
                                var4 = var6[var4];
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.show;
                                var4 = {
                                    'title': 'Override Error',
                                    'body': null,
                                    'isDismissable': true
                                };
                                var8 = var2.body;
                                var7 = _closure1_slot5;
                                var7 = var8[var7];
                                var4.body = var7;
                                var4 = var5.bind(var6)(var4);
                                _fun78650_ip = 321;
                                continue _fun78650;
                            case 286:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 4;
                                var3 = var5[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.checkForUpdateAndReload;
                                var3 = var3.bind(var4)();
                                _fun78650_ip = 321;
                                continue _fun78650;
                            case 318:
                                return var2;
                            case 321:
                                return var1;
                            case 324:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot12 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot12 = var0;
            var0 = global;
            var11 = var0.Object;
            var10 = var11.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var10.bind(var11)(var2, var0, var6);
            var0 = 0;
            var6 = var9[var0];
            var0 = undefined;
            var6 = var7.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var6 = 1;
            var6 = var9[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot4 = var6;
            var6 = 2;
            var6 = var9[var6];
            var7 = var8.bind(var0)(var6);
            var6 = var7.isAndroid;
            var7 = var6.bind(var7)();
            var6 = 'discord_ios';
            if (!var7) {
                _fun78635_ip = 201;
                continue _fun78635
            }
        case 197:
            var6 = 'discord_android';
        case 201:
            var _closure1_slot5 = var6;
            var7 = 7;
            var7 = var9[var7];
            var9 = var8.bind(var0)(var7);
            var8 = var9.fileFinishedImporting;
            var7 = 'modules/build_overrides/native/BuildOverrideUtils.tsx';
            var7 = var8.bind(var9)(var7);
            var2.DEVICE_FIELD = var6;
            var2.setBuildOverrideForBranch = var5;
            var5 = function arg0() {
                var2 = _closure1_slot7;
                var1 = {};
                var0 = 'id';
                var1.type = var0;
                var0 = arg0;
                var1.id = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2.setBuildOverrideForId = var5;
            var2.setBuildOverride = var4;
            var4 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.checkForUpdateAndReload;
                var1 = var1.bind(var2)();
                return var0;
            };
            var2.refreshBuildOverride = var4;
            var2.clearBuildOverride = var3;
            var3 = function() {
                var0 = undefined;
                var3 = _closure1_slot11;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.toggleOverride = var3;
            var1 = function() {
                var0 = undefined;
                var3 = _closure1_slot12;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.setBuildOverrideFromLink = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9750, 478, 9977, 9978, 3897, 1592, 2]);