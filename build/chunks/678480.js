/** Chunk was on 92917 **/
/** chunk id: 678480, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E: () => g
}), n(65821);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(990078),
    s = n(547056),
    o = n(169295),
    c = n(18301),
    u = n(652215),
    d = n(985018),
    p = n(860894);
let m = {
    [u.uje.WINDOWS]: {
        icon: c.A,
        getLabel: () => d.intl.string(d.t["0/xHFO"])
    },
    [u.uje.MACOS]: {
        icon: o.A,
        getLabel: () => d.intl.string(d.t.E4u4n5)
    },
    [u.uje.LINUX]: {
        icon: s.A,
        getLabel: () => d.intl.string(d.t.tcawo3)
    }
};

function f(e) {
    let {
        operatingSystem: t,
        className: n
    } = e, i = m[t];
    if (null == i) throw Error("Unexpected operating system: ".concat(t));
    let l = i.icon;
    return (0, r.jsx)(a.m, {
        text: i.getLabel(),
        children: (0, r.jsx)(l, {
            className: n
        })
    })
}
let g = e => {
    let {
        systems: t,
        className: n,
        iconClassName: i
    } = e;
    return (0, r.jsx)("div", {
        className: l()(p.I, n),
        children: t.map(e => (0, r.jsx)(f, {
            operatingSystem: e,
            className: l()(p.A, i)
        }, e))
    })
}