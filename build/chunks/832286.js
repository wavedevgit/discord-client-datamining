/** chunk id: 832286, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => c
}), n(896048);
var r = n(562465),
    i = n(73153),
    a = n(71393),
    o = n(958340),
    s = n(652215);
let l = new Set;
async function c(e) {
    if (null == a.A.getGuild(e) && null == o.A.getGuildOrStatus(e) && !l.has(e)) {
        i.h.dispatch({
            type: "BASIC_GUILD_FETCH",
            guildId: e
        }), l.add(e);
        try {
            let t = (await r.Bo.get({
                url: s.Rsh.GUILD_BASIC(e),
                rejectWithError: !0
            })).body;
            i.h.dispatch({
                type: "BASIC_GUILD_FETCH_SUCCESS",
                guildId: e,
                guildInfo: t
            })
        } catch (t) {
            i.h.dispatch({
                type: "BASIC_GUILD_FETCH_FAILURE",
                guildId: e
            })
        } finally {
            l.delete(e)
        }
    }
}