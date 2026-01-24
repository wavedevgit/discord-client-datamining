/** Chunk was on 31748 **/
/** chunk id: 909417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    l = n(417597),
    i = n(533117),
    a = n(134753),
    o = n(666717),
    s = n(245704),
    c = n(254970),
    u = n(975501);

function d(e) {
    let {
        user: t,
        channelId: n,
        streamerId: d,
        stream: f,
        focused: p,
        canvas: g
    } = e, m = r.useRef(!1), _ = (0, l.bG)([i.A], () => i.A.getDrawMode()), h = (0, s.A)((0, c.A)(t.id, n, d), f), y = (0, s.A)((0, u.A)(t.id, n, d), f), A = r.useCallback((e, t, n) => {
        if (null == g) return;
        let {
            x: r,
            y: l
        } = (0, o.av)(g, n);
        switch (t.type) {
            case a.Z.LINE:
                return h[e](t, r, l);
            case a.Z.EMOJI_HOSE:
                return y[e](t, r, l)
        }
    }, [g, h, y]), b = r.useCallback(e => {
        p && null != _ && (e.stopPropagation(), m.current = !0, A("handleMouseDown", _, e))
    }, [A, _, p]), E = r.useCallback(e => {
        p && null != _ && (e.stopPropagation(), m.current && A("handleMouseMove", _, e))
    }, [A, _, p]), v = r.useCallback(e => {
        p && null != _ && (e.stopPropagation(), m.current = !1, A("handleMouseUp", _, e))
    }, [A, _, p]), O = r.useCallback(e => {
        m.current && null != _ && A("handleMouseEnter", _, e)
    }, [A, _]);
    return r.useEffect(() => {
        let e = e => {
            null != _ && (m.current = !1, A("handleMouseUp", _, e))
        };
        return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
    }, [A, _]), {
        handleClick: r.useCallback(e => {
            p && null != _ && e.stopPropagation()
        }, [_, p]),
        handleMouseDown: b,
        handleMouseEnter: O,
        handleMouseMove: E,
        handleMouseUp: v
    }
}