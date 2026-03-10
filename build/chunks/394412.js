/** chunk id: 394412 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    a = n(397927),
    r = n(931991),
    o = n(734057),
    c = n(87401),
    d = n(707592),
    u = n(698441),
    h = n(935159),
    A = n(508654),
    m = n(974930),
    p = n(47868),
    g = n(985018),
    _ = n(242182);

function f(e) {
    let {
        channelId: t,
        showDismiss: f = !0
    } = e, x = (0, s.bG)([o.A], () => o.A.getChannel(t), [t]), C = (0, A.RO)(t), E = null != (0, A.Qs)(t), {
        canManageGuildEvent: I
    } = (0, r.nr)(x), N = (0, s.bG)([c.A], () => C.filter(e => !c.A.isEventDismissed(e.id)), [C]), b = (0, s.cf)([u.Ay], () => N.reduce((e, t) => (e[t.id] = u.Ay.getUserCount(t.id, (0, m.G3)(t)), e), {}), [N]);
    return N.length < 1 || E ? null : (0, i.jsx)(i.Fragment, {
        children: N.map(e => (0, i.jsx)(p.A, {
            icon: (0, i.jsx)(a.CTc, {
                size: "custom",
                color: "currentColor",
                height: 20,
                width: 20
            }),
            color: l.A.unsafe_rawColors.GREEN_360.css,
            title: g.intl.formatToPlainString(I(e) ? g.t["1vGXqM"] : g.t.xMJyla, {
                eventName: e.name
            }),
            description: g.intl.formatToPlainString(g.t.PTebCR, {
                startTime: (0, m.CC)(e.scheduled_start_time).startDateTimeString
            }),
            onClick: () => {
                I(e) ? (0, a.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("51354"), n.e("77223"), n.e("24531")]).then(n.bind(n, 199226));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        event: e
                    })
                }) : (0, d.uR)({
                    eventId: e.id
                })
            },
            onDismiss: f ? () => {
                var t;
                return t = e.id, void(0, h.Nt)(t)
            } : void 0,
            userCount: b[e.id],
            className: _.f
        }, e.id))
    })
}