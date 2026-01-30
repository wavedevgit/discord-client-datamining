/** chunk id: 599813, original params: e,t,n (module,exports,require) **/
n.d(t, {
    c: () => v
});
var r = n(627968),
    l = n(64700),
    i = n(91871),
    a = n.n(i),
    o = n(23339),
    s = n(311907),
    c = n(827734),
    u = n(397927),
    d = n(962125),
    f = n(287809),
    p = n(474090),
    g = n(656088),
    m = n(971778),
    _ = n(342887),
    h = n(973947),
    y = n(985018),
    A = n(32425);
let b = [51],
    E = [y.t.OpqAok];

function v(e) {
    let {
        columns: t,
        handleScroll: n,
        voiceListRef: l,
        showSectionHeaders: i = !1,
        query: a
    } = e, o = x(), v = (0, s.bG)([f.default], () => (0, p.ki)(f.default.getCurrentUser())), C = S(a, v), N = Math.ceil(C.length / t), {
        isNativeModuleLoaded: I,
        isNativeModuleLoading: j,
        catalogLastFetchTime: T
    } = (0, s.cf)([m.A], () => ({
        isNativeModuleLoaded: m.A.isNativeModuleLoaded(),
        isNativeModuleLoading: m.A.isNativeModuleLoading(),
        catalogLastFetchTime: m.A.getCatalogLastFetchTime()
    }));
    return a && 0 === C.length ? (0, r.jsxs)("div", {
        className: A.nm,
        children: [(0, r.jsx)(u.$p$, {
            width: 40,
            height: 40,
            size: "custom",
            color: c.A.colors.ICON_MUTED
        }), (0, r.jsx)(u.Heading, {
            variant: "heading-sm/medium",
            color: "text-muted",
            children: y.intl.string(y.t.ZzukHk)
        })]
    }) : o ? (0, r.jsxs)("div", {
        className: A.nm,
        children: [(0, r.jsx)(u.id, {
            width: 40,
            height: 40,
            size: "custom",
            color: c.A.colors.ICON_MUTED
        }), (0, r.jsx)(u.Heading, {
            variant: "heading-md/normal",
            color: "text-muted",
            children: y.intl.string(y.t.DpZNJw)
        }), (0, r.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: y.intl.format(y.t["5afO9U"], {
                onClick: I ? _.st : _.md
            })
        })]
    }) : j || null == T ? (0, r.jsx)("div", {
        className: A.Lq,
        children: (0, r.jsx)(u.y$y, {
            type: u.y$y.Type.CHASING_DOTS,
            animated: !0
        })
    }) : (0, r.jsx)(d.A, {
        fade: !0,
        className: A.kL,
        renderRow: e => {
            let n = e * t,
                l = C.slice(n, n + t);
            return (0, r.jsx)(O, {
                children: l.map((n, l) => (0, r.jsx)(h.I, {
                    voiceFilter: n,
                    hasNitro: v,
                    analyticsContext: {
                        reason: g.O.USER_SELECTION,
                        gridRows: N,
                        gridColumns: t,
                        interactedRow: e,
                        interactedColumn: l
                    }
                }, null == n ? void 0 : n.id))
            }, e)
        },
        renderSectionHeader: !1 === i ? void 0 : e => (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: A.wx,
            children: y.intl.string(E[e])
        }),
        sectionHeaderHeight: !1 === i ? void 0 : e => b[e],
        rowCount: N,
        rowHeight: 130,
        onScroll: n,
        ref: l,
        sectionFooterHeight: 40 * !v
    })
}

function O(e) {
    let {
        children: t
    } = e, n = l.useRef(null);
    return (0, r.jsx)("div", {
        ref: n,
        className: A.nM,
        children: (0, r.jsx)(u.xpW, {
            containerRef: n,
            children: t
        })
    })
}
let x = () => (0, s.bG)([m.A], () => {
        var e;
        return !Object.keys(null != (e = m.A.getVoiceFilterModels()) ? e : {}).length && (m.A.getCatalogFetchFailed() || m.A.hasNativeModuleFailed())
    }),
    S = (e, t) => (0, s.yK)([m.A], () => {
        var n;
        let r, l = m.A.getVoiceFilters(),
            i = m.A.getSortedVoiceFilters();
        return n = t ? Object.values(l) : i, "" === (r = (0, o.sS)(e.toLowerCase())) ? n : n.filter(e => {
            let {
                name: t
            } = e, n = (0, o.sS)(y.intl.string(t)).toLowerCase();
            return a()(r, n)
        })
    }, [e, t])