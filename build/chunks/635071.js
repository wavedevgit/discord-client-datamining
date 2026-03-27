/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => N,
    w: () => M
});
var a, i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(607399),
    c = n(311907),
    d = n(473193),
    u = n(36075),
    _ = n(397927),
    m = n(775602),
    p = n(793574),
    f = n(688810),
    b = n(922301),
    h = n(750112),
    g = n(73392),
    A = n(386467),
    x = n(534400),
    T = n(176201),
    C = n(676608),
    I = n(342296),
    S = n(317525),
    E = n(486020),
    y = n(109054),
    v = n(560936),
    j = n(743981),
    R = n(767283),
    M = ((a = {})[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES", a);

function N(e) {
    let {
        author: t,
        message: n,
        channel: a,
        userOverride: s,
        compact: M = !1,
        withMentionPrefix: N = !1,
        showPopout: w = !1,
        hideGuildTag: O = !1,
        hideSystemTag: k = !1,
        className: D,
        onClick: L,
        onContextMenu: U,
        onPopoutRequestClose: G,
        renderPopout: F,
        decorations: P,
        previewGuildId: B,
        subscribeToGroupId: $
    } = e, W = r.useRef(null), H = r.useContext(A.A), z = a?.guild_id ?? H, {
        analyticsLocations: V
    } = (0, f.Ay)(p.A.USERNAME), J = N ? "@" : "", {
        nick: Q,
        colorString: K,
        colorStrings: Z,
        colorRoleName: X,
        displayNameStyles: q
    } = t, Y = (0, c.bG)([m.A], () => m.A.roleStyle), ee = "username" === Y, et = (0, g.a)({
        displayNameStyles: q
    }), en = (0, c.bG)([S.A], () => null == t.guildId || null == t.colorRoleId ? null : S.A.getRole(t.guildId, t.colorRoleId)), ea = (0, C.jV)(B ?? z, en), ei = (0, y.A)(n), er = r.useContext(d.C), es = er?.animate || w, el = ea && (0, T.kz)(t), eo = ee && el, ec = a?.isPrivate() && null != q;
    (0, v.A)({
        shouldSubscribe: ec || eo,
        subscribeToGroupId: $,
        authorId: n.author.id
    });
    let {
        gradientStyle: ed,
        gradientClassname: eu
    } = (0, _.v5K)({
        colorStrings: Z,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: es
    }), e_ = (0, u.CR)(J + Q), em = {
        className: l()(R.oF, et, {
            [eu]: eo,
            [R.IW]: "username" === Y && null != K
        }),
        style: (() => {
            if (ee) return eo && null != Z ? {
                ...ed,
                textDecorationColor: Z?.primaryColor ?? void 0
            } : null != K ? {
                color: K
            } : void 0
        })(),
        onClick: L,
        onContextMenu: U,
        children: ec ? (0, i.jsx)(h.A, {
            userName: e_,
            displayNameStyles: q,
            effectDisplayType: es ? b.G.ANIMATED : b.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != L,
            textClassName: R.Mu
        }) : e_,
        "data-text": J + Q,
        "data-username-has-gradient": !!el || void 0
    }, ep = r.useMemo(() => O ? null : (0, i.jsx)(x.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: z,
        className: R.s4,
        badgeSize: M ? j.Sl.SIZE_12 : void 0
    }), [M, t.primaryGuild, z, n.author.id, O]), ef = s ?? n.author, eb = null != F && null != w ? (0, i.jsx)(I.A, {
        targetElementRef: W,
        user: ef,
        renderPopout: F,
        shouldShow: w,
        shouldPreload: ei,
        position: o.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != z ? (0, E.s7)({
            guildId: z,
            userId: ef.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: G,
        clickTrap: w,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.DUT, {
                    tag: "span",
                    innerRef: W,
                    ...n,
                    ...em,
                    className: l()(em.className, R.vk, D)
                }), ep]
            })
        }
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.DUT, {
            ...em,
            className: l()(em.className, D)
        }), ep]
    }), eh = null != P ? P[0] : null, eg = null != P ? P[1] : null;
    return (0, i.jsxs)(f.f5, {
        value: V,
        children: [null != eh && !k && M ? (0, i.jsxs)(i.Fragment, {
            children: [" ", eh, " "]
        }) : null, "dot" === Y ? (0, i.jsx)(_.WYI, {
            color: K,
            colors: el ? Z : null,
            name: X,
            className: R.m4,
            hoverOverride: es
        }) : null, eb, null != eg ? eg : null, null == eh || k || M ? null : eh]
    })
}