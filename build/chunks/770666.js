/** chunk id: 770666 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(311907),
    r = n(931991),
    a = n(808728),
    o = n(71393),
    l = n(576705),
    s = n(652215);

function c(e, t) {
    return (0, i.bG)([o.A, a.Ay, l.A], () => {
        let n = o.A.getGuild(e);
        if (l.A.can(s.xBc.ADMINISTRATOR, n) || l.A.can(s.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of a.Ay.getChannels(e)[a.vM])
            if (null == t || n.type === t) {
                let [e] = (0, r.p_)(n);
                if (l.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}