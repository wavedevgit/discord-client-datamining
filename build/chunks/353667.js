/** chunk id: 353667 params = (module,exports,require) **/
n.d(t, {
    j: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(974544),
    u = n(351906),
    _ = n(823092),
    m = n(963935),
    g = n(894858),
    A = n(272053),
    h = n(397274),
    x = n(641324),
    p = n(46373),
    T = n(639485);

function E(e) {
    let {
        notice: t,
        children: n
    } = e, {
        showNotice: l,
        handleStoreUpdate: r
    } = (0, _.L_)(), c = t?.stores;
    s.useEffect(() => {
        if (null != c) {
            let e = new a.ru(c, () => {
                r(c)
            });
            return e.attach("SettingPanelNotice"), r(c), () => {
                e.detach()
            }
        }
    }, [c, r]);
    let u = s.useMemo(() => {
        if (null == t || !l) return null;
        let {
            element: e
        } = t;
        return (0, i.jsx)(d.FQk, {
            className: T.lm,
            children: (0, i.jsx)(e, {})
        })
    }, [t, l]);
    return (0, i.jsxs)(i.Fragment, {
        children: [n, (0, i.jsx)(o.F, {
            component: "div",
            children: u
        })]
    })
}

function C(e) {
    let {
        decoration: t
    } = e, n = t.component;
    return (0, i.jsx)("div", {
        className: r()(T.oK, {
            [T.qf]: t.sticky
        }),
        "data-settings-panel-sticky-decoration": t.sticky || void 0,
        children: (0, i.jsx)(n, {})
    })
}

function S(e) {
    let {
        panelKey: t,
        notice: n,
        children: l
    } = e, r = s.useRef(null);
    return (0, i.jsx)(E, {
        notice: n,
        children: (0, i.jsx)(d.GtU, {
            className: T.XG,
            ref: e => {
                h.A.setPanelScrollerRef(e)
            },
            children: (0, i.jsx)("div", {
                className: T.nd,
                ref: r,
                children: (0, i.jsx)(d.xpW, {
                    containerRef: r,
                    children: l
                })
            })
        }, t)
    })
}

function f(e) {
    let {
        layout: t,
        decoration: n
    } = e;
    return (0, i.jsxs)("div", {
        className: T.LZ,
        children: [null != n && (0, i.jsx)(C, {
            decoration: n
        }), t.map((e, n) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(x.A, {
                node: e
            }), n !== t.length - 1 && (0, i.jsx)(p.A, {
                className: T.yF
            })]
        }, e.key))]
    })
}

function N(e) {
    let {
        panelKey: t,
        layout: n,
        notice: l,
        decoration: r
    } = e, a = g.A.useState(e => {
        let {
            currentTabKeys: n
        } = e;
        return n.get(t)
    }) ?? n[0].key;
    s.useEffect(() => {
        let e = g.A.getField("currentTabKeys");
        if (n.some(n => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), g.A.setState({
            currentTabKeys: i
        })
    }, [n, t]);
    let o = n.find(e => e.key === a) ?? n[0];
    return (0, i.jsxs)(S, {
        panelKey: t,
        notice: l,
        children: [(0, i.jsx)(d.VQ0, {
            className: T.$H,
            selectedItem: a,
            onItemSelect: e => {
                A.A.navigate(e, {
                    onTransitionStart: () => {
                        let t = n.find(t => t.key === e);
                        t?.onItemSelect?.()
                    }
                })
            },
            orientation: "horizontal",
            type: "top",
            look: "brand",
            children: n.map(e => {
                let {
                    key: t,
                    getTitle: n
                } = e;
                return (0, i.jsx)(d.VQ0.Item, {
                    id: t,
                    children: n()
                }, t)
            })
        }), (0, i.jsx)(d.VQ0.Panel, {
            id: a,
            children: null != o.StronglyDiscouragedCustomComponent ? (0, i.jsx)(o.StronglyDiscouragedCustomComponent, {}) : (0, i.jsx)(f, {
                layout: o.layout,
                decoration: r
            })
        })]
    })
}

function b(e) {
    let {
        panelKey: t,
        notice: n,
        decoration: s,
        layout: l
    } = e;
    return (0, i.jsx)(S, {
        panelKey: t,
        notice: n,
        children: (0, i.jsx)(f, {
            layout: l,
            decoration: s
        })
    })
}

function I(e) {
    let {
        node: t
    } = e, {
        layout: n
    } = t;
    if ((0, a.bG)([u.A], () => u.A.hidePersonalInformation) && t.hideInStreamerMode) return (0, i.jsx)(c.A, {});
    if ((0, m.zY)(n)) return (0, i.jsx)(N, {
        panelKey: t.key,
        notice: t.notice,
        decoration: t.decoration,
        layout: n
    });
    if ((0, m.Iu)(n)) return (0, i.jsx)(b, {
        panelKey: t.key,
        notice: t.notice,
        decoration: t.decoration,
        layout: n
    });
    throw Error("Panels must have a list of categories or a list of tabs")
}