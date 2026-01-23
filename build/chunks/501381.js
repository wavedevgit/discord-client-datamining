/** Chunk was on 47841 **/
/** chunk id: 501381, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(397927),
    a = n(415951),
    o = n(985018),
    c = n(796333);

function d(e) {
    let {
        guildId: t
    } = e, n = i.useCallback(() => {
        a.A.openMemberVerificationPreviewModal(t)
    }, [t]);
    return (0, r.jsxs)(s.DUT, {
        onClick: n,
        className: c.j,
        children: [(0, r.jsx)(l.EYj, {
            tag: "span",
            variant: "text-sm/semibold",
            color: "text-brand",
            children: o.intl.string(o.t.SKNnqq)
        }), (0, r.jsx)(s.tfB, {
            size: "xs",
            color: "currentColor"
        })]
    })
}