/** Chunk was on 7869 **/
/** chunk id: 684084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(496092);

function r(e, t, n, r) {
    let {
        scheduled_start_time: i,
        scheduled_end_time: o
    } = e;
    return null == i && null == o ? l.A.deleteGuildEventException(t, n, r) : l.A.updateGuildEventException({
        scheduled_start_time: i,
        scheduled_end_time: o,
        is_canceled: !1
    }, t, n, r)
}