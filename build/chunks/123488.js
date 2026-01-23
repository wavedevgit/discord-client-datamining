/** Chunk was on 47841 **/
/** chunk id: 123488, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(73153),
    o = n(447696),
    c = n(403362),
    d = n(555337),
    u = n(92911);
let g = () => {
    let {
        guild: e
    } = (0, l.bG)([d.A], () => d.A.getProps()), [t, n] = i.useState(0);
    switch (i.useEffect(() => {
            null != e && a.h.wait(() => {
                (0, o.Fy)(e.id).then(() => {
                    n(1)
                })
            })
        }, [e]), t) {
        case 0:
            return (0, r.jsx)(s.y$y, {
                type: s.y$y.Type.SPINNING_CIRCLE
            });
        case 1:
            return (0, r.jsx)(u.A, {
                guild: e
            });
        default:
            return (0, c.xb)(t)
    }
}