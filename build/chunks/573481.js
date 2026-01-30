/** chunk id: 573481, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => c
}), t(896048);
var n = t(812729),
    s = t.n(n),
    a = t(311907),
    i = t(505527),
    r = t(956703),
    o = t(652215);

function c(e) {
    var l, t;
    let {
        channelId: n,
        messageId: c,
        reaction: d
    } = e, u = (0, a.bG)([r.A], () => {
        var e;
        let l = r.A.getReactions(n, c, d.emoji, o.WxW, i.v.VOTE);
        return Array.from(null != (e = null == l ? void 0 : l.values()) ? e : [])
    }, [n, c, d.emoji], s());
    return {
        reactors: u,
        hasMore: (null != (l = null == (t = d.count_details) ? void 0 : t.vote) ? l : 0) > u.length
    }
}