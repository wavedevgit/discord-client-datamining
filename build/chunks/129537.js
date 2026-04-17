/** chunk id: 129537 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    P: () => m
});
var i, r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(825638),
    u = n(52133),
    d = n(203982),
    c = n(5463),
    h = n(652215),
    g = n(381822),
    m = ((i = {}).MOVE = "MOVE", i.RESIZE_NORTH = "RESIZE_NORTH", i.RESIZE_WEST = "RESIZE_WEST", i.RESIZE_EAST = "RESIZE_EAST", i.RESIZE_SOUTH = "RESIZE_SOUTH", i.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", i.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", i.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", i.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", i);
let f = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function A(e, t, n) {
    let {
        width: i,
        height: r,
        fixed: l
    } = e;
    return {
        width: "auto" === i ? "auto" : Math.max(t, i),
        height: "auto" === r ? "auto" : Math.max(n, r),
        fixed: l
    }
}

function I(e) {
    let {
        top: t,
        left: n,
        bottom: i,
        right: r
    } = e;
    return null == n && null == r && (n = 0), null == t && null == i && (t = 0), {
        top: t,
        left: n,
        bottom: i,
        right: r
    }
}

function E(e) {
    return "auto" === e || null == e ? "auto" : `${e}px`
}

function p(e, t) {
    let n = 0;
    return {
        width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
        height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
    }
}

function _(e, t) {
    let {
        top: n,
        left: i,
        bottom: r,
        right: l
    } = t;
    switch (e) {
        case "RESIZE_EAST":
        case "RESIZE_NORTH_EAST":
        case "RESIZE_NORTH":
            return {
                bottom: r, left: i, right: void 0, top: void 0
            };
        case "RESIZE_WEST":
        case "RESIZE_NORTH_WEST":
            return {
                bottom: r, right: l, left: void 0, top: void 0
            };
        case "RESIZE_SOUTH_EAST":
            return {
                top: n, left: i, bottom: void 0, right: void 0
            };
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
            return {
                top: n, right: l, bottom: void 0, left: void 0
            };
        default:
            throw Error(`getOrientedCoords: Invalid orientation: ${e}`)
    }
}

function S(e) {
    let {
        computedSize: t
    } = e;
    return t
}
class x extends l.Component {
    static Operations = m;
    anchor;
    requestedSize;
    size;
    ref = l.createRef();
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
        super(e), this.anchor = I(e.anchor), this.requestedSize = A(e.size, e.minSize.width, e.minSize.height), this.size = this.requestedSize
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
        } = this.props, n = Math.max(t.width, Math.round(e.offsetWidth)), i = Math.max(t.height, Math.round(e.offsetHeight)), r = "auto" === this.requestedSize.width ? n : this.requestedSize.width, l = "auto" === this.requestedSize.height ? i : this.requestedSize.height;
        this.setDOMSize({
            width: r,
            height: l,
            fixed: this.requestedSize.fixed
        }, !0)
    }
    shouldComponentUpdate(e, t) {
        return !(0, u.A)(t, this.state) || !(0, u.A)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, u.A)(e.anchor, this.props.anchor) || !(0, u.A)(e.size, this.props.size) || !(0, u.A)(e.minSize, this.props.minSize) || !(0, u.A)(e.container, this.props.container)
    }
    componentDidMount() {
        this.setDOMPositions(I(this.props.anchor)), this.requestedSize = A(this.props.size, this.props.minSize.width, this.props.minSize.height), this.setDOMSize(this.requestedSize), this.shouldConstrainAutoSizeToExplicitResizeEvents() && (this.scheduleConstrainedAutoSizeUpdate(), this.props.targetWindow.addEventListener("resize", this.handleWindowResize)), d._.subscribe(h.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
    }
    componentDidUpdate(e, t) {
        null == this.state.operation && ((0, u.A)(this.props.anchor, e.anchor) || this.setDOMPositions(I(this.props.anchor)), (0, u.A)(this.props.size, e.size) || (this.requestedSize = A(this.props.size, this.props.minSize.width, this.props.minSize.height), this.setDOMSize(this.requestedSize), this.scheduleConstrainedAutoSizeUpdate()))
    }
    componentWillUnmount() {
        this.handleOperationEnd(), null != this.constrainedAutoSizeRaf && (this.props.targetWindow.cancelAnimationFrame(this.constrainedAutoSizeRaf), this.constrainedAutoSizeRaf = null), this.props.targetWindow.removeEventListener("resize", this.handleWindowResize), d._.unsubscribe(h.jej.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
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
        null != i && e.button === h.hE4.PRIMARY && n && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    };
    handleMouseMove = e => {
        e.preventDefault(), e.stopPropagation();
        let {
            clientX: t,
            clientY: n
        } = e, {
            dragState: {
                startX: i,
                startY: r
            },
            state: {
                operation: l,
                operationStarted: s
            }
        } = this;
        !(null == l || !s && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3) && ("MOVE" === l ? this.handleDragMove(t, n) : f.has(l) && this.handleResizeMove(t, n))
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
                targetWindow: r,
                active: l,
                container: {
                    maxX: s,
                    maxY: a
                }
            }
        } = this;
        if (null == i || !l) return;
        let {
            width: o,
            height: u
        } = p(i, this.size), d = (0, c.Ly)(this.anchor, s, a, o, u);
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
            }(d);
            this.dragState = {
                ...this.dragState,
                startX: t,
                startY: n,
                offsetX: t - e,
                offsetY: n - i
            }
        } else {
            let i = _(e, d);
            this.setDOMPositions(i), this.dragState = {
                ...this.dragState,
                startX: t,
                startY: n,
                offsetWidth: o,
                offsetHeight: u,
                dragOrientedCoords: i
            }
        }
        this.setState({
            operation: e,
            operationStarted: !1
        }, () => {
            r.addEventListener("mousemove", this.handleMouseMove), r.addEventListener("mouseup", this.handleOperationEnd)
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
                    maxX: r,
                    maxY: l,
                    minX: s,
                    minY: a
                },
                onDragStart: o,
                onDrag: u,
                snapOrientation: d = !0
            },
            dragState: {
                offsetX: h,
                offsetY: g
            },
            state: {
                operationStarted: m
            }
        } = this;
        if (null == n) return null;
        e = Math.max(Math.min(r, e), s), t = Math.max(Math.min(l, t), a);
        let {
            width: f,
            height: A
        } = p(n, this.size), I = t - g, E = e - h, S = (0, c.fh)((0, c.Ly)({
            top: I,
            left: E,
            bottom: void 0,
            right: void 0
        }, r, l, f, A)), x = d ? (0, c.h1)(S) : _("RESIZE_SOUTH_EAST", S);
        this.setDOMPositions(x), this.setState({
            operationStarted: !0,
            anchorTopOverride: null != x.top,
            anchorLeftOverride: null != x.left
        }, () => {
            m || null == o || o(), null != u && u(i, "MOVE", this.anchor, this.size)
        })
    }
    handleResizeMove(e, t) {
        let {
            props: {
                id: n,
                minSize: i,
                container: {
                    maxX: r,
                    maxY: l,
                    minX: s,
                    minY: a
                },
                onDragStart: o,
                onDrag: d,
                resizeValidation: h = S
            },
            state: {
                operation: g,
                operationStarted: m
            }
        } = this, {
            startX: f,
            startY: A
        } = this.dragState, I = 0, E = 0;
        if (null == g) return;
        switch (e = Math.max(Math.min(r, e), s), t = Math.max(Math.min(l, t), a), g) {
            case "RESIZE_EAST":
            case "RESIZE_SOUTH_EAST":
            case "RESIZE_NORTH_EAST":
                I -= f - e;
                break;
            case "RESIZE_WEST":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_NORTH_WEST":
                I += f - e
        }
        switch (g) {
            case "RESIZE_SOUTH":
            case "RESIZE_SOUTH_WEST":
            case "RESIZE_SOUTH_EAST":
                E -= A - t;
                break;
            case "RESIZE_NORTH":
            case "RESIZE_NORTH_WEST":
            case "RESIZE_NORTH_EAST":
                E += A - t
        }
        let p = h({
                padding: 8,
                borderWidth: 2,
                operation: g,
                computedSize: {
                    width: Math.max(this.dragState.offsetWidth + I, i.width),
                    height: Math.max(this.dragState.offsetHeight + E, i.height)
                },
                originSize: {
                    width: this.dragState.offsetWidth,
                    height: this.dragState.offsetHeight
                },
                containerSpecs: this.props.container,
                orientedPosition: this.dragState.dragOrientedCoords
            }),
            _ = (0, c.af)((0, c.fh)((0, c.Ly)(this.dragState.dragOrientedCoords, r, l, p.width, p.height)), this.dragState.dragOrientedCoords);
        this.setDOMSize({
            ...p,
            fixed: this.size.fixed
        }, !0), (0, u.A)(_, this.dragState.dragOrientedCoords) || (this.dragState.dragOrientedCoords = _, this.setDOMPositions(this.dragState.dragOrientedCoords)), m || (null != o && o(), this.setState({
            operationStarted: !0
        })), null != d && d(n, g, this.anchor, this.size)
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
        let r = t ? () => {
            let {
                onUpdate: t,
                id: n
            } = this.props, i = this.shouldConstrainAutoSizeToExplicitResizeEvents() && "MOVE" === e ? this.requestedSize : this.size;
            t(e, n, this.anchor, i, p(this.ref.current, this.size))
        } : void 0;
        if (t) {
            let {
                maxX: e,
                maxY: t
            } = this.props.container, {
                width: n,
                height: r
            } = p(this.ref.current, this.size), l = (0, c.Ly)(this.anchor, e, t, n, r), s = (0, c.h1)(l);
            this.setDOMPositions(s), this.setDOMSize({
                width: n,
                height: r,
                fixed: this.size.fixed
            }), null != i && i()
        }
        this.setState({
            operation: null,
            operationStarted: !1
        }, () => {
            r?.(), this.pendingConstrainedAutoSizeUpdate && (this.pendingConstrainedAutoSizeUpdate = !1, this.scheduleConstrainedAutoSizeUpdate())
        })
    };
    setDOMPositions(e) {
        let {
            top: t,
            left: n,
            bottom: i,
            right: r
        } = e, {
            current: l
        } = this.ref;
        this.anchor = {
            top: t,
            left: n,
            bottom: i,
            right: r
        }, null != l && (l.style.top = E(t), l.style.bottom = E(i), l.style.left = E(n), l.style.right = E(r))
    }
    setDOMSize(e) {
        let {
            width: t,
            height: n,
            fixed: i
        } = e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], {
            current: l
        } = this.ref;
        t = "auto" !== this.size.width || r ? t : "auto", n = "auto" !== this.size.height || r ? n : "auto", this.size = {
            width: t,
            height: n,
            fixed: i
        }, null != l && (l.style.width = E(t), l.style.height = E(n))
    }
    renderResizeHandles() {
        let {
            resizeY: e,
            resizeX: t,
            active: n
        } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [e ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: a()(g.M$, {
                        [g.An]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
                }), (0, r.jsx)("div", {
                    className: a()(g.Q8, {
                        [g.An]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
                })]
            }) : null, t ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: a()(g.cz, {
                        [g.zC]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
                }), (0, r.jsx)("div", {
                    className: a()(g._J, {
                        [g.zC]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
                })]
            }) : null, t && e ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: a()(g.DS, {
                        [g.Ke]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
                }), (0, r.jsx)("div", {
                    className: a()(g.Bc, {
                        [g.UJ]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
                }), (0, r.jsx)("div", {
                    className: a()(g.rL, {
                        [g.UJ]: n
                    }),
                    onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
                }), (0, r.jsx)("div", {
                    className: a()(g.Rl, {
                        [g.Ke]: n
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
        return null != i ? (0, r.jsx)("div", {
            className: a()({
                [g.Q4]: !0,
                [g.VO]: null != t.bottom && null == t.top,
                [g.ao]: null != t.right && null == t.left
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
                borderWidth: r = 2,
                borderRadius: l = 12
            },
            state: {
                operation: s
            }
        } = this;
        return {
            ...t,
            ...{
                minWidth: n.width,
                minHeight: n.height,
                borderWidth: r,
                padding: i,
                borderRadius: l + r + i,
                zIndex: null != s ? 1e3 : void 0,
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
                locked: r
            },
            size: l,
            anchor: s,
            setLockExtras: a,
            state: {
                anchorTopOverride: o,
                anchorLeftOverride: u
            }
        } = this;
        return e({
            dragStart: this.handleOperationStart,
            dragOperation: this.state.operation,
            anchorTop: null != o ? o : null != s.top,
            anchorLeft: null != u ? u : null != s.left,
            size: l,
            padding: n,
            borderWidth: i,
            setLockExtras: a,
            locked: r,
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
                forceShowExtras: l
            },
            state: {
                operationStarted: s,
                lockExtras: u
            }
        } = this;
        return (0, r.jsxs)(o.animated.div, {
            ref: this.ref,
            style: this.getInlineStyles(),
            className: a()({
                [g.iE]: !0,
                [g.MQ]: s,
                [g.YR]: !n,
                [g.sG]: l && n,
                [g.vP]: u
            }, i),
            onMouseDown: this.handleMouseDown,
            onClick: null != e ? () => e(t) : void 0,
            children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
        })
    }
}