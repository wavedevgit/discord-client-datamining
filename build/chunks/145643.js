/** chunk id: 145643 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(311907),
    r = n(73153),
    s = n(71393);
let a = new Map;
class l extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(s.A)
    }
    getGuildRoleConnectionsConfiguration(e) {
        return a.get(e)
    }
}
let o = new l(r.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: e => {
        let {
            roleId: t,
            roleConnectionConfigurations: n
        } = e;
        a.set(t, n)
    }
})