/** Chunk was on 47841 **/
/** chunk id: 400281, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _,
    j: () => j
});
var r = n(627968),
    i = n(64700),
    l = n(110259),
    s = n(397927),
    a = n(139286),
    o = n(544199),
    c = n(614692),
    d = n(893148),
    u = n(739929),
    g = n(584508),
    m = n(196169),
    p = n(565447),
    f = n(346076),
    b = n(720281),
    h = n(853922),
    x = n(980197);

function j(e) {
    let {
        onboardingMarketing: t,
        onboardingMarketingError: n
    } = e, i = e => {
        let {
            children: t
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.cGx, {
                className: x.ts
            }), t]
        })
    }, l = (0, r.jsx)(i, {
        children: (0, r.jsx)(f.A, {})
    }, h.u.HOW_IT_WORKS), a = (0, r.jsx)(i, {
        children: (0, r.jsx)(m.A, {})
    }, h.u.BENEFITS);
    return null != n || (null == t ? void 0 : t.sections) == null ? (0, r.jsxs)(r.Fragment, {
        children: [l, a]
    }) : (0, r.jsx)(r.Fragment, {
        children: t.sections.map(e => {
            switch (e.type) {
                case h.u.HOW_IT_WORKS:
                    return l;
                case h.u.BENEFITS:
                    return a;
                case h.u.OTHER_CREATORS:
                    return (0, r.jsx)(i, {
                        children: (0, r.jsx)(p.A, {
                            highlightedCreators: e.creators
                        })
                    }, h.u.OTHER_CREATORS)
            }
        })
    })
}

function _(e) {
    let {
        guild: t
    } = e, n = (0, u.A)(t), {
        eligibilityLoading: m,
        eligibilityError: p,
        eligibility: f
    } = n, h = (0, c.s)(f), {
        isLoading: _,
        error: O,
        creatorMonetizationOnboardingMarketing: v
    } = (0, d.A)(t.id);
    return (i.useEffect(() => {
        (0, o.G)(t.id)
    }, [t.id]), (0, a.A)({
        type: l.ImpressionTypes.PANE,
        name: l.ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
        properties: {
            guild_id: t.id,
            is_owner: n.isGuildOwner,
            is_eligible: n.eligibleForMonetization,
            ineligible_reasons: h
        }
    }, {
        disableTrack: null == t.id || null == f
    }), m || null == f || _) ? (0, r.jsx)(s.y$y, {}) : f.actionRequired ? (0, r.jsx)(b.A, {
        guild: t
    }) : null != p ? (0, r.jsx)(s.wx6, {
        type: "critical",
        children: p.message
    }) : (0, r.jsxs)("div", {
        className: x.kL,
        children: [(0, r.jsx)(g.A, {
            guild: t,
            monetizationEligibility: n
        }), (0, r.jsx)(j, {
            onboardingMarketing: v,
            onboardingMarketingError: O
        })]
    })
}