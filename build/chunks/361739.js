/** chunk id: 361739 params = (module,exports,require) **/
n.d(t, {
    Ay: () => C,
    Fq: () => f,
    Py: () => x,
    gJ: () => g,
    ic: () => _
});
var i, s = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(687498),
    c = n(359459),
    d = n(607399),
    u = n(73939),
    h = n(397927),
    m = n(475743),
    p = n(723702),
    E = n(684136),
    S = n(223698);
let f = {
        HEADER: "HEADER",
        DIVIDER: "DIVIDER",
        CUSTOM: "CUSTOM"
    },
    A = r.createContext(null);
class _ extends r.PureComponent {
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
            className: S.customContainer,
            children: (0, s.jsx)(h.Eie, {
                ...t,
                className: o()(S.customScroller, S.contentRegionScroller),
                ref: e
            })
        })
    }
    render() {
        return (0, s.jsx)("div", {
            className: S.customColumn,
            children: this.renderContent()
        })
    }
}

function g(e) {
    let {
        children: t
    } = e;
    return (0, s.jsx)("div", {
        className: S.customColumn,
        children: (0, s.jsx)("div", {
            className: S.customContainer,
            children: (0, s.jsx)(h.ArX, {
                className: o()(S.customScroller, S.contentRegionScroller),
                children: t
            })
        })
    })
}
var x = ((i = {}).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide", i.SCROLLABLE_CUSTOM = "scrollableCustom", i);
let v = Object.freeze({
    minimal: "contentColumnMinimal",
    custom: "contentColumnCustom",
    default: "contentColumnDefault",
    wide: "contentColumnWide",
    scrollableCustom: "contentColumnCustom"
});

function N(e) {
    let {
        isMobile: t,
        mobileSidebarOpen: n,
        closeAction: i
    } = e, l = r.useRef(null);
    return null == i ? null : (0, s.jsx)("div", {
        className: o()(S.toolsContainer, {
            [S.mobileToolsContainer]: t,
            [S.mobileSidebarTools]: t,
            [S.closeIconOnly]: !n,
            [S.isMobileAndroid]: !n && !0 === (0, p.isAndroidWeb)()
        }),
        ref: l,
        children: (0, s.jsx)(h.xpW, {
            containerRef: l,
            children: (0, s.jsx)("div", {
                className: S.tools,
                children: (0, s.jsx)(E.A, {
                    className: o()({
                        [S.mobileToolsCloseIcon]: t
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
        sidebarTheme: E,
        contentType: f,
        scrollerRef: _,
        mobileSidebarOpen: g,
        toggleSidebar: x,
        hideSidebar: C = !1
    } = e, b = r.useRef(null), T = r.useRef(null), j = (0, m.A)(l), R = (0, h.pnh)(C, {
        from: {
            position: "absolute",
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        reverse: C,
        config: a.config.stiff
    }, "animate-always"), O = r.useCallback(e => {
        b.current = e, null != _ && (_.current = e)
    }, [_]);
    r.useLayoutEffect(() => {
        null != b.current && j !== l && b.current.scrollTo({
            to: 0
        })
    }, [l, j, b]);
    let I = (0, s.jsx)(N, {
        isMobile: d.Fr,
        mobileSidebarOpen: g,
        closeAction: p
    });

    function P() {
        return null == i ? null : (0, s.jsx)(h.FQk, {
            className: o()(S.noticeRegion, {
                [S.noticeRegionHiddenSidebar]: C
            }),
            children: i
        }, l)
    }
    return (0, s.jsx)(s.Fragment, {
        children: R((e, i) => (0, s.jsxs)(a.animated.div, {
            style: e,
            className: S.standardSidebarView,
            children: [!i && (null == t ? null : (0, s.jsx)(h.NPJ, {
                theme: E,
                children: e => (0, s.jsx)("div", {
                    className: o()(S.sidebarRegion, e, {
                        [S.flexFullWidth]: d.Fr,
                        [S.hidden]: d.Fr && !1 === g
                    }),
                    children: (0, s.jsx)(h.ChK, {
                        className: S.sidebarRegionScroller,
                        fade: !0,
                        children: (0, s.jsxs)("nav", {
                            className: o()(S.sidebar, {
                                [S.mobileSidebar]: d.Fr
                            }),
                            children: [d.Fr && (0, s.jsx)("div", {
                                className: S.mobileSidebarHeader,
                                children: I
                            }), t]
                        })
                    })
                })
            })), function() {
                let e = null != x && null != p && g,
                    t = d.Fr && (0, s.jsxs)("div", {
                        className: o()(S.mobileContentHeader, {
                            [S.hideHamburger]: !e
                        }),
                        children: [e && (0, s.jsx)(c._, {
                            onClick: x
                        }), I]
                    });
                if ("custom" === f) return (0, s.jsxs)(u.F, {
                    component: "div",
                    className: S.contentRegion,
                    children: [t, n, !d.Fr && I, P()]
                });
                if ("scrollableCustom" === f) return (0, s.jsxs)(u.F, {
                    component: "div",
                    className: S.contentRegion,
                    children: [t, (0, s.jsxs)(h.GtU, {
                        className: o()(S.contentRegionScroller, C ? S.contentRegionHiddenSidebar : S.contentRegionShownSidebar),
                        ref: O,
                        children: [(0, s.jsx)(A.Provider, {
                            value: b.current,
                            children: (0, s.jsx)("div", {
                                ref: T,
                                className: S.contentColumnScrollable,
                                children: (0, s.jsx)(h.xpW, {
                                    containerRef: T,
                                    children: n
                                })
                            })
                        }), !d.Fr && I]
                    }), P()]
                });
                let i = v[f ?? "default"];
                return (0, s.jsxs)(u.F, {
                    component: "div",
                    className: o()(S.contentRegion, {
                        [S.hidden]: d.Fr && !0 === g
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: S.contentTransitionWrap,
                        children: [t, (0, s.jsxs)(h.GtU, {
                            className: o()(S.contentRegionScroller, C ? S.contentRegionHiddenSidebar : S.contentRegionShownSidebar),
                            ref: O,
                            children: [(0, s.jsx)(A.Provider, {
                                value: b.current,
                                children: (0, s.jsx)(h.VQ0.Panel, {
                                    id: l,
                                    className: o()(S.contentColumn, S[i], {
                                        [S.mobileContent]: d.Fr
                                    }),
                                    ref: T,
                                    style: d.Fr ? {
                                        maxWidth: window.innerWidth
                                    } : void 0,
                                    children: C ? n : (0, s.jsx)(h.xpW, {
                                        containerRef: T,
                                        children: n
                                    })
                                })
                            }), !d.Fr && I]
                        })]
                    }), P()]
                })
            }()]
        }))
    })
}