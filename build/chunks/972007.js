/** chunk id: 972007, original params: e,t,n (module,exports,require) **/
n.d(t, {
    i: () => u
}), n(896048), n(321073);
var r = n(64700),
    i = n(284009),
    l = n.n(i),
    a = n(311907),
    s = n(803306),
    o = n(326084),
    c = n(851746);
let u = e => {
    let {
        searchQuery: t,
        selectedUsers: n,
        limit: i
    } = e, u = (0, a.bG)([c.A], () => c.A.getRecipientStatus()), d = (0, a.bG)([c.A], () => c.A.getReferralsRemaining()), [p, m] = r.useState(0), [f, g] = r.useState([]), [_, h] = r.useState(!1), [b, y] = r.useState(!1), [A, v] = r.useState(new Map);
    l()(null != d, "Referrals remaining should not be null");
    let O = async (e, r) => {
        if (!_ && !b && null != e && 0 !== d) try {
            h(!0);
            let i = [...A.values()];
            for (let [e, t] of u)
                if (t === o.aK.PENDING && !A.has(e)) {
                    let t = await (0, s.wz)(e);
                    i.push(t)
                } let l = await (0, o.P7)(e, t, r);
            g(t => {
                let r = l.users.filter(e => !n.has(e.id));
                return (i = i.filter(e => !n.has(e.id)), 0 === e) ? [...n.values(), ...i.values(), ...r] : [...t, ...r]
            }), v(e => {
                let t = new Map(e);
                for (let e of i) t.set(e.id, e);
                return t
            }), m(l.nextIndex)
        } catch (e) {
            y(!0)
        } finally {
            h(!1)
        }
    }, x = {
        limit: i,
        getNextRows: O,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, n] of u)
                if (n === o.aK.PENDING && !A.has(t)) {
                    let n = await (0, s.wz)(t);
                    e.set(n.id, n)
                } v(e), g(Array.from(e.values()))
        }
    }, E = r.useRef(x);
    return r.useEffect(() => {
        E.current = x
    }), r.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: n
        } = E.current;
        d > 0 ? e(0, t) : n()
    }, [t, d]), {
        eligibleUsers: f,
        fetchUsers: () => O(p, i),
        hasError: b,
        isFetching: _,
        resendUsers: A
    }
}