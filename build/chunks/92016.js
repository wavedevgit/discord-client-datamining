/** chunk id: 92016, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => B
});
var n = r(627968);
r(64700);
var i = r(397927),
    l = r(442433),
    o = r(847767),
    a = r(358367),
    s = r(155718),
    c = r(468389),
    d = r(793574),
    u = r(810845),
    A = r(854182),
    f = r(734337),
    b = r(855187),
    p = r(479335),
    g = r(343328),
    y = r(848977),
    O = r(995102),
    v = r(50268),
    E = r(222311),
    h = r(803664),
    j = r(29293),
    I = r(509302),
    m = r(497600),
    x = r(773699),
    S = r(239211),
    D = r(707378),
    M = r(486524),
    w = r(631637),
    N = r(984894),
    k = r(399476),
    _ = r(889460),
    P = r(460597),
    C = r(313998),
    R = r(198229),
    F = r(243949),
    V = r(972432),
    U = r(77544),
    T = r(571964),
    L = r(708653),
    G = r(297460),
    X = r(652215),
    H = r(985018);
let B = (0, a.A)((0, o.A)(function(e) {
    let {
        user: t,
        channel: r,
        channelSelected: o = !1,
        showMute: a = !0,
        showMediaItems: d = !1,
        showChannelCallItems: X = !1,
        showModalItems: B = !0,
        targetIsUser: Y = !1,
        context: Z,
        onSelect: W,
        onHeightUpdate: K,
        onInteraction: $,
        widgetType: z
    } = e, q = (0, G.A)({
        kind: "DM_USER",
        userId: t.id
    }, z), J = (0, F.A)({
        userId: t.id,
        guildId: null
    }), Q = (0, D.A)({
        user: t,
        context: Z
    }), ee = (0, m.A)({
        user: t,
        channelId: r.id,
        context: Z
    }), et = (0, j.A)({
        user: t
    }), er = (0, U.A)(t.id), en = (0, M.A)(r.id, o), ei = (0, _.A)({
        user: t
    }), el = (0, c.A)(null, t), eo = (0, V.A)(t.id), ea = (0, C.g)(r.id, "OverlayDMUserContextMenu"), es = (0, C.A)(t, ea), ec = (0, h.A)({
        user: t
    }), ed = (0, I.A)({
        user: t
    }), eu = (0, P.A)({
        user: t
    }), eA = (0, T.A)({
        user: t
    }), ef = (0, R.A)(t.id), eb = (0, p.u)({
        userId: t.id,
        channelId: r.id,
        guildId: r.getGuildId()
    }), ep = (0, N.A)(t.id, r.id), eg = (0, S.A)({
        user: t,
        location: "OverlayDMUserContextMenu"
    }), ey = (0, k.A)({
        user: t,
        location: "OverlayDMUserContextMenu"
    }), eO = (0, O.Ay)(r), ev = (0, v.A)({
        id: t.id,
        label: H.intl.string(H.t["/AXYnE"])
    }), eE = (0, v.A)({
        id: r.id,
        label: H.intl.string(H.t.gFHI3k)
    }), eh = (0, y.A)(r), ej = (0, f.A)(t.id), eI = (0, A.A)(r.id), em = (0, E.A)(t), ex = (0, b.A)(t.id), eS = (0, u.A)(r.id, t.id), eD = (0, x.A)({
        commandType: s.kc.USER,
        commandTargetId: t.id,
        channel: r,
        guildId: void 0,
        onHeightUpdate: K
    }), {
        toggleFavoriteItem: eM
    } = (0, L.As)(t.id, z), ew = (0, w.A)({
        channel: r
    }), eN = r.isManaged(), ek = t.isNonUserBot();
    return (0, n.jsxs)(i.W1t, {
        navId: "overlay-user-context",
        onClose: l.Z_,
        "aria-label": H.intl.string(H.t.liqwPJ),
        onSelect: W,
        onInteraction: $,
        children: [(0, n.jsxs)(i.rXV, {
            children: [!(ek && !(0, g.A)(r.id)) && eh, q, eM]
        }), (0, n.jsx)(i.rXV, {
            children: !ek && em
        }), (0, n.jsxs)(i.rXV, {
            children: [!ek && (0, n.jsxs)(n.Fragment, {
                children: [B && J, Q, !eN && es, B && ee, B && et, eA, er]
            }), en]
        }), !ek && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.rXV, {
                children: d && eo
            }), (0, n.jsx)(i.rXV, {
                children: B && el
            }), (0, n.jsxs)(i.rXV, {
                children: [d && ef, B && eb, d && ep, eD, B && ei, ec, ed, eu, B && ey, B && eg, d && ex]
            }), (0, n.jsx)(i.rXV, {
                children: a && eO
            }), X && (0, n.jsxs)(i.rXV, {
                children: [eS, eI, ej]
            })]
        }), (0, g.A)(r.id) && (0, n.jsx)(i.rXV, {
            children: a && eO
        }), (0, n.jsx)(i.rXV, {
            children: ew
        }), (0, n.jsxs)(i.rXV, {
            children: [ev, !Y && eE]
        })]
    })
}, {
    object: X.ZSU.CONTEXT_MENU
}), [d.A.CONTEXT_MENU, d.A.OVERLAY, d.A.DM_USER_MENU])