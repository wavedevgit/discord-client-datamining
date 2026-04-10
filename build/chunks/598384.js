/** chunk id: 598384 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(73153);
let r = "UPDATE_NOT_AVAILABLE";

function a(e) {
    r = e.type
}
class s extends i.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return r
    }
}
let o = new s(l.h, {
    CHECKING_FOR_UPDATES: a,
    UPDATE_NOT_AVAILABLE: a,
    UPDATE_AVAILABLE: a,
    UPDATE_MANUALLY: a,
    UPDATE_ERROR: a,
    UPDATE_DOWNLOADED: a
})