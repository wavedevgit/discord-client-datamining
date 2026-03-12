/** chunk id: 823092 params = (module,exports,require) **/
n.d(t, {
    L_: () => u,
    gl: () => d,
    ms: () => c
});
var i = n(627968),
    s = n(64700),
    l = n(83257),
    a = n(203982),
    r = n(115063),
    o = n(652215);
let d = s.createContext(void 0);

function c(e) {
    let {
        children: t
    } = e, n = s.useRef(l.n3), [c, u] = s.useState(!1), _ = s.useCallback(e => {
        u(e?.some(e => e.showNotice() && !e.canCloseEarly?.()) ?? !1), n.current = l.n3
    }, []), g = s.useCallback(e => {
        if (c) {
            (0, r.fO)({
                duration: 300,
                intensity: n.current
            }), n.current = Math.min(n.current + l.pe, l.OZ), a._.dispatch(o.jej.EMPHASIZE_NOTICE);
            return
        }
        e()
    }, [c]), m = s.useMemo(() => ({
        navigateWithValidation: g,
        showNotice: c,
        handleStoreUpdate: _
    }), [g, c, _]);
    return (0, i.jsx)(d.Provider, {
        value: m,
        children: t
    })
}

function u() {
    let e = s.useContext(d);
    if (null == e) throw Error("useNoticeContext must be used within a NoticeProvider");
    return e
}