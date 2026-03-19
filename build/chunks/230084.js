/** chunk id: 230084 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(385612),
    u = n(128450),
    _ = n(339984),
    m = n(985018),
    g = n(897570);
let A = [{
    name: "gif",
    extensions: ["gif"]
}];

function x(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: l,
        sectionTitle: x,
        changeAvatarButtonText: h,
        guildId: p,
        className: T,
        disabled: E = !1,
        isTryItOut: S = !1,
        forcedDivider: C,
        withHighlight: f = !1
    } = e, {
        newestAnalyticsLocation: N
    } = (0, d.Ay)(), I = f ? o.wLn : r.$n, b = s.useCallback(() => {
        (0, c.XD)({
            uploadType: _.HL.AVATAR,
            analyticsSource: N,
            filters: S ? A : void 0,
            guildId: p,
            isTryItOut: S
        })
    }, [p, N, S]);
    return (0, i.jsx)(u.A, {
        className: T,
        title: x,
        errors: n,
        disabled: E,
        forcedDivider: C,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [(0, i.jsx)(I, {
                className: a()({
                    [g.yj]: f
                }),
                size: r.$n.Sizes.SMALL,
                onClick: b,
                children: h ?? m.intl.string(m.t["4OynCD"])
            }), t && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: g.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != p ? m.intl.string(m.t.TDjKDm) : m.intl.string(m.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}