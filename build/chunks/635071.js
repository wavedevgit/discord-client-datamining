/** chunk id: 635071 params = (module,exports,require) **/
n.d(t, {
    A: () => O,
    w: () => R
});
var i, l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(607399),
    d = n(311907),
    c = n(473193),
    u = n(36075),
    h = n(397927),
    A = n(775602),
    _ = n(793574),
    m = n(688810),
    g = n(922301),
    p = n(750112),
    f = n(73392),
    x = n(386467),
    E = n(534400),
    I = n(176201),
    C = n(676608),
    N = n(342296),
    T = n(317525),
    S = n(486020),
    b = n(109054),
    y = n(560936),
    v = n(743981),
    j = n(767283),
    R = ((i = {})[i.SYSTEM_TAG = 0] = "SYSTEM_TAG", i[i.BADGES = 1] = "BADGES", i);

function O(e) {
    let {
        author: t,
        message: n,
        channel: i,
        userOverride: a,
        compact: R = !1,
        withMentionPrefix: O = !1,
        showPopout: L = !1,
        hideGuildTag: M = !1,
        hideSystemTag: D = !1,
        className: U,
        onClick: G,
        onContextMenu: P,
        onPopoutRequestClose: k,
        renderPopout: w,
        decorations: B,
        previewGuildId: V,
        subscribeToGroupId: H
    } = e, F = s.useRef(null), K = s.useContext(x.A), W = i?.guild_id ?? K, {
        analyticsLocations: Y
    } = (0, m.Ay)(_.A.USERNAME), z = O ? "@" : "", {
        nick: q,
        colorString: X,
        colorStrings: J,
        colorRoleName: Q,
        displayNameStyles: $
    } = t, Z = (0, d.bG)([A.A], () => A.A.roleStyle), ee = "username" === Z, et = (0, f.a)({
        displayNameStyles: $
    }), en = (0, d.bG)([T.A], () => null == t.guildId || null == t.colorRoleId ? null : T.A.getRole(t.guildId, t.colorRoleId)), ei = (0, C.jV)(V ?? W, en), el = (0, b.A)(n), es = s.useContext(c.C), ea = es?.animate || L, er = ei && (0, I.kz)(t), eo = ee && er, ed = i?.isPrivate() && null != $;
    (0, y.A)({
        shouldSubscribe: ed || eo,
        subscribeToGroupId: H,
        authorId: n.author.id
    });
    let {
        gradientStyle: ec,
        gradientClassname: eu
    } = (0, h.v5K)({
        colorStrings: J,
        roleStyle: "username",
        includeConvenienceGlow: !0,
        animateGradient: ea
    }), eh = (0, u.CR)(z + q), eA = {
        className: r()(j.oF, et, {
            [eu]: eo,
            [j.IW]: "username" === Z && null != X
        }),
        style: (() => {
            if (ee) return eo && null != J ? {
                ...ec,
                textDecorationColor: J?.primaryColor ?? void 0
            } : null != X ? {
                color: X
            } : void 0
        })(),
        onClick: G,
        onContextMenu: P,
        children: ed ? (0, l.jsx)(p.A, {
            userName: eh,
            displayNameStyles: $,
            effectDisplayType: ea ? g.G.ANIMATED : g.G.PLAIN,
            loop: !0,
            shouldUnderlineOnHover: null != G,
            textClassName: j.Mu
        }) : eh,
        "data-text": z + q,
        "data-username-has-gradient": !!er || void 0
    }, e_ = s.useMemo(() => M ? null : (0, l.jsx)(E.Cw, {
        primaryGuild: t.primaryGuild,
        userId: n.author.id,
        contextGuildId: W,
        className: j.s4,
        badgeSize: R ? v.Sl.SIZE_12 : void 0
    }), [R, t.primaryGuild, W, n.author.id, M]), em = a ?? n.author, eg = null != w && null != L ? (0, l.jsx)(N.A, {
        targetElementRef: F,
        user: em,
        guildId: W,
        channelId: n.channel_id,
        renderPopout: w,
        shouldShow: L,
        shouldPreload: el,
        position: o.Fr ? "window_center" : "right",
        avatarUrl: null != t.guildMemberAvatar && null != W ? (0, S.s7)({
            guildId: W,
            userId: em.id,
            avatar: t.guildMemberAvatar,
            size: 80
        }) : void 0,
        onRequestClose: k,
        clickTrap: L,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(h.DUT, {
                    tag: "span",
                    innerRef: F,
                    ...n,
                    ...eA,
                    className: r()(eA.className, j.vk, U)
                }), e_]
            })
        }
    }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(h.DUT, {
            ...eA,
            className: r()(eA.className, U)
        }), e_]
    }), ep = null != B ? B[0] : null, ef = null != B ? B[1] : null;
    return (0, l.jsxs)(m.f5, {
        value: Y,
        children: [null != ep && !D && R ? (0, l.jsxs)(l.Fragment, {
            children: [" ", ep, " "]
        }) : null, "dot" === Z ? (0, l.jsx)(h.WYI, {
            color: X,
            colors: er ? J : null,
            name: Q,
            className: j.m4,
            hoverOverride: ea
        }) : null, eg, null != ef ? ef : null, null == ep || D || R ? null : ep]
    })
}