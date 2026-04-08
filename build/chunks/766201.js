/** chunk id: 766201 params = (module,exports,require) **/
n.d(t, {
    n: () => s
});
var a = n(64700),
    i = n(651162),
    l = n(652215);
let s = (e, t, n) => {
        let [i, s] = (0, a.useState)(!1);
        return (0, a.useEffect)(() => {
            let a = r(e);
            if (t || n || null == a) return void s(!1);
            let i = a - Date.now();
            if (i <= 0) return void s(!0);
            s(!1);
            let o = setTimeout(() => {
                s(!0)
            }, Math.min(l.mnr, i));
            return () => clearTimeout(o)
        }, [t, n, e]), i
    },
    r = e => {
        let t = null;
        return e.forEach(e => {
            let n = null;
            e.type === i.g.IMMERSIVE_BANNER ? n = null != e.endTime ? e.endTime.getTime() : null : e.type === i.g.COUNTDOWN_TIMER && (n = e.endTime.getTime()), (null == t || null != n && n < t) && (t = n)
        }), t
    }