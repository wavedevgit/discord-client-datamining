/** chunk id: 496794, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    a = n(397927),
    r = n(34006);
let l = /[^0-9]/g;
class o extends s.PureComponent {
    _inputRef;
    selectionStart = 0;
    componentDidUpdate(e) {
        let t = this._inputRef;
        e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart)
    }
    setRef = e => {
        let {
            inputRef: t
        } = this.props;
        this._inputRef = e, null != t && t(e)
    };
    handleChange = (e, t) => {
        let {
            value: n,
            onChange: i
        } = this.props, s = this._inputRef;
        if (e === n || null == s || null == n) return;
        let a = (0, r.N)(e),
            o = s.selectionStart;
        a === n && a.length <= 3 && n.includes("/") && !e.includes("/") ? a = a.replace(l, "") : a === n && e.includes("/") && !n.includes("/") && (a += "/"), a.length > e.length && (o += a.length - e.length), this.selectionStart = o, null != i && i(a, t)
    };
    render() {
        return (0, i.jsx)(a.ksK, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef
        })
    }
}
let c = o