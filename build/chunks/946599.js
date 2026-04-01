/** chunk id: 946599 params = (module,exports,require) **/
n.d(t, {
    A: () => f
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
    m = n(122338),
    g = n(394245),
    p = n(985018),
    x = n(740857);

function f(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: l,
        applicationId: r,
        className: o,
        disableInteraction: c = !1
    } = e, f = t?.filter(e => null != (0, g.W3)(e)) ?? [], h = f.length > 0, A = n && !c && (0, u.mS)(l) && f.length < 20, {
        trackUserProfileAction: j
    } = (0, d.NJ)(), E = (0, a.useRef)(new Map), T = (0, a.useRef)(null), N = (0, a.useRef)(null), [C, b] = (0, a.useState)(0), [S, y] = (0, a.useState)(!1), R = v(T, N, f, E, b);
    if ((0, a.useEffect)(() => (R(), window.addEventListener("resize", R), () => {
            window.removeEventListener("resize", R)
        }), [R, f?.join("")]), !h && !A) return null;
    let O = S ? f : f.slice(0, f.length - C);
    return (0, i.jsxs)("div", {
        className: s()(x.I4, o),
        children: [h && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: x.Tw,
                "aria-label": p.intl.string(p.t.EfjTi4),
                children: O.map(e => (0, i.jsx)(_, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: l,
                    ref: t => {
                        null != t && E.current.set(e, t)
                    },
                    disableInteraction: c
                }, e))
            }), C > 0 && (0, i.jsx)(I, {
                buttonRef: T,
                isExpanded: S,
                numberOfOverflowingTags: C,
                onExpandTags: () => {
                    y(!0), j({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    y(!1), j({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: c
            })]
        }), A && (0, i.jsx)(m.A, {
            tags: t,
            widgetType: l,
            applicationId: r,
            ref: N
        })]
    })
}
let _ = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: a,
        widgetType: l,
        disableInteraction: s,
        ref: c
    } = e, {
        trackUserProfileEditAction: m
    } = (0, d.NJ)(), f = (0, g.W3)(t);
    if (null == f) return null;
    let {
        getText: _,
        icon: h
    } = f;
    return (0, i.jsxs)("li", {
        className: x.Tc,
        ref: c,
        children: [(0, i.jsx)(h, {
            size: "xxs"
        }), (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: _()
        }), n && !s && (0, i.jsx)(r.m, {
            text: p.intl.string(p.t.Otv9fP),
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, u.tg)(l, a, t), m({
                        action: "TAG_REMOVED",
                        widgetEdited: l,
                        gameId: a
                    })
                },
                className: x.DT,
                "aria-label": p.intl.formatToPlainString(p.t.GCn1ne, {
                    tag: _()
                }),
                children: (0, i.jsx)(o.PGe, {
                    size: "xxs",
                    color: "currentColor"
                })
            })
        })]
    })
};

function h(e) {
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
        className: x.OW
    })
}

function I(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: a,
        onCollapseTags: l,
        disableInteraction: s,
        buttonRef: c
    } = e, d = t ? p.intl.string(p.t.z9VPrQ) : p.intl.string(p.t.mriLXL), u = t ? p.intl.string(p.t.z9VPrQ) : p.intl.formatToPlainString(p.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: x.X1,
        ref: c,
        children: (0, i.jsx)(h, {
            numberOfOverflowingTags: n
        })
    }) : (0, i.jsx)(r.m, {
        text: d,
        ariaHidden: t,
        children: (0, i.jsx)(o.DUT, {
            innerRef: c,
            onClick: t ? l : a,
            "aria-label": u,
            className: t ? x.cS : x.X1,
            children: t ? (0, i.jsx)(A, {}) : (0, i.jsx)(h, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let v = (e, t, n, i, l) => (0, a.useCallback)(() => {
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