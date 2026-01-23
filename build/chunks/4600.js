/** Chunk was on 47841 **/
/** chunk id: 4600, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(11351),
    a = n(306444),
    o = n(922975),
    c = n(389025),
    d = n(963175),
    u = n(600292),
    g = n(280433),
    m = n(179895),
    p = n(862651),
    f = n(585632),
    b = n(2242),
    h = n(985018);

function x(e) {
    let {
        allSubscriptionListings: t
    } = e, {
        editStateId: n,
        guildId: x
    } = (0, a.O)(), [j, _] = o.lZ(n), [O, v] = o.$O(n), y = i.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
        isFullServerGating: A
    } = (0, c.A)(x), E = (0, s.gN)();
    return (0, r.jsx)(d.A, {
        title: h.intl.string(h.t.YNw2Sm),
        description: h.intl.string(h.t.zMW5r0),
        children: (0, r.jsxs)(l.BJc, {
            gap: 24,
            children: [(0, r.jsxs)(l.D0$, {
                disabled: E,
                label: h.intl.string(h.t.DFlDaE),
                description: h.intl.string(h.t.kHalVA),
                children: [(0, r.jsx)(u.A, {
                    channelBenefits: j,
                    intangibleBenefits: O,
                    subscriptionListings: y,
                    onImport: function(e, t) {
                        _(t => t.concat(e)), v(e => e.concat(t))
                    }
                }), (0, r.jsx)(u.q, {
                    guildId: x,
                    onImport: function(e) {
                        _(t => {
                            let n = new Set(t.map(e => {
                                let {
                                    ref_id: t
                                } = e;
                                return t
                            }));
                            return [...t, ...e.filter(e => !n.has(e)).map(e => ({
                                ref_id: e,
                                ref_type: b.bN.CHANNEL
                            }))]
                        })
                    },
                    disabled: E
                })]
            }), (0, r.jsx)(l.D0$, {
                label: h.intl.string(h.t.S2kKzP),
                description: h.intl.string(h.t["5a4AxV"]),
                disabled: E,
                children: e => (0, r.jsxs)(r.Fragment, {
                    children: [A && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(g.A, {
                            "aria-labelledby": e.labelId,
                            disabled: E
                        }), (0, r.jsx)(l.hKd, {
                            size: 8
                        })]
                    }), (0, r.jsx)(m.A, {})]
                })
            }), (0, r.jsx)(l.D0$, {
                label: h.intl.string(h.t.RdwKw7),
                description: h.intl.string(h.t.zAww7V),
                disabled: E,
                children: (0, r.jsx)(f.A, {})
            }), (0, r.jsx)(p.A, {})]
        })
    })
}