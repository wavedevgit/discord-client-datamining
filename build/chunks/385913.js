/** chunk id: 385913, original params: n,t,e (module,exports,require) **/
e.d(t, {
    default: () => k
});
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(442433),
    a = e(847767),
    d = e(358367),
    s = e(155718),
    u = e(468389),
    c = e(793574),
    o = e(810845),
    A = e(854182),
    h = e(734337),
    f = e(855187),
    _ = e(479335),
    g = e(343328),
    j = e(848977),
    p = e(995102),
    x = e(50268),
    b = e(133238),
    I = e(795144),
    E = e(671470),
    m = e(222311),
    v = e(803664),
    T = e(29293),
    y = e(509302),
    R = e(497600),
    C = e(773699),
    D = e(239211),
    U = e(707378),
    O = e(486524),
    G = e(631637),
    S = e(984894),
    M = e(399476),
    N = e(889460),
    V = e(460597),
    P = e(313998),
    X = e(198229),
    Y = e(243949),
    F = e(972432),
    L = e(77544),
    w = e(652215),
    W = e(985018);
let k = (0, d.A)((0, a.A)(function(n) {
    let {
        user: t,
        channel: e,
        channelSelected: a = !1,
        showMute: d = !0,
        showMediaItems: c = !1,
        showChannelCallItems: w = !1,
        showModalItems: k = !0,
        targetIsUser: B = !1,
        context: J,
        onSelect: K,
        onHeightUpdate: q,
        onInteraction: H
    } = n, Z = (0, Y.A)({
        userId: t.id,
        guildId: null
    }), $ = (0, U.A)({
        user: t,
        context: J
    }), z = (0, R.A)({
        user: t,
        channelId: e.id,
        context: J
    }), Q = (0, T.A)({
        user: t
    }), nn = (0, L.A)(t.id), nt = (0, O.A)(e.id, a), ne = (0, N.A)({
        user: t
    }), ni = (0, u.A)(null, t), nr = (0, F.A)(t.id), nl = (0, P.g)(e.id, "DMUserContextMenu"), na = (0, P.A)(t, nl), nd = (0, v.A)({
        user: t
    }), ns = (0, y.A)({
        user: t
    }), nu = (0, V.A)({
        user: t
    }), nc = (0, X.A)(t.id), no = (0, _.u)({
        userId: t.id,
        channelId: e.id,
        guildId: e.getGuildId()
    }), nA = (0, S.A)(t.id, e.id), nh = (0, D.A)({
        user: t,
        location: "DMUserContextMenu"
    }), nf = (0, M.A)({
        user: t,
        location: "DMUserContextMenu"
    }), n_ = (0, p.Ay)(e), ng = (0, x.A)({
        id: t.id,
        label: W.intl.string(W.t["/AXYnE"])
    }), nj = (0, x.A)({
        id: e.id,
        label: W.intl.string(W.t.gFHI3k)
    }), np = (0, j.A)(e), nx = (0, h.A)(t.id), nb = (0, A.A)(e.id), nI = (0, m.A)(t), nE = (0, f.A)(t.id), nm = (0, o.A)(e.id, t.id), nv = (0, C.A)({
        commandType: s.kc.USER,
        commandTargetId: t.id,
        channel: e,
        guildId: void 0,
        onHeightUpdate: q
    }), nT = (0, b.m)(e), ny = (0, b.y)(e), nR = (0, I.A)(e), nC = (0, E.A)(e), nD = (0, G.A)({
        channel: e
    }), nU = e.isManaged(), nO = t.isNonUserBot();
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: l.Z_,
        "aria-label": W.intl.string(W.t.liqwPJ),
        onSelect: K,
        onInteraction: H,
        children: [(0, i.jsx)(r.rXV, {
            children: !(nO && !(0, g.A)(e.id)) && np
        }), (0, i.jsxs)(r.rXV, {
            children: [nT, nR, nC]
        }), (0, i.jsx)(r.rXV, {
            children: !nO && nI
        }), (0, i.jsxs)(r.rXV, {
            children: [!nO && (0, i.jsxs)(i.Fragment, {
                children: [k && Z, $, !nU && na, k && z, k && Q, nn]
            }), (0, g.A)(e.id) && Z, nt]
        }), !nO && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.rXV, {
                children: c && nr
            }), (0, i.jsx)(r.rXV, {
                children: k && ni
            }), (0, i.jsxs)(r.rXV, {
                children: [nv, c && nE, c && nc, k && no, c && nA, k && ne, nd, ns, nu, k && nf, k && nh]
            }), (0, i.jsx)(r.rXV, {
                children: d && n_
            }), w && (0, i.jsxs)(r.rXV, {
                children: [nm, nb, nx]
            })]
        }), (0, g.A)(e.id) && (0, i.jsx)(r.rXV, {
            children: d && n_
        }), (0, i.jsx)(r.rXV, {
            children: ny
        }), (0, i.jsx)(r.rXV, {
            children: nD
        }), (0, i.jsxs)(r.rXV, {
            children: [ng, !B && nj]
        })]
    })
}, {
    object: w.ZSU.CONTEXT_MENU
}), [c.A.CONTEXT_MENU, c.A.DM_USER_MENU])