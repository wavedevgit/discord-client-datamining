/** Chunk was on 13492 **/
/** chunk id: 365995, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => l
});
var r = t(64700),
    o = t(311907),
    a = t(87001),
    i = t(652215);

function l() {
    let e = (0, o.bG)([a.A], () => a.A.getWindow(i.MLl.ACTIVITY_POPOUT)),
        n = r.useMemo(() => null == e ? void 0 : e.window.document, [e]),
        t = r.useMemo(() => null == n ? void 0 : n.getElementById("app-mount"), [n]);
    return {
        popoutWindow: e,
        currentDocument: n,
        rootNode: t
    }
}