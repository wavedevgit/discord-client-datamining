/** chunk id: 385913 params = (module,exports,require) **/
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
    o = e(793574),
    c = e(810845),
    A = e(854182),
    f = e(734337),
    h = e(855187),
    g = e(479335),
    _ = e(343328),
    j = e(848977),
    p = e(995102),
    x = e(50268),
    b = e(133238),
    m = e(795144),
    I = e(671470),
    v = e(222311),
    E = e(803664),
    y = e(29293),
    T = e(509302),
    D = e(497600),
    R = e(773699),
    C = e(239211),
    G = e(707378),
    O = e(486524),
    U = e(631637),
    S = e(984894),
    M = e(399476),
    N = e(889460),
    V = e(460597),
    P = e(313998),
    X = e(198229),
    F = e(243949),
    Y = e(972432),
    L = e(77544),
    w = e(652215),
    W = e(985018);
let k = (0, d.A)((0, a.A)(function(n) {
    let {
        user: t,
        channel: e,
        channelSelected: a = !1,
        showMute: d = !0,
        showMediaItems: o = !1,
        showChannelCallItems: w = !1,
        showModalItems: k = !0,
        targetIsUser: B = !1,
        context: J,
        onSelect: K,
        onHeightUpdate: q,
        onInteraction: H
    } = n, Z = (0, F.A)({
        userId: t.id,
        guildId: null
    }), $ = (0, G.A)({
        user: t,
        context: J
    }), z = (0, D.A)({
        user: t,
        channelId: e.id,
        context: J
    }), Q = (0, y.A)({
        user: t
    }), nn = (0, L.A)(t.id), nt = (0, O.A)(e.id, a), ne = (0, N.A)({
        user: t
    }), ni = (0, u.A)(null, t), nr = (0, Y.A)(t.id), nl = (0, P.g)(e.id, "DMUserContextMenu"), na = (0, P.A)(t, nl), nd = (0, E.A)({
        user: t
    }), ns = (0, T.A)({
        user: t
    }), nu = (0, V.A)({
        user: t
    }), no = (0, X.A)(t.id), nc = (0, g.u)({
        userId: t.id,
        channelId: e.id,
        guildId: e.getGuildId()
    }), nA = (0, S.A)(t.id, e.id), nf = (0, C.A)({
        user: t,
        location: "DMUserContextMenu"
    }), nh = (0, M.A)({
        user: t,
        location: "DMUserContextMenu"
    }), ng = (0, p.Ay)(e), n_ = (0, x.A)({
        id: t.id,
        label: W.intl.string(W.t["/AXYnE"])
    }), nj = (0, x.A)({
        id: e.id,
        label: W.intl.string(W.t.gFHI3k)
    }), np = (0, j.A)(e), nx = (0, f.A)(t.id), nb = (0, A.A)(e.id), nm = (0, v.A)(t), nI = (0, h.A)(t.id), nv = (0, c.A)(e.id, t.id), nE = (0, R.A)({
        commandType: s.kc.USER,
        commandTargetId: t.id,
        channel: e,
        guildId: void 0,
        onHeightUpdate: q
    }), ny = (0, b.m)(e), nT = (0, b.y)(e), nD = (0, m.A)(e), nR = (0, I.A)(e), nC = (0, U.A)({
        channel: e
    }), nG = e.isManaged(), nO = t.isNonUserBot();
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: l.Z_,
        "aria-label": W.intl.string(W.t.liqwPJ),
        onSelect: K,
        onInteraction: H,
        children: [(0, i.jsx)(r.rXV, {
            children: !(nO && !(0, _.A)(e.id)) && np
        }), (0, i.jsxs)(r.rXV, {
            children: [ny, nD, nR]
        }), (0, i.jsx)(r.rXV, {
            children: !nO && nm
        }), (0, i.jsxs)(r.rXV, {
            children: [!nO && (0, i.jsxs)(i.Fragment, {
                children: [k && Z, $, !nG && na, k && z, k && Q, nn]
            }), (0, _.A)(e.id) && Z, nt]
        }), !nO && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.rXV, {
                children: o && nr
            }), (0, i.jsx)(r.rXV, {
                children: k && ni
            }), (0, i.jsxs)(r.rXV, {
                children: [nE, o && nI, o && no, k && nc, o && nA, k && ne, nd, ns, nu, k && nh, k && nf]
            }), (0, i.jsx)(r.rXV, {
                children: d && ng
            }), w && (0, i.jsxs)(r.rXV, {
                children: [nv, nb, nx]
            })]
        }), (0, _.A)(e.id) && (0, i.jsx)(r.rXV, {
            children: d && ng
        }), (0, i.jsx)(r.rXV, {
            children: nT
        }), (0, i.jsx)(r.rXV, {
            children: nC
        }), (0, i.jsxs)(r.rXV, {
            children: [n_, !B && nj]
        })]
    })
}, {
    object: w.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.DM_USER_MENU])