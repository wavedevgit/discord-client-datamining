/** chunk id: 878210 params = (module,exports,require) **/
i.d(l, {
    A: () => o
});
var t = i(627968),
    n = i(64700),
    s = i(397927),
    a = i(203982),
    r = i(652215);

function o(e) {
    let {
        children: l
    } = e, [i, o] = n.useState(!1);
    return n.useEffect(() => {
        let e = () => {
            o(!0), setTimeout(() => {
                o(!1)
            }, 1e3)
        };
        return a._.subscribe(r.jej.SHAKE_PROFILE_MODAL, e), () => {
            a._.unsubscribe(r.jej.SHAKE_PROFILE_MODAL, e)
        }
    }, []), (0, t.jsx)(s.bfh, {
        isShaking: i,
        intensity: 1.4,
        children: l
    })
}