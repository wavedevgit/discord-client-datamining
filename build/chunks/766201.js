/** chunk id: 766201 params = (module,exports,require) **/
n.d(t, {
    n: () => r
});
var i = n(64700),
    l = n(651162),
    a = n(652215);
let r = (e, t, n) => {
        let [l, r] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => {
            let i = s(e);
            if (t || n || null == i) return void r(!1);
            let l = i - Date.now();
            if (l <= 0) return void r(!0);
            r(!1);
            let o = setTimeout(() => {
                r(!0)
            }, Math.min(a.mnr, l));
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