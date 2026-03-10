/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => N,
    w: () => R
});
var a, i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
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
    M = n(679740),
    R = ((a = {})[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES", a);

function N(e) {
    let {
        author: t,
        message: n,
        channel: a,
        userOverride: r,
        compact: R = !1,
        withMentionPrefix: N = !1,
        showPopout: O = !1,
        hideGuildTag: w = !1,
        hideSystemTag: D = !1,
        className: k,
        onClick: U,
        onContextMenu: G,
        onPopoutRequestClose: L,
        renderPopout: F,
        decorations: P,
        previewGuildId: B,
        subscribeToGroupId: W
    } = e, $ = l.useRef(null), H = l.useContext(A.A), z = a?.guild_id ?? H, {
        analyticsLocations: V
    } = (0, f.Ay)(p.A.USERNAME), J = N ? "@" : "", {
        nick: K,
        colorString: Z,
        colorStrings: Q,
        colorRoleName: X,
        displayNameStyles: Y
    } = t, q = (0, c.bG)([m.A], () => m.A.roleStyle), ee = "username" === q, et = (0, g.a)({
        displayNameStyles: Y
    }), en = (0, c.bG)([E.A], () => null == t.guildId || null == t.colorRoleId ? null : E.A.getRole(t.guildId, t.colorRoleId)), ea = (0, I.jV)(B ?? z, en), ei = (0, y.A)(n), el = l.useContext(d.C), er = el?.animate || O, es = ea && (0, x.kz)(t), eo = ee && es, ec = a?.isPrivate() && null != Y;
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
        animateGradient: er
    }), e_ = (0, u.CR)(J + K), em = {
        className: s()(M.oF, et, {
            [eu]: eo,
            [M.IW]: "username" === q && null != Z
        }),
        style: (() => {
            if (ee) return eo && null != Q ? {
                ...ed,
                textDecorationColor: Q?.primaryColor ?? void 0
            } : null != Z ? {
                color: Z
            } : void 0
        })(),
        onClick: U,
        onContextMenu: G,
        children: ec ? (0, i.jsx)(h.A, {
            userName: e_,
            displayNameStyles: Y,
            effectDisplayType: er ? b.G.ANIMATED : b.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != U,
            textClassName: M.Mu
        }) : e_,
        "data-text": J + K,
        "data-username-has-gradient": !!es || void 0
    }, ep = l.useMemo(() => w ? null : (0, i.jsx)(T.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: z,
        className: M.s4,
        badgeSize: R ? j.Sl.SIZE_12 : void 0
    }), [R, t.primaryGuild, z, n.author.id, w]), ef = r ?? n.author, eb = null != F && null != O ? (0, i.jsx)(C.A, {
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
                    className: s()(em.className, M.vk, k)
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
        children: [null != eh && !D && R ? (0, i.jsxs)(i.Fragment, {
            children: [" ", eh, " "]
        }) : null, "dot" === q ? (0, i.jsx)(_.WYI, {
            color: Z,
            colors: es ? Q : null,
            name: X,
            className: M.m4,
            hoverOverride: er
        }) : null, eb, null != eg ? eg : null, null == eh || D || R ? null : eh]
    })
}