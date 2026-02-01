/** chunk id: 420819, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(621466);

function r(e, t) {
    let n = e.offsetTop,
        r = e.offsetParent;
    for (; null != r;) {
        var i;
        if (r === t || !(0, l.vq)(r, HTMLElement)) break;
        n += null != (i = r.offsetTop) ? i : 0, r = r.offsetParent
    }
    return n
}