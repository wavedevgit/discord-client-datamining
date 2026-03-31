/** chunk id: 483558 params = (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(64700),
    a = n(311907),
    l = n(961350),
    s = n(622543),
    r = n(735321);

function o(e) {
    let [t, n] = i.useState(!1), o = e.type, d = (0, a.bG)([l.default, s.A], () => {
        let e = l.default.getId();
        if (null == e) return !1;
        let t = s.A.getUserProfile(e);
        return (t?.widgets ?? []).some(e => e.type === o)
    }), c = (0, r.uA)(e);
    return {
        shouldShowSuggestions: !d && !t && !c,
        handleDismissSuggestions: i.useCallback(() => {
            n(!0)
        }, [])
    }
}