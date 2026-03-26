/** chunk id: 685603 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => v,
    P: () => h
});
var n, s = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    o = i(52133),
    d = i(5463),
    c = i(652215),
    u = i(271246),
    h = ((n = {}).MOVE = "MOVE", n.RESIZE_NORTH = "RESIZE_NORTH", n.RESIZE_WEST = "RESIZE_WEST", n.RESIZE_EAST = "RESIZE_EAST", n.RESIZE_SOUTH = "RESIZE_SOUTH", n.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", n.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", n.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", n.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", n);
let _ = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function p(e, t, i) {
    let {
        width: n,
        height: s
    } = e;
    return {
        width: "auto" === n ? "auto" : Math.max(t, n),
        height: "auto" === s ? "auto" : Math.max(i, s)
    }
}

function f(e) {
    let {
        top: t,
        left: i,
        bottom: n,
        right: s
    } = e;
    return null == i && null == s && (i = 0), null == t && null == n && (t = 0), {
        top: t,
        left: i,
        bottom: n,
        right: s
    }
}

function m(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`
}

function g(e, t) {
    let i = 0;
    return {
        width: i = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
        height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
    }
}

function A(e, t) {
    let {
        top: i,
        left: n,
        bottom: s,
        right: a
    } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return {
                bottom: s, left: n, right: void 0, top: void 0
            };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return {
                bottom: s, right: a, left: void 0, top: void 0
            };
        case "RESIZE_SOUTH_EAST":
            return {
                top: i, left: n, bottom: void 0, right: void 0
            };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return {
                top: i, right: a, bottom: void 0, left: void 0
            };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`)
    }
}
class x extends a.Component {
    static Operations = h;
    static defaultProps = {
        snapOrientation: !0,
        minSize: {
            width: 0,
            height: 0
        },
        container: {
            minX: 0,
            minY: 0,
            maxX: 1 / 0,
            maxY: 1 / 0
        },
        resizeX: !0,
        resizeY: !0,
        hidden: !1,
        dragAnywhere: !0,
        active: !0,
        targetWindow: window
    };
    anchor;
    size;
    ref = a.createRef();
    dragState = {
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0
    };
    state = {
        operation: null,
        operationStarted: !1
    };
    constructor(e) {
        super(e), this.anchor = f(e.anchor), this.size = p(e.size, e.minSize.width, e.minSize.height)
    }
    shouldComponentUpdate(e, t) {
        return !(0, o.A)(t, this.state) || !(0, o.A)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, o.A)(e.anchor, this.props.anchor) || !(0, o.A)(e.size, this.props.size) || !(0, o.A)(e.minSize, this.props.minSize) || !(0, o.A)(e.container, this.props.container)
    }
    componentDidUpdate(e, t) {
        null == t.operation && ((0, o.A)(this.props.anchor, e.anchor) || this.setDOMPositions(f(this.props.anchor)), (0, o.A)(this.props.size, e.size) || this.setDOMSize(p(this.props.size, this.props.minSize.width, this.props.minSize.height)))
    }
    componentWillUnmount() {
        this.handleOperationEnd()
    }
    handleMouseDown = e => {
        e.stopPropagation();
        let {
            dragAnywhere: t
        } = this.props, {
            current: i
        } = this.ref;
        null != i && e.button === c.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    };
    handleMouseMove = e => {
        e.preventDefault(), e.stopPropagation();
        let {
            clientX: t,
            clientY: i
        } = e, {
            dragState: {
                startX: n,
                startY: s
            },
            state: {
                operation: a,
                operationStarted: l
            }
        } = this;
        !(null == a || !l && Math.pow(n - t, 2) + Math.pow(s - i, 2) < 3) && ("MOVE" === a ? this.handleDragMove(t, i) : _.has(a) && this.handleResizeMove(t, i))
    };
    handleResizeMouseDown(e, t) {
        let {
            clientX: i,
            clientY: n
        } = e;
        e.stopPropagation(), this.handleOperationStart(t, i, n)
    }
    handleOperationStart = (e, t, i) => {
        let {
            ref: {
                current: n
            },
            props: {
                targetWindow: s,
                active: a,
                container: {
                    maxX: l,
                    maxY: r
                }
            }
        } = this;
        if (null == n || !a) return;
        let {
            width: o,
            height: c
        } = g(n, this.size), u = (0, d.Ly)(this.anchor, l, r, o, c);
        if ("MOVE" === e) {
            let {
                x: e,
                y: n
            } = function(e) {
                let {
                    top: t,
                    left: i
                } = e;
                return {
                    x: i,
                    y: t
                }
            }(u);
            this.dragState = {
                ...this.dragState,
                startX: t,
                startY: i,
                offsetX: t - e,
                offsetY: i - n
            }
        } else {
            let n = A(e, u);
            this.setDOMPositions(n), this.dragState = {
                ...this.dragState,
                startX: t,
                startY: i,
                offsetWidth: o,
                offsetHeight: c
            }
        }
        this.setState({
            operation: e,
            operationStarted: !1
        }, () => {
            s.addEventListener("mousemove", this.handleMouseMove), s.addEventListener("mouseup", this.handleOperationEnd)
        })
    };
    handleDragMove(e, t) {
        let {
            ref: {
                current: i
            },
            props: {
                id: n,
                container: {
                    maxX: s,
                    maxY: a,
                    minX: l,
                    minY: r
                },
                onDragStart: o,
                onDrag: c,
                snapOrientation: u
            },
            dragState: {
                offsetX: h,
                offsetY: _
            },
            state: {
                operationStarted: p
            }
        } = this;
        if (null == i) return null;
        e = Math.max(Math.min(s, e), l), t = Math.max(Math.min(a, t), r);
        let {
            width: f,
            height: m
        } = g(i, this.size), x = t - _, v = e - h, y = (0, d.fh)((0, d.Ly)({
            top: x,
            left: v,
            bottom: void 0,
            right: void 0
        }, s, a, f, m)), E = u ? (0, d.h1)(y) : A("RESIZE_SOUTH_EAST", y);
        this.setDOMPositions(E), p || (null != o && o(), this.setState({
            operationStarted: !0
        })), null != c && c(n, "MOVE", this.anchor, this.size)
    }
    handleResizeMove(e, t) {
        let {
            props: {
                id: i,
                minSize: n,
                container: {
                    maxX: s,
                    maxY: a,
                    minX: l,
                    minY: r
                },
                onDragStart: o,
                onDrag: d
            },
            state: {
                operation: c,
                operationStarted: u
            }
        } = this, {
            startX: h,
            startY: _,
            offsetWidth: p,
            offsetHeight: f
        } = this.dragState, m = 0, g = 0;
        if (null != c) {
            switch (e = Math.max(Math.min(s, e), l), t = Math.max(Math.min(a, t), r), c) {
                case "RESIZE_EAST":
                case "RESIZE_SOUTH_EAST":
                case "RESIZE_NORTH_EAST":
                    m -= h - e;
                    break;
                case "RESIZE_WEST":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_NORTH_WEST":
                    m += h - e
            }
            switch (c) {
                case "RESIZE_SOUTH":
                case "RESIZE_SOUTH_WEST":
                case "RESIZE_SOUTH_EAST":
                    g -= _ - t;
                    break;
                case "RESIZE_NORTH":
                case "RESIZE_NORTH_WEST":
                case "RESIZE_NORTH_EAST":
                    g += _ - t
            }
            p = Math.max(p + m, n.width), f = Math.max(f + g, n.height), this.setDOMSize({
                width: p,
                height: f
            }), u || (null != o && o(), this.setState({
                operationStarted: !0
            })), null != d && d(i, c, this.anchor, this.size)
        }
    }
    handleOperationEnd = () => {
        let {
            operation: e,
            operationStarted: t
        } = this.state, {
            targetWindow: i,
            onDragEnd: n
        } = this.props;
        i.removeEventListener("mousemove", this.handleMouseMove), i.removeEventListener("mouseup", this.handleOperationEnd);
        let s = t ? () => {
            let {
                onUpdate: t,
                id: i
            } = this.props;
            t(e, i, this.anchor, this.size, g(this.ref.current, this.size))
        } : void 0;
        if (t) {
            let {
                maxX: e,
                maxY: t
            } = this.props.container, {
                width: i,
                height: s
            } = g(this.ref.current, this.size), a = (0, d.Ly)(this.anchor, e, t, i, s), l = (0, d.h1)(a);
            this.setDOMPositions(l), this.setDOMSize({
                width: i,
                height: s
            }), null != n && n()
        }
        this.setState({
            operation: null,
            operationStarted: !1
        }, s)
    };
    setDOMPositions(e) {
        let {
            top: t,
            left: i,
            bottom: n,
            right: s
        } = e, {
            current: a
        } = this.ref;
        this.anchor = {
            top: t,
            left: i,
            bottom: n,
            right: s
        }, null != a && (a.style.top = m(t), a.style.bottom = m(n), a.style.left = m(i), a.style.right = m(s))
    }
    setDOMSize(e) {
        let {
            width: t,
            height: i
        } = e, {
            current: n
        } = this.ref;
        t = "auto" === this.size.width ? "auto" : t, i = "auto" === this.size.height ? "auto" : i, this.size = {
            width: t,
            height: i
        }, null != n && (n.style.width = m(t), n.style.height = m(i))
    }
    renderResizeHandles() {
        let {
            resizeY: e,
            resizeX: t,
            active: i
        } = this.props;
        return (0, s.jsxs)(a.Fragment, {
            children: [e ? (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: r()(u.M$, {
                        [u.An]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
                }), (0, s.jsx)("div", {
                    className: r()(u.Q8, {
                        [u.An]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
                })]
            }) : null, t ? (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: r()(u.cz, {
                        [u.zC]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
                }), (0, s.jsx)("div", {
                    className: r()(u._J, {
                        [u.zC]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
                })]
            }) : null, t && e ? (0, s.jsxs)(a.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: r()(u.DS, {
                        [u.Ke]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
                }), (0, s.jsx)("div", {
                    className: r()(u.Bc, {
                        [u.UJ]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
                }), (0, s.jsx)("div", {
                    className: r()(u.rL, {
                        [u.UJ]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
                }), (0, s.jsx)("div", {
                    className: r()(u.Rl, {
                        [u.Ke]: i
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
                })]
            }) : null]
        })
    }
    render() {
        let {
            props: {
                children: e,
                hidden: t,
                onClick: i,
                id: n,
                style: a
            },
            size: l,
            anchor: o,
            state: {
                operation: d,
                operationStarted: c
            }
        } = this;
        return (0, s.jsxs)("div", {
            ref: this.ref,
            style: {
                ...o,
                ...l,
                ...a,
                ...null != d ? {
                    zIndex: 1e3
                } : void 0,
                ...t ? {
                    visibility: "hidden"
                } : void 0
            },
            className: r()({
                [u.iE]: !0,
                [u.MQ]: c
            }),
            onMouseDown: this.handleMouseDown,
            onClick: null != i ? () => i(n) : void 0,
            children: [e(this.handleOperationStart), this.renderResizeHandles()]
        })
    }
}
let v = x