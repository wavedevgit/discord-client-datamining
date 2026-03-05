/** chunk id: 353667, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(73939),
    d = n(397927),
    c = n(974544),
    u = n(826673),
    _ = n(351906),
    g = n(823092),
    m = n(963935),
    A = n(894858),
    h = n(641324),
    p = n(46373),
    x = n(49999),
    E = n(872175);

function T(e) {
    let {
        notice: t,
        children: n
    } = e, {
        showNotice: l,
        handleStoreUpdate: a
    } = (0, g.L_)(), c = t?.stores;
    s.useEffect(() => {
        if (null != c) {
            let e = new r.ru(c, () => {
                a(c)
            });
            return e.attach("SettingPanelNotice"), a(c), () => {
                e.detach()
            }
        }
    }, [c, a]);
    let u = s.useMemo(() => {
        if (null == t || !l) return null;
        let {
            element: e
        } = t;
        return (0, i.jsx)(d.FQk, {
            className: E.lm,
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

function S(e) {
    let {
        decoration: t
    } = e, n = t.component;
    return (0, i.jsx)("div", {
        className: a()(E.oK, {
            [E.qf]: t.sticky
        }),
        "data-settings-panel-sticky-decoration": t.sticky || void 0,
        children: (0, i.jsx)(n, {})
    })
}

function C(e) {
    let {
        scrollerRef: t,
        panelKey: n,
        notice: l,
        children: a
    } = e, r = s.useRef(null);
    return s.useEffect(() => A.A.subscribe(e => {
        let {
            navTransition: t
        } = e;
        return t?.targetKey
    }, e => {
        n === e && A.A.setState({
            navTransition: void 0,
            disableSidebarCategoryAutoSelect: !1
        })
    }, {
        equalityFn: (e, t) => e === t,
        fireImmediately: !0
    }), [n]), (0, i.jsx)(T, {
        notice: l,
        children: (0, i.jsx)(d.ArX, {
            "data-settings-panel-scroller": !0,
            className: E.XG,
            ref: t,
            children: (0, i.jsx)("div", {
                className: E.nd,
                ref: r,
                children: (0, i.jsx)(d.xpW, {
                    containerRef: r,
                    children: a
                })
            })
        }, n)
    })
}

function f(e) {
    let {
        layout: t,
        decoration: n
    } = e;
    return (0, i.jsxs)("div", {
        className: E.LZ,
        children: [null != n && (0, i.jsx)(S, {
            decoration: n
        }), t.map((e, n) => (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(h.A, {
                node: e
            }), n !== t.length - 1 && (0, i.jsx)(p.A, {
                className: E.yF
            })]
        }, e.key))]
    })
}

function I(e) {
    let {
        panelKey: t,
        layout: n,
        notice: l,
        decoration: a
    } = e, r = A.A.useState(e => {
        let {
            currentTabKeys: n
        } = e;
        return n.get(t)
    }) ?? n[0].key, {
        navigateWithValidation: o
    } = (0, g.L_)();
    s.useEffect(() => {
        let e = A.A.getField("currentTabKeys");
        if (n.some(n => n.key === e.get(t))) return;
        let i = new Map(e);
        i.set(t, n[0].key), A.A.setState({
            currentTabKeys: i
        })
    }, [n, t]);
    let c = n.find(e => e.key === r) ?? n[0];
    return (0, i.jsxs)(C, {
        panelKey: t,
        notice: l,
        children: [(0, i.jsx)(d.VQ0, {
            className: E.$H,
            selectedItem: r,
            onItemSelect: e => {
                o(() => {
                    if (e === r) return;
                    let i = new Map(A.A.getField("currentTabKeys"));
                    i.set(t, e), A.A.setState({
                        currentTabKeys: i
                    });
                    let s = n.find(t => t.key === e);
                    s?.onItemSelect?.()
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
            id: r,
            children: null != c.StronglyDiscouragedCustomComponent ? (0, i.jsx)(c.StronglyDiscouragedCustomComponent, {}) : (0, i.jsx)(f, {
                layout: c.layout,
                decoration: a
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
    return (0, i.jsx)(C, {
        panelKey: t,
        notice: n,
        children: (0, i.jsx)(f, {
            layout: l,
            decoration: s
        })
    })
}

function N(e) {
    let {
        component: t,
        panelKey: n,
        notice: s
    } = e;
    return (0, i.jsx)(C, {
        panelKey: n,
        notice: s,
        children: (0, i.jsx)(t, {})
    })
}

function v(e) {
    let {
        node: t
    } = e, {
        layout: n
    } = t, l = (0, r.bG)([_.A], () => _.A.hidePersonalInformation);
    if (s.useEffect(() => {
            if (t.parent?.type !== m.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let {
                trailing: e
            } = t.parent, n = "getDismissibleContentTypes" in e ? e.getDismissibleContentTypes?.() : null;
            null != n && n.forEach(e => {
                (0, u.Dr)(e, {
                    dismissAction: x.i.AUTO,
                    forceTrack: !0
                })
            })
        }, [t]), l && t.hideInStreamerMode) return (0, i.jsx)(c.A, {});
    if (null != t.StronglyDiscouragedCustomComponent) return (0, i.jsx)(N, {
        component: t.StronglyDiscouragedCustomComponent,
        panelKey: t.key,
        notice: t.notice
    });
    if ((0, m.zY)(n)) return (0, i.jsx)(I, {
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