/** chunk id: 972007 params = (module,exports,require) **/
"use strict";
s.d(t, {
    i: () => o
}), s(321073);
var r = s(64700),
    i = s(284009),
    n = s.n(i),
    a = s(311907),
    l = s(803306),
    c = s(326084),
    u = s(851746);
let o = e => {
    let {
        searchQuery: t,
        selectedUsers: s,
        limit: i
    } = e, o = (0, a.bG)([u.A], () => u.A.getRecipientStatus()), E = (0, a.bG)([u.A], () => u.A.getReferralsRemaining()), [d, _] = r.useState(0), [R, p] = r.useState([]), [I, S] = r.useState(!1), [f, h] = r.useState(!1), [A, M] = r.useState(new Map);
    n()(null != E, "Referrals remaining should not be null");
    let g = async (e, r) => {
        if (!I && !f && null != e && 0 !== E) try {
            S(!0);
            let i = [...A.values()];
            for (let [e, t] of o)
                if (t === c.aK.PENDING && !A.has(e)) {
                    let t = await (0, l.wz)(e);
                    i.push(t)
                } let n = await (0, c.P7)(e, t, r);
            p(t => {
                i = i.filter(e => !s.has(e.id));
                let r = new Set(i.map(e => e.id)),
                    a = n.users.filter(e => !s.has(e.id) && !r.has(e.id));
                return 0 === e ? [...s.values(), ...i.values(), ...a] : [...t, ...a]
            }), M(e => {
                let t = new Map(e);
                for (let e of i) t.set(e.id, e);
                return t
            }), _(n.nextIndex)
        } catch (e) {
            h(!0)
        } finally {
            S(!1)
        }
    }, T = {
        limit: i,
        getNextRows: g,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, s] of o)
                if (s === c.aK.PENDING && !A.has(t)) {
                    let s = await (0, l.wz)(t);
                    e.set(s.id, s)
                } M(e), p(Array.from(e.values()))
        }
    }, m = r.useRef(T);
    return r.useEffect(() => {
        m.current = T
    }), r.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: s
        } = m.current;
        E > 0 ? e(0, t) : s()
    }, [t, E]), {
        eligibleUsers: R,
        fetchUsers: () => g(d, i),
        hasError: f,
        isFetching: I,
        resendUsers: A
    }
}