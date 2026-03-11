/** chunk id: 130066 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var i = n(627968),
    s = n(311907),
    l = n(195043),
    a = n(628965),
    r = n(740625),
    o = n(524738),
    d = n(378631),
    c = n(962789),
    u = n(476009),
    _ = n(585052),
    g = n(831320),
    A = n(965563),
    m = n(320134),
    h = n(604151),
    p = n(638130),
    x = n(389242),
    E = n(772538),
    T = n(61610),
    S = n(751461),
    C = n(638324),
    I = n(428854),
    f = n(531525),
    b = n(190363),
    N = n(652215),
    v = n(985018);
let O = () => (0, i.jsxs)(m.A, {
        title: v.intl.string(v.t.xVRG4P),
        webSetting: f.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        children: [(0, i.jsx)(p.f, {}), (0, i.jsx)(_.A, {}), (0, i.jsx)(u.A, {}), (0, i.jsx)(d.A, {}), (0, i.jsx)(x.A, {})]
    }),
    j = () => (0, i.jsxs)(m.A, {
        title: v.intl.string(v.t["y62Z/d"]),
        webSetting: f.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
        children: [(0, i.jsx)(l.x, {
            setting: f.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            children: (0, i.jsx)(A.A, {})
        }), (0, i.jsx)(S.A, {}), (0, i.jsx)(C.A, {}), (0, i.jsx)(T.A, {}), (0, i.jsx)(E.A, {})]
    }),
    R = () => (0, i.jsxs)(m.A, {
        title: v.intl.string(v.t["1Qn8iV"]),
        webSetting: f.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        children: [(0, i.jsx)(g.A, {}), (0, i.jsx)(h.Ay, {})]
    }),
    y = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(O, {}), (0, i.jsx)(j, {}), (0, i.jsx)(R, {})]
    });

function P() {
    let e = (0, s.bG)([a.A], () => a.A.getSubsection()),
        t = [{
            title: v.intl.string(v.t["/7xJCF"]),
            component: y,
            setting: f.H.CONTENT_SOCIAL_DISCORD_TAB
        }, {
            title: v.intl.string(v.t.YpCiMt),
            component: c.A,
            setting: f.H.CONTENT_SOCIAL_CONNECTED_GAMES
        }];
    return (0, i.jsx)(r.R, {
        header: v.intl.string(v.t["+o1pDZ"]),
        notice: (0, i.jsx)(I.A, {
            page: I.R.CONTENT_AND_SOCIAL
        }),
        children: (0, i.jsx)(o.A, {
            parentSetting: f.H.CONTENT_SOCIAL,
            settingsSection: N.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === b.k ? 1 : void 0
        })
    })
}