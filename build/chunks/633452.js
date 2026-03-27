/** chunk id: 633452 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var l = n(311907),
    i = n(73153);
let s = new Map;
class a extends l.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? s.get(e) : void 0
    }
}
let r = new a(i.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
        let {
            roleId: t,
            roleConnectionEligibility: n
        } = e;
        s.set(t, n)
    }
})