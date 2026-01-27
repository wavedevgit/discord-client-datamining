/** Chunk was on 60667 **/
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
        guildId: h,
        className: b,
        disabled: E = !1,
        isTryItOut: x = !1,
        forcedDivider: O,
        withHighlight: C = !1
    } = e, {
        newestAnalyticsLocation: I
    } = (0, c.Ay)(), T = C ? o.wLn : a.$n, S = i.useCallback(() => {
        (0, d.XD)({
            uploadType: _.HL.AVATAR,
            analyticsSource: I,
            filters: x ? g : void 0,
            guildId: h,
            isTryItOut: x
        })
    }, [h, I, x]);
    return (0, r.jsx)(u.A, {
        className: b,
        title: A,
        errors: n,
        disabled: E,
        forcedDivider: O,
        children: (0, r.jsxs)("div", {
            className: m.NC,
            children: [(0, r.jsx)(T, {
                className: s()({
                    [m.yj]: C
                }),
                size: a.$n.Sizes.SMALL,
                onClick: S,
                children: null != f ? f : p.intl.string(p.t["4OynCD"])
            }), t && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: m.DT,
                children: (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != h ? p.intl.string(p.t.TDjKDm) : p.intl.string(p.t.twB3fz),
                    onClick: () => l(null)
                })
            })]
        })
    })
}