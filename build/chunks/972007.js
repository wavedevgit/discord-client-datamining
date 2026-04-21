/** chunk id: 972007 params = (module,exports,require) **/
n.d(t, {
    i: () => d
}), n(321073);
var i = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(311907),
    l = n(803306),
    o = n(326084),
    c = n(851746);
let d = e => {
    let {
        searchQuery: t,
        selectedUsers: n,
        limit: r
    } = e, d = (0, s.bG)([c.A], () => c.A.getRecipientStatus()), u = (0, s.bG)([c.A], () => c.A.getReferralsRemaining()), [_, m] = i.useState(0), [p, A] = i.useState([]), [g, f] = i.useState(!1), [x, h] = i.useState(!1), [b, C] = i.useState(new Map);
    a()(null != u, "Referrals remaining should not be null");
    let R = async (e, i) => {
        if (!g && !x && null != e && 0 !== u) try {
            f(!0);
            let r = [...b.values()];
            for (let [e, t] of d)
                if (t === o.aK.PENDING && !b.has(e)) {
                    let t = await (0, l.wz)(e);
                    r.push(t)
                } let a = await (0, o.P7)(e, t, i);
            A(t => {
                r = r.filter(e => !n.has(e.id));
                let i = new Set(r.map(e => e.id)),
                    s = a.users.filter(e => !n.has(e.id) && !i.has(e.id));
                return 0 === e ? [...n.values(), ...r.values(), ...s] : [...t, ...s]
            }), C(e => {
                let t = new Map(e);
                for (let e of r) t.set(e.id, e);
                return t
            }), m(a.nextIndex)
        } catch (e) {
            h(!0)
        } finally {
            f(!1)
        }
    }, N = {
        limit: r,
        getNextRows: R,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, n] of d)
                if (n === o.aK.PENDING && !b.has(t)) {
                    let n = await (0, l.wz)(t);
                    e.set(n.id, n)
                } C(e), A(Array.from(e.values()))
        }
    }, v = i.useRef(N);
    return i.useEffect(() => {
        v.current = N
    }), i.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: n
        } = v.current;
        u > 0 ? e(0, t) : n()
    }, [t, u]), {
        eligibleUsers: p,
        fetchUsers: () => R(_, r),
        hasError: x,
        isFetching: g,
        resendUsers: b
    }
}