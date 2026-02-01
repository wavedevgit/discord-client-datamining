/** chunk id: 766667, original params: t,e,i (module,exports,require) **/
i.d(e, {
    p: () => A
}), i(896048), i(733351);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    u = i(274372),
    a = i(399925),
    o = i(419954),
    d = i(780964),
    T = i(985018);
let A = (0, o.E2)(d.X.CLIPS_PHRASES, {
    useSearchTerms: () => [T.intl.string(T.t.JIze0o)],
    usePredicate: () => (0, s.bG)([u.A], () => u.A.getSettings().clipSignals).enablePhraseSignals,
    Component: function() {
        let t = (0, s.bG)([u.A], () => u.A.getSettings().autoClipPhrases),
            [e, i] = l.useState(""),
            o = l.useMemo(() => t.map(t => ({
                id: t,
                label: t
            })), [t]),
            d = l.useCallback(t => {
                i(t)
            }, []),
            A = l.useCallback(n => {
                if ("Enter" === n.key || "," === n.key) {
                    n.preventDefault();
                    let l = e.trim().toLowerCase();
                    l.length > 0 && !t.includes(l) && (a.pM([...t, l]), i(""))
                } else if ("Backspace" === n.key && "" === e && t.length > 0) {
                    let e = t.slice(0, -1);
                    a.pM(e)
                }
            }, [e, t]),
            S = l.useCallback(e => {
                let i = Array.from(e)[0],
                    n = t.filter(t => t !== i);
                a.pM(n)
            }, [t]);
        return (0, n.jsx)(r.ksK, {
            value: e,
            onChange: d,
            onKeyDown: A,
            placeholder: T.intl.string(T.t.zYUZpt),
            leading: o.length > 0 ? {
                type: "tags",
                items: o,
                onRemove: S
            } : void 0
        })
    }
})