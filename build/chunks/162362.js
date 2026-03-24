/** chunk id: 162362 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(773669);

function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        month: "numeric",
        day: "numeric"
    };
    return new Date(e).toLocaleDateString(a.default.locale, t)
}