/** chunk id: 4600 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(11351),
    a = n(306444),
    o = n(922975),
    d = n(389025),
    c = n(963175),
    u = n(600292),
    m = n(280433),
    g = n(179895),
    x = n(862651),
    h = n(585632),
    _ = n(2242),
    p = n(985018);

function A(e) {
    let {
        allSubscriptionListings: t
    } = e, {
        editStateId: n,
        guildId: A
    } = (0, a.O)(), [f, j] = o.lZ(n), [N, E] = o.$O(n), C = s.useMemo(() => t.filter(e => e.id !== n), [t, n]), {
        isFullServerGating: b
    } = (0, d.A)(A), T = (0, r.gN)();
    return (0, i.jsx)(c.A, {
        title: p.intl.string(p.t.YNw2Sm),
        description: p.intl.string(p.t.zMW5r0),
        children: (0, i.jsxs)(l.BJc, {
            gap: 24,
            children: [(0, i.jsxs)(l.D0$, {
                disabled: T,
                label: p.intl.string(p.t.DFlDaE),
                description: p.intl.string(p.t.kHalVA),
                children: [(0, i.jsx)(u.A, {
                    channelBenefits: f,
                    intangibleBenefits: N,
                    subscriptionListings: C,
                    onImport: function(e, t) {
                        j(t => t.concat(e)), E(e => e.concat(t))
                    }
                }), (0, i.jsx)(u.q, {
                    guildId: A,
                    onImport: function(e) {
                        j(t => {
                            let n = new Set(t.map(e => {
                                let {
                                    ref_id: t
                                } = e;
                                return t
                            }));
                            return [...t, ...e.filter(e => !n.has(e)).map(e => ({
                                ref_id: e,
                                ref_type: _.bN.CHANNEL
                            }))]
                        })
                    },
                    disabled: T
                })]
            }), (0, i.jsx)(l.D0$, {
                label: p.intl.string(p.t.S2kKzP),
                description: p.intl.string(p.t["5a4AxV"]),
                disabled: T,
                children: e => (0, i.jsxs)(i.Fragment, {
                    children: [b && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(m.A, {
                            "aria-labelledby": e.labelId,
                            disabled: T
                        }), (0, i.jsx)(l.hKd, {
                            size: 8
                        })]
                    }), (0, i.jsx)(g.A, {})]
                })
            }), (0, i.jsx)(l.D0$, {
                label: p.intl.string(p.t.RdwKw7),
                description: p.intl.string(p.t.zAww7V),
                disabled: T,
                children: (0, i.jsx)(h.A, {})
            }), (0, i.jsx)(x.A, {})]
        })
    })
}