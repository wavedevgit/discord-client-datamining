/** chunk id: 130066 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var i = n(627968),
    s = n(311907),
    l = n(195043),
    r = n(628965),
    a = n(740625),
    o = n(524738),
    d = n(378631),
    c = n(962789),
    u = n(476009),
    _ = n(585052),
    m = n(831320),
    g = n(965563),
    A = n(320134),
    h = n(604151),
    x = n(638130),
    p = n(389242),
    T = n(772538),
    E = n(61610),
    C = n(751461),
    S = n(638324),
    f = n(428854),
    N = n(531525),
    b = n(190363),
    I = n(652215),
    v = n(985018);
let j = () => (0, i.jsxs)(A.A, {
        title: v.intl.string(v.t.xVRG4P),
        webSetting: N.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
        children: [(0, i.jsx)(x.f, {}), (0, i.jsx)(_.A, {}), (0, i.jsx)(u.A, {}), (0, i.jsx)(d.A, {}), (0, i.jsx)(p.A, {})]
    }),
    O = () => (0, i.jsxs)(A.A, {
        title: v.intl.string(v.t["y62Z/d"]),
        webSetting: N.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
        children: [(0, i.jsx)(l.x, {
            setting: N.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
            children: (0, i.jsx)(g.A, {})
        }), (0, i.jsx)(C.A, {}), (0, i.jsx)(S.A, {}), (0, i.jsx)(E.A, {}), (0, i.jsx)(T.A, {})]
    }),
    y = () => (0, i.jsxs)(A.A, {
        title: v.intl.string(v.t["1Qn8iV"]),
        webSetting: N.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
        children: [(0, i.jsx)(m.A, {}), (0, i.jsx)(h.Ay, {})]
    }),
    R = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(j, {}), (0, i.jsx)(O, {}), (0, i.jsx)(y, {})]
    });

function P() {
    let e = (0, s.bG)([r.A], () => r.A.getSubsection()),
        t = [{
            title: v.intl.string(v.t["/7xJCF"]),
            component: R,
            setting: N.H.CONTENT_SOCIAL_DISCORD_TAB
        }, {
            title: v.intl.string(v.t.YpCiMt),
            component: c.A,
            setting: N.H.CONTENT_SOCIAL_CONNECTED_GAMES
        }];
    return (0, i.jsx)(a.R, {
        header: v.intl.string(v.t["+o1pDZ"]),
        notice: (0, i.jsx)(f.A, {
            page: f.R.CONTENT_AND_SOCIAL
        }),
        children: (0, i.jsx)(o.A, {
            parentSetting: N.H.CONTENT_SOCIAL,
            settingsSection: I.nc_.CONTENT_AND_SOCIAL,
            tabs: t,
            defaultTabIndex: e === b.k ? 1 : void 0
        })
    })
}