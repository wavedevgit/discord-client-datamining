/** chunk id: 365995 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    l = n(311907),
    a = n(87001),
    r = n(652215);

function o() {
    let e = (0, l.bG)([a.A], () => a.A.getWindow(r.MLl.ACTIVITY_POPOUT)),
        t = i.useMemo(() => e?.window.document, [e]),
        n = i.useMemo(() => t?.getElementById("app-mount"), [t]);
    return {
        popoutWindow: e,
        currentDocument: t,
        rootNode: n
    }
}