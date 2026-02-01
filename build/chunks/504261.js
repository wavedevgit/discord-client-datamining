/** chunk id: 504261, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => n
}), s(896048);
var i = s(64700);
let n = e => {
    let [t, s] = i.useState(!1);
    return {
        isFocused: t,
        handleFocus: i.useCallback(t => {
            e(t), s(!0)
        }, [e, s]),
        handleBlur: () => {
            s(!1)
        }
    }
}