/** chunk id: 589939 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(397927),
    r = n(350246);
let o = function(e) {
    let {
        allowClicks: t = !1,
        children: n,
        withBorder: i = !1
    } = e;
    return (0, a.jsx)(l.M1G, {
        children: (0, a.jsx)(l.ZpM, {
            className: s()(r.Rx, {
                [r.aK]: i
            }),
            outline: i,
            children: (0, a.jsx)("div", {
                className: r.AZ,
                onClickCapture: t ? void 0 : function(e) {
                    e.stopPropagation()
                },
                children: n
            })
        })
    })
}