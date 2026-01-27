/** Chunk was on web.js **/
/** chunk id: 576757, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(287809),
    o = n(403362);
let s = [];

function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, i.yK)([a.default], () => {
            let t = e.participants.map(e => a.default.getUser(e)).filter(o.Vq),
                n = t.find(t => t.id === e.author_id),
                r = t.filter(t => t.id !== e.author_id);
            return null == n ? s : [...r, n]
        }, [e]),
        l = r.useMemo(() => n.slice(-t), [t, n]),
        c = l[l.length - 1],
        u = l[l.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: l,
        participant1: c,
        participant2: u,
        numOtherParticipants: d
    }
}