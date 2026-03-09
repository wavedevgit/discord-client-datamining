/** chunk id: 451802 params = (module,exports,require) **/
n.d(t, {
    A: () => R,
    E: () => _
});
var s, i = n(627968),
    l = n(64700),
    o = n(503698),
    r = n.n(o),
    a = n(507392),
    d = n.n(a),
    h = n(735438),
    u = n.n(h),
    c = n(397927),
    p = n(235986),
    g = n(350535),
    m = n(985018),
    C = n(379602),
    _ = ((s = {}).DEFAULT = "DEFAULT", s.RECORDING = "RECORDING", s);
let b = {
    DEFAULT: C.__invalid_default,
    RECORDING: C.oz
};
class A extends l.PureComponent {
    _inputId = u().uniqueId("key-recorder-");
    _unregisterNativeRecorder = null;
    _mousedownMode = null;
    _inputRef = l.createRef();
    _containerRef = l.createRef();
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
            _inputRef: s
        } = this;
        if (null == s.current) return;
        let {
            activeElement: i
        } = document;
        "DEFAULT" === t && s.current === i && s.current.blur(), "RECORDING" === t && s.current !== i && s.current.focus()
    }
    setInputRef = e => {
        let {
            registerNativeRecorder: t,
            onChange: n
        } = this.props;
        if (this._inputRef.current = e, this._unregisterNativeRecorder?.(), null != e)
            if (null != t && null != n) try {
                this._unregisterNativeRecorder = t(e.id, n)
            } catch (e) {
                this._unregisterNativeRecorder = null
            } else null != n && (new(d())(e).handleKey = n)
    };
    handleClick = e => {
        e.stopPropagation(), e.preventDefault();
        let {
            onClick: t,
            disableOnClickWhileRecording: n
        } = this.props;
        n && "RECORDING" === this._mousedownMode || t()
    };
    handleMouseDown = () => {
        this._mousedownMode = this.props.mode
    };
    render() {
        let e, {
                mode: t,
                value: n,
                disabled: s
            } = this.props,
            l = (0, g.dI)(n, !0);
        return e = "RECORDING" === t ? m.intl.string(m.t.bmOri0) : 0 === n.length ? m.intl.string(m.t.co3wt9) : m.intl.string(m.t.idFMvH), (0, i.jsx)(c.vN3, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, i.jsx)("div", {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: r()(C.Qm, b[t], {
                    [C.Qz]: s
                }),
                children: (0, i.jsxs)(p.A, {
                    className: C.Pp,
                    children: [(0, i.jsx)(p.A.Child, {
                        className: C.bZ,
                        children: (0, i.jsx)("input", {
                            id: this._inputId,
                            placeholder: m.intl.string(m.t.nWRdnl),
                            type: "text",
                            ref: this.setInputRef,
                            readOnly: !0,
                            value: l,
                            disabled: "RECORDING" !== this.props.mode || s
                        })
                    }), (0, i.jsx)("div", {
                        className: C.UD,
                        children: (0, i.jsx)(c.Button, {
                            size: "sm",
                            variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                            text: e,
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                            },
                            disabled: s
                        })
                    })]
                })
            })
        })
    }
}
let R = A