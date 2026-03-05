/** chunk id: 382120, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(158954),
    r = n(311907),
    l = n(397927),
    a = n(973925),
    d = n(622543),
    o = n(985018),
    c = n(433500);

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
            children: [(0, i.jsx)(l.Heading, {
                variant: "text-xs/semibold",
                children: n
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: s
            })]
        })]
    })
}

function A(e) {
    let {
        user: t
    } = e, n = (0, r.bG)([d.A], () => d.A.getUserProfile(t.id)?.application), {
        hasMessageContent: A,
        hasGuildPresences: m,
        hasGuildMembers: x
    } = (0, a.Z)(n);
    return (0, i.jsxs)(s.IpV, {
        fade: !0,
        className: c.XG,
        children: [A && (0, i.jsx)(u, {
            icon: l.oyn,
            title: o.intl.string(o.t["7Tmhfu"]),
            description: o.intl.string(o.t.eu5x7z)
        }), m && (0, i.jsx)(u, {
            icon: l._xR,
            title: o.intl.string(o.t.awYSsM),
            description: o.intl.string(o.t.TpsXoC)
        }), x && (0, i.jsx)(u, {
            icon: l.nFg,
            title: o.intl.string(o.t.WuKeSJ),
            description: o.intl.string(o.t.wOBmtV)
        }), (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            children: o.intl.format(o.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}