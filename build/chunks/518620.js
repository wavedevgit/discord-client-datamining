/** chunk id: 518620 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    r = n(64700),
    l = n(884362),
    a = n(837381),
    s = n(311907),
    o = n(397927),
    d = n(775602);
n(646363);
var c = n(652215),
    u = n(788868),
    A = n(63461);
let h = function(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: h,
        footer: _,
        sectionFilter: m,
        renderSectionFooter: g
    } = e, p = e => {
        let {
            section: i,
            row: r
        } = e, l = t[i];
        if (null == l || null == r) return null;
        let a = l[r];
        return null == a ? null : n(a, i)
    }, E = r.useCallback((e, n) => {
        let i = t[e]?.[n];
        return m === c.m3P.ALL && i?.giftIntentType === u.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61
    }, [t, m]), I = r.useCallback(e => {
        let {
            section: t
        } = e;
        return h(t)
    }, [h]), f = r.useCallback(e => null == g ? null : g(e.section), [g]), C = r.useCallback(e => null == g ? 0 : 48 * (null != g(e)), [g]), T = (0, s.bG)([d.A], () => d.A.keyboardModeEnabled), N = r.useRef(null), S = r.useCallback(() => new Promise(e => {
        let t = N.current;
        if (null == t) return e();
        t.scrollToTop({
            callback: () => requestAnimationFrame(() => e())
        })
    }), []), x = r.useCallback(() => new Promise(e => {
        let t = N.current;
        if (null == t) return e();
        t.scrollToBottom({
            callback: () => requestAnimationFrame(() => e())
        })
    }), []), v = r.useCallback(e => {
        let t = document.querySelector(e),
            n = N.current;
        null != t && null != n && n.scrollIntoViewNode({
            node: t,
            padding: 8,
            callback: () => t?.focus()
        })
    }, []), b = (0, l.Ay)({
        id: "people-list",
        isEnabled: T,
        scrollToStart: S,
        scrollToEnd: x,
        setFocus: v
    }), y = r.useMemo(() => t.map(e => e.length), [t]);
    return (0, i.jsx)(a.hD, {
        navigator: b,
        children: (0, i.jsx)(a.PR, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.Eie, {
                        ref: e => {
                            N.current = e, t.current = e?.getScrollerNode() ?? null
                        },
                        renderRow: p,
                        rowHeight: E,
                        renderSection: I,
                        sectionHeight: 50,
                        renderFooter: f,
                        footerHeight: C,
                        sections: y,
                        className: A.e3,
                        ...n
                    }), _]
                })
            }
        })
    })
}