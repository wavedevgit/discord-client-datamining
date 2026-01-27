/** Chunk was on web.js **/
/** chunk id: 609190, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(734057),
    o = n(543465);
let s = null;

function l(e) {
    let t = (0, i.bG)([a.A], () => a.A.getPrivateChannelsVersion()),
        n = (0, i.bG)([a.A], () => a.A.getMutableDMsByUserIds(), [t]),
        l = (0, i.bG)([o.Ay], () => o.Ay.getMutedChannels(s)),
        c = r.useMemo(() => {
            let e = new Set;
            for (let t in n) {
                let r = t,
                    i = n[r];
                null != i && l.has(i) && e.add(r)
            }
            return e
        }, [n, l]);
    return r.useMemo(() => null == e ? void 0 : e.filter(e => {
        for (let t of e.participants)
            if (c.has(t)) return !1;
        return !0
    }), [e, c])
}