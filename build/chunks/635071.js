/** chunk id: 635071 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => w,
    w: () => M
});
var n, i = a(627968),
    r = a(64700),
    s = a(503698),
    o = a.n(s),
    c = a(607399),
    l = a(311907),
    _ = a(473193),
    u = a(36075),
    d = a(397927),
    m = a(775602),
    p = a(793574),
    f = a(688810),
    g = a(922301),
    h = a(750112),
    I = a(73392),
    A = a(386467),
    C = a(534400),
    T = a(176201),
    y = a(676608),
    b = a(342296),
    v = a(317525),
    x = a(486020),
    E = a(109054),
    N = a(560936),
    O = a(743981),
    S = a(767283),
    M = ((n = {})[n.SYSTEM_TAG = 0] = "SYSTEM_TAG", n[n.BADGES = 1] = "BADGES", n);

function w(e) {
    let {
        author: t,
        message: a,
        channel: n,
        userOverride: s,
        compact: M = !1,
        withMentionPrefix: w = !1,
        showPopout: R = !1,
        hideGuildTag: G = !1,
        hideSystemTag: D = !1,
        className: P,
        onClick: L,
        onContextMenu: j,
        onPopoutRequestClose: B,
        renderPopout: k,
        decorations: z,
        previewGuildId: V,
        subscribeToGroupId: U
    } = e, F = r.useRef(null), H = r.useContext(A.A), $ = n?.guild_id ?? H, {
        analyticsLocations: K
    } = (0, f.Ay)(p.A.USERNAME), W = w ? "@" : "", {
        nick: X,
        colorString: Y,
        colorStrings: J,
        colorRoleName: q,
        displayNameStyles: Q
    } = t, Z = (0, l.bG)([m.A], () => m.A.roleStyle), ee = "username" === Z, et = (0, I.a)({
        displayNameStyles: Q
    }), ea = (0, l.bG)([v.A], () => null == t.guildId || null == t.colorRoleId ? null : v.A.getRole(t.guildId, t.colorRoleId)), en = (0, y.jV)(V ?? $, ea), ei = (0, E.A)(a), er = r.useContext(_.C), es = er?.animate || R, eo = en && (0, T.kz)(t), ec = ee && eo, el = n?.isPrivate() && null != Q;
    (0, N.A)({
        shouldSubscribe: el || ec,
        subscribeToGroupId: U,
        authorId: a.author.id
    });
    let {
        gradientStyle: e_,
        gradientClassname: eu
    } = (0, d.v5K)({
        colorStrings: J,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: es
    }), ed = (0, u.CR)(W + X), em = {
        className: o()(S.oF, et, {
            [eu]: ec,
            [S.IW]: "username" === Z && null != Y
        }),
        style: (() => {
            if (ee) return ec && null != J ? {
                ...e_,
                textDecorationColor: J?.primaryColor ?? void 0
            } : null != Y ? {
                color: Y
            } : void 0
        })(),
        onClick: L,
        onContextMenu: j,
        children: el ? (0, i.jsx)(h.A, {
            userName: ed,
            displayNameStyles: Q,
            effectDisplayType: es ? g.G.ANIMATED : g.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != L,
            textClassName: S.Mu
        }) : ed,
        "data-text": W + X,
        "data-username-has-gradient": !!eo || void 0
    }, ep = r.useMemo(() => G ? null : (0, i.jsx)(C.Cw, {
        primaryGuild: t.primaryGuild,
        userId: a.author.id,
        contextGuildId: $,
        className: S.s4,
        badgeSize: M ? O.Sl.SIZE_12 : void 0
    }), [M, t.primaryGuild, $, a.author.id, G]), ef = s ?? a.author, eg = null != k && null != R ? (0, i.jsx)(b.A, {
        targetElementRef: F,
        user: ef,
        renderPopout: k,
        shouldShow: R,
        shouldPreload: ei,
        position: c.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != $ ? (0, x.s7)({
            guildId: $,
            userId: ef.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: B,
        clickTrap: R,
        children: e => {
            let {
                onClick: t,
                ...a
            } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(d.DUT, {
                    tag: "span",
                    innerRef: F,
                    ...a,
                    ...em,
                    className: o()(em.className, S.vk, P)
                }), ep]
            })
        }
    }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.DUT, {
            ...em,
            className: o()(em.className, P)
        }), ep]
    }), eh = null != z ? z[0] : null, eI = null != z ? z[1] : null;
    return (0, i.jsxs)(f.f5, {
        value: K,
        children: [null != eh && !D && M ? (0, i.jsxs)(i.Fragment, {
            children: [" ", eh, " "]
        }) : null, "dot" === Z ? (0, i.jsx)(d.WYI, {
            color: Y,
            colors: eo ? J : null,
            name: q,
            className: S.m4,
            hoverOverride: es
        }) : null, eg, null != eI ? eI : null, null == eh || D || M ? null : eh]
    })
}