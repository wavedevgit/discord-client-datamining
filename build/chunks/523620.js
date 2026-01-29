/** Chunk was on 87557 **/
/** chunk id: 523620, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(311907),
    r = n(342494),
    i = n(775602),
    s = n(793574),
    o = n(961350),
    c = n(657331),
    d = n(518477),
    u = n(49999),
    m = n(985018);

function p(e) {
    let {
        targetElementRef: t,
        markAsDismissed: n,
        children: p
    } = e, h = (0, l.bG)([o.default], () => o.default.getId()), x = (0, l.bG)([i.A], () => i.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [p, (0, a.jsx)(r.AM, {
            targetElementRef: t,
            title: m.intl.string(m.t.gxcsSq),
            body: m.intl.string(m.t["8L7E5l"]),
            caretConfig: {
                align: "start"
            },
            graphic: {
                type: "image",
                src: x ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png" : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png"
            },
            position: "top",
            align: "left",
            gradientColor: "blue",
            size: "md",
            onRequestClose: () => {
                n(u.i.USER_DISMISS)
            },
            actions: [{
                text: m.intl.string(m.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(u.i.TAKE_ACTION), (0, c.openUserProfileModal)({
                        userId: h,
                        sourceAnalyticsLocations: [s.A.ACCOUNT],
                        hideRestrictedProfile: !0,
                        tabSection: d.RP.WIDGETS
                    })
                }
            }]
        })]
    })
}