/** chunk id: 660157 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(420970),
    a = n(287809),
    r = n(639621),
    l = n(613057),
    s = n(652215);
let o = {
    [s.e$_.GET_USER]: (0, i.T)(s.e$_.GET_USER, {
        scope: {
            [l.sm.ANY]: [l.W_, l.hj]
        },
        handler(e) {
            let {
                args: {
                    id: t
                }
            } = e, n = a.default.getUser(t);
            return null == n ? null : (0, r.A)(n)
        }
    })
}