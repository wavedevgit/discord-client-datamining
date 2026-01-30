/** chunk id: 329255, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var l = n(64700),
    r = n(311907),
    i = n(73153),
    a = n(914430),
    s = n(924985),
    o = n(543465),
    c = n(816662),
    d = n(234053),
    u = n(652215);

function h(e) {
    i.h.dispatch({
        type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
        guildId: e
    })
}

function p(e) {
    let t = (0, r.bG)([o.Ay], () => o.Ay.getPendingChannelUpdates(e));
    return l.useEffect(() => (h(e), () => h(e)), [e]), l.useEffect(() => {
        null != t && (0, c.hp)(e, t)
    }, [e, t]), {
        onChannelClick: l.useCallback((e, t, n) => {
            let l = o.Ay.isChannelOptedIn(e, t),
                r = t === n;
            !l && s.A.isCollapsed(n) && null != n && (0, a.fh)(n), (0, d.cE)(e) ? r ? (0, d.le)(e, {
                include: new Set([t])
            }) : (0, d.le)(e, {
                exclude: new Set([t])
            }) : (0, c.zk)(e, t, !l, {
                section: u.JJy.CHANNEL_BROWSER
            })
        }, [])
    }
}