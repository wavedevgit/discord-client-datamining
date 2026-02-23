/** chunk id: 660157, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(420970),
    r = n(287809),
    l = n(639621),
    a = n(613057),
    s = n(652215);
let o = {
    [s.e$_.GET_USER]: (0, i.T)(s.e$_.GET_USER, {
        scope: {
            [a.sm.ANY]: [a.W_, a.hj]
        },
        handler(e) {
            let {
                args: {
                    id: t
                }
            } = e, n = r.default.getUser(t);
            return null == n ? null : (0, l.A)(n)
        }
    })
}