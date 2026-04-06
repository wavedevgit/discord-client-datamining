/** chunk id: 766201 params = (module,exports,require) **/
n.d(t, {
    n: () => l
});
var i = n(64700),
    a = n(651162),
    r = n(652215);
let l = (e, t, n) => {
        let [a, l] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => {
            let i = s(e);
            if (t || n || null == i) return void l(!1);
            let a = i - Date.now();
            if (a <= 0) return void l(!0);
            l(!1);
            let o = setTimeout(() => {
                l(!0)
            }, Math.min(r.mnr, a));
            return () => clearTimeout(o)
        }, [t, n, e]), a
    },
    s = e => {
        let t = null;
        return e.forEach(e => {
            let n = null;
            e.type === a.g.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === a.g.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
        }), t
    }