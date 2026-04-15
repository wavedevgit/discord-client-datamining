/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => R,
    w: () => k
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
    p = n(793574),
    g = n(688810),
    h = n(922301),
    x = n(750112),
    A = n(73392),
    v = n(386467),
    f = n(534400),
    b = n(176201),
    T = n(676608),
    S = n(342296),
    E = n(317525),
    I = n(486020),
    C = n(109054),
    N = n(560936),
    j = n(743981),
    y = n(767283),
    k = ((l = {})[l.SYSTEM_TAG = 0] = "SYSTEM_TAG", l[l.BADGES = 1] = "BADGES", l);

function R(e) {
    let {
        author: t,
        message: n,
        channel: l,
        userOverride: i,
        compact: k = !1,
        withMentionPrefix: R = !1,
        showPopout: D = !1,
        hideGuildTag: M = !1,
        hideSystemTag: O = !1,
        className: w,
        onClick: G,
        onContextMenu: L,
        onPopoutRequestClose: U,
        renderPopout: P,
        decorations: B,
        previewGuildId: H,
        subscribeToGroupId: F
    } = e, V = r.useRef(null), W = r.useContext(v.A), z = l?.guild_id ?? W, {
        analyticsLocations: K
    } = (0, g.Ay)(p.A.USERNAME), $ = R ? "@" : "", {
        nick: Q,
        colorString: Y,
        colorStrings: q,
        colorRoleName: Z,
        displayNameStyles: J
    } = t, X = (0, o.bG)([m.A], () => m.A.roleStyle), ee = "username" === X, et = (0, A.a)({
        displayNameStyles: J
    }), en = (0, o.bG)([E.A], () => null == t.guildId || null == t.colorRoleId ? null : E.A.getRole(t.guildId, t.colorRoleId)), el = (0, T.jV)(H ?? z, en), ea = (0, C.A)(n), er = r.useContext(c.C), ei = er?.animate || D, es = el && (0, b.kz)(t), ed = ee && es, eo = l?.isPrivate() && null != J;
    (0, N.A)({
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
        className: s()(y.oF, et, {
            [eu]: ed,
            [y.IW]: "username" === X && null != Y
        }),
        style: (() => {
            if (ee) return ed && null != q ? {
                ...ec,
                textDecorationColor: q?.primaryColor ?? void 0
            } : null != Y ? {
                color: Y
            } : void 0
        })(),
        onClick: G,
        onContextMenu: L,
        children: eo ? (0, a.jsx)(x.A, {
            userName: e_,
            displayNameStyles: J,
            effectDisplayType: ei ? h.G.ANIMATED : h.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != G,
            textClassName: y.Mu
        }) : e_,
        "data-text": $ + Q,
        "data-username-has-gradient": !!es || void 0
    }, ep = r.useMemo(() => M ? null : (0, a.jsx)(f.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: z,
        className: y.s4,
        badgeSize: k ? j.Sl.SIZE_12 : void 0
    }), [k, t.primaryGuild, z, n.author.id, M]), eg = i ?? n.author, eh = null != P && null != D ? (0, a.jsx)(S.A, {
        targetElementRef: V,
        user: eg,
        guildId: z,
        channelId: n.channel_id,
        renderPopout: P,
        shouldShow: D,
        shouldPreload: ea,
        position: d.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != z ? (0, I.s7)({
            guildId: z,
            userId: eg.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: U,
        clickTrap: D,
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
                    className: s()(em.className, y.vk, w)
                }), ep]
            })
        }
    }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.DUT, {
            ...em,
            className: s()(em.className, w)
        }), ep]
    }), ex = null != B ? B[0] : null, eA = null != B ? B[1] : null;
    return (0, a.jsxs)(g.f5, {
        value: K,
        children: [null != ex && !O && k ? (0, a.jsxs)(a.Fragment, {
            children: [" ", ex, " "]
        }) : null, "dot" === X ? (0, a.jsx)(_.WYI, {
            color: Y,
            colors: es ? q : null,
            name: Z,
            className: y.m4,
            hoverOverride: ei
        }) : null, eh, null != eA ? eA : null, null == ex || O || k ? null : ex]
    })
}