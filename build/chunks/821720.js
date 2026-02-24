/** chunk id: 821720, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(321073);
var i = n(64700),
    l = n(311907),
    s = n(573695),
    a = n(911411),
    r = n(290863);
let o = [],
    c = [],
    d = [];

function u(e, t) {
    let [n, u] = function(e, t) {
        let [n, s] = i.useMemo(() => (function(e, t) {
            if (!t.isPrivate()) return [d, c];
            let n = e.filter(e => e.application?.id != null && e.activity?.party_id != null),
                i = n.map(e => e.id);
            return [n, i]
        })(e, t), [e, t]), a = (0, l.yK)([r.A], () => {
            let e = [];
            return n.forEach(t => {
                null != r.A.findActivity(t.author.id, e => e.application_id === t.application?.id && e.party?.id === t.activity?.party_id, null, !0) && e.push(t.id)
            }), e
        }, [n]);
        return [s, i.useMemo(() => (function(e, t) {
            if (0 === e.length) return o;
            let n = [];
            return e.forEach(e => {
                let i = e.application?.id,
                    l = e.activity?.party_id;
                if (e.id in t || null == i || null == l) return;
                let s = e.timestamp.getTime(),
                    a = {
                        userId: e.author.id,
                        applicationId: i,
                        partyId: l,
                        messageId: e.id,
                        channelId: e.channel_id,
                        inviteTime: s
                    };
                n.push(a)
            }), n
        })(n, a), [n, a])]
    }(e, t);
    return i.useEffect(() => {
        for (let e of u) a.A.isSubscribed(e) || (0, s.B)(e)
    }, [u]), [n, u]
}