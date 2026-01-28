/** Chunk was on 78528 **/
/** chunk id: 646468, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => A,
    xc: () => _
}), n(896048), n(638769);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(435371),
    a = n(397927),
    o = n(252431),
    c = n(322387),
    u = n(995273),
    d = n(325326),
    p = n(208667),
    h = n(253932),
    f = n(954571),
    g = n(661191),
    m = n(652215),
    b = n(985018);

function A() {
    let {
        initialized: e,
        items: t,
        loading: n,
        loadMore: l
    } = (0, d.LF)(), s = y(t, (0, i.bG)([o.A], () => o.A.localItems));
    return (0, r.jsx)(p.A, {
        initialized: e,
        items: s,
        loading: n,
        loadMore: l
    })
}

function y(e, t) {
    return l.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * g.default.compare(e.id, t.id))], [e, t])
}

function _() {
    let {
        items: e
    } = (0, d.LF)(), t = e.length > 0 ? e[0] : null, n = y(e, (0, i.bG)([o.A], () => o.A.localItems)), p = h.ns.useSetting();
    return l.useMemo(() => {
        if (null != t && 0 >= g.default.compare(t.id, p)) return !1;
        for (let e of n) {
            if (0 >= g.default.compare(e.id, p)) break;
            if (!(0, u.NW)(e, p)) return !0
        }
        return !1
    }, [t, p, n]) ? (0, r.jsx)(s.m_, {
        text: b.intl.string(b.t["8k+6QY"]),
        children: (0, r.jsx)(a.K0, {
            "aria-label": b.intl.string(b.t["8k+6QY"]),
            icon: a.iA$,
            variant: "secondary",
            size: "sm",
            onClick: () => {
                null != t && (h.ns.updateSetting(t.id), f.default.track(m.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: c.e1.MARK_ALL_READ
                }))
            }
        })
    }) : null
}