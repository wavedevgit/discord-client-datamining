/** Chunk was on 5606 **/
/** chunk id: 230084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(421380),
    o = n(397927),
    c = n(688810),
    d = n(385612),
    u = n(128450),
    p = n(339984),
    _ = n(985018),
    m = n(897570);
let g = [{
    name: "gif",
    extensions: ["gif"]
}];

function f(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: l,
        sectionTitle: f,
        changeAvatarButtonText: b,
        guildId: h,
        className: A,
        disabled: E = !1,
        isTryItOut: x = !1,
        forcedDivider: O,
        withHighlight: C = !1
    } = e, {
        newestAnalyticsLocation: y
    } = (0, c.Ay)(), j = C ? o.wLn : a.$n, T = i.useCallback(() => {
        (0, d.XD)({
            uploadType: p.HL.AVATAR,
            analyticsSource: y,
            filters: x ? g : void 0,
            guildId: h,
            isTryItOut: x
        })
    }, [h, y, x]);
    return (0, r.jsx)(u.A, {
        className: A,
        title: f,
        errors: n,
        disabled: E,
        forcedDivider: O,
        children: (0, r.jsxs)("div", {
            className: m.NC,
            children: [(0, r.jsx)(j, {
                className: s()({
                    [m.yj]: C
                }),
                size: a.$n.Sizes.SMALL,
                onClick: T,
                children: null != b ? b : _.intl.string(_.t["4OynCD"])
            }), t && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: m.DT,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != h ? _.intl.string(_.t.TDjKDm) : _.intl.string(_.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}