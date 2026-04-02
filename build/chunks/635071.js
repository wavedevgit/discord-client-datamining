/** chunk id: 635071 params = (module,exports,require) **/
t.d(a, {
    A: () => x,
    w: () => R
});
var n, c = t(627968),
    l = t(64700),
    r = t(503698),
    i = t.n(r),
    s = t(607399),
    o = t(311907),
    u = t(473193),
    d = t(36075),
    _ = t(397927),
    m = t(775602),
    A = t(793574),
    p = t(688810),
    T = t(922301),
    C = t(750112),
    E = t(73392),
    I = t(386467),
    h = t(534400),
    g = t(176201),
    y = t(676608),
    f = t(342296),
    O = t(317525),
    N = t(486020),
    b = t(109054),
    v = t(560936),
    S = t(743981),
    M = t(767283),
    R = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function x(e) {
    let {
        author: a,
        message: t,
        channel: n,
        userOverride: r,
        compact: R = !1,
        withMentionPrefix: x = !1,
        showPopout: D = !1,
        hideGuildTag: P = !1,
        hideSystemTag: L = !1,
        className: G,
        onClick: w,
        onContextMenu: U,
        onPopoutRequestClose: k,
        renderPopout: F,
        decorations: V,
        previewGuildId: H,
        subscribeToGroupId: j
    } = e, z = l.useRef(null), B = l.useContext(I.A), K = n?.guild_id ?? B, {
        analyticsLocations: W
    } = (0, p.Ay)(A.A.USERNAME), $ = x ? "@" : "", {
        nick: X,
        colorString: J,
        colorStrings: Y,
        colorRoleName: Z,
        displayNameStyles: Q
    } = a, q = (0, o.bG)([m.A], () => m.A.roleStyle), ee = "username" === q, ea = (0, E.a)({
        displayNameStyles: Q
    }), et = (0, o.bG)([O.A], () => null == a.guildId || null == a.colorRoleId ? null : O.A.getRole(a.guildId, a.colorRoleId)), en = (0, y.jV)(H ?? K, et), ec = (0, b.A)(t), el = l.useContext(u.C), er = el?.animate || D, ei = en && (0, g.kz)(a), es = ee && ei, eo = n?.isPrivate() && null != Q;
    (0, v.A)({
        shouldSubscribe: eo || es,
        subscribeToGroupId: j,
        authorId: t.author.id
    });
    let {
        gradientStyle: eu,
        gradientClassname: ed
    } = (0, _.v5K)({
        colorStrings: Y,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: er
    }), e_ = (0, d.CR)($ + X), em = {
        className: i()(M.oF, ea, {
            [ed]: es,
            [M.IW]: "username" === q && null != J
        }),
        style: (() => {
            if (ee) return es && null != Y ? {
                ...eu,
                textDecorationColor: Y?.primaryColor ?? void 0
            } : null != J ? {
                color: J
            } : void 0
        })(),
        onClick: w,
        onContextMenu: U,
        children: eo ? (0, c.jsx)(C.A, {
            userName: e_,
            displayNameStyles: Q,
            effectDisplayType: er ? T.G.ANIMATED : T.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != w,
            textClassName: M.Mu
        }) : e_,
        "data-text": $ + X,
        "data-username-has-gradient": !!ei || void 0
    }, eA = l.useMemo(() => P ? null : (0, c.jsx)(h.Cw, {
        primaryGuild: a.primaryGuild,
        userId: t.author.id,
        contextGuildId: K,
        className: M.s4,
        badgeSize: R ? S.Sl.SIZE_12 : void 0
    }), [R, a.primaryGuild, K, t.author.id, P]), ep = r ?? t.author, eT = null != F && null != D ? (0, c.jsx)(f.A, {
        targetElementRef: z,
        user: ep,
        guildId: K,
        channelId: t.channel_id,
        renderPopout: F,
        shouldShow: D,
        shouldPreload: ec,
        position: s.Fr ? "window_center" : "right",
        avatarUrl: null != a.guildMemberAvatar && null != K ? (0, N.s7)({
            guildId: K,
            userId: ep.id,
            avatar: a.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: k,
        clickTrap: D,
        children: e => {
            let {
                onClick: a,
                ...t
            } = e;
            return (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)(_.DUT, {
                    tag: "span",
                    innerRef: z,
                    ...t,
                    ...em,
                    className: i()(em.className, M.vk, G)
                }), eA]
            })
        }
    }) : (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(_.DUT, {
            ...em,
            className: i()(em.className, G)
        }), eA]
    }), eC = null != V ? V[0] : null, eE = null != V ? V[1] : null;
    return (0, c.jsxs)(p.f5, {
        value: W,
        children: [null != eC && !L && R ? (0, c.jsxs)(c.Fragment, {
            children: [" ", eC, " "]
        }) : null, "dot" === q ? (0, c.jsx)(_.WYI, {
            color: J,
            colors: ei ? Y : null,
            name: Z,
            className: M.m4,
            hoverOverride: er
        }) : null, eT, null != eE ? eE : null, null == eC || L || R ? null : eC]
    })
}