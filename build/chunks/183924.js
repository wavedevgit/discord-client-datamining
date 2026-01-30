/** Chunk was on 49559 **/
/** chunk id: 183924, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(228524);
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(155718),
    i = n(207963),
    o = n(518774);

function s(e) {
    let {
        label: t,
        description: n,
        component: s,
        renderComponent: c
    } = e, u = (0, i.bO)(s);
    return s.type === a.I5.CHECKBOX ? c(s, "label-child") : (0, r.jsxs)(l.eIh, {
        title: t,
        required: s.required,
        error: u,
        children: [null != n && (0, r.jsx)(l.ayl, {
            type: l.tiu.DESCRIPTION,
            className: o.h,
            children: n
        }), c(s, "label-child")]
    })
}