/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => R,
    w: () => j
});
var a, i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(607399),
    c = n(311907),
    d = n(473193),
    u = n(36075),
    m = n(397927),
    p = n(775602),
    _ = n(793574),
    h = n(688810),
    A = n(922301),
    g = n(750112),
    f = n(73392),
    b = n(386467),
    T = n(534400),
    x = n(176201),
    I = n(676608),
    C = n(342296),
    y = n(317525),
    E = n(486020),
    S = n(109054),
    v = n(560936),
    M = n(743981),
    N = n(767283),
    j = ((a = {})[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES", a);

function R(e) {
    let {
        author: t,
        message: n,
        channel: a,
        userOverride: s,
        compact: j = !1,
        withMentionPrefix: R = !1,
        showPopout: O = !1,
        hideGuildTag: D = !1,
        hideSystemTag: w = !1,
        className: U,
        onClick: G,
        onContextMenu: L,
        onPopoutRequestClose: F,
        renderPopout: k,
        decorations: P,
        previewGuildId: $,
        subscribeToGroupId: W
    } = e, B = l.useRef(null), H = l.useContext(b.A), V = a?.guild_id ?? H, {
        analyticsLocations: z
    } = (0, h.Ay)(_.A.USERNAME), J = R ? "@" : "", {
        nick: K,
        colorString: Z,
        colorStrings: Y,
        colorRoleName: Q,
        displayNameStyles: X
    } = t, q = (0, c.bG)([p.A], () => p.A.roleStyle), ee = "username" === q, et = (0, f.a)({
        displayNameStyles: X
    }), en = (0, c.bG)([y.A], () => null == t.guildId || null == t.colorRoleId ? null : y.A.getRole(t.guildId, t.colorRoleId)), ea = (0, I.jV)($ ?? V, en), ei = (0, S.A)(n), el = l.useContext(d.C), es = el?.animate || O, er = ea && (0, x.kz)(t), eo = ee && er, ec = a?.isPrivate() && null != X;
    (0, v.A)({
        shouldSubscribe: ec || eo,
        subscribeToGroupId: W,
        authorId: n.author.id
    });
    let {
        gradientStyle: ed,
        gradientClassname: eu
    } = (0, m.v5K)({
        colorStrings: Y,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: es
    }), em = (0, u.CR)(J + K), ep = {
        className: r()(N.oF, et, {
            [eu]: eo,
            [N.IW]: "username" === q && null != Z
        }),
        style: (() => {
            if (ee) return eo && null != Y ? {
                ...ed,
                textDecorationColor: Y?.primaryColor ?? void 0
            } : null != Z ? {
                color: Z
            } : void 0
        })(),
        onClick: G,
        onContextMenu: L,
        children: ec ? (0, i.jsx)(g.A, {
            userName: em,
            displayNameStyles: X,
            effectDisplayType: es ? A.G.ANIMATED : A.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != G,
            textClassName: N.Mu
        }) : em,
        "data-text": J + K,
        "data-username-has-gradient": !!er || void 0
    }, e_ = l.useMemo(() => D ? null : (0, i.jsx)(T.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: V,
        className: N.s4,
        badgeSize: j ? M.Sl.SIZE_12 : void 0
    }), [j, t.primaryGuild, V, n.author.id, D]), eh = s ?? n.author, eA = null != k && null != O ? (0, i.jsx)(C.default, {
        targetElementRef: B,
        user: eh,
        guildId: V,
        channelId: n.channel_id,
        renderPopout: k,
        shouldShow: O,
        shouldPreload: ei,
        position: o.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != V ? (0, E.s7)({
            guildId: V,
            userId: eh.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: F,
        clickTrap: O,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(m.DUT, {
                    tag: "span",
                    innerRef: B,
                    ...n,
                    ...ep,
                    className: r()(ep.className, N.vk, U)
                }), e_]
            })
        }
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.DUT, {
            ...ep,
            className: r()(ep.className, U)
        }), e_]
    }), eg = null != P ? P[0] : null, ef = null != P ? P[1] : null;
    return (0, i.jsxs)(h.f5, {
        value: z,
        children: [null != eg && !w && j ? (0, i.jsxs)(i.Fragment, {
            children: [" ", eg, " "]
        }) : null, "dot" === q ? (0, i.jsx)(m.WYI, {
            color: Z,
            colors: er ? Y : null,
            name: Q,
            className: N.m4,
            hoverOverride: es
        }) : null, eA, null != ef ? ef : null, null == eg || w || j ? null : eg]
    })
}