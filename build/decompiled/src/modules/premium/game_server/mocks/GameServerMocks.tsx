// modules/premium/game_server/mocks/GameServerMocks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var7 = function arg0, arg1() {
        var0 = {};
        var1 = arg0;
        var0.id = var1;
        var1 = arg1;
        var0.name = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var5 = 0;
        var3 = var2[var5];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.GameServerProviderType;
        var2 = var2.SHOCKBYTE;
        var0.provider = var2;
        var2 = _closure1_slot2;
        var0.plans = var2;
        var2 = global;
        var3 = var2.Math;
        var2 = var3.min;
        var6 = _closure1_slot2;
        var4 = var6.map;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.cost;
            return var0;
        };
        var8 = var4.bind(var6)(var1);
        var1 = new Array(0);
        var9 = var1;
        var7 = 0;
        var4 = arraySpread(var9, var8, var7);
        var9 = var2;
        var8 = var1;
        var7 = var3;
        var1 = apply(var9, var8, var7);
        var0.baseCost = var1;
        var1 = '1';
        var0.gameId = var1;
        return var0;
    };
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var2, var1, var3);
    var1 = {
        'id': '1',
        'name': 'GameServer #1',
        'cost': 3
    };
    var3 = '1';
    var9 = '2';
    var4 = new Array(3);
    var8 = {
        'title': '2',
        'description': 'GB'
    };
    var4[0] = var8;
    var8 = {
        'title': '1',
        'description': 'vCPU'
    };
    var4[1] = var8;
    var8 = {
        'title': '25',
        'description': 'GB'
    };
    var4[2] = var8;
    var1.specifications = var4;
    var8 = new Array(3);
    var8[0] = var1;
    var1 = {
        'id': '2',
        'name': 'GameServer #2',
        'cost': 6
    };
    var4 = new Array(3);
    var10 = {
        'title': '2',
        'description': 'GB'
    };
    var4[0] = var10;
    var10 = {
        'title': '1',
        'description': 'vCPU'
    };
    var4[1] = var10;
    var10 = {
        'title': '25',
        'description': 'GB'
    };
    var4[2] = var10;
    var1.specifications = var4;
    var8[1] = var1;
    var1 = {
        'id': '3',
        'name': 'GameServer #3',
        'cost': 12
    };
    var4 = '3';
    var10 = new Array(3);
    var11 = {
        'title': '2',
        'description': 'GB'
    };
    var10[0] = var11;
    var11 = {
        'title': '1',
        'description': 'vCPU'
    };
    var10[1] = var11;
    var11 = {
        'title': '25',
        'description': 'GB'
    };
    var10[2] = var11;
    var1.specifications = var10;
    var8[2] = var1;
    var _closure1_slot2 = var8;
    var0 = undefined;
    var1 = 'GameServer Test #1';
    var1 = var7.bind(var0)(var3, var1);
    var3 = new Array(12);
    var3[0] = var1;
    var1 = 'GameServer Test #2';
    var1 = var7.bind(var0)(var9, var1);
    var3[1] = var1;
    var1 = 'GameServer Test #3';
    var1 = var7.bind(var0)(var4, var1);
    var3[2] = var1;
    var4 = '4';
    var1 = 'GameServer Test #4';
    var1 = var7.bind(var0)(var4, var1);
    var3[3] = var1;
    var4 = '5';
    var1 = 'GameServer Test #5';
    var1 = var7.bind(var0)(var4, var1);
    var3[4] = var1;
    var4 = '6';
    var1 = 'GameServer Test #6';
    var1 = var7.bind(var0)(var4, var1);
    var3[5] = var1;
    var4 = '7';
    var1 = 'GameServer Test #7';
    var1 = var7.bind(var0)(var4, var1);
    var3[6] = var1;
    var4 = '8';
    var1 = 'GameServer Test #8';
    var1 = var7.bind(var0)(var4, var1);
    var3[7] = var1;
    var4 = '9';
    var1 = 'GameServer Test #9';
    var1 = var7.bind(var0)(var4, var1);
    var3[8] = var1;
    var4 = '10';
    var1 = 'GameServer Test #10';
    var1 = var7.bind(var0)(var4, var1);
    var3[9] = var1;
    var4 = '11';
    var1 = 'GameServer Test #11';
    var1 = var7.bind(var0)(var4, var1);
    var3[10] = var1;
    var4 = '12';
    var1 = 'GameServer Test #12';
    var1 = var7.bind(var0)(var4, var1);
    var3[11] = var1;
    var4 = {
        'id': '1',
        'gameId': '1',
        'name': 'GameServer Test #1',
        'port': '25565',
        'regionId': 'us-east',
        'regionName': 'US East',
        'planId': null,
        'planName': null,
        'onlineConnectionsCount': 0,
        'maxConnectionsCount': 10,
        'status': null,
        'serverIP': '127.0.0.1',
        'gameServerPanelUrl': 'https://google.com',
        'entitlementId': '1'
    };
    var7 = 1;
    var1 = var8[var7];
    var1 = var1.id;
    var4.planId = var1;
    var1 = var8[var7];
    var1 = var1.name;
    var4.planName = var1;
    var1 = var6[var7];
    var1 = var5.bind(var0)(var1);
    var1 = var1.GameServerStatus;
    var1 = var1.ONLINE;
    var4.status = var1;
    var1 = new Array(6);
    var1[0] = var4;
    var4 = {
        'id': '2',
        'gameId': '2',
        'name': 'GameServer Test #2',
        'port': '25565',
        'regionId': 'us-east',
        'regionName': 'US East',
        'planId': null,
        'planName': null,
        'onlineConnectionsCount': 0,
        'maxConnectionsCount': 10,
        'status': null,
        'serverIP': '127.0.0.1',
        'gameServerPanelUrl': 'https://google.com',
        'entitlementId': '2'
    };
    var9 = var8[var7];
    var9 = var9.id;
    var4.planId = var9;
    var9 = var8[var7];
    var9 = var9.name;
    var4.planName = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var9 = var9.GameServerStatus;
    var9 = var9.ONLINE;
    var4.status = var9;
    var1[1] = var4;
    var4 = {
        'id': '3',
        'gameId': '3',
        'name': 'GameServer Test #3',
        'port': '25565',
        'regionId': 'us-east',
        'regionName': 'US East',
        'planId': null,
        'planName': null,
        'onlineConnectionsCount': 0,
        'maxConnectionsCount': 10,
        'status': null,
        'serverIP': '127.0.0.1',
        'gameServerPanelUrl': 'https://google.com',
        'entitlementId': '3'
    };
    var9 = var8[var7];
    var9 = var9.id;
    var4.planId = var9;
    var9 = var8[var7];
    var9 = var9.name;
    var4.planName = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var9 = var9.GameServerStatus;
    var9 = var9.ONLINE;
    var4.status = var9;
    var1[2] = var4;
    var4 = {
        'id': '4',
        'gameId': '4',
        'name': 'GameServer Test #4',
        'port': '25565',
        'regionId': 'us-east',
        'regionName': 'US East',
        'planId': null,
        'planName': null,
        'onlineConnectionsCount': 0,
        'maxConnectionsCount': 10,
        'status': null,
        'serverIP': '127.0.0.1',
        'gameServerPanelUrl': 'https://google.com',
        'entitlementId': '4'
    };
    var9 = var8[var7];
    var9 = var9.id;
    var4.planId = var9;
    var9 = var8[var7];
    var9 = var9.name;
    var4.planName = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var9 = var9.GameServerStatus;
    var9 = var9.ONLINE;
    var4.status = var9;
    var1[3] = var4;
    var4 = {
        'id': '5',
        'gameId': '5',
        'name': 'GameServer Test #5',
        'port': '25565',
        'regionId': 'us-east',
        'regionName': 'US East',
        'planId': null,
        'planName': null,
        'onlineConnectionsCount': 0,
        'maxConnectionsCount': 10,
        'status': null,
        'serverIP': '127.0.0.1',
        'gameServerPanelUrl': 'https://google.com',
        'entitlementId': '5'
    };
    var9 = var8[var7];
    var9 = var9.id;
    var4.planId = var9;
    var9 = var8[var7];
    var9 = var9.name;
    var4.planName = var9;
    var9 = var6[var7];
    var9 = var5.bind(var0)(var9);
    var9 = var9.GameServerStatus;
    var9 = var9.ONLINE;
    var4.status = var9;
    var1[4] = var4;
    var4 = {
        'id': '6',
        'gameId': '6',
        'name': 'GameServer Test #6',
        'port': '25565',
        'regionId': 'us-east',
        'regionName': 'US East',
        'planId': null,
        'planName': null,
        'onlineConnectionsCount': 0,
        'maxConnectionsCount': 10,
        'status': null,
        'serverIP': '127.0.0.1',
        'gameServerPanelUrl': 'https://google.com',
        'entitlementId': '6'
    };
    var9 = var8[var7];
    var9 = var9.id;
    var4.planId = var9;
    var8 = var8[var7];
    var8 = var8.name;
    var4.planName = var8;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.GameServerStatus;
    var7 = var7.ONLINE;
    var4.status = var7;
    var1[5] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/game_server/mocks/GameServerMocks.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GAME_SERVER_GAME_MOCKS = var3;
    var2.GAME_SERVER_INSTANCE_MOCKS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [9975, 13333, 2]);