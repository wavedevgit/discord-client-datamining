/** chunk id: 766201 params = (module,exports,require) **/
n.d(t, {
    n: () => a
});
var i = n(64700),
    l = n(651162),
    r = n(652215);
let a = (e, t, n) => {
        let [l, a] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => {
            let i = s(e);
            if (t || n || null == i) return void a(!1);
            let l = i - Date.now();
            if (l <= 0) return void a(!0);
            a(!1);
            let o = setTimeout(() => {
                a(!0)
            }, Math.min(r.mnr, l));
            return () => clearTimeout(o)
        }, [t, n, e]), l
    },
    s = e => {
        let t = null;
        return e.forEach(e => {
            let n = null;
            e.type === l.g.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === l.g.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
        }), t
    }