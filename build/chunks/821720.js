/** chunk id: 821720, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(321073), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(573695),
    s = n(911411),
    a = n(290863);
let o = [],
    c = [],
    u = [];

function d(e, t) {
    let [n, d] = function(e, t) {
        let [n, i] = r.useMemo(() => (function(e, t) {
            if (!t.isPrivate()) return [u, c];
            let n = e.filter(e => {
                    var t, n;
                    return (null == (t = e.application) ? void 0 : t.id) != null && (null == (n = e.activity) ? void 0 : n.party_id) != null
                }),
                r = n.map(e => e.id);
            return [n, r]
        })(e, t), [e, t]), s = (0, l.yK)([a.A], () => {
            let e = [];
            return n.forEach(t => {
                null != a.A.findActivity(t.author.id, e => {
                    var n, r, l;
                    return e.application_id === (null == (n = t.application) ? void 0 : n.id) && (null == (r = e.party) ? void 0 : r.id) === (null == (l = t.activity) ? void 0 : l.party_id)
                }, null, !0) && e.push(t.id)
            }), e
        }, [n]);
        return [i, r.useMemo(() => (function(e, t) {
            if (0 === e.length) return o;
            let n = [];
            return e.forEach(e => {
                var r, l;
                let i = null == (r = e.application) ? void 0 : r.id,
                    s = null == (l = e.activity) ? void 0 : l.party_id;
                if (e.id in t || null == i || null == s) return;
                let a = e.timestamp.getTime(),
                    o = {
                        userId: e.author.id,
                        applicationId: i,
                        partyId: s,
                        messageId: e.id,
                        channelId: e.channel_id,
                        inviteTime: a
                    };
                n.push(o)
            }), n
        })(n, s), [n, s])]
    }(e, t);
    return r.useEffect(() => {
        for (let e of d) s.A.isSubscribed(e) || (0, i.B)(e)
    }, [d]), [n, d]
}