/** chunk id: 812141 params = (module,exports,require) **/
e.d(n, {
    p: () => a
});
var i = e(989349),
    l = e.n(i);
let a = t => {
    let n = t > 0 ? l()().add(t, "second").toISOString() : null;
    return {
        muted: !0,
        mute_config: {
            selected_time_window: t,
            end_time: n
        }
    }
}