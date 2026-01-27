/** Chunk was on 82575 **/
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
    p = n(320134),
    A = n(604151),
    m = n(638130),
    j = n(389242),
    b = n(772538),
    O = n(61610),
    S = n(751461),
    E = n(638324),
    f = n(428854),
    v = n(531525),
    T = n(190363),
    C = n(652215),
    y = n(985018);
let N = () => (0, i.jsxs)(p.A, {
        title: y.intl.string(y.t.xVRG4P),
        webSetting: v.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        children: [(0, i.jsx)(m.f, {}), (0, i.jsx)(g.A, {}), (0, i.jsx)(u.A, {}), (0, i.jsx)(c.A, {}), (0, i.jsx)(j.A, {})]
    }),
    I = () => (0, i.jsxs)(p.A, {
        title: y.intl.string(y.t["y62Z/d"]),
        webSetting: v.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
        children: [(0, i.jsx)(l.x, {
            setting: v.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            children: (0, i.jsx)(x.A, {})
        }), (0, i.jsx)(S.A, {}), (0, i.jsx)(E.A, {}), (0, i.jsx)(O.A, {}), (0, i.jsx)(b.A, {})]
    }),
    _ = () => (0, i.jsxs)(p.A, {
        title: y.intl.string(y.t["1Qn8iV"]),
        webSetting: v.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        children: [(0, i.jsx)(h.A, {}), (0, i.jsx)(A.Ay, {})]
    }),
    P = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(N, {}), (0, i.jsx)(I, {}), (0, i.jsx)(_, {})]
    });

function G() {
    let e = (0, s.bG)([r.A], () => r.A.getSubsection()),
        t = [{
            title: y.intl.string(y.t["/7xJCF"]),
            component: P,
            setting: v.H.CONTENT_SOCIAL_DISCORD_TAB
        }, {
            title: y.intl.string(y.t.YpCiMt),
            component: d.A,
            setting: v.H.CONTENT_SOCIAL_CONNECTED_GAMES
        }];
    return (0, i.jsx)(a.R, {
        header: y.intl.string(y.t["+o1pDZ"]),
        notice: (0, i.jsx)(f.A, {
            page: f.R.CONTENT_AND_SOCIAL
        }),
        children: (0, i.jsx)(o.A, {
            parentSetting: v.H.CONTENT_SOCIAL,
            settingsSection: C.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === T.k ? 1 : void 0
        })
    })
}