/** chunk id: 587018, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => d
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(684084),
    c = n(722260),
    s = n(985018);

function d(t) {
    let {
        guildEventId: e,
        recurrenceId: n,
        guild: d,
        channel: g
    } = t, E = null != n, {
        canManageGuildEvent: f
    } = (0, u.nr)(null != g ? g : d), [A, y] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(e), o.Ay.getGuildScheduledEvent(e)]), p = (0, c.A)(n, null == y ? void 0 : y.id), b = null != y && f(y);
    return E && (null == p ? void 0 : p.is_canceled) && b && (!A || E) ? (0, l.jsx)(i.Drp, {
        id: s.intl.string(s.t.b8606G),
        label: s.intl.string(s.t.b8606G),
        action: () => {
            null != n && null != p && (0, a.A)(p, d.id, e, n)
        }
    }) : null
}