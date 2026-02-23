/** chunk id: 365995, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(64700),
    i = n(311907),
    o = n(87001),
    r = n(652215);

function l() {
    let e = (0, i.bG)([o.A], () => o.A.getWindow(r.MLl.ACTIVITY_POPOUT)),
        t = a.useMemo(() => e?.window.document, [e]),
        n = a.useMemo(() => t?.getElementById("app-mount"), [t]);
    return {
        popoutWindow: e,
        currentDocument: t,
        rootNode: n
    }
}