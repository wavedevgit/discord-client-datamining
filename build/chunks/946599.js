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
    g = n(122338),
    m = n(394245),
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
    } = e, f = t?.filter(e => null != (0, m.W3)(e)) ?? [], _ = f.length > 0, A = n && !c && (0, u.mS)(l) && f.length < 20, {
        trackUserProfileAction: E
    } = (0, d.NJ)(), v = (0, a.useRef)(new Map), T = (0, a.useRef)(null), b = (0, a.useRef)(null), [C, S] = (0, a.useState)(0), [N, y] = (0, a.useState)(!1), R = j(T, b, f, v, S);
    if ((0, a.useEffect)(() => (R(), window.addEventListener("resize", R), () => {
            window.removeEventListener("resize", R)
        }), [R, f?.join("")]), !_ && !A) return null;
    let O = N ? f : f.slice(0, f.length - C);
    return (0, i.jsxs)("div", {
        className: s()(x.I4, o),
        children: [_ && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: x.Tw,
                "aria-label": p.intl.string(p.t.EfjTi4),
                children: O.map(e => (0, i.jsx)(h, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: l,
                    ref: t => {
                        null != t && v.current.set(e, t)
                    },
                    disableInteraction: c
                }, e))
            }), C > 0 && (0, i.jsx)(I, {
                buttonRef: T,
                isExpanded: N,
                numberOfOverflowingTags: C,
                onExpandTags: () => {
                    y(!0), E({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    y(!1), E({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: c
            })]
        }), A && (0, i.jsx)(g.A, {
            tags: t,
            widgetType: l,
            applicationId: r,
            ref: b
        })]
    })
}
let h = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: a,
        widgetType: l,
        disableInteraction: s,
        ref: c
    } = e, {
        trackUserProfileEditAction: g
    } = (0, d.NJ)(), f = (0, m.W3)(t);
    if (null == f) return null;
    let {
        getText: h,
        icon: _
    } = f;
    return (0, i.jsxs)("li", {
        className: x.Tc,
        ref: c,
        children: [(0, i.jsx)(_, {
            size: "xxs"
        }), (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: h()
        }), n && !s && (0, i.jsx)(r.m, {
            text: p.intl.string(p.t.Otv9fP),
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, u.tg)(l, a, t), g({
                        action: "TAG_REMOVED",
                        widgetEdited: l,
                        gameId: a
                    })
                },
                className: x.DT,
                "aria-label": p.intl.formatToPlainString(p.t.GCn1ne, {
                    tag: h()
                }),
                children: (0, i.jsx)(o.PGe, {
                    size: "xxs",
                    color: "currentColor"
                })
            })
        })]
    })
};

function _(e) {
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
        children: (0, i.jsx)(_, {
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
            children: t ? (0, i.jsx)(A, {}) : (0, i.jsx)(_, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let j = (e, t, n, i, l) => (0, a.useCallback)(() => {
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