/** Chunk was on 20941 **/
/** chunk id: 183924, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(228524);
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(155718),
    i = n(207963),
    s = n(518774);

function o(e) {
    let {
        label: t,
        description: n,
        component: o,
        renderComponent: c
    } = e, u = (0, i.bO)(o);
    return o.type === a.I5.CHECKBOX ? c(o, "label-child") : (0, r.jsxs)(l.eIh, {
        title: t,
        required: o.required,
        error: u,
        children: [null != n && (0, r.jsx)(l.ayl, {
            type: l.tiu.DESCRIPTION,
            className: s.h,
            children: n
        }), c(o, "label-child")]
    })
}