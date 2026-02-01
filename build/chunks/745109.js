/** chunk id: 745109, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(83257),
    u = n(159001),
    d = n(833336),
    p = n(766569),
    h = n(836602),
    g = n(576622),
    f = n(358776),
    m = n(740625),
    b = n(955872),
    A = n(987281),
    y = n(287809),
    O = n(203982),
    j = n(115063),
    x = n(841643),
    _ = n(894013),
    v = n(652215),
    E = n(349828),
    C = n(355097),
    S = n(531525),
    I = n(985018),
    N = n(298109);

function T() {
    let e = (0, f.dk)("ProfileCustomizationSettingsPage"),
        t = (0, a.bG)([d.A], () => d.A.getGuild()),
        n = (0, x.A)(),
        i = (0, a.bG)([d.A, h.A], () => d.A.showNotice() || h.A.showNotice()),
        T = null != t ? t : n,
        P = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        {
            subsection: w,
            setSubsection: R
        } = (0, _.A)(),
        D = A.a.useField("hasSearchResults"),
        L = A.a.useField("searchResults");

    function M(e) {
        if (w !== e) {
            if (i) {
                (0, j.fO)({
                    duration: 300,
                    intensity: c.n3
                }), O._.dispatch(v.jej.EMPHASIZE_NOTICE);
                return
            }
            e === C.Eq.GUILD && null == t && null != T && (0, u.V2)(T), R(e)
        }
    }
    l.useEffect(() => {
        null != P && (null == T ? void 0 : T.id) !== E.V && (0, g.A)(P.id, P.getAvatarURL(null == T ? void 0 : T.id, 80), {
            guildId: null == T ? void 0 : T.id
        })
    }, [null == T ? void 0 : T.id, P]);
    let G = !0,
        k = !0;
    return D && 1 === L.length && (L.includes(S.H.PROFILE_SERVER_PROFILES) ? (M(C.Eq.GUILD), k = !1) : L.includes(S.H.PROFILE_USER_PROFILE) && (M(C.Eq.USER_PROFILE), G = !1)), (0, r.jsxs)(m.R, {
        header: I.intl.string(I.t["vi7f+q"]),
        children: [(0, r.jsxs)(o.VQ0, {
            className: N.$H,
            type: "top",
            look: "brand",
            selectedItem: w,
            onItemSelect: M,
            children: [k || e ? (0, r.jsx)(o.VQ0.Item, {
                className: N.YU,
                id: C.Eq.USER_PROFILE,
                children: I.intl.string(I.t["2p07FR"])
            }, C.Eq.USER_PROFILE) : null, G || e ? (0, r.jsx)(o.VQ0.Item, {
                className: s()(N.YU, N.HY),
                "aria-label": I.intl.string(I.t.kPHroX),
                id: C.Eq.GUILD,
                children: I.intl.string(I.t.kPHroX)
            }, C.Eq.GUILD) : null]
        }), w === C.Eq.GUILD ? (0, r.jsx)(p.A, {
            selectedGuild: T
        }) : (0, r.jsx)(b.A, {})]
    })
}