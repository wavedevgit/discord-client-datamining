/** chunk id: 1109 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(652215),
    s = n(252153);
let o = "1",
    d = "2",
    c = "3",
    u = "4",
    A = "5",
    h = "6",
    _ = "1",
    m = "2",
    p = "3",
    g = "4",
    E = "5",
    I = {
        [a.eMA.ESRB]: {
            [o]: s._,
            [d]: s.Zp,
            [c]: s.N8,
            [u]: s.L3,
            [A]: s.Pu,
            [h]: s.Jd
        },
        [a.eMA.PEGI]: {
            [_]: s.k8,
            [m]: s.Do,
            [p]: s.$w,
            [g]: s.yx,
            [E]: s.pr
        }
    },
    f = e => {
        let {
            agency: t,
            rating: n,
            className: r
        } = e, a = I[t][n];
        return null == a ? null : (0, i.jsx)("div", {
            className: l()(s.ZL, a, r)
        })
    }