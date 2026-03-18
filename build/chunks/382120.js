/** chunk id: 382120 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(158954),
    r = n(311907),
    a = n(397927),
    l = n(973925),
    o = n(622543),
    d = n(985018),
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
            children: [(0, i.jsx)(a.Heading, {
                variant: "text-xs/semibold",
                children: n
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: s
            })]
        })]
    })
}

function _(e) {
    let {
        user: t
    } = e, n = (0, r.bG)([o.A], () => o.A.getUserProfile(t.id)?.application), {
        hasMessageContent: _,
        hasGuildPresences: A,
        hasGuildMembers: m
    } = (0, l.Z)(n);
    return (0, i.jsxs)(s.IpV, {
        fade: !0,
        className: c.XG,
        children: [_ && (0, i.jsx)(u, {
            icon: a.oyn,
            title: d.intl.string(d.t["7Tmhfu"]),
            description: d.intl.string(d.t.eu5x7z)
        }), A && (0, i.jsx)(u, {
            icon: a._xR,
            title: d.intl.string(d.t.awYSsM),
            description: d.intl.string(d.t.TpsXoC)
        }), m && (0, i.jsx)(u, {
            icon: a.nFg,
            title: d.intl.string(d.t.WuKeSJ),
            description: d.intl.string(d.t.wOBmtV)
        }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            children: d.intl.format(d.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}