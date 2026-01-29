/** Chunk was on 2827 **/
/** chunk id: 230084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
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
    _ = n(339984),
    p = n(985018),
    m = n(897570);
let g = [{
    name: "gif",
    extensions: ["gif"]
}];

function A(e) {
    let {
        showRemoveAvatarButton: t,
        errors: n,
        onAvatarChange: l,
        sectionTitle: A,
        changeAvatarButtonText: f,
        guildId: b,
        className: h,
        disabled: E = !1,
        isTryItOut: O = !1,
        forcedDivider: C,
        withHighlight: x = !1
    } = e, {
        newestAnalyticsLocation: S
    } = (0, c.Ay)(), T = x ? o.wLn : a.$n, I = i.useCallback(() => {
        (0, d.XD)({
            uploadType: _.HL.AVATAR,
            analyticsSource: S,
            filters: O ? g : void 0,
            guildId: b,
            isTryItOut: O
        })
    }, [b, S, O]);
    return (0, r.jsx)(u.A, {
        className: h,
        title: A,
        errors: n,
        disabled: E,
        forcedDivider: C,
        children: (0, r.jsxs)("div", {
            className: m.NC,
            children: [(0, r.jsx)(T, {
                className: s()({
                    [m.yj]: x
                }),
                size: a.$n.Sizes.SMALL,
                onClick: I,
                children: null != f ? f : p.intl.string(p.t["4OynCD"])
            }), t && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: m.DT,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != b ? p.intl.string(p.t.TDjKDm) : p.intl.string(p.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}