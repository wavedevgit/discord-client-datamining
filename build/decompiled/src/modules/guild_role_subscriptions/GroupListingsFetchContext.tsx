// modules/guild_role_subscriptions/GroupListingsFetchContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var6.bind(var0)(var3);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var6.createContext;
    var3 = var3.bind(var6)(var0);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/GroupListingsFetchContext.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun84382: for (var _fun84382_ip = 0;;) switch (_fun84382_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot3;
                var2 = var3.useContext;
                var0 = _closure1_slot8;
                var2 = var2.bind(var3)(var0);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun84382_ip = 51;
                    continue _fun84382
                }
            case 31:
                var0 = var2.listingsLoaded;
                var4 = var2.fetchGroupListingsForGuild;
                var2 = undefined;
                var2 = var4.bind(var2)();
                return var0;
            case 51:
                var0 = global;
                var2 = var0.Error;
                var3 = var3 != var1;
                var4 = 'useGroupListingsFetchContext';
                if (!var3) {
                    _fun84382_ip = 73;
                    continue _fun84382
                }
            case 70:
                var4 = var1;
            case 73:
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var1 = '';
                var0 = ' must be used within a GroupListingsFetchContextProvider';
                var6 = var3.bind(var1)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.useGroupListingsFetchContext = var3;
    var1 = function arg0() {
        var0 = arg0;
        var12 = var0.guildId;
        var _closure2_slot0 = var12;
        var4 = var0.children;
        var7 = var0.refetchOnMount;
        var11 = var0.includeSoftDeleted;
        var _closure2_slot1 = var11;
        var10 = var0.countryCode;
        var _closure2_slot2 = var10;
        var6 = var0.dontFetchWhileTrue;
        var _closure2_slot3 = var6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 4;
        var9 = var8[var2];
        var3 = undefined;
        var15 = var5.bind(var3)(var9);
        var14 = var15.useStateFromStores;
        var9 = _closure1_slot4;
        var13 = new Array(1);
        var13[0] = var9;
        var9 = function() { // Environment: var1
            var1 = _closure1_slot4;
            var0 = var1.isConnected;
            var0 = var0.bind(var1)();
            return var0;
        };
        var13 = var14.bind(var15)(var13, var9);
        var _closure2_slot4 = var13;
        var2 = var8[var2];
        var9 = var5.bind(var3)(var2);
        var8 = var9.useStateFromStores;
        var2 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function() { // Environment: var1
            _fun84385: for (var _fun84385_ip = 0;;) switch (_fun84385_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun84385_ip = 28;
                        continue _fun84385
                    }
                case 13:
                    var0 = _closure1_slot6;
                    var0 = var0.FETCHED;
                    _fun84385_ip = 50;
                    continue _fun84385;
                case 28:
                    var3 = _closure1_slot5;
                    var2 = var3.getSubscriptionGroupListingsForGuildFetchState;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 50:
                    return var0;
            }
        };
        var5 = var8.bind(var9)(var5, var2);
        var9 = _closure1_slot3;
        var2 = var9.useRef;
        var2 = var2.bind(var9)(var7);
        var _closure2_slot5 = var2;
        var8 = var9.useCallback;
        var7 = new Array(5);
        var7[0] = var13;
        var7[1] = var12;
        var7[2] = var11;
        var7[3] = var10;
        var7[4] = var6;
        var6 = function() { // Environment: var1
            _fun84386: for (var _fun84386_ip = 0;;) switch (_fun84386_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84386_ip = 160;
                        continue _fun84386
                    }
                case 16:
                    var0 = _closure2_slot4;
                    if (!var0) {
                        _fun84386_ip = 160;
                        continue _fun84386
                    }
                case 26:
                    var1 = _closure2_slot3;
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun84386_ip = 160;
                        continue _fun84386
                    }
                case 39:
                    var3 = _closure1_slot5;
                    var2 = var3.getSubscriptionGroupListingsForGuildFetchState;
                    var1 = _closure2_slot0;
                    var3 = var2.bind(var3)(var1);
                    var1 = _closure2_slot5;
                    var1 = var1.current;
                    if (var1) {
                        _fun84386_ip = 87;
                        continue _fun84386
                    }
                case 73:
                    var2 = _closure1_slot6;
                    var2 = var2.NOT_FETCHED;
                    var1 = var3 === var2;
                case 87:
                    if (!var1) {
                        _fun84386_ip = 160;
                        continue _fun84386
                    }
                case 90:
                    var2 = _closure2_slot5;
                    var1 = false;
                    var2.current = var1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchAllSubscriptionListingsDataForGuild;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var5 = _closure2_slot1;
                    var0.includeSoftDeleted = var5;
                    var4 = _closure2_slot2;
                    var0.countryCode = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var8.bind(var9)(var6, var7);
        var1 = function arg0, arg1() {
            var5 = arg0;
            var4 = arg1;
            var _closure3_slot0 = var5;
            var _closure3_slot1 = var4;
            var3 = _closure1_slot3;
            var2 = var3.useMemo;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                _fun84388: for (var _fun84388_ip = 0;;) switch (_fun84388_ip) {
                    case 0:
                        var2 = _closure3_slot0;
                        var0 = _closure1_slot6;
                        var0 = var0.FETCHED;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun84388_ip = 42;
                            continue _fun84388
                        }
                    case 27:
                        var1 = _closure3_slot1;
                        var2 = var1.current;
                        var1 = true;
                        var0 = var1 !== var2;
                    case 42:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var7 = var1.bind(var3)(var5, var2);
        var2 = _closure1_slot7;
        var0 = _closure1_slot8;
        var1 = var0.Provider;
        var0 = {};
        var5 = {};
        var5.listingsLoaded = var7;
        var5.fetchGroupListingsForGuild = var6;
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.GroupListingsFetchContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3465, 3076, 33, 632, 5619, 2]);