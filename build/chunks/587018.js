/** chunk id: 587018, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    o = n(931991),
    u = n(698441),
    a = n(684084),
    c = n(722260),
    s = n(985018);

function d(e) {
    let {
        guildEventId: t,
        recurrenceId: n,
        guild: d,
        channel: g
    } = e, E = null != n, {
        canManageGuildEvent: f
    } = (0, o.nr)(null != g ? g : d), [A, y] = (0, r.yK)([u.Ay], () => [u.Ay.isActive(t), u.Ay.getGuildScheduledEvent(t)]), p = (0, c.A)(n, null == y ? void 0 : y.id), b = null != y && f(y);
    return E && (null == p ? void 0 : p.is_canceled) && b && (!A || E) ? (0, l.jsx)(i.Drp, {
        id: s.intl.string(s.t.b8606G),
        label: s.intl.string(s.t.b8606G),
        action: () => {
            null != n && null != p && (0, a.A)(p, d.id, t, n)
        }
    }) : null
}