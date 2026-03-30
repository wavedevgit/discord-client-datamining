/** chunk id: 660157 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(420970),
    l = n(287809),
    a = n(639621),
    r = n(613057),
    s = n(652215);
let o = {
    [s.e$_.GET_USER]: (0, i.T)(s.e$_.GET_USER, {
        scope: {
            [r.sm.ANY]: [r.W_, r.hj]
        },
        handler(e) {
            let {
                args: {
                    id: t
                }
            } = e, n = l.default.getUser(t);
            return null == n ? null : (0, a.A)(n)
        }
    })
}