/** Chunk was on 60449 **/
/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
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
    A = n(740625),
    p = n(955872),
    m = n(987281),
    j = n(752319),
    O = n(287809),
    E = n(203982),
    b = n(115063),
    S = n(841643),
    v = n(894013),
    C = n(652215),
    f = n(349828),
    T = n(355097),
    N = n(531525),
    _ = n(985018),
    I = n(298109);

function y() {
    let e = (0, x.dk)("ProfileCustomizationSettingsPage"),
        t = (0, a.bG)([u.A], () => u.A.getGuild()),
        n = (0, S.A)(),
        l = (0, a.bG)([u.A, j.A], () => u.A.showNotice() || j.A.showNotice()),
        y = null != t ? t : n,
        D = (0, a.bG)([O.default], () => O.default.getCurrentUser()),
        {
            subsection: G,
            setSubsection: P
        } = (0, v.A)(),
        R = m.a.useField("hasSearchResults"),
        V = m.a.useField("searchResults");

    function L(e) {
        if (G !== e) {
            if (l) {
                (0, b.fO)({
                    duration: 300,
                    intensity: c.n3
                }), E._.dispatch(C.jej.EMPHASIZE_NOTICE);
                return
            }
            e === T.Eq.GUILD && null == t && null != y && (0, d.V2)(y), P(e)
        }
    }
    s.useEffect(() => {
        null != D && (null == y ? void 0 : y.id) !== f.V && (0, h.A)(D.id, D.getAvatarURL(null == y ? void 0 : y.id, 80), {
            guildId: null == y ? void 0 : y.id
        })
    }, [null == y ? void 0 : y.id, D]);
    let k = !0,
        M = !0;
    return R && 1 === V.length && (V.includes(N.H.PROFILE_SERVER_PROFILES) ? (L(T.Eq.GUILD), M = !1) : V.includes(N.H.PROFILE_USER_PROFILE) && (L(T.Eq.USER_PROFILE), k = !1)), (0, i.jsxs)(A.R, {
        header: _.intl.string(_.t["vi7f+q"]),
        children: [(0, i.jsxs)(o.VQ0, {
            className: I.$H,
            type: "top",
            look: "brand",
            selectedItem: G,
            onItemSelect: L,
            children: [M || e ? (0, i.jsx)(o.VQ0.Item, {
                className: I.YU,
                id: T.Eq.USER_PROFILE,
                children: _.intl.string(_.t["2p07FR"])
            }, T.Eq.USER_PROFILE) : null, k || e ? (0, i.jsx)(o.VQ0.Item, {
                className: r()(I.YU, I.HY),
                "aria-label": _.intl.string(_.t.kPHroX),
                id: T.Eq.GUILD,
                children: _.intl.string(_.t.kPHroX)
            }, T.Eq.GUILD) : null]
        }), G === T.Eq.GUILD ? (0, i.jsx)(g.A, {
            selectedGuild: y
        }) : (0, i.jsx)(p.A, {})]
    })
}