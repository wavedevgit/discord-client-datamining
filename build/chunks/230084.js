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
    _ = n(226832);
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
        className: T,
        disabled: f = !1,
        isTryItOut: S = !1,
        forcedDivider: b,
        withHighlight: E = !1
    } = e, {
        newestAnalyticsLocation: C
    } = (0, d.Ay)(), N = E ? o.wLn : r.$n, v = s.useCallback(() => {
        (0, c.XD)({
            uploadType: m.HL.AVATAR,
            analyticsSource: C,
            filters: S ? x : void 0,
            guildId: p,
            isTryItOut: S
        })
    }, [p, C, S]);
    return (0, i.jsx)(u.A, {
        className: T,
        title: A,
        errors: n,
        disabled: f,
        forcedDivider: b,
        children: (0, i.jsxs)("div", {
            className: _.NC,
            children: [(0, i.jsx)(N, {
                className: a()({
                    [_.yj]: E
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