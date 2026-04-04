/** chunk id: 382120 params = (module,exports,require) **/
i.d(n, {
    A: () => _
});
var t = i(627968);
i(64700);
var a = i(158954),
    l = i(311907),
    s = i(397927),
    r = i(973925),
    d = i(622543),
    o = i(985018),
    c = i(763683);

function u(e) {
    let {
        icon: n,
        title: i,
        description: a
    } = e;
    return (0, t.jsxs)("div", {
        className: c.nM,
        children: [(0, t.jsx)("div", {
            className: c.aL,
            children: (0, t.jsx)(n, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor"
            })
        }), (0, t.jsxs)("div", {
            className: c.qg,
            children: [(0, t.jsx)(s.Heading, {
                variant: "text-xs/semibold",
                children: i
            }), (0, t.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: a
            })]
        })]
    })
}

function _(e) {
    let {
        user: n
    } = e, i = (0, l.bG)([d.A], () => d.A.getUserProfile(n.id)?.application), {
        hasMessageContent: _,
        hasGuildPresences: A,
        hasGuildMembers: p
    } = (0, r.Z)(i);
    return (0, t.jsxs)(a.IpV, {
        fade: !0,
        className: c.XG,
        children: [_ && (0, t.jsx)(u, {
            icon: s.oyn,
            title: o.intl.string(o.t["7Tmhfu"]),
            description: o.intl.string(o.t.eu5x7z)
        }), A && (0, t.jsx)(u, {
            icon: s._xR,
            title: o.intl.string(o.t.awYSsM),
            description: o.intl.string(o.t.TpsXoC)
        }), p && (0, t.jsx)(u, {
            icon: s.nFg,
            title: o.intl.string(o.t.WuKeSJ),
            description: o.intl.string(o.t.wOBmtV)
        }), (0, t.jsx)(s.Text, {
            variant: "text-xs/normal",
            children: o.intl.format(o.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}