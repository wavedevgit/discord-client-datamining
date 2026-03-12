/** chunk id: 230084 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(421380),
    o = n(397927),
    d = n(688810),
    c = n(385612),
    u = n(128450),
    _ = n(339984),
    m = n(985018),
    g = n(760160);
let A = [{
    name: "gif",
    extensions: ["gif"]
}];

function h(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: l,
        sectionTitle: h,
        changeAvatarButtonText: x,
        guildId: p,
        className: T,
        disabled: E = !1,
        isTryItOut: C = !1,
        forcedDivider: S,
        withHighlight: f = !1
    } = e, {
        newestAnalyticsLocation: N
    } = (0, d.Ay)(), b = f ? o.wLn : a.$n, I = s.useCallback(() => {
        (0, c.XD)({
            uploadType: _.HL.AVATAR,
            analyticsSource: N,
            filters: C ? A : void 0,
            guildId: p,
            isTryItOut: C
        })
    }, [p, N, C]);
    return (0, i.jsx)(u.A, {
        className: T,
        title: h,
        errors: n,
        disabled: E,
        forcedDivider: S,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [(0, i.jsx)(b, {
                className: r()({
                    [g.yj]: f
                }),
                size: a.$n.Sizes.SMALL,
                onClick: I,
                children: x ?? m.intl.string(m.t["4OynCD"])
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