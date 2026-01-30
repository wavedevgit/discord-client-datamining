/** chunk id: 483558, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => s
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(961350),
    a = n(622543),
    o = n(735321);

function s(e) {
    let [t, n] = r.useState(!1), s = e.type, c = (0, l.bG)([i.default, a.A], () => {
        var e;
        let t = i.default.getId();
        if (null == t) return !1;
        let n = a.A.getUserProfile(t);
        return (null != (e = null == n ? void 0 : n.widgets) ? e : []).some(e => e.type === s)
    }), u = (0, o.uA)(e);
    return {
        shouldShowSuggestions: !c && !t && !u,
        handleDismissSuggestions: r.useCallback(() => {
            n(!0)
        }, [])
    }
}