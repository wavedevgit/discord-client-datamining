/** Chunk was on 97492 **/
/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(311907),
    l = n(931991),
    i = n(808728),
    s = n(71393),
    a = n(576705),
    o = n(652215);

function c(e, t) {
    return (0, r.bG)([s.A, i.Ay, a.A], () => {
        let n = s.A.getGuild(e);
        if (a.A.can(o.xBc.ADMINISTRATOR, n) || a.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of i.Ay.getChannels(e)[i.vM])
            if (null == t || n.type === t) {
                let [e] = (0, l.p_)(n);
                if (a.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}