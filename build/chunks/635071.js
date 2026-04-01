/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => M,
    w: () => E
});
var l, a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    d = n(607399),
    o = n(311907),
    c = n(473193),
    u = n(36075),
    _ = n(397927),
    m = n(775602),
    x = n(793574),
    p = n(688810),
    g = n(922301),
    h = n(750112),
    A = n(73392),
    b = n(386467),
    v = n(534400),
    f = n(176201),
    T = n(676608),
    C = n(342296),
    j = n(317525),
    I = n(486020),
    N = n(109054),
    S = n(560936),
    y = n(743981),
    k = n(767283),
    E = ((l = {})[l.SYSTEM_TAG = 0] = "SYSTEM_TAG", l[l.BADGES = 1] = "BADGES", l);

function M(e) {
    let {
        author: t,
        message: n,
        channel: l,
        userOverride: r,
        compact: E = !1,
        withMentionPrefix: M = !1,
        showPopout: R = !1,
        hideGuildTag: w = !1,
        hideSystemTag: O = !1,
        className: G,
        onClick: L,
        onContextMenu: D,
        onPopoutRequestClose: B,
        renderPopout: P,
        decorations: U,
        previewGuildId: H,
        subscribeToGroupId: V
    } = e, F = i.useRef(null), W = i.useContext(b.A), z = l?.guild_id ?? W, {
        analyticsLocations: K
    } = (0, p.Ay)(x.A.USERNAME), $ = M ? "@" : "", {
        nick: Q,
        colorString: q,
        colorStrings: Y,
        colorRoleName: J,
        displayNameStyles: Z
    } = t, X = (0, o.bG)([m.A], () => m.A.roleStyle), ee = "username" === X, et = (0, A.a)({
        displayNameStyles: Z
    }), en = (0, o.bG)([j.A], () => null == t.guildId || null == t.colorRoleId ? null : j.A.getRole(t.guildId, t.colorRoleId)), el = (0, T.jV)(H ?? z, en), ea = (0, N.A)(n), ei = i.useContext(c.C), er = ei?.animate || R, es = el && (0, f.kz)(t), ed = ee && es, eo = l?.isPrivate() && null != Z;
    (0, S.A)({
        shouldSubscribe: eo || ed,
        subscribeToGroupId: V,
        authorId: n.author.id
    });
    let {
        gradientStyle: ec,
        gradientClassname: eu
    } = (0, _.v5K)({
        colorStrings: Y,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: er
    }), e_ = (0, u.CR)($ + Q), em = {
        className: s()(k.oF, et, {
            [eu]: ed,
            [k.IW]: "username" === X && null != q
        }),
        style: (() => {
            if (ee) return ed && null != Y ? {
                ...ec,
                textDecorationColor: Y?.primaryColor ?? void 0
            } : null != q ? {
                color: q
            } : void 0
        })(),
        onClick: L,
        onContextMenu: D,
        children: eo ? (0, a.jsx)(h.A, {
            userName: e_,
            displayNameStyles: Z,
            effectDisplayType: er ? g.G.ANIMATED : g.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != L,
            textClassName: k.Mu
        }) : e_,
        "data-text": $ + Q,
        "data-username-has-gradient": !!es || void 0
    }, ex = i.useMemo(() => w ? null : (0, a.jsx)(v.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: z,
        className: k.s4,
        badgeSize: E ? y.Sl.SIZE_12 : void 0
    }), [E, t.primaryGuild, z, n.author.id, w]), ep = r ?? n.author, eg = null != P && null != R ? (0, a.jsx)(C.A, {
        targetElementRef: F,
        user: ep,
        guildId: z,
        channelId: n.channel_id,
        renderPopout: P,
        shouldShow: R,
        shouldPreload: ea,
        position: d.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != z ? (0, I.s7)({
            guildId: z,
            userId: ep.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: B,
        clickTrap: R,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(_.DUT, {
                    tag: "span",
                    innerRef: F,
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
    }), eh = null != U ? U[0] : null, eA = null != U ? U[1] : null;
    return (0, a.jsxs)(p.f5, {
        value: K,
        children: [null != eh && !O && E ? (0, a.jsxs)(a.Fragment, {
            children: [" ", eh, " "]
        }) : null, "dot" === X ? (0, a.jsx)(_.WYI, {
            color: q,
            colors: es ? Y : null,
            name: J,
            className: k.m4,
            hoverOverride: er
        }) : null, eg, null != eA ? eA : null, null == eh || O || E ? null : eh]
    })
}