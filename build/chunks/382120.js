/** chunk id: 382120 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(627968);
t(64700);
var a = t(158954),
    s = t(311907),
    r = t(397927),
    l = t(973925),
    o = t(622543),
    d = t(985018),
    c = t(533164);

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

function _(e) {
    let {
        user: n
    } = e, t = (0, s.bG)([o.A], () => o.A.getUserProfile(n.id)?.application), {
        hasMessageContent: _,
        hasGuildPresences: A,
        hasGuildMembers: p
    } = (0, l.Z)(t);
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: c.XG,
        children: [_ && (0, i.jsx)(u, {
            icon: r.oyn,
            title: d.intl.string(d.t["7Tmhfu"]),
            description: d.intl.string(d.t.eu5x7z)
        }), A && (0, i.jsx)(u, {
            icon: r._xR,
            title: d.intl.string(d.t.awYSsM),
            description: d.intl.string(d.t.TpsXoC)
        }), p && (0, i.jsx)(u, {
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