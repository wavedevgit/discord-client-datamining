// errors/NativeDispatchError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DispatchErrorCodes;
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun28813: for (var _fun28813_ip = 0;;) switch (_fun28813_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var2.raw = var1;
                    var3 = var1.code;
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun28813_ip = 56;
                        continue _fun28813
                    }
                case 45:
                    var3 = var1.code;
                    var2.code = var3;
                case 56:
                    var3 = var1.uuid;
                    if (!(var4 != var3)) {
                        _fun28813_ip = 78;
                        continue _fun28813
                    }
                case 66:
                    var3 = var1.uuid;
                    var2.uuid = var3;
                case 78:
                    var3 = var1.application_id;
                    if (!(var4 != var3)) {
                        _fun28813_ip = 100;
                        continue _fun28813
                    }
                case 88:
                    var3 = var1.application_id;
                    var2.applicationId = var3;
                case 100:
                    var3 = var1.branch_id;
                    if (!(var4 != var3)) {
                        _fun28813_ip = 122;
                        continue _fun28813
                    }
                case 110:
                    var3 = var1.branch_id;
                    var2.branchId = var3;
                case 122:
                    var3 = var1.context;
                    if (!(var4 == var3)) {
                        _fun28813_ip = 141;
                        continue _fun28813
                    }
                case 131:
                    var3 = {};
                    var2.context = var3;
                    _fun28813_ip = 152;
                    continue _fun28813;
                case 141:
                    var1 = var1.context;
                    var2.context = var1;
                case 152:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'displayMessage';
        var0.key = var4;
        var1 = function() {
            _fun28814: for (var _fun28814_ip = 0;;) switch (_fun28814_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.code;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun28814_ip = 1217;
                        continue _fun28814
                    }
                case 17:
                    var0 = var1.context;
                    var6 = var0.path;
                    var3 = var1.code;
                    var2 = _closure1_slot4;
                    var2 = var2.DISK_LOW;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 1065;
                        continue _fun28814
                    }
                case 53:
                    var2 = _closure1_slot4;
                    var2 = var2.POST_INSTALL_FAILED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 987;
                        continue _fun28814
                    }
                case 70:
                    var2 = _closure1_slot4;
                    var2 = var2.FILE_NAME_TOO_LONG;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 926;
                        continue _fun28814
                    }
                case 87:
                    var2 = _closure1_slot4;
                    var2 = var2.POST_INSTALL_CANCELLED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 865;
                        continue _fun28814
                    }
                case 104:
                    var2 = _closure1_slot4;
                    var2 = var2.IO_PERMISSION_DENIED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 804;
                        continue _fun28814
                    }
                case 121:
                    var2 = _closure1_slot4;
                    var2 = var2.NO_MANIFESTS;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 743;
                        continue _fun28814
                    }
                case 138:
                    var2 = _closure1_slot4;
                    var2 = var2.NOT_ENTITLED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 682;
                        continue _fun28814
                    }
                case 155:
                    var2 = _closure1_slot4;
                    var2 = var2.NOT_DIRECTORY;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 613;
                        continue _fun28814
                    }
                case 172:
                    var2 = _closure1_slot4;
                    var2 = var2.DISK_PERMISSION_DENIED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 613;
                        continue _fun28814
                    }
                case 189:
                    var2 = _closure1_slot4;
                    var2 = var2.INVALID_DRIVE;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 544;
                        continue _fun28814
                    }
                case 206:
                    var2 = _closure1_slot4;
                    var2 = var2.APPLICATION_LOCK_FAILED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 483;
                        continue _fun28814
                    }
                case 223:
                    var2 = _closure1_slot4;
                    var2 = var2.DISK_FULL;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 422;
                        continue _fun28814
                    }
                case 240:
                    var2 = _closure1_slot4;
                    var2 = var2.API_ERROR;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 361;
                        continue _fun28814
                    }
                case 254:
                    var2 = _closure1_slot4;
                    var2 = var2.MAX_REQUEST_RETRIES_EXCEEDED;
                    if (!(var2 !== var3)) {
                        _fun28814_ip = 361;
                        continue _fun28814
                    }
                case 268:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.r477WB;
                    var2 = {};
                    var9 = var1.code;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var8 = var7.concat;
                    var7 = '';
                    var7 = var8.bind(var7)(var9);
                    var2.code = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
                case 361:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var3 = var8[var2];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.OXD41D;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 422:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var3 = var8[var2];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.mojtDJ;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 483:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var3 = var8[var2];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.RDYCUV;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 544:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2["08L2TG"];
                    var2 = {};
                    var2.path = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
                case 613:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.EjWbO6;
                    var2 = {};
                    var2.path = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
                case 682:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.TLCR43;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 743:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.gLM395;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 804:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["PJx5+Z"];
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 865:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["9CNxFJ"];
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 926:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["FWht5+"];
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 987:
                    var2 = var1.context;
                    var6 = var2.name;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var4 = var8[var2];
                    var3 = undefined;
                    var4 = var7.bind(var3)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.t;
                    var3 = var2.hP0B3A;
                    var2 = {};
                    var2.name = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
                case 1065:
                    var1 = var1.context;
                    var9 = var1.available;
                    var5 = var1.required;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var0 = 4;
                    var2 = var7[var0];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.formatSize;
                    var2 = {};
                    var8 = true;
                    var2.useKibibytes = var8;
                    var4 = var3.bind(var4)(var9, var2);
                    var0 = var7[var0];
                    var3 = var6.bind(var1)(var0);
                    var2 = var3.formatSize;
                    var0 = {};
                    var0.useKibibytes = var8;
                    var5 = var2.bind(var3)(var5, var0);
                    var0 = 3;
                    var2 = var7[var0];
                    var2 = var6.bind(var1)(var2);
                    var3 = var2.intl;
                    var2 = var3.formatToPlainString;
                    var0 = var7[var0];
                    var0 = var6.bind(var1)(var0);
                    var0 = var0.t;
                    var1 = var0["2DR5dl"];
                    var0 = {};
                    var0.required = var5;
                    var0.available = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                case 1217:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["5NMPSS"];
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.get = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'errors/NativeDispatchError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3315, 1234, 3316, 2]);