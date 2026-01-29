/** Chunk was on 2827 **/
/** chunk id: 158358, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048), n(492834);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(582754),
    a = n(397927),
    o = n(77468),
    c = n(736653),
    d = n(573648),
    u = n(370480),
    _ = n(882997),
    p = n(169869),
    m = n(773669),
    g = n(962173),
    A = n(975571),
    f = n(652215),
    b = n(783419),
    h = n(985018),
    E = n(410280);

function O(e) {
    var t;
    let {
        account: n,
        refreshed: s,
        handleRefresh: o
    } = e, [c, d] = i.useState(!1), _ = null != (t = n.metadata) ? t : {}, g = (0, l.bG)([m.default], () => m.default.locale), O = i.useCallback(async () => {
        d(!0);
        try {
            await o(n)
        } finally {
            d(!1)
        }
    }, [n, o]), C = null;
    switch (n.type) {
        case f.fg2.REDDIT:
            C = (0, p.xE)(_, E.Nz);
            break;
        case f.fg2.STEAM:
            C = (0, p.dy)(_, E.Nz);
            break;
        case f.fg2.TWITTER:
            C = (0, p.ED)(_, E.Nz);
            break;
        case f.fg2.EBAY:
            C = (0, p.ub)(_, E.Nz);
            break;
        case f.fg2.PAYPAL:
            C = (0, p.gZ)(_, E.Nz);
            break;
        case f.fg2.TIKTOK:
            C = (0, p.HU)(_, E.Nz)
    }
    let x = (0, u.An)(_[b.pK.CREATED_AT], g),
        S = null,
        T = h.intl.string(h.t.wzzjk9);
    return (null == C || 0 === C.length) && null == x && (S = (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: h.intl.format(h.t.Up2ni7, {
            helpdeskUrl: A.A.getArticleURL(f.MVz.CONNECTION_DETAILS)
        })
    }, "label"), T = h.intl.string(h.t["LVh3/5"])), s && (T = h.intl.string(h.t.i4jeWR)), (0, r.jsxs)("div", {
        className: E.tJ,
        children: [S, null == C ? void 0 : C.map((e, t) => (0, r.jsxs)(r.Fragment, {
            children: [e, t < C.length - 1 ? (0, r.jsx)("span", {
                className: E.Om
            }) : null]
        })), null != C && C.length > 0 && null != x ? (0, r.jsx)("div", {
            className: E.Om
        }) : null, null != x ? (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: h.intl.format(h.t["9rfonh"], {
                date: x
            })
        }, "member-since") : null, (0, r.jsx)("div", {
            className: E.jy,
            children: (0, r.jsx)(a.Button, {
                size: "sm",
                variant: s ? "active" : "secondary",
                loading: c,
                disabled: s,
                "aria-label": h.intl.string(h.t.sCkLYH),
                onClick: O,
                text: T
            }, "refresh-button")
        })]
    })
}

function C(e) {
    let {
        account: t,
        handleRefresh: n,
        refreshedAccountIds: l
    } = e, [u, p] = i.useState(t.visibility), [m, g] = i.useState(t.metadataVisibility), A = (0, c.Ay)();
    i.useEffect(() => {
        p(t.visibility), g(t.metadataVisibility)
    }, [t]);
    let f = d.A.get(t.type),
        b = !0 === f.hasMetadata;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: E.gd,
            children: [(0, r.jsx)("img", {
                alt: f.name,
                className: E.gj,
                src: (0, s.Mw)(A) ? f.icon.darkSVG : f.icon.lightSVG
            }), (0, r.jsxs)("div", {
                className: E.$n,
                children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(a.dOG, {
                        checked: 1 === u,
                        onChange: function(e) {
                            let {
                                verified: n
                            } = t, r = +!!e;
                            if (e && !n) {
                                p(r), (0, _.A)({
                                    platformType: t.type,
                                    location: "User Settings"
                                });
                                return
                            }
                            p(r), o.A.setVisibility(t.type, t.id, r)
                        },
                        label: f.name
                    }), b && (0, r.jsx)(O, {
                        account: t,
                        refreshed: l.includes(t.id),
                        handleRefresh: n
                    })]
                }), b && (0, r.jsx)(a.dOG, {
                    disabled: 1 !== u || null == t.metadata,
                    checked: 1 === m,
                    onChange: function(e) {
                        let {
                            verified: n
                        } = t, r = +!!e;
                        if (e && !n) {
                            g(r), (0, _.A)({
                                platformType: t.type,
                                location: "User Settings"
                            });
                            return
                        }
                        g(r), o.A.setMetadataVisibility(t.type, t.id, r)
                    },
                    label: h.intl.string(h.t["3l78wo"])
                })]
            })]
        }), (0, r.jsx)(a.cGx, {})]
    })
}

function x() {
    let e = (0, l.bG)([g.A], () => g.A.getAccounts()),
        t = i.useMemo(() => e.filter(e => d.A.isSupported(e.type)), [e]),
        [n, s] = i.useState([]),
        c = i.useCallback(e => o.A.refresh(e.type, e.id).finally(() => {
            s(t => [...t, e.id])
        }), []);
    return 0 === t.length ? null : (0, r.jsx)(a.nVY, {
        className: E.kL,
        label: h.intl.string(h.t.aw0GVS),
        children: t.map(e => (0, r.jsx)(C, {
            account: e,
            handleRefresh: c,
            refreshedAccountIds: n
        }, e.id))
    })
}