/** chunk id: 67602 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    a = n(311907),
    r = n(397927),
    l = n(975807),
    s = n(926466),
    o = n(201438),
    d = n(194362),
    c = n(125022),
    u = n(261425),
    A = n(652215),
    _ = n(49999),
    h = n(985018),
    m = n(922650);

function g(e) {
    let {
        guild: t,
        markAsDismissed: n
    } = e, g = ((0, a.bG)([c.A], () => c.A.getUnclaimedGameIdsForGuild(t.id), [t.id]) ?? [])[0] ?? null, {
        coverImageUrl: p,
        gameName: E
    } = (0, o.A)(g, h.intl.string(h.t.VQq92a));
    if (null == p) return null;
    let I = t.features.has(A.GuildFeatures.VERIFIED) ? h.intl.string(h.t.uUARXe) : h.intl.string(h.t["0Dx29f"]);
    return (0, i.jsx)(s.A, {
        guild: t,
        onDismissed: () => n(_.i.USER_DISMISS),
        title: h.intl.format(h.t.Q11WTQ, {
            gameName: E
        }),
        message: I,
        cta: (0, i.jsxs)("span", {
            className: m.m,
            children: [h.intl.string(h.t["2u6ZlY"]), (0, i.jsx)(r.I9m, {
                size: "xs",
                color: "currentColor"
            })]
        }),
        type: A.n5X.GAME_CLAIM,
        image: (0, i.jsx)(u.A, {
            imageSrc: p
        }),
        imageMarginX: 60,
        onClick: async () => {
            n(_.i.TAKE_ACTION);
            let e = await (0, d.a)(A.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, l.A)(e)
        }
    })
}