/** Chunk was on 60667 **/
/** chunk id: 420650, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(228524);
var r = n(627968),
    i = n(397927),
    l = n(824744);

function s(e) {
    let {
        volume: t,
        description: n,
        label: s,
        onVolumeChange: a
    } = e;
    return (0, r.jsx)(i.Apm, {
        label: s,
        description: n,
        initialValue: (0, l.M)(t),
        maxValue: 100,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        onValueChange: a
    })
}