/** Chunk was on 60667 **/
/** chunk id: 706047, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(284009),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    o = n(965957),
    c = n(312671),
    d = n(552122),
    u = n(235079),
    _ = n(985018);

function p() {
    let e = (0, s.bG)([c.A], () => c.A.getSoundpack()),
        t = d.A.useHolidaySoundpack();
    l()(null != t, "should not render this without a holiday soundpack");
    let n = [{
        id: "default",
        value: u.i.CLASSIC,
        label: _.intl.string(_.t.p3Hg5W)
    }, {
        id: "holiday",
        value: t.soundpack,
        label: _.intl.string(t.soundpackLabel)
    }];
    return (0, r.jsx)(a.l6P, {
        selectionMode: "single",
        label: _.intl.string(_.t.fgSHf8),
        onSelectionChange: o.p,
        value: e,
        options: n,
        maxOptionsVisible: n.length
    })
}