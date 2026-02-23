/** chunk id: 195043, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => l
});
var i = n(627968);
n(64700);
var s = n(358776),
    a = n(360619);

function r(e) {
    let {
        setting: t,
        children: n
    } = e, i = (0, a.PH)(), s = (0, a.AC)(t), r = i[t];
    return null != r.predicate && r.predicate?.() !== !0 || s.size > 0 && !s.has(t) ? null : n
}

function l(e) {
    let {
        setting: t,
        children: n
    } = e;
    return (0, s.dk)("AccountProfileCardSetting") ? n : (0, i.jsx)(r, {
        setting: t,
        children: n
    })
}