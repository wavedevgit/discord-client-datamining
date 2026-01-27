/** Chunk was on 93631 **/
/** chunk id: 770666, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => s
}), t(896048);
var a = t(311907),
    r = t(931991),
    i = t(808728),
    l = t(71393),
    o = t(576705),
    c = t(652215);

function s(e, n) {
    return (0, a.bG)([l.A, i.Ay, o.A], () => {
        let t = l.A.getGuild(e);
        if (o.A.can(c.xBc.ADMINISTRATOR, t) || o.A.can(c.xBc.CREATE_EVENTS, t)) return !0;
        for (let {
                channel: t
            }
            of i.Ay.getChannels(e)[i.vM])
            if (null == n || t.type === n) {
                let [e] = (0, r.p_)(t);
                if (o.A.can(e, t)) return !0
            } return !1
    }, [e, n])
}