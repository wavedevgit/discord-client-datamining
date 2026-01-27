/** Chunk was on 20941 **/
/** chunk id: 414062, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => u
});
var r = n(64700),
    l = n(284009),
    a = n.n(l),
    i = n(155718),
    s = n(31717),
    o = n(522602),
    c = n(207963);

function u(e) {
    let t = (0, c.jc)();
    a()(null != t, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
    let n = t.channelId;
    a()(null != n, "useFileUploadComponentState must be used inside a channel");
    let {
        state: l,
        executeStateUpdate: u,
        error: d
    } = t.useComponentState(e), m = r.useMemo(() => (null == l ? void 0 : l.type) === i.I5.FILE_UPLOAD ? l.uploadIds : [], [l]), f = o.A.getUploads(n, s.C.InteractionModal), p = r.useMemo(() => m.map(e => f.find(t => t.id === e)).filter(e => null != e), [m, f]), h = r.useCallback(e => u({
        type: i.I5.FILE_UPLOAD,
        uploadIds: e
    }), [u]);
    return r.useEffect(() => {
        m.length > p.length && h(m.filter(e => p.some(t => t.id === e)))
    }, [m, p, h]), {
        uploadIds: m,
        setUploadIds: h,
        currentUploads: p,
        error: d
    }
}