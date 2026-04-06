/** chunk id: 766201 params = (module,exports,require) **/
n.d(t, {
    n: () => l
});
var i = n(64700),
    r = n(651162),
    a = n(652215);
let l = (e, t, n) => {
        let [r, l] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => {
            let i = s(e);
            if (t || n || null == i) return void l(!1);
            let r = i - Date.now();
            if (r <= 0) return void l(!0);
            l(!1);
            let o = setTimeout(() => {
                l(!0)
            }, Math.min(a.mnr, r));
            return () => clearTimeout(o)
        }, [t, n, e]), r
    },
    s = e => {
        let t = null;
        return e.forEach(e => {
            let n = null;
            e.type === r.g.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === r.g.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
        }), t
    }