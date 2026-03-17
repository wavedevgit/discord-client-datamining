/** chunk id: 132841 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(830382),
    o = n(67480),
    d = n(985018);
class h extends s.Component {
    componentDidMount() {
        let {
            applicationId: e,
            skus: t,
            selectedSkuId: n,
            onChange: i
        } = this.props;
        null == t || 0 === t.length ? (0, a.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id)
    }
    componentDidUpdate() {
        let {
            skus: e,
            selectedSkuId: t,
            onChange: n
        } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id)
    }
    handleChange = e => {
        this.props.onChange(e)
    };
    render() {
        let {
            skus: e,
            selectedSkuId: t,
            label: n
        } = this.props, s = null != e && 0 === e.length;
        return (0, i.jsx)(r.l6P, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map(e => ({
                id: e.id,
                label: e.name,
                value: e.id
            })) : [],
            placeholder: s ? d.intl.string(d.t.hKcgP5) : d.intl.string(d.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: s
        })
    }
}
let u = l.Ay.connectStores([o.A], e => {
    let {
        applicationId: t
    } = e;
    return {
        skus: o.A.getForApplication(t)
    }
})(h)