/** chunk id: 382120, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(228524), n(938796);
var l = n(627968);
n(64700);
var i = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(973925),
    a = n(622543),
    d = n(985018),
    c = n(437102);

function u(e) {
    let {
        icon: t,
        title: n,
        description: i
    } = e;
    return (0, l.jsxs)("div", {
        className: c.nM,
        children: [(0, l.jsx)("div", {
            className: c.aL,
            children: (0, l.jsx)(t, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor"
            })
        }), (0, l.jsxs)("div", {
            className: c.qg,
            children: [(0, l.jsx)(s.Heading, {
                variant: "text-xs/semibold",
                children: n
            }), (0, l.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: i
            })]
        })]
    })
}

function p(e) {
    let {
        user: t
    } = e, n = (0, r.bG)([a.A], () => {
        var e;
        return null == (e = a.A.getUserProfile(t.id)) ? void 0 : e.application
    }), {
        hasMessageContent: p,
        hasGuildPresences: f,
        hasGuildMembers: m
    } = (0, o.Z)({
        flags: null == n ? void 0 : n.flags
    });
    return (0, l.jsxs)(i.IpV, {
        fade: !0,
        className: c.XG,
        children: [p && (0, l.jsx)(u, {
            icon: s.oyn,
            title: d.intl.string(d.t["7Tmhfu"]),
            description: d.intl.string(d.t.eu5x7z)
        }), f && (0, l.jsx)(u, {
            icon: s._xR,
            title: d.intl.string(d.t.awYSsM),
            description: d.intl.string(d.t.TpsXoC)
        }), m && (0, l.jsx)(u, {
            icon: s.nFg,
            title: d.intl.string(d.t.WuKeSJ),
            description: d.intl.string(d.t.wOBmtV)
        }), (0, l.jsx)(s.Text, {
            variant: "text-xs/normal",
            children: d.intl.format(d.t.b6nqk0, {
                helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
            })
        })]
    })
}