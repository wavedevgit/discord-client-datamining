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
    _ = n(895770),
    m = n(355609),
    x = n(843095),
    f = n(800007),
    g = n(576709),
    v = n(985018),
    j = n(452123);
let h = {
    ...f.ZN,
    initialStep: f.HS.SERVER_SETTINGS
};

function A(e) {
    let {
        guildId: t,
        isAdmin: n
    } = e, {
        state: A,
        shouldFetchCatalog: p
    } = (0, l.cf)([u.A], () => ({
        state: u.A.getStateForGuild(t),
        shouldFetchCatalog: u.A.shouldFetchCatalogForGuild(t)
    }));
    s.useEffect(() => {
        p && (0, o.z9)(t)
    }, [t, p]);
    let {
        catalog: C,
        instances: I
    } = s.useMemo(() => ({
        catalog: Object.values(A?.catalog ?? {}),
        instances: Object.values(A?.instances ?? {})
    }), [A?.catalog, A?.instances]), N = I.length >= f.ZI;
    return 0 === C.length ? (0, a.jsx)("div", {
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
        }), n && N && (0, a.jsx)("div", {
            className: j.Bq,
            children: (0, a.jsx)(m.k, {})
        }), (0, a.jsx)(i.IpV, {
            className: j.nd,
            children: (0, a.jsx)("div", {
                className: j.Y_,
                children: C.map((e, s) => n ? (0, a.jsx)(r.m, {
                    asContainer: !0,
                    text: e.disabled ? v.intl.formatToPlainString(g.default.uVpJYf, {
                        gameName: e.name
                    }) : null,
                    position: "top",
                    children: (0, a.jsx)(_.A, {
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
                        variant: N || e.disabled ? _.e.DISABLED : _.e.CLICKABLE,
                        location: c.A.GAME_SERVER_PAGE_SIDEBAR
                    })
                }, `sidebar-game-${s}-${e.id}`) : (0, a.jsx)(_.A, {
                    guildId: t,
                    game: e,
                    variant: _.e.VIEWABLE,
                    imageClassName: j.Sl,
                    titleClassName: j.DD,
                    location: c.A.GAME_SERVER_PAGE_SIDEBAR
                }, `sidebar-game-${s}-${e.id}`))
            })
        })]
    })
}