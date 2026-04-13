/** chunk id: 933137 params = (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(460760),
    o = n(408213),
    d = n(840387),
    c = n(71393),
    u = n(975571),
    m = n(555337),
    g = n(523386),
    x = n(818191),
    h = n(564864),
    _ = n(915417),
    A = n(147988),
    p = n(366846),
    f = n(306846),
    j = n(493781),
    N = n(894222),
    E = n(652215),
    T = n(985018),
    C = n(691742);

function I(e) {
    let {
        pendingState: t
    } = e, n = s.useRef(!1), l = s.useCallback(async e => {
        if (!n.current) try {
            await (0, g.$)(e), (0, x.i)(e), (0, a.Mu)(), (0, a.mo)(e)
        } finally {
            n.current = !0
        }
    }, [n]);
    switch (t.joinType) {
        case N.J.INVITE:
            return (0, i.jsx)(p.D, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case N.J.APPLY:
            return (0, i.jsx)(_.g, {
                pendingFields: t.pendingVerificationFields
            });
        case N.J.DISCOVERABLE:
            return (0, i.jsx)(A.t, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules
            })
    }
}

function b(e) {
    let {
        guildId: t
    } = e, {
        nsfwLevel: n,
        ownerConfiguredContentLevel: a
    } = (0, l.cf)([c.A], () => ({
        nsfwLevel: c.A.getGuild(t)?.nsfwLevel,
        ownerConfiguredContentLevel: c.A.getGuild(t)?.ownerConfiguredContentLevel
    })), o = (0, l.bG)([f.A], () => f.A.pendingState?.isAgeRestricted), d = (0, l.bG)([f.A], () => f.A.pendingState?.joinType), m = s.useCallback(e => {
        h.A.setIsAgeRestricted(t, e)
    }, [t]), g = d === N.J.DISCOVERABLE || n === E.ftr.AGE_RESTRICTED && a !== E.ftr.AGE_RESTRICTED;
    return (0, i.jsx)(r.dOG, {
        label: T.intl.string(T.t.N9xEJF),
        description: T.intl.format(T.t.iyQQ62, {
            helpArticleLink: u.A.getArticleURL(E.MVz.NSFW_SERVER_AGE_RESTRICTION)
        }),
        checked: o,
        onChange: m,
        disabled: g
    })
}

function v() {
    let e = (0, l.bG)([m.A], () => m.A.getProps().guild),
        t = (0, l.bG)([f.A], () => f.A.pendingState),
        n = (0, d.Z)();
    s.useEffect(() => {
        e?.id != null && o.Ay.fetchVerificationForm(e.id)
    }, [e?.id]);
    let a = s.useCallback(t => {
        e?.id != null && h.A.setSelectedJoinType(e.id, t)
    }, [e?.id]);
    if (null == e || null == t) return null;
    let {
        joinType: c
    } = t;
    return (0, i.jsxs)(r.BJc, {
        gap: 32,
        children: [(0, i.jsx)(r.Heading, {
            color: "text-strong",
            variant: "heading-lg/semibold",
            children: T.intl.string(T.t.YJlvBM)
        }), (0, i.jsx)(j.G, {
            onTypePicked: a,
            activeType: c,
            guild: e
        }), (0, i.jsx)("div", {
            className: C.y
        }), !n && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(b, {
                guildId: e.id
            }), (0, i.jsx)("div", {
                className: C.y
            })]
        }), (0, i.jsx)("div", {
            children: (0, i.jsx)(I, {
                pendingState: t
            })
        })]
    })
}