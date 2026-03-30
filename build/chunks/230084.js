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
    m = n(339984),
    _ = n(985018),
    g = n(383309);
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
        disabled: f = !1,
        isTryItOut: S = !1,
        forcedDivider: E,
        withHighlight: b = !1
    } = e, {
        newestAnalyticsLocation: C
    } = (0, d.Ay)(), v = b ? o.wLn : r.$n, N = s.useCallback(() => {
        (0, c.XD)({
            uploadType: m.HL.AVATAR,
            analyticsSource: C,
            filters: S ? A : void 0,
            guildId: p,
            isTryItOut: S
        })
    }, [p, C, S]);
    return (0, i.jsx)(u.A, {
        className: T,
        title: x,
        errors: n,
        disabled: f,
        forcedDivider: E,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [(0, i.jsx)(v, {
                className: a()({
                    [g.yj]: b
                }),
                size: r.$n.Sizes.SMALL,
                onClick: N,
                children: h ?? _.intl.string(_.t["4OynCD"])
            }), t && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: g.DT,
                children: (0, i.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != p ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}