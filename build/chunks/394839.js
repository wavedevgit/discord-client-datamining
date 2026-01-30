/** chunk id: 394839, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    u = n(735438),
    c = n.n(u),
    d = n(643612),
    m = n(448381),
    h = n(96782),
    p = n(838541),
    f = n(907423);

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let O = Math.round((p.Rk - 4) / 2);

function j(e) {
    let {
        visualMediaItems: t,
        maxWidth: n,
        footer: l
    } = e;
    null != l && o()(1 === t.length, "footer only gets applied to single items");
    let i = t.length;
    if (1 === i) return (0, r.jsx)(x, {
        itemsForLayout: t,
        isSingleImage: !0,
        footer: l,
        maxWidth: n
    });
    if (2 === i) return (0, r.jsx)(b, {
        itemsForLayout: t,
        maxWidth: n
    });
    if (3 === i) return (0, r.jsx)(I, {
        itemsForLayout: t,
        maxWidth: n
    });
    if (4 === i) return (0, r.jsx)(v, {
        itemsForLayout: t,
        maxWidth: n
    });
    let s = i % 3;
    return (0, r.jsxs)(r.Fragment, {
        children: [1 === s && (0, r.jsx)(x, {
            itemsForLayout: t.slice(0, s),
            maxWidth: n
        }), 2 === s && (0, r.jsx)(b, {
            itemsForLayout: t.slice(0, s),
            maxWidth: n
        }), 0 === s ? (0, r.jsx)(P, {
            itemsForLayout: t,
            maxWidth: n
        }) : (0, r.jsx)(P, {
            itemsForLayout: t.slice(s),
            maxWidth: n
        })]
    })
}

function x(e) {
    let {
        itemsForLayout: t,
        maxWidth: n,
        isSingleImage: l,
        footer: i
    } = e, a = t[0];
    return (0, r.jsx)("div", {
        className: s()(f.EO, {
            [f.Gj]: l,
            [f.Kv]: !l,
            [f.yq]: null != i
        }),
        children: (0, r.jsx)(A, {
            props: a,
            useFullWidth: !l,
            isSingleItem: !0,
            maxWidth: n,
            footer: i
        })
    })
}

function b(e) {
    let {
        itemsForLayout: t,
        maxWidth: n
    } = e, l = Math.round((n - 4) / 2);
    return (0, r.jsx)("div", {
        className: f.SQ,
        children: t.map(e => (0, r.jsx)("div", {
            className: f.XE,
            children: (0, r.jsx)(A, {
                props: e,
                maxWidth: l,
                maxHeight: l
            })
        }, e.item.uniqueId))
    })
}

function I(e) {
    let {
        itemsForLayout: t,
        maxWidth: n
    } = e, l = Math.round(2 * (n - 4) / 3), i = l / 2;
    return (0, r.jsxs)("div", {
        className: s()(f.SQ, f.o_),
        children: [(0, r.jsx)("div", {
            className: f.es,
            children: (0, r.jsx)(A, {
                props: t[0],
                maxWidth: l
            })
        }), (0, r.jsx)("div", {
            className: f.N$,
            children: (0, r.jsx)("div", {
                className: f._i,
                children: t.splice(1).map(e => (0, r.jsx)("div", {
                    className: f.$w,
                    children: (0, r.jsx)(A, {
                        props: e,
                        maxWidth: i,
                        maxHeight: O
                    })
                }, e.item.uniqueId))
            })
        })]
    })
}

function v(e) {
    let {
        itemsForLayout: t,
        maxWidth: n
    } = e, l = Math.round((n - 4) / 2);
    return (0, r.jsx)("div", {
        className: f.av,
        children: t.map(e => (0, r.jsx)(A, {
            props: e,
            maxWidth: l,
            maxHeight: O,
            displayGridItem: !0
        }, e.item.uniqueId))
    })
}

function P(e) {
    let {
        itemsForLayout: t,
        maxWidth: n
    } = e, l = Math.round((n - 8) / 3);
    return (0, r.jsx)("div", {
        className: f._f,
        children: t.map(e => (0, r.jsx)(A, {
            props: e,
            maxWidth: l,
            maxHeight: l,
            displayGridItem: !0
        }, e.item.uniqueId))
    })
}

function A(e) {
    let t, n, {
            props: l,
            maxWidth: i = p.k6,
            maxHeight: a = p.Rk,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            footer: c,
            displayGridItem: m
        } = e,
        O = l.item.type,
        j = g(y({}, l, "IMAGE" === O && (t = l.className, {
            className: s()(t, f.s_),
            imgContainerClassName: f.nh,
            imgClassName: f.g2
        }), "VIDEO" === O && (n = l.className, {
            className: s()(n, f.g2)
        })), {
            displayGridItem: m,
            mediaLayoutType: p.dG.MOSAIC,
            maxWidth: i,
            maxHeight: a,
            useFullWidth: o,
            isSingleMosaicItem: u
        });
    return (0, r.jsx)(d.G.Provider, {
        value: l.gifFavoriteButton,
        children: (0, r.jsx)(h.Ay, g(y({}, j), {
            footer: c
        }))
    })
}
let w = function(e) {
    var t;
    let {
        items: n,
        isInAppComponentsV2: i = !1
    } = e, {
        groupableVisualMediaItems: a,
        nonGroupableVisualMediaItems: o,
        nonVisualMediaItems: u
    } = (t = n, l.useMemo(() => {
        let [e, n] = c().partition(t, e => (0, m.Xg)(e.item.type)), [r, l] = c().partition(e, e => (0, m.EF)(e.item.type));
        return {
            groupableVisualMediaItems: r,
            nonGroupableVisualMediaItems: l,
            nonVisualMediaItems: n
        }
    }, [t])), d = i ? p.ww : p.k6;
    return (0, r.jsxs)(r.Fragment, {
        children: [a.length > 0 && (0, r.jsx)("div", {
            className: s()(f.XU, {
                [f.dM]: i
            }),
            children: (0, r.jsx)(j, {
                visualMediaItems: a,
                maxWidth: d
            })
        }), o.length > 0 && o.map(e => {
            let t = e.renderMosaicItemFooter({
                item: e.item,
                message: e.message
            });
            return (0, r.jsx)("div", {
                className: s()(f.XU, {
                    [f.dM]: i
                }),
                children: (0, r.jsx)(j, {
                    visualMediaItems: [e],
                    footer: t,
                    maxWidth: d
                })
            }, e.item.uniqueId)
        }), u.length > 0 && (0, r.jsx)("div", {
            className: f.s,
            children: u.map(e => (0, r.jsx)("div", {
                className: f.Br,
                children: (0, r.jsx)(A, {
                    props: e
                })
            }, e.item.uniqueId))
        })]
    })
}