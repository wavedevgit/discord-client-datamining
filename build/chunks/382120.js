/** chunk id: 382120 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(158954),
    r = t(311907),
    l = t(397927),
    o = t(973925),
    s = t(622543),
    d = t(985018),
    c = t(533164);

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
            children: [(0, i.jsx)(l.Heading, {
                variant: "text-xs/semibold",
                children: t
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: a
            })]
        })]
    })
}

function u(e) {
    let {
        user: n
    } = e, t = (0, r.bG)([s.A], () => s.A.getUserProfile(n.id)?.application), {
        hasMessageContent: u,
        hasGuildPresences: p,
        hasGuildMembers: A
    } = (0, o.Z)(t);
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: c.XG,
        children: [u && (0, i.jsx)(_, {
            icon: l.oyn,
            title: d.intl.string(d.t["7Tmhfu"]),
            description: d.intl.string(d.t.eu5x7z)
        }), p && (0, i.jsx)(_, {
            icon: l._xR,
            title: d.intl.string(d.t.awYSsM),
            description: d.intl.string(d.t.TpsXoC)
        }), A && (0, i.jsx)(_, {
            icon: l.nFg,
            title: d.intl.string(d.t.WuKeSJ),
            description: d.intl.string(d.t.wOBmtV)
        }), (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            children: d.intl.format(d.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}