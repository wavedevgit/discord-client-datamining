// ../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var1 = 'identify';
    var3.IDENTIFY = var1;
    var1 = 'email';
    var3.EMAIL = var1;
    var1 = 'connections';
    var3.CONNECTIONS = var1;
    var1 = 'guilds';
    var3.GUILDS = var1;
    var1 = 'guilds.join';
    var3.GUILDS_JOIN = var1;
    var1 = 'guilds.members.read';
    var3.GUILDS_MEMBERS_READ = var1;
    var1 = 'guilds.channels.read';
    var3.GUILDS_CHANNELS_READ = var1;
    var1 = 'gdm.join';
    var3.GDM_JOIN = var1;
    var1 = 'bot';
    var3.BOT = var1;
    var1 = 'rpc';
    var3.RPC = var1;
    var1 = 'rpc.notifications.read';
    var3.RPC_NOTIFICATIONS_READ = var1;
    var1 = 'rpc.voice.read';
    var3.RPC_VOICE_READ = var1;
    var1 = 'rpc.voice.write';
    var3.RPC_VOICE_WRITE = var1;
    var1 = 'rpc.video.read';
    var3.RPC_VIDEO_READ = var1;
    var1 = 'rpc.video.write';
    var3.RPC_VIDEO_WRITE = var1;
    var1 = 'rpc.screenshare.read';
    var3.RPC_SCREENSHARE_READ = var1;
    var1 = 'rpc.screenshare.write';
    var3.RPC_SCREENSHARE_WRITE = var1;
    var1 = 'rpc.activities.write';
    var3.RPC_ACTIVITIES_WRITE = var1;
    var1 = 'webhook.incoming';
    var3.WEBHOOK_INCOMING = var1;
    var1 = 'messages.read';
    var3.MESSAGES_READ = var1;
    var1 = 'applications.builds.upload';
    var3.APPLICATIONS_BUILDS_UPLOAD = var1;
    var1 = 'applications.builds.read';
    var3.APPLICATIONS_BUILDS_READ = var1;
    var1 = 'applications.commands';
    var3.APPLICATIONS_COMMANDS = var1;
    var1 = 'applications.commands.permissions.update';
    var3.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE = var1;
    var1 = 'applications.commands.update';
    var3.APPLICATIONS_COMMANDS_UPDATE = var1;
    var1 = 'applications.store.update';
    var3.APPLICATIONS_STORE_UPDATE = var1;
    var1 = 'applications.entitlements';
    var3.APPLICATIONS_ENTITLEMENTS = var1;
    var1 = 'activities.read';
    var3.ACTIVITIES_READ = var1;
    var1 = 'activities.write';
    var3.ACTIVITIES_WRITE = var1;
    var1 = 'activities.invites.write';
    var3.ACTIVITIES_INVITES_WRITE = var1;
    var1 = 'relationships.read';
    var3.RELATIONSHIPS_READ = var1;
    var1 = 'relationships.write';
    var3.RELATIONSHIPS_WRITE = var1;
    var1 = 'voice';
    var3.VOICE = var1;
    var1 = 'dm_channels.read';
    var3.DM_CHANNELS_READ = var1;
    var1 = 'role_connections.write';
    var3.ROLE_CONNECTIONS_WRITE = var1;
    var1 = 'presences.read';
    var3.PRESENCES_READ = var1;
    var1 = 'presences.write';
    var3.PRESENCES_WRITE = var1;
    var1 = 'openid';
    var3.OPENID = var1;
    var1 = 'dm_channels.messages.read';
    var3.DM_CHANNELS_MESSAGES_READ = var1;
    var1 = 'dm_channels.messages.write';
    var3.DM_CHANNELS_MESSAGES_WRITE = var1;
    var1 = 'gateway.connect';
    var3.GATEWAY_CONNECT = var1;
    var1 = 'account.global_name.update';
    var3.ACCOUNT_GLOBAL_NAME_UPDATE = var1;
    var1 = 'payment_sources.country_code';
    var3.PAYMENT_SOURCES_COUNTRY_CODE = var1;
    var1 = 'sdk.social_layer_presence';
    var3.SDK_SOCIAL_LAYER_PRESENCE = var1;
    var1 = 'sdk.social_layer';
    var3.SDK_SOCIAL_LAYER = var1;
    var1 = 'lobbies.write';
    var3.LOBBIES_WRITE = var1;
    var1 = 'application_identities.write';
    var3.APPLICATION_IDENTITIES_WRITE = var1;
    var1 = {};
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.builds.read', 'applications.builds.upload', 'applications.commands', 'applications.commands.permissions.update', 'applications.entitlements', 'applications.store.update', 'bot', 'connections', 'email', 'gdm.join', 'guilds', 'guilds.join', 'guilds.members.read', 'identify', 'messages.read', 'openid', 'role_connections.write', 'rpc', 'rpc.activities.write', 'rpc.notifications.read', 'rpc.screenshare.read', 'rpc.screenshare.write', 'rpc.video.read', 'rpc.video.write', 'rpc.voice.read', 'rpc.voice.write', 'webhook.incoming'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.PUBLIC = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['account.global_name.update', 'activities.invites.write', 'activities.read', 'activities.write', 'application_identities.write', 'dm_channels.messages.read', 'dm_channels.messages.write', 'dm_channels.read', 'gateway.connect', 'guilds.channels.read', 'lobbies.write', 'payment_sources.country_code', 'presences.read', 'presences.write', 'relationships.read', 'relationships.write', 'sdk.social_layer', 'sdk.social_layer_presence', 'voice'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.PRIVATE = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.builds.read', 'applications.builds.upload', 'applications.commands.update', 'applications.entitlements', 'applications.store.update', 'identify'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.TEAM_USER = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['rpc.activities.write', 'rpc.voice.read', 'rpc.voice.write'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.EMBEDDED_APPS = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands.update'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.CLIENT_CREDENTIALS = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['role_connections.write'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.CONFIDENTIAL_REQUEST_SCOPES = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands', 'bot'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.BYPASS = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.BASE_INTEGRATION = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands', 'bot', 'webhook.incoming'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.GUILD_INTEGRATION = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.USER_INTEGRATION = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['bot', 'webhook.incoming'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.GUILD_INTEGRATION_EXCLUSIVE = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands', 'bot', 'webhook.incoming'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.ALL_INTEGRATION_SCOPES = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['applications.commands'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.PRIVATE_CHANNEL_INTEGRATION = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['activities.invites.write', 'activities.read', 'activities.write', 'application_identities.write', 'dm_channels.messages.read', 'dm_channels.messages.write', 'dm_channels.read', 'gateway.connect', 'guilds', 'guilds.channels.read', 'identify', 'lobbies.write', 'relationships.read', 'relationships.write'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.SLAYER_UMBRELLA_PERMISSIBLE_SCOPES_MASK = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['account.global_name.update', 'openid', 'sdk.social_layer'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.SLAYER_INTEGRATION_PROVISIONAL_ACCOUNT = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['sdk.social_layer', 'sdk.social_layer_presence'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.UMBRELLA = var4;
    var4 = {};
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = ['activities.invites.write', 'activities.read', 'activities.write', 'application_identities.write', 'gateway.connect', 'identify', 'relationships.read', 'relationships.write'];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var4['sdk.social_layer_presence'] = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = ['activities.invites.write', 'activities.read', 'activities.write', 'application_identities.write', 'dm_channels.messages.read', 'dm_channels.messages.write', 'dm_channels.read', 'gateway.connect', 'guilds', 'guilds.channels.read', 'identify', 'lobbies.write', 'relationships.read', 'relationships.write'];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var4['sdk.social_layer'] = var5;
    var1.UMBRELLA_PERMISSIBLE_SCOPES = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['sdk.social_layer', 'sdk.social_layer_presence'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.SDK_SOCIAL_LAYER_UMBRELLA_SCOPES = var4;
    var6 = var0.Set;
    var4 = var6.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var6
        }
    });
    var10 = ['activities.invites.write', 'activities.read', 'activities.write', 'application_identities.write', 'dm_channels.messages.read', 'dm_channels.messages.write', 'dm_channels.read', 'gateway.connect', 'guilds', 'guilds.channels.read', 'identify', 'lobbies.write', 'relationships.read', 'relationships.write'];
    var11 = var5;
    var4 = new var11[var6](var10, var9);
    var4 = var4 instanceof Object ? var4 : var5;
    var1.SDK_SOCIAL_LAYER_UMBRELLA_PERMISSIBLE_SCOPES = var4;
    var5 = var0.Set;
    var0 = var5.prototype;
    var4 = Object.create(var0, {
        constructor: {
            value: var5
        }
    });
    var10 = ['account.global_name.update', 'activities.invites.write', 'activities.read', 'activities.write', 'application_identities.write', 'applications.builds.read', 'applications.builds.upload', 'applications.commands', 'applications.commands.permissions.update', 'applications.entitlements', 'applications.store.update', 'bot', 'connections', 'dm_channels.messages.read', 'dm_channels.messages.write', 'dm_channels.read', 'email', 'gateway.connect', 'gdm.join', 'guilds', 'guilds.channels.read', 'guilds.join', 'guilds.members.read', 'identify', 'lobbies.write', 'messages.read', 'openid', 'payment_sources.country_code', 'presences.read', 'presences.write', 'relationships.read', 'relationships.write', 'role_connections.write', 'rpc', 'rpc.activities.write', 'rpc.notifications.read', 'rpc.screenshare.read', 'rpc.screenshare.write', 'rpc.video.read', 'rpc.video.write', 'rpc.voice.read', 'rpc.voice.write', 'sdk.social_layer', 'sdk.social_layer_presence', 'voice', 'webhook.incoming'];
    var11 = var4;
    var0 = new var11[var5](var10, var9);
    var0 = var0 instanceof Object ? var0 : var4;
    var1.ALL = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx';
    var4 = var5.bind(var6)(var4);
    var2.OAuth2Scopes = var3;
    var2.OAuth2ScopesSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);