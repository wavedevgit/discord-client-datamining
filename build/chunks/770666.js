/** chunk id: 770666, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(311907),
    i = n(931991),
    r = n(808728),
    _ = n(71393),
    a = n(576705),
    c = n(652215);

function s(e, t) {
    return (0, l.bG)([_.A, r.Ay, a.A], () => {
        let n = _.A.getGuild(e);
        if (a.A.can(c.xBc.ADMINISTRATOR, n) || a.A.can(c.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of r.Ay.getChannels(e)[r.vM])
            if (null == t || n.type === t) {
                let [e] = (0, i.p_)(n);
                if (a.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}