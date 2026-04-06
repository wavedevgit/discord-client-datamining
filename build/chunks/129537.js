/** chunk id: 129537 params = (module,exports,require) **/
n.d(t, {
    A: () => b,
    P: () => m
});
var i, a = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(687498),
    d = n(52133),
    c = n(203982),
    u = n(5463),
    _ = n(652215),
    h = n(460430),
    m = ((i = {}).MOVE = "MOVE", i.RESIZE_NORTH = "RESIZE_NORTH", i.RESIZE_WEST = "RESIZE_WEST", i.RESIZE_EAST = "RESIZE_EAST", i.RESIZE_SOUTH = "RESIZE_SOUTH", i.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", i.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", i.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", i.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", i);
let f = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function g(e, t, n) {
    let {
        width: i,
        height: a,
        fixed: r
    } = e;
    return {
        width: "auto" === i ? "auto" : Math.max(t, i),
        height: "auto" === a ? "auto" : Math.max(n, a),
        fixed: r
    }
}

function p(e) {
    let {
        top: t,
        left: n,
        bottom: i,
        right: a
    } = e;
    return null == n && null == a && (n = 0), null == t && null == i && (t = 0), {
        top: t,
        left: n,
        bottom: i,
        right: a
    }
}

function A(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`
}

function E(e, t) {
    let n = 0;
    return {
        width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
        height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
    }
}

function I(e, t) {
    let {
        top: n,
        left: i,
        bottom: a,
        right: r
    } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return {
                bottom: a, left: i, right: void 0, top: void 0
            };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return {
                bottom: a, right: r, left: void 0, top: void 0
            };
        case "RESIZE_SOUTH_EAST":
            return {
                top: n, left: i, bottom: void 0, right: void 0
            };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return {
                top: n, right: r, bottom: void 0, left: void 0
            };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`)
    }
}

