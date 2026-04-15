/** chunk id: 382120 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(158954),
    l = t(311907),
    r = t(397927),
    d = t(973925),
    s = t(622543),
    o = t(985018),
    c = t(763683);

function _(e) {
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
            children: [(0, i.jsx)(r.Heading, {
                variant: "text-xs/semibold",
                children: t
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: a
            })]
        })]
    })
}

function u(e) {
    let {
        user: n
    } = e, t = (0, l.bG)([s.A], () => s.A.getUserProfile(n.id)?.application), {
        hasMessageContent: u,
        hasGuildPresences: p,
        hasGuildMembers: A
    } = (0, d.Z)(t);
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: c.XG,
        children: [u && (0, i.jsx)(_, {
            icon: r.oyn,
            title: o.intl.string(o.t["7Tmhfu"]),
            description: o.intl.string(o.t.eu5x7z)
        }), p && (0, i.jsx)(_, {
            icon: r._xR,
            title: o.intl.string(o.t.awYSsM),
            description: o.intl.string(o.t.TpsXoC)
        }), A && (0, i.jsx)(_, {
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