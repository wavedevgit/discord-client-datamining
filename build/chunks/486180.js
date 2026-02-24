/** chunk id: 486180, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    i = n(64700),
    s = n(158954),
    r = n(311907),
    l = n(990078),
    d = n(397927),
    o = n(793574),
    c = n(665171),
    u = n(522055),
    _ = n(895770),
    m = n(355609),
    x = n(843095),
    g = n(800007),
    f = n(738072),
    v = n(985018),
    h = n(442800);
let j = {
    ...g.ZN,
    initialStep: g.HS.SERVER_SETTINGS
};

function p(e) {
    let {
        guildId: t
    } = e;
    i.useEffect(() => {
        (0, c.z9)(t)
    }, [t]);
    let n = (0, r.bG)([u.A], () => u.A.getStateForGuild(t)),
        {
            catalog: p,
            instances: C
        } = i.useMemo(() => ({
            catalog: Object.values(n?.catalog ?? {}),
            instances: Object.values(n?.instances ?? {})
        }), [n?.catalog, n?.instances]),
        I = C.length >= g.ZI;
    return 0 === p.length ? (0, a.jsx)("div", {
        className: h.kL,
        children: (0, a.jsx)(d.y$y, {
            type: d.tVU.SPINNING_CIRCLE,
            className: h.u1
        })
    }) : (0, a.jsxs)("div", {
        className: h.kL,
        children: [(0, a.jsx)(s.DZT, {
            className: h.R_,
            variant: "heading-md/semibold",
            children: v.intl.string(f.default["3vWDMz"])
        }), I && (0, a.jsx)("div", {
            className: h.Bq,
            children: (0, a.jsx)(m.k, {})
        }), (0, a.jsx)(s.IpV, {
            className: h.nd,
            children: (0, a.jsx)("div", {
                className: h.Y_,
                children: p.map((e, n) => (0, a.jsx)(l.m, {
                    asContainer: !0,
                    text: e.disabled ? v.intl.formatToPlainString(f.default.uVpJYf, {
                        gameName: e.name
                    }) : null,
                    position: "top",
                    children: (0, a.jsx)(_.A, {
                        guildId: t,
                        game: e,
                        onClick: () => (0, x.A)({
                            guildId: t,
                            stepConfig: j,
                            initialGameServerGame: e,
                            analyticsLocation: o.A.GAME_SERVER_PAGE_SIDEBAR
                        }),
                        imageClassName: h.Sl,
                        titleClassName: h.DD,
                        disabled: I || e.disabled,
                        location: o.A.GAME_SERVER_PAGE_SIDEBAR
                    })
                }, `sidebar-game-${n}-${e.id}`))
            })
        })]
    })
}