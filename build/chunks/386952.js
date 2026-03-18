/** chunk id: 386952 params = (module,exports,require) **/
a.d(t, {
    e: () => c
});
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(968338);

function c() {
    let [e, t] = l.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: l.memo(function(e) {
            let {
                showAll: a = !1,
                className: l,
                children: r,
                lineClamp: c = 2
            } = e;
            return (0, n.jsx)("div", {
                ref: e => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1)
                },
                className: i()(s.I, l),
                style: a ? void 0 : {
                    lineClamp: c,
                    WebkitLineClamp: c
                },
                children: r
            })
        })
    }
}