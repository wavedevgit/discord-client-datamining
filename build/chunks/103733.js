/** chunk id: 103733, original params: e,t,n (module,exports,require) **/
n.d(t, {
    U: () => a
});
var i = n(64700),
    s = n(172218);
let a = function() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, n] = (0, i.useState)(1),
        a = (0, i.useMemo)(() => ({
            threshold: Array.from({
                length: 101
            }, (e, t) => t / 100)
        }), []);
    return {
        visibilityPercentageRef: (0, s.B)(e => {
            n(e.intersectionRatio)
        }, a, e),
        visibilityPercentage: t
    }
}