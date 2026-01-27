/** Chunk was on web.js **/
/** chunk id: 90084, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => s
});
var r = n(64700),
    i = n(311907),
    a = n(250527),
    o = n(837011);

function s(e) {
    let t = (0, i.bG)([o.A], () => o.A.getProfile(e)),
        n = (0, i.bG)([o.A], () => o.A.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: r.useCallback(async function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return await (0, a.L4)(e, t)
        }, [e]),
        fetchStatus: n
    }
}