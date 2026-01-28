/** Chunk was on 5606 **/
/** chunk id: 823092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L_: () => u,
    gl: () => c,
    ms: () => d
}), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    l = n(83257),
    s = n(203982),
    a = n(115063),
    o = n(652215);
let c = i.createContext(void 0);

function d(e) {
    let {
        children: t
    } = e, n = i.useRef(l.n3), [d, u] = i.useState(!1), p = i.useCallback(e => {
        var t;
        u(null != (t = null == e ? void 0 : e.some(e => {
            var t;
            return e.showNotice() && !(null == (t = e.canCloseEarly) ? void 0 : t.call(e))
        })) && t), n.current = l.n3
    }, []), _ = i.useCallback(e => {
        if (d) {
            (0, a.fO)({
                duration: 300,
                intensity: n.current
            }), n.current = Math.min(n.current + l.pe, l.OZ), s._.dispatch(o.jej.EMPHASIZE_NOTICE);
            return
        }
        e()
    }, [d]), m = i.useMemo(() => ({
        navigateWithValidation: _,
        showNotice: d,
        handleStoreUpdate: p
    }), [_, d, p]);
    return (0, r.jsx)(c.Provider, {
        value: m,
        children: t
    })
}

function u() {
    let e = i.useContext(c);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e
}