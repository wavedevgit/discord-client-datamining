/** Chunk was on web.js **/
/** chunk id: 318009, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(110259),
    o = n(508382),
    s = n(311907),
    l = n(502939),
    c = n(397927),
    u = n(442433),
    d = n(139286),
    f = n(750506),
    p = n(267102),
    _ = n(544028),
    h = n(712687),
    m = n(203982),
    g = n(652215);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function v() {
    window.getSelection().removeAllRanges()
}
let A = e => {
    let {
        children: t,
        close: n,
        onUnmount: s,
        target: u,
        rect: _,
        position: h,
        align: m,
        impressionName: E,
        impressionProperties: y,
        disableClickTrap: b = !1
    } = e, O = i.useRef(null), A = i.useMemo(() => ({
        current: u
    }), [u]), I = i.useRef(n);
    i.useEffect(() => {
        I.current = n
    }), i.useEffect(() => {
        var e, t, n;
        let r = null == (e = O.current) ? void 0 : e.elementRef.current;
        if (null == r) return;
        let i = e => {
            var t;
            let n = e.target,
                r = null == (t = O.current) ? void 0 : t.elementRef.current;
            null != r && (0, c.HG$)(r, n) || (v(), I.current())
        };
        return null == (t = r.ownerDocument) || t.addEventListener("click", i, !0), null == (n = r.ownerDocument) || n.addEventListener("contextmenu", i, !0), () => {
            var e, t;
            null == (e = r.ownerDocument) || e.removeEventListener("click", i, !0), null == (t = r.ownerDocument) || t.removeEventListener("contextmenu", i, !0)
        }
    }, []);
    let S = i.useRef(s);
    i.useEffect(() => {
        S.current = s
    }), i.useEffect(() => () => {
        var e;
        return null == (e = S.current) ? void 0 : e.call(S)
    }, []), i.useLayoutEffect(() => {
        var e;
        null == (e = O.current) || e.updatePosition()
    }), (0, d.A)({
        type: a.ImpressionTypes.MENU,
        name: E,
        properties: y
    });
    let T = (0, p.aL)(),
        C = i.useCallback(() => {
            T.dispatch(g.jej.POPOUT_SHOW)
        }, [T]),
        N = i.useCallback(() => {
            T.dispatch(g.jej.POPOUT_HIDE)
        }, [T]),
        w = (0, l.D)("ContextMenu"),
        R = u.ownerDocument;
    return w ? (0, r.jsx)(o.Ow, {
        spacing: 0,
        open: !0,
        ownerDocument: R,
        onOpenChange: e => {
            e ? C() : (N(), v(), I.current())
        },
        overrideTargetRect: _,
        placement: (0, o.Pv)(null != h ? h : "right", null != m ? m : "top"),
        blockPointerEvents: !b,
        crossAccessFlip: !1,
        renderLayer: e => {
            let {
                update: n
            } = e;
            return t({
                position: h
            }, n)
        },
        children: () => null
    }) : (0, r.jsx)(f.nE, {
        onMount: C,
        onUnmount: N,
        targetRef: A,
        overrideTargetRect: _,
        position: null != h ? h : "right",
        align: null != m ? m : "top",
        autoInvert: !0,
        ref: O,
        nudgeAlignIntoViewport: !0,
        clickTrap: !b,
        children: t
    })
};
class I extends i.PureComponent {
    componentDidMount() {
        let {
            renderLazy: e,
            renderWindow: t
        } = this.props;
        if (t.addEventListener("resize", this.closeResize, !0), m._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
            let t = setTimeout(() => {
                this.setState({
                    render: () => (0, r.jsx)(c.XSw, {})
                })
            }, 300);
            e().then(e => {
                this.setState({
                    render: e
                }), clearTimeout(t)
            })
        }
    }
    componentDidUpdate(e) {
        let {
            isOpen: t
        } = this.props;
        if (!t && e.isOpen) {
            var n, r;
            null == (r = e.config) || null == (n = r.onClose) || n.call(r)
        }
    }
    componentWillUnmount() {
        let {
            renderWindow: e
        } = this.props;
        e.removeEventListener("resize", this.closeResize, !0), m._.unsubscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
    }
    render() {
        var e, t, n;
        let {
            appContext: i,
            target: a,
            isOpen: o,
            theme: s,
            config: l,
            rect: c,
            renderWindow: u
        } = this.props, d = null != (e = this.state.render) ? e : this.props.render;
        return o && null != c && null != l && null != a && null != d && l.context === i && (null == (n = a.ownerDocument) ? void 0 : n.defaultView) === u ? (0, r.jsx)(A, {
            target: a,
            rect: c,
            close: this.close,
            onUnmount: l.onClose,
            align: l.align,
            position: l.position,
            impressionName: l.impressionName,
            impressionProperties: l.impressionProperties,
            disableClickTrap: null != (t = l.disableClickTrap) && t,
            children: (e, t) => {
                let {
                    position: n
                } = e;
                return d({
                    position: n,
                    theme: s,
                    onHeightUpdate: t,
                    config: l,
                    target: a,
                    context: i
                })
            }
        }) : null
    }
    constructor(...e) {
        super(...e), E(this, "state", {
            render: void 0
        }), E(this, "closeResize", e => {
            let {
                renderWindow: t
            } = this.props;
            e.target === t && this.close()
        }), E(this, "close", () => {
            let {
                isOpen: e,
                closeContextMenu: t
            } = this.props;
            e && t()
        })
    }
}

function S() {
    let {
        contextMenu: e,
        version: t,
        isOpen: n
    } = (0, s.cf)([h.A], () => ({
        contextMenu: h.A.getContextMenu(),
        version: h.A.version,
        isOpen: h.A.isOpen()
    })), a = (0, s.bG)([_.A], () => _.A.theme), {
        appContext: o,
        renderWindow: l
    } = i.useContext(p.Ay);
    return (0, r.jsx)(I, O(y({
        appContext: o,
        renderWindow: l
    }, e), {
        isOpen: n,
        theme: a,
        closeContextMenu: u.Z_
    }), t)
}