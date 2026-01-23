/** Chunk was on 7869 **/
/** chunk id: 544255, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(496092),
    c = n(722260),
    s = n(563312),
    d = n(985018);

function g(e) {
    let {
        guildEventId: t,
        recurrenceId: n,
        guild: g,
        channel: y
    } = e, f = null != n, {
        canManageGuildEvent: b
    } = (0, u.nr)(null != y ? y : g), [p, A] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(t), o.Ay.getGuildScheduledEvent(t)]), v = (0, c.A)(n, null == A ? void 0 : A.id), E = null != A && b(A), O = (null == A ? void 0 : A.recurrence_rule) != null && !f, m = (0, s.nh)(t, n);
    if (!E || p && !O && !f || f && !f || null == A || null == m) return null;
    let {
        startTime: j
    } = m;
    if (p && f) {
        var h;
        if (null == j) return null;
        let e = new Date(null != (h = null == v ? void 0 : v.scheduled_start_time) ? h : j);
        if (new Date > e) return null
    }
    let D = e => {
        (0, i.qfG)(r => {
            var u, o;
            return (0, l.jsxs)(i.VoidConfirmModal, (u = function(e) {
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
            }({}, r), o = o = {
                header: d.intl.string(d.t.R5bpin),
                confirmText: O || e ? d.intl.string(d.t["8ZsNv5"]) : d.intl.string(d.t.B9sJLX),
                cancelText: d.intl.string(d.t.oEAioF),
                onConfirm: () => f && !e ? a.A.deleteRecurrence(g.id, t, n, v) : a.A.deleteGuildEvent(t, g.id),
                children: [(0, l.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: d.intl.string(d.t.v2GWNQ)
                }), (0, l.jsx)("br", {}), (O || e) && (0, l.jsx)(i.Text, {
                    variant: "text-md/normal",
                    children: d.intl.format(d.t.ZcpcyO, {})
                })]
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(o, e))
            }), u))
        })
    };
    return (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.B9sJLX),
        label: d.intl.string(d.t.B9sJLX),
        action: f ? void 0 : () => D(),
        color: "danger",
        children: f && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(i.Drp, {
                id: d.intl.string(d.t.tqClly),
                label: d.intl.string(d.t.tqClly),
                action: () => D(),
                disabled: null == v ? void 0 : v.is_canceled,
                color: "danger"
            }), (0, l.jsx)(i.Drp, {
                id: d.intl.string(d.t.wr33rW),
                label: d.intl.string(d.t.wr33rW),
                action: () => D(!0),
                color: "danger"
            })]
        })
    })
}