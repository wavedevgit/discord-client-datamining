/** chunk id: 909417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(64700),
    r = n(417597),
    i = n(533117),
    a = n(134753),
    s = n(666717),
    o = n(245704),
    c = n(254970),
    u = n(975501);

function d(e) {
    let {
        user: t,
        channelId: n,
        streamerId: d,
        stream: h,
        focused: p,
        canvas: f
    } = e, m = l.useRef(!1), g = (0, r.bG)([i.A], () => i.A.getDrawMode()), A = (0, o.A)((0, c.A)(t.id, n, d), h), b = (0, o.A)((0, u.A)(t.id, n, d), h), _ = l.useCallback((e, t, n) => {
        if (null == f) return;
        let {
            x: l,
            y: r
        } = (0, s.av)(f, n);
        switch (t.type) {
            case a.Z.LINE:
                return A[e](t, l, r);
            case a.Z.EMOJI_HOSE:
                return b[e](t, l, r)
        }
    }, [f, A, b]), y = l.useCallback(e => {
        p && null != g && (e.stopPropagation(), m.current = !0, _("handleMouseDown", g, e))
    }, [_, g, p]), v = l.useCallback(e => {
        p && null != g && (e.stopPropagation(), m.current && _("handleMouseMove", g, e))
    }, [_, g, p]), E = l.useCallback(e => {
        p && null != g && (e.stopPropagation(), m.current = !1, _("handleMouseUp", g, e))
    }, [_, g, p]), O = l.useCallback(e => {
        m.current && null != g && _("handleMouseEnter", g, e)
    }, [_, g]);
    return l.useEffect(() => {
        let e = e => {
            null != g && (m.current = !1, _("handleMouseUp", g, e))
        };
        return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, [_, g]), {
        handleClick: l.useCallback(e => {
            p && null != g && e.stopPropagation()
        }, [g, p]),
        handleMouseDown: y,
        handleMouseEnter: O,
        handleMouseMove: v,
        handleMouseUp: E
    }
}