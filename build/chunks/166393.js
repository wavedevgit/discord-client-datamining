/** chunk id: 166393, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(172218),
    o = n(724002),
    c = n(287174),
    d = n(487899),
    u = n(239314),
    p = n(311907),
    h = n(397927),
    m = n(111162),
    g = n(354138),
    _ = n(111042),
    b = n(412461),
    f = n(867333),
    x = n(487953),
    v = n(111737),
    j = n(652215),
    A = n(789113);
let y = c.K.APPLICATION_DIRECTORY;

function C(e) {
    let {
        collection: t,
        index: n,
        onSelectApplication: i
    } = e, o = function(e) {
        let {
            collectionId: t,
            index: n
        } = e, [r, i] = l.useState(!1), a = (0, s.K)(e => {
            e && i(!0)
        });
        return l.useEffect(() => {
            r && (0, b.TR)(j.HAw.APP_DIRECTORY_COLLECTION_VIEWED, {
                collection_id: t,
                collection_position: n
            })
        }, [r, t, n]), a
    }({
        collectionId: t.id,
        index: n
    }), c = l.useCallback((e, r) => {
        (0, b.TR)(j.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
            collection_id: t.id,
            item_position: r,
            collection_position: n,
            application_id: e
        }), i(e)
    }, [t.id, n, i]);
    return (0, r.jsxs)("div", {
        ref: o,
        children: [(0, r.jsx)(h.Heading, {
            className: a()(A.Gf, {
                [A.SH]: 0 === n
            }),
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: t.title
        }), (0, r.jsx)("div", {
            className: A.Qs,
            children: t.application_directory_collection_items.map((e, t) => e.type !== d.L.APPLICATION || null == e.application ? null : (0, r.jsx)(x.A, {
                application: e.application,
                onSelectApplication: () => c(e.application.id, t),
                showCategory: !0
            }, e.id))
        })]
    })
}
let O = function(e) {
    let {
        onSelectApplication: t
    } = e, n = (0, p.bG)([m.default], () => m.default.onlyShowPreviewAppCollections) ? o.W.PREVIEW : o.W.ACTIVE, i = (0, p.bG)([_.A], () => _.A.getFetchState({
        surface: y,
        activeState: n
    })), a = (0, p.bG)([_.A], () => _.A.getCollections({
        surface: y,
        activeState: n
    }));
    l.useEffect(() => {
        g.An({
            surface: y,
            activeState: n
        })
    }, [n]);
    let s = l.useMemo(() => null == a ? void 0 : a.filter(e => e.type !== u.Y.GALLERY), [a]);
    return i === _.e.ERROR ? (0, r.jsx)("div", {
        className: A.Un,
        children: (0, r.jsx)(v.A, {
            className: A.z3
        })
    }) : (0, r.jsx)(f.A, {
        loading: i === _.e.FETCHING,
        children: null == s ? void 0 : s.map((e, n) => (0, r.jsx)(C, {
            collection: e,
            index: n,
            onSelectApplication: t
        }, n))
    })
}