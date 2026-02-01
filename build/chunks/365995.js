/** chunk id: 365995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var l = n(64700),
    r = n(311907),
    i = n(87001),
    o = n(652215);

function a() {
    let e = (0, r.bG)([i.A], () => i.A.getWindow(o.MLl.ACTIVITY_POPOUT)),
        t = l.useMemo(() => null == e ? void 0 : e.window.document, [e]),
        n = l.useMemo(() => null == t ? void 0 : t.getElementById("app-mount"), [t]);
    return {
        popoutWindow: e,
        currentDocument: t,
        rootNode: n
    }
}