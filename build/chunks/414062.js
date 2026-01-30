/** Chunk was on 49559 **/
/** chunk id: 414062, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => u
});
var r = n(64700),
    l = n(284009),
    a = n.n(l),
    i = n(155718),
    o = n(31717),
    s = n(522602),
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
    } = t.useComponentState(e), p = r.useMemo(() => (null == l ? void 0 : l.type) === i.I5.FILE_UPLOAD ? l.uploadIds : [], [l]), m = s.A.getUploads(n, o.C.InteractionModal), f = r.useMemo(() => p.map(e => m.find(t => t.id === e)).filter(e => null != e), [p, m]), O = r.useCallback(e => u({
        type: i.I5.FILE_UPLOAD,
        uploadIds: e
    }), [u]);
    return r.useEffect(() => {
        p.length > f.length && O(p.filter(e => f.some(t => t.id === e)))
    }, [p, f, O]), {
        uploadIds: p,
        setUploadIds: O,
        currentUploads: f,
        error: d
    }
}