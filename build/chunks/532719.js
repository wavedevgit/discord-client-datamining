/** chunk id: 532719 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    r = n(284009),
    s = n.n(r),
    i = n(397927),
    o = n(155718),
    c = n(207963);

function d(e) {
    let {
        type: t,
        default: n
    } = e, r = (0, c.jc)();
    s()(null != r, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let {
        state: d,
        executeStateUpdate: u
    } = r.useComponentState(e, null != n ? {
        type: t,
        value: n
    } : void 0), m = a.useMemo(() => d?.type === t && d.value, [d, t]), p = r.getParents(e)?.[0], A = p?.type === o.I5.LABEL ? p : void 0;
    return s()(null != A, "CheckboxActionComponent must be a child of a Label component"), (0, l.jsx)(i.Checkbox, {
        label: A.label,
        description: A.description,
        checked: m,
        onChange: e => {
            u({
                type: t,
                value: e
            })
        }
    })
}