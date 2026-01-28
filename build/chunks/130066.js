/** Chunk was on 60449 **/
/** chunk id: 130066, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968),
    s = n(311907),
    l = n(195043),
    r = n(628965),
    a = n(740625),
    o = n(524738),
    c = n(378631),
    d = n(962789),
    u = n(476009),
    g = n(585052),
    h = n(831320),
    x = n(965563),
    A = n(320134),
    p = n(604151),
    m = n(638130),
    j = n(389242),
    O = n(772538),
    E = n(61610),
    b = n(751461),
    S = n(638324),
    v = n(428854),
    C = n(531525),
    f = n(190363),
    T = n(652215),
    N = n(985018);
let _ = () => (0, i.jsxs)(A.A, {
        title: N.intl.string(N.t.xVRG4P),
        webSetting: C.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        children: [(0, i.jsx)(m.f, {}), (0, i.jsx)(g.A, {}), (0, i.jsx)(u.A, {}), (0, i.jsx)(c.A, {}), (0, i.jsx)(j.A, {})]
    }),
    I = () => (0, i.jsxs)(A.A, {
        title: N.intl.string(N.t["y62Z/d"]),
        webSetting: C.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
        children: [(0, i.jsx)(l.x, {
            setting: C.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            children: (0, i.jsx)(x.A, {})
        }), (0, i.jsx)(b.A, {}), (0, i.jsx)(S.A, {}), (0, i.jsx)(E.A, {}), (0, i.jsx)(O.A, {})]
    }),
    y = () => (0, i.jsxs)(A.A, {
        title: N.intl.string(N.t["1Qn8iV"]),
        webSetting: C.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        children: [(0, i.jsx)(h.A, {}), (0, i.jsx)(p.Ay, {})]
    }),
    D = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_, {}), (0, i.jsx)(I, {}), (0, i.jsx)(y, {})]
    });

function G() {
    let e = (0, s.bG)([r.A], () => r.A.getSubsection()),
        t = [{
            title: N.intl.string(N.t["/7xJCF"]),
            component: D,
            setting: C.H.CONTENT_SOCIAL_DISCORD_TAB
        }, {
            title: N.intl.string(N.t.YpCiMt),
            component: d.A,
            setting: C.H.CONTENT_SOCIAL_CONNECTED_GAMES
        }];
    return (0, i.jsx)(a.R, {
        header: N.intl.string(N.t["+o1pDZ"]),
        notice: (0, i.jsx)(v.A, {
            page: v.R.CONTENT_AND_SOCIAL
        }),
        children: (0, i.jsx)(o.A, {
            parentSetting: C.H.CONTENT_SOCIAL,
            settingsSection: T.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === f.k ? 1 : void 0
        })
    })
}