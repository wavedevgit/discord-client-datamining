/** chunk id: 299579 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n.n(s),
    d = n(397927),
    c = n(770178),
    u = n(954571),
    A = n(403362),
    h = n(449054),
    _ = n(351022),
    m = n(282026),
    p = n(965660),
    g = n(19925),
    E = n(44440),
    I = n(22862),
    f = n(416082),
    C = n(418616),
    T = n(599907),
    N = n(652215),
    S = n(867778);
let x = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 202
    }),
    v = Object.freeze({
        top: 0,
        bottom: 0,
        left: 32,
        right: 32
    }),
    b = {
        page: N.liQ.GUILD_DISCOVERY,
        object: N.ZSU.CARD,
        section: N.JJy.DISCOVER_SEARCH
    },
    y = o().throttle(h.Cf, 1e3, {
        leading: !1,
        trailing: !0
    });

function O(e) {
    let {
        loadId: t,
        onGuildCardSeen: n,
        onGuildCardClick: a
    } = e, {
        guildIds: o,
        loading: h,
        searchResultsQuery: N,
        loadMore: O,
        searchCategoryId: L
    } = (0, g.I)({
        loadId: t
    }), R = 0 === o.length && !h, P = r.useContext(u.AnalyticsContext), [D, M] = r.useState((0, p.YP)()), [j, w] = r.useState(!0), U = r.useRef(j), [G, k] = r.useState(3), V = r.useRef(G), B = r.useRef(null), H = r.useCallback(e => {
        null == e || R || h || 336 * (o.length / G) <= e.height && O()
    }, [R, h, o.length, G, O]), F = r.useCallback(e => {
        let t = e.contentRect;
        if (null == t) return;
        let n = t.width;
        n < 1024 && U.current ? (U.current = !1, w(!1)) : n > 1024 && !U.current && (U.current = !0, w(!0));
        let i = 1;
        for (n -= 450 * !!j, n -= 280; n > 0;) n -= 264, i += 1;
        i !== V.current && (V.current = i, k(i)), H(t)
    }, [j, H]), Y = (0, c.w)(F, [j, H]);
    r.useEffect(() => {
        M((0, p.YP)())
    }, [N]), r.useEffect(() => {
        y({
            loadId: t,
            searchId: D,
            query: N,
            guildResults: o.map(_.A.getGuild).filter(A.Vq),
            analyticsContext: P,
            categoryId: L
        })
    }, [P, o, t, L, D, N]);
    let W = r.useCallback(e => n(e, L), [n, L]),
        K = r.useMemo(() => h ? [o.length, 0] : [o.length], [o.length, h]),
        q = r.useCallback((e, n, r) => {
            switch (e) {
                case 0:
                    return (0, i.jsxs)("div", {
                        style: {
                            paddingLeft: n.left,
                            width: n.width - 16
                        },
                        className: l()(S.R_, {
                            [S.Ze]: !j
                        }),
                        children: [!j && (0, i.jsxs)("div", {
                            className: S.eW,
                            children: [(0, i.jsx)(I.A, {
                                loadId: t
                            }), (0, i.jsx)(C.A, {
                                loadId: t
                            })]
                        }), R && (0, i.jsx)(f.A, {
                            loadId: t
                        })]
                    }, r);
                case 1:
                    return (0, i.jsx)(d.y$y, {
                        className: l()(S.u1, {
                            [S.qx]: j
                        })
                    }, r)
            }
        }, [R, j, t]),
        z = r.useCallback(e => {
            switch (e) {
                case 0:
                    let t = j ? 16 : 68;
                    return R ? t + 448 : t;
                case 1:
                    return 120;
                default:
                    throw Error(`[getSectionHeight] Failed for section: ${e}`)
            }
        }, [R, j]),
        $ = r.useCallback((e, t) => {
            switch (e) {
                case 0:
                    return o[t];
                case 1:
                    return "loading";
                default:
                    throw Error(`[getItemKey] Failed for section: ${e}`)
            }
        }, [o]),
        Q = r.useCallback(e => {
            switch (e) {
                case 0:
                    return 320;
                case 1:
                    return 0;
                default:
                    throw Error(`[getItemHeight] Failed for section: ${e}`)
            }
        }, []),
        X = r.useCallback(async (e, t, n, i) => {
            await a(e, t, n, i);
            let r = B.current?.getScrollerState()?.scrollTop;
            null != r && m.A.setState({
                scrollPosition: r
            })
        }, [a]),
        Z = r.useCallback((e, t, n, r) => {
            if (0 !== e) return null;
            {
                let e = o[t];
                return (0, i.jsx)("div", {
                    style: n,
                    children: (0, i.jsx)(T.Ay, {
                        guildId: e,
                        onClick: async e => await X(e, t, L, b),
                        onView: e => W(e)
                    })
                }, r)
            }
        }, [o, X, W, L]);
    r.useEffect(() => {
        let e = B.current;
        return () => {
            let t = e?.getScrollerState()?.scrollTop;
            null != t && m.A.setState({
                scrollPosition: t
            })
        }
    }, []), r.useLayoutEffect(() => {
        let e = m.A.getField("scrollPosition");
        null != e && setTimeout(() => {
            B.current?.scrollTo({
                to: e,
                animate: !1,
                callback: () => {
                    m.A.setState({
                        scrollPosition: null
                    })
                }
            })
        })
    }, []);
    let J = r.useMemo(() => (0, s.debounce)(() => {
            let e = B.current?.getScrollerState();
            if (null == e) return;
            let t = e.scrollTop + e.offsetHeight;
            e.scrollHeight - t < 240 && O()
        }, 100, {
            leading: !0
        }), [O]),
        ee = j ? x : v;
    return (0, i.jsx)("div", {
        className: S.kL,
        ref: Y,
        children: (0, i.jsx)(d.a0_, {
            ref: B,
            className: S.kf,
            sections: K,
            columns: G,
            itemGutter: 16,
            padding: ee,
            renderItem: Z,
            renderSection: q,
            getSectionHeight: z,
            getItemKey: $,
            getItemHeight: Q,
            chunkSize: 24,
            onScroll: J,
            renderAccessory: e => j ? (0, i.jsx)("div", {
                className: S.pz,
                style: {
                    height: e
                },
                children: (0, i.jsxs)("div", {
                    className: S.wp,
                    children: [(0, i.jsx)("div", {
                        className: S.jp,
                        children: (0, i.jsx)(C.A, {
                            loadId: t
                        })
                    }), (0, i.jsx)(E.A, {
                        loadId: t
                    })]
                })
            }) : null
        })
    })
}