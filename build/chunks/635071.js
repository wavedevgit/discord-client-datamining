/** chunk id: 635071, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N,
    w: () => M
});
var a, i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
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
    T = n(534400),
    x = n(176201),
    I = n(676608),
    C = n(342296),
    E = n(317525),
    S = n(486020),
    y = n(109054),
    v = n(560936),
    j = n(743981),
    R = n(222590),
    M = ((a = {})[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES", a);

function N(e) {
    let {
        author: t,
        message: n,
        channel: a,
        userOverride: l,
        compact: M = !1,
        withMentionPrefix: N = !1,
        showPopout: O = !1,
        hideGuildTag: w = !1,
        hideSystemTag: D = !1,
        className: k,
        onClick: G,
        onContextMenu: U,
        onPopoutRequestClose: L,
        renderPopout: F,
        decorations: P,
        previewGuildId: B,
        subscribeToGroupId: W
    } = e, $ = r.useRef(null), H = r.useContext(A.A), z = a?.guild_id ?? H, {
        analyticsLocations: V
    } = (0, f.Ay)(p.A.USERNAME), J = N ? "@" : "", {
        nick: K,
        colorString: Z,
        colorStrings: Q,
        colorRoleName: X,
        displayNameStyles: Y
    } = t, q = (0, c.bG)([m.A], () => m.A.roleStyle), ee = "username" === q, et = (0, g.a)({
        displayNameStyles: Y
    }), en = (0, c.bG)([E.A], () => null == t.guildId || null == t.colorRoleId ? null : E.A.getRole(t.guildId, t.colorRoleId)), ea = (0, I.jV)(B ?? z, en), ei = (0, y.A)(n), er = r.useContext(d.C), el = er?.animate || O, es = ea && (0, x.kz)(t), eo = ee && es, ec = a?.isPrivate() && null != Y;
    (0, v.A)({
        shouldSubscribe: ec || eo,
        subscribeToGroupId: W,
        authorId: n.author.id
    });
    let {
        gradientStyle: ed,
        gradientClassname: eu
    } = (0, _.v5K)({
        colorStrings: Q,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: el
    }), e_ = (0, u.CR)(J + K), em = {
        className: s()(R.oF, et, {
            [eu]: eo,
            [R.IW]: "username" === q && null != Z
        }),
        style: (() => {
            if (ee) return eo && null != Q ? {
                ...ed,
                textDecorationColor: Q?.primaryColor ?? void 0
            } : null != Z ? {
                color: Z
            } : void 0
        })(),
        onClick: G,
        onContextMenu: U,
        children: ec ? (0, i.jsx)(h.A, {
            userName: e_,
            displayNameStyles: Y,
            effectDisplayType: el ? b.G.ANIMATED : b.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != G
        }) : e_,
        "data-text": J + K,
        "data-username-has-gradient": !!es || void 0
    }, ep = r.useMemo(() => M && !w ? (0, i.jsx)(T.Ay, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: z,
        className: R.s4,
        badgeSize: j.Sl.SIZE_12
    }) : null, [M, t.primaryGuild, z, n.author.id, w]), ef = l ?? n.author, eb = null != F && null != O ? (0, i.jsx)(C.A, {
        targetElementRef: $,
        user: ef,
        renderPopout: F,
        shouldShow: O,
        shouldPreload: ei,
        position: o.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != z ? (0, S.s7)({
            guildId: z,
            userId: ef.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: L,
        clickTrap: O,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.DUT, {
                    tag: "span",
                    innerRef: $,
                    ...n,
                    ...em,
                    className: s()(em.className, R.vk, k)
                }), ep]
            })
        }
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.DUT, {
            ...em,
            className: s()(em.className, k)
        }), ep]
    }), eh = null != P ? P[0] : null, eg = null != P ? P[1] : null;
    return (0, i.jsxs)(f.f5, {
        value: V,
        children: [null != eh && !D && M ? (0, i.jsxs)(i.Fragment, {
            children: [" ", eh, " "]
        }) : null, "dot" === q ? (0, i.jsx)(_.WYI, {
            color: Z,
            colors: es ? Q : null,
            name: X,
            className: R.m4,
            hoverOverride: el
        }) : null, eb, !M && !w && (0, i.jsx)(T.Ay, {
            primaryGuild: t.primaryGuild,
            userId: n.author.id,
            contextGuildId: z,
            className: R.s4
        }), null != eg ? eg : null, null == eh || D || M ? null : eh]
    })
}