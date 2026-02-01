/** chunk id: 555540, original params: e,t,s (module,exports,require) **/
s.d(t, {
    $: () => n
}), s(896048);
var i = s(64700);

function n(e, t, s) {
    let n = i.useRef(null),
        [r, l] = i.useState(!1),
        a = i.useCallback(() => {
            if (e && null !== n.current) {
                var s;
                l((null == (s = n.current) ? void 0 : s.offsetHeight) > 2.5 * t)
            }
        }, [l, e, t]);
    return i.useLayoutEffect(() => {
        a()
    }, [a, e, s]), {
        postTitleRef: n,
        isNewBadgeOverflow: r
    }
}