/** chunk id: 230084 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    m = n(339984),
    g = n(985018),
    _ = n(897570);
let x = [{
    name: "gif",
    extensions: ["gif"]
}];

function A(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: l,
        sectionTitle: A,
        changeAvatarButtonText: h,
        guildId: p,
        className: f,
        disabled: T = !1,
        isTryItOut: E = !1,
        forcedDivider: S,
        withHighlight: b = !1
    } = e, {
        newestAnalyticsLocation: C
    } = (0, d.Ay)(), N = b ? o.wLn : r.$n, v = s.useCallback(() => {
        (0, c.XD)({
            uploadType: m.HL.AVATAR,
            analyticsSource: C,
            filters: E ? x : void 0,
            guildId: p,
            isTryItOut: E
        })
    }, [p, C, E]);
    return (0, i.jsx)(u.A, {
        className: f,
        title: A,
        errors: n,
        disabled: T,
        forcedDivider: S,
        children: (0, i.jsxs)("div", {
            className: _.NC,
            children: [(0, i.jsx)(N, {
                className: a()({
                    [_.yj]: b
                }),
                size: r.$n.Sizes.SMALL,
                onClick: v,
                children: h ?? g.intl.string(g.t["4OynCD"])
            }), t && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != p ? g.intl.string(g.t.TDjKDm) : g.intl.string(g.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}