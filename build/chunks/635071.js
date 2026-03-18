/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => w,
    w: () => E
});
var l, a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    d = n(607399),
    o = n(311907),
    c = n(473193),
    u = n(36075),
    _ = n(397927),
    m = n(775602),
    x = n(793574),
    p = n(688810),
    h = n(922301),
    g = n(750112),
    A = n(73392),
    v = n(386467),
    b = n(534400),
    f = n(176201),
    j = n(676608),
    T = n(342296),
    C = n(317525),
    N = n(486020),
    I = n(109054),
    y = n(560936),
    S = n(743981),
    k = n(679740),
    E = ((l = {})[l.SYSTEM_TAG = 0] = "SYSTEM_TAG", l[l.BADGES = 1] = "BADGES", l);

function w(e) {
    let {
        author: t,
        message: n,
        channel: l,
        userOverride: i,
        compact: E = !1,
        withMentionPrefix: w = !1,
        showPopout: M = !1,
        hideGuildTag: R = !1,
        hideSystemTag: L = !1,
        className: G,
        onClick: O,
        onContextMenu: D,
        onPopoutRequestClose: U,
        renderPopout: B,
        decorations: P,
        previewGuildId: H,
        subscribeToGroupId: F
    } = e, V = r.useRef(null), W = r.useContext(v.A), z = l?.guild_id ?? W, {
        analyticsLocations: K
    } = (0, p.Ay)(x.A.USERNAME), $ = w ? "@" : "", {
        nick: Q,
        colorString: Y,
        colorStrings: q,
        colorRoleName: Z,
        displayNameStyles: J
    } = t, X = (0, o.bG)([m.A], () => m.A.roleStyle), ee = "username" === X, et = (0, A.a)({
        displayNameStyles: J
    }), en = (0, o.bG)([C.A], () => null == t.guildId || null == t.colorRoleId ? null : C.A.getRole(t.guildId, t.colorRoleId)), el = (0, j.jV)(H ?? z, en), ea = (0, I.A)(n), er = r.useContext(c.C), ei = er?.animate || M, es = el && (0, f.kz)(t), ed = ee && es, eo = l?.isPrivate() && null != J;
    (0, y.A)({
        shouldSubscribe: eo || ed,
        subscribeToGroupId: F,
        authorId: n.author.id
    });
    let {
        gradientStyle: ec,
        gradientClassname: eu
    } = (0, _.v5K)({
        colorStrings: q,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: ei
    }), e_ = (0, u.CR)($ + Q), em = {
        className: s()(k.oF, et, {
            [eu]: ed,
            [k.IW]: "username" === X && null != Y
        }),
        style: (() => {
            if (ee) return ed && null != q ? {
                ...ec,
                textDecorationColor: q?.primaryColor ?? void 0
            } : null != Y ? {
                color: Y
            } : void 0
        })(),
        onClick: O,
        onContextMenu: D,
        children: eo ? (0, a.jsx)(g.A, {
            userName: e_,
            displayNameStyles: J,
            effectDisplayType: ei ? h.G.ANIMATED : h.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != O,
            textClassName: k.Mu
        }) : e_,
        "data-text": $ + Q,
        "data-username-has-gradient": !!es || void 0
    }, ex = r.useMemo(() => R ? null : (0, a.jsx)(b.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: z,
        className: k.s4,
        badgeSize: E ? S.Sl.SIZE_12 : void 0
    }), [E, t.primaryGuild, z, n.author.id, R]), ep = i ?? n.author, eh = null != B && null != M ? (0, a.jsx)(T.A, {
        targetElementRef: V,
        user: ep,
        renderPopout: B,
        shouldShow: M,
        shouldPreload: ea,
        position: d.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != z ? (0, N.s7)({
            guildId: z,
            userId: ep.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: U,
        clickTrap: M,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(_.DUT, {
                    tag: "span",
                    innerRef: V,
                    ...n,
                    ...em,
                    className: s()(em.className, k.vk, G)
                }), ex]
            })
        }
    }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.DUT, {
            ...em,
            className: s()(em.className, G)
        }), ex]
    }), eg = null != P ? P[0] : null, eA = null != P ? P[1] : null;
    return (0, a.jsxs)(p.f5, {
        value: K,
        children: [null != eg && !L && E ? (0, a.jsxs)(a.Fragment, {
            children: [" ", eg, " "]
        }) : null, "dot" === X ? (0, a.jsx)(_.WYI, {
            color: Y,
            colors: es ? q : null,
            name: Z,
            className: k.m4,
            hoverOverride: ei
        }) : null, eh, null != eA ? eA : null, null == eg || L || E ? null : eg]
    })
}