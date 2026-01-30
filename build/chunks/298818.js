/** chunk id: 298818, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048), n(492834), n(638769);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(493581),
    a = n(308072),
    o = n(985018),
    c = n(194976);

function d(e) {
    let {
        guildId: t,
        selectedGameApplicationIds: n,
        onUpdateGames: d,
        disabled: u
    } = e, {
        topGames: g,
        tryFetchTopGames: m
    } = (0, s.f)(), p = g.get(t), [f, h] = i.useState(!1);
    i.useEffect(() => {
        h(!0), m(t).finally(() => {
            h(!1)
        })
    }, [t, m]);
    let b = i.useMemo(() => null == p ? [] : Object.keys(p).filter(e => !n.includes(e)).sort((e, t) => p[t].score - p[e].score), [p, n]),
        x = i.useCallback(e => {
            n.includes(e) ? d(n.filter(t => t !== e)) : d([...n, e])
        }, [d, n]);
    return f && null == p ? (0, r.jsx)(l.y$y, {}) : null == b || 0 === b.length ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: c.me
        }), (0, r.jsxs)("div", {
            className: c.rS,
            children: [(0, r.jsx)(l.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: o.intl.string(o.t.bFGpua)
            }), (0, r.jsx)("div", {
                className: c.CW,
                children: b.map(e => (0, r.jsx)(a.A, {
                    applicationId: e,
                    selected: !1,
                    onClick: x,
                    disabled: u
                }, e))
            })]
        })]
    })
}