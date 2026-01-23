/** Chunk was on 36054 **/
/** chunk id: 589939, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    i = n(397927),
    s = n(350246);
let o = function(e) {
    let {
        allowClicks: t = !1,
        children: n,
        withBorder: l = !1
    } = e;
    return (0, a.jsx)(i.M1G, {
        children: (0, a.jsx)(i.ZpM, {
            className: r()(s.Rx, {
                [s.aK]: l
            }),
            outline: l,
            children: (0, a.jsx)("div", {
                className: s.AZ,
                onClickCapture: t ? void 0 : function(e) {
                    e.stopPropagation()
                },
                children: n
            })
        })
    })
}