/** chunk id: 946599 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(990078),
    o = n(397927),
    c = n(147925),
    d = n(183555),
    u = n(735321),
    g = n(122338),
    _ = n(394245),
    m = n(985018),
    f = n(802638);

function x(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: l,
        applicationId: r,
        className: o,
        disableInteraction: c = !1
    } = e, x = t?.filter(e => null != (0, _.W3)(e)) ?? [], I = x.length > 0, A = n && !c && (0, u.mS)(l) && x.length < 20, {
        trackUserProfileAction: v
    } = (0, d.NJ)(), j = (0, a.useRef)(new Map), T = (0, a.useRef)(null), N = (0, a.useRef)(null), [b, C] = (0, a.useState)(0), [S, k] = (0, a.useState)(!1), O = E(T, N, x, j, C);
    if ((0, a.useEffect)(() => (O(), window.addEventListener("resize", O), () => {
            window.removeEventListener("resize", O)
        }), [O, x?.join("")]), !I && !A) return null;
    let L = S ? x : x.slice(0, x.length - b);
    return (0, i.jsxs)("div", {
        className: s()(f.I4, o),
        children: [I && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: f.Tw,
                "aria-label": m.intl.string(m.t.EfjTi4),
                children: L.map(e => (0, i.jsx)(p, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: l,
                    ref: t => {
                        null != t && j.current.set(e, t)
                    },
                    disableInteraction: c
                }, e))
            }), b > 0 && (0, i.jsx)(h, {
                buttonRef: T,
                isExpanded: S,
                numberOfOverflowingTags: b,
                onExpandTags: () => {
                    k(!0), v({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    k(!1), v({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: c
            })]
        }), A && (0, i.jsx)(g.A, {
            tags: t,
            widgetType: l,
            applicationId: r,
            ref: N
        })]
    })
}
let p = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: a,
        widgetType: l,
        disableInteraction: s,
        ref: c
    } = e, {
        trackUserProfileEditAction: g
    } = (0, d.NJ)(), x = (0, _.W3)(t);
    if (null == x) return null;
    let {
        getText: p,
        icon: I
    } = x;
    return (0, i.jsxs)("li", {
        className: f.Tc,
        ref: c,
        children: [(0, i.jsx)(I, {
            size: "xxs"
        }), (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: p()
        }), n && !s && (0, i.jsx)(r.m, {
            text: m.intl.string(m.t.Otv9fP),
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, u.tg)(l, a, t), g({
                        action: "TAG_REMOVED",
                        widgetEdited: l,
                        gameId: a
                    })
                },
                className: f.DT,
                "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, {
                    tag: p()
                }),
                children: (0, i.jsx)(o.PGe, {
                    size: "xxs",
                    color: "currentColor"
                })
            })
        })]
    })
};

function I(e) {
    let {
        numberOfOverflowingTags: t
    } = e;
    return (0, i.jsx)(o.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: `+${t}`
    })
}

function A() {
    return (0, i.jsx)(c.A, {
        direction: c.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: f.OW
    })
}

function h(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: a,
        onCollapseTags: l,
        disableInteraction: s,
        buttonRef: c
    } = e, d = t ? m.intl.string(m.t.z9VPrQ) : m.intl.string(m.t.mriLXL), u = t ? m.intl.string(m.t.z9VPrQ) : m.intl.formatToPlainString(m.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: f.X1,
        ref: c,
        children: (0, i.jsx)(I, {
            numberOfOverflowingTags: n
        })
    }) : (0, i.jsx)(r.m, {
        text: d,
        ariaHidden: t,
        children: (0, i.jsx)(o.DUT, {
            innerRef: c,
            onClick: t ? l : a,
            "aria-label": u,
            className: t ? f.cS : f.X1,
            children: t ? (0, i.jsx)(A, {}) : (0, i.jsx)(I, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let E = (e, t, n, i, l) => (0, a.useCallback)(() => {
    if (null == n) return void l(0);
    let a = e.current?.getBoundingClientRect().width ?? 0,
        s = t.current?.getBoundingClientRect().width ?? 0,
        r = s > 0 ? 8 : 4,
        o = 0,
        c = 0,
        d = i.current;
    for (let e = 0; e < n.length; e++) {
        let t = d.get(n[e]);
        if (null != t) {
            if ((c += t.offsetWidth + 4) > 296) break;
            o++
        }
    }
    c = 0;
    for (let e = o; e < n.length; e++) {
        let t = d.get(n[e]);
        if (null != t) {
            if ((c += t.offsetWidth + 4) > 296 - a - s - r) break;
            o++
        }
    }
    l(n.length - o)
}, [e, t, n?.join(""), i, l])