/** chunk id: 714384 params = (module,exports,require) **/
n.d(t, {
    E: () => p
});
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(990078),
    s = n(547056),
    o = n(169295),
    d = n(18301),
    c = n(652215),
    u = n(985018),
    _ = n(954676);
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
        icon: s.A,
        getLabel: () => u.intl.string(u.t.tcawo3)
    }
};

function h(e) {
    let {
        operatingSystem: t,
        className: n
    } = e, r = m[t];
    if (null == r) throw Error(`Unexpected operating system: ${t}`);
    let a = r.icon;
    return (0, i.jsx)(l.m, {
        text: r.getLabel(),
        children: (0, i.jsx)(a, {
            className: n
        })
    })
}
let p = e => {
    let {
        systems: t,
        className: n,
        iconClassName: r
    } = e;
    return (0, i.jsx)("div", {
        className: a()(_.I, n),
        children: t.map(e => (0, i.jsx)(h, {
            operatingSystem: e,
            className: a()(_.A, r)
        }, e))
    })
}