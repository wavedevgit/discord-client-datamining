/** chunk id: 972007 params = (module,exports,require) **/
n.d(t, {
    i: () => d
}), n(321073);
var i = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    s = n(803306),
    o = n(326084),
    c = n(851746);
let d = e => {
    let {
        searchQuery: t,
        selectedUsers: n,
        limit: l
    } = e, d = (0, r.bG)([c.A], () => c.A.getRecipientStatus()), u = (0, r.bG)([c.A], () => c.A.getReferralsRemaining()), [m, _] = i.useState(0), [A, E] = i.useState([]), [f, h] = i.useState(!1), [g, p] = i.useState(!1), [x, C] = i.useState(new Map);
    a()(null != u, "Referrals remaining should not be null");
    let I = async (e, i) => {
        if (!f && !g && null != e && 0 !== u) try {
            h(!0);
            let l = [...x.values()];
            for (let [e, t] of d)
                if (t === o.aK.PENDING && !x.has(e)) {
                    let t = await (0, s.wz)(e);
                    l.push(t)
                } let a = await (0, o.P7)(e, t, i);
            E(t => {
                let i = a.users.filter(e => !n.has(e.id));
                return (l = l.filter(e => !n.has(e.id)), 0 === e) ? [...n.values(), ...l.values(), ...i] : [...t, ...i]
            }), C(e => {
                let t = new Map(e);
                for (let e of l) t.set(e.id, e);
                return t
            }), _(a.nextIndex)
        } catch (e) {
            p(!0)
        } finally {
            h(!1)
        }
    }, T = {
        limit: l,
        getNextRows: I,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, n] of d)
                if (n === o.aK.PENDING && !x.has(t)) {
                    let n = await (0, s.wz)(t);
                    e.set(n.id, n)
                } C(e), E(Array.from(e.values()))
        }
    }, N = i.useRef(T);
    return i.useEffect(() => {
        N.current = T
    }), i.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: n
        } = N.current;
        u > 0 ? e(0, t) : n()
    }, [t, u]), {
        eligibleUsers: A,
        fetchUsers: () => I(m, l),
        hasError: g,
        isFetching: f,
        resendUsers: x
    }
}