/** chunk id: 961314, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(58736),
    s = n(722260),
    a = n(563312),
    o = n(974930),
    c = n(103355),
    u = n(985018),
    d = n(234944);

function h(e) {
    let {
        guildEvent: t,
        recurrenceId: n
    } = e, h = (0, a.Ay)(t, n), p = (0, s.A)(n, t.id);
    if (null == t) return null;
    let g = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, o.j)(p, h.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Ay.Divider, {
            className: d.yF
        }), (0, r.jsx)(c.L, {
            startTime: h.startTime.toISOString(),
            status: null != g ? g : t.status,
            liveText: u.intl.string(u.t.kM6e4G),
            className: d.aF,
            textVariant: "text-lg/semibold",
            eventType: t.entity_type,
            guildEventId: null == t ? void 0 : t.id,
            recurrenceId: n
        }), (0, r.jsx)(l.Text, {
            color: "text-default",
            variant: "text-md/normal",
            className: d.eq,
            children: t.name
        })]
    })
}