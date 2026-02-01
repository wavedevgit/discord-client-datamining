/** chunk id: 920113, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(877227),
    o = n(311907),
    c = n(397927),
    u = n(944791),
    d = n(456412),
    p = n(964486),
    h = n(726249),
    g = n(742589),
    m = n(210714),
    f = n(544028),
    A = n(335934),
    _ = n(883344),
    b = n(859524),
    E = n(567061),
    O = n(192380),
    y = n(652215),
    I = n(985018),
    v = n(56113),
    S = n(638990);
let C = (0, d.A)(function(e) {
    let {
        width: t
    } = e, n = (0, A.c)("ICYMIPage", !1);
    i.useEffect(() => {
        n || (0, s.pX)(y.BVt.ME)
    }, [n]), i.useLayoutEffect(() => {
        n && u.I(y.BVt.ICYMI)
    }, [n]), (0, p.Ay)(() => {
        n && (0, m.d)("icymi")
    });
    let l = (0, o.bG)([f.A], () => f.A.theme),
        d = (0, o.bG)([_.A], () => _.A.isRefreshing()),
        C = i.useRef(null);
    (0, h.HU)({
        location: I.intl.string(I.t["jnXV/V"])
    });
    let [N, T] = i.useState(!1);
    i.useEffect(() => {
        let e = e => {
                e.metaKey && T(!0)
            },
            t = e => {
                "Meta" === e.key && T(!1)
            },
            n = () => {
                T(!1)
            };
        return window.addEventListener("keydown", e), window.addEventListener("keyup", t), window.addEventListener("blur", n), () => {
            window.removeEventListener("keydown", e), window.removeEventListener("keyup", t), window.removeEventListener("blur", n)
        }
    }, []);
    let j = (0, E.E)(),
        x = A.E2.useExperiment({
            location: "icymi page"
        }).enabled,
        P = i.useCallback(async e => {
            e.metaKey && x ? await (0, b.be)(y.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) : await j()
        }, [j, x]),
        w = N && x ? I.intl.string(I.t.YplSn2) : I.intl.string(I.t.wzzjk9);
    return n ? (0, r.jsxs)("div", {
        className: a()(S.TE, v.kL),
        children: [(0, r.jsx)(c.NPJ, {
            theme: l,
            children: e => (0, r.jsxs)(g.A, {
                className: e,
                toolbar: (0, r.jsx)(g.A.Icon, {
                    icon: c.fNY,
                    tooltip: w,
                    onClick: P,
                    disabled: d,
                    "aria-label": w
                }),
                children: [(0, r.jsx)(g.A.Icon, {
                    icon: c.gXB,
                    "aria-hidden": !0
                }), (0, r.jsx)(g.A.Title, {
                    children: I.intl.string(I.t["jnXV/V"])
                }), (0, r.jsx)(g.A.Title, {
                    children: (0, r.jsx)("p", {
                        className: v.HH,
                        children: I.intl.string(I.t.Ac2OZA)
                    })
                })]
            })
        }), (0, r.jsx)("div", {
            ref: C,
            className: a()(S.Qs, v.Qs),
            children: (0, r.jsx)(O.A, {
                scrollContainerRef: C
            })
        })]
    }) : null
})