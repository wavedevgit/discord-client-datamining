/** chunk id: 770666 params = (module,exports,require) **/
t.d(n, {
    A: () => o
});
var l = t(311907),
    r = t(931991),
    s = t(808728),
    _ = t(71393),
    i = t(576705),
    c = t(652215);

function o(e, n) {
    return (0, l.bG)([_.A, s.Ay, i.A], () => {
        let t = _.A.getGuild(e);
        if (i.A.can(c.xBc.ADMINISTRATOR, t) || i.A.can(c.xBc.CREATE_EVENTS, t)) return !0;
        for (let {
                channel: t
            }
            of s.Ay.getChannels(e)[s.vM])
            if (null == n || t.type === n) {
                let [e] = (0, r.p_)(t);
                if (i.A.can(e, t)) return !0
            } return !1
    }, [e, n])
}