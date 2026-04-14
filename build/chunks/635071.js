/** chunk id: 635071 params = (module,exports,require) **/
t.d(a, {
    A: () => w,
    w: () => N
});
var n, i = t(627968),
    o = t(64700),
    r = t(503698),
    c = t.n(r),
    l = t(607399),
    s = t(311907),
    _ = t(473193),
    d = t(36075),
    u = t(397927),
    m = t(775602),
    p = t(793574),
    f = t(688810),
    C = t(922301),
    g = t(750112),
    I = t(73392),
    h = t(386467),
    A = t(534400),
    T = t(176201),
    b = t(676608),
    E = t(342296),
    y = t(317525),
    x = t(486020),
    v = t(109054),
    S = t(560936),
    M = t(743981),
    O = t(767283),
    N = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function w(e) {
    let {
        author: a,
        message: t,
        channel: n,
        userOverride: r,
        compact: N = !1,
        withMentionPrefix: w = !1,
        showPopout: R = !1,
        hideGuildTag: G = !1,
        hideSystemTag: P = !1,
        className: L,
        onClick: D,
        onContextMenu: B,
        onPopoutRequestClose: k,
        renderPopout: j,
        decorations: V,
        previewGuildId: z,
        subscribeToGroupId: U
    } = e, F = o.useRef(null), H = o.useContext(h.A), W = n?.guild_id ?? H, {
        analyticsLocations: $
    } = (0, f.Ay)(p.A.USERNAME), K = w ? "@" : "", {
        nick: X,
        colorString: Y,
        colorStrings: J,
        colorRoleName: q,
        displayNameStyles: Q
    } = a, Z = (0, s.bG)([m.A], () => m.A.roleStyle), ee = "username" === Z, ea = (0, I.a)({
        displayNameStyles: Q
    }), et = (0, s.bG)([y.A], () => null == a.guildId || null == a.colorRoleId ? null : y.A.getRole(a.guildId, a.colorRoleId)), en = (0, b.jV)(z ?? W, et), ei = (0, v.A)(t), eo = o.useContext(_.C), er = eo?.animate || R, ec = en && (0, T.kz)(a), el = ee && ec, es = n?.isPrivate() && null != Q;
    (0, S.A)({
        shouldSubscribe: es || el,
        subscribeToGroupId: U,
        authorId: t.author.id
    });
    let {
        gradientStyle: e_,
        gradientClassname: ed
    } = (0, u.v5K)({
        colorStrings: J,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: er
    }), eu = (0, d.CR)(K + X), em = {
        className: c()(O.oF, ea, {
            [ed]: el,
            [O.IW]: "username" === Z && null != Y
        }),
        style: (() => {
            if (ee) return el && null != J ? {
                ...e_,
                textDecorationColor: J?.primaryColor ?? void 0
            } : null != Y ? {
                color: Y
            } : void 0
        })(),
        onClick: D,
        onContextMenu: B,
        children: es ? (0, i.jsx)(g.A, {
            userName: eu,
            displayNameStyles: Q,
            effectDisplayType: er ? C.G.ANIMATED : C.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != D,
            textClassName: O.Mu
        }) : eu,
        "data-text": K + X,
        "data-username-has-gradient": !!ec || void 0
    }, ep = o.useMemo(() => G ? null : (0, i.jsx)(A.Cw, {
        primaryGuild: a.primaryGuild,
        userId: t.author.id,
        contextGuildId: W,
        className: O.s4,
        badgeSize: N ? M.Sl.SIZE_12 : void 0
    }), [N, a.primaryGuild, W, t.author.id, G]), ef = r ?? t.author, eC = null != j && null != R ? (0, i.jsx)(E.default, {
        targetElementRef: F,
        user: ef,
        guildId: W,
        channelId: t.channel_id,
        renderPopout: j,
        shouldShow: R,
        shouldPreload: ei,
        position: l.Fr ? "window_center" : "right",
        avatarUrl: null != a.guildMemberAvatar && null != W ? (0, x.s7)({
            guildId: W,
            userId: ef.id,
            avatar: a.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: k,
        clickTrap: R,
        children: e => {
            let {
                onClick: a,
                ...t
            } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(u.DUT, {
                    tag: "span",
                    innerRef: F,
                    ...t,
                    ...em,
                    className: c()(em.className, O.vk, L)
                }), ep]
            })
        }
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.DUT, {
            ...em,
            className: c()(em.className, L)
        }), ep]
    }), eg = null != V ? V[0] : null, eI = null != V ? V[1] : null;
    return (0, i.jsxs)(f.f5, {
        value: $,
        children: [null != eg && !P && N ? (0, i.jsxs)(i.Fragment, {
            children: [" ", eg, " "]
        }) : null, "dot" === Z ? (0, i.jsx)(u.WYI, {
            color: Y,
            colors: ec ? J : null,
            name: q,
            className: O.m4,
            hoverOverride: er
        }) : null, eC, null != eI ? eI : null, null == eg || P || N ? null : eg]
    })
}