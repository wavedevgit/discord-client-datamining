/** Chunk was on web.js **/
/** chunk id: 111864, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    r: () => o
});
var r = n(64700),
    i = n(311907),
    a = n(696451),
    s = n(369496);

function o(e) {
    let {
        user: t,
        guildId: n
    } = e, o = (0, i.bG)([a.Ay], () => null != n && null != t ? a.Ay.getMember(n, t.id) : null);
    return (0, r.useMemo)(() => {
        var e;
        if (null == t) return;
        let r = (0, s.WK)(null == o || null == (e = o.collectibles) ? void 0 : e.nameplate);
        return null != n && null != r ? r : t.nameplate
    }, [o, n, t])
}