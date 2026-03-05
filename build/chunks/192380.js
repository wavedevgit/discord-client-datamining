/** chunk id: 192380, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(883344),
    s = n(859524),
    o = n(567061),
    d = n(519028),
    c = n(285545),
    u = n(673310),
    A = n(884801),
    h = n(739954);
let _ = function(e) {
    let {
        scrollContainerRef: t
    } = e, n = (0, l.bG)([a.A], () => a.A.notificationItem(), []), {
        showDot: _
    } = (0, d.A)(), m = r.useRef(null), [g, p] = r.useState(!1), {
        data: E,
        loading: I,
        isRefreshing: f,
        handleOnRefresh: C,
        viewabilityConfigCallbackPairs: T
    } = (0, c.i)({
        showDot: _,
        notificationItem: n
    }), N = (0, o.E)();
    r.useEffect(() => () => {
        N()
    }, [N]);
    let S = (0, l.bG)([a.A], () => a.A.hasNewContent(), []),
        x = (0, l.bG)([a.A], () => a.A.isHydrating(), []),
        v = r.useMemo(() => T[0].onViewableItemsChanged, [T]),
        {
            registerItemRef: y
        } = (0, A.N)(E, v, t),
        b = r.useMemo(() => E.some(e => "end" === e.data.kind), [E]),
        O = r.useCallback(() => {
            if (b) return;
            let e = t.current;
            null == e || !(e.scrollHeight - e.scrollTop - e.clientHeight < 300) || g || I || x || (p(!0), (0, s._x)().finally(() => {
                setTimeout(() => {
                    p(!1)
                }, 300)
            }))
        }, [I, g, x, b, t]);
    r.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("scroll", O), () => {
            e.removeEventListener("scroll", O)
        }
    }, [O, t]);
    let L = r.useCallback(() => {
            t.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [t]),
        R = r.useCallback(() => {
            C(), L()
        }, [C, L]),
        P = r.useCallback(e => "loading" === e.data.kind ? (0, i.jsx)("div", {
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
            ref: t => y(e.id, t),
            "data-item-id": e.id,
            children: (0, i.jsx)(u.A, {
                item: e
            })
        }, e.id), [y]);
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
            children: [E.map(e => P(e)), !b && (g || x) && (0, i.jsx)("div", {
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