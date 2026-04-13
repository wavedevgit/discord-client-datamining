/** chunk id: 394839 params = (module,exports,require) **/
i.d(t, {
    A: () => M
});
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(284009),
    o = i.n(r),
    u = i(735438),
    d = i.n(u),
    m = i(672477),
    c = i(643612),
    h = i(448381),
    x = i(96782),
    g = i(838541),
    p = i(579258);
let I = Math.round((g.Rk - 4) / 2);

function f(e) {
    let {
        visualMediaItems: t,
        maxWidth: i,
        footer: s
    } = e;
    null != s && o()(1 === t.length, "footer only gets applied to single items");
    let l = t.length;
    if (1 === l) return (0, n.jsx)(A, {
        itemsForLayout: t,
        isSingleImage: !0,
        footer: s,
        maxWidth: i
    });
    if (2 === l) return (0, n.jsx)(C, {
        itemsForLayout: t,
        maxWidth: i
    });
    if (3 === l) return (0, n.jsx)(j, {
        itemsForLayout: t,
        maxWidth: i
    });
    if (4 === l) return (0, n.jsx)(y, {
        itemsForLayout: t,
        maxWidth: i
    });
    let a = l % 3;
    return (0, n.jsxs)(n.Fragment, {
        children: [1 === a && (0, n.jsx)(A, {
            itemsForLayout: t.slice(0, a),
            maxWidth: i
        }), 2 === a && (0, n.jsx)(C, {
            itemsForLayout: t.slice(0, a),
            maxWidth: i
        }), 0 === a ? (0, n.jsx)(E, {
            itemsForLayout: t,
            maxWidth: i
        }) : (0, n.jsx)(E, {
            itemsForLayout: t.slice(a),
            maxWidth: i
        })]
    })
}

function A(e) {
    let {
        itemsForLayout: t,
        maxWidth: i,
        isSingleImage: s,
        footer: l
    } = e, r = t[0];
    return (0, n.jsx)("div", {
        className: a()(p.EO, {
            [p.Gj]: s,
            [p.Kv]: !s,
            [p.yq]: null != l
        }),
        children: (0, n.jsx)(N, {
            props: r,
            useFullWidth: !s,
            isSingleItem: !0,
            maxWidth: i,
            footer: l
        })
    })
}

function C(e) {
    let {
        itemsForLayout: t,
        maxWidth: i
    } = e, s = Math.round((i - 4) / 2);
    return (0, n.jsx)("div", {
        className: p.SQ,
        children: t.map(e => (0, n.jsx)("div", {
            className: p.XE,
            children: (0, n.jsx)(N, {
                props: e,
                maxWidth: s,
                maxHeight: s
            })
        }, e.item.uniqueId))
    })
}

function j(e) {
    let {
        itemsForLayout: t,
        maxWidth: i
    } = e, s = Math.round(2 * (i - 4) / 3), l = s / 2;
    return (0, n.jsxs)("div", {
        className: a()(p.SQ, p.o_),
        children: [(0, n.jsx)("div", {
            className: p.es,
            children: (0, n.jsx)(N, {
                props: t[0],
                maxWidth: s
            })
        }), (0, n.jsx)("div", {
            className: p.N$,
            children: (0, n.jsx)("div", {
                className: p._i,
                children: t.splice(1).map(e => (0, n.jsx)("div", {
                    className: p.$w,
                    children: (0, n.jsx)(N, {
                        props: e,
                        maxWidth: l,
                        maxHeight: I
                    })
                }, e.item.uniqueId))
            })
        })]
    })
}

function y(e) {
    let {
        itemsForLayout: t,
        maxWidth: i
    } = e, s = Math.round((i - 4) / 2);
    return (0, n.jsx)("div", {
        className: p.av,
        children: t.map(e => (0, n.jsx)(N, {
            props: e,
            maxWidth: s,
            maxHeight: I,
            displayGridItem: !0
        }, e.item.uniqueId))
    })
}

function E(e) {
    let {
        itemsForLayout: t,
        maxWidth: i
    } = e, s = Math.round((i - 8) / 3);
    return (0, n.jsx)("div", {
        className: p._f,
        children: t.map(e => (0, n.jsx)(N, {
            props: e,
            maxWidth: s,
            maxHeight: s,
            displayGridItem: !0
        }, e.item.uniqueId))
    })
}

function N(e) {
    let t, i, {
            props: s,
            maxWidth: l = g.k6,
            maxHeight: r = g.Rk,
            useFullWidth: o = !0,
            isSingleItem: u = !1,
            footer: d,
            displayGridItem: m
        } = e,
        h = s.item.type,
        I = {
            ...s,
            ..."IMAGE" === h && (t = s.className, {
                className: a()(t, p.s_),
                imgContainerClassName: p.nh,
                imgClassName: p.g2
            }),
            ..."VIDEO" === h && (i = s.className, {
                className: a()(i, p.g2)
            }),
            displayGridItem: m,
            mediaLayoutType: g.dG.MOSAIC,
            maxWidth: l,
            maxHeight: r,
            useFullWidth: o,
            isSingleMosaicItem: u
        };
    return (0, n.jsx)(c.G.Provider, {
        value: s.gifFavoriteButton,
        children: (0, n.jsx)(x.Ay, {
            ...I,
            footer: d
        })
    })
}
let M = function(e) {
    var t;
    let {
        items: i,
        isInAppComponentsV2: l = !1
    } = e, {
        groupableVisualMediaItems: r,
        nonGroupableVisualMediaItems: o,
        nonVisualMediaItems: u
    } = (t = i, s.useMemo(() => {
        let [e, i] = d().partition(t, e => (0, h.Xg)(e.item.type)), [n, s] = d().partition(e, e => (0, h.EF)(e.item.type));
        return {
            groupableVisualMediaItems: n,
            nonGroupableVisualMediaItems: s,
            nonVisualMediaItems: i
        }
    }, [t])), {
        newEmbedUi: c
    } = m.Q.useConfig({
        location: "MessageMediaMosaic"
    }), x = l ? g.ww : g.k6;
    return (0, n.jsxs)(n.Fragment, {
        children: [r.length > 0 && (0, n.jsx)("div", {
            className: a()(p.XU, {
                [p.dM]: l
            }),
            children: (0, n.jsx)(f, {
                visualMediaItems: r,
                maxWidth: x
            })
        }), o.length > 0 && o.map(e => {
            let t = e.renderMosaicItemFooter({
                item: e.item,
                message: e.message
            });
            return (0, n.jsx)("div", {
                className: a()(p.XU, {
                    [p.dM]: l,
                    [p.eO]: c && "CLIP" === e.item.type
                }),
                children: (0, n.jsx)(f, {
                    visualMediaItems: [e],
                    footer: t,
                    maxWidth: x
                })
            }, e.item.uniqueId)
        }), u.length > 0 && (0, n.jsx)("div", {
            className: p.s,
            children: u.map(e => (0, n.jsx)("div", {
                className: p.Br,
                children: (0, n.jsx)(N, {
                    props: e
                })
            }, e.item.uniqueId))
        })]
    })
}