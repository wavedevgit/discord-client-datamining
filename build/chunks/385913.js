/** chunk id: 385913, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => J
});
var r = t(627968);
t(64700);
var i = t(397927),
    l = t(442433),
    c = t(847767),
    a = t(358367),
    o = t(155718),
    d = t(468389),
    s = t(793574),
    u = t(810845),
    b = t(854182),
    p = t(734337),
    h = t(855187),
    f = t(479335),
    j = t(343328),
    O = t(848977),
    g = t(995102),
    A = t(50268),
    y = t(133238),
    v = t(795144),
    m = t(671470),
    x = t(222311),
    D = t(803664),
    P = t(29293),
    w = t(509302),
    _ = t(497600),
    X = t(773699),
    V = t(239211),
    C = t(707378),
    E = t(486524),
    I = t(631637),
    M = t(984894),
    G = t(399476),
    S = t(889460),
    U = t(460597),
    k = t(313998),
    T = t(198229),
    Y = t(243949),
    R = t(972432),
    F = t(77544),
    L = t(652215),
    N = t(985018);
let J = (0, a.A)((0, c.A)(function(e) {
    let {
        user: n,
        channel: t,
        channelSelected: c = !1,
        showMute: a = !0,
        showMediaItems: s = !1,
        showChannelCallItems: L = !1,
        showModalItems: J = !0,
        targetIsUser: K = !1,
        context: B,
        onSelect: z,
        onHeightUpdate: W,
        onInteraction: Z
    } = e, q = (0, Y.A)({
        userId: n.id,
        guildId: null
    }), H = (0, C.A)({
        user: n,
        context: B
    }), Q = (0, _.A)({
        user: n,
        channelId: t.id,
        context: B
    }), $ = (0, P.A)({
        user: n
    }), ee = (0, F.A)(n.id), en = (0, E.A)(t.id, c), et = (0, S.A)({
        user: n
    }), er = (0, d.A)(null, n), ei = (0, R.A)(n.id), el = (0, k.g)(t.id, "DMUserContextMenu"), ec = (0, k.A)(n, el), ea = (0, D.A)({
        user: n
    }), eo = (0, w.A)({
        user: n
    }), ed = (0, U.A)({
        user: n
    }), es = (0, T.A)(n.id), eu = (0, f.u)({
        userId: n.id,
        channelId: t.id,
        guildId: t.getGuildId()
    }), eb = (0, M.A)(n.id, t.id), ep = (0, V.A)({
        user: n,
        location: "DMUserContextMenu"
    }), eh = (0, G.A)({
        user: n,
        location: "DMUserContextMenu"
    }), ef = (0, g.Ay)(t), ej = (0, A.A)({
        id: n.id,
        label: N.intl.string(N.t["/AXYnE"])
    }), eO = (0, A.A)({
        id: t.id,
        label: N.intl.string(N.t.gFHI3k)
    }), eg = (0, O.A)(t), eA = (0, p.A)(n.id), ey = (0, b.A)(t.id), ev = (0, x.A)(n), em = (0, h.A)(n.id), ex = (0, u.A)(t.id, n.id), eD = (0, X.A)({
        commandType: o.kc.USER,
        commandTargetId: n.id,
        channel: t,
        guildId: void 0,
        onHeightUpdate: W
    }), eP = (0, y.m)(t), ew = (0, y.y)(t), e_ = (0, v.A)(t), eX = (0, m.A)(t), eV = (0, I.A)({
        channel: t
    }), eC = t.isManaged(), eE = n.isNonUserBot();
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t.liqwPJ),
        onSelect: z,
        onInteraction: Z,
        children: [(0, r.jsx)(i.rXV, {
            children: !(eE && !(0, j.A)(t.id)) && eg
        }), (0, r.jsxs)(i.rXV, {
            children: [eP, e_, eX]
        }), (0, r.jsx)(i.rXV, {
            children: !eE && ev
        }), (0, r.jsxs)(i.rXV, {
            children: [!eE && (0, r.jsxs)(r.Fragment, {
                children: [J && q, H, !eC && ec, J && Q, J && $, ee]
            }), (0, j.A)(t.id) && q, en]
        }), !eE && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(i.rXV, {
                children: s && ei
            }), (0, r.jsx)(i.rXV, {
                children: J && er
            }), (0, r.jsxs)(i.rXV, {
                children: [eD, s && em, s && es, J && eu, s && eb, J && et, ea, eo, ed, J && eh, J && ep]
            }), (0, r.jsx)(i.rXV, {
                children: a && ef
            }), L && (0, r.jsxs)(i.rXV, {
                children: [ex, ey, eA]
            })]
        }), (0, j.A)(t.id) && (0, r.jsx)(i.rXV, {
            children: a && ef
        }), (0, r.jsx)(i.rXV, {
            children: ew
        }), (0, r.jsx)(i.rXV, {
            children: eV
        }), (0, r.jsxs)(i.rXV, {
            children: [ej, !K && eO]
        })]
    })
}, {
    object: L.ZSU.CONTEXT_MENU
}), [s.A.CONTEXT_MENU, s.A.DM_USER_MENU])