/** chunk id: 192380 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(883344),
    s = n(859524),
    o = n(567061),
    d = n(519028),
    c = n(285545),
    u = n(673310),
    A = n(884801),
    _ = n(785720);
let h = function(e) {
    let {
        scrollContainerRef: t
    } = e, n = (0, r.bG)([l.A], () => l.A.notificationItem(), []), {
        showDot: h
    } = (0, d.A)(), m = a.useRef(null), [g, p] = a.useState(!1), {
        data: E,
        loading: I,
        isRefreshing: f,
        handleOnRefresh: C,
        viewabilityConfigCallbackPairs: T
    } = (0, c.i)({
        showDot: h,
        notificationItem: n
    }), N = (0, o.E)();
    a.useEffect(() => () => {
        N()
    }, [N]);
    let S = (0, r.bG)([l.A], () => l.A.hasNewContent(), []),
        x = (0, r.bG)([l.A], () => l.A.isHydrating(), []),
        v = a.useMemo(() => T[0].onViewableItemsChanged, [T]),
        {
            registerItemRef: b
        } = (0, A.N)(E, v, t),
        y = a.useMemo(() => E.some(e => "end" === e.data.kind), [E]),
        O = a.useCallback(() => {
            if (y) return;
            let e = t.current;
            null == e || !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) || g || I || x || (p(!0), (0, s._x)().finally(() => {
                setTimeout(() => {
                    p(!1)
                }, 300)
            }))
        }, [I, g, x, y, t]);
    a.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("scroll", O), () => {
            e.removeEventListener("scroll", O)
        }
    }, [O, t]);
    let L = a.useCallback(() => {
            t.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [t]),
        R = a.useCallback(() => {
            C(), L()
        }, [C, L]),
        P = a.useCallback(e => "loading" === e.data.kind ? (0, i.jsx)("div", {
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
            ref: t => b(e.id, t),
            "data-item-id": e.id,
            children: (0, i.jsx)(u.A, {
                item: e
            })
        }, e.id), [b]);
    return I && 0 === E.length ? (0, i.jsx)("div", {
        style: {
            padding: "32px",
            textAlign: "center"
        },
        children: (0, i.jsx)("div", {
            children: "Loading ICYMI feed..."
        })
    }) : (0, i.jsxs)("div", {
        className: _.k,
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
            className: _.j,
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