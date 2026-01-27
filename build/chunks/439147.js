/** Chunk was on 98797 **/
/** chunk id: 439147, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => T
}), n(638769), n(264879);
var r = n(562465),
    i = n(626584),
    l = n(152007),
    a = n(867455),
    o = n(734057),
    u = n(320501),
    s = n(222823),
    d = n(287809),
    c = n(661191),
    m = n(652215);
let A = new i.A("markUnread");
async function T(t, e) {
    let n = d.default.getCurrentUser();
    if (null == n) return;
    let i = u.A.getMessages(t),
        T = i.toArray().filter(t => 0 > c.default.compare(t.id, e)).sort((t, e) => c.default.compare(t.id, e.id)).reverse()[0],
        E = null == T ? c.default.atPreviousMillisecond(e) : T.id,
        _ = 0;
    i.forAll(t => {
        c.default.compare(t.id, E) > 0 && (0, s.Wm)(t, n) && _++
    });
    let g = o.A.getChannel(t);
    null != g && g.isThread() && (g.isArchivedThread() && await a.A.unarchiveThread(g, !1), l.A.hasJoined(t) || await a.A.joinThread(g, "Mark Unread")), A.log("Marking unread", {
        channelId: t,
        messageId: e
    }), r.Bo.post({
        url: m.Rsh.MESSAGE_ACK(t, E),
        body: {
            manual: !0,
            mention_count: _
        },
        oldFormErrors: !0,
        rejectWithError: !0
    })
}