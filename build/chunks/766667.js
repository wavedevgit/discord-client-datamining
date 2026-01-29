/** Chunk was on 4670 **/
/** chunk id: 766667, original params: e,t,i (module,exports,require) **/
i.d(t, {
    p: () => c
}), i(896048), i(733351);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    a = i(274372),
    u = i(399925),
    o = i(419954),
    d = i(780964),
    T = i(985018);
let c = (0, o.E2)(d.X.CLIPS_PHRASES, {
    useSearchTerms: () => [T.intl.string(T.t.JIze0o)],
    usePredicate: () => (0, s.bG)([a.A], () => a.A.getSettings().clipSignals).enablePhraseSignals,
    Component: function() {
        let e = (0, s.bG)([a.A], () => a.A.getSettings().autoClipPhrases),
            [t, i] = l.useState(""),
            o = l.useMemo(() => e.map(e => ({
                id: e,
                label: e
            })), [e]),
            d = l.useCallback(e => {
                i(e)
            }, []),
            c = l.useCallback(n => {
                if ("Enter" === n.key || "," === n.key) {
                    n.preventDefault();
                    let l = t.trim().toLowerCase();
                    l.length > 0 && !e.includes(l) && (u.pM([...e, l]), i(""))
                } else if ("Backspace" === n.key && "" === t && e.length > 0) {
                    let t = e.slice(0, -1);
                    u.pM(t)
                }
            }, [t, e]),
            A = l.useCallback(t => {
                let i = Array.from(t)[0],
                    n = e.filter(e => e !== i);
                u.pM(n)
            }, [e]);
        return (0, n.jsx)(r.ksK, {
            value: t,
            onChange: d,
            onKeyDown: c,
            placeholder: T.intl.string(T.t.zYUZpt),
            leading: o.length > 0 ? {
                type: "tags",
                items: o,
                onRemove: A
            } : void 0
        })
    }
})