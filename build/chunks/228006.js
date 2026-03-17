/** chunk id: 228006 params = (module,exports,require) **/
i.d(n, {
    default: () => L
});
var t = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    s = i(442433),
    d = i(847767),
    a = i(358367),
    o = i(155718),
    c = i(468389),
    u = i(793574),
    h = i(810845),
    A = i(854182),
    x = i(734337),
    m = i(465424),
    j = i(855187),
    g = i(479335),
    v = i(50268),
    p = i(222311),
    C = i(164891),
    f = i(734057),
    I = i(309010),
    b = i(803664),
    U = i(29293),
    N = i(509302),
    T = i(497600),
    _ = i(773699),
    M = i(239211),
    E = i(707378),
    G = i(827936),
    w = i(984894),
    O = i(399476),
    k = i(889460),
    D = i(448290),
    V = i(301541),
    X = i(460597),
    S = i(635443),
    P = i(313998),
    R = i(198229),
    y = i(243949),
    z = i(972432),
    J = i(77544),
    Z = i(652215),
    B = i(985018);
let L = (0, a.A)((0, d.A)(function(e) {
    let {
        user: n,
        channel: i,
        context: d,
        showChatItems: a = !0,
        showMediaItems: u = !1,
        showChannelCallItems: Z = !1,
        showModalItems: L = !0,
        onSelect: W,
        onHeightUpdate: F,
        onInteraction: Y
    } = e, q = (0, y.A)({
        userId: n.id,
        guildId: null
    }), H = (0, D.A)(n, null, d), K = (0, r.bG)([I.A, f.A], () => {
        let e = I.A.getVoiceChannelId();
        return f.A.getChannel(e)
    }), {
        enabled: Q
    } = C.A.useExperiment({
        guildId: K?.guild_id,
        location: "GroupDMUserContextMenu"
    }), $ = Q ? K?.id : i.id, ee = (0, P.A)(n, $), en = (0, V.A)(n.id, d), ei = (0, E.A)({
        user: n,
        context: d
    }), et = (0, m.D)({
        userId: n.id
    }), er = (0, T.A)({
        user: n,
        channelId: i.id,
        context: d
    }), el = (0, U.A)({
        user: n
    }), es = (0, z.A)(n.id), ed = (0, S.A)(n.id, i.id), ea = (0, R.A)(n.id), eo = (0, g.u)({
        userId: n.id,
        channelId: i.id,
        guildId: i.getGuildId()
    }), ec = (0, w.A)(n.id, i.id), eu = (0, k.A)({
        user: n
    }), eh = (0, c.A)(null, n), eA = (0, b.A)({
        user: n
    }), ex = (0, N.A)({
        user: n
    }), em = (0, X.A)({
        user: n
    }), ej = (0, M.A)({
        user: n,
        location: "GroupDMUserContextMenu"
    }), eg = (0, O.A)({
        user: n,
        location: "GroupDMUserContextMenu"
    }), ev = (0, v.A)({
        id: n.id,
        label: B.intl.string(B.t["/AXYnE"])
    }), ep = (0, J.A)(n.id), eC = (0, x.A)(n.id), ef = (0, A.A)(i.id), eI = (0, p.A)(n), eb = (0, j.A)(n.id), eU = (0, h.A)(i.id, n.id), eN = (0, _.A)({
        commandType: o.kc.USER,
        commandTargetId: n.id,
        channel: i,
        guildId: void 0,
        onHeightUpdate: F
    }), eT = (0, G.A)(n, i), e_ = n.isNonUserBot(), eM = i.isManaged(), eE = i.recipients?.includes(n.id);
    return (0, t.jsxs)(l.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: s.Z_,
        "aria-label": B.intl.string(B.t.liqwPJ),
        onSelect: W,
        onInteraction: Y,
        children: [!e_ && (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(l.rXV, {
                children: eI
            }), (0, t.jsxs)(l.rXV, {
                children: [L && q, a && H, en, et, ei, !eM && ee, L && er, L && el, ep]
            }), u && (0, t.jsx)(l.rXV, {
                children: es
            }), eE && (0, t.jsxs)(l.rXV, {
                children: [!eM && ed, eT]
            }), (0, t.jsx)(l.rXV, {
                children: L && eh
            }), Z && (0, t.jsxs)(l.rXV, {
                children: [eU, ef, eC]
            }), (0, t.jsxs)(l.rXV, {
                children: [u && ea, u && eo, u && ec, u && eb, eN, L && eu, eA, ex, em, L && eg, L && ej]
            })]
        }), (0, t.jsx)(l.rXV, {
            children: ev
        })]
    })
}, {
    object: Z.ZSU.CONTEXT_MENU
}), [u.A.CONTEXT_MENU, u.A.GROUP_DM_USER_MENU])