/** chunk id: 103629, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(845625),
    o = n(785823),
    d = n(137207),
    s = n(734057),
    u = n(320501),
    c = n(576705),
    A = n(652215),
    E = n(985018);

function g(e, t) {
    let n = (0, i.bG)([c.A], () => null != e && c.A.canWithPartialContext(A.xBc.MANAGE_MESSAGES, {
            channelId: e
        }), [e]),
        g = (0, i.bG)([s.A], () => s.A.getChannel(e), [e]),
        _ = (0, i.bG)([u.A], () => null != e && null != t ? u.A.getMessage(e, t) : null),
        M = (0, o.kZ)(null != _ ? _ : null);
    if (null == g || null == _) return null;
    let O = null != M && M.actions.hasOwnProperty(a.G.SET_COMPLETED) ? a.G.UNSET_COMPLETED : a.G.SET_COMPLETED,
        I = O === a.G.SET_COMPLETED ? E.intl.string(E.t.VWNyUu) : E.intl.string(E.t.l9GqxI);
    return n && null != t ? (0, l.jsx)(r.Drp, {
        id: "mark-automod-alert-completed",
        label: I,
        action: () => {
            (0, d.E5)(t, g, O)
        }
    }, "mark-automod-alert-completed") : null
}