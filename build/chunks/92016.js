/** chunk id: 92016 params = (module,exports,require) **/
n.d(t, {
    default: () => W
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(847767),
    d = n(358367),
    s = n(155718),
    u = n(468389),
    o = n(793574),
    c = n(810845),
    A = n(854182),
    g = n(734337),
    f = n(855187),
    h = n(479335),
    E = n(343328),
    I = n(848977),
    p = n(995102),
    v = n(50268),
    _ = n(222311),
    x = n(803664),
    b = n(29293),
    S = n(509302),
    y = n(497600),
    D = n(773699),
    N = n(239211),
    m = n(707378),
    j = n(486524),
    M = n(631637),
    C = n(984894),
    R = n(399476),
    U = n(889460),
    T = n(460597),
    O = n(313998),
    V = n(198229),
    F = n(243949),
    k = n(972432),
    G = n(77544),
    L = n(566396),
    P = n(571964),
    X = n(708653),
    B = n(297460),
    w = n(652215),
    H = n(985018);
let W = (0, d.A)((0, a.A)(function(e) {
    let {
        user: t,
        channel: n,
        channelSelected: a = !1,
        showMute: d = !0,
        showMediaItems: o = !1,
        showChannelCallItems: w = !1,
        showModalItems: W = !0,
        targetIsUser: Y = !1,
        context: J,
        onSelect: Z,
        onHeightUpdate: K,
        onInteraction: $,
        widgetType: q
    } = e, z = (0, B.A)({
        kind: "DM_USER",
        userId: t.id
    }, q), Q = (0, F.A)({
        userId: t.id,
        guildId: null
    }), ee = (0, m.A)({
        user: t,
        context: J
    }), et = (0, L.A)(t.id), en = (0, y.A)({
        user: t,
        channelId: n.id,
        context: J
    }), er = (0, b.A)({
        user: t
    }), ei = (0, G.A)(t.id), el = (0, j.A)(n.id, a), ea = (0, U.A)({
        user: t
    }), ed = (0, u.A)(null, t), es = (0, k.A)(t.id), eu = (0, O.g)(n.id, "OverlayDMUserContextMenu"), eo = (0, O.A)(t, eu), ec = (0, x.A)({
        user: t
    }), eA = (0, S.A)({
        user: t
    }), eg = (0, T.A)({
        user: t
    }), ef = (0, P.A)({
        user: t
    }), eh = (0, V.A)(t.id), eE = (0, h.u)({
        userId: t.id,
        channelId: n.id,
        guildId: n.getGuildId()
    }), eI = (0, C.A)(t.id, n.id), ep = (0, N.A)({
        user: t,
        location: "OverlayDMUserContextMenu"
    }), ev = (0, R.A)({
        user: t,
        location: "OverlayDMUserContextMenu"
    }), e_ = (0, p.A)(n), ex = (0, v.A)({
        id: t.id,
        label: H.intl.string(H.t["/AXYnE"])
    }), eb = (0, v.A)({
        id: n.id,
        label: H.intl.string(H.t.gFHI3k)
    }), eS = (0, I.A)(n), ey = (0, g.A)(t.id), eD = (0, A.A)(n.id), eN = (0, _.A)(t), em = (0, f.A)(t.id), ej = (0, c.A)(n.id, t.id), eM = (0, D.A)({
        commandType: s.kc.USER,
        commandTargetId: t.id,
        channel: n,
        guildId: void 0,
        onHeightUpdate: K
    }), {
        toggleFavoriteItem: eC
    } = (0, X.As)(t.id, q), eR = (0, M.A)({
        channel: n
    }), eU = n.isManaged(), eT = t.isNonUserBot();
    return (0, r.jsxs)(i.W1t, {
        navId: "overlay-user-context",
        onClose: l.Z_,
        "aria-label": H.intl.string(H.t.liqwPJ),
        onSelect: Z,
        onInteraction: $,
        children: [(0, r.jsxs)(i.rXV, {
            children: [z, !(eT && !(0, E.A)(n.id)) && eS, !eT && (0, r.jsxs)(r.Fragment, {
                children: [ee, et, !eU && eo, ei]
            })]
        }), (0, r.jsx)(i.rXV, {
            children: !eT && eN
        }), (0, r.jsxs)(i.rXV, {
            children: [!eT && (0, r.jsxs)(r.Fragment, {
                children: [W && Q, W && en, W && er, eC, ef]
            }), el]
        }), !eT && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(i.rXV, {
                children: o && es
            }), (0, r.jsx)(i.rXV, {
                children: W && ed
            }), (0, r.jsxs)(i.rXV, {
                children: [o && eh, W && eE, o && eI, eM, W && ea, ec, eA, eg, W && ev, W && ep, o && em]
            }), (0, r.jsx)(i.rXV, {
                children: d && e_
            }), w && (0, r.jsxs)(i.rXV, {
                children: [ej, eD, ey]
            })]
        }), (0, E.A)(n.id) && (0, r.jsx)(i.rXV, {
            children: d && e_
        }), (0, r.jsx)(i.rXV, {
            children: eR
        }), (0, r.jsxs)(i.rXV, {
            children: [ex, !Y && eb]
        })]
    })
}, {
    object: w.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.OVERLAY, o.A.DM_USER_MENU])