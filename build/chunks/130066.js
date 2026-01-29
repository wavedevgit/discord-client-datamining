/** Chunk was on 32502 **/
/** chunk id: 130066, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968),
    l = n(311907),
    s = n(195043),
    r = n(628965),
    a = n(740625),
    o = n(524738),
    c = n(378631),
    d = n(962789),
    u = n(476009),
    h = n(585052),
    g = n(831320),
    x = n(965563),
    p = n(320134),
    m = n(604151),
    A = n(638130),
    b = n(389242),
    j = n(772538),
    O = n(61610),
    E = n(751461),
    S = n(638324),
    f = n(428854),
    C = n(531525),
    v = n(190363),
    y = n(652215),
    T = n(985018);
let _ = () => (0, i.jsxs)(p.A, {
        title: T.intl.string(T.t.xVRG4P),
        webSetting: C.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        children: [(0, i.jsx)(A.f, {}), (0, i.jsx)(h.A, {}), (0, i.jsx)(u.A, {}), (0, i.jsx)(c.A, {}), (0, i.jsx)(b.A, {})]
    }),
    N = () => (0, i.jsxs)(p.A, {
        title: T.intl.string(T.t["y62Z/d"]),
        webSetting: C.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
        children: [(0, i.jsx)(s.x, {
            setting: C.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            children: (0, i.jsx)(x.A, {})
        }), (0, i.jsx)(E.A, {}), (0, i.jsx)(S.A, {}), (0, i.jsx)(O.A, {}), (0, i.jsx)(j.A, {})]
    }),
    I = () => (0, i.jsxs)(p.A, {
        title: T.intl.string(T.t["1Qn8iV"]),
        webSetting: C.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        children: [(0, i.jsx)(g.A, {}), (0, i.jsx)(m.Ay, {})]
    }),
    P = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_, {}), (0, i.jsx)(N, {}), (0, i.jsx)(I, {})]
    });

function R() {
    let e = (0, l.bG)([r.A], () => r.A.getSubsection()),
        t = [{
            title: T.intl.string(T.t["/7xJCF"]),
            component: P,
            setting: C.H.CONTENT_SOCIAL_DISCORD_TAB
        }, {
            title: T.intl.string(T.t.YpCiMt),
            component: d.A,
            setting: C.H.CONTENT_SOCIAL_CONNECTED_GAMES
        }];
    return (0, i.jsx)(a.R, {
        header: T.intl.string(T.t["+o1pDZ"]),
        notice: (0, i.jsx)(f.A, {
            page: f.R.CONTENT_AND_SOCIAL
        }),
        children: (0, i.jsx)(o.A, {
            parentSetting: C.H.CONTENT_SOCIAL,
            settingsSection: y.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === v.k ? 1 : void 0
        })
    })
}