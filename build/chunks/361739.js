/** chunk id: 361739 params = (module,exports,require) **/
n.d(t, {
    Ay: () => C,
    Fq: () => _,
    Py: () => N,
    gJ: () => f,
    ic: () => x
});
var i, s = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(208798),
    c = n(359459),
    d = n(607399),
    u = n(73939),
    h = n(397927),
    m = n(475743),
    p = n(723702),
    S = n(684136),
    E = n(515810);
let _ = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM"
    },
    g = r.createContext(null);
class x extends r.PureComponent {
    static defaultProps = {
        paddingTop: 60,
        paddingBottom: 60
    };
    renderContent() {
        let {
            scrollerRef: e,
            ...t
        } = this.props;
        return (0, s.jsx)("div", {
            className: E.customContainer,
            children: (0, s.jsx)(h.Eie, {
                ...t,
                className: o()(E.customScroller, E.contentRegionScroller),
                ref: e
            })
        })
    }
    render() {
        return (0, s.jsx)("div", {
            className: E.customColumn,
            children: this.renderContent()
        })
    }
}

function f(e) {
    let {
        children: t
    } = e;
    return (0, s.jsx)("div", {
        className: E.customColumn,
        children: (0, s.jsx)("div", {
            className: E.customContainer,
            children: (0, s.jsx)(h.ArX, {
                className: o()(E.customScroller, E.contentRegionScroller),
                children: t
            })
        })
    })
}
var N = ((i = {}).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide", i.SCROLLABLE_CUSTOM = "scrollableCustom", i);
let v = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom"
});

function A(e) {
    let {
        isMobile: t,
        mobileSidebarOpen: n,
        closeAction: i
    } = e, l = r.useRef(null);
    return null == i ? null : (0, s.jsx)("div", {
        className: o()(E.toolsContainer, {
            [E.mobileToolsContainer]: t,
            [E.mobileSidebarTools]: t,
            [E.closeIconOnly]: !n,
            [E.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)()
        }),
        ref: l,
        children: (0, s.jsx)(h.xpW, {
            containerRef: l,
            children: (0, s.jsx)("div", {
                className: E.tools,
                children: (0, s.jsx)(S.A, {
                    className: o()({
                        [E.mobileToolsCloseIcon]: t
                    }),
                    closeAction: i,
                    keybind: "ESC"
                })
            })
        })
    })
}
let C = function(e) {
    let {
        sidebar: t,
        content: n,
        notice: i,
        section: l,
        closeAction: p,
        sidebarTheme: S,
        contentType: _,
        scrollerRef: x,
        mobileSidebarOpen: f,
        toggleSidebar: N,
        hideSidebar: C = !1
    } = e, T = r.useRef(null), b = r.useRef(null), j = (0, m.A)(l), O = (0, h.pnh)(C, {
        from: {
            position: "absolute",
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        reverse: C,
        config: a.config.stiff
    }, "animate-always"), R = r.useCallback(e => {
        T.current = e, null != x && (x.current = e)
    }, [x]);
    r.useLayoutEffect(() => {
        null != T.current && j !== l && T.current.scrollTo({
            to: 0
        })
    }, [l, j, T]);
    let I = (0, s.jsx)(A, {
        isMobile: d.Fr,
        mobileSidebarOpen: f,
        closeAction: p
    });

    function P() {
        return (0, s.jsx)(u.F, {
            component: "div",
            children: null != i && (0, s.jsx)(h.FQk, {
                className: o()(E.noticeRegion, {
                    [E.noticeRegionHiddenSidebar]: C
                }),
                children: i
            }, l)
        }, "notice-transition-group")
    }
    return (0, s.jsx)(s.Fragment, {
        children: O((e, i) => (0, s.jsxs)(a.animated.div, {
            style: e,
            className: E.standardSidebarView,
            children: [!i && (null == t ? null : (0, s.jsx)(h.NPJ, {
                theme: S,
                children: e => (0, s.jsx)("div", {
                    className: o()(E.sidebarRegion, e, {
                        [E.flexFullWidth]: d.Fr,
                        [E.hidden]: d.Fr && !1 === f
                    }),
                    children: (0, s.jsx)(h.ChK, {
                        className: E.sidebarRegionScroller,
                        fade: !0,
                        children: (0, s.jsxs)("nav", {
                            className: o()(E.sidebar, {
                                [E.mobileSidebar]: d.Fr
                            }),
                            children: [d.Fr && (0, s.jsx)("div", {
                                className: E.mobileSidebarHeader,
                                children: I
                            }), t]
                        })
                    })
                })
            })), function() {
                let e = null != N && null != p && f,
                    t = d.Fr && (0, s.jsxs)("div", {
                        className: o()(E.mobileContentHeader, {
                            [E.hideHamburger]: !e
                        }),
                        children: [e && (0, s.jsx)(c._, {
                            onClick: N
                        }), I]
                    });
                if ("custom" === _) return (0, s.jsxs)("div", {
                    className: E.contentRegion,
                    children: [t, n, !d.Fr && I, P()]
                });
                if ("scrollableCustom" === _) return (0, s.jsxs)("div", {
                    className: E.contentRegion,
                    children: [t, (0, s.jsxs)(h.GtU, {
                        className: o()(E.contentRegionScroller, C ? E.contentRegionHiddenSidebar : E.contentRegionShownSidebar),
                        ref: R,
                        children: [(0, s.jsx)(g.Provider, {
                            value: T.current,
                            children: (0, s.jsx)("div", {
                                ref: b,
                                className: E.contentColumnScrollable,
                                children: (0, s.jsx)(h.xpW, {
                                    containerRef: b,
                                    children: n
                                })
                            })
                        }), !d.Fr && I]
                    }), P()]
                });
                let i = v[_ ?? "default"];
                return (0, s.jsxs)("div", {
                    className: o()(E.contentRegion, {
                        [E.hidden]: d.Fr && !0 === f
                    }),
                    children: [t, (0, s.jsxs)(h.GtU, {
                        className: o()(E.contentRegionScroller, C ? E.contentRegionHiddenSidebar : E.contentRegionShownSidebar),
                        ref: R,
                        children: [(0, s.jsx)(g.Provider, {
                            value: T.current,
                            children: (0, s.jsx)(h.VQ0.Panel, {
                                id: l,
                                className: o()(E.contentColumn, E[i], {
                                    [E.mobileContent]: d.Fr
                                }),
                                ref: b,
                                style: d.Fr ? {
                                    maxWidth: window.innerWidth
                                } : void 0,
                                children: C ? n : (0, s.jsx)(h.xpW, {
                                    containerRef: b,
                                    children: n
                                })
                            })
                        }), !d.Fr && I]
                    }), P()]
                })
            }()]
        }))
    })
}