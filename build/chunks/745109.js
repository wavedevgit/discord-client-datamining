/** Chunk was on 82575 **/
/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(83257),
    d = n(159001),
    u = n(833336),
    g = n(766569),
    h = n(576622),
    x = n(358776),
    p = n(740625),
    A = n(955872),
    m = n(987281),
    j = n(752319),
    b = n(287809),
    O = n(203982),
    S = n(115063),
    E = n(841643),
    f = n(894013),
    v = n(652215),
    T = n(349828),
    C = n(355097),
    y = n(531525),
    N = n(985018),
    I = n(298109);

function _() {
    let e = (0, x.dk)("ProfileCustomizationSettingsPage"),
        t = (0, a.bG)([u.A], () => u.A.getGuild()),
        n = (0, E.A)(),
        l = (0, a.bG)([u.A, j.A], () => u.A.showNotice() || j.A.showNotice()),
        _ = null != t ? t : n,
        P = (0, a.bG)([b.default], () => b.default.getCurrentUser()),
        {
            subsection: G,
            setSubsection: R
        } = (0, f.A)(),
        D = m.a.useField("hasSearchResults"),
        L = m.a.useField("searchResults");

    function k(e) {
        if (G !== e) {
            if (l) {
                (0, S.fO)({
                    duration: 300,
                    intensity: c.n3
                }), O._.dispatch(v.jej.EMPHASIZE_NOTICE);
                return
            }
            e === C.Eq.GUILD && null == t && null != _ && (0, d.V2)(_), R(e)
        }
    }
    s.useEffect(() => {
        null != P && (null == _ ? void 0 : _.id) !== T.V && (0, h.A)(P.id, P.getAvatarURL(null == _ ? void 0 : _.id, 80), {
            guildId: null == _ ? void 0 : _.id
        })
    }, [null == _ ? void 0 : _.id, P]);
    let w = !0,
        V = !0;
    return D && 1 === L.length && (L.includes(y.H.PROFILE_SERVER_PROFILES) ? (k(C.Eq.GUILD), V = !1) : L.includes(y.H.PROFILE_USER_PROFILE) && (k(C.Eq.USER_PROFILE), w = !1)), (0, i.jsxs)(p.R, {
        header: N.intl.string(N.t["vi7f+q"]),
        children: [(0, i.jsxs)(o.VQ0, {
            className: I.$H,
            type: "top",
            look: "brand",
            selectedItem: G,
            onItemSelect: k,
            children: [V || e ? (0, i.jsx)(o.VQ0.Item, {
                className: I.YU,
                id: C.Eq.USER_PROFILE,
                children: N.intl.string(N.t["2p07FR"])
            }, C.Eq.USER_PROFILE) : null, w || e ? (0, i.jsx)(o.VQ0.Item, {
                className: r()(I.YU, I.HY),
                "aria-label": N.intl.string(N.t.kPHroX),
                id: C.Eq.GUILD,
                children: N.intl.string(N.t.kPHroX)
            }, C.Eq.GUILD) : null]
        }), G === C.Eq.GUILD ? (0, i.jsx)(g.A, {
            selectedGuild: _
        }) : (0, i.jsx)(A.A, {})]
    })
}