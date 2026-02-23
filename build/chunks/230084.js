/** chunk id: 230084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(385612),
    u = n(128450),
    _ = n(339984),
    m = n(985018),
    A = n(897570);
let g = [{
    name: "gif",
    extensions: ["gif"]
}];

function h(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: a,
        sectionTitle: h,
        changeAvatarButtonText: x,
        guildId: p,
        className: E,
        disabled: C = !1,
        isTryItOut: T = !1,
        forcedDivider: S,
        withHighlight: I = !1
    } = e, {
        newestAnalyticsLocation: f
    } = (0, c.Ay)(), N = I ? o.wLn : l.$n, b = s.useCallback(() => {
        (0, d.XD)({
            uploadType: _.HL.AVATAR,
            analyticsSource: f,
            filters: T ? g : void 0,
            guildId: p,
            isTryItOut: T
        })
    }, [p, f, T]);
    return (0, i.jsx)(u.A, {
        className: E,
        title: h,
        errors: n,
        disabled: C,
        forcedDivider: S,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [(0, i.jsx)(N, {
                className: r()({
                    [A.yj]: I
                }),
                size: l.$n.Sizes.SMALL,
                onClick: b,
                children: x ?? m.intl.string(m.t["4OynCD"])
            }), t && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: A.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != p ? m.intl.string(m.t.TDjKDm) : m.intl.string(m.t.twB3fz),
                    onClick: () => a(null)
                })
            })]
        })
    })
}