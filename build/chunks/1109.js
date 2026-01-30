/** chunk id: 1109, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(652215),
    s = n(252153);
let o = "1",
    c = "2",
    u = "3",
    d = "4",
    p = "5",
    h = "6",
    g = "1",
    f = "2",
    m = "3",
    A = "4",
    _ = "5",
    b = {
        [a.eMA.ESRB]: {
            [o]: s._,
            [c]: s.Zp,
            [u]: s.N8,
            [d]: s.L3,
            [p]: s.Pu,
            [h]: s.Jd
        },
        [a.eMA.PEGI]: {
            [g]: s.k8,
            [f]: s.Do,
            [m]: s.$w,
            [A]: s.yx,
            [_]: s.pr
        }
    },
    E = e => {
        let {
            agency: t,
            rating: n,
            className: i
        } = e, a = b[t][n];
        return null == a ? null : (0, r.jsx)("div", {
            className: l()(s.ZL, a, i)
        })
    }