/** chunk id: 228006, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => W
});
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(442433),
    s = t(847767),
    d = t(358367),
    o = t(155718),
    c = t(468389),
    u = t(793574),
    h = t(810845),
    A = t(854182),
    g = t(734337),
    m = t(855187),
    _ = t(479335),
    p = t(50268),
    f = t(222311),
    E = t(164891),
    x = t(734057),
    b = t(309010),
    T = t(803664),
    v = t(29293),
    j = t(509302),
    C = t(497600),
    I = t(773699),
    S = t(239211),
    y = t(707378),
    O = t(827936),
    R = t(984894),
    N = t(399476),
    D = t(889460),
    w = t(448290),
    U = t(301541),
    G = t(460597),
    P = t(635443),
    M = t(313998),
    V = t(198229),
    k = t(243949),
    L = t(972432),
    B = t(77544),
    X = t(652215),
    F = t(985018);
let W = (0, d.A)((0, s.A)(function(e) {
    let {
        user: n,
        channel: t,
        context: s,
        showChatItems: d = !0,
        showMediaItems: u = !1,
        showChannelCallItems: X = !1,
        showModalItems: W = !0,
        onSelect: H,
        onHeightUpdate: Y,
        onInteraction: K
    } = e, z = (0, k.A)({
        userId: n.id,
        guildId: null
    }), q = (0, w.A)(n, null, s), J = (0, l.bG)([b.A, x.A], () => {
        let e = b.A.getVoiceChannelId();
        return x.A.getChannel(e)
    }), {
        enabled: Q
    } = E.A.useExperiment({
        guildId: J?.guild_id,
        location: "GroupDMUserContextMenu"
    }), Z = Q ? J?.id : t.id, $ = (0, M.A)(n, Z), ee = (0, U.A)(n.id, s), en = (0, y.A)({
        user: n,
        context: s
    }), et = (0, C.A)({
        user: n,
        channelId: t.id,
        context: s
    }), ei = (0, v.A)({
        user: n
    }), el = (0, L.A)(n.id), er = (0, P.A)(n.id, t.id), ea = (0, V.A)(n.id), es = (0, _.u)({
        userId: n.id,
        channelId: t.id,
        guildId: t.getGuildId()
    }), ed = (0, R.A)(n.id, t.id), eo = (0, D.A)({
        user: n
    }), ec = (0, c.A)(null, n), eu = (0, T.A)({
        user: n
    }), eh = (0, j.A)({
        user: n
    }), eA = (0, G.A)({
        user: n
    }), eg = (0, S.A)({
        user: n,
        location: "GroupDMUserContextMenu"
    }), em = (0, N.A)({
        user: n,
        location: "GroupDMUserContextMenu"
    }), e_ = (0, p.A)({
        id: n.id,
        label: F.intl.string(F.t["/AXYnE"])
    }), ep = (0, B.A)(n.id), ef = (0, g.A)(n.id), eE = (0, A.A)(t.id), ex = (0, f.A)(n), eb = (0, m.A)(n.id), eT = (0, h.A)(t.id, n.id), ev = (0, I.A)({
        commandType: o.kc.USER,
        commandTargetId: n.id,
        channel: t,
        guildId: void 0,
        onHeightUpdate: Y
    }), ej = (0, O.A)(n, t), eC = n.isNonUserBot(), eI = t.isManaged(), eS = t.recipients?.includes(n.id);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": F.intl.string(F.t.liqwPJ),
        onSelect: H,
        onInteraction: K,
        children: [!eC && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.rXV, {
                children: ex
            }), (0, i.jsxs)(r.rXV, {
                children: [W && z, d && q, ee, en, !eI && $, W && et, W && ei, ep]
            }), u && (0, i.jsx)(r.rXV, {
                children: el
            }), eS && (0, i.jsxs)(r.rXV, {
                children: [!eI && er, ej]
            }), (0, i.jsx)(r.rXV, {
                children: W && ec
            }), X && (0, i.jsxs)(r.rXV, {
                children: [eT, eE, ef]
            }), (0, i.jsxs)(r.rXV, {
                children: [u && ea, u && es, u && ed, u && eb, ev, W && eo, eu, eh, eA, W && em, W && eg]
            })]
        }), (0, i.jsx)(r.rXV, {
            children: e_
        })]
    })
}, {
    object: X.ZSU.CONTEXT_MENU
}), [u.A.CONTEXT_MENU, u.A.GROUP_DM_USER_MENU])