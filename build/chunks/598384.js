/** chunk id: 598384 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153);
let l = "UPDATE_NOT_AVAILABLE";

function r(e) {
    l = e.type
}
class s extends i.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return l
    }
}
let o = new s(a.h, {
    CHECKING_FOR_UPDATES: r,
    UPDATE_NOT_AVAILABLE: r,
    UPDATE_AVAILABLE: r,
    UPDATE_MANUALLY: r,
    UPDATE_ERROR: r,
    UPDATE_DOWNLOADED: r
})