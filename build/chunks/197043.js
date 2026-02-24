/** chunk id: 197043, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(843472),
    a = n(698718),
    o = n(355622),
    u = n(734057),
    d = n(71393),
    c = n(320501),
    h = n(576705),
    m = n(203982),
    g = n(545807),
    p = n(652215),
    A = n(128727);

function f(e) {
    let t, n, f, x, E, S, {
            selectedChannelId: v
        } = e,
        C = (0, r.bG)([u.A], () => u.A.getChannel(v), [v]),
        I = (0, g.A)(),
        T = (0, r.bG)([d.A], () => (function(e, t) {
            if (null == e) return null;
            let n = e.getGuildId();
            return null == n ? null : t.getGuild(n) ?? null
        })(C, d.A), [C]);
    return (t = C?.id ?? null, n = l.useRef(new Set), f = (0, r.bG)([c.A], () => null != t ? c.A.getMessages(t) : null, [t]), x = (0, r.bG)([h.A], () => h.A.can(p.xBc.READ_MESSAGE_HISTORY, C), [C]), E = f?.first() ?? null, S = null != C && null == E && null != f && !f.loadingMore && !f.ready && !f.hasFetched && x, l.useEffect(() => {
        null == t || !n.current.has(t) && S && (n.current.add(t), s.A.fetchMessages({
            channelId: t,
            limit: 50
        }))
    }, [t, S]), l.useEffect(() => {
        if (null == v) return;
        let e = I.requestAnimationFrame(() => {
            m._.dispatchToLastSubscribed(p.jej.TEXTAREA_FOCUS, {
                channelId: v
            })
        });
        return () => I.cancelAnimationFrame(e)
    }, [v, I]), null != C) ? (0, i.jsx)("div", {
        className: A.Q,
        children: (0, i.jsx)("div", {
            className: A.T,
            children: (0, i.jsx)(a.A, {
                channel: C,
                guild: T,
                chatInputType: o.oU.OVERLAY
            }, C.id)
        })
    }) : null
}