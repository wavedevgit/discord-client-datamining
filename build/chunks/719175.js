/** chunk id: 719175, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(460760),
    o = n(997590),
    c = n(927573);
let d = e => {
    let {
        label: t,
        description: n,
        guild: d,
        guildMetadata: u,
        disabled: g
    } = e, m = (0, l.yK)([o.A], () => o.A.getAllCategories()), p = i.useMemo(() => m.map(e => {
        let {
            categoryId: t,
            name: n
        } = e;
        return {
            id: t.toString(),
            value: t,
            label: n
        }
    }), [m]);
    return 0 === p.length ? (0, r.jsx)(s.y$y, {}) : (0, r.jsx)(s.ZiE, {
        selectionMode: "multiple",
        label: t,
        description: n,
        value: u.secondaryCategoryIds,
        options: p,
        onSelectionChange: e => {
            let {
                secondaryCategoryIds: t
            } = u;
            if (e.length < t.length) t.filter(t => !e.includes(t)).forEach(e => (0, a.Tz)(d.id, e));
            else {
                if (t.length >= c._4) return;
                e.filter(e => !t.includes(e)).forEach(e => (0, a.nA)(d.id, e))
            }
        },
        disabled: g
    })
}