/** Chunk was on web.js **/
/** chunk id: 972007, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => u
}), n(896048), n(321073);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(803306),
    l = n(326084),
    c = n(851746);
let u = e => {
    let {
        searchQuery: t,
        selectedUsers: n,
        limit: i
    } = e, u = (0, s.bG)([c.A], () => c.A.getRecipientStatus()), d = (0, s.bG)([c.A], () => c.A.getReferralsRemaining()), [f, p] = r.useState(0), [_, h] = r.useState([]), [m, g] = r.useState(!1), [E, y] = r.useState(!1), [b, O] = r.useState(new Map);
    a()(null != d, "Referrals remaining should not be null");
    let v = async (e, r) => {
        if (!m && !E && null != e && 0 !== d) try {
            g(!0);
            let i = [...b.values()];
            for (let [e, t] of u)
                if (t === l.aK.PENDING && !b.has(e)) {
                    let t = await (0, o.wz)(e);
                    i.push(t)
                } let a = await (0, l.P7)(e, t, r);
            h(t => {
                let r = a.users.filter(e => !n.has(e.id));
                return (i = i.filter(e => !n.has(e.id)), 0 === e) ? [...n.values(), ...i.values(), ...r] : [...t, ...r]
            }), O(e => {
                let t = new Map(e);
                for (let e of i) t.set(e.id, e);
                return t
            }), p(a.nextIndex)
        } catch (e) {
            y(!0)
        } finally {
            g(!1)
        }
    }, A = {
        limit: i,
        getNextRows: v,
        getLocalReferrals: async () => {
            let e = new Map;
            for (let [t, n] of u)
                if (n === l.aK.PENDING && !b.has(t)) {
                    let n = await (0, o.wz)(t);
                    e.set(n.id, n)
                } O(e), h(Array.from(e.values()))
        }
    }, I = r.useRef(A);
    return r.useEffect(() => {
        I.current = A
    }), r.useEffect(() => {
        let {
            getNextRows: e,
            limit: t,
            getLocalReferrals: n
        } = I.current;
        d > 0 ? e(0, t) : n()
    }, [t, d]), {
        eligibleUsers: _,
        fetchUsers: () => v(f, i),
        hasError: E,
        isFetching: m,
        resendUsers: b
    }
}