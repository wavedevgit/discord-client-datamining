/** Chunk was on 78528 **/
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
    p = n(311907),
    h = n(73939),
    f = n(397927),
    g = n(915967),
    m = n(34968),
    b = n(775121),
    A = n(775602),
    y = n(400492),
    _ = n(203982),
    O = n(635914),
    j = n(652215),
    v = n(985018),
    x = n(353108);

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
        case j.Ks6.ARROW_UP:
            return "UP";
        case j.Ks6.ARROW_DOWN:
            return "DOWN";
        case j.Ks6.ARROW_LEFT:
            return "LEFT";
        case j.Ks6.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null
    }
}
let I = [g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.VOICE_AND_VIDEO, g.Q_.CHAT, g.Q_.MISCELLANEOUS];

function N(e) {
    let {
        showBackdrop: t
    } = e;
    return (0, r.jsx)("div", {
        className: s()(x.tB, {
            [x.WU]: t
        })
    })
}

function T() {
    let e = l.useMemo(() => u()((0, g.Bx)()).groupBy(e => e.group).value(), []);
    return (0, r.jsx)("div", {
        className: x.Io,
        children: I.map(t => {
            let n = e[t],
                l = (0, g.Gm)(t),
                i = (0, g.zF)(t);
            return (0, r.jsxs)("div", {
                className: x.ZK,
                children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(f.Heading, {
                        variant: "heading-lg/semibold",
                        children: l
                    }), null != i && (0, r.jsx)(f.Text, {
                        className: x.UX,
                        variant: "text-sm/normal",
                        children: i
                    })]
                }), (0, r.jsx)("div", {
                    className: x.tI,
                    children: n.map((e, t) => {
                        var n;
                        return (null == (n = e.predicate) ? void 0 : n.call(e)) === !1 ? null : (0, r.jsxs)("div", {
                            className: x.YI,
                            children: [(0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                children: e.description
                            }), (0, r.jsx)("div", {
                                className: "keybind-shortcuts",
                                children: e.binds.map(e => (0, r.jsx)(f.e7I, {
                                    className: x.Me,
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
        this.lastInputedKeys = [], _._.subscribe(j.jej.SCROLL_PAGE_UP, this.scrollPageUp), _._.subscribe(j.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
            capture: !0
        }), window.addEventListener("keyup", this.handleKeyUp, {
            capture: !0
        })
    }
    componentWillUnmount() {
        _._.unsubscribe(j.jej.SCROLL_PAGE_UP, this.scrollPageUp), _._.unsubscribe(j.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
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
            className: x.UV,
            style: this.getStyles(),
            children: [(0, r.jsxs)(f.H, {
                className: x.GK,
                children: [(0, r.jsx)("div", {
                    className: x.Qs,
                    children: v.intl.string(v.t["1BdUtx"])
                }), (0, r.jsx)(f.e7I, {
                    shortcut: "mod+/"
                })]
            }), (0, r.jsx)("div", {
                className: x.KV,
                children: v.intl.string(v.t["2t19lU"])
            }), (0, r.jsxs)("div", {
                className: x.Pg,
                children: [(0, r.jsx)(w, {
                    arrow: "LEFT",
                    isActive: n,
                    className: x.kb,
                    children: "left"
                }), (0, r.jsx)(w, {
                    arrow: "DOWN",
                    isActive: t,
                    className: x.TR,
                    children: "down"
                }), (0, r.jsx)(w, {
                    arrow: "UP",
                    isActive: e,
                    className: x.up,
                    children: "up"
                }), (0, r.jsx)(w, {
                    arrow: "RIGHT",
                    isActive: l,
                    className: x.pG,
                    children: "right"
                })]
            }), (0, r.jsx)(f.GtU, {
                ref: this.scrollerRef,
                fade: !0,
                children: (0, r.jsx)(f.Fmo, {
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
            if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === j.Ks6.H && this.lastInputedKeys[1] === j.Ks6.H && this.lastInputedKeys[2] === j.Ks6.ARROW_RIGHT && this.lastInputedKeys[3] === j.Ks6.N && this.lastInputedKeys[4] === j.Ks6.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
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
    }, [o]), (0, r.jsx)(f.DUT, {
        onClick: u,
        className: s()(x.UE, i, {
            [x.vu]: t || o
        }),
        children: a
    })
}

function R(e) {
    let {
        transitionState: t,
        onClose: n
    } = e, [i, a] = l.useState(!1), [o, c] = l.useState(!1), u = l.useMemo(() => __OVERLAY__ ? (0, m.y8)() : (0, g.Bx)(), []), {
        keyboardModeEnabled: d,
        useReducedMotion: y
    } = (0, p.cf)([A.A], () => ({
        keyboardModeEnabled: A.A.keyboardModeEnabled,
        useReducedMotion: A.A.useReducedMotion
    }));
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N, {
            showBackdrop: o
        }), (0, r.jsx)(f.EOs, {
            className: s()(x._$, {
                [x.O9]: i
            }),
            size: f.rIJ.DYNAMIC,
            "aria-label": v.intl.string(v.t.T9DA2K),
            transitionState: t,
            parentComponent: "KeyboardShortcutsModal",
            children: (0, r.jsx)(h.F, {
                component: "div",
                children: i ? (0, r.jsx)(O.A, {
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