/** chunk id: 946599, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(926675),
    s = n(990078),
    c = n(397927),
    u = n(147925),
    d = n(183555),
    f = n(735321),
    p = n(122338),
    g = n(394245),
    m = n(985018),
    b = n(542467);

function y(e) {
    var t;
    let {
        tags: n,
        isCurrentUser: i,
        widgetType: s,
        applicationId: c,
        className: u,
        disableInteraction: y = !1
    } = e, j = null != (t = null == n ? void 0 : n.filter(e => null != (0, g.W3)(e))) ? t : [], h = j.length > 0, _ = o.Y$, I = i && !y && (0, f.mS)(s) && j.length < _, {
        trackUserProfileAction: A
    } = (0, d.NJ)(), w = (0, l.useRef)(new Map), P = (0, l.useRef)(null), E = (0, l.useRef)(null), [S, T] = (0, l.useState)(0), [C, N] = (0, l.useState)(!1), R = v(P, E, j, w, T);
    if ((0, l.useEffect)(() => (R(), window.addEventListener("resize", R), () => {
            window.removeEventListener("resize", R)
        }), [R, null == j ? void 0 : j.join("")]), !h && !I) return null;
    let k = C ? j : j.slice(0, j.length - S);
    return (0, r.jsxs)("div", {
        className: a()(b.I4, u),
        children: [h && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("ul", {
                className: b.Tw,
                "aria-label": m.intl.string(m.t.EfjTi4),
                children: k.map(e => (0, r.jsx)(O, {
                    tag: e,
                    isCurrentUser: i,
                    applicationId: c,
                    widgetType: s,
                    ref: t => {
                        null != t && w.current.set(e, t)
                    },
                    disableInteraction: y
                }, e))
            }), S > 0 && (0, r.jsx)(x, {
                buttonRef: P,
                isExpanded: C,
                numberOfOverflowingTags: S,
                onExpandTags: () => {
                    N(!0), A({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    N(!1), A({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: y
            })]
        }), I && (0, r.jsx)(p.A, {
            tags: n,
            widgetType: s,
            applicationId: c,
            ref: E
        })]
    })
}
let O = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: l,
        widgetType: i,
        disableInteraction: a,
        ref: o
    } = e, {
        trackUserProfileEditAction: u
    } = (0, d.NJ)(), p = (0, g.W3)(t);
    if (null == p) return null;
    let {
        getText: y,
        icon: O
    } = p;
    return (0, r.jsxs)("li", {
        className: b.Tc,
        ref: o,
        children: [(0, r.jsx)(O, {
            size: "xxs"
        }), (0, r.jsx)(c.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: y()
        }), n && !a && (0, r.jsx)(s.m, {
            text: m.intl.string(m.t.Otv9fP),
            ariaHidden: !0,
            children: (0, r.jsx)(c.DUT, {
                onClick: () => {
                    (0, f.tg)(i, l, t), u({
                        action: "TAG_REMOVED",
                        widgetEdited: i,
                        gameId: l
                    })
                },
                className: b.DT,
                "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, {
                    tag: y()
                }),
                children: (0, r.jsx)(c.PGe, {
                    size: "xxs",
                    color: "currentColor"
                })
            })
        })]
    })
};

function j(e) {
    let {
        numberOfOverflowingTags: t
    } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
    })
}

function h() {
    return (0, r.jsx)(u.A, {
        direction: u.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: b.OW
    })
}

function x(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: l,
        onCollapseTags: i,
        disableInteraction: a,
        buttonRef: o
    } = e, u = t ? m.intl.string(m.t.z9VPrQ) : m.intl.string(m.t.mriLXL), d = t ? m.intl.string(m.t.z9VPrQ) : m.intl.formatToPlainString(m.t.F6iMs4, {
        count: n
    });
    return a ? (0, r.jsx)("div", {
        className: b.X1,
        ref: o,
        children: (0, r.jsx)(j, {
            numberOfOverflowingTags: n
        })
    }) : (0, r.jsx)(s.m, {
        text: u,
        ariaHidden: t,
        children: (0, r.jsx)(c.DUT, {
            innerRef: o,
            onClick: t ? i : l,
            "aria-label": d,
            className: t ? b.cS : b.X1,
            children: t ? (0, r.jsx)(h, {}) : (0, r.jsx)(j, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let v = (e, t, n, r, i) => (0, l.useCallback)(() => {
    var l, a, o, s;
    if (null == n) return void i(0);
    let c = null != (l = null == (o = e.current) ? void 0 : o.getBoundingClientRect().width) ? l : 0,
        u = null != (a = null == (s = t.current) ? void 0 : s.getBoundingClientRect().width) ? a : 0,
        d = u > 0 ? 8 : 4,
        f = 0,
        p = 0,
        g = r.current;
    for (let e = 0; e < n.length; e++) {
        let t = g.get(n[e]);
        if (null != t) {
            if ((p += t.offsetWidth + 4) > 296) break;
            f++
        }
    }
    p = 0;
    for (let e = f; e < n.length; e++) {
        let t = g.get(n[e]);
        if (null != t) {
            if ((p += t.offsetWidth + 4) > 296 - c - u - d) break;
            f++
        }
    }
    i(n.length - f)
}, [e, t, null == n ? void 0 : n.join(""), r, i])