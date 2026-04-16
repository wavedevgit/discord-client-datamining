/** chunk id: 635071 params = (module,exports,require) **/
a.d(t, {
    A: () => N,
    w: () => P
});
var n, o = a(627968),
    i = a(64700),
    r = a(503698),
    c = a.n(r),
    l = a(607399),
    s = a(311907),
    _ = a(473193),
    d = a(36075),
    u = a(397927),
    m = a(775602),
    p = a(793574),
    b = a(688810),
    C = a(922301),
    f = a(750112),
    g = a(73392),
    h = a(386467),
    I = a(534400),
    A = a(176201),
    T = a(676608),
    v = a(342296),
    y = a(317525),
    S = a(486020),
    E = a(109054),
    x = a(560936),
    M = a(743981),
    O = a(334211),
    P = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function N(e) {
    let {
        author: t,
        message: a,
        channel: n,
        userOverride: r,
        compact: P = !1,
        withMentionPrefix: N = !1,
        showPopout: w = !1,
        hideGuildTag: B = !1,
        hideSystemTag: R = !1,
        className: G,
        onClick: D,
        onContextMenu: L,
        onPopoutRequestClose: k,
        renderPopout: j,
        decorations: F,
        previewGuildId: U,
        subscribeToGroupId: H
    } = e, V = i.useRef(null), z = i.useContext(h.A), W = n?.guild_id ?? z, {
        analyticsLocations: $
    } = (0, b.Ay)(p.A.USERNAME), K = N ? "@" : "", {
        nick: X,
        colorString: Y,
        colorStrings: J,
        colorRoleName: q,
        displayNameStyles: Z
    } = t, Q = (0, s.bG)([m.A], () => m.A.roleStyle), ee = "username" === Q, et = (0, g.a)({
        displayNameStyles: Z
    }), ea = (0, s.bG)([y.A], () => null == t.guildId || null == t.colorRoleId ? null : y.A.getRole(t.guildId, t.colorRoleId)), en = (0, T.jV)(U ?? W, ea), eo = (0, E.A)(a), ei = i.useContext(_.C), er = ei?.animate || w, ec = en && (0, A.kz)(t), el = ee && ec, es = n?.isPrivate() && null != Z;
    (0, x.A)({
        shouldSubscribe: es || el,
        subscribeToGroupId: H,
        authorId: a.author.id
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
        className: c()(O.oF, et, {
            [ed]: el,
            [O.IW]: "username" === Q && null != Y
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
        onContextMenu: L,
        children: es ? (0, o.jsx)(f.A, {
            userName: eu,
            displayNameStyles: Z,
            effectDisplayType: er ? C.G.ANIMATED : C.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != D,
            textClassName: O.Mu
        }) : eu,
        "data-text": K + X,
        "data-username-has-gradient": !!ec || void 0
    }, ep = i.useMemo(() => B ? null : (0, o.jsx)(I.Cw, {
        primaryGuild: t.primaryGuild,
        userId: a.author.id,
        contextGuildId: W,
        className: O.s4,
        badgeSize: P ? M.Sl.SIZE_12 : void 0
    }), [P, t.primaryGuild, W, a.author.id, B]), eb = r ?? a.author, eC = null != j && null != w ? (0, o.jsx)(v.A, {
        targetElementRef: V,
        user: eb,
        guildId: W,
        channelId: a.channel_id,
        renderPopout: j,
        shouldShow: w,
        shouldPreload: eo,
        position: l.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != W ? (0, S.s7)({
            guildId: W,
            userId: eb.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: k,
        clickTrap: w,
        children: e => {
            let {
                onClick: t,
                ...a
            } = e;
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(u.DUT, {
                    tag: "span",
                    innerRef: V,
                    ...a,
                    ...em,
                    className: c()(em.className, O.vk, G)
                }), ep]
            })
        }
    }) : (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(u.DUT, {
            ...em,
            className: c()(em.className, G)
        }), ep]
    }), ef = null != F ? F[0] : null, eg = null != F ? F[1] : null;
    return (0, o.jsxs)(b.f5, {
        value: $,
        children: [null != ef && !R && P ? (0, o.jsxs)(o.Fragment, {
            children: [" ", ef, " "]
        }) : null, "dot" === Q ? (0, o.jsx)(u.WYI, {
            color: Y,
            colors: ec ? J : null,
            name: q,
            className: O.m4,
            hoverOverride: er
        }) : null, eC, null != eg ? eg : null, null == ef || R || P ? null : ef]
    })
}