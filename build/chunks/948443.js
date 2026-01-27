/** Chunk was on web.js **/
/** chunk id: 948443, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(52133),
    o = n(290863),
    s = n(583846),
    l = n(818348);

function c(e) {
    let t = r.useRef(new Set),
        n = r.useMemo(() => {
            let n = new Set(null == e ? void 0 : e.map(e => e.author_id));
            return (0, a.v)([...t.current], [...n]) || (t.current = n), t.current
        }, [e]),
        c = (0, i.yK)([o.A], () => Array.from(n).filter(e => {
            let t = o.A.getStatus(e);
            return null !== t && [l.cl.OFFLINE, l.cl.INVISIBLE].includes(t)
        }));
    return r.useMemo(() => {
        let t = new Set(c);
        return null == e ? void 0 : e.filter(e => !(0, s.JM)(e) || !t.has(e.author_id))
    }, [e, c])
}