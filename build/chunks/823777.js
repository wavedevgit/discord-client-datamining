/** Chunk was on 36058 **/
/** chunk id: 823777, original params: t,n,a (module,exports,require) **/
a.d(n, {
    default: () => m
}), a(896048);
var r = a(627968),
    i = a(64700),
    e = a(158954),
    s = a(397927),
    l = a(400492),
    o = a(985018),
    c = a(237905);

function m(t) {
    let {
        transitionState: n,
        onClose: a
    } = t, m = () => (null == a || a(), Promise.resolve());
    i.useEffect(() => {
        (0, l.Ak)("success", .1)
    }, []);
    let [d] = i.useState(() => {
        let t;
        return (t = [o.intl.format(o.t.ZAbzbA, {}), o.intl.format(o.t.WXVqdT, {}), o.intl.format(o.t.BxG87N, {}), o.intl.format(o.t.pWZvZk, {}), o.intl.format(o.t["/UhvyQ"], {}), o.intl.format(o.t.XrRGpI, {}), o.intl.format(o.t.SN3QDR, {})])[Math.floor(Math.random() * t.length)]
    });
    return (0, r.jsx)(e.Modal, {
        transitionState: n,
        title: o.intl.string(o.t["62E+tw"]),
        actions: [{
            text: o.intl.string(o.t.cpT0Cq),
            onClick: m,
            variant: "primary"
        }],
        onClose: m,
        children: (0, r.jsx)("div", {
            className: c.jE,
            children: (0, r.jsxs)(s.Text, {
                className: c.KP,
                variant: "text-sm/normal",
                children: [o.intl.string(o.t["4z1Tq0"]), (0, r.jsx)("br", {}), d]
            })
        })
    })
}