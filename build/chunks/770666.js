/** chunk id: 770666 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(311907),
    a = n(931991),
    r = n(808728),
    l = n(71393),
    s = n(576705),
    o = n(652215);

function _(e, t) {
    return (0, i.bG)([l.A, r.Ay, s.A], () => {
        let n = l.A.getGuild(e);
        if (s.A.can(o.xBc.ADMINISTRATOR, n) || s.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let {
                channel: n
            }
            of r.Ay.getChannels(e)[r.vM])
            if (null == t || n.type === t) {
                let [e] = (0, a.p_)(n);
                if (s.A.can(e, n)) return !0
            } return !1
    }, [e, t])
}