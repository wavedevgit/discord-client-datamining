/** chunk id: 931936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(158954),
    i = n(630117),
    s = n(613943),
    o = n(71478),
    a = n(636086),
    u = n(180185),
    d = n(629721),
    c = n(269032),
    p = n(333354),
    m = n(985018),
    A = n(181978);

function _(e) {
    let {
        text: t
    } = e;
    return (0, r.jsx)("div", {
        className: A.ac,
        children: (0, r.jsx)(l.EYj, {
            variant: "text-sm/medium",
            children: t
        })
    })
}

function f(e) {
    let {
        guildId: t
    } = e, n = (0, o.A)(t), f = (0, i.A)(t), g = (0, s.A)(t), x = (0, c.A)(f.shouldShow || g.shouldShow);
    return n.shouldShow || f.shouldShow || g.shouldShow || x.shouldShow ? (0, r.jsxs)("div", {
        className: A.kL,
        children: [(0, r.jsx)(l.EYj, {
            variant: "eyebrow",
            color: "text-subtle",
            children: m.intl.string(p.default["3FRirU"])
        }), n.shouldShow && (0, r.jsx)(_, {
            text: n.text
        }), f.shouldShow && (0, r.jsx)(d.A, {
            guildId: t,
            powerupNames: f.expiringPowerupNames,
            warnings: f.warnings
        }), g.shouldShow && null != g.notificationConfig && (0, r.jsx)(u.A, {
            notificationConfig: g.notificationConfig,
            markAsDismissed: g.markAsDismissed
        }), x.shouldShow && (0, r.jsx)(a.A, {
            markAsDismissed: x.markAsDismissed
        })]
    }) : null
}