/** chunk id: 29570, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var r = n(64700);
let i = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = r.useState(!1),
        [i, l] = r.useState(0),
        [s, a] = r.useState(!1),
        [o, c] = r.useState(0);
    return r.useEffect(() => {
        i >= e && (a(!0), c(Math.floor(i / e)));
        let t = setTimeout(() => {
            l(0)
        }, 1e3);
        return () => clearTimeout(t)
    }, [i, e]), r.useEffect(() => {
        if (!t) {
            let e = setTimeout(() => {
                a(!1), c(0)
            }, 1e3);
            return () => clearTimeout(e)
        }
        l(e => e + 1)
    }, [t]), {
        onHover: () => {
            n(!0)
        },
        onUnhover: () => {
            n(!1)
        },
        isEasterEggTriggered: s,
        easterEggLevel: o
    }
}