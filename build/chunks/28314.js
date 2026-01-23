/** Chunk was on 7869 **/
/** chunk id: 28314, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(722260),
    c = n(563312),
    s = n(823508),
    d = n(985018);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function f(e) {
    let {
        guildEventId: t,
        guild: f,
        channel: b,
        recurrenceId: p,
        isRecurrenceItem: A
    } = e, {
        canManageGuildEvent: v
    } = (0, u.nr)(null != b ? b : f), E = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t)), O = v(E), m = (0, s.A)(), j = (0, a.A)(p, null == E ? void 0 : E.id), h = (0, c.nh)(t, p);
    if (!O || null == h || null == E) return null;
    let D = null != E.recurrence_rule && !A,
        _ = e => {
            (null == p || e) && !A ? (0, i.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("68587"), n.e("28136"), n.e("342"), n.e("29878")]).then(n.bind(n, 21653));
                return n => (0, l.jsx)(e, y(g({}, n), {
                    guildScheduledEventId: t,
                    guildId: f.id
                }))
            }, m) : null != p && (0, i.mMO)(async () => {
                let {
                    default: e
                } = await n.e("43940").then(n.bind(n, 271983));
                return t => (0, l.jsx)(e, y(g({}, t), {
                    guildEvent: E,
                    recurrenceId: p
                }))
            }, m)
        };
    return (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.Rgy2dU),
        label: d.intl.string(d.t.Rgy2dU),
        action: D ? void 0 : () => _(!0),
        children: D && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(i.Drp, {
                id: d.intl.string(d.t.wmVmXN),
                label: d.intl.string(d.t.wmVmXN),
                action: () => _(!1),
                disabled: (null == j ? void 0 : j.is_canceled) || h.startTime.getTime() < Date.now()
            }), (0, l.jsx)(i.Drp, {
                id: d.intl.string(d.t.BW1Qoh),
                label: d.intl.string(d.t.BW1Qoh),
                action: () => _(!0),
                disabled: new Date(E.scheduled_start_time).getTime() < Date.now()
            })]
        })
    })
}