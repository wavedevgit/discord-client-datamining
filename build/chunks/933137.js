/** Chunk was on 47841 **/
/** chunk id: 933137, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(460760),
    o = n(408213),
    c = n(840387),
    d = n(71393),
    u = n(975571),
    g = n(555337),
    m = n(523386),
    p = n(818191),
    f = n(564864),
    b = n(915417),
    h = n(147988),
    x = n(366846),
    j = n(306846),
    _ = n(493781),
    O = n(894222),
    v = n(652215),
    y = n(985018),
    A = n(771661);

function E(e) {
    let {
        pendingState: t
    } = e, n = i.useRef(!1), l = i.useCallback(async e => {
        if (!n.current) try {
            await (0, m.$)(e), (0, p.i)(e), (0, a.Mu)(), (0, a.mo)(e)
        } finally {
            n.current = !0
        }
    }, [n]);
    switch (t.joinType) {
        case O.J.INVITE:
            return (0, r.jsx)(x.D, {
                requireTerms: t.requireTerms,
                rules: t.termRules
            });
        case O.J.APPLY:
            return (0, r.jsx)(b.g, {
                pendingFields: t.pendingVerificationFields
            });
        case O.J.DISCOVERABLE:
            return (0, r.jsx)(h.t, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules
            })
    }
}

function N(e) {
    let {
        guildId: t
    } = e, {
        nsfwLevel: n,
        ownerConfiguredContentLevel: a
    } = (0, l.cf)([d.A], () => {
        var e, n;
        return {
            nsfwLevel: null == (e = d.A.getGuild(t)) ? void 0 : e.nsfwLevel,
            ownerConfiguredContentLevel: null == (n = d.A.getGuild(t)) ? void 0 : n.ownerConfiguredContentLevel
        }
    }), o = (0, l.bG)([j.A], () => {
        var e;
        return null == (e = j.A.pendingState) ? void 0 : e.isAgeRestricted
    }), c = i.useCallback(e => {
        f.A.setIsAgeRestricted(t, e)
    }, [t]), g = n === v.ftr.AGE_RESTRICTED && a !== v.ftr.AGE_RESTRICTED;
    return (0, r.jsx)(s.dOG, {
        label: y.intl.string(y.t.N9xEJF),
        description: y.intl.format(y.t.iyQQ62, {
            helpArticleLink: u.A.getArticleURL(v.MVz.NSFW_SERVER_AGE_RESTRICTION)
        }),
        checked: o,
        onChange: c,
        disabled: g
    })
}

function S() {
    let e = (0, l.bG)([g.A], () => g.A.getProps().guild),
        t = (0, l.bG)([j.A], () => j.A.pendingState),
        n = (0, c.Z)();
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && o.Ay.fetchVerificationForm(e.id)
    }, [null == e ? void 0 : e.id]);
    let a = i.useCallback(t => {
        (null == e ? void 0 : e.id) != null && f.A.setSelectedJoinType(e.id, t)
    }, [null == e ? void 0 : e.id]);
    if (null == e || null == t) return null;
    let {
        joinType: d
    } = t;
    return (0, r.jsxs)(s.BJc, {
        gap: 32,
        children: [(0, r.jsx)(s.Heading, {
            color: "text-strong",
            variant: "heading-lg/semibold",
            children: y.intl.string(y.t.YJlvBM)
        }), (0, r.jsx)(_.G, {
            onTypePicked: a,
            activeType: d,
            guild: e
        }), (0, r.jsx)("div", {
            className: A.y
        }), !n && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(N, {
                guildId: e.id
            }), (0, r.jsx)("div", {
                className: A.y
            })]
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)(E, {
                pendingState: t
            })
        })]
    })
}