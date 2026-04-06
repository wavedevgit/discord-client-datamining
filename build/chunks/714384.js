/** chunk id: 714384 params = (module,exports,require) **/
n.d(t, {
    E: () => p
});
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(547056),
    o = n(169295),
    d = n(18301),
    c = n(652215),
    u = n(985018),
    _ = n(670519);
let m = {
    [c.uje.WINDOWS]: {
        icon: d.A,
        getLabel: () => u.intl.string(u.t["0/xHFO"])
    },
    [c.uje.MACOS]: {
        icon: o.A,
        getLabel: () => u.intl.string(u.t.E4u4n5)
    },
    [c.uje.LINUX]: {
        icon: r.A,
        getLabel: () => u.intl.string(u.t.tcawo3)
    }
};

function h(e) {
    let {
        operatingSystem: t,
        className: n
    } = e, l = m[t];
    if (null == l) throw Error(`Unexpected operating system: ${t}`);
    let s = l.icon;
    return (0, i.jsx)(a.m, {
        text: l.getLabel(),
        children: (0, i.jsx)(s, {
            className: n
        })
    })
}
let p = e => {
    let {
        systems: t,
        className: n,
        iconClassName: l
    } = e;
    return (0, i.jsx)("div", {
        className: s()(_.I, n),
        children: t.map(e => (0, i.jsx)(h, {
            operatingSystem: e,
            className: s()(_.A, l)
        }, e))
    })
}