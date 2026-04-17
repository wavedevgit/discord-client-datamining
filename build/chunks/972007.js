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
    } = e, d = (0, s.bG)([c.A], () => c.A.getRecipientStatus()), u = (0, s.bG)([c.A], () => c.A.getReferralsRemaining()), [_, m] = i.useState(0), [p, A] = i.useState([]), [g, f] = i.useState(!1), [h, b] = i.useState(!1), [x, R] = i.useState(new Map);
    a()(null != u, "Referrals remaining should not be null");
    let C = async (e, i) => {
        if (!g && !h && null != e && 0 !== u) try {
            f(!0);
            let r = [...x.values()];
            for (let [e, t] of d)
                if (t === o.aK.PENDING && !x.has(e)) {
                    let t = await (0, l.wz)(e);
                    r.push(t)
                } let a = await (0, o.P7)(e, t, i);
            A(t => {
                r = r.filter(e => !n.has(e.id));
                let i = new Set(r.map(e => e.id)),
                    s = a.users.filter(e => !n.has(e.id) && !i.has(e.id));
                return 0 === e ? [...n.values(), ...r.values(), ...s] : [...t, ...s]
            }), R(e => {
                let t = new Map(e);
                for (let e of r) t.set(e.id, e);
                return t
            }), m(a.nextIndex)
        } catch (e) {
            b(!0)
        } finally {
            f(!1)
        }
    }, N = {
        limit: r,
        getNextRows: C,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, n] of d)
                if (n === o.aK.PENDING && !x.has(t)) {
                    let n = await (0, l.wz)(t);
                    e.set(n.id, n)
                } R(e), A(Array.from(e.values()))
        }
    }, E = i.useRef(N);
    return i.useEffect(() => {
        E.current = N
    }), i.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: n
        } = E.current;
        u > 0 ? e(0, t) : n()
    }, [t, u]), {
        eligibleUsers: p,
        fetchUsers: () => C(_, r),
        hasError: h,
        isFetching: g,
        resendUsers: x
    }
}