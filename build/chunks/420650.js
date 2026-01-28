/** Chunk was on 78528 **/
/** chunk id: 420650, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(228524);
var r = n(627968),
    l = n(397927),
    i = n(824744);

function s(e) {
    let {
        volume: t,
        description: n,
        label: s,
        onVolumeChange: a
    } = e;
    return (0, r.jsx)(l.Apm, {
        label: s,
        description: n,
        initialValue: (0, i.M)(t),
        maxValue: 100,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        onValueChange: a
    })
}