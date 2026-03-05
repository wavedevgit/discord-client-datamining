/** chunk id: 881020 params = (module,exports,require) **/
n.d(t, {
    L: () => s
});
var i = n(661191),
    l = n(513272);

function s(e, t) {
    let n = l.A.summaries(e) ?? [],
        s = 0;
    for (let e of n) i.default.compare(e.endId, t) > 0 && (s += 1);
    return s
}