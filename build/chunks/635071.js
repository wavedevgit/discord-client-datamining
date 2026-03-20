/** chunk id: 635071 params = (module,exports,require) **/
a.d(t, {
    A: () => N,
    w: () => P
});
var n, l = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    c = a(607399),
    o = a(311907),
    u = a(473193),
    _ = a(36075),
    d = a(397927),
    S = a(775602),
    p = a(793574),
    A = a(688810),
    m = a(922301),
    h = a(750112),
    I = a(73392),
    C = a(386467),
    g = a(534400),
    T = a(176201),
    E = a(676608),
    R = a(342296),
    D = a(317525),
    f = a(486020),
    v = a(109054),
    b = a(560936),
    y = a(743981),
    L = a(222590),
    P = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function N(e) {
    let {
        author: t,
        message: a,
        channel: n,
        userOverride: i,
        compact: P = !1,
        withMentionPrefix: N = !1,
        showPopout: G = !1,
        hideGuildTag: U = !1,
        hideSystemTag: O = !1,
        className: x,
        onClick: M,
        onContextMenu: w,
        onPopoutRequestClose: F,
        renderPopout: B,
        decorations: H,
        previewGuildId: W,
        subscribeToGroupId: k
    } = e, j = r.useRef(null), V = r.useContext(C.A), K = n?.guild_id ?? V, {
        analyticsLocations: z
    } = (0, A.Ay)(p.A.USERNAME), $ = N ? "@" : "", {
        nick: J,
        colorString: Q,
        colorStrings: Y,
        colorRoleName: Z,
        displayNameStyles: q
    } = t, X = (0, o.bG)([S.A], () => S.A.roleStyle), ee = "username" === X, et = (0, I.a)({
        displayNameStyles: q
    }), ea = (0, o.bG)([D.A], () => null == t.guildId || null == t.colorRoleId ? null : D.A.getRole(t.guildId, t.colorRoleId)), en = (0, E.jV)(W ?? K, ea), el = (0, v.A)(a), er = r.useContext(u.C), ei = er?.animate || G, es = en && (0, T.kz)(t), ec = ee && es, eo = n?.isPrivate() && null != q;
    (0, b.A)({
        shouldSubscribe: eo || ec,
        subscribeToGroupId: k,
        authorId: a.author.id
    });
    let {
        gradientStyle: eu,
        gradientClassname: e_
    } = (0, d.v5K)({
        colorStrings: Y,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: ei
    }), ed = (0, _.CR)($ + J), eS = {
        className: s()(L.oF, et, {
            [e_]: ec,
            [L.IW]: "username" === X && null != Q
        }),
        style: (() => {
            if (ee) return ec && null != Y ? {
                ...eu,
                textDecorationColor: Y?.primaryColor ?? void 0
            } : null != Q ? {
                color: Q
            } : void 0
        })(),
        onClick: M,
        onContextMenu: w,
        children: eo ? (0, l.jsx)(h.A, {
            userName: ed,
            displayNameStyles: q,
            effectDisplayType: ei ? m.G.ANIMATED : m.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != M,
            textClassName: L.Mu
        }) : ed,
        "data-text": $ + J,
        "data-username-has-gradient": !!es || void 0
    }, ep = r.useMemo(() => U ? null : (0, l.jsx)(g.Cw, {
        primaryGuild: t.primaryGuild,
        userId: a.author.id,
        contextGuildId: K,
        className: L.s4,
        badgeSize: P ? y.Sl.SIZE_12 : void 0
    }), [P, t.primaryGuild, K, a.author.id, U]), eA = i ?? a.author, em = null != B && null != G ? (0, l.jsx)(R.A, {
        targetElementRef: j,
        user: eA,
        renderPopout: B,
        shouldShow: G,
        shouldPreload: el,
        position: c.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != K ? (0, f.s7)({
            guildId: K,
            userId: eA.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: F,
        clickTrap: G,
        children: e => {
            let {
                onClick: t,
                ...a
            } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(d.DUT, {
                    tag: "span",
                    innerRef: j,
                    ...a,
                    ...eS,
                    className: s()(eS.className, L.vk, x)
                }), ep]
            })
        }
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.DUT, {
            ...eS,
            className: s()(eS.className, x)
        }), ep]
    }), eh = null != H ? H[0] : null, eI = null != H ? H[1] : null;
    return (0, l.jsxs)(A.f5, {
        value: z,
        children: [null != eh && !O && P ? (0, l.jsxs)(l.Fragment, {
            children: [" ", eh, " "]
        }) : null, "dot" === X ? (0, l.jsx)(d.WYI, {
            color: Q,
            colors: es ? Y : null,
            name: Z,
            className: L.m4,
            hoverOverride: ei
        }) : null, em, null != eI ? eI : null, null == eh || O || P ? null : eh]
    })
}