/** chunk id: 382120, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(311907),
    r = n(397927),
    a = n(973925),
    d = n(622543),
    o = n(985018),
    c = n(437102);

function u(e) {
    let {
        icon: t,
        title: n,
        description: s
    } = e;
    return (0, i.jsxs)("div", {
        className: c.nM,
        children: [(0, i.jsx)("div", {
            className: c.aL,
            children: (0, i.jsx)(t, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor"
            })
        }), (0, i.jsxs)("div", {
            className: c.qg,
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-xs/semibold",
                children: n
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: s
            })]
        })]
    })
}

function A(e) {
    let {
        user: t
    } = e, n = (0, l.bG)([d.A], () => d.A.getUserProfile(t.id)?.application), {
        hasMessageContent: A,
        hasGuildPresences: x,
        hasGuildMembers: _
    } = (0, a.Z)(n);
    return (0, i.jsxs)(s.IpV, {
        fade: !0,
        className: c.XG,
        children: [A && (0, i.jsx)(u, {
            icon: r.oyn,
            title: o.intl.string(o.t["7Tmhfu"]),
            description: o.intl.string(o.t.eu5x7z)
        }), x && (0, i.jsx)(u, {
            icon: r._xR,
            title: o.intl.string(o.t.awYSsM),
            description: o.intl.string(o.t.TpsXoC)
        }), _ && (0, i.jsx)(u, {
            icon: r.nFg,
            title: o.intl.string(o.t.WuKeSJ),
            description: o.intl.string(o.t.wOBmtV)
        }), (0, i.jsx)(r.Text, {
            variant: "text-xs/normal",
            children: o.intl.format(o.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}