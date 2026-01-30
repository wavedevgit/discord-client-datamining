/** chunk id: 103629, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(845625),
    o = n(785823),
    u = n(137207),
    c = n(734057),
    s = n(320501),
    d = n(576705),
    A = n(652215),
    O = n(985018);

function b(e, t) {
    let n = (0, l.bG)([d.A], () => null != e && d.A.canWithPartialContext(A.xBc.MANAGE_MESSAGES, {
            channelId: e
        }), [e]),
        b = (0, l.bG)([c.A], () => c.A.getChannel(e), [e]),
        E = (0, l.bG)([s.A], () => null != e && null != t ? s.A.getMessage(e, t) : null),
        g = (0, o.kZ)(null != E ? E : null);
    if (null == b || null == E) return null;
    let y = null != g && g.actions.hasOwnProperty(a.G.SET_COMPLETED) ? a.G.UNSET_COMPLETED : a.G.SET_COMPLETED,
        f = y === a.G.SET_COMPLETED ? O.intl.string(O.t.VWNyUu) : O.intl.string(O.t.l9GqxI);
    return n && null != t ? (0, r.jsx)(i.Drp, {
        id: "mark-automod-alert-completed",
        label: f,
        action: () => {
            (0, u.E5)(t, b, y)
        }
    }, "mark-automod-alert-completed") : null
}