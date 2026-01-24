/** Chunk was on 35894 **/
/** chunk id: 809617, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    o = n(159083),
    a = n(189552),
    s = n(636670),
    c = n(985018),
    u = n(6561);

function d(e) {
    let {
        searchState: t
    } = e, n = l.useMemo(() => ({
        [a.IY.LOADING]: null,
        [a.IY.SUCCESS_STILL_INDEXING]: {
            icon: (0, r.jsx)(o.A, {}),
            message: c.intl.string(c.t.AXPbZr)
        },
        [a.IY.SUCCESS_EMPTY]: {
            icon: (0, r.jsx)(s.A, {}),
            message: c.intl.string(c.t.wdyR52)
        },
        [a.IY.SUCCESS_FULL]: null
    }), [])[t];
    return null == n ? null : (0, r.jsxs)("div", {
        className: u.p,
        children: [(0, r.jsx)("div", {
            className: u.__invalid_noResultsIconContainer,
            children: n.icon
        }), (0, r.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: n.message
        })]
    })
}