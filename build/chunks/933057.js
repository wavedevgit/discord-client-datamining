/** chunk id: 933057 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(58736),
    o = n(857071),
    c = n(203982),
    d = n(607508),
    u = n(914703),
    h = n(37411),
    A = n(652215),
    m = n(985018);

function p(e) {
    let {
        channel: t
    } = e, n = (0, d.X)(t), [p, _] = s.useState(!1), g = s.useRef(null), f = (0, l.bG)([o.A], () => null != t.guild_id && o.A.isLurking(t.guild_id));
    if (s.useEffect(() => {
            let e = () => _(!0);
            return c._.subscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
                c._.unsubscribe(A.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
            }
        }, []), f) return null;
    let x = m.intl.string(m.t.h850Ss);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: g,
        shouldShow: p,
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => _(!1),
        renderPopout: e => (0, i.jsx)(u.A, {
            ...e,
            channel: t,
            navId: "thread-context",
            label: m.intl.string(m.t["1NBjqb"])
        }),
        children: (e, t) => {
            let {
                isShown: s
            } = t;
            return (0, i.jsx)(r.Ay.Icon, {
                ...e,
                ref: g,
                onClick: () => _(e => !e),
                tooltip: s ? null : x,
                icon: n === h.CP.NO_MESSAGES ? a.a_I : a.XFE,
                "aria-label": x,
                selected: s
            })
        }
    })
}