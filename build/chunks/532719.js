/** Chunk was on 49559 **/
/** chunk id: 532719, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(228524);
var r = n(627968),
    l = n(64700),
    a = n(284009),
    i = n.n(a),
    o = n(397927),
    s = n(155718),
    c = n(207963);

function u(e) {
    var t;
    let {
        type: n,
        default: a
    } = e, u = (0, c.jc)();
    i()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let {
        state: d,
        executeStateUpdate: p
    } = u.useComponentState(e, null != a ? {
        type: n,
        value: a
    } : void 0), m = l.useMemo(() => (null == d ? void 0 : d.type) === n && d.value, [d, n]), f = null == (t = u.getParents(e)) ? void 0 : t[0], O = (null == f ? void 0 : f.type) === s.I5.LABEL ? f : void 0;
    return i()(null != O, "CheckboxActionComponent must be a child of a Label component"), (0, r.jsx)(o.Checkbox, {
        label: O.label,
        description: O.description,
        checked: m,
        onChange: e => {
            p({
                type: n,
                value: e
            })
        }
    })
}