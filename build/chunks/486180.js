/** chunk id: 486180 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(627968),
    s = n(64700),
    i = n(158954),
    l = n(311907),
    r = n(990078),
    d = n(397927),
    c = n(793574),
    o = n(665171),
    u = n(522055),
    m = n(895770),
    _ = n(355609),
    x = n(843095),
    f = n(800007),
    g = n(738072),
    v = n(985018),
    j = n(442800);
let h = {
    ...f.ZN,
    initialStep: f.HS.SERVER_SETTINGS
};

function A(e) {
    let {
        guildId: t,
        isAdmin: n
    } = e;
    s.useEffect(() => {
        (0, o.z9)(t)
    }, [t]);
    let A = (0, l.bG)([u.A], () => u.A.getStateForGuild(t)),
        {
            catalog: p,
            instances: C
        } = s.useMemo(() => ({
            catalog: Object.values(A?.catalog ?? {}),
            instances: Object.values(A?.instances ?? {})
        }), [A?.catalog, A?.instances]),
        b = C.length >= f.ZI;
    return 0 === p.length ? (0, a.jsx)("div", {
        className: j.kL,
        children: (0, a.jsx)(d.y$y, {
            type: d.tVU.SPINNING_CIRCLE,
            className: j.u1
        })
    }) : (0, a.jsxs)("div", {
        className: j.kL,
        children: [(0, a.jsx)(i.DZT, {
            className: j.R_,
            variant: "heading-md/semibold",
            children: v.intl.string(n ? g.default["3vWDMz"] : g.default.Uvf9GK)
        }), n && b && (0, a.jsx)("div", {
            className: j.Bq,
            children: (0, a.jsx)(_.k, {})
        }), (0, a.jsx)(i.IpV, {
            className: j.nd,
            children: (0, a.jsx)("div", {
                className: j.Y_,
                children: p.map((e, s) => n ? (0, a.jsx)(r.m, {
                    asContainer: !0,
                    text: e.disabled ? v.intl.formatToPlainString(g.default.uVpJYf, {
                        gameName: e.name
                    }) : null,
                    position: "top",
                    children: (0, a.jsx)(m.A, {
                        guildId: t,
                        game: e,
                        onClick: () => (0, x.A)({
                            guildId: t,
                            stepConfig: h,
                            initialGameServerGame: e,
                            analyticsLocation: c.A.GAME_SERVER_PAGE_SIDEBAR
                        }),
                        imageClassName: j.Sl,
                        titleClassName: j.DD,
                        variant: b || e.disabled ? m.e.DISABLED : m.e.CLICKABLE,
                        location: c.A.GAME_SERVER_PAGE_SIDEBAR
                    })
                }, `sidebar-game-${s}-${e.id}`) : (0, a.jsx)(m.A, {
                    guildId: t,
                    game: e,
                    variant: m.e.VIEWABLE,
                    imageClassName: j.Sl,
                    titleClassName: j.DD,
                    location: c.A.GAME_SERVER_PAGE_SIDEBAR
                }, `sidebar-game-${s}-${e.id}`))
            })
        })]
    })
}