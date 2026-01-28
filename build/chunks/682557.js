/** Chunk was on 78528 **/
/** chunk id: 682557, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(283354);
let s = e => {
    let {
        entry: t,
        hideEditButton: n,
        children: s,
        onRequestOpen: a,
        onRequestClose: o,
        targetElementRef: c
    } = e;
    return (0, r.jsx)(l.YNO, {
        targetElementRef: c,
        onRequestOpen: a,
        onRequestClose: o,
        animation: l.YNO.Animation.NONE,
        position: "bottom",
        spacing: 4,
        align: "right",
        renderPopout: e => {
            let {
                closePopout: l
            } = e;
            return (0, r.jsx)(i.default, {
                entry: t,
                closePopout: l,
                hideEditButton: n
            })
        },
        children: s
    })
}