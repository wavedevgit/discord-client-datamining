/** Chunk was on 39048 **/
/** chunk id: 982832, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r, i, l = n(311907),
    s = n(73153),
    a = n(555337),
    o = n(660496),
    c = n(652215);
let d = o.C.OVERVIEW,
    u = null;

function g(e) {
    let {
        subsection: t
    } = e;
    switch (t) {
        case c.nd0.SAFETY_AUTOMOD:
            d = o.C.AUTOMOD;
            break;
        case c.nd0.SAFETY_DM_AND_SPAM_PROTECTION:
            d = o.C.DM_AND_SPAM_PROTECTION;
            break;
        case c.nd0.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            d = o.C.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case c.nd0.SAFETY_PERMISSIONS:
            d = o.C.PERMISSIONS;
            break;
        case c.nd0.SAFETY_OVERVIEW:
        default:
            d = o.C.OVERVIEW
    }
}
class m extends(i = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A)
    }
    getCurrentPage() {
        return d
    }
}(r = "displayName") in m ? Object.defineProperty(m, r, {
    value: "GuildSettingsSafetyStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : m[r] = "GuildSettingsSafetyStore";
let p = new m(s.h, {
    GUILD_SETTINGS_INIT: function() {
        if (a.A.getGuildId() === u) return !1;
        u = a.A.getGuildId()
    },
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
    GUILD_SETTINGS_SAFETY_PAGE: function(e) {
        let {
            page: t
        } = e;
        d = t
    }
})