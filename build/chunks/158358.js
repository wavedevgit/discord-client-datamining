/** Chunk was on web.js **/
/** chunk id: 158358, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
}), n(896048), n(492834);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    l = n(77468),
    c = n(736653),
    u = n(573648),
    d = n(370480),
    f = n(882997),
    p = n(169869),
    _ = n(773669),
    h = n(962173),
    m = n(975571),
    g = n(652215),
    E = n(783419),
    y = n(985018),
    b = n(410280);

function O(e) {
    var t;
    let {
        account: n,
        refreshed: s,
        handleRefresh: l
    } = e, [c, u] = i.useState(!1), f = null != (t = n.metadata) ? t : {}, h = (0, a.bG)([_.default], () => _.default.locale), O = i.useCallback(async () => {
        u(!0);
        try {
            await l(n)
        } finally {
            u(!1)
        }
    }, [n, l]), v = null;
    switch (n.type) {
        case g.fg2.REDDIT:
            v = (0, p.xE)(f, b.Nz);
            break;
        case g.fg2.STEAM:
            v = (0, p.dy)(f, b.Nz);
            break;
        case g.fg2.TWITTER:
            v = (0, p.ED)(f, b.Nz);
            break;
        case g.fg2.EBAY:
            v = (0, p.ub)(f, b.Nz);
            break;
        case g.fg2.PAYPAL:
            v = (0, p.gZ)(f, b.Nz);
            break;
        case g.fg2.TIKTOK:
            v = (0, p.HU)(f, b.Nz)
    }
    let A = (0, d.An)(f[E.pK.CREATED_AT], h),
        I = null,
        S = y.intl.string(y.t.wzzjk9);
    return (null == v || 0 === v.length) && null == A && (I = (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: y.intl.format(y.t.Up2ni7, {
            helpdeskUrl: m.A.getArticleURL(g.MVz.CONNECTION_DETAILS)
        })
    }, "label"), S = y.intl.string(y.t["LVh3/5"])), s && (S = y.intl.string(y.t.i4jeWR)), (0, r.jsxs)("div", {
        className: b.tJ,
        children: [I, null == v ? void 0 : v.map((e, t) => (0, r.jsxs)(r.Fragment, {
            children: [e, t < v.length - 1 ? (0, r.jsx)("span", {
                className: b.Om
            }) : null]
        })), null != v && v.length > 0 && null != A ? (0, r.jsx)("div", {
            className: b.Om
        }) : null, null != A ? (0, r.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: y.intl.format(y.t["9rfonh"], {
                date: A
            })
        }, "member-since") : null, (0, r.jsx)("div", {
            className: b.jy,
            children: (0, r.jsx)(o.Button, {
                size: "sm",
                variant: s ? "active" : "secondary",
                loading: c,
                disabled: s,
                "aria-label": y.intl.string(y.t.sCkLYH),
                onClick: O,
                text: S
            }, "refresh-button")
        })]
    })
}

function v(e) {
    let {
        account: t,
        handleRefresh: n,
        refreshedAccountIds: a
    } = e, [d, p] = i.useState(t.visibility), [_, h] = i.useState(t.metadataVisibility), m = (0, c.Ay)();

    function g(e) {
        let {
            verified: n
        } = t, r = +!!e;
        if (e && !n) {
            p(r), (0, f.A)({
                platformType: t.type,
                location: "User Settings"
            });
            return
        }
        p(r), l.A.setVisibility(t.type, t.id, r)
    }

    function E(e) {
        let {
            verified: n
        } = t, r = +!!e;
        if (e && !n) {
            h(r), (0, f.A)({
                platformType: t.type,
                location: "User Settings"
            });
            return
        }
        h(r), l.A.setMetadataVisibility(t.type, t.id, r)
    }
    i.useEffect(() => {
        p(t.visibility), h(t.metadataVisibility)
    }, [t]);
    let v = u.A.get(t.type),
        A = !0 === v.hasMetadata;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: b.gd,
            children: [(0, r.jsx)("img", {
                alt: v.name,
                className: b.gj,
                src: (0, s.Mw)(m) ? v.icon.darkSVG : v.icon.lightSVG
            }), (0, r.jsxs)("div", {
                className: b.$n,
                children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(o.dOG, {
                        checked: 1 === d,
                        onChange: g,
                        label: v.name
                    }), A && (0, r.jsx)(O, {
                        account: t,
                        refreshed: a.includes(t.id),
                        handleRefresh: n
                    })]
                }), A && (0, r.jsx)(o.dOG, {
                    disabled: 1 !== d || null == t.metadata,
                    checked: 1 === _,
                    onChange: E,
                    label: y.intl.string(y.t["3l78wo"])
                })]
            })]
        }), (0, r.jsx)(o.cGx, {})]
    })
}

function A() {
    let e = (0, a.bG)([h.A], () => h.A.getAccounts()),
        t = i.useMemo(() => e.filter(e => u.A.isSupported(e.type)), [e]),
        [n, s] = i.useState([]),
        c = i.useCallback(e => l.A.refresh(e.type, e.id).finally(() => {
            s(t => [...t, e.id])
        }), []);
    return 0 === t.length ? null : (0, r.jsx)(o.nVY, {
        className: b.kL,
        label: y.intl.string(y.t.aw0GVS),
        children: t.map(e => (0, r.jsx)(v, {
            account: e,
            handleRefresh: c,
            refreshedAccountIds: n
        }, e.id))
    })
}