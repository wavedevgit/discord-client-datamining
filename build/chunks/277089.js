/** chunk id: 277089 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(64700),
    i = n(505779),
    l = n(311907),
    r = n(970163),
    s = n(184989);
let o = function(e, t) {
    let [n, o] = a.useState(), c = a.useRef(null), d = a.useRef(t);
    a.useEffect(() => {
        d.current = t
    }, [t]);
    let u = (0, l.bG)([s.A], () => n?.guild?.id != null && s.A.isMember(n?.guild?.id)),
        m = a.useMemo(() => e?.websites?.find(e => {
            let {
                category: t
            } = e;
            return t === i.V.DISCORD
        }), [e?.websites]);
    return a.useEffect(() => {
        let e = async e => {
            let t = e.split("/").pop();
            if (null != t) {
                if (c.current?.toLowerCase() === t.toLowerCase()) return;
                let e = await (0, r.A)(t);
                !0 !== e.banned && (c.current = t, o(e.invite), null != e.invite && d.current?.(e.invite))
            }
        };
        null != m && e(m.url)
    }, [m]), {
        invite: n,
        isMember: u
    }
}