/** chunk id: 386952 params = (module,exports,require) **/
l.d(t, {
    e: () => a
});
var n = l(627968),
    i = l(64700),
    r = l(503698),
    s = l.n(r),
    u = l(839349);

function a() {
    let [e, t] = i.useState(!1);
    return {
        isTruncated: e,
        ExpandableTextContainer: i.memo(function(e) {
            let {
                showAll: l = !1,
                className: i,
                children: r,
                lineClamp: a = 2
            } = e;
            return (0, n.jsx)("div", {
                ref: e => {
                    null != e && t(e.scrollHeight - e.clientHeight > 1)
                },
                className: s()(u.I, i),
                style: l ? void 0 : {
                    lineClamp: a,
                    WebkitLineClamp: a
                },
                children: r
            })
        })
    }
}