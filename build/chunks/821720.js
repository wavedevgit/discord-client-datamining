/** chunk id: 821720, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073), n(896048);
var l = n(64700),
    r = n(311907),
    i = n(573695),
    a = n(911411),
    s = n(290863);
let o = [],
    c = [],
    u = [];

function d(e, t) {
    let [n, d] = function(e, t) {
        let [n, i] = l.useMemo(() => (function(e, t) {
            if (!t.isPrivate()) return [u, c];
            let n = e.filter(e => {
                    var t, n;
                    return (null == (t = e.application) ? void 0 : t.id) != null && (null == (n = e.activity) ? void 0 : n.party_id) != null
                }),
                l = n.map(e => e.id);
            return [n, l]
        })(e, t), [e, t]), a = (0, r.yK)([s.A], () => {
            let e = [];
            return n.forEach(t => {
                null != s.A.findActivity(t.author.id, e => {
                    var n, l, r;
                    return e.application_id === (null == (n = t.application) ? void 0 : n.id) && (null == (l = e.party) ? void 0 : l.id) === (null == (r = t.activity) ? void 0 : r.party_id)
                }, null, !0) && e.push(t.id)
            }), e
        }, [n]);
        return [i, l.useMemo(() => (function(e, t) {
            if (0 === e.length) return o;
            let n = [];
            return e.forEach(e => {
                var l, r;
                let i = null == (l = e.application) ? void 0 : l.id,
                    a = null == (r = e.activity) ? void 0 : r.party_id;
                if (e.id in t || null == i || null == a) return;
                let s = e.timestamp.getTime(),
                    o = {
                        userId: e.author.id,
                        applicationId: i,
                        partyId: a,
                        messageId: e.id,
                        channelId: e.channel_id,
                        inviteTime: s
                    };
                n.push(o)
            }), n
        })(n, a), [n, a])]
    }(e, t);
    return l.useEffect(() => {
        for (let e of d) a.A.isSubscribed(e) || (0, i.B)(e)
    }, [d]), [n, d]
}