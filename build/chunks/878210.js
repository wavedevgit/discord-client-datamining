/** chunk id: 878210 params = (module,exports,require) **/
n.d(l, {
    A: () => o
});
var t = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(203982),
    r = n(652215);

function o(e) {
    let {
        children: l
    } = e, [n, o] = i.useState(!1);
    return i.useEffect(() => {
        let e = () => {
            o(!0), setTimeout(() => {
                o(!1)
            }, 300)
        };
        return a._.subscribe(r.jej.SHAKE_PROFILE_MODAL, e), () => {
            a._.unsubscribe(r.jej.SHAKE_PROFILE_MODAL, e)
        }
    }, []), (0, t.jsx)(s.bfh, {
        isShaking: n,
        intensity: 1.4,
        children: l
    })
}