/** chunk id: 628024, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => s
});
var r = n(89494),
    i = n(64700),
    a = n(297987),
    o = n(241827);

function s(e) {
    let {
        isDisabled: t,
        onFocus: n,
        onBlur: s,
        onFocusChange: l
    } = e, c = (0, i.useCallback)(e => {
        if (e.target === e.currentTarget) return s && s(e), l && l(!1), !0
    }, [s, l]), u = (0, r.yB)(c), d = (0, i.useCallback)(e => {
        let t = (0, a.TW)(e.target),
            r = t ? (0, o.bq)(t) : (0, o.bq)();
        e.target === e.currentTarget && r === (0, o.wt)(e.nativeEvent) && (n && n(e), l && l(!0), u(e))
    }, [l, n, u]);
    return {
        focusProps: {
            onFocus: !t && (n || l || s) ? d : void 0,
            onBlur: !t && (s || l) ? c : void 0
        }
    }
}