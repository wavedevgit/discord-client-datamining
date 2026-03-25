/** chunk id: 972007 params = (module,exports,require) **/
n.d(t, {
    i: () => d
}), n(321073);
var i = n(64700),
    a = n(284009),
    l = n.n(a),
    r = n(311907),
    s = n(803306),
    o = n(326084),
    c = n(851746);
let d = e => {
    let {
        searchQuery: t,
        selectedUsers: n,
        limit: a
    } = e, d = (0, r.bG)([c.A], () => c.A.getRecipientStatus()), u = (0, r.bG)([c.A], () => c.A.getReferralsRemaining()), [_, m] = i.useState(0), [A, E] = i.useState([]), [I, T] = i.useState(!1), [f, N] = i.useState(!1), [g, C] = i.useState(new Map);
    l()(null != u, "Referrals remaining should not be null");
    let h = async (e, i) => {
        if (!I && !f && null != e && 0 !== u) try {
            T(!0);
            let a = [...g.values()];
            for (let [e, t] of d)
                if (t === o.aK.PENDING && !g.has(e)) {
                    let t = await (0, s.wz)(e);
                    a.push(t)
                } let l = await (0, o.P7)(e, t, i);
            E(t => {
                a = a.filter(e => !n.has(e.id));
                let i = new Set(a.map(e => e.id)),
                    r = l.users.filter(e => !n.has(e.id) && !i.has(e.id));
                return 0 === e ? [...n.values(), ...a.values(), ...r] : [...t, ...r]
            }), C(e => {
                let t = new Map(e);
                for (let e of a) t.set(e.id, e);
                return t
            }), m(l.nextIndex)
        } catch (e) {
            N(!0)
        } finally {
            T(!1)
        }
    }, p = {
        limit: a,
        getNextRows: h,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, n] of d)
                if (n === o.aK.PENDING && !g.has(t)) {
                    let n = await (0, s.wz)(t);
                    e.set(n.id, n)
                } C(e), E(Array.from(e.values()))
        }
    }, x = i.useRef(p);
    return i.useEffect(() => {
        x.current = p
    }), i.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: n
        } = x.current;
        u > 0 ? e(0, t) : n()
    }, [t, u]), {
        eligibleUsers: A,
        fetchUsers: () => h(_, a),
        hasError: f,
        isFetching: I,
        resendUsers: g
    }
}