/** chunk id: 483558 params = (module,exports,require) **/
i.d(t, {
    q: () => o
});
var n = i(64700),
    s = i(311907),
    l = i(961350),
    a = i(622543),
    r = i(735321);

function o(e) {
    let [t, i] = n.useState(!1), o = e.type, d = (0, s.bG)([l.default, a.A], () => {
        let e = l.default.getId();
        if (null == e) return !1;
        let t = a.A.getUserProfile(e);
        return (t?.widgets ?? []).some(e => e.type === o)
    }), c = (0, r.uA)(e);
    return {
        shouldShowSuggestions: !d && !t && !c,
        handleDismissSuggestions: n.useCallback(() => {
            i(!0)
        }, [])
    }
}