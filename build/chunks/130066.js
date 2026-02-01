/** chunk id: 130066, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
});
var r = n(627968),
    l = n(311907),
    i = n(195043),
    s = n(628965),
    a = n(740625),
    o = n(524738),
    c = n(378631),
    u = n(962789),
    d = n(476009),
    p = n(585052),
    h = n(831320),
    g = n(965563),
    f = n(320134),
    m = n(604151),
    b = n(638130),
    A = n(389242),
    y = n(772538),
    O = n(61610),
    j = n(751461),
    x = n(638324),
    _ = n(428854),
    v = n(531525),
    E = n(190363),
    C = n(652215),
    S = n(985018);
let I = () => (0, r.jsxs)(f.A, {
        title: S.intl.string(S.t.xVRG4P),
        webSetting: v.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        children: [(0, r.jsx)(b.f, {}), (0, r.jsx)(p.A, {}), (0, r.jsx)(d.A, {}), (0, r.jsx)(c.A, {}), (0, r.jsx)(A.A, {})]
    }),
    N = () => (0, r.jsxs)(f.A, {
        title: S.intl.string(S.t["y62Z/d"]),
        webSetting: v.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
        children: [(0, r.jsx)(i.x, {
            setting: v.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            children: (0, r.jsx)(g.A, {})
        }), (0, r.jsx)(j.A, {}), (0, r.jsx)(x.A, {}), (0, r.jsx)(O.A, {}), (0, r.jsx)(y.A, {})]
    }),
    T = () => (0, r.jsxs)(f.A, {
        title: S.intl.string(S.t["1Qn8iV"]),
        webSetting: v.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        children: [(0, r.jsx)(h.A, {}), (0, r.jsx)(m.Ay, {})]
    }),
    P = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(I, {}), (0, r.jsx)(N, {}), (0, r.jsx)(T, {})]
    });

function w() {
    let e = (0, l.bG)([s.A], () => s.A.getSubsection()),
        t = [{
            title: S.intl.string(S.t["/7xJCF"]),
            component: P,
            setting: v.H.CONTENT_SOCIAL_DISCORD_TAB
        }, {
            title: S.intl.string(S.t.YpCiMt),
            component: u.A,
            setting: v.H.CONTENT_SOCIAL_CONNECTED_GAMES
        }];
    return (0, r.jsx)(a.R, {
        header: S.intl.string(S.t["+o1pDZ"]),
        notice: (0, r.jsx)(_.A, {
            page: _.R.CONTENT_AND_SOCIAL
        }),
        children: (0, r.jsx)(o.A, {
            parentSetting: v.H.CONTENT_SOCIAL,
            settingsSection: C.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === E.k ? 1 : void 0
        })
    })
}