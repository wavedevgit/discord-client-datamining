/** chunk id: 382120 params = (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968);
t(64700);
var s = t(158954),
    l = t(311907),
    r = t(397927),
    a = t(973925),
    o = t(622543),
    d = t(985018),
    c = t(533164);

function u(e) {
    let {
        icon: n,
        title: t,
        description: s
    } = e;
    return (0, i.jsxs)("div", {
        className: c.nM,
        children: [(0, i.jsx)("div", {
            className: c.aL,
            children: (0, i.jsx)(n, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor"
            })
        }), (0, i.jsxs)("div", {
            className: c.qg,
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-xs/semibold",
                children: t
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: s
            })]
        })]
    })
}

function A(e) {
    let {
        user: n
    } = e, t = (0, l.bG)([o.A], () => o.A.getUserProfile(n.id)?.application), {
        hasMessageContent: A,
        hasGuildPresences: _,
        hasGuildMembers: x
    } = (0, a.Z)(t);
    return (0, i.jsxs)(s.IpV, {
        fade: !0,
        className: c.XG,
        children: [A && (0, i.jsx)(u, {
            icon: r.oyn,
            title: d.intl.string(d.t["7Tmhfu"]),
            description: d.intl.string(d.t.eu5x7z)
        }), _ && (0, i.jsx)(u, {
            icon: r._xR,
            title: d.intl.string(d.t.awYSsM),
            description: d.intl.string(d.t.TpsXoC)
        }), x && (0, i.jsx)(u, {
            icon: r.nFg,
            title: d.intl.string(d.t.WuKeSJ),
            description: d.intl.string(d.t.wOBmtV)
        }), (0, i.jsx)(r.Text, {
            variant: "text-xs/normal",
            children: d.intl.format(d.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}