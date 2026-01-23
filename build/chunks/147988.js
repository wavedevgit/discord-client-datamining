/** Chunk was on 47841 **/
/** chunk id: 147988, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(555337),
    o = n(658446),
    c = n(946171),
    d = n(716610),
    u = n(985018),
    g = n(840966);

function m(e) {
    let {
        fetchDiscoveryData: t,
        settingsView: n,
        requireTerms: m,
        rules: p
    } = e, f = (0, l.bG)([a.A], () => a.A.getProps().guild);
    if (i.useEffect(() => {
            null != f && t(f.id)
        }, [t, f]), null == f) return null;
    switch (n) {
        case d.v.DISQUALIFIED:
            return (0, r.jsx)(o.A, {
                guild: f,
                guildId: f.id,
                headerContent: (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: g.w,
                        children: u.intl.format(u.t.n1LDQM, {
                            removedHook: (e, t) => (0, r.jsx)("strong", {
                                className: g.O,
                                children: e
                            }, t)
                        })
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: u.intl.string(u.t.Qgaw3d)
                    })]
                })
            });
        case d.v.ELIGIBLE_DISABLED:
        case d.v.ELIGIBLE_ENABLED:
            return (0, r.jsx)(c.s, {
                requireTerms: m,
                rules: p,
                settingsView: n
            });
        case d.v.INELIGIBLE:
            return (0, r.jsx)(o.A, {
                guild: f,
                guildId: f.id,
                headerContent: (0, r.jsx)(s.Heading, {
                    variant: "heading-md/semibold",
                    children: u.intl.format(u.t["+6Hylv"], {
                        doesNotHook: (e, t) => (0, r.jsx)("strong", {
                            className: g.O,
                            children: e
                        }, t)
                    })
                })
            });
        default:
            return (0, r.jsx)(s.y$y, {})
    }
}