/** chunk id: 496794 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(34006);
let a = /[^0-9]/g;
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
        let l = (0, r.N)(e),
            o = s.selectionStart;
        l === n && l.length <= 3 && n.includes("/") && !e.includes("/") ? l = l.replace(a, "") : l === n && e.includes("/") && !n.includes("/") && (l += "/"), l.length > e.length && (o += l.length - e.length), this.selectionStart = o, null != i && i(l, t)
    };
    render() {
        return (0, i.jsx)(l.ksK, {
            ...this.props,
            inputMode: "numeric",
            onChange: this.handleChange,
            inputRef: this.setRef
        })
    }
}
let d = o