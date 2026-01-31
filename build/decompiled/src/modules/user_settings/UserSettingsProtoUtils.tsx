// modules/user_settings/UserSettingsProtoUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/UserSettingsProtoUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: getProtoFieldClass, environment: var1
        _fun15559: for (var _fun15559_ip = 0;;) switch (_fun15559_ip) {
            case 0:
                var4 = arg1;
                var _closure2_slot0 = var4;
                var1 = arg0;
                var2 = var1.fields;
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.localName;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun15559_ip = 50;
                    continue _fun15559
                }
            case 39:
                var0 = var1.T;
                var0 = var0.bind(var1)();
                return var0;
            case 50:
                var0 = global;
                var2 = var0.Error;
                var3 = var0.String;
                var1 = undefined;
                var4 = var3.bind(var1)(var4);
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Unknown proto field name ';
                var0 = var3.bind(var0)(var4);
                var0 = var2.bind(var1)(var0);
                throw var0;
        }
    };
    var2.getProtoFieldClass = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: createModifiedProto, environment: var1
        _fun15561: for (var _fun15561_ip = 0;;) switch (_fun15561_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var2 = arg3;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun15561_ip = 26;
                    continue _fun15561
                }
            case 15:
                var1 = var6.create;
                var3 = var1.bind(var6)();
                _fun15561_ip = 79;
                continue _fun15561;
            case 26:
                var5 = var6.fromBinary;
                var1 = var6.toBinary;
                var4 = var1.bind(var6)(var4);
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var7 = var7[var1];
                var1 = undefined;
                var1 = var8.bind(var1)(var7);
                var1 = var1.BINARY_READ_OPTIONS;
                var3 = var5.bind(var6)(var4, var1);
            case 79:
                var4 = arg1;
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var1 = false;
                if (!(var1 !== var4)) {
                    _fun15561_ip = 113;
                    continue _fun15561
                }
            case 95:
                var1 = var2.create;
                var1 = var1.bind(var2)();
                var2 = arg4;
                var1[var2] = var3;
                return var1;
            case 113:
                return var0;
        }
    };
    var2.createModifiedProto = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1344, 2]);