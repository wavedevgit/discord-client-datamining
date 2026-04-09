/** chunk id: 946599 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(990078),
    o = n(397927),
    c = n(147925),
    d = n(183555),
    u = n(735321),
    m = n(122338),
    g = n(394245),
    f = n(985018),
    x = n(740857);

function p(e) {
    let {
        tags: t,
        isCurrentUser: n,
        widgetType: a,
        applicationId: r,
        className: o,
        disableInteraction: c = !1
    } = e, p = t?.filter(e => null != (0, g.W3)(e)) ?? [], I = p.length > 0, h = n && !c && (0, u.mS)(a) && p.length < 20, {
        trackUserProfileAction: T
    } = (0, d.NJ)(), v = (0, l.useRef)(new Map), j = (0, l.useRef)(null), C = (0, l.useRef)(null), [N, y] = (0, l.useState)(0), [b, R] = (0, l.useState)(!1), O = E(j, C, p, v, y);
    if ((0, l.useEffect)(() => (O(), window.addEventListener("resize", O), () => {
            window.removeEventListener("resize", O)
        }), [O, p?.join("")]), !I && !h) return null;
    let S = b ? p : p.slice(0, p.length - N);
    return (0, i.jsxs)("div", {
        className: s()(x.I4, o),
        children: [I && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("ul", {
                className: x.Tw,
                "aria-label": f.intl.string(f.t.EfjTi4),
                children: S.map(e => (0, i.jsx)(_, {
                    tag: e,
                    isCurrentUser: n,
                    applicationId: r,
                    widgetType: a,
                    ref: t => {
                        null != t && v.current.set(e, t)
                    },
                    disableInteraction: c
                }, e))
            }), N > 0 && (0, i.jsx)(A, {
                buttonRef: j,
                isExpanded: b,
                numberOfOverflowingTags: N,
                onExpandTags: () => {
                    R(!0), T({
                        action: "EXPAND_GAME_TAGS"
                    })
                },
                onCollapseTags: () => {
                    R(!1), T({
                        action: "COLLAPSE_GAME_TAGS"
                    })
                },
                disableInteraction: c
            })]
        }), h && (0, i.jsx)(m.A, {
            tags: t,
            widgetType: a,
            applicationId: r,
            ref: C
        })]
    })
}
let _ = e => {
    let {
        tag: t,
        isCurrentUser: n,
        applicationId: l,
        widgetType: a,
        disableInteraction: s,
        ref: c
    } = e, {
        trackUserProfileEditAction: m
    } = (0, d.NJ)(), p = (0, g.W3)(t);
    if (null == p) return null;
    let {
        getText: _,
        icon: I
    } = p;
    return (0, i.jsxs)("li", {
        className: x.Tc,
        ref: c,
        children: [(0, i.jsx)(I, {
            size: "xxs"
        }), (0, i.jsx)(o.Text, {
            variant: "text-xxs/medium",
            color: "text-subtle",
            children: _()
        }), n && !s && (0, i.jsx)(r.m, {
            text: f.intl.string(f.t.Otv9fP),
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: () => {
                    (0, u.tg)(a, l, t), m({
                        action: "TAG_REMOVED",
                        widgetEdited: a,
                        gameId: l
                    })
                },
                className: x.DT,
                "aria-label": f.intl.formatToPlainString(f.t.GCn1ne, {
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

function h() {
    return (0, i.jsx)(c.A, {
        direction: c.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: x.OW
    })
}

function A(e) {
    let {
        isExpanded: t,
        numberOfOverflowingTags: n,
        onExpandTags: l,
        onCollapseTags: a,
        disableInteraction: s,
        buttonRef: c
    } = e, d = t ? f.intl.string(f.t.z9VPrQ) : f.intl.string(f.t.mriLXL), u = t ? f.intl.string(f.t.z9VPrQ) : f.intl.formatToPlainString(f.t.F6iMs4, {
        count: n
    });
    return s ? (0, i.jsx)("div", {
        className: x.X1,
        ref: c,
        children: (0, i.jsx)(I, {
            numberOfOverflowingTags: n
        })
    }) : (0, i.jsx)(r.m, {
        text: d,
        ariaHidden: t,
        children: (0, i.jsx)(o.DUT, {
            innerRef: c,
            onClick: t ? a : l,
            "aria-label": u,
            className: t ? x.cS : x.X1,
            children: t ? (0, i.jsx)(h, {}) : (0, i.jsx)(I, {
                numberOfOverflowingTags: n
            })
        })
    })
}
let E = (e, t, n, i, a) => (0, l.useCallback)(() => {
    if (null == n) return void a(0);
    let l = e.current?.getBoundingClientRect().width ?? 0,
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
            if ((c += t.offsetWidth + 4) > 296 - l - s - r) break;
            o++
        }
    }
    a(n.length - o)
}, [e, t, n?.join(""), i, a])