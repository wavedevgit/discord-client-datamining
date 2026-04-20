/** chunk id: 192380 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(883344),
    s = n(859524),
    o = n(567061),
    d = n(519028),
    c = n(285545),
    u = n(673310),
    A = n(884801),
    h = n(317039);
let _ = function(e) {
    let {
        scrollContainerRef: t
    } = e, n = (0, a.bG)([r.A], () => r.A.notificationItem(), []), {
        showDot: _
    } = (0, d.A)(), m = l.useRef(null), [g, p] = l.useState(!1), {
        data: E,
        loading: I,
        isRefreshing: f,
        handleOnRefresh: C,
        viewabilityConfigCallbackPairs: T
    } = (0, c.i)({
        showDot: _,
        notificationItem: n
    }), N = (0, o.E)();
    l.useEffect(() => () => {
        N()
    }, [N]);
    let S = (0, a.bG)([r.A], () => r.A.hasNewContent(), []),
        x = (0, a.bG)([r.A], () => r.A.isHydrating(), []),
        b = l.useMemo(() => T[0].onViewableItemsChanged, [T]),
        {
            registerItemRef: v
        } = (0, A.N)(E, b, t),
        y = l.useMemo(() => E.some(e => "end" === e.data.kind), [E]),
        O = l.useCallback(() => {
            if (y) return;
            let e = t.current;
            null == e || !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) || g || I || x || (p(!0), (0, s._x)().finally(() => {
                setTimeout(() => {
                    p(!1)
                }, 300)
            }))
        }, [I, g, x, y, t]);
    l.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("scroll", O), () => {
            e.removeEventListener("scroll", O)
        }
    }, [O, t]);
    let L = l.useCallback(() => {
            t.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [t]),
        R = l.useCallback(() => {
            C(), L()
        }, [C, L]),
        P = l.useCallback(e => "loading" === e.data.kind ? (0, i.jsx)("div", {
            style: {
                padding: "32px",
                textAlign: "center"
            },
            children: (0, i.jsx)("div", {
                children: "Loading ICYMI feed..."
            })
        }, e.id) : "bottomLoading" === e.data.kind ? (0, i.jsx)("div", {
            style: {
                padding: "16px",
                textAlign: "center"
            },
            children: (0, i.jsx)("div", {
                children: "Loading more..."
            })
        }, e.id) : "end" === e.data.kind ? (0, i.jsx)("div", {
            style: {
                padding: "32px",
                textAlign: "center",
                color: "#949ba4"
            },
            children: (0, i.jsx)("div", {
                children: "You're all caught up!"
            })
        }, e.id) : (0, i.jsx)("div", {
            ref: t => v(e.id, t),
            "data-item-id": e.id,
            children: (0, i.jsx)(u.A, {
                item: e
            })
        }, e.id), [v]);
    return I && 0 === E.length ? (0, i.jsx)("div", {
        style: {
            padding: "32px",
            textAlign: "center"
        },
        children: (0, i.jsx)("div", {
            children: "Loading ICYMI feed..."
        })
    }) : (0, i.jsxs)("div", {
        className: h.k,
        children: [S && !f && (0, i.jsx)("div", {
            style: {
                position: "sticky",
                top: 0,
                zIndex: 10,
                padding: "8px",
                textAlign: "center"
            },
            children: (0, i.jsx)("button", {
                onClick: R,
                style: {
                    background: "#5865f2",
                    color: "white",
                    border: "none",
                    borderRadius: "16px",
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500
                },
                children: "New content available"
            })
        }), (0, i.jsxs)("div", {
            ref: m,
            className: h.j,
            children: [E.map(e => P(e)), !y && (g || x) && (0, i.jsx)("div", {
                style: {
                    padding: "16px",
                    textAlign: "center"
                },
                children: (0, i.jsx)("div", {
                    style: {
                        color: "#949ba4"
                    },
                    children: "Loading more..."
                })
            })]
        })]
    })
}