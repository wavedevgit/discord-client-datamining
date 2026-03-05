/** chunk id: 29570, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(64700);
let s = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = i.useState(!1),
        [s, l] = i.useState(0),
        [a, r] = i.useState(!1),
        [o, d] = i.useState(0);
    return i.useEffect(() => {
        s >= e && (r(!0), d(Math.floor(s / e)));
        let t = setTimeout(() => {
            l(0)
        }, 1e3);
        return () => clearTimeout(t)
    }, [s, e]), i.useEffect(() => {
        if (!t) {
            let e = setTimeout(() => {
                r(!1), d(0)
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
        isEasterEggTriggered: a,
        easterEggLevel: o
    }
}