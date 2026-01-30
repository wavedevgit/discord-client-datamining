/** chunk id: 992251, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => l
});
var r = n(627968),
    i = n(64700),
    a = n(460890),
    o = n(834730),
    s = n(406743);

function l(e) {
    let {
        message: t
    } = e, {
        i18n: n
    } = i.useContext(a.VO);
    return (0, r.jsx)("div", {
        className: s.p,
        children: (0, r.jsx)(o.E, {
            variant: "text-md/medium",
            className: s.q,
            children: null != t ? t : n.LISTBOX_EMPTY_STATE
        })
    })
}