// modules/guild_onboarding/native/ProviderConnectionCard.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/ProviderConnectionCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78011: for (var _fun78011_ip = 0;;) switch (_fun78011_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.connection;
                var _closure2_slot0 = var9;
                var15 = var0.guildId;
                var _closure2_slot1 = var15;
                var14 = var0.location;
                var _closure2_slot2 = var14;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var13 = var2.bind(var3)();
                var _closure2_slot3 = var13;
                var4 = var9.provider_id;
                var2 = null;
                var4 = var2 != var4;
                var10 = null;
                if (!var4) {
                    _fun78011_ip = 140;
                    continue _fun78011
                }
            case 87:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 5;
                var4 = var6[var4];
                var6 = var5.bind(var3)(var4);
                var5 = var6.get;
                var4 = var9.provider_id;
                var5 = var5.bind(var6)(var4);
                var6 = var2 == var5;
                var4 = undefined;
                if (var6) {
                    _fun78011_ip = 137;
                    continue _fun78011
                }
            case 132:
                var4 = var5.name;
            case 137:
                var10 = var4;
            case 140:
                if (!(var2 == var10)) {
                    _fun78011_ip = 201;
                    continue _fun78011
                }
            case 144:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var4 = var7[var2];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.NzCoRx;
                var10 = var4.bind(var5)(var2);
            case 201:
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 7;
                var2 = var11[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var5.useStartProviderConnection;
                var2 = var9.provider_id;
                var2 = var4.bind(var5)(var2);
                var6 = var2.hasConnection;
                var5 = var2.canConnect;
                var16 = var2.startConnection;
                _closure2_slot4 = var16;
                var7 = var2.loading;
                var12 = _closure1_slot4;
                var8 = var12.useCallback;
                var4 = _closure1_slot3;
                var2 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun78013: for (var _fun78013_ip = 0;;) switch (_fun78013_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun78013_ip = 189;
                                    continue _fun78013
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var2 = 8;
                                var3 = var8[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.track;
                                var3 = _closure1_slot5;
                                var4 = var3.GUILD_ONBOARDING_CONNECTION_CLICKED;
                                var3 = {};
                                var7 = _closure1_slot0;
                                var1 = 9;
                                var1 = var8[var1];
                                var9 = var7.bind(var2)(var1);
                                var8 = var9.collectGuildAnalyticsMetadata;
                                var7 = _closure2_slot1;
                                var10 = var8.bind(var9)(var7);
                                var11 = var3;
                                var7 = copyDataProperties(var11, var10);
                                var8 = 'provider';
                                var7 = 'connection_type';
                                var3[var7] = var8;
                                var7 = _closure2_slot0;
                                var7 = var7.provider_id;
                                var8 = null;
                                var9 = var8 != var7;
                                var8 = undefined;
                                if (!var9) {
                                    _fun78013_ip = 130;
                                    continue _fun78013
                                }
                            case 127:
                                var8 = var7;
                            case 130:
                                var7 = 'provider_id';
                                var3[var7] = var8;
                                var8 = _closure2_slot2;
                                var7 = 'location';
                                var3[var7] = var8;
                                var3 = var5.bind(var6)(var4, var3);
                                var3 = _closure2_slot4;
                                var1 = 'Guild Onboarding';
                                var1 = var3.bind(var2)(var1);
                                SaveGenerator(address = 177);
                            case 175:
                                return var1;
                            case 177:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun78013_ip = 186;
                                    continue _fun78013
                                }
                            case 183:
                                return var2;
                            case 186:
                                return var1;
                            case 189:
                                return var0;
                        }
                    };
                    return var0;
                };
                var4 = var4.bind(var3)(var2);
                var2 = new Array(4);
                var2[0] = var16;
                var2[1] = var15;
                var15 = var9.provider_id;
                var2[2] = var15;
                var2[3] = var14;
                var4 = var8.bind(var12)(var4, var2);
                var8 = var12.useMemo;
                var14 = var9.provider_id;
                var2 = new Array(2);
                var2[0] = var14;
                var2[1] = var13;
                var1 = function() { // Environment: var1
                    _fun78014: for (var _fun78014_ip = 0;;) switch (_fun78014_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.provider_id;
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun78014_ip = 76;
                                continue _fun78014
                            }
                        case 19:
                            var3 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.LinkIcon;
                            var0 = {
                                'size': 'lg',
                                'color': 'text-subtle'
                            };
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 76:
                            var2 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 5;
                            var1 = var7[var1];
                            var3 = undefined;
                            var6 = var2.bind(var3)(var1);
                            var2 = var6.get;
                            var1 = _closure2_slot0;
                            var1 = var1.provider_id;
                            var6 = var2.bind(var6)(var1);
                            var2 = _closure1_slot0;
                            var1 = 10;
                            var1 = var7[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.makeSource;
                            var8 = var4 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun78014_ip = 157;
                                continue _fun78014
                            }
                        case 152:
                            var7 = var6.icon;
                        case 157:
                            var7 = var4 != var7;
                            var4 = null;
                            if (!var7) {
                                _fun78014_ip = 226;
                                continue _fun78014
                            }
                        case 166:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 11;
                            var7 = var9[var7];
                            var8 = var8.bind(var3)(var7);
                            var7 = var8.isThemeDark;
                            var5 = _closure2_slot3;
                            var5 = var7.bind(var8)(var5);
                            var6 = var6.icon;
                            if (var5) {
                                _fun78014_ip = 217;
                                continue _fun78014
                            }
                        case 209:
                            var5 = var6.lightPNG;
                            _fun78014_ip = 223;
                            continue _fun78014;
                        case 217:
                            var5 = var6.darkPNG;
                        case 223:
                            var4 = var5;
                        case 226:
                            var4 = var1.bind(var2)(var4);
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 12;
                            var0 = var5[var0];
                            var1 = var1.bind(var3)(var0);
                            var0 = {};
                            var0.source = var4;
                            var4 = {
                                'width': 32,
                                'height': 32
                            };
                            var0.style = var4;
                            var4 = true;
                            var0.disableColor = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var12)(var1, var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 14;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.displayName = var10;
                var9 = var9.description;
                var0.description = var9;
                var0.icon = var8;
                var0.isLoading = var7;
                var0.isConnected = var6;
                var0.canConnect = var5;
                var0.onConnect = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 660, 33, 3246, 4395, 1234, 9912, 795, 4302, 1417, 3206, 4086, 3254, 9910, 2]);