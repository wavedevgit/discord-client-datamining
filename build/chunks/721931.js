/** chunk id: 721931 params = (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(636920),
    o = n(581445),
    c = n(513679);

function d(e) {
    let {
        hangStatusActivity: t,
        channel: n,
        userId: l,
        setPopoutRef: d
    } = e, u = s.useRef(null);
    return s.useEffect(() => {
        d?.(u?.current)
    }, [u, d]), (0, i.jsx)("div", {
        ref: u,
        className: a()(c.popover, o.kL),
        children: (0, i.jsx)(r.Z, {
            hangStatusActivity: t,
            channel: n,
            userId: l,
            analyticsSource: "HangStatusPopout",
            iconClassName: o.Kk,
            textClassName: o.qS
        })
    })
}