function x(e) {
    let {
        computedSize: t
    } = e;
    return t
}
class b extends r.Component {
    static Operations = m;
    anchor;
    requestedSize;
    size;
    ref = r.createRef();
    constrainedAutoSizeRaf = null;
    pendingConstrainedAutoSizeUpdate = !1;
    dragState = {
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        dragOrientedCoords: {
            top: 0,
            left: 0
        }
    };
    state = {
        lockExtras: !0,
        operation: null,
        operationStarted: !1,
        anchorTopOverride: void 0,
        anchorLeftOverride: void 0
    };
    constructor(e) {
        super(e), this.anchor = p(e.anchor), this.requestedSize = g(e.size, e.minSize.width, e.minSize.height), this.size = this.requestedSize
    }
    shouldConstrainAutoSizeToExplicitResizeEvents() {
        let {
            constrainAutoSizeToExplicitResizeEvents: e
        } = this.props;
        return !!e && ("auto" === this.requestedSize.width || "auto" === this.requestedSize.height)
    }
    scheduleConstrainedAutoSizeUpdate() {
        let {
            targetWindow: e
        } = this.props;
        this.shouldConstrainAutoSizeToExplicitResizeEvents() && (null != this.constrainedAutoSizeRaf && e.cancelAnimationFrame(this.constrainedAutoSizeRaf), this.constrainedAutoSizeRaf = e.requestAnimationFrame(() => {
            this.constrainedAutoSizeRaf = null, this.applyConstrainedAutoSizeFromDOM()
        }))
    }
    applyConstrainedAutoSizeFromDOM() {
        if (!this.shouldConstrainAutoSizeToExplicitResizeEvents()) return;
        if (null != this.state.operation) {
            this.pendingConstrainedAutoSizeUpdate = !0;
            return
        }
        let e = this.ref.current;
        if (null == e) return;
        let {
            minSize: t
        } = this.props, n = Math.max(t.width, Math.round(e.offsetWidth)), i = Math.max(t.height, Math.round(e.offsetHeight)), a = "auto" === this.requestedSize.width ? n : this.requestedSize.width, r = "auto" === this.requestedSize.height ? i : this.requestedSize.height;
        this.setDOMSize({
            width: a,
            height: r,
            fixed: this.requestedSize.fixed
        }, !0)
    }
    shouldComponentUpdate(e, t) {
        return !(0, d.A)(t, this.state) || !(0, d.A)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, d.A)(e.anchor, this.props.anchor) || !(0, d.A)(e.size, this.props.size) || !(0, d.A)(e.minSize, this.props.minSize) || !(0, d.A)(e.container, this.props.container)
    }
    componentDidMount() {
        this.setDOMPositions(p(this.props.anchor)), this.requestedSize = g(this.props.size, this.props.minSize.width, this.props.minSize.height), this.setDOMSize(this.requestedSize), this.shouldConstrainAutoSizeToExplicitResizeEvents() && (this.scheduleConstrainedAutoSizeUpdate(), this.props.targetWindow.addEventListener("resize", this.handleWindowResize)), c._.subscribe(_.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
    }
    componentDidUpdate(e, t) {
        null == this.state.operation && ((0, d.A)(this.props.anchor, e.anchor) || this.setDOMPositions(p(this.props.anchor)), (0, d.A)(this.props.size, e.size) || (this.requestedSize = g(this.props.size, this.props.minSize.width, this.props.minSize.height), this.setDOMSize(this.requestedSize), this.scheduleConstrainedAutoSizeUpdate()))
    }
    componentWillUnmount() {
        this.handleOperationEnd(), null != this.constrainedAutoSizeRaf && (this.props.targetWindow.cancelAnimationFrame(this.constrainedAutoSizeRaf), this.constrainedAutoSizeRaf = null), this.props.targetWindow.removeEventListener("resize", this.handleWindowResize), c._.unsubscribe(_.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
    }
    handleWindowResize = () => {
        this.applyConstrainedAutoSizeFromDOM()
    };
    handleShowUI = e => {
        let {
            show: t
        } = e;
        this.setLockExtras(t)
    };
    handleMouseDown = e => {
        let t = e.target;
        if (t?.closest?.('[data-dnd-drag-handle="true"]') != null) return;
        let {
            dragAnywhere: n
        } = this.props, {
            current: i
        } = this.ref;
        null != i && e.button === _.hE4.PRIMARY && n && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    };
    handleMouseMove = e => {
        e.preventDefault(), e.stopPropagation();
        let {
            clientX: t,
            clientY: n
        } = e, {
            dragState: {
                startX: i,
                startY: a
            },
            state: {
                operation: r,
                operationStarted: l
            }
        } = this;
        !(null == r || !l && Math.pow(i - t, 2) + Math.pow(a - n, 2) < 3) && ("MOVE" === r ? this.handleDragMove(t, n) : f.has(r) && this.handleResizeMove(t, n))
    };
    handleResizeMouseDown(e, t) {
        let {
            clientX: n,
            clientY: i
        } = e;
        e.stopPropagation(), this.handleOperationStart(t, n, i)
    }
    handleOperationStart = (e, t, n) => {
        let {
            ref: {
                current: i
            },
            props: {
                targetWindow: a,
                active: r,
                container: {
                    maxX: l,
                    maxY: s
                }
            }
        } = this;
        if (null == i || !r) return;
        let {
            width: o,
            height: d
        } = E(i, this.size), c = (0, u.Ly)(this.anchor, l, s, o, d);
        if ("MOVE" === e) {
            let {
                x: e,
                y: i
            } = function(e) {
                let {
                    top: t,
                    left: n
                } = e;
                return {
                    x: n,
                    y: t
                }
            }(c);
            this.dragState = {
                ...this.dragState,
                startX: t,
                startY: n,
                offsetX: t - e,
                offsetY: n - i
            }
        } else {
            let i = I(e, c);
            this.setDOMPositions(i), this.dragState = {
                ...this.dragState,
                startX: t,
                startY: n,
                offsetWidth: o,
                offsetHeight: d,
                dragOrientedCoords: i
            }
        }
        this.setState({
            operation: e,
            operationStarted: !1
        }, () => {
            a.addEventListener("mousemove", this.handleMouseMove), a.addEventListener("mouseup", this.handleOperationEnd)
        })
    };
    handleDragMove(e, t) {
        let {
            ref: {
                current: n
            },
            props: {
                id: i,
                container: {
                    maxX: a,
                    maxY: r,
                    minX: l,
                    minY: s
                },
                onDragStart: o,
                onDrag: d,
                snapOrientation: c = !0
            },
            dragState: {
                offsetX: _,
                offsetY: h
            },
            state: {
                operationStarted: m
            }
        } = this;
        if (null == n) return null;
        e = Math.max(Math.min(a, e), l), t = Math.max(Math.min(r, t), s);
        let {
            width: f,
            height: g
        } = E(n, this.size), p = t - h, A = e - _, x = (0, u.fh)((0, u.Ly)({
            top: p,
            left: A,
            bottom: void 0,
            right: void 0
        }, a, r, f, g)), b = c ? (0, u.h1)(x) : I("RESIZE_SOUTH_EAST", x);
        this.setDOMPositions(b), this.setState({
            operationStarted: !0,
            anchorTopOverride: null != b.top,
            anchorLeftOverride: null != b.left
        }, () => {
            m || null == o || o(), null != d && d(i, "MOVE", this.anchor, this.size)
        })
    }
    handleResizeMove(e, t) {
        let {
            props: {
                id: n,
                minSize: i,
                container: {
                    maxX: a,
                    maxY: r,
                    minX: l,
                    minY: s
                },
                onDragStart: o,
                onDrag: c,
                resizeValidation: _ = x
            },
            state: {
                operation: h,
                operationStarted: m
            }
        } = this, {
            startX: f,
            startY: g
        } = this.dragState, p = 0, A = 0;
        if (null == h) return;
        switch (e = Math.max(Math.min(a, e), l), t = Math.max(Math.min(r, t), s), h) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
                p -= f - e;
                break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
                p += f - e
        }
        switch (h) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
                A -= g - t;
                break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
                A += g - t
        }
        let E = _({
                padding: 8,
                borderWidth: 2,
                operation: h,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + p, i.width),
                    height: Math.max(this.dragState.offsetHeight + A, i.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            I = (0, u.af)((0, u.fh)((0, u.Ly)(this.dragState.dragOrientedCoords, a, r, E.width, E.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize({
            ...E,
            fixed: this.size.fixed
        }, !0), (0, d.A)(I, this.dragState.dragOrientedCoords) || (this.dragState.dragOrientedCoords = I, this.setDOMPositions(this.dragState.dragOrientedCoords)), m || (null != o && o(), this.setState({
            operationStarted: !0
        })), null != c && c(n, h, this.anchor, this.size)
    }
    handleOperationEnd = () => {
        let {
            operation: e,
            operationStarted: t
        } = this.state, {
            targetWindow: n,
            onDragEnd: i
        } = this.props;
        n.removeEventListener("mousemove", this.handleMouseMove), n.removeEventListener("mouseup", this.handleOperationEnd);
        let a = t ? () => {
            let {
                onUpdate: t,
                id: n
            } = this.props, i = this.shouldConstrainAutoSizeToExplicitResizeEvents() && "MOVE" === e ? this.requestedSize : this.size;
            t(e, n, this.anchor, i, E(this.ref.current, this.size))
        } : void 0;
        if (t) {
            let {
                maxX: e,
                maxY: t
            } = this.props.container, {
                width: n,
                height: a
            } = E(this.ref.current, this.size), r = (0, u.Ly)(this.anchor, e, t, n, a), l = (0, u.h1)(r);
            this.setDOMPositions(l), this.setDOMSize({
                width: n,
                height: a,
                fixed: this.size.fixed
            }), null != i && i()
        }
        this.setState({
            operation: null,
            operationStarted: !1
        }, () => {
            a?.(), this.pendingConstrainedAutoSizeUpdate && (this.pendingConstrainedAutoSizeUpdate = !1, this.scheduleConstrainedAutoSizeUpdate())
        })
    };
    setDOMPositions(e) {
        let {
            top: t,
            left: n,
            bottom: i,
            right: a
        } = e, {
            current: r
        } = this.ref;
        this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: a
        }, null != r && (r.style.top = A(t), r.style.bottom = A(i), r.style.left = A(n), r.style.right = A(a))
    }
    setDOMSize(e) {
        let {
            width: t,
            height: n,
            fixed: i
        } = e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], {
            current: r
        } = this.ref;
        t = "auto" !== this.size.width || a ? t : "auto", n = "auto" !== this.size.height || a ? n : "auto", this.size = {
            width: t,
            height: n,
            fixed: i
        }, null != r && (r.style.width = A(t), r.style.height = A(n))
    }
    renderResizeHandles() {
        let {
            resizeY: e,
            resizeX: t,
            active: n
        } = this.props;
        return (0, a.jsxs)(a.Fragment, {
            children: [e ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: s()(h.M$, {
                        [h.An]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
                }), (0, a.jsx)("div", {
                    className: s()(h.Q8, {
                        [h.An]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
                })]
            }) : null, t ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: s()(h.cz, {
                        [h.zC]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
                }), (0, a.jsx)("div", {
                    className: s()(h._J, {
                        [h.zC]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
                })]
            }) : null, t && e ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: s()(h.DS, {
                        [h.Ke]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
                }), (0, a.jsx)("div", {
                    className: s()(h.Bc, {
                        [h.UJ]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
                }), (0, a.jsx)("div", {
                    className: s()(h.rL, {
                        [h.UJ]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
                }), (0, a.jsx)("div", {
                    className: s()(h.Rl, {
                        [h.Ke]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
                })]
            }) : null]
        })
    }
    setLockExtras = e => {
        this.setState({
            lockExtras: e
        })
    };
    renderExtras() {
        let {
            props: {
                renderExtras: e,
                anchor: t
            },
            setLockExtras: n
        } = this, i = e?.(n);
        return null != i ? (0, a.jsx)("div", {
            className: s()({
                [h.Q4]: !0,
                [h.VO]: null != t.bottom && null == t.top,
                [h.ao]: null != t.right && null == t.left
            }),
            children: i
        }) : null
    }
    getInlineStyles() {
        let {
            props: {
                hidden: e,
                style: t,
                minSize: n,
                padding: i = 8,
                borderWidth: a = 2,
                borderRadius: r = 12
            },
            state: {
                operation: l
            }
        } = this;
        return {
            ...t,
            ...{
                minWidth: n.width,
                minHeight: n.height,
                borderWidth: a,
                padding: i,
                borderRadius: r + a + i,
                zIndex: null != l ? 1e3 : void 0,
                visibility: e ? "hidden" : void 0
            }
        }
    }
    renderChildren() {
        let {
            props: {
                children: e,
                hidden: t,
                padding: n = 8,
                borderWidth: i = 2,
                locked: a
            },
            size: r,
            anchor: l,
            setLockExtras: s,
            state: {
                anchorTopOverride: o,
                anchorLeftOverride: d
            }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != o ? o : null != l.top,
            anchorLeft: null != d ? d : null != l.left,
            size: r,
            padding: n,
            borderWidth: i,
            setLockExtras: s,
            locked: a,
            hidden: t,
            showEmpty: this.state.lockExtras
        })
    }
    render() {
        let {
            props: {
                onClick: e,
                id: t,
                locked: n,
                className: i,
                forceShowExtras: r
            },
            state: {
                operationStarted: l,
                lockExtras: d
            }
        } = this;
        return (0, a.jsxs)(o.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: s()({
                [h.iE]: !0,
                [h.MQ]: l,
                [h.YR]: !n,
                [h.sG]: r && n,
                [h.vP]: d
            }, i),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        })
    }
}