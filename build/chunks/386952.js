/** chunk id: 386952 params = (module,exports,require) **/
a.d(t, {
    e: () => c
});
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(167196);

function c() {
    let [e, t] = r.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: r.memo(function(e) {
            let {
                showAll: a = !1,
                className: r,
                children: l,
                lineClamp: c = 2
            } = e;
            return (0, n.jsx)("div", {
                ref: e => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1)
                },
                className: i()(s.I, r),
                style: a ? void 0 : {
                    lineClamp: c,
                    WebkitLineClamp: c
                },
                children: l
            })
        })
    }
}