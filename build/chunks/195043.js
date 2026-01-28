/** Chunk was on 5606 **/
/** chunk id: 195043, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => a
});
var r = n(627968);
n(64700);
var i = n(358776),
    l = n(360619);

function s(e) {
    var t;
    let {
        setting: n,
        children: r
    } = e, i = (0, l.PH)(), s = (0, l.AC)(n), a = i[n];
    return null != a.predicate && (null == (t = a.predicate) ? void 0 : t.call(a)) !== !0 || s.size > 0 && !s.has(n) ? null : r
}

function a(e) {
    let {
        setting: t,
        children: n
    } = e;
    return (0, i.dk)("AccountProfileCardSetting") ? n : (0, r.jsx)(s, {
        setting: t,
        children: n
    })
}