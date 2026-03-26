/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => L,
    w: () => D
});
var i, l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    c = n(311907),
    u = n(473193),
    d = n(36075),
    _ = n(397927),
    E = n(775602),
    A = n(793574),
    T = n(688810),
    I = n(922301),
    N = n(750112),
    p = n(73392),
    h = n(386467),
    m = n(534400),
    S = n(176201),
    C = n(676608),
    R = n(342296),
    g = n(317525),
    O = n(486020),
    y = n(109054),
    P = n(560936),
    x = n(743981),
    f = n(767283),
    D = ((i = {})[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES", i);

function L(e) {
    let {
        author: t,
        message: n,
        channel: i,
        userOverride: s,
        compact: D = !1,
        withMentionPrefix: L = !1,
        showPopout: U = !1,
        hideGuildTag: M = !1,
        hideSystemTag: j = !1,
        className: b,
        onClick: G,
        onContextMenu: v,
        onPopoutRequestClose: k,
        renderPopout: B,
        decorations: w,
        previewGuildId: F,
        subscribeToGroupId: W
    } = e, H = r.useRef(null), V = r.useContext(h.A), $ = i?.guild_id ?? V, {
        analyticsLocations: q
    } = (0, T.Ay)(A.A.USERNAME), X = L ? "@" : "", {
        nick: K,
        colorString: z,
        colorStrings: J,
        colorRoleName: Y,
        displayNameStyles: Z
    } = t, Q = (0, c.bG)([E.A], () => E.A.roleStyle), ee = "username" === Q, et = (0, p.a)({
        displayNameStyles: Z
    }), en = (0, c.bG)([g.A], () => null == t.guildId || null == t.colorRoleId ? null : g.A.getRole(t.guildId, t.colorRoleId)), ei = (0, C.jV)(F ?? $, en), el = (0, y.A)(n), er = r.useContext(u.C), es = er?.animate || U, ea = ei && (0, S.kz)(t), eo = ee && ea, ec = i?.isPrivate() && null != Z;
    (0, P.A)({
        shouldSubscribe: ec || eo,
        subscribeToGroupId: W,
        authorId: n.author.id
    });
    let {
        gradientStyle: eu,
        gradientClassname: ed
    } = (0, _.v5K)({
        colorStrings: J,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: es
    }), e_ = (0, d.CR)(X + K), eE = {
        className: a()(f.oF, et, {
            [ed]: eo,
            [f.IW]: "username" === Q && null != z
        }),
        style: (() => {
            if (ee) return eo && null != J ? {
                ...eu,
                textDecorationColor: J?.primaryColor ?? void 0
            } : null != z ? {
                color: z
            } : void 0
        })(),
        onClick: G,
        onContextMenu: v,
        children: ec ? (0, l.jsx)(N.A, {
            userName: e_,
            displayNameStyles: Z,
            effectDisplayType: es ? I.G.ANIMATED : I.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != G,
            textClassName: f.Mu
        }) : e_,
        "data-text": X + K,
        "data-username-has-gradient": !!ea || void 0
    }, eA = r.useMemo(() => M ? null : (0, l.jsx)(m.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: $,
        className: f.s4,
        badgeSize: D ? x.Sl.SIZE_12 : void 0
    }), [D, t.primaryGuild, $, n.author.id, M]), eT = s ?? n.author, eI = null != B && null != U ? (0, l.jsx)(R.A, {
        targetElementRef: H,
        user: eT,
        renderPopout: B,
        shouldShow: U,
        shouldPreload: el,
        position: o.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != $ ? (0, O.s7)({
            guildId: $,
            userId: eT.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: k,
        clickTrap: U,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(_.DUT, {
                    tag: "span",
                    innerRef: H,
                    ...n,
                    ...eE,
                    className: a()(eE.className, f.vk, b)
                }), eA]
            })
        }
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(_.DUT, {
            ...eE,
            className: a()(eE.className, b)
        }), eA]
    }), eN = null != w ? w[0] : null, ep = null != w ? w[1] : null;
    return (0, l.jsxs)(T.f5, {
        value: q,
        children: [null != eN && !j && D ? (0, l.jsxs)(l.Fragment, {
            children: [" ", eN, " "]
        }) : null, "dot" === Q ? (0, l.jsx)(_.WYI, {
            color: z,
            colors: ea ? J : null,
            name: Y,
            className: f.m4,
            hoverOverride: es
        }) : null, eI, null != ep ? ep : null, null == eN || j || D ? null : eN]
    })
}