/** Chunk was on 78528 **/
/** chunk id: 681677, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var l = n(864145),
    i = n(14400),
    s = n(420650),
    a = n(985018);

function o() {
    let {
        volume: e,
        onVolumeChange: t
    } = (0, i.A)();
    return (0, l.X9)({
        location: "UserSettingsSoundmojiVolume"
    }) ? (0, r.jsx)(s.A, {
        label: a.intl.string(a.t["2JbvKw"]),
        description: a.intl.string(a.t.INenzY),
        volume: e,
        onVolumeChange: t
    }) : null
}