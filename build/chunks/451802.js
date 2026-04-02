/** chunk id: 451802 params = (module,exports,require) **/
n.d(t, {
    A: () => x,
    E: () => C
});
var i, s = n(627968),
    l = n(64700),
    o = n(503698),
    r = n.n(o),
    a = n(507392),
    d = n.n(a),
    u = n(735438),
    h = n.n(u),
    c = n(397927),
    p = n(235986),
    g = n(350535),
    m = n(985018),
    _ = n(945523),
    C = ((i = {}).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING", i);
let b = {
    DEFAULT: _.__invalid_default,
    RECORDING: _.oz
};
class v extends l.PureComponent {
    _inputId = h().uniqueId("key-recorder-");
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
            _inputRef: i
        } = this;
        if (null == i.current) return;
        let {
            activeElement: s
        } = document;
        "DEFAULT" === t && i.current === s && i.current.blur(), "RECORDING" === t && i.current !== s && i.current.focus()
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
                disabled: i
            } = this.props,
            l = (0, g.dI)(n, !0);
        return e = "RECORDING" === t ? m.intl.string(m.t.bmOri0) : 0 === n.length ? m.intl.string(m.t.co3wt9) : m.intl.string(m.t.idFMvH), (0, s.jsx)(c.vN3, {
            focusTarget: this._inputRef,
            ringTarget: this._containerRef,
            children: (0, s.jsx)("div", {
                onClick: this.handleClick,
                onMouseDown: this.handleMouseDown,
                ref: this._containerRef,
                className: r()(_.Qm, b[t], {
                    [_.Qz]: i
                }),
                children: (0, s.jsxs)(p.A, {
                    className: _.Pp,
                    children: [(0, s.jsx)(p.A.Child, {
                        className: _.bZ,
                        children: (0, s.jsx)("input", {
                            id: this._inputId,
                            placeholder: m.intl.string(m.t.nWRdnl),
                            type: "text",
                            ref: this.setInputRef,
                            readOnly: !0,
                            value: l,
                            disabled: "RECORDING" !== this.props.mode || i
                        })
                    }), (0, s.jsx)("div", {
                        className: _.UD,
                        children: (0, s.jsx)(c.Button, {
                            size: "sm",
                            variant: "RECORDING" === this.props.mode ? "critical-secondary" : "secondary",
                            text: e,
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                            },
                            disabled: i
                        })
                    })]
                })
            })
        })
    }
}
let x = v