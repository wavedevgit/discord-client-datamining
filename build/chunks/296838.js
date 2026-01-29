/** Chunk was on 1113 **/
/** chunk id: 296838, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(228524), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    u = n.n(c),
    d = n(615300),
    h = n(311907),
    p = n(73939),
    g = n(397927),
    f = n(915967),
    m = n(34968),
    b = n(775121),
    A = n(775602),
    y = n(400492),
    O = n(203982),
    _ = n(635914),
    x = n(652215),
    j = n(985018),
    v = n(353108);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let C = {
    UP: u().throttle(() => (0, y.Ak)("ddr-up"), 100),
    DOWN: u().throttle(() => (0, y.Ak)("ddr-down"), 100),
    LEFT: u().throttle(() => (0, y.Ak)("ddr-left"), 100),
    RIGHT: u().throttle(() => (0, y.Ak)("ddr-right"), 100)
};

function S(e) {
    switch (e.keyCode) {
        case x.Ks6.ARROW_UP:
            return "UP";
        case x.Ks6.ARROW_DOWN:
            return "DOWN";
        case x.Ks6.ARROW_LEFT:
            return "LEFT";
        case x.Ks6.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null
    }
}
let I = [f.Q_.MESSAGE, f.Q_.NAVIGATION, f.Q_.VOICE_AND_VIDEO, f.Q_.CHAT, f.Q_.MISCELLANEOUS];

function N(e) {
    let {
        showBackdrop: t
    } = e;
    return (0, r.jsx)("div", {
        className: s()(v.tB, {
            [v.WU]: t
        })
    })
}

function T() {
    let e = l.useMemo(() => u()((0, f.Bx)()).groupBy(e => e.group).value(), []);
    return (0, r.jsx)("div", {
        className: v.Io,
        children: I.map(t => {
            let n = e[t],
                l = (0, f.Gm)(t),
                i = (0, f.zF)(t);
            return (0, r.jsxs)("div", {
                className: v.ZK,
                children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(g.Heading, {
                        variant: "heading-lg/semibold",
                        children: l
                    }), null != i && (0, r.jsx)(g.Text, {
                        className: v.UX,
                        variant: "text-sm/normal",
                        children: i
                    })]
                }), (0, r.jsx)("div", {
                    className: v.tI,
                    children: n.map((e, t) => {
                        var n;
                        return (null == (n = e.predicate) ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)("div", {
                            className: v.YI,
                            children: [(0, r.jsx)(g.Text, {
                                variant: "text-sm/normal",
                                children: e.description
                            }), (0, r.jsx)("div", {
                                className: "keybind-shortcuts",
                                children: e.binds.map(e => (0, r.jsx)(g.e7I, {
                                    className: v.Me,
                                    shortcut: e
                                }, e))
                            })]
                        }, t)
                    })
                }, t)]
            }, t)
        })
    })
}
class P extends l.PureComponent {
    componentDidMount() {
        this.lastInputedKeys = [], O._.subscribe(x.jej.SCROLL_PAGE_UP, this.scrollPageUp), O._.subscribe(x.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
            capture: !0
        }), window.addEventListener("keyup", this.handleKeyUp, {
            capture: !0
        })
    }
    componentWillUnmount() {
        O._.unsubscribe(x.jej.SCROLL_PAGE_UP, this.scrollPageUp), O._.unsubscribe(x.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
            capture: !0
        }), window.removeEventListener("keyup", this.handleKeyUp, {
            capture: !0
        })
    }
    render() {
        let {
            UP: e,
            DOWN: t,
            LEFT: n,
            RIGHT: l
        } = this.state;
        return (0, r.jsxs)(d.A.div, {
            className: v.UV,
            style: this.getStyles(),
            children: [(0, r.jsxs)(g.H, {
                className: v.GK,
                children: [(0, r.jsx)("div", {
                    className: v.Qs,
                    children: j.intl.string(j.t["1BdUtx"])
                }), (0, r.jsx)(g.e7I, {
                    shortcut: "mod+/"
                })]
            }), (0, r.jsx)("div", {
                className: v.KV,
                children: j.intl.string(j.t["2t19lU"])
            }), (0, r.jsxs)("div", {
                className: v.Pg,
                children: [(0, r.jsx)(w, {
                    arrow: "LEFT",
                    isActive: n,
                    className: v.kb,
                    children: "left"
                }), (0, r.jsx)(w, {
                    arrow: "DOWN",
                    isActive: t,
                    className: v.TR,
                    children: "down"
                }), (0, r.jsx)(w, {
                    arrow: "UP",
                    isActive: e,
                    className: v.up,
                    children: "up"
                }), (0, r.jsx)(w, {
                    arrow: "RIGHT",
                    isActive: l,
                    className: v.pG,
                    children: "right"
                })]
            }), (0, r.jsx)(g.GtU, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, r.jsx)(g.Fmo, {
                    children: (0, r.jsx)(T, {})
                })
            })]
        })
    }
    constructor(...e) {
        super(...e), E(this, "state", {
            UP: !1,
            DOWN: !1,
            LEFT: !1,
            RIGHT: !1,
            opacity: new d.A.Value(1),
            scaleX: new d.A.Value(1),
            scaleY: new d.A.Value(0),
            animating: !1
        }), E(this, "scrollerRef", l.createRef()), E(this, "lastInputedKeys", []), E(this, "scrollPageUp", () => {
            let e = this.scrollerRef.current;
            o()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
                animate: !0
            })
        }), E(this, "scrollPageDown", () => {
            let e = this.scrollerRef.current;
            o()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
                animate: !0
            })
        }), E(this, "arrowUp", e => {
            let {
                direction: t
            } = e;
            this.setState({
                [t]: !1
            })
        }), E(this, "arrowDown", e => {
            let {
                direction: t
            } = e;
            C[t](), this.setState({
                [t]: !0
            })
        }), E(this, "componentWillLeave", e => {
            this.setState({
                animating: !0
            }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), d.A.sequence([d.A.timing(this.state.opacity, {
                toValue: 0,
                duration: 800,
                easing: d.A.Easing.cubic
            })]).start(e)
        }), E(this, "toggleOpacity", () => {
            1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
        }), E(this, "getStyles", () => ({
            opacity: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
            }),
            transform: [{
                scaleX: this.state.scaleX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 2]
                })
            }, {
                scaleY: this.state.scaleY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                })
            }]
        })), E(this, "handleKeyDown", e => {
            if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === x.Ks6.H && this.lastInputedKeys[1] === x.Ks6.H && this.lastInputedKeys[2] === x.Ks6.ARROW_RIGHT && this.lastInputedKeys[3] === x.Ks6.N && this.lastInputedKeys[4] === x.Ks6.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
            let t = S(e);
            null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
                direction: t
            }))
        }), E(this, "handleKeyUp", e => {
            if (this.props.keyboardModeEnabled) return;
            let t = S(e);
            null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
                direction: t
            }))
        }), E(this, "onArrowClick", e => {
            this.arrowDown({
                direction: e
            })
        })
    }
}

function w(e) {
    let {
        isActive: t,
        arrow: n,
        className: i,
        children: a
    } = e, [o, c] = l.useState(t), u = l.useCallback(() => {
        C[n](), c(!0)
    }, [n]);
    return l.useEffect(() => {
        if (o) {
            let e = setTimeout(() => c(!1), 500);
            return () => clearTimeout(e)
        }
    }, [o]), (0, r.jsx)(g.DUT, {
        onClick: u,
        className: s()(v.UE, i, {
            [v.vu]: t || o
        }),
        children: a
    })
}

function R(e) {
    let {
        transitionState: t,
        onClose: n
    } = e, [i, a] = l.useState(!1), [o, c] = l.useState(!1), u = l.useMemo(() => __OVERLAY__ ? (0, m.y8)() : (0, f.Bx)(), []), {
        keyboardModeEnabled: d,
        useReducedMotion: y
    } = (0, h.cf)([A.A], () => ({
        keyboardModeEnabled: A.A.keyboardModeEnabled,
        useReducedMotion: A.A.useReducedMotion
    }));
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N, {
            showBackdrop: o
        }), (0, r.jsx)(g.EOs, {
            className: s()(v._$, {
                [v.O9]: i
            }),
            size: g.rIJ.DYNAMIC,
            "aria-label": j.intl.string(j.t.T9DA2K),
            transitionState: t,
            parentComponent: "KeyboardShortcutsModal",
            children: (0, r.jsx)(p.F, {
                component: "div",
                children: i ? (0, r.jsx)(_.A, {
                    handleDemonClose: function() {
                        c(!1), setTimeout(n, 500)
                    }
                }, "raging-demo") : (0, r.jsx)(P, {
                    content: u,
                    keyboardModeEnabled: d,
                    activateRagingDemon: function() {
                        y || (b.A.disable(), a(!0), c(!0))
                    }
                }, "modal")
            })
        })]
    })
}