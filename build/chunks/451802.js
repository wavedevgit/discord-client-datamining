/** Chunk was on 12618 **/
/** chunk id: 451802, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v,
    E: () => _
}), n(896048);
var r, i = n(627968),
    s = n(64700),
    o = n(503698),
    l = n.n(o),
    a = n(507392),
    c = n.n(a),
    d = n(735438),
    u = n.n(d),
    h = n(397927),
    p = n(235986),
    b = n(350535),
    m = n(985018),
    g = n(181204);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
var _ = ((r = {}).DEFAULT = "DEFAULT", r.RECORDING = "RECORDING", r);
let O = {
    DEFAULT: g.__invalid_default,
    RECORDING: g.oz
};
class C extends s.PureComponent {
    componentWillUnmount() {
        null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
    }
    componentDidUpdate(e) {
        let {
            mode: t
        } = this.props, {
            mode: n
        } = e;
        if (n === t) return;
        let {
            _inputRef: r
        } = this;
        if (null == r.current) return;
        let {
            activeElement: i
        } = document;
        "DEFAULT" === t && r.current === i && r.current.blur(), "RECORDING" === t && r.current !== i && r.current.focus()
    }
    render() {
        let e, {
                mode: t,
                value: n,
                disabled: r
            } = this.props,
            s = (0, b.dI)(n, !0);
        return e = "RECORDING" === t ? m.intl.string(m.t.bmOri0) : 0 === n.length ? m.intl.string(m.t.co3wt9) : m.intl.string(m.t.idFMvH), (0, i.jsx)(h.vN3, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, i.jsx)("div", {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: l()(g.Qm, O[t], {
                    [g.Qz]: r
                }),
                children: (0, i.jsxs)(p.A, {
                    className: g.Pp,
                    children: [(0, i.jsx)(p.A.Child, {
                        className: g.bZ,
                        children: (0, i.jsx)("input", {
                            id: this._inputId,
                            placeholder: m.intl.string(m.t.nWRdnl),
                            type: "text",
                            ref: this.setInputRef,
                            readOnly: !0,
                            value: s,
                            disabled: "RECORDING" !== this.props.mode || r
                        })
                    }), (0, i.jsx)("div", {
                        className: g.UD,
                        children: (0, i.jsx)(h.Button, {
                            size: "sm",
                            variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                            text: e,
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                            },
                            disabled: r
                        })
                    })]
                })
            })
        })
    }
    constructor(...e) {
        super(...e), f(this, "_inputId", u().uniqueId("key-recorder-")), f(this, "_unregisterNativeRecorder", null), f(this, "_mousedownMode", null), f(this, "_inputRef", s.createRef()), f(this, "_containerRef", s.createRef()), f(this, "setInputRef", e => {
            var t;
            let {
                registerNativeRecorder: n,
                onChange: r
            } = this.props;
            if (this._inputRef.current = e, null == (t = this._unregisterNativeRecorder) || t.call(this), null != e)
                if (null != n && null != r) try {
                    this._unregisterNativeRecorder = n(e.id, r)
                } catch (e) {
                    this._unregisterNativeRecorder = null
                } else null != r && (new(c())(e).handleKey = r)
        }), f(this, "handleClick", e => {
            e.stopPropagation(), e.preventDefault();
            let {
                onClick: t,
                disableOnClickWhileRecording: n
            } = this.props;
            n && "RECORDING" === this._mousedownMode || t()
        }), f(this, "handleMouseDown", () => {
            this._mousedownMode = this.props.mode
        })
    }
}
let v = C