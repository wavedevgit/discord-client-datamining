/** Chunk was on web.js **/
/** chunk id: 633452, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = new Map,
    l = e => {
        let {
            roleId: t,
            roleConnectionEligibility: n
        } = e;
        s.set(t, n)
    };
class c extends(r = i.Ay.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? s.get(e) : void 0
    }
}
o(c, "displayName", "GuildRoleConnectionEligibilityStore");
let u = new c(a.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: l
})