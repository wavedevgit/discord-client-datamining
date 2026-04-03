/** chunk id: 382120 params = (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968);
t(64700);
var a = t(158954),
    l = t(311907),
    s = t(397927),
    r = t(973925),
    d = t(622543),
    o = t(985018),
    c = t(763683);

function u(e) {
    let {
        icon: n,
        title: t,
        description: a
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
            children: [(0, i.jsx)(s.Heading, {
                variant: "text-xs/semibold",
                children: t
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: a
            })]
        })]
    })
}

function A(e) {
    let {
        user: n
    } = e, t = (0, l.bG)([d.A], () => d.A.getUserProfile(n.id)?.application), {
        hasMessageContent: A,
        hasGuildPresences: _,
        hasGuildMembers: p
    } = (0, r.Z)(t);
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: c.XG,
        children: [A && (0, i.jsx)(u, {
            icon: s.oyn,
            title: o.intl.string(o.t["7Tmhfu"]),
            description: o.intl.string(o.t.eu5x7z)
        }), _ && (0, i.jsx)(u, {
            icon: s._xR,
            title: o.intl.string(o.t.awYSsM),
            description: o.intl.string(o.t.TpsXoC)
        }), p && (0, i.jsx)(u, {
            icon: s.nFg,
            title: o.intl.string(o.t.WuKeSJ),
            description: o.intl.string(o.t.wOBmtV)
        }), (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            children: o.intl.format(o.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}