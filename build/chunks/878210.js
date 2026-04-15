/** chunk id: 878210 params = (module,exports,require) **/
l.d(n, {
    A: () => o
});
var i = l(627968),
    t = l(64700),
    s = l(397927),
    a = l(203982),
    r = l(652215);

function o(e) {
    let {
        children: n
    } = e, [l, o] = t.useState(!1);
    return t.useEffect(() => {
        let e = () => {
            o(!0), setTimeout(() => {
                o(!1)
            }, 300)
        };
        return a._.subscribe(r.jej.SHAKE_PROFILE_MODAL, e), () => {
            a._.unsubscribe(r.jej.SHAKE_PROFILE_MODAL, e)
        }
    }, []), (0, i.jsx)(s.bfh, {
        isShaking: l,
        intensity: 1.4,
        children: n
    })
}