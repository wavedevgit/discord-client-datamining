/** chunk id: 197043 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(843472),
    s = n(698718),
    o = n(355622),
    d = n(734057),
    c = n(71393),
    u = n(320501),
    _ = n(576705),
    h = n(203982),
    m = n(545807),
    f = n(652215),
    g = n(276e3);

function p(e) {
    let t, n, p, A, E, I, {
            selectedChannelId: x
        } = e,
        b = (0, r.bG)([d.A], () => d.A.getChannel(x), [x]),
        v = (0, m.A)(),
        S = (0, r.bG)([c.A], () => (function(e, t) {
            if (null == e) return null;
            let n = e.getGuildId();
            return null == n ? null : t.getGuild(n) ?? null
        })(b, c.A), [b]);
    return (t = b?.id ?? null, n = a.useRef(new Set), p = (0, r.bG)([u.A], () => null != t ? u.A.getMessages(t) : null, [t]), A = (0, r.bG)([_.A], () => _.A.can(f.xBc.READ_MESSAGE_HISTORY, b), [b]), E = p?.first() ?? null, I = null != b && null == E && null != p && !p.loadingMore && !p.ready && !p.hasFetched && A, a.useEffect(() => {
        null == t || !n.current.has(t) && I && (n.current.add(t), l.A.fetchMessages({
            channelId: t,
            limit: 50
        }))
    }, [t, I]), a.useEffect(() => {
        if (null == x) return;
        let e = v.requestAnimationFrame(() => {
            h._.dispatchToLastSubscribed(f.jej.TEXTAREA_FOCUS, {
                channelId: x
            })
        });
        return () => v.cancelAnimationFrame(e)
    }, [x, v]), null != b) ? (0, i.jsx)("div", {
        className: g.Q,
        children: (0, i.jsx)("div", {
            className: g.T,
            children: (0, i.jsx)(s.A, {
                channel: b,
                guild: S,
                chatInputType: o.oU.OVERLAY
            }, b.id)
        })
    }) : null
}