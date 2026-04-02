/** chunk id: 598384 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153);
let a = "UPDATE_NOT_AVAILABLE";

function r(e) {
    a = e.type
}
class s extends i.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return a
    }
}
let o = new s(l.h, {
    CHECKING_FOR_UPDATES: r,
    UPDATE_NOT_AVAILABLE: r,
    UPDATE_AVAILABLE: r,
    UPDATE_MANUALLY: r,
    UPDATE_ERROR: r,
    UPDATE_DOWNLOADED: r
})