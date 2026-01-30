/** chunk id: 145643, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r, i, l = n(311907),
    s = n(73153),
    a = n(71393);
let o = new Map;
class c extends(r = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A)
    }
    getGuildRoleConnectionsConfiguration(e) {
        return o.get(e)
    }
}(i = "displayName") in c ? Object.defineProperty(c, i, {
    value: "GuildRoleConnectionsConfigurationStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : c[i] = "GuildRoleConnectionsConfigurationStore";
let d = new c(s.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
        let {
            roleId: t,
            roleConnectionConfigurations: n
        } = e;
        o.set(t, n)
    }
})