/** chunk id: 29570, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(64700);
let s = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        [t, n] = i.useState(!1),
        [s, a] = i.useState(0),
        [r, l] = i.useState(!1),
        [o, c] = i.useState(0);
    return i.useEffect(() => {
        s >= e && (l(!0), c(Math.floor(s / e)));
        let t = setTimeout(() => {
            a(0)
        }, 1e3);
        return () => clearTimeout(t)
    }, [s, e]), i.useEffect(() => {
        if (!t) {
            let e = setTimeout(() => {
                l(!1), c(0)
            }, 1e3);
            return () => clearTimeout(e)
        }
        a(e => e + 1)
    }, [t]), {
        onHover: () => {
            n(!0)
        },
        onUnhover: () => {
            n(!1)
        },
        isEasterEggTriggered: r,
        easterEggLevel: o
    }
}