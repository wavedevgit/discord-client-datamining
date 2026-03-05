/** chunk id: 103733 params = (module,exports,require) **/
n.d(t, {
    U: () => l
});
var i = n(64700),
    s = n(172218);
let l = function() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, i.useState)(1),
        l = (0, i.useMemo)(() => ({
            threshold: Array.from({
                length: 101
            }, (e, t) => t / 100)
        }), []);
    return {
        visibilityPercentageRef: (0, s.B)(e => {
            n(e.intersectionRatio)
        }, l, e),
        visibilityPercentage: t
    }
}