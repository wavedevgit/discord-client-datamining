/** Chunk was on 88615 **/
/** chunk id: 931936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(158954),
    i = n(630117),
    o = n(613943),
    s = n(71478),
    a = n(636086),
    u = n(180185),
    d = n(629721),
    c = n(269032),
    p = n(333354),
    m = n(985018),
    f = n(181978);

function v(e) {
    let {
        text: t
    } = e;
    return (0, r.jsx)("div", {
        className: f.ac,
        children: (0, r.jsx)(l.EYj, {
            variant: "text-sm/medium",
            children: t
        })
    })
}

function g(e) {
    let {
        guildId: t
    } = e, n = (0, s.A)(t), g = (0, i.A)(t), A = (0, o.A)(t), _ = (0, c.A)(g.shouldShow || A.shouldShow);
    return n.shouldShow || g.shouldShow || A.shouldShow || _.shouldShow ? (0, r.jsxs)("div", {
        className: f.kL,
        children: [(0, r.jsx)(l.EYj, {
            variant: "eyebrow",
            color: "text-subtle",
            children: m.intl.string(p.default["3FRirU"])
        }), n.shouldShow && (0, r.jsx)(v, {
            text: n.text
        }), g.shouldShow && (0, r.jsx)(d.A, {
            guildId: t,
            powerupNames: g.expiringPowerupNames,
            warnings: g.warnings
        }), A.shouldShow && null != A.notificationConfig && (0, r.jsx)(u.A, {
            notificationConfig: A.notificationConfig,
            markAsDismissed: A.markAsDismissed
        }), _.shouldShow && (0, r.jsx)(a.A, {
            markAsDismissed: _.markAsDismissed
        })]
    }) : null
}