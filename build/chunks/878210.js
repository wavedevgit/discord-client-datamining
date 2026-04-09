/** chunk id: 878210 params = (module,exports,require) **/
t.d(l, {
    A: () => o
});
var n = t(627968),
    i = t(64700),
    s = t(397927),
    a = t(203982),
    r = t(652215);

function o(e) {
    let {
        children: l
    } = e, [t, o] = i.useState(!1);
    return i.useEffect(() => {
        let e = () => {
            o(!0), setTimeout(() => {
                o(!1)
            }, 300)
        };
        return a._.subscribe(r.jej.SHAKE_PROFILE_MODAL, e), () => {
            a._.unsubscribe(r.jej.SHAKE_PROFILE_MODAL, e)
        }
    }, []), (0, n.jsx)(s.bfh, {
        isShaking: t,
        intensity: 1.4,
        children: l
    })
}