/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(83257),
    d = n(159001),
    u = n(833336),
    h = n(766569),
    g = n(836602),
    x = n(576622),
    p = n(358776),
    m = n(740625),
    A = n(955872),
    b = n(987281),
    j = n(287809),
    O = n(203982),
    E = n(115063),
    S = n(841643),
    f = n(894013),
    C = n(652215),
    v = n(349828),
    y = n(355097),
    T = n(531525),
    _ = n(985018),
    N = n(298109);

function I() {
    let e = (0, p.dk)("ProfileCustomizationSettingsPage"),
        t = (0, a.bG)([u.A], () => u.A.getGuild()),
        n = (0, S.A)(),
        s = (0, a.bG)([u.A, g.A], () => u.A.showNotice() || g.A.showNotice()),
        I = null != t ? t : n,
        P = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        {
            subsection: R,
            setSubsection: L
        } = (0, f.A)(),
        G = b.a.useField("hasSearchResults"),
        D = b.a.useField("searchResults");

    function k(e) {
        if (R !== e) {
            if (s) {
                (0, E.fO)({
                    duration: 300,
                    intensity: c.n3
                }), O._.dispatch(C.jej.EMPHASIZE_NOTICE);
                return
            }
            e === y.Eq.GUILD && null == t && null != I && (0, d.V2)(I), L(e)
        }
    }
    l.useEffect(() => {
        null != P && (null == I ? void 0 : I.id) !== v.V && (0, x.A)(P.id, P.getAvatarURL(null == I ? void 0 : I.id, 80), {
            guildId: null == I ? void 0 : I.id
        })
    }, [null == I ? void 0 : I.id, P]);
    let w = !0,
        V = !0;
    return G && 1 === D.length && (D.includes(T.H.PROFILE_SERVER_PROFILES) ? (k(y.Eq.GUILD), V = !1) : D.includes(T.H.PROFILE_USER_PROFILE) && (k(y.Eq.USER_PROFILE), w = !1)), (0, i.jsxs)(m.R, {
        header: _.intl.string(_.t["vi7f+q"]),
        children: [(0, i.jsxs)(o.VQ0, {
            className: N.$H,
            type: "top",
            look: "brand",
            selectedItem: R,
            onItemSelect: k,
            children: [V || e ? (0, i.jsx)(o.VQ0.Item, {
                className: N.YU,
                id: y.Eq.USER_PROFILE,
                children: _.intl.string(_.t["2p07FR"])
            }, y.Eq.USER_PROFILE) : null, w || e ? (0, i.jsx)(o.VQ0.Item, {
                className: r()(N.YU, N.HY),
                "aria-label": _.intl.string(_.t.kPHroX),
                id: y.Eq.GUILD,
                children: _.intl.string(_.t.kPHroX)
            }, y.Eq.GUILD) : null]
        }), R === y.Eq.GUILD ? (0, i.jsx)(h.A, {
            selectedGuild: I
        }) : (0, i.jsx)(A.A, {})]
    })
}