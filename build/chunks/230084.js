/** chunk id: 230084 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    g = n(985018),
    A = n(897570);
let m = [{
    name: "gif",
    extensions: ["gif"]
}];

function h(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: l,
        sectionTitle: h,
        changeAvatarButtonText: p,
        guildId: x,
        className: E,
        disabled: T = !1,
        isTryItOut: S = !1,
        forcedDivider: C,
        withHighlight: I = !1
    } = e, {
        newestAnalyticsLocation: f
    } = (0, d.Ay)(), b = I ? o.wLn : r.$n, N = s.useCallback(() => {
        (0, c.XD)({
            uploadType: _.HL.AVATAR,
            analyticsSource: f,
            filters: S ? m : void 0,
            guildId: x,
            isTryItOut: S
        })
    }, [x, f, S]);
    return (0, i.jsx)(u.A, {
        className: E,
        title: h,
        errors: n,
        disabled: T,
        forcedDivider: C,
        children: (0, i.jsxs)("div", {
            className: A.NC,
            children: [(0, i.jsx)(b, {
                className: a()({
                    [A.yj]: I
                }),
                size: r.$n.Sizes.SMALL,
                onClick: N,
                children: p ?? g.intl.string(g.t["4OynCD"])
            }), t && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: A.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != x ? g.intl.string(g.t.TDjKDm) : g.intl.string(g.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